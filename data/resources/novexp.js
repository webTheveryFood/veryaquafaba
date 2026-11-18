import facts from '../applications/facts.json';
import bakeryFacts from './bakeries-facts.json';
import GENERATED from './texts/novexp.en.json';
import { NOVEXP } from './novexp-routes.js';
import { BAKERY_ROUTES } from './bakeries-routes.js';
import { findRoute, whereToBuy, gramStyle } from '../applications/index';
import { UI } from '../applications/ui';
import { RES_UI } from './ui';
import { localeChrome } from '../locale-chrome';
import { dated } from '../updated';
import { RESOURCES_ROOTS, TOOLS_ROOTS, APPLICATION_ROOTS, SECTION_ROOTS, cocktailsRoot } from '../applications/routes';
import { applicationJsonLd } from '../../lib/application-jsonld';
import ROUTES from '../routes.json';

// November expansion, English pages (16 November 2026). The copy is FULL OPENAI's (SEO Programático MCP, generador
// openai), stored as it came in texts/novexp.en.json with its event id; Inés reviews it. This module only lays it out:
// paragraphs and lists, the hyphens of compound words the model dropped, each link on its own anchor text the first
// time that text appears, and the site's unit style. The H1 is the approved title of the plan of 3 and 4 November.
const ui = UI.en;
const R = RES_UI.en;
const products = findRoute('en', 'buy');
const contact = `${products}#contact`;
const KNOWN = new Set([...ROUTES, ...Object.values(NOVEXP).map(([route]) => route)]);

// The figures the calculators work with, from the facts files.
const ratio = facts.shared.ratio;
const recon = facts.shared.powder_reconstitution;
const shelf = facts.shared.shelf_life;
const packs = Object.fromEntries(facts.shared.packs.map((p) => [p.id, p]));
const dose = facts.applications.cocktails.dose_g;
const perWhite = (n) => n / ratio.egg_white_liquid_g;
const TOOL_FACTS = {
  white: ratio.egg_white_liquid_g, egg: ratio.egg_liquid_g, yolk: ratio.egg_yolk_liquid_g, yolkOil: ratio.egg_yolk_oil_g,
  wPowder: recon.egg_white_powder_g, wWater: recon.egg_white_water_ml, wTotal: recon.egg_white_total_g,
  egPowder: recon.egg_white_powder_g * perWhite(ratio.egg_liquid_g), egWater: recon.egg_white_water_ml * perWhite(ratio.egg_liquid_g),
  ykPowder: recon.egg_white_powder_g * perWhite(ratio.egg_yolk_liquid_g), ykWater: recon.egg_white_water_ml * perWhite(ratio.egg_yolk_liquid_g),
  liquidCut: facts.shared.formulation.reduce_other_liquids_pct,
  meringueChill: facts.applications.meringue.process.find((p) => p.key === 'chill').value,
  pouches: [['powder_30g', 'small_pouch', '30g pouch'], ['powder_200g', 'pouch', '200g pouch'], ['powder_3kg', 'large_pouch', '3kg pouch']]
    .map(([id, key, label]) => ({ g: packs[id].egg_whites * recon.egg_white_powder_g, href: BAKERY_ROUTES[key], label })),
  dose, drinksPerLitre: 1000 / dose,
  openedDays: shelf.liquid_opened_days, openedTemp: shelf.liquid_opened_temp_c, unopenedMonths: shelf.unopened_months,
  recipes: { meringue: facts.applications.meringue.dose_g, mousse: facts.applications['chocolate-mousse'].dose_g, macarons: facts.applications.macarons.dose_g, pavlova: bakeryFacts.pavlova.aquafaba_g },
  tetrapakWhites: packs.liquid_1l.egg_whites, pouch200Whites: packs.powder_200g.egg_whites,
};
const TOOL_TITLES = {
  'egg-white': 'Egg white converter', 'whole-egg': 'Whole egg converter', powder: 'Powder calculator', recipe: 'Recipe converter',
  'opened-date': 'Opened-pack date calculator', event: 'Event calculator', reorder: 'Weekly reorder',
  transport: 'Transport weight', 'pastry-month': 'Pastry section planner',
};

