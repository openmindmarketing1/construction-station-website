#!/usr/bin/env node
// Downloads publicly-available city pre-approved ADU plans and uploads them to
// the OMM Supabase Storage bucket `user-assets` under 1/City-ADU-Plans/<city>/.
//
// The `user-assets` bucket lives in the open-mind-marketing Supabase project and
// is public-read / service_role-write. Credentials are read from the OMM repo's
// .env.local (sibling of this repo). Override with env vars:
//   SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, OMM_ENV_PATH
//
// Already-uploaded files are detected via a public HEAD and skipped unless FORCE=1.
//
// Usage: node scripts/upload-city-adu-plans.mjs   (FORCE=1 to re-upload everything)
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");

const BUCKET = "user-assets";
const PREFIX = "1/City-ADU-Plans";
const FORCE = process.env.FORCE === "1";

function loadEnv() {
  let url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  let key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (url && key) return { url: url.replace(/\/$/, ""), key };
  const envPath =
    process.env.OMM_ENV_PATH ||
    path.resolve(repoRoot, "..", "open-mind-marketing", ".env.local");
  const txt = fs.readFileSync(envPath, "utf8");
  const get = (name) => {
    const m = txt.match(new RegExp("^" + name + "=(.*)$", "m"));
    return m ? m[1].trim().replace(/^["']|["']$/g, "") : undefined;
  };
  url = url || get("NEXT_PUBLIC_SUPABASE_URL") || get("SUPABASE_URL");
  key = key || get("SUPABASE_SERVICE_ROLE_KEY");
  if (!url || !key) throw new Error("Missing SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY (looked in " + envPath + ")");
  return { url: url.replace(/\/$/, ""), key };
}

// ---- plan catalogue ---------------------------------------------------------
// beds/baths/sqft/type confidence is documented in the chat report. SF + beds are
// confirmed from plan title blocks / city catalogs where noted; some baths and the
// Lake Elsinore bed counts are best-effort (plans are vector CAD without text).
const CITIES = {
  "lake-elsinore": {
    programName: "Permit Ready ADU Program",
    programUrl: "https://www.lake-elsinore.org/680/Permit-Ready-ADU-Program",
    plans: [
      { name: "ADU 495 SF",               beds: 1, baths: 1, sqft: 495, type: "Detached",          fileName: "le-adu-495sf.pdf",   src: "https://www.lake-elsinore.org/DocumentCenter/View/5364" },
      { name: "ADU 735 SF — 1 Bed/1 Bath",       beds: 1, baths: 1, sqft: 735, type: "Detached",                fileName: "le-adu-735sf.pdf",   src: "https://www.lake-elsinore.org/DocumentCenter/View/5367" },
      { name: "Garage Conversion Studio — 400 SF", beds: 0, baths: 1, sqft: 400, type: "Studio Garage Conversion", fileName: "le-garage-400sf.pdf", src: "https://www.lake-elsinore.org/DocumentCenter/View/5361" },
    ],
  },
  "menifee": {
    programName: "Permit Ready ADU Program",
    programUrl: "https://www.cityofmenifee.us/751/Permit-ready-ADU-program",
    plans: [
      { name: "Studio A 415 SF",     beds: 0, baths: 1, sqft: 415,  type: "Detached", fileName: "menifee-studio-a-415sf.pdf", src: "https://www.cityofmenifee.us/DocumentCenter/View/17715" },
      { name: "Studio B 306 SF",     beds: 0, baths: 1, sqft: 306,  type: "Detached", fileName: "menifee-studio-b-306sf.pdf", src: "https://www.cityofmenifee.us/DocumentCenter/View/17716" },
      { name: "1 Bedroom A 730 SF",  beds: 1, baths: 1, sqft: 730,  type: "Detached", fileName: "menifee-1br-a-730sf.pdf",    src: "https://www.cityofmenifee.us/DocumentCenter/View/17717" },
      { name: "1 Bedroom B 586 SF",  beds: 1, baths: 1, sqft: 586,  type: "Detached", fileName: "menifee-1br-b-586sf.pdf",    src: "https://www.cityofmenifee.us/DocumentCenter/View/17718" },
      { name: "2 Bedroom A 910 SF",  beds: 2, baths: 2, sqft: 910,  type: "Detached", fileName: "menifee-2br-a-910sf.pdf",    src: "https://www.cityofmenifee.us/DocumentCenter/View/17719" },
      { name: "2 Bedroom B 779 SF",  beds: 2, baths: 1, sqft: 779,  type: "Detached", fileName: "menifee-2br-b-779sf.pdf",    src: "https://www.cityofmenifee.us/DocumentCenter/View/17720" },
      { name: "3 Bedroom A 1198 SF", beds: 3, baths: 2, sqft: 1198, type: "Detached", fileName: "menifee-3br-a-1198sf.pdf",   src: "https://www.cityofmenifee.us/DocumentCenter/View/17721" },
      { name: "3 Bedroom B 988 SF",  beds: 3, baths: 2, sqft: 988,  type: "Detached", fileName: "menifee-3br-b-988sf.pdf",    src: "https://www.cityofmenifee.us/DocumentCenter/View/17722" },
    ],
  },
  "cathedral-city": {
    programName: "Pre-Approved ADU Program",
    programUrl: "https://www.cathedralcity.gov/departments/building-and-safety/city-of-cathedral-city-pre-approved-adu-program",
    plans: [
      { name: "Plan 1 — Studio/1BA (468 SF)", beds: 0, baths: 1, sqft: 468,  type: "Detached",          fileName: "cc-plan1-studio-1br-468sf.pdf", src: "https://www.cathedralcity.gov/home/showpublisheddocument/11759/638612099235300000" },
      { name: "Plan 2 – 2BR/1BA 705 SF",    beds: 2, baths: 1, sqft: 705,  type: "Detached",          fileName: "cc-plan2-2br1ba-705sf.pdf",     src: "https://www.cathedralcity.gov/home/showpublisheddocument/11761/638612100719570000" },
      { name: "Plan 3 – 2BR/2BA 1000 SF",   beds: 2, baths: 2, sqft: 1000, type: "Detached",          fileName: "cc-plan3-2br2ba-1000sf.pdf",    src: "https://www.cathedralcity.gov/home/showpublisheddocument/11763/638612101988900000" },
      { name: "Plan 4 – Garage JADU 441 SF", beds: 1, baths: 1, sqft: 441, type: "JADU",              fileName: "cc-plan4-garage-jadu.pdf",      src: "https://www.cathedralcity.gov/home/showpublisheddocument/11765/639039015281570000" },
    ],
  },
};

const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36";

async function exists(publicUrl) {
  try {
    const r = await fetch(publicUrl, { method: "HEAD" });
    return r.ok;
  } catch {
    return false;
  }
}

async function downloadPdf(url) {
  const res = await fetch(url, { redirect: "follow", headers: { "User-Agent": UA, Accept: "application/pdf,*/*" } });
  if (!res.ok) throw new Error(`download HTTP ${res.status} ${res.statusText}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const head = buf.subarray(0, 5).toString("latin1");
  if (head !== "%PDF-") throw new Error(`not a PDF (starts ${JSON.stringify(head)}, ${buf.length} bytes)`);
  return buf;
}

async function uploadPdf(url, key, objectPath, buf) {
  const res = await fetch(`${url}/storage/v1/object/${BUCKET}/${objectPath}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      apikey: key,
      "Content-Type": "application/pdf",
      "x-upsert": "true",
      "Cache-Control": "public, max-age=31536000",
    },
    body: buf,
  });
  if (!res.ok) throw new Error(`upload HTTP ${res.status}: ${await res.text()}`);
}

