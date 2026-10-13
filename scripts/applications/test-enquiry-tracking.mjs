// Playwright check of the CTA dialog and the form conversions against a running build, as the
// measurement brief of 13 October 2026 sets them:
// - one <button data-cta="cta-open"> per page (guides, recipes, new pages) opens the dialog;
// - two <button> choices, cta-consumer and cta-pro;
// - consumer path by the visitor's country (geo mocked): Amazon US, Amazon DE, InstantChef (plus
//   whisky.fr on the French cocktail pages), the contact form elsewhere; manual country choice;
// - professional path: samples or enquiry, both through the B2B form, pro.medelys.fr for France;
// - every purchase link in the dialog carries its data-goal and data-cta="modal-buy";
// - each form posts its source page and sends exactly ONE CONVERSION after the server's OK, with
//   props intent, route, origin and lang; none on failure. The Products form gets the same props.
// Usage: node scripts/applications/test-enquiry-tracking.mjs [http://localhost:3058]
import { chromium } from 'playwright';
import { applicationRoute } from '../../data/applications/routes.js';

const BASE = process.argv[2] || 'http://localhost:3058';
const GUIDE = { en: applicationRoute('en', 'meringue'), de: applicationRoute('de', 'cocktails'), fr: applicationRoute('fr', 'cocktails'), nl: applicationRoute('nl', 'macarons') };
const TOPIC = '/resources/professional/bars-cocktails/';
const RECIPE = '/aquafaba-recipes/meringues/';
const PRODUCTS = '/buy-aquafaba/';
let failures = 0;
const assert = (cond, msg) => { if (!cond) { failures++; console.log('FAIL', msg); } };

const browser = await chromium.launch();
const ctx = await browser.newContext();
await ctx.route('**/an.js', (route) => route.abort());
await ctx.route('**/challenges.cloudflare.com/**', (route) => route.abort());
await ctx.addInitScript(() => {
  window.__an = [];
  window.an = { track: (t, p) => window.__an.push({ t, p }) };
  window.turnstile = { render: (el, opts) => { setTimeout(() => opts.callback('test-token'), 0); return 1; }, reset() {}, remove() {} };
});

// Opens a page with the visitor's country mocked, clicks its CTA and checks the dialog opened.
async function openDialog(route, country, opener = '.va-guide-buy button[data-cta="cta-open"]') {
  const page = await ctx.newPage();
  await page.route('**/api/geo/', (r) => r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ country }) }));
  await page.goto(BASE + route, { waitUntil: 'networkidle' });
  const button = page.locator(opener);
  assert(await button.count() === 1, `${route}: one <button data-cta="cta-open">`);
  await button.click();
  assert(await page.locator('dialog#cta-dialog[open]').count() === 1, `${route}: the CTA opens the dialog`);
  assert(await page.locator('dialog#cta-dialog button[data-cta="cta-consumer"]').count() === 1 && await page.locator('dialog#cta-dialog button[data-cta="cta-pro"]').count() === 1, `${route}: the two choices are <button> cta-consumer / cta-pro`);
  return page;
}
const D = 'dialog#cta-dialog';

async function waitConversion(page) {
  await page.waitForFunction(() => window.__an.some((e) => e.t === 'CONVERSION' || e.t === 'FORM_ERROR'), null, { timeout: 5000 }).catch(() => {});
  return page.evaluate(() => window.__an);
}

// Consumer path: the shop of the visitor's country.
for (const [route, country, goal, host] of [[GUIDE.en, 'US', 'amazon-click-us', 'amazon.com'], [GUIDE.en, 'DE', 'amazon-click-de', 'amazon.de'], [GUIDE.nl, 'FR', 'stockist-click-fr', 'instantchef.com']]) {
  const page = await openDialog(route, country);
  await page.click(`${D} [data-cta="cta-consumer"]`);
  const shop = page.locator(`${D} .va-guide-ctas a[data-goal]`);
  assert(await shop.count() === 1, `${country}: one shop button`);
  assert(await shop.getAttribute('data-goal') === goal && await shop.getAttribute('data-cta') === 'modal-buy', `${country}: ${goal} + modal-buy`);
  const href = await shop.getAttribute('href');
  assert(href.includes(host), `${country}: goes to ${host} (${href})`);
  if (/amazon\./.test(href)) assert(/[?&](tag|utm_source|maas)=/.test(href), `${country}: amazon tracking params`);
  assert(/sponsored/.test(await shop.getAttribute('rel')), `${country}: rel sponsored`);
  assert(await page.locator(`${D} a[href*="whisky.fr"]`).count() === 0, `${country}: no whisky.fr outside the French cocktail pages`);
  await page.keyboard.press('Escape');
  assert(await page.locator(`${D}[open]`).count() === 0, `${country}: Escape closes the dialog`);
  await page.close();
}

