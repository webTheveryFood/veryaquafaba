import { homeEn } from './home.en';
import { siteLanguages, footerContentNl } from '../site';

export const homeNl = {
  ...homeEn,
  currentLanguage: 'NL',
  languages: siteLanguages,
  logoHref: '/nl/wat-is-aquafaba/',
  navigation: [
    { label: "Over ons", href: '/nl/wat-is-aquafaba/' },
    { label: "Producten", href: '/nl/aquafaba-kopen/' },
    { label: "Recepten", href: '/nl/aquafaba-recepten/' },
    { label: "Contact", href: '/nl/aquafaba-kopen/#contact' },
  ],
  footer: footerContentNl,
  seo: {
    ...homeEn.seo,
    title: "Wat is aquafaba? | VERY AQUAFABA – Plantaardig Ei-alternatief - VERY AQUAFABA",
    description: "Ontdek aquafaba, het kookvocht van kikkererwten dat eiwitten vervangt en in sommige recepten zelfs hele eieren kan vervangen. VERY AQUAFABA is een clean-label, allergeenvrij ei-alternatief voor chefs, bakkers en producenten.",
  },
  hero: {
    ...homeEn.hero,
    title: "Bye bye eiwitten!",
    primaryAction: { label: "ONTDEK AQUAFABA", href: '/nl/aquafaba-kopen/' },
    secondaryAction: { label: "VRAAG UW STALEN AAN", href: '/nl/aquafaba-kopen/#contact' },
  },
  about: {
    ...homeEn.about,
    title: "Wat is aquafaba ?",
    leftImage: "/wp-content/uploads/2025/09/AQUAFABA_MACARON_CHICKPEAS_NL.svg",
    rightImage: "/wp-content/uploads/2025/09/AQUAFABA_MACARON_FLOWER_NL.svg",
    paragraphs: [
      "Aquafaba is het kookvocht van kikkererwten, maar in de juiste handen wordt het een krachtig alternatief voor eiwitten in een breed scala aan recepten. Het kan ook dienen als vervanger voor hele eieren in toepassingen waar de natuurlijke emulgerende en bindende eigenschappen een rol spelen.",
      "Onze oplossing, VERY AQUAFABA, is een plantaardig ei-alternatief, ontwikkeld voor professionele keukens en industriële productie. Het levert de prestaties van eiwitten zonder allergenen, bevoorradingsrisico’s of opslagproblemen.",
      "In tegenstelling tot zelfgemaakt kikkererwtenvocht wordt het zorgvuldig verwerkt om ongewenste geuren te verwijderen, een constante concentratie te garanderen en voorspelbare resultaten batch na batch te leveren. Verkrijgbaar in vloeibare en poedervorm, het klopt op tot stabiele schuimen voor meringues, desserts en cocktails, en bindt betrouwbaar in bakwaren en sauzen zoals mayonaise.",
      "Kloppen, binden, emulgeren: VERY AQUAFABA is het clean-label ei-alternatief dat consistente prestaties levert voor chefs, bakkers, bartenders en producenten in Europa, Noord-Amerika en Australië.",
    ],
    action: { label: "MEER WETEN", href: '/nl/aquafaba-kopen/' },
  },
  products: {
    ...homeEn.products,
    title: "POEDER OF VLOEIBAAR, UW KEUZE",
    subtitle: "Twee varianten, eindeloze mogelijkheden",
    items: [
      { ...homeEn.products.items[0], text: "Gemakkelijk op te slaan en te doseren, ideaal voor industriële gebruikers, bakkerijen en professionele keukens." },
      { ...homeEn.products.items[1], text: "Gebruiksklaar en eenvoudig te schenken, perfect voor bakkerijen, bars en keukens." },
    ],
    action: { label: "BEKIJK PRODUCTEN", href: '/nl/aquafaba-kopen/' },
  },
  benefits: {
    ...homeEn.benefits,
    title: "WAAROM KIEZEN PROFESSIONALS VOOR VERY AQUAFABA?",
    items: [
      { image: "/wp-content/uploads/2025/09/VERYAQUAFABA_RTB_NL_PRESTATIES.svg", alt: "Aquafaba BETROUWBARE PRESTATIES", text: "Stevige schuimen en blijvende emulsies" },
      { image: "/wp-content/uploads/2025/09/VERYAQUAFABA_RTB_NL_HOUDBAARHEID.svg", alt: "Aquafaba VERLENGDE HOUDBAARHEID", text: "Verbetert de productstabiliteit" },
      { image: "/wp-content/uploads/2025/09/VERYAQUAFABA_RTB_NL_ALLERGEENVRIJ.svg", alt: "Aquafaba ALLERGEENVRIJ", text: "Zonder ei, zuivel, gluten of soja" },
      { image: "/wp-content/uploads/2025/09/VERYAQUAFABA_RTB_NL_UITSTOOT.svg", alt: "Aquafaba MINDER UITSTOOT", text: "Vermindert CO₂ en valoriseert bijproducten" },
      { image: "/wp-content/uploads/2025/09/VERYAQUAFABA_RTB_NL_KOSTENEFFICIENT.svg", alt: "Aquafaba KOSTENEFFICIËNT", text: "Bespaart op opslag en vermindert afval" },
    ],
  },
  recipes: {
    ...homeEn.recipes,
    title: "VAN MACARONS TOT MAYONNAISE",
    subtitle: "Aquafaba is niet alleen een vervanger, maar een veelzijdig hulpmiddel voor de moderne keuken",
    items: [
      { ...homeEn.recipes.items[0], title: "meringues", text: "Knapperig van buiten, zacht van binnen" },
      { ...homeEn.recipes.items[1], title: "macarons", text: "Perfecte structuur zonder ei" },
      { ...homeEn.recipes.items[2], title: "mayonnaise", text: "Romige, stabiele emulsies" },
      { ...homeEn.recipes.items[3], title: "cocktails", text: "Luchtige sours en fizzes" },
      { ...homeEn.recipes.items[4], title: "Taarten", text: "Licht en stabiel gerezen" },
      { ...homeEn.recipes.items[5], title: "Pavlova", text: "Knapperige buitenkant & zachte binnenkant" },
    ],
  },
  industry: {
    ...homeEn.industry,
    title: "VERTROUWD IN DE VOEDINGSINDUSTRIE",
    subtitle: "Chefs, distributeurs en producenten vertrouwen op ons",
  },
  cta: {
    ...homeEn.cta,
    title: "KLAAR OM TE INNOVEREN?",
    subtitle: "Haal VERY AQUAFABA vandaag nog in uw keuken of productielijn",
    primaryAction: { label: "BEKIJK PRODUCTEN", href: '/nl/aquafaba-kopen/' },
    secondaryAction: { label: "VRAAG UW STALEN AAN", href: '/nl/aquafaba-kopen/#contact' },
  },
};