async function main() {
  const { url, key } = loadEnv();
  console.log(`Target: ${url}/storage/v1/object/public/${BUCKET}/${PREFIX}/...   FORCE=${FORCE}\n`);

  const out = {};
  const perCity = {};
  for (const [city, info] of Object.entries(CITIES)) {
    out[city] = { programName: info.programName, programUrl: info.programUrl, plans: [] };
    perCity[city] = { uploaded: 0, skipped: 0, failed: 0, failures: [] };
    for (const p of info.plans) {
      const supabasePath = `${PREFIX}/${city}/${p.fileName}`;
      const publicUrl = `${url}/storage/v1/object/public/${BUCKET}/${supabasePath}`;
      let status;
      try {
        if (!FORCE && (await exists(publicUrl))) {
          status = "exists";
          perCity[city].skipped++;
        } else {
          const buf = await downloadPdf(p.src);
          await uploadPdf(url, key, supabasePath, buf);
          status = `uploaded ${(buf.length / 1024 / 1024).toFixed(1)}MB`;
          perCity[city].uploaded++;
        }
      } catch (e) {
        status = `FAILED: ${e.message}`;
        perCity[city].failed++;
        perCity[city].failures.push(`${p.fileName} — ${e.message}`);
      }
      out[city].plans.push({
        name: p.name, beds: p.beds, baths: p.baths, sqft: p.sqft,
        type: p.type, fileName: p.fileName, supabasePath,
      });
      console.log(`[${status.startsWith("FAILED") ? "FAIL" : status === "exists" ? "SKIP" : "OK"}] ${city}/${p.fileName}  ${status}`);
    }
  }

  const jsonPath = path.join(repoRoot, "scripts", "city-adu-plans.json");
  fs.writeFileSync(jsonPath, JSON.stringify(out, null, 2) + "\n");
  console.log(`\nWrote ${jsonPath}\n`);

  for (const [city, s] of Object.entries(perCity)) {
    const total = CITIES[city].plans.length;
    console.log(`${city}: ${s.uploaded} uploaded, ${s.skipped} already present, ${s.failed} failed (of ${total})`);
    s.failures.forEach((f) => console.log(`   ✗ ${f}`));
  }
}

main().catch((e) => { console.error("FATAL:", e); process.exit(1); });
