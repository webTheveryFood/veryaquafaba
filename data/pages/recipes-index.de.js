import { recipesIndexEn } from './recipes-index.en';
import { footerContentDe } from '../site';
import { recipeLanguages } from '../recipe-languages';

export const recipesIndexDe = {
  ...recipesIndexEn,
  page: { ...recipesIndexEn.page, currentLanguage: 'DE', logoHref: '/de/was-ist-aquafaba/' },
  languages: recipeLanguages,
  navigation: [
    { label: "Über uns", href: '/de/was-ist-aquafaba/' },
    { label: "Produkte", href: '/de/aquafaba-kaufen/' },
    { label: "Rezepte", href: '/de/rezepte/' },
    { label: "Kontakt", href: '/de/aquafaba-kaufen/#contact' },
  ],
  footer: footerContentDe,
  seo: {
    title: "Aquafaba Tipps & Rezepte - VERY AQUAFABA",
    description: "Explore tested recipes and inspiration from VERY AQUAFABA. Use our liquid and powdered formats in bulk to create high-performance dishes",
    image: "/wp-content/uploads/2025/09/VERYAQUAFABA_RECIPES_COVER.webp",
  },
  hero: {
    desktopTitleImage: "/wp-content/uploads/2025/09/VERYAQUAFABA_TITLE_DE_TIPPS-01-1.svg",
    mobileTitleImage: "/wp-content/uploads/2025/09/VERYAQUAFABA_TITLE_DE_TIPPS-02-1.svg",
    title: "Lernen, kochen, kreativ werden mit Aquafaba",
  },
  intro: {
    leadHtml: "Willkommen im Aquafaba-Bereich, einem Ressourcenzentrum, um diesen vielseitigen Inhaltsstoff zu meistern.<br />Aquafaba ist die <strong>Flüssigkeit von gekochten Kichererbsen</strong>, geschätzt für ihre <strong>aufschäumenden, bindenden und emulgierenden Eigenschaften</strong>. Es wird in der modernen Patisserie, Bäckerei, in Saucen und sogar in Cocktails als <strong>funktionaler Eiersatz</strong> verwendet.",
    splitHtml: "Diese Seite ist in zwei Abschnitte unterteilt:</p><p><strong>• ANLEITUNGEN & TIPPS:</strong> um zu verstehen, was Aquafaba ist und wie man damit arbeitet<br /><strong>• REZEPTE:</strong> um es direkt in süßen, herzhaften und Getränke-kreationen anzuwenden",
  },
  guides: {
    title: "Anleitungen & Tipps",
    items: [
      { href: "/de/rezepte/aquafaba-von-a-bis-z/", label: "Aquafaba von A bis Z: Der vollständige Leitfaden" },
      { href: "/de/rezepte/aquafaba-selber-machen/", label: "Wie man Aquafaba zu Hause herstellt" },
      { href: "/de/rezepte/wie-man-aquafaba-beim-backen-verwendet/", label: "Wie man Aquafaba in Rezepten verwendet" },
      { href: "/de/rezepte/wieviel-entspricht-einem-ei/", label: "Wieviel Aquafaba entspricht einem Ei" },
      { href: "/de/rezepte/aquafaba-lagern-einfrieren/", label: "Wie man Aquafaba lagert und einfriert" },
    ],
  },
  recipes: {
    ...recipesIndexEn.recipes,
    title: "REZEPTE",
    subtitle: "Entfalten Sie Ihre Kreativität mit Aquafaba-Rezepten",
    banner: "/wp-content/uploads/2025/09/BANNER_AQUAFABAQUAFABA.svg",
    items: [
      { title: "Baisers\nmit aquafaba", href: "/de/rezepte/baiser/", image: "/wp-content/uploads/2025/09/AQUAFABA_RECIPES_MINI_LEMON-PIE.png", alt: "Photo of Meringues baked with Aquafaba" },
      { title: "macarons\nmit aquafaba", href: "/de/rezepte/macarons/", image: "/wp-content/uploads/2025/09/AQUAFABA_RECIPES_MINI_MACARON.png", alt: "Photo of Macarons baked with Aquafaba" },
      { title: "mayonnaise\nmit aquafaba", href: "/de/rezepte/mayonnaise/", image: "/wp-content/uploads/2025/09/AQUAFABA_RECIPES_MINI_MAYONNAISE.png", alt: "Photo of Mayonnaise made with Aquafaba" },
      { title: "cocktails\nmit aquafaba", href: "/de/rezepte/whiskey-sour/", image: "/wp-content/uploads/2025/09/VERYAQUAFABA_RECIPES_MINI_PISCOSOUR.jpg", alt: "Photo of a Cocktail Sour made with Aquafaba" },
      { title: "kuchen\nmit aquafaba", href: "/de/rezepte/schokoladenmousse/", image: "/wp-content/uploads/2025/09/AQUAFABA_RECIPES_MINI_CHOCOLATE.png", alt: "Photo of Chocolate mousse cooked with Aquafaba" },
      { title: "Pavlova\nmit aquafaba", href: "/de/rezepte/pavlova/", image: "/wp-content/uploads/2025/09/VERYAQUAFABA_RECIPES_MINI_PAVLOVA.jpg", alt: "Photo of Pavlova cooked with Aquafaba" },
    ],
  },
  productCta: {
    ...recipesIndexEn.productCta,
    title: "SCHLUSS MIT DOSEN, WERDEN SIE PROFI",
    subtitle: "Steigen Sie um auf VERY AQUAFABA – die gebrauchsfertige Profi-Lösung",
    products: [
      { ...recipesIndexEn.productCta.products[0], text: "Einfach zu lagern und zu dosieren, ideal für die Industrie, Bäckereien und Profiküchen." },
      { ...recipesIndexEn.productCta.products[1], text: "Gebrauchsfertig und leicht zu gießen, perfekt für Bäckereien, Bars und Küchen." },
    ],
    action: { label: "PRODUKTE ANSEHEN", href: '/de/aquafaba-kaufen/' },
  },
};
