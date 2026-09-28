// Fiche de procédé, français. Même structure, mêmes {tokens} et mêmes balises HTML que
// process.en.js (vérifié par scripts/applications/check-guides.mjs). Pas de tiret long.
// Les étapes, les causes et les solutions sont celles des guides du site.
export default {
  meringue: {
    title: 'Meringue aquafaba : la fiche pas à pas - VERY AQUAFABA',
    h1: "Comment réussir la meringue à l'aquafaba : la fiche pas à pas",
    description: 'Fiche de procédé à imprimer pour la meringue VERY AQUAFABA : chaque étape avec sa valeur à atteindre, une colonne pour votre préparation et les contrôles.',
    lead: "La meringue est une recette où la différence entre une bonne plaque et une plaque collante tient à quelques degrés et quelques minutes. Cette fiche sert à les repérer : la recette de meringue VERY AQUAFABA sous forme de liste de contrôle, à imprimer, à remplir au fur et à mesure et à conserver.",
    powderNote: "Poudre : reconstituez {powder_dose} g de poudre VERY AQUAFABA avec {water_dose} ml d'eau avant l'étape 1 et refroidissez-la à {chill} °C.",
    steps: [
      { step: "Refroidir l'aquafaba", reference: '{chill} °C' },
      { step: 'Dégraisser la cuve et le fouet', reference: 'Ni gras, ni résidu' },
      { step: "Monter à grande vitesse jusqu'aux pics souples", reference: '{dose} g, {whip} min' },
      { step: 'Ajouter le stabilisant facultatif pendant le foisonnement', reference: "2 g de crème de tartre ou 1 g d'acide citrique" },
      { step: 'Ajouter le sucre à vitesse moyenne, une cuillère à soupe à la fois', reference: '{sugar} g de sucre en poudre' },
      { step: "Repasser à grande vitesse jusqu'à une mousse brillante et ferme", reference: 'Pics fermes' },
      { step: 'Pocher aussitôt', reference: '3 à 4 cm' },
      { step: 'Sécher en chaleur statique', reference: '{bake} °C, {bake_time} h' },
      { step: 'Refroidir sur la plaque, puis stocker en boîte hermétique', reference: 'Température ambiante, sachet déshydratant' },
    ],
    checks: [
      { see: "La mousse n'atteint jamais son volume", check: 'Gras sur la cuve ou le fouet', fix: 'Dégraissez tout avant de commencer' },
      { see: 'La mousse monte lentement et reste faible', check: 'Aquafaba trop tiède', fix: "Refroidissez-le d'abord à {chill} °C" },
      { see: 'Des perles de sirop sur les meringues au stockage', check: "Le sucre est entré plus vite qu'il ne pouvait se dissoudre", fix: 'Une cuillère à soupe à la fois, à vitesse moyenne' },
      { see: 'Volume perdu avant le pochage', check: 'La cuve a attendu', fix: 'Pochez et séchez tout de suite après les pics fermes' },
      { see: 'Les meringues deviennent molles et collantes', check: "La meringue absorbe l'humidité de l'air", fix: 'Stockez en boîte hermétique, au sec, avec un sachet déshydratant' },
    ],
    sections: [
      {
        id: 'use',
        title: 'Comment utiliser cette fiche',
        html: `<p>Imprimez-en une par préparation et gardez-la à côté du batteur, avec la <a href="{recipe_href}">recette complète de la meringue</a> sous la main si vous avez besoin de la méthode en détail. Au fil du travail, notez dans la dernière colonne ce que vous avez réellement fait : la température de l'aquafaba au moment d'entrer dans la cuve, le temps mis pour atteindre les pics souples, le temps passé au four. La plupart du temps, cela correspondra à la référence. Quand ce n'est pas le cas, vous avez la raison sur le papier avant que quiconque ne goûte une meringue.</p>
<p>Conservez les fiches remplies. Une préparation ratée vaut autant qu'une réussie, parce que le pâtissier suivant part de ce que vous avez appris au lieu de le redécouvrir. Et si une préparation rate sans que vous voyiez pourquoi, envoyez-nous la fiche : c'est le moyen le plus rapide pour nous de vous aider.</p>`,
      },
      {
        id: 'before',
        title: "Avant de monter l'aquafaba pour la meringue",
        html: `<p>Trois choses règlent la plupart des préparations de meringue avant même que le batteur ne tourne :</p>
<ul>
<li>L'aquafaba est froid, tout juste sorti du réfrigérateur à {chill} °C. La poudre reconstituée est refroidie au même point.</li>
<li>La cuve et le fouet sont essuyés. La mousse d'aquafaba ne contient aucune matière grasse, et un film de gras bride le volume.</li>
<li>Les {sugar} g de sucre en poudre sont pesés et à portée de main, parce qu'il entre une cuillère à la fois et que vous n'aurez pas envie de vous arrêter pour le peser.</li>
</ul>`,
      },
      {
        id: 'look',
        title: 'Comment savoir que chaque étape se passe bien',
        html: `<p>La fiche vous donne la valeur à atteindre. Voici comment savoir que vous l'avez atteinte, étape par étape :</p>
<ul>
<li><strong>Étape 3, les pics souples.</strong> Soulevez le fouet : la mousse garde une forme, mais la pointe retombe. Pour la préparation de référence, cela arrive vers {whip} minutes à grande vitesse. Une cuve plus pleine met plus de temps, fiez-vous donc au pic, pas au chronomètre.</li>
<li><strong>Étape 5, le sucre.</strong> Chaque cuillère disparaît dans la mousse avant que la suivante n'entre. Si vous sentez des grains contre la paroi de la cuve, attendez. Le sucre non dissous est ce qui suinte de la meringue finie au stockage.</li>
<li><strong>Étape 6, les pics fermes.</strong> Le pic se tient droit quand vous soulevez le fouet et la mousse est brillante. Cela vient avec le dernier sucre. C'est votre signal pour pocher, pas pour laisser la cuve une minute.</li>
<li><strong>Étape 7, le pochage.</strong> Des ronds de 3 à 4 cm sur papier cuisson, régulièrement espacés. La mousse d'aquafaba tient moins bien que celle de blanc d'œuf, et la cuve qui attend pendant qu'une autre monte perd du volume.</li>
<li><strong>Étape 8, le séchage.</strong> À {bake} °C en chaleur statique, les meringues ne cuisent pas, elles sèchent. Elles sont prêtes quand elles sont sèches à cœur, vers {bake_time} heures pour cette taille ; les formes plus grandes demandent plus longtemps. Un centre collant signifie qu'elles sont sorties trop tôt.</li>
<li><strong>Étape 9, le refroidissement.</strong> Complètement froides sur la plaque avant d'être déplacées, puis en boîte hermétique avec un sachet déshydratant si vous en avez un. La meringue absorbe l'humidité de l'air, la boîte compte donc autant que le four.</li>
</ul>
<p>En série industrielle, maintenez la concentration de l'aquafaba à {concentration} g/ml pour que la mousse se comporte de la même façon à chaque série.</p>`,
      },
    ],
    faq: [
      { q: 'Comment savoir que la mousse a atteint les pics fermes ?', a: "Soulevez le fouet : le pic se tient droit sans retomber et la mousse est brillante. La préparation de référence atteint les pics souples en {whip} minutes ; le sucre entre ensuite, et le pic ferme vient avec le dernier sucre." },
      { q: 'Puis-je garder la mousse montée pendant que le four est occupé ?', a: "Non. Pochez et séchez tout de suite après les pics fermes. Si le four est plein, montez la cuve suivante plus tard plutôt que de laisser attendre une cuve finie." },
      { q: "Les meringues sont collantes à l'intérieur. Que dois-je vérifier ?", a: "L'étape de séchage : {bake} °C en chaleur statique pendant les {bake_time} heures complètes, jusqu'à ce qu'elles soient sèches à cœur, puis un refroidissement complet sur la plaque. Les formes plus grandes que 3 à 4 cm demandent plus que le temps de référence." },
      { q: 'La poudre suit-elle la même fiche ?', a: "Oui. Reconstituez {powder_dose} g de poudre avec {water_dose} ml d'eau, refroidissez-la à {chill} °C et commencez à l'étape 1. La règle par blanc d'œuf : {white_powder} g de poudre + {white_water} ml d'eau = {white_total} g d'aquafaba, soit la même masse d'aquafaba liquide." },
      { q: 'Puis-je envoyer cette fiche avec une question technique ?', a: "Oui. Remplissez votre colonne, notez ce que vous avez constaté, et décrivez-le par notre [formulaire de contact]({contact_href}) ou par le formulaire professionnel de cette page. La fiche remplie est le moyen le plus rapide pour nous de vous aider." },
    ],
  },

  'chocolate-mousse': {
    title: 'Mousse au chocolat aquafaba : pas à pas - VERY AQUAFABA',
    h1: "Comment réussir la mousse au chocolat à l'aquafaba : la fiche pas à pas",
    description: 'Fiche de procédé à imprimer pour la mousse au chocolat VERY AQUAFABA : températures du chocolat, foisonnement, incorporation, prise et contrôles.',
    lead: "La mousse au chocolat est une recette à deux températures, et la mousse ne tient que si le chocolat rencontre la mousse à la bonne. Cette fiche sert à s'en assurer : la recette de mousse VERY AQUAFABA sous forme de liste de contrôle, à imprimer, à remplir au fur et à mesure et à conserver.",
    powderNote: "Poudre : reconstituez {powder_dose} g de poudre VERY AQUAFABA avec {water_dose} ml d'eau à l'avance et mettez-la au frais avant l'étape 3.",
    steps: [
      { step: 'Fondre la couverture noire', reference: '{chocolate} g, 45 à 50 °C' },
      { step: 'Laisser refroidir le chocolat', reference: '{fold_temp} °C' },
      { step: "Dégraisser la cuve et le fouet, peser l'aquafaba froid", reference: '{dose} g' },
      { step: "Monter à grande vitesse jusqu'aux pics souples", reference: '{whip} min' },
      { step: 'Ajouter le stabilisant facultatif', reference: "2 g de crème de tartre ou 1 g d'acide citrique" },
      { step: "Ajouter le sucre progressivement en fouettant, jusqu'aux pics fermes et brillants", reference: '{sugar} g de sucre en poudre' },
      { step: 'Incorporer le chocolat refroidi à la main, vite et délicatement', reference: 'Arrêtez dès que le mélange est homogène' },
      { step: 'Pocher ou dresser aussitôt dans les coupes', reference: '{yield}' },
      { step: 'Mettre au froid pour la prise', reference: 'Au moins {set_time} h ; se garde {keep} jours' },
    ],
    checks: [
      { see: "La mousse retombe à l'incorporation du chocolat", check: 'Un chocolat au-dessus de {fold_temp} °C a fait fondre la mousse', fix: "Ramenez-le à {fold_temp} °C ou moins avant de l'incorporer" },
      { see: 'Mousse dense et lourde', check: "Trop de mélange a chassé l'air", fix: "Incorporez juste jusqu'à homogénéité" },
      { see: 'La mousse ne monte pas', check: 'Gras dans la cuve, ou sucre ajouté avant les pics souples', fix: 'Cuve propre, et le sucre seulement une fois les pics souples formés' },
      { see: "Volume perdu avant l'incorporation", check: 'La mousse a attendu le chocolat', fix: 'Ayez le chocolat refroidi et prêt avant de monter' },
      { see: 'Mousse faible et lente', check: 'Aquafaba trop tiède', fix: 'Montez-le froid' },
      { see: 'Mousse irrégulière à partir de stock congelé', check: 'Pas complètement décongelé ou pas mélangé', fix: "Décongelez complètement et mélangez jusqu'à homogénéité. Ne recongelez jamais" },
    ],
    sections: [
      {
        id: 'use',
        title: 'Comment utiliser cette fiche',
        html: `<p>Imprimez-en une par préparation et gardez-la près du batteur, avec la <a href="{recipe_href}">recette complète de la mousse au chocolat</a> sous la main si vous avez besoin de la méthode en détail. Au fil du travail, notez dans la dernière colonne ce que vous avez réellement fait : la température du chocolat à l'incorporation, le temps mis par la mousse pour atteindre les pics fermes, le temps de prise des coupes. Quand une mousse sort lourde ou retombe, la raison est en général sur cette fiche.</p>
<p>Conservez les fiches remplies. La personne suivante qui fait la mousse part de ce qui a marché, et si une préparation rate sans que vous voyiez pourquoi, envoyez-nous la fiche : c'est le moyen le plus rapide pour nous de vous aider.</p>`,
      },
      {
        id: 'before',
        title: "Avant de monter l'aquafaba pour la mousse",
        html: `<p>Trois choses règlent la plupart des préparations avant que le fouet ne tourne :</p>
<ul>
<li>Le chocolat est fondu, et il refroidit déjà. Il doit atteindre {fold_temp} °C avant de rencontrer la mousse, et la mousse ne doit pas l'attendre.</li>
<li>L'aquafaba est froid, tout juste sorti du réfrigérateur. La poudre reconstituée est refroidie au même point.</li>
<li>La cuve et le fouet sont essuyés, et les {sugar} g de sucre sont pesés et à portée de main.</li>
</ul>`,
      },
      {
        id: 'look',
        title: 'Comment savoir que chaque étape se passe bien',
        html: `<p>La fiche vous donne la valeur à atteindre. Voici comment savoir que vous l'avez atteinte :</p>
<ul>
<li><strong>Étape 1, la fonte.</strong> Lisse et fluide à 45 à 50 °C, au bain-marie ou en tempéreuse. Ni grains, ni brûlé sur les bords.</li>
<li><strong>Étape 2, le refroidissement.</strong> Un thermomètre indique {fold_temp} °C. Plus chaud, le chocolat fait fondre la mousse en entrant ; c'est la retombée que vous voyez au premier tour de spatule.</li>
<li><strong>Étape 4, les pics souples.</strong> Soulevez le fouet : la mousse garde une forme et la pointe retombe, après environ {whip} minutes pour la préparation de référence. Une cuve plus pleine met plus de temps.</li>
<li><strong>Étape 6, les pics fermes.</strong> Brillante, dense, et le pic se tient droit. La meringue doit être ferme sous la spatule avant que le moindre chocolat ne la touche.</li>
<li><strong>Étape 7, l'incorporation.</strong> À la main, vite et délicatement, et vous vous arrêtez dès que la couleur est uniforme. Chaque tour de spatule en plus coûte de l'air, et une mousse dense est le signe qu'il y en a eu trop.</li>
<li><strong>Étape 9, la prise.</strong> Pochée ou dressée aussitôt, puis au moins {set_time} heures au réfrigérateur. Elle garde sa forme quand on incline la coupe. En emballage fermé, elle se garde {keep} jours.</li>
</ul>
<p>Sur les grandes préparations, émulsionnez d'abord une partie du chocolat avec un peu d'aquafaba, puis incorporez le reste de la mousse. Les grandes séries restent ainsi homogènes.</p>`,
      },
    ],
    faq: [
      { q: 'À quel moment le sucre entre-t-il ?', a: "Seulement une fois que la mousse tient les pics souples, après environ {whip} minutes, puis progressivement en fouettant jusqu'à des pics brillants et fermes. Un sucre ajouté avant les pics souples empêche la mousse de monter." },
      { q: 'Combien de temps la mousse prend-elle et se garde-t-elle ?', a: "Au moins {set_time} heures au réfrigérateur pour la prise, et elle se garde {keep} jours si elle est préparée dans de bonnes conditions d'hygiène. Mettez les coupes au froid tout de suite après le pochage." },
      { q: 'La poudre suit-elle la même fiche ?', a: "Oui. Reconstituez {powder_dose} g de poudre avec {water_dose} ml d'eau à l'avance et mettez-la au frais, puis commencez à l'étape 3. La règle par blanc d'œuf : {white_powder} g de poudre + {white_water} ml d'eau = {white_total} g d'aquafaba, soit la même masse d'aquafaba liquide." },
      { q: 'Puis-je envoyer cette fiche avec une question technique ?', a: "Oui. Remplissez votre colonne, notez ce que vous avez constaté, et décrivez-le par notre [formulaire de contact]({contact_href}) ou par le formulaire professionnel de cette page." },
    ],
  },

  mayonnaise: {
    title: 'Mayonnaise vegan aquafaba : pas à pas - VERY AQUAFABA',
    h1: "Comment réussir la mayonnaise vegan à l'aquafaba : la fiche pas à pas",
    description: "Fiche de procédé à imprimer pour la mayonnaise VERY AQUAFABA : l'émulsion à froid étape par étape, votre colonne et les contrôles.",
    lead: "Une mayonnaise prend ou ne prend pas, et au moment où on le voit, l'huile est déjà dedans. Cette fiche sert à la faire prendre à chaque fois : la recette de mayonnaise vegan VERY AQUAFABA sous forme de liste de contrôle, à imprimer, à remplir au fur et à mesure et à conserver.",
    powderNote: "Poudre : reconstituez {powder_dose} g de poudre VERY AQUAFABA avec {water_dose} ml d'eau froide sur une balance de précision avant l'étape 1, ou refroidissez-la à {chill} °C.",
    steps: [
      { step: "Refroidir l'aquafaba", reference: '{chill} °C' },
      { step: "Réunir l'aquafaba, la moutarde, le sel et le jus de citron ou le vinaigre dans un récipient haut et étroit", reference: '{dose} g, {mustard} g, {salt} g, {lemon} g' },
      { step: 'Lancer le mixeur plongeant à pleine vitesse', reference: 'Fort cisaillement' },
      { step: "Verser l'huile en filet fin et régulier", reference: "{oil} g, {oil_ratio} par rapport à l'aquafaba" },
      { step: 'Une fois épaissie, goûter et assaisonner', reference: 'Épaissie' },
      { step: "Trop serrée ? Mixer avec quelques grammes d'eau froide", reference: "De l'eau, pas plus d'huile" },
      { step: 'Transférer dans un récipient propre, réfrigérer aussitôt', reference: "Se garde jusqu'à {keep} jours" },
    ],
    checks: [
      { see: "L'émulsion ne prend jamais", check: 'Huile ajoutée trop vite, ou cisaillement trop faible', fix: 'Filet fin et régulier, mixeur à pleine vitesse' },
      { see: 'Émulsion lente et instable', check: 'Aquafaba trop tiède', fix: 'Utilisez-le à {chill} °C' },
      { see: 'Trop épaisse pour être travaillée', check: "L'émulsion s'est resserrée", fix: "Mixez avec quelques grammes d'eau froide, pas plus d'huile" },
      { see: 'Instable sur les grandes préparations', check: 'Taille des gouttelettes non maîtrisée', fix: 'Passez à un mixeur à fort cisaillement' },
      { see: 'Résultat trop fluide à partir de stock congelé', check: "L'aquafaba décongelé est revenu plus fluide", fix: "Mélangez jusqu'à homogénéité. S'il reste fluide, réduisez brièvement à feu doux" },
      { see: 'Conservation plus courte que {keep} jours', check: 'Hygiène ou passage trop lent au réfrigérateur', fix: 'Récipient propre, réfrigérez immédiatement' },
    ],
    sections: [
      {
        id: 'use',
        title: 'Comment utiliser cette fiche',
        html: `<p>Imprimez-en une par préparation et gardez-la au poste des sauces, avec la <a href="{recipe_href}">recette complète de la mayonnaise</a> sous la main si vous avez besoin de la méthode en détail. Au fil du travail, notez dans la dernière colonne ce que vous avez réellement fait : la température de l'aquafaba, la vitesse à laquelle l'huile est entrée, le moment où elle a épaissi, le moment où elle est passée au réfrigérateur. Quand une émulsion tranche, la raison est presque toujours l'une de celles-là.</p>
<p>Conservez les fiches remplies. Elles disent au cuisinier suivant ce qui a marché sur votre mixeur avec votre huile, et si une préparation rate sans que vous voyiez pourquoi, envoyez-nous la fiche : c'est le moyen le plus rapide pour nous de vous aider.</p>`,
      },
      {
        id: 'before',
        title: "Avant de mixer l'aquafaba en mayonnaise",
        html: `<p>Trois choses règlent la plupart des préparations avant que le mixeur ne démarre :</p>
<ul>
<li>L'aquafaba est à {chill} °C. Un aquafaba tiède donne une émulsion lente et instable, et la poudre reconstituée est refroidie au même point.</li>
<li>Le récipient est haut et étroit, pour que la tête du mixeur plongeant reste sous la surface et que le cisaillement reste élevé.</li>
<li>Les {oil} g d'huile sont mesurés et prêts à être versés en filet fin et régulier. S'arrêter pour mesurer en plein filet, c'est ainsi qu'une émulsion tranche.</li>
</ul>`,
      },
      {
        id: 'look',
        title: 'Comment savoir que chaque étape se passe bien',
        html: `<p>La fiche vous donne la valeur à atteindre. Voici comment savoir que vous l'avez atteinte :</p>
<ul>
<li><strong>Étape 2, la base.</strong> Aquafaba, moutarde, sel et acide forment un seul liquide lisse au fond du récipient avant que la moindre huile n'entre.</li>
<li><strong>Étape 4, l'huile.</strong> Un filet fin et régulier, mixeur à pleine vitesse. Dès les premières cuillères, la base pâlit et commence à épaissir ; c'est l'émulsion qui prend. Si elle reste fluide et que l'huile flotte en surface, arrêtez de verser et mixez jusqu'à ce qu'elle accroche avant d'en ajouter.</li>
<li><strong>Étape 5, épaissie.</strong> Elle tient un pic souple sur la spatule et la surface reste là où vous la laissez. Goûtez, puis assaisonnez.</li>
<li><strong>Étape 6, trop serrée.</strong> Si elle durcit en pâte, quelques grammes d'eau froide la rattrapent. Plus d'huile aggrave les choses.</li>
<li><strong>Étape 7, au réfrigérateur.</strong> Un récipient propre, couvercle fermé, au froid aussitôt. Les {keep} jours commencent là, et seulement dans de bonnes conditions d'hygiène.</li>
</ul>
<p>Sur les grandes préparations, passez à un mixeur à fort cisaillement. C'est la taille des gouttelettes qui garde une grande émulsion stable.</p>`,
      },
    ],
    faq: [
      { q: "L'aquafaba doit-il être froid ?", a: "Oui, à {chill} °C. Un aquafaba tiède donne une émulsion lente et instable. Le Tetrapak ouvert vit au réfrigérateur, il se verse donc à la bonne température." },
      { q: 'Combien de temps se garde la mayonnaise ?', a: "Jusqu'à {keep} jours au réfrigérateur quand elle est préparée dans de bonnes conditions d'hygiène et réfrigérée aussitôt dans un récipient propre." },
      { q: 'La poudre suit-elle la même fiche ?', a: "Oui. Reconstituez {powder_dose} g de poudre avec {water_dose} ml d'eau froide sur une balance de précision et commencez à l'étape 1. La règle par blanc d'œuf : {white_powder} g de poudre + {white_water} ml d'eau = {white_total} g d'aquafaba, soit la même masse d'aquafaba liquide." },
      { q: 'Puis-je envoyer cette fiche avec une question technique ?', a: "Oui. Remplissez votre colonne, notez ce que vous avez constaté, et décrivez-le par notre [formulaire de contact]({contact_href}) ou par le formulaire professionnel de cette page." },
    ],
  },

  baking: {
    title: "Remplacer les œufs en pâtisserie - VERY AQUAFABA",
    h1: "Comment remplacer les œufs par l'aquafaba en pâtisserie : la fiche d'essai",
    description: 'Fiche à imprimer pour un essai de substitution des œufs avec VERY AQUAFABA dans votre recette : équivalences, ajustements et contrôles.',
    lead: "Remplacer les œufs d'une pâtisserie est un petit changement qui touche tout ce qui l'entoure : l'eau, le temps de cuisson, la mie. Cette fiche sert à suivre ce que vous avez changé et ce que cela a donné : un essai par fiche, remplie au fur et à mesure, et conservée pour le suivant.",
    powderNote: "Poudre : {white_powder} g + {white_water} ml d'eau par blanc d'œuf, {egg_powder} g + {egg_water} ml par œuf entier. Pour les préparations montées, refroidissez-la d'abord à {chill} °C ; pour les pâtes et appareils, elle entre telle quelle.",
    steps: [
      { step: 'Noter les œufs de votre formule', reference: 'Œufs entiers, blancs, jaunes' },
      { step: "Calculer l'aquafaba", reference: "{egg_liquid} g par œuf entier, {white_liquid} g par blanc d'œuf, {yolk_liquid} g + {yolk_oil} g d'huile par jaune" },
      { step: 'Décider : monté ou non monté', reference: 'Blancs : monté. Œufs entiers : tel quel' },
      { step: "Refroidir l'aquafaba s'il est monté", reference: '{chill} °C' },
      { step: 'Monté : incorporer délicatement et sans attendre', reference: 'Biscuits et génoises' },
      { step: 'Gâteaux, cookies et muffins : le mélanger au sucre avant la matière grasse', reference: 'Une émulsion plus stable' },
      { step: "Œufs entiers remplacés : réduire légèrement le lait ou l'eau, ou augmenter les ingrédients secs", reference: "L'aquafaba apporte plus d'eau que l'œuf" },
      { step: 'Cuire à cœur', reference: "L'eau en plus allonge la cuisson" },
      { step: "Noter le volume, la mie et l'humidité ; revérifier la conservation si vous avez reformulé", reference: "L'activité de l'eau change" },
    ],
    checks: [
      { see: 'Biscuit plat', check: 'La mousse a attendu, ou a été incorporée trop fort', fix: 'Incorporez sans attendre et délicatement' },
      { see: 'Appareil trop liquide, mouillé', check: "Œufs entiers remplacés un pour un, eau non réduite", fix: "Réduisez légèrement le lait ou l'eau, ou ajoutez des ingrédients secs" },
      { see: 'Centre humide', check: "L'eau en plus allonge la cuisson", fix: 'Cuisez à cœur avant de sortir du four' },
      { see: 'Mousse faible', check: 'Aquafaba trop tiède', fix: 'Montez-le à {chill} °C' },
      { see: 'Mousse ou liant faible à partir de stock congelé', check: "L'aquafaba décongelé est revenu plus fluide", fix: 'Réduisez brièvement à feu doux. Ne recongelez jamais' },
      { see: 'La conservation du produit a bougé', check: "Changer l'humidité change l'activité de l'eau", fix: 'Revérifiez la conservation et la stabilité microbienne après reformulation' },
    ],
    sections: [
      {
        id: 'use',
        title: 'Comment utiliser cette fiche',
        html: `<p>Imprimez-en une par essai, une recette à la fois, avec le <a href="{recipe_href}">guide pâtisserie</a> sous la main pour la méthode derrière chaque étape. Notez les œufs de votre recette en haut, puis remplissez la dernière colonne au fur et à mesure : combien d'aquafaba est entré et s'il était monté, ce que vous avez retiré des liquides, la durée de la cuisson, et l'aspect de la mie une fois froide. Cette colonne fait la différence entre un essai que vous pouvez répéter et un essai à refaire.</p>
<p>Conservez les fiches remplies, surtout celles des essais ratés. Et si une cuisson sort mal sans que vous voyiez pourquoi, envoyez-nous la fiche : c'est le moyen le plus rapide pour nous de vous aider.</p>`,
      },
      {
        id: 'before',
        title: 'Avant de remplacer les œufs',
        html: `<p>Trois choses décident de l'essai avant que le four ne soit allumé :</p>
<ul>
<li>Quels œufs vous remplacez. Les blancs seuls, c'est un remplacement direct. Les œufs entiers apportent de l'eau en plus. Les jaunes demandent les {yolk_oil} g d'huile.</li>
<li>Monté ou versé. L'aquafaba est monté, à {chill} °C, quand il tient lieu de blancs dans un biscuit ou un appareil riche en sucre. Il entre tel quel quand il tient lieu du liant et de l'humidité des œufs entiers.</li>
<li>Seul l'œuf change. Même farine, même mélange, même four, sinon vous ne saurez pas ce que l'aquafaba a fait.</li>
</ul>`,
      },
      {
        id: 'look',
        title: 'Comment savoir que chaque étape se passe bien',
        html: `<p>La fiche vous donne la valeur à atteindre. Voici comment savoir que vous l'avez atteinte :</p>
<ul>
<li><strong>Étape 2, l'aquafaba.</strong> {egg_liquid} g par œuf entier, {white_liquid} g par blanc d'œuf, pesés. En poudre, {white_powder} g et {white_water} ml d'eau par blanc d'œuf.</li>
<li><strong>Étape 5, monté et incorporé.</strong> La mousse entre dès qu'elle est prête, incorporée délicatement jusqu'à la disparition des traînées et pas plus. Un biscuit qui sort plat a attendu trop longtemps ou a été incorporé trop fort.</li>
<li><strong>Étape 7, l'eau.</strong> Les œufs entiers sont remplacés, le lait ou l'eau baisse donc légèrement, ou les ingrédients secs augmentent. L'appareil doit avoir l'aspect qu'il avait avec les œufs, pas plus liquide.</li>
<li><strong>Étape 8, la cuisson.</strong> L'eau en plus signifie une cuisson plus longue. La lame ressort propre ; un centre humide signifie que c'est sorti trop tôt.</li>
<li><strong>Étape 9, les notes.</strong> Volume, mie et humidité, notés pendant que la pièce est devant vous. Si vous avez changé l'humidité, la conservation du produit a peut-être bougé avec elle, revérifiez-la donc.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'Le centre est humide. Que dois-je vérifier ?', a: "Le temps de cuisson : l'eau en plus qu'apporte l'aquafaba allonge la cuisson. Cuisez à cœur avant de sortir du four." },
      { q: 'Dois-je le monter ?', a: "Seulement quand il remplace des blancs d'œufs. Quand il remplace le liant et l'humidité des œufs entiers, dans les cookies, les brownies et les pâtes, il entre non monté." },
      { q: 'La poudre suit-elle la même fiche ?', a: "Oui. {white_powder} g de poudre + {white_water} ml d'eau = {white_total} g d'aquafaba, soit la même masse d'aquafaba liquide. Pour les préparations montées, refroidissez-la d'abord à {chill} °C ; pour les pâtes et appareils, elle entre telle quelle." },
      { q: 'Puis-je envoyer cette fiche avec une question technique ?', a: "Oui. Remplissez votre colonne, notez ce que vous avez constaté, et décrivez-le par notre [formulaire de contact]({contact_href}) ou par le formulaire professionnel de cette page." },
    ],
  },

  cocktails: {
    title: 'Shaker un sour aquafaba : pas à pas - VERY AQUAFABA',
    h1: "Comment shaker un sour à l'aquafaba : la fiche pas à pas",
    description: 'Fiche de service à imprimer pour le whiskey sour VERY AQUAFABA : le dosage, le dry shake, le shake avec glace et les contrôles quand la mousse retombe.',
    lead: "Un sour est un cocktail de trente secondes, et la mousse se décide dans les quinze premières. Cette fiche sert à ce que toute l'équipe le shake de la même façon : le whiskey sour VERY AQUAFABA sous forme de liste de contrôle pour le poste, remplie les soirs où la mousse n'est pas ce qu'elle devrait être.",
    powderNote: "Poudre : pour un cocktail, {powder_dose} g de poudre VERY AQUAFABA + {water_dose} ml d'eau. Reconstituez-la avant le service et mettez-la au frais ; froid, l'aquafaba mousse plus vite et tient plus longtemps.",
    steps: [
      { step: 'Doser sans glace', reference: "{whiskey} ml de whiskey, {lemon_juice} ml de jus de citron, {syrup} ml de sirop de sucre, {dose} g d'aquafaba froid" },
      { step: 'Dry shake, vigoureusement', reference: '{dry_shake} s' },
      { step: 'Ajouter la glace et shaker à nouveau', reference: '{wet_shake} s' },
      { step: 'Filtrer finement dans une coupe refroidie', reference: 'Servir aussitôt' },
      { step: 'Garnir', reference: 'Quelques gouttes de bitters sur la mousse' },
    ],
    checks: [
      { see: 'Mousse trop fine', check: 'La glace a été mise dès le départ', fix: "Dry shake d'abord, glace ensuite" },
      { see: 'Mousse lente et molle', check: 'Aquafaba à température ambiante', fix: "Gardez-le au frais jusqu'au shake" },
      { see: 'Plus de hauteur en milieu de service', check: "L'aquafaba a été ajouté au mélange préparé à l'avance", fix: "Ne préparez que la base, ajoutez l'aquafaba cocktail par cocktail" },
      { see: "La mousse retombe avant d'arriver au client", check: 'Le cocktail a attendu au passe', fix: 'Shakez à la commande et servez aussitôt' },
      { see: "Irrégulier d'un cocktail à l'autre", check: "Dosage à l'œil", fix: 'Pesez ou dosez au jigger {dose} g à chaque fois' },
    ],
    sections: [
      {
        id: 'use',
        title: 'Comment utiliser cette fiche',
        html: `<p>Imprimez-la et glissez-la dans le cahier du bar, avec la <a href="{recipe_href}">recette complète du whiskey sour</a> sous la main pour le dosage. La plupart des soirs, la colonne reste vide. Le soir où la mousse est fine ou retombe tôt, remplissez-la : l'aquafaba était-il froid, le dry shake est-il venu en premier, a-t-il été pesé, le cocktail a-t-il attendu au passe. Une fiche remplie désigne en général la cause.</p>
<p>Gardez les fiches avec le cahier du bar, pour qu'un nouveau bartender shake le sour comme le bar le shake. Et si la mousse n'est toujours pas ce qu'elle devrait être sans que vous voyiez pourquoi, envoyez-nous la fiche : c'est le moyen le plus rapide pour nous de vous aider.</p>`,
      },
      {
        id: 'before',
        title: 'Avant le service',
        html: `<p>Trois choses règlent le sour avant la première commande :</p>
<ul>
<li>L'aquafaba est au réfrigérateur, et il y retourne entre deux services. La poudre reconstituée est mise au frais de la même façon ; froid, l'aquafaba mousse plus vite et tient plus longtemps.</li>
<li>La base est préparée à l'avance si la soirée est chargée : whiskey, citron et sirop. L'aquafaba n'y est jamais.</li>
<li>Un jigger ou une balance est au poste. {dose} g par cocktail, à chaque cocktail.</li>
</ul>`,
      },
      {
        id: 'look',
        title: 'Comment savoir que chaque étape se passe bien',
        html: `<p>La fiche vous donne la valeur à atteindre. Voici comment savoir que vous l'avez atteinte :</p>
<ul>
<li><strong>Étape 1, le dosage.</strong> Pas de glace dans le shaker. {whiskey} ml de whiskey, {lemon_juice} ml de jus de citron, {syrup} ml de sirop de sucre et {dose} g d'aquafaba, froid.</li>
<li><strong>Étape 2, le dry shake.</strong> {dry_shake} secondes, vigoureusement. Quand vous ouvrez le shaker, le liquide est devenu pâle et épais ; c'est la mousse, et elle se fait ici ou pas du tout.</li>
<li><strong>Étape 3, avec glace.</strong> {wet_shake} secondes de plus. Le shaker givre à l'extérieur. Ce shake refroidit et dilue ; il ne fait pas de mousse.</li>
<li><strong>Étape 4, le filtrage.</strong> Filtré finement dans une coupe refroidie, la mousse monte d'elle-même et reste ferme. Le cocktail part aussitôt ; un cocktail qui attend au passe perd sa mousse en chemin.</li>
<li><strong>Étape 5, la garniture.</strong> Quelques gouttes de bitters se posent sur la mousse sans couler. Si elles coulent, la mousse n'est pas assez ferme, et la réponse est aux étapes 1 et 2.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'Le cocktail doit-il être servi aussitôt ?', a: "Oui. Shakez à la commande et servez aussitôt : un cocktail qui attend au passe perd sa mousse avant d'arriver au client." },
      { q: 'Combien de temps tient un Tetrapak ouvert derrière le bar ?', a: "Le liquide ouvert se garde à 4 °C maximum et s'utilise dans les {opened_days} jours. Notez la date d'ouverture sur le Tetrapak et servez-vous-en pour le service, pas depuis le bac à bouteilles." },
      { q: 'La poudre suit-elle la même fiche ?', a: "Oui. Reconstituez {powder_dose} g de poudre avec {water_dose} ml d'eau par cocktail avant le service et mettez-la au frais. La règle par blanc d'œuf : {white_powder} g de poudre + {white_water} ml d'eau = {white_total} g d'aquafaba, soit la même masse d'aquafaba liquide." },
      { q: 'Puis-je envoyer cette fiche avec une question technique ?', a: "Oui. Remplissez votre colonne, notez ce que vous avez constaté, et décrivez-le par notre [formulaire de contact]({contact_href}) ou par le formulaire professionnel de cette page." },
    ],
  },

  macarons: {
    title: 'Macarons aquafaba : la fiche pas à pas - VERY AQUAFABA',
    h1: "Comment réussir les macarons à l'aquafaba : la fiche pas à pas",
    description: 'Fiche de procédé à imprimer pour les macarons VERY AQUAFABA : foisonnement, macaronnage, croûtage, cuisson, maturation, votre colonne et les contrôles.',
    lead: "Les coques de macarons se décident dans les minutes entre l'arrêt du fouet et l'entrée de la plaque au four. Cette fiche sert à garder ces minutes sous contrôle : la recette de macarons VERY AQUAFABA sous forme de liste de contrôle, à imprimer, à remplir au fur et à mesure et à conserver.",
    powderNote: "Poudre : reconstituez {powder_dose} g de poudre VERY AQUAFABA avec {water_dose} ml d'eau et mettez-la au frais avant l'étape 2. Froid, l'aquafaba monte plus vite en une mousse plus stable.",
    steps: [
      { step: "Tamiser ensemble la poudre d'amande et le sucre glace ; préparer les plaques", reference: '{almond} g, {icing_sugar} g' },
      { step: "Monter l'aquafaba froid à grande vitesse jusqu'aux pics souples", reference: '{dose} g' },
      { step: "Ajouter la crème de tartre, puis le sucre en poudre progressivement, jusqu'aux pics fermes et brillants", reference: '{sugar} g' },
      { step: 'Incorporer le mélange sec en trois fois', reference: 'Arrêtez au ruban épais et lent' },
      { step: 'Pocher des ronds sur papier cuisson, régulièrement espacés', reference: '3 à 4 cm' },
      { step: "Laisser croûter à température ambiante jusqu'à former une peau sèche", reference: "{rest} min, selon l'humidité" },
      { step: 'Cuire en chaleur statique', reference: '{bake} °C, {bake_time} min' },
      { step: 'Refroidir complètement sur la plaque avant de manipuler', reference: 'Complètement refroidies' },
      { step: 'Assembler, garnir et réfrigérer avant le service', reference: '{mature} h' },
    ],
    checks: [
      { see: "La mousse n'atteint pas son volume", check: 'Gras sur la cuve ou le fouet', fix: 'Dégraissez tout avant de commencer' },
      { see: 'La meringue retombe avant le pochage', check: 'Elle a attendu pendant la préparation du mélange sec ou des plaques', fix: "Tamisez et préparez les plaques d'abord, montez en dernier" },
      { see: 'Les coques perdent leur relief', check: 'Macaronnage poussé au-delà du ruban, ou trop brutal', fix: 'Arrêtez au ruban épais et lent' },
      { see: 'Pas de peau après le croûtage', check: 'Pièce humide', fix: 'Laissez croûter plus longtemps et jugez au toucher, pas au chronomètre' },
      { see: 'Les coques suintent au stockage', check: 'Sucre pas complètement dissous', fix: 'Ajoutez le sucre en poudre progressivement' },
      { see: 'Les coques ramollissent au stockage', check: "Les coques absorbent l'humidité de l'air", fix: 'Stockez dans un endroit peu humide' },
      { see: "Les coques varient d'une préparation à l'autre", check: "La concentration de l'aquafaba a dérivé", fix: 'Maintenez {concentration} g/ml en série industrielle' },
    ],
    sections: [
      {
        id: 'use',
        title: 'Comment utiliser cette fiche',
        html: `<p>Imprimez-en une par préparation et gardez-la près du batteur, avec la <a href="{recipe_href}">recette complète des macarons</a> sous la main si vous avez besoin de la méthode en détail. Au fil du travail, notez dans la dernière colonne ce que vous avez réellement fait : le temps de la meringue, le nombre de tours de macaronnage, le temps de croûtage et l'état de la pièce, le temps de cuisson de la plaque. Les macarons ratent pour de petites raisons, et c'est là que vous les trouvez.</p>
<p>Conservez les fiches remplies. L'humidité change d'un jour à l'autre, et les fiches d'une semaine humide valent plus que n'importe quelle règle. Si une préparation rate sans que vous voyiez pourquoi, envoyez-nous la fiche : c'est le moyen le plus rapide pour nous de vous aider.</p>`,
      },
      {
        id: 'before',
        title: "Avant de monter l'aquafaba pour les macarons",
        html: `<p>Trois choses règlent la plupart des préparations avant que le fouet ne tourne :</p>
<ul>
<li>La poudre d'amande et le sucre glace sont tamisés ensemble et les plaques sont préparées. La mousse ne doit pas attendre pendant que vous le faites.</li>
<li>L'aquafaba est froid, tout juste sorti du réfrigérateur. La poudre reconstituée est refroidie au même point.</li>
<li>La cuve et le fouet sont essuyés, et les {sugar} g de sucre en poudre sont pesés et à portée de main.</li>
</ul>`,
      },
      {
        id: 'look',
        title: 'Comment savoir que chaque étape se passe bien',
        html: `<p>La fiche vous donne la valeur à atteindre. Voici comment savoir que vous l'avez atteinte :</p>
<ul>
<li><strong>Étape 3, les pics fermes.</strong> Brillante, et le pic se tient droit quand vous soulevez le fouet. Le sucre est entré progressivement, après les pics souples ; le sucre non dissous est ce qui suinte des coques plus tard.</li>
<li><strong>Étape 4, le macaronnage.</strong> Trois fois, et vous vous arrêtez quand l'appareil coule de la spatule en ruban épais et lent. Au-delà, les coques perdent leur relief.</li>
<li><strong>Étape 5, le pochage.</strong> Des ronds de 3 à 4 cm, régulièrement espacés, et l'appareil s'aplanit sans s'étaler.</li>
<li><strong>Étape 6, le croûtage.</strong> Une peau sèche qui ne colle pas à un doigt léger. Cela prend {rest} minutes dans une pièce sèche et plus longtemps dans une pièce humide ; jugez au toucher, pas au chronomètre.</li>
<li><strong>Étape 7, la cuisson.</strong> {bake} °C en chaleur statique, {bake_time} minutes par plaque. Les coques se décollent proprement du papier une fois complètement refroidies.</li>
<li><strong>Étape 9, la maturation.</strong> Assemblées, garnies et réfrigérées {mature} heures avant le service, pour que la coque et la garniture se marient.</li>
</ul>
<p>En série industrielle, maintenez la concentration de l'aquafaba à {concentration} g/ml pour des coques identiques d'une série à l'autre.</p>`,
      },
    ],
    faq: [
      { q: "Aucune peau ne s'est formée après le croûtage. Que faire ?", a: "La pièce est humide. Laissez croûter plus longtemps, au-delà des {rest} minutes de référence, et jugez au toucher, pas au chronomètre." },
      { q: "Pourquoi les coques varient-elles d'une préparation à l'autre ?", a: "La concentration de l'aquafaba a dérivé. En série industrielle, maintenez-la à {concentration} g/ml." },
      { q: 'La poudre suit-elle la même fiche ?', a: "Oui. Reconstituez {powder_dose} g de poudre avec {water_dose} ml d'eau, mettez-la au frais et commencez à l'étape 2. La règle par blanc d'œuf : {white_powder} g de poudre + {white_water} ml d'eau = {white_total} g d'aquafaba, soit la même masse d'aquafaba liquide." },
      { q: 'Puis-je envoyer cette fiche avec une question technique ?', a: "Oui. Remplissez votre colonne, notez ce que vous avez constaté, et décrivez-le par notre [formulaire de contact]({contact_href}) ou par le formulaire professionnel de cette page." },
    ],
  },
};
