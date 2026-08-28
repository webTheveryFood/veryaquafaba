import { buyEn } from './buy.en.js';
import { buyLanguages } from '../buy-languages.js';

export const buyNl = {
  ...buyEn,
  page: {
    locale: 'nl-NL',
    currentLanguage: 'NL',
    elementorPageId: '3023',
    logoHref: '/nl/wat-is-aquafaba/',
    headerIds: {
      root: '181f538',
      logoContainer: '22c2ff7',
      logoWidget: '60f89eb',
      rightContainer: '25d93ac',
      navContainer: '4da64c1',
      navWidget: 'eb1d870',
      languageContainer: '7566bba',
      languageWidget: 'c6e4e2b',
    },
  },
  navigation: [
    { label: 'Over ons', href: '/nl/wat-is-aquafaba/' },
    { label: 'Producten', href: '/nl/aquafaba-kopen/' },
    { label: 'Recepten', href: '/nl/aquafaba-recepten/' },
    { label: 'Contact', href: '/nl/aquafaba-kopen/#contact' },
  ],
  seo: {
    ...buyEn.seo,
    title: 'Producten - VERY AQUAFABA',
    description: 'Ontdek VERY AQUAFABA in vloeibare en poedervorm, een plantaardig alternatief voor eiwit voor professionele keukens en industriële productie.',
  },
  languages: buyLanguages,
  hero: {
    ...buyEn.hero,
    titleImage: '/wp-content/uploads/2025/09/VERYAQUAFABA_TITLE_NL_TWEE_VERSIES.svg',
    title: 'Oneindig veel creaties',
    products: [
      { ...buyEn.hero.products[0], titleImage: '/wp-content/uploads/2025/09/VERYAQUAFABA_TITLE_NL_POEDER-02.svg' },
      { ...buyEn.hero.products[1], titleImage: '/wp-content/uploads/2025/09/VERYAQUAFABA_TITLE_NL_VLOEIBAAR-01.svg' },
    ],
    actions: [
      { label: 'vraag technische fiches aan', href: '#contact' },
      { label: 'vraag gratis stalen aan', href: '#contact' },
    ],
  },
  intro: {
    ...buyEn.intro,
    title: 'Meer dan kikkererwtenwater',
    paragraphs: [
      'Aquafaba is de vloeistof die vrijkomt bij het koken van kikkererwten. Thuischefs experimenteren er al jaren mee, maar de resultaten zijn vaak onvoorspelbaar.',
      'VERY AQUAFABA neemt deze natuurlijke basis en transformeert het tot een professioneel ingrediënt: gefilterd, verfijnd en gestandaardiseerd voor betrouwbare prestaties in elke batch. Neutraal van smaak, clean-label en eenvoudig in gebruik, biedt het chefs, bakkers en producenten een stabiele klop-, bind- en emulgeerkracht, perfect geschikt voor grootschalige toepassingen.',
    ],
  },
  technical: {
    ...buyEn.technical,
    title: 'TECHNISCHE SPECIFICATIES',
    items: [
      'Houdbaarheid: 6-24 maanden, afhankelijk van het formaat',
      'Bewaring: op kamertemperatuur voor poeder, gekoeld voor vloeibaar na opening',
      'Herkomst: kikkererwten geteeld in Europa',
      'Certificeringen: Vegan, allergeenvrij, clean-label, HALAL, KOSHER, NUTRISCORE A',
    ],
    action: { label: 'vraag technische fiches aan', href: '#contact' },
  },
  comparison: {
    ...buyEn.comparison,
    title: 'Beter dan eieren?',
    subtitle: 'U bent de jury',
    featureLabel: 'KENMERK',
    eggsLabel: 'EIEREN',
    rows: [
      { feature: 'Allergeenvrij', egg: 'Belangrijk allergeen' },
      { feature: 'Cholesterolvrij', egg: 'Bevatten cholesterol' },
      { feature: 'Lang houdbaar', egg: 'Koeling vereist, beperkte houdbaarheid' },
      { feature: 'Voedselveiligheid', egg: 'Risico op salmonella, vogelgriep en besmetting' },
      { feature: 'Prijsstabiliteit', egg: 'Schommelen door voederkosten, ziektes en aanbodschokken' },
      { feature: 'Plantaardig', egg: 'Dierlijk product' },
      { feature: 'Efficiënt gebruik van grondstoffen', egg: 'Grondstofintensieve veehouderij' },
    ],
  },
  formats: {
    ...buyEn.formats,
    title: 'KIES HET FORMAAT DAT BIJ U PAST',
    items: [
      {
        ...buyEn.formats.items[0],
        titleImage: '/wp-content/uploads/2025/09/VERYAQUAFABA_TITLE_NL_POEDER-DOUBLE.svg',
        lines: [['200g ZAK', '= 100 eiwitten'], ['500g ZAK', '= 250 eiwitten'], ['5kg ZAK', '= 2500 eiwitten']],
      },
      {
        ...buyEn.formats.items[1],
        titleImage: '/wp-content/uploads/2025/09/VERYAQUAFABA_TITLE_NL_VLOEIBAAR_DOUBLE.svg',
        lines: [['1L TETRAPAK', '= 33 eiwitten'], ['5L BAG-IN-BOX', '= 165 eiwitten'], ['1T IBC', '= 33.000 eiwitten']],
      },
    ],
    action: { label: 'vraag gratis stalen aan', href: '#contact' },
  },
  industrial: {
    ...buyEn.industrial,
    title: 'INDUSTRIËLE PRODUCENTEN',
    subtitle: 'OPSCHALEN MET VERTROUWEN',
    text: 'Van labtests tot volledige productie, VERY AQUAFABA groeit met u mee. Beschikbaar in vloeibare en poedervorm, in bulkformaten, ontworpen voor een naadloze integratie in industriële productielijnen, en levert dezelfde betrouwbare prestaties – of u nu proefbatches of volledige productieruns nodig heeft.',
    action: { label: 'vraag gratis stalen aan', href: '#contact' },
  },
  howToBuy: {
    ...buyEn.howToBuy,
    title: 'WAAR VERKRIJGBAAR',
    subtitle: 'Vind VERY AQUAFABA via onze distributiepartners',
  },
  faq: {
    title: 'FAQ',
    items: [
      ['Q: Wat is aquafaba?', 'A: De vloeistof van gekookte kikkererwten.'],
      ['Q: Kan ik het zelf maken?', 'A: JA, bewaar het kikkererwtenwater en kook het in als het te dun is.'],
      ['Q: Wat is VERY AQUAFABA?', 'A: Een gestandaardiseerde versie voor professioneel\nen industrieel gebruik.'],
      ['Q: Hoeveel is gelijk aan één ei?', 'A: VERY AQUAFABA Vloeibaar 1L = 33 eiwitten\n⮕ 1 eiwit ≈ 30g vloeibaar\nVERY AQUAFABA Poeder 200G = 100 eiwitten\n⮕ 1 eiwit ≈ 2g poeder'],
      ['Q: Kan ik het gebruiken voor meringues?', 'A: JA, klop met suiker zoals eiwit.'],
      ['Q: Kan ik het gebruiken voor cocktails?', 'A: JA, perfect voor schuimige sours.'],
      ['Q: Kan ik het gebruiken voor mayonaise?', 'A: JA, stabiele en romige emulsies zonder eieren.'],
      ['Q: Smaakt het naar kikkererwten?', 'A: NEE, neutrale smaak.'],
      ['Q: Wat is de houdbaarheid?', 'A: Tot 24 maanden, afhankelijk van het formaat.'],
    ].map(([question, answer]) => ({ question, answer })),
  },
  contact: {
    ...buyEn.contact,
    title: 'Neem contact met ons op!',
    subtitle: 'Of u nu kleine verpakkingen voor uw keuken of grote volumes voor uw productielijn zoekt, wij staan klaar om te helpen.',
    formLocale: 'nl-NL',
    formLabels: {
      name: 'Uw naam',
      email: 'Uw e-mailadres',
      message: 'Uw bericht',
      submit: 'Bericht verzenden',
      aria: 'Contactformulier',
    },
    businessTitle: 'ZAKELIJKE CONTACTGEGEVENS',
    headquartersLabel: 'HOOFDKANTOOR:',
    rdLabel: 'R&D:',
    emailLabel: 'E-mail',
    interests: ['Vraag gratis stalen aan', 'Vraag technische fiches aan', 'Andere vragen'],
  },
};
