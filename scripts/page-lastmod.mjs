// Writes src/data/page-lastmod.json: for every app route, the date its content
// last changed — the newest git commit touching its page.tsx or a file that
// page.tsx imports directly (data, components). Sitewide plumbing (constants,
// consent text, tracking) is ignored so a phone-number tweak doesn't re-date
// all 135 URLs. A file with uncommitted changes counts as changed today, so
// running this before a commit records that commit's pages correctly.
//
// Runs as `prebuild`. On a shallow clone (Vercel) git history is incomplete,
// so it leaves the committed JSON untouched — commit the regenerated file
// together with the content change.

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const OUT = path.join(root, "src/data/page-lastmod.json");
const IGNORE = new Set([
  "src/lib/constants.ts",
  "src/lib/business-schema.ts",
  "src/lib/sms-consent.ts",
  "src/lib/first-touch.ts",
  "src/lib/vibe.ts",
  "src/lib/callback-promise.ts",
  "src/components/JsonLd.tsx",
]);

const git = (...args) => execFileSync("git", args, { cwd: root, encoding: "utf8" }).trim();

try {
  if (git("rev-parse", "--is-shallow-repository") === "true") {
    console.log("page-lastmod: shallow clone, keeping committed src/data/page-lastmod.json");
    process.exit(0);
  }
} catch {
  console.log("page-lastmod: git unavailable, keeping committed src/data/page-lastmod.json");
  process.exit(0);
}

const dirty = new Set(
  git("status", "--porcelain", "--", "src").split("\n").filter(Boolean).map((l) => l.slice(3).trim())
);
const today = new Date().toISOString();
const fileDate = new Map();
function lastChange(rel) {
  if (!fileDate.has(rel)) {
    fileDate.set(rel, dirty.has(rel) ? today : git("log", "-1", "--format=%cI", "--", rel) || today);
  }
  return fileDate.get(rel);
}

function resolveImport(spec) {
  const base = path.join("src", spec.slice(2));
  for (const ext of [".ts", ".tsx", "/index.ts", "/index.tsx"]) {
    if (fs.existsSync(path.join(root, base + ext))) return (base + ext).split(path.sep).join("/");
  }
  return null;
}

const pages = [];
(function walk(dir) {
  for (const e of fs.readdirSync(path.join(root, dir), { withFileTypes: true })) {
    const rel = `${dir}/${e.name}`;
    if (e.isDirectory()) walk(rel);
    else if (e.name === "page.tsx") pages.push(rel);
  }
})("src/app");

const out = {};
for (const page of pages.sort()) {
  const route = page.slice("src/app".length, -"/page.tsx".length) || "/";
  const src = fs.readFileSync(path.join(root, page), "utf8");
  const deps = [page];
  for (const m of src.matchAll(/from\s+"(@\/[^"]+)"/g)) {
    const f = resolveImport(m[1]);
    if (f && !IGNORE.has(f)) deps.push(f);
  }
  out[route] = deps.map(lastChange).sort().pop();
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(out, null, 2) + "\n");
console.log(`page-lastmod: wrote ${Object.keys(out).length} routes`);
