// Où acheter, français (set-2 E0 et les pays francophones). La route d'achat par pays est
// celle du client (Arnaud, courriel du 28 aout 2026, "Purchase URL for every country") :
// les États-Unis et l'Allemagne sur Amazon, la France sur InstantChef, TOUS LES AUTRES PAYS
// par le formulaire de contact et le formulaire B2B. Aucune page n'annonce un canal que
// nous ne pouvons pas garantir, ni prix ni stock. Aucun tiret long.
const grid = (heads, rows) => `<table class="va-guide-grid">
<thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
<tbody>
${rows.map((r) => `<tr>${r.map((c, i) => `<td data-label="${heads[i]}">${c}</td>`).join('')}</tr>`).join('\n')}
</tbody>
</table>`;

const range = `<p>Chaque conditionnement est décrit par les blancs d'œufs qu'il remplace, à {white_liquid} g de liquide ou {white_powder} g de poudre par blanc d'œuf.</p>
<ul>
<li>Liquide : Tetrapak de 1 L = {liquid_1l_whites} blancs d'œufs, bag-in-box de 10 L = {bib_10l_whites}, IBC de 1 T = {ibc_1t_whites}.</li>
<li>Poudre : 30 g = {powder_30g_whites} blancs d'œufs, 200 g = {powder_200g_whites}, 3 kg = {powder_3kg_whites}.</li>
</ul>
<p>Fermés, les deux se conservent au moins {unopened_months} mois à température ambiante. Le liquide ouvert se garde au réfrigérateur à {opened_temp} °C maximum et s'utilise dans les {opened_days} jours ; la poudre ouverte ne s'altère pas tant qu'elle reste au sec, fermée. La <a href="{products_href}">page Produits</a> porte toute la gamme.</p>`;

const ask = `<p>Le formulaire professionnel demande l'entreprise, le pays, l'application et le volume mensuel estimé, plus une ligne sur le projet. Ce sont ces champs qui rendent la réponse utile : l'application décide du format, le volume décide du conditionnement.</p>
<ul>
<li>Application : meringue, macarons, mousse, mayonnaise, pâtisserie, cocktails, ou le produit que vous formulez.</li>
<li>Volume : par mois, en litres ou en blancs d'œufs remplacés, selon ce que vous connaissez.</li>
<li>Format : liquide si un conditionnement ouvert tourne en {opened_days} jours, poudre sinon.</li>
</ul>
<p>La réponse porte la fiche technique et ce qui est possible pour votre pays. Pour une question générale, le <a href="{contact_href}">formulaire de contact</a> suffit.</p>`;

