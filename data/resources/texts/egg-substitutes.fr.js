// Substituts végétaux à l'œuf, français (set-2 A1 à A4). Même structure, tokens et balises
// que egg-substitutes.en.js (vérifié par scripts/applications/check-guides.mjs). Aucun tiret long.
const grid = (heads, rows, cls = '') => `<table class="va-guide-grid${cls ? ` ${cls}` : ''}">
<thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
<tbody>
${rows.map((r) => `<tr>${r.map((c, i) => `<td data-label="${heads[i]}">${c}</td>`).join('')}</tr>`).join('\n')}
</tbody>
</table>`;

export default {
  index: {
    title: "Aquafaba, substitut végétal à l'œuf - VERY AQUAFABA",
    h1: "Substitut végétal à l'œuf : comment remplacer les œufs par l'aquafaba dans vos recettes",
    crumb: "Substituts à l'œuf",
    enquiryLabel: "Substituts à l'œuf",
    description: "Un substitut végétal qui mousse, émulsionne et lie : {egg_liquid} g de VERY AQUAFABA remplacent un œuf entier, {white_liquid} g un blanc. Quand et comment se passer des œufs.",
    lead: "Un seul ingrédient végétal peut remplacer les œufs entiers, les blancs d'œufs et même les jaunes. VERY AQUAFABA est de l'aquafaba de pois chiches : {egg_liquid} g remplacent un œuf entier et {white_liquid} g un blanc d'œuf. Vous trouverez ci-dessous quand une recette sans œuf a du sens, ce que fait l'œuf dans votre recette, quelle quantité d'aquafaba mettre à la place, et le seul ajustement à faire.",
    // Page question : la réponse d'abord, pas de tableaux de référence ensuite.
    figures: false,
    sections: [
      {
        id: 'when',
        title: 'Quand une recette sans œuf a-t-elle du sens ?',
        html: `<p>Une carte vegan est la raison évidente, mais elle est loin d'être la seule. Les cuisines se passent d'œuf pour cinq raisons :</p>
<ul>
<li><strong>Cartes vegan et végétales.</strong> Le plat doit être sans œuf par définition.</li>
<li><strong>Gestion des allergènes.</strong> VERY AQUAFABA ne contient ni œuf, ni lait, ni gluten, ni soja, la recette perd donc un des allergènes majeurs.</li>
<li><strong>Préparations jamais cuites.</strong> Les mousses de cocktail, la mousse et la mayonnaise sont servies crues. L'aquafaba remplace le blanc d'œuf cru sans le risque sanitaire qui va avec.</li>
<li><strong>Stock et conservation.</strong> Les œufs demandent le réfrigérateur et une date courte. L'aquafaba fermé se conserve au moins {unopened_months} mois à température ambiante, et la poudre ne s'altère pas une fois ouverte.</li>
<li><strong>Stabilité du prix.</strong> Le prix des œufs bouge avec la saison et le marché. L'aquafaba, non.</li>
</ul>`,
      },
      {
        id: 'function',
        title: "Que fait l'œuf dans votre recette ?",
        html: `<p>Avant de remplacer quoi que ce soit, il est utile de savoir ce que faisait l'œuf. Dans la plupart des recettes, il remplit une de trois fonctions : il tient une mousse, il maintient une émulsion, ou il lie un appareil et apporte de l'humidité. Trouvez votre recette dans le tableau ci-dessous et vous avez votre dose.</p>
${grid(['Ce que vous faites', "Ce que fait l'œuf", 'À la place', 'À surveiller', 'Guide complet'], [
  ['Meringues, macarons, mousse, mousses de cocktail', "Foisonnement : blanc monté qui retient l'air et le sucre", "{white_liquid} g par blanc d'œuf, monté froid et seul", 'Le gras dans la cuve et un aquafaba tiède brident tous deux la mousse', '<a href="{meringue_href}">Meringue</a>, <a href="{macarons_href}">macarons</a>, <a href="{chocolate_mousse_href}">mousse au chocolat</a>, <a href="{cocktails_href}">cocktails</a>'],
  ['Mayonnaise, sauces, vinaigrettes', "Émulsion : tenir ensemble l'huile et l'eau", "{mayonnaise_dose} g pour {mayonnaise_oil} g d'huile", "Huile versée trop vite, ou cisaillement trop faible, et l'émulsion ne prend jamais", '<a href="{mayonnaise_href}">Mayonnaise</a>'],
  ['Gâteaux, cookies, muffins, brioche', "Liant et humidité : tenir l'appareil ensemble", '{egg_liquid} g par œuf entier', "L'aquafaba apporte plus d'eau que l'œuf : réduisez les autres liquides et cuisez à cœur", '<a href="{baking_href}">Pâtisserie</a>'],
  ["Tout ce qui demande le moelleux d'un jaune", 'Matière grasse et couleur', "{yolk_liquid} g plus {yolk_oil} g d'huile", "L'aquafaba n'apporte pas de matière grasse, l'huile n'est donc pas facultative", '<a href="{ratio_href}">Équivalence œuf</a>'],
], 'va-guide-grid--wrap')}
<p>Un seul ingrédient couvre les quatre fonctions. Ce qui change d'une recette à l'autre, c'est la dose et la façon de le travailler.</p>`,
      },
      {
        id: 'convert',
        title: "Quelle quantité d'aquafaba remplace un œuf",
        html: `<p>L'aquafaba se pèse toujours, et trois chiffres couvrent toutes les recettes :</p>
<ul>
<li>{egg_liquid} g d'aquafaba remplacent un œuf entier.</li>
<li>{white_liquid} g remplacent un blanc d'œuf. En poudre, c'est {white_powder} g reconstitués avec {white_water} ml d'eau.</li>
<li>{yolk_liquid} g plus {yolk_oil} g d'huile tiennent lieu d'un jaune, parce que l'aquafaba n'apporte pas de matière grasse.</li>
</ul>
<p>Vous remplacez des œufs entiers ? L'aquafaba apporte plus d'eau qu'un œuf, environ {water_aquafaba_pct} pour cent contre {water_egg_pct} pour cent. Réduisez les autres liquides de {reduce_liquids} pour cent et cuisez les gâteaux denses à cœur. Remplacer seulement les blancs, comme dans les meringues ou les macarons, ne demande aucun ajustement.</p>
<p>Le <a href="{baking_calc_href}">calculateur de substitution</a> convertit d'un coup les œufs, les blancs et les jaunes de votre propre recette.</p>`,
      },
      {
        id: 'formats',
        title: 'Liquide ou poudre ?',
        html: `<p>Le liquide et la poudre sont le même aquafaba, les doses ci-dessus valent donc pour les deux. Le choix tient à la vitesse à laquelle vous utilisez un Tetrapak ou un sachet ouvert et à l'endroit où vous pouvez le stocker.</p>
${grid(['Format', "Par blanc d'œuf", 'Une fois ouvert', 'Lire la suite'], [
  ['Liquide, prêt à verser', '{white_liquid} g, pesés directement depuis le Tetrapak', 'Au réfrigérateur à {opened_temp} °C maximum, utilisé dans les {opened_days} jours', '<a href="{liquid_egg_white_href}">Alternative au blanc d\'œuf liquide</a>'],
  ["Poudre, reconstituée avec de l'eau", "{white_powder} g plus {white_water} ml d'eau", "Ne s'altère pas. Gardez-la au sec, fermée", '<a href="{egg_white_powder_href}">Alternative au blanc d\'œuf en poudre</a>'],
])}
<p>Si vous cuisinez sans œuf tous les jours, le liquide est le choix simple. Si vous ne le faites que de temps en temps, ou si vous manquez de place au réfrigérateur, la poudre attendra aussi longtemps qu'il le faut. Et si vous achetez pour une boulangerie, un bar ou une ligne de production, la <a href="{professional_href}">section professionnels</a> passe les formats en revue par activité.</p>`,
      },
      {
        id: 'vary',
        title: "Pourquoi les résultats varient-ils d'une recette à l'autre ?",
        html: `<p>En général parce que l'œuf faisait un travail différent dans chaque recette. Cinq choses expliquent la plupart des surprises :</p>
<ul>
<li><strong>La fonction.</strong> Une mousse, un liant et une émulsion sont trois résultats différents. La dose qui monte une meringue n'est pas la dose qui lie un gâteau.</li>
<li><strong>Quelle partie de l'œuf.</strong> Remplacer un blanc est un remplacement direct. Remplacer un œuf entier apporte de l'eau en plus. Remplacer un jaune demande l'huile.</li>
<li><strong>La technique.</strong> Le foisonnement met l'air, l'incorporation le garde, un filet fin d'huile construit l'émulsion. Le tableau de dépannage de chaque guide couvre les défauts de sa propre recette.</li>
<li><strong>Le reste de la recette.</strong> Le moment du sucre, la température du chocolat, l'humidité de la pièce et la chaleur du four changent tous le résultat, comme avec les œufs.</li>
<li><strong>Le format, seulement à la préparation.</strong> Le liquide se pèse tel quel. La poudre se reconstitue d'abord avec de l'eau. Reconstituée, c'est le même aquafaba, à la même dose.</li>
</ul>`,
      },
    ],
    faq: [
      { q: "L'aquafaba est-il vegan ?", a: "Oui. VERY AQUAFABA est fait de pois chiches et d'eau, sans œuf, ni lait, ni gluten, ni soja ; il convient donc aux recettes vegan et sans allergènes." },
      { q: "Puis-je remplacer un blanc d'œuf par de l'aquafaba ?", a: "Oui. {white_liquid} g d'aquafaba liquide remplacent un blanc d'œuf, ou {white_powder} g de poudre reconstitués avec {white_water} ml d'eau. Pesez-le plutôt que de le mesurer à la cuillère." },
      { q: "Puis-je utiliser l'aquafaba à la place d'un œuf entier ?", a: "Oui. {egg_liquid} g remplacent un œuf entier. Ajouté tel quel, il apporte le liant et l'humidité de l'œuf aux gâteaux, cookies et pâtes. Pour le moelleux d'un jaune, ajoutez {yolk_liquid} g d'aquafaba plus {yolk_oil} g d'huile." },
      { q: "Dois-je changer autre chose dans la recette ?", a: "Seulement quand vous remplacez des œufs entiers : réduisez les autres liquides de {reduce_liquids} pour cent, parce que l'aquafaba contient environ {water_aquafaba_pct} pour cent d'eau contre {water_egg_pct} pour cent pour un œuf. Remplacer seulement les blancs d'œufs ne demande aucun changement." },
      { q: 'La poudre est-elle la même chose que le liquide ?', a: "Oui, séchée. {white_powder} g de poudre plus {white_water} ml d'eau donnent {white_total} g d'aquafaba, la même chose que le liquide, et remplacent un blanc d'œuf." },
      { q: 'De quoi est fait VERY AQUAFABA ?', a: "Du liquide de cuisson des pois chiches, filtré, raffiné et standardisé pour que chaque lot se comporte de la même façon. Il est neutre en goût et clean label, comme le décrit la [page Produits]({products_href})." },
    ],
    links: [
      { href: '{egg_white_href}', label: "Comment remplacer les blancs d'œufs par l'aquafaba" },
      { href: '{liquid_egg_white_href}', label: "Passer du blanc d'œuf liquide à l'aquafaba" },
      { href: '{egg_white_powder_href}', label: "Poudre d'aquafaba : l'alternative au blanc d'œuf en poudre" },
      { href: '{ratio_href}', label: "Quelle quantité d'aquafaba équivaut à un œuf" },
      { href: '{professional_href}', label: "L'aquafaba pour les professionnels" },
    ],
  },

  'egg-white': {
    title: "Remplacer les blancs par l'aquafaba - VERY AQUAFABA",
    h1: "Comment remplacer les blancs d'œufs par l'aquafaba",
    crumb: "Blanc d'œuf",
    enquiryLabel: "Alternative au blanc d'œuf",
    description: "Remplacer les blancs par l'aquafaba : {white_liquid} g de liquide ou {white_powder} g de poudre par blanc d'œuf. La conversion à toute échelle et ce que demande le fouet.",
    lead: "Un blanc d'œuf, c'est {white_liquid} g de VERY AQUAFABA liquide, ou {white_powder} g de poudre reconstitués avec {white_water} ml d'eau. C'est toute la conversion, et elle tient d'un seul blanc à une recette entière : un Tetrapak de 1 L tient lieu de {liquid_1l_whites} blancs d'œufs, un sachet de 200 g de {powder_200g_whites}. Vous trouverez ci-dessous la conversion aux quantités que les recettes utilisent réellement, ce que le fouet vous demande, et les recettes de ce site qui tournent dessus.",
    figures: true,
    sections: [
      {
        id: 'convert',
        title: "D'un blanc d'œuf à une recette entière",
        html: `<p>Les recettes comptent en blancs d'œufs, voici donc la conversion aux nombres que vous rencontrez le plus souvent. Le liquide se pèse tel quel ; la poudre se pèse, puis se reconstitue avec de l'eau.</p>
${grid(["Blancs d'œufs", 'Liquide', 'Poudre', 'Eau pour la poudre'], [
  ['1', '{white_liquid} g', '{white_powder} g', '{white_water} ml'],
  ['2', '{whites_2_liquid} g', '{whites_2_powder} g', '{whites_2_water} ml'],
  ['4', '{whites_4_liquid} g', '{whites_4_powder} g', '{whites_4_water} ml'],
  ['5', '{whites_5_liquid} g', '{whites_5_powder} g', '{whites_5_water} ml'],
  ['10', '{whites_10_liquid} g', '{whites_10_powder} g', '{whites_10_water} ml'],
])}
<p>Deux blancs, c'est une petite mousse pour deux ; quatre, c'est la préparation de macarons et de mousse de ce site ; cinq, c'est la préparation de meringue. La <a href="{reconstitution_href}">page de reconstitution</a> poursuit le tableau jusqu'à 20 blancs d'œufs, et chaque guide d'application a un calculateur qui adapte la recette entière.</p>`,
      },
      {
        id: 'whisk',
        title: 'Ce que le fouet vous demande',
        html: `<p>La mousse d'aquafaba est une simple mousse de protéines, sans matière grasse dans la recette, et elle demande le même soin que le blanc d'œuf, plus un peu de patience avec le froid. Trois choses couvrent presque tous les défauts :</p>
<ul>
<li><strong>Froid.</strong> L'aquafaba entre dans la cuve à {meringue_chill} °C, et la poudre reconstituée est refroidie à la même température. Un aquafaba tiède monte lentement et donne une mousse plus faible.</li>
<li><strong>Propre.</strong> Un film de gras sur la cuve ou le fouet bride le volume. Essuyez les deux avant que l'aquafaba n'entre.</li>
<li><strong>Le sucre en dernier.</strong> Il entre une fois que la mousse tient les pics souples, une cuillère à la fois. Ajouté plus vite qu'il ne peut se dissoudre, il suinte au stockage.</li>
</ul>
<p>Comptez le foisonnement en minutes, pas en secondes : environ {meringue_whip} minutes à grande vitesse pour une préparation de meringue. Un stabilisant est facultatif. Quand une recette en utilise un, la crème de tartre ou l'acide citrique entre aux pics souples, pas au départ.</p>`,
      },
      {
        id: 'where',
        title: 'Où il se monte sur ce site',
        html: `<p>Quatre recettes de ce site reposent sur la mousse d'aquafaba, à quatre charges différentes :</p>
<ul>
<li><a href="{meringue_href}">Meringue</a> : {meringue_dose} g, soit {meringue_eggs} blancs d'œufs, montés avec {meringue_sugar} g de sucre et séchés à {meringue_bake} °C, pour environ {meringue_yield} meringues.</li>
<li><a href="{macarons_href}">Macarons</a> : {macarons_dose} g, soit {macarons_eggs} blancs d'œufs, pour environ {macarons_yield} coques.</li>
<li><a href="{chocolate_mousse_href}">Mousse au chocolat</a> : {chocolate_mousse_dose} g, soit {chocolate_mousse_eggs} blancs d'œufs, incorporés au chocolat à {chocolate_mousse_fold_temp} °C.</li>
<li><a href="{cocktails_href}">Sours derrière le bar</a> : {cocktails_dose} g par cocktail, dry shake de {cocktails_dry_shake} secondes.</li>
</ul>
<p>Si votre recette remplace des œufs entiers plutôt que des blancs, le chiffre est {egg_liquid} g par œuf et la <a href="{ratio_href}">page des équivalences</a> prend le relais.</p>`,
      },
      {
        id: 'choose',
        title: "Liquide ou poudre pour le même blanc d'œuf ?",
        html: `<p>La conversion est identique dans les deux, le choix concerne donc le pack, pas la recette. Une cuisine qui monte presque tous les jours prend le <a href="{liquid_egg_white_href}">liquide</a> : il se verse du réfrigérateur déjà froid, et un Tetrapak ouvert s'utilise dans les {opened_days} jours. Une cuisine qui monte de temps en temps, ou qui n'a pas de place au froid, prend la <a href="{egg_white_powder_href}">poudre</a> : un sachet ouvert ne s'altère pas, et vous reconstituez ce que la préparation demande.</p>`,
      },
    ],
    faq: [
      { q: "Combien de grammes d'aquafaba remplacent un blanc d'œuf ?", a: "{white_liquid} g de liquide, ou {white_powder} g de poudre reconstitués avec {white_water} ml d'eau, ce qui donne {white_total} g d'aquafaba." },
      { q: "Monte-t-il comme un blanc d'œuf ?", a: "Il monte en une mousse qui porte le sucre et l'air, et c'est sur elle que reposent les recettes de meringue, de macarons, de mousse et de sour de ce site. Il demande la même cuve froide et le même fouet sans gras." },
      { q: "Combien de blancs d'œufs dans un Tetrapak de 1 L ?", a: "{liquid_1l_whites}. Un bag-in-box de 10 L tient lieu de {bib_10l_whites} et un IBC de 1 T de {ibc_1t_whites}. En poudre, un sachet de 200 g tient lieu de {powder_200g_whites}." },
      { q: "Ai-je besoin de crème de tartre ou d'acide citrique ?", a: "C'est facultatif. Quand une recette en utilise un, il entre pendant que le batteur tourne, une fois que la mousse tient les pics souples, et il soutient la mousse pendant le sucre et l'incorporation." },
      { q: "Puis-je l'utiliser dans une recette qui demande des œufs entiers ?", a: "Oui, avec le chiffre de l'œuf entier à la place : {egg_liquid} g par œuf, plus une réduction des liquides de {reduce_liquids} pour cent parce que l'aquafaba apporte plus d'eau. Le [guide pâtisserie]({baking_href}) l'explique." },
    ],
    links: [
      { href: '{meringue_href}', label: 'Meringue : liquide ou poudre ?' },
      { href: '{macarons_href}', label: 'Macarons : liquide ou poudre ?' },
      { href: '{reconstitution_href}', label: "Reconstitution de la poudre : la règle par blanc d'œuf" },
      { href: '{liquid_egg_white_href}', label: "Passer du blanc d'œuf liquide à l'aquafaba" },
      { href: '{egg_white_powder_href}', label: "Poudre d'aquafaba : l'alternative au blanc d'œuf en poudre" },
    ],
  },

  'liquid-egg-white': {
    title: "Du blanc liquide à l'aquafaba - VERY AQUAFABA",
    h1: "Passer du blanc d'œuf liquide à l'aquafaba",
    crumb: "Blanc d'œuf liquide",
    enquiryLabel: "Alternative au blanc d'œuf liquide",
    description: "Du blanc d'œuf liquide au VERY AQUAFABA liquide : la même dose au poids, {white_liquid} g par blanc. Ce qui change, et quel pack remplace votre brique.",
    lead: "Si vous achetez du blanc d'œuf liquide en brique, c'est pour éviter de casser des œufs et pour doser au poids. VERY AQUAFABA liquide fait le même travail à partir de pois chiches : {white_liquid} g remplacent un blanc d'œuf, il arrive à une concentration fixe de {viscosity} g/ml, et il se verse directement sur la balance. Voici ce qui change quand vous passez à l'aquafaba, ce qui ne change pas, quel pack remplace votre brique, et que faire de ce qui reste dans un Tetrapak ouvert.",
    figures: true,
    sections: [
      {
        id: 'changes',
        title: 'Ce qui change, et ce qui ne change pas',
        html: `<p>La bonne nouvelle d'abord : votre façon de travailler reste la même.</p>
<ul>
<li>Vous dosez toujours au poids, {white_liquid} g par blanc d'œuf, directement du Tetrapak sur la balance.</li>
<li>Vous versez toujours, sans rien à reconstituer.</li>
<li>Vous le montez toujours froid, dans une cuve propre, à {meringue_chill} °C pour une meringue.</li>
</ul>
<p>Ce qui change, c'est tout ce qui entoure le pack :</p>
<ul>
<li><strong>Pas de chaîne du froid avant l'ouverture.</strong> Fermé, le Tetrapak se conserve au moins {unopened_months} mois à température ambiante, en réserve sèche. Une brique de blanc d'œuf liquide vit au réfrigérateur dès son arrivée.</li>
<li><strong>{opened_days} jours une fois ouvert,</strong> à {opened_temp} °C maximum, fermé entre deux usages.</li>
<li><strong>Pas d'œuf cru dans la cuisine.</strong> La mousse et l'émulsion sont les mêmes ; le risque sanitaire du blanc d'œuf cru disparaît, et le plat est sans œuf pour le client.</li>
<li><strong>Une seule concentration, à chaque fois.</strong> Le liquide est filtré, raffiné et standardisé à {viscosity} g/ml, une mousse se comporte donc de la même façon d'un Tetrapak à l'autre.</li>
</ul>`,
      },
      {
        id: 'packs',
        title: 'Quel pack remplace votre brique',
        html: `<p>Trois packs de liquide, décrits par les blancs d'œufs qu'ils remplacent et par la cuisine qui les vide.</p>
${grid(['Pack', "Blancs d'œufs", 'Qui le vide'], [
  ['Tetrapak de 1 L', '{liquid_1l_whites}', 'Un laboratoire de pâtisserie, un bar avec des sours à la carte, un établissement seul'],
  ['Bag-in-box de 10 L', '{bib_10l_whites}', 'Une cuisine centrale qui tire au kilo à chaque poste'],
  ['IBC de 1 T', '{ibc_1t_whites}', 'Une ligne qui dose en continu'],
], 'va-guide-grid--wrap')}
<p>En pratique : {meringue_dose} g pour une préparation de meringue d'environ {meringue_yield}, {macarons_dose} g pour environ {macarons_yield} coques de macarons, {mayonnaise_dose} g pour {mayonnaise_oil} g d'huile dans une mayonnaise, {cocktails_dose} g par sour. Les <a href="{index_href}">guides d'application</a> portent la méthode de chacune. Chaque activité est traitée sur sa propre page : <a href="{pastry_href}">pâtisserie et boulangerie</a>, <a href="{bars_href}">bars et cocktails</a>, <a href="{foodservice_href}">restauration collective</a> et <a href="{industry_href}">industrie agroalimentaire</a>.</p>`,
      },
      {
        id: 'opened',
        title: 'Que faire de ce qui reste dans un Tetrapak ouvert',
        html: `<p>Un Tetrapak ouvert a {opened_days} jours au réfrigérateur. Si votre rythme en vient à bout à temps, fermez-le entre deux usages et c'est tout. Sinon, vous avez deux options :</p>
<ul>
<li><strong>Le congeler.</strong> Portionnez-le à {portion} g, congelez à {freeze_temp} °C pendant {freeze_months} mois au plus, décongelez une nuit au réfrigérateur et mélangez jusqu'à homogénéité avant de monter. Il ne se recongèle jamais. Le <a href="{storage_href}">guide de conservation et de congélation</a> détaille la manipulation.</li>
<li><strong>Ou passer cette recette à la poudre.</strong> Un sachet ouvert ne s'altère pas, et il répond à la même recette à la même dose. La <a href="{egg_white_powder_href}">page de la poudre</a> explique quand le sachet est le meilleur achat.</li>
</ul>
<p>Quelle que soit la date, un liquide ouvert qui sent mauvais, présente des bulles ou s'est séparé est jeté.</p>`,
      },
    ],
    faq: [
      { q: "L'aquafaba se conserve-t-il comme le blanc d'œuf liquide ?", a: "Pas avant ouverture. Fermé, il se conserve au moins {unopened_months} mois à température ambiante, il attend donc en réserve sèche. Une fois ouvert, il se conserve comme votre brique : à {opened_temp} °C maximum, utilisé dans les {opened_days} jours." },
      { q: "Quelle quantité de liquide remplace un blanc d'œuf ?", a: "{white_liquid} g, pesés. Un Tetrapak de 1 L tient donc lieu de {liquid_1l_whites} blancs d'œufs, un bag-in-box de 10 L de {bib_10l_whites} et un IBC de 1 T de {ibc_1t_whites}." },
      { q: 'Peut-il être congelé ?', a: "Oui, en portions de {portion} g à {freeze_temp} °C pendant {freeze_months} mois au plus. Décongelez une nuit au réfrigérateur et mélangez jusqu'à homogénéité avant de monter ; il ne se recongèle jamais." },
      { q: 'La concentration est-elle fixe ?', a: "Oui, {viscosity} g/ml. Il est filtré, raffiné et standardisé, et c'est ce qui garde une mousse ou une émulsion identique d'une série à l'autre." },
      { q: "Où puis-je acheter de l'aquafaba liquide ?", a: "Les formats et les canaux actuels sont sur la [page Produits]({products_href}). Pour des volumes professionnels, décrivez-les par le formulaire de demande et la fiche technique revient avec la réponse." },
    ],
    links: [
      { href: '{egg_white_href}', label: "Comment remplacer les blancs d'œufs par l'aquafaba" },
      { href: '{egg_white_powder_href}', label: "Poudre d'aquafaba : l'alternative au blanc d'œuf en poudre" },
      { href: '{storage_href}', label: "Comment conserver et congeler l'aquafaba" },
      { href: '{pastry_href}', label: 'Pâtisserie et boulangerie' },
      { href: '{bars_href}', label: 'Bars et cocktails' },
    ],
  },

  'egg-white-powder': {
    title: "Poudre d'aquafaba ou blanc en poudre - VERY AQUAFABA",
    h1: "Poudre d'aquafaba : l'alternative au blanc d'œuf en poudre qui se garde",
    crumb: "Blanc d'œuf en poudre",
    enquiryLabel: "Alternative au blanc d'œuf en poudre",
    description: "VERY AQUAFABA en poudre remplace le blanc d'œuf en poudre : {white_powder} g et {white_water} ml d'eau par blanc, {powder_200g_whites} blancs par sachet, sans date après ouverture.",
    lead: "Le blanc d'œuf en poudre mérite sa place dans la réserve parce qu'il attend. La poudre VERY AQUAFABA fait de même à partir de pois chiches, pour la cuisine et la pâtisserie : {white_powder} g reconstitués avec {white_water} ml d'eau remplacent un blanc d'œuf, un sachet de 200 g tient lieu de {powder_200g_whites}, et un sachet ouvert ne s'altère pas tant qu'il reste au sec, fermé. Voici comment la reconstituer, quand le sachet l'emporte sur le Tetrapak, et la seule chose qu'elle ne fait pas.",
    figures: true,
    sections: [
      {
        id: 'makeup',
        title: 'La reconstituer',
        html: `<p>La règle se compte par blanc d'œuf, pas par sachet : {white_powder} g de poudre et {white_water} ml d'eau donnent {white_total} g d'aquafaba, utilisés exactement comme le même poids de liquide. Pour les préparations de ce site :</p>
${grid(['Préparation', 'Poudre', 'Eau'], [
  ["Meringue, {meringue_eggs} blancs d'œufs", '{meringue_powder} g', '{meringue_water} ml'],
  ['Mayonnaise, une préparation', '{mayonnaise_powder} g', '{mayonnaise_water} ml'],
  ['Un sour', '{cocktails_powder} g', '{cocktails_water} ml'],
])}
<p>Reconstituez-la avant d'en avoir besoin et mettez-la au frais, à {meringue_chill} °C pour une meringue, parce qu'un aquafaba tiède monte plus lentement et donne une mousse plus faible. La <a href="{reconstitution_href}">page de reconstitution</a> porte le tableau de 1 à 20 blancs d'œufs.</p>`,
      },
      {
        id: 'when',
        title: "Quand le sachet l'emporte sur le Tetrapak",
        html: `<p>C'est le même ingrédient que le liquide, les raisons de le préférer tiennent donc au pack et au local, pas à la recette :</p>
<ul>
<li><strong>Rotation irrégulière.</strong> Le sachet ouvert attend sans date, tandis qu'un Tetrapak ouvert a {opened_days} jours au réfrigérateur.</li>
<li><strong>Pas de place au froid.</strong> Le sachet vit en réserve sèche, et les étagères réfrigérées restent libres pour ce que vous venez de faire.</li>
<li><strong>Déplacements.</strong> Les événements et les prestations extérieures l'emportent au sec, sans chaîne du froid.</li>
<li><strong>Prémix secs.</strong> Un fabricant qui mélange à sec une base de sauce ou de pâtisserie met la poudre telle quelle dans le prémix.</li>
</ul>
<p>Fermé, un sachet se conserve au moins {unopened_months} mois à température ambiante, comme le liquide. La différence commence le jour où vous l'ouvrez.</p>`,
      },
      {
        id: 'not',
        title: 'La seule chose que la poudre ne fait pas',
        html: `<p>Ce n'est pas un raccourci de mélange à sec pour les recettes montées. L'aquafaba se monte seul d'abord, la poudre est donc reconstituée avec de l'eau et refroidie avant d'approcher la poudre d'amande, le sucre glace ou le sucre en poudre. Ce n'est que dans un prémix sec qu'elle entre telle quelle.</p>
<p>Et c'est un ingrédient culinaire, pas un complément protéiné : faite pour la meringue qui tient son sucre, la mayonnaise qui prend son huile et le biscuit qui lie, et dosée par le blanc d'œuf que la recette remplace, pas à la mesurette.</p>`,
      },
      {
        id: 'packs',
        title: 'Quel sachet',
        html: `${grid(['Sachet', "Blancs d'œufs", 'Reconstitué, cela fait'], [
  ['30 g', '{powder_30g_whites}', "Une préparation d'essai, ou un bar qui teste un sour"],
  ['200 g', '{powder_200g_whites}', '{meringue_batches_200g} préparations de meringue ou {cocktails_batches_200g} sours'],
  ['3 kg', '{powder_3kg_whites}', 'Une cuisine professionnelle, ou un prémix sec sur une ligne'],
])}
<p>La <a href="{products_href}">page Produits</a> liste les sachets et ce que l'emballage indique. Les <a href="{index_href}">guides d'application</a> donnent la dose par recette dans les deux formats, et la <a href="{professional_href}">section professionnels</a> classe les formats par activité.</p>`,
      },
    ],
    faq: [
      { q: "Qu'est-ce que la poudre d'aquafaba ?", a: "VERY AQUAFABA sous forme séchée. {white_powder} g de poudre plus {white_water} ml d'eau donnent {white_total} g d'aquafaba, soit le même poids de liquide, et remplacent un blanc d'œuf." },
      { q: 'Combien de temps tient un sachet ouvert ?', a: "Il ne s'altère pas tant qu'il reste au sec, fermé, et c'est pour cela qu'il convient à une cuisine ou un bar dont la rotation est irrégulière. Fermé, il se conserve au moins {unopened_months} mois à température ambiante." },
      { q: 'La poudre peut-elle aller directement dans un mélange sec ?', a: "Dans un prémix sec, oui. Dans une recette montée, non : l'aquafaba se monte seul d'abord, reconstituez-la donc avec de l'eau et refroidissez-la avant qu'elle ne rencontre les autres ingrédients secs." },
      { q: "Combien de blancs d'œufs dans un sachet de 200 g ?", a: "{powder_200g_whites}. Le sachet de 30 g tient lieu de {powder_30g_whites} et le sac de 3 kg de {powder_3kg_whites}." },
      { q: 'Est-ce un complément protéiné ?', a: "Non. C'est un ingrédient culinaire pour les mousses, les émulsions et la pâtisserie, dosé par le blanc d'œuf que la recette remplace, comme l'expliquent les [guides d'application]({index_href})." },
    ],
    links: [
      { href: '{reconstitution_href}', label: "Reconstitution de la poudre : la règle par blanc d'œuf" },
      { href: '{egg_white_href}', label: "Comment remplacer les blancs d'œufs par l'aquafaba" },
      { href: '{liquid_egg_white_href}', label: "Passer du blanc d'œuf liquide à l'aquafaba" },
      { href: '{meringue_href}', label: 'Meringue : liquide ou poudre ?' },
      { href: '{bars_href}', label: 'Bars et cocktails' },
    ],
  },
};
