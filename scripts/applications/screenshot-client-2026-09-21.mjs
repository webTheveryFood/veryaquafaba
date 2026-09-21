// Screenshots for the review of the client corrections of 2026-09-21: key figures and storage
// of the meringue guide, the purchase block, and the formats block of the Products page.
// Usage: node scripts/applications/screenshot-client-2026-09-21.mjs <outDir> [base]
import { chromium } from 'playwright';
const out = process.argv[2];
const BASE = process.argv[3] || 'http://localhost:3058';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 1400 } });
await page.goto(`${BASE}/resources/applications/meringue/`, { waitUntil: 'domcontentloaded' });
await page.locator('.va-guide-figures').screenshot({ path: `${out}/client-figures.png` });
await page.locator('.va-guide-buy').screenshot({ path: `${out}/client-cta.png` });
await page.goto(`${BASE}/buy-aquafaba/`, { waitUntil: 'domcontentloaded' });
const formats = page.getByText('30g POUCH').first();
await formats.scrollIntoViewIfNeeded();
await page.screenshot({ path: `${out}/client-products.png` });
await browser.close();
console.log('screenshots ok');
