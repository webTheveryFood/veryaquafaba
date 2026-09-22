// Calculateur de quantités, français. Même structure, mêmes {tokens} et mêmes balises HTML
// que calculator.en.js (vérifié par scripts/applications/check-guides.mjs). Pas de tiret long.
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
};
