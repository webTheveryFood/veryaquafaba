// Professionnels par public, français (set-2 B0 à B4). Même structure, tokens et balises
// que professional.en.js (vérifié par scripts/applications/check-guides.mjs). Aucun tiret long.
const grid = (heads, rows) => `<table class="va-guide-grid">
<thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
<tbody>
${rows.map((r) => `<tr>${r.map((c, i) => `<td data-label="${heads[i]}">${c}</td>`).join('')}</tr>`).join('\n')}
</tbody>
</table>`;
const PICK = ['Votre activité', 'Notre conseil', 'Pourquoi'];

export default {
  index: {
    title: "L'aquafaba pour les professionnels : pâtisserie, bars, restauration collective et industrie - VERY AQUAFABA",
    h1: "L'aquafaba pour les professionnels : quel format pour quelle cuisine",
    crumb: 'Professionnels',
    enquiryLabel: 'Professionnels',
    description: "VERY AQUAFABA en cuisine professionnelle, derrière le bar, en cuisine centrale et sur les lignes industrielles : par où commence chaque activité, la gamme complète avec les équivalences en blancs d'œufs, et le formulaire de demande pour les volumes.",
    lead: "VERY AQUAFABA remplace le blanc d'œuf en pâtisserie, derrière le bar, en cuisine centrale et sur les lignes industrielles. Une règle vaut partout : {white_liquid} g de liquide ou {white_powder} g de poudre remplacent un blanc d'œuf. Ce qui change d'une activité à l'autre, c'est le format, le conditionnement et le rythme d'utilisation. Cette page envoie chaque activité vers sa propre page, présente la gamme complète et ouvre le formulaire de demande pour les volumes professionnels.",
    figures: true,
    sections: [
      {
        id: 'start',
        title: 'Par où commence chaque activité',
        html: `<p>Quatre activités, quatre façons de travailler, un seul produit. Chaque page ci-dessous est écrite pour la façon dont cette cuisine tourne : ce qu'elle prépare avec l'aquafaba, à quelle vitesse un conditionnement ouvert est consommé, et quel format convient.</p>
${grid(['Activité', 'Commencez ici', 'Ce que la page couvre'], [
  ['Laboratoire de pâtisserie, boulangerie, pâtisserie', '<a href="{pastry_href}">Pâtisserie et boulangerie</a>', "Meringue, macarons, mousse et pâtisserie sans œuf ; le format selon le rythme du four ; les lots comptés en blancs d'œufs"],
  ["Bar à cocktails, bar d'hôtel, événements", '<a href="{bars_href}">Bars et cocktails</a>', 'Le sour, la dose par verre, la poudre pour quelques sours par semaine et le liquide pour chaque service'],
  ['Cuisine centrale, cantine, restaurant multi-sites', '<a href="{foodservice_href}">Restauration collective et cuisines centrales</a>', 'Mayonnaise, sauces et desserts à grande échelle ; chaîne du froid et place ; le bag-in-box de 10 L'],
  ['Industriel, ligne de production', '<a href="{industry_href}">Industrie agroalimentaire</a>', "L'IBC de 1 T et le bag-in-box pour les lignes continues ; la reformulation au poids ; comment demander les spécifications"],
])}
<p>Si votre activité se situe entre deux d'entre elles, lisez les deux : un hôtel fait tourner un laboratoire de pâtisserie et un bar sur le même produit, et une cuisine centrale avec une ligne de pâtisserie se lit comme une boulangerie les jours où elle poche de la meringue.</p>`,
      },
      {
        id: 'range',
        title: "La gamme, avec les équivalences en blancs d'œufs",
        html: `<p>Chaque conditionnement est décrit par le nombre de blancs d'œufs qu'il remplace, parce que c'est ainsi qu'une recette se compte. Le liquide est prêt à l'emploi ; la poudre se reconstitue avec de l'eau, {white_powder} g + {white_water} ml par blanc d'œuf, ce qui donne {white_total} g d'aquafaba.</p>
<ul>
<li>Liquide : Tetrapak de 1 L = {liquid_1l_whites} blancs d'œufs. Bag-in-box de 10 L = {bib_10l_whites}. IBC de 1 T = {ibc_1t_whites}.</li>
<li>Poudre : sachet de 30 g = {powder_30g_whites} blancs d'œufs. Sachet de 200 g = {powder_200g_whites}. Sac de 3 kg = {powder_3kg_whites}.</li>
</ul>
<p>Fermés, les deux formats se conservent au moins {unopened_months} mois à température ambiante. Le liquide ouvert vit au réfrigérateur à {opened_temp} °C maximum et s'utilise dans les {opened_days} jours. La poudre ouverte ne s'altère pas, elle doit seulement rester au sec, sachet fermé. Les conditionnements et la conservation figurent dans les chiffres clés ci-dessous ; la fiche technique se demande par le formulaire de cette page.</p>`,
      },
      {
        id: 'decide',
        title: 'Liquide ou poudre ? Les questions qui décident',
        html: `<p>Le choix ne porte pas sur la taille du lot. Il porte sur la vitesse à laquelle un conditionnement ouvert est consommé, sur la place disponible au froid, sur la réserve sèche et sur la façon dont la cuisine préfère doser. Les mêmes questions reviennent sur chaque page par public, avec la réponse pour cette cuisine.</p>
${grid(['Question', 'Penche vers le liquide', 'Penche vers la poudre'], [
  ['Un conditionnement ouvert est-il consommé en {opened_days} jours ?', 'Oui : le conditionnement tourne à temps', 'Non : le sachet attend le lot suivant sans date'],
  ['Y a-t-il de la place au froid pour un conditionnement ouvert ?', 'Oui : il vit au réfrigérateur, déjà à température de travail', "Non : le sachet vit sur l'étagère sèche"],
  ['Le travail est-il continu ?', "Oui : bag-in-box de 10 L ou IBC de 1 T, usage continu et pas d'étape de reconstitution", 'Non : reconstituez ce que le lot demande'],
  ['Le produit voyage-t-il ou part-il en événement ?', 'Seulement avec une chaîne du froid', 'Oui : il voyage au sec'],
  ['La recette entre-t-elle dans un prémix sec ?', 'Non', 'Oui : elle entre dans le prémix à sec'],
])}
<p>Week-ends chargés et semaine calme ? Les deux : le liquide pour le coup de feu, la poudre pour le reste. La conversion est fixe, une recette tourne avec l'un comme avec l'autre.</p>`,
      },
      {
        id: 'tools',
        title: 'Les guides et les outils derrière eux',
        html: `<p>Six guides d'application répondent liquide ou poudre pour la meringue, la mousse au chocolat, la mayonnaise, la pâtisserie, les cocktails et les macarons, chacun avec sa méthode, son tableau de dépannage et ses chiffres clés. Sous chaque guide se trouvent deux outils : un calculateur de quantités qui met la recette à l'échelle par lots ou par pièces, en liquide et en poudre avec son eau, et une fiche de procédé imprimable avec la valeur de référence de chaque étape et les contrôles à faire quand un lot ne sort pas bien.</p>
<p>La <a href="{reconstitution_href}">page de reconstitution de la poudre</a> porte la règle par blanc d'œuf et un tableau de 1 à 20 blancs d'œufs, pour toute recette comptée en blancs. L'<a href="{index_href}">index des applications</a> liste chaque guide et chaque outil.</p>`,
      },
    ],
    faq: [
      { q: 'La dose est-elle la même pour le liquide et la poudre ?', a: "Oui, comptée en blancs d'œufs. {white_liquid} g de liquide remplacent un blanc d'œuf, tout comme {white_powder} g de poudre reconstitués avec {white_water} ml d'eau, ce qui donne {white_total} g d'aquafaba. Un lot se dose par son nombre de blancs d'œufs dans les deux formats." },
      { q: 'Quels formats existent pour les gros volumes ?', a: "Le bag-in-box de 10 L remplace {bib_10l_whites} blancs d'œufs et l'IBC de 1 T {ibc_1t_whites} ; les deux sont liquides, pour un usage continu sans étape de reconstitution. En poudre, le sac de 3 kg remplace {powder_3kg_whites} blancs d'œufs. Décrivez vos volumes par le [formulaire de demande]({contact_href}) pour recevoir la fiche technique." },
      { q: 'Combien de temps se conserve un conditionnement ouvert ?', a: "Le liquide ouvert se garde à {opened_temp} °C maximum et s'utilise dans les {opened_days} jours. La poudre ouverte ne s'altère pas tant qu'elle reste au sec, sachet fermé. Fermés, les deux se conservent au moins {unopened_months} mois à température ambiante." },
      { q: 'Une cuisine peut-elle utiliser le liquide et la poudre côte à côte ?', a: "Oui. Le liquide les jours où le conditionnement tourne, la poudre pour les commandes irrégulières. La conversion est fixe, la recette ne change pas d'un format à l'autre." },
      { q: 'Comment obtenir la fiche technique ?', a: "Par le formulaire de cette page : il demande l'entreprise, le pays, l'application et le volume mensuel estimé, et la fiche technique est envoyée avec la réponse." },
    ],
    links: [
      { href: '{pastry_href}', label: 'Pâtisserie et boulangerie' },
      { href: '{bars_href}', label: 'Bars et cocktails' },
      { href: '{foodservice_href}', label: 'Restauration collective et cuisines centrales' },
      { href: '{industry_href}', label: 'Industrie agroalimentaire' },
      { href: '{reconstitution_href}', label: "Reconstitution de la poudre : la règle par blanc d'œuf" },
    ],
  },

  pastry: {
    title: "L'aquafaba en pâtisserie et boulangerie : liquide ou poudre selon la rotation - VERY AQUAFABA",
    h1: "L'aquafaba en pâtisserie et boulangerie : liquide ou poudre selon le rythme du four",
    crumb: 'Pâtisserie et boulangerie',
    enquiryLabel: 'Pâtisserie et boulangerie',
    description: "VERY AQUAFABA au laboratoire de pâtisserie et en boulangerie : meringue, macarons, mousse au chocolat et pâtisserie sans œuf, le format selon le rythme du four, les lots comptés en blancs d'œufs, et les contrôles avant de lancer le batteur.",
    lead: "Au laboratoire de pâtisserie, l'aquafaba entre dans la meringue, les coques de macarons, la mousse au chocolat et les génoises sans œuf. Le format qui vous convient se décide selon la fréquence à laquelle vous remplissez le four et la vitesse à laquelle un conditionnement ouvert est consommé : le liquide ouvert se garde {opened_days} jours à {opened_temp} °C maximum, la poudre ouverte ne s'altère pas. Cette page compte chaque lot en blancs d'œufs, confronte le format à votre rythme et liste les trois contrôles qui décident de la plupart des défauts avant de lancer le batteur.",
    sections: [
      {
        id: 'makes',
        title: 'Ce que prépare un laboratoire de pâtisserie',
        html: `<p>Chaque application a son propre guide, son calculateur et sa fiche de procédé. Les chiffres par lot ci-dessous viennent des recettes VERY AQUAFABA ; les colonnes par conditionnement disent combien de lots un conditionnement donne.</p>
${grid(['Application', 'Par lot', 'Avec un Tetrapak de 1 L', 'Avec un sachet de 200 g'], [
  ['<a href="{meringue_href}">Meringue</a>', "{meringue_dose} g, {meringue_eggs} blancs d'œufs, environ {meringue_yield} meringues", '{meringue_batches_1l} lots', '{meringue_batches_200g} lots'],
  ['<a href="{macarons_href}">Macarons</a>', "{macarons_dose} g, {macarons_eggs} blancs d'œufs, environ {macarons_yield} macarons", '{macarons_batches_1l} lots', '{macarons_batches_200g} lots'],
  ['<a href="{chocolate_mousse_href}">Mousse au chocolat</a>', "{chocolate_mousse_dose} g, {chocolate_mousse_eggs} blancs d'œufs, environ {chocolate_mousse_yield} portions", '{chocolate_mousse_batches_1l} lots', '{chocolate_mousse_batches_200g} lots'],
  ['<a href="{baking_href}">Pâtisserie</a>', "{egg_liquid} g par œuf entier, {white_liquid} g par blanc d'œuf", "{eggs_1l} œufs entiers ou {whites_1l} blancs d'œufs", "{whites_200g} blancs d'œufs"],
])}
<p>Pour un jaune, la règle du site est {yolk_liquid} g d'aquafaba plus {yolk_oil} g d'huile. Le <a href="{baking_calc_href}">calculateur pâtisserie</a> convertit les œufs, les blancs et les jaunes de n'importe quelle recette en liquide, ou en poudre avec son eau.</p>`,
      },
      {
        id: 'decide',
        title: 'Liquide ou poudre ? Commencez par le rythme du four',
        html: `<p>Fermés, les deux formats se conservent au moins {unopened_months} mois à température ambiante. Le choix commence le jour où vous ouvrez le conditionnement. Un Tetrapak de 1 L donne {meringue_batches_1l} lots de meringue ou {macarons_batches_1l} de macarons ; si vous n'en cuisez pas autant dans les {opened_days} jours qui suivent l'ouverture, la poudre est le meilleur choix, parce qu'un sachet ouvert attend la plaque suivante sans date.</p>
${grid(PICK, [
  ['Laboratoire qui poche meringue ou macarons presque tous les jours', 'Liquide, Tetrapak de 1 L', 'Le conditionnement est vide bien avant {opened_days} jours'],
  ['Boulangerie avec une ligne sans œuf chaque jour', 'Liquide, Tetrapak de 1 L', 'Versé depuis le réfrigérateur, déjà à température de foisonnement'],
  ['Boutique qui cuit à la commande, ou dessert de saison à la meringue', 'Poudre, sachet de 200 g', 'Elle couvre les longs creux entre deux séries'],
  ['Froid occupé par les crèmes, les ganaches et les macarons en maturation', 'Poudre', "Le sachet vit sur une étagère sèche, hors de la chambre froide"],
  ['Ligne quotidienne plus commandes irrégulières', 'Les deux', 'Le liquide pour la ligne, la poudre pour les commandes ; la conversion est fixe'],
  ['Ligne de pâtisserie végétale qui poche en continu', 'Liquide, bag-in-box de 10 L ou IBC de 1 T', "Usage continu et pas d'étape de reconstitution"],
])}
<p>Vous préférez le liquide mais vous cuisez de façon irrégulière ? Congelez-le en portions de {portion} g à {freeze_temp} °C jusqu'à {freeze_months} mois, décongelez une nuit au réfrigérateur et remuez jusqu'à homogénéité avant de foisonner. Il n'est jamais recongelé.</p>`,
      },
      {
        id: 'whites',
        title: "Des lots comptés en blancs d'œufs",
        html: `<p>La poudre se dose par lot selon le nombre de blancs d'œufs que la recette remplace : {white_powder} g de poudre et {white_water} ml d'eau par blanc d'œuf. L'aquafaba reconstitué est ensuite refroidi à {meringue_chill} °C avant le foisonnement, comme le liquide, parce qu'un aquafaba tiède monte lentement et donne une mousse plus faible.</p>
<ul>
<li>Meringue, {meringue_eggs} blancs d'œufs : {meringue_powder} g de poudre + {meringue_water} ml d'eau.</li>
<li>Macarons, {macarons_eggs} blancs d'œufs : {macarons_powder} g de poudre + {macarons_water} ml d'eau.</li>
<li>Mousse au chocolat, {chocolate_mousse_eggs} blancs d'œufs : {chocolate_mousse_powder} g de poudre + {chocolate_mousse_water} ml d'eau.</li>
</ul>
<p>La poudre n'est pas un raccourci de mélange à sec : l'aquafaba se foisonne seul d'abord, reconstituez-le donc avec de l'eau avant qu'il approche la poudre d'amande ou le sucre. La <a href="{reconstitution_href}">page de reconstitution</a> porte le tableau de 1 à 20 blancs d'œufs ; chaque <a href="{meringue_calc_href}">calculateur de quantités</a> met toute la recette à l'échelle par lots ou par pièces.</p>`,
      },
      {
        id: 'checks',
        title: 'Avant de lancer le batteur : trois contrôles',
        html: `<p>La plupart des défauts de meringue et de macarons se décident avant le foisonnement. Trois contrôles les couvrent, et ce sont les premières lignes de chaque fiche de procédé.</p>
<ul>
<li>Température. Le liquide sort du réfrigérateur à {meringue_chill} °C et va directement dans la cuve ; la poudre reconstituée est refroidie à la même température.</li>
<li>Gras. La mousse d'aquafaba est une mousse de protéines pure, sans matière grasse dans la recette, donc un film de gras sur la cuve ou le fouet bride le volume. Essuyez les deux avant d'y verser l'aquafaba.</li>
<li>Sucre. Il n'entre qu'une fois que la mousse tient en bec d'oiseau souple, une cuillère à soupe à la fois à vitesse moyenne ; ajouté plus vite qu'il ne peut se dissoudre, il perle au stockage.</li>
</ul>
<p>Pour les génoises et les gâteaux, la <a href="{ratio_href}">page du ratio aquafaba œuf</a> ajoute la règle de l'eau : un œuf contient environ {water_egg_pct} pour cent d'eau et l'aquafaba {water_aquafaba_pct} pour cent, donc les autres liquides baissent de {reduce_liquids} pour cent quand on remplace des œufs entiers. Les <a href="{meringue_process_href}">fiches de procédé</a> impriment la valeur de référence de chaque étape avec une colonne vide pour votre propre lot.</p>`,
      },
    ],
    faq: [
      { q: 'Un même conditionnement peut-il servir la meringue et les macarons le même jour ?', a: "Oui. Les deux recettes comptent leur lot en blancs d'œufs et utilisent le même aquafaba, refroidi à {meringue_chill} °C. Un Tetrapak de 1 L donne {meringue_batches_1l} lots de meringue ou {macarons_batches_1l} de macarons, ou n'importe quel mélange des deux." },
      { q: 'Combien de lots de meringue donne un bag-in-box de 10 L ?', a: "{meringue_batches_10l} lots de {meringue_dose} g, ou {macarons_batches_10l} lots de macarons. Le bag-in-box remplace {bib_10l_whites} blancs d'œufs et convient à une ligne qui poche chaque jour ouvré." },
      { q: "La poudre va-t-elle directement dans la poudre d'amande ?", a: "Non. L'aquafaba se foisonne seul d'abord, donc la poudre est reconstituée avec de l'eau, refroidie et foisonnée avant que la poudre d'amande et le sucre glace soient incorporés." },
      { q: 'Comment remplacer des œufs entiers dans une génoise ?', a: "{egg_liquid} g d'aquafaba par œuf entier et {white_liquid} g par blanc d'œuf, pesés, jamais mesurés en volume. Les autres liquides baissent de {reduce_liquids} pour cent pour équilibrer l'eau, et le [guide pâtisserie]({baking_href}) explique le reste." },
      { q: 'Peut-on congeler le liquide quand le travail de meringue est irrégulier ?', a: "Oui. Portionnez à {portion} g, congelez à {freeze_temp} °C jusqu'à {freeze_months} mois, décongelez une nuit au réfrigérateur et remuez jusqu'à homogénéité avant de foisonner. L'aquafaba décongelé n'est jamais recongelé. La poudre supprime tout ce circuit." },
    ],
    links: [
      { href: '{meringue_href}', label: 'Meringue : liquide ou poudre ?' },
      { href: '{macarons_href}', label: 'Macarons : liquide ou poudre ?' },
      { href: '{chocolate_mousse_href}', label: 'Mousse au chocolat : liquide ou poudre ?' },
      { href: '{baking_href}', label: 'Pâtisserie : liquide ou poudre ?' },
      { href: '{reconstitution_href}', label: "Reconstitution de la poudre : la règle par blanc d'œuf" },
    ],
  },

  bars: {
    title: "L'aquafaba pour les bars et les cocktails : poudre ou liquide selon la rotation - VERY AQUAFABA",
    h1: "L'aquafaba pour les bars et les cocktails : la poudre pour quelques sours par semaine, le liquide pour chaque service",
    crumb: 'Bars et cocktails',
    enquiryLabel: 'Bars et cocktails',
    description: 'VERY AQUAFABA derrière le bar : {cocktails_dose} g par sour et deux shakes, le format selon le nombre de sours que vous servez, la poudre reconstituée par verre, et ce qu\'il faut vérifier quand la mousse retombe.',
    lead: "L'aquafaba donne au sour une mousse stable et soyeuse, sans blanc d'œuf cru derrière le bar : {cocktails_dose} g par verre et deux shakes. Un Tetrapak de 1 L sert {cocktails_batches_1l} sours et un sachet de 200 g de poudre {cocktails_batches_200g}. Celui qui convient à votre bar se décide selon le nombre de sours servis entre une ouverture et la suivante, parce que le liquide ouvert se garde {opened_days} jours au réfrigérateur et que la poudre ouverte ne s'altère pas.",
    sections: [
      {
        id: 'sour',
        title: 'Le sour, la dose et le shake',
        html: `<p>Rien ne change dans la recette sauf un ingrédient : l'aquafaba remplace le blanc d'œuf. Le whiskey sour VERY AQUAFABA se monte sans glace avec {cocktails_whiskey} ml de whisky, {cocktails_lemon_juice} ml de jus de citron frais, {cocktails_syrup} ml de sirop de sucre et {cocktails_dose} g d'aquafaba froid.</p>
<ol>
<li>Dry shake énergique pendant {cocktails_dry_shake} secondes. C'est là que la mousse se forme.</li>
<li>Ajoutez la glace et shakez encore {cocktails_wet_shake} secondes pour refroidir et diluer.</li>
<li>Passez au tamis fin dans une coupe glacée. La mousse est assez ferme pour porter quelques gouttes de bitters.</li>
</ol>
<p>Service chargé ? Pré-mélangez le whisky, le citron et le sirop. L'aquafaba s'ajoute au shake, jamais dans le batch, et se pèse ou se jauge à {cocktails_dose} g à chaque fois : le versement à l'œil est ce qui rend la mousse inégale d'un verre à l'autre. Le <a href="{cocktails_href}">guide cocktails</a> porte la méthode complète et son tableau de dépannage.</p>`,
      },
      {
        id: 'decide',
        title: 'Liquide ou poudre ? Commencez par le nombre de sours que vous servez',
        html: `<p>Fermés, les deux formats restent en rayon à température ambiante au moins {unopened_months} mois. Le choix commence le jour où vous ouvrez le conditionnement : le liquide ouvert vit au réfrigérateur à {opened_temp} °C maximum et s'utilise dans les {opened_days} jours, la poudre ouverte doit seulement rester au sec, sachet fermé. Les bartenders sans rotation régulière de sours préfèrent la poudre exactement pour cette raison.</p>
${grid(['Votre bar', 'Notre conseil', 'Pourquoi'], [
  ['Bar à cocktails avec des sours à la carte, commandés à chaque service', 'Liquide, Tetrapak de 1 L', '{cocktails_batches_1l} verres par conditionnement, terminé bien avant {opened_days} jours'],
  ['Bar de quartier qui sert quelques sours par semaine', 'Poudre, sachet de 200 g', "Pas de compte à rebours après ouverture ; reconstituez ce que la soirée demande"],
  ['Bar sans place au réfrigérateur', 'Poudre', "Le sachet vit sur une étagère sèche derrière le bar"],
  ['Événements, traiteur, bars éphémères', 'Poudre', 'Elle voyage au sec, sans chaîne du froid'],
  ['Week-ends chargés, semaine calme', 'Les deux', 'Le liquide pour le coup de feu, la poudre pour le reste'],
  ["Groupe hôtelier, bases de sour embouteillées, ligne de boissons", 'Liquide, bag-in-box de 10 L ou IBC de 1 T', "Usage continu et pas d'étape de reconstitution"],
])}
<p>Vous préférez le liquide mais vous ne finissez pas un conditionnement à temps ? Congelez-le en portions de {portion} g, décongelez au réfrigérateur et remuez avant usage.</p>`,
      },
      {
        id: 'powder',
        title: 'La poudre derrière le bar : reconstituez ce que la soirée demande',
        html: `<p>Pour un verre, {cocktails_powder} g de poudre et {cocktails_water} ml d'eau. Comptés par blanc d'œuf, {white_powder} g de poudre et {white_water} ml d'eau donnent {white_total} g d'aquafaba, un peu plus qu'un sour. Reconstituez-le avant le service et gardez-le au froid : un aquafaba froid mousse plus vite et tient plus longtemps, un aquafaba à température ambiante donne une mousse lente et molle.</p>
<p>La <a href="{reconstitution_href}">page de reconstitution</a> porte le tableau de 1 à 20 blancs d'œufs pour un service entier ; le <a href="{cocktails_calc_href}">calculateur cocktails</a> donne le liquide, la poudre et son eau pour n'importe quel nombre de verres.</p>`,
      },
      {
        id: 'service',
        title: 'Pendant le service : ce qu\'il faut vérifier quand la mousse retombe',
        html: `<p>Cinq défauts couvrent la plupart des sours plats, et chacun a sa cause au shake, pas dans le produit.</p>
${grid(['Ce que vous constatez', 'La cause', 'La solution'], [
  ['Mousse mince', 'La glace est entrée dès le départ', "Dry shake d'abord, glace ensuite"],
  ['Mousse lente et molle', 'Aquafaba à température ambiante', "Le garder au froid jusqu'au shake"],
  ['Plus de hauteur à la moitié du service', "L'aquafaba a été ajouté au pré-mélange", "Ne batcher que la base, ajouter l'aquafaba par verre"],
  ["La mousse retombe avant d'arriver au client", 'Le verre a attendu au passe', 'Shaker à la commande et servir aussitôt'],
  ["Inégal d'un verre à l'autre", "Versement à l'œil", 'Peser ou jauger {cocktails_dose} g à chaque fois'],
])}
<p>La <a href="{cocktails_process_href}">fiche de procédé</a> imprime ces contrôles avec la valeur de référence de chaque étape, pour le cahier du bar.</p>`,
      },
    ],
    faq: [
      { q: 'Combien de sours sert un conditionnement de 1 L ?', a: '{cocktails_batches_1l} sours à {cocktails_dose} g chacun. Un sachet de 200 g de poudre en donne {cocktails_batches_200g}, reconstitués verre par verre ou pour le service.' },
      { q: 'Faut-il changer la recette du sour ?', a: "Non. Un seul ingrédient change : {cocktails_dose} g d'aquafaba remplacent le blanc d'œuf. Le whisky, le citron, le sirop, le dry shake et le shake sur glace restent tels quels." },
      { q: "L'aquafaba peut-il aller dans le pré-mélange ?", a: "Non. Batchez le whisky, le citron et le sirop, puis ajoutez l'aquafaba au shake, par verre. L'aquafaba dans le pré-mélange ne donne plus de hauteur à la moitié du service." },
      { q: 'Et si nous ne servons que quelques sours par semaine ?', a: "Prenez la poudre. Un sachet ouvert ne s'altère pas tant qu'il reste au sec, fermé, donc vous reconstituez ce que la soirée demande et le reste attend. Le liquide ouvert a {opened_days} jours au réfrigérateur." },
      { q: 'La mousse porte-t-elle les bitters ?', a: 'Oui. Après le dry shake et le shake sur glace, passée au tamis fin dans une coupe glacée, la mousse est assez ferme pour porter quelques gouttes de bitters.' },
    ],
    links: [
      { href: '{cocktails_href}', label: 'Cocktails : liquide ou poudre ?' },
      { href: '{cocktails_calc_href}', label: 'Calculateur de quantités pour cocktails' },
      { href: '{cocktails_process_href}', label: 'Fiche de procédé et contrôles du sour' },
      { href: '{reconstitution_href}', label: "Reconstitution de la poudre : la règle par blanc d'œuf" },
    ],
  },

  foodservice: {
    title: "L'aquafaba en restauration collective et cuisines centrales : chaîne du froid, place, bag-in-box - VERY AQUAFABA",
    h1: "L'aquafaba en restauration collective et cuisines centrales : chaîne du froid, place et le bag-in-box de 10 L",
    crumb: 'Restauration collective et cuisines centrales',
    enquiryLabel: 'Restauration collective et cuisines centrales',
    description: "VERY AQUAFABA en cuisine centrale, en cantine et en restauration multi-sites : mayonnaise, sauces et desserts à grande échelle, le format selon la chaîne du froid et la place, et le bag-in-box de 10 L qui remplace {bib_10l_whites} blancs d'œufs.",
    lead: "Une cuisine centrale utilise l'aquafaba dans la mayonnaise et les sauces froides, dans la mousse au chocolat et la meringue de la ligne desserts, et dans la pâtisserie sans œuf pour les sites. Le bag-in-box de 10 L remplace {bib_10l_whites} blancs d'œufs et se tire au kilo à chaque poste ; le Tetrapak de 1 L sert un site unique ; le sachet de 200 g de poudre sert le site dont la rotation est trop faible pour un conditionnement liquide ouvert. Cette page confronte le format à la chaîne du froid et à la place, et compte les lots par conditionnement.",
    sections: [
      {
        id: 'uses',
        title: "Où va l'aquafaba dans une cuisine centrale",
        html: `<p>Les chiffres par lot sont ceux des recettes VERY AQUAFABA ; la dernière colonne compte les lots que donne un bag-in-box de 10 L.</p>
${grid(['Application', 'Par lot', 'Lots par bag-in-box de 10 L'], [
  ['<a href="{mayonnaise_href}">Mayonnaise</a>', "{mayonnaise_dose} g d'aquafaba pour environ {mayonnaise_yield} g de mayonnaise", '{mayonnaise_batches_10l}'],
  ['<a href="{chocolate_mousse_href}">Mousse au chocolat</a>', '{chocolate_mousse_dose} g pour environ {chocolate_mousse_yield} portions', '{chocolate_mousse_batches_10l}'],
  ['<a href="{meringue_href}">Meringue</a>', '{meringue_dose} g pour environ {meringue_yield} meringues', '{meringue_batches_10l}'],
  ['<a href="{baking_href}">Pâtisserie</a>', "{egg_liquid} g par œuf entier, {white_liquid} g par blanc d'œuf", '{eggs_10l} œufs entiers'],
])}
<p>Un lot de mayonnaise utilise très peu d'aquafaba, {mayonnaise_dose} g, donc même un Tetrapak de 1 L donne {mayonnaise_batches_1l} lots ; la question pour le poste sauces est de savoir si ce conditionnement est consommé dans les {opened_days} jours après ouverture, pas s'il est assez grand.</p>`,
      },
      {
        id: 'decide',
        title: 'Chaîne du froid et place : les questions qui décident',
        html: `<p>La mayonnaise finie et la mousse ont besoin du réfrigérateur de toute façon, donc le choix porte sur le conditionnement ouvert, pas sur la sauce. Le liquide ouvert se garde à {opened_temp} °C maximum et s'utilise dans les {opened_days} jours ; la poudre ouverte ne s'altère pas et ne prend jamais de place au froid.</p>
${grid(['Votre activité', 'Notre conseil', 'Pourquoi'], [
  ["Cuisine centrale qui tire l'aquafaba au kilo à chaque poste", 'Liquide, bag-in-box de 10 L ou IBC de 1 T', "Usage continu, directement dans le mixeur à fort cisaillement, pas d'étape de reconstitution"],
  ['Traiteur ou comptoir à sandwichs qui fait sa mayonnaise fraîche à chaque service', 'Liquide, Tetrapak de 1 L', 'Versé à température de mixage, et le conditionnement tourne à temps'],
  ['Restaurant avec mayonnaise ou mousse sur un seul plat de la carte', 'Poudre, sachet de 200 g', 'Un litre ouvert dépasserait ses {opened_days} jours'],
  ['Chambre froide déjà pleine de sauces finies et de portions', 'Poudre', 'Le sachet ne prend jamais de place au froid'],
  ['Vous voulez moins de produits datés au poste sauces', 'Poudre', 'Pas de conditionnement ouvert et périssable à étiqueter, consigner et contrôler'],
  ['Cuisine centrale où chaque site foisonne lui-même', 'Poudre sur site', 'Le sachet survit à une semaine calme sur le site'],
])}
<p>Production centrale plus sites à rotation inégale ? Le liquide en cuisine centrale, la poudre sur les sites : la conversion est fixe, donc la même recette tourne avec l'un comme avec l'autre.</p>`,
      },
      {
        id: 'bib',
        title: 'Le bag-in-box de 10 L au quotidien',
        html: `<p>Le bag-in-box est le format liquide entre le Tetrapak de 1 L et l'IBC de 1 T : {bib_10l_whites} blancs d'œufs, tirés au fil du poste, sans rien à reconstituer. Il convient à la cuisine dont l'usage d'aquafaba est continu, parce que le conditionnement ouvert continue de tourner. Ouvert, il se conserve comme tout conditionnement liquide, à {opened_temp} °C maximum.</p>
<p>Fermé, il se conserve au moins {unopened_months} mois à température ambiante, donc le stock peut attendre en réserve sèche jusqu'à l'ouverture. Décrivez les sites, les applications et le volume mensuel estimé par le formulaire de demande pour recevoir la fiche technique ; les plus grandes cuisines sont sur la <a href="{industry_href}">page industrie agroalimentaire</a>, où l'IBC de 1 T est décrit.</p>`,
      },
      {
        id: 'mayo',
        title: 'Mayonnaise et sauces froides à grande échelle',
        html: `<p>La mayonnaise VERY AQUAFABA émulsionne {mayonnaise_oil} g d'huile sur {mayonnaise_dose} g d'aquafaba, un ratio d'huile de {mayonnaise_oil_ratio}, avec {mayonnaise_mustard} g de moutarde, {mayonnaise_salt} g de sel et {mayonnaise_lemon} g de jus de citron ou de vinaigre. L'aquafaba s'utilise à {mayonnaise_chill} °C : trop tiède, l'émulsion est lente et instable. Sur les gros lots, c'est la taille des gouttelettes qui la garde stable, et c'est pourquoi une cuisine centrale passe à un mixeur à fort cisaillement.</p>
<p>Huile ajoutée trop vite, ou avec trop peu de cisaillement, et l'émulsion ne démarre jamais : un filet fin et régulier, mixeur à pleine vitesse. Trop épaisse pour être travaillée, incorporez quelques grammes d'eau froide, pas d'huile en plus. La sauce finie se garde {mayonnaise_keep} jours au réfrigérateur, dans un récipient propre et réfrigérée immédiatement. Le <a href="{mayonnaise_calc_href}">calculateur mayonnaise</a> met le lot à l'échelle et la <a href="{mayonnaise_process_href}">fiche de procédé</a> imprime les étapes et les contrôles.</p>`,
      },
    ],
    faq: [
      { q: "Combien de blancs d'œufs remplace un bag-in-box de 10 L ?", a: "{bib_10l_whites} blancs d'œufs, à {white_liquid} g de liquide par blanc d'œuf. En mayonnaise, cela fait {mayonnaise_batches_10l} lots, en mousse au chocolat {chocolate_mousse_batches_10l}, en meringue {meringue_batches_10l}." },
      { q: 'Les sites à faible rotation peuvent-ils utiliser le même produit ?', a: "Oui, en poudre. Un sachet de 200 g remplace {powder_200g_whites} blancs d'œufs, ne s'altère pas une fois ouvert tant qu'il reste au sec, fermé, et se reconstitue à {white_powder} g plus {white_water} ml d'eau par blanc d'œuf quand le site en a besoin." },
      { q: 'Combien de temps se conserve un bag-in-box ouvert ?', a: "Comme tout conditionnement liquide ouvert : à {opened_temp} °C maximum, utilisé dans les {opened_days} jours. Il convient aux cuisines dont le tirage est continu, pour que le conditionnement continue de tourner." },
      { q: 'Y a-t-il une étape de reconstitution pour le liquide ?', a: "Non. Le liquide arrive à concentration fixe, prêt à être pesé dans le mixeur. Seule la poudre se reconstitue avec de l'eau." },
      { q: 'Où envoyer nos volumes ?', a: "Par le [formulaire de demande]({contact_href}) de cette page : entreprise, pays, application et volume mensuel estimé. La fiche technique revient avec la réponse." },
    ],
    links: [
      { href: '{mayonnaise_href}', label: 'Mayonnaise : liquide ou poudre ?' },
      { href: '{chocolate_mousse_href}', label: 'Mousse au chocolat : liquide ou poudre ?' },
      { href: '{meringue_href}', label: 'Meringue : liquide ou poudre ?' },
      { href: '{mayonnaise_calc_href}', label: 'Calculateur de quantités pour la mayonnaise' },
      { href: '{industry_href}', label: "Industrie agroalimentaire : l'IBC de 1 T" },
    ],
  },

  industry: {
    title: "L'aquafaba pour l'industrie agroalimentaire : IBC de 1 T et bag-in-box pour les lignes continues - VERY AQUAFABA",
    h1: "L'aquafaba pour l'industrie agroalimentaire : l'IBC de 1 T et le bag-in-box pour les lignes continues",
    crumb: 'Industrie agroalimentaire',
    enquiryLabel: 'Industrie agroalimentaire',
    description: "VERY AQUAFABA sur les lignes industrielles : l'IBC de 1 T qui remplace {ibc_1t_whites} blancs d'œufs, le bag-in-box de 10 L, le sac de 3 kg de poudre pour les prémix secs, la reformulation au poids et comment demander les spécifications.",
    lead: "Les lignes industrielles tournent au liquide : l'IBC de 1 T remplace {ibc_1t_whites} blancs d'œufs et le bag-in-box de 10 L {bib_10l_whites}, tous deux tirés en continu sans étape de reconstitution. VERY AQUAFABA est filtré, affiné et standardisé pour que chaque lot se comporte de la même façon, à une concentration de {viscosity} g/ml. Cette page présente les formats pour les lignes continues, la règle de reformulation au poids, et comment demander les spécifications, la commande minimale et le délai de livraison.",
    sections: [
      {
        id: 'formats',
        title: 'Les formats pour les lignes continues',
        html: `<p>La ligne se dose au poids, donc chaque format est décrit par les blancs d'œufs qu'il remplace à {white_liquid} g par blanc d'œuf.</p>
${grid(['Format', "Blancs d'œufs", 'Où il tourne'], [
  ['IBC de 1 T, liquide', '{ibc_1t_whites}', 'Dosage continu sur une ligne : coques de meringue séchées chaque jour ouvré, coupes de mousse pour la grande distribution, lignes de sauces, bases de sour embouteillées'],
  ['Bag-in-box de 10 L, liquide', '{bib_10l_whites}', "Essais pilotes, lignes plus petites et cuisines centrales d'un groupe"],
  ['Sac de 3 kg, poudre', '{powder_3kg_whites}', 'Prémix secs : un fabricant qui mélange des bases sèches de sauces ou de pâtisserie la met dans le prémix à sec'],
])}
<p>Fermés, les deux formats se conservent au moins {unopened_months} mois à température ambiante. Une fois ouvert, le liquide se garde à {opened_temp} °C maximum et s'utilise dans les {opened_days} jours, ce qui sur une ligne continue est le rythme normal d'un conditionnement ouvert ; la poudre ne s'altère pas tant qu'elle reste au sec, fermée.</p>`,
      },
      {
        id: 'reformulate',
        title: "Reformuler à l'échelle de la ligne, au poids",
        html: `<p>La règle du ratio aquafaba œuf du site est le point de départ de toute reformulation : {egg_liquid} g d'aquafaba par œuf entier, {white_liquid} g par blanc d'œuf, et {yolk_liquid} g d'aquafaba plus {yolk_oil} g d'huile par jaune. Comptez les œufs ou les blancs de la formule, multipliez par le poids équivalent, et tenez l'aquafaba à {viscosity} g/ml pour que la mousse ou l'émulsion se comporte de la même façon à chaque série.</p>
<p>Un œuf contient environ {water_egg_pct} pour cent d'eau et l'aquafaba {water_aquafaba_pct} pour cent, donc les autres liquides baissent de {reduce_liquids} pour cent quand on remplace des œufs entiers, et les pâtes denses sont cuites à cœur. Les lots d'essai confirment le temps, la couleur et la texture ; les ajustements sont consignés comme procédure standard de la ligne. La <a href="{ratio_href}">page du ratio aquafaba œuf</a> expose la règle avec des exemples chiffrés et le <a href="{baking_calc_href}">calculateur pâtisserie</a> convertit une formule entière.</p>`,
      },
      {
        id: 'lines',
        title: 'Les lignes par application',
        html: `<ul>
<li>Coques de meringue séchées chaque jour ouvré : {meringue_dose} g par lot d'environ {meringue_yield}, {meringue_batches_10l} lots par bag-in-box, sucre à poids égal, séchées à {meringue_bake} °C. La mousse est le test le plus simple de la gamme, donc chaque défaut s'y voit : le gras et le sucre ajouté trop vite. Voir le <a href="{meringue_href}">guide meringue</a>.</li>
<li>Lignes de sauces : {mayonnaise_dose} g d'aquafaba émulsionnent {mayonnaise_oil} g d'huile, tirés au kilo directement dans le mixeur à fort cisaillement, où la taille des gouttelettes garde les gros lots stables. Voir le <a href="{mayonnaise_href}">guide mayonnaise</a>.</li>
<li>Coupes de mousse préportionnées pour la grande distribution : {chocolate_mousse_dose} g par lot d'environ {chocolate_mousse_yield} portions, incorporés au chocolat à {chocolate_mousse_fold_temp} °C. Voir le <a href="{chocolate_mousse_href}">guide mousse au chocolat</a>.</li>
<li>Bases de sour embouteillées et lignes de boissons : la base se batche sans l'aquafaba, qui s'ajoute au shake à {cocktails_dose} g par verre. Voir le <a href="{cocktails_href}">guide cocktails</a>.</li>
</ul>`,
      },
      {
        id: 'specs',
        title: 'Spécifications, commande minimale et délai de livraison',
        html: `<p>Les spécifications, la commande minimale et le délai de livraison pour une ligne industrielle ne sont pas publiés sur cette page : ils dépendent du pays, du format et du volume, et ils sont donnés par projet avec la fiche technique. Le formulaire de demande de cette page demande l'entreprise, le pays, l'application et le volume mensuel estimé ; décrivez la ligne et les formats que vous envisagez, et la fiche technique revient avec la réponse.</p>
<p>La <a href="{foodservice_href}">page restauration collective</a> couvre les cuisines centrales d'un groupe, où le bag-in-box de 10 L tourne au quotidien, et l'<a href="{professional_href}">index professionnels</a> présente la gamme complète.</p>`,
      },
    ],
    faq: [
      { q: "Combien de blancs d'œufs remplace un IBC de 1 T ?", a: "{ibc_1t_whites} blancs d'œufs, à {white_liquid} g de liquide par blanc d'œuf. Le bag-in-box de 10 L en remplace {bib_10l_whites}. Les deux sont liquides, tirés en continu sans étape de reconstitution." },
      { q: 'La poudre est-elle une option pour une ligne industrielle ?', a: "Pour les prémix secs, oui : le sac de 3 kg remplace {powder_3kg_whites} blancs d'œufs et entre tel quel dans une base sèche de sauce ou de pâtisserie. Pour les lignes foisonnées et émulsionnées, le liquide est le format, parce qu'il arrive à concentration fixe sans rien à reconstituer." },
      { q: 'Quelle concentration la ligne doit-elle tenir ?', a: "{viscosity} g/ml. VERY AQUAFABA est filtré, affiné et standardisé à cette concentration, pour que la mousse ou l'émulsion se comporte de la même façon à chaque série." },
      { q: 'Comment convertir une formule comptée en œufs ?', a: "{egg_liquid} g d'aquafaba par œuf entier, {white_liquid} g par blanc d'œuf, {yolk_liquid} g plus {yolk_oil} g d'huile par jaune, tout au poids. Les autres liquides baissent de {reduce_liquids} pour cent, et les lots d'essai confirment le temps, la couleur et la texture." },
      { q: 'Où sont la commande minimale et le délai de livraison ?', a: "Ils sont donnés par projet avec la fiche technique, pas sur cette page. Décrivez la ligne, les formats et le volume mensuel estimé par le [formulaire de demande]({contact_href}) et la réponse les contient." },
    ],
    links: [
      { href: '{foodservice_href}', label: 'Restauration collective et cuisines centrales' },
      { href: '{meringue_href}', label: 'Meringue : liquide ou poudre ?' },
      { href: '{mayonnaise_href}', label: 'Mayonnaise : liquide ou poudre ?' },
      { href: '{ratio_href}', label: "Quelle quantité d'aquafaba équivaut à un œuf" },
      { href: '{baking_calc_href}', label: "Calculateur de substitution des œufs" },
    ],
  },
};
