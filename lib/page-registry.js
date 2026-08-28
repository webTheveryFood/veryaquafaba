import routes from '../data/routes.json';
import { spanishRouteSources } from '../data/spanish-routes';

const RECIPE_ROOTS = {
  en: '/aquafaba-recipes/',
  fr: '/fr/aquafaba-recettes/',
  de: '/de/rezepte/',
  nl: '/nl/aquafaba-recepten/',
  es: '/es/recetas-de-aquafaba/',
};

const BUY_ROUTES = new Set([
  '/buy-aquafaba/',
  '/fr/acheter-aquafaba/',
  '/de/aquafaba-kaufen/',
  '/nl/aquafaba-kopen/',
  '/es/comprar-aquafaba/',
]);

const ABOUT_ROUTES = new Set([
  '/fr/qu-est-ce-que-laquafaba/',
  '/de/was-ist-aquafaba/',
  '/nl/wat-is-aquafaba/',
  '/es/',
]);

const LEGAL_HINTS = [
  'privacy',
  'politique-de-confidentialite',
  'datenschutzrichtlinie',
  'privacybeleid',
  'politica-de-privacidad',
  'terms-of-use',
  'terminos-de-uso',
  'mentions-legales',
  'impressum',
  'colofon',
  'aviso-legal',
];

const UTILITY_HINTS = [
  '404-',
  'under-construction',
  'enconstruction',
  'imaufbau',
  'onder-constructie',
  'en-construccion',
];

function localeForRoute(route) {
  if (route.startsWith('/es/')) return 'es';
  if (route.startsWith('/fr/')) return 'fr';
  if (route.startsWith('/de/')) return 'de';
  if (route.startsWith('/nl/')) return 'nl';
  return 'en';
}

function slugForRoute(route) {
  if (route === '/') return 'home';
  return route.split('/').filter(Boolean).at(-1) || 'home';
}

function typeForRoute(route, locale) {
  if (route === '/') return 'home';
  if (ABOUT_ROUTES.has(route)) return 'about';
  if (BUY_ROUTES.has(route)) return 'buy';
  const recipeRoot = RECIPE_ROOTS[locale];
  if (recipeRoot && route === recipeRoot) return 'recipe-index';
  if (recipeRoot && route.startsWith(recipeRoot)) return 'recipe';
  if (LEGAL_HINTS.some((hint) => route.includes(hint))) return 'legal';
  if (UTILITY_HINTS.some((hint) => route.includes(hint))) return 'utility';
  return 'generic';
}

function legalTranslationKey(route) {
  const slug = slugForRoute(route);
  const privacy = new Set([
    'privacy-policy',
    'politique-de-confidentialite',
    'datenschutzrichtlinie',
    'privacybeleid',
    'politica-de-privacidad',
  ]);
  const legal = new Set(['terms-of-use', 'mentions-legales', 'impressum', 'colofon', 'terminos-de-uso', 'aviso-legal']);
  if (privacy.has(slug)) return 'legal:privacy';
  if (legal.has(slug)) return 'legal:terms';
  return `legal:${slug}`;
}

function utilityTranslationKey(route) {
  const slug = slugForRoute(route);
  if (slug.startsWith('404-')) return 'utility:404';
  return 'utility:under-construction';
}

function translationKey(route, type) {
  if (type === 'home' || type === 'about') return 'about-aquafaba';
  if (type === 'buy') return 'buy-aquafaba';
  if (type === 'recipe-index') return 'recipes-index';
  if (type === 'legal') return legalTranslationKey(route);
  if (type === 'utility') return utilityTranslationKey(route);
  if (type !== 'recipe') return `${type}:${slugForRoute(route)}`;

  const slug = slugForRoute(route);
  const aliases = {
    mayonaise: 'mayonnaise',
    mayonesa: 'mayonnaise',
    'mousse-au-chocolat': 'chocolate-mousse',
    chocolademousse: 'chocolate-mousse',
    schokoladenmousse: 'chocolate-mousse',
    'mousse-de-chocolate': 'chocolate-mousse',
    'aquafaba-meringues': 'meringues',
    baiser: 'meringues',
    'ratio-aquafaba-oeuf': 'egg-ratio',
    'hoeveel-staat-gelijk-aan-een-ei': 'egg-ratio',
    'wieviel-entspricht-einem-ei': 'egg-ratio',
    'proporcion-aquafaba-huevo': 'egg-ratio',
    'comment-faire-de-laquafaba': 'how-to-make-aquafaba',
    'hoe-maak-je-aquafaba': 'how-to-make-aquafaba',
    'aquafaba-selber-machen': 'how-to-make-aquafaba',
    'como-hacer-aquafaba': 'how-to-make-aquafaba',
    'comment-conserver-congeler-laquafaba': 'how-to-store-and-freeze-aquafaba',
    'aquafaba-bewaren-invriezen': 'how-to-store-and-freeze-aquafaba',
    'aquafaba-lagern-einfrieren': 'how-to-store-and-freeze-aquafaba',
    'como-conservar-y-congelar-aquafaba': 'how-to-store-and-freeze-aquafaba',
    'comment-utiliser-laquafaba-en-patisserie-et-boulangerie': 'how-to-use-aquafaba-in-baking',
    'hoe-aquafaba-in-het-bakken-gebruiken': 'how-to-use-aquafaba-in-baking',
    'wie-man-aquafaba-beim-backen-verwendet': 'how-to-use-aquafaba-in-baking',
    'como-usar-aquafaba-en-reposteria-y-panaderia': 'how-to-use-aquafaba-in-baking',
    'laquafaba-de-a-a-z': 'aquafaba-101',
    'aquafaba-van-a-tot-z': 'aquafaba-101',
    'aquafaba-von-a-bis-z': 'aquafaba-101',
    'aquafaba-de-la-a-a-la-z': 'aquafaba-101',
  };

  return `recipe:${aliases[slug] || slug}`;
}

const allRoutes = routes.filter((route, index, array) => array.indexOf(route) === index);

export const pageRegistry = allRoutes.map((route) => {
  const locale = localeForRoute(route);
  const type = typeForRoute(route, locale);
  return {
    route,
    locale,
    type,
    slug: slugForRoute(route),
    sourceRoute: spanishRouteSources[route] || null,
    translationKey: translationKey(route, type),
    isProgrammatic: ['home', 'about', 'buy', 'recipe', 'recipe-index'].includes(type),
  };
});

const byRoute = new Map(pageRegistry.map((page) => [page.route, page]));

export function normalizeRoute(pathname = '/') {
  if (pathname === '/') return '/';
  return `/${pathname.split('/').filter(Boolean).join('/')}/`;
}

export function getPageModel(pathname) {
  return byRoute.get(normalizeRoute(pathname)) || null;
}

export function getTranslations(page) {
  if (!page) return {};
  return Object.fromEntries(
    pageRegistry
      // ponytail: Spanish hidden for now — drop `&& candidate.locale !== 'es'`
      // to restore ES hreflang alternates across the site.
      .filter((candidate) => candidate.translationKey === page.translationKey && candidate.locale !== 'es')
      .map((candidate) => [candidate.locale, candidate.route])
  );
}

export function getStaticRouteParams() {
  return pageRegistry.map(({ route }) => ({
    path: route === '/' ? [] : route.split('/').filter(Boolean),
  }));
}

export const PROGRAMMATIC_PAGE_TYPES = ['home', 'about', 'buy', 'recipe-index', 'recipe'];
