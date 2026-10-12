// OMM Website Build Standard — CI enforcement (runs AFTER `next build`).
//
// MASTER COPY: scripts/site-standard-check.mjs in the OMM repo
// (openmindmarketing1/open-mind-marketing). Each OMM-built site repo carries a
// copy; update the master first, then copy it out. Bump STANDARD_VERSION on
// every change so an out-of-date copy is visible in its build log.
//
// Static half of docs/playbooks/website-build-standard.md. Every rule here is
// a defect that shipped on an OMM-built site. Checks run against the BUILT
// artifacts (.next manifests + the prerendered sitemap), so what's verified
// is what deploys — not a re-parse of source intent.
//
// Rules enforced (each failure names its rule):
//   no-root-canonical        root layout must not declare alternates.canonical
//   metadata-base-host       metadataBase origin == the origin the site
//                            actually serves from (live probe; skipped with a
//                            warning when the network is unavailable)
//   sitemap-resolves         every sitemap URL is on the canonical host, maps
//                            to a real app route, and is not itself redirected
//   redirect-destinations    every internal redirect destination resolves to
//                            a real route (or chains to another redirect)
//   robots-assets            robots must never disallow anything Google needs
//                            to render a page or index its images: /_next
//                            (incl. /_next/image and /_next/static), CSS, JS,
//                            image files, WordPress asset folders, or "/"
//
// Page-content rules (read every prerendered page the sitemap lists — every
// prerendered page when there is no sitemap; noindex pages skipped). They
// report as WARNINGS until Greg switches them to blocking — move a rule out
// of WARN_ONLY_RULES once CS and openmindmarketing.ai build clean on it:
//   one-business-identity    every business entry in the JSON-LD (anything
//                            with an address or phone) carries the same
//                            address, phone and name — no per-city offices
//   duplicate-titles         no two indexable pages share a <title>
//                            (shared meta descriptions are reported too)
//   missing-alt              every <img> has an alt attribute (alt="" is fine
//                            for decorative images)
//   broken-images            every image a page loads exists: local files
//                            in public/ or .next/static, remote ones answer
//                            2xx/3xx (network failures warn, never fail)
//   raw-markdown             no markdown left as visible text ("# ", "**",
//                            "![", "](http", a "!" before a link) and no words run
//                            together across a line break ("After.Always")
//   sitemap-lastmod          sitemap dates are real: not half or more on one
//                            build minute
//
// Exit 1 on any violation. Network-dependent checks fail OPEN (warn) so an
// offline build isn't blocked; source/artifact checks fail CLOSED.
//
// --advisory: every rule EXCEPT robots-assets reports as a warning, and a
// missing build artifact warns instead of crashing. For a site still being
// brought up to the standard; drop the flag once its build log is clean.
// robots-assets always fails the build.

import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

const STANDARD_VERSION = "2026-10-12.3";
const ALWAYS_BLOCKING = new Set(["robots-assets"]);
// New rules start as warnings (Greg, 2026-10-12): blocking once CS and OMM
// build clean on them.
const WARN_ONLY_RULES = new Set([
  "one-business-identity",
  "duplicate-titles",
  "missing-alt",
  "broken-images",
  "raw-markdown",
  "sitemap-lastmod",
]);
const advisory = process.argv.includes("--advisory");

const root = process.cwd();
const failures = [];
const warnings = [];
const fail = (rule, detail) =>
  ((advisory && !ALWAYS_BLOCKING.has(rule)) || WARN_ONLY_RULES.has(rule) ? warnings : failures).push(
    `[${rule}] ${detail}`
  );
const warn = (rule, detail) => warnings.push(`[${rule}] ${detail}`);
console.log(`site-standard: version ${STANDARD_VERSION}${advisory ? " (advisory)" : ""}`);

