// Playwright check of the CTA dialog and the form conversions against a running build, as the
// measurement brief of 13 October 2026 sets them:
// - one <button data-cta="cta-open"> per page (guides, recipes, new pages) opens the dialog;
// - two <button> choices, cta-consumer and cta-pro;
// - consumer path by the visitor's country (geo mocked): Amazon US, Amazon DE, InstantChef (plus
//   whisky.fr on the French cocktail pages), the contact form elsewhere; manual country choice;
// - professional path: the B2B enquiry form (no free samples), pro.medelys.fr for France;
// - every purchase link in the dialog carries its data-goal and data-cta="modal-buy";
// - each form posts its source page and sends exactly ONE CONVERSION after the server's OK, with
//   props intent, route, origin and lang; none on failure. The Products form gets the same props;
// - the professional pages in the four languages: the form card and the dialog's business path.
// Nothing reaches the client: every form POST is answered by the test or aborted, analytics are cut, so it also runs
// against the live site (main) when no build is running.
// Usage: node scripts/applications/test-enquiry-tracking.mjs [http://localhost:3058 | https://veryaquafaba.com]
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
// Page routes answer first: a form POST no test answers dies here, and no visit reaches GTM or GA4.
await ctx.route('**/api/{enquiry,contact}/', (route) => route.abort());
await ctx.route(/googletagmanager\.com|google-analytics\.com|\/g\/collect|doubleclick/, (route) => route.abort());
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
  const shop = page.locator(`${D} .va-cta-shops a[data-goal]`);
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

// Professional path in buy mode (user, 15 October 2026): a business in a country with a shop sees that shop only, plus
// pro.medelys.fr in France; where no shop serves the country, the B2B form. No free samples anywhere.
async function submitPro(route, country, response) {
  const page = await openDialog(route, country);
  let body = null;
  await page.route('**/api/enquiry/', (r) => { body = JSON.parse(r.request().postData()); return response === 'network' ? r.abort() : r.fulfill({ status: response.status, contentType: 'application/json', body: JSON.stringify(response.body) }); });
  await page.click(`${D} [data-cta="cta-pro"]`);
  assert(await page.locator(`${D} a[href*="pro.medelys.fr"]`).count() === 0, `${route}: no pro.medelys.fr outside France`);
  assert(!/sample|muster|échantillon|stalen/i.test(await page.locator(D).innerText()), `${route}: no free samples in the professional path`);
  const form = page.locator(`${D} form#enquiry-form-modal`);
  const found = await form.count() === 1;
  assert(found, `${route} (${country}, no shop): the B2B form in the dialog`);
  if (found) await fillEnquiry(form);
  const ev = found ? await waitConversion(page) : [];
  await page.close();
  return { ev, body };
}
for (const [country, goal] of [['FR', 'stockist-click-fr'], ['US', 'amazon-click-us']]) {
  const page = await openDialog(GUIDE.en, country);
  await page.click(`${D} [data-cta="cta-pro"]`);
  assert(await page.locator(`${D} .va-cta-shops a[data-goal="${goal}"][data-route="pro"]`).count() === 1, `${country} business: the country's shop, tagged route pro`);
  assert(await page.locator(`${D} a[href*="pro.medelys.fr"][data-goal="medelys-click"][data-cta="modal-buy"]`).count() === (country === 'FR' ? 1 : 0), `${country} business: pro.medelys.fr only in France`);
  assert(await page.locator(`${D} form#enquiry-form-modal`).count() === 0, `${country} business: the shops only, no form in buy mode`);
  await page.close();
}
{
  const { ev, body } = await submitPro(GUIDE.en, 'GB', { status: 200, body: { ok: true } });
  const conv = ev.filter((e) => e.t === 'CONVERSION');
  const p = conv[0]?.p || {};
  assert(conv.length === 1 && p.goal_key === 'production-enquiry-success' && p.form_id === 'enquiry-form-modal', `pro: 1 CONVERSION production-enquiry-success ${JSON.stringify(p)}`);
  assert(JSON.stringify(p.props) === JSON.stringify({ intent: 'contact', route: 'pro', origin: 'modal', lang: 'en' }), `pro: props ${JSON.stringify(p.props)}`);
  assert(body?.sourcePath === GUIDE.en && body?.intent === 'contact', `pro: posts page and intent (${body?.sourcePath}, ${body?.intent})`);
}
{
  const { ev, body } = await submitPro(GUIDE.nl, 'NL', { status: 200, body: { ok: true } });
  const p = ev.find((e) => e.t === 'CONVERSION')?.p || {};
  assert(JSON.stringify(p.props) === JSON.stringify({ intent: 'contact', route: 'pro', origin: 'modal', lang: 'nl' }), `enquiry: props ${JSON.stringify(p.props)}`);
  assert(body?.intent === 'contact' && body?.sourcePath === GUIDE.nl, `enquiry: posts page and intent (${body?.sourcePath}, ${body?.intent})`);
}
for (const [name, response] of [['server 500', { status: 500, body: { ok: false, error: 'send_failed' } }], ['ok:false', { status: 200, body: { ok: false } }], ['network', 'network']]) {
  const { ev } = await submitPro(GUIDE.de, 'GB', response);
  assert(ev.filter((e) => e.t === 'CONVERSION').length === 0, `${name}: 0 CONVERSION`);
  assert(ev.filter((e) => e.t === 'FORM_ERROR').length === 1, `${name}: 1 FORM_ERROR`);
}

// A recipe opens the same dialog.
{
  const recipe = await openDialog(RECIPE, 'US', '.elementor-element-d84029e button[data-cta="cta-open"]');
  await recipe.close();
}

