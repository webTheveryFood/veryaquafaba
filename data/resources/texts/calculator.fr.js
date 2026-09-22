// Calculateur de quantités, français. Même structure, mêmes {tokens} et mêmes balises HTML
// que calculator.en.js (vérifié par scripts/applications/check-guides.mjs). Pas de tiret long.
// Les formulations et les chiffres suivent les guides et les recettes du site.
export default {
  meringue: {
    title: "Calculateur de quantités pour la meringue à l'aquafaba - VERY AQUAFABA",
    h1: "Quelle quantité d'aquafaba pour la meringue ? Le calculateur",
    description: "Adaptez la recette de meringue VERY AQUAFABA à n'importe quel nombre de lots ou de meringues : aquafaba liquide, sucre et équivalent en poudre et en eau, d'après la recette publiée.",
    lead: "Un lot de la recette de meringue VERY AQUAFABA demande {dose} g d'aquafaba liquide et {sugar} g de sucre et donne {yield}. Indiquez combien de lots ou combien de meringues il vous faut, et le calculateur adapte l'aquafaba, le sucre et l'équivalent en poudre et en eau.",
    example: { batches: 5 },
    sections: [
      {
        id: 'reference',
        title: 'Le lot de référence, tiré de la recette',
        html: `<p>Chaque chiffre de cette page part du même point : la recette de meringue publiée sur ce site. Elle demande {dose} g de VERY AQUAFABA liquide, montés avec {sugar} g de sucre en poudre, et donne {yield} de 3 à 4 cm. Ce seul lot remplace {eggs} blancs d'œufs, puisque {white_liquid} g d'aquafaba liquide tiennent lieu d'un blanc.</p>
<p>En poudre, le même lot correspond à {powder_dose} g de VERY AQUAFABA en poudre, réhydratés avec {water_dose} ml d'eau. La règle est celle imprimée sur chaque guide : {white_powder} g de poudre + {white_water} ml d'eau = {white_total} g d'aquafaba, la même masse que le liquide, et {white_powder} g de poudre remplacent un blanc d'œuf.</p>
<p>Le stabilisant facultatif, 2 g de crème de tartre ou 1 g d'acide citrique par lot, suit lui aussi le lot. Il n'est pas dans le calculateur, car beaucoup de cuisines s'en passent.</p>`,
      },
      {
        id: 'scaling',
        title: 'Ce qui suit les quantités et ce qui ne les suit pas',
        html: `<p>Aquafaba, sucre, poudre et eau suivent une droite : deux fois plus de meringues, deux fois plus de chaque. Trois choses ne bougent pas.</p>
<ul>
<li>Le temps de foisonnement. Le lot de référence atteint le bec d'oiseau souple en {whip} minutes à grande vitesse. Une cuve plus pleine monte plus lentement : jugez la mousse à ses pointes, pas au chronomètre.</li>
<li>Le séchage. Les plaques sèchent à {bake} °C sans chaleur tournante pendant {bake_time} heures, quelle que soit la taille du lot. Plus de meringues, c'est plus de plaques, pas un four plus chaud.</li>
<li>La température. L'aquafaba entre dans la cuve à {chill} °C, et la poudre réhydratée est refroidie au même point, pour un lot comme pour dix.</li>
</ul>
<p>Montez ce que votre cuve contient sans forcer et pochez chaque cuve aussitôt : la mousse d'aquafaba perd du volume si elle attend pendant que la suivante monte.</p>`,
      },
      {
        id: 'packs',
        title: 'Combien de lots par conditionnement',
        html: `<p>Une fois votre nombre de lots connu, le conditionnement en découle.</p>
<table class="va-guide-grid">
<thead><tr><th scope="col">Conditionnement</th><th scope="col">Lots</th><th scope="col">Meringues, environ</th></tr></thead>
<tbody>
<tr><td data-label="Conditionnement">Tetrapak de 1 L de liquide</td><td data-label="Lots">{batches_1l}</td><td data-label="Meringues, environ">{pieces_1l}</td></tr>
<tr><td data-label="Conditionnement">Bag-in-box de 10 L de liquide</td><td data-label="Lots">{batches_10l}</td><td data-label="Meringues, environ">{pieces_10l}</td></tr>
<tr><td data-label="Conditionnement">Sachet de 200 g de poudre</td><td data-label="Lots">{batches_200g}</td><td data-label="Meringues, environ">{pieces_200g}</td></tr>
<tr><td data-label="Conditionnement">Sac de 3 kg de poudre</td><td data-label="Lots">{batches_3kg}</td><td data-label="Meringues, environ">{pieces_3kg}</td></tr>
</tbody>
</table>
<p>Liquide ou poudre est une décision à part, prise dans le <a href="{guide_href}">guide de la meringue</a> : elle dépend de la fréquence à laquelle vous remplissez le four et des {opened_days} jours qu'un conditionnement de liquide ouvert tient au réfrigérateur.</p>`,
      },
      {
        id: 'example',
        title: 'Exemple chiffré : {ex_pieces} meringues pour un événement',
        html: `<p>Un laboratoire de pâtisserie a besoin de {ex_pieces} petites meringues pour un buffet. Cela fait {ex_batches} lots de la recette de référence.</p>
<ul>
<li>Liquide : {ex_dose} g de VERY AQUAFABA et {ex_sugar} g de sucre en poudre, à la place de {ex_eggs} blancs d'œufs.</li>
<li>Poudre : {ex_powder} g de poudre réhydratés avec {ex_water} ml d'eau, puis les mêmes {ex_sugar} g de sucre.</li>
<li>Four : {ex_batches} lots pochés à 3 à 4 cm remplissent plusieurs plaques, et chaque plaque sèche les {bake_time} heures complètes à {bake} °C.</li>
</ul>
<p>Monté en une seule fois, ce volume demande un grand batteur mélangeur. Avec un batteur de table, montez-le en {ex_batches} lots séparés et pochez chacun avant de lancer le suivant.</p>`,
      },
    ],
    faq: [
      { q: 'Combien de meringues donne un lot ?', a: "{yield} de 3 à 4 cm, à partir de {dose} g d'aquafaba et {sugar} g de sucre. Pochez plus petit et le nombre augmente ; les quantités ne changent pas." },
      { q: "Quelle quantité d'aquafaba remplace un blanc d'œuf ?", a: "{white_liquid} g de liquide, ou {white_powder} g de poudre réhydratés avec {white_water} ml d'eau. Un lot de meringue remplace {eggs} blancs d'œufs." },
      { q: 'Puis-je diviser le lot par deux ?', a: "Oui. {half_dose} g d'aquafaba et {half_sugar} g de sucre donnent environ {half_yield} meringues. Un petit volume dans une grande cuve met plus de temps à monter : prenez la plus petite cuve de votre batteur." },
      { q: 'Un lot double demande-t-il deux fois plus de temps de foisonnement ?', a: "Non. Il demande plus de temps qu'un lot simple, mais pas le double. Montez jusqu'au bec d'oiseau souple, atteint en {whip} minutes pour le lot de référence, et n'ajoutez le sucre qu'à ce moment-là." },
      { q: "Combien d'eau ajouter à la poudre ?", a: "{white_water} ml pour {white_powder} g de poudre. Pour un lot de meringue, cela fait {powder_dose} g de poudre et {water_dose} ml d'eau ; le calculateur adapte les deux." },
      { q: "D'où vient la quantité de sucre ?", a: "De la recette de meringue de ce site : à poids égal, {sugar} g de sucre pour {dose} g d'aquafaba. La méthode complète est dans la [recette de meringue]({recipe_href})." },
    ],
  },

  'chocolate-mousse': {
    title: "Calculateur de quantités pour la mousse au chocolat à l'aquafaba - VERY AQUAFABA",
    h1: "Quelle quantité d'aquafaba pour la mousse au chocolat ? Le calculateur",
    description: "Adaptez la recette de mousse au chocolat VERY AQUAFABA à n'importe quel nombre de portions ou de lots : aquafaba liquide, sucre, chocolat noir et équivalent en poudre et en eau.",
    lead: "Un lot de la recette de mousse au chocolat VERY AQUAFABA demande {dose} g d'aquafaba liquide, {sugar} g de sucre et {chocolate} g de chocolat noir, et donne {yield}. Indiquez combien de portions ou combien de lots il vous faut, et le calculateur adapte les quatre quantités, plus l'équivalent en poudre et en eau.",
    example: { batches: 5 },
    sections: [
      {
        id: 'reference',
        title: 'Le lot de référence, tiré de la recette',
        html: `<p>Le point de départ est la recette de mousse au chocolat publiée sur ce site : {dose} g de VERY AQUAFABA liquide, {sugar} g de sucre en poudre et {chocolate} g de couverture noire, pour {yield}. L'aquafaba monté remplace à la fois les blancs d'œufs et la crème, si bien qu'un lot tient lieu de {eggs} blancs d'œufs, à {white_liquid} g de liquide par blanc.</p>
<p>En poudre, le même lot correspond à {powder_dose} g de VERY AQUAFABA en poudre réhydratés avec {water_dose} ml d'eau : {white_powder} g de poudre + {white_water} ml d'eau = {white_total} g d'aquafaba, la même masse que le liquide, et {white_powder} g de poudre remplacent un blanc d'œuf.</p>
<p>Le stabilisant facultatif, 2 g de crème de tartre ou 1 g d'acide citrique par lot, suit le lot et reste hors du calculateur.</p>`,
      },
      {
        id: 'scaling',
        title: 'Ce qui suit les quantités et ce qui ne les suit pas',
        html: `<p>Aquafaba, sucre, chocolat, poudre et eau suivent une droite. Les deux températures et le temps de prise ne bougent pas.</p>
<ul>
<li>Le chocolat est fondu à 45 à 50 °C et refroidi à {fold_temp} °C avant l'incorporation, pour un lot comme pour dix. Un chocolat au-dessus de {fold_temp} °C fait fondre la mousse.</li>
<li>Le foisonnement jusqu'au bec d'oiseau souple prend environ {whip} minutes pour le lot de référence ; une cuve plus pleine met plus de temps, jugez donc aux pointes.</li>
<li>La mousse prend au moins {set_time} heures au réfrigérateur quel que soit le lot, et se garde {keep} jours.</li>
</ul>
<p>Grands lots ? Émulsionnez d'abord une partie du chocolat avec un peu d'aquafaba, puis incorporez le reste de la mousse. Les grandes séries restent ainsi homogènes.</p>`,
      },
      {
        id: 'packs',
        title: 'Combien de lots par conditionnement',
        html: `<p>Une fois votre nombre de lots connu, le conditionnement en découle.</p>
<table class="va-guide-grid">
<thead><tr><th scope="col">Conditionnement</th><th scope="col">Lots</th><th scope="col">Portions, environ</th></tr></thead>
<tbody>
<tr><td data-label="Conditionnement">Tetrapak de 1 L de liquide</td><td data-label="Lots">{batches_1l}</td><td data-label="Portions, environ">{pieces_1l}</td></tr>
<tr><td data-label="Conditionnement">Bag-in-box de 10 L de liquide</td><td data-label="Lots">{batches_10l}</td><td data-label="Portions, environ">{pieces_10l}</td></tr>
<tr><td data-label="Conditionnement">Sachet de 200 g de poudre</td><td data-label="Lots">{batches_200g}</td><td data-label="Portions, environ">{pieces_200g}</td></tr>
<tr><td data-label="Conditionnement">Sac de 3 kg de poudre</td><td data-label="Lots">{batches_3kg}</td><td data-label="Portions, environ">{pieces_3kg}</td></tr>
</tbody>
</table>
<p>Liquide ou poudre se décide dans le <a href="{guide_href}">guide de la mousse au chocolat</a> : cela dépend de la fréquence à laquelle vous faites de la mousse et des {opened_days} jours qu'un conditionnement de liquide ouvert tient au réfrigérateur.</p>`,
      },
      {
        id: 'example',
        title: 'Exemple chiffré : {ex_pieces} portions pour un banquet',
        html: `<p>Une cuisine a besoin de {ex_pieces} portions de mousse pour un banquet. Cela fait {ex_batches} lots de la recette de référence.</p>
<ul>
<li>Liquide : {ex_dose} g de VERY AQUAFABA, {ex_sugar} g de sucre en poudre et {ex_chocolate} g de chocolat noir, à la place de {ex_eggs} blancs d'œufs.</li>
<li>Poudre : {ex_powder} g de poudre réhydratés avec {ex_water} ml d'eau, puis les mêmes sucre et chocolat.</li>
<li>Réfrigérateur : {ex_pieces} coupes demandent de la place au froid pendant au moins {set_time} heures avant le service.</li>
</ul>
<p>Ayez tout le chocolat refroidi à {fold_temp} °C avant de monter la première cuve : la mousse ne doit pas l'attendre.</p>`,
      },
    ],
    faq: [
      { q: 'Combien de portions donne un lot ?', a: "{yield}, à partir de {dose} g d'aquafaba, {sugar} g de sucre et {chocolate} g de chocolat noir. Des coupes plus petites donnent plus de portions ; les quantités ne changent pas." },
      { q: "Quelle quantité d'aquafaba remplace un blanc d'œuf ?", a: "{white_liquid} g de liquide, ou {white_powder} g de poudre réhydratés avec {white_water} ml d'eau. Un lot de mousse remplace {eggs} blancs d'œufs et la crème." },
      { q: 'Puis-je diviser le lot par deux ?', a: "Oui. {half_dose} g d'aquafaba, {half_sugar} g de sucre et {half_chocolate} g de chocolat donnent environ {half_yield} portions. Prenez la plus petite cuve de votre batteur pour un petit volume." },
      { q: 'La température du chocolat change-t-elle avec la taille du lot ?', a: "Non. Refroidissez-le à {fold_temp} °C avant l'incorporation, quelle que soit la quantité. Un chocolat au-dessus de {fold_temp} °C fait fondre la mousse, qui retombe quand il entre." },
      { q: "Combien d'eau ajouter à la poudre ?", a: "{white_water} ml pour {white_powder} g de poudre. Pour un lot de mousse, cela fait {powder_dose} g de poudre et {water_dose} ml d'eau ; le calculateur adapte les deux." },
      { q: "D'où viennent les quantités de chocolat et de sucre ?", a: "De la recette de mousse au chocolat de ce site : {chocolate} g de couverture noire et {sugar} g de sucre en poudre pour {dose} g d'aquafaba. La méthode complète est dans la [recette de mousse au chocolat]({recipe_href})." },
    ],
  },

  mayonnaise: {
    title: "Mayonnaise végane à l'aquafaba : calculateur de quantités - VERY AQUAFABA",
    h1: "Quelle quantité d'aquafaba pour la mayonnaise végane ? Le calculateur",
    description: "Adaptez la recette de mayonnaise VERY AQUAFABA aux grammes de mayonnaise ou au nombre de lots qu'il vous faut : aquafaba, huile, moutarde, sel, jus de citron et équivalent en poudre et en eau.",
    lead: "Un lot de la recette de mayonnaise VERY AQUAFABA demande {dose} g d'aquafaba liquide et {oil} g d'huile et donne {yield} de mayonnaise. Indiquez combien de grammes de mayonnaise ou combien de lots il vous faut, et le calculateur adapte l'aquafaba, l'huile, la moutarde, le sel, le jus de citron et l'équivalent en poudre et en eau.",
    example: { batches: 4 },
    sections: [
      {
        id: 'reference',
        title: 'Le lot de référence, tiré de la recette',
        html: `<p>Le point de départ est la recette de mayonnaise publiée sur ce site : {dose} g de VERY AQUAFABA liquide, {mustard} g de moutarde de Dijon, {salt} g de sel, {oil} g d'huile neutre et {lemon} g de jus de citron ou de vinaigre de vin blanc, pour {yield}. Ici, l'aquafaba tient lieu du jaune d'œuf, pas du blanc : rien n'est monté, c'est une émulsion froide, construite par cisaillement. Le rapport huile sur aquafaba est de {oil_ratio} en poids.</p>
<p>En poudre, le même lot correspond à {powder_dose} g de VERY AQUAFABA en poudre réhydratés avec {water_dose} ml d'eau, sur une balance de précision : {white_powder} g de poudre + {white_water} ml d'eau = {white_total} g d'aquafaba, la même masse que le liquide.</p>`,
      },
      {
        id: 'scaling',
        title: 'Ce qui suit les quantités et ce qui ne les suit pas',
        html: `<p>Aquafaba, huile, moutarde, sel, jus de citron, poudre et eau suivent une droite. Deux choses ne bougent pas.</p>
<ul>
<li>La température. L'aquafaba entre froid, à {chill} °C, pour un lot comme pour dix. Un aquafaba tiède donne une émulsion lente et instable.</li>
<li>Le cisaillement. L'huile entre en filet fin et régulier, mixeur à pleine vitesse. Les grands lots demandent un mixeur à fort cisaillement pour maîtriser la taille des gouttelettes et garder l'émulsion stable.</li>
</ul>
<p>Faite dans de bonnes conditions d'hygiène et réfrigérée aussitôt, la mayonnaise se garde jusqu'à {keep} jours au réfrigérateur, quelle que soit la taille du lot.</p>`,
      },
      {
        id: 'packs',
        title: 'Combien de lots par conditionnement',
        html: `<p>Une fois votre nombre de lots connu, le conditionnement en découle.</p>
<table class="va-guide-grid">
<thead><tr><th scope="col">Conditionnement</th><th scope="col">Lots</th><th scope="col">Mayonnaise, environ</th></tr></thead>
<tbody>
<tr><td data-label="Conditionnement">Tetrapak de 1 L de liquide</td><td data-label="Lots">{batches_1l}</td><td data-label="Mayonnaise, environ">{pieces_1l} g</td></tr>
<tr><td data-label="Conditionnement">Bag-in-box de 10 L de liquide</td><td data-label="Lots">{batches_10l}</td><td data-label="Mayonnaise, environ">{pieces_10l} g</td></tr>
<tr><td data-label="Conditionnement">Sachet de 200 g de poudre</td><td data-label="Lots">{batches_200g}</td><td data-label="Mayonnaise, environ">{pieces_200g} g</td></tr>
<tr><td data-label="Conditionnement">Sac de 3 kg de poudre</td><td data-label="Lots">{batches_3kg}</td><td data-label="Mayonnaise, environ">{pieces_3kg} g</td></tr>
</tbody>
</table>
<p>Liquide ou poudre se décide dans le <a href="{guide_href}">guide de la mayonnaise végane</a> : cela dépend de la fréquence à laquelle vous faites de la mayonnaise et des {opened_days} jours qu'un conditionnement de liquide ouvert tient au réfrigérateur.</p>`,
      },
      {
        id: 'example',
        title: 'Exemple chiffré : {ex_batches} lots pour une cuisine de restauration',
        html: `<p>Une cuisine a besoin d'environ {ex_pieces} g de mayonnaise pour la semaine. Cela fait {ex_batches} lots de la recette de référence.</p>
<ul>
<li>Liquide : {ex_dose} g de VERY AQUAFABA, {ex_oil} g d'huile, {ex_mustard} g de moutarde, {ex_salt} g de sel et {ex_lemon} g de jus de citron ou de vinaigre, soit autant d'aquafaba que pour {ex_eggs} blancs d'œufs.</li>
<li>Poudre : {ex_powder} g de poudre réhydratés avec {ex_water} ml d'eau, puis les mêmes huile, moutarde, sel et citron.</li>
<li>Matériel : à ce volume, passez au mixeur à fort cisaillement et versez l'huile en filet fin et régulier.</li>
</ul>
<p>Transvasez dans des récipients propres et réfrigérez aussitôt : les {keep} jours de conservation commencent là.</p>`,
      },
    ],
    faq: [
      { q: 'Quelle quantité de mayonnaise donne un lot ?', a: "{yield}, à partir de {dose} g d'aquafaba et {oil} g d'huile. Indiquez les grammes qu'il vous faut et le calculateur donne les lots et chaque ingrédient." },
      { q: "Quelle quantité d'aquafaba remplace l'œuf dans la mayonnaise ?", a: "Dans cette recette, l'aquafaba tient lieu du jaune : {dose} g de liquide pour {oil} g d'huile, un rapport de {oil_ratio} en poids. En poudre, {powder_dose} g réhydratés avec {water_dose} ml d'eau." },
      { q: 'Puis-je diviser le lot par deux ?', a: "Oui. {half_dose} g d'aquafaba et {half_oil} g d'huile donnent environ {half_yield} g de mayonnaise. Prenez un récipient haut et étroit pour que le mixeur plongeant garde un cisaillement élevé sur un petit volume." },
      { q: "L'huile entre-t-elle plus vite sur un grand lot ?", a: "Non. L'huile entre toujours en filet fin et régulier, mixeur à pleine vitesse. Si l'émulsion ne démarre jamais, l'huile est entrée trop vite ou le cisaillement était trop faible." },
      { q: "Combien d'eau ajouter à la poudre ?", a: "{white_water} ml pour {white_powder} g de poudre. Pour un lot de mayonnaise, cela fait {powder_dose} g de poudre et {water_dose} ml d'eau, pesés sur une balance de précision ; le calculateur adapte les deux." },
      { q: "D'où viennent les quantités d'huile et de moutarde ?", a: "De la recette de mayonnaise de ce site : {oil} g d'huile neutre, {mustard} g de moutarde de Dijon, {salt} g de sel et {lemon} g de jus de citron ou de vinaigre pour {dose} g d'aquafaba. La méthode complète est dans la [recette de mayonnaise]({recipe_href})." },
    ],
  },

  baking: {
    title: "Calculateur de substitution des œufs à l'aquafaba en pâtisserie - VERY AQUAFABA",
    h1: "Quelle quantité d'aquafaba remplace les œufs de votre recette ? Le calculateur de substitution",
    description: "Indiquez les œufs entiers, les blancs et les jaunes de votre recette et obtenez le VERY AQUAFABA liquide ou en poudre qui les remplace, d'après les équivalences de la page Produits.",
    lead: "En pâtisserie, il n'y a pas de dose unique : la quantité suit les œufs de votre propre recette. {egg_liquid} g de VERY AQUAFABA liquide remplacent un œuf entier et {white_liquid} g remplacent un blanc d'œuf. Indiquez les œufs de votre formule, et le calculateur donne le liquide, la poudre avec son eau et l'huile à ajouter quand vous remplacez des jaunes.",
    example: { eggs: 3, whites: 2 },
    sections: [
      {
        id: 'rule',
        title: 'Les équivalences derrière le calculateur',
        html: `<p>Les chiffres viennent de la page Produits et du guide de pâtisserie de ce site. Un œuf entier = {egg_liquid} g d'aquafaba liquide. Un blanc d'œuf = {white_liquid} g de liquide, ou {white_powder} g de poudre réhydratés avec {white_water} ml d'eau ({white_total} g d'aquafaba). Un jaune d'œuf = {yolk_liquid} g d'aquafaba plus {yolk_oil} g d'huile.</p>
<p>La poudre pour un œuf entier suit le même rapport : {egg_powder} g de poudre réhydratés avec {egg_water} ml d'eau. Le calculateur applique ces quatre équivalences aux œufs que vous indiquez et les additionne.</p>`,
      },
      {
        id: 'how',
        title: "Comment l'aquafaba entre dans la préparation",
        html: `<p>L'aquafaba remplit trois fonctions en pâtisserie : il emprisonne l'air, il lie et il retient l'humidité. Il travaille donc de deux façons. Montez-le quand il remplace des blancs d'œufs. Versez-le tel quel quand il remplace le liant et l'humidité des œufs entiers.</p>
<ul>
<li>Génoises et biscuits : monté à {chill} °C, puis incorporé délicatement et sans attendre.</li>
<li>Gâteaux, cookies et muffins : mélangé au sucre avant de rencontrer la matière grasse.</li>
<li>Cookies et brownies : ajouté directement, non monté, pour le liant et l'humidité.</li>
<li>Brioche et pains sucrés : non monté, avec les liquides de la pâte.</li>
</ul>
<p>Vous remplacez des œufs entiers ? L'aquafaba apporte plus d'eau que l'œuf. Réduisez légèrement le lait ou l'eau, ou augmentez les ingrédients secs, et cuisez à cœur. Ne remplacer que les blancs ne demande normalement aucun ajustement. Le <a href="{guide_href}">guide de pâtisserie</a> reprend chaque cas.</p>`,
      },
      {
        id: 'packs',
        title: "Combien d'œufs remplace un conditionnement",
        html: `<p>Une fois que vous savez combien d'œufs votre production remplace, le conditionnement en découle.</p>
<table class="va-guide-grid">
<thead><tr><th scope="col">Conditionnement</th><th scope="col">Œufs entiers</th><th scope="col">Blancs d'œufs</th></tr></thead>
<tbody>
<tr><td data-label="Conditionnement">Tetrapak de 1 L de liquide</td><td data-label="Œufs entiers">{eggs_1l}</td><td data-label="Blancs d'œufs">{whites_1l}</td></tr>
<tr><td data-label="Conditionnement">Bag-in-box de 10 L de liquide</td><td data-label="Œufs entiers">{eggs_10l}</td><td data-label="Blancs d'œufs">{whites_10l}</td></tr>
<tr><td data-label="Conditionnement">Sachet de 200 g de poudre</td><td data-label="Œufs entiers">{eggs_200g}</td><td data-label="Blancs d'œufs">{whites_200g}</td></tr>
<tr><td data-label="Conditionnement">Sac de 3 kg de poudre</td><td data-label="Œufs entiers">{eggs_3kg}</td><td data-label="Blancs d'œufs">{whites_3kg}</td></tr>
</tbody>
</table>
<p>Non ouverts, les deux formats se conservent au moins {unopened_months} mois à température ambiante. Un conditionnement de liquide ouvert tient {opened_days} jours au réfrigérateur ; un sachet de poudre ouvert doit seulement rester sec et fermé.</p>`,
      },
      {
        id: 'example',
        title: "Exemple chiffré : une recette avec {ex_eggs} œufs et {ex_whites} blancs d'œufs",
        html: `<p>Une formule de gâteau demande {ex_eggs} œufs entiers et {ex_whites} blancs d'œufs.</p>
<ul>
<li>Liquide : {ex_liquid} g de VERY AQUAFABA au total. La part des blancs est montée à {chill} °C ; la part des œufs entiers entre telle quelle, avec le sucre avant la matière grasse.</li>
<li>Poudre : {ex_powder} g de poudre réhydratés avec {ex_water} ml d'eau, puis utilisés de la même façon.</li>
<li>Ajustement : les œufs entiers sont remplacés, donc réduisez légèrement le lait ou l'eau, ou ajoutez des ingrédients secs, et cuisez à cœur.</li>
</ul>`,
      },
    ],
    faq: [
      { q: "Quelle quantité d'aquafaba remplace un œuf entier ?", a: "{egg_liquid} g de VERY AQUAFABA liquide, ou {egg_powder} g de poudre réhydratés avec {egg_water} ml d'eau. Les œufs entiers apportent de l'eau avec eux : réduisez légèrement les autres liquides." },
      { q: "Quelle quantité d'aquafaba remplace un blanc d'œuf ?", a: "{white_liquid} g de liquide, ou {white_powder} g de poudre réhydratés avec {white_water} ml d'eau. Ne remplacer que les blancs ne demande normalement aucun autre ajustement." },
      { q: "L'aquafaba peut-il remplacer le jaune ?", a: "Pour le liant et le moelleux, {yolk_liquid} g d'aquafaba plus {yolk_oil} g d'huile tiennent lieu d'un jaune. Le calculateur ajoute l'huile quand vous indiquez des jaunes." },
      { q: 'Faut-il le monter ou le verser ?', a: "Montez-le, refroidi à {chill} °C, quand il remplace des blancs d'œufs dans une génoise ou une pâte riche en sucre. Versez-le non monté quand il remplace le liant et l'humidité des œufs entiers dans les cookies, les brownies et les pâtes." },
      { q: "Pourquoi ma pâte est-elle trop liquide après avoir remplacé les œufs ?", a: "Les œufs entiers ont été remplacés un pour un et l'eau n'a pas été réduite. Réduisez légèrement le lait ou l'eau, ou ajoutez des ingrédients secs, et cuisez à cœur." },
      { q: "D'où viennent ces équivalences ?", a: "De la page Produits et du [guide de la pâtisserie à l'aquafaba]({recipe_href}) de ce site : {egg_liquid} g par œuf entier, {white_liquid} g par blanc d'œuf et {white_powder} g de poudre par blanc d'œuf." },
    ],
  },

  cocktails: {
    title: "Calculateur de quantités d'aquafaba pour cocktails : sours par conditionnement - VERY AQUAFABA",
    h1: "Quelle quantité d'aquafaba par cocktail et par service ? Le calculateur",
    description: "Adaptez le whiskey sour VERY AQUAFABA au nombre de cocktails de votre service : aquafaba par verre, whisky, citron et sirop, et équivalent en poudre et en eau.",
    lead: "Un sour à l'aquafaba demande {dose} g de VERY AQUAFABA liquide bien froid à la place du blanc d'œuf, avec {whiskey} ml de whisky, {lemon_juice} ml de jus de citron et {syrup} ml de sirop de sucre. Indiquez le nombre de cocktails de votre service, et le calculateur adapte l'aquafaba, les trois autres ingrédients et l'équivalent en poudre et en eau.",
    example: { batches: 40 },
    sections: [
      {
        id: 'reference',
        title: 'Le verre de référence, tiré de la recette',
        html: `<p>Le point de départ est la recette de whiskey sour publiée sur ce site : {whiskey} ml de whisky, {lemon_juice} ml de jus de citron frais, {syrup} ml de sirop de sucre et {dose} g de VERY AQUAFABA bien froid, pour {yield}. Rien ne change dans la recette, sauf un ingrédient : l'aquafaba remplace le blanc d'œuf.</p>
<p>En poudre, un verre correspond à {powder_dose} g de VERY AQUAFABA en poudre réhydratés avec {water_dose} ml d'eau. La règle par blanc d'œuf : {white_powder} g de poudre + {white_water} ml d'eau = {white_total} g d'aquafaba, la même masse que le liquide. Préparez-le avant le service et gardez-le au froid.</p>`,
      },
      {
        id: 'scaling',
        title: 'Ce qui suit les quantités et ce qui ne les suit pas',
        html: `<p>Aquafaba, whisky, citron, sirop, poudre et eau suivent une droite avec le nombre de verres. Les shakes ne bougent pas.</p>
<ul>
<li>Chaque verre est shaké à la commande : un dry shake de {dry_shake} secondes sans glace, où la mousse se forme, puis {wet_shake} secondes avec glace pour refroidir et diluer.</li>
<li>Service chargé ? Préparez à l'avance le whisky, le citron et le sirop. Ajoutez l'aquafaba au shake, jamais dans le batch : un aquafaba mis dans le pré-batch ne donne plus de hauteur au milieu du service.</li>
<li>Pesez ou jiggez {dose} g à chaque fois. C'est le versage à l'œil qui rend les verres inégaux.</li>
</ul>`,
      },
      {
        id: 'packs',
        title: 'Combien de cocktails par conditionnement',
        html: `<p>Une fois votre nombre de sours par semaine connu, le conditionnement en découle.</p>
<table class="va-guide-grid">
<thead><tr><th scope="col">Conditionnement</th><th scope="col">Cocktails</th></tr></thead>
<tbody>
<tr><td data-label="Conditionnement">Tetrapak de 1 L de liquide</td><td data-label="Cocktails">{batches_1l}</td></tr>
<tr><td data-label="Conditionnement">Bag-in-box de 10 L de liquide</td><td data-label="Cocktails">{batches_10l}</td></tr>
<tr><td data-label="Conditionnement">Sachet de 200 g de poudre</td><td data-label="Cocktails">{batches_200g}</td></tr>
<tr><td data-label="Conditionnement">Sac de 3 kg de poudre</td><td data-label="Cocktails">{batches_3kg}</td></tr>
</tbody>
</table>
<p>Liquide ou poudre se décide dans le <a href="{guide_href}">guide des cocktails</a> : comptez vos sours. Si un conditionnement de 1 L ouvert est vide en {opened_days} jours, le liquide se verse directement dans le shaker ; sinon, la poudre ne s'altère pas une fois le sachet ouvert.</p>`,
      },
      {
        id: 'example',
        title: 'Exemple chiffré : {ex_batches} sours sur un service',
        html: `<p>Un bar sert {ex_batches} sours un samedi soir.</p>
<ul>
<li>Liquide : {ex_dose} g de VERY AQUAFABA, {ex_whiskey} ml de whisky, {ex_lemon_juice} ml de jus de citron et {ex_syrup} ml de sirop de sucre.</li>
<li>Poudre : {ex_powder} g de poudre réhydratés avec {ex_water} ml d'eau avant le service, au froid.</li>
<li>Pré-batch : le whisky, le citron et le sirop se préparent à l'avance ; l'aquafaba entre dans le shaker verre par verre, au shake.</li>
</ul>`,
      },
    ],
    faq: [
      { q: "Quelle quantité d'aquafaba par cocktail ?", a: "{dose} g d'aquafaba bien froid par verre, à la place du blanc d'œuf. Un Tetrapak de 1 L fait {batches_1l} cocktails et un sachet de 200 g de poudre en fait {batches_200g}." },
      { q: "Puis-je mettre l'aquafaba dans le pré-batch ?", a: "Non. Préparez à l'avance le whisky, le citron et le sirop seulement, et ajoutez l'aquafaba verre par verre, au shake. Dans le pré-batch, il perd sa hauteur au milieu du service." },
      { q: "Combien d'eau ajouter à la poudre ?", a: "{white_water} ml pour {white_powder} g de poudre. Pour un verre, cela fait {powder_dose} g de poudre et {water_dose} ml d'eau ; pour un service, le calculateur adapte les deux." },
      { q: 'Un service plus chargé change-t-il le shake ?', a: "Non. Chaque verre reçoit son dry shake de {dry_shake} secondes et son shake avec glace de {wet_shake} secondes. Le nombre de verres change le stock, pas la méthode." },
      { q: "L'aquafaba change-t-il le goût du cocktail ?", a: "Non. Il porte la mousse et la texture soyeuse. Le goût reste celui de votre whisky, de votre citron et de votre sirop." },
      { q: "D'où viennent les quantités du verre ?", a: "De la recette de whiskey sour de ce site : {whiskey} ml de whisky, {lemon_juice} ml de jus de citron, {syrup} ml de sirop de sucre et {dose} g d'aquafaba par verre. La méthode complète est dans la [recette de whiskey sour]({recipe_href})." },
    ],
  },

  macarons: {
    title: "Calculateur de quantités pour les macarons à l'aquafaba - VERY AQUAFABA",
    h1: "Quelle quantité d'aquafaba pour les macarons ? Le calculateur",
    description: "Adaptez la recette de macarons VERY AQUAFABA à n'importe quel nombre de macarons ou de lots : aquafaba liquide, sucre en poudre, poudre d'amande, sucre glace et équivalent en poudre et en eau.",
    lead: "Un lot de la recette de macarons VERY AQUAFABA demande {dose} g d'aquafaba liquide, {sugar} g de sucre en poudre, {almond} g de poudre d'amande et {icing_sugar} g de sucre glace, et donne {yield}. Indiquez combien de macarons ou combien de lots il vous faut, et le calculateur adapte le tout, plus l'équivalent en poudre et en eau.",
    example: { batches: 5 },
    sections: [
      {
        id: 'reference',
        title: 'Le lot de référence, tiré de la recette',
        html: `<p>Le point de départ est la recette de macarons publiée sur ce site : {dose} g de VERY AQUAFABA liquide, {sugar} g de sucre en poudre, {almond} g de poudre d'amande extra fine et {icing_sugar} g de sucre glace, pour {yield}. L'aquafaba ne remplace que les blancs d'œufs : la poudre d'amande, le sucre glace et le sucre en poudre de votre formule restent tels quels. Un lot tient lieu de {eggs} blancs d'œufs, à {white_liquid} g de liquide par blanc.</p>
<p>En poudre, le même lot correspond à {powder_dose} g de VERY AQUAFABA en poudre réhydratés avec {water_dose} ml d'eau : {white_powder} g de poudre + {white_water} ml d'eau = {white_total} g d'aquafaba, la même masse que le liquide. Préparez-le et refroidissez-le avant de monter.</p>`,
      },
      {
        id: 'scaling',
        title: 'Ce qui suit les quantités et ce qui ne les suit pas',
        html: `<p>Aquafaba, les trois sucres et poudres, la poudre et l'eau suivent une droite. Le reste, les temps et la température, ne bouge pas.</p>
<ul>
<li>Le croûtage : les ronds pochés reposent à température ambiante jusqu'à ce qu'une peau sèche se forme, {rest} minutes selon l'humidité, quel que soit le lot.</li>
<li>La cuisson : {bake} °C, sans chaleur tournante, {bake_time} minutes par plaque. Plus de macarons, c'est plus de plaques.</li>
<li>La maturation : les coques assemblées et garnies reposent {mature} heures au réfrigérateur avant le service.</li>
</ul>
<p>Vous produisez en série industrielle ? Maintenez la concentration de l'aquafaba à {concentration} g/ml pour des coques identiques d'une série à l'autre.</p>`,
      },
      {
        id: 'packs',
        title: 'Combien de lots par conditionnement',
        html: `<p>Une fois votre nombre de lots connu, le conditionnement en découle.</p>
<table class="va-guide-grid">
<thead><tr><th scope="col">Conditionnement</th><th scope="col">Lots</th><th scope="col">Macarons, environ</th></tr></thead>
<tbody>
<tr><td data-label="Conditionnement">Tetrapak de 1 L de liquide</td><td data-label="Lots">{batches_1l}</td><td data-label="Macarons, environ">{pieces_1l}</td></tr>
<tr><td data-label="Conditionnement">Bag-in-box de 10 L de liquide</td><td data-label="Lots">{batches_10l}</td><td data-label="Macarons, environ">{pieces_10l}</td></tr>
<tr><td data-label="Conditionnement">Sachet de 200 g de poudre</td><td data-label="Lots">{batches_200g}</td><td data-label="Macarons, environ">{pieces_200g}</td></tr>
<tr><td data-label="Conditionnement">Sac de 3 kg de poudre</td><td data-label="Lots">{batches_3kg}</td><td data-label="Macarons, environ">{pieces_3kg}</td></tr>
</tbody>
</table>
<p>Liquide ou poudre se décide dans le <a href="{guide_href}">guide des macarons</a> : cela dépend de la fréquence à laquelle vous pochez des coques et des {opened_days} jours qu'un conditionnement de liquide ouvert tient au réfrigérateur.</p>`,
      },
      {
        id: 'example',
        title: 'Exemple chiffré : {ex_pieces} macarons pour un mariage',
        html: `<p>Une pâtisserie prend une commande de {ex_pieces} macarons garnis. Cela fait {ex_batches} lots de la recette de référence.</p>
<ul>
<li>Liquide : {ex_dose} g de VERY AQUAFABA, {ex_sugar} g de sucre en poudre, {ex_almond} g de poudre d'amande et {ex_icing_sugar} g de sucre glace, à la place de {ex_eggs} blancs d'œufs.</li>
<li>Poudre : {ex_powder} g de poudre réhydratés avec {ex_water} ml d'eau, puis les mêmes sucres et la même poudre d'amande.</li>
<li>Planning : les coques cuisent {bake_time} minutes par plaque à {bake} °C, puis sont assemblées, garnies et mises à maturer {mature} heures avant le jour J.</li>
</ul>
<p>Tamisez et chemisez les plaques d'abord, montez en dernier : la mousse doit survivre à l'incorporation et au croûtage, elle ne doit donc pas attendre pendant que le mélange sec se prépare.</p>`,
      },
    ],
    faq: [
      { q: 'Combien de macarons donne un lot ?', a: "{yield}, à partir de {dose} g d'aquafaba, {sugar} g de sucre en poudre, {almond} g de poudre d'amande et {icing_sugar} g de sucre glace. Pochez des ronds de 3 à 4 cm." },
      { q: "Quelle quantité d'aquafaba remplace un blanc d'œuf ?", a: "{white_liquid} g de liquide, ou {white_powder} g de poudre réhydratés avec {white_water} ml d'eau. Un lot de macarons remplace {eggs} blancs d'œufs." },
      { q: 'Puis-je diviser le lot par deux ?', a: "Oui. {half_dose} g d'aquafaba, {half_sugar} g de sucre en poudre, {half_almond} g de poudre d'amande et {half_icing_sugar} g de sucre glace donnent environ {half_yield} macarons. Prenez la plus petite cuve de votre batteur." },
      { q: 'Un lot plus grand croûte-t-il ou cuit-il plus longtemps ?', a: "Non. Chaque plaque croûte jusqu'à ce qu'une peau sèche se forme, {rest} minutes selon l'humidité, et cuit {bake_time} minutes à {bake} °C. Un lot plus grand, c'est plus de plaques, pas des temps plus longs." },
      { q: "Combien d'eau ajouter à la poudre ?", a: "{white_water} ml pour {white_powder} g de poudre. Pour un lot de macarons, cela fait {powder_dose} g de poudre et {water_dose} ml d'eau ; le calculateur adapte les deux." },
      { q: "D'où viennent les quantités d'amande et de sucre ?", a: "De la recette de macarons de ce site : {almond} g de poudre d'amande, {icing_sugar} g de sucre glace et {sugar} g de sucre en poudre pour {dose} g d'aquafaba. La méthode complète est dans la [recette de macarons]({recipe_href})." },
    ],
  },
};