function stripComments(src) {
  // Line comments only when // starts a line or follows whitespace — a bare
  // [^\n]* strip would eat the tail of every https:// URL literal.
  return src.replace(/\/\*[\s\S]*?\*\//g, "").replace(/(^|\s)\/\/[^\n]*/g, "$1");
}

// ── RULE robots-assets ───────────────────────────────────────────────────────
// Google must fetch a page's images, CSS and JS to render and index it. CS and
// openmindmarketing.ai both shipped `Disallow: /_next/image` (Aug–Oct 2026),
// which hid every optimized image from Google. Source-only, so it runs before
// any build artifact is read and always fails the build.
const RENDER_ASSET_RE = /^\/(_next|wp-includes|wp-content)(\/|$)/;
const ASSET_FILE_RE = /\.(css|js|mjs|jpe?g|png|gif|webp|avif|svg|ico|woff2?)$/;
function isRenderAssetDisallow(raw) {
  const p = raw.trim().replace(/\$$/, "").replace(/\*+$/, "").replace(/\/+$/, "").toLowerCase();
  if (p === "") return raw.trim() === "/"; // "Disallow: /" blocks everything
  return RENDER_ASSET_RE.test(p) || ASSET_FILE_RE.test(p);
}
{
  const robotsPathTs = join(root, "src/app/robots.ts");
  const robotsPathTxt = join(root, "public/robots.txt");
  const robotsSrc = existsSync(robotsPathTs)
    ? stripComments(readFileSync(robotsPathTs, "utf8"))
    : existsSync(robotsPathTxt)
      ? readFileSync(robotsPathTxt, "utf8").replace(/#.*$/gm, "")
      : null;
  if (robotsSrc === null) {
    warn("robots-assets", "no src/app/robots.ts or public/robots.txt found");
  } else {
    // Collect disallow values from either format: robots.ts array strings after
    // a `disallow` key, or `Disallow:` lines in a plain robots.txt.
    const disallows = [
      ...[...robotsSrc.matchAll(/disallow\s*:\s*\[([^\]]*)\]/gi)].flatMap((m) =>
        [...m[1].matchAll(/["']([^"']+)["']/g)].map((x) => x[1])
      ),
      ...[...robotsSrc.matchAll(/disallow\s*:\s*["']([^"']+)["']/gi)].map((m) => m[1]),
      ...[...robotsSrc.matchAll(/^\s*Disallow:\s*(\S+)\s*$/gim)].map((m) => m[1]),
    ];
    for (const d of disallows) {
      if (isRenderAssetDisallow(d)) {
        fail(
          "robots-assets",
          `robots disallows ${d} — Google must load images, CSS and JS to render and index pages. Remove it (an /_next/image URL showing up in Search Console is harmless).`
        );
      }
    }
  }
}

// Artifact-based rules. In --advisory mode a missing artifact (or any crash
// here) is a warning, never a broken deploy.
try {
  // ── Load artifacts ───────────────────────────────────────────────────────────

  const layoutSrc = readFileSync(join(root, "src/app/layout.tsx"), "utf8");
  const layoutCode = stripComments(layoutSrc);

  const routesManifest = JSON.parse(readFileSync(join(root, ".next/routes-manifest.json"), "utf8"));
  const appRoutes = Object.values(
    JSON.parse(readFileSync(join(root, ".next/app-path-routes-manifest.json"), "utf8"))
  );

  const sitemapBody = join(root, ".next/server/app/sitemap.xml.body");
  const sitemapXml = existsSync(sitemapBody) ? readFileSync(sitemapBody, "utf8") : null;

  // Route pattern → regex ( [slug] = one segment, [...s] = 1+, [[...s]] = 0+ ).
  function routeRegex(pattern) {
    let re = pattern
      .replace(/[.*+?^${}()|\\]/g, (c) => `\\${c}`)
      .replace(/\/\[\[\\\.\\\.\\\.[^\]]+\]\]/g, "(?:/.+)?")
      .replace(/\[\\\.\\\.\\\.[^\]]+\]/g, ".+")
      .replace(/\[[^\]]+\]/g, "[^/]+");
    return new RegExp(`^${re}/?$`);
  }
  const routeMatchers = appRoutes.map((r) => routeRegex(r));
  const matchesRoute = (path) => routeMatchers.some((re) => re.test(path === "" ? "/" : path));

  const redirects = routesManifest.redirects ?? [];
  // Redirects carrying `has`/`missing` conditions (host redirects like
  // www→apex, header/query-conditioned rules) match on MORE than the path —
  // treating them as path matches would flag every sitemap URL as redirected.
  // Only unconditional path redirects participate in path matching.
  const redirectRegexes = redirects
    .filter((r) => !r.internal && !r.has && !r.missing)
    .map((r) => ({ ...r, re: new RegExp(r.regex) }));
  const matchesRedirect = (path) => redirectRegexes.find((r) => r.re.test(path));

  // ── metadataBase / configured origin ─────────────────────────────────────────

  const mbMatch =
    layoutCode.match(/metadataBase:\s*new URL\(\s*["']([^"']+)["']\s*\)/) ??
    layoutCode.match(/SITE_URL\s*=\s*process\.env\.\w+\s*\?\?\s*["']([^"']+)["']/);
  const configuredOrigin = mbMatch ? new URL(mbMatch[1]).origin : null;
  if (!configuredOrigin) {
    fail("metadata-base-host", "could not find metadataBase (or SITE_URL fallback) in src/app/layout.tsx");
  }

  // ── RULE no-root-canonical ───────────────────────────────────────────────────
  // A root-layout canonical marks every page that forgets its own as a duplicate
  // of the homepage (de-indexed OMM's 19 tool pages, Aug 2026).
  if (/alternates\s*:\s*\{[^}]*canonical/s.test(layoutCode)) {
    fail(
      "no-root-canonical",
      "src/app/layout.tsx declares alternates.canonical — a root-level canonical is inherited by every page without its own and marks them duplicates of the homepage. Move it to app/page.tsx and give every page a self-canonical."
    );
  }

  // ── RULE metadata-base-host (live probe; fail-open on network) ───────────────
  if (configuredOrigin) {
    try {
      const res = await fetch(configuredOrigin, { redirect: "follow", signal: AbortSignal.timeout(10_000) });
      const finalOrigin = new URL(res.url).origin;
      if (finalOrigin !== configuredOrigin) {
        fail(
          "metadata-base-host",
          `metadataBase is ${configuredOrigin} but that origin serves from ${finalOrigin} — canonicals will point at a host that redirects away (the exact OMM apex/www defect). Set metadataBase to the serving origin.`
        );
      }
    } catch {
      warn("metadata-base-host", `network unavailable — could not verify ${configuredOrigin} serves without a host redirect`);
    }
  }

  // ── RULE sitemap-resolves ────────────────────────────────────────────────────
  if (!sitemapXml) {
    warn("sitemap-resolves", ".next/server/app/sitemap.xml.body not found — sitemap not prerendered? Check skipped.");
  } else {
    const locs = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    if (locs.length === 0) fail("sitemap-resolves", "sitemap.xml contains zero <loc> entries");
    for (const loc of locs) {
      let u;
      try { u = new URL(loc); } catch { fail("sitemap-resolves", `unparseable sitemap URL: ${loc}`); continue; }
      if (configuredOrigin && u.origin !== configuredOrigin) {
        fail("sitemap-resolves", `${loc} is not on the canonical origin ${configuredOrigin}`);
        continue;
      }
      const path = u.pathname === "" ? "/" : u.pathname;
      const red = matchesRedirect(path);
      if (red) {
        fail("sitemap-resolves", `${path} is listed in the sitemap but redirects to ${red.destination} — a sitemap must list final URLs only`);
        continue;
      }
      if (!matchesRoute(path)) {
        fail("sitemap-resolves", `${path} is listed in the sitemap but matches no app route — it will 404`);
      }
    }
    console.log(`site-standard: sitemap-resolves checked ${locs.length} URLs`);
  }

  // ── RULE redirect-destinations ───────────────────────────────────────────────
  // A redirect into a 404 manufactures soft 404s at scale (the /services hub
  // that never existed, Aug 2026).
  let redirectsChecked = 0;
  for (const r of redirectRegexes) {
    const dest = r.destination ?? "";
    if (!dest.startsWith("/")) continue; // external — trust, but list
    // Substitute route params so the destination becomes a concrete test path.
    const testPath = dest.replace(/:[A-Za-z0-9_]+\*?/g, "x").replace(/\/+$/, "") || "/";
    redirectsChecked++;
    if (matchesRoute(testPath)) continue;
    const chained = matchesRedirect(testPath);
    if (chained) continue; // redirect chain — lands somewhere real eventually
    fail(
      "redirect-destinations",
      `redirect ${r.source} -> ${dest}: destination matches no app route and no other redirect — it 404s`
    );
  }
  console.log(`site-standard: redirect-destinations checked ${redirectsChecked} internal redirects`);
} catch (err) {
  if (!advisory) throw err;
  warn("artifacts", `artifact checks skipped: ${err instanceof Error ? err.message : err}`);
}

