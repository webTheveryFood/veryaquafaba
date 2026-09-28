// Calculateur de quantités, français. Même structure, mêmes {tokens} et mêmes balises HTML
// que calculator.en.js (vérifié par scripts/applications/check-guides.mjs). Pas de tiret long.
// Les formulations et les chiffres suivent les guides et les recettes du site.
export default {
  meringue: {
    title: "Calculateur meringue à l'aquafaba - VERY AQUAFABA",
    h1: "Quelle quantité d'aquafaba pour la meringue ? Le calculateur",
    description: "Adaptez la recette de meringue VERY AQUAFABA au nombre de meringues voulu : aquafaba liquide, sucre, et l'équivalent en poudre et en eau.",
    lead: "Chaque préparation de meringue commence par la même question : combien d'aquafaba, et combien de sucre ? Indiquez au calculateur le nombre de meringues qu'il vous faut et il répond aux deux, en liquide ou en poudre avec son eau, à partir de la recette VERY AQUAFABA.",
    example: { batches: 5 },
    sections: [
      {
        id: 'scaling',
        title: 'Ce qui change avec une préparation plus grande, et ce qui ne change pas',
        html: `<p>Aquafaba, sucre, poudre et eau suivent une droite : deux fois plus de meringues, deux fois plus de chaque. Le stabilisant facultatif aussi, 2 g de crème de tartre ou 1 g d'acide citrique par préparation, que le calculateur laisse de côté parce que beaucoup de cuisines s'en passent. Trois choses ne suivent pas.</p>
<ul>
<li>Le temps de foisonnement. La préparation de référence atteint les pics souples en {whip} minutes à grande vitesse. Une cuve plus pleine met plus de temps à monter : jugez la mousse à ses pics, pas au chronomètre.</li>
<li>Le séchage. Les plaques sèchent à {bake} °C en chaleur statique pendant {bake_time} heures, quelle que soit la taille de la préparation. Plus de meringues, c'est plus de plaques, pas un four plus chaud.</li>
<li>La température. L'aquafaba entre dans la cuve à {chill} °C, et la poudre reconstituée est refroidie au même point, pour une préparation comme pour dix.</li>
</ul>
<p>Montez ce que la cuve de votre batteur contient sans forcer et pochez chaque cuve aussitôt : la mousse d'aquafaba perd du volume si elle attend pendant que la suivante monte.</p>`,
      },
      {
        id: 'packs',
        title: 'Combien de préparations de meringue tirerez-vous d\'un pack ?',
        html: `<p>Une fois vos préparations par semaine connues, voici ce que vaut chaque pack.</p>
<table class="va-guide-grid">
<thead><tr><th scope="col">Pack</th><th scope="col">Préparations</th><th scope="col">Meringues, environ</th></tr></thead>
<tbody>
<tr><td data-label="Pack">Tetrapak de 1 L de liquide</td><td data-label="Préparations">{batches_1l}</td><td data-label="Meringues, environ">{pieces_1l}</td></tr>
<tr><td data-label="Pack">Bag-in-box de 10 L de liquide</td><td data-label="Préparations">{batches_10l}</td><td data-label="Meringues, environ">{pieces_10l}</td></tr>
<tr><td data-label="Pack">Sachet de 200 g de poudre</td><td data-label="Préparations">{batches_200g}</td><td data-label="Meringues, environ">{pieces_200g}</td></tr>
<tr><td data-label="Pack">Sac de 3 kg de poudre</td><td data-label="Préparations">{batches_3kg}</td><td data-label="Meringues, environ">{pieces_3kg}</td></tr>
</tbody>
</table>
<p>Acheter du liquide ou de la poudre est une autre question, et elle dépend de la fréquence à laquelle vous remplissez le four : un Tetrapak ouvert tient {opened_days} jours au réfrigérateur, un sachet ouvert attend. Le <a href="{guide_href}">guide de la meringue</a> tranche.</p>`,
      },
      {
        id: 'example',
        title: 'Exemple : préparer {ex_pieces} meringues à l\'aquafaba',
        html: `<p>Disons qu'un buffet approche et qu'il vous faut {ex_pieces} petites meringues. Cela fait {ex_batches} préparations de la recette, et voici ce que cela donne :</p>
<ul>
<li>Liquide : {ex_dose} g de VERY AQUAFABA et {ex_sugar} g de sucre en poudre, à la place de {ex_eggs} blancs d'œufs.</li>
<li>Poudre : {ex_powder} g de poudre reconstitués avec {ex_water} ml d'eau, puis les mêmes {ex_sugar} g de sucre.</li>
<li>Four : {ex_batches} préparations pochées à 3 à 4 cm remplissent plusieurs plaques, et chaque plaque sèche les {bake_time} heures complètes à {bake} °C.</li>
</ul>
<p>Monté en une seule fois, ce volume demande un grand batteur mélangeur. Avec un batteur de table, montez-le en {ex_batches} préparations séparées et pochez chacune avant de lancer la suivante.</p>`,
      },
    ],
    faq: [
      { q: 'Combien de meringues donne une préparation ?', a: "{yield} de 3 à 4 cm, à partir de {dose} g d'aquafaba et {sugar} g de sucre. Pochez plus petit et le nombre augmente ; les quantités ne changent pas." },
      { q: "Quelle quantité d'aquafaba remplace un blanc d'œuf ?", a: "{white_liquid} g de liquide, ou {white_powder} g de poudre reconstitués avec {white_water} ml d'eau. Une préparation de meringue remplace {eggs} blancs d'œufs." },
      { q: 'Puis-je diviser la préparation par deux ?', a: "Oui. {half_dose} g d'aquafaba et {half_sugar} g de sucre donnent environ {half_yield} meringues. Un petit volume dans une grande cuve met plus de temps à monter : prenez la plus petite cuve de votre batteur." },
      { q: 'Une préparation double demande-t-elle deux fois plus de temps de foisonnement ?', a: "Non. Elle demande plus de temps qu'une préparation simple, mais pas le double. Montez jusqu'aux pics souples, atteints en {whip} minutes pour la préparation de référence, et n'ajoutez le sucre qu'à ce moment-là." },
      { q: "Combien d'eau dois-je ajouter à la poudre ?", a: "{white_water} ml pour {white_powder} g de poudre. Pour une préparation de meringue, cela fait {powder_dose} g de poudre et {water_dose} ml d'eau ; le calculateur adapte les deux." },
      { q: "D'où vient la quantité de sucre ?", a: "De la recette de meringue de ce site : à poids égal, {sugar} g de sucre pour {dose} g d'aquafaba. La méthode complète est dans la [recette de meringue]({recipe_href})." },
    ],
  },

  'chocolate-mousse': {
    title: 'Calculateur mousse au chocolat aquafaba - VERY AQUAFABA',
    h1: "Quelle quantité d'aquafaba pour la mousse au chocolat ? Le calculateur",
    description: "Adaptez la mousse au chocolat VERY AQUAFABA au nombre de portions voulu : aquafaba liquide, sucre, chocolat noir, et l'équivalent en poudre et en eau.",
    lead: "Dans cette mousse, l'aquafaba monté fait le travail des blancs d'œufs et de la crème, si bien que sa quantité fait l'essentiel du résultat. Indiquez au calculateur le nombre de portions qu'il vous faut et il vous donne l'aquafaba, le chocolat et le sucre qui vont avec, en liquide ou en poudre avec son eau, d'après la recette VERY AQUAFABA.",
    example: { batches: 5 },
    sections: [
      {
        id: 'scaling',
        title: 'Ce qui change quand vous augmentez la mousse, et ce qui ne change pas',
        html: `<p>Aquafaba, sucre, chocolat, poudre et eau suivent une droite, tout comme le stabilisant facultatif, 2 g de crème de tartre ou 1 g d'acide citrique par préparation, que le calculateur laisse de côté. Les deux températures et le temps de prise ne suivent pas.</p>
<ul>
<li>Le chocolat est fondu à 45 à 50 °C et ramené à {fold_temp} °C avant d'être incorporé, pour une préparation comme pour dix. Au-dessus de {fold_temp} °C, le chocolat fait fondre la mousse.</li>
<li>Monter jusqu'aux pics souples prend environ {whip} minutes pour la préparation de référence ; une cuve plus pleine met plus de temps, jugez donc aux pics.</li>
<li>La mousse prend au moins {set_time} heures au réfrigérateur quelle que soit la préparation, et se garde {keep} jours.</li>
</ul>
<p>Grandes préparations ? Émulsionnez d'abord une partie du chocolat avec un peu d'aquafaba, puis incorporez le reste de la mousse. Les grandes séries restent ainsi homogènes.</p>`,
      },
      {
        id: 'packs',
        title: "Combien de portions de mousse tirerez-vous d'un pack ?",
        html: `<p>Une fois vos portions par semaine connues, voici ce que vaut chaque pack.</p>
<table class="va-guide-grid">
<thead><tr><th scope="col">Pack</th><th scope="col">Préparations</th><th scope="col">Portions, environ</th></tr></thead>
<tbody>
<tr><td data-label="Pack">Tetrapak de 1 L de liquide</td><td data-label="Préparations">{batches_1l}</td><td data-label="Portions, environ">{pieces_1l}</td></tr>
<tr><td data-label="Pack">Bag-in-box de 10 L de liquide</td><td data-label="Préparations">{batches_10l}</td><td data-label="Portions, environ">{pieces_10l}</td></tr>
<tr><td data-label="Pack">Sachet de 200 g de poudre</td><td data-label="Préparations">{batches_200g}</td><td data-label="Portions, environ">{pieces_200g}</td></tr>
<tr><td data-label="Pack">Sac de 3 kg de poudre</td><td data-label="Préparations">{batches_3kg}</td><td data-label="Portions, environ">{pieces_3kg}</td></tr>
</tbody>
</table>
<p>Acheter du liquide ou de la poudre dépend de la fréquence à laquelle la mousse est à la carte : un Tetrapak ouvert tient {opened_days} jours au réfrigérateur, un sachet ouvert attend d'une carte à l'autre. Le <a href="{guide_href}">guide de la mousse au chocolat</a> tranche.</p>`,
      },
      {
        id: 'example',
        title: 'Exemple : préparer {ex_pieces} portions de mousse pour un banquet',
        html: `<p>Disons qu'un banquet demande {ex_pieces} portions de mousse. Cela fait {ex_batches} préparations de la recette, et voici ce que cela donne :</p>
<ul>
<li>Liquide : {ex_dose} g de VERY AQUAFABA, {ex_sugar} g de sucre en poudre et {ex_chocolate} g de chocolat noir, à la place de {ex_eggs} blancs d'œufs.</li>
<li>Poudre : {ex_powder} g de poudre reconstitués avec {ex_water} ml d'eau, puis les mêmes sucre et chocolat.</li>
<li>Réfrigérateur : {ex_pieces} coupes ont besoin de place au froid pendant au moins {set_time} heures avant le service.</li>
</ul>
<p>Ayez tout le chocolat ramené à {fold_temp} °C avant de monter la première cuve : la mousse ne doit pas l'attendre.</p>`,
      },
    ],
    faq: [
      { q: 'Combien de portions donne une préparation ?', a: "{yield}, à partir de {dose} g d'aquafaba, {sugar} g de sucre et {chocolate} g de chocolat noir. Des coupes plus petites donnent plus de portions ; les quantités ne changent pas." },
      { q: "Quelle quantité d'aquafaba remplace un blanc d'œuf ?", a: "{white_liquid} g de liquide, ou {white_powder} g de poudre reconstitués avec {white_water} ml d'eau. Une préparation de mousse remplace {eggs} blancs d'œufs et la crème." },
      { q: 'Puis-je diviser la préparation par deux ?', a: "Oui. {half_dose} g d'aquafaba, {half_sugar} g de sucre et {half_chocolate} g de chocolat donnent environ {half_yield} portions. Prenez la plus petite cuve de votre batteur pour un petit volume." },
      { q: 'La température du chocolat change-t-elle avec la taille de la préparation ?', a: "Non. Ramenez-le à {fold_temp} °C avant de l'incorporer, quelle que soit la quantité. Au-dessus de {fold_temp} °C, le chocolat fait fondre la mousse, qui retombe à l'incorporation." },
      { q: "Combien d'eau dois-je ajouter à la poudre ?", a: "{white_water} ml pour {white_powder} g de poudre. Pour une préparation de mousse, cela fait {powder_dose} g de poudre et {water_dose} ml d'eau ; le calculateur adapte les deux." },
      { q: "D'où viennent les quantités de chocolat et de sucre ?", a: "De la recette de mousse au chocolat de ce site : {chocolate} g de couverture noire et {sugar} g de sucre en poudre pour {dose} g d'aquafaba. La méthode complète est dans la [recette de mousse au chocolat]({recipe_href})." },
    ],
  },

  mayonnaise: {
    title: "Calculateur mayonnaise vegan aquafaba - VERY AQUAFABA",
    h1: "Quelle quantité d'aquafaba pour la mayonnaise vegan ? Le calculateur",
    description: "Adaptez la recette de mayonnaise VERY AQUAFABA à la quantité voulue : aquafaba, huile, moutarde, sel, jus de citron, et l'équivalent en poudre.",
    lead: "La mayonnaise est un rapport avant d'être une recette : tant d'huile pour tant d'aquafaba. Indiquez au calculateur la quantité de mayonnaise qu'il vous faut et il calcule l'aquafaba et l'huile, plus la moutarde, le sel et le jus de citron, en liquide ou en poudre avec son eau, d'après la recette VERY AQUAFABA.",
    example: { batches: 4 },
    sections: [
      {
        id: 'scaling',
        title: 'Ce qui change avec une plus grande préparation de mayonnaise, et ce qui ne change pas',
        html: `<p>Aquafaba, huile, moutarde, sel, jus de citron, poudre et eau suivent une droite. Deux choses ne suivent pas.</p>
<ul>
<li>La température. L'aquafaba entre froid, à {chill} °C, pour une préparation comme pour dix. Un aquafaba tiède donne une émulsion lente et instable.</li>
<li>Le cisaillement. L'huile entre en filet fin et régulier, mixeur à pleine vitesse. Les grandes préparations demandent un mixeur à fort cisaillement pour maîtriser la taille des gouttelettes et garder l'émulsion stable.</li>
</ul>
<p>Préparée dans de bonnes conditions d'hygiène et réfrigérée aussitôt, la mayonnaise se garde jusqu'à {keep} jours au réfrigérateur, quelle que soit la taille de la préparation.</p>`,
      },
      {
        id: 'packs',
        title: "Combien de mayonnaise tirerez-vous d'un pack ?",
        html: `<p>Une fois votre quantité de mayonnaise par semaine connue, voici ce que vaut chaque pack.</p>
<table class="va-guide-grid">
<thead><tr><th scope="col">Pack</th><th scope="col">Préparations</th><th scope="col">Mayonnaise, environ</th></tr></thead>
<tbody>
<tr><td data-label="Pack">Tetrapak de 1 L de liquide</td><td data-label="Préparations">{batches_1l}</td><td data-label="Mayonnaise, environ">{pieces_1l} g</td></tr>
<tr><td data-label="Pack">Bag-in-box de 10 L de liquide</td><td data-label="Préparations">{batches_10l}</td><td data-label="Mayonnaise, environ">{pieces_10l} g</td></tr>
<tr><td data-label="Pack">Sachet de 200 g de poudre</td><td data-label="Préparations">{batches_200g}</td><td data-label="Mayonnaise, environ">{pieces_200g} g</td></tr>
<tr><td data-label="Pack">Sac de 3 kg de poudre</td><td data-label="Préparations">{batches_3kg}</td><td data-label="Mayonnaise, environ">{pieces_3kg} g</td></tr>
</tbody>
</table>
<p>Une préparation utilise si peu d'aquafaba que même un Tetrapak va loin ; la question est donc de savoir si vous utilisez un Tetrapak ouvert dans les {opened_days} jours. Sinon, la poudre attend. Le <a href="{guide_href}">guide de la mayonnaise vegan</a> tranche.</p>`,
      },
      {
        id: 'example',
        title: 'Exemple : préparer {ex_pieces_kg} de mayonnaise pour la semaine',
        html: `<p>Disons que votre cuisine consomme environ {ex_pieces_kg} de mayonnaise par semaine. Cela fait {ex_batches} préparations de la recette, et voici ce que cela donne :</p>
<ul>
<li>Liquide : {ex_dose} g de VERY AQUAFABA, {ex_oil} g d'huile, {ex_mustard} g de moutarde, {ex_salt} g de sel et {ex_lemon} g de jus de citron ou de vinaigre, soit l'aquafaba de {ex_eggs} blancs d'œufs.</li>
<li>Poudre : {ex_powder} g de poudre reconstitués avec {ex_water} ml d'eau, puis les mêmes huile, moutarde, sel et citron.</li>
<li>Matériel : à ce volume, passez à un mixeur à fort cisaillement et versez l'huile en filet fin et régulier.</li>
</ul>
<p>Transférez dans des récipients propres et réfrigérez aussitôt : les {keep} jours de conservation commencent là.</p>`,
      },
    ],
    faq: [
      { q: 'Combien de mayonnaise donne une préparation ?', a: "{yield}, à partir de {dose} g d'aquafaba et {oil} g d'huile. Saisissez les grammes qu'il vous faut et le calculateur donne les préparations et chaque ingrédient." },
      { q: "Quelle quantité d'aquafaba remplace l'œuf dans la mayonnaise ?", a: "Dans cette recette, l'aquafaba tient lieu de jaune : {dose} g de liquide pour {oil} g d'huile, un rapport de {oil_ratio} en poids. En poudre, {powder_dose} g reconstitués avec {water_dose} ml d'eau." },
      { q: 'Puis-je diviser la préparation par deux ?', a: "Oui. {half_dose} g d'aquafaba et {half_oil} g d'huile donnent environ {half_yield} g de mayonnaise. Prenez un récipient haut et étroit pour que le mixeur plongeant garde un cisaillement élevé sur un petit volume." },
      { q: "L'huile entre-t-elle plus vite sur une grande préparation ?", a: "Non. L'huile entre toujours en filet fin et régulier, mixeur à pleine vitesse. Si l'émulsion ne prend jamais, l'huile est entrée trop vite ou le cisaillement était trop faible." },
      { q: "Combien d'eau dois-je ajouter à la poudre ?", a: "{white_water} ml pour {white_powder} g de poudre. Pour une préparation de mayonnaise, cela fait {powder_dose} g de poudre et {water_dose} ml d'eau, pesés sur une balance de précision ; le calculateur adapte les deux." },
      { q: "D'où viennent les quantités d'huile et de moutarde ?", a: "De la recette de mayonnaise de ce site : {oil} g d'huile neutre, {mustard} g de moutarde de Dijon, {salt} g de sel et {lemon} g de jus de citron ou de vinaigre pour {dose} g d'aquafaba. La méthode complète est dans la [recette de mayonnaise]({recipe_href})." },
    ],
  },

  baking: {
    title: 'Calculateur de substitution des œufs - VERY AQUAFABA',
    h1: "Quelle quantité d'aquafaba remplace les œufs de votre recette ? Le calculateur de substitution",
    description: 'Saisissez les œufs entiers, les blancs et les jaunes de votre recette et obtenez le VERY AQUAFABA liquide ou en poudre qui les remplace, avec son eau.',
    lead: "Remplacer les œufs d'une recette tient en une addition. Saisissez les œufs entiers, les blancs et les jaunes que demande votre recette, et le calculateur vous donne l'aquafaba qui les remplace, en liquide ou en poudre avec son eau, avec l'huile qui remplace le jaune.",
    example: { eggs: 3, whites: 2 },
    sections: [
      {
        id: 'rule',
        title: "Les quatre équivalences qu'il utilise",
        html: `<ul>
<li>Un œuf entier : {egg_liquid} g d'aquafaba liquide, ou {egg_powder} g de poudre reconstitués avec {egg_water} ml d'eau.</li>
<li>Un blanc d'œuf : {white_liquid} g de liquide, ou {white_powder} g de poudre reconstitués avec {white_water} ml d'eau.</li>
<li>Un jaune d'œuf : {yolk_liquid} g d'aquafaba plus {yolk_oil} g d'huile, parce que l'aquafaba n'apporte pas de matière grasse.</li>
</ul>
<p>Elles viennent de la page Produits et du guide pâtisserie de ce site, et le calculateur les additionne simplement pour les œufs que vous saisissez.</p>`,
      },
      {
        id: 'how',
        title: "Comment l'aquafaba entre dans la pâte",
        html: `<p>L'aquafaba fait trois choses en pâtisserie : il retient l'air, il lie, et il retient l'humidité. Il s'utilise donc de deux façons. Montez-le quand il remplace des blancs d'œufs. Versez-le tel quel quand il remplace le liant et l'humidité des œufs entiers.</p>
<ul>
<li>Biscuits et génoises : monté à {chill} °C, puis incorporé délicatement et sans attendre.</li>
<li>Gâteaux, cookies et muffins : mélangé au sucre avant de rencontrer la matière grasse.</li>
<li>Cookies et brownies : ajouté directement, non monté, pour le liant et l'humidité.</li>
<li>Brioches et viennoiseries : non monté, avec les liquides de la pâte.</li>
</ul>
<p>Vous remplacez des œufs entiers ? L'aquafaba apporte plus d'eau que l'œuf. Réduisez légèrement le lait ou l'eau, ou augmentez les ingrédients secs, et cuisez à cœur. Remplacer seulement les blancs ne demande en général aucun ajustement. Le <a href="{guide_href}">guide pâtisserie</a> reprend chaque cas.</p>`,
      },
      {
        id: 'packs',
        title: "Combien d'œufs remplace un pack ?",
        html: `<p>Une fois votre nombre d'œufs remplacés par semaine connu, voici ce que vaut chaque pack.</p>
<table class="va-guide-grid">
<thead><tr><th scope="col">Pack</th><th scope="col">Œufs entiers</th><th scope="col">Blancs d'œufs</th></tr></thead>
<tbody>
<tr><td data-label="Pack">Tetrapak de 1 L de liquide</td><td data-label="Œufs entiers">{eggs_1l}</td><td data-label="Blancs d'œufs">{whites_1l}</td></tr>
<tr><td data-label="Pack">Bag-in-box de 10 L de liquide</td><td data-label="Œufs entiers">{eggs_10l}</td><td data-label="Blancs d'œufs">{whites_10l}</td></tr>
<tr><td data-label="Pack">Sachet de 200 g de poudre</td><td data-label="Œufs entiers">{eggs_200g}</td><td data-label="Blancs d'œufs">{whites_200g}</td></tr>
<tr><td data-label="Pack">Sac de 3 kg de poudre</td><td data-label="Œufs entiers">{eggs_3kg}</td><td data-label="Blancs d'œufs">{whites_3kg}</td></tr>
</tbody>
</table>
<p>Fermés, les deux formats se conservent au moins {unopened_months} mois à température ambiante. Un Tetrapak ouvert tient {opened_days} jours au réfrigérateur ; un sachet de poudre ouvert doit seulement rester au sec, fermé.</p>`,
      },
      {
        id: 'example',
        title: "Exemple : une recette de gâteau à {ex_eggs} œufs et {ex_whites} blancs d'œufs",
        html: `<p>Disons que votre recette de gâteau demande {ex_eggs} œufs entiers et {ex_whites} blancs d'œufs. Voici ce qui les remplace :</p>
<ul>
<li>Liquide : {ex_liquid} g de VERY AQUAFABA au total. La part des blancs est montée à {chill} °C ; la part des œufs entiers entre telle quelle, avec le sucre avant la matière grasse.</li>
<li>Poudre : {ex_powder} g de poudre reconstitués avec {ex_water} ml d'eau, puis utilisés de la même façon.</li>
<li>Ajustement : les œufs entiers sont remplacés, réduisez donc légèrement le lait ou l'eau, ou ajoutez des ingrédients secs, et cuisez à cœur.</li>
</ul>`,
      },
    ],
    faq: [
      { q: "Quelle quantité d'aquafaba remplace un œuf entier ?", a: "{egg_liquid} g de VERY AQUAFABA liquide, ou {egg_powder} g de poudre reconstitués avec {egg_water} ml d'eau. Les œufs entiers apportent de l'eau avec eux, réduisez donc légèrement les autres liquides." },
      { q: "Quelle quantité d'aquafaba remplace un blanc d'œuf ?", a: "{white_liquid} g de liquide, ou {white_powder} g de poudre reconstitués avec {white_water} ml d'eau. Remplacer seulement les blancs ne demande en général aucun autre ajustement." },
      { q: "L'aquafaba peut-il remplacer le jaune ?", a: "Pour le liant et le moelleux, {yolk_liquid} g d'aquafaba plus {yolk_oil} g d'huile tiennent lieu d'un jaune. Le calculateur ajoute l'huile quand vous saisissez des jaunes." },
      { q: 'Dois-je le monter ou le verser ?', a: "Montez-le, refroidi à {chill} °C, quand il remplace des blancs d'œufs dans un biscuit ou une pâte riche en sucre. Versez-le non monté quand il remplace le liant et l'humidité des œufs entiers dans les cookies, les brownies et les pâtes." },
      { q: 'Pourquoi ma pâte est-elle trop liquide après avoir remplacé les œufs ?', a: "Les œufs entiers ont été remplacés un pour un et l'eau n'a pas été réduite. Réduisez légèrement le lait ou l'eau, ou ajoutez des ingrédients secs, et cuisez à cœur." },
      { q: "D'où viennent ces équivalences ?", a: "De la page Produits et du [guide de la pâtisserie à l'aquafaba]({recipe_href}) de ce site : {egg_liquid} g par œuf entier, {white_liquid} g par blanc d'œuf et {white_powder} g de poudre par blanc d'œuf." },
    ],
  },

  cocktails: {
    title: "Calculateur cocktails à l'aquafaba - VERY AQUAFABA",
    h1: "Quelle quantité d'aquafaba par cocktail ? Le calculateur",
    description: "Adaptez le whiskey sour VERY AQUAFABA aux sours de votre service : aquafaba par cocktail, whiskey, citron et sirop, et l'équivalent en poudre.",
    lead: "Un samedi soir est plus simple quand l'aquafaba est déjà reconstitué. Indiquez au calculateur le nombre de sours que vous attendez et il vous donne l'aquafaba du service, avec le whiskey, le citron et le sirop à préparer à l'avance, en liquide ou en poudre avec son eau, d'après le whiskey sour VERY AQUAFABA.",
    example: { batches: 40 },
    sections: [
      {
        id: 'scaling',
        title: 'Ce qui change avec un service plus chargé, et ce qui ne change pas',
        html: `<p>Aquafaba, whiskey, citron, sirop, poudre et eau suivent une droite avec le nombre de cocktails. La poudre reconstituée est mise au frais avant le service, quel que soit le nombre de cocktails qu'elle couvre. Les shakes ne suivent pas.</p>
<ul>
<li>Chaque cocktail est shaké à la commande : un dry shake de {dry_shake} secondes sans glace, où la mousse se forme, puis {wet_shake} secondes avec glace pour refroidir et diluer.</li>
<li>Gros service ? Préparez à l'avance le whiskey, le citron et le sirop. Ajoutez l'aquafaba au shake, jamais dans le mélange : un aquafaba ajouté au mélange ne donne plus de hauteur en milieu de service.</li>
<li>Pesez ou dosez au jigger {dose} g à chaque fois. Le dosage à l'œil est ce qui rend les cocktails irréguliers.</li>
</ul>`,
      },
      {
        id: 'packs',
        title: "Combien de sours tirerez-vous d'un pack ?",
        html: `<p>Une fois vos sours par semaine connus, voici ce que vaut chaque pack.</p>
<table class="va-guide-grid">
<thead><tr><th scope="col">Pack</th><th scope="col">Cocktails</th></tr></thead>
<tbody>
<tr><td data-label="Pack">Tetrapak de 1 L de liquide</td><td data-label="Cocktails">{batches_1l}</td></tr>
<tr><td data-label="Pack">Bag-in-box de 10 L de liquide</td><td data-label="Cocktails">{batches_10l}</td></tr>
<tr><td data-label="Pack">Sachet de 200 g de poudre</td><td data-label="Cocktails">{batches_200g}</td></tr>
<tr><td data-label="Pack">Sac de 3 kg de poudre</td><td data-label="Cocktails">{batches_3kg}</td></tr>
</tbody>
</table>
<p>Acheter du liquide ou de la poudre dépend de la vitesse à laquelle vous videz un pack : un Tetrapak ouvert s'utilise dans les {opened_days} jours, un sachet ouvert attend la commande suivante. Le <a href="{guide_href}">guide des cocktails</a> tranche.</p>`,
      },
      {
        id: 'example',
        title: 'Exemple : préparer {ex_batches} sours pour un samedi soir',
        html: `<p>Disons que vous attendez {ex_batches} sours un samedi soir. Voici ce qu'il faut avoir prêt :</p>
<ul>
<li>Liquide : {ex_dose} g de VERY AQUAFABA, {ex_whiskey} ml de whiskey, {ex_lemon_juice} ml de jus de citron et {ex_syrup} ml de sirop de sucre.</li>
<li>Poudre : {ex_powder} g de poudre reconstitués avec {ex_water} ml d'eau avant le service, au frais.</li>
<li>Mélange à l'avance : le whiskey, le citron et le sirop peuvent être préparés en amont ; l'aquafaba entre dans le shaker cocktail par cocktail, au moment du shake.</li>
</ul>`,
      },
    ],
    faq: [
      { q: "Quelle quantité d'aquafaba par cocktail ?", a: "{dose} g d'aquafaba réfrigéré par cocktail, à la place du blanc d'œuf. Un Tetrapak de 1 L donne {batches_1l} cocktails et un sachet de poudre de 200 g en donne {batches_200g}." },
      { q: "Puis-je mettre l'aquafaba dans le mélange préparé à l'avance ?", a: "Non. Préparez seulement le whiskey, le citron et le sirop, et ajoutez l'aquafaba cocktail par cocktail au shake. Dans le mélange, l'aquafaba perd sa hauteur en milieu de service." },
      { q: "Combien d'eau dois-je ajouter à la poudre ?", a: "{white_water} ml pour {white_powder} g de poudre. Pour un cocktail, cela fait {powder_dose} g de poudre et {water_dose} ml d'eau ; pour un service, le calculateur adapte les deux." },
      { q: 'Un service plus grand change-t-il le shake ?', a: "Non. Chaque cocktail reçoit son dry shake de {dry_shake} secondes et son shake avec glace de {wet_shake} secondes. Le nombre de cocktails change le stock, pas la méthode." },
      { q: "L'aquafaba change-t-il le goût du cocktail ?", a: "Non. Il apporte la mousse et l'onctuosité en bouche. Le goût reste celui de votre whiskey, du citron et du sirop." },
      { q: "D'où viennent les quantités du cocktail ?", a: "De la recette de whiskey sour de ce site : {whiskey} ml de whiskey, {lemon_juice} ml de jus de citron, {syrup} ml de sirop de sucre et {dose} g d'aquafaba par cocktail. La méthode complète est dans la [recette du whiskey sour]({recipe_href})." },
    ],
  },

  macarons: {
    title: "Calculateur macarons à l'aquafaba - VERY AQUAFABA",
    h1: "Quelle quantité d'aquafaba pour les macarons ? Le calculateur",
    description: "Adaptez la recette de macarons VERY AQUAFABA au nombre de macarons voulu : aquafaba liquide, sucre en poudre, poudre d'amande, sucre glace et poudre.",
    lead: "Une coque de macaron pardonne très peu, la préparation doit donc être juste avant que le fouet ne démarre. Indiquez au calculateur le nombre de macarons qu'il vous faut et il vous donne l'aquafaba, le sucre en poudre, la poudre d'amande et le sucre glace de la série, en liquide ou en poudre avec son eau, d'après la recette VERY AQUAFABA.",
    example: { batches: 5 },
    sections: [
      {
        id: 'scaling',
        title: 'Ce qui change avec une préparation plus grande, et ce qui ne change pas',
        html: `<p>Aquafaba, sucre en poudre, poudre d'amande, sucre glace, poudre et eau suivent une droite. La poudre reconstituée est refroidie avant de monter, quelle que soit la préparation. Les temps et la température ne suivent pas.</p>
<ul>
<li>Le croûtage : les ronds pochés reposent à température ambiante jusqu'à former une peau sèche, {rest} minutes selon l'humidité, quelle que soit la préparation.</li>
<li>La cuisson : {bake} °C, chaleur statique, pendant {bake_time} minutes par plaque. Plus de macarons, c'est plus de plaques.</li>
<li>La maturation : les coques assemblées et garnies reposent {mature} heures au réfrigérateur avant le service.</li>
</ul>
<p>Vous produisez en série industrielle ? Maintenez la concentration de l'aquafaba à {concentration} g/ml pour des coques identiques d'une série à l'autre.</p>`,
      },
      {
        id: 'packs',
        title: "Combien de macarons tirerez-vous d'un pack ?",
        html: `<p>Une fois vos préparations par semaine connues, voici ce que vaut chaque pack.</p>
<table class="va-guide-grid">
<thead><tr><th scope="col">Pack</th><th scope="col">Préparations</th><th scope="col">Macarons, environ</th></tr></thead>
<tbody>
<tr><td data-label="Pack">Tetrapak de 1 L de liquide</td><td data-label="Préparations">{batches_1l}</td><td data-label="Macarons, environ">{pieces_1l}</td></tr>
<tr><td data-label="Pack">Bag-in-box de 10 L de liquide</td><td data-label="Préparations">{batches_10l}</td><td data-label="Macarons, environ">{pieces_10l}</td></tr>
<tr><td data-label="Pack">Sachet de 200 g de poudre</td><td data-label="Préparations">{batches_200g}</td><td data-label="Macarons, environ">{pieces_200g}</td></tr>
<tr><td data-label="Pack">Sac de 3 kg de poudre</td><td data-label="Préparations">{batches_3kg}</td><td data-label="Macarons, environ">{pieces_3kg}</td></tr>
</tbody>
</table>
<p>Acheter du liquide ou de la poudre dépend de la fréquence à laquelle vous pochez : un Tetrapak ouvert tient {opened_days} jours au réfrigérateur, un sachet ouvert attend la commande suivante. Le <a href="{guide_href}">guide des macarons</a> tranche.</p>`,
      },
      {
        id: 'example',
        title: 'Exemple : préparer {ex_pieces} macarons pour un mariage',
        html: `<p>Disons qu'une commande de mariage arrive pour {ex_pieces} macarons garnis. Cela fait {ex_batches} préparations de la recette, et voici ce que cela donne :</p>
<ul>
<li>Liquide : {ex_dose} g de VERY AQUAFABA, {ex_sugar} g de sucre en poudre, {ex_almond} g de poudre d'amande et {ex_icing_sugar} g de sucre glace, à la place de {ex_eggs} blancs d'œufs.</li>
<li>Poudre : {ex_powder} g de poudre reconstitués avec {ex_water} ml d'eau, puis les mêmes sucres et la même poudre d'amande.</li>
<li>Planning : les coques cuisent {bake_time} minutes par plaque à {bake} °C, puis sont assemblées, garnies et mises à maturer {mature} heures avant le jour J.</li>
</ul>
<p>Tamisez et préparez les plaques d'abord, montez en dernier : la mousse doit survivre au macaronnage et au croûtage, elle ne doit donc pas attendre pendant que le mélange sec se prépare.</p>`,
      },
    ],
    faq: [
      { q: 'Combien de macarons donne une préparation ?', a: "{yield}, à partir de {dose} g d'aquafaba, {sugar} g de sucre en poudre, {almond} g de poudre d'amande et {icing_sugar} g de sucre glace. Pochez les ronds à 3 à 4 cm." },
      { q: "Quelle quantité d'aquafaba remplace un blanc d'œuf ?", a: "{white_liquid} g de liquide, ou {white_powder} g de poudre reconstitués avec {white_water} ml d'eau. Une préparation de macarons remplace {eggs} blancs d'œufs." },
      { q: 'Puis-je diviser la préparation par deux ?', a: "Oui. {half_dose} g d'aquafaba, {half_sugar} g de sucre en poudre, {half_almond} g de poudre d'amande et {half_icing_sugar} g de sucre glace donnent environ {half_yield} macarons. Prenez la plus petite cuve de votre batteur." },
      { q: 'Une préparation plus grande croûte-t-elle ou cuit-elle plus longtemps ?', a: "Non. Chaque plaque croûte jusqu'à former une peau sèche, {rest} minutes selon l'humidité, et cuit {bake_time} minutes à {bake} °C. Une préparation plus grande, c'est plus de plaques, pas des temps plus longs." },
      { q: "Combien d'eau dois-je ajouter à la poudre ?", a: "{white_water} ml pour {white_powder} g de poudre. Pour une préparation de macarons, cela fait {powder_dose} g de poudre et {water_dose} ml d'eau ; le calculateur adapte les deux." },
      { q: "D'où viennent les quantités d'amande et de sucre ?", a: "De la recette de macarons de ce site : {almond} g de poudre d'amande, {icing_sugar} g de sucre glace et {sugar} g de sucre en poudre pour {dose} g d'aquafaba. La méthode complète est dans la [recette de macarons]({recipe_href})." },
    ],
  },
};
