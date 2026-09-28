// Quantity calculator fields: plain text inputs (no spin arrows, no wheel change), a field
// can be emptied and retyped, a comma works as decimal separator, and the result follows.
// Usage: node scripts/applications/test-calculator-input.mjs [base]
import { chromium } from 'playwright';

const base = process.argv[2] || 'http://localhost:3058';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
let bad = 0;
const ok = (cond, msg) => { if (!cond) { bad++; console.log(`FAIL ${msg}`); } else console.log(`ok   ${msg}`); };

// Batch calculator (meringue).
await page.goto(`${base}/resources/applications/meringue/quantity-calculator/`, { waitUntil: 'load' });
const qty = page.locator('.va-guide-calc-qty-field input').first();
ok((await qty.getAttribute('type')) === 'text', 'batch field is a text input, no spin arrows');
await qty.fill('');
ok((await qty.inputValue()) === '', 'batch field can be emptied (no 0 snapping back)');
await qty.pressSequentially('60');
ok((await qty.inputValue()) === '60', 'batch field accepts 60 after clearing');
await page.getByRole('button', { name: /batches/i }).click();
ok((await qty.inputValue()) === '2', 'switching 60 pieces to batches gives 2');
await qty.fill('');
await qty.pressSequentially('1,5');
const liquid = await page.locator('.va-guide-calc .va-guide-table td').first().innerText();
ok(/225/.test(liquid), `1,5 batches gives 225 g of liquid (got "${liquid}")`);
await qty.hover();
await page.mouse.wheel(0, 300);
ok((await qty.inputValue()) === '1,5', 'mouse wheel over the field does not change the value');

// Substitution calculator (baking).
await page.goto(`${base}/resources/applications/baking/quantity-calculator/`, { waitUntil: 'load' });
const whites = page.locator('.va-guide-calc-qty-field input').nth(1);
await whites.fill('');
ok((await whites.inputValue()) === '', 'egg white field can be emptied');
await whites.pressSequentially('3');
ok((await whites.inputValue()) === '3', 'egg white field accepts 3 after clearing');
await whites.pressSequentially('a');
ok((await whites.inputValue()) === '3', 'letters are ignored');

await browser.close();
console.log(`\nfailures: ${bad}`);
process.exitCode = bad ? 1 : 0;
