import { homeEn } from './home.en';
import { siteLanguages, footerContentDe } from '../site';

export const homeDe = {
  ...homeEn,
  currentLanguage: 'DE',
  languages: siteLanguages,
  logoHref: '/de/was-ist-aquafaba/',
  navigation: [
    { label: "Über uns", href: '/de/was-ist-aquafaba/' },
    { label: "Produkte", href: '/de/aquafaba-kaufen/' },
    { label: "Rezepte", href: '/de/rezepte/' },
    { label: "Kontakt", href: '/de/aquafaba-kaufen/#contact' },
  ],
  footer: footerContentDe,
  seo: {
    ...homeEn.seo,
    title: "Was ist Aquafaba? | VERY AQUAFABA – Pflanzliche Ei-Alternative - VERY AQUAFABA",
    description: "Entdecken Sie Aquafaba, das Kochwasser von Kichererbsen, das Eiweiß ersetzt und in bestimmten Rezepten sogar ganze Eier substituieren kann. VERY AQUAFABA ist eine Clean-Label, allergenfreie Ei-Alternative für Köche, Bäcker und Hersteller.",
  },
  hero: {
    ...homeEn.hero,
    title: "Bye bye Eiweiß!",
    primaryAction: { label: "ENTDECKE AQUAFABA", href: '/de/aquafaba-kaufen/' },
    secondaryAction: { label: "MUSTER ANFORDERN", href: '/de/aquafaba-kaufen/#contact' },
  },
  about: {
    ...homeEn.about,
    title: "Was ist Aquafaba?",
    leftImage: "/wp-content/uploads/2025/09/AQUAFABA_MACARON_CHICKPEAS_DE.svg",
    rightImage: "/wp-content/uploads/2025/09/AQUAFABA_MACARON_FLOWER_DE.svg",
    paragraphs: [
      "Aquafaba ist das Kochwasser von Kichererbsen, das sich in den richtigen Händen zu einem leistungsstarken Ersatz für Eiweiß in einer Vielzahl von Rezepten verwandelt. Es kann auch als Ersatz für ganze Eier in Anwendungen dienen, bei denen seine natürlichen emulgierenden und bindenden Eigenschaften eine Rolle spielen.",
      "Unsere Lösung, VERY AQUAFABA, ist eine pflanzliche Ei-Alternative, entwickelt für Profiküchen und die industrielle Produktion. Sie bietet die Leistung von Eiweiß ohne Allergene, Versorgungsrisiken oder Lagerprobleme.",
      "Anders als hausgemachtes Kichererbsenwasser wird es sorgfältig verarbeitet, um unerwünschte Gerüche zu entfernen, eine gleichbleibende Konzentration sicherzustellen und verlässliche Ergebnisse Charge für Charge zu garantieren. Erhältlich in flüssiger und Pulverform, schlägt es stabile Schäume für Baiser, Desserts und Cocktails auf und bindet zuverlässig Backwaren und Saucen wie Mayonnaise.",
      "Aufschlagen, binden, emulgieren: VERY AQUAFABA ist die Clean-Label Ei-Alternative, die Köchen, Bäckern, Barkeepern und Herstellern in Europa, Nordamerika und Australien konstante Ergebnisse liefert.",
    ],
    action: { label: "MEHR ERFAHREN", href: '/de/aquafaba-kaufen/' },
  },
  products: {
    ...homeEn.products,
    title: "PULVER ODER FLÜSSIG, IHRE WAHL",
    subtitle: "Zwei Varianten, unendliche Möglichkeiten",
    items: [
      { ...homeEn.products.items[0], titleAlt: 'Title Pulver', text: "Einfach zu lagern und zu dosieren, ideal für die Industrie, Bäckereien und Profiküchen." },
      { ...homeEn.products.items[1], titleAlt: '', text: "Gebrauchsfertig und leicht zu gießen, perfekt für Bäckereien, Bars und Küchen." },
    ],
    action: { label: "PRODUKTE ANSEHEN", href: '/de/aquafaba-kaufen/' },
  },
  benefits: {
    ...homeEn.benefits,
    title: "WARUM ENTSCHEIDEN SICH PROFIS FÜR VERY AQUAFABA?",
    items: [
      { image: "/wp-content/uploads/2025/09/VERYAQUAFABA_RTB_DE_LEISTUNG.svg", alt: "Aquafaba Zuverlässige leistung", text: "Stabile Schäume und langanhaltende Emulsionen" },
      { image: "/wp-content/uploads/2025/09/VERYAQUAFABA_RTB_DE_HALTBARKEIT.svg", alt: "Aquafaba VERLÄNGERTE HALTBARKEIT", text: "Verbessert die Produktstabilität" },
      { image: "/wp-content/uploads/2025/09/VERYAQUAFABA_RTB_DE_ALLERGENFREI.svg", alt: "Aquafaba ALLERGENFREI", text: "Ohne Eier, Milch, Gluten oder Soja" },
      { image: "/wp-content/uploads/2025/09/VERYAQUAFABA_RTB_DE_EMISSIONEN.svg", alt: "Aquafaba WENIGER EMISSIONEN", text: "Reduziert CO₂ und verwertet Nebenprodukte" },
      { image: "/wp-content/uploads/2025/09/VERYAQUAFABA_RTB_DE_KOSTENEFFIZIENT.svg", alt: "Aquafaba KOSTENEFFIZIENT", text: "Spart Lagerkosten und verringert Abfall" },
    ],
  },
  recipes: {
    ...homeEn.recipes,
    title: "VON MACARONS BIS MAYONNAISE",
    subtitle: "Aquafaba ist nicht nur ein Ersatz, sondern ein vielseitiges Werkzeug für moderne Küchen",
    items: [
      { ...homeEn.recipes.items[0], title: "meringues", text: "Außen knusprig, innen weich" },
      { ...homeEn.recipes.items[1], title: "macarons", text: "Perfekte Struktur ganz ohne Ei" },
      { ...homeEn.recipes.items[2], title: "mayonnaise", text: "Cremige, stabile Emulsionen" },
      { ...homeEn.recipes.items[3], title: "cocktails", text: "Schaumige Sours und Fizzes" },
      { ...homeEn.recipes.items[4], title: "Kuchen", text: "Leichter, stabiler Auftrieb" },
      { ...homeEn.recipes.items[5], title: "Pavlova", text: "Knusprige Hülle & weiches Inneres" },
    ],
  },
  industry: {
    ...homeEn.industry,
    title: "Bekannt in der lebensmittelindustrie",
    subtitle: "Köche, Händler und Hersteller vertrauen uns",
  },
  cta: {
    ...homeEn.cta,
    title: "BEREIT ZU INNOVIEREN?",
    subtitle: "Bringen Sie VERY AQUAFABA noch heute in Ihre Küche oder Produktionslinie",
    primaryAction: { label: "PRODUKTE ANSEHEN", href: '/de/aquafaba-kaufen/' },
    secondaryAction: { label: "MUSTER ANFORDERN", href: '/de/aquafaba-kaufen/#contact' },
  },
};
