// SEO <title> for the auto-generated content pages (recipes, articles, legal,
// utility). Captured 1:1 from the live veryaquafaba.com so the migrated pages
// keep their original document titles instead of falling back to the host.
// Keyed by route; consumed by generateMetadata in app/[[...path]]/page.js.
// Meta descriptions written for the pages whose opening text is not a summary (legal and
// utility pages, SEO audit 2026-10-01). Every other content page uses descriptionFromContent.
export const contentSeoDescriptions = {
  '/terms-of-use/': 'Legal notice for veryaquafaba.com: publisher Maison Médelys, hosting provider, intellectual property, liability, hyperlinks and applicable law.',
  '/privacy-policy/': 'How Maison Médelys collects and uses personal data on veryaquafaba.com: purposes, legal basis, retention, sharing, cookies and your rights.',
  '/fr/mentions-legales/': 'Mentions légales de veryaquafaba.com : éditeur Maison Médelys, hébergeur, propriété intellectuelle, responsabilité, liens et droit applicable.',
  '/fr/politique-de-confidentialite/': 'Comment Maison Médelys collecte et utilise vos données sur veryaquafaba.com : finalités, base légale, conservation, partage, cookies et vos droits.',
  '/de/impressum/': 'Impressum von veryaquafaba.com: Herausgeber Maison Médelys, Hosting-Anbieter, geistiges Eigentum, Haftung, Hyperlinks und anwendbares Recht.',
  '/de/datenschutzrichtlinie/': 'Wie Maison Médelys personenbezogene Daten auf veryaquafaba.com verarbeitet: Zwecke, Rechtsgrundlage, Aufbewahrung, Weitergabe, Cookies und Ihre Rechte.',
  '/nl/colofon/': 'Wettelijke kennisgeving van veryaquafaba.com: uitgever Maison Médelys, hostingprovider, intellectuele eigendom, aansprakelijkheid en toepasselijk recht.',
  '/nl/privacybeleid/': 'Hoe Maison Médelys persoonsgegevens op veryaquafaba.com verwerkt: doeleinden, rechtsgrond, bewaartermijn, gegevensdeling, cookies en uw rechten.',
  '/under-construction/': 'This VERY AQUAFABA page is on its way. In the meantime, find our aquafaba recipes, professional guides and products.',
  '/fr/enconstruction/': 'Cette page VERY AQUAFABA arrive bientôt. En attendant, découvrez nos recettes à l’aquafaba, nos guides professionnels et nos produits.',
  '/de/imaufbau/': 'Diese VERY AQUAFABA Seite ist bald verfügbar. Bis dahin entdecken Sie unsere Aquafaba-Rezepte, Profi-Leitfäden und Produkte.',
  '/nl/onder-constructie/': 'Deze VERY AQUAFABA-pagina komt eraan. Ontdek intussen onze aquafaba-recepten, professionele gidsen en producten.',
  '/fr/404-erreur/': 'Cette page n’existe pas ou a été déplacée. Retrouvez les recettes, guides et produits VERY AQUAFABA depuis la page d’accueil.',
  '/de/404-fehler/': 'Diese Seite existiert nicht oder wurde verschoben. Rezepte, Leitfäden und Produkte von VERY AQUAFABA finden Sie auf der Startseite.',
  '/de/rezepte/pavlova/': 'Pavlova mit Aquafaba ist ein elegantes Dessert mit stabiler, knuspriger Baiserschale und weichem, marshmallowartigem Kern.',
  '/nl/404-fout/': 'Deze pagina bestaat niet of is verplaatst. Vind de aquafaba-recepten, gidsen en producten van VERY AQUAFABA via de startpagina.',
};

// Meta description of a migrated content page: its own opening text, cut at a sentence end so it
// stays within 160 characters; a first sentence longer than that is cut on a word. No dashes (client rule).
export function descriptionFromContent(content) {
  const html = content.hero?.text || content.sections?.find((s) => s.html)?.html || '';
  const text = html.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&')
    .replace(/\s*[\u2013\u2014]\s*/g, ', ').replace(/\s+/g, ' ').trim();
  if (!text) return undefined;
  let out = '';
  for (const s of text.split(/(?<=[.!?])\s+/)) {
    if (`${out} ${s}`.trim().length > 160) break;
    out = `${out} ${s}`.trim();
  }
  if (out.length >= 70) return out;
  // Too long for one sentence: end at the last clause that fits, else cut on a word.
  const cut = text.slice(0, 158);
  const comma = cut.lastIndexOf(', ');
  if (comma >= 70) return `${cut.slice(0, comma)}.`;
  return `${cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:]$/, '')}…`;
}