// The professional pages in the four languages (28 days to 5 November 2026: 59 visits, 8 clicks, 0 enquiries): the form
// card at the foot of the page and the business path of 'Get in touch' each send ONE production-enquiry-success with the page's
// language, and post the page they came from.
const PRO = { en: '/resources/professional/food-manufacturing/', fr: '/fr/ressources/professionnels/industrie-agroalimentaire/', de: '/de/ressourcen/profis/lebensmittelindustrie/', nl: '/nl/bronnen/professionals/voedingsindustrie/' };
async function fillEnquiry(form) {
  await form.locator('input[name=company]').fill('Test Bakery');
  await form.locator('input[name=country]').fill('Testland');
  await form.locator('input[name=email]').fill('lead@example.com');
  await form.locator('input[name=volume]').fill('about ten kilos a month');
  await form.locator('textarea[name=project]').fill('Replacing egg whites in our meringue line.');
  await form.locator('button[type=submit]').click();
}
for (const [lang, route] of Object.entries(PRO)) {
  const page = await ctx.newPage();
  const posts = [];
  await page.route('**/api/geo/', (r) => r.fulfill({ status: 200, contentType: 'application/json', body: '{"country":"US"}' }));
  await page.route('**/api/enquiry/', (r) => { posts.push(JSON.parse(r.request().postData())); r.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' }); });
  await page.goto(BASE + route, { waitUntil: 'networkidle' });
  const card = page.locator('form#enquiry-form');
  assert(await card.count() === 1, `${lang} professional page: the form card`);
  await fillEnquiry(card);
  let conv = (await waitConversion(page)).filter((e) => e.t === 'CONVERSION');
  assert(conv.length === 1 && conv[0].p.goal_key === 'production-enquiry-success' && conv[0].p.form_id === 'enquiry-form', `${lang} card: 1 CONVERSION production-enquiry-success (${conv.length})`);
  assert(JSON.stringify(conv[0]?.p.props) === JSON.stringify({ intent: 'contact', route: 'none', origin: 'page', lang }), `${lang} card: props ${JSON.stringify(conv[0]?.p.props)}`);
  assert(posts[0]?.sourcePath === route && String(posts[0]?.locale).startsWith(lang), `${lang} card: posts its page and language (${posts[0]?.sourcePath}, ${posts[0]?.locale})`);
  await page.locator('button#cta-contact[data-cta-open="contact"]').click();
  await page.click(`${D} [data-cta="contact-pro"]`);
  const modal = page.locator(`${D} form#enquiry-form-modal`);
  assert(await modal.count() === 1, `${lang} professional page: the B2B form in the dialog`);
  await fillEnquiry(modal);
  await page.waitForFunction(() => window.__an.filter((e) => e.t === 'CONVERSION').length >= 2, null, { timeout: 5000 }).catch(() => {});
  conv = (await page.evaluate(() => window.__an)).filter((e) => e.t === 'CONVERSION');
  assert(conv.length === 2 && conv[1].p.goal_key === 'production-enquiry-success' && conv[1].p.form_id === 'enquiry-form-modal', `${lang} dialog: a second CONVERSION production-enquiry-success (${conv.length})`);
  assert(JSON.stringify(conv[1]?.p.props) === JSON.stringify({ intent: 'contact', route: 'pro', origin: 'contact-modal', lang }), `${lang} dialog: props ${JSON.stringify(conv[1]?.p.props)}`);
  assert(posts.length === 2, `${lang}: two posts, one per form (${posts.length})`);
  await page.close();
}

// "Get in touch" under the lead (guides, new pages, recipes): the same dialog on its forms, with its
// own values (brief 3.6): contact-open, contact-consumer / contact-pro, origin contact-modal.
for (const route of [GUIDE.en, TOPIC, RECIPE]) {
  const page = await ctx.newPage();
  await page.route('**/api/geo/', (r) => r.fulfill({ status: 200, contentType: 'application/json', body: '{"country":"US"}' }));
  await page.route('**/api/contact/', (r) => r.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' }));
  await page.goto(BASE + route, { waitUntil: 'networkidle' });
  const button = page.locator('button#cta-contact[data-cta-open="contact"][data-cta="contact-open"]');
  assert(await button.count() === 1, `${route}: one <button data-cta="contact-open"> under the lead`);
  await button.click();
  assert(await page.locator(`${D} [data-cta="cta-consumer"], ${D} [data-cta="cta-pro"]`).count() === 0, `${route}: get in touch never reuses cta-consumer / cta-pro`);
  await page.click(`${D} [data-cta="contact-consumer"]`);
  const form = page.locator(`${D} form#contact-form-modal`);
  assert(await form.count() === 1 && await page.locator(`${D} a[data-goal]`).count() === 0, `${route}: for home, the contact form, no shop`);
  if (route === GUIDE.en) {
    await form.locator('input[name=name]').fill('Test Cook');
    await form.locator('input[name=email]').fill('cook@example.com');
    await form.locator('textarea[name=message]').fill('A question.');
    await form.locator('button[type=submit]').click();
    const p = (await waitConversion(page)).find((e) => e.t === 'CONVERSION')?.p || {};
    assert(JSON.stringify(p.props) === JSON.stringify({ intent: 'contact', route: 'consumer', origin: 'contact-modal', lang: 'en' }), `get in touch: props ${JSON.stringify(p.props)}`);
  }
  // Two steps since c5f1fe3: back to the choice, then the business card.
  await page.click(`${D} .va-cta-back`);
  await page.click(`${D} [data-cta="contact-pro"]`);
  assert(await page.locator(`${D} form#enquiry-form-modal`).count() === 1, `${route}: for a business, the B2B form`);
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
