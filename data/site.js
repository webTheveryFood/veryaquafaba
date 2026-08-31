export const siteNavigation = [
  { label: 'About', href: '/what-is-aquafaba' },
  { label: 'Products', href: '/buy-aquafaba' },
  { label: 'Recipes', href: '/aquafaba-recipes' },
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
  homeHref: '/what-is-aquafaba',
  company: 'VERY Food Company SAS CP 50 169 94597 Rungis Cedex | FRANCE',
  registration: 'R.C.S. Créteil 909 030 140 | TVA FR34909030140 | APE 72.19Z',
  email: 'orders@theveryfood.co',
  copyright: '©2025 The Very Food Co. – All rights reserved',
  terms: '/terms-of-use',
  privacy: '/privacy-policy',
  termsLabel: 'Terms of Use',
  privacyLabel: 'Privacy Policy',
  madeWithLabel: 'Made with',
  creditConnector: 'by',
  carbonBadge: {
    footprint: '0.31g of CO₂/view',
    rating: 'Cleaner than 65% of pages tested',
    label: 'Website Carbon',
    href: 'https://www.websitecarbon.com/',
  },
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
  copyright: '©2025 The Very Food Co. – Todos los derechos reservados',
  terms: '/es/terminos-de-uso/',
  privacy: '/es/politica-de-privacidad/',
  termsLabel: 'Términos de uso',
  privacyLabel: 'Política de privacidad',
  madeWithLabel: 'Hecho con',
  creditConnector: 'por',
  carbonBadge: {
    ...footerContent.carbonBadge,
    rating: 'Más limpio que el 65% de las páginas analizadas',
  },
};

export const footerContentDe = {
  ...footerContent,
  homeHref: '/de/was-ist-aquafaba/',
  copyright: '©2025 The Very Food Co. – Alle Rechte vorbehalten',
  terms: '/de/impressum/',
  privacy: '/de/datenschutzrichtlinie/',
  termsLabel: 'Impressum',
  privacyLabel: 'Datenschutzrichtlinie',
  madeWithLabel: 'Mit',
  creditVerb: 'gemacht',
  creditConnector: 'von',
};

export const footerContentFr = {
  ...footerContent,
  homeHref: '/fr/qu-est-ce-que-laquafaba/',
  copyright: '©2025 The Very Food Co. – Tous droits réservés',
  terms: '/fr/mentions-legales/',
  privacy: '/fr/politique-de-confidentialite/',
  termsLabel: 'Mentions légales',
  privacyLabel: 'Politique de confidentialité',
  madeWithLabel: 'Réalisé avec',
  creditConnector: 'par',
};

export const footerContentNl = {
  ...footerContent,
  homeHref: '/nl/wat-is-aquafaba/',
  copyright: '©2025 The Very Food Co. – Alle rechten voorbehouden',
  terms: '/nl/colofon/',
  privacy: '/nl/privacybeleid/',
  termsLabel: 'Colofon',
  privacyLabel: 'Privacybeleid',
  madeWithLabel: 'Met',
  creditVerb: 'gemaakt',
  creditConnector: 'door',
};