// Hero photos: the site's own pictures, by subject.
const U = '/wp-content/uploads/2026/10/';
const C = '/wp-content/uploads/2025/09/VERYAQUAFABA_RECIPES_HD_';
const W = '/wp-content/uploads/2026/where-to-buy/';
const PHOTOS = {
  'P4-042': `${U}egg-white.webp`, 'P4-061': `${U}whole-egg.webp`, 'P4-062': `${U}aquafaba-powder.webp`, 'P4-063': `${U}baking-powder.webp`,
  'P4-078': `${U}dacquoise.webp`, 'P4-079': `${U}marshmallows.webp`, 'P4-068': `${U}which-aquafaba-to-buy.webp`, 'P4-069': `${U}200g-pouch.webp`,
  'P4-073': `${U}before-you-use-aquafaba.webp`, 'P4-072': `${U}liquid-aquafaba.webp`, 'P4-075': `${U}aquafaba-composition.webp`,
  'P4-071': `${U}1l-tetrapak.webp`, 'P4-074': `${U}reference-index.webp`, 'P4-038': `${C}THE-SUNSET.webp`,
  'P4-040': `${C}GIN-FIZZ.webp`, 'P4-039': `${U}liquid-aquafaba-1t.webp`, 'P4-067': `${U}macarons-powder.webp`,
  'P4-059': `${U}egg-yolk.webp`, 'P4-060': `${U}how-to-whip-aquafaba.webp`, 'P4-056': `${U}aquafaba-vs-egg-white.webp`,
  'P4-025': `${C}WHITE-LADY.webp`, 'P4-029': `${U}aquafaba-food-manufacturing.webp`, 'P4-026': `${U}aquafaba-pastry-bakery.webp`,
  'P4-027': `${U}mayonnaise-powder.webp`, 'P4-028': `${C}GIN-FIZZ.webp`, 'P4-092': `${U}egg-white-supply.webp`, 'P4-031': `${U}aquafaba-wholesale.webp`,
  'P4-035': `${U}which-aquafaba-to-buy.webp`, 'P4-036': `${U}aquafaba-food-manufacturing.webp`, 'P4-049': `${U}liquid-aquafaba-10l.webp`,
  'P4-050': `${U}liquid-aquafaba-10l.webp`, 'P4-051': `${U}liquid-aquafaba-1t.webp`, 'P4-053': `${U}3kg-pouch.webp`, 'P4-054': `${U}liquid-aquafaba-1t.webp`,
  'P4-001': `${C}PISCO-SOUR.webp`, 'P4-002': `${C}AMARETTO-SOUR.webp`, 'P4-003': `${C}WHITE-LADY.webp`, 'P4-004': `${C}LA-ROSEE.webp`,
  'P4-006': `${C}AMARETTO-SOUR.webp`, 'P4-043': `${C}PISCO-SOUR.webp`, 'P4-044': `${C}WHITE-LADY.webp`, 'P4-045': `${C}LA-ROSEE.webp`,
  'P4-046': `${C}THE-SUNSET.webp`, 'P4-047': `${C}GIN-FIZZ.webp`, 'P4-007': `${C}AMARETTO-SOUR.webp`, 'P4-011': `${C}THE-SUNSET.webp`,
  'P4-008': `${C}LA-ROSEE.webp`, 'P4-009': `${C}GIN-FIZZ.webp`, 'P4-010': `${C}PISCO-SOUR.webp`, 'P4-012': `${C}WHITE-LADY.webp`,
  'P4-081': `${C}GIN-FIZZ.webp`, 'P4-013': `${U}meringue-powder.webp`, 'P4-014': `${U}raspberry-macarons.webp`, 'P4-015': `${U}aquafaba-pastry-bakery.webp`,
  'P4-016': `${U}baking-powder.webp`, 'P4-017': `${U}pavlova.webp`, 'P4-018': `${U}aquafaba-pastry-bakery.webp`,
  'P4-019': `${U}aquafaba-foodservices-central-kitchen.webp`, 'P4-020': `${U}catering-events.webp`, 'P4-021': `${U}aquafaba-foodservices-central-kitchen.webp`,
  'P4-022': `${U}chocolate-mousse-powder.webp`, 'P4-023': `${U}chocolate-mousse-powder.webp`, 'P4-032': `${U}egg-white-supply.webp`,
  'P4-033': `${U}aquafaba-food-manufacturing.webp`, 'P4-034': `${U}liquid-aquafaba-10l.webp`, 'P4-082': `${W}macaron-chocolate.webp`,
  'P4-083': `${W}macaron-pistachio.webp`, 'P4-084': `${W}macaron-orange.webp`, 'P4-085': `${W}macaron-lavender.webp`,
  'P4-086': `${W}macaron-pink.webp`, 'P4-087': `${W}macaron-coffee.webp`, 'P4-077': `${U}reference-index.webp`, 'P4-089': `${U}aquafaba-wholesale.webp`,
};

