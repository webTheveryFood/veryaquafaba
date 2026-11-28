import { NOVEXP, NOVEXP_I18N } from './novexp-routes.js';
import { pageRegistry, getTranslations } from '../../lib/page-registry';
import { RESOURCES_ROOTS, APPLICATION_ROOTS, SECTION_ROOTS, TOOLS_ROOTS } from '../applications/routes.js';

// Links toward the November expansion pages from the English pages that already rank (16 November 2026): each new
// page gets two or more, from the pages closest to its subject, in their Go further list. Only pages of the earlier
// expansions; the original pages (home, Products, recipes, storage) are not touched.
const IN = {
  // application guides
  '/resources/applications/meringue/': ['P4-042', 'P4-013', 'P4-062'],
  '/resources/applications/macarons/': ['P4-042', 'P4-014'],
  '/resources/applications/chocolate-mousse/': ['P4-022', 'P4-023'],
  '/resources/applications/mayonnaise/': ['P4-027'],
  '/resources/applications/baking/': ['P4-061', 'P4-063', 'P4-026', 'P4-059'],
  '/resources/applications/cocktails/': ['P4-081', 'P4-038', 'P4-040'],
  '/resources/applications/dacquoise/': ['P4-078'],
  '/resources/applications/marshmallows/': ['P4-079'],
  // cocktail pages
  '/resources/applications/cocktails/gin-fizz/': ['P4-081', 'P4-011'],
  '/resources/applications/cocktails/the-sunset/': ['P4-081', 'P4-011'],
  '/resources/applications/cocktails/pre-batching-sours/': ['P4-003', 'P4-007', 'P4-038'],
  '/resources/applications/cocktails/drinks-producers/': ['P4-007', 'P4-008', 'P4-009', 'P4-010', 'P4-011', 'P4-012', 'P4-028'],
  '/resources/applications/cocktails/alcohol-free-foamer/': ['P4-008'],
  '/resources/applications/cocktails/cocktail-foamer/': ['P4-043', 'P4-044', 'P4-012'],
  '/resources/applications/cocktails/aquafaba-vs-chickpea-water/': ['P4-075', 'P4-071'],
  '/resources/applications/cocktails/aquafaba-powder-in-cocktails/': ['P4-045'],
  // professional pages
  '/resources/professional/bars-cocktails/': ['P4-001', 'P4-002', 'P4-003', 'P4-004', 'P4-006', 'P4-043', 'P4-044', 'P4-045', 'P4-046', 'P4-047', 'P4-025', 'P4-040'],
  '/resources/professional/pastry-bakery/': ['P4-013', 'P4-014', 'P4-015', 'P4-016', 'P4-017', 'P4-018', 'P4-026', 'P4-067'],
  '/resources/professional/foodservice/': ['P4-019', 'P4-020', 'P4-021', 'P4-022', 'P4-023'],
  '/resources/professional/food-manufacturing/': ['P4-029', 'P4-033', 'P4-059', 'P4-056', 'P4-092', 'P4-032', 'P4-034', 'P4-031', 'P4-035', 'P4-036'],
  '/resources/professional/catering-events/': ['P4-004', 'P4-020', 'P4-022', 'P4-038'],
  '/resources/professional/aquafaba-wholesale/': ['P4-089', 'P4-049', 'P4-050', 'P4-051', 'P4-053', 'P4-054'],
  '/resources/professional/egg-white-supply/': ['P4-031', 'P4-035', 'P4-036', 'P4-050'],
  '/resources/professional/sauces-dressings/': ['P4-027'],
  // packs and hubs
  '/resources/aquafaba-powder/': ['P4-069', 'P4-062', 'P4-078', 'P4-079'],
  '/resources/aquafaba-powder/30g-pouch/': ['P4-069', 'P4-063'],
  '/resources/aquafaba-powder/200g-pouch/': ['P4-062', 'P4-067', 'P4-016'],
  '/resources/aquafaba-powder/3kg-pouch/': ['P4-039', 'P4-016'],
  '/resources/liquid-aquafaba/': ['P4-073', 'P4-072'],
  '/resources/liquid-aquafaba/1l-tetrapak/': ['P4-073', 'P4-040'],
  '/resources/liquid-aquafaba/10l-bag-in-box/': ['P4-050', 'P4-019'],
  '/resources/liquid-aquafaba/1t-ibc/': ['P4-039', 'P4-051', 'P4-054'],
  '/resources/tools/pack-finder/': ['P4-039', 'P4-062'],
  // reference and egg substitutes
  '/resources/reference/powder-reconstitution/': ['P4-062', 'P4-069'],
  '/resources/reference/which-aquafaba-to-buy/': ['P4-039', 'P4-071', 'P4-068'],
  '/resources/reference/very-aquafaba-composition/': ['P4-075', 'P4-071', 'P4-077'],
  '/resources/reference/before-you-use-aquafaba/': ['P4-073', 'P4-072', 'P4-077'],
  '/resources/reference/how-to-whip-aquafaba/': ['P4-060'],
  '/resources/egg-substitutes/egg-white/': ['P4-042', 'P4-074'],
  '/resources/egg-substitutes/whole-egg/': ['P4-061', 'P4-063', 'P4-059'],
  '/resources/egg-substitutes/egg-yolk/': ['P4-063'],
  '/resources/egg-substitutes/aquafaba-vs-egg-white/': ['P4-056', 'P4-060', 'P4-074'],
  // where to buy
  '/resources/where-to-buy/united-kingdom/': ['P4-085', 'P4-082', 'P4-083', 'P4-084', 'P4-086', 'P4-087'],
  '/resources/where-to-buy/united-states/': ['P4-068', 'P4-082', 'P4-083'],
  '/resources/where-to-buy/france/': ['P4-087', 'P4-068'],
  '/resources/where-to-buy/canada/': ['P4-082', 'P4-083', 'P4-086'],
  '/resources/where-to-buy/germany/': ['P4-084', 'P4-085'],
};

