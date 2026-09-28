// Professionnels par public, français (set-2 B0 à B4). Même structure, tokens et balises
// que professional.en.js (vérifié par scripts/applications/check-guides.mjs). Aucun tiret long.
const grid = (heads, rows, cls = '') => `<table class="va-guide-grid${cls ? ` ${cls}` : ''}">
<thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
<tbody>
${rows.map((r) => `<tr>${r.map((c, i) => `<td data-label="${heads[i]}">${c}</td>`).join('')}</tr>`).join('\n')}
</tbody>
</table>`;
const PICK = ['Votre activité', 'Notre conseil', 'Pourquoi'];

export default {
  index: {
    title: "L'aquafaba pour les professionnels - VERY AQUAFABA",
    h1: "L'aquafaba pour les professionnels : quel format pour votre cuisine ?",
    crumb: 'Professionnels',
    enquiryLabel: 'Professionnels',
    description: "Un ingrédient sans œuf pour la pâtisserie, les bars, les cuisines centrales et les lignes de production : {white_liquid} g par blanc. Quel format pour votre cuisine.",
    lead: "Quelle que soit votre activité, un laboratoire de pâtisserie, un bar, une cuisine centrale ou une ligne de production, un seul ingrédient couvre vos mousses, vos émulsions et vos pâtisseries sans œuf. La dose ne change jamais : {white_liquid} g de liquide ou {white_powder} g de poudre remplacent un blanc d'œuf. Ce qui change, c'est le pack et le rythme auquel vous l'utilisez, et c'est ce que vous réglez ci-dessous.",
    // Hub pour les acheteurs : le tableau par activité d'abord, puis le format et le pack, puis la commande.
    figures: false,
    sections: [
      {
        id: 'activity',
        title: 'Quel type de cuisine dirigez-vous ?',
        html: `<p>L'aquafaba ne fait pas le même travail dans un laboratoire de pâtisserie, derrière un bar, dans une cuisine centrale et sur une ligne de production. Trouvez le vôtre ci-dessous ; chaque ligne ouvre une page écrite pour cette façon de travailler.</p>
${grid(['Votre activité', "Ce que l'aquafaba fait pour vous", "Comment vous l'utiliserez"], [
  ['<a href="{pastry_href}">Pâtisserie, boulangerie</a>', 'Meringues, macarons, mousse et pâtisseries sans œuf', 'Par préparation, au rythme de vos journées de four'],
  ['<a href="{bars_href}">Bars et cocktails</a>', 'Une mousse sans œuf sur les sours et les fizz', 'Une dose par cocktail, shaké à la commande'],
  ['<a href="{foodservice_href}">Restauration collective et cuisines centrales</a>', 'Mayonnaise, sauces et desserts en volume', 'Au kilo, depuis le bag-in-box de 10 L'],
  ['<a href="{industry_href}">Industrie agroalimentaire</a>', 'Lignes en continu et reformulation au poids', "Depuis l'IBC de 1 T, dosé en continu"],
], 'va-guide-grid--wrap')}
<p>Beaucoup d'entreprises se situent entre deux lignes. Un hôtel fait tourner un laboratoire de pâtisserie et un bar sur le même produit, et une cuisine centrale avec une ligne de pâtisserie travaille comme une boulangerie les jours où elle poche de la meringue. Si c'est votre cas, lisez les deux.</p>`,
      },
      {
        id: 'decide',
        title: 'Liquide ou poudre ?',
        html: `<p>Fermés, les deux formats se conservent au moins {unopened_months} mois à température ambiante, le choix ne commence donc qu'une fois un pack ouvert. Le liquide ouvert va au réfrigérateur et s'utilise dans les {opened_days} jours ; la poudre ouverte ne s'altère pas, elle doit simplement rester au sec, fermée. Cinq questions tranchent pour la plupart des cuisines.</p>
${grid(['Demandez-vous', 'Liquide, si', 'Poudre, si'], [
  ['Un Tetrapak ouvert sera-t-il fini en {opened_days} jours ?', 'Oui, le Tetrapak tourne à temps', 'Non, le sachet attend la préparation suivante sans date'],
  ['Y a-t-il de la place au froid pour un Tetrapak ouvert ?', 'Oui, il vit au réfrigérateur, déjà à la température de travail', 'Non, le sachet vit sur une étagère sèche'],
  ['Le travail est-il continu ?', "Oui, le bag-in-box de 10 L ou l'IBC de 1 T, sans étape de reconstitution", 'Non, vous reconstituez ce que chaque préparation demande'],
  ['Le produit voyage-t-il, ou part-il en événement ?', 'Seulement avec une chaîne du froid', 'Oui, il voyage au sec'],
  ['Entre-t-il dans un prémix sec ?', 'Non', 'Oui, il entre tel quel dans le prémix'],
], 'va-guide-grid--wrap')}
<p>Week-ends chargés et semaine calme ? Beaucoup de cuisines gardent les deux : le liquide pour le coup de feu, la poudre pour le reste. La conversion est fixe, une recette tourne donc sur l'un ou l'autre format sans changer.</p>`,
      },
      {
        id: 'packs',
        title: 'Quel pack, pour quel volume de travail',
        html: `<p>Chaque pack se représente le plus simplement par le nombre de blancs d'œufs qu'il remplace, parce que c'est ainsi qu'une recette les compte.</p>
${grid(['Pack', "Blancs d'œufs", 'Qui le vide'], [
  ['Tetrapak de 1 L, liquide', '{liquid_1l_whites}', 'Un laboratoire de pâtisserie, un bar avec des sours à la carte, un établissement seul'],
  ['Bag-in-box de 10 L, liquide', '{bib_10l_whites}', 'Une cuisine centrale qui tire au kilo à chaque poste'],
  ['IBC de 1 T, liquide', '{ibc_1t_whites}', 'Une ligne de production qui dose en continu'],
  ['Sachet de 30 g, poudre', '{powder_30g_whites}', 'Un premier essai, ou un bar qui teste un sour'],
  ['Sachet de 200 g, poudre', '{powder_200g_whites}', 'Une cuisine ou un bar à rotation irrégulière'],
  ['Sac de 3 kg, poudre', '{powder_3kg_whites}', 'Une cuisine professionnelle, ou un prémix sec sur une ligne'],
], 'va-guide-grid--wrap')}
<p>La poudre se reconstitue à {white_powder} g plus {white_water} ml d'eau par blanc d'œuf, ce qui donne {white_total} g d'aquafaba. La <a href="{reconstitution_href}">page de reconstitution</a> porte le tableau de 1 à 20 blancs d'œufs.</p>`,
      },
      {
        id: 'order',
        title: 'Commander pour une cuisine professionnelle',
        html: `<p>Le Tetrapak de 1 L et le sachet de 200 g se vendent en ligne dans la plupart de nos marchés, et les boutons ci-dessous vous y mènent. Le bag-in-box, l'IBC et le sac de 3 kg sont chiffrés par projet : dites-nous ce que vous fabriquez et à peu près combien chaque mois par le <a href="{contact_href}">formulaire de contact</a>, et la fiche technique revient avec la réponse.</p>
<p>Les six <a href="{index_href}">guides d'application</a> donnent la méthode, le dépannage et la dose par recette pour les deux formats, avec un calculateur de quantités sous chacun, pour que votre équipe travaille sur les mêmes chiffres avant même la première livraison.</p>`,
      },
    ],
    faq: [
      { q: 'La dose est-elle la même pour le liquide et la poudre ?', a: "Oui, comptée en blancs d'œufs. {white_liquid} g de liquide remplacent un blanc d'œuf, tout comme {white_powder} g de poudre reconstitués avec {white_water} ml d'eau. Une préparation se dose par son nombre de blancs d'œufs, dans l'un ou l'autre format." },
      { q: 'Quels formats existent pour les gros volumes ?', a: "Le bag-in-box de 10 L remplace {bib_10l_whites} blancs d'œufs et l'IBC de 1 T {ibc_1t_whites} ; les deux sont liquides, pour un usage en continu sans étape de reconstitution. En poudre, le sac de 3 kg remplace {powder_3kg_whites} blancs d'œufs." },
      { q: 'Combien de temps tient un Tetrapak ou un sachet ouvert ?', a: "Le liquide ouvert se garde à {opened_temp} °C maximum et s'utilise dans les {opened_days} jours. La poudre ouverte ne s'altère pas tant qu'elle reste au sec, fermée. Fermés, les deux se conservent au moins {unopened_months} mois à température ambiante." },
      { q: 'Une cuisine peut-elle utiliser le liquide et la poudre côte à côte ?', a: "Oui, et beaucoup le font : le liquide pour les jours où le Tetrapak tourne, la poudre pour les commandes irrégulières. La conversion est fixe, la recette ne change donc pas d'un format à l'autre." },
      { q: "Comment commander de l'aquafaba en volume pour une boulangerie, un bar ou une ligne de production ?", a: "Le Tetrapak de 1 L et le sachet de 200 g s'achètent en ligne. Pour le bag-in-box, l'IBC ou le sac de 3 kg, décrivez votre activité et votre volume mensuel par notre [formulaire de contact]({contact_href}) et nous chiffrons par projet." },
      { q: 'Comment obtenir la fiche technique ?', a: "Demandez-la par notre [formulaire de contact]({contact_href}), avec votre entreprise, votre pays, l'application et le volume mensuel estimé. Elle est renvoyée avec la réponse." },
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
    title: 'Aquafaba en pâtisserie et boulangerie - VERY AQUAFABA',
    h1: "Comment utiliser l'aquafaba dans votre laboratoire de pâtisserie ou votre boulangerie",
    crumb: 'Pâtisserie et boulangerie',
    enquiryLabel: 'Pâtisserie et boulangerie',
    description: "Meringue, macarons, mousse et biscuits sans œuf avec un seul ingrédient : {white_liquid} g par blanc, {egg_liquid} g par œuf entier. Ce que donne un Tetrapak ou un sachet.",
    lead: "Dans un laboratoire de pâtisserie, un seul ingrédient couvre la meringue, les coques de macarons, la mousse au chocolat et les biscuits sans œuf : {white_liquid} g d'aquafaba par blanc d'œuf, {egg_liquid} g par œuf entier. Les guides vous donnent chaque recette. Ci-dessous, le laboratoire dans son ensemble : combien de préparations donne un Tetrapak ou un sachet, quel format suit votre planning de four, comment organiser la semaine, et comment faire passer une de vos propres recettes à l'aquafaba.",
    // Page par public : ce que les guides ne peuvent pas faire, le laboratoire dans son ensemble. Pas de tableaux de référence.
    figures: false,
    sections: [
      {
        id: 'batches',
        title: 'Ce que vous pouvez faire, et combien donne un pack',
        html: `<p>Chaque préparation se compte en blancs d'œufs, un pack se représente donc le plus simplement par les préparations qu'il donne. Les chiffres viennent des recettes VERY AQUAFABA ; chaque application a son propre guide et son calculateur de quantités.</p>
${grid(['Application', 'Une préparation', "Avec un Tetrapak de 1 L", 'Avec un sachet de 200 g'], [
  ['<a href="{meringue_href}">Meringue</a>', "{meringue_dose} g, soit {meringue_eggs} blancs d'œufs, pour environ {meringue_yield} meringues", '{meringue_batches_1l} préparations', '{meringue_batches_200g} préparations'],
  ['<a href="{macarons_href}">Macarons</a>', "{macarons_dose} g, soit {macarons_eggs} blancs d'œufs, pour environ {macarons_yield} macarons", '{macarons_batches_1l} préparations', '{macarons_batches_200g} préparations'],
  ['<a href="{chocolate_mousse_href}">Mousse au chocolat</a>', "{chocolate_mousse_dose} g, soit {chocolate_mousse_eggs} blancs d'œufs, pour environ {chocolate_mousse_yield} portions", '{chocolate_mousse_batches_1l} préparations', '{chocolate_mousse_batches_200g} préparations'],
  ['<a href="{baking_href}">Biscuits, gâteaux, pâtes</a>', "{egg_liquid} g par œuf entier, {white_liquid} g par blanc d'œuf", "{eggs_1l} œufs entiers ou {whites_1l} blancs d'œufs", "{whites_200g} blancs d'œufs"],
], 'va-guide-grid--wrap')}
<p>En poudre, une préparation se reconstitue à {white_powder} g plus {white_water} ml d'eau par blanc d'œuf : {meringue_powder} g et {meringue_water} ml pour une préparation de meringue, {macarons_powder} g et {macarons_water} ml pour des macarons ou une mousse. La <a href="{reconstitution_href}">page de reconstitution</a> porte le tableau de 1 à 20 blancs d'œufs.</p>`,
      },
      {
        id: 'decide',
        title: 'Finirez-vous un Tetrapak ouvert à temps ?',
        html: `<p>Fermés, les deux formats se conservent au moins {unopened_months} mois à température ambiante, le choix ne commence donc qu'une fois un pack ouvert. À partir de là, le liquide vit au réfrigérateur et s'utilise dans les {opened_days} jours, tandis que la poudre attend simplement, au sec et fermée. Un Tetrapak de 1 L, c'est {meringue_batches_1l} préparations de meringue ou {macarons_batches_1l} de macarons. Si votre planning de four en vient à bout en {opened_days} jours, le liquide est le choix simple. Sinon, c'est la poudre.</p>
${grid(PICK, [
  ['Laboratoire de pâtisserie qui poche meringue ou macarons presque tous les jours', 'Liquide, Tetrapak de 1 L', 'Le Tetrapak est vide bien avant les {opened_days} jours'],
  ['Boutique qui cuit à la commande, ou dessert meringué saisonnier', 'Poudre, sachet de 200 g', 'Elle couvre les longues pauses entre deux séries'],
  ['Chambre froide pleine de crèmes, de ganaches et de macarons en maturation', 'Poudre', 'Le sachet vit sur une étagère sèche, hors de la chambre froide'],
  ['Ligne sans œuf quotidienne plus commandes irrégulières', 'Les deux', "Le liquide pour la ligne, la poudre pour les commandes ; la recette est la même sur l'un ou l'autre"],
  ['Ligne de pâtisserie végétale qui poche en continu', "Liquide, bag-in-box de 10 L ou IBC de 1 T", 'Usage en continu, rien à reconstituer'],
])}
<p>Si vous préférez le liquide mais cuisez de façon irrégulière, vous pouvez le congeler en portions de {portion} g à {freeze_temp} °C pendant {freeze_months} mois au plus. Décongelez une nuit au réfrigérateur et mélangez jusqu'à homogénéité avant de monter. Il ne se recongèle jamais.</p>`,
      },
      {
        id: 'week',
        title: 'Quels desserts se gardent, et combien de temps ?',
        html: `<p>L'aquafaba convient mieux à un laboratoire qui travaille à l'avance que le blanc d'œuf cru, parce qu'aucun des produits finis ne dépend du réfrigérateur de la même façon. Voici ce que chacun demande une fois fait :</p>
<ul>
<li><strong>Les meringues</strong> refroidissent complètement sur la plaque et se gardent en boîte hermétique à température ambiante, au sec, avec un sachet déshydratant si vous en avez un. Elles absorbent l'humidité de l'air, leur place est donc la réserve sèche, pas la chambre froide.</li>
<li><strong>Les macarons</strong> sont garnis, puis réfrigérés {macarons_mature} heures avant le service, pour que les coques et la garniture se marient. Cuisez les coques un jour, garnissez et laissez maturer le lendemain.</li>
<li><strong>La mousse au chocolat</strong> prend au réfrigérateur en {chocolate_mousse_set_time} heures et se garde {chocolate_mousse_keep} jours en emballage fermé ; c'est donc un produit préparé à l'avance par série, pas un dessert fait à la commande.</li>
</ul>
<p>Seules deux choses au laboratoire ont besoin du froid : la mousse et les macarons en maturation, plus le Tetrapak ouvert. C'est autour de lui qu'on planifie. Ouvrez-le au début d'une série de journées de four, notez la date d'ouverture dessus, et il est fini avant les {opened_days} jours. Étiquetez ce que vous congelez avec la date et le poids, comme le demande le guide de conservation, pour qu'une portion sortie un matin chargé soit la bonne.</p>`,
      },
      {
        id: 'switch',
        title: "Comment faire passer vos propres recettes à l'aquafaba",
        html: `<p>Commencez par la recette qui compte le plus sur votre comptoir, pas par celle qui semble la plus simple, et ne changez que l'œuf. Ce que vous remplacez décide de ce qui bouge par ailleurs :</p>
<ul>
<li><strong>Les blancs d'œufs seuls</strong>, comme dans la meringue, les macarons et la mousse : un remplacement direct. {white_liquid} g d'aquafaba par blanc, et la poudre d'amande, le sucre et le chocolat restent exactement les mêmes.</li>
<li><strong>Les œufs entiers</strong>, comme dans les biscuits et les gâteaux : {egg_liquid} g par œuf. L'aquafaba apporte plus d'eau qu'un œuf, environ {water_aquafaba_pct} pour cent contre {water_egg_pct} pour cent, réduisez donc les autres liquides de {reduce_liquids} pour cent et cuisez les gâteaux denses à cœur.</li>
<li><strong>Les jaunes</strong> : {yolk_liquid} g d'aquafaba plus {yolk_oil} g d'huile, parce que l'aquafaba n'apporte pas de matière grasse.</li>
</ul>
<p>Pesez tout, l'aquafaba compris, et gardez le reste de la méthode tel quel : même cuve, mêmes vitesses, même four. Si le laboratoire cuit en volume, maintenez l'aquafaba à {viscosity} g/ml pour que la mousse se comporte de la même façon à chaque série. Le <a href="{baking_calc_href}">calculateur de substitution</a> convertit d'un coup les œufs, les blancs et les jaunes de votre recette, et le <a href="{baking_href}">guide pâtisserie</a> explique que faire quand un biscuit sort plat ou humide.</p>`,
      },
    ],
    faq: [
      { q: 'Un même Tetrapak peut-il servir la meringue et les macarons le même jour ?', a: "Oui. Les deux recettes comptent leur préparation en blancs d'œufs et utilisent le même aquafaba, refroidi à {meringue_chill} °C. Un Tetrapak de 1 L donne {meringue_batches_1l} préparations de meringue ou {macarons_batches_1l} de macarons, ou n'importe quel mélange des deux." },
      { q: "Puis-je passer ma recette de macarons à l'aquafaba sans changer le reste ?", a: "Oui. Les macarons ne remplacent que des blancs d'œufs, le remplacement est donc direct : {white_liquid} g d'aquafaba par blanc. La poudre d'amande, le sucre glace et le sucre en poudre restent tels quels. Ce qui change, ce sont les temps, que le [guide des macarons]({macarons_href}) détaille." },
      { q: "Combien de temps à l'avance puis-je faire la mousse au chocolat à l'aquafaba ?", a: "Elle prend en {chocolate_mousse_set_time} heures au réfrigérateur et se garde {chocolate_mousse_keep} jours au froid en emballage fermé ; elle se fait donc par séries, avant le service." },
      { q: "La poudre va-t-elle directement dans la poudre d'amande ?", a: "Non. L'aquafaba se monte seul d'abord ; la poudre est donc reconstituée avec de l'eau, refroidie et montée avant que la poudre d'amande et le sucre glace ne soient incorporés." },
      { q: 'Comment remplacer les œufs entiers dans un biscuit ?', a: "{egg_liquid} g d'aquafaba par œuf entier et {white_liquid} g par blanc d'œuf, pesés. Réduisez les autres liquides de {reduce_liquids} pour cent pour équilibrer l'eau, et cuisez à cœur. Le [guide pâtisserie]({baking_href}) explique le reste." },
      { q: 'Puis-je congeler le liquide quand mon travail de meringue est irrégulier ?', a: "Oui. Portionnez-le à {portion} g, congelez à {freeze_temp} °C pendant {freeze_months} mois au plus, décongelez une nuit au réfrigérateur et mélangez jusqu'à homogénéité avant de monter. L'aquafaba décongelé ne se recongèle jamais. La poudre supprime cette étape." },
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
    title: "L'aquafaba pour les bars et cocktails - VERY AQUAFABA",
    h1: "Comment utiliser l'aquafaba dans un bar à cocktails : le guide complet",
    crumb: 'Bars et cocktails',
    enquiryLabel: 'Bars et cocktails',
    description: "L'aquafaba derrière le bar : {cocktails_dose} g par sour et deux shakes pour une mousse sans œuf. Quel pack pour votre volume et comment préparer le service.",
    lead: "L'aquafaba donne à un sour une mousse stable et soyeuse, sans blanc d'œuf cru derrière le bar. Il faut {cocktails_dose} g par cocktail et deux shakes, et le guide des cocktails vous accompagne dans la recette. Ci-dessous, le fonctionnement : pourquoi les bars changent, quel pack pour le nombre de sours que vous servez, comment préparer le service, et quoi écrire dans le cahier du bar.",
    // Page par public : le fonctionnement du bar, pas la recette (c'est le guide des cocktails). Pas de tableaux de référence.
    figures: false,
    sections: [
      {
        id: 'why',
        title: "Pourquoi les bars passent à l'aquafaba",
        html: `<p>Un sour n'est jamais cuit, ce qui entre dans le shaker est donc servi tel quel. C'est tout l'argument de l'aquafaba derrière le bar :</p>
<ul>
<li><strong>Pas d'œuf cru dans un cocktail non cuit.</strong> Le blanc d'œuf cru porte un risque sanitaire que l'aquafaba n'a pas. La mousse est la même mousse soyeuse, sans l'inquiétude.</li>
<li><strong>Tout client peut le commander.</strong> L'aquafaba est végétal et sans œuf, le sour de la carte est donc le même sour pour les clients vegan.</li>
<li><strong>Une étagère au lieu d'une place au frais.</strong> Fermés, les deux formats se conservent au moins {unopened_months} mois à température ambiante. La poudre n'a même pas besoin du réfrigérateur une fois ouverte.</li>
</ul>
<p>Le cocktail lui-même ne change pas. Le whiskey, le citron, le sirop, le dry shake et le shake avec glace restent exactement les mêmes, et le <a href="{cocktails_href}">guide des cocktails</a> porte la méthode complète et son tableau de dépannage.</p>`,
      },
      {
        id: 'decide',
        title: "Combien de sours avant d'ouvrir le Tetrapak suivant ?",
        html: `<p>Un Tetrapak de 1 L sert {cocktails_batches_1l} sours et un sachet de poudre de 200 g {cocktails_batches_200g}. Le pack à acheter dépend de la vitesse à laquelle vous le videz une fois ouvert : le liquide ouvert vit au réfrigérateur et s'utilise dans les {opened_days} jours, tandis qu'un sachet de poudre ouvert attend simplement, au sec et fermé, la commande suivante. Les bartenders sans rotation régulière de sours choisissent la poudre exactement pour cette raison.</p>
${grid(['Votre bar', 'Notre conseil', 'Pourquoi'], [
  ['Bar à cocktails avec des sours à la carte, commandés à chaque service', 'Liquide, Tetrapak de 1 L', '{cocktails_batches_1l} cocktails par Tetrapak, fini bien avant les {opened_days} jours'],
  ['Bar de quartier qui sert quelques sours par semaine', 'Poudre, sachet de 200 g', "Aucun délai après ouverture : reconstituez ce qu'il faut pour le soir"],
  ['Bar sans place au réfrigérateur', 'Poudre', 'Le sachet vit sur une étagère sèche derrière le bar'],
  ['Événements, prestations extérieures, bars éphémères', 'Poudre', 'Elle voyage au sec, sans chaîne du froid'],
  ['Week-ends chargés, semaine calme', 'Les deux', 'Le liquide pour le coup de feu, la poudre pour le reste'],
  ['Groupe hôtelier, bases de sour en bouteille, ligne de boissons', "Liquide, bag-in-box de 10 L ou IBC de 1 T", 'Usage en continu, rien à reconstituer'],
])}
<p>Si vous préférez le liquide mais ne pouvez pas finir un Tetrapak à temps, congelez-le en portions de {portion} g, décongelez au réfrigérateur et mélangez avant usage. Il ne se recongèle jamais.</p>`,
      },
      {
        id: 'service',
        title: 'Préparer le service',
        html: `<p>Trois habitudes font la différence entre une mousse qui tient et une qui ne tient pas, et les trois se jouent avant la première commande :</p>
<ul>
<li><strong>Préparez la base à l'avance, pas l'aquafaba.</strong> Le whiskey, le citron et le sirop peuvent être mélangés en amont. L'aquafaba entre au shake, cocktail par cocktail, sinon la hauteur a disparu en milieu de service.</li>
<li><strong>Froid, et mesuré.</strong> L'aquafaba mousse plus vite et tient plus longtemps quand il arrive froid dans le shaker. Pesez ou dosez au jigger {cocktails_dose} g à chaque fois : le dosage à l'œil est ce qui rend la mousse irrégulière d'un cocktail à l'autre.</li>
<li><strong>La poudre se reconstitue avant l'ouverture.</strong> Un cocktail, c'est {cocktails_powder} g de poudre et {cocktails_water} ml d'eau ; par blanc d'œuf, {white_powder} g et {white_water} ml donnent {white_total} g d'aquafaba. Reconstituez ce que le service demande, mettez-le au frais, et il se verse comme le liquide. Le <a href="{cocktails_calc_href}">calculateur cocktails</a> donne les chiffres pour n'importe quel nombre de cocktails.</li>
</ul>
<p>Week-ends chargés et semaine calme ? Beaucoup de bars gardent les deux : le Tetrapak au réfrigérateur pour le coup de feu, le sachet sur l'étagère pour le reste. La dose est la même dans les deux.</p>`,
      },
      {
        id: 'book',
        title: 'Quoi écrire dans le cahier du bar',
        html: `<p>L'aquafaba demande quatre lignes dans le cahier du bar, et elles sauvent un sour plat un soir chargé :</p>
<ul>
<li><strong>La date d'ouverture sur le Tetrapak.</strong> Le liquide ouvert se garde à {opened_temp} °C maximum et s'utilise dans les {opened_days} jours. Notez la date sur la brique dès l'ouverture.</li>
<li><strong>La dose.</strong> {cocktails_dose} g par cocktail, pesés ou au jigger, jamais à l'œil.</li>
<li><strong>L'ordre des shakes.</strong> Dry shake de {cocktails_dry_shake} secondes d'abord, puis {cocktails_wet_shake} secondes avec glace. La glace dès le départ donne une mousse fine.</li>
<li><strong>Quand jeter un Tetrapak ouvert.</strong> Si le liquide sent mauvais, présente des bulles ou s'est séparé, il part, quelle que soit la date.</li>
</ul>
<p>La <a href="{cocktails_process_href}">fiche de procédé</a> imprime tout cela avec la valeur de référence de chaque étape, prête pour le cahier du bar.</p>`,
      },
    ],
    faq: [
      { q: 'Combien de sours sert un Tetrapak de 1 L ?', a: "{cocktails_batches_1l} sours à {cocktails_dose} g chacun. Un sachet de poudre de 200 g en donne {cocktails_batches_200g}, reconstitués cocktail par cocktail ou pour tout le service." },
      { q: 'Dois-je changer ma recette de sour ?', a: "Non. Un seul ingrédient change : {cocktails_dose} g d'aquafaba remplacent le blanc d'œuf. Le whiskey, le citron, le sirop, le dry shake et le shake avec glace restent tels quels." },
      { q: "L'aquafaba peut-il aller dans le mélange préparé à l'avance ?", a: "Non. Mélangez le whiskey, le citron et le sirop, puis ajoutez l'aquafaba au shake, cocktail par cocktail. Dans le mélange, l'aquafaba ne donne plus de hauteur en milieu de service." },
      { q: 'Et si je ne sers que quelques sours par semaine ?', a: "Prenez la poudre. Un sachet ouvert ne s'altère pas tant qu'il reste au sec, fermé ; vous reconstituez donc ce qu'il faut pour le soir et le reste attend. Le liquide ouvert a {opened_days} jours au réfrigérateur." },
      { q: "Puis-je l'essayer dans un bar avant tout le groupe ?", a: "Oui. Le sachet de poudre de 30 g est fait pour un premier essai : reconstitué à {white_powder} g plus {white_water} ml d'eau par blanc d'œuf, il couvre un service de sours. Demandez-le par notre [formulaire de contact]({contact_href})." },
      { q: 'La mousse porte-t-elle les bitters ?', a: "Oui. Après le dry shake et le shake avec glace, filtré finement dans une coupe refroidie, la mousse est assez ferme pour porter quelques gouttes de bitters." },
    ],
    links: [
      { href: '{cocktails_href}', label: 'Cocktails : liquide ou poudre ?' },
      { href: '{cocktails_calc_href}', label: 'Calculateur de quantités pour les cocktails' },
      { href: '{cocktails_process_href}', label: 'Fiche de procédé cocktails' },
      { href: '{reconstitution_href}', label: "Reconstitution de la poudre : la règle par blanc d'œuf" },
    ],
  },

  foodservice: {
    title: "L'aquafaba en cuisine centrale - VERY AQUAFABA",
    h1: "Comment utiliser l'aquafaba dans une cuisine centrale : le guide complet",
    crumb: 'Restauration collective et cuisines centrales',
    enquiryLabel: 'Restauration collective et cuisines centrales',
    description: "Aquafaba en cuisine centrale : mayonnaise, mousse, meringue et pâtisseries sans œuf avec un seul ingrédient. Ce que produit un poste et ce qui voyage.",
    lead: "Une cuisine centrale fait la mayonnaise, les desserts et les pâtisseries sans œuf que ses points de vente servent. L'aquafaba les couvre tous avec un seul ingrédient : {white_liquid} g par blanc d'œuf, {egg_liquid} g par œuf entier. Ci-dessous, une journée dans cette cuisine : ce qu'un poste peut produire, ce qui voyage bien et combien de temps, et comment faire tourner les points de vente sur la même recette.",
    figures: false,
    sections: [
      {
        id: 'why',
        title: "Pourquoi les cuisines centrales passent à l'aquafaba",
        html: `<p>Nourrir plusieurs sites depuis une seule cuisine signifie que chaque ingrédient doit tenir deux fois : une fois en production et une fois sur la route. L'aquafaba mérite sa place pour trois raisons :</p>
<ul>
<li><strong>Un ingrédient, quatre fonctions.</strong> Il émulsionne la mayonnaise, se monte pour la mousse et la meringue, et lie les biscuits et les pâtes. Une ligne dans la liste de stock remplace l'œuf dans tous.</li>
<li><strong>Rien de cru dans les sauces froides.</strong> La mayonnaise est servie sans cuisson. L'aquafaba remplace l'œuf sans risque lié à l'œuf cru dans le plat qui sort de la cuisine.</li>
<li><strong>Un stock qui attend.</strong> Fermés, les deux formats se conservent au moins {unopened_months} mois à température ambiante, en réserve sèche, pas en chambre froide. Le compte à rebours ne commence qu'à l'ouverture d'un pack.</li>
</ul>`,
      },
      {
        id: 'shift',
        title: "Ce qu'un poste peut produire",
        html: `<p>Les chiffres par préparation sont ceux des recettes VERY AQUAFABA. Le bag-in-box de 10 L est le pack dans lequel la plupart des cuisines centrales puisent ; le Tetrapak de 1 L sert un établissement seul.</p>
${grid(['Application', 'Une préparation', 'Avec un bag-in-box de 10 L', 'Avec un Tetrapak de 1 L'], [
  ['<a href="{mayonnaise_href}">Mayonnaise</a>', "{mayonnaise_dose} g d'aquafaba pour environ {mayonnaise_yield} g de mayonnaise", '{mayonnaise_batches_10l} préparations', '{mayonnaise_batches_1l} préparations'],
  ['<a href="{chocolate_mousse_href}">Mousse au chocolat</a>', '{chocolate_mousse_dose} g pour environ {chocolate_mousse_yield} portions', '{chocolate_mousse_batches_10l} préparations', '{chocolate_mousse_batches_1l} préparations'],
  ['<a href="{meringue_href}">Meringue</a>', '{meringue_dose} g pour environ {meringue_yield} meringues', '{meringue_batches_10l} préparations', '{meringue_batches_1l} préparations'],
  ['<a href="{baking_href}">Biscuits, gâteaux, pâtes</a>', '{egg_liquid} g par œuf entier', '{eggs_10l} œufs entiers', '{eggs_1l} œufs entiers'],
], 'va-guide-grid--wrap')}
<p>La mayonnaise utilise très peu d'aquafaba par préparation, c'est pourquoi même un Tetrapak va loin sur un poste de sauces. La question n'est jamais de savoir si un pack est assez grand ; c'est de savoir si un bag-in-box ou un Tetrapak ouvert est fini en {opened_days} jours. Chaque guide a un calculateur de quantités qui adapte la préparation à votre série.</p>`,
      },
      {
        id: 'travel',
        title: 'Ce qui voyage bien, et combien de temps',
        html: `<p>C'est là que l'aquafaba simplifie la vie d'une cuisine qui expédie. Une fois fait, chaque produit demande quelque chose de différent :</p>
<ul>
<li><strong>La mayonnaise</strong> se garde jusqu'à {mayonnaise_keep} jours au froid, préparée dans de bonnes conditions d'hygiène, dans un récipient propre et réfrigérée tout de suite après le mixage. Elle part finie.</li>
<li><strong>La mousse au chocolat</strong> prend au réfrigérateur et se garde {chocolate_mousse_keep} jours en emballage fermé. Portionnez-la en central et expédiez-la prise.</li>
<li><strong>Les meringues</strong> se gardent en boîte hermétique à température ambiante, au sec. Pas de chaîne du froid dans le camion.</li>
<li><strong>Les pâtisseries et pâtes enrichies</strong> restent moelleuses plus longtemps, parce que l'aquafaba ralentit le dessèchement de la mie. C'est un jour ou deux de conservation en plus sur le trajet vers le point de vente.</li>
</ul>
<p>Étiquetez chaque récipient avec la date de production et le poids avant son départ, comme le demande le guide de conservation. C'est la seule habitude qui garde une expédition traçable du batteur jusqu'au réfrigérateur du point de vente.</p>`,
      },
      {
        id: 'outlets',
        title: 'Faire tourner les points de vente',
        html: `<p>La plupart des groupes répartissent les deux formats selon l'endroit où se fait le travail. La cuisine centrale puise le liquide dans le bag-in-box, parce que son usage est continu et qu'un bag-in-box ouvert tourne à temps. Les points de vente qui montent ou mixent sur place gardent un sachet de poudre de 200 g sur l'étagère, parce qu'une semaine calme ne l'altère pas.</p>
${grid(['Votre organisation', 'Notre conseil', 'Pourquoi'], [
  ["Cuisine centrale qui tire l'aquafaba au kilo à chaque poste", "Liquide, bag-in-box de 10 L ou IBC de 1 T", 'Usage en continu, directement dans le batteur, rien à reconstituer'],
  ['Traiteur ou comptoir sandwichs qui fait sa mayonnaise fraîche à chaque service', 'Liquide, Tetrapak de 1 L', 'Versé à la température de mixage, et le Tetrapak tourne à temps'],
  ['Point de vente avec mayonnaise ou mousse sur un seul plat', 'Poudre, sachet de 200 g', 'Un litre ouvert dépasserait ses {opened_days} jours ; le sachet attend'],
  ['Chambre froide déjà pleine de sauces finies et de portions', 'Poudre', 'Le sachet ne prend jamais de place au froid'],
  ['Point de vente qui veut moins de produits datés à suivre', 'Poudre', 'Aucun Tetrapak ouvert et périssable à étiqueter et contrôler'],
])}
<p>La recette ne change pas entre les deux : {white_liquid} g de liquide, c'est {white_powder} g de poudre reconstitués avec {white_water} ml d'eau, une sauce mise au point en central tourne donc à l'identique au point de vente. Pour les plus grandes cuisines et les lignes en continu, la <a href="{industry_href}">page industrie agroalimentaire</a> couvre l'IBC de 1 T.</p>`,
      },
    ],
    faq: [
      { q: "Combien de blancs d'œufs remplace un bag-in-box de 10 L ?", a: "{bib_10l_whites} blancs d'œufs, à {white_liquid} g de liquide par blanc d'œuf. En mayonnaise, cela fait {mayonnaise_batches_10l} préparations, en mousse au chocolat {chocolate_mousse_batches_10l}, en meringue {meringue_batches_10l}." },
      { q: "Pouvons-nous expédier la mousse à l'aquafaba à nos points de vente ?", a: "Oui. Faites-la prendre en central, en emballage fermé, et elle se garde {chocolate_mousse_keep} jours au froid. La mayonnaise se garde jusqu'à {mayonnaise_keep} jours au froid dans les mêmes conditions." },
      { q: 'Les points de vente à faible rotation peuvent-ils utiliser le même produit ?', a: "Oui, en poudre. Un sachet de 200 g remplace {powder_200g_whites} blancs d'œufs, ne s'altère pas une fois ouvert tant qu'il reste au sec, fermé, et se reconstitue à {white_powder} g plus {white_water} ml d'eau par blanc d'œuf quand le point de vente en a besoin." },
      { q: 'Combien de temps se garde un bag-in-box ouvert ?', a: "Comme tout Tetrapak ou bag-in-box ouvert : à {opened_temp} °C maximum, utilisé dans les {opened_days} jours. Il convient aux cuisines dont le tirage est continu, si bien que le bag-in-box tourne sans cesse." },
      { q: 'Le point de vente a-t-il besoin de place au froid pour la poudre ?', a: "Non. Le sachet vit sur une étagère sèche, ouvert ou non. Seul l'aquafaba reconstitué est refroidi avant usage, et seulement la quantité que la préparation demande." },
      { q: 'Où envoyer nos volumes ?', a: "Par notre [formulaire de contact]({contact_href}) : entreprise, pays, application et volume mensuel estimé. La fiche technique revient avec la réponse." },
    ],
    links: [
      { href: '{mayonnaise_href}', label: 'Mayonnaise : liquide ou poudre ?' },
      { href: '{chocolate_mousse_href}', label: 'Mousse au chocolat : liquide ou poudre ?' },
      { href: '{mayonnaise_calc_href}', label: 'Calculateur de quantités pour la mayonnaise' },
      { href: '{industry_href}', label: 'Industrie agroalimentaire' },
    ],
  },

  industry: {
    title: "Aquafaba pour les lignes de production - VERY AQUAFABA",
    h1: "Comment utiliser l'aquafaba sur une ligne de production : le guide complet",
    crumb: 'Industrie agroalimentaire',
    enquiryLabel: 'Industrie agroalimentaire',
    description: "Aquafaba pour les lignes industrielles : liquide en IBC de 1 T et bag-in-box de 10 L, standardisé à {viscosity} g/ml. Remplacer les œufs dans une formule.",
    lead: "Sur une ligne de production, l'aquafaba s'utilise en liquide, tiré de l'IBC de 1 T ou du bag-in-box de 10 L et dosé au poids. Il arrive filtré, raffiné et standardisé à {viscosity} g/ml, si bien qu'une mousse ou une émulsion se comporte de la même façon à chaque série. Ci-dessous, le travail du premier essai à la spécification validée : remplacer l'œuf dans votre formule, ce qui change à l'échelle, quel pack convient à la ligne, et comment obtenir un devis.",
    figures: false,
    sections: [
      {
        id: 'why',
        title: "Pourquoi les industriels passent à l'aquafaba",
        html: `<p>Quatre choses qu'un substitut végétal à l'œuf apporte à une ligne, toutes sur l'emballage ou sur la grille tarifaire plutôt que dans une promesse :</p>
<ul>
<li><strong>Un ingrédient végétal, sans œuf.</strong> Ni œuf, ni lait, ni gluten, ni soja, ce qui retire un allergène majeur de la formule et ouvre le produit aux gammes végétales.</li>
<li><strong>Un prix qui ne suit pas le marché de l'œuf.</strong> Le prix des œufs bouge avec le coût des aliments, les maladies et les chocs d'approvisionnement. L'aquafaba, non.</li>
<li><strong>Un intrant standardisé.</strong> Chaque lot arrive à {viscosity} g/ml, ce qui garde une mousse ou une émulsion reproductible d'une série à l'autre.</li>
<li><strong>Un stock qui attend.</strong> Fermés, l'IBC et le bag-in-box se conservent au moins {unopened_months} mois à température ambiante. Sur une ligne en continu, un IBC ou un bag-in-box ouvert n'atteint jamais ses {opened_days} jours.</li>
</ul>`,
      },
      {
        id: 'formula',
        title: "Remplacer l'œuf dans votre formule",
        html: `<p>La conversion se fait au poids, et c'est la même règle que sur tout le site. Comptez les œufs, les blancs et les jaunes de la formule, puis remplacez-les un pour un :</p>
<ul>
<li>{egg_liquid} g d'aquafaba par œuf entier.</li>
<li>{white_liquid} g par blanc d'œuf.</li>
<li>{yolk_liquid} g d'aquafaba plus {yolk_oil} g d'huile par jaune, parce que l'aquafaba n'apporte pas de matière grasse.</li>
</ul>
<p>Remplacer des blancs d'œufs est un remplacement direct. Remplacer des œufs entiers apporte de l'eau en plus : l'aquafaba contient environ {water_aquafaba_pct} pour cent d'eau contre {water_egg_pct} pour cent pour un œuf, les autres liquides baissent donc de {reduce_liquids} pour cent et les produits denses sont cuits à cœur. Prenez un produit à la fois, ne changez que l'œuf, et laissez les lots d'essai confirmer le temps, la couleur et la texture avant que le changement n'entre dans la procédure standard. Le <a href="{baking_calc_href}">calculateur de substitution</a> convertit une formule entière, et la <a href="{ratio_href}">page des équivalences</a> porte la règle avec des exemples chiffrés.</p>`,
      },
      {
        id: 'scale',
        title: "À quoi veiller quand vous passez à l'échelle",
        html: `<p>Une formule qui marche sur la paillasse rencontre quatre nouvelles variables sur la ligne. Chacune vient d'une recette VERY AQUAFABA écrite pour la production :</p>
<ul>
<li><strong>Maintenez la concentration.</strong> Gardez l'aquafaba à {viscosity} g/ml d'un lot à l'autre. Si la densité dérive, la mousse se comporte différemment même à poids et temps identiques. Voir le <a href="{meringue_href}">guide de la meringue</a>.</li>
<li><strong>Pré-émulsionnez sur les lignes de mousse.</strong> Pour les grands lots, émulsionnez d'abord une partie du chocolat avec une petite quantité d'aquafaba, puis incorporez le reste de la mousse. Le lot reste homogène. Voir le <a href="{chocolate_mousse_href}">guide de la mousse au chocolat</a>.</li>
<li><strong>Fort cisaillement sur les lignes de sauces.</strong> Sur les grands lots de mayonnaise, c'est la taille des gouttelettes qui garde l'émulsion stable, la ligne tourne donc sur un mélangeur à fort cisaillement avec l'huile en filet fin et régulier. Voir le <a href="{mayonnaise_href}">guide de la mayonnaise</a>.</li>
<li><strong>Revérifiez la conservation quand l'humidité change.</strong> Tout changement de l'eau dans une pâtisserie change son activité de l'eau. Surveillez la conservation et la stabilité microbienne du produit fini après reformulation, ce qui compte le plus à l'échelle industrielle. Voir le <a href="{baking_href}">guide pâtisserie</a>.</li>
</ul>`,
      },
      {
        id: 'packs',
        title: 'Quel pack convient à votre ligne',
        html: `<p>La ligne dose au poids, chaque pack se représente donc le plus simplement par les blancs d'œufs qu'il remplace, à {white_liquid} g par blanc d'œuf.</p>
${grid(['Format', "Blancs d'œufs", 'Où il tourne'], [
  ['IBC de 1 T, liquide', '{ibc_1t_whites}', 'Dosage en continu : coques de meringue séchées chaque jour ouvré, coupes de mousse pour la distribution, lignes de sauces, bases de sour en bouteille'],
  ['Bag-in-box de 10 L, liquide', '{bib_10l_whites}', "Essais pilotes, lignes plus petites et cuisines centrales d'un groupe"],
  ['Sac de 3 kg, poudre', '{powder_3kg_whites}', 'Prémix secs : un fabricant qui mélange à sec une base de sauce ou de pâtisserie le met tel quel dans le prémix'],
], 'va-guide-grid--wrap')}
<p>Pour les lignes foisonnées et émulsionnées, le format est le liquide, parce qu'il arrive à concentration fixe, sans rien à reconstituer. La poudre mérite sa place dans un prémix sec. Une fois ouvert, le liquide se garde à {opened_temp} °C maximum et s'utilise dans les {opened_days} jours, ce qui, sur une ligne en continu, est simplement le rythme normal d'un IBC ou d'un bag-in-box.</p>`,
      },
      {
        id: 'spec',
        title: 'Obtenir votre spécification et votre devis',
        html: `<p>Les spécifications, le minimum de commande et le délai dépendent du pays, du format et du volume, ils sont donc donnés par projet. Envoyez-nous la ligne, l'application, les formats envisagés et le volume mensuel estimé par notre <a href="{contact_href}">formulaire de contact</a>, et la fiche technique revient avec le devis. Pour les cuisines centrales d'un groupe, où le bag-in-box de 10 L tourne au quotidien, voir la <a href="{foodservice_href}">page restauration collective</a>.</p>`,
      },
    ],
    faq: [
      { q: "Combien de blancs d'œufs remplace un IBC de 1 T ?", a: "{ibc_1t_whites} blancs d'œufs, à {white_liquid} g de liquide par blanc d'œuf. Le bag-in-box de 10 L en remplace {bib_10l_whites}. Les deux sont liquides, tirés en continu sans étape de reconstitution." },
      { q: 'La poudre est-elle une option pour une ligne industrielle ?', a: "Pour les prémix secs, oui : le sac de 3 kg remplace {powder_3kg_whites} blancs d'œufs et entre tel quel dans une base de sauce ou de pâtisserie sèche. Pour les lignes foisonnées et émulsionnées, le format est le liquide, parce qu'il arrive à concentration fixe, sans rien à reconstituer." },
      { q: 'Quelle concentration la ligne doit-elle maintenir ?', a: "{viscosity} g/ml. VERY AQUAFABA est filtré, raffiné et standardisé à cette concentration, pour que la mousse ou l'émulsion se comporte de la même façon à chaque série." },
      { q: 'Comment convertir une formule comptée en œufs ?', a: "{egg_liquid} g d'aquafaba par œuf entier, {white_liquid} g par blanc d'œuf, {yolk_liquid} g plus {yolk_oil} g d'huile par jaune, le tout au poids. Les autres liquides baissent de {reduce_liquids} pour cent quand des œufs entiers sont remplacés, et les lots d'essai confirment le temps, la couleur et la texture." },
      { q: 'Remplacer les œufs change-t-il la conservation de notre produit ?', a: "C'est possible, parce que l'aquafaba change l'eau de la formule et donc son activité de l'eau. Surveillez la conservation et la stabilité microbienne du produit fini après reformulation, comme l'explique le [guide pâtisserie]({baking_href})." },
      { q: 'Où trouver le minimum de commande et le délai ?', a: "Ils sont donnés par projet avec la fiche technique. Décrivez la ligne, les formats et le volume mensuel estimé par notre [formulaire de contact]({contact_href}) et la réponse les contient." },
    ],
    links: [
      { href: '{ratio_href}', label: "Quelle quantité d'aquafaba équivaut à un œuf" },
      { href: '{baking_calc_href}', label: 'Calculateur de substitution' },
      { href: '{meringue_href}', label: 'Meringue : liquide ou poudre ?' },
      { href: '{mayonnaise_href}', label: 'Mayonnaise : liquide ou poudre ?' },
      { href: '{foodservice_href}', label: 'Restauration collective et cuisines centrales' },
    ],
  },
};
