import { buyEn } from './buy.en.js';
import { buyLanguages } from '../buy-languages.js';
import { footerContentDe } from '../site.js';

export const buyDe = {
  ...buyEn,
  page: {
    locale: 'de-DE',
    currentLanguage: 'DE',
    elementorPageId: '2974',
    logoHref: '/de/was-ist-aquafaba/',
    headerIds: {
      root: 'afd2bb3',
      logoContainer: '76122e6',
      logoWidget: 'cd42602',
      rightContainer: 'e79178b',
      navContainer: '2856200',
      navWidget: '977ae8b',
      languageContainer: '5b9bf1c',
      languageWidget: '4c537ae',
    },
  },
  navigation: [
    { label: 'Über uns', href: '/de/was-ist-aquafaba/' },
    { label: 'Produkte', href: '/de/aquafaba-kaufen/' },
    { label: 'Rezepte', href: '/de/rezepte/' },
    { label: 'Kontakt', href: '/de/aquafaba-kaufen/#contact' },
  ],
  seo: {
    ...buyEn.seo,
    title: 'Produkte - VERY AQUAFABA',
    description: 'Buy VERY AQUAFABA’s liquid and powdered plant-based egg alternatives, designed for professional kitchens and industrial production.',
  },
  languages: buyLanguages,
  footer: footerContentDe,
  hero: {
    ...buyEn.hero,
    titleImage: '/wp-content/uploads/2025/09/VERYAQUAFABA_TITLE_DE_ZWEI_VERSIONEN.svg',
    title: 'Unendliche Kreationen',
    titleAlt: 'ZWEI VERSIONEN',
    products: [
      { ...buyEn.hero.products[0], titleImage: '/wp-content/uploads/2025/09/VERYAQUAFABA_TITLE_DE_PULVER.svg' },
      { ...buyEn.hero.products[1], titleImage: '/wp-content/uploads/2025/09/VERYAQUAFABA_TITLE_DE_FLUSSIG-02.svg' },
    ],
    actions: [
      { label: 'TECHNISCHE DATENBLÄTTER ANFORDERN', href: '#contact' },
      { label: 'MUSTER ANFORDERN', href: '#contact' },
    ],
  },
  intro: {
    ...buyEn.intro,
    title: 'Mehr als Kichererbsenwasser',
    paragraphs: [
      'Aquafaba ist die Flüssigkeit, die beim Kochen von Kichererbsen entsteht. Hobbyköche experimentieren schon seit Jahren damit – doch die Ergebnisse sind oft uneinheitlich.',
      'VERY AQUAFABA nimmt diese natürliche Basis und verwandelt sie in eine professionelle Zutat: gefiltert, verfeinert und standardisiert für zuverlässige Leistung in jeder Charge. Neutral im Geschmack, clean-label und einfach zu verwenden, bringt es Köchen, Bäckern und Herstellern stabile Schlag-, Bind- und Emulgierkraft – perfekt geeignet für den Einsatz im großen Maßstab.',
    ],
  },
  technical: {
    ...buyEn.technical,
    title: 'TECHNISCHE SPEZIFIKATIONEN',
    items: [
      'Haltbarkeit: 6–24 Monate je nach Format',
      'Lagerung: ungekühlt für Pulver, gekühlt für Flüssigkeit nach dem Öffnen',
      'Ursprung: in Europa angebaute Kichererbsen',
      'Zertifizierungen: Vegan, allergenfrei, Clean-Label, HALAL, KOSHER, NUTRISCORE A',
    ],
    action: { label: 'TECHNISCHE DATENBLÄTTER ANFORDERN', href: '#contact' },
  },
  comparison: {
    ...buyEn.comparison,
    title: 'Besser als Eier?',
    subtitle: 'Sie sind der Richter',
    featureLabel: 'MERKMAL',
    eggsLabel: 'EIER',
    rows: [
      { feature: 'Allergenfrei', egg: 'Hauptallergen' },
      { feature: 'Cholesterinfrei', egg: 'Enthalten Cholesterin' },
      { feature: 'Ungekühlt haltbar', egg: 'Kühlpflichtig, begrenzte Haltbarkeit' },
      { feature: 'Kein Lebensmittelsicherheitsrisiko', egg: 'Risiken durch Salmonellen, Vogelgrippe, Kontamination' },
      { feature: 'Preis stabil', egg: 'Schwankt mit Futterkosten, Krankheiten, Angebotsschocks' },
      { feature: 'Pflanzenbasiert', egg: 'Tierisches Produkt' },
      { feature: 'Ressourceneffizient', egg: 'Ressourcenintensive Tierhaltung' },
    ],
  },
  formats: {
    ...buyEn.formats,
    title: 'WÄHLEN SIE DAS FORMAT, DAS ZU IHNEN PASST',
    items: [
      {
        ...buyEn.formats.items[0],
        titleImage: '/wp-content/uploads/2025/09/VERYAQUAFABA_TITLE_DE_PULVER-DOUBLE.svg',
        altWord: 'PULVER',
        lines: [['200g BEUTEL', '= 100 Eiweiße'], ['500g BEUTEL', '= 250 Eiweiße'], ['5kg SACK', '= 2500 Eiweiße']],
      },
      {
        ...buyEn.formats.items[1],
        titleImage: '/wp-content/uploads/2025/09/VERYAQUAFABA_TITLE_DE_FLUSSIG-DOUBLE.svg',
        altWord: 'FLÜSSIG',
        lines: [['1L TETRAPAK', '= 33 Eiweiße'], ['5L BAG-IN-BOX', '= 165 Eiweiße'], ['1T IBC', '= 33.000 Eiweiße']],
      },
    ],
    action: { label: 'MUSTER ANFORDERN', href: '#contact' },
  },
  industrial: {
    ...buyEn.industrial,
    title: 'INDUSTRIELLE HERSTELLER',
    subtitle: 'ZUVERLÄSSIG HOCHSKALIEREN',
    text: 'Von Labortests bis zur Vollproduktion wächst VERY AQUAFABA mit Ihnen. Erhältlich in flüssiger und pulverförmiger Großpackung, wurde es für die nahtlose Integration in industrielle Produktionslinien entwickelt und liefert die gleiche zuverlässige Leistung – egal ob Sie Pilotchargen oder Großserien benötigen.',
    action: { label: 'MUSTER ANFORDERN', href: '#contact' },
  },
  howToBuy: {
    ...buyEn.howToBuy,
    title: 'WO ERHÄLTLICH',
    subtitle: 'Erhältlich bei unseren Vertriebspartnern',
  },
  faq: {
    title: 'FAQ',
    items: [
      ['F: Was ist Aquafaba?', 'A: Die Flüssigkeit von gekochten Kichererbsen.'],
      ['F: Kann ich es selbst herstellen?', 'A: JA, Kichererbsenwasser aufbewahren und einkochen, wenn es zu dünn ist.'],
      ['F: Was ist VERY AQUAFABA?', 'A: Eine standardisierte Version für den professionellen und industriellen Einsatz.'],
      ['F: Wieviel entspricht einem Ei?', 'A: VERY AQUAFABA Flüssig 1 L = 33 Eiweiße\n⮕ 1 Eiweiß ≈ 30 g Flüssigkeit\nVERY AQUAFABA Pulver 200 g = 100 Eiweiße\n⮕ 1 Eiweiß ≈ 2 gPulver'],
      ['F: Kann ich es für Baisers verwenden?', 'A: JA, mit Zucker aufschlagen wie Eiweiß.'],
      ['F: Kann ich es für Cocktails verwenden?', 'A: JA, perfekt für schaumige Sours.'],
      ['F: Kann ich es für Mayonnaise verwenden?', 'A: JA, stabile, cremige Emulsionen ohne Eier.'],
      ['F: Schmeckt es nach Kichererbsen?', 'A: NEIN, neutraler Geschmack.'],
      ['F: Wie lange ist es haltbar?', 'A: Bis zu 24 Monate (je nach Format).'],
    ].map(([question, answer]) => ({ question, answer })),
  },
  contact: {
    ...buyEn.contact,
    title: 'Kontaktieren Sie uns!',
    subtitle: 'Ob Sie kleine Packungen für Ihre Küche oder große Mengen für Ihre Produktionslinie suchen – wir helfen Ihnen gerne weiter.',
    formLocale: 'de-DE',
    formLabels: {
      name: 'Ihr Name',
      email: 'Ihre E-Mail-Adresse',
      message: 'Ihre Nachricht',
      submit: 'SENDEN',
      aria: 'Kontaktformular',
    },
    businessTitle: 'GESCHÄFTSKONTAKTE',
    headquartersLabel: 'HAUPSITZ:',
    rdLabel: 'F&E:',
    emailLabel: 'E-mail',
    interests: ['Muster anfordern', 'Technische Datenblätter anfordern', 'Weitere Anfragen'],
  },
};