// The branch of each route: breadcrumb parent and eyebrow.
function branch(route) {
  if (route.startsWith(TOOLS_ROOTS.en)) return [{ name: R.toolsPage.crumb, href: TOOLS_ROOTS.en }];
  if (route.startsWith(cocktailsRoot('en'))) return [{ name: R.applicationsName, href: APPLICATION_ROOTS.en }, { name: 'Cocktails', href: cocktailsRoot('en') }];
  if (route.startsWith(BAKERY_ROUTES.powder)) return [{ name: 'Aquafaba powder', href: BAKERY_ROUTES.powder }];
  for (const section of ['professional', 'reference', 'where-to-buy']) {
    if (route.startsWith(SECTION_ROOTS[section].en)) return [{ name: R.sections[section], href: SECTION_ROOTS[section].en }];
  }
  return [];
}

// Compound words the generator wrote without their hyphen (the site keeps them, editorial guidelines).
const HYPHENS = [
  [/\bbag in box(es)?\b/gi, (m, s) => `${m[0] === 'B' ? 'B' : 'b'}ag-in-box${s || ''}`],
  [/\bready made\b/gi, (m) => `${m[0]}eady-made`],
  [/\begg free\b/gi, (m) => `${m[0]}gg-free`],
  [/\bbest before\b(?= date)/gi, (m) => `${m[0]}est-before`],
  [/\bpre ?batch(ed|es|ing)?\b/gi, (m, s) => `${m[0]}re-batch${s || ''}`],
  [/\bnon negotiable\b/gi, (m) => `${m[0]}on-negotiable`],
  [/\bcheck ins\b/gi, (m) => `${m[0]}heck-ins`],
  [/\bhotel wide\b/gi, (m) => `${m[0]}otel-wide`],
  [/\bco packer\b/gi, (m) => `${m[0]}o-packer`],
];
const fixWords = (s) => HYPHENS.reduce((t, [re, to]) => t.replace(re, to), String(s || ''));
// A FAQ answer is printed as text and copied into the FAQPage JSON-LD: the tags the model wrote in it are dropped.
const plain = (s) => fixWords(s).replace(/<[^>]+>/g, '');

