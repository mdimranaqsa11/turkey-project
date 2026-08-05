const { chromium } = require("playwright");
const path = require("path");

const OUT = "C:\\Users\\DELL\\AppData\\Local\\Temp\\claude\\d--turkish-international\\a21182b9-aeef-4b2e-8b64-57256036f598\\scratchpad";
const url = process.argv[2] || "http://localhost:3000";
const name = process.argv[3] || "page";

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (err) => errors.push(String(err)));

  await page.goto(url, { waitUntil: "networkidle" });
  await page.waitForTimeout(800);

  const height = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < height; y += 400) {
    await page.evaluate((y) => window.scrollTo(0, y), y);
    await page.waitForTimeout(100);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);

  await page.screenshot({ path: path.join(OUT, `${name}-full.png`), fullPage: true });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(OUT, `${name}-mobile.png`), fullPage: true });

  console.log("ERRORS:", JSON.stringify(errors, null, 2));
  await browser.close();
})();
