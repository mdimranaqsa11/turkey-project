const { chromium } = require("playwright");
const path = require("path");

const OUT = "C:\\Users\\DELL\\AppData\\Local\\Temp\\claude\\d--turkish-international\\a21182b9-aeef-4b2e-8b64-57256036f598\\scratchpad\\tablet";
const BASE = "http://localhost:3000";

const pages = [
  ["", "home"],
  ["/courses", "courses"],
  ["/about", "about"],
  ["/accreditation-cpd", "accreditation"],
  ["/blog", "blog"],
  ["/contact", "contact"],
  ["/login", "login"],
  ["/register", "register"],
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 820, height: 1180 } });
  const allErrors = {};

  for (const [route, name] of pages) {
    const errors = [];
    page.removeAllListeners("console");
    page.removeAllListeners("pageerror");
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    page.on("pageerror", (err) => errors.push(String(err)));

    await page.goto(`${BASE}${route}`, { waitUntil: "networkidle" });
    await page.waitForTimeout(500);

    const height = await page.evaluate(() => document.body.scrollHeight);
    for (let y = 0; y < height; y += 350) {
      await page.evaluate((y) => window.scrollTo(0, y), y);
      await page.waitForTimeout(80);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);

    const hasOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1
    );

    await page.screenshot({ path: path.join(OUT, `${name}-tablet.png`), fullPage: true });
    allErrors[name] = { errors, hasOverflow };
  }

  console.log(JSON.stringify(allErrors, null, 2));
  await browser.close();
})();