// Blank-line paragraphs; a block that is already HTML (table, list) stays as it is; single breaks inside a paragraph
// are line breaks (a short list the model wrote line by line).
// A link the model wrote into the prose stays only when it points to a real route of the site; otherwise its text stays.
const knownLinks = (html) => html.replace(/<a\b[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, (m, href, inner) => (KNOWN.has(href.split('#')[0]) ? `<a href="${href}">${inner}</a>` : inner));
const blocks = (text) => knownLinks(fixWords(text)).split(/\n{2,}/).map((b) => b.trim()).filter(Boolean)
  .map((b) => (/^<(table|ul|ol|p|h3|div)\b/i.test(b) ? b : `<p>${b.replace(/\n+/g, '<br>')}</p>`)).join('\n');

// A Go further label is the anchor keyword as a short line: capital first letter, and a question mark on a question.
const linkLabel = (s) => { const t = s.charAt(0).toUpperCase() + s.slice(1); return /^Is /.test(t) && !t.endsWith('?') ? `${t}?` : t; };

// Each anchor goes on its own text, the first time that text appears outside a tag or a link; the rest go to Go further.
function placeLinks(htmls, anchors, route) {
  const left = [];
  for (const anchor of anchors) {
    const href = anchor.url;
    if (!href || href.split('#')[0] === route || !KNOWN.has(href.split('#')[0])) continue;
    const text = String(anchor.text || '').trim();
    const re = new RegExp(`(^|[^\\w-])(${text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})(?![\\w-])`, 'i');
    let placed = false;
    for (let i = 0; i < htmls.length && !placed; i++) {
      let inLink = 0;
      htmls[i] = htmls[i].split(/(<[^>]+>)/).map((part) => {
        if (placed) return part;
        if (part.startsWith('<')) { if (/^<a\b/i.test(part)) inLink++; if (/^<\/a>/i.test(part)) inLink--; return part; }
        if (inLink || !text || !re.test(part)) return part;
        placed = true;
        return part.replace(re, (m, pre, word) => `${pre}<a href="${href}">${word}</a>`);
      }).join('');
    }
    if (!placed) left.push({ href, label: linkLabel(text) });
  }
  return left;
}

function build(id, gen) {
  const [route, title, tool] = NOVEXP[id];
  const d = gen.data;
  const intro = blocks(d.intro.texto);
  const sections = d.content.secciones.map((s, i) => ({ type: 'rich-text', id: `s${i + 1}`, title: fixWords(s.h2), html: blocks(s.texto) }));
  if (d.end.cierre) sections.at(-1).html += `\n${blocks(d.end.cierre)}`;
  const htmls = [intro, ...sections.map((s) => s.html)];
  const left = placeLinks(htmls, d.end.anchors || [], route);
  const [introHtml, ...sectionHtml] = htmls;
  sections.forEach((s, i) => { s.html = sectionHtml[i]; });
  const parents = branch(route);
  const seen = new Set([route]);
  const related = [...left, ...parents.map((p) => ({ href: p.href, label: p.name })), { href: RESOURCES_ROOTS.en, label: ui.resourcesLink || 'Resources' }, { href: products, label: ui.productsLink }]
    .filter((l) => l.href && !seen.has(l.href) && seen.add(l.href));
  const seoTitle = title.length <= 60 ? title : fixWords(d.intro.title);
  const content = {
    locale: 'en', route, type: 'editorial', section: 'novexp', key: id,
    source: { event: gen.id, lote: gen.lote },
    ...dated('en'),
    seo: { title: seoTitle, description: fixWords(d.intro.description), image: PHOTOS[id] },
    heroImage: PHOTOS[id],
    hero: { eyebrow: parents.at(-1)?.name || R.sections.professional, title, text: '', html: introHtml },
    sections: [
      ...(tool ? [{ type: 'nov-tool', id: 'tool', title: TOOL_TITLES[tool], kind: tool, facts: TOOL_FACTS }] : []),
      ...sections,
    ],
    faq: { title: ui.faqTitle, items: (d.end.faq || []).map((f) => ({ q: plain(f.question), a: plain(f.answer) })) },
    whereToBuy: whereToBuy('en', null, contact, route, title),
    related: { title: ui.relatedTitle, items: related },
    breadcrumbs: [
      { name: ui.home, href: localeChrome('en').logoHref },
      { name: ui.resourcesName, href: RESOURCES_ROOTS.en },
      ...parents,
      { name: title, href: route },
    ],
  };
  content.jsonLd = applicationJsonLd(content);
  return gramStyle(content);
}

// Only the topics whose copy has come back are built; the routes of the others wait.
export const novexpPages = Object.fromEntries(Object.entries(GENERATED).filter(([id]) => NOVEXP[id]).map(([id, gen]) => [NOVEXP[id][0], build(id, gen)]));
export const novexpBuilt = new Set(Object.keys(novexpPages));
