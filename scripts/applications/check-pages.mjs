// Checks the 24 application pages against a running build.
// Usage: npx next build && npx next start -p 3058   (other shell)
//        node scripts/applications/check-pages.mjs [http://localhost:3058] [--strict]
// Verifies: sitemap count + x-default, canonical, 4 hreflang + x-default,
// JSON-LD (WebPage.dateModified, BreadcrumbList, FAQPage strings present in the
// body), og:image, visible updated date, no em/en dash, purchase links carry
// data-goal, no placeholder text. --strict also requires FAQ + 4 sections.
import fs from 'node:fs';

const BASE = process.argv.find((a) => a.startsWith('http')) || 'http://localhost:3058';
const strict = process.argv.includes('--strict');
const routes = JSON.parse(fs.readFileSync('data/routes.json', 'utf8'));
const APP_ROOTS = ['/resources/applications/', '/fr/ressources/applications/', '/de/ressourcen/anwendungen/', '/nl/bronnen/toepassingen/'];
// Set-2 sections: the root is a pillar page, the leaves are topic pages (where-to-buy leaves list stockists).
const SECTION_ROOTS = ['/resources/professional/', '/de/ressourcen/profis/', '/fr/ressources/professionnels/', '/nl/bronnen/professionals/', '/resources/reference/', '/de/ressourcen/wissen/', '/fr/ressources/reference/', '/nl/bronnen/kennis/', '/resources/egg-substitutes/', '/de/ressourcen/ei-ersatz/', '/fr/ressources/substitut-oeuf/', '/nl/bronnen/ei-vervanger/', '/resources/where-to-buy/', '/de/ressourcen/wo-kaufen/', '/fr/ressources/ou-acheter/', '/nl/bronnen/waar-kopen/'];
const STOCKIST_HINTS = ['where-to-buy', 'wo-kaufen', 'ou-acheter', 'waar-kopen'];
const apps = routes.filter((r) => APP_ROOTS.some((p) => r.startsWith(p)) || SECTION_ROOTS.some((p) => r.startsWith(p)));
const SITE = 'https://veryaquafaba.com';
let bad = 0;
const fail = (r, m) => { bad++; console.log(`FAIL ${r} ${m}`); };
const decode = (s) => s.replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)));
const text = (h) => decode(h.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ');

const sm = await (await fetch(`${BASE}/sitemap.xml`)).text();
const urls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
console.log(`sitemap: ${urls.length} urls, x-default links: ${(sm.match(/hreflang="x-default"/g) || []).length}`);
for (const r of apps) if (!urls.includes(SITE + r)) fail(r, 'not in sitemap');

// llms.txt / llms-full.txt: every public URL listed, every guide in the full text, no dashes.
const llms = await (await fetch(`${BASE}/llms.txt`)).text();
const llmsLinks = [...llms.matchAll(/\]\((https:\/\/veryaquafaba\.com[^)]*)\)/g)].map((m) => m[1]);
console.log(`llms.txt: ${llmsLinks.length} links`);
for (const u of urls) if (!llmsLinks.includes(u)) fail(u.replace(SITE, ''), 'not in llms.txt');
const full = await (await fetch(`${BASE}/llms-full.txt`)).text();
for (const r of apps) if (!full.includes(`URL: ${SITE}${r}`)) fail(r, 'not in llms-full.txt');
if (/[—–]/.test(full)) fail('/llms-full.txt', 'em/en dash');

