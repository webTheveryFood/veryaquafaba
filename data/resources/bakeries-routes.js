// First five English samples from the October 2026 bakery expansion plan.
// Kept independent of page builders so the route registry can import it safely.
export const BAKERY_ROUTES = {
  powder: '/resources/aquafaba-powder/',
  liquid: '/resources/liquid-aquafaba/',
  tetrapak: '/resources/liquid-aquafaba/1l-tetrapak/',
  bib: '/resources/liquid-aquafaba/10l-bag-in-box/',
  ibc: '/resources/liquid-aquafaba/1t-ibc/',
  reference: '/resources/reference/',
  choose: '/resources/reference/which-aquafaba-to-buy/',
  composition: '/resources/reference/very-aquafaba-composition/',
  before: '/resources/reference/before-you-use-aquafaba/',
  whip: '/resources/reference/how-to-whip-aquafaba/',
  whole_egg: '/resources/egg-substitutes/whole-egg/',
  yolk: '/resources/egg-substitutes/egg-yolk/',
  wholesale: '/resources/professional/aquafaba-wholesale/',
  sauces: '/resources/professional/sauces-dressings/',
  catering: '/resources/professional/catering-events/',
  versus: '/resources/egg-substitutes/aquafaba-vs-egg-white/',
  p_meringue: '/resources/aquafaba-powder/meringue/',
  p_mousse: '/resources/aquafaba-powder/chocolate-mousse/',
  p_mayonnaise: '/resources/aquafaba-powder/mayonnaise/',
  p_macarons: '/resources/aquafaba-powder/macarons/',
  p_baking: '/resources/aquafaba-powder/baking/',
  pavlova: '/resources/applications/pavlova/',
  pavlova_calc: '/resources/applications/pavlova/quantity-calculator/',
  pavlova_process: '/resources/applications/pavlova/process-and-checks/',
  p_pavlova: '/resources/aquafaba-powder/pavlova/',
  dacquoise_calc: '/resources/applications/dacquoise/quantity-calculator/',
  dacquoise_process: '/resources/applications/dacquoise/process-and-checks/',
  pack_finder: '/resources/tools/pack-finder/',
  pouch: '/resources/aquafaba-powder/200g-pouch/',
  small_pouch: '/resources/aquafaba-powder/30g-pouch/',
  large_pouch: '/resources/aquafaba-powder/3kg-pouch/',
  vegan: '/resources/egg-substitutes/is-aquafaba-vegan/',
  supply: '/resources/professional/egg-white-supply/',
  dacquoise: '/resources/applications/dacquoise/',
  marshmallows: '/resources/applications/marshmallows/',
  marshmallows_calc: '/resources/applications/marshmallows/quantity-calculator/',
  marshmallows_process: '/resources/applications/marshmallows/process-and-checks/',
  raspberry: '/resources/applications/macarons/raspberry-macarons/',
  yumgo: '/resources/egg-substitutes/yumgo-alternative/',
  ruf: '/resources/egg-substitutes/ruf-alternative/',
  oggs: '/resources/egg-substitutes/oggs-alternative/',
};

export const BAKERY_ROUTE_KEYS = Object.fromEntries(Object.entries(BAKERY_ROUTES).map(([key, route]) => [route, key]));
// Calculator and process-sheet pages: rendered with the application child template.
export const BAKERY_CHILD_KEYS = new Set(['pavlova_calc', 'pavlova_process', 'dacquoise_calc', 'dacquoise_process', 'marshmallows_calc', 'marshmallows_process']);

