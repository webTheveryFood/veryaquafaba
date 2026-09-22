// Où acheter, français (set-2 E0 et les pays francophones). 'index' est le répertoire ;
// chaque autre clé est un pays dont les canaux sont listés dans data/resources/stockists.js.
// Aucune page ne porte de prix ni de stock : cela appartient au distributeur. Aucun tiret long.
const grid = (heads, rows) => `<table class="va-guide-grid">
<thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
<tbody>
${rows.map((r) => `<tr>${r.map((c, i) => `<td data-label="${heads[i]}">${c}</td>`).join('')}</tr>`).join('\n')}
</tbody>
</table>`;

const range = `<p>La gamme est la même dans tous les pays. Chaque conditionnement est décrit par les blancs d'œufs qu'il remplace, à {white_liquid} g de liquide ou {white_powder} g de poudre par blanc d'œuf.</p>
<ul>
<li>Liquide : Tetrapak de 1 L = {liquid_1l_whites} blancs d'œufs, bag-in-box de 10 L = {bib_10l_whites}, IBC de 1 T = {ibc_1t_whites}.</li>
<li>Poudre : 30 g = {powder_30g_whites} blancs d'œufs, 200 g = {powder_200g_whites}, 3 kg = {powder_3kg_whites}.</li>
</ul>
<p>Fermés, les deux se conservent au moins {unopened_months} mois à température ambiante. Le liquide ouvert se garde au réfrigérateur à {opened_temp} °C maximum et s'utilise dans les {opened_days} jours ; la poudre ouverte ne s'altère pas tant qu'elle reste au sec, fermée. La <a href="{products_href}">page Produits</a> porte toute la gamme.</p>`;

