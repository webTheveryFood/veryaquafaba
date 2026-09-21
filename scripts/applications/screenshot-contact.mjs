// Screenshot of the site's own contact form (Products page) to compare input, label and
// button styles with the enquiry form of the application guides (design rule: reuse the
// site's look). Usage: node scripts/applications/screenshot-contact.mjs <outDir>
import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await page.goto('http://localhost:3058/buy-aquafaba/', { waitUntil: 'domcontentloaded' });
const form = page.locator('form#contact-form'); await form.waitFor({ timeout: 15000 });
await form.scrollIntoViewIfNeeded();
await form.screenshot({ path: `${process.argv[2]}/contact-form.png` });
const input = await form.locator('input[type=text]').first().evaluate((el) => { const c = getComputedStyle(el); return { bg: c.backgroundColor, color: c.color, border: c.border, radius: c.borderRadius, font: c.fontFamily.slice(0, 30), size: c.fontSize }; });
const label = await form.locator('label').first().evaluate((el) => { const c = getComputedStyle(el); return { color: c.color, transform: c.textTransform, weight: c.fontWeight, size: c.fontSize }; });
const submit = await form.locator('input[type=submit]').evaluate((el) => { const c = getComputedStyle(el); return { bg: c.backgroundColor, color: c.color, radius: c.borderRadius, border: c.border, size: c.fontSize }; });
console.log('input', JSON.stringify(input)); console.log('label', JSON.stringify(label)); console.log('submit', JSON.stringify(submit));
await browser.close();