// Native URL slugs follow the existing resource, application and tool branches.
const BAKERY_SLUGS = {
  fr: {
    powder: 'aquafaba-en-poudre', liquid: 'aquafaba-liquide', tetrapak: 'aquafaba-liquide/tetrapak-1l', bib: 'aquafaba-liquide/bag-in-box-10l', ibc: 'aquafaba-liquide/ibc-1t',
    reference: 'reference', choose: 'reference/quel-aquafaba-acheter', composition: 'reference/composition-very-aquafaba', before: 'reference/avant-utilisation-aquafaba', whip: 'reference/comment-monter-aquafaba',
    whole_egg: 'substitut-oeuf/oeuf-entier', yolk: 'substitut-oeuf/jaune-oeuf', versus: 'substitut-oeuf/aquafaba-ou-blanc-oeuf', vegan: 'substitut-oeuf/aquafaba-vegan', yumgo: 'substitut-oeuf/alternative-yumgo', ruf: 'substitut-oeuf/alternative-ruf', oggs: 'substitut-oeuf/alternative-oggs',
    wholesale: 'professionnels/aquafaba-en-gros', sauces: 'professionnels/sauces-vinaigrettes', catering: 'professionnels/traiteurs-evenementiel', supply: 'professionnels/approvisionnement-blanc-oeuf',
    p_meringue: 'aquafaba-en-poudre/meringue', p_mousse: 'aquafaba-en-poudre/mousse-au-chocolat', p_mayonnaise: 'aquafaba-en-poudre/mayonnaise', p_macarons: 'aquafaba-en-poudre/macarons', p_baking: 'aquafaba-en-poudre/patisserie', p_pavlova: 'aquafaba-en-poudre/pavlova',
    pouch: 'aquafaba-en-poudre/sachet-200g', small_pouch: 'aquafaba-en-poudre/sachet-30g', large_pouch: 'aquafaba-en-poudre/sachet-3kg',
    pavlova: 'applications/pavlova', dacquoise: 'applications/dacquoise', marshmallows: 'applications/guimauves', raspberry: 'applications/macarons/macarons-framboise', pack_finder: 'outils/choisir-conditionnement',
  },
  de: {
    powder: 'aquafaba-pulver', liquid: 'fluessiges-aquafaba', tetrapak: 'fluessiges-aquafaba/1l-tetrapak', bib: 'fluessiges-aquafaba/10l-bag-in-box', ibc: 'fluessiges-aquafaba/1t-ibc',
    reference: 'wissen', choose: 'wissen/welches-aquafaba-kaufen', composition: 'wissen/very-aquafaba-zusammensetzung', before: 'wissen/vor-der-verwendung', whip: 'wissen/aquafaba-aufschlagen',
    whole_egg: 'ei-ersatz/vollei', yolk: 'ei-ersatz/eigelb', versus: 'ei-ersatz/aquafaba-oder-eiweiss', vegan: 'ei-ersatz/ist-aquafaba-vegan', yumgo: 'ei-ersatz/yumgo-alternative', ruf: 'ei-ersatz/ruf-alternative', oggs: 'ei-ersatz/oggs-alternative',
    wholesale: 'profis/aquafaba-grosshandel', sauces: 'profis/saucen-dressings', catering: 'profis/catering-veranstaltungen', supply: 'profis/eiweiss-versorgung',
    p_meringue: 'aquafaba-pulver/baiser', p_mousse: 'aquafaba-pulver/schokoladenmousse', p_mayonnaise: 'aquafaba-pulver/mayonnaise', p_macarons: 'aquafaba-pulver/macarons', p_baking: 'aquafaba-pulver/backen', p_pavlova: 'aquafaba-pulver/pavlova',
    pouch: 'aquafaba-pulver/200g-beutel', small_pouch: 'aquafaba-pulver/30g-beutel', large_pouch: 'aquafaba-pulver/3kg-beutel',
    pavlova: 'anwendungen/pavlova', dacquoise: 'anwendungen/dacquoise', marshmallows: 'anwendungen/marshmallows', raspberry: 'anwendungen/macarons/himbeer-macarons', pack_finder: 'werkzeuge/packung-finden',
  },
  nl: {
    powder: 'aquafabapoeder', liquid: 'vloeibare-aquafaba', tetrapak: 'vloeibare-aquafaba/1l-tetrapak', bib: 'vloeibare-aquafaba/10l-bag-in-box', ibc: 'vloeibare-aquafaba/1t-ibc',
    reference: 'kennis', choose: 'kennis/welke-aquafaba-kopen', composition: 'kennis/samenstelling-very-aquafaba', before: 'kennis/voor-u-aquafaba-gebruikt', whip: 'kennis/aquafaba-opkloppen',
    whole_egg: 'ei-vervanger/heel-ei', yolk: 'ei-vervanger/eidooier', versus: 'ei-vervanger/aquafaba-of-eiwit', vegan: 'ei-vervanger/is-aquafaba-vegan', yumgo: 'ei-vervanger/yumgo-alternatief', ruf: 'ei-vervanger/ruf-alternatief', oggs: 'ei-vervanger/oggs-alternatief',
    wholesale: 'professionals/aquafaba-groothandel', sauces: 'professionals/sauzen-dressings', catering: 'professionals/catering-evenementen', supply: 'professionals/eiwitvoorziening',
    p_meringue: 'aquafabapoeder/meringue', p_mousse: 'aquafabapoeder/chocolademousse', p_mayonnaise: 'aquafabapoeder/mayonaise', p_macarons: 'aquafabapoeder/macarons', p_baking: 'aquafabapoeder/bakken', p_pavlova: 'aquafabapoeder/pavlova',
    pouch: 'aquafabapoeder/zakje-200g', small_pouch: 'aquafabapoeder/zakje-30g', large_pouch: 'aquafabapoeder/zakje-3kg',
    pavlova: 'toepassingen/pavlova', dacquoise: 'toepassingen/dacquoise', marshmallows: 'toepassingen/marshmallows', raspberry: 'toepassingen/macarons/frambozenmacarons', pack_finder: 'hulpmiddelen/verpakking-kiezen',
  },
};
const ROOTS = { fr: '/fr/ressources/', de: '/de/ressourcen/', nl: '/nl/bronnen/' };
const CHILDREN = { fr: ['calculateur-quantites', 'procede-et-controles'], de: ['mengenrechner', 'prozess-und-kontrolle'], nl: ['hoeveelheden-berekenen', 'proces-en-controles'] };
export const BAKERY_LOCALE_ROUTES = { en: BAKERY_ROUTES };
for (const [locale, slugs] of Object.entries(BAKERY_SLUGS)) {
  const localized = Object.fromEntries(Object.entries(slugs).map(([key, slug]) => [key, `${ROOTS[locale]}${slug}/`]));
  for (const app of ['pavlova', 'dacquoise', 'marshmallows']) {
    localized[`${app}_calc`] = `${localized[app]}${CHILDREN[locale][0]}/`;
    localized[`${app}_process`] = `${localized[app]}${CHILDREN[locale][1]}/`;
  }
  BAKERY_LOCALE_ROUTES[locale] = localized;
  for (const [key, route] of Object.entries(localized)) BAKERY_ROUTE_KEYS[route] = key;
}
export const bakeryRoute = (locale, key) => BAKERY_LOCALE_ROUTES[locale][key];