for (const r of apps) {
  // index (/resources/applications/), guide (one segment below) or set-2 child (two).
  const appRoot = APP_ROOTS.find((p) => r.startsWith(p));
  const root = appRoot || SECTION_ROOTS.find((p) => r.startsWith(p));
  const depth = r.slice(root.length).split('/').filter(Boolean).length;
  const kind = !appRoot ? (depth === 1 && STOCKIST_HINTS.some((h) => r.includes(h)) ? 'stockists' : 'topic') : depth === 0 ? 'index' : depth === 1 ? 'guide' : 'child';
  const res = await fetch(BASE + r, { redirect: 'manual' });
  if (res.status !== 200) { fail(r, `HTTP ${res.status}`); continue; }
  const html = await res.text();
  // Only the page's own content: header/footer are legacy chrome (the footer
  // copyright line carries an en dash from the original site).
  const main = html.match(/<main[\s\S]*?<\/main>/)?.[0] || html;
  const body = text(main);
  const canon = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (canon !== SITE + r) fail(r, `canonical ${canon}`);
  const alts = [...html.matchAll(/<link rel="alternate" hrefLang="([^"]+)" href="([^"]+)"/gi)].map((m) => m[1]);
  for (const l of ['en', 'de', 'fr', 'nl', 'x-default']) if (!alts.includes(l)) fail(r, `missing hreflang ${l}`);
  if (!/<meta property="og:image"/.test(html)) fail(r, 'no og:image');
  if (!/<h1[^>]*>[^<]+<\/h1>/.test(html)) fail(r, 'no h1');
  if (!/<time dateTime="\d{4}-\d{2}-\d{2}"/.test(html)) fail(r, 'no visible updated date');
  if (/[—–]/.test(body)) fail(r, 'em/en dash in body');
  if (/\[[^\]]*\]|TODO|lorem/i.test(body)) fail(r, 'placeholder text');
  const ld = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
  if (!ld) { fail(r, 'no JSON-LD'); continue; }
  let data;
  try { data = JSON.parse(ld); } catch { fail(r, 'JSON-LD does not parse'); continue; }
  const types = data['@graph'].map((n) => n['@type']);
  const wp = data['@graph'].find((n) => n['@type'] === 'WebPage' || n['@type'] === 'CollectionPage');
  if (!wp?.dateModified) fail(r, 'WebPage.dateModified missing');
  if (!types.includes('BreadcrumbList')) fail(r, 'no BreadcrumbList');
  const faq = data['@graph'].find((n) => n['@type'] === 'FAQPage');
  if (faq) for (const q of faq.mainEntity) { if (!body.includes(q.name)) fail(r, `FAQ question not in body: ${q.name.slice(0, 40)}`); if (!body.replace(/ ([.,;:!?)])/g, '$1').includes(q.acceptedAnswer.text.replace(/ ([.,;:!?)])/g, '$1').slice(0, 60))) fail(r, `FAQ answer not in body: ${q.name.slice(0, 40)}`); }
  else if (strict) fail(r, 'no FAQPage');
  // The four Tontin sections render as plain <section class="va-recipe-section"> (the
  // figures, FAQ, buy and related blocks carry an extra va-guide-* class).
  const sections = (html.match(/<section class="va-recipe-section">/g) || []).length;
  // Children carry 3 to 4 copy sections beside their tool; the index is a hub (cards + prose + FAQ).
  if (strict && kind !== 'index' && sections < (kind === 'guide' ? 4 : 3)) fail(r, `only ${sections} copy sections`);
  // Purchase anchors: the site button renders class before href, so parse the whole tag.
  const ext = [...html.matchAll(/<a ([^>]*)>/g)].map((m) => m[1]).filter((attrs) => /href="https?:\/\/(www\.)?(amazon\.|instantchef)/.test(attrs)).map((attrs) => [null, attrs.match(/href="([^"]*)"/)[1], attrs]);
  for (const m of ext) {
    if (!/data-goal="/.test(m[2])) fail(r, `purchase link without data-goal: ${m[1]}`);
    const rel = m[2].match(/rel="([^"]*)"/)?.[1] || '';
    if (!/sponsored/.test(rel) || !/nofollow/.test(rel)) fail(r, `purchase link without rel sponsored nofollow: ${m[1]}`);
    if (/amazon\./.test(m[1]) && !/[?&](tag|utm_source|maas|aa_campaignid)=/.test(m[1])) fail(r, `amazon link without tracking parameters: ${m[1]}`);
  }
  if (!['index', 'stockists'].includes(kind) && !r.startsWith('/nl/') && ext.length !== 1) fail(r, `expected exactly one purchase button, found ${ext.length}`);
  if (kind !== 'stockists' && r.startsWith('/nl/') && ext.length) fail(r, 'NL page must not carry a purchase button yet');
  const buttons = [...html.matchAll(/<span class="elementor-button-text">([^<]*)<\/span>/g)].map((m) => m[1]);
  if (buttons.some((b) => /sample|muster|échantillon|staal|monster/i.test(b))) fail(r, 'free sample CTA still present');
  if (kind !== 'index' && !/data-enquiry-toggle/.test(html)) fail(r, 'no professional enquiry link');
}
console.log(`\napplication pages checked: ${apps.length}, failures: ${bad}`);
process.exitCode = bad ? 1 : 0;
