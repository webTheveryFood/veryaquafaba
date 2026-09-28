import { RESOURCES_ROOTS } from './applications/routes.js';

export const siteNavigation = [
  { label: 'About', href: '/' },
  { label: 'Products', href: '/buy-aquafaba/' },
  { label: 'Recipes', href: '/aquafaba-recipes/' },
  { label: 'Contact', href: '/buy-aquafaba/#contact' },
];

export const siteLanguages = [
  { code: 'EN', locale: 'en-GB', href: '/', label: 'English', flagClass: 'gb' },
  { code: 'DE', locale: 'de-DE', href: '/de/was-ist-aquafaba/', label: 'Deutsch', flagClass: 'de' },
  { code: 'FR', locale: 'fr-FR', href: '/fr/qu-est-ce-que-laquafaba/', label: 'Français', flagClass: 'fr' },
  { code: 'NL', locale: 'nl-NL', href: '/nl/wat-is-aquafaba/', label: 'Nederlands', flagClass: 'nl' },
  // ponytail: Spanish access hidden for now — the /es/ pages still exist in Next,
  // just unlinked. Uncomment to re-expose the Spanish switcher option.
  // { code: 'ES', locale: 'es-ES', href: '/es/', label: 'Español', flagClass: 'es' },
];

export const footerContent = {
  homeHref: '/',
  // Legal entity behind the site: Maison Médelys (client, September 2026), figures as
  // registered on pappers.fr/entreprise/maison-medelys-389433566.
  company: 'Maison Médelys SASU, Bât. F5C, PLA, CP 50169, 9 avenue de Normandie, 94150 Rungis | FRANCE',
  registration: 'R.C.S. Créteil 389 433 566 | TVA FR21389433566 | APE 46.39B',
  email: 'orders@theveryfood.co',
  copyright: '©2026 Maison Médelys. All rights reserved',
  terms: '/terms-of-use/',
  privacy: '/privacy-policy/',
  termsLabel: 'Terms of Use',
  privacyLabel: 'Privacy Policy',
  resources: RESOURCES_ROOTS.en,
  resourcesLabel: 'Resources',
  madeWithLabel: 'Made with',
  creditConnector: 'by',
  credits: [
    { label: 'Marine Fanet', href: 'https://www.instagram.com/fanetm/' },
    { label: 'virage.studio', href: 'https://virage.studio' },
  ],
  socials: [
    { label: 'Linkedin', href: 'https://www.linkedin.com/company/very-food-company/' },
    { label: 'Instagram', href: 'https://www.instagram.com/theveryfood.co/' },
  ],
};

export const footerContentEs = {
  ...footerContent,
  homeHref: '/es/',
  copyright: '©2026 Maison Médelys. Todos los derechos reservados',
  terms: '/es/terminos-de-uso/',
  privacy: '/es/politica-de-privacidad/',
  termsLabel: 'Términos de uso',
  privacyLabel: 'Política de privacidad',
  resources: null,
  resourcesLabel: null,
  madeWithLabel: 'Hecho con',
  creditConnector: 'por',
};

export const footerContentDe = {
  ...footerContent,
  homeHref: '/de/was-ist-aquafaba/',
  copyright: '©2026 Maison Médelys. Alle Rechte vorbehalten',
  terms: '/de/impressum/',
  privacy: '/de/datenschutzrichtlinie/',
  termsLabel: 'Impressum',
  privacyLabel: 'Datenschutzrichtlinie',
  resources: RESOURCES_ROOTS.de,
  resourcesLabel: 'Ressourcen',
  madeWithLabel: 'Mit',
  creditVerb: 'gemacht',
  creditConnector: 'von',
};

export const footerContentFr = {
  ...footerContent,
  homeHref: '/fr/qu-est-ce-que-laquafaba/',
  copyright: '©2026 Maison Médelys. Tous droits réservés',
  terms: '/fr/mentions-legales/',
  privacy: '/fr/politique-de-confidentialite/',
  termsLabel: 'Mentions légales',
  privacyLabel: 'Politique de confidentialité',
  resources: RESOURCES_ROOTS.fr,
  resourcesLabel: 'Ressources',
  madeWithLabel: 'Réalisé avec',
  creditConnector: 'par',
};

export const footerContentNl = {
  ...footerContent,
  homeHref: '/nl/wat-is-aquafaba/',
  copyright: '©2026 Maison Médelys. Alle rechten voorbehouden',
  terms: '/nl/colofon/',
  privacy: '/nl/privacybeleid/',
  termsLabel: 'Colofon',
  privacyLabel: 'Privacybeleid',
  resources: RESOURCES_ROOTS.nl,
  resourcesLabel: 'Bronnen',
  madeWithLabel: 'Met',
  creditVerb: 'gemaakt',
  creditConnector: 'door',
};