export default {
  index: {
    title: 'Où acheter VERY AQUAFABA : les canaux par pays - VERY AQUAFABA',
    h1: 'Où acheter VERY AQUAFABA, pays par pays',
    crumb: 'Où acheter',
    enquiryLabel: 'Où acheter',
    description: "Les pays où VERY AQUAFABA dispose d'un canal et comment y acheter : boutiques en ligne, grossistes et distributeurs pour la restauration, plus le formulaire de demande si votre pays n'y figure pas encore.",
    lead: "VERY AQUAFABA se vend par ses distributeurs, et le canal dépend du pays : une boutique en ligne ici, un grossiste pour la restauration là, une marketplace pour détaillants ailleurs. Cette page liste les pays où un canal est recensé, dans la langue de ce pays, et ce qu'il faut faire quand le vôtre n'y est pas.",
    figures: true,
    sections: [
      {
        id: 'countries',
        title: 'Les pays avec un canal',
        html: `<p>Chaque page porte les canaux de ce pays avec leurs liens, ce que chacun référence, et le formulaire de demande pour les volumes professionnels.</p>
${grid(['Pays', 'Langue de la page', 'Canaux'], [
  ['<a href="{france_href}">France</a>', 'Français', 'Instantchef, Maison Medelys, Ankorstore, The Cocktailist, JMillet, Vitodistribution'],
  ['<a href="{belgium_href}">Belgique</a>', 'Français et néerlandais', 'Botanica, Horeca Totaal'],
  ['<a href="{luxembourg_href}">Luxembourg</a>', 'Français', 'Provencale'],
  ['<a href="{switzerland_href}">Suisse</a>', 'Français et allemand', 'Siradis'],
  ['Allemagne', 'Allemand', 'Amazon, Baba Gourmet'],
  ['États-Unis, Canada, Australie, Suède', 'Anglais', 'Amazon, Qualifirst, Apromo Trading, Chokladhuset'],
])}
<p>Un pays apparaît ici dès qu'un canal y est recensé. Là où il n'y en a pas, le formulaire de demande en bas de cette page est la porte d'entrée : il demande le pays, l'application et le volume mensuel estimé.</p>`,
      },
      { id: 'range', title: 'Ce que vous commandez', html: range },
      {
        id: 'professional',
        title: 'Volumes professionnels et fiche technique',
        html: `<p>Le bag-in-box de 10 L et l'IBC de 1 T ne se vendent pas en boutique : ils sont chiffrés par projet, avec la fiche technique, une fois l'application et le volume mensuel connus. C'est à cela que sert le formulaire de demande en bas de cette page, et la réponse porte les spécifications de votre format.</p>
<p>Si vous hésitez encore entre liquide et poudre, la <a href="{professional_href}">section professionnels</a> classe la question par activité : <a href="{pastry_href}">pâtisserie et boulangerie</a>, <a href="{bars_href}">bars et cocktails</a>, <a href="{foodservice_href}">restauration collective et cuisines centrales</a> et <a href="{industry_href}">industrie agroalimentaire</a>.</p>`,
      },
    ],
    faq: [
      { q: "Quels pays disposent d'un canal aujourd'hui ?", a: "La France, la Belgique, le Luxembourg, la Suisse, l'Allemagne, les États-Unis, le Canada, l'Australie et la Suède, chacun sur sa page dans la langue de ce pays." },
      { q: "Mon pays n'est pas listé, que faire ?", a: "Utilisez le formulaire de demande en bas de cette page : pays, application et volume mensuel estimé. Les nouveaux marchés s'ouvrent à partir de ces demandes." },
      { q: 'Les prix figurent-ils sur ces pages ?', a: 'Non. Les prix et le stock appartiennent au distributeur : chaque page renvoie vers le canal et lui laisse cela.' },
      { q: "Peut-on commander le bag-in-box ou l'IBC en ligne ?", a: "Non. Le bag-in-box de 10 L et l'IBC de 1 T sont chiffrés par projet avec la fiche technique, via le formulaire de demande." },
    ],
    links: [
      { href: '{france_href}', label: 'Où acheter en France' },
      { href: '{belgium_href}', label: 'Où acheter en Belgique' },
      { href: '{luxembourg_href}', label: 'Où acheter au Luxembourg' },
      { href: '{switzerland_href}', label: 'Où acheter en Suisse' },
      { href: '{professional_href}', label: "L'aquafaba pour les professionnels" },
    ],
  },

  france: {
    country: 'France',
    title: "Où acheter de l'aquafaba en France - VERY AQUAFABA",
    h1: 'Où acheter VERY AQUAFABA en France',
    crumb: 'France',
    description: "VERY AQUAFABA en France : Instantchef, Maison Medelys, Ankorstore, The Cocktailist, JMillet et Vitodistribution, ce que remplace un Tetrapak de 1 L, et le formulaire pour les volumes professionnels.",
    lead: "En France, VERY AQUAFABA passe par six canaux, de la boutique pour chefs au distributeur régional : un Tetrapak de 1 L remplace {liquid_1l_whites} blancs d'œufs, soit {meringue_batches_1l} lots de meringue ou {cocktails_batches_1l} sours. Les formats professionnels, bag-in-box de 10 L et IBC de 1 T, se chiffrent par projet avec le formulaire en bas de cette page.",
    sections: [
      {
        id: 'order',
        title: 'Six canaux, trois façons de commander',
        html: `<p>Les canaux recensés en France ne visent pas le même acheteur, et c'est ce qui décide par lequel vous passez.</p>
<ul>
<li>Pour un chef ou un laboratoire : Instantchef et Maison Medelys référencent le liquide en 1 L, à la bouteille.</li>
<li>Pour un détaillant : Ankorstore, la marketplace de gros, référence le même 1 L en compte professionnel.</li>
<li>Pour un bar : The Cocktailist référence la version cocktails.</li>
<li>Pour une région ou un réseau : JMillet et Vitodistribution distribuent la gamme ; demandez-leur ce qu'ils ont en stock.</li>
</ul>
<p>Un Tetrapak de 1 L, c'est {meringue_batches_1l} lots de meringue à {meringue_dose} g, {macarons_batches_1l} lots de coques de macarons, {mayonnaise_batches_1l} lots de mayonnaise ou {cocktails_batches_1l} sours. Ouvert, il se garde {opened_days} jours à {opened_temp} °C maximum.</p>`,
      },
      { id: 'range', title: 'La gamme derrière les références', html: range },
      {
        id: 'professional',
        title: 'Restauration, production et volumes',
        html: `<p>Au-delà du Tetrapak, les formats se chiffrent par projet : le bag-in-box de 10 L, {bib_10l_whites} blancs d'œufs, pour une cuisine centrale qui tire au kilo à chaque poste, et l'IBC de 1 T, {ibc_1t_whites}, pour une ligne. Le formulaire ci-dessous demande l'entreprise, le pays, l'application et le volume mensuel estimé ; la fiche technique revient avec la réponse.</p>
<p>La <a href="{professional_href}">section professionnels</a> classe le choix par activité, et les <a href="{index_href}">guides d'application</a> donnent la dose par recette : <a href="{meringue_href}">meringue</a>, <a href="{macarons_href}">macarons</a>, <a href="{mayonnaise_href}">mayonnaise</a>, <a href="{cocktails_href}">cocktails</a>.</p>`,
      },
    ],
    faq: [
      { q: "Où acheter de l'aquafaba en France ?", a: "Chez Instantchef, Maison Medelys, Ankorstore, The Cocktailist, JMillet ou Vitodistribution, selon que vous êtes chef, détaillant, bar ou réseau. Les liens sont dans le tableau ci-dessous." },
      { q: "Combien de blancs d'œufs remplace un Tetrapak de 1 L ?", a: "{liquid_1l_whites}, à {white_liquid} g par blanc d'œuf. En cuisine, cela fait {meringue_batches_1l} lots de meringue ou {mayonnaise_batches_1l} lots de mayonnaise." },
      { q: 'Y a-t-il une référence pour les bars ?', a: 'Oui, The Cocktailist référence la version cocktails. La dose est de {cocktails_dose} g par verre, soit {cocktails_batches_1l} sours par Tetrapak.' },
      { q: 'Comment obtenir la poudre ou les grands formats ?', a: "Par le formulaire de demande en bas de cette page : la poudre en 200 g remplace {powder_200g_whites} blancs d'œufs, et les grands formats sont chiffrés par projet avec la fiche technique." },
    ],
    links: [
      { href: '{bars_href}', label: 'Bars et cocktails' },
      { href: '{pastry_href}', label: 'Pâtisserie et boulangerie' },
      { href: '{index_href}', label: "Tous les guides d'application" },
      { href: '{products_href}', label: 'Produits et formats' },
    ],
  },

  belgium: {
    country: 'Belgique',
    title: "Où acheter de l'aquafaba en Belgique - VERY AQUAFABA",
    h1: 'Où acheter VERY AQUAFABA en Belgique',
    crumb: 'Belgique',
    description: 'VERY AQUAFABA en Belgique : Botanica pour le liquide en 1 L et Horeca Totaal pour les commandes horeca, avec les équivalences par conditionnement et le formulaire pour les volumes.',
    lead: "En Belgique, deux canaux sont recensés : Botanica, qui référence le liquide en 1 L, et Horeca Totaal, le portail de commande pour l'horeca. Un Tetrapak de 1 L remplace {liquid_1l_whites} blancs d'œufs, soit {chocolate_mousse_batches_1l} lots de mousse ou {mayonnaise_batches_1l} lots de mayonnaise. Cette page existe aussi en néerlandais.",
    sections: [
      {
        id: 'order',
        title: 'Deux canaux, deux usages',
        html: `<p>Botanica s'adresse à la boutique et au professionnel qui commande à la bouteille : la référence est le liquide en 1 L. Horeca Totaal est un portail de commande pour l'horeca, où la gamme se demande directement.</p>
<p>Ce que couvre un Tetrapak : {meringue_batches_1l} lots de meringue à {meringue_dose} g, {chocolate_mousse_batches_1l} lots de mousse au chocolat, {mayonnaise_batches_1l} lots de mayonnaise ou {cocktails_batches_1l} sours. Fermé, il attend au moins {unopened_months} mois en réserve sèche ; ouvert, {opened_days} jours à {opened_temp} °C maximum.</p>`,
      },
      { id: 'range', title: 'La gamme derrière les références', html: range },
      {
        id: 'professional',
        title: 'Horeca, cuisines centrales et volumes',
        html: `<p>Pour un groupe ou une cuisine centrale, le bag-in-box de 10 L représente {bib_10l_whites} blancs d'œufs et se tire au kilo à chaque poste ; l'IBC de 1 T, {ibc_1t_whites}, s'adresse à une ligne. Les deux se chiffrent par projet avec la fiche technique, via le formulaire ci-dessous.</p>
<p>Pour un établissement dont la rotation est irrégulière, la poudre répond au même besoin : {powder_200g_whites} blancs d'œufs par sachet de 200 g, sans date une fois ouvert. La <a href="{foodservice_href}">page restauration collective</a> et la <a href="{bars_href}">page bars et cocktails</a> détaillent les deux cas.</p>`,
      },
    ],
    faq: [
      { q: "Où acheter de l'aquafaba en Belgique ?", a: 'Chez Botanica pour le liquide en 1 L, ou via le portail de commande Horeca Totaal pour un établissement horeca. Les liens sont dans le tableau ci-dessous.' },
      { q: 'Cette page existe-t-elle en néerlandais ?', a: "Oui, la même page existe en néerlandais pour la Belgique : les deux canaux y sont identiques." },
      { q: 'Quels formats pour une cuisine centrale ?', a: 'Le bag-in-box de 10 L, soit {bib_10l_whites} blancs d\'œufs, chiffré par projet avec la fiche technique via le formulaire en bas de cette page.' },
      { q: 'Combien de temps se garde un conditionnement ouvert ?', a: "{opened_days} jours à {opened_temp} °C maximum pour le liquide. La poudre ouverte ne s'altère pas tant qu'elle reste au sec, fermée." },
    ],
    links: [
      { href: '{foodservice_href}', label: 'Restauration collective et cuisines centrales' },
      { href: '{bars_href}', label: 'Bars et cocktails' },
      { href: '{index_href}', label: "Tous les guides d'application" },
      { href: '{products_href}', label: 'Produits et formats' },
    ],
  },

  luxembourg: {
    country: 'Luxembourg',
    title: "Où acheter de l'aquafaba au Luxembourg - VERY AQUAFABA",
    h1: 'Où acheter VERY AQUAFABA au Luxembourg',
    crumb: 'Luxembourg',
    description: "VERY AQUAFABA au Luxembourg via le webshop Provencale : le liquide en 1 L, ce qu'il remplace en cuisine et le formulaire pour les volumes professionnels.",
    lead: "Au Luxembourg, VERY AQUAFABA est référencé par Provencale, sur son webshop, en aquafaba végétal de 1 L. Un conditionnement remplace {liquid_1l_whites} blancs d'œufs, soit {meringue_batches_1l} lots de meringue ou {eggs_1l} œufs entiers en pâtisserie. Les formats professionnels passent par le formulaire en bas de cette page.",
    sections: [
      {
        id: 'order',
        title: 'Commander sur le webshop',
        html: `<p>Provencale référence le liquide de 1 L, le format d'un établissement : un laboratoire de pâtisserie, un restaurant, un bar. Le conditionnement se range en réserve sèche jusqu'à son ouverture, au moins {unopened_months} mois à température ambiante, puis {opened_days} jours au réfrigérateur à {opened_temp} °C maximum.</p>
<p>Ce que cela donne : {meringue_batches_1l} lots de meringue à {meringue_dose} g, {macarons_batches_1l} lots de coques, {mayonnaise_batches_1l} lots de mayonnaise ou {cocktails_batches_1l} sours à {cocktails_dose} g.</p>`,
      },
      { id: 'range', title: 'La gamme derrière la référence', html: range },
      {
        id: 'professional',
        title: 'Volumes et fiche technique',
        html: `<p>Pour une cuisine centrale ou une production, le bag-in-box de 10 L représente {bib_10l_whites} blancs d'œufs et l'IBC de 1 T {ibc_1t_whites} ; les deux sont chiffrés par projet avec la fiche technique. Le sac de 3 kg de poudre, {powder_3kg_whites} blancs d'œufs, répond aux prémix secs et aux rotations irrégulières.</p>
<p>Décrivez l'application et le volume mensuel estimé dans le formulaire ci-dessous. La <a href="{professional_href}">section professionnels</a> classe le choix par activité et les <a href="{index_href}">guides d'application</a> donnent la dose par recette.</p>`,
      },
    ],
    faq: [
      { q: "Où acheter de l'aquafaba au Luxembourg ?", a: 'Sur le webshop Provencale, qui référence le liquide en 1 L. Le lien est dans le tableau ci-dessous.' },
      { q: "Combien de blancs d'œufs par conditionnement ?", a: "{liquid_1l_whites} pour le Tetrapak de 1 L, à {white_liquid} g par blanc d'œuf." },
      { q: 'Y a-t-il de la poudre ?', a: "Le sachet de 200 g remplace {powder_200g_whites} blancs d'œufs. Demandez-le par le formulaire de demande en bas de cette page." },
      { q: 'Comment obtenir la fiche technique ?', a: "Par le formulaire : entreprise, pays, application et volume mensuel estimé, et la fiche technique revient avec la réponse." },
    ],
    links: [
      { href: '{professional_href}', label: "L'aquafaba pour les professionnels" },
      { href: '{pastry_href}', label: 'Pâtisserie et boulangerie' },
      { href: '{index_href}', label: "Tous les guides d'application" },
      { href: '{products_href}', label: 'Produits et formats' },
    ],
  },

  switzerland: {
    country: 'Suisse',
    title: "Où acheter de l'aquafaba en Suisse - VERY AQUAFABA",
    h1: 'Où acheter VERY AQUAFABA en Suisse',
    crumb: 'Suisse',
    description: "VERY AQUAFABA en Suisse via Siradis : la gamme à demander au distributeur, les équivalences par conditionnement et le formulaire pour les volumes professionnels.",
    lead: "En Suisse, le canal recensé est Siradis, qui référence VERY AQUAFABA dans son catalogue. Demandez-leur la gamme du moment : un Tetrapak de 1 L remplace {liquid_1l_whites} blancs d'œufs et un sachet de poudre de 200 g {powder_200g_whites}. Cette page existe aussi en allemand.",
    sections: [
      {
        id: 'order',
        title: 'Passer par le distributeur',
        html: `<p>Siradis liste le produit dans son catalogue en ligne. Comme pour tout distributeur, la gamme référencée et le stock lui appartiennent : demandez-lui ce qu'il a, en liquide et en poudre, et utilisez les équivalences ci-dessous pour convertir votre besoin en conditionnements.</p>
<p>Un Tetrapak de 1 L, c'est {meringue_batches_1l} lots de meringue à {meringue_dose} g, {macarons_batches_1l} lots de coques ou {cocktails_batches_1l} sours. Un sachet de poudre de 200 g, c'est {meringue_batches_200g} lots de meringue, reconstitués à {white_powder} g de poudre et {white_water} ml d'eau par blanc d'œuf.</p>`,
      },
      { id: 'range', title: 'La gamme à demander', html: range },
      {
        id: 'professional',
        title: 'Hôtellerie, pâtisserie et volumes',
        html: `<p>Pour un hôtel, une pâtisserie ou une cuisine centrale, les grands formats se chiffrent par projet : bag-in-box de 10 L, {bib_10l_whites} blancs d'œufs, et IBC de 1 T, {ibc_1t_whites}. Le formulaire ci-dessous demande l'application et le volume mensuel estimé, et la fiche technique revient avec la réponse.</p>
<p>La <a href="{pastry_href}">page pâtisserie et boulangerie</a> met le format en face du rythme du four, la <a href="{bars_href}">page bars et cocktails</a> en face du nombre de sours servis, et la <a href="{reconstitution_href}">page de reconstitution</a> porte le tableau de 1 à 20 blancs d'œufs pour la poudre.</p>`,
      },
    ],
    faq: [
      { q: "Où acheter de l'aquafaba en Suisse ?", a: 'Chez Siradis, qui référence VERY AQUAFABA dans son catalogue. Le lien est dans le tableau ci-dessous.' },
      { q: 'Quels formats sont disponibles ?', a: "La gamme référencée appartient au distributeur : demandez-lui. Les formats existants sont le liquide en 1 L, 10 L et 1 T, et la poudre en 30 g, 200 g et 3 kg." },
      { q: 'Cette page existe-t-elle en allemand ?', a: 'Oui, la même page existe en allemand pour la Suisse, avec le même canal.' },
      { q: "Comment commander pour plusieurs établissements ?", a: "Par le formulaire de demande en bas de cette page : les grands formats sont chiffrés par projet avec la fiche technique." },
    ],
    links: [
      { href: '{pastry_href}', label: 'Pâtisserie et boulangerie' },
      { href: '{bars_href}', label: 'Bars et cocktails' },
      { href: '{reconstitution_href}', label: "Reconstitution de la poudre : la règle par blanc d'œuf" },
      { href: '{products_href}', label: 'Produits et formats' },
    ],
  },
};