export const contentSeoTitles = {
  '/aquafaba-recipes/macarons/': 'Aquafaba Macarons | Glossy & Precise - VERY AQUAFABA',
  '/aquafaba-recipes/mayonnaise/': 'Aquafaba Mayonnaise | Smooth & Stable - VERY AQUAFABA',
  '/aquafaba-recipes/chocolate-mousse/': 'Aquafaba Chocolate Mousse | Light & Airy - VERY AQUAFABA',
  '/aquafaba-recipes/pavlova/': 'Aquafaba Pavlova | Crisp Shell & Soft Centre - VERY AQUAFABA',
  '/aquafaba-recipes/egg-ratio/': 'Aquafaba Egg Ratio | How Much Equals One Egg - VERY AQUAFABA',
  '/aquafaba-recipes/how-to-store-and-freeze-aquafaba/': 'How to Store & Freeze Aquafaba | Shelf Life Guide',
  '/aquafaba-recipes/meringues/': 'Aquafaba Meringues | Crisp & Light Recipe - VERY AQUAFABA',
  '/aquafaba-recipes/aquafaba-101/': 'Aquafaba 101 | What It Is & How to Use It - VERY AQUAFABA',
  '/aquafaba-recipes/how-to-make-aquafaba/': 'How to Make Aquafaba | Step-by-Step Guide - VERY AQUAFABA',
  '/aquafaba-recipes/how-to-use-aquafaba-in-baking/': 'How to Use Aquafaba in Baking | Pro Techniques',
  '/aquafaba-recipes/whiskey-sour/': 'Whiskey Sour with Aquafaba | Silky Cocktail Foam',
  '/fr/aquafaba-recettes/laquafaba-de-a-a-z/': 'L’aquafaba de A à Z - VERY AQUAFABA',
  '/fr/aquafaba-recettes/comment-faire-de-laquafaba/': 'Comment faire de l’aquafaba | Guide pas à pas',
  '/fr/aquafaba-recettes/comment-utiliser-laquafaba-en-patisserie-et-boulangerie/': 'Comment utiliser l’aquafaba en pâtisserie et boulangerie',
  '/fr/aquafaba-recettes/ratio-aquafaba-oeuf/': 'Ratio aquafaba/œuf | Quelle quantité équivaut à un œuf',
  '/fr/aquafaba-recettes/comment-conserver-congeler-laquafaba/': 'Comment conserver & congeler l’aquafaba - VERY AQUAFABA',
  '/fr/aquafaba-recettes/meringues/': 'Meringues à l’aquafaba | Recette légère et croustillante',
  '/fr/aquafaba-recettes/mayonnaise/': 'Mayonnaise à l’aquafaba | Lisse & stable - VERY AQUAFABA',
  '/fr/aquafaba-recettes/whiskey-sour/': 'Whiskey Sour à l’aquafaba | Mousse soyeuse pour cocktails',
  '/fr/aquafaba-recettes/mousse-au-chocolat/': 'Mousse au chocolat à l’aquafaba | Légère & aérienne',
  '/fr/aquafaba-recettes/pavlova/': 'Pavlova à l’aquafaba | Coque croustillante & cœur fondant',
  '/fr/aquafaba-recettes/macarons/': 'Macarons à l’aquafaba | Brillants & précis - VERY AQUAFABA',
  '/de/rezepte/aquafaba-von-a-bis-z/': 'Aquafaba von A bis Z | Was es ist & wie man es verwendet',
  '/de/rezepte/wie-man-aquafaba-beim-backen-verwendet/': 'Wie man Aquafaba beim Backen verwendet | Profi-Techniken',
  '/de/rezepte/baiser/': 'Aquafaba-Baiser | Knusprig & leicht - VERY AQUAFABA',
  '/de/rezepte/macarons/': 'Aquafaba-Macarons | Glänzend & präzise - VERY AQUAFABA',
  '/de/rezepte/mayonnaise/': 'Aquafaba-Mayonnaise | Cremig & stabil - VERY AQUAFABA',
  '/de/rezepte/schokoladenmousse/': 'Aquafaba-Schokoladenmousse | Leicht & luftig - VERY AQUAFABA',
  '/de/rezepte/aquafaba-lagern-einfrieren/': 'Aquafaba lagern & einfrieren | Haltbarkeits-Leitfaden',
  '/de/rezepte/pavlova/': 'Aquafaba Pavlova | Knusprige Schale & weicher Kern',
  '/de/rezepte/whiskey-sour/': 'Whiskey Sour mit Aquafaba | Seidiger Cocktail-Schaum',
  '/de/rezepte/wieviel-entspricht-einem-ei/': 'Aquafaba-Ei-Umrechnung | Wieviel entspricht einem Ei',
  '/de/rezepte/aquafaba-selber-machen/': 'Aquafaba selber machen | Schritt-für-Schritt-Anleitung',
  '/nl/aquafaba-recepten/whiskey-sour/': 'Whiskey Sour met aquafaba | Zijdezachte cocktail-schuimlaag',
  '/nl/aquafaba-recepten/pavlova/': 'Aquafaba Pavlova | Krokante buitenkant & zachte binnenkant',
  '/nl/aquafaba-recepten/macarons/': 'Aquafaba macarons | Glanzend & precies - VERY AQUAFABA',
  '/nl/aquafaba-recepten/mayonaise/': 'Aquafaba mayonaise | Romig & stabiel - VERY AQUAFABA',
  '/nl/aquafaba-recepten/chocolademousse/': 'Aquafaba chocolademousse | Licht & luchtig - VERY AQUAFABA',
  '/nl/aquafaba-recepten/aquafaba-meringues/': 'Aquafaba-meringues | Knapperig & luchtig recept',
  '/nl/aquafaba-recepten/hoe-aquafaba-in-het-bakken-gebruiken/': 'Hoe aquafaba in het bakken gebruiken | Profi-technieken',
  '/nl/aquafaba-recepten/aquafaba-bewaren-invriezen/': 'Aquafaba bewaren & invriezen | Gids voor houdbaarheid',
  '/nl/aquafaba-recepten/hoe-maak-je-aquafaba/': 'Hoe maak je aquafaba | Stapsgewijze gids - VERY AQUAFABA',
  '/nl/aquafaba-recepten/hoeveel-staat-gelijk-aan-een-ei/': 'Aquafaba-ei-verhouding | Hoeveel staat gelijk aan één ei',
  '/nl/aquafaba-recepten/aquafaba-van-a-tot-z/': 'Aquafaba van A tot Z | Wat het is & hoe je het gebruikt',
  '/fr/mentions-legales/': 'Mentions légales - VERY AQUAFABA',
  '/fr/politique-de-confidentialite/': 'Politique de confidentialité - VERY AQUAFABA',
  '/de/datenschutzrichtlinie/': 'Datenschutzrichtlinie - VERY AQUAFABA',
  '/privacy-policy/': 'Privacy Policy - VERY AQUAFABA',
  '/nl/privacybeleid/': 'Privacybeleid - VERY AQUAFABA',
  '/nl/colofon/': 'Colofon - VERY AQUAFABA',
  '/terms-of-use/': 'Terms of Use - VERY AQUAFABA',
  '/de/impressum/': 'Impressum - VERY AQUAFABA',
  '/under-construction/': 'Under construction - VERY AQUAFABA',
  '/nl/404-fout/': 'Fout 404 - VERY AQUAFABA',
  '/fr/404-erreur/': 'Erreur 404 - VERY AQUAFABA',
  '/de/404-fehler/': 'Fehler 404 - VERY AQUAFABA',
  '/de/imaufbau/': 'Im Aufbau - VERY AQUAFABA',
  '/fr/enconstruction/': 'En construction - VERY AQUAFABA',
  '/nl/onder-constructie/': 'Onder constructie - VERY AQUAFABA',
};
