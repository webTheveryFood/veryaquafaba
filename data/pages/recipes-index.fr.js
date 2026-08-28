import { recipesIndexEn } from './recipes-index.en';
import { footerContent } from '../site';
import { recipeLanguages } from '../recipe-languages';

export const recipesIndexFr = {
  ...recipesIndexEn,
  page: { ...recipesIndexEn.page, currentLanguage: 'FR', logoHref: '/fr/qu-est-ce-que-laquafaba/' },
  languages: recipeLanguages,
  navigation: [
    { label: "À propos", href: '/fr/qu-est-ce-que-laquafaba/' },
    { label: "Produits", href: '/fr/acheter-aquafaba/' },
    { label: "Recettes", href: '/fr/aquafaba-recettes/' },
    { label: "Contact", href: '/fr/acheter-aquafaba/#contact' },
  ],
  footer: footerContent,
  seo: {
    title: "Aquafaba Astuces et Recettes - VERY AQUAFABA",
    description: "Explore tested recipes and inspiration from VERY AQUAFABA. Use our liquid and powdered formats in bulk to create high-performance dishes",
    image: "/wp-content/uploads/2025/09/VERYAQUAFABA_RECIPES_COVER.webp",
  },
  hero: {
    desktopTitleImage: "/wp-content/uploads/2025/09/VERYAQUAFABA_TITLE_FR_ASTUCES-01.svg",
    mobileTitleImage: "/wp-content/uploads/2025/09/VERYAQUAFABA_TITLE_FR_ASTUCES-02.svg",
    title: "Apprenez, cuisinez, innovez avec l’aquafaba",
  },
  intro: {
    leadHtml: "Bienvenue dans l’espace dédié à l’aquafaba, un centre de ressources pour maîtriser cet ingrédient polyvalent. <br />L’aquafaba est le <strong>liquide issu de la cuisson des pois chiches</strong>, apprécié pour ses <strong>propriétés moussantes, liantes et émulsifiantes</strong>. Il est utilisé en pâtisserie moderne, en boulangerie, dans les sauces et même dans les cocktails comme <strong>substitut fonctionnel aux œufs</strong>.",
    splitHtml: "Cette page est divisée en deux sections :</p><p><strong>• GUIDES & ASTUCES :</strong> pour comprendre ce qu’est l’aquafaba et comment l’utiliser<br /><strong>• RECETTES :</strong> pour l’appliquer directement dans des créations sucrées, salées et des cocktails",
  },
  guides: {
    title: "Guides & Astuces",
    items: [
      { href: "/fr/aquafaba-recettes/laquafaba-de-a-a-z/", label: "L’aquafaba de A à Z : le guide complet" },
      { href: "/fr/aquafaba-recettes/comment-faire-de-laquafaba/", label: "Comment faire de l’aquafaba à la maison" },
      { href: "/fr/aquafaba-recettes/comment-utiliser-laquafaba-en-patisserie-et-boulangerie/", label: "Comment utiliser l’aquafaba dans vos recettes" },
      { href: "/fr/aquafaba-recettes/ratio-aquafaba-oeuf/", label: "Quelle quantité d’aquafaba équivaut à un œuf" },
      { href: "/fr/aquafaba-recettes/comment-conserver-congeler-laquafaba/", label: "Comment conserver et congeler l’aquafaba" },
    ],
  },
  recipes: {
    ...recipesIndexEn.recipes,
    title: "recettes",
    subtitle: "Libérez votre créativité avec des recettes à base d’aquafaba",
    banner: "/wp-content/uploads/2025/09/BANNER_AQUAFABAQUAFABA.svg",
    items: [
      { title: "meringues\nà l’aquafaba", href: "/fr/aquafaba-recettes/meringues/", image: "/wp-content/uploads/2025/09/AQUAFABA_RECIPES_MINI_LEMON-PIE.png", alt: "Photo of Meringues baked with Aquafaba" },
      { title: "macarons\nà l’aquafaba", href: "/fr/aquafaba-recettes/macarons/", image: "/wp-content/uploads/2025/09/AQUAFABA_RECIPES_MINI_MACARON.png", alt: "Photo of Macarons baked with Aquafaba" },
      { title: "mayonnaise\nà l’aquafaba", href: "/fr/aquafaba-recettes/mayonnaise/", image: "/wp-content/uploads/2025/09/AQUAFABA_RECIPES_MINI_MAYONNAISE.png", alt: "Photo of Mayonnaise made with Aquafaba" },
      { title: "cocktails\nà l’aquafaba", href: "/fr/aquafaba-recettes/whiskey-sour/", image: "/wp-content/uploads/2025/09/VERYAQUAFABA_RECIPES_MINI_PISCOSOUR.jpg", alt: "Photo of a Cocktail Sour made with Aquafaba" },
      { title: "Gâteaux\nà l’aquafaba", href: "/fr/aquafaba-recettes/mousse-au-chocolat/", image: "/wp-content/uploads/2025/09/AQUAFABA_RECIPES_MINI_CHOCOLATE.png", alt: "Photo of Chocolate mousse cooked with Aquafaba" },
      { title: "Pavlova\nà l’aquafaba", href: "/fr/aquafaba-recettes/pavlova/", image: "/wp-content/uploads/2025/09/VERYAQUAFABA_RECIPES_MINI_PAVLOVA.jpg", alt: "Photo of Pavlova cooked with Aquafaba" },
    ],
  },
  productCta: {
    ...recipesIndexEn.productCta,
    title: "FINI LES CONSERVES, PASSEZ PRO",
    subtitle: "Adoptez VERY AQUAFABA, la solution professionnelle prête à l’emploi",
    products: [
      { ...recipesIndexEn.productCta.products[0], text: "Facile à stocker et à doser, idéale pour les industriels, les boulangeries et les cuisines professionnelles." },
      { ...recipesIndexEn.productCta.products[1], text: "Prêt à verser et à utiliser, parfait pour les boulangeries, les bars et les cuisines." },
    ],
    action: { label: "voir les produits", href: '/fr/acheter-aquafaba/' },
  },
};
