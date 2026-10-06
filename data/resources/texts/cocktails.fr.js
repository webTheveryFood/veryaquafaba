// Cocktail expansion, French (October 2026): the guides, quantity calculators and process
// sheets of the six cocktails, and the four question pages. Written natively from the approved
// English (cocktails.en.js + cocktails-2.en.js), in one module. Every figure is a {token} filled
// from facts.json; no dashes, only the brand VERY AQUAFABA (the bergamot liqueur of La Rosée is
// not named), no recipe author named. Loi Evin: objective wording only (ingredients, method,
// quantities), no festive or lifestyle association.
import { fixTable, table } from './cocktail-tables.js';
const FIX = ['Ce que vous constatez', 'La cause', 'La solution'];

export default {
  labels: {
    dropsUnit: "gouttes",
    calcTitle: "Calculateur d'aquafaba : {name}",
    cocktailsGuide: 'Aquafaba pour cocktails : liquide ou en poudre ?',
    barsPage: 'Aquafaba pour bars et cocktails',
    calculatorLink: 'Calculateur de quantités pour ce cocktail',
    processLink: 'Fiche de procédé de ce cocktail',
    perDrink: 'Par cocktail',
    drinks: '= {n} cocktails',
    drinksUnit: 'cocktails',
    responsible: "L'abus d'alcool est dangereux pour la santé, à consommer avec modération.",
    moreCocktails: "D'autres cocktails à l'aquafaba",
    cardAlt: "{name} avec une mousse d'aquafaba",
    ingredients: {
      pisco: 'Pisco', lime_juice: 'Jus de citron vert', cane_syrup: 'Sirop de sucre de canne',
      amaretto: 'Amaretto', lemon_juice: 'Jus de citron', vanilla_syrup: 'Sirop de vanille', gin: 'Gin',
      triple_sec: 'Triple sec', vodka: 'Vodka', bergamot_liqueur: 'Liqueur de bergamote', raspberry_syrup: 'Sirop de framboise',
      orange_blossom: "Eau de fleur d'oranger", rum: 'Rhum', vanilla_tonka_syrup: 'Sirop vanille et tonka',
    },
  },

  guides: {
    'pisco-sour': {
      title: "Pisco sour à l'aquafaba, recette sans œuf | VERY AQUAFABA",
      h1: "Pisco sour à l'aquafaba : la recette sans blanc d'œuf",
      crumb: 'Pisco sour',
      card: 'Pisco, citron vert et tranche de citron séché',
      eyebrow: 'Guide cocktail',
      description: "Un pisco sour avec {dose} ml de VERY AQUAFABA à la place du blanc d'œuf : recette, ordre des shakes, conseils de service et formats pour les bars.",
      lead: `Le pisco sour se reconnaît à sa mousse, et cette mousse est toujours venue d'un blanc d'œuf. Remplacez-le par {dose} ml de VERY AQUAFABA : vous gardez la mousse pâle et épaisse posée sur le verre, le citron vert vif et la texture soyeuse en dessous. La recette ne change pas, tout se joue dans le shake. Ce guide détaille le montage, l'ordre des deux shakes et les points à vérifier pour que la mousse tienne.`,
      sections: [
        { id: 'tin', title: 'Ce qui va dans le shaker', html: `<ul>
<li>{pisco} ml de pisco</li>
<li>{lime_juice} ml de jus de citron vert frais</li>
<li>{cane_syrup} ml de sirop de sucre de canne</li>
<li>{dose} ml de VERY AQUAFABA, bien froid</li>
<li>Un verre old fashioned, et une tranche de citron séché en garniture</li>
</ul>
<p>Pas de nouveau cocktail à apprendre. Seul l'agent moussant change : {dose} ml de VERY AQUAFABA, et le reste de la recette tel qu'il est écrit.</p>` },
        { id: 'shake', title: 'Les étapes du shake', html: `<p>Si vous faites déjà des sours, vous êtes en terrain connu. L'important est de faire les deux shakes dans le bon ordre.</p>
<ol>
<li>Versez tout dans le shaker : le pisco, le citron vert, le sirop et l'aquafaba sorti du réfrigérateur.</li>
<li>Shakez fort sans glace. C'est ce dry shake qui fait la mousse. À l'ouverture du shaker, le liquide doit être pâle et épais, presque comme un milkshake.</li>
<li>Ajoutez {ice} glaçons et shakez de nouveau jusqu'à ce que le shaker givre à l'extérieur. Ce shake refroidit et dilue le cocktail.</li>
<li>Filtrez dans le verre old fashioned. La mousse monte en se posant : attendez quelques secondes avant de garnir.</li>
<li>Posez la tranche de citron séché sur la mousse.</li>
</ol>` },
        { id: 'tips', title: "Nos conseils pour réussir un pisco sour à l'aquafaba", html: `<p>Le dry shake n'a qu'un rôle : monter la mousse avant que le cocktail soit refroidi et dilué. Une fois la mousse formée, le second shake avec glace amène le cocktail à température de service. Inversez l'ordre et la mousse sort plus fine.</p>
<p>Pour doser moins pendant le service, batchez le pisco, le citron vert et le sirop avant l'ouverture. Gardez l'aquafaba à part, au réfrigérateur, et ajoutez {dose} ml dans chaque shaker à la commande. La mousse se fait toujours cocktail par cocktail, mais le montage va beaucoup plus vite, et la <a href="{process_href}">fiche de procédé du pisco sour</a> réunit toutes les étapes sur une seule feuille pour le poste.</p>` },
        { id: 'fix', title: "Corriger une mousse trop fine sur un pisco sour", html: fixTable([
          ['Une mousse fine, ou pas de mousse du tout', 'La glace est entrée avant le dry shake', "Dry shake d'abord, glace ensuite"],
          ['Une mousse lente à monter, sans tenue', "L'aquafaba était à température ambiante", "Gardez le pack au réfrigérateur jusqu'au shake"],
          ["La mousse retombe avant d'arriver au client", 'Le cocktail a attendu au passe', 'Shakez à la commande et servez aussitôt'],
          ['La mousse ne monte plus en milieu de service', "L'aquafaba est allé dans le batch", "Batchez seulement le pisco, le citron vert et le sirop, et ajoutez l'aquafaba à chaque cocktail"],
        ], FIX) },
        { id: 'format', title: 'Combien de pisco sours sortent de votre bar ?', html: `<p>Un Tetrapak de 1 L donne {drinks_1l} pisco sours. Une fois ouvert, il se garde au réfrigérateur ({opened_temp} °C) et s'utilise dans les {opened_days} jours. Si {drinks_1l} cocktails entrent sans peine dans ce rythme, le liquide est l'option simple : réfrigérateur, doseur, shaker.</p>
<p>Si le pisco sour se commande de temps en temps, la poudre vous laisse plus de souplesse. Comptez {powder} g de poudre et {water} ml d'eau par cocktail, et gardez le sachet ouvert au sec et fermé entre deux services. Le <a href="{calculator_href}">calculateur de quantités du pisco sour</a> calcule toute la recette pour le nombre de cocktails prévus.</p>` },
      ],
      faq: [
        { q: "L'aquafaba change-t-il le goût du pisco sour ?", a: "Non. Il est neutre en goût et en odeur : la saveur reste celle du pisco et du citron vert. Il apporte la mousse et la texture soyeuse." },
        { q: 'Un pisco sour peut-il être vegan ?', a: "La mousse, oui : VERY AQUAFABA est végétal et sans œuf, la mousse n'apporte donc pas d'œuf dans le cocktail. Le pisco, le citron vert et le sirop ont leurs propres étiquettes." },
        { q: "Combien d'aquafaba par pisco sour ?", a: "{dose} ml de liquide, ou {powder} g de poudre reconstitués avec {water} ml d'eau." },
        { q: "L'aquafaba est-il plus sûr que le blanc d'œuf cru dans un cocktail ?", a: "Un sour n'est jamais cuit : le blanc d'œuf arrive donc cru dans le verre. VERY AQUAFABA est d'origine végétale et présente des risques sanitaires plus faibles que le blanc d'œuf cru, comme la listeria ou la salmonelle." },
        { q: 'Dois-je changer ma recette de pisco sour ?', a: "Non. Le pisco, le citron vert et le sirop de sucre de canne restent les mêmes, et {dose} ml d'aquafaba prennent la place du blanc d'œuf." },
        { q: "Puis-je batcher mes pisco sours avec de l'aquafaba ?", a: "Oui, la base. Le pisco, le citron vert et le sirop vont dans une bouteille avant le service, et l'aquafaba s'ajoute dans chaque shaker au moment du shake." },
        { q: "Combien de temps se garde un pack d'aquafaba ouvert derrière le bar ?", a: "Le liquide ouvert se garde au réfrigérateur ({opened_temp} °C) et s'utilise dans les {opened_days} jours. Un sachet de poudre ouvert se garde tant qu'il reste au sec et fermé, et les packs fermés se conservent au moins {unopened_months} mois à température ambiante." },
        { q: "Où acheter de l'aquafaba pour mes pisco sours ?", a: "Cela dépend du pays de votre bar : vous pouvez [acheter de l'aquafaba pour cocktails]({where_to_buy_page_href}) sur Amazon aux États-Unis et en Allemagne, sur InstantChef en France, et par le formulaire de demande partout ailleurs." },
      ],
    },

    'amaretto-sour': {
      title: "Amaretto sour à l'aquafaba, recette sans œuf | VERY AQUAFABA",
      h1: "Amaretto sour à l'aquafaba : la recette sans blanc d'œuf",
      crumb: 'Amaretto sour',
      card: 'Amaretto, citron et sirop de vanille',
      eyebrow: 'Guide cocktail',
      description: "Un amaretto sour avec VERY AQUAFABA à la place du blanc d'œuf : {amaretto} ml d'amaretto, {dose} ml d'aquafaba, deux shakes et une mousse blanche sans œuf.",
      lead: `L'amaretto sour met plus de liqueur dans le shaker que les autres sours, et sa mousse blanche équilibre la rondeur de l'amande. Avec {dose} ml de VERY AQUAFABA à la place du blanc d'œuf, cet équilibre ne change pas : la base à l'amande, le citron qui la tranche et la mousse souple sur le dessus. Voici la recette complète, la méthode des deux shakes et ce qu'il faut vérifier quand la mousse sort plus faible que prévu.`,
      sections: [
        { id: 'tin', title: 'Ce qui va dans le shaker', html: `<ul>
<li>{amaretto} ml d'amaretto</li>
<li>{lemon_juice} ml de jus de citron</li>
<li>{vanilla_syrup} ml de sirop de vanille</li>
<li>{dose} ml de VERY AQUAFABA, bien froid</li>
</ul>
<p>Les {amaretto} ml d'amaretto distinguent cette recette des autres sours. Aucun verre ni aucune garniture imposés : gardez le service habituel de votre bar.</p>` },
        { id: 'shake', title: 'Les étapes du shake', html: `<ol>
<li>Versez l'amaretto, le citron, le sirop de vanille et l'aquafaba bien froid dans le shaker.</li>
<li>Shakez fort sans glace : c'est là que la mousse se forme.</li>
<li>Ajoutez {ice} glaçons et shakez de nouveau pour refroidir et diluer.</li>
<li>Filtrez dans le verre et servez aussitôt.</li>
</ol>
<p>Deux points techniques seulement à tenir d'un cocktail à l'autre : l'aquafaba bien froid, et la glace réservée au second shake.</p>` },
        { id: 'tips', title: "Nos conseils pour équilibrer un amaretto sour à l'aquafaba", html: `<p>C'est l'amaretto qui donne le rythme de ce cocktail. À {amaretto} ml par commande, un service chargé vide la bouteille de liqueur bien plus vite que l'aquafaba. Le sirop de vanille reste à {vanilla_syrup} ml, et VERY AQUAFABA garde la même dose de {dose} ml que dans les autres sours.</p>
<p>Batchez l'amaretto, le citron et le sirop de vanille avant l'ouverture. Chaque commande demande alors la base batchée plus {dose} ml d'aquafaba bien froid avant le dry shake. Gardez l'aquafaba hors de la bouteille pour que la mousse se fasse dans chaque shaker, et rangez la <a href="{process_href}">fiche de procédé de l'amaretto sour</a> dans le cahier du bar pour les vérifications.</p>` },
        { id: 'flat', title: "Corriger une mousse trop fine sur un amaretto sour", html: fixTable([
          ['Une mousse fine dès le premier cocktail', 'La glace est entrée avant le dry shake', "Dry shake d'abord, glace ensuite"],
          ['Une mousse qui monte lentement et reste molle', "L'aquafaba est resté à température ambiante", "Gardez le pack au réfrigérateur jusqu'au shake"],
          ['Belle au bar, plate en salle', 'Le cocktail a attendu au passe', 'Shakez à la commande et servez aussitôt'],
        ], FIX) },
        { id: 'format', title: "À quelle fréquence servez-vous des amaretto sours ?", html: `<p>Commencez par une question : servirez-vous {drinks_1l} amaretto sours en {opened_days} jours ? C'est ce que donne un Tetrapak de 1 L à {dose} ml par cocktail, et le pack ouvert se garde au réfrigérateur ({opened_temp} °C) pendant ce temps.</p>
<p>Si le cocktail tourne moins vite, la poudre se garde plus facilement d'un service à l'autre. Un sachet de 200 g donne {drinks_200g} cocktails à {powder} g par cocktail, reconstitués avec {water} ml d'eau. Le <a href="{calculator_href}">calculateur de quantités de l'amaretto sour</a> transforme le nombre de cocktails prévus en liste d'achats complète pour la soirée.</p>` },
      ],
      faq: [
        { q: "Par quoi remplacer le blanc d'œuf dans un amaretto sour ?", a: "{dose} ml de VERY AQUAFABA liquide, ou {powder} g de poudre reconstitués avec {water} ml d'eau." },
        { q: "L'aquafaba a-t-il un goût de pois chiche dans un amaretto sour ?", a: "Non. VERY AQUAFABA est neutre en goût et en odeur : le cocktail a le goût de l'amaretto, du citron et de la vanille." },
        { q: 'Dans quel verre servir un amaretto sour ?', a: 'Le verre dans lequel votre bar sert déjà ses sours. La garniture est, elle aussi, à votre choix.' },
        { q: 'Puis-je batcher les amaretto sours avant le service ?', a: "Oui, l'amaretto, le citron et le sirop de vanille. L'aquafaba s'ajoute dans chaque shaker au moment du shake, jamais dans le batch." },
        { q: "Combien d'amaretto sours donne un pack de 1 L ?", a: "{drinks_1l} cocktails à {dose} ml chacun. Une fois ouvert, le pack se garde au réfrigérateur ({opened_temp} °C) et s'utilise dans les {opened_days} jours." },
        { q: "Un amaretto sour à l'aquafaba est-il vegan ?", a: "La mousse, oui : VERY AQUAFABA est végétal et sans œuf, elle n'apporte donc pas d'œuf dans le cocktail." },
      ],
    },

    'gin-fizz': {
      title: "Gin fizz à l'aquafaba, recette sans œuf | VERY AQUAFABA",
      h1: "Gin fizz à l'aquafaba : la recette sans blanc d'œuf",
      crumb: 'Gin fizz',
      card: 'Gin et citron, allongé au tonic',
      eyebrow: 'Guide cocktail',
      description: "Un gin fizz avec VERY AQUAFABA à la place du blanc d'œuf : shaké avec {dose} ml d'aquafaba, filtré dans un highball et allongé au tonic.",
      lead: `Le gin fizz commence comme un sour dans le shaker, puis s'allonge dans le verre avec du tonic, la mousse blanche posée sur le dessus. Cela ne marche que si l'ordre est respecté. Utilisez {dose} ml de VERY AQUAFABA à la place du blanc d'œuf, montez la mousse d'abord, et n'allongez le cocktail qu'une fois filtré dans le highball. Ce guide donne la recette complète, le shake, l'allongement et les détails qui évitent un cocktail plat.`,
      sections: [
        { id: 'tin', title: 'Ce qui va dans le shaker, et ce qui va dans le verre', html: `<ul>
<li>{gin} ml de gin</li>
<li>{lemon_juice} ml de jus de citron</li>
<li>{cane_syrup} ml de sirop de sucre de canne</li>
<li>{dose} ml de VERY AQUAFABA, bien froid</li>
<li>Du tonic pour allonger, dans un verre highball</li>
<li>Une tranche de citron séché en garniture</li>
</ul>
<p>Gardez le tonic à côté du verre, pas à côté du shaker. Tout le reste passe d'abord au shaker.</p>` },
        { id: 'build', title: 'Du shaker au verre', html: `<ol>
<li>Versez le gin, le citron, le sirop de sucre de canne et l'aquafaba dans le shaker.</li>
<li>Shakez fort sans glace pour monter la mousse.</li>
<li>Ajoutez {ice} glaçons et shakez de nouveau pour refroidir.</li>
<li>Filtrez dans le verre highball.</li>
<li>Complétez au tonic.</li>
<li>Posez la tranche de citron séché sur la mousse.</li>
</ol>` },
        { id: 'tips', title: "Nos conseils pour réussir un gin fizz à l'aquafaba", html: `<p>La mousse se fait avant que le tonic n'entre dans le cocktail. Dry shake du gin, du citron, du sirop et de l'aquafaba, second shake avec glace, puis filtrage. Le tonic arrive ensuite dans le highball : la partie longue du cocktail se construit dans le verre, pas dans le shaker.</p>
<p>Batchez le gin, le citron et le sirop, et chaque commande se résume à quelques gestes clairs : la base, {dose} ml d'aquafaba bien froid, deux shakes, le filtrage, puis le tonic. En gardant l'aquafaba et le tonic hors du batch, vous protégez les deux choses dont ce cocktail a besoin à la fin : sa mousse et ses bulles. La <a href="{process_href}">fiche de procédé du gin fizz</a> garde cet ordre sur une seule feuille.</p>` },
        { id: 'thin', title: "Corriger une mousse trop fine sur un gin fizz", html: fixTable([
          ['Mousse fine avant même le tonic', 'La glace est entrée avant le dry shake', "Dry shake d'abord, glace ensuite"],
          ['Une mousse molle qui monte lentement', "L'aquafaba était à température ambiante", "Gardez-le au réfrigérateur jusqu'au shake"],
          ['La mousse a disparu quand le cocktail arrive en salle', 'Le cocktail a attendu au passe', 'Shakez, allongez et servez aussitôt'],
        ], FIX) },
        { id: 'format', title: 'À quel rythme partent vos gin fizz ?', html: `<p>Un Tetrapak de 1 L donne {drinks_1l} gin fizz et un bag-in-box de 10 L en donne {drinks_10l}. Une fois ouvert, le liquide se garde au réfrigérateur ({opened_temp} °C) et s'utilise dans les {opened_days} jours : le bon pack est celui que votre service écoule vraiment dans ce délai.</p>
<p>Si les commandes de gin fizz sont moins régulières, comptez {powder} g de poudre et {water} ml d'eau par cocktail. Reconstituez ce qu'il faut avant le service, mettez au frais, et gardez le reste du sachet au sec et fermé. Le <a href="{calculator_href}">calculateur de quantités du gin fizz</a> fait le compte de la soirée.</p>` },
      ],
      faq: [
        { q: "Peut-on faire un gin fizz sans blanc d'œuf ?", a: "Oui. Shakez {dose} ml de VERY AQUAFABA avec le gin, le citron et le sirop à la place du blanc d'œuf, puis allongez au tonic." },
        { q: 'Quand ajouter le tonic dans un gin fizz ?', a: "Une fois le cocktail filtré dans le verre highball. Le tonic se verse par-dessus, il n'est jamais shaké." },
        { q: "Combien d'aquafaba dans un gin fizz ?", a: "{dose} ml de liquide, ou {powder} g de poudre reconstitués avec {water} ml d'eau." },
        { q: "L'aquafaba change-t-il le goût du gin ?", a: 'Non. VERY AQUAFABA est neutre en goût et en odeur : le gin, le citron et le tonic portent la saveur.' },
        { q: 'Puis-je reconstituer la poudre avant le service ?', a: "Oui. Reconstituez {powder} g de poudre avec {water} ml d'eau par cocktail avant le service, et gardez au frais jusqu'au shake." },
        { q: 'Combien de gin fizz donne un bag-in-box de 10 L ?', a: "{drinks_10l} cocktails à {dose} ml chacun. Une fois ouvert, le bag-in-box se garde au réfrigérateur ({opened_temp} °C) et s'utilise dans les {opened_days} jours." },
      ],
    },

    'white-lady': {
      title: "White lady à l'aquafaba, recette sans œuf | VERY AQUAFABA",
      h1: "White lady à l'aquafaba : la recette sans blanc d'œuf",
      crumb: 'White lady',
      card: 'Gin, triple sec et citron, en verre à pied',
      eyebrow: 'Guide cocktail',
      description: "Une white lady avec VERY AQUAFABA à la place du blanc d'œuf : gin, triple sec, citron et {dose} ml d'aquafaba, shakés deux fois et servis en verre à pied.",
      lead: `La white lady se sert dans un verre à pied, des fleurs séchées posées sur la mousse. Sans glace dans le verre, un shake trop faible ou une mousse molle se voient tout de suite. Remplacez le blanc d'œuf par {dose} ml de VERY AQUAFABA et le cocktail garde sa mousse blanche et nette, avec le gin, le triple sec et le citron en dessous. Voici comment la monter, comment la shaker et comment garder cette finition pâle et régulière du bar jusqu'à la table.`,
      sections: [
        { id: 'tin', title: 'Ce qui va dans le shaker', html: `<ul>
<li>{gin} ml de gin</li>
<li>{triple_sec} ml de triple sec</li>
<li>{lemon_juice} ml de jus de citron</li>
<li>{cane_syrup} ml de sirop de sucre de canne</li>
<li>{dose} ml de VERY AQUAFABA, bien froid</li>
<li>Un verre à cocktail ou à margarita, et quelques fleurs séchées en garniture</li>
</ul>
<p>Cette recette compte deux alcools : {gin} ml de gin et {triple_sec} ml de triple sec. Avec le citron et le sirop, cela fait une base de {batch_pour} ml avant d'ajouter les {dose} ml d'aquafaba.</p>` },
        { id: 'shake', title: 'Les étapes du shake', html: `<ol>
<li>Versez dans le shaker le gin, le triple sec, le citron, le sirop et l'aquafaba sorti du réfrigérateur.</li>
<li>Shakez fort sans glace. Ce premier shake monte la mousse, et le liquide sort pâle et épais.</li>
<li>Ajoutez {ice} glaçons et shakez de nouveau, jusqu'à ce que le shaker givre à l'extérieur.</li>
<li>Filtrez dans le verre à cocktail ou à margarita. Il n'y a pas de glace dans le verre : le cocktail part aussi froid que le second shake l'a laissé.</li>
<li>Parsemez quelques fleurs séchées sur la mousse.</li>
</ol>` },
        { id: 'tips', title: "Nos conseils pour réussir une white lady à l'aquafaba", html: `<p>Aucune glace dans le verre pour soutenir la présentation. La mousse repose directement sur le cocktail, les fleurs séchées par-dessus, et vous lisez le résultat immédiatement. Si la garniture s'enfonce, revenez au dry shake et à la température de l'aquafaba avant de changer quoi que ce soit d'autre.</p>
<p>Le gin, le triple sec, le citron et le sirop peuvent partager une même bouteille avant le service, et chaque sour de la carte peut <a href="{pre_batching_page_href}">se batcher de la même façon</a>. La commande devient une base de {batch_pour} ml plus {dose} ml d'aquafaba bien froid. N'ajoutez l'aquafaba qu'au moment de shaker, pour que la mousse soit faite pour ce cocktail et n'attende pas dans le batch. La <a href="{process_href}">fiche de procédé de la white lady</a> garde les cinq étapes sur une seule feuille.</p>` },
        { id: 'fix', title: "Quand la mousse ne tient pas la garniture", html: fixTable([
          ["Les fleurs s'enfoncent dans le cocktail", 'La mousse est fine : la glace est entrée avant le dry shake', "Dry shake d'abord, glace ensuite"],
          ['Une mousse lente qui ne prend jamais de tenue', "L'aquafaba était à température ambiante", "Gardez le pack au réfrigérateur jusqu'au shake"],
          ['La mousse est retombée quand le verre arrive au client', 'Le cocktail a attendu au passe', 'Shakez à la commande et garnissez aussitôt'],
          ['La mousse ne monte plus en milieu de service', "L'aquafaba est allé dans le batch", 'Batchez seulement le gin, le triple sec, le citron et le sirop'],
        ], FIX) },
        { id: 'format', title: 'Des white lady tous les soirs, ou le week-end ?', html: `<p>Un Tetrapak de 1 L couvre {drinks_1l} white lady. Une fois ouvert, gardez-le au réfrigérateur ({opened_temp} °C) et utilisez-le dans les {opened_days} jours. Si votre carte écoule ces {drinks_1l} cocktails dans ce délai, le liquide simplifie le poste.</p>
<p>Si la white lady se vend plus lentement ou seulement pour un événement, la poudre attend plus facilement entre deux services. Comptez {powder} g de poudre et {water} ml d'eau par cocktail ; un sachet de 200 g en donne {drinks_200g}. Le <a href="{calculator_href}">calculateur de quantités de la white lady</a> calcule toute la recette pour le nombre de cocktails prévus.</p>` },
      ],
      faq: [
        { q: "Par quoi remplacer le blanc d'œuf dans une white lady ?", a: "{dose} ml de VERY AQUAFABA liquide, ou {powder} g de poudre reconstitués avec {water} ml d'eau." },
        { q: 'Dans quel verre servir une white lady ?', a: 'Un verre à cocktail ou à margarita, avec quelques fleurs séchées sur la mousse.' },
        { q: 'Combien de triple sec dans une white lady ?', a: "{triple_sec} ml, avec {gin} ml de gin, {lemon_juice} ml de jus de citron, {cane_syrup} ml de sirop de sucre de canne et {dose} ml d'aquafaba." },
        { q: "L'aquafaba change-t-il le goût d'une white lady ?", a: 'Non. VERY AQUAFABA est neutre en goût et en odeur : le gin, le triple sec et le citron portent le cocktail.' },
        { q: 'Puis-je batcher les white lady avant le service ?', a: "Oui, le gin, le triple sec, le citron et le sirop. L'aquafaba s'ajoute dans chaque shaker au moment du shake, jamais dans le batch." },
        { q: 'Combien de white lady donne un pack de 1 L ?', a: "{drinks_1l} cocktails à {dose} ml chacun. Une fois ouvert, le pack se garde au réfrigérateur ({opened_temp} °C) et s'utilise dans les {opened_days} jours." },
      ],
    },

    'la-rosee': {
      title: "Cocktail La Rosée à l'aquafaba : recette | VERY AQUAFABA",
      h1: "La Rosée, un sour rose à l'aquafaba : la recette",
      crumb: 'La Rosée',
      card: 'Vodka, bergamote et framboise, en coupe',
      eyebrow: 'Guide cocktail',
      description: "La Rosée avec VERY AQUAFABA : vodka, liqueur de bergamote, framboise et {dose} ml d'aquafaba, shakés deux fois et servis en coupe.",
      lead: `La Rosée se reconnaît à sa couleur : rose dans la coupe, une mousse pâle au-dessus et une branche de menthe posée sur la mousse. C'est aussi un cocktail où chaque défaut se voit. Avec {dose} ml de VERY AQUAFABA à la place du blanc d'œuf, il garde sa mousse blanche et nette au-dessus de la framboise, tandis que la vodka, la liqueur de bergamote et les {orange_blossom} gouttes d'eau de fleur d'oranger restent en équilibre. Ce guide détaille le montage, le shake et les détails qui rendent le cocktail précis.`,
      sections: [
        { id: 'tin', title: 'Ce qui va dans le shaker', html: `<ul>
<li>{vodka} ml de vodka</li>
<li>{bergamot_liqueur} ml de liqueur de bergamote</li>
<li>{lemon_juice} ml de jus de citron</li>
<li>{raspberry_syrup} ml de sirop de framboise</li>
<li>{orange_blossom} gouttes d'eau de fleur d'oranger</li>
<li>{dose} ml de VERY AQUAFABA, bien froid</li>
<li>Une coupe, et une branche de menthe en garniture</li>
</ul>
<p>La plupart des doses sont des mesures de bar habituelles. L'exception, c'est l'eau de fleur d'oranger : {orange_blossom} gouttes par cocktail, comptées et non versées.</p>` },
        { id: 'shake', title: 'Les étapes du shake', html: `<ol>
<li>Versez dans le shaker la vodka, la liqueur de bergamote, le citron, le sirop de framboise, l'eau de fleur d'oranger et l'aquafaba bien froid.</li>
<li>Shakez fort sans glace pour monter la mousse.</li>
<li>Ajoutez {ice} glaçons et shakez de nouveau pour refroidir et diluer.</li>
<li>Filtrez dans la coupe.</li>
<li>Posez une branche de menthe sur la mousse.</li>
</ol>` },
        { id: 'tips', title: "Nos conseils pour réussir La Rosée à l'aquafaba", html: `<p>La Rosée demande de l'attention à deux endroits. Le premier, c'est l'eau de fleur d'oranger : {orange_blossom} gouttes par cocktail, comptées au compte-gouttes plutôt que versées. Pour {ex_batches} cocktails, cela fait {ex_orange_blossom} gouttes, et le <a href="{calculator_href}">calculateur de quantités de La Rosée</a> les compte avec les autres mesures.</p>
<p>Le second, c'est la mousse. Le sirop de framboise colore tout le cocktail, si bien qu'une mousse trop fine laisse voir le rose tout de suite. Faites le dry shake avant d'ajouter la glace : la menthe posée sur le dessus vous donne un dernier contrôle une fois le cocktail dans la coupe.</p>
<p>Pour un service chargé, batchez ensemble la vodka, la liqueur de bergamote, le citron, le sirop de framboise et l'eau de fleur d'oranger. Chaque commande commence alors par {batch_pour} ml de base, et les gouttes sont déjà dosées dans le batch. Gardez l'aquafaba au frais et à part jusqu'au shake, et la <a href="{process_href}">fiche de procédé de La Rosée</a> près des coupes pour les vérifications.</p>` },
        { id: 'fix', title: "Corriger une mousse trop fine sur La Rosée", html: fixTable([
          ['Du rose à travers une mousse fine', 'La glace est entrée avant le dry shake', "Dry shake d'abord, glace ensuite"],
          ['Une mousse molle qui monte lentement', "L'aquafaba était à température ambiante", "Gardez-le au réfrigérateur jusqu'au shake"],
          ["La menthe s'enfonce avant d'arriver en salle", 'Le cocktail a attendu au passe', 'Shakez à la commande et servez aussitôt'],
          ["La fleur d'oranger domine le cocktail", 'Plus de {orange_blossom} gouttes sont entrées', 'Dosez avec un flacon compte-gouttes'],
        ], FIX) },
        { id: 'format', title: 'La Rosée, à la carte ou en suggestion ?', html: `<p>Un Tetrapak de 1 L donne {drinks_1l} La Rosée et, une fois ouvert, se garde au réfrigérateur ({opened_temp} °C) pendant {opened_days} jours. Cela convient quand le cocktail a une place fixe à la carte. S'il passe en suggestion ou se vend moins souvent, comptez {powder} g de poudre et {water} ml d'eau par cocktail, et gardez le reste du sachet au sec et fermé.</p>` },
      ],
      faq: [
        { q: "Qu'est-ce que La Rosée ?", a: "Un sour rose à base de vodka, liqueur de bergamote, citron, sirop de framboise et eau de fleur d'oranger, shaké avec {dose} ml d'aquafaba et servi en coupe avec une branche de menthe." },
        { q: "Combien d'eau de fleur d'oranger dans La Rosée ?", a: "{orange_blossom} gouttes par cocktail, avec {vodka} ml de vodka, {bergamot_liqueur} ml de liqueur de bergamote, {lemon_juice} ml de jus de citron et {raspberry_syrup} ml de sirop de framboise." },
        { q: "Peut-on faire La Rosée sans blanc d'œuf ?", a: "Oui. Dans la recette VERY AQUAFABA, la mousse vient de {dose} ml d'aquafaba : il n'y a pas d'œuf dans le cocktail." },
        { q: 'Dans quel verre servir La Rosée ?', a: 'Une coupe, avec une branche de menthe sur la mousse.' },
        { q: "Combien d'aquafaba en poudre pour La Rosée ?", a: "{powder} g de poudre reconstitués avec {water} ml d'eau, pour un cocktail." },
        { q: 'Combien de La Rosée donne un pack de 1 L ?', a: "{drinks_1l} cocktails à {dose} ml chacun. Une fois ouvert, le pack se garde au réfrigérateur ({opened_temp} °C) et s'utilise dans les {opened_days} jours." },
      ],
    },

    'the-sunset': {
      title: "Cocktail The Sunset à l'aquafaba : recette | VERY AQUAFABA",
      h1: "The Sunset, un sour allongé à l'aquafaba : la recette",
      crumb: 'The Sunset',
      card: 'Rhum et amaretto, allongés au ginger beer',
      eyebrow: 'Guide cocktail',
      description: "The Sunset avec VERY AQUAFABA : rhum, amaretto, citron et sirop vanille tonka shakés avec {dose} ml d'aquafaba, puis allongés au ginger beer.",
      lead: `The Sunset est un long drink construit comme un sour. Le rhum, une petite dose d'amaretto, le citron et le sirop sont shakés court, puis le cocktail s'allonge dans le verre avec du ginger beer, une mousse blanche posée au-dessus. Avec {dose} ml de VERY AQUAFABA à la place du blanc d'œuf, vous gardez cette mousse souple sans changer la structure du cocktail. Tout tient dans l'ordre : la mousse d'abord, l'allongement ensuite. Voici la méthode complète, pourquoi le ginger beer attend le verre, et quoi vérifier quand la mousse commence à disparaître dans le cocktail.`,
      sections: [
        { id: 'tin', title: 'Ce qui va dans le shaker, et ce qui va dans le verre', html: `<ul>
<li>{rum} ml de rhum</li>
<li>{amaretto} ml d'amaretto</li>
<li>{lemon_juice} ml de jus de citron</li>
<li>{vanilla_tonka_syrup} ml de sirop vanille et tonka</li>
<li>{dose} ml de VERY AQUAFABA, bien froid</li>
<li>Du ginger beer pour allonger, dans un verre highball</li>
<li>Quelques fleurs séchées en garniture</li>
</ul>
<p>Le ginger beer fait partie du service, pas du shake. Il n'entre qu'une fois le cocktail dans le highball.</p>` },
        { id: 'build', title: 'Du shaker au verre', html: `<ol>
<li>Versez le rhum, l'amaretto, le citron, le sirop vanille et tonka et l'aquafaba dans le shaker.</li>
<li>Shakez fort sans glace : c'est là que la mousse se fait.</li>
<li>Ajoutez {ice} glaçons et shakez de nouveau pour refroidir.</li>
<li>Filtrez dans le verre highball.</li>
<li>Complétez au ginger beer.</li>
<li>Parsemez quelques fleurs séchées sur la mousse.</li>
</ol>` },
        { id: 'tips', title: "Nos conseils pour réussir The Sunset à l'aquafaba", html: `<p>Montez la mousse avant que la partie longue du cocktail arrive. Dry shake, shake avec glace et filtrage d'abord ; le ginger beer ensuite, dans le verre. L'ordre est le même que pour le <a href="{gin_fizz_href}">gin fizz</a>, mais ici on allonge au ginger beer et non au tonic.</p>
<p>L'amaretto est à {amaretto} ml par cocktail et le sirop vanille et tonka à {vanilla_tonka_syrup} ml. Ce sont de petites doses dans un highball, mais sur un service elles s'additionnent vite : dosez les deux au doseur et comptez-les dans le batch plutôt que de verser à l'œil.</p>
<p>Batchez le rhum, l'amaretto, le citron et le sirop avant le service. Gardez l'aquafaba au frais pour le shaker et le ginger beer pour le verre. Chaque commande suit alors le même ordre : la base, l'aquafaba, deux shakes, le filtrage, l'allongement. La <a href="{process_href}">fiche de procédé du Sunset</a> garde cet ordre sur une seule feuille.</p>` },
        { id: 'fix', title: "Quand la mousse s'enfonce dans le ginger beer", html: fixTable([
          ["Mousse fine avant même d'allonger", 'La glace est entrée avant le dry shake', "Dry shake d'abord, glace ensuite"],
          ["La mousse s'effondre quand le ginger beer arrive", 'Le ginger beer est allé dans le shaker', "Filtrez d'abord, puis allongez dans le verre"],
          ['Une mousse molle qui monte lentement', "L'aquafaba était à température ambiante", "Gardez-le au réfrigérateur jusqu'au shake"],
          ['La mousse a disparu quand le cocktail arrive en salle', 'Le cocktail a attendu au passe', 'Shakez, allongez et servez aussitôt'],
        ], FIX) },
        { id: 'format', title: 'The Sunset toute la saison, ou de temps en temps ?', html: `<p>Un Tetrapak de 1 L donne {drinks_1l} Sunset et un bag-in-box de 10 L en donne {drinks_10l}. Une fois ouvert, le liquide se garde au réfrigérateur ({opened_temp} °C) et s'utilise dans les {opened_days} jours : choisissez la taille d'après le nombre de cocktails que vous servirez réellement dans ce délai.</p>
<p>Pour des commandes occasionnelles, comptez {powder} g de poudre et {water} ml d'eau par cocktail. Le sachet ouvert se garde tant qu'il reste au sec et fermé, et le <a href="{calculator_href}">calculateur de quantités du Sunset</a> fait le compte du service à partir du nombre de cocktails prévus.</p>` },
      ],
      faq: [
        { q: 'Quand ajouter le ginger beer dans The Sunset ?', a: "Une fois le cocktail filtré dans le verre highball. Le ginger beer se verse par-dessus, il n'est jamais shaké." },
        { q: "Peut-on faire The Sunset sans blanc d'œuf ?", a: "Oui. La mousse vient de {dose} ml de VERY AQUAFABA, shakés avec le rhum, l'amaretto, le citron et le sirop." },
        { q: "Combien d'amaretto dans The Sunset ?", a: "{amaretto} ml, avec {rum} ml de rhum, {lemon_juice} ml de jus de citron, {vanilla_tonka_syrup} ml de sirop vanille et tonka et {dose} ml d'aquafaba." },
        { q: "Combien d'aquafaba en poudre par Sunset ?", a: "{powder} g de poudre reconstitués avec {water} ml d'eau, pour un cocktail." },
        { q: 'Puis-je batcher The Sunset avant le service ?', a: "Batchez le rhum, l'amaretto, le citron et le sirop. L'aquafaba entre au moment du shake et le ginger beer dans le verre." },
        { q: 'Combien de Sunset donne un bag-in-box de 10 L ?', a: "{drinks_10l} cocktails à {dose} ml chacun. Une fois ouvert, le bag-in-box se garde au réfrigérateur ({opened_temp} °C) et s'utilise dans les {opened_days} jours." },
      ],
    },
  },

  topics: {
    'where-to-buy': {
      title: "Où acheter de l'aquafaba pour cocktails | VERY AQUAFABA",
      h1: "Où acheter de l'aquafaba pour vos cocktails ?",
      crumb: 'Où acheter',
      eyebrow: 'Cocktails',
      description: 'Où acheter VERY AQUAFABA pour votre bar : Amazon aux États-Unis et en Allemagne, InstantChef en France, et le formulaire de demande partout ailleurs.',
      lead: `Une fois l'aquafaba adopté derrière le bar, les questions pratiques arrivent. Pouvez-vous l'acheter dans votre pays ? Préférez-vous le liquide, prêt à verser, ou la poudre, qui attend sur l'étagère pendant les semaines calmes ? VERY AQUAFABA est vendu par des circuits différents selon le pays, et le bon format dépend surtout de la vitesse à laquelle vous finissez un pack ouvert.`,
      sections: [
        { id: 'countries', title: "Où acheter de l'aquafaba dans votre pays", html: `${table(['Votre pays', 'Où acheter'], [
          ['<a href="{united_states_fr_href}">États-Unis</a>', 'Amazon, y compris une fiche produit pour les cocktails'],
          ['<a href="{germany_fr_href}">Allemagne</a>', 'Amazon'],
          ['<a href="{france_fr_href}">France</a>', 'InstantChef'],
          ['<a href="{united_kingdom_fr_href}">Royaume-Uni</a>, <a href="{belgium_fr_href}">Belgique</a>, <a href="{netherlands_fr_href}">Pays-Bas</a> et partout ailleurs', 'Le formulaire de demande ci-dessous'],
        ])}
<p>Le circuit change selon le marché : commencez par votre pays plutôt que par la taille du pack.</p>` },
        { id: 'choose', title: 'En combien de temps utilisez-vous un pack ouvert ?', html: `<p>L'achat devient plus simple une fois que vous savez <a href="{cocktails_href}">à quelle vitesse vous finissez un pack ouvert</a>. Le liquide se verse tel quel et, une fois ouvert, se garde au réfrigérateur ({opened_temp} °C) pendant {opened_days} jours. La poudre attend au sec, fermée, entre deux services : elle est utile quand les sours se commandent moins souvent.</p>` },
        { id: 'packs', title: 'Du nombre de sours à la taille du pack', html: `${table(['Pack', 'Cocktails à {dose} ml chacun'], [
          ['Tetrapak de 1 L', '{drinks_1l}'],
          ['Bag-in-box de 10 L', '{drinks_10l}'],
          ['Sachet de 30 g', '{drinks_30g}'],
          ['Sachet de 200 g', '{drinks_200g}'],
          ['Sachet de 3 kg', '{drinks_3kg}'],
        ])}
<p>Ces chiffres reposent sur la dose de {dose} ml du <a href="{pisco_sour_href}">pisco sour</a>, de l'<a href="{amaretto_sour_href}">amaretto sour</a>, du <a href="{gin_fizz_href}">gin fizz</a> et des autres recettes de cocktails. Si vous travaillez avec la poudre, chaque cocktail demande {powder} g de poudre reconstitués avec {water} ml d'eau.</p>` },
        { id: 'groups', title: 'Commander pour plusieurs établissements', html: `<p>Si vous commandez pour plusieurs établissements ou au-delà d'un seul pack, utilisez le formulaire de demande professionnelle en indiquant le nombre de sites et les formats envisagés. Nous aurons ainsi ce qu'il faut pour répondre à la commande et joindre la fiche technique. Avant de commander, vous pouvez <a href="{bars_href}">organiser le poste aquafaba de votre bar</a>.</p>` },
      ],
      faq: [
        { q: "Où acheter de l'aquafaba pour cocktails aux États-Unis ?", a: 'Sur Amazon, y compris une fiche produit pour les cocktails : [acheter VERY AQUAFABA aux États-Unis]({united_states_fr_href}).' },
        { q: 'Puis-je acheter VERY AQUAFABA au Royaume-Uni ?', a: 'Par le formulaire de demande ci-dessous : laissez vos coordonnées et les formats souhaités, et nous revenons vers vous pour la commande.' },
        { q: "Où l'acheter en France ?", a: 'Sur InstantChef, en liquide et en poudre : [acheter VERY AQUAFABA en France]({france_fr_href}).' },
        { q: 'Quel pack acheter pour un bar ?', a: 'Comptez vos sours. Si un pack ouvert est fini en {opened_days} jours, le liquide est le choix simple ; sinon, la poudre se garde une fois le sachet ouvert.' },
        { q: 'Combien de cocktails donne un pack de 1 L ?', a: '{drinks_1l} cocktails à {dose} ml chacun, la dose de tous les cocktails VERY AQUAFABA.' },
        { q: 'Puis-je obtenir la fiche technique avant de commander ?', a: 'Oui. Demandez-la par le formulaire de demande professionnelle ci-dessous ou par le [formulaire de contact]({contact_href}).' },
      ],
    },

    powder: {
      title: 'Aquafaba en poudre dans les cocktails ? | VERY AQUAFABA',
      h1: "Peut-on utiliser l'aquafaba en poudre dans les cocktails ?",
      crumb: "L'aquafaba en poudre en cocktail",
      eyebrow: 'Cocktails',
      description: "Oui : {powder} g de poudre VERY AQUAFABA reconstitués avec {water} ml d'eau par cocktail, refroidis, puis shakés comme le liquide. Quand les bars la choisissent.",
      lead: `La poudre est surtout intéressante quand vos sours se commandent par vagues plutôt que tous les soirs. Vous reconstituez ce que le service demande, vous le mettez au frais, et le reste du sachet attend au sec, fermé, jusqu'à la fois suivante. Pour un cocktail, comptez {powder} g de poudre VERY AQUAFABA et {water} ml d'eau. Une fois reconstitué, l'aquafaba va dans le même shaker et suit la même méthode en deux shakes que le liquide.`,
      sections: [
        { id: 'why', title: 'La poudre, quand les sours sont occasionnels', html: `<p>Un sachet ouvert se garde tant qu'il reste au sec et fermé. Vous ne reconstituez donc que la quantité du service en cours, et le reste attend intact le service suivant.</p>
${table(['Cocktails ce soir', 'Poudre', 'Eau'], [
  ['10', '{p10} g', '{w10} ml'],
  ['{ex_batches}', '{ex_powder} g', '{ex_water} ml'],
])}
<p>Pour un cocktail, cela fait {powder} g de poudre dans {water} ml d'eau, refroidis avant d'aller dans le shaker. Ces doses viennent de la règle de la poudre : {white_powder} g de poudre et {white_water} ml d'eau donnent {white_total} g d'aquafaba, soit la même masse d'aquafaba liquide.</p>` },
        { id: 'make', title: "Ne reconstituez que ce qu'il faut pour ce soir", html: `<p>Pesez la poudre pour le nombre de cocktails prévus, ajoutez l'eau correspondante et mettez l'aquafaba reconstitué au frais avant le service. Gardez-le au réfrigérateur jusqu'à ce qu'il aille dans le shaker. La même <a href="{reconstitution_href}">règle poudre et eau</a> vaut d'un seul cocktail à un service entier.</p>` },
        { id: 'pouch', title: "Quel sachet garder sur l'étagère du bar", html: `<p>À {dose} ml par cocktail, un sachet de 30 g donne {drinks_30g} cocktails, un sachet de 200 g {drinks_200g} et un sachet de 3 kg {drinks_3kg}. Fermés, les sachets se conservent au moins {unopened_months} mois à température ambiante : vous pouvez dimensionner la commande sur votre volume réel de cocktails plutôt que sur les prochains jours de service.</p>
<p>Pour essayer la méthode sur une recette que vous connaissez, commencez par le <a href="{pisco_sour_href}">pisco sour</a>, l'<a href="{amaretto_sour_href}">amaretto sour</a> ou le <a href="{gin_fizz_href}">gin fizz</a>, puis <a href="{where_to_buy_page_href}">choisissez le format en poudre disponible dans votre pays</a>.</p>` },
        { id: 'mistakes', title: 'Trois erreurs qui aplatissent la mousse', html: `<ul>
<li><strong>De la glace dans le shaker dès le départ.</strong> La mousse sort fine. Shakez d'abord sans glace, puis avec.</li>
<li><strong>L'aquafaba reconstitué laissé sur le bar.</strong> Tiède, il donne une mousse lente et molle. Gardez-le au frais jusqu'au shake.</li>
<li><strong>L'aquafaba dans le batch.</strong> La hauteur a disparu en milieu de service. Batchez l'alcool, les agrumes et le sirop, et ajoutez l'aquafaba à chaque cocktail.</li>
</ul>` },
      ],
      faq: [
        { q: "Combien d'aquafaba en poudre par cocktail ?", a: "{powder} g de poudre VERY AQUAFABA reconstitués avec {water} ml d'eau, pour un cocktail qui demande {dose} ml de liquide." },
        { q: "L'aquafaba en poudre mousse-t-il comme le liquide ?", a: 'Oui. Une fois reconstitué et refroidi, il va dans le shaker et passe par les deux shakes comme le liquide.' },
        { q: 'Combien de temps se garde un sachet ouvert ?', a: "Un sachet de poudre ouvert ne s'altère pas tant qu'il reste au sec et fermé. Fermé, il se conserve au moins {unopened_months} mois à température ambiante." },
        { q: 'Puis-je reconstituer la poudre avant le service ?', a: "Oui. Reconstituez ce qu'il faut pour la soirée avant le service et gardez-le au réfrigérateur jusqu'au shake." },
        { q: 'Quel sachet acheter pour un bar ?', a: 'Un sachet de 30 g donne {drinks_30g} cocktails, un sachet de 200 g {drinks_200g} et un sachet de 3 kg {drinks_3kg}, à {dose} ml par cocktail.' },
        { q: "Où acheter de l'aquafaba en poudre pour cocktails ?", a: "Cela dépend de votre pays : [commandez l'aquafaba en poudre pour votre bar]({where_to_buy_page_href}) sur Amazon, sur InstantChef ou par notre formulaire de demande." },
      ],
    },

    'how-to-make': {
      title: "Comment faire des cocktails à l'aquafaba | VERY AQUAFABA",
      h1: "Comment faire des cocktails à l'aquafaba ?",
      crumb: "Faire des cocktails à l'aquafaba",
      eyebrow: 'Cocktails',
      description: "Remplacez le blanc d'œuf par {dose} ml de VERY AQUAFABA et gardez votre recette : une méthode pour tous les sours, et sept sours pour l'essayer.",
      lead: `L'aquafaba change un ingrédient, pas votre façon de travailler un sour. Si vous savez déjà monter, dry shaker et finir un cocktail au blanc d'œuf, la technique vous est familière dès la première commande. Comptez {dose} ml de VERY AQUAFABA par cocktail, gardez la glace pour le second shake, et la même méthode vaut du pisco sour à la white lady, à La Rosée ou au gin fizz allongé.`,
      sections: [
        { id: 'method', title: 'Une méthode, puis à chaque cocktail sa finition', html: `<ol>
<li>Versez l'alcool, les agrumes, le sirop et l'aquafaba dans le shaker.</li>
<li>Shakez fort sans glace. C'est là que la mousse se fait.</li>
<li>Ajoutez {ice} glaçons et shakez de nouveau pour refroidir.</li>
<li>Filtrez dans le verre et garnissez.</li>
</ol>
<p>Deux des sept cocktails ci-dessous sont des long drinks : le gin fizz s'allonge au tonic et The Sunset au ginger beer, tous deux versés dans le verre après le filtrage, jamais dans le shaker.</p>` },
        { id: 'recipes', title: 'Sept sours pour essayer', html: `${table(['Cocktail', 'Base', 'Verre'], [
          ['<a href="{whiskey_recipe_href}">Whiskey sour</a>', 'Bourbon ou whiskey irlandais', 'Old fashioned'],
          ['<a href="{pisco_sour_href}">Pisco sour</a>', 'Pisco', 'Old fashioned'],
          ['<a href="{amaretto_sour_href}">Amaretto sour</a>', 'Amaretto, avec un sirop de vanille', 'Le verre de votre bar pour les sours'],
          ['<a href="{gin_fizz_href}">Gin fizz</a>', 'Gin, allongé au tonic', 'Highball'],
          ['<a href="{white_lady_href}">White lady</a>', 'Gin et triple sec', 'Verre à cocktail ou à margarita'],
          ['<a href="{la_rosee_href}">La Rosée</a>', 'Vodka et liqueur de bergamote, avec framboise', 'Coupe'],
          ['<a href="{the_sunset_href}">The Sunset</a>', 'Rhum et amaretto, allongé au ginger beer', 'Highball'],
        ])}
<p>Toutes ces recettes sauf le whiskey sour utilisent {dose} ml de VERY AQUAFABA par cocktail, et chacune des six a son calculateur de quantités et sa fiche de procédé. Le poste n'a donc qu'une dose d'aquafaba à retenir, même si l'alcool, le verre, la garniture et l'allongement changent d'un cocktail à l'autre.</p>` },
        { id: 'order', title: 'À quoi servent les deux shakes', html: `<p>Le premier shake fait la mousse. Le second refroidit et dilue. C'est pour séparer ces deux rôles que le dry shake vient en premier dans chaque recette.</p>` },
        { id: 'fix', title: 'Quand la mousse sort fine', html: fixTable([
          ['Une mousse fine, ou pas de mousse du tout', 'La glace est entrée dès le départ', "Dry shake d'abord, glace ensuite"],
          ['Une mousse lente à monter, sans tenue', "L'aquafaba était à température ambiante", "Gardez-le au réfrigérateur jusqu'au shake"],
          ['La mousse ne monte plus en milieu de service', "L'aquafaba est allé dans le batch", "Batchez le reste et ajoutez l'aquafaba à chaque cocktail"],
          ['Un long drink qui a perdu sa mousse', 'Le tonic ou le ginger beer est allé dans le shaker', "Filtrez d'abord, puis allongez dans le verre"],
          ["La mousse retombe avant d'arriver au client", 'Le cocktail a attendu au passe', 'Shakez à la commande et servez aussitôt'],
        ], FIX) },
        { id: 'next', title: 'Commencez par un sour que vous connaissez', html: `<p>Prenez un sour que vous faites déjà. Remplacez le blanc d'œuf par {dose} ml d'aquafaba, gardez le reste de la recette, et prenez le rythme des deux shakes avant de passer aux autres cocktails. Pour un service chargé, <a href="{pre_batching_page_href}">batchez l'alcool, les agrumes et le sirop</a>, mais gardez l'aquafaba pour chaque shake.</p>
<p>Quand vous savez à peu près combien de sours vous servez, ce même chiffre vous dit s'il faut <a href="{powder_page_href}">travailler avec le sachet de poudre</a> et quel <a href="{where_to_buy_page_href}">pack commander pour votre bar</a>.</p>` },
      ],
      faq: [
        { q: "Puis-je remplacer le blanc d'œuf par de l'aquafaba dans n'importe quel sour ?", a: "Dans les sept sours que nous publions, oui : {dose} ml d'aquafaba prennent la place du blanc d'œuf, et le reste de la recette ne change pas." },
        { q: 'Dois-je changer ma façon de shaker ?', a: "Non. Shakez une fois sans glace pour monter la mousse, puis une seconde fois avec {ice} glaçons pour refroidir, comme avec le blanc d'œuf." },
        { q: "L'aquafaba a-t-il un goût de pois chiche dans un cocktail ?", a: 'Non. VERY AQUAFABA est neutre en goût et en odeur : le cocktail a le goût de son alcool, de ses agrumes et de son sirop.' },
        { q: "Combien de poudre d'aquafaba remplace le liquide dans un sour ?", a: "{powder} g de poudre reconstitués avec {water} ml d'eau, pour un cocktail qui demande {dose} ml de liquide." },
        { q: 'Peut-on faire des long drinks avec une mousse ?', a: "Oui. Le gin fizz et The Sunset sont shakés avec l'aquafaba, filtrés dans un highball et allongés au tonic ou au ginger beer dans le verre." },
        { q: "Où acheter de l'aquafaba pour cocktails ?", a: "Vous pouvez [commander de l'aquafaba pour votre bar]({where_to_buy_page_href}) sur Amazon aux États-Unis et en Allemagne, sur InstantChef en France, ou par le formulaire de demande partout ailleurs." },
      ],
    },

    'pre-batching': {
      title: "Batcher ses sours avec de l'aquafaba ? | VERY AQUAFABA",
      h1: "Peut-on batcher ses sours avec de l'aquafaba ?",
      crumb: 'Sours en batch',
      eyebrow: 'Cocktails',
      description: "Oui, sauf l'aquafaba : batchez l'alcool, les agrumes et le sirop avant le service, et ajoutez {dose} ml de VERY AQUAFABA dans chaque shaker au moment du shake.",
      lead: `Avec un batch, une série de sours ne demande plus plusieurs bouteilles par commande, mais une seule mesure. L'alcool, les agrumes et le sirop peuvent être prêts avant le service. L'aquafaba, lui, attend : ajoutez {dose} ml de VERY AQUAFABA quand la commande arrive, puis montez la mousse dans le shaker. Vous gagnez la vitesse du batch sans demander à la mousse d'attendre des heures.`,
      sections: [
        { id: 'batch', title: 'Un batch pour {ex_batches} pisco sours', html: `${table(['Dans le batch', 'À part, au réfrigérateur'], [
          ['Pisco : {ex_pisco} ml', 'VERY AQUAFABA liquide : {ex_dose} ml'],
          ['Jus de citron vert : {ex_lime_juice} ml', "ou poudre reconstituée : {ex_powder} g + {ex_water} ml d'eau"],
          ['Sirop de sucre de canne : {ex_cane_syrup} ml', ''],
        ])}
<p>Au moment du shake, chaque cocktail prend {batch_pour} ml de la bouteille et {dose} ml d'aquafaba du réfrigérateur. Le reste de la méthode ne bouge pas : dry shake, {ice} glaçons, second shake, filtrage. Les chiffres sont ceux du <a href="{pisco_sour_href}">pisco sour à l'aquafaba</a>.</p>` },
        { id: 'out', title: 'Deux choses attendent la commande', html: `<p>Gardez l'aquafaba à part pour que chaque cocktail monte sa mousse dans le shaker. Pour les long drinks, gardez aussi l'allongement pétillant à part : le tonic du <a href="{gin_fizz_href}">gin fizz</a> et le ginger beer de <a href="{the_sunset_href}">The Sunset</a> vont dans le verre après le filtrage.</p>
<p>Le reste de la base peut être batché à l'avance, y compris les deux alcools de la <a href="{white_lady_href}">white lady</a>, le sirop de vanille de l'<a href="{amaretto_sour_href}">amaretto sour</a> et le sirop de framboise de <a href="{la_rosee_href}">La Rosée</a>.</p>` },
        { id: 'station', title: 'Le poste pendant le service', html: `<p>Gardez la bouteille de batch à côté des shakers et l'aquafaba au frais sous le poste. Chaque commande devient une mesure de base, {dose} ml d'aquafaba, un dry shake et un second shake avec glace. Montez le cocktail quand la commande arrive, plutôt que de remplir les shakers à l'avance.</p>` },
        { id: 'events', title: 'Batcher pour un événement', html: `<p>Pour un événement, fixez d'abord le nombre de cocktails et laissez le calculateur du <a href="{pisco_sour_calc_href}">pisco sour</a>, du <a href="{gin_fizz_calc_href}">gin fizz</a> ou de la <a href="{white_lady_calc_href}">white lady</a> établir le batch. Un Tetrapak de 1 L couvre {drinks_1l} cocktails à {dose} ml chacun ; une fois ouvert, gardez-le au réfrigérateur ({opened_temp} °C) et utilisez-le dans les {opened_days} jours. Si vous travaillez avec la poudre, reconstituez la quantité de l'événement avant l'ouverture et gardez-la au frais pour le service.</p>` },
      ],
      faq: [
        { q: "Puis-je ajouter l'aquafaba à mon batch de sours ?", a: 'Non. Ajoutez {dose} ml dans chaque shaker au moment du shake : la mousse se fait cocktail par cocktail.' },
        { q: "Qu'est-ce qui va dans la bouteille de batch ?", a: "L'alcool, les agrumes et le sirop. Pour {ex_batches} pisco sours : {ex_pisco} ml de pisco, {ex_lime_juice} ml de jus de citron vert et {ex_cane_syrup} ml de sirop de sucre de canne." },
        { q: 'Puis-je batcher des long drinks comme le gin fizz ?', a: 'Oui, la partie shakée. Le tonic ou le ginger beer va dans chaque verre après le filtrage.' },
        { q: "Puis-je reconstituer la poudre à l'avance pour un service en batch ?", a: "Oui. Reconstituez {ex_powder} g de poudre avec {ex_water} ml d'eau pour {ex_batches} cocktails avant le service, et gardez au frais jusqu'au shake." },
        { q: "Combien de temps se garde un pack d'aquafaba ouvert pendant un événement ?", a: "Le liquide ouvert se garde au réfrigérateur ({opened_temp} °C) et s'utilise dans les {opened_days} jours. Notez la date d'ouverture sur la brique." },
      ],
    },
  },

  calculator: {
    'pisco-sour': {
      title: 'Calculateur aquafaba pour pisco sour | VERY AQUAFABA',
      h1: "Combien d'aquafaba par pisco sour ? Calculateur de quantités",
      description: 'Calculez les quantités de VERY AQUAFABA, de pisco, de citron vert et de sirop pour autant de pisco sours que prévu, en liquide ou en poudre avec son eau.',
      lead: `Indiquez le nombre de pisco sours prévus et le calculateur donne le pisco, le jus de citron vert, le sirop et le VERY AQUAFABA, en liquide ou en poudre. Pour {ex_batches} pisco sours, cela fait {ex_pisco} ml de pisco, {ex_lime_juice} ml de jus de citron vert frais et {ex_dose} ml d'aquafaba.`,
      sections: [
        { id: 'scaling', title: 'Ce qui se multiplie, et ce qui reste cocktail par cocktail', html: `<p>Doublez les cocktails et vous doublez le pisco, le citron vert, le sirop et l'aquafaba. Ce que le batch ne remplace pas, c'est la mousse : chaque cocktail garde son dry shake, puis {ice} glaçons pour le second shake. Préparez les ingrédients en volume, mais gardez le montage final cocktail par cocktail.</p>` },
        { id: 'packs', title: 'Combien de pisco sours par pack', html: `<ul>
<li><strong>Tetrapak de 1 L :</strong> {drinks_1l} pisco sours.</li>
<li><strong>Bag-in-box de 10 L :</strong> {drinks_10l} pisco sours.</li>
<li><strong>Sachet de 200 g :</strong> {drinks_200g} pisco sours.</li>
<li><strong>Sachet de 3 kg :</strong> {drinks_3kg} pisco sours.</li>
</ul>
<p>Un pack de liquide ouvert se garde au réfrigérateur ({opened_temp} °C) et s'utilise dans les {opened_days} jours : choisissez le pack d'après ce que vous servez dans ce délai. Un sachet ouvert se garde tant qu'il reste au sec et fermé.</p>` },
        { id: 'example', title: '{ex_batches} pisco sours : ce qui doit être prêt', html: `<p>Pour {ex_batches} pisco sours, préparez {ex_pisco} ml de pisco, {ex_lime_juice} ml de jus de citron vert, {ex_cane_syrup} ml de sirop de sucre de canne et {ex_dose} ml de VERY AQUAFABA. Il vous faudra aussi {ex_ice} glaçons pour les seconds shakes. Un Tetrapak de 1 L couvre l'aquafaba et laisse {ex_left_1l} ml à utiliser dans les {opened_days} jours qui suivent l'ouverture.</p>
<p>Avec la poudre ? Reconstituez {ex_powder} g avec {ex_water} ml d'eau avant le service et gardez au frais. Les quantités se préparent à l'avance, mais chaque cocktail garde le même <a href="{guide_href}">service en deux shakes</a>, et la <a href="{process_href}">fiche de procédé du pisco sour</a> donne les vérifications au poste.</p>` },
      ],
      faq: [
        { q: "Combien d'aquafaba pour un pisco sour ?", a: "{dose} ml de VERY AQUAFABA liquide, ou {powder} g de poudre avec {water} ml d'eau." },
        { q: 'Combien de pisco et de citron vert pour {ex_batches} cocktails ?', a: "{ex_pisco} ml de pisco et {ex_lime_juice} ml de jus de citron vert, avec {ex_cane_syrup} ml de sirop de sucre de canne et {ex_dose} ml d'aquafaba." },
        { q: 'Le calculateur compte-t-il la glace ?', a: 'Non, seulement les liquides. Prévoyez {ice} glaçons par cocktail, pour le second shake.' },
        { q: "Dois-je reconstituer toute la poudre d'un coup ?", a: "Reconstituez ce que le service demande avant l'ouverture et gardez au frais. Un sachet ouvert se garde au sec et fermé pour le service suivant." },
      ],
    },
    'amaretto-sour': {
      title: 'Calculateur aquafaba pour amaretto sour | VERY AQUAFABA',
      h1: "Combien d'aquafaba par amaretto sour ? Calculateur de quantités",
      description: "Les quantités d'un amaretto sour avec VERY AQUAFABA : aquafaba, amaretto, citron et sirop de vanille pour tous vos cocktails, en liquide ou en poudre.",
      lead: `Indiquez le nombre d'amaretto sours prévus et le calculateur donne l'amaretto, le jus de citron, le sirop de vanille et le VERY AQUAFABA, en liquide ou en poudre. Vérifiez d'abord l'amaretto : à {amaretto} ml par cocktail, {ex_batches} amaretto sours en demandent {ex_amaretto} ml.`,
      sections: [
        { id: 'scaling', title: "Vérifiez d'abord la bouteille d'amaretto", html: `<p>À {amaretto} ml par cocktail, l'amaretto est le chiffre qui grimpe le plus vite. Le citron, le sirop de vanille et l'aquafaba suivent, mais le service reste individuel : un dry shake pour chaque cocktail, puis {ice} glaçons et un second shake.</p>` },
        { id: 'packs', title: "Combien d'amaretto sours par pack", html: `<ul>
<li><strong>Tetrapak de 1 L :</strong> {drinks_1l} cocktails, à utiliser dans les {opened_days} jours après ouverture.</li>
<li><strong>Bag-in-box de 10 L :</strong> {drinks_10l} cocktails, pour les établissements à fort volume ou plusieurs bars qui partagent un pack.</li>
<li><strong>Sachet de 200 g :</strong> {drinks_200g} cocktails, sans date limite une fois ouvert, tant qu'il reste au sec et fermé.</li>
<li><strong>Sachet de 3 kg :</strong> {drinks_3kg} cocktails.</li>
</ul>
<p>Une semaine calme, ne reconstituez que ce qu'il faut pour la soirée : {p10} g de poudre dans {w10} ml d'eau couvrent dix amaretto sours, et le reste du sachet attend au sec et fermé le service suivant.</p>` },
        { id: 'example', title: '{ex_batches} amaretto sours : la liste du service', html: `<p>Pour {ex_batches} cocktails, mettez de côté {ex_amaretto} ml d'amaretto, {ex_lemon_juice} ml de jus de citron, {ex_vanilla_syrup} ml de sirop de vanille et {ex_dose} ml de VERY AQUAFABA. Avec la poudre, cela fait {ex_powder} g reconstitués avec {ex_water} ml d'eau.</p>
<p>Batchez l'amaretto, le citron et le sirop avant l'événement. Gardez l'aquafaba au frais et à part pour que chaque commande <a href="{guide_href}">monte sa mousse dans le shaker</a>, et la <a href="{process_href}">fiche de procédé de l'amaretto sour</a> montre à quoi ressemble chaque étape.</p>` },
      ],
      faq: [
        { q: "Combien d'amaretto pour {ex_batches} amaretto sours ?", a: "{ex_amaretto} ml d'amaretto, avec {ex_lemon_juice} ml de jus de citron, {ex_vanilla_syrup} ml de sirop de vanille et {ex_dose} ml d'aquafaba." },
        { q: "Combien d'aquafaba en poudre par amaretto sour ?", a: "{powder} g de poudre reconstitués avec {water} ml d'eau, pour un cocktail." },
        { q: 'Le sirop de vanille suit-il le nombre de cocktails ?', a: 'Oui, {vanilla_syrup} ml par cocktail, en proportion directe comme les autres ingrédients.' },
        { q: 'Quel pack pour un amaretto sour commandé quelques fois par semaine ?', a: "La poudre : un sachet de 200 g donne {drinks_200g} cocktails et se garde une fois ouvert, tant qu'il reste au sec et fermé." },
      ],
    },
    'gin-fizz': {
      title: 'Calculateur aquafaba pour gin fizz | VERY AQUAFABA',
      h1: "Combien d'aquafaba par gin fizz ? Calculateur de quantités",
      description: 'Calculez les quantités de VERY AQUAFABA, de gin, de citron et de sirop de sucre de canne pour autant de gin fizz que prévu, en liquide ou en poudre.',
      lead: `Indiquez le nombre de gin fizz prévus et le calculateur donne tout ce qui va dans le shaker : gin, jus de citron, sirop de sucre de canne et VERY AQUAFABA, en liquide ou en poudre. Le tonic n'est pas compté, car la quantité dépend de votre verre.`,
      sections: [
        { id: 'tonic', title: 'Ce que le calculateur laisse de côté', html: `<p>Le tableau s'arrête avant l'allongement. Le tonic s'ajoute dans le highball après le filtrage : la quantité dépend de votre verre, pas d'une mesure fixe de la recette. La glace reste aussi hors du calculateur : prévoyez {ice} glaçons par cocktail pour le second shake.</p>` },
        { id: 'packs', title: 'Combien de gin fizz par pack', html: `<ul>
<li><strong>Tetrapak de 1 L :</strong> {drinks_1l} gin fizz.</li>
<li><strong>Bag-in-box de 10 L :</strong> {drinks_10l} gin fizz, pour les établissements à fort volume ou plusieurs bars qui partagent un pack.</li>
<li><strong>Sachet de 200 g :</strong> {drinks_200g} gin fizz.</li>
<li><strong>Sachet de 3 kg :</strong> {drinks_3kg} gin fizz.</li>
</ul>
<p>Une fois ouvert, un pack de liquide se garde au réfrigérateur ({opened_temp} °C) et s'utilise dans les {opened_days} jours ; un sachet se garde tant qu'il reste au sec et fermé.</p>` },
        { id: 'example', title: '{ex_batches} gin fizz : la mise en place derrière le bar', html: `<p>Pour {ex_batches} gin fizz, préparez {ex_gin} ml de gin, {ex_lemon_juice} ml de jus de citron, {ex_cane_syrup} ml de sirop de sucre de canne et {ex_dose} ml de VERY AQUAFABA. Avec la poudre, reconstituez {ex_powder} g avec {ex_water} ml d'eau avant le service.</p>
<p>Le tonic reste hors du batch et hors du calculateur, car le <a href="{guide_href}">gin fizz s'allonge dans le verre</a>. Shakez chaque cocktail, filtrez-le dans le highball, puis allongez-le selon le service de la maison, dans l'ordre de la <a href="{process_href}">fiche de procédé du gin fizz</a>.</p>` },
      ],
      faq: [
        { q: "Combien d'aquafaba pour un gin fizz ?", a: "{dose} ml de VERY AQUAFABA liquide, ou {powder} g de poudre avec {water} ml d'eau." },
        { q: "Pourquoi le tonic n'est-il pas dans le calculateur ?", a: "Il s'ajoute sur chaque cocktail après le filtrage : la quantité dépend du verre. Tout ce qui va dans le shaker est dans le tableau." },
        { q: 'Combien de gin pour {ex_batches} gin fizz ?', a: "{ex_gin} ml de gin, avec {ex_lemon_juice} ml de jus de citron, {ex_cane_syrup} ml de sirop de sucre de canne et {ex_dose} ml d'aquafaba." },
        { q: 'Quel pack pour un bar qui sert des gin fizz tous les soirs ?', a: "Un Tetrapak de 1 L : il donne {drinks_1l} cocktails et s'utilise dans les {opened_days} jours après ouverture. Le bag-in-box de 10 L ({drinks_10l} cocktails) convient aux établissements à fort volume ou à plusieurs bars qui partagent un pack." },
      ],
    },
    'white-lady': {
      title: 'Calculateur aquafaba pour white lady | VERY AQUAFABA',
      h1: "Combien d'aquafaba par white lady ? Calculateur de quantités",
      description: 'Calculez les quantités de VERY AQUAFABA, gin, triple sec, citron et sirop de sucre de canne pour toutes vos white lady, en Tetrapak ou en sachet.',
      lead: `Indiquez le nombre de white lady prévues et le calculateur donne le gin, le triple sec, le jus de citron, le sirop de sucre de canne et le VERY AQUAFABA, en liquide ou en poudre. Avec deux alcools dans le shaker, vérifiez les deux bouteilles : {ex_batches} white lady demandent {ex_gin} ml de gin et {ex_triple_sec} ml de triple sec.`,
      sections: [
        { id: 'spirits', title: 'Le gin part deux fois plus vite que le triple sec', html: `<p>Chaque white lady demande {gin} ml de gin et {triple_sec} ml de triple sec : le gin se vide donc deux fois plus vite. Le citron, le sirop et l'aquafaba suivent en proportion directe. Le shake reste individuel, avec {ice} glaçons pour le second.</p>` },
        { id: 'packs', title: "Le pack d'aquafaba selon le nombre de cocktails", html: `<ul>
<li><strong>Tetrapak de 1 L :</strong> {drinks_1l} white lady.</li>
<li><strong>Bag-in-box de 10 L :</strong> {drinks_10l} white lady.</li>
<li><strong>Sachet de 200 g :</strong> {drinks_200g} white lady.</li>
<li><strong>Sachet de 3 kg :</strong> {drinks_3kg} white lady.</li>
</ul>
<p>Un pack de liquide ouvert se garde au réfrigérateur ({opened_temp} °C) et s'utilise dans les {opened_days} jours ; un sachet ouvert se garde tant qu'il reste au sec et fermé.</p>` },
        { id: 'example', title: "{ex_batches} white lady : les chiffres d'un événement", html: `<p>Pour {ex_batches} white lady, préparez {ex_gin} ml de gin, {ex_triple_sec} ml de triple sec, {ex_lemon_juice} ml de jus de citron, {ex_cane_syrup} ml de sirop de sucre de canne et {ex_dose} ml de VERY AQUAFABA. Un Tetrapak de 1 L couvre l'aquafaba et il en reste {ex_left_1l} ml. Avec la poudre, reconstituez {ex_powder} g avec {ex_water} ml d'eau avant le service.</p>
<p>Le batch fait gagner du temps sur le dosage, pas sur la technique finale. Chaque cocktail a toujours besoin du <a href="{guide_href}">dry shake avant la glace</a> pour que les fleurs tiennent sur la mousse, et la <a href="{process_href}">fiche de procédé de la white lady</a> donne les vérifications de chaque étape.</p>` },
      ],
      faq: [
        { q: "Combien d'aquafaba pour une white lady ?", a: "{dose} ml de VERY AQUAFABA liquide, ou {powder} g de poudre avec {water} ml d'eau." },
        { q: 'Combien de gin et de triple sec pour {ex_batches} white lady ?', a: "{ex_gin} ml de gin et {ex_triple_sec} ml de triple sec, avec {ex_lemon_juice} ml de jus de citron, {ex_cane_syrup} ml de sirop de sucre de canne et {ex_dose} ml d'aquafaba." },
        { q: 'Le calculateur compte-t-il la glace ?', a: 'Non, seulement ce qui va dans le shaker. Prévoyez {ice} glaçons par cocktail, pour le second shake.' },
        { q: 'Quel pack pour une white lady proposée le week-end ?', a: "La poudre : un sachet de 200 g donne {drinks_200g} cocktails et se garde une fois ouvert, tant qu'il reste au sec et fermé." },
      ],
    },
    'la-rosee': {
      title: 'Calculateur aquafaba pour La Rosée | VERY AQUAFABA',
      h1: "Combien d'aquafaba par La Rosée ? Calculateur de quantités",
      description: "Les quantités de La Rosée avec VERY AQUAFABA : aquafaba, vodka, liqueur de bergamote, citron, sirop de framboise et gouttes de fleur d'oranger.",
      lead: `Indiquez le nombre de coupes de La Rosée prévues et le calculateur donne la vodka, la liqueur de bergamote, le jus de citron, le sirop de framboise, l'eau de fleur d'oranger et le VERY AQUAFABA, en liquide ou en poudre. Les gouttes sont calculées aussi : {ex_batches} cocktails demandent {ex_orange_blossom} gouttes d'eau de fleur d'oranger.`,
      sections: [
        { id: 'drops', title: 'Les gouttes aussi se multiplient', html: `<p>Quelques gouttes semblent négligeables jusqu'à ce que les commandes s'enchaînent. {ex_batches} La Rosée demandent {ex_orange_blossom} gouttes, et le calculateur garde ce compte à côté des grandes mesures. Prévoyez {ice} glaçons par cocktail pour le second shake quand vous organisez le poste.</p>` },
        { id: 'packs', title: 'La taille du pack suit le nombre de coupes', html: `<ul>
<li><strong>Tetrapak de 1 L :</strong> {drinks_1l} cocktails, à utiliser dans les {opened_days} jours après ouverture.</li>
<li><strong>Bag-in-box de 10 L :</strong> {drinks_10l} cocktails, pour les établissements à fort volume ou plusieurs bars qui partagent un pack.</li>
<li><strong>Sachet de 200 g :</strong> {drinks_200g} cocktails, sans date limite une fois ouvert, tant qu'il reste au sec et fermé.</li>
<li><strong>Sachet de 3 kg :</strong> {drinks_3kg} cocktails.</li>
</ul>` },
        { id: 'example', title: '{ex_batches} La Rosée : toutes les mesures au même endroit', html: `<p>Pour {ex_batches} coupes, préparez {ex_vodka} ml de vodka, {ex_bergamot_liqueur} ml de liqueur de bergamote, {ex_lemon_juice} ml de jus de citron, {ex_raspberry_syrup} ml de sirop de framboise, {ex_orange_blossom} gouttes d'eau de fleur d'oranger et {ex_dose} ml de VERY AQUAFABA. Avec la poudre, reconstituez {ex_powder} g avec {ex_water} ml d'eau.</p>
<p>Batchez la vodka, la liqueur, le citron, la framboise et l'eau de fleur d'oranger avant le service. Gardez l'aquafaba à part pour que chaque coupe ait <a href="{guide_href}">son propre dry shake</a>, et la <a href="{process_href}">fiche de procédé de La Rosée</a> montre à quoi le cocktail doit ressembler à chaque étape.</p>` },
      ],
      faq: [
        { q: "Combien d'eau de fleur d'oranger pour {ex_batches} La Rosée ?", a: '{ex_orange_blossom} gouttes, à raison de {orange_blossom} gouttes par cocktail.' },
        { q: "Combien d'aquafaba pour un cocktail La Rosée ?", a: "{dose} ml de VERY AQUAFABA liquide, ou {powder} g de poudre avec {water} ml d'eau." },
        { q: 'Combien de vodka et de sirop de framboise pour {ex_batches} cocktails ?', a: "{ex_vodka} ml de vodka et {ex_raspberry_syrup} ml de sirop de framboise, avec {ex_bergamot_liqueur} ml de liqueur de bergamote, {ex_lemon_juice} ml de jus de citron et {ex_dose} ml d'aquafaba." },
        { q: 'Quel pack pour La Rosée proposée de temps en temps en suggestion ?', a: "La poudre : un sachet de 200 g donne {drinks_200g} cocktails et se garde une fois ouvert, tant qu'il reste au sec et fermé." },
      ],
    },
    'the-sunset': {
      title: 'Calculateur aquafaba pour The Sunset | VERY AQUAFABA',
      h1: "Combien d'aquafaba par Sunset ? Calculateur de quantités",
      description: 'Calculez les quantités de VERY AQUAFABA, rhum, amaretto, citron et sirop vanille tonka pour tous vos cocktails The Sunset, en Tetrapak ou en sachet.',
      lead: `Indiquez le nombre de Sunset prévus et le calculateur donne le rhum, l'amaretto, le jus de citron, le sirop vanille tonka et le VERY AQUAFABA, en liquide ou en poudre. Les petites mesures comptent aussi : {ex_batches} Sunset demandent {ex_amaretto} ml d'amaretto et {ex_vanilla_tonka_syrup} ml de sirop.`,
      sections: [
        { id: 'small', title: "Les petites doses comptent aussi", html: `<p>Le temps de servir {ex_batches} Sunset, l'amaretto atteint {ex_amaretto} ml et le sirop vanille et tonka {ex_vanilla_tonka_syrup} ml. Le ginger beer reste hors du tableau : il allonge chaque highball après le filtrage et dépend de votre verre. Prévoyez {ice} glaçons par cocktail pour le second shake.</p>` },
        { id: 'packs', title: "Le pack d'aquafaba selon le rythme du service", html: `<p>Un Tetrapak de 1 L donne {drinks_1l} Sunset et un bag-in-box de 10 L {drinks_10l}, la taille pour les établissements à fort volume ou plusieurs bars qui partagent un pack. L'un comme l'autre, une fois ouvert, se garde au réfrigérateur ({opened_temp} °C) et s'utilise dans les {opened_days} jours. Côté sachets, 200 g donnent {drinks_200g} Sunset et 3 kg en donnent {drinks_3kg}, et un sachet ouvert se garde tant qu'il reste au sec et fermé.</p>` },
        { id: 'example', title: "{ex_batches} Sunset : la base prête avant l'ouverture", html: `<p>Pour {ex_batches} Sunset, batchez {ex_rum} ml de rhum, {ex_amaretto} ml d'amaretto, {ex_lemon_juice} ml de jus de citron et {ex_vanilla_tonka_syrup} ml de sirop vanille et tonka. Gardez à côté {ex_dose} ml de VERY AQUAFABA au frais, ou reconstituez {ex_powder} g de poudre avec {ex_water} ml d'eau.</p>
<p>Le service se résume alors à une mesure de base, l'aquafaba, deux shakes et le ginger beer dans le verre. Gardez toujours cette dernière étape hors du shaker : <a href="{guide_href}">montez The Sunset</a> dans cet ordre, avec la <a href="{process_href}">fiche de procédé du Sunset</a> au poste pour les vérifications.</p>` },
      ],
      faq: [
        { q: "Combien d'aquafaba pour The Sunset ?", a: "{dose} ml de VERY AQUAFABA liquide, ou {powder} g de poudre avec {water} ml d'eau." },
        { q: 'Combien de ginger beer faut-il ?', a: 'Le ginger beer allonge chaque highball après le filtrage, sans mesure fixe : la quantité dépend de votre verre. Le calculateur couvre tout ce qui va dans le shaker.' },
        { q: "Combien de rhum et d'amaretto pour {ex_batches} Sunset ?", a: "{ex_rum} ml de rhum et {ex_amaretto} ml d'amaretto, avec {ex_lemon_juice} ml de jus de citron, {ex_vanilla_tonka_syrup} ml de sirop vanille et tonka et {ex_dose} ml d'aquafaba." },
        { q: 'Quel pack pour un bar qui sert The Sunset tous les jours ?', a: "Un Tetrapak de 1 L ({drinks_1l} cocktails) si vous en servez autant dans les {opened_days} jours après ouverture, à garder au réfrigérateur ({opened_temp} °C). Le bag-in-box de 10 L ({drinks_10l} cocktails) convient aux établissements à fort volume ou à plusieurs bars qui partagent un pack." },
      ],
    },
  },

  process: {
    'pisco-sour': {
      title: "Fiche de procédé pisco sour à l'aquafaba | VERY AQUAFABA",
      h1: "Comment shaker un pisco sour à l'aquafaba : la fiche étape par étape",
      description: "Le pisco sour à l'aquafaba sur une seule feuille : montage, dry shake, shake avec glace, filtrage et garniture, avec les points à vérifier et les solutions.",
      lead: `Un bon pisco sour suit un rythme précis : montage, dry shake, glace, second shake, filtrage. Quand ce rythme se dérègle, la mousse le montre tout de suite. Cette fiche donne les cinq étapes à suivre, avec les signes à surveiller quand la mousse sort plus fine qu'elle ne devrait.`,
      powderNote: "Poudre : pour un cocktail, {powder} g de poudre VERY AQUAFABA + {water} ml d'eau, reconstitués avant le service et mis au frais.",
      steps: [
        { step: 'Montage', reference: '{pisco} ml de pisco, {lime_juice} ml de citron vert, {cane_syrup} ml de sirop, {dose} ml de VERY AQUAFABA bien froid' },
        { step: 'Dry shake', reference: 'Fort, sans glace : le liquide devient pâle et épais' },
        { step: 'Avec glace', reference: "{ice} glaçons, second shake : le shaker givre à l'extérieur" },
        { step: 'Filtrage', reference: 'Dans un verre old fashioned : la mousse monte et se tient' },
        { step: 'Garniture', reference: 'Une tranche de citron séché sur la mousse' },
      ],
      checks: [
        { see: 'Mousse fine', check: 'La glace est entrée dès le départ', fix: "Dry shake d'abord, glace ensuite" },
        { see: 'Mousse lente et molle', check: 'Aquafaba à température ambiante', fix: "Gardez-le au frais jusqu'au shake" },
        { see: 'La mousse ne monte plus en milieu de service', check: "L'aquafaba a été ajouté au batch", fix: "Batchez seulement la base, ajoutez l'aquafaba à chaque cocktail" },
        { see: "La mousse retombe avant d'arriver au client", check: 'Le cocktail a attendu au passe', fix: 'Shakez à la commande et servez aussitôt' },
      ],
      sections: [
        { id: 'use', title: 'Quand un pisco sour manque de mousse', html: `<p>Gardez la fiche avec les recettes du bar, à côté de la <a href="{guide_href}">méthode du pisco sour</a>. Quand une mousse sort fine ou retombe tôt, comparez le cocktail aux cinq étapes, dans l'ordre. Commencez par deux vérifications simples : l'aquafaba était-il froid, et la glace n'est-elle entrée qu'après le dry shake ?</p>` },
        { id: 'before', title: 'Préparer le poste avant la première commande', html: `<ul>
<li><strong>Aquafaba froid.</strong> Le pack vit au réfrigérateur, et un pack ouvert s'utilise dans les {opened_days} jours, à une température de {opened_temp} °C.</li>
<li><strong>Poudre reconstituée.</strong> Si vous travaillez avec la poudre, reconstituez ce qu'il faut pour la soirée et mettez-la au frais.</li>
<li><strong>La date d'ouverture sur le pack.</strong> Notez-la sur la brique dès l'ouverture.</li>
<li><strong>La base batchée.</strong> Pisco, citron vert et sirop dans une bouteille ; l'aquafaba reste à part.</li>
</ul>` },
        { id: 'signs', title: 'Ce que vous devez voir à chaque étape', html: `<p>Après le dry shake, le liquide est pâle et épais, presque comme un milkshake. Après le shake avec glace, le shaker est givré à l'extérieur. Dans le verre, la mousse monte en se posant et tient assez ferme pour porter la tranche de citron séché. S'il manque l'un de ces signes, le tableau des vérifications ci-dessus indique l'étape à corriger. Pour préparer une soirée entière, le <a href="{calculator_href}">calculateur de quantités du pisco sour</a> donne toutes les quantités pour le nombre de cocktails prévus.</p>` },
      ],
      faq: [
        { q: "Pourquoi shaker d'abord sans glace ?", a: 'Le dry shake monte la mousse. Avec de la glace dès le départ, le cocktail est refroidi et dilué avant que la mousse se forme, et elle sort fine.' },
        { q: 'Combien de temps se garde un pack ouvert derrière le bar ?', a: "Le liquide ouvert se garde au réfrigérateur ({opened_temp} °C) et s'utilise dans les {opened_days} jours. Notez la date d'ouverture sur la brique." },
        { q: 'La poudre suit-elle la même fiche ?', a: "Oui. Reconstituez {powder} g de poudre avec {water} ml d'eau par cocktail avant le service, mettez au frais et suivez les mêmes cinq étapes." },
        { q: "Puis-je ajouter l'aquafaba à mon batch ?", a: "Non. Batchez le pisco, le citron vert et le sirop, et ajoutez l'aquafaba dans chaque shaker au moment du shake, cocktail par cocktail." },
      ],
    },
    'amaretto-sour': {
      title: "Fiche de procédé amaretto sour à l'aquafaba | VERY AQUAFABA",
      h1: "Comment shaker un amaretto sour à l'aquafaba : la fiche étape par étape",
      description: "L'amaretto sour à l'aquafaba sur une seule feuille : montage, dry shake, shake avec glace et filtrage, avec les vérifications quand la mousse sort plate.",
      lead: `Un amaretto sour cache mal une mousse faible. Sur ce cocktail ambré, une mousse molle ou qui s'amincit se voit dès le filtrage. Cette fiche garde le montage régulier d'un cocktail à l'autre et vous donne un moyen rapide de remonter au problème quand le cocktail ne sort pas du poste comme il devrait.`,
      powderNote: "Poudre : pour un cocktail, {powder} g de poudre VERY AQUAFABA + {water} ml d'eau, reconstitués avant le service et mis au frais.",
      steps: [
        { step: 'Montage', reference: "{amaretto} ml d'amaretto, {lemon_juice} ml de citron, {vanilla_syrup} ml de sirop de vanille, {dose} ml de VERY AQUAFABA bien froid" },
        { step: 'Dry shake', reference: 'Fort, sans glace : le liquide devient pâle et épais' },
        { step: 'Avec glace', reference: "{ice} glaçons, second shake jusqu'à ce que le shaker givre" },
        { step: 'Filtrage', reference: 'Dans le verre de votre bar pour les sours, et servez aussitôt' },
      ],
      checks: [
        { see: 'Mousse fine dès le premier cocktail', check: 'La glace est entrée avant le dry shake', fix: "Dry shake d'abord, glace ensuite" },
        { see: 'Mousse qui monte lentement et reste molle', check: 'Aquafaba laissé à température ambiante', fix: "Gardez le pack au réfrigérateur jusqu'au shake" },
        { see: 'La mousse ne monte plus en fin de soirée', check: "L'aquafaba a été ajouté au batch d'amaretto et de citron", fix: "Batchez seulement l'amaretto, le citron et le sirop" },
        { see: 'Plate en arrivant en salle', check: 'Le cocktail a attendu au passe', fix: 'Shakez à la commande et servez aussitôt' },
      ],
      sections: [
        { id: 'use', title: 'Ajouter votre verre et votre garniture', html: `<p>Gardez cette fiche avec les recettes du bar, à côté de la <a href="{guide_href}">méthode de l'amaretto sour</a>, et ajoutez votre verre et votre garniture sur l'exemplaire imprimé. La fiche s'arrête au filtrage : le service final reste celui de votre maison.</p>` },
        { id: 'before', title: 'Préparer le poste avant la première commande', html: `<ul>
<li><strong>Le batch.</strong> Amaretto, citron et sirop de vanille dans une bouteille, l'aquafaba gardé à part.</li>
<li><strong>L'aquafaba.</strong> Bien froid, et un pack ouvert utilisé dans les {opened_days} jours, conservé au réfrigérateur ({opened_temp} °C).</li>
<li><strong>La poudre, si vous l'utilisez.</strong> Reconstituée pour la soirée et gardée au réfrigérateur.</li>
</ul>` },
        { id: 'signs', title: "Ce que vous devez voir avant d'envoyer", html: `<p>Après le dry shake, le liquide est pâle et épais. Après le shake avec glace, le shaker givre. Dans le verre, la mousse tient ferme sur l'amaretto. Si elle est fine ou molle, le tableau des vérifications ci-dessus indique l'étape à corriger. Pour préparer une soirée entière, utilisez le <a href="{calculator_href}">calculateur de quantités de l'amaretto sour</a>.</p>` },
      ],
      faq: [
        { q: 'Dans quel verre filtrer un amaretto sour ?', a: 'Le verre dans lequel votre bar sert déjà ses sours. La fiche vous laisse le choix du verre et de la garniture.' },
        { q: 'Pourquoi mon amaretto sour perd-il sa mousse ?', a: "En général, la glace est entrée avant le dry shake, l'aquafaba était tiède, ou le cocktail a attendu au passe. Les vérifications de cette fiche couvrent les trois cas." },
        { q: 'Puis-je utiliser la poudre pour les amaretto sours ?', a: "Oui. Reconstituez {powder} g de poudre avec {water} ml d'eau par cocktail avant le service et gardez au frais." },
        { q: "L'aquafaba peut-il aller dans le batch d'amaretto et de citron ?", a: 'Non. Ajoutez-le dans chaque shaker au moment du shake, cocktail par cocktail.' },
      ],
    },
    'gin-fizz': {
      title: "Fiche de procédé gin fizz à l'aquafaba | VERY AQUAFABA",
      h1: "Comment monter un gin fizz à l'aquafaba : la fiche étape par étape",
      description: "Le gin fizz à l'aquafaba sur une seule feuille : montage, dry shake, shake avec glace, filtrage, tonic et garniture, avec les vérifications pour la mousse.",
      lead: `Le gin fizz est simple jusqu'aux dernières secondes. Vous pouvez monter une belle mousse dans le shaker et la perdre si le tonic arrive au mauvais moment. Cette fiche garde les six étapes dans le bon ordre, du dry shake à l'allongement, avec les vérifications à faire quand le cocktail arrive dans le highball sans la hauteur attendue.`,
      powderNote: "Poudre : pour un cocktail, {powder} g de poudre VERY AQUAFABA + {water} ml d'eau, reconstitués avant le service et mis au frais.",
      steps: [
        { step: 'Montage', reference: '{gin} ml de gin, {lemon_juice} ml de citron, {cane_syrup} ml de sirop de sucre de canne, {dose} ml de VERY AQUAFABA bien froid' },
        { step: 'Dry shake', reference: "Fort, sans glace : c'est là que la mousse se fait" },
        { step: 'Avec glace', reference: '{ice} glaçons, second shake pour refroidir' },
        { step: 'Filtrage', reference: 'Dans un verre highball' },
        { step: 'Allongement', reference: 'Le tonic, versé par-dessus, jamais shaké' },
        { step: 'Garniture', reference: 'Une tranche de citron séché sur la mousse' },
      ],
      checks: [
        { see: 'Mousse fine avant le tonic', check: 'La glace est entrée avant le dry shake', fix: "Dry shake d'abord, glace ensuite" },
        { see: 'Mousse molle', check: 'Aquafaba à température ambiante', fix: "Gardez-le au frais jusqu'au shake" },
        { see: 'Pas de mousse sur le long drink', check: 'Le tonic est allé dans le shaker', fix: "Filtrez d'abord, puis allongez au tonic dans le verre" },
        { see: 'Mousse disparue en arrivant en salle', check: 'Le cocktail a attendu au passe', fix: 'Shakez, allongez et servez aussitôt' },
      ],
      sections: [
        { id: 'use', title: 'Quand un gin fizz perd sa mousse', html: `<p>Gardez cette fiche là où se montent les highballs, avec la <a href="{guide_href}">méthode du gin fizz</a> dans le cahier du bar. Si le cocktail arrive dans le verre sans vraie mousse, vérifiez d'abord l'ordre des shakes. Si la mousse disparaît ensuite, vérifiez que le tonic est allé dans le verre et non dans le shaker.</p>` },
        { id: 'before', title: 'Préparer le poste avant la première commande', html: `<ul>
<li><strong>Base batchée.</strong> Gin, citron et sirop de sucre de canne dans une bouteille ; l'aquafaba et le tonic restent à part.</li>
<li><strong>Aquafaba froid.</strong> Un pack ouvert se garde au réfrigérateur ({opened_temp} °C) et s'utilise dans les {opened_days} jours.</li>
<li><strong>Highballs prêts.</strong> Le cocktail passe directement du filtrage à l'allongement.</li>
</ul>` },
        { id: 'signs', title: 'Ce que le verre doit vous montrer', html: `<p>Après le dry shake, le liquide est pâle et épais. Après le shake avec glace, le shaker givre. Filtré dans le highball, le cocktail porte sa mousse ; le tonic se glisse ensuite sous la mousse et allonge le cocktail et le citron séché se pose sur le dessus. Le <a href="{calculator_href}">calculateur de quantités du gin fizz</a> fait le compte du gin, du citron, du sirop et de l'aquafaba pour la soirée.</p>` },
      ],
      faq: [
        { q: 'Quand le tonic entre-t-il dans un gin fizz ?', a: 'Après le filtrage, versé dans le highball par-dessus le cocktail. Il ne va jamais dans le shaker.' },
        { q: 'Pourquoi mon gin fizz est-il plat ?', a: "Vérifiez l'ordre : dry shake d'abord, puis glace, puis filtrage, puis tonic. Un aquafaba tiède ou un cocktail resté au passe perd aussi sa mousse." },
        { q: 'La poudre marche-t-elle pour le gin fizz ?', a: "Oui. Reconstituez {powder} g de poudre avec {water} ml d'eau par cocktail avant le service et gardez au frais." },
        { q: 'Puis-je batcher les gin fizz ?', a: "Batchez le gin, le citron et le sirop. L'aquafaba entre au shake et le tonic dans le verre." },
      ],
    },
    'white-lady': {
      title: "Fiche de procédé white lady à l'aquafaba | VERY AQUAFABA",
      h1: "Comment shaker une white lady à l'aquafaba : la fiche étape par étape",
      description: "La white lady à l'aquafaba sur une seule feuille : montage, dry shake, shake avec glace, filtrage en verre à pied et garniture, avec les vérifications.",
      lead: `La garniture dit tout. Si les fleurs séchées tiennent bien sur la mousse, le cocktail est réussi. Si elles s'enfoncent, quelque chose s'est mal passé plus tôt dans le montage. Cette fiche donne une méthode en cinq étapes et les vérifications à faire quand la white lady perd la finition ferme dont elle a besoin.`,
      powderNote: "Poudre : pour un cocktail, {powder} g de poudre VERY AQUAFABA + {water} ml d'eau, reconstitués avant le service et mis au frais.",
      steps: [
        { step: 'Montage', reference: '{gin} ml de gin, {triple_sec} ml de triple sec, {lemon_juice} ml de citron, {cane_syrup} ml de sirop de sucre de canne, {dose} ml de VERY AQUAFABA bien froid' },
        { step: 'Dry shake', reference: 'Fort, sans glace : le liquide devient pâle et épais' },
        { step: 'Avec glace', reference: "{ice} glaçons, second shake jusqu'à ce que le shaker givre" },
        { step: 'Filtrage', reference: 'Dans un verre à cocktail ou à margarita, sans glace dans le verre' },
        { step: 'Garniture', reference: 'Quelques fleurs séchées sur la mousse' },
      ],
      checks: [
        { see: "Les fleurs s'enfoncent dans le cocktail", check: 'La glace est entrée avant le dry shake', fix: "Dry shake d'abord, glace ensuite" },
        { see: 'Mousse lente et molle', check: 'Aquafaba à température ambiante', fix: "Gardez-le au frais jusqu'au shake" },
        { see: 'La mousse ne monte plus en milieu de service', check: "L'aquafaba a été ajouté au batch", fix: 'Batchez seulement le gin, le triple sec, le citron et le sirop' },
        { see: "La mousse retombe avant d'arriver au client", check: 'Le cocktail a attendu au passe', fix: 'Shakez à la commande et garnissez aussitôt' },
      ],
      sections: [
        { id: 'use', title: 'Quand la mousse ne tient pas les fleurs', html: `<p>Gardez cette fiche près des verres à pied ou dans le cahier du bar, à côté de la <a href="{guide_href}">méthode de la white lady</a>. Si les fleurs s'enfoncent, remontez depuis le verre : vérifiez la mousse, le second shake, puis si le dry shake a bien eu lieu avant la glace.</p>` },
        { id: 'before', title: 'Préparer le poste avant la première commande', html: `<ul>
<li><strong>Le batch.</strong> Gin, triple sec, citron et sirop dans une bouteille ; l'aquafaba gardé à part.</li>
<li><strong>L'aquafaba.</strong> Au réfrigérateur, et un pack ouvert utilisé dans les {opened_days} jours, à une température de {opened_temp} °C.</li>
<li><strong>Les verres.</strong> Verres à cocktail ou à margarita prêts, et les fleurs séchées à portée de main.</li>
<li><strong>La poudre, si vous l'utilisez.</strong> Reconstituée pour la soirée et mise au frais.</li>
</ul>` },
        { id: 'signs', title: 'Ce que le verre doit vous montrer', html: `<p>Après le dry shake, le liquide est pâle et épais, presque comme un milkshake. Après le shake avec glace, le shaker est givré à l'extérieur. Dans le verre, la mousse est plane et assez ferme pour porter les fleurs. S'il manque l'un de ces signes, le tableau des vérifications ci-dessus indique l'étape à corriger. Le <a href="{calculator_href}">calculateur de quantités de la white lady</a> donne les quantités pour une soirée entière.</p>` },
      ],
      faq: [
        { q: "Pourquoi les fleurs séchées s'enfoncent-elles ?", a: "La mousse est trop fine pour les porter, le plus souvent parce que la glace est entrée avant le dry shake. Shakez d'abord sans glace, puis avec." },
        { q: 'La white lady se sert-elle sur glace ?', a: 'Non. Elle est filtrée dans un verre à cocktail ou à margarita, sans glace dans le verre.' },
        { q: 'La poudre suit-elle la même fiche ?', a: "Oui. Reconstituez {powder} g de poudre avec {water} ml d'eau par cocktail avant le service, mettez au frais et suivez les mêmes cinq étapes." },
        { q: "Puis-je ajouter l'aquafaba au batch de gin et de triple sec ?", a: 'Non. Ajoutez-le dans chaque shaker au moment du shake, cocktail par cocktail.' },
      ],
    },
    'la-rosee': {
      title: "Fiche de procédé La Rosée à l'aquafaba | VERY AQUAFABA",
      h1: "Comment shaker La Rosée à l'aquafaba : la fiche étape par étape",
      description: "La Rosée sur une seule feuille : montage avec {orange_blossom} gouttes d'eau de fleur d'oranger, dry shake, shake avec glace, filtrage en coupe et menthe.",
      lead: `La Rosée montre vite quand quelque chose ne va pas. Le rose apparaît à travers une mousse fine, la menthe commence à s'enfoncer, ou la fleur d'oranger prend trop de place. Cette fiche réunit les cinq étapes du cocktail et vous aide à lire ce qui s'est mal passé avant que la coupe suivante quitte le bar.`,
      powderNote: "Poudre : pour un cocktail, {powder} g de poudre VERY AQUAFABA + {water} ml d'eau, reconstitués avant le service et mis au frais.",
      steps: [
        { step: 'Montage', reference: "{vodka} ml de vodka, {bergamot_liqueur} ml de liqueur de bergamote, {lemon_juice} ml de citron, {raspberry_syrup} ml de sirop de framboise, {orange_blossom} gouttes d'eau de fleur d'oranger, {dose} ml de VERY AQUAFABA bien froid" },
        { step: 'Dry shake', reference: "Fort, sans glace : c'est là que la mousse se fait" },
        { step: 'Avec glace', reference: '{ice} glaçons, second shake pour refroidir' },
        { step: 'Filtrage', reference: 'Dans une coupe : une mousse pâle sur un cocktail rose' },
        { step: 'Garniture', reference: 'Une branche de menthe sur la mousse' },
      ],
      checks: [
        { see: 'Du rose à travers la mousse', check: 'La glace est entrée avant le dry shake', fix: "Dry shake d'abord, glace ensuite" },
        { see: 'Mousse molle', check: 'Aquafaba à température ambiante', fix: "Gardez-le au frais jusqu'au shake" },
        { see: "La fleur d'oranger domine", check: 'Plus de {orange_blossom} gouttes sont entrées', fix: 'Dosez avec un flacon compte-gouttes' },
        { see: "La menthe s'enfonce avant d'arriver en salle", check: 'Le cocktail a attendu au passe', fix: 'Shakez à la commande et servez aussitôt' },
      ],
      sections: [
        { id: 'use', title: 'Quand le rose se voit à travers la mousse', html: `<p>Gardez cette fiche près du poste des coupes, avec la <a href="{guide_href}">méthode de La Rosée</a>. Si le rose commence à se voir à travers la mousse, remontez le problème avec la fiche, du filtrage au second shake puis au dry shake, avant de toucher à la recette.</p>` },
        { id: 'before', title: 'Préparer le poste avant la première commande', html: `<ul>
<li><strong>Base batchée.</strong> Vodka, liqueur de bergamote, citron, sirop de framboise et eau de fleur d'oranger dans une bouteille ; l'aquafaba reste à part.</li>
<li><strong>Flacon compte-gouttes.</strong> Si l'eau de fleur d'oranger s'ajoute cocktail par cocktail, gardez-la dans un flacon compte-gouttes sur le poste.</li>
<li><strong>Aquafaba froid.</strong> Un pack ouvert se garde au réfrigérateur ({opened_temp} °C) et s'utilise dans les {opened_days} jours.</li>
<li><strong>Coupes et menthe prêtes.</strong> Le cocktail passe directement du filtrage à la garniture.</li>
</ul>` },
        { id: 'signs', title: 'Ce que vous devez voir dans la coupe', html: `<p>Après le dry shake, le liquide est rose pâle et épais. Après le shake avec glace, le shaker givre. Dans la coupe, une mousse pâle se pose sur le cocktail rose avec une ligne nette entre les deux, et la menthe tient sur le dessus sans s'enfoncer. Le <a href="{calculator_href}">calculateur de quantités de La Rosée</a> fait le compte du batch, gouttes comprises.</p>` },
      ],
      faq: [
        { q: 'Pourquoi le rose se voit-il à travers la mousse ?', a: "La mousse est fine. La cause habituelle : de la glace dans le shaker avant le dry shake ; un aquafaba tiède donne aussi une mousse molle." },
        { q: "L'eau de fleur d'oranger peut-elle aller dans le batch ?", a: "Oui, à {orange_blossom} gouttes par cocktail, avec la vodka, la liqueur de bergamote, le citron et le sirop de framboise. L'aquafaba reste hors du batch." },
        { q: 'La poudre marche-t-elle pour La Rosée ?', a: "Oui. Reconstituez {powder} g de poudre avec {water} ml d'eau par cocktail avant le service et gardez au frais." },
        { q: 'Quel verre et quelle garniture pour La Rosée ?', a: 'Une coupe et une branche de menthe sur la mousse.' },
      ],
    },
    'the-sunset': {
      title: "Fiche de procédé The Sunset à l'aquafaba | VERY AQUAFABA",
      h1: "Comment monter The Sunset à l'aquafaba : la fiche étape par étape",
      description: 'The Sunset sur une seule feuille : montage, dry shake, shake avec glace, filtrage en highball, ginger beer et garniture, avec les vérifications pour la mousse.',
      lead: `The Sunset a un moment clé : le cocktail quitte le shaker, puis le ginger beer prend le relais dans le verre. Si cet ordre se brouille, la mousse est en général la première à en souffrir. Cette fiche garde les six étapes dans l'ordre et donne les vérifications à faire quand le cocktail sort plat, quand la mousse reste molle ou quand elle s'enfonce sous l'allongement.`,
      powderNote: "Poudre : pour un cocktail, {powder} g de poudre VERY AQUAFABA + {water} ml d'eau, reconstitués avant le service et mis au frais.",
      steps: [
        { step: 'Montage', reference: "{rum} ml de rhum, {amaretto} ml d'amaretto, {lemon_juice} ml de citron, {vanilla_tonka_syrup} ml de sirop vanille et tonka, {dose} ml de VERY AQUAFABA bien froid" },
        { step: 'Dry shake', reference: "Fort, sans glace, jusqu'à ce que le liquide soit pâle et épais" },
        { step: 'Avec glace', reference: "{ice} glaçons, second shake jusqu'à ce que le shaker givre" },
        { step: 'Filtrage', reference: 'Dans un verre highball, la mousse déjà sur le dessus' },
        { step: 'Allongement', reference: 'Le ginger beer dans le verre, jamais dans le shaker' },
        { step: 'Garniture', reference: 'Quelques fleurs séchées parsemées sur la mousse' },
      ],
      checks: [
        { see: 'Mousse déjà fine dans le highball', check: 'La glace est entrée en premier', fix: 'Shakez sans glace, puis avec glace' },
        { see: "La mousse s'enfonce quand le ginger beer arrive", check: 'Ginger beer shaké avec le reste', fix: 'Gardez-le pour le verre, après le filtrage' },
        { see: 'Mousse lente à monter, qui reste molle', check: "Aquafaba sorti du réfrigérateur trop tôt", fix: "Gardez-le au frais jusqu'au moment du shake" },
        { see: "Les fleurs s'enfoncent avant d'arriver au client", check: 'Attente au passe', fix: 'Allongez et servez aussitôt' },
      ],
      sections: [
        { id: 'use', title: 'Quand The Sunset perd sa mousse', html: `<p>Gardez cette fiche au poste des highballs, avec la <a href="{guide_href}">méthode du Sunset</a> dans le cahier du bar. Si The Sunset arrive au client sans sa mousse, vérifiez trois choses dans l'ordre : le dry shake est-il venu avant la glace, l'aquafaba était-il froid, et le ginger beer est-il resté hors du shaker ?</p>` },
        { id: 'before', title: "Le poste avant l'ouverture", html: `<ul>
<li><strong>Une bouteille de base.</strong> Rhum, amaretto, citron et sirop vanille et tonka, batchés ensemble.</li>
<li><strong>Deux choses à part.</strong> L'aquafaba au réfrigérateur, un pack ouvert utilisé dans les {opened_days} jours, à une température de {opened_temp} °C, et le ginger beer, au frais.</li>
<li><strong>Verres et garniture.</strong> Les highballs et les fleurs séchées à portée de main au moment du filtrage.</li>
</ul>` },
        { id: 'signs', title: 'Ce que vous devez voir avant le ginger beer', html: `<p>Pâle et épais après le dry shake, un shaker givré après le second, et une mousse blanche posée sur le cocktail une fois filtré. Le ginger beer se glisse ensuite sous la mousse, qui monte avec lui, et les fleurs se posent. Pour préparer une soirée entière, le <a href="{calculator_href}">calculateur de quantités du Sunset</a> calcule la base pour le nombre de cocktails prévus.</p>` },
      ],
      faq: [
        { q: 'Le ginger beer peut-il aller dans le shaker ?', a: 'Non. Il va dans le highball après le filtrage, une fois la mousse formée.' },
        { q: 'À quoi doit ressembler The Sunset avant le ginger beer ?', a: 'Filtré dans le highball, avec déjà une mousse blanche dessus. Le ginger beer se glisse ensuite sous la mousse et allonge le cocktail.' },
        { q: 'La poudre marche-t-elle pour The Sunset ?', a: "Oui : {powder} g de poudre dans {water} ml d'eau par cocktail, reconstitués avant le service et mis au frais, puis les mêmes six étapes." },
        { q: 'Quelles parties de The Sunset puis-je batcher ?', a: "Le rhum, l'amaretto, le citron et le sirop vanille et tonka. L'aquafaba entre au shake et le ginger beer dans le verre." },
      ],
    },
  },
};
