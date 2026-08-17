// OMM Website Build Standard — CI enforcement (runs AFTER `next build`).
//
// Static half of docs/playbooks/website-build-standard.md in the OMM repo
// (openmindmarketing1/open-mind-marketing). Every rule here is a defect that
// shipped on an OMM-built site in Aug 2026. Checks run against the BUILT
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
//   robots-next              never blanket-disallow /_next (only /_next/image)
//
// Exit 1 on any violation. Network-dependent checks fail OPEN (warn) so an
// offline build isn't blocked; source/artifact checks fail CLOSED.

import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const failures = [];
const warnings = [];
const fail = (rule, detail) => failures.push(`[${rule}] ${detail}`);
const warn = (rule, detail) => warnings.push(`[${rule}] ${detail}`);

function stripComments(src) {
  // Line comments only when // starts a line or follows whitespace — a bare
  // [^\n]* strip would eat the tail of every https:// URL literal.
  return src.replace(/\/\*[\s\S]*?\*\//g, "").replace(/(^|\s)\/\/[^\n]*/g, "$1");
}

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

// ── RULE robots-next ─────────────────────────────────────────────────────────
const robotsPathTs = join(root, "src/app/robots.ts");
const robotsPathTxt = join(root, "public/robots.txt");
const robotsSrc = existsSync(robotsPathTs)
  ? stripComments(readFileSync(robotsPathTs, "utf8"))
  : existsSync(robotsPathTxt)
    ? readFileSync(robotsPathTxt, "utf8")
    : null;
if (robotsSrc === null) {
  warn("robots-next", "no robots.ts or public/robots.txt found");
} else {
  // Collect disallow values from either format: robots.ts array strings after
  // a `disallow` key, or `Disallow:` lines in a plain robots.txt.
  const disallows = [
    ...[...robotsSrc.matchAll(/disallow\s*:\s*\[([^\]]*)\]/gi)].flatMap((m) =>
      [...m[1].matchAll(/["']([^"']+)["']/g)].map((s) => s[1])
    ),
    ...[...robotsSrc.matchAll(/disallow\s*:\s*["']([^"']+)["']/gi)].map((m) => m[1]),
    ...[...robotsSrc.matchAll(/^\s*Disallow:\s*(\S+)\s*$/gim)].map((m) => m[1]),
  ];
  for (const d of disallows) {
    if (d === "/_next" || d === "/_next/") {
      fail("robots-next", `robots blanket-disallows ${d} — /_next/static must stay crawlable; disallow /_next/image only`);
    }
  }
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
