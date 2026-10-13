// data/page-families.json (measurement brief, 13 October 2026, point 5): every live URL and every
// planned URL of expansion pack 3 with its family and language, so the reports group conversions by
// family (a goal rule reads a single condition and the slugs change per language).
// Live pages are classified from the running build (data-page-type) and the route tables; planned
// pages stay in the file (live: false) until their route exists. Run after each batch goes live:
//   node scripts/page-families.mjs [http://localhost:3058]
import fs from 'node:fs';
import { APPLICATION_ROOTS, CHILD_ALIASES, COCKTAIL_ALIASES, FOAM_SLUGS, RESOURCES_ROOTS, SECTION_ROOTS, TOOLS_ROOTS } from '../data/applications/routes.js';

const BASE = process.argv[2] || 'http://localhost:3058';
const FILE = new URL('../data/page-families.json', import.meta.url);
const routes = JSON.parse(fs.readFileSync(new URL('../data/routes.json', import.meta.url), 'utf8')).filter((r) => !r.startsWith('/es/'));
const lang = (r) => r.match(/^\/(de|fr|nl)\//)?.[1] || 'en';

// The migrated pages carry no data-page-type: their families come from these tables.
const ORIGINAL = {
  '/': 'home', '/de/was-ist-aquafaba/': 'what-is-aquafaba', '/fr/qu-est-ce-que-laquafaba/': 'what-is-aquafaba', '/nl/wat-is-aquafaba/': 'what-is-aquafaba',
  '/buy-aquafaba/': 'products', '/de/aquafaba-kaufen/': 'products', '/fr/acheter-aquafaba/': 'products', '/nl/aquafaba-kopen/': 'products',
  '/aquafaba-recipes/': 'recipes-index', '/de/rezepte/': 'recipes-index', '/fr/aquafaba-recettes/': 'recipes-index', '/nl/aquafaba-recepten/': 'recipes-index',
};
const RECIPE_ROOTS = ['/aquafaba-recipes/', '/de/rezepte/', '/fr/aquafaba-recettes/', '/nl/aquafaba-recepten/'];
const COCKTAILS = ['pisco-sour', 'amaretto-sour', 'gin-fizz', 'white-lady', 'la-rosee', 'the-sunset'];
const roots = (map) => Object.values(map);
const sectionOf = (r) => Object.keys(SECTION_ROOTS).find((s) => roots(SECTION_ROOTS[s]).some((root) => r.startsWith(root)));

function family(r, type) {
  const slug = r.split('/').filter(Boolean).pop();
  if (ORIGINAL[r]) return ORIGINAL[r];
  if (RECIPE_ROOTS.some((root) => r.startsWith(root))) return 'recipe';
  if (roots(TOOLS_ROOTS).includes(r)) return 'tools-hub';
  if (roots(RESOURCES_ROOTS).includes(r)) return 'resources-hub';
  if (roots(APPLICATION_ROOTS).includes(r)) return 'applications-index';
  switch (type) {
    case 'application': return 'application-guide';
    // A cocktail's calculator and sheet render with the guides' child template: the parent slug tells them apart.
    case 'application-child':
    case 'cocktail-child': {
      const prefix = COCKTAILS.includes(COCKTAIL_ALIASES[r.split('/').filter(Boolean).at(-2)]) ? 'cocktail-' : '';
      return prefix + (CHILD_ALIASES[slug] === 'calculator' ? 'quantity-calculator' : 'process-sheet');
    }
    case 'cocktail': {
      const key = COCKTAIL_ALIASES[slug];
      return COCKTAILS.includes(key) ? 'cocktail-guide' : key in FOAM_SLUGS ? 'cocktail-foam' : 'cocktail-question';
    }
    case 'topic-index': return `${sectionOf(r)}-hub`;
    case 'topic': return sectionOf(r) === 'where-to-buy' ? 'where-to-buy-country' : sectionOf(r);
    default: return 'site-page'; // legal, utility
  }
}

const live = [];
for (const r of routes) {
  const html = await (await fetch(BASE + r)).text();
  live.push({ path: r, family: family(r, html.match(/data-page-type="([^"]+)"/)?.[1]), lang: lang(r), live: true });
}
const before = fs.existsSync(FILE) ? JSON.parse(fs.readFileSync(FILE, 'utf8')) : [];
const planned = before.filter((p) => !p.live && !routes.includes(p.path));
fs.writeFileSync(FILE, `${JSON.stringify([...live, ...planned], null, 1)}\n`);
const count = (list) => Object.entries(list.reduce((a, p) => ({ ...a, [p.family]: (a[p.family] || 0) + 1 }), {})).map(([k, v]) => `${k} ${v}`).join(', ');
console.log(`live ${live.length}: ${count(live)}\nplanned ${planned.length}: ${count(planned)}`);
