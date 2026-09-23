// Substituts végétaux à l'œuf, français (set-2 A1 à A4). Même structure, tokens et balises
// que egg-substitutes.en.js (vérifié par scripts/applications/check-guides.mjs). Aucun tiret long.
const grid = (heads, rows) => `<table class="va-guide-grid">
<thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
<tbody>
${rows.map((r) => `<tr>${r.map((c, i) => `<td data-label="${heads[i]}">${c}</td>`).join('')}</tr>`).join('\n')}
</tbody>
</table>`;

export default {
  index: {
    title: "Substitut végétal aux œufs : un substitut vegan par fonction - VERY AQUAFABA",
    h1: "Substituts végétaux aux œufs : partez de la fonction à remplacer",
    crumb: "Substituts d'œuf",
    enquiryLabel: "Substituts d'œuf",
    description: "Un substitut vegan aux œufs se choisit par fonction : monter, émulsionner ou lier. VERY AQUAFABA couvre les trois à partir du pois chiche, à {egg_liquid} g par œuf entier et {white_liquid} g par blanc d'œuf, avec les applications où chaque fonction est documentée.",
    lead: "Un substitut végétal aux œufs se choisit selon le travail qu'il doit faire : tenir une mousse, garder une émulsion ou lier une pâte. VERY AQUAFABA est de l'aquafaba de pois chiche, filtré et standardisé, et il couvre les trois : {egg_liquid} g remplacent un œuf entier, {white_liquid} g un blanc d'œuf, et {yolk_liquid} g plus {yolk_oil} g d'huile tiennent lieu de jaune. Cette page classe le choix par fonction, donne la conversion au poids et vous envoie vers l'application où cette fonction est déjà documentée.",
    figures: true,
    sections: [
      {
        id: 'function',
        title: 'Par fonction : monter, émulsionner, lier',
        html: `<p>L'œuf fait trois travaux différents dans une recette, et un substitut se juge sur celui dont vous avez réellement besoin. Chaque ligne ci-dessous mène au guide où cette fonction est traitée en entier, avec sa méthode et ses contrôles.</p>
${grid(['Fonction', "Ce que faisait l'œuf", 'Avec VERY AQUAFABA', 'Documenté dans'], [
  ['Monter', "Blanc d'œuf monté en une mousse qui porte le sucre et l'air", "{white_liquid} g par blanc d'œuf, monté seul, froid", '<a href="{meringue_href}">Meringue</a>, <a href="{macarons_href}">macarons</a>, <a href="{chocolate_mousse_href}">mousse au chocolat</a>, <a href="{cocktails_href}">cocktails</a>'],
  ['Émulsionner', "Œuf qui tient l'huile et l'eau ensemble dans une sauce", '{mayonnaise_dose} g émulsionnent {mayonnaise_oil} g d\'huile', '<a href="{mayonnaise_href}">Mayonnaise</a>'],
  ['Lier et hydrater', "Œuf entier qui lie une pâte et apporte de l'eau", '{egg_liquid} g par œuf entier, pesés', '<a href="{baking_href}">Pâtisserie</a>'],
  ["Richesse d'un jaune", 'Jaune qui apporte gras et couleur', "{yolk_liquid} g plus {yolk_oil} g d'huile", '<a href="{ratio_href}">Page du ratio aquafaba œuf</a>'],
])}
<p>Un seul ingrédient couvre les quatre lignes, et c'est ce qui sépare l'aquafaba d'un substitut acheté fonction par fonction. Ce qui change, c'est la dose et la manipulation, pas le produit.</p>`,
      },
      {
        id: 'convert',
        title: 'Convertir une recette, au poids',
        html: `<p>L'aquafaba se pèse, jamais en cuillères : c'est ainsi qu'une recette professionnelle reste la même d'un lot à l'autre. La règle est courte.</p>
<ul>
<li>{egg_liquid} g d'aquafaba remplacent un œuf entier.</li>
<li>{white_liquid} g remplacent un blanc d'œuf, tout comme {white_powder} g de poudre reconstitués avec {white_water} ml d'eau.</li>
<li>{yolk_liquid} g plus {yolk_oil} g d'huile tiennent lieu d'un jaune, parce que l'aquafaba n'apporte pas de gras.</li>
</ul>
<p>Un œuf contient environ {water_egg_pct} pour cent d'eau et l'aquafaba {water_aquafaba_pct} pour cent : quand les œufs entiers sortent, les autres liquides baissent donc de {reduce_liquids} pour cent et les pâtes denses sont cuites à cœur. La <a href="{ratio_href}">page du ratio aquafaba œuf</a> porte les exemples chiffrés, et le <a href="{baking_calc_href}">calculateur de substitution</a> convertit les œufs, les blancs et les jaunes de votre propre recette en liquide ou en poudre.</p>`,
      },
      {
        id: 'formats',
        title: 'Deux formats du même ingrédient',
        html: `<p>Le même aquafaba existe prêt à verser ou séché. Celui qui vous convient se décide selon la vitesse à laquelle un conditionnement ouvert est consommé et selon l'endroit où il est rangé, pas selon la recette : la conversion ci-dessus est identique pour les deux.</p>
${grid(['Format', "Par blanc d'œuf", 'Une fois ouvert', 'À lire'], [
  ['Liquide, du Tetrapak de 1 L à l\'IBC de 1 T', '{white_liquid} g, prêts à peser', '{opened_days} jours à {opened_temp} °C maximum', '<a href="{liquid_egg_white_href}">Alternative végétale au blanc d\'œuf liquide</a>'],
  ['Poudre, sachets de 30 g à 3 kg', "{white_powder} g plus {white_water} ml d'eau", 'Ne s\'altère pas, gardée au sec et fermée', '<a href="{egg_white_powder_href}">Alternative végétale au blanc d\'œuf en poudre</a>'],
])}
<p>Si ce que vous remplacez est précisément le blanc d'œuf, la <a href="{egg_white_href}">page du blanc d'œuf</a> donne l'équivalence conditionnement par conditionnement. Si vous achetez pour une cuisine, un bar ou une ligne, la <a href="{professional_href}">section professionnels</a> classe les formats par activité.</p>`,
      },
      {
        id: 'labels',
        title: "Ce qu'est le produit, et ce que dit l'étiquette",
        html: `<p>VERY AQUAFABA est le liquide de cuisson du pois chiche, filtré, affiné et standardisé pour un usage professionnel, neutre en goût et clean label, comme le décrit la <a href="{products_href}">page Produits</a>. Cette même page indique ce qui figure sur l'emballage : origine végétale, sans gluten, et un Nutri-Score A sur le liquide.</p>
<p>L'emballage indique qu'il remplace la fonctionnalité du blanc d'œuf, et c'est de là que partent ces pages : la mousse, l'émulsion et la liaison décrites plus haut, chacune démontrée dans une recette du site. Tout ce qui dépend du gras d'un jaune prend la correction d'huile. Pour la fiche technique d'un format, utilisez le formulaire de demande de cette page.</p>`,
      },
    ],
    faq: [
      { q: 'De quoi est fait ce substitut vegan aux œufs ?', a: "De pois chiches et d'eau. VERY AQUAFABA est le liquide de cuisson du pois chiche, filtré, affiné et standardisé pour que chaque lot se comporte de la même façon, comme le décrit la [page Produits]({products_href})." },
      { q: "Quelle quantité d'aquafaba équivaut à un œuf ?", a: "{egg_liquid} g d'aquafaba par œuf entier, {white_liquid} g par blanc d'œuf, et {yolk_liquid} g plus {yolk_oil} g d'huile par jaune. Pesez plutôt que de mesurer en cuillères." },
      { q: 'Quelle fonction remplace-t-il le mieux ?', a: 'Les trois du tableau ci-dessus, chacune dans une recette documentée : monter en meringue, macarons, mousse et cocktails, émulsionner en mayonnaise, lier et hydrater en pâtisserie.' },
      { q: 'Faut-il changer autre chose dans la recette ?', a: "Seulement les liquides, et seulement quand les œufs entiers sortent : baissez les autres liquides de {reduce_liquids} pour cent, parce que l'aquafaba contient environ {water_aquafaba_pct} pour cent d'eau contre environ {water_egg_pct} pour cent pour un œuf." },
      { q: 'La poudre est-elle la même chose que le liquide ?', a: "Oui, séchée. {white_powder} g de poudre plus {white_water} ml d'eau donnent {white_total} g d'aquafaba, la même masse que le liquide, et remplacent un blanc d'œuf." },
    ],
    links: [
      { href: '{egg_white_href}', label: "Alternative végétale au blanc d'œuf" },
      { href: '{liquid_egg_white_href}', label: "Alternative végétale au blanc d'œuf liquide" },
      { href: '{egg_white_powder_href}', label: "Alternative végétale au blanc d'œuf en poudre" },
      { href: '{ratio_href}', label: "Quelle quantité d'aquafaba équivaut à un œuf" },
      { href: '{professional_href}', label: "L'aquafaba pour les professionnels" },
    ],
  },

  'egg-white': {
    title: "Alternative végétale au blanc d'œuf : {white_liquid} g par blanc - VERY AQUAFABA",
    h1: "Une alternative végétale au blanc d'œuf : {white_liquid} g d'aquafaba par blanc d'œuf",
    crumb: "Blanc d'œuf",
    enquiryLabel: "Alternative au blanc d'œuf",
    description: "Un substitut vegan au blanc d'œuf compté par blanc : {white_liquid} g de VERY AQUAFABA liquide ou {white_powder} g de poudre remplacent un blanc d'œuf, avec les lots que donne chaque conditionnement et les recettes où c'est documenté.",
    lead: "Un blanc d'œuf se remplace par {white_liquid} g de VERY AQUAFABA liquide, ou par {white_powder} g de poudre reconstitués avec {white_water} ml d'eau. Cette seule équivalence rend facile la conversion d'une recette comptée en blancs d'œufs : un Tetrapak de 1 L tient lieu de {liquid_1l_whites} blancs d'œufs et un sachet de 200 g de {powder_200g_whites}. Cette page donne l'équivalence conditionnement par conditionnement, ce que la mousse fait dans les recettes du site, et ce que le fouet attend de vous.",
    figures: true,
    sections: [
      {
        id: 'equivalence',
        title: 'L\'équivalence, conditionnement par conditionnement',
        html: `<p>Chaque conditionnement est décrit par le nombre de blancs d'œufs qu'il remplace, parce que c'est ainsi qu'une recette les compte.</p>
${grid(['Conditionnement', "Blancs d'œufs", 'Ce que cela donne en pratique'], [
  ['Tetrapak de 1 L, liquide', '{liquid_1l_whites}', '{meringue_batches_1l} lots de meringue ou {macarons_batches_1l} de macarons'],
  ['Bag-in-box de 10 L, liquide', '{bib_10l_whites}', 'Une cuisine de production qui tire au kilo à chaque poste'],
  ['IBC de 1 T, liquide', '{ibc_1t_whites}', 'Une ligne qui dose en continu'],
  ['Sachet de 30 g, poudre', '{powder_30g_whites}', 'Un premier lot d\'essai'],
  ['Sachet de 200 g, poudre', '{powder_200g_whites}', '{meringue_batches_200g} lots de meringue'],
  ['Sac de 3 kg, poudre', '{powder_3kg_whites}', 'Une cuisine professionnelle ou un prémix sec'],
])}
<p>La <a href="{ratio_href}">page du ratio aquafaba œuf</a> porte toute la conversion, œufs entiers et jaunes compris ; cette page reste sur le blanc d'œuf.</p>`,
      },
      {
        id: 'does',
        title: "Ce qu'il fait là où le blanc d'œuf servait",
        html: `<p>Le blanc d'œuf sert avant tout à une chose : une mousse qui retient l'air et porte le sucre. L'aquafaba fait cette mousse sans œuf en cuisine, et les recettes du site la montrent à quatre charges différentes.</p>
<ul>
<li><a href="{meringue_href}">Meringue</a> : {meringue_dose} g, soit {meringue_eggs} blancs d'œufs, montés avec {meringue_sugar} g de sucre et séchés à {meringue_bake} °C, pour environ {meringue_yield} meringues.</li>
<li><a href="{macarons_href}">Macarons</a> : {macarons_dose} g, {macarons_eggs} blancs d'œufs, pour environ {macarons_yield} coques.</li>
<li><a href="{chocolate_mousse_href}">Mousse au chocolat</a> : {chocolate_mousse_dose} g, {chocolate_mousse_eggs} blancs d'œufs, incorporés au chocolat à {chocolate_mousse_fold_temp} °C.</li>
<li><a href="{cocktails_href}">Sours au bar</a> : {cocktails_dose} g par verre, dry shakés {cocktails_dry_shake} secondes.</li>
</ul>
<p>Chaque guide porte son <a href="{meringue_calc_href}">calculateur de quantités</a> et sa fiche de procédé, pour qu'un lot se convertisse sans calcul.</p>`,
      },
      {
        id: 'handling',
        title: 'Ce que le fouet demande',
        html: `<p>La mousse est une mousse de protéines pure, sans gras dans la recette, et elle se comporte en conséquence. Trois points couvrent presque tous les défauts, et ce sont ceux que les guides impriment.</p>
<ul>
<li>Froid. L'aquafaba entre dans la cuve à {meringue_chill} °C ; la poudre reconstituée est refroidie à la même température. Un aquafaba tiède monte lentement et donne une mousse plus faible.</li>
<li>Propre. Un film de gras sur la cuve ou le fouet bride le volume, les deux sont donc essuyés avant que l'aquafaba y entre.</li>
<li>Sucre en dernier. Il entre une fois que la mousse tient en bec d'oiseau souple, une cuillère à la fois, sinon il perle au stockage.</li>
</ul>
<p>Le temps de foisonnement se compte en minutes, pas en secondes : {meringue_whip} minutes en grande vitesse pour un lot de meringue. Là où la recette prévoit un stabilisant, la crème de tartre ou l'acide citrique entre au bec d'oiseau souple, pas au départ.</p>`,
      },
      {
        id: 'choose',
        title: "Liquide ou poudre pour le même blanc d'œuf",
        html: `<p>L'équivalence ne change pas avec le format : le choix porte donc sur le conditionnement, pas sur la recette. Le liquide ouvert se garde à {opened_temp} °C maximum et s'utilise dans les {opened_days} jours ; la poudre ouverte ne s'altère pas tant qu'elle reste au sec, fermée. Fermés, les deux se conservent au moins {unopened_months} mois à température ambiante.</p>
<p>Une cuisine qui monte presque tous les jours vide un litre ouvert à temps et prend le <a href="{liquid_egg_white_href}">liquide</a>. Celle qui monte de temps en temps, ou qui n'a pas de place au froid, prend la <a href="{egg_white_powder_href}">poudre</a> et reconstitue ce que le lot demande. La <a href="{professional_href}">section professionnels</a> reprend la même question par activité.</p>`,
      },
    ],
    faq: [
      { q: "Combien de grammes d'aquafaba remplacent un blanc d'œuf ?", a: "{white_liquid} g de liquide, ou {white_powder} g de poudre reconstitués avec {white_water} ml d'eau, ce qui donne {white_total} g d'aquafaba." },
      { q: "Combien de blancs d'œufs y a-t-il dans un conditionnement de 1 L ?", a: "{liquid_1l_whites}. Un bag-in-box de 10 L en remplace {bib_10l_whites} et un IBC de 1 T {ibc_1t_whites} ; en poudre, un sachet de 200 g en remplace {powder_200g_whites}." },
      { q: "Monte-t-il comme un blanc d'œuf ?", a: "Il monte en une mousse qui porte le sucre et l'air, et c'est sur cela que reposent les recettes de meringue, de macarons, de mousse et de sour de ce site. Il demande la même cuve froide et le même fouet sans gras." },
      { q: 'Puis-je l\'utiliser dans une recette aux œufs entiers ?', a: "Oui, avec le chiffre de l'œuf entier : {egg_liquid} g par œuf, plus la correction de liquide de {reduce_liquids} pour cent. Le [guide pâtisserie]({baking_href}) l'explique." },
      { q: 'Faut-il un stabilisant ?', a: "Il est facultatif. Là où une recette en prévoit un, la crème de tartre ou l'acide citrique entre au batteur en marche, une fois que la mousse tient en bec d'oiseau souple." },
    ],
    links: [
      { href: '{meringue_href}', label: 'Meringue : liquide ou poudre ?' },
      { href: '{macarons_href}', label: 'Macarons : liquide ou poudre ?' },
      { href: '{ratio_href}', label: "Quelle quantité d'aquafaba équivaut à un œuf" },
      { href: '{liquid_egg_white_href}', label: "Alternative végétale au blanc d'œuf liquide" },
      { href: '{egg_white_powder_href}', label: "Alternative végétale au blanc d'œuf en poudre" },
    ],
  },

  'liquid-egg-white': {
    title: "Alternative végétale au blanc d'œuf liquide : formats et conservation - VERY AQUAFABA",
    h1: "Une alternative végétale au blanc d'œuf liquide, prête à peser",
    crumb: "Blanc d'œuf liquide",
    enquiryLabel: "Alternative au blanc d'œuf liquide",
    description: "VERY AQUAFABA liquide remplace le blanc d'œuf liquide : {white_liquid} g par blanc d'œuf, conditionnements de 1 L, 10 L et 1 T, au moins {unopened_months} mois fermé à température ambiante et {opened_days} jours une fois ouvert.",
    lead: "Le blanc d'œuf liquide s'achète pour éviter le cassage et pour doser au poids. VERY AQUAFABA liquide fait le même travail à partir du pois chiche : {white_liquid} g remplacent un blanc d'œuf, il arrive à une concentration fixe de {viscosity} g/ml et se verse directement sur la balance. Il existe en 1 L, 10 L et 1 T, se conserve au moins {unopened_months} mois fermé à température ambiante, et {opened_days} jours à {opened_temp} °C maximum une fois ouvert.",
    figures: true,
    sections: [
      {
        id: 'formats',
        title: 'Les formats liquides',
        html: `<p>Trois conditionnements liquides, décrits par les blancs d'œufs qu'ils remplacent et par la cuisine qui les vide.</p>
${grid(['Conditionnement', "Blancs d'œufs", 'Qui le vide'], [
  ['Tetrapak de 1 L', '{liquid_1l_whites}', 'Un laboratoire de pâtisserie, un bar avec des sours à la carte, un site unique'],
  ['Bag-in-box de 10 L', '{bib_10l_whites}', 'Une cuisine centrale qui tire au kilo à chaque poste'],
  ['IBC de 1 T', '{ibc_1t_whites}', 'Une ligne qui dose en continu'],
])}
<p>Contrairement à une brique de blanc d'œuf liquide, le conditionnement reste en réserve sèche jusqu'à son ouverture : fermé, il se conserve au moins {unopened_months} mois à température ambiante, la chaîne du froid commence donc le jour où vous l'ouvrez.</p>`,
      },
      {
        id: 'storage',
        title: 'Avant ouverture, après ouverture, congelé',
        html: `<p>La conservation est ce qui décide dans la plupart des cuisines, la voici en entier.</p>
<ul>
<li>Avant ouverture : au moins {unopened_months} mois à température ambiante, pour les deux formats de la gamme.</li>
<li>Après ouverture : au réfrigérateur à {opened_temp} °C maximum, utilisé dans les {opened_days} jours.</li>
<li>Congelé : portions de {portion} g à {freeze_temp} °C jusqu'à {freeze_months} mois, décongelées une nuit au réfrigérateur et remuées jusqu'à homogénéité. Jamais recongelé.</li>
</ul>
<p>Le <a href="{storage_href}">guide de conservation et de congélation</a> du site détaille la manipulation. Si un conditionnement ouvert dépassait ses {opened_days} jours dans votre cuisine, la <a href="{egg_white_powder_href}">poudre</a> répond à la même recette sans date attachée.</p>`,
      },
      {
        id: 'use',
        title: "L'utiliser là où le blanc d'œuf liquide servait",
        html: `<p>Il se verse et se pèse, sans rien à reconstituer. À la sortie du réfrigérateur, il est déjà à la température que la mousse demande, {meringue_chill} °C, et c'est pour cela qu'une cuisine qui monte presque tous les jours garde le liquide : il passe de la chambre froide à la cuve.</p>
<ul>
<li>Mousses : {meringue_dose} g pour un lot de meringue d'environ {meringue_yield}, {macarons_dose} g pour environ {macarons_yield} coques de macarons.</li>
<li>Émulsions : {mayonnaise_dose} g prennent {mayonnaise_oil} g d'huile, mixés à {mayonnaise_chill} °C.</li>
<li>Au bar : {cocktails_dose} g par sour, pesés ou jaugés plutôt que versés à l'œil.</li>
<li>Sur une ligne : tenu à {viscosity} g/ml pour que la mousse se comporte de la même façon à chaque série.</li>
</ul>
<p>Les <a href="{index_href}">guides d'application</a> portent la méthode de chacun, avec un calculateur qui met le lot à l'échelle.</p>`,
      },
      {
        id: 'who',
        title: 'Quel format pour quelle cuisine',
        html: `<p>Le Tetrapak de 1 L convient à un site unique qui ouvre un conditionnement et le finit dans la semaine : un laboratoire de pâtisserie, un bar, un comptoir traiteur. Le bag-in-box de 10 L convient à une cuisine centrale dont le tirage est continu, et l'IBC de 1 T à une ligne de production, où l'horloge du conditionnement ouvert ne compte jamais puisqu'il continue de tourner.</p>
<p>Chacun a sa page : <a href="{pastry_href}">pâtisserie et boulangerie</a>, <a href="{bars_href}">bars et cocktails</a>, <a href="{foodservice_href}">restauration collective et cuisines centrales</a> et <a href="{industry_href}">industrie agroalimentaire</a>. Pour les volumes et la fiche technique, utilisez le formulaire de demande de cette page.</p>`,
      },
    ],
    faq: [
      { q: "Quelle quantité de liquide remplace un blanc d'œuf ?", a: "{white_liquid} g, pesés. Un Tetrapak de 1 L tient donc lieu de {liquid_1l_whites} blancs d'œufs, un bag-in-box de 10 L de {bib_10l_whites} et un IBC de 1 T de {ibc_1t_whites}." },
      { q: 'Faut-il le réfrigérer avant ouverture ?', a: 'Non. Fermé, il se conserve au moins {unopened_months} mois à température ambiante. Une fois ouvert, il passe à {opened_temp} °C maximum et s\'utilise dans les {opened_days} jours.' },
      { q: 'Peut-on le congeler ?', a: "Oui, en portions de {portion} g à {freeze_temp} °C jusqu'à {freeze_months} mois. Décongelez une nuit au réfrigérateur et remuez jusqu'à homogénéité avant de monter ; il n'est jamais recongelé." },
      { q: "Où acheter de l'aquafaba liquide ?", a: "Les formats et les canaux actuels sont sur la [page Produits]({products_href}). Pour des volumes professionnels, décrivez-les par le formulaire de demande et la fiche technique revient avec la réponse." },
      { q: 'La concentration est-elle fixe ?', a: "Oui, {viscosity} g/ml. Il est filtré, affiné et standardisé, et c'est ce qui garde une mousse ou une émulsion identique d'une série à l'autre." },
    ],
    links: [
      { href: '{egg_white_href}', label: "Alternative végétale au blanc d'œuf" },
      { href: '{egg_white_powder_href}', label: "Alternative végétale au blanc d'œuf en poudre" },
      { href: '{storage_href}', label: "Comment conserver et congeler l'aquafaba" },
      { href: '{pastry_href}', label: 'Pâtisserie et boulangerie' },
      { href: '{bars_href}', label: 'Bars et cocktails' },
    ],
  },

  'egg-white-powder': {
    title: "Alternative végétale au blanc d'œuf en poudre, pour la cuisine - VERY AQUAFABA",
    h1: "Une alternative végétale au blanc d'œuf en poudre, reconstituée avec de l'eau",
    crumb: "Blanc d'œuf en poudre",
    enquiryLabel: "Alternative au blanc d'œuf en poudre",
    description: "VERY AQUAFABA en poudre remplace le blanc d'œuf en poudre en cuisine : {white_powder} g plus {white_water} ml d'eau par blanc d'œuf, sachets de 30 g, 200 g et 3 kg, et aucune date une fois le sachet ouvert.",
    lead: "Le blanc d'œuf en poudre se garde pour ce qu'il fait à une réserve : il attend. VERY AQUAFABA en poudre fait la même chose à partir du pois chiche, pour la cuisine et la pâtisserie plutôt que comme complément protéiné : {white_powder} g reconstitués avec {white_water} ml d'eau remplacent un blanc d'œuf, un sachet de 200 g tient lieu de {powder_200g_whites}, et un sachet ouvert ne s'altère pas tant qu'il reste au sec, fermé.",
    figures: true,
    sections: [
      {
        id: 'packs',
        title: 'Les sachets et ce qu\'ils remplacent',
        html: `<p>Trois sachets, décrits par les blancs d'œufs auxquels ils tiennent lieu.</p>
${grid(['Sachet', "Blancs d'œufs", 'Reconstitué, cela fait'], [
  ['30 g', '{powder_30g_whites}', "Un lot d'essai, ou un bar qui teste un sour"],
  ['200 g', '{powder_200g_whites}', '{meringue_batches_200g} lots de meringue ou {cocktails_batches_200g} sours'],
  ['3 kg', '{powder_3kg_whites}', 'Une cuisine professionnelle, ou un prémix sec sur une ligne'],
])}
<p>Fermé, un sachet se conserve au moins {unopened_months} mois à température ambiante. Ouvert, il ne s'altère pas : il reste au sec, fermé, sur une étagère, et attend le lot suivant, ce qui explique que les cuisines et les bars à rotation inégale le gardent plutôt qu'un conditionnement liquide avec ses {opened_days} jours.</p>`,
      },
      {
        id: 'makeup',
        title: "La reconstitution : la règle par blanc d'œuf",
        html: `<p>La proportion se compte par blanc d'œuf, pas par sachet : {white_powder} g de poudre et {white_water} ml d'eau donnent {white_total} g d'aquafaba, qui s'utilisent exactement comme la même masse de liquide.</p>
<ul>
<li>Un lot de meringue, {meringue_eggs} blancs d'œufs : {meringue_powder} g de poudre et {meringue_water} ml d'eau.</li>
<li>Un lot de mayonnaise : {mayonnaise_powder} g et {mayonnaise_water} ml.</li>
<li>Un sour : {cocktails_powder} g et {cocktails_water} ml.</li>
</ul>
<p>La <a href="{reconstitution_href}">page de reconstitution</a> porte le tableau de 1 à 20 blancs d'œufs. Reconstitué, il est refroidi à la température que la recette demande, {meringue_chill} °C pour une meringue, parce qu'un aquafaba tiède monte plus lentement et donne une mousse plus faible.</p>`,
      },
      {
        id: 'when',
        title: 'Quand la poudre est le bon choix',
        html: `<p>C'est le même ingrédient que le liquide : les raisons de la préférer tiennent au conditionnement et à la place, pas à la recette.</p>
<ul>
<li>Rotation inégale : le sachet ouvert attend sans date, alors qu'un conditionnement liquide ouvert a {opened_days} jours.</li>
<li>Pas de place au froid : le sachet vit en réserve sèche, et les étagères réfrigérées restent libres pour ce que vous venez de faire.</li>
<li>Déplacements : événements et traiteur l'emportent au sec, sans chaîne du froid.</li>
<li>Prémix secs : un fabricant qui mélange une base sèche de sauce ou de pâtisserie y met la poudre telle quelle.</li>
</ul>
<p>Pour les recettes foisonnées, ce n'est pas un raccourci de mélange à sec : l'aquafaba se monte seul d'abord, il est donc reconstitué avec de l'eau avant de rencontrer la poudre d'amande ou le sucre.</p>`,
      },
      {
        id: 'kitchen',
        title: 'Un ingrédient culinaire, pas un complément protéiné',
        html: `<p>Cette poudre est faite pour les mousses, les émulsions et la pâtisserie : la meringue qui tient son sucre, la mayonnaise qui prend son huile, la génoise qui lie. C'est de l'aquafaba de pois chiche séché, dosé par le blanc d'œuf que la recette remplace, pas à la mesurette.</p>
<p>La <a href="{products_href}">page Produits</a> liste les sachets et ce que l'emballage indique ; les <a href="{index_href}">guides d'application</a> donnent la dose par recette dans les deux formats, et la <a href="{professional_href}">section professionnels</a> classe les formats par activité pour une cuisine, un bar ou une ligne.</p>`,
      },
    ],
    faq: [
      { q: "Qu'est-ce que l'aquafaba en poudre ?", a: "VERY AQUAFABA sous forme séchée. {white_powder} g de poudre plus {white_water} ml d'eau donnent {white_total} g d'aquafaba, soit la même masse que le liquide, et remplacent un blanc d'œuf." },
      { q: "Combien de blancs d'œufs y a-t-il dans un sachet de 200 g ?", a: '{powder_200g_whites}. Le sachet de 30 g en remplace {powder_30g_whites} et le sac de 3 kg {powder_3kg_whites}.' },
      { q: 'Combien de temps se garde un sachet ouvert ?', a: "Il ne s'altère pas tant qu'il reste au sec, fermé, et il convient donc à une cuisine ou un bar à rotation inégale. Fermé, il se conserve au moins {unopened_months} mois à température ambiante." },
      { q: 'La poudre peut-elle aller directement dans un mélange sec ?', a: "Dans un prémix sec, oui. Dans une recette foisonnée, non : l'aquafaba se monte seul d'abord, reconstituez-la donc avec de l'eau et refroidissez-la avant qu'elle rencontre les autres ingrédients secs." },
      { q: 'Est-ce un complément protéiné ?', a: "Non. C'est un ingrédient culinaire pour les mousses, les émulsions et la pâtisserie, dosé par le blanc d'œuf que la recette remplace, comme l'expliquent les [guides d'application]({index_href})." },
    ],
    links: [
      { href: '{reconstitution_href}', label: "Reconstitution de la poudre : la règle par blanc d'œuf" },
      { href: '{egg_white_href}', label: "Alternative végétale au blanc d'œuf" },
      { href: '{liquid_egg_white_href}', label: "Alternative végétale au blanc d'œuf liquide" },
      { href: '{meringue_href}', label: 'Meringue : liquide ou poudre ?' },
      { href: '{bars_href}', label: 'Bars et cocktails' },
    ],
  },
};
