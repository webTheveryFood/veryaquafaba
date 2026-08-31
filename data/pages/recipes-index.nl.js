import { recipesIndexEn } from './recipes-index.en';
import { footerContentNl } from '../site';
import { recipeLanguages } from '../recipe-languages';

export const recipesIndexNl = {
  ...recipesIndexEn,
  page: { ...recipesIndexEn.page, currentLanguage: 'NL', logoHref: '/nl/wat-is-aquafaba/' },
  languages: recipeLanguages,
  navigation: [
    { label: "Over ons", href: '/nl/wat-is-aquafaba/' },
    { label: "Producten", href: '/nl/aquafaba-kopen/' },
    { label: "Recepten", href: '/nl/aquafaba-recepten/' },
    { label: "Contact", href: '/nl/aquafaba-kopen/#contact' },
  ],
  footer: footerContentNl,
  seo: {
    title: "Aquafaba Tips & Recepten - VERY AQUAFABA",
    description: "Explore tested recipes and inspiration from VERY AQUAFABA. Use our liquid and powdered formats in bulk to create high-performance dishes",
    image: "/wp-content/uploads/2025/09/VERYAQUAFABA_RECIPES_COVER.webp",
  },
  hero: {
    desktopTitleImage: "/wp-content/uploads/2025/09/VERYAQUAFABA_TITLE_NL_TIPS-01.svg",
    mobileTitleImage: "/wp-content/uploads/2025/09/VERYAQUAFABA_TITLE_NL_TIPS-02.svg",
    title: "Leer, kook en creëer met aquafaba",
  },
  intro: {
    leadHtml: "Welkom in de aquafaba-sectie, een kenniscentrum om dit veelzijdige ingrediënt volledig onder de knie te krijgen.<br />Aquafaba is het <strong>vocht van gekookte kikkererwten</strong>, gewaardeerd om zijn <strong>schuimende, bindende en emulgerende eigenschappen</strong>. Het wordt gebruikt in de moderne patisserie, bakkerij, sauzen en zelfs in cocktails als <strong>functioneel ei-alternatief</strong>.",
    splitHtml: "Deze pagina is opgesplitst in twee delen:</p><p><strong>• GIDSEN & TIPS:</strong> om te begrijpen wat aquafaba is en hoe ermee te werken<br /><strong>• RECEPTEN:</strong> om het direct toe te passen in zoete, hartige en drankcreaties",
  },
  guides: {
    title: "Gidsen & Tips",
    items: [
      { href: "/nl/aquafaba-recepten/aquafaba-van-a-tot-z/", label: "Aquafaba van A tot Z: de complete gids" },
      { href: "/nl/aquafaba-recepten/hoe-maak-je-aquafaba/", label: "Hoe maak je aquafaba thuis" },
      { href: "/nl/aquafaba-recepten/hoe-aquafaba-in-het-bakken-gebruiken/", label: "Hoe aquafaba te gebruiken in uw recepten" },
      { href: "/nl/aquafaba-recepten/hoeveel-staat-gelijk-aan-een-ei/", label: "Hoeveel aquafaba staat gelijk aan één ei" },
      { href: "/nl/aquafaba-recepten/aquafaba-bewaren-invriezen/", label: "Hoe aquafaba te bewaren en in te vriezen" },
    ],
  },
  recipes: {
    ...recipesIndexEn.recipes,
    title: "RECEPTEN",
    subtitle: "Ontketen uw creativiteit met aquafaba-recepten",
    banner: "/wp-content/uploads/2025/09/BANNER_AQUAFABAQUAFABA.svg",
    items: [
      { title: "meringues\nmet aquafaba", href: "/nl/aquafaba-recepten/aquafaba-meringues/", image: "/wp-content/uploads/2025/09/AQUAFABA_RECIPES_MINI_LEMON-PIE.png", alt: "Photo of Meringues baked with Aquafaba" },
      { title: "macarons\nmet aquafaba", href: "/nl/aquafaba-recepten/macarons/", image: "/wp-content/uploads/2025/09/AQUAFABA_RECIPES_MINI_MACARON.png", alt: "Photo of Macarons baked with Aquafaba" },
      { title: "mayonaise\nmet aquafaba", href: "/nl/aquafaba-recepten/mayonaise/", image: "/wp-content/uploads/2025/09/AQUAFABA_RECIPES_MINI_MAYONNAISE.png", alt: "Photo of Mayonnaise made with Aquafaba" },
      { title: "cocktails\nmet aquafaba", href: "/nl/aquafaba-recepten/whiskey-sour/", image: "/wp-content/uploads/2025/09/VERYAQUAFABA_RECIPES_MINI_PISCOSOUR.jpg", alt: "Photo of a Cocktail Sour made with Aquafaba" },
      { title: "Taarten\nmet aquafaba", href: "/nl/aquafaba-recepten/chocolademousse/", image: "/wp-content/uploads/2025/09/AQUAFABA_RECIPES_MINI_CHOCOLATE.png", alt: "Photo of Chocolate mousse cooked with Aquafaba" },
      { title: "Pavlova\nmet aquafaba", href: "/nl/aquafaba-recepten/pavlova/", image: "/wp-content/uploads/2025/09/VERYAQUAFABA_RECIPES_MINI_PAVLOVA.jpg", alt: "Photo of Pavlova cooked with Aquafaba" },
    ],
  },
  productCta: {
    ...recipesIndexEn.productCta,
    title: "VERGEET DE BLIKJES, GA PROFESSIONEEL",
    subtitle: "Stap over op VERY AQUAFABA, de gebruiksklare professionele oplossing",
    products: [
      { ...recipesIndexEn.productCta.products[0], text: "Gemakkelijk op te slaan en te doseren, ideaal voor industriële gebruikers, bakkerijen en professionele keukens." },
      { ...recipesIndexEn.productCta.products[1], text: "Gebruiksklaar en eenvoudig te schenken, perfect voor bakkerijen, bars en keukens." },
    ],
    action: { label: "BEKIJK PRODUCTEN", href: '/nl/aquafaba-kopen/' },
  },
};
