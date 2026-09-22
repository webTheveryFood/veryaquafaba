// Fiche de procédé, français. Même structure, mêmes {tokens} et mêmes balises HTML que
// process.en.js (vérifié par scripts/applications/check-guides.mjs). Pas de tiret long.
// Les étapes, les causes et les solutions sont celles des guides du site.
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
      { step: "Reprendre à grande vitesse jusqu'à une mousse brillante et ferme", reference: "Bec d'oiseau ferme" },
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

  'chocolate-mousse': {
    title: "Fiche de procédé et contrôles pour la mousse au chocolat à l'aquafaba - VERY AQUAFABA",
    h1: "Mousse au chocolat à l'aquafaba : fiche de procédé et contrôles",
    description: 'Une fiche de procédé imprimable pour la recette de mousse au chocolat VERY AQUAFABA : températures du chocolat, foisonnement, incorporation et prise, avec une colonne pour votre propre lot et les contrôles quand une mousse échoue.',
    lead: "Une fiche imprimable qui suit la recette de mousse au chocolat VERY AQUAFABA étape par étape : le chocolat fondu et refroidi à {fold_temp} °C, {dose} g d'aquafaba montés avec {sugar} g de sucre, l'incorporation et les {set_time} heures de prise. Une colonne vide pour ce que vous avez réellement fait, et en dessous les contrôles à faire quand une mousse ne sort pas comme prévu.",
    powderNote: "Poudre : réhydratez {powder_dose} g de VERY AQUAFABA en poudre avec {water_dose} ml d'eau à l'avance et refroidissez avant l'étape 3.",
    steps: [
      { step: 'Faire fondre la couverture noire', reference: '{chocolate} g, 45 à 50 °C' },
      { step: 'Laisser refroidir le chocolat', reference: '{fold_temp} °C' },
      { step: "Dégraisser la cuve et le fouet, peser l'aquafaba froid", reference: '{dose} g' },
      { step: "Monter à grande vitesse jusqu'au bec d'oiseau souple", reference: '{whip} min' },
      { step: 'Ajouter le stabilisant facultatif', reference: "2 g de crème de tartre ou 1 g d'acide citrique" },
      { step: "Ajouter le sucre progressivement pendant le foisonnement, jusqu'à une mousse brillante et ferme", reference: '{sugar} g de sucre en poudre' },
      { step: 'Incorporer le chocolat refroidi à la main, vite et délicatement', reference: 'Arrêter dès que mélangé' },
      { step: 'Pocher ou dresser en coupes aussitôt', reference: '{yield}' },
      { step: 'Mettre au froid pour la prise', reference: 'Au moins {set_time} h ; se garde {keep} jours' },
    ],
    checks: [
      { see: "La mousse retombe quand le chocolat entre", check: 'Un chocolat au-dessus de {fold_temp} °C a fait fondre la mousse', fix: "Le refroidir à {fold_temp} °C ou moins avant l'incorporation" },
      { see: 'Mousse dense et lourde', check: "Trop d'incorporation a chassé l'air", fix: "Incorporer juste jusqu'au mélange" },
      { see: 'La mousse ne monte pas', check: 'Du gras dans la cuve, ou du sucre ajouté avant le bec souple', fix: 'Cuve propre, et sucre seulement une fois le bec souple obtenu' },
      { see: "Du volume perdu avant l'incorporation", check: 'La mousse a attendu le chocolat', fix: 'Avoir le chocolat refroidi et prêt avant de monter' },
      { see: 'Mousse faible et lente', check: 'Aquafaba trop chaud', fix: 'Le monter froid' },
      { see: 'Mousse irrégulière à partir de stock congelé', check: 'Pas complètement décongelé ou pas remué', fix: 'Décongeler complètement et remuer jusqu’à homogénéité. Ne jamais recongeler' },
    ],
    sections: [
      {
        id: 'before',
        title: "Avant de commencer : le chocolat d'abord",
        html: `<p>L'aquafaba monté remplace à la fois les blancs d'œufs et la crème. Toute la structure vient de la mousse : la température et l'incorporation décident du résultat. Le chocolat se règle avant que le batteur ne tourne.</p>
<ul>
<li>Faites fondre {chocolate} g de couverture noire à 45 à 50 °C, puis laissez-la refroidir à {fold_temp} °C. Ayez-la refroidie et prête avant de monter : la mousse ne doit pas l'attendre.</li>
<li>Pesez {dose} g de VERY AQUAFABA liquide froid, directement du réfrigérateur dans une cuve propre et sans gras. La poudre réhydratée est refroidie de la même façon ; un aquafaba tiède donne moins de volume.</li>
<li>Pesez {sugar} g de sucre en poudre et gardez-le à portée de main pour le foisonnement.</li>
</ul>`,
      },
      {
        id: 'whipping',
        title: 'Foisonnement et incorporation',
        html: `<p>Montez l'aquafaba à grande vitesse jusqu'au bec d'oiseau souple, environ {whip} minutes pour le lot de référence. Ajoutez le stabilisant maintenant si vous en utilisez. Ajoutez les {sugar} g de sucre progressivement pendant le foisonnement, jusqu'à une mousse brillante et ferme : la meringue doit être dense et stable.</p>
<p>Incorporez le chocolat refroidi à la main, à la spatule, vite et délicatement, et arrêtez dès qu'il est mélangé. Trop d'incorporation chasse l'air et donne une mousse dense et lourde ; un chocolat au-dessus de {fold_temp} °C fait fondre la mousse, qui retombe quand il entre.</p>
<p>Grands lots ? Émulsionnez d'abord une partie du chocolat avec un peu d'aquafaba, puis incorporez le reste de la mousse. Les grandes séries restent ainsi homogènes.</p>`,
      },
      {
        id: 'setting',
        title: 'Prise et stockage',
        html: `<p>Pochez ou dressez en coupes aussitôt et mettez au froid pendant au moins {set_time} heures. Un lot remplit {yield}. Faite ainsi, la mousse se garde {keep} jours au réfrigérateur.</p>
<p>Le conditionnement de liquide ouvert occupe la même étagère froide que les coupes en prise : notez la date d'ouverture dessus, car il s'utilise sous {opened_days} jours à {opened_temp} °C maximum. Non ouverts, les deux formats se conservent au moins {unopened_months} mois à température ambiante ; la poudre ouverte doit seulement rester sèche et fermée.</p>`,
      },
    ],
    faq: [
      { q: "Pourquoi la mousse est-elle retombée quand j'ai ajouté le chocolat ?", a: "Le chocolat était au-dessus de {fold_temp} °C et a fait fondre la mousse. Refroidissez-le à {fold_temp} °C ou moins avant l'incorporation, et ayez-le prêt avant de monter." },
      { q: 'Pourquoi ma mousse est-elle dense et lourde ?', a: "Trop d'incorporation a chassé l'air. Incorporez le chocolat à la main, vite et délicatement, et arrêtez dès qu'il est mélangé." },
      { q: 'Quand le sucre entre-t-il ?', a: "Seulement une fois la mousse au bec d'oiseau souple, après environ {whip} minutes, puis progressivement pendant le foisonnement jusqu'à une mousse brillante et ferme. Du sucre ajouté avant le bec souple empêche la mousse de monter." },
      { q: 'Combien de temps la mousse prend-elle et se garde-t-elle ?', a: 'Au moins {set_time} heures au réfrigérateur pour la prise, et elle se garde {keep} jours faite dans de bonnes conditions d’hygiène. Mettez les coupes au froid tout de suite après le dressage.' },
      { q: 'La poudre suit-elle la même fiche ?', a: "Oui. Réhydratez {powder_dose} g de poudre avec {water_dose} ml d'eau à l'avance et refroidissez, puis commencez à l'étape 3. La règle par blanc d'œuf : {white_powder} g de poudre + {white_water} ml d'eau = {white_total} g d'aquafaba, soit la même masse d'aquafaba liquide." },
      { q: 'Puis-je envoyer cette fiche avec une question technique ?', a: 'Oui. Remplissez la colonne de votre lot, notez ce que vous avez constaté et décrivez-le via notre [formulaire de contact]({contact_href}) ou le formulaire de demande professionnelle de cette page.' },
    ],
  },

  mayonnaise: {
    title: "Mayonnaise végane à l'aquafaba : fiche de procédé et contrôles - VERY AQUAFABA",
    h1: "Mayonnaise végane à l'aquafaba : fiche de procédé et contrôles",
    description: "Une fiche de procédé imprimable pour la recette de mayonnaise VERY AQUAFABA : l'émulsion froide étape par étape, avec une colonne pour votre propre lot et les contrôles à faire quand l'émulsion échoue.",
    lead: "Une fiche imprimable qui suit la recette de mayonnaise VERY AQUAFABA étape par étape : {dose} g d'aquafaba froid, la moutarde, le sel et le citron, puis {oil} g d'huile en filet fin et régulier sous fort cisaillement. Une colonne vide pour ce que vous avez réellement fait, et en dessous les contrôles à faire quand l'émulsion ne prend pas.",
    powderNote: "Poudre : réhydratez {powder_dose} g de VERY AQUAFABA en poudre avec {water_dose} ml d'eau froide sur une balance de précision avant l'étape 1, ou refroidissez à {chill} °C.",
    steps: [
      { step: "Refroidir l'aquafaba", reference: '{chill} °C' },
      { step: "Réunir l'aquafaba, la moutarde, le sel et le jus de citron ou le vinaigre dans un récipient haut et étroit", reference: '{dose} g, {mustard} g, {salt} g, {lemon} g' },
      { step: 'Lancer le mixeur plongeant à pleine vitesse', reference: 'Fort cisaillement' },
      { step: "Verser l'huile en filet fin et régulier", reference: "{oil} g, {oil_ratio} par rapport à l'aquafaba" },
      { step: 'Une fois épaissie, goûter et assaisonner', reference: 'Épaissie' },
      { step: "Trop serrée ? Mixer quelques grammes d'eau froide", reference: "De l'eau, pas plus d'huile" },
      { step: 'Transvaser dans un récipient propre, réfrigérer aussitôt', reference: "Se garde jusqu'à {keep} jours" },
    ],
    checks: [
      { see: "L'émulsion ne démarre jamais", check: 'Huile versée trop vite, ou trop peu de cisaillement', fix: 'Filet fin et régulier, mixeur à pleine vitesse' },
      { see: 'Émulsion lente et instable', check: 'Aquafaba trop chaud', fix: "L'utiliser à {chill} °C" },
      { see: 'Trop épaisse pour être travaillée', check: "L'émulsion s'est resserrée", fix: "Mixer quelques grammes d'eau froide, pas plus d'huile" },
      { see: 'Instable sur les grands lots', check: 'Taille des gouttelettes non maîtrisée', fix: 'Passer à un mixeur à fort cisaillement' },
      { see: 'Résultat fluide à partir de stock congelé', check: "L'aquafaba décongelé est revenu plus fluide", fix: "Remuer jusqu'à homogénéité. Si toujours fluide, réduire brièvement à feu doux" },
      { see: 'Conservation plus courte que {keep} jours', check: 'Hygiène ou passage trop lent au réfrigérateur', fix: 'Récipient propre, réfrigérer immédiatement' },
    ],
    sections: [
      {
        id: 'before',
        title: 'Avant de commencer : froid et propre',
        html: `<p>Ici, l'aquafaba tient lieu du jaune d'œuf, pas du blanc. Rien n'est monté : c'est une émulsion froide, construite par cisaillement. Deux choses se règlent avant que le mixeur ne démarre.</p>
<ul>
<li>La température. Le VERY AQUAFABA liquide vit au réfrigérateur une fois ouvert, il est donc à température de mixage, {chill} °C, quand vous le versez. La poudre réhydratée se prépare à l'eau froide ou se refroidit au même point.</li>
<li>Le récipient. Haut et étroit, pour que le mixeur plongeant garde un cisaillement élevé. Pesez-y {dose} g d'aquafaba, {mustard} g de moutarde, {salt} g de sel et {lemon} g de jus de citron ou de vinaigre.</li>
</ul>`,
      },
      {
        id: 'emulsion',
        title: "Construire l'émulsion",
        html: `<p>Lancez le mixeur plongeant et versez {oil} g d'huile en filet fin et régulier. Gardez un cisaillement élevé pour que l'émulsion prenne. Si elle ne démarre jamais, l'huile est entrée trop vite ou le cisaillement était trop faible. Une fois épaissie, goûtez et assaisonnez. Trop serrée ? Mixez quelques grammes d'eau froide, pas plus d'huile.</p>
<p>Grands lots ? Utilisez un mixeur à fort cisaillement pour maîtriser la taille des gouttelettes et garder l'émulsion stable.</p>`,
      },
      {
        id: 'storage',
        title: 'Stockage',
        html: `<p>Transvasez dans un récipient propre et réfrigérez aussitôt. Faite dans de bonnes conditions d'hygiène, la mayonnaise se garde jusqu'à {keep} jours au réfrigérateur ; une conservation plus courte signale un problème d'hygiène ou un passage trop lent au froid. Un lot donne {yield}.</p>
<p>Le conditionnement de liquide ouvert reste au réfrigérateur à {opened_temp} °C maximum et s'utilise sous {opened_days} jours. Non ouverts, les deux formats se conservent au moins {unopened_months} mois à température ambiante ; la poudre ouverte doit seulement rester sèche et fermée.</p>`,
      },
    ],
    faq: [
      { q: "Pourquoi l'émulsion ne démarre-t-elle jamais ?", a: "L'huile est entrée trop vite, ou le cisaillement était trop faible. Versez les {oil} g en filet fin et régulier, mixeur à pleine vitesse, dans un récipient haut et étroit." },
      { q: "La mayonnaise est trop épaisse pour être travaillée. Qu'est-ce que j'ajoute ?", a: "Quelques grammes d'eau froide, mixés. Pas plus d'huile : l'émulsion s'est resserrée, et l'huile la resserre davantage." },
      { q: "L'aquafaba doit-il être froid ?", a: "Oui, à {chill} °C. Un aquafaba tiède donne une émulsion lente et instable. Le conditionnement ouvert vit au réfrigérateur, il se verse donc à la bonne température." },
      { q: 'Combien de temps la mayonnaise se garde-t-elle ?', a: "Jusqu'à {keep} jours au réfrigérateur quand elle est faite dans de bonnes conditions d'hygiène et réfrigérée aussitôt dans un récipient propre." },
      { q: 'La poudre suit-elle la même fiche ?', a: "Oui. Réhydratez {powder_dose} g de poudre avec {water_dose} ml d'eau froide sur une balance de précision et commencez à l'étape 1. La règle par blanc d'œuf : {white_powder} g de poudre + {white_water} ml d'eau = {white_total} g d'aquafaba, soit la même masse d'aquafaba liquide." },
      { q: 'Puis-je envoyer cette fiche avec une question technique ?', a: 'Oui. Remplissez la colonne de votre lot, notez ce que vous avez constaté et décrivez-le via notre [formulaire de contact]({contact_href}) ou le formulaire de demande professionnelle de cette page.' },
    ],
  },

  baking: {
    title: "Aquafaba en pâtisserie : fiche d'essai et contrôles - VERY AQUAFABA",
    h1: "L'aquafaba en pâtisserie : fiche d'essai et contrôles",
    description: "Une fiche imprimable pour mener un essai de substitution des œufs par VERY AQUAFABA dans votre propre recette : les équivalences, monté ou non, les ajustements et les contrôles quand une pâtisserie ne réussit pas.",
    lead: "Une fiche imprimable pour remplacer les œufs de votre propre formule par VERY AQUAFABA et consigner l'essai : {egg_liquid} g de liquide par œuf entier, {white_liquid} g par blanc d'œuf, monté à {chill} °C quand il remplace des blancs, versé tel quel quand il remplace des œufs entiers. Une colonne vide pour ce que vous avez réellement fait, et en dessous les contrôles à faire quand une pâtisserie ne sort pas comme prévu.",
    powderNote: "Poudre : {white_powder} g + {white_water} ml d'eau par blanc d'œuf, {egg_powder} g + {egg_water} ml par œuf entier. Pour les préparations montées, refroidissez d'abord à {chill} °C ; dans les pâtes et les appareils, elle entre telle quelle.",
    steps: [
      { step: 'Noter les œufs de votre formule', reference: 'Œufs entiers, blancs, jaunes' },
      { step: "Calculer l'aquafaba", reference: "{egg_liquid} g par œuf entier, {white_liquid} g par blanc d'œuf, {yolk_liquid} g + {yolk_oil} g d'huile par jaune" },
      { step: 'Décider monté ou non monté', reference: 'Blancs : monté. Œufs entiers : tel quel' },
      { step: "Refroidir l'aquafaba s'il est monté", reference: '{chill} °C' },
      { step: 'Monté : incorporer délicatement et sans attendre', reference: 'Génoises et biscuits' },
      { step: 'Gâteaux, cookies et muffins : le mélanger au sucre avant la matière grasse', reference: 'Une émulsion plus stable' },
      { step: 'Œufs entiers remplacés : réduire légèrement le lait ou l’eau, ou augmenter les ingrédients secs', reference: "L'aquafaba apporte plus d'eau que l'œuf" },
      { step: 'Cuire à cœur', reference: "L'eau en plus allonge la cuisson" },
      { step: "Noter le volume, la mie et l'humidité ; revérifier la conservation si vous avez reformulé", reference: "L'activité de l'eau change" },
    ],
    checks: [
      { see: 'Génoise plate', check: 'La mousse a attendu, ou a été incorporée trop fort', fix: 'Incorporer sans attendre et délicatement' },
      { see: 'Pâte lâche et humide', check: "Œufs entiers remplacés un pour un, eau non réduite", fix: "Réduire légèrement le lait ou l'eau, ou ajouter des ingrédients secs" },
      { see: 'Centre humide', check: "L'eau en plus allonge la cuisson", fix: 'Cuire à cœur avant de sortir' },
      { see: 'Mousse faible', check: 'Aquafaba trop chaud', fix: 'Le monter à {chill} °C' },
      { see: 'Mousse ou liant faible à partir de stock congelé', check: "L'aquafaba décongelé est revenu plus fluide", fix: 'Réduire brièvement à feu doux. Ne jamais recongeler' },
      { see: 'La conservation du produit a changé', check: "Changer l'humidité change l'activité de l'eau", fix: 'Revérifier la conservation et la stabilité microbienne après reformulation' },
    ],
    sections: [
      {
        id: 'before',
        title: "Avant l'essai : ce que fait l'œuf dans votre recette",
        html: `<p>L'aquafaba remplit trois fonctions en pâtisserie : il emprisonne l'air, il lie et il retient l'humidité. Il travaille donc de deux façons. Montez-le quand il remplace des blancs d'œufs. Versez-le tel quel quand il remplace le liant et l'humidité des œufs entiers.</p>
<ul>
<li>Génoises et biscuits : monté à {chill} °C, puis incorporé délicatement et sans attendre. Il apporte l'air.</li>
<li>Gâteaux, cookies et muffins : mélangé au sucre avant de rencontrer la matière grasse, pour une émulsion plus stable.</li>
<li>Appareils riches en sucre : monté d'abord avec une partie du sucre, puis réuni aux matières grasses, pour un volume qui tient à la cuisson.</li>
<li>Cookies et brownies : ajouté directement, non monté, pour le liant et l'humidité.</li>
<li>Brioche et pains sucrés : non monté, avec les liquides de la pâte, pour le moelleux et la conservation.</li>
</ul>`,
      },
      {
        id: 'dose',
        title: "La dose et l'ajustement",
        html: `<p>Pesez {egg_liquid} g de VERY AQUAFABA liquide par œuf entier ou {white_liquid} g par blanc d'œuf, directement du conditionnement. Pour un jaune, {yolk_liquid} g d'aquafaba plus {yolk_oil} g d'huile. En poudre, {white_powder} g + {white_water} ml d'eau par blanc d'œuf et {egg_powder} g + {egg_water} ml par œuf entier.</p>
<p>Vous remplacez des œufs entiers ? L'aquafaba apporte plus d'eau que l'œuf. Réduisez légèrement le lait ou l'eau, ou augmentez les ingrédients secs, et cuisez à cœur. Ne remplacer que les blancs, comme dans les meringues ou les macarons, ne demande normalement aucun ajustement.</p>`,
      },
      {
        id: 'after',
        title: 'Après la cuisson : ce que vous consignez',
        html: `<p>Notez le volume, la mie et l'humidité par rapport à votre résultat habituel, et gardez la fiche avec la formule. Si vous avez changé l'humidité de la recette, revérifiez sa conservation et sa stabilité microbienne : changer l'humidité change l'activité de l'eau.</p>
<p>Le conditionnement de liquide ouvert reste au réfrigérateur à {opened_temp} °C maximum et s'utilise sous {opened_days} jours ; un Tetrapak de 1 L remplace {eggs_1l} œufs entiers ou {whites_1l} blancs d'œufs. Non ouverts, les deux formats se conservent au moins {unopened_months} mois à température ambiante ; la poudre ouverte doit seulement rester sèche et fermée.</p>`,
      },
    ],
    faq: [
      { q: 'Pourquoi ma génoise est-elle sortie plate ?', a: "La mousse a attendu, ou a été incorporée trop fort. Montez l'aquafaba à {chill} °C et incorporez-le sans attendre et délicatement." },
      { q: 'Pourquoi la pâte est-elle lâche et humide ?', a: "Les œufs entiers ont été remplacés un pour un et l'eau n'a pas été réduite. Réduisez légèrement le lait ou l'eau, ou ajoutez des ingrédients secs, et cuisez à cœur." },
      { q: 'Le centre est humide. Que contrôler ?', a: "Le temps de cuisson : l'eau en plus qu'apporte l'aquafaba allonge la cuisson. Cuisez à cœur avant de sortir." },
      { q: 'Dois-je le monter ?', a: "Seulement quand il remplace des blancs d'œufs. Quand il remplace le liant et l'humidité des œufs entiers, dans les cookies, les brownies et les pâtes, il entre non monté." },
      { q: 'La poudre suit-elle la même fiche ?', a: "Oui. {white_powder} g de poudre + {white_water} ml d'eau = {white_total} g d'aquafaba, soit la même masse d'aquafaba liquide. Pour les préparations montées, refroidissez d'abord à {chill} °C ; dans les pâtes et les appareils, elle entre telle quelle." },
      { q: 'Puis-je envoyer cette fiche avec une question technique ?', a: 'Oui. Remplissez la colonne de votre lot, notez ce que vous avez constaté et décrivez-le via notre [formulaire de contact]({contact_href}) ou le formulaire de demande professionnelle de cette page.' },
    ],
  },

  cocktails: {
    title: "Fiche de service et contrôles de mousse pour les sours à l'aquafaba - VERY AQUAFABA",
    h1: "Sours à l'aquafaba : fiche de service et contrôles de mousse",
    description: 'Une fiche de service imprimable pour le whiskey sour VERY AQUAFABA : le montage, le dry shake et le shake avec glace, avec une colonne pour vos propres verres et les contrôles à faire quand la mousse retombe.',
    lead: "Une fiche imprimable qui suit le whiskey sour VERY AQUAFABA étape par étape : le montage sans glace avec {dose} g d'aquafaba froid, le dry shake de {dry_shake} secondes et le shake avec glace de {wet_shake} secondes. Une colonne vide pour ce que vous avez réellement fait, et en dessous les contrôles à faire quand la mousse retombe.",
    powderNote: "Poudre : pour un verre, {powder_dose} g de VERY AQUAFABA en poudre + {water_dose} ml d'eau. Préparez-le avant le service et gardez-le au froid ; un aquafaba froid mousse plus vite et tient plus longtemps.",
    steps: [
      { step: 'Monter sans glace', reference: "{whiskey} ml de whisky, {lemon_juice} ml de jus de citron, {syrup} ml de sirop de sucre, {dose} g d'aquafaba froid" },
      { step: 'Dry shake énergique', reference: '{dry_shake} s' },
      { step: 'Ajouter la glace et shaker à nouveau', reference: '{wet_shake} s' },
      { step: 'Filtrer finement dans une coupe froide', reference: 'Servir aussitôt' },
      { step: 'Garnir', reference: 'Quelques gouttes de bitter sur la mousse' },
    ],
    checks: [
      { see: 'Mousse mince', check: 'La glace est entrée dès le début', fix: "Dry shake d'abord, glace ensuite" },
      { see: 'Mousse lente et molle', check: 'Aquafaba à température ambiante', fix: "Le garder au froid jusqu'au shake" },
      { see: 'Plus de hauteur au milieu du service', check: "L'aquafaba a été ajouté au pré-batch", fix: "Ne batcher que la base, ajouter l'aquafaba par verre" },
      { see: "La mousse retombe avant d'arriver au client", check: 'Le verre a attendu au passe', fix: 'Shaker à la commande et servir aussitôt' },
      { see: "Irrégulier d'un verre à l'autre", check: "Versage à l'œil", fix: 'Peser ou jigger {dose} g à chaque fois' },
    ],
    sections: [
      {
        id: 'before',
        title: 'Avant le service : le poste',
        html: `<p>Rien ne change dans votre recette, sauf un ingrédient : l'aquafaba remplace le blanc d'œuf. Deux choses se règlent avant la première commande.</p>
<ul>
<li>Le froid. Le VERY AQUAFABA liquide va du réfrigérateur au shaker ; on le referme et on le remet au froid entre les services. La poudre réhydratée est refroidie de la même façon : un aquafaba froid mousse plus vite et tient plus longtemps.</li>
<li>Le pré-batch. Service chargé ? Préparez à l'avance le whisky, le citron et le sirop. Ajoutez l'aquafaba au shake, jamais dans le batch.</li>
</ul>`,
      },
      {
        id: 'shake',
        title: 'Les deux shakes',
        html: `<p>Montez sans glace : {whiskey} ml de whisky, {lemon_juice} ml de jus de citron frais, {syrup} ml de sirop de sucre et {dose} g d'aquafaba froid. Dry shake énergique pendant {dry_shake} secondes : c'est là que la mousse se forme. Ajoutez la glace et shakez encore {wet_shake} secondes pour refroidir et diluer. Filtrez finement dans une coupe froide ; la mousse est assez ferme pour porter quelques gouttes de bitter.</p>
<p>Pesez ou jiggez {dose} g à chaque fois. C'est le versage à l'œil qui rend les verres inégaux.</p>`,
      },
      {
        id: 'storage',
        title: 'Entre les services',
        html: `<p>Le conditionnement de liquide ouvert reste fermé au réfrigérateur à {opened_temp} °C maximum et s'utilise sous {opened_days} jours ; un Tetrapak de 1 L fait {batches_1l} sours. La poudre ouverte se garde tant que le sachet reste sec et fermé. Non ouverts, les deux formats se conservent au moins {unopened_months} mois à température ambiante.</p>`,
      },
    ],
    faq: [
      { q: 'Pourquoi la mousse est-elle mince ?', a: "La glace est entrée dès le début. Dry shake d'abord, pendant {dry_shake} secondes, puis ajoutez la glace et shakez encore {wet_shake} secondes." },
      { q: 'Pourquoi la mousse devient-elle molle au milieu du service ?', a: "L'aquafaba a été ajouté au pré-batch. Ne batchez que le whisky, le citron et le sirop, et ajoutez {dose} g d'aquafaba par verre, au shake." },
      { q: 'Le verre doit-il être servi aussitôt ?', a: "Oui. Shakez à la commande et servez aussitôt : un verre qui attend au passe perd sa mousse avant d'arriver au client." },
      { q: 'Pourquoi les verres sont-ils inégaux ?', a: "Le versage à l'œil. Pesez ou jiggez {dose} g d'aquafaba à chaque fois." },
      { q: 'La poudre suit-elle la même fiche ?', a: "Oui. Réhydratez {powder_dose} g de poudre avec {water_dose} ml d'eau par verre avant le service et gardez-le au froid. La règle par blanc d'œuf : {white_powder} g de poudre + {white_water} ml d'eau = {white_total} g d'aquafaba, soit la même masse d'aquafaba liquide." },
      { q: 'Puis-je envoyer cette fiche avec une question technique ?', a: 'Oui. Remplissez votre colonne, notez ce que vous avez constaté et décrivez-le via notre [formulaire de contact]({contact_href}) ou le formulaire de demande professionnelle de cette page.' },
    ],
  },

  macarons: {
    title: "Fiche de procédé et contrôles pour les macarons à l'aquafaba - VERY AQUAFABA",
    h1: "Macarons à l'aquafaba : fiche de procédé et contrôles",
    description: 'Une fiche de procédé imprimable pour la recette de macarons VERY AQUAFABA : le foisonnement, le macaronnage, le croûtage, la cuisson et la maturation, avec une colonne pour votre propre lot et les contrôles quand les coques échouent.',
    lead: "Une fiche imprimable qui suit la recette de macarons VERY AQUAFABA étape par étape : {dose} g d'aquafaba montés avec {sugar} g de sucre en poudre, l'incorporation de {almond} g de poudre d'amande et {icing_sugar} g de sucre glace, le croûtage, la cuisson à {bake} °C pendant {bake_time} minutes et les {mature} heures de maturation. Une colonne vide pour ce que vous avez réellement fait, et en dessous les contrôles à faire quand les coques ne réussissent pas.",
    powderNote: "Poudre : réhydratez {powder_dose} g de VERY AQUAFABA en poudre avec {water_dose} ml d'eau et refroidissez avant l'étape 2. Un aquafaba froid monte plus vite en une mousse plus stable.",
    steps: [
      { step: "Tamiser ensemble la poudre d'amande et le sucre glace ; chemiser les plaques", reference: '{almond} g, {icing_sugar} g' },
      { step: "Monter l'aquafaba froid à grande vitesse jusqu'au bec d'oiseau souple", reference: '{dose} g' },
      { step: "Ajouter la crème de tartre, puis le sucre en poudre progressivement, jusqu'à une mousse brillante et ferme", reference: '{sugar} g' },
      { step: 'Incorporer le mélange sec en trois fois', reference: 'Arrêter au ruban épais et lent' },
      { step: 'Pocher des ronds sur papier cuisson, bien espacés', reference: '3 à 4 cm' },
      { step: "Laisser croûter à température ambiante jusqu'à ce qu'une peau sèche se forme", reference: "{rest} min, selon l'humidité" },
      { step: 'Cuire sans chaleur tournante', reference: '{bake} °C, {bake_time} min' },
      { step: 'Refroidir complètement sur la plaque avant de manipuler', reference: 'Complètement refroidies' },
      { step: 'Assembler, garnir et réfrigérer avant le service', reference: '{mature} h' },
    ],
    checks: [
      { see: "La mousse n'atteint pas son volume", check: 'Du gras sur la cuve ou le fouet', fix: 'Tout dégraisser avant de commencer' },
      { see: 'La meringue retombe avant le pochage', check: 'Elle a attendu pendant la préparation du mélange sec ou des plaques', fix: "Tamiser et chemiser les plaques d'abord, monter en dernier" },
      { see: 'Les coques perdent leur relief', check: 'Macaronnage poussé au-delà du ruban, ou trop brusque', fix: 'Arrêter au ruban épais et lent' },
      { see: 'Pas de peau après le croûtage', check: 'Pièce humide', fix: 'Croûter plus longtemps et juger au toucher, pas au chronomètre' },
      { see: 'Les coques perlent au stockage', check: 'Sucre pas entièrement dissous', fix: 'Ajouter le sucre en poudre progressivement' },
      { see: 'Les coques ramollissent au stockage', check: "Les coques reprennent l'humidité de l'air", fix: 'Stocker dans un endroit peu humide' },
      { see: "Les coques varient d'un lot à l'autre", check: "La concentration de l'aquafaba a dérivé", fix: 'Maintenir {concentration} g/ml en production industrielle' },
    ],
    sections: [
      {
        id: 'before',
        title: "Avant de monter : tout le reste d'abord",
        html: `<p>L'aquafaba ne remplace que les blancs d'œufs : la poudre d'amande, le sucre glace et le sucre en poudre de votre formule restent tels quels. La mousse doit survivre à deux étapes, le macaronnage et le croûtage, si bien que le timing compte plus que le foisonnement lui-même.</p>
<ul>
<li>Tamisez ensemble {almond} g de poudre d'amande et {icing_sugar} g de sucre glace et réservez. Chemisez les plaques maintenant. Une meringue qui attend pendant la préparation du mélange sec ou des plaques retombe avant le pochage.</li>
<li>Pesez {dose} g de VERY AQUAFABA liquide froid, du conditionnement ouvert au réfrigérateur, dans une cuve propre et sans gras. La poudre réhydratée est refroidie de la même façon.</li>
<li>Pesez {sugar} g de sucre en poudre et la crème de tartre.</li>
</ul>`,
      },
      {
        id: 'whipping',
        title: 'Foisonnement, macaronnage, pochage et croûtage',
        html: `<p>Montez l'aquafaba à grande vitesse jusqu'au bec d'oiseau souple. Ajoutez la crème de tartre, puis les {sugar} g de sucre en poudre progressivement, jusqu'à une mousse brillante et ferme. Incorporez le mélange sec en trois fois et arrêtez quand l'appareil coule de la spatule en ruban épais et lent : poussé au-delà, ou incorporé trop brusquement, les coques perdent leur relief.</p>
<p>Pochez des ronds de 3 à 4 cm sur papier cuisson, bien espacés. Laissez croûter à température ambiante jusqu'à ce qu'une peau sèche se forme : {rest} minutes, selon l'humidité. Dans une pièce humide, croûtez plus longtemps et jugez au toucher, pas au chronomètre.</p>
<p>Vous produisez en série industrielle ? Maintenez la concentration de l'aquafaba à {concentration} g/ml pour des coques identiques d'une série à l'autre.</p>`,
      },
      {
        id: 'baking',
        title: 'Cuisson, maturation et stockage',
        html: `<p>Cuisez à {bake} °C, sans chaleur tournante, pendant {bake_time} minutes. Refroidissez complètement sur la plaque avant de manipuler. Assemblez, garnissez et réfrigérez {mature} heures avant le service, pour que la texture se développe. Un lot donne {yield}.</p>
<p>Les coques reprennent l'humidité de l'air et ramollissent : stockez-les dans un endroit peu humide. Le conditionnement de liquide ouvert partage le réfrigérateur avec les macarons en maturation : notez la date d'ouverture dessus, car il s'utilise sous {opened_days} jours à {opened_temp} °C maximum. Non ouverts, les deux formats se conservent au moins {unopened_months} mois à température ambiante.</p>`,
      },
    ],
    faq: [
      { q: 'Pourquoi la meringue est-elle retombée avant le pochage ?', a: "Elle a attendu pendant la préparation du mélange sec ou des plaques. Tamisez la poudre d'amande et le sucre glace et chemisez les plaques d'abord, et montez en dernier." },
      { q: 'Pourquoi les coques ont-elles perdu leur relief ?', a: "L'appareil a été macaronné au-delà du ruban, ou trop brusquement. Incorporez en trois fois et arrêtez quand il coule de la spatule en ruban épais et lent." },
      { q: "Aucune peau ne s'est formée après le croûtage. Que faire ?", a: 'La pièce est humide. Croûtez plus longtemps que les {rest} minutes de référence et jugez au toucher, pas au chronomètre.' },
      { q: "Pourquoi les coques varient-elles d'un lot à l'autre ?", a: "La concentration de l'aquafaba a dérivé. En production industrielle, maintenez-la à {concentration} g/ml." },
      { q: 'La poudre suit-elle la même fiche ?', a: "Oui. Réhydratez {powder_dose} g de poudre avec {water_dose} ml d'eau, refroidissez et commencez à l'étape 2. La règle par blanc d'œuf : {white_powder} g de poudre + {white_water} ml d'eau = {white_total} g d'aquafaba, soit la même masse d'aquafaba liquide." },
      { q: 'Puis-je envoyer cette fiche avec une question technique ?', a: 'Oui. Remplissez la colonne de votre lot, notez ce que vous avez constaté et décrivez-le via notre [formulaire de contact]({contact_href}) ou le formulaire de demande professionnelle de cette page.' },
    ],
  },
};
