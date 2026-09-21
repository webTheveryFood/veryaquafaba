// Screenshots of the purchase block (design check against the client mockup of 2026-09-16) and
// the computed styles of both pills. Usage: node scripts/applications/screenshot-cta.mjs <outDir>
import { chromium } from 'playwright';
const BASE = 'http://localhost:3058';
const SP = process.argv[2];
const browser = await chromium.launch();
for (const [name, path, width] of [['en-desktop', '/applications/meringue/', 1280], ['en-mobile', '/applications/meringue/', 390], ['nl-desktop', '/nl/toepassingen/macarons/', 1280]]) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  await page.goto(BASE + path, { waitUntil: 'networkidle' });
  const block = page.locator('.va-guide-buy');
  await block.scrollIntoViewIfNeeded();
  await block.screenshot({ path: `${SP}/cta-${name}.png` });
  if (name === 'en-desktop') {
    await page.click('[data-enquiry-toggle]');
    await page.waitForSelector('form#enquiry-form');
    await block.screenshot({ path: `${SP}/cta-${name}-form.png` });
    const btn = page.locator('.va-guide-ctas a[data-goal]');
    const styles = await btn.evaluate((el) => { const c = getComputedStyle(el); return { bg: c.backgroundColor, color: c.color, radius: c.borderRadius, font: c.fontFamily.slice(0, 30) }; });
    const outline = await page.locator('.va-guide-cta-outline .elementor-button').evaluate((el) => { const c = getComputedStyle(el); return { bg: c.backgroundColor, color: c.color, border: c.borderColor }; });
    console.log('primary', JSON.stringify(styles), '| outline', JSON.stringify(outline));
    console.log('primary href', await btn.getAttribute('href'), '| rel', await btn.getAttribute('rel'));
    const recon = await page.locator('.va-guide-reconstitution').textContent();
    console.log('reconstitution:', recon);
    const storage = await page.locator('.va-guide-figures table').last().textContent();
    console.log('storage rows:', storage.replace(/\s+/g, ' ').slice(0, 300));
  }
  await page.close();
}
await browser.close();
console.log('screenshots done');
