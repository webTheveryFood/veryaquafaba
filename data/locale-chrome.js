import { siteLanguages, footerContent, footerContentEs, footerContentDe } from './site';

// Header nav + footer + logo target for each locale, so the clean native
// content pages (recipes, legal, utility) get the same localized site chrome
// as the bespoke pages instead of rendering bare.
const CHROME = {
  en: {
    current: 'EN',
    logoHref: '/',
    footer: footerContent,
    navigation: [
      { label: 'About', href: '/what-is-aquafaba' },
      { label: 'Products', href: '/buy-aquafaba/' },
      { label: 'Recipes', href: '/aquafaba-recipes/' },
      { label: 'Contact', href: '/buy-aquafaba/#contact' },
    ],
  },
  de: {
    current: 'DE',
    logoHref: '/de/was-ist-aquafaba/',
    footer: footerContentDe,
    navigation: [
      { label: 'Über uns', href: '/de/was-ist-aquafaba/' },
      { label: 'Produkte', href: '/de/aquafaba-kaufen/' },
      { label: 'Rezepte', href: '/de/rezepte/' },
      { label: 'Kontakt', href: '/de/aquafaba-kaufen/#contact' },
    ],
  },
  fr: {
    current: 'FR',
    logoHref: '/fr/qu-est-ce-que-laquafaba/',
    footer: footerContent,
    navigation: [
      { label: 'À propos', href: '/fr/qu-est-ce-que-laquafaba/' },
      { label: 'Produits', href: '/fr/acheter-aquafaba/' },
      { label: 'Recettes', href: '/fr/aquafaba-recettes/' },
      { label: 'Contact', href: '/fr/acheter-aquafaba/#contact' },
    ],
  },
  nl: {
    current: 'NL',
    logoHref: '/nl/wat-is-aquafaba/',
    footer: footerContent,
    navigation: [
      { label: 'Over ons', href: '/nl/wat-is-aquafaba/' },
      { label: 'Producten', href: '/nl/aquafaba-kopen/' },
      { label: 'Recepten', href: '/nl/aquafaba-recepten/' },
      { label: 'Contact', href: '/nl/aquafaba-kopen/#contact' },
    ],
  },
  es: {
    current: 'ES',
    logoHref: '/es/',
    footer: footerContentEs,
    navigation: [
      { label: 'Sobre nosotros', href: '/es/' },
      { label: 'Productos', href: '/es/comprar-aquafaba/' },
      { label: 'Recetas', href: '/es/recetas-de-aquafaba/' },
      { label: 'Contacto', href: '/es/comprar-aquafaba/#contact' },
    ],
  },
};

export function localeChrome(locale = 'en') {
  return { languages: siteLanguages, ...(CHROME[(locale||'en').slice(0,2)] || CHROME.en) };
}

// Build the language-switcher options for a page: each language points at the
// SAME page translated (from the registry's getTranslations), so switching
// language on a recipe stays on that recipe instead of jumping to the landing.
export function switcherLanguages(locale, translations) {
  const langs = localeChrome(locale).languages;
  if (!translations || !Object.keys(translations).length) return langs;
  return langs.map((lang) => {
    const href = translations[(lang.code || '').toLowerCase()];
    return href ? { ...lang, href } : lang;
  });
}