// ── Page-content rules ───────────────────────────────────────────────────────
// Read every prerendered page. Pages rendered only on request (e.g. a blog
// read from a database at request time) are not here — the weekly OMM site
// audit covers those.
const MAX_LISTED = 12; // per rule, so a build log stays readable
function reportList(rule, items, summary) {
  if (items.length === 0) return;
  const shown = items.slice(0, MAX_LISTED).map((i) => `\n      - ${i}`).join("");
  const more = items.length > MAX_LISTED ? `\n      … and ${items.length - MAX_LISTED} more` : "";
  fail(rule, `${summary}${shown}${more}`);
}

function decodeEntities(s) {
  return s
    .replace(/&#x([0-9a-f]+);/gi, (_m, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_m, d) => String.fromCodePoint(Number(d)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&");
}
function attr(tag, name) {
  const m = tag.match(new RegExp(`\\s${name}\\s*=\\s*("([^"]*)"|'([^']*)')`, "i"));
  return m ? decodeEntities(m[2] ?? m[3] ?? "") : null;
}

function listPages(dir, base = "") {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const rel = base ? `${base}/${entry.name}` : entry.name;
    if (entry.isDirectory()) out.push(...listPages(join(dir, entry.name), rel));
    else if (entry.name.endsWith(".html")) out.push(rel);
  }
  return out;
}