// December expansion (fest, 24 November 2026): the pages that already rank link to the December pages closest to their
// subject. A link appears only once its page is built (the guard in addNovexpLinks), so the lots can arrive one by one.
const FEST_IN = {
  '/resources/applications/meringue/': ['D-113', 'D-115', 'D-116', 'D-117', 'D-114', 'D-301', 'D-128', 'D-129', 'D-102'],
  '/resources/applications/chocolate-mousse/': ['D-118', 'D-119', 'D-120', 'D-302'],
  '/resources/applications/macarons/': ['D-121', 'D-303'],
  '/resources/applications/mayonnaise/': ['D-213', 'D-304'],
  '/resources/applications/baking/': ['D-101', 'D-111', 'D-112', 'D-125', 'D-211', 'D-219', 'D-212', 'D-217', 'D-126'],
  '/resources/applications/cocktails/': ['D-123', 'D-103', 'D-205', 'D-218'],
  '/resources/applications/marshmallows/': ['D-124'],
  '/resources/applications/pavlova/': ['D-122', 'D-127'],
  '/resources/egg-substitutes/egg-white/': ['D-204', 'D-215', 'D-210', 'D-202'],
  '/resources/egg-substitutes/whole-egg/': ['D-214', 'D-101', 'D-109'],
  '/resources/egg-substitutes/is-aquafaba-vegan/': ['D-109', 'D-214'],
  '/resources/where-to-buy/united-states/': ['D-104', 'D-201', 'D-209'],
  '/resources/where-to-buy/united-kingdom/': ['D-201', 'D-209'],
  '/resources/where-to-buy/germany/': ['D-104', 'D-106'],
  '/resources/where-to-buy/france/': ['D-104'],
  '/resources/where-to-buy/canada/': ['D-104'],
  '/resources/aquafaba-powder/200g-pouch/': ['D-110', 'D-203', 'D-106'],
  '/resources/liquid-aquafaba/1l-tetrapak/': ['D-105', 'D-108', 'D-106'],
  '/resources/reference/how-to-whip-aquafaba/': ['D-210', 'D-127'],
  '/resources/reference/how-long-does-aquafaba-keep/': ['D-106', 'D-108'],
  '/resources/reference/can-you-freeze-aquafaba/': ['D-108'],
  '/resources/reference/is-aquafaba-chickpea-water/': ['D-206', 'D-207', 'D-208'],
  '/resources/reference/homemade-or-ready-aquafaba/': ['D-107', 'D-206'],
  '/resources/reference/what-can-you-make-with-aquafaba/': ['D-207', 'D-215', 'D-216'],
  '/resources/where-to-buy/can-you-buy-aquafaba-on-its-own/': ['D-201', 'D-209'],
  '/resources/tools/whole-egg-converter/': ['D-111', 'D-112', 'D-211'],
  '/resources/tools/egg-white-converter/': ['D-215', 'D-113'],
};
for (const [route, ids] of Object.entries(FEST_IN)) IN[route] = [...(IN[route] || []), ...ids];

// The hub links that close a Go further list; the new pages go in before them.
const GENERIC = new Set(['/buy-aquafaba/', '/aquafaba-recipes/', RESOURCES_ROOTS.en, APPLICATION_ROOTS.en, TOOLS_ROOTS.en, ...Object.values(SECTION_ROOTS).map((s) => s.en)]);

export function addNovexpLinks(pages) {
  const missing = [];
  for (const [route, ids] of Object.entries(IN)) {
    const items = pages[route]?.related?.items;
    if (!items) { missing.push(route); continue; }
    const have = new Set(items.map((i) => i.href));
    const add = ids.map((id) => NOVEXP[id]).filter((x) => x && pages[x[0]]).map(([href, label]) => ({ href, label })).filter((l) => !have.has(l.href) && have.add(l.href));
    const at = items.findIndex((i) => GENERIC.has(i.href));
    items.splice(at < 0 ? items.length : at, 0, ...add);
  }
  // The same links in German, French and Dutch: from the translation of each of those pages to the new pages that exist
  // in that language, under their native title, before the hub links of that language.
  const byRoute = new Map(pageRegistry.map((p) => [p.route, p]));
  const tr = (route, locale) => getTranslations(byRoute.get(route))[locale];
  for (const locale of Object.keys(NOVEXP_I18N)) {
    const generic = new Set([...GENERIC].map((r) => tr(r, locale)).filter(Boolean));
    for (const [enRoute, ids] of Object.entries(IN)) {
      const items = pages[tr(enRoute, locale)]?.related?.items;
      if (!items) continue;
      const have = new Set(items.map((i) => i.href));
      const add = ids.map((id) => NOVEXP_I18N[locale][id]).filter((x) => x && pages[x[0]]).map(([href, label]) => ({ href, label })).filter((l) => !have.has(l.href) && have.add(l.href));
      const at = items.findIndex((i) => generic.has(i.href));
      items.splice(at < 0 ? items.length : at, 0, ...add);
    }
  }
  return missing;
}

export const NOVEXP_INBOUND = IN;