// French cocktail page, visitor in France: InstantChef and the two whisky.fr links.
{
  const page = await openDialog(GUIDE.fr, 'FR');
  await page.click(`${D} [data-cta="cta-consumer"]`);
  assert(await page.locator(`${D} a[data-goal="stockist-click-fr"][data-cta="modal-buy"]`).count() === 1, 'fr cocktails: InstantChef');
  assert(await page.locator(`${D} a[href*="whisky.fr"][data-goal="whisky-fr-click"][data-cta="modal-buy"]`).count() === 2, 'fr cocktails: the two whisky.fr links');
  await page.close();
}

// Anywhere else: the contact form, its source page and its props; the manual country choice.
{
  const page = await openDialog(GUIDE.en, 'GB');
  let body = null;
  await page.route('**/api/contact/', (r) => { body = JSON.parse(r.request().postData()); r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ ok: true }) }); });
  await page.click(`${D} [data-cta="cta-consumer"]`);
  assert(await page.locator(`${D} a[data-goal]`).count() === 0, 'GB: no shop');
  const form = page.locator(`${D} form#contact-form-modal`);
  assert(await form.count() === 1, 'GB: the contact form');
  await form.locator('input[name=name]').fill('Test Cook');
  await form.locator('input[name=email]').fill('cook@example.com');
  await form.locator('textarea[name=message]').fill('Where can I buy a pack?');
  await form.locator('button[type=submit]').click();
  const conv = (await waitConversion(page)).filter((e) => e.t === 'CONVERSION');
  const p = conv[0]?.p || {};
  assert(conv.length === 1 && p.goal_key === 'contact-form-success', `GB: 1 CONVERSION contact-form-success (${conv.length})`);
  assert(JSON.stringify(p.props) === JSON.stringify({ intent: 'contact', route: 'consumer', origin: 'modal', lang: 'en' }), `GB: props ${JSON.stringify(p.props)}`);
  assert(body?.path === GUIDE.en, `GB: the form posts its page (${body?.path})`);
  await page.click(`${D} .va-cta-countries button:nth-of-type(1)`);
  assert(await page.locator(`${D} a[data-goal="amazon-click-us"]`).count() === 1, 'manual choice: United States shows Amazon US');
  await page.close();
}

// Professional path: samples by default, then enquiry, through the B2B form; pro.medelys.fr in France.
async function submitPro(route, country, response, chooseEnquiry = false) {
  const page = await openDialog(route, country);
  let body = null;
  await page.route('**/api/enquiry/', (r) => { body = JSON.parse(r.request().postData()); return response === 'network' ? r.abort() : r.fulfill({ status: response.status, contentType: 'application/json', body: JSON.stringify(response.body) }); });
  await page.click(`${D} [data-cta="cta-pro"]`);
  if (country === 'FR') assert(await page.locator(`${D} a[href*="pro.medelys.fr"][data-goal="medelys-click"][data-cta="modal-buy"]`).count() === 1, `${route}: pro.medelys.fr for France`);
  else assert(await page.locator(`${D} a[href*="pro.medelys.fr"]`).count() === 0, `${route}: no pro.medelys.fr outside France`);
  if (chooseEnquiry) await page.click(`${D} .va-cta-switch--small button:nth-child(2)`);
  const form = page.locator(`${D} form#enquiry-form-modal`);
  assert(await form.count() === 1, `${route}: the B2B form in the dialog`);
  await form.locator('input[name=company]').fill('Test Bakery');
  await form.locator('input[name=country]').fill('Testland');
  await form.locator('input[name=email]').fill('lead@example.com');
  await form.locator('input[name=volume]').fill('about ten kilos a month');
  await form.locator('textarea[name=project]').fill('Replacing egg whites in our meringue line.');
  await form.locator('button[type=submit]').click();
  const ev = await waitConversion(page);
  await page.close();
  return { ev, body };
}
{
  const { ev, body } = await submitPro(GUIDE.en, 'FR', { status: 200, body: { ok: true } });
  const conv = ev.filter((e) => e.t === 'CONVERSION');
  const p = conv[0]?.p || {};
  assert(conv.length === 1 && p.goal_key === 'production-enquiry-success' && p.form_id === 'enquiry-form-modal', `samples: 1 CONVERSION production-enquiry-success ${JSON.stringify(p)}`);
  assert(JSON.stringify(p.props) === JSON.stringify({ intent: 'samples', route: 'pro', origin: 'modal', lang: 'en' }), `samples: props ${JSON.stringify(p.props)}`);
  assert(body?.sourcePath === GUIDE.en && body?.intent === 'samples', `samples: posts page and intent (${body?.sourcePath}, ${body?.intent})`);
}
{
  const { ev, body } = await submitPro(GUIDE.nl, 'NL', { status: 200, body: { ok: true } }, true);
  const p = ev.find((e) => e.t === 'CONVERSION')?.p || {};
  assert(JSON.stringify(p.props) === JSON.stringify({ intent: 'contact', route: 'pro', origin: 'modal', lang: 'nl' }), `enquiry: props ${JSON.stringify(p.props)}`);
  assert(body?.intent === 'contact' && body?.sourcePath === GUIDE.nl, `enquiry: posts page and intent (${body?.sourcePath}, ${body?.intent})`);
}
for (const [name, response] of [['server 500', { status: 500, body: { ok: false, error: 'send_failed' } }], ['ok:false', { status: 200, body: { ok: false } }], ['network', 'network']]) {
  const { ev } = await submitPro(GUIDE.de, 'DE', response);
  assert(ev.filter((e) => e.t === 'CONVERSION').length === 0, `${name}: 0 CONVERSION`);
  assert(ev.filter((e) => e.t === 'FORM_ERROR').length === 1, `${name}: 1 FORM_ERROR`);
}