export default {
  index: {
    title: 'Où acheter VERY AQUAFABA : la route par pays - VERY AQUAFABA',
    h1: 'Où acheter VERY AQUAFABA, pays par pays',
    crumb: 'Où acheter',
    enquiryLabel: 'Où acheter',
    description: "Comment acheter VERY AQUAFABA dans chaque pays : les références Amazon aux États-Unis et en Allemagne, InstantChef en France, et les formulaires partout ailleurs.",
    lead: "Trois pays ont aujourd'hui une référence où commander : les États-Unis et l'Allemagne sur Amazon, et la France sur InstantChef. Partout ailleurs, la route est le formulaire, de contact pour une question et professionnel pour un volume, et la réponse revient avec les formats et la fiche technique. Cette page dit qui est quoi, pour n'envoyer personne vers une boutique qui ne le sert pas.",
    figures: true,
    sections: [
      {
        id: 'countries',
        title: 'La route, pays par pays',
        html: `<p>Chaque page pays porte sa propre route, dans la langue de ce pays.</p>
${grid(['Pays', 'Comment commander'], [
  ['<a href="{france_href}">France</a>', 'InstantChef : le 1 L et la poudre de 200 g'],
  ['<a href="{united_states_href}">États-Unis</a>', 'Amazon : le 1 L, la référence cocktails et le pack de quatre, page en anglais'],
  ['<a href="{germany_href}">Allemagne</a>', 'Amazon : le 1 L et la poudre de 200 g, page en allemand'],
  ['<a href="{belgium_href}">Belgique</a>', 'Formulaire professionnel et formulaire de contact'],
  ['<a href="{united_kingdom_href}">Royaume-Uni</a>', 'Formulaire professionnel et formulaire de contact, page en anglais'],
  ['<a href="{netherlands_href}">Pays-Bas</a>', 'Formulaire professionnel et formulaire de contact, page en néerlandais'],
  ['Tout autre pays', 'Les formulaires de cette page'],
])}
<p>Un pays passe dans le premier groupe le jour où une référence y est confirmée. En attendant, la demande est la route honnête : elle nous dit où est la demande, et elle vous ramène une réponse avec les formats et la fiche technique.</p>`,
      },
      { id: 'range', title: 'Ce que vous commandez', html: range },
      {
        id: 'professional',
        title: 'Volumes professionnels et fiche technique',
        html: `<p>Le bag-in-box de 10 L et l'IBC de 1 T ne se vendent en boutique dans aucun pays : ils sont chiffrés par projet, avec la fiche technique, une fois l'application et le volume mensuel connus. C'est à cela que sert le formulaire professionnel de cette page ; pour une question simple, le <a href="{contact_href}">formulaire de contact</a> suffit.</p>
<p>Si vous hésitez encore entre liquide et poudre, la <a href="{professional_href}">section professionnels</a> classe la question par activité : <a href="{pastry_href}">pâtisserie et boulangerie</a>, <a href="{bars_href}">bars et cocktails</a>, <a href="{foodservice_href}">restauration collective et cuisines centrales</a> et <a href="{industry_href}">industrie agroalimentaire</a>.</p>`,
      },
    ],
    faq: [
      { q: "Dans quels pays peut-on commander directement aujourd'hui ?", a: "Aux États-Unis et en Allemagne, sur Amazon, et en France, sur InstantChef. Ce sont les références confirmées par VERY AQUAFABA." },
      { q: "Mon pays n'est pas dans ces trois, que faire ?", a: "Utilisez le formulaire professionnel : pays, application et volume mensuel estimé. La réponse porte la fiche technique et ce qui est possible pour votre pays." },
      { q: 'Les prix figurent-ils sur ces pages ?', a: 'Non. Les prix et le stock appartiennent à la boutique : chaque page renvoie vers la référence et lui laisse cela.' },
      { q: "Peut-on commander le bag-in-box ou l'IBC en ligne ?", a: "Non, dans aucun pays. Le bag-in-box de 10 L et l'IBC de 1 T sont chiffrés par projet avec la fiche technique, via le formulaire professionnel." },
    ],
    links: [
      { href: '{france_href}', label: 'Où acheter en France' },
      { href: '{belgium_href}', label: 'Comment commander en Belgique' },
      { href: '{germany_href}', label: 'Où acheter en Allemagne' },
      { href: '{united_states_href}', label: 'Où acheter aux États-Unis' },
      { href: '{professional_href}', label: "L'aquafaba pour les professionnels" },
    ],
  },

  france: {
    country: 'France',
    title: "Où acheter de l'aquafaba en France - VERY AQUAFABA",
    h1: 'Où acheter VERY AQUAFABA en France',
    crumb: 'France',
    description: "VERY AQUAFABA en France sur InstantChef : le liquide de 1 L et la poudre de 200 g, ce que remplace chaque conditionnement, et le formulaire pour les volumes professionnels.",
    lead: "En France, la route est InstantChef, avec deux références : le liquide en 1 L et la poudre en 200 g. Un Tetrapak de 1 L remplace {liquid_1l_whites} blancs d'œufs, soit {meringue_batches_1l} lots de meringue ou {cocktails_batches_1l} sours ; un sachet de poudre de 200 g en remplace {powder_200g_whites}. Les grands formats se chiffrent par projet avec le formulaire de cette page.",
    sections: [
      {
        id: 'order',
        title: 'Les deux références',
        html: `<p>InstantChef référence le liquide en 1 L et la poudre en 200 g : c'est le même aquafaba, dans les deux états. Le liquide se verse et se pèse, déjà à la température du foisonnement ; la poudre se reconstitue à {white_powder} g de poudre et {white_water} ml d'eau par blanc d'œuf.</p>
<p>Un Tetrapak de 1 L, c'est {meringue_batches_1l} lots de meringue à {meringue_dose} g, {macarons_batches_1l} lots de coques de macarons, {mayonnaise_batches_1l} lots de mayonnaise ou {cocktails_batches_1l} sours. Ouvert, il se garde {opened_days} jours à {opened_temp} °C maximum ; le sachet de poudre ouvert, lui, ne s'altère pas tant qu'il reste au sec, fermé.</p>`,
      },
      { id: 'range', title: 'La gamme derrière les références', html: range },
      {
        id: 'professional',
        title: 'Restauration, production et volumes',
        html: `<p>Au-delà de ces deux références, les formats se chiffrent par projet : le bag-in-box de 10 L, {bib_10l_whites} blancs d'œufs, pour une cuisine centrale qui tire au kilo à chaque poste, et l'IBC de 1 T, {ibc_1t_whites}, pour une ligne. Le formulaire professionnel ci-dessous demande l'entreprise, le pays, l'application et le volume mensuel estimé ; la fiche technique revient avec la réponse.</p>
<p>La <a href="{professional_href}">section professionnels</a> classe le choix par activité, et les <a href="{index_href}">guides d'application</a> donnent la dose par recette : <a href="{meringue_href}">meringue</a>, <a href="{macarons_href}">macarons</a>, <a href="{mayonnaise_href}">mayonnaise</a>, <a href="{cocktails_href}">cocktails</a>.</p>`,
      },
    ],
    faq: [
      { q: "Où acheter de l'aquafaba en France ?", a: "Sur InstantChef, qui référence le liquide en 1 L et la poudre en 200 g. Les liens sont dans le tableau ci-dessous." },
      { q: "Combien de blancs d'œufs remplace un Tetrapak de 1 L ?", a: "{liquid_1l_whites}, à {white_liquid} g par blanc d'œuf. En cuisine, cela fait {meringue_batches_1l} lots de meringue ou {mayonnaise_batches_1l} lots de mayonnaise." },
      { q: 'La poudre est-elle disponible ?', a: "Oui, en sachet de 200 g, soit {powder_200g_whites} blancs d'œufs, à reconstituer à {white_powder} g de poudre et {white_water} ml d'eau par blanc d'œuf." },
      { q: 'Comment obtenir les grands formats ?', a: "Par le formulaire professionnel de cette page : le bag-in-box de 10 L et l'IBC de 1 T sont chiffrés par projet avec la fiche technique." },
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
    title: "Comment commander de l'aquafaba en Belgique - VERY AQUAFABA",
    h1: 'Comment commander VERY AQUAFABA en Belgique',
    crumb: 'Belgique',
    description: "Il n'y a pas encore de référence locale en Belgique : les commandes passent par les formulaires, avec l'application et le volume mensuel. Les équivalences par conditionnement et ce qu'il faut préparer.",
    lead: "Il n'y a pas encore de référence belge : la route est le formulaire de cette page, professionnel pour un volume et de contact pour une question. Donnez l'application et le volume mensuel estimé, la réponse revient avec les formats, la fiche technique et ce qui est possible. Pour dimensionner : un Tetrapak de 1 L remplace {liquid_1l_whites} blancs d'œufs, soit {chocolate_mousse_batches_1l} lots de mousse ou {mayonnaise_batches_1l} lots de mayonnaise. Cette page existe aussi en néerlandais.",
    sections: [
      { id: 'order', title: "Ce qu'il faut mettre dans la demande", html: ask },
      { id: 'range', title: 'Les formats sur lesquels vous nous interrogez', html: range },
      {
        id: 'start',
        title: 'Horeca, cuisine centrale, laboratoire',
        html: `<p>La plupart des demandes belges viennent de l'horeca : une cuisine centrale qui tire au kilo à chaque poste lira d'abord la page <a href="{foodservice_href}">restauration collective et cuisines centrales</a>, un laboratoire de pâtisserie la page <a href="{pastry_href}">pâtisserie et boulangerie</a>, un bar la page <a href="{bars_href}">bars et cocktails</a>.</p>
<p>Le calcul est court : {mayonnaise_dose} g par lot de mayonnaise, {chocolate_mousse_dose} g par lot de mousse, {cocktails_dose} g par sour. Comptez les lots du mois, multipliez, et c'est le volume à écrire dans le formulaire ; les calculateurs des <a href="{index_href}">guides</a> le font pour vous.</p>`,
      },
    ],
    faq: [
      { q: "Peut-on acheter de l'aquafaba en Belgique aujourd'hui ?", a: "Il n'y a pas encore de référence belge. Les commandes passent par le formulaire professionnel de cette page, avec l'application et le volume mensuel estimé." },
      { q: 'Cette page existe-t-elle en néerlandais ?', a: 'Oui, la même page existe en néerlandais pour la Belgique.' },
      { q: 'Que doit contenir la demande ?', a: "Entreprise, pays, application et volume mensuel estimé, plus une ligne sur le projet. La réponse porte la fiche technique." },
      { q: 'Quel format demander ?', a: "Liquide si un conditionnement ouvert tourne en {opened_days} jours à {opened_temp} °C maximum ; poudre sinon, puisqu'un sachet ouvert ne s'altère pas tant qu'il reste au sec, fermé." },
    ],
    links: [
      { href: '{foodservice_href}', label: 'Restauration collective et cuisines centrales' },
      { href: '{bars_href}', label: 'Bars et cocktails' },
      { href: '{index_href}', label: "Tous les guides d'application" },
      { href: '{products_href}', label: 'Produits et formats' },
    ],
  },


};
