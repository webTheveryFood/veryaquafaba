// Fiche de procédé, français. Même structure, mêmes {tokens} et mêmes balises HTML que
// process.en.js (vérifié par scripts/applications/check-guides.mjs). Pas de tiret long.
export default {
  meringue: {
    title: "Fiche de procédé et contrôles pour la meringue à l'aquafaba - VERY AQUAFABA",
    h1: "Meringue à l'aquafaba : fiche de procédé et contrôles",
    description: 'Une fiche de procédé imprimable pour la recette de meringue VERY AQUAFABA, avec la valeur de référence de chaque étape, une colonne pour votre propre lot et les contrôles à faire quand un lot ne réussit pas.',
    lead: "Une fiche imprimable qui suit la recette de meringue VERY AQUAFABA étape par étape, avec la valeur de référence de chaque étape ({dose} g d'aquafaba à {chill} °C, {sugar} g de sucre, {bake} °C pendant {bake_time} heures) et une colonne vide pour ce que vous avez réellement fait. En dessous, les contrôles à faire quand un lot ne sort pas comme prévu.",
    powderNote: "Poudre : réhydratez {powder_dose} g de VERY AQUAFABA en poudre avec {water_dose} ml d'eau avant l'étape 1 et refroidissez à {chill} °C.",
    steps: [
      { step: "Refroidir l'aquafaba", reference: '{chill} °C' },
      { step: 'Dégraisser la cuve et le fouet', reference: 'Ni gras, ni résidu' },
      { step: "Monter à grande vitesse jusqu'au bec d'oiseau souple", reference: '{dose} g, {whip} min' },
      { step: 'Ajouter le stabilisant facultatif pendant le foisonnement', reference: "2 g de crème de tartre ou 1 g d'acide citrique" },
      { step: 'Ajouter le sucre à vitesse moyenne, cuillère par cuillère', reference: '{sugar} g de sucre en poudre' },
      { step: "Reprendre à grande vitesse jusqu'à une mousse brillante et ferme", reference: 'Bec d’oiseau ferme' },
      { step: 'Pocher aussitôt', reference: '3 à 4 cm' },
      { step: 'Sécher sans chaleur tournante', reference: '{bake} °C, {bake_time} h' },
      { step: 'Refroidir sur la plaque, puis stocker en boîte hermétique', reference: 'Température ambiante, sachet déshydratant' },
    ],
    checks: [
      { see: "La mousse n'atteint jamais son plein volume", check: 'Du gras sur la cuve ou le fouet', fix: 'Tout dégraisser avant de commencer' },
      { see: 'La mousse monte lentement et reste faible', check: 'Aquafaba trop chaud', fix: "Refroidir d'abord à {chill} °C" },
      { see: 'Des perles de sirop sur les meringues au stockage', check: "Le sucre est entré plus vite qu'il ne se dissolvait", fix: 'Cuillère par cuillère, à vitesse moyenne' },
      { see: 'Du volume perdu avant le pochage', check: 'La cuve a attendu', fix: 'Pocher et sécher tout de suite après le bec ferme' },
      { see: 'Les meringues deviennent molles et collantes', check: "La meringue reprend l'humidité de l'air", fix: 'Stocker hermétiquement au sec, avec un sachet déshydratant' },
    ],
    sections: [
      {
        id: 'before',
        title: 'Avant de commencer : trois contrôles',
        html: `<p>La plupart des défauts de meringue se décident avant que le batteur ne tourne. Trois contrôles les couvrent.</p>
<ul>
<li>La température. Le VERY AQUAFABA liquide sort du réfrigérateur à {chill} °C et va directement dans la cuve. La poudre réhydratée est refroidie à la même température avant le foisonnement ; un aquafaba tiède monte lentement et donne une mousse plus faible.</li>
<li>Le gras. La mousse d'aquafaba est une mousse de protéines sans matière grasse dans la recette : un film de gras sur la cuve ou le fouet bride le volume. Essuyez les deux avant d'y verser l'aquafaba.</li>
<li>Le sucre. Pesez {sugar} g de sucre en poudre et gardez-le à portée de main. Il n'entre qu'une fois la mousse au bec d'oiseau souple, et cuillère par cuillère.</li>
</ul>`,
      },
      {
        id: 'whipping',
        title: 'Foisonnement, sucre et pochage',
        html: `<p>Montez {dose} g à grande vitesse. Le bec d'oiseau souple arrive vers {whip} minutes pour le lot de référence : la mousse tient une forme dont la pointe se courbe. Ajoutez le stabilisant maintenant si vous en utilisez, passez à vitesse moyenne et ajoutez les {sugar} g de sucre cuillère par cuillère, en laissant chacune se dissoudre avant la suivante. Reprenez à grande vitesse jusqu'à une mousse brillante qui tient une pointe ferme et droite.</p>
<p>Pochez des pièces de 3 à 4 cm dès que la mousse est prête. La mousse d'aquafaba tient moins bien que celle de blanc d'œuf : une cuve qui attend perd du volume avant d'arriver sur la plaque.</p>
<p>En production industrielle, maintenez la concentration de l'aquafaba à {concentration} g/ml pour que la mousse se comporte de la même façon à chaque série.</p>`,
      },
      {
        id: 'drying',
        title: 'Séchage et stockage',
        html: `<p>Les plaques sèchent à {bake} °C sans chaleur tournante pendant {bake_time} heures, jusqu'à ce que les meringues soient sèches à cœur. Laissez-les refroidir complètement sur la plaque avant de les déplacer.</p>
<p>Les meringues refroidies se gardent en boîte hermétique à température ambiante, avec un sachet déshydratant dans la boîte si vous en avez un. Elles reprennent l'humidité d'une pièce humide et ramollissent : la boîte compte autant que le four.</p>
<p>Non ouverts, les deux formats de VERY AQUAFABA se conservent au moins {unopened_months} mois à température ambiante. Une fois ouvert, le liquide reste fermé au réfrigérateur à {opened_temp} °C maximum et s'utilise sous {opened_days} jours ; la poudre doit seulement rester sèche et fermée.</p>`,
      },
    ],
    faq: [
      { q: 'Comment savoir si la mousse est au bec ferme ?', a: "Soulevez le fouet : la pointe tient droite sans se courber et la mousse est brillante. Le lot de référence atteint le bec souple en {whip} minutes ; le sucre entre ensuite, et le bec ferme arrive avec la dernière cuillère de sucre." },
      { q: 'Pourquoi mes meringues perlent-elles du sirop dans la boîte ?', a: "Le sucre est entré plus vite qu'il ne se dissolvait. Ajoutez les {sugar} g cuillère par cuillère à vitesse moyenne et laissez chaque cuillère disparaître avant la suivante." },
      { q: 'Puis-je faire attendre la mousse montée pendant que le four est occupé ?', a: 'Non. Pochez et séchez tout de suite après le bec ferme. Si le four est plein, montez la cuve suivante plus tard plutôt que de laisser attendre une cuve finie.' },
      { q: "Les meringues sont collantes à l'intérieur. Que contrôler ?", a: "L'étape de séchage : {bake} °C sans chaleur tournante pendant les {bake_time} heures complètes, jusqu'à sec à cœur, puis un refroidissement complet sur la plaque. Des pièces plus grandes que 3 à 4 cm demandent plus que le temps de référence." },
      { q: 'La poudre suit-elle la même fiche ?', a: "Oui. Réhydratez {powder_dose} g de poudre avec {water_dose} ml d'eau, refroidissez à {chill} °C et commencez à l'étape 1. La règle par blanc d'œuf : {white_powder} g de poudre + {white_water} ml d'eau = {white_total} g d'aquafaba, soit la même masse d'aquafaba liquide." },
      { q: 'Puis-je envoyer cette fiche avec une question technique ?', a: 'Oui. Remplissez la colonne de votre lot, notez ce que vous avez constaté et décrivez-le via notre [formulaire de contact]({contact_href}) ou le formulaire de demande professionnelle de cette page. La fiche remplie est le moyen le plus rapide pour que nous puissions vous aider.' },
    ],
  },
};