// A page with its own form card still gets the form in the dialog; a recipe opens the same dialog.
{
  const page = await openDialog(TOPIC, 'US');
  await page.click(`${D} [data-cta="cta-pro"]`);
  assert(await page.locator(`${D} form#enquiry-form-modal`).count() === 1, 'topic: the B2B form in the dialog');
  await page.close();
  const recipe = await openDialog(RECIPE, 'US', '.elementor-element-d84029e button[data-cta="cta-open"]');
  await recipe.close();
}

// "Get in touch" under the lead (guides, new pages, recipes): the same dialog on its forms, the
// contact form for home even where there is a shop, the B2B form for a business.
for (const route of [GUIDE.en, TOPIC, RECIPE]) {
  const page = await openDialog(route, 'US', 'button#cta-contact[data-cta-open="contact"][data-cta="cta-open"]');
  await page.click(`${D} [data-cta="cta-consumer"]`);
  assert(await page.locator(`${D} form#contact-form-modal`).count() === 1 && await page.locator(`${D} a[data-goal]`).count() === 0, `${route}: get in touch, for home: the contact form, no shop`);
  await page.click(`${D} [data-cta="cta-pro"]`);
  assert(await page.locator(`${D} form#enquiry-form-modal`).count() === 1, `${route}: get in touch, for a business: the B2B form`);
  await page.close();
}

// Products page: no dialog; the form's CONVERSION carries the props, intent from the samples button.
{
  const page = await ctx.newPage();
  let body = null;
  await page.route('**/api/contact/', (r) => { body = JSON.parse(r.request().postData()); r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ ok: true }) }); });
  await page.goto(BASE + PRODUCTS, { waitUntil: 'networkidle' });
  assert(await page.locator('dialog#cta-dialog').count() === 0, 'products: no CTA dialog');
  assert(await page.locator('a[data-cta="samples"]').count() >= 2 && await page.locator('a[data-cta="technical-sheets"]').count() >= 2, 'products: samples and technical sheets buttons tagged');
  await page.locator('a[data-cta="samples"]').first().click();
  const form = page.locator('form#contact-form');
  await form.locator('input[name="your-name"]').fill('Test Chef');
  await form.locator('input[name="your-email"]').fill('chef@example.com');
  await form.locator('textarea[name="your-message"]').fill('Samples please.');
  await form.locator('input[type=submit]').click();
  const p = (await waitConversion(page)).find((e) => e.t === 'CONVERSION')?.p || {};
  assert(p.goal_key === 'contact-form-success' && JSON.stringify(p.props) === JSON.stringify({ intent: 'samples', route: 'none', origin: 'page', lang: 'en' }), `products: props ${JSON.stringify(p.props)}`);
  assert(body?.path === PRODUCTS, `products: posts its page (${body?.path})`);
  await page.close();
}

await browser.close();
console.log(failures ? `\n${failures} failures` : '\nCTA dialog and forms OK: shop per country, B2B paths, modal-buy, props on every conversion, source page in every form');
process.exitCode = failures ? 1 : 0;
