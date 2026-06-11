// Renders scripts/og/og.html to public/og.jpg (1200x630) for OpenGraph/Twitter
// cards. Playwright is borrowed from the pw-shots toolbox rather than added as
// a dependency of the site itself.
const path = require("path");
const fs = require("fs");

const { chromium } = require(
  "C:\\Users\\OpenMindMarketing\\pw-shots\\node_modules\\playwright"
);

const HTML = path.join(__dirname, "og.html");
const OUT = path.join(__dirname, "..", "..", "public", "og.jpg");

(async () => {
  // og.html references the kitchen photo by relative path; copy it next to the
  // template so file:// resolution works without baking in an absolute path.
  fs.copyFileSync(
    path.join(__dirname, "..", "..", "public", "images", "before-after", "kitchen-after.jpg"),
    path.join(__dirname, "kitchen-after.jpg")
  );

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
  });
  await page.goto("file:///" + HTML.replace(/\\/g, "/"), { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(300);
  await page.screenshot({ path: OUT, type: "jpeg", quality: 88 });
  await browser.close();

  fs.unlinkSync(path.join(__dirname, "kitchen-after.jpg"));
  const kb = Math.round(fs.statSync(OUT).size / 1024);
  console.log(`Wrote ${OUT} (${kb} KB)`);
})();
