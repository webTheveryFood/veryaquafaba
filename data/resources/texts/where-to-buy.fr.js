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
    lead: "Trois pays ont aujourd'hui une référence où commander : les États-Unis et l'Allemagne sur Amazon, et la France sur InstantChef. Partout ailleurs, la route est le formulaire, de contact pour une question et professionnel pour un volume, et la réponse revient avec les formats et la fiche technique.",
    figures: true,
    sections: [
      {
        id: 'countries',
        title: 'La route, pays par pays',
        html: `${grid(['Pays', 'Comment acheter'], [
  ['<a href="{united_states_href}">États-Unis</a>', 'Amazon'],
  ['<a href="{germany_href}">Allemagne</a>', 'Amazon'],
  ['<a href="{france_href}">France</a>', 'InstantChef'],
  ['<a href="{united_kingdom_href}">Royaume-Uni</a>', 'Formulaire de demande'],
  ['<a href="{netherlands_href}">Pays-Bas</a>', 'Formulaire de demande'],
  ['<a href="{belgium_href}">Belgique</a>', 'Formulaire de demande'],
  ['Autres pays', 'Formulaire de demande'],
])}`,
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
      { href: '{professional_href}', label: "L'aquafaba pour les professionnels" },
      { href: '{egg_substitutes_href}', label: "Substituts végétaux à l'œuf" },
      { href: '{index_href}', label: "Tous les guides d'application" },
    ],
  },

  france: {
    inCountry: 'en France',
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
    inCountry: 'en Belgique',
    title: "Comment commander de l'aquafaba en Belgique - VERY AQUAFABA",
    h1: 'Comment commander VERY AQUAFABA en Belgique',
    crumb: 'Belgique',
    description: "Il n'y a pas encore de référence locale en Belgique : les commandes passent par les formulaires, avec l'application et le volume mensuel. Les équivalences par conditionnement et ce qu'il faut préparer.",
    lead: "Il n'y a pas encore de référence belge : la route est le formulaire de cette page, professionnel pour un volume et de contact pour une question. Donnez l'application et le volume mensuel estimé, la réponse revient avec les formats, la fiche technique et ce qui est possible. Pour dimensionner : un Tetrapak de 1 L remplace {liquid_1l_whites} blancs d'œufs, soit {chocolate_mousse_batches_1l} lots de mousse ou {mayonnaise_batches_1l} lots de mayonnaise.",
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
      { q: 'Existe-t-il une version néerlandaise de cette page ?', a: 'Oui, en néerlandais, en anglais et en allemand : le sélecteur de langue en haut de la page mène à chaque version.' },
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

  'united-states': {
    inCountry: 'aux États-Unis',
    title: "Où acheter de l'aquafaba aux États-Unis - VERY AQUAFABA",
    h1: 'Où acheter VERY AQUAFABA aux États-Unis',
    crumb: 'États-Unis',
    description: 'VERY AQUAFABA aux États-Unis : les références Amazon, le 1 L, la référence pour les cocktails et le lot de quatre, ce que remplace un Tetrapak, et le formulaire pour les volumes professionnels.',
    lead: "Aux États-Unis, la route est Amazon, avec trois références : le Tetrapak de 1 L, la référence pensée pour les bars à cocktails et le lot de quatre. Un Tetrapak de 1 L remplace {liquid_1l_whites} blancs d'œufs, soit {cocktails_batches_1l} sours ou {meringue_batches_1l} lots de meringue. Les grands formats et la poudre passent par le formulaire de cette page.",
    sections: [
      {
        id: 'order',
        title: 'Les trois références',
        html: `<p>Elles contiennent le même aquafaba. La référence pour les cocktails existe pour qu'un bar la trouve sous ce qu'il cherche, et le lot de quatre s'adresse à un établissement qui consomme plus d'un Tetrapak à la fois.</p>
<p>Un Tetrapak de 1 L, c'est {liquid_1l_whites} blancs d'œufs : {cocktails_batches_1l} sours à {cocktails_dose} g chacun, {meringue_batches_1l} lots de meringue, {mayonnaise_batches_1l} lots de mayonnaise, ou {eggs_1l} œufs entiers remplacés en pâtisserie. Une fois ouverte, elle se garde au réfrigérateur à {opened_temp} °C maximum et s'utilise dans les {opened_days} jours : un bar qui sert des sours à chaque service la vide donc sans peine.</p>`,
      },
      { id: 'range', title: 'La gamme derrière les références', html: range },
      {
        id: 'professional',
        title: 'Restaurants, bars et production',
        html: `<p>Pour un établissement qui dépasse un Tetrapak par semaine, ou pour une ligne, les formats se chiffrent par projet : le bag-in-box de 10 L, c'est {bib_10l_whites} blancs d'œufs, et l'IBC de 1 T {ibc_1t_whites}. La poudre ne figure pas encore sur les références des États-Unis, elle passe donc par le même chemin. Décrivez l'application et le volume mensuel estimé dans le formulaire ci-dessous, et la fiche technique revient avec la réponse.</p>
<p>Le format qui convient se détermine par activité dans la <a href="{professional_href}">section professionnels</a>, et par recette dans les <a href="{index_href}">guides d'application</a> : un bar commence par la page <a href="{bars_href}">bars et cocktails</a>, une cuisine par la page <a href="{foodservice_href}">restauration collective</a>.</p>`,
      },
    ],
    faq: [
      { q: "Où acheter de l'aquafaba aux États-Unis ?", a: 'Sur Amazon, par les références ci-dessous : le Tetrapak de 1 L, la référence pour les cocktails et le lot de quatre. Les trois sont du VERY AQUAFABA liquide.' },
      { q: 'Que remplace un Tetrapak de 1 L ?', a: "{liquid_1l_whites} blancs d'œufs, soit {cocktails_batches_1l} sours, {meringue_batches_1l} lots de meringue ou {eggs_1l} œufs entiers en pâtisserie." },
      { q: 'La poudre y est-elle vendue ?', a: 'Pas encore sur les références des États-Unis. Demandez-la par le formulaire de cette page, avec votre application et votre volume.' },
      { q: 'Combien de temps se garde un Tetrapak ouvert ?', a: '{opened_days} jours à {opened_temp} °C maximum. Fermé, il se conserve au moins {unopened_months} mois à température ambiante.' },
    ],
    links: [
      { href: '{bars_href}', label: 'Bars et cocktails' },
      { href: '{cocktails_href}', label: 'Cocktails : liquide ou poudre ?' },
      { href: '{index_href}', label: "Tous les guides d'application" },
      { href: '{products_href}', label: 'Produits et formats' },
    ],
  },

  'united-kingdom': {
    inCountry: 'au Royaume-Uni',
    title: "Comment commander de l'aquafaba au Royaume-Uni - VERY AQUAFABA",
    h1: 'Comment commander VERY AQUAFABA au Royaume-Uni',
    crumb: 'Royaume-Uni',
    description: "Il n'y a pas encore de référence britannique : les commandes passent par le formulaire de demande, avec l'application et le volume mensuel. Ce que remplace un conditionnement dans une boulangerie, une cuisine ou un bar, et ce qu'il faut préparer avant de demander.",
    lead: "Il n'y a pas encore de référence au Royaume-Uni, la route est donc le formulaire de demande de cette page : l'application et le volume mensuel estimé, et la réponse revient avec les formats et la fiche technique. Pour dimensionner : {white_liquid} g de liquide remplacent un blanc d'œuf, un Tetrapak de 1 L {liquid_1l_whites}, et un sachet de poudre de 200 g {powder_200g_whites}.",
    sections: [
      { id: 'order', title: "Ce qu'il faut mettre dans la demande", html: ask },
      { id: 'range', title: 'Les formats sur lesquels vous nous interrogez', html: range },
      {
        id: 'start',
        title: 'Boulangerie, cuisine ou bar',
        html: `<p>Trois routes couvrent la plupart des demandes britanniques, et chacune a sa page : une boulangerie ou un laboratoire de pâtisserie lit la page <a href="{pastry_href}">pâtisserie et boulangerie</a>, où le format suit le rythme du four ; une cuisine centrale ou un groupe lit la page <a href="{foodservice_href}">restauration collective et cuisines centrales</a>, construite autour du bag-in-box de 10 L ; un bar lit la page <a href="{bars_href}">bars et cocktails</a>, où un sour demande {cocktails_dose} g.</p>
<p>Le calcul pour le formulaire est court : {meringue_dose} g par lot de meringue, {mayonnaise_dose} g par lot de mayonnaise, {chocolate_mousse_dose} g par lot de mousse, {cocktails_dose} g par sour. Comptez les lots que vous faites dans le mois, multipliez, et inscrivez ce volume. Chaque <a href="{index_href}">guide d'application</a> porte un calculateur qui le fait pour vous.</p>`,
      },
    ],
    faq: [
      { q: "Peut-on acheter de l'aquafaba au Royaume-Uni aujourd'hui ?", a: "Il n'y a pas encore de référence britannique. Les commandes passent par le formulaire de demande de cette page, avec l'application et le volume mensuel estimé." },
      { q: 'Que doit contenir la demande ?', a: "Entreprise, pays, application et volume mensuel estimé, plus une ligne sur le projet. C'est ce qui rend la réponse utile." },
      { q: 'Combien consomme une boulangerie ?', a: "Comptez les lots : {meringue_batches_1l} lots de meringue ou {macarons_batches_1l} lots de coques de macarons sortent d'un Tetrapak de 1 L, qui remplace {liquid_1l_whites} blancs d'œufs." },
      { q: 'Quel format demander ?', a: "Liquide si un conditionnement ouvert tourne en {opened_days} jours à {opened_temp} °C maximum ; poudre sinon, puisqu'un sachet ouvert ne s'altère pas tant qu'il reste au sec, fermé." },
    ],
    links: [
      { href: '{pastry_href}', label: 'Pâtisserie et boulangerie' },
      { href: '{foodservice_href}', label: 'Restauration collective et cuisines centrales' },
      { href: '{bars_href}', label: 'Bars et cocktails' },
      { href: '{products_href}', label: 'Produits et formats' },
    ],
  },

  germany: {
    inCountry: 'en Allemagne',
    title: "Où acheter de l'aquafaba en Allemagne - VERY AQUAFABA",
    h1: 'Où acheter VERY AQUAFABA en Allemagne',
    crumb: 'Allemagne',
    description: 'VERY AQUAFABA en Allemagne sur Amazon : le Tetrapak de 1 L et la poudre de 200 g, ce que remplace un conditionnement, et le formulaire pour les volumes professionnels.',
    lead: "En Allemagne, la route est Amazon, avec deux références : le Tetrapak de 1 L et la poudre de 200 g. Un Tetrapak remplace {liquid_1l_whites} blancs d'œufs, soit {meringue_batches_1l} lots de meringue ou {cocktails_batches_1l} sours ; un sachet de 200 g remplace {powder_200g_whites} blancs d'œufs. Les grands formats se chiffrent par projet avec le formulaire de cette page.",
    sections: [
      {
        id: 'order',
        title: 'Les deux références',
        html: `<p>C'est le même aquafaba, dans deux états. Le liquide se verse et se pèse, déjà à la température du foisonnement en sortant du réfrigérateur ; la poudre se reconstitue avec {white_powder} g de poudre et {white_water} ml d'eau par blanc d'œuf.</p>
<p>Un Tetrapak de 1 L, c'est {meringue_batches_1l} lots de meringue à {meringue_dose} g, {macarons_batches_1l} lots de coques de macarons, {mayonnaise_batches_1l} lots de mayonnaise ou {eggs_1l} œufs entiers en pâtisserie. Ouvert, il se garde {opened_days} jours à {opened_temp} °C maximum ; le sachet de poudre ouvert ne s'altère pas tant qu'il reste au sec, fermé.</p>`,
      },
      { id: 'range', title: 'La gamme derrière les références', html: range },
      {
        id: 'professional',
        title: 'Restauration, boulangerie et volumes',
        html: `<p>Pour un établissement qui consomme plus d'un conditionnement par semaine, ou pour une ligne, les formats se chiffrent par projet : le bag-in-box de 10 L, {bib_10l_whites} blancs d'œufs, et l'IBC de 1 T, {ibc_1t_whites}. Le formulaire professionnel ci-dessous demande l'entreprise, le pays, l'application et le volume mensuel estimé ; la fiche technique revient avec la réponse.</p>
<p>La <a href="{pastry_href}">page pâtisserie et boulangerie</a> et la <a href="{bars_href}">page bars et cocktails</a> montrent quel format chaque établissement finit par prendre, et les <a href="{index_href}">guides d'application</a> donnent la dose par recette.</p>`,
      },
    ],
    faq: [
      { q: "Où acheter de l'aquafaba en Allemagne ?", a: 'Sur Amazon, par les références ci-dessous : le Tetrapak de 1 L et la poudre de 200 g.' },
      { q: "Combien de blancs d'œufs remplace un Tetrapak de 1 L ?", a: "{liquid_1l_whites}, à {white_liquid} g par blanc d'œuf. En cuisine, cela fait {meringue_batches_1l} lots de meringue ou {mayonnaise_batches_1l} lots de mayonnaise." },
      { q: 'La poudre y est-elle disponible ?', a: "Oui, en sachet de 200 g, soit {powder_200g_whites} blancs d'œufs, à reconstituer avec {white_powder} g de poudre et {white_water} ml d'eau par blanc d'œuf." },
      { q: 'Comment obtenir les grands formats ?', a: "Par le formulaire professionnel de cette page : le bag-in-box et l'IBC sont chiffrés par projet avec la fiche technique." },
    ],
    links: [
      { href: '{pastry_href}', label: 'Pâtisserie et boulangerie' },
      { href: '{bars_href}', label: 'Bars et cocktails' },
      { href: '{index_href}', label: "Tous les guides d'application" },
      { href: '{products_href}', label: 'Produits et formats' },
    ],
  },

  netherlands: {
    inCountry: 'aux Pays-Bas',
    title: "Comment commander de l'aquafaba aux Pays-Bas - VERY AQUAFABA",
    h1: 'Comment commander VERY AQUAFABA aux Pays-Bas',
    crumb: 'Pays-Bas',
    description: "Il n'y a pas encore de référence néerlandaise : les commandes passent par les formulaires, avec l'application et le volume mensuel. Ce que remplace un conditionnement dans une boulangerie ou une cuisine, et ce qu'il faut préparer.",
    lead: "Il n'y a pas encore de référence néerlandaise, la route est donc le formulaire de cette page, professionnel pour un volume et de contact pour une question. Donnez l'application et le volume mensuel estimé, et la réponse revient avec les formats et la fiche technique. Pour calculer : {white_liquid} g de liquide remplacent un blanc d'œuf, un Tetrapak de 1 L {liquid_1l_whites} et un sachet de poudre de 200 g {powder_200g_whites}.",
    sections: [
      { id: 'order', title: 'Ce qui doit figurer dans la demande', html: ask },
      { id: 'range', title: 'Les formats dont il est question', html: range },
      {
        id: 'start',
        title: 'Boulangerie, cuisine ou bar',
        html: `<p>Trois routes couvrent la plupart des demandes néerlandaises, chacune avec sa propre page : une boulangerie ou un atelier de pâtisserie lit la page <a href="{pastry_href}">pâtisserie et boulangerie</a>, où le format suit le rythme du four ; une cuisine centrale lit la page <a href="{foodservice_href}">restauration collective et cuisines centrales</a>, construite autour du bag-in-box de 10 L ; un bar lit la page <a href="{bars_href}">bars et cocktails</a>, où un sour demande {cocktails_dose} g.</p>
<p>Le calcul pour le formulaire est court : {meringue_dose} g par lot de meringue, {mayonnaise_dose} g par lot de mayonnaise, {chocolate_mousse_dose} g par lot de mousse, {cocktails_dose} g par sour. Comptez les lots du mois, multipliez, et inscrivez ce volume. Chaque <a href="{index_href}">guide d'application</a> a un calculateur qui le fait pour vous.</p>`,
      },
    ],
    faq: [
      { q: "Peut-on acheter de l'aquafaba aux Pays-Bas aujourd'hui ?", a: "Il n'y a pas encore de référence néerlandaise. Les commandes passent par le formulaire professionnel de cette page, avec l'application et le volume mensuel estimé." },
      { q: 'Que doit contenir la demande ?', a: 'Entreprise, pays, application et volume mensuel estimé, plus une ligne sur le projet. La réponse porte la fiche technique.' },
      { q: 'Combien utilise une boulangerie ?', a: "Comptez les lots : {meringue_batches_1l} lots de meringue ou {macarons_batches_1l} lots de coques de macarons sortent d'un seul Tetrapak de 1 L, qui remplace {liquid_1l_whites} blancs d'œufs." },
      { q: 'Quel format demander ?', a: "Liquide si un conditionnement ouvert tourne en {opened_days} jours à {opened_temp} °C maximum ; poudre sinon, car un sachet ouvert ne s'altère pas tant qu'il reste au sec, fermé." },
    ],
    links: [
      { href: '{pastry_href}', label: 'Pâtisserie et boulangerie' },
      { href: '{foodservice_href}', label: 'Restauration collective et cuisines centrales' },
      { href: '{bars_href}', label: 'Bars et cocktails' },
      { href: '{products_href}', label: 'Produits et formats' },
    ],
  },
};
