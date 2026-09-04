import { siteNavigation, footerContent } from '../site';
import { recipeLanguages } from '../recipe-languages';

export const recipesIndexEn = {
  page: {
    elementorPageId: '87',
    currentLanguage: 'EN',
    logoHref: '/what-is-aquafaba',
    headerIds: {
      root: 'bfa9b42',
      logoContainer: '1f922e4',
      logoWidget: '3512872',
      rightContainer: '1efe4c6',
      navContainer: '538046f',
      navWidget: '4672801',
      languageContainer: 'e7e16be',
      languageWidget: '3a4e9d3',
    },
  },
  languages: recipeLanguages,
  navigation: siteNavigation,
  footer: footerContent,
  seo: {
    title: 'Aquafaba Resources & Recipes - VERY AQUAFABA',
    description: 'Explore tested recipes and inspiration from VERY AQUAFABA. Use our liquid and powdered formats in bulk to create high-performance dishes',
    image: '/wp-content/uploads/2025/09/VERYAQUAFABA_RECIPES_COVER.webp',
  },
  hero: {
    desktopTitleImage: '/wp-content/uploads/2025/09/AQUAFABA_TITLE_RESOURCES-AND-RECIPES-1.svg',
    mobileTitleImage: '/wp-content/uploads/2025/09/AQUAFABA_TITLE_RESOURCES-AND-RECIPES.svg',
    mobileTitleAlt: 'Titre RESOURCES-AND-RECIPES',
    title: 'Learn, Cook, Create with Aquafaba',
  },
  intro: {
    leadHtml: 'Welcome to the complete aquafaba recipes hub, your professional resource for mastering this versatile ingredient.<br />Aquafaba is <strong>the liquid from cooked chickpeas</strong>, prized for its <strong>foaming, binding, and emulsifying properties</strong>. It is used in modern patisserie, bakery, sauces, and even cocktails as a <strong>functional egg substitute</strong>.',
    splitHtml: 'This page is split into two sections:</p><p><strong>• GUIDES &amp; HOW-TO:</strong> to understand what aquafaba is and how to work with it<br /><strong>• RECIPES:</strong> to apply it directly in sweet, savoury, and beverage creations',
  },
  guides: {
    title: 'Guides & how-to',
    items: [
      { href: '/aquafaba-recipes/aquafaba-101/', label: 'aquafaba 101: the complete guide' },
      { href: '/aquafaba-recipes/how-to-make-aquafaba/', label: 'How to make aquafaba at home' },
      { href: '/aquafaba-recipes/how-to-use-aquafaba-in-baking/', label: 'how to use aquafaba in baking' },
      { href: '/aquafaba-recipes/egg-ratio/', label: 'how much aquafaba equals one egg' },
      { href: '/aquafaba-recipes/how-to-store-and-freeze-aquafaba/', label: 'how to store and freeze aquafaba' },
    ],
  },
  recipes: {
    title: 'recipes',
    subtitle: 'Unleash your creativity with aquafaba recipes',
    banner: '/wp-content/uploads/2025/09/BANNER_AQUAFABAQUAFABA.svg',
    items: [
      {
        title: 'meringues\nwith aquafaba',
        href: '/aquafaba-recipes/meringues',
        image: '/wp-content/uploads/2025/09/AQUAFABA_RECIPES_MINI_LEMON-PIE.webp',
        alt: 'Photo of Meringues baked with Aquafaba',
      },
      {
        title: 'macarons\nwith aquafaba',
        href: '/aquafaba-recipes/macarons',
        image: '/wp-content/uploads/2025/09/AQUAFABA_RECIPES_MINI_MACARON.webp',
        alt: 'Photo of Macarons baked with Aquafaba',
      },
      {
        title: 'mayonnaise\nwith aquafaba',
        href: '/aquafaba-recipes/mayonnaise',
        image: '/wp-content/uploads/2025/09/AQUAFABA_RECIPES_MINI_MAYONNAISE.webp',
        alt: 'Photo of Mayonnaise made with Aquafaba',
      },
      {
        title: 'cocktails\nwith aquafaba',
        href: '/aquafaba-recipes/whiskey-sour',
        image: '/wp-content/uploads/2025/09/VERYAQUAFABA_RECIPES_MINI_PISCOSOUR.webp',
        alt: 'Photo of a Cocktail Sour made with Aquafaba',
      },
      {
        title: 'cakes\nwith aquafaba',
        href: '/aquafaba-recipes/chocolate-mousse/',
        image: '/wp-content/uploads/2025/09/AQUAFABA_RECIPES_MINI_CHOCOLATE.webp',
        alt: 'Photo of Chocolate mousse cooked with Aquafaba',
      },
      {
        title: 'Pavlova\nwith aquafaba',
        href: '/aquafaba-recipes/pavlova',
        image: '/wp-content/uploads/2025/09/VERYAQUAFABA_RECIPES_MINI_PAVLOVA.webp',
        alt: 'Photo of Pavlova cooked with Aquafaba',
      },
    ],
  },
  productCta: {
    title: 'skip the cans, go pro',
    subtitle: 'Switch to VERY AQUAFABA, the ready-to-use professional solution',
    products: [
      {
        key: 'powder',
        titleImage: '/wp-content/uploads/2025/09/AQUAFABA_TITLE_POWDER-1.svg',
        packImage: '/wp-content/uploads/2025/09/VERYAQUAFABA_PACKS_POWDER.webp',
        packSrcSet: '/wp-content/uploads/2025/09/VERYAQUAFABA_PACKS_POWDER.webp 717w, /wp-content/uploads/2025/09/VERYAQUAFABA_PACKS_POWDER-280x300.webp 280w',
        alt: 'Aquafaba powder supplier : packs for individual use and bulk professional kitchens',
        text: 'Easy to store and measure, best for factories, bakeries and professional kitchens.',
      },
      {
        key: 'liquid',
        titleImage: '/wp-content/uploads/2025/09/AQUAFABA_TITLE_LIQUID-1.svg',
        packImage: '/wp-content/uploads/2025/09/VERYAQUAFABA_PACKS-LIQUIDE.webp',
        packSrcSet: '/wp-content/uploads/2025/09/VERYAQUAFABA_PACKS-LIQUIDE.webp 717w, /wp-content/uploads/2025/09/VERYAQUAFABA_PACKS-LIQUIDE-280x300.webp 280w',
        alt: 'Aquafaba liquis supplier : packs for individual use and bulk professional kitchens',
        text: 'Ready to pour and use, perfect for bakeries, bars, and kitchens.',
      },
    ],
    action: { label: 'view products', href: '/buy-aquafaba' },
  },
};
