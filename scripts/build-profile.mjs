import puppeteer from "puppeteer";
import { PDFDocument } from "pdf-lib";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "..");

const htmlPath = resolve(__dirname, "profile-template.html");
const outPath = resolve(repoRoot, "public", "ruwaa-company-profile.pdf");

const browser = await puppeteer.launch({
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

const page = await browser.newPage();
await page.goto("file://" + htmlPath, { waitUntil: "networkidle0" });

const sectionCount = await page.evaluate(() => document.querySelectorAll(".page").length);
console.log(`Found ${sectionCount} sections`);

const merged = await PDFDocument.create();

for (let i = 0; i < sectionCount; i++) {
  await page.evaluate((idx) => {
    const all = document.querySelectorAll(".page");
    all.forEach((el, j) => {
      el.style.display = j === idx ? "" : "none";
    });
  }, i);

  const buf = await page.pdf({
    width: "210mm",
    height: "297mm",
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    preferCSSPageSize: false,
  });

  const sub = await PDFDocument.load(buf);
  const copied = await merged.copyPages(sub, [0]);
  merged.addPage(copied[0]);
  process.stdout.write(`  page ${i + 1}/${sectionCount} ok\n`);
}

await browser.close();

const bytes = await merged.save();
writeFileSync(outPath, bytes);
console.log(`PDF written: ${outPath} (${bytes.length.toLocaleString()} bytes, ${merged.getPageCount()} pages)`);
