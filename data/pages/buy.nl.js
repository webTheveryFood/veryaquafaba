import { buyEn } from './buy.en.js';
import { buyLanguages } from '../buy-languages.js';
import { footerContentNl } from '../site';

export const buyNl = {
  ...buyEn,
  footer: footerContentNl,
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
    titleAlt: 'TWEE VERSIES',
    products: [
      { ...buyEn.hero.products[0], titleImage: '/wp-content/uploads/2025/09/VERYAQUAFABA_TITLE_NL_POEDER-02.svg' },
      { ...buyEn.hero.products[1], titleImage: '/wp-content/uploads/2025/09/VERYAQUAFABA_TITLE_NL_VLOEIBAAR-01.svg' },
    ],
    actions: [
      { label: 'technische fiches aanvragen', href: '#contact' },
      { label: 'vraag uw stalen aan', href: '#contact' },
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
      'Houdbaarheid: 6–24 maanden afhankelijk van het formaat',
      'Bewaring: omgevingstemperatuur voor poeder, gekoeld voor vloeibaar na openen',
      'Herkomst: in Europa geteelde kikkererwten',
      'Certificeringen: Vegan, allergeenvrij, clean-label, HALAL, KOSHER, NUTRISCORE A',
    ],
    action: { label: 'technische fiches aanvragen', href: '#contact' },
  },
  comparison: {
    ...buyEn.comparison,
    title: 'Beter dan eieren?',
    subtitle: 'U bent de jury',
    featureLabel: 'KENMERK',
    eggsLabel: 'EIER',
    rows: [
      { feature: 'Allergeenvrij', egg: 'Belangrijk allergeen' },
      { feature: 'Cholesterolvrij', egg: 'Bevat cholesterol' },
      { feature: 'Houdbaar op kamertemperatuur', egg: 'Koelbewaring nodig, beperkte houdbaarheid' },
      { feature: 'Geen voedselveiligheidsrisico', egg: 'Risico’s van salmonella, vogelgriep, besmetting' },
      { feature: 'Stabiele prijs', egg: 'Schommelingen door voerkosten, ziekten, aanbodschokken' },
      { feature: 'Plantaardig', egg: 'Dierlijk product' },
      { feature: 'Efficiënt gebruik van grondstoffen', egg: 'Grondstofintensieve veeteelt' },
    ],
  },
  formats: {
    ...buyEn.formats,
    title: 'KIES HET FORMAAT DAT BIJ U PAST',
    items: [
      {
        ...buyEn.formats.items[0],
        titleImage: '/wp-content/uploads/2025/09/VERYAQUAFABA_TITLE_NL_POEDER-DOUBLE.svg',
        altWord: 'POEDER',
        lines: [['200g ZAK', '= 100 eiwitten'], ['500g ZAK', '= 250 eiwitten'], ['5kg ZAK', '= 2500 eiwitten']],
      },
      {
        ...buyEn.formats.items[1],
        titleImage: '/wp-content/uploads/2025/09/VERYAQUAFABA_TITLE_NL_VLOEIBAAR_DOUBLE.svg',
        altWord: 'VLOEIBAAR',
        lines: [['1L TETRAPAK', '= 33 eiwitten'], ['5L BAG-IN-BOX', '= 165 eiwitten'], ['1T IBC', '= 33.000 eiwitten']],
      },
    ],
    action: { label: 'vraag uw stalen aan', href: '#contact' },
  },
  industrial: {
    ...buyEn.industrial,
    title: 'INDUSTRIËLE PRODUCENTEN',
    subtitle: 'OPSCHALEN MET VERTROUWEN',
    text: 'Van labtests tot volledige productie, VERY AQUAFABA groeit met u mee. Beschikbaar in vloeibare en poedervorm, in bulkformaten, ontworpen voor een naadloze integratie in industriële productielijnen, en levert dezelfde betrouwbare prestaties – of u nu proefbatches of volledige productieruns nodig heeft.',
    action: { label: 'vraag uw stalen aan', href: '#contact' },
  },
  howToBuy: {
    ...buyEn.howToBuy,
    title: 'WAAR VERKRIJGBAAR',
    subtitle: 'Vind VERY AQUAFABA via onze distributiepartners',
  },
  faq: {
    title: 'FAQ',
    items: [
      ['V: Wat is aquafaba?', 'A: Het vocht van gekookte kikkererwten.'],
      ['V: Kan ik het zelf maken?', 'A: JA, bewaar het kikkererwtenwater en kook het in als het te dun is.'],
      ['V: Wat is VERY AQUAFABA?', 'A: Een gestandaardiseerde versie voor professioneel en industrieel gebruik.'],
      ['V: Hoeveel komt overeen met één ei?', 'A: VERY AQUAFABA Vloeibaar 1 L = 33 eiwitten\n⮕ 1 eiwit ≈ 30 g vloeistof\nVERY AQUAFABA Poeder 200 g = 100 eiwitten\n⮕ 1 eiwit ≈ 2 g poeder'],
      ['V: Kan ik het gebruiken voor meringues?', 'A: JA, klop het met suiker zoals eiwit.'],
      ['V: Kan ik het gebruiken voor cocktails?', 'A: JA, perfect voor schuimige sours.'],
      ['V: Kan ik het gebruiken voor mayonaise?', 'A: JA, stabiele, romige emulsies zonder ei.'],
      ['V: Smaakt het naar kikkererwten?', 'A: NEE, neutrale smaak.'],
      ['V: Wat is de houdbaarheid?', 'A: Tot 24 maanden (afhankelijk van het formaat).'],
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
    interests: ['Vraag uw stalen aan', 'Technische fiches aanvragen', 'Andere vragen'],
  },
};
