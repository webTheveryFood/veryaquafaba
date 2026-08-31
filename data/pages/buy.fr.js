import { buyEn } from './buy.en.js';
import { buyLanguages } from '../buy-languages.js';
import { footerContentFr } from '../site';

export const buyFr = {
  ...buyEn,
  footer: footerContentFr,
  page: {
    locale: 'fr-FR',
    currentLanguage: 'FR',
    elementorPageId: '2883',
    logoHref: '/fr/qu-est-ce-que-laquafaba/',
    headerIds: {
      root: '0edbcf4',
      logoContainer: '6ca79d0',
      logoWidget: '9b5d1df',
      rightContainer: 'e7c7fe2',
      navContainer: '556e305',
      navWidget: '10a4f54',
      languageContainer: 'fe4f0b7',
      languageWidget: 'b629f8b',
    },
  },
  navigation: [
    { label: 'À propos', href: '/fr/qu-est-ce-que-laquafaba/' },
    { label: 'Produits', href: '/fr/acheter-aquafaba/' },
    { label: 'Recettes', href: '/fr/aquafaba-recettes/' },
    { label: 'Contact', href: '/fr/acheter-aquafaba/#contact' },
  ],
  seo: {
    ...buyEn.seo,
    title: 'Produits - VERY AQUAFABA',
    description: 'Découvrez VERY AQUAFABA liquide et en poudre, une alternative végétale au blanc d’œuf conçue pour les cuisines professionnelles et la production industrielle.',
  },
  languages: buyLanguages,
  hero: {
    ...buyEn.hero,
    titleImage: '/wp-content/uploads/2025/09/VERYAQUAFABA_TITLE_FR_DEUX-VERSIONS.svg',
    title: 'Une infinité de créations',
    products: [
      { ...buyEn.hero.products[0], titleImage: '/wp-content/uploads/2025/09/VERYAQUAFABA_TITLE_FR_POUDRE-02.svg' },
      { ...buyEn.hero.products[1], titleImage: '/wp-content/uploads/2025/09/VERYAQUAFABA_TITLE_FR_LIQUIDE-01.svg' },
    ],
    actions: [
      { label: 'demandez les fiches techniques', href: '#contact' },
      { label: 'demandez vos échantillons', href: '#contact' },
    ],
  },
  intro: {
    ...buyEn.intro,
    title: 'Plus qu’une eau de pois chiche',
    paragraphs: [
      'L’aquafaba est le liquide obtenu à partir de la cuisson des pois chiches. Si les cuisiniers amateurs l’expérimentent depuis des années, les résultats restent souvent irréguliers.',
      'VERY AQUAFABA prend cette base naturelle et la transforme en ingrédient professionnel : filtré, affiné et standardisé pour une performance fiable à chaque lot. Neutre en goût, clean label et facile à utiliser, il apporte aux chefs, pâtissiers et industriels une puissance de foisonnement, de liaison et d’émulsion stable, adaptée aux besoins à grande échelle.',
    ],
  },
  technical: {
    ...buyEn.technical,
    title: 'SPÉCIFICATIONS TECHNIQUES',
    items: [
      'Durée de conservation : 6 à 24 mois selon le format',
      'Stockage : ambiant pour la poudre, réfrigéré pour le liquide après ouverture',
      'Origine : pois chiches cultivés en Europe',
      'Certifications : Vegan, sans allergènes, clean-label, HALAL, KOSHER, NUTRISCORE A',
    ],
    action: { label: 'demandez les fiches techniques', href: '#contact' },
  },
  comparison: {
    ...buyEn.comparison,
    title: 'Mieux que les œufs ?',
    subtitle: 'À vous de juger',
    featureLabel: 'CARACTÉRISTIQUE',
    eggsLabel: 'ŒUFS',
    rows: [
      { feature: 'Sans allergènes', egg: 'Allergène majeur' },
      { feature: 'Sans cholestérol', egg: 'Contiennent du cholestérol' },
      { feature: 'Longue conservation', egg: 'Réfrigération nécessaire, durée de conservation limitée' },
      { feature: 'Sécurité alimentaire', egg: 'Risques de salmonelle, grippe aviaire et contamination' },
      { feature: 'Stabilité des prix', egg: 'Prix soumis aux coûts des aliments, maladies et ruptures d’approvisionnement' },
      { feature: '100 % végétal', egg: 'Produit d’origine animale' },
      { feature: 'Efficacité des ressources', egg: 'Élevage animal gourmand en ressources' },
    ],
  },
  formats: {
    ...buyEn.formats,
    title: 'CHOISISSEZ LE FORMAT QUI VOUS CONVIENT',
    items: [
      {
        ...buyEn.formats.items[0],
        titleImage: '/wp-content/uploads/2025/09/VERYAQUAFABA_TITLE_FR_POUDRE-DOUBLE.svg',
        lines: [['SACHET 200g', '= 100 blancs d’œufs'], ['SACHET 500g', '= 250 blancs d’œufs'], ['SACHET 5kg', '= 2500 blancs d’œufs']],
      },
      {
        ...buyEn.formats.items[1],
        titleImage: '/wp-content/uploads/2025/09/VERYAQUAFABA_TITLE_FR_LIQUIDE-DOUBLE.svg',
        lines: [['TETRAPAK 1L', '= 33 blancs d’œufs'], ['BAG-IN-BOX 5L', '= 165 blancs d’œufs'], ['IBC 1T', '= 33.000 blancs d’œufs']],
      },
    ],
    action: { label: 'demandez vos échantillons', href: '#contact' },
  },
  industrial: {
    ...buyEn.industrial,
    title: 'INDUSTRIELS',
    subtitle: 'MONTEZ EN PUISSANCE EN TOUTE CONFIANCE',
    text: 'Des tests en laboratoire à la production à grande échelle, VERY AQUAFABA évolue avec vous. Disponible en formats poudre et liquide en gros volumes, il est conçu pour s’intégrer parfaitement dans les lignes de production industrielle, offrant la même performance fiable, que vous ayez besoin de lots pilotes ou de fabrications à grande échelle.',
    action: { label: 'demandez vos échantillons', href: '#contact' },
  },
  howToBuy: {
    ...buyEn.howToBuy,
    title: 'OÙ NOUS TROUVER',
    subtitle: 'Retrouvez VERY AQUAFABA auprès de nos partenaires distributeurs',
  },
  faq: {
    title: 'FAQ',
    items: [
      ['Q : Qu’est-ce que l’aquafaba ?', 'R : Le liquide issu de la cuisson des pois chiches.'],
      ['Q : Puis-je la faire moi-même ?', 'R : OUI, conservez l’eau des pois chiches et réduisez-la si elle est trop liquide.'],
      ['Q : Qu’est-ce que VERY AQUAFABA ?', 'R : Une version standardisée pour un usage professionnel\net industriel.'],
      ['Q : Quelle quantité équivaut à un œuf ?', 'R : VERY AQUAFABA Liquide 1L = 33 blancs d’œufs\n⮕ 1 blanc d’œuf ≈ 30g de liquide\nVERY AQUAFABA Poudre 200G = 100 blancs d’œufs\n⮕ 1 blanc d’œuf ≈ 2g de poudre'],
      ['Q : Puis-je l’utiliser pour les meringues ?', 'R : OUI, fouettez avec du sucre comme des blancs d’œufs.'],
      ['Q : Puis-je l’utiliser dans les cocktails ?', 'R : OUI, parfaite pour les cocktails avec une belle mousse.'],
      ['Q : Puis-je l’utiliser pour la mayonnaise ?', 'R : OUI, pour des émulsions stables et crémeuses sans œufs.'],
      ['Q : A-t-elle un goût de pois chiche ?', 'R : NON, son goût est neutre.'],
      ['Q : Quelle est sa durée de conservation ?', 'R : Jusqu’à 24 mois selon le format.'],
    ].map(([question, answer]) => ({ question, answer })),
  },
  contact: {
    ...buyEn.contact,
    title: 'Contactez-nous !',
    subtitle: 'Que vous cherchiez de petits formats pour votre cuisine ou de grands volumes pour votre ligne de production, nous sommes là pour vous aider.',
    formLocale: 'fr-FR',
    formLabels: {
      name: 'Votre nom',
      email: 'votre adresse E-mail',
      message: 'Votre message',
      submit: 'Envoyer',
      aria: 'Formulaire de contact',
    },
    businessTitle: 'COORDONNÉES PROFESSIONNELLES',
    headquartersLabel: 'SIÈGE SOCIAL :',
    rdLabel: 'R&D :',
    emailLabel: 'E-mail',
    interests: ['Demandez vos échantillons', 'Demandez les fiches techniques', 'Autres demandes'],
  },
};