// A <br> joins its neighbours with nothing in extracted text — the way
// "Before. After.<br/>Always intentional." read as "After.Always" on CS.
const BR = "\u0000";
const RUN_TOGETHER_RE = new RegExp(`[a-z]{2,}[.!?]${BR}[A-Z][a-z]`);

try {
  const appDir = join(root, ".next/server/app");
  const pageFiles = existsSync(appDir)
    ? listPages(appDir).filter((f) => !/(^|\/)(_not-found|404|500)\.html$/.test(f))
    : [];
  if (pageFiles.length === 0) {
    warn("page-content", "no prerendered pages found in .next/server/app — page-content rules skipped");
  }

  // Judge the pages the site tells Google about: the sitemap's paths when
  // there is one (app shells like /account or /admin are not content), else
  // every prerendered page; noindex pages are dropped below either way.
  const sitemapBodyPath = join(root, ".next/server/app/sitemap.xml.body");
  const sitemapPaths = existsSync(sitemapBodyPath)
    ? new Set(
        [...readFileSync(sitemapBodyPath, "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => {
          try {
            return new URL(m[1]).pathname.replace(/\/$/, "") || "/";
          } catch {
            return m[1];
          }
        })
      )
    : null;
  const pages = pageFiles
    .map((f) => {
      const html = readFileSync(join(appDir, f), "utf8");
      const route = ("/" + f.replace(/\.html$/, "")).replace(/\/index$/, "") || "/";
      return { route, html };
    })
    .filter((p) => !sitemapPaths || sitemapPaths.has(p.route));

  const byTitle = new Map();
  const byDescription = new Map();
  const missingAlt = [];
  const imageRefs = new Map(); // src -> first route that loads it
  const rawMarkdown = [];
  const identity = { address: new Map(), telephone: new Map(), name: new Map() };
  const addTo = (map, key, route) => {
    if (!key) return;
    if (!map.has(key)) map.set(key, new Set());
    map.get(key).add(route);
  };

  for (const { route, html } of pages) {
    const robotsMeta = (html.match(/<meta[^>]+name="robots"[^>]*>/i) ?? [""])[0];
    const indexable = !/noindex/i.test(robotsMeta);

    // Titles + descriptions
    const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const title = titleMatch ? decodeEntities(titleMatch[1]).trim() : "";
    const descTag = (html.match(/<meta[^>]+name="description"[^>]*>/i) ?? [null])[0];
    const description = descTag ? (attr(descTag, "content") ?? "").trim() : "";
    if (indexable) {
      addTo(byTitle, title || "(no title)", route);
      addTo(byDescription, description, route);
    }

    // JSON-LD business identity: anything with an address or a phone.
    for (const m of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
      let data;
      try {
        data = JSON.parse(m[1]);
      } catch {
        continue;
      }
      const visit = (node) => {
        if (Array.isArray(node)) return node.forEach(visit);
        if (!node || typeof node !== "object") return;
        const types = [].concat(node["@type"] ?? []).map(String);
        if ((node.address || node.telephone) && !types.includes("PostalAddress")) {
          const a = node.address;
          const addr =
            typeof a === "string"
              ? a
              : a && typeof a === "object" && !Array.isArray(a)
                ? [a.streetAddress, a.addressLocality, a.addressRegion, a.postalCode].filter(Boolean).join(", ")
                : "";
          addTo(identity.address, addr.replace(/\s+/g, " ").trim().toLowerCase(), route);
          addTo(identity.telephone, String(node.telephone ?? "").replace(/\D/g, "").replace(/^1(?=\d{10}$)/, ""), route);
          addTo(identity.name, String(node.name ?? "").trim(), route);
        }
        for (const v of Object.values(node)) if (v && typeof v === "object") visit(v);
      };
      visit(data);
    }

    // Images: alt + every src a page loads
    const body = html.replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<style[\s\S]*?<\/style>/gi, "");
    for (const tag of body.match(/<img\b[^>]*>/gi) ?? []) {
      const src = attr(tag, "src") ?? "";
      if (!/\salt\s*=/i.test(tag)) missingAlt.push(`${route}: ${src.slice(0, 100) || "(no src)"}`);
      if (src && !src.startsWith("data:") && !imageRefs.has(src)) imageRefs.set(src, route);
    }

    // Raw markdown + run-together words in visible text, one text node per
    // line (tags become newlines; <br> becomes the BR marker).
    const visible = decodeEntities(
      body
        .replace(/<noscript[\s\S]*?<\/noscript>/gi, "")
        .replace(/<br\s*\/?>/gi, BR)
        .replace(/<\/?(span|em|strong|b|i|a)\b[^>]*>/gi, "")
        .replace(/<[^>]+>/g, "\n")
    );
    const flagged = new Set();
    // ![alt](url) converted as a link leaves "!" right before the <a>.
    const strayBang = body.match(/(?:^|[>\s])!\s*<a\b[^>]*>([^<]{0,60})/);
    if (strayBang) {
      flagged.add("stray");
      rawMarkdown.push(`${route}: stray "!" before a link (a markdown image turned into a link) — "!${strayBang[1]}"`);
    }
    for (const raw of visible.split("\n")) {
      const line = raw.trim();
      if (!line) continue;
      let why = null;
      if (/^#{1,6}\s+\S/.test(line)) why = "markdown heading";
      else if (/!\[[^\]]*\]\(|\]\(https?:\/\//.test(line)) why = "markdown image/link";
      else if (/\*\*[^*\s][^*]*\*\*/.test(line)) why = "markdown bold";
      else if (RUN_TOGETHER_RE.test(line)) why = "words run together across a line break";
      if (why && !flagged.has(why)) {
        flagged.add(why);
        rawMarkdown.push(`${route}: ${why} — "${line.split(BR).join("⏎").slice(0, 80)}"`);
      }
    }
  }

  // ── RULE one-business-identity
  const identityIssues = [];
  for (const [field, map] of Object.entries(identity)) {
    if (map.size > 1) {
      const variants = [...map.entries()]
        .sort((a, b) => b[1].size - a[1].size)
        .map(([v, routes]) => `"${v}" on ${routes.size} page(s), e.g. ${[...routes].slice(0, 2).join(", ")}`);
      identityIssues.push(
        `${field}: ${map.size} different values — ${variants.slice(0, 4).join(" | ")}${variants.length > 4 ? " | …" : ""}`
      );
    }
  }
  reportList(
    "one-business-identity",
    identityIssues,
    "the business is described more than one way in the search-engine data (JSON-LD). Use ONE shared business entry (one @id) on every page — a city page must never claim an office in that city:"
  );

  // ── RULE duplicate-titles
  const titleIssues = [...byTitle.entries()]
    .filter(([t, r]) => t === "(no title)" || r.size > 1)
    .map(([t, r]) => `"${t}" on ${r.size} page(s): ${[...r].slice(0, 4).join(", ")}${r.size > 4 ? ", …" : ""}`);
  reportList("duplicate-titles", titleIssues, "every indexable page needs its own <title>:");
  const dupDesc = [...byDescription.entries()].filter(([d, r]) => d && r.size > 1);
  for (const [d, r] of dupDesc.slice(0, MAX_LISTED)) {
    warn(
      "duplicate-titles",
      `meta description shared by ${r.size} pages (${[...r].slice(0, 3).join(", ")}): "${d.slice(0, 70)}…"`
    );
  }

  // ── RULE missing-alt
  reportList("missing-alt", missingAlt, `${missingAlt.length} <img> without an alt attribute (use alt="" if decorative):`);

  // ── RULE raw-markdown
  reportList("raw-markdown", rawMarkdown, "visible text that is markdown, or words run together:");

  // ── RULE broken-images
  const broken = [];
  const remote = [];
  for (const [src, route] of imageRefs) {
    let target = src;
    if (/^\/_next\/image\?/.test(src)) {
      const u = new URLSearchParams(src.split("?")[1]).get("url");
      if (!u) continue;
      target = u;
    }
    if (/^https?:\/\//i.test(target)) {
      remote.push([target, route]);
    } else if (target.startsWith("/_next/static/")) {
      const file = join(root, ".next", decodeURIComponent(target.slice("/_next".length).split("?")[0]));
      if (!existsSync(file)) broken.push(`${route}: ${target} (missing build asset)`);
    } else if (target.startsWith("/")) {
      const file = join(root, "public", decodeURIComponent(target.split("?")[0]));
      if (!existsSync(file)) broken.push(`${route}: ${target} (not in public/)`);
    }
  }
  const REMOTE_CAP = 400;
  let unverified = 0;
  const queue = remote.slice(0, REMOTE_CAP);
  async function probe([url, route]) {
    try {
      let res = await fetch(url, { method: "HEAD", redirect: "follow", signal: AbortSignal.timeout(8000) });
      if (res.status === 405 || res.status === 403) {
        res = await fetch(url, { method: "GET", redirect: "follow", signal: AbortSignal.timeout(8000) });
      }
      if (res.status >= 400) broken.push(`${route}: ${url.slice(0, 120)} (HTTP ${res.status})`);
    } catch {
      unverified++;
    }
  }
  for (let i = 0; i < queue.length; i += 8) await Promise.all(queue.slice(i, i + 8).map(probe));
  if (unverified > 0) {
    warn("broken-images", `${unverified} remote image(s) could not be reached (network?) — not counted as broken`);
  }
  if (remote.length > REMOTE_CAP) warn("broken-images", `checked the first ${REMOTE_CAP} of ${remote.length} remote images`);
  reportList("broken-images", broken, `${broken.length} image(s) that do not load:`);

  // ── RULE sitemap-lastmod
  const sitemapPath = join(root, ".next/server/app/sitemap.xml.body");
  if (existsSync(sitemapPath)) {
    const mods = [...readFileSync(sitemapPath, "utf8").matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((m) =>
      m[1].slice(0, 16)
    );
    if (mods.length >= 10) {
      const counts = new Map();
      for (const m of mods) counts.set(m, (counts.get(m) ?? 0) + 1);
      const [top, n] = [...counts.entries()].sort((a, b) => b[1] - a[1])[0];
      if (n / mods.length >= 0.5) { // CS 94/135, OMM 26/30
        fail(
          "sitemap-lastmod",
          `${n} of ${mods.length} sitemap dates are the same minute (${top}) — the build time, not when pages changed. Give each page its real last-edited date, or omit lastmod.`
        );
      }
    }
  }
  console.log(
    `site-standard: page-content rules checked ${pages.length} pages, ${imageRefs.size} images (${queue.length} remote)`
  );
} catch (err) {
  if (!advisory) throw err;
  warn("page-content", `page-content checks skipped: ${err instanceof Error ? err.message : err}`);
}

// ── Verdict ──────────────────────────────────────────────────────────────────
for (const w of warnings) console.warn(`site-standard WARNING ${w}`);
if (failures.length > 0) {
  console.error(`\nSITE STANDARD: ${failures.length} violation(s) — see docs/playbooks/website-build-standard.md in the OMM repo:\n`);
  for (const f of failures) console.error(`  VIOLATION ${f}`);
  process.exitCode = 1;
} else {
  console.log(`site-standard: all checks passed (${warnings.length} warning${warnings.length === 1 ? "" : "s"})`);
}
