import { homeEn } from './home.en';
import { siteLanguages, footerContent } from '../site';

export const homeFr = {
  ...homeEn,
  currentLanguage: 'FR',
  languages: siteLanguages,
  logoHref: '/fr/qu-est-ce-que-laquafaba/',
  navigation: [
    { label: "À propos", href: '/fr/qu-est-ce-que-laquafaba/' },
    { label: "Produits", href: '/fr/acheter-aquafaba/' },
    { label: "Recettes", href: '/fr/aquafaba-recettes/' },
    { label: "Contact", href: '/fr/acheter-aquafaba/#contact' },
  ],
  footer: footerContent,
  seo: {
    ...homeEn.seo,
    title: "Qu’est-ce que l’aquafaba ? | VERY AQUAFABA – Alternative végétale aux œufs - VERY AQUAFABA",
    description: "Découvrez l’aquafaba, l’eau de cuisson des pois chiches qui remplace les blancs d’œufs et peut même substituer les œufs entiers dans certaines recettes. VERY AQUAFABA est une alternative aux œufs, clean-label et sans allergènes, conçue pour les chefs, boulangers et industriels.",
  },
  hero: {
    ...homeEn.hero,
    title: "Bye bye le blanc d’œuf !",
    primaryAction: { label: "DÉCOUVREZ L’AQUAFABA", href: '/fr/acheter-aquafaba/' },
    secondaryAction: { label: "DEMANDEZ VOS ÉCHANTILLONS", href: '/fr/acheter-aquafaba/#contact' },
  },
  about: {
    ...homeEn.about,
    title: "Qu’est-ce que l’aquafaba ?",
    leftImage: "/wp-content/uploads/2025/09/AQUAFABA_MACARON_CHICKPEAS_FR.svg",
    rightImage: "/wp-content/uploads/2025/09/AQUAFABA_MACARON_FLOWER_FR.svg",
    paragraphs: [
      "L’aquafaba est l’eau de cuisson des pois chiches, mais entre de bonnes mains, elle devient un puissant substitut des blancs d’œufs dans une large gamme de recettes. Elle peut également remplacer l’œuf entier dans certaines préparations où ses propriétés émulsifiantes et liantes jouent un rôle.",
      "Notre solution, VERY AQUAFABA, est une alternative végétale aux œufs, conçue pour les cuisines professionnelles et la production industrielle, offrant les performances des blancs d’œufs sans les allergènes, ni les risques d’approvisionnement ou de conservation.",
      "Contrairement à l’eau de pois chiches maison, elle est soigneusement traitée pour éliminer les odeurs indésirables, garantir une concentration constante et assurer des résultats prévisibles lot après lot. Disponible en formats liquide et poudre, elle se monte en mousses stables pour meringues, desserts et cocktails, et lie efficacement les pâtisseries et sauces comme la mayonnaise.",
      "Monter, lier, émulsionner : VERY AQUAFABA est l’alternative clean-label aux œufs qui offre des performances constantes aux chefs, boulangers, barmen et industriels à travers l’Europe, l’Amérique du Nord et l’Australie.",
    ],
    action: { label: "En savoir plus", href: '/fr/acheter-aquafaba/' },
  },
  products: {
    ...homeEn.products,
    title: "POUDRE OU LIQUIDE, À VOUS DE CHOISIR",
    subtitle: "Deux versions, des possibilités infinies",
    items: [
      { ...homeEn.products.items[0], text: "Facile à stocker et à doser, idéale pour les industriels, les boulangeries et les cuisines professionnelles." },
      { ...homeEn.products.items[1], text: "Prêt à verser et à utiliser, parfait pour les boulangeries, les bars et les cuisines." },
    ],
    action: { label: "Voir les produits", href: '/fr/acheter-aquafaba/' },
  },
  benefits: {
    ...homeEn.benefits,
    title: "POURQUOI LES PROFESSIONNELS CHOISISSENT VERY AQUAFABA ?",
    items: [
      { image: "/wp-content/uploads/2025/09/VERYAQUAFABA_RTB_FR_PERFORMANCE.svg", alt: "Aquafaba PERFORMANCE FIABLE", text: "Des mousses fermes et des émulsions durables" },
      { image: "/wp-content/uploads/2025/09/VERYAQUAFABA_RTB_FR_CONSERVATION.svg", alt: "Aquafaba CONSERVATION ALLONGÉE", text: "Améliore la stabilité des produits" },
      { image: "/wp-content/uploads/2025/09/VERYAQUAFABA_RTB_FR_SANS-ALLERGENES.svg", alt: "Aquafaba Sans Allergènes", text: "Sans œufs, produits laitiers, gluten ni soja" },
      { image: "/wp-content/uploads/2025/09/VERYAQUAFABA_RTB_FR_EMISSIONS.svg", alt: "Aquafaba MOINS D'ÉMISSIONS", text: "Réduit le CO₂ et valorise les coproduits" },
      { image: "/wp-content/uploads/2025/09/VERYAQUAFABA_RTB_FR_PRIX.svg", alt: "Aquafaba économique", text: "Optimise le stockage et limite les pertes" },
    ],
  },
  recipes: {
    ...homeEn.recipes,
    title: "DES MACARONS À LA MAYONNAISE",
    subtitle: "L’aquafaba n’est pas seulement un substitut, c’est un ingrédient polyvalent pour les cuisines modernes",
    items: [
      { ...homeEn.recipes.items[0], title: "meringues", text: "Croquantes à l’extérieur, moelleuses à l’intérieur" },
      { ...homeEn.recipes.items[1], title: "macarons", text: "Une structure parfaite sans œufs" },
      { ...homeEn.recipes.items[2], title: "mayonnaise", text: "Des émulsions crémeuses et stables" },
      { ...homeEn.recipes.items[3], title: "cocktails", text: "Des sours et fizzes bien mousseux" },
      { ...homeEn.recipes.items[4], title: "cakes", text: "Une levée légère et stable" },
      { ...homeEn.recipes.items[5], title: "Pavlova", text: "Coque croquante & cœur fondant" },
    ],
  },
  industry: {
    ...homeEn.industry,
    title: "ADOPTÉ PAR LES ACTEURS DE L’AGROALIMENTAIRE",
    subtitle: "Chefs, distributeurs et industriels nous font confiance",
  },
  cta: {
    ...homeEn.cta,
    title: "PRÊT À INNOVER ?",
    subtitle: "Intégrez VERY AQUAFABA dès aujourd’hui dans votre cuisine ou votre ligne de production",
    primaryAction: { label: "Voir les produits", href: '/fr/acheter-aquafaba/' },
    secondaryAction: { label: "DEMANDEZ VOS ÉCHANTILLONS", href: '/fr/acheter-aquafaba/#contact' },
  },
};
