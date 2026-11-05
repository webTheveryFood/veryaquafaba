import { bakeryRoute } from './bakeries-routes.js';

// Two sentences on the homes (November 2026) toward pages Google had not crawled yet: the pack finder and the powder
// section under the two products, the pavlova, dacquoise and marshmallow guides under the recipes.
const MACARONS_RECIPE = { fr: '/fr/aquafaba-recettes/macarons/' };
const a = (href, text) => `<a href="${href}">${text}</a>`;

const COPY = {
  en: (r) => ({
    products: `${a(r.pack_finder, 'Find your pack')} from how much you use each week, or ${a(r.powder, 'make up the powder')} only as you need it.`,
    recipes: `${a(r.pavlova, 'Pavlova')}, ${a(r.dacquoise, 'dacquoise')} and ${a(r.marshmallows, 'marshmallows')} work with aquafaba too, with the quantities for each batch.`,
  }),
  fr: (r) => ({
    products: `${a(r.pack_finder, 'Choisissez votre format')} selon ce que vous utilisez chaque semaine, ou ${a(r.powder, 'reconstituez la poudre')} au fur et à mesure.`,
    // The French macaron recipe was crawled and left out of the index (November 2026): the strongest French page links it.
    recipes: `Les ${a(r.macarons_recipe, 'macarons')}, la ${a(r.pavlova, 'pavlova')}, la ${a(r.dacquoise, 'dacquoise')} et les ${a(r.marshmallows, 'guimauves')} se font aussi à l’aquafaba, avec les quantités pour chaque fournée.`,
  }),
  de: (r) => ({
    products: `${a(r.pack_finder, 'Finden Sie die passende Packung')} für Ihren Wochenverbrauch, oder ${a(r.powder, 'rühren Sie Pulver an')}, wenn Sie es brauchen.`,
    recipes: `${a(r.pavlova, 'Pavlova')}, ${a(r.dacquoise, 'Dacquoise')} und ${a(r.marshmallows, 'Marshmallows')} gelingen auch mit Aquafaba, mit den Mengen für jeden Ansatz.`,
  }),
  nl: (r) => ({
    products: `${a(r.pack_finder, 'Kies uw verpakking')} op basis van wat u per week gebruikt, of ${a(r.powder, 'maak het poeder aan')} wanneer u het nodig hebt.`,
    recipes: `${a(r.pavlova, 'Pavlova')}, ${a(r.dacquoise, 'dacquoise')} en ${a(r.marshmallows, 'marshmallows')} lukken ook met aquafaba, met de hoeveelheden per bereiding.`,
  }),
};

// { products, recipes } in HTML, or null for a home without them (Spanish).
export function homeGuides(locale) {
  const make = COPY[locale];
  if (!make) return null;
  const r = Object.fromEntries(['pack_finder', 'powder', 'pavlova', 'dacquoise', 'marshmallows'].map((k) => [k, bakeryRoute(locale, k)]));
  r.macarons_recipe = MACARONS_RECIPE[locale];
  return make(r);
}
