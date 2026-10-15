// Foam pages, French (October 2026): the cocktail foamer hub and its three sets, written natively
// from the approved English (foam.en.js) with the bar vocabulary of cocktails.fr.js (shaker, dry
// shake, batch, au passe, mesuré au jigger). Every figure is a {token} from facts.json; the label
// tables ({labels_*}) are built from facts.foamers and translated through labels.table. No dashes;
// competitors named only with their published labels, never linked. Loi Evin: objective wording.

export default {
  labels: {
    eyebrow: 'Foamer pour cocktails',
    checked: 'octobre 2026',
    imbibeDate: 'avril 2025',
    doses: {
      fee: '4 à 6 traits par cocktail',
      msb: '6 à 8 gouttes par cocktail',
      wonderfoam: '3 à 6 gouttes par cocktail',
      vegg: "1:1 à la place du blanc d'œuf",
    },
    table: {
      heads: ['Foamer', "Ce qu'indique l'étiquette", 'Alcool', 'Allergènes déclarés', 'Source'],
      values: {
        'Not stated': 'Non indiqué',
        'None listed': 'Aucun indiqué',
        'None of the 14 EU allergens': "Aucun des 14 allergènes de l'UE",
        'Soy': 'Soja',
        'Product label': 'Étiquette du produit',
      },
      ingredients: {
        very: 'Eau, pois chiches. Sans additifs, sans conservateurs.',
        vegg: "Eau, émulsifiants, méthylcellulose, esters d'acides gras, lécithine de soja, épaississants, maltodextrine, gomme xanthane, gomme d'acacia, conservateur E211, antioxydant acide ascorbique",
        fee: 'Eau, propylène glycol (E1520), polysorbate 80 (E433), sorbate de potassium (E202), benzoate de soude (E211), acide citrique, extrait de citron',
        foamee: 'Extrait de saponine végétale, eau, acide citrique',
        wonderfoam: 'Extrait de quillaja, eau, gomme arabique, amidon modifié (E1450), benzoate de sodium, sorbate de potassium',
        msb: "Alcool (40 %), sucre de canne biologique, extrait d'arôme naturel, extraits botaniques, herbes",
        yanni: "Une émulsion alcoolisée d'origine végétale",
        fancy: 'Amidon de maïs modifié',
        pfaff: 'Sirop de tapioca, gomme arabique, polysorbate 80',
        foammagic: 'Maltodextrine, méthylcellulose, gomme xanthane',
      },
    },
  },

  pages: {
    'cocktail-foamer': {
      title: "Foamer à l'aquafaba pour cocktails | VERY AQUAFABA",
      h1: "Foamer pour cocktails : l'aquafaba pour vos sours",
      crumb: 'Foamer pour cocktails',
      description: "VERY AQUAFABA est un foamer pour cocktails à base d'aquafaba, fait d'eau et de pois chiches : {dose} ml par cocktail, dry shake puis shake avec glace.",
      lead: `Demandez derrière un bar pourquoi le blanc d'œuf garde sa place dans un sour : la réponse est souvent posée sur le cocktail, une mousse blanche et épaisse, assez tenue pour porter la garniture. VERY AQUAFABA vous propose une alternative à base d'aquafaba, à {dose} ml par cocktail, avec le même dry shake suivi d'un shake avec glace. Si vous savez déjà faire un sour, la technique vous est familière. Les vraies questions sont ailleurs : ce que contient le foamer, comment il entre dans votre recette et quel format correspond au nombre de cocktails que vous servez.`,
      sections: [
        { id: 'swap', title: 'Remplacez le blanc d\'œuf, gardez la méthode', html: `<p>Rien d'autre ne bouge dans le montage. L'alcool, les agrumes, le sirop, le verre et la garniture restent à leur place. Mettez <b>{dose} ml de VERY AQUAFABA</b> à la place du blanc d'œuf, faites d'abord le dry shake, puis ajoutez la glace et shakez de nouveau.</p>
<p>Si vous faites déjà des sours au blanc d'œuf, la <a href="{how_to_make_page_href}">méthode commune à tous les sours</a> vous sera familière dès la première commande.</p>` },
        { id: 'sour', title: "Ce que l'aquafaba apporte à un sour", html: `<p>L'aquafaba sert déjà d'alternative au blanc d'œuf, pour la mousse qu'il donne à un cocktail shaké.</p>
<p>En {imbibe_date}, <a href="{imbibe_url}">Imbibe a testé six foamers vegan pour cocktails</a> et a décrit le produit à base d'aquafaba de son test comme celui qui donnait « {imbibe_quote} », autrement dit les résultats les plus proches de l'œuf, avec une mousse dense et crémeuse et plus de corps. Ce test portait sur un autre produit, pas sur VERY AQUAFABA, mais il montre pourquoi l'aquafaba lui-même a trouvé sa place derrière le bar.</p>
<p>VERY AQUAFABA est fait d'aquafaba, avec de l'eau et des pois chiches sur l'étiquette. Dans l'emballage, il a une légère note grillée qui vient de la cuisson des pois chiches ; une fois shaké dans le cocktail, elle disparaît.</p>` },
        { id: 'label', title: 'Un foamer sans additifs', html: `<p>Retournez le pack : la liste d'ingrédients tient en une ligne. <b>De l'eau et des pois chiches</b>, sans additifs ni conservateurs.</p>
<p>Les autres foamers pour cocktails prennent d'autres chemins : émulsifiants, gommes, cellulose, conservateurs ou extraits de plantes. Si les ingrédients comptent pour votre bar, vous pouvez <a href="{foamer_ingredients_href}">comparer les étiquettes des foamers côte à côte</a> et vérifier chaque produit d'après sa propre étiquette publiée.</p>` },
        { id: 'can', title: 'Pourquoi ne pas simplement ouvrir une boîte ?', html: `<p>Le liquide d'une boîte de pois chiches est lui aussi de l'aquafaba, mais il n'a pas été conditionné pour le bar.</p>
<p>D'une conserve à l'autre, le liquide peut changer, et il faut toujours ouvrir, égoutter, puis trouver quoi faire des pois chiches. VERY AQUAFABA vous donne un produit défini et une dose de travail de <b>{dose} ml par cocktail</b>, prête à verser à la sortie du réfrigérateur.</p>
<p>Pendant le service, cela veut dire une seule recette que tout le monde derrière le bar peut suivre, au lieu de s'adapter à la boîte qui se trouve ouverte ce soir-là.</p>` },
        { id: 'packs', title: 'Des sours tous les soirs, ou quelques-uns par semaine ?', html: `<p>Un <b>Tetrapak de 1 L donne {drinks_1l} cocktails</b> à {dose} ml chacun. Une fois ouvert, il se garde au réfrigérateur à <b>{opened_temp} °C</b> et s'utilise dans les <b>{opened_days} jours</b>.</p>
<p>Si les sours ne sortent que de temps en temps, la poudre vous laisse plus de souplesse. Un <b>sachet de 200 g donne {drinks_200g} cocktails</b>, à raison de <b>{powder} g de poudre reconstitués avec {water} ml d'eau par cocktail</b>, et le sachet ouvert, gardé au sec et fermé, se conserve jusqu'à sa date de durabilité minimale.</p>
<p>Pour les bars qui servent des volumes bien plus importants, VERY AQUAFABA existe aussi en <a href="{bulk_foamer_href}">bag-in-box de 10 L et en sachet de poudre de 3 kg</a>.</p>` },
      ],
      faq: [
        { q: "Qu'est-ce qu'un foamer pour cocktails ?", a: "C'est l'ingrédient qui forme la mousse blanche sur un sour shaké. Le blanc d'œuf est l'option traditionnelle. VERY AQUAFABA utilise l'aquafaba à sa place, à {dose} ml par cocktail." },
        { q: "L'aquafaba mousse-t-il comme le blanc d'œuf ?", a: "L'aquafaba s'utilise comme alternative au blanc d'œuf dans les cocktails à mousse. Lors d'un test de six foamers vegan publié par Imbibe en {imbibe_date}, un produit à base d'aquafaba a été décrit comme donnant « {imbibe_quote} », les résultats les plus proches de l'œuf. Ce test n'a pas été réalisé sur VERY AQUAFABA." },
        { q: 'Combien de foamer par cocktail ?', a: "Comptez {dose} ml de VERY AQUAFABA liquide par cocktail, ou {powder} g de poudre reconstitués avec {water} ml d'eau." },
        { q: "VERY AQUAFABA contient-il de l'alcool ?", a: "Non. VERY AQUAFABA contient de l'eau et des pois chiches : le produit lui-même n'apporte donc pas d'alcool au cocktail." },
        { q: 'A-t-il un goût de pois chiche ?', a: "Dans l'emballage, VERY AQUAFABA a une légère note grillée qui vient de la cuisson des pois chiches. Une fois shaké dans un cocktail, elle disparaît : la mousse n'apporte aucun goût propre, et la saveur reste celle de l'alcool, des agrumes, du sirop et des autres ingrédients du cocktail." },
        { q: 'Où acheter VERY AQUAFABA pour mon bar ?', a: "Vous pouvez [acheter de l'aquafaba pour cocktails]({where_to_buy_page_href}) sur Amazon aux États-Unis et en Allemagne, sur InstantChef en France, et par le formulaire de demande dans la plupart des autres pays." },
      ],
    },

    'foamer-ingredients': {
      title: 'Que contient votre foamer pour cocktails ? | VERY AQUAFABA',
      h1: 'Que contient votre foamer pour cocktails ?',
      crumb: 'Ingrédients des foamers',
      description: 'Comparez les ingrédients des foamers pour cocktails côte à côte. VERY AQUAFABA indique de l\'eau et des pois chiches, sans additifs ni conservateurs.',
      lead: `Retournez la bouteille. VERY AQUAFABA n'indique que de l'eau et des pois chiches, sans additifs ni conservateurs. Les autres foamers pour cocktails font le même travail par d'autres chemins : certains utilisent des gommes, des émulsifiants, des amidons ou des extraits de plantes, et certains contiennent de l'alcool. Le tableau ci-dessous place les étiquettes les unes à côté des autres, pour que vous voyiez ce que chaque produit déclare réellement.`,
      sections: [
        { id: 'labels', title: 'Les étiquettes, côte à côte', html: `{labels_all}
<p><b>Étiquettes vérifiées en {labels_checked}.</b></p>
<p>Les formulations peuvent changer : chaque source doit être vérifiée de nouveau avant toute mise à jour de cette comparaison.</p>` },
        { id: 'look', title: "Que regarder sur l'étiquette d'un foamer ?", html: `<p><b>Ce qui fait la mousse.</b> Dans VERY AQUAFABA, l'ingrédient moussant vient du pois chiche lui-même. Pour plusieurs des foamers ci-dessus, l'étiquette indique plutôt des ingrédients comme la méthylcellulose, le polysorbate 80, un extrait de saponine ou un amidon modifié.</p>
<p><b>La présence d'alcool.</b> Ms. Better's indique {msb_abv} % d'alcool et Dr Yanni's {yanni_abv} %. VERY AQUAFABA ne contient pas d'alcool : le produit lui-même n'en ajoute donc pas au cocktail.</p>
<p><b>Les allergènes déclarés.</b> VEGG White déclare du soja. Le pois chiche ne fait pas partie des {eu_allergens} allergènes que les <a href="{eu_rules_href}">règles européennes d'information sur les denrées alimentaires</a> imposent de déclarer, mais toute personne ayant une allergie connue au pois chiche ou aux légumineuses doit tout de même éviter le produit.</p>` },
        { id: 'try', title: 'Essayez-le dans un sour que vous faites déjà', html: `<p>Pas besoin d'une nouvelle recette de cocktail pour essayer VERY AQUAFABA.</p>
<p>Comptez <b>{dose} ml par cocktail</b>, dry shake, puis shake avec glace. Un <b>Tetrapak de 1 L donne {drinks_1l} cocktails</b> et, une fois ouvert, se garde au réfrigérateur (<b>{opened_temp} °C</b>) et s'utilise dans les <b>{opened_days} jours</b>. Si vous ne servez des sours que de temps en temps, un <b>sachet de 200 g donne {drinks_200g} cocktails</b> et, une fois ouvert, se conserve au sec et fermé jusqu'à la date de durabilité minimale indiquée sur le sachet.</p>
<p>Commencez par un cocktail déjà à votre carte, comme le <a href="{pisco_sour_href}">pisco sour</a>, et comparez le résultat dans un cocktail que vous connaissez.</p>` },
      ],
      faq: [
        { q: 'Quel foamer pour cocktails est sans additifs ?', a: "VERY AQUAFABA n'indique que de l'eau et des pois chiches, sans additifs ni conservateurs." },
        { q: 'VERY AQUAFABA contient-il des conservateurs ?', a: "Non. L'étiquette indique de l'eau et des pois chiches. Fermés, les packs se conservent au moins {unopened_months} mois à température ambiante. Une fois ouvert, le liquide se garde au réfrigérateur ({opened_temp} °C) et s'utilise dans les {opened_days} jours." },
        { q: 'VERY AQUAFABA est-il vegan ?', a: "VERY AQUAFABA lui-même est d'origine végétale. Les autres ingrédients d'un cocktail ont leurs propres étiquettes, à vérifier un par un." },
        { q: "Quels foamers contiennent de l'alcool ?", a: "Dans la comparaison ci-dessus, Ms. Better's indique {msb_abv} % d'alcool et Dr Yanni's {yanni_abv} %. VERY AQUAFABA ne contient pas d'alcool." },
      ],
    },

    'aquafaba-vs-chickpea-water': {
      title: "L'aquafaba, juste du jus de pois chiche ? | VERY AQUAFABA",
      h1: "L'aquafaba, c'est juste du jus de pois chiche ?",
      crumb: 'Aquafaba ou jus de pois chiche ?',
      description: "L'aquafaba, c'est d'abord l'eau de cuisson des pois chiches. Le jus d'une boîte face à VERY AQUAFABA : dose, préparation et service au bar.",
      lead: `Oui. L'aquafaba est le liquide de cuisson des pois chiches : le jus d'une boîte et VERY AQUAFABA partent donc de la même idée. Derrière le bar, la différence tient à la façon de les travailler. Une boîte doit être ouverte et égouttée, et le liquide peut varier selon le produit acheté. VERY AQUAFABA arrive comme un produit défini, avec une dose de travail de {dose} ml par cocktail, prêt à verser à la sortie du réfrigérateur.`,
      sections: [
        { id: 'compare', title: 'Une boîte ou un pack', html: `<table class="va-guide-grid va-guide-grid--compare">
<thead><tr><th scope="col"></th><th scope="col">Une boîte de pois chiches</th><th scope="col">VERY AQUAFABA</th></tr></thead>
<tbody>
<tr><td data-label="">D'un produit à l'autre</td><td data-label="Une boîte de pois chiches">Peut varier selon la marque et le lot</td><td data-label="VERY AQUAFABA">Un produit défini et une dose de travail</td></tr>
<tr><td data-label="">Avant d'aller dans le shaker</td><td data-label="Une boîte de pois chiches">Ouvrir, égoutter, parfois préparer davantage</td><td data-label="VERY AQUAFABA">Verser {dose} ml à la sortie du réfrigérateur</td></tr>
<tr><td data-label="">Ce qui reste</td><td data-label="Une boîte de pois chiches">Les pois chiches</td><td data-label="VERY AQUAFABA">Rien</td></tr>
<tr><td data-label="">Sur l'étiquette</td><td data-label="Une boîte de pois chiches">Selon la boîte</td><td data-label="VERY AQUAFABA">Eau et pois chiches</td></tr>
<tr><td data-label="">Une fois ouvert</td><td data-label="Une boîte de pois chiches">Selon le produit</td><td data-label="VERY AQUAFABA">Liquide : {opened_days} jours au réfrigérateur ({opened_temp} °C). Poudre : se conserve au sec et fermée jusqu'à la date de durabilité minimale</td></tr>
</tbody>
</table>` },
        { id: 'service', title: 'Pourquoi cela compte pendant le service', html: `<p>Un sour se rattrape facilement. Quarante au milieu d'un coup de feu pardonnent beaucoup moins.</p>
<p>Avec le jus d'une boîte, il faut parfois s'adapter au liquide que l'on vient d'ouvrir. Avec VERY AQUAFABA, tout le monde travaille avec la même <b>dose de {dose} ml par cocktail</b>. Il devient plus simple d'écrire une seule recette, d'organiser le poste autour d'elle et de <a href="{pre_batching_page_href}">batcher le reste du sour</a> en gardant l'aquafaba à part pour le shake.</p>
<p>La mousse se fait toujours cocktail par cocktail. L'avantage, c'est que la dose n'est pas à réinventer à chaque nouvelle boîte.</p>` },
      ],
      faq: [
        { q: "Puis-je utiliser le jus d'une boîte de pois chiches dans mes cocktails ?", a: "Oui. Le liquide de cuisson des pois chiches est de l'aquafaba. Son comportement peut varier d'un produit à l'autre, et certains bars le préparent ou le font réduire avant usage. VERY AQUAFABA est fourni avec une dose de travail de {dose} ml par cocktail." },
        { q: "Le jus de pois chiche, est-ce la même chose que l'aquafaba ?", a: "L'aquafaba est le liquide de cuisson des pois chiches. VERY AQUAFABA est un produit à base d'aquafaba, fait d'eau et de pois chiches, fourni prêt à l'emploi ou en poudre." },
        { q: "L'aquafaba a-t-il un goût de pois chiche ?", a: "Dans l'emballage, VERY AQUAFABA a une légère note grillée, due à la cuisson des pois chiches. Une fois shaké dans un cocktail, elle disparaît : la mousse n'a pas de goût propre, et la saveur du cocktail reste celle de ses autres ingrédients." },
        { q: "Où acheter de l'aquafaba pour cocktails ?", a: "Selon votre pays, vous pouvez [acheter de l'aquafaba pour cocktails]({where_to_buy_page_href}) sur Amazon aux États-Unis et en Allemagne, sur InstantChef en France, ou par le formulaire de demande dans la plupart des autres pays." },
      ],
    },

    'is-aquafaba-an-allergen': {
      title: "L'aquafaba est-il un allergène ? | VERY AQUAFABA",
      h1: "L'aquafaba est-il un allergène ?",
      crumb: "L'aquafaba, un allergène ?",
      description: "Le pois chiche n'est pas l'un des {eu_allergens} allergènes à étiquetage obligatoire dans l'UE. VERY AQUAFABA ne contient ni œuf, ni lait, ni gluten, ni soja.",
      lead: `Selon les règles européennes d'information sur les denrées alimentaires, le pois chiche ne fait pas partie des {eu_allergens} allergènes à déclarer obligatoirement. VERY AQUAFABA ne contient ni œuf, ni lait, ni gluten, ni soja. Cela ne veut pas dire que le pois chiche ne peut pas provoquer de réaction allergique : toute personne ayant une allergie connue au pois chiche ou aux légumineuses doit éviter le produit. Pour un bar, la distinction utile est simple : VERY AQUAFABA lui-même ne contient pas d'œuf, mais chaque cocktail reste à examiner ingrédient par ingrédient.`,
      sections: [
        { id: 'eu', title: "Le pois chiche fait-il partie des {eu_allergens} allergènes de l'UE ?", html: `<p>Les <a href="{eu_rules_href}">règles européennes d'information sur les denrées alimentaires</a> listent {eu_allergens} allergènes à déclarer obligatoirement, dont les œufs, le soja, l'arachide et le lupin. <b>Le pois chiche n'est pas sur cette liste.</b></p>
<p>Cela décrit son statut au regard de l'étiquetage obligatoire des allergènes dans l'UE. Cela ne veut pas dire qu'une allergie au pois chiche est impossible.</p>
<p>Si un client vous signale une allergie au pois chiche ou aux légumineuses, prenez-la au sérieux et suivez votre procédure allergènes habituelle.</p>` },
        { id: 'egg', title: "Et les clients qui ne peuvent pas consommer d'œuf ?", html: `<p>VERY AQUAFABA lui-même ne contient <b>pas d'œuf</b>.</p>
<p>Si c'est le blanc d'œuf qui empêche quelqu'un de prendre un sour, le remplacer par VERY AQUAFABA retire l'œuf de l'ingrédient qui fait la mousse. Le reste du cocktail doit toujours être vérifié à part, alcools, sirops et garnitures compris.</p>
<p>Les contaminations croisées et les méthodes de préparation dépendent aussi du fonctionnement de votre bar : suivez la procédure allergènes déjà en place dans votre établissement.</p>` },
        { id: 'taste', title: 'A-t-il un goût de pois chiche ?', html: `<p>Tout juste sorti de l'emballage, VERY AQUAFABA porte une légère note grillée, qui vient de la cuisson des pois chiches. Une fois shaké dans un cocktail, elle disparaît : la mousse n'a aucun goût propre.</p>
<p>À <b>{dose} ml par cocktail</b>, il construit la mousse, tandis que la saveur vient de l'alcool, des agrumes, du sirop et du reste du cocktail.</p>` },
      ],
      faq: [
        { q: "Le pois chiche fait-il partie des {eu_allergens} allergènes de l'UE ?", a: "Non. Le pois chiche ne fait pas partie des {eu_allergens} allergènes soumis à l'étiquetage obligatoire dans l'UE. Il peut tout de même provoquer des réactions allergiques, en particulier chez une personne qui se sait allergique au pois chiche ou aux légumineuses." },
        { q: "VERY AQUAFABA contient-il de l'œuf ?", a: "Non. VERY AQUAFABA contient de l'eau et des pois chiches, et pas d'œuf." },
        { q: "Une personne allergique à l'œuf peut-elle boire un cocktail à l'aquafaba ?", a: "VERY AQUAFABA lui-même ne contient pas d'œuf. Qu'un cocktail convienne ou non dépend de ses autres ingrédients et de sa préparation : vérifiez le cocktail entier et suivez la procédure allergènes de votre établissement." },
        { q: "L'aquafaba a-t-il une odeur ?", a: "Dans l'emballage, VERY AQUAFABA a une légère note grillée, due à la cuisson des pois chiches. Une fois shaké dans un cocktail, cette note disparaît." },
        { q: 'Quels foamers pour cocktails déclarent du soja ?', a: 'Dans notre comparaison, VEGG White déclare du soja. Vous pouvez [comparer les ingrédients des foamers pour cocktails]({foamer_ingredients_href}) côte à côte.' },
      ],
    },

    'bulk-foamer': {
      title: 'Foamer grand format : 10 L ou 3 kg ? | VERY AQUAFABA',
      h1: 'Foamer pour cocktails en grand format : 10 L de liquide ou 3 kg de poudre ?',
      crumb: 'Foamer grand format',
      description: 'VERY AQUAFABA en grand format : 10 L de liquide donnent {drinks_10l} cocktails, un sachet de 3 kg {drinks_3kg}. Choisissez selon les sours que vous servez.',
      lead: `Servir des sours toute la soirée avec des briques de 1 L, c'est ouvrir beaucoup de briques. Pour les volumes plus importants, VERY AQUAFABA existe en deux grands formats : le bag-in-box de 10 L donne {drinks_10l} cocktails à {dose} ml chacun, et le sachet de poudre de 3 kg en donne {drinks_3kg}. Le bon choix dépend moins de la taille du pack que de la vitesse à laquelle votre bar va l'utiliser.`,
      sections: [
        { id: 'finish', title: 'Finirez-vous 10 L à temps ?', html: `<p>Une fois ouvert, un <b>bag-in-box de 10 L se garde au réfrigérateur ({opened_temp} °C) et s'utilise dans les {opened_days} jours</b>.</p>
<p>Sur cette période, {drinks_10l} cocktails représentent environ :</p>
<ul>
<li><b>{bib_day3} sours par jour</b> sur {open_min} jours</li>
<li><b>{bib_day4} sours par jour</b> sur {open_max} jours</li>
</ul>
<p>Si votre service tourne régulièrement autour de ce niveau, le format de 10 L vous donne de l'aquafaba liquide prêt à verser, sans passer par plusieurs briques de 1 L.</p>
<p>Si votre volume quotidien est nettement inférieur, le délai du pack ouvert compte davantage que la taille du pack.</p>` },
        { id: 'between', title: 'Et si vous êtes entre les volumes du 1 L et du 10 L ?', html: `<p>Tous les bars ne tombent pas pile sur un seuil de pack.</p>
<p>Un <b>Tetrapak de 1 L donne {drinks_1l} cocktails</b>, soit environ <b>{l1_day_range} cocktails par jour</b> si vous voulez le finir dans les {opened_days} jours.</p>
<p>Un bag-in-box de 10 L fait monter ce seuil à environ <b>{bib_day_range} cocktails par jour</b>.</p>
<p>Si vous êtes entre les deux, la décision dépend de la régularité de votre service. Plusieurs packs de 1 L peuvent avoir du sens quand les volumes sont prévisibles. La poudre devient plus logique quand le nombre de sours varie fortement d'un jour à l'autre.</p>` },
        { id: 'powder', title: 'Quand la poudre est plus logique', html: `<p>Le <b>sachet de 3 kg donne {drinks_3kg} cocktails</b>, à raison de <b>{powder} g de poudre reconstitués avec {water} ml d'eau par cocktail</b>.</p>
<p>Contrairement au liquide ouvert, le sachet ouvert n'a pas à être utilisé dans les {opened_days} jours. Gardé au sec et fermé, il se conserve jusqu'à la date de durabilité minimale indiquée sur le sachet : vous reconstituez ce dont un service a besoin, plutôt que de vous engager sur un pack de 10 L ouvert.</p>
<p>Préparez la quantité nécessaire avant le service et gardez l'aquafaba reconstitué au frais.</p>` },
        { id: 'pattern', title: 'Le pack selon votre rythme de service', html: `<table class="va-guide-grid">
<thead><tr><th scope="col">Votre service</th><th scope="col">Pack à envisager</th><th scope="col">Pourquoi</th></tr></thead>
<tbody>
<tr><td data-label="Votre service">Environ {l1_day_range} sours par jour</td><td data-label="Pack à envisager">Tetrapak de 1 L</td><td data-label="Pourquoi">{drinks_1l} cocktails, de quoi finir le pack dans les {opened_days} jours</td></tr>
<tr><td data-label="Votre service">Entre les seuils des packs de liquide</td><td data-label="Pack à envisager">Plusieurs packs de 1 L ou la poudre</td><td data-label="Pourquoi">Selon la régularité de votre volume</td></tr>
<tr><td data-label="Votre service">Environ {bib_day_range} sours par jour</td><td data-label="Pack à envisager">Bag-in-box de 10 L</td><td data-label="Pourquoi">{drinks_10l} cocktails, de quoi finir le pack dans les {opened_days} jours</td></tr>
<tr><td data-label="Votre service">Un volume qui change beaucoup d'un jour à l'autre</td><td data-label="Pack à envisager">La poudre</td><td data-label="Pourquoi">Vous reconstituez ce qu'il faut ; le sachet ouvert se conserve au sec et fermé jusqu'à sa date de durabilité minimale</td></tr>
</tbody>
</table>
<p>Ce tableau est un point de départ, pas une règle. Un établissement aux volumes très irréguliers peut préférer la poudre même avec une moyenne plus haute, tandis qu'un bar au service très prévisible trouvera peut-être le liquide plus simple à gérer.</p>` },
      ],
      faq: [
        { q: 'Combien de cocktails donne un bag-in-box de 10 L ?', a: "Il donne {drinks_10l} cocktails à {dose} ml chacun. Une fois ouvert, le pack se garde au réfrigérateur ({opened_temp} °C) et s'utilise dans les {opened_days} jours." },
        { q: 'Combien de cocktails donne un sachet de 3 kg ?', a: "Un sachet de 3 kg donne {drinks_3kg} cocktails, à raison de {powder} g de poudre reconstitués avec {water} ml d'eau par cocktail. Gardé au sec et fermé, le sachet ouvert se conserve jusqu'à sa date de durabilité minimale." },
        { q: 'Quand le 10 L est-il intéressant pour un bar ?', a: 'Pour écouler {drinks_10l} cocktails dans les {opened_days} jours, il faut compter environ {bib_day_range} sours par jour. En dessous, comparez les formats liquides avec la poudre selon la régularité de votre service.' },
        { q: 'Vaut-il mieux plusieurs packs de 1 L ou un pack de 10 L ?', a: 'Regardez combien de sours vous servez réellement en {opened_days} jours. Un pack de 1 L couvre {drinks_1l} cocktails, un pack de 10 L {drinks_10l}. Si votre volume se situe entre ces deux seuils, plusieurs packs de 1 L ou la poudre peuvent mieux convenir.' },
        { q: 'Comment commander en volume ?', a: "Utilisez le formulaire de demande professionnelle en indiquant le nombre d'établissements, le nombre approximatif de cocktails servis et les formats envisagés. Nous pourrons alors joindre les informations techniques utiles à notre réponse." },
      ],
    },

    'egg-white-alternative': {
      title: "Alternative au blanc d'œuf pour cocktails | VERY AQUAFABA",
      h1: "Par quoi remplacer le blanc d'œuf dans un cocktail ?",
      crumb: "Alternative au blanc d'œuf",
      description: "Mettez {dose} ml de VERY AQUAFABA à la place du blanc d'œuf dans un sour : même montage, même dry shake, même verre, et plus d'œuf à casser ni à séparer.",
      lead: `La plupart des fiches recettes de sours indiquent encore « un blanc d'œuf », et c'est la seule ligne à changer. Retirez le blanc et mettez {dose} ml de VERY AQUAFABA à sa place. L'alcool, les agrumes, le sirop, le dry shake, le shake avec glace et le verre restent tels quels : le cocktail que vous servez ce soir est celui de la semaine dernière, sans l'œuf.`,
      sections: [
        { id: 'swap', title: 'Une seule ligne de la recette change', html: `<ol>
<li>Montez le cocktail comme d'habitude : l'alcool, les agrumes et le sirop dans le shaker.</li>
<li>Là où la recette indique un blanc d'œuf, versez <b>{dose} ml de VERY AQUAFABA</b>, directement sorti du réfrigérateur.</li>
<li>Shakez fort sans glace pour monter la mousse.</li>
<li>Ajoutez la glace et shakez de nouveau pour refroidir le cocktail.</li>
<li>Filtrez dans le verre et garnissez comme d'habitude.</li>
</ol>
<p>Dans un sour, VERY AQUAFABA se dose par cocktail et non par œuf : ce sont toujours les mêmes {dose} ml, quelle que soit la recette. Pour les deux shakes, cocktail par cocktail, suivez la <a href="{how_to_make_page_href}">méthode commune à tous les sours</a>.</p>` },
        { id: 'station', title: 'Ce qui change au poste', html: `<p>Le cocktail reste le même ; c'est la préparation autour qui raccourcit. Rien à casser, rien à séparer, pas de jaunes qui attendent d'être utilisés. Vous versez l'aquafaba ou le mesurez au jigger comme n'importe quel liquide, et il entre froid dans le shaker.</p>
<p>Fermés, les packs se conservent au moins <b>{unopened_months} mois</b> à température ambiante. Un Tetrapak de 1 L ouvert vit au réfrigérateur à <b>{opened_temp} °C</b> et s'utilise dans les <b>{opened_days} jours</b> ; il donne {drinks_1l} cocktails. Si vous ne shakez que quelques sours par semaine, le sachet de 200 g en donne {drinks_200g}, à {powder} g de poudre dans {water} ml d'eau par cocktail, et, une fois ouvert, se conserve au sec et fermé jusqu'à la date de durabilité minimale indiquée sur le sachet.</p>` },
        { id: 'menu', title: "Passer toute une carte de sours à l'aquafaba", html: `<p>Gardez votre batch tel qu'il est : l'alcool, les agrumes et le sirop dans une bouteille avant le service. L'aquafaba reste hors de la bouteille et entre dans chaque shaker au moment du shake, cocktail par cocktail : vous pouvez donc <a href="{pre_batching_page_href}">batcher vos sours</a> exactement comme aujourd'hui.</p>
<p>Commencez par un sour que vous vendez déjà, remplacez le blanc et goûtez-le à côté de l'ancienne recette. Le <a href="{pisco_sour_href}">pisco sour</a> est un bon premier test : même montage, même verre, et une mousse qui doit porter une garniture.</p>` },
        { id: 'egg', title: "Les clients qui posent la question de l'œuf", html: `<p>VERY AQUAFABA ne contient pas d'œuf : la mousse elle-même n'apporte donc plus d'œuf dans le cocktail. Le reste du cocktail doit toujours être vérifié ingrédient par ingrédient, et toute personne ayant une allergie connue au pois chiche ou aux légumineuses doit éviter le produit. <a href="{is_aquafaba_an_allergen_href}">Répondez à la question des allergènes</a> avec les règles européennes en main, avant que le client ne la pose deux fois.</p>` },
      ],
      faq: [
        { q: "Combien d'aquafaba remplace un blanc d'œuf dans un cocktail ?", a: "Dans un sour, comptez {dose} ml de VERY AQUAFABA par cocktail à la place du blanc d'œuf, ou {powder} g de poudre reconstitués avec {water} ml d'eau." },
        { q: 'Dois-je changer le reste de ma recette ?', a: "Non. L'alcool, les agrumes, le sirop, les deux shakes et le verre restent les mêmes. Seul le blanc d'œuf change." },
        { q: "L'aquafaba mousse-t-il comme le blanc d'œuf ?", a: "L'aquafaba prend la place du blanc d'œuf dans un sour shaké : le même dry shake, le même shake avec glace, et une mousse blanche sur le cocktail. Commencez avec {dose} ml de VERY AQUAFABA dans l'un de vos sours et jugez la mousse à côté de la version au blanc d'œuf." },
        { q: "Puis-je garder l'aquafaba derrière le bar comme des blancs d'œufs ?", a: "Gardez le liquide ouvert au réfrigérateur ({opened_temp} °C) et utilisez-le dans les {opened_days} jours. Fermés, les packs se conservent au moins {unopened_months} mois à température ambiante." },
        { q: "L'aquafaba change-t-il le goût d'un sour ?", a: "Non. Dans l'emballage, VERY AQUAFABA a une légère note grillée qui vient de la cuisson des pois chiches. Une fois shaké dans un cocktail, elle disparaît : la mousse n'apporte aucun goût propre, et le cocktail garde la saveur de son alcool, de ses agrumes et de son sirop." },
      ],
    },

    'alcohol-free-foamer': {
      title: 'Foamer sans alcool pour sours et mocktails | VERY AQUAFABA',
      h1: 'Quel foamer pour des sours sans alcool ?',
      crumb: 'Foamer sans alcool',
      description: "VERY AQUAFABA ne contient pas d'alcool : eau et pois chiches, {dose} ml par cocktail. Certains foamers affichent {msb_abv} % ou {yanni_abv} % d'alcool.",
      lead: `Un sour sans alcool se juge sur sa mousse autant que n'importe quel autre sour : la même mousse blanche, le même corps, et rien dans le verre qui oblige un client qui ne boit pas d'alcool à poser la question. VERY AQUAFABA, c'est de l'eau et des pois chiches : il n'apporte pas d'alcool au cocktail, et il entre dans le shaker à {dose} ml, exactement comme dans un sour classique.`,
      sections: [
        { id: 'label', title: 'Vérifiez de quoi est fait le foamer', html: `<p>Tous les foamers ne sont pas sans alcool. Ms. Better's Miraculous Foamer indique <b>{msb_abv} % d'alcool</b> et Dr Yanni's Magic Foamer <b>{yanni_abv} %</b> : même quelques gouttes de l'un ou de l'autre apportent de l'alcool dans un cocktail conçu pour ne pas en contenir.</p>
<p>VERY AQUAFABA indique de l'eau et des pois chiches, sans alcool. Vous pouvez <a href="{foamer_ingredients_href}">comparer les étiquettes des foamers côte à côte</a>, chaque ligne étant reprise de l'étiquette publiée du produit.</p>` },
        { id: 'build', title: 'Monter un sour sans alcool', html: `<p>La méthode ne change pas parce que l'alcool a disparu. Versez votre base sans alcool, les agrumes et le sirop dans le shaker, ajoutez <b>{dose} ml de VERY AQUAFABA</b> sorti du réfrigérateur, shakez fort sans glace, puis ajoutez la glace et shakez de nouveau. Filtrez et garnissez comme pour n'importe quel sour.</p>
<p>Si vous connaissez déjà les <a href="{how_to_make_page_href}">deux shakes de tous les sours</a>, la version sans alcool suit exactement les mêmes gestes.</p>` },
        { id: 'one', title: 'Un seul foamer pour les deux côtés de la carte', html: `<p>Comme le même pack fonctionne dans un sour classique et dans sa version sans alcool, le bar garde une seule recette et un seul produit. Un Tetrapak de 1 L donne {drinks_1l} cocktails et, une fois ouvert, se garde au réfrigérateur ({opened_temp} °C) et s'utilise dans les {opened_days} jours. Si les sours sans alcool restent une commande occasionnelle, le sachet de 200 g donne {drinks_200g} cocktails et, une fois ouvert, se conserve au sec et fermé jusqu'à la date de durabilité minimale indiquée sur le sachet.</p>` },
        { id: 'rest', title: "Ce qu'il reste à vérifier dans le verre", html: `<p>La mousse n'est qu'un ingrédient parmi d'autres. Les bitters, les sirops, les cordials et les garnitures ont leurs propres étiquettes : lisez chacune d'elles quand un cocktail est vendu comme sans alcool. VERY AQUAFABA retire le foamer de cette liste.</p>` },
      ],
      faq: [
        { q: "Y a-t-il de l'alcool dans VERY AQUAFABA ?", a: "Non. VERY AQUAFABA contient de l'eau et des pois chiches : il n'apporte donc pas d'alcool au cocktail." },
        { q: "Quels foamers pour cocktails contiennent de l'alcool ?", a: "Ms. Better's Miraculous Foamer indique {msb_abv} % d'alcool et Dr Yanni's Magic Foamer {yanni_abv} %, d'après leurs fiches chez les revendeurs." },
        { q: "Puis-je utiliser l'aquafaba dans des mocktails ?", a: 'Oui. Comptez {dose} ml de VERY AQUAFABA par cocktail, dry shake, puis shake avec glace, comme pour n\'importe quel sour.' },
        { q: "L'aquafaba change-t-il le goût d'un cocktail sans alcool ?", a: "Non. Dans l'emballage, VERY AQUAFABA a une légère note grillée, due à la cuisson des pois chiches. Une fois shaké dans un cocktail, elle disparaît : la mousse n'apporte aucun goût propre, et la saveur reste celle de la base, des agrumes et du sirop." },
        { q: 'Où acheter VERY AQUAFABA ?', a: "Vous pouvez [acheter de l'aquafaba pour cocktails]({where_to_buy_page_href}) sur Amazon aux États-Unis et en Allemagne, sur InstantChef en France, et par le formulaire de demande dans les autres pays." },
      ],
    },

    'drinks-producers': {
      title: 'Aquafaba pour producteurs de boissons | VERY AQUAFABA',
      h1: "L'aquafaba pour les producteurs de sour mix et de boissons",
      crumb: 'Producteurs de boissons',
      description: 'VERY AQUAFABA pour les producteurs de sour mix et de boissons : bag-in-box de 10 L, IBC de 1 T, sachet de 3 kg, étiquette et méthode à imprimer.',
      lead: `Si vous vendez du sour mix aux bars, vos clients ajoutent toujours la mousse eux-mêmes, cocktail par cocktail. VERY AQUAFABA fournit la production en bag-in-box de 10 L et en IBC de 1 T pour le liquide, et en sachet de 3 kg pour la poudre. Derrière le bar, la méthode reste simple : votre mix va dans la bouteille, et l'aquafaba entre au moment du shake.`,
      sections: [
        { id: 'formats', title: 'Les formats pour la production', html: `<p>À {dose} ml par cocktail, un <b>bag-in-box de 10 L couvre {drinks_10l} cocktails</b>, un <b>IBC de 1 T {drinks_1t}</b> et un <b>sachet de 3 kg {drinks_3kg}</b>. Fermés, tous les formats se conservent au moins {unopened_months} mois à température ambiante ; le liquide ouvert se garde au réfrigérateur ({opened_temp} °C) et s'utilise dans les {opened_days} jours.</p>
<p>Le minimum de commande et le délai de livraison vous sont indiqués dans notre réponse, quand vous décrivez vos volumes dans le formulaire de demande professionnelle.</p>` },
        { id: 'label', title: "Ce qu'il faut imprimer pour le bar", html: `<p>Votre mix apporte l'alcool, les agrumes et le sirop. Le bartender ajoute <b>{dose} ml de VERY AQUAFABA</b> dans le shaker avec une mesure de mix, shake fort sans glace, puis ajoute la glace et shake de nouveau. Ces quelques lignes, imprimées sur votre étiquette ou votre fiche recette, transforment le mix en un sour avec sa mousse.</p>
<p>Pour le détail, les bartenders peuvent suivre les <a href="{how_to_make_page_href}">deux shakes de tous les sours</a>.</p>` },
        { id: 'specs', title: 'Les spécifications pour le contrôle qualité', html: `<p>VERY AQUAFABA indique de l'eau et des pois chiches, sans additifs ni conservateurs. Dans <a href="{products_href}">nos produits et formats</a>, il est présenté comme vegan, clean-label, halal et kosher, avec un Nutri-Score A. La fiche technique vous est envoyée avec la réponse à votre demande.</p>` },
        { id: 'bottled', title: 'Cocktails en bouteille et prêts à boire', html: `<p>La méthode de ce site ajoute l'aquafaba au moment du shake, jamais dans le batch. Si vous développez un cocktail en bouteille ou prémélangé, avec la mousse déjà intégrée, décrivez le produit dans le formulaire de demande et nous reviendrons vers vous pour voir comment VERY AQUAFABA peut s'y intégrer.</p>` },
      ],
      faq: [
        { q: 'Quels formats VERY AQUAFABA existent pour la production ?', a: "Le bag-in-box de 10 L et l'IBC de 1 T pour le liquide, et le sachet de 3 kg pour la poudre." },
        { q: 'Combien de cocktails donne un IBC de 1 T ?', a: '{drinks_1t} cocktails à {dose} ml chacun.' },
        { q: 'Où trouver le minimum de commande et le délai de livraison ?', a: 'Ils vous sont indiqués dans notre réponse, quand vous décrivez vos volumes dans le formulaire de demande professionnelle.' },
        { q: 'VERY AQUAFABA peut-il aller dans un cocktail en bouteille ?', a: "La méthode de ce site l'ajoute au moment du shake. Pour un produit en bouteille ou prémélangé, décrivez-le dans le formulaire de demande et nous reviendrons vers vous." },
      ],
    },

    'vegg-white-alternative': {
      title: 'Alternative à VEGG White pour cocktails | VERY AQUAFABA',
      h1: 'Vous cherchez une alternative à VEGG White ?',
      crumb: 'Alternative à VEGG White',
      description: "VEGG White et VERY AQUAFABA côte à côte : ce qu'indique chaque étiquette, les allergènes déclarés et la dose par cocktail, avec la source de chaque ligne.",
      lead: `VEGG White est un foamer liquide pour cocktails qui s'utilise un pour un à la place du blanc d'œuf. VERY AQUAFABA fait le même travail à {dose} ml par cocktail, avec une étiquette bien plus courte : de l'eau et des pois chiches, sans additifs ni conservateurs. Voici les deux côte à côte, chaque ligne reprise d'une source publiée.`,
      sections: [
        { id: 'labels', title: 'Les deux étiquettes', html: `{labels_vegg}
<p>Étiquettes vérifiées en {labels_checked}. Les formulations changent : chaque ligne est relue avant toute mise à jour de cette comparaison.</p>` },
        { id: 'soy', title: "Du soja sur l'étiquette", html: `<p>VEGG White déclare du soja, qui vient de sa lécithine de soja. VERY AQUAFABA ne contient ni soja, ni œuf, ni lait, ni gluten. Le pois chiche ne fait pas partie des {eu_allergens} allergènes que le droit européen impose sur l'étiquette, mais toute personne ayant une allergie connue au pois chiche ou aux légumineuses doit tout de même éviter le produit. <a href="{is_aquafaba_an_allergen_href}">Préparez votre réponse sur les allergènes</a> avant qu'un client ne pose la question.</p>` },
        { id: 'dose', title: 'Dose et format', html: `<p>VEGG White s'utilise un pour un à la place du blanc d'œuf. VERY AQUAFABA se mesure à <b>{dose} ml par cocktail</b>, versé d'un Tetrapak de 1 L qui donne {drinks_1l} cocktails, ou reconstitué à partir de la poudre, à {powder} g dans {water} ml d'eau. Pour un bar très fréquenté, le <a href="{bulk_foamer_href}">bag-in-box de 10 L ou le sachet de 3 kg</a> permet de garder un seul produit sur tous les postes.</p>` },
        { id: 'try', title: 'Essayez-le dans un sour que vous faites déjà', html: `<p>Changez de foamer dans un cocktail que vous vendez déjà et goûtez les deux versions côte à côte. Montez comme d'habitude, ajoutez {dose} ml de VERY AQUAFABA, shakez sans glace, puis avec glace. Un <a href="{pisco_sour_href}">pisco sour</a> ou un <a href="{gin_fizz_href}">gin fizz</a> montre bien la mousse.</p>` },
      ],
      faq: [
        { q: 'De quoi est composé VEGG White ?', a: "Sa liste publiée indique eau, émulsifiants, méthylcellulose, esters d'acides gras, lécithine de soja, épaississants, maltodextrine, gomme xanthane, gomme d'acacia, conservateur E211 et antioxydant acide ascorbique, selon Difford's Guide." },
        { q: 'VEGG White contient-il du soja ?', a: 'Oui. Il déclare du soja, qui vient de sa lécithine de soja.' },
        { q: 'VERY AQUAFABA est-il sans soja ?', a: "Oui. VERY AQUAFABA contient de l'eau et des pois chiches, sans soja, ni œuf, ni lait, ni gluten." },
        { q: 'Combien de VERY AQUAFABA par cocktail ?', a: "{dose} ml de liquide, ou {powder} g de poudre reconstitués avec {water} ml d'eau." },
        { q: 'Où acheter VERY AQUAFABA ?', a: "Selon le pays de votre bar, vous pouvez [acheter de l'aquafaba pour cocktails]({where_to_buy_page_href}) sur Amazon aux États-Unis et en Allemagne, sur InstantChef en France, ou par le formulaire de demande dans la plupart des autres pays." },
      ],
    },

    'fee-foam-alternative': {
      title: 'Alternative à Fee Foam sans additifs | VERY AQUAFABA',
      h1: 'Vous cherchez une alternative à Fee Foam ?',
      crumb: 'Alternative à Fee Foam',
      description: "Fee Foam indique du propylène glycol et du polysorbate 80 ; VERY AQUAFABA, de l'eau et des pois chiches. Les deux étiquettes côte à côte, avec la dose.",
      lead: `Fee Foam se vend en flacon dasher et s'utilise à quelques traits par cocktail. Retournez le flacon : l'étiquette indique de l'eau, du propylène glycol, du polysorbate 80, deux conservateurs, de l'acide citrique et de l'extrait de citron. VERY AQUAFABA indique de l'eau et des pois chiches, sans additifs ni conservateurs, et entre dans le shaker à {dose} ml par cocktail.`,
      sections: [
        { id: 'labels', title: 'Les deux étiquettes', html: `{labels_fee}
<p>Étiquettes vérifiées en {labels_checked}. Les formulations évoluent : chaque ligne est relue avant toute mise à jour de cette comparaison.</p>` },
        { id: 'foam', title: 'Ce qui fait la mousse', html: `<p>Pour Fee Foam, l'étiquette indique du polysorbate 80 (E433), un émulsifiant, avec du propylène glycol (E1520), ainsi que du sorbate de potassium (E202) et du benzoate de sodium (E211) comme conservateurs. Dans VERY AQUAFABA, la mousse vient du pois chiche lui-même, et l'étiquette s'arrête à l'eau et aux pois chiches.</p>
<p>Si les ingrédients comptent pour votre carte, <a href="{foamer_ingredients_href}">comparez toutes les étiquettes de foamers</a> dans un seul tableau.</p>` },
        { id: 'dose', title: 'Des traits ou une mesure au jigger', html: `<p>Pour Fee Foam, le fabricant conseille {fee_dose}. VERY AQUAFABA se mesure au jigger, à <b>{dose} ml</b>, la même mesure à chaque fois ; une fois ouvert, le Tetrapak de 1 L se garde au réfrigérateur ({opened_temp} °C) et s'utilise dans les {opened_days} jours. Il donne {drinks_1l} cocktails.</p>` },
        { id: 'try', title: 'Essayez-le dans un sour que vous faites déjà', html: `<p>Prenez un sour de votre carte, remplacez les traits par {dose} ml de VERY AQUAFABA, shakez sans glace, puis avec glace, et comparez la mousse. Un <a href="{pisco_sour_href}">pisco sour</a> fait un premier test facile.</p>` },
      ],
      faq: [
        { q: 'Que contient Fee Foam ?', a: "De l'eau, du propylène glycol, du polysorbate 80, du sorbate de potassium, moins de 0,1 % de benzoate de soude comme conservateur, de l'acide citrique et de l'extrait de citron pur, selon Difford's Guide." },
        { q: 'Fee Foam contient-il des conservateurs ?', a: 'Son étiquette indique du sorbate de potassium et du benzoate de sodium.' },
        { q: 'VERY AQUAFABA contient-il des conservateurs ?', a: "Non. L'étiquette indique de l'eau et des pois chiches. Fermés, les packs se conservent au moins {unopened_months} mois à température ambiante." },
        { q: 'Combien de VERY AQUAFABA pour remplacer Fee Foam dans un cocktail ?', a: "Comptez {dose} ml de VERY AQUAFABA par cocktail, ou {powder} g de poudre reconstitués avec {water} ml d'eau." },
        { q: 'Où acheter VERY AQUAFABA ?', a: "Vous pouvez [acheter de l'aquafaba pour cocktails]({where_to_buy_page_href}) sur Amazon aux États-Unis et en Allemagne, sur InstantChef en France, et par le formulaire de demande dans la plupart des autres pays." },
      ],
    },

    'ms-betters-alternative': {
      title: "Alternative au foamer Ms. Better's | VERY AQUAFABA",
      h1: "Vous cherchez une alternative à Ms. Better's ou à Dr Yanni's ?",
      crumb: "Alternative à Ms. Better's",
      description: "Ms. Better's Miraculous Foamer indique {msb_abv} % d'alcool, Dr Yanni's {yanni_abv} %. VERY AQUAFABA, sans alcool : eau et pois chiches, {dose} ml par verre.",
      lead: `Les foamers en compte-gouttes s'ajoutent au cocktail quelques gouttes à la fois. Le problème apparaît sur une carte sans alcool. Ms. Better's Miraculous Foamer indique {msb_abv} % d'alcool et Dr Yanni's Magic Foamer {yanni_abv} % : chacun apporte donc de l'alcool au cocktail. VERY AQUAFABA, c'est de l'eau et des pois chiches, sans alcool.`,
      sections: [
        { id: 'labels', title: 'Les étiquettes', html: `{labels_alcohol}
<p>Étiquettes vérifiées en {labels_checked}. Les formulations changent : chaque ligne est relue avant toute mise à jour de cette comparaison.</p>` },
        { id: 'alcohol', title: "Là où l'alcool compte", html: `<p>Dans un sour classique, quelques gouttes d'un foamer à {msb_abv} % passent presque inaperçues à côté de l'alcool de base. Dans un cocktail vendu comme sans alcool, elles sont le seul ingrédient qui trahit la promesse. VERY AQUAFABA n'ajoute pas d'alcool : le même foamer fonctionne dans un whiskey sour et dans sa <a href="{alcohol_free_foamer_href}">version sans alcool</a>.</p>` },
        { id: 'dose', title: 'Des gouttes ou des millilitres', html: `<p>Ms. Better's s'utilise à raison de {msb_dose}. VERY AQUAFABA entre à <b>{dose} ml</b>, mesuré au jigger, comme le blanc d'œuf qu'il remplace. Un Tetrapak de 1 L donne {drinks_1l} cocktails ; le sachet de 200 g en donne {drinks_200g} et, une fois ouvert, se conserve au sec et fermé jusqu'à la date de durabilité minimale indiquée sur le sachet.</p>` },
        { id: 'try', title: 'Essayez-le dans un sour que vous faites déjà', html: `<p>Remplacez les gouttes par {dose} ml de VERY AQUAFABA dans un cocktail, shakez sans glace, puis avec glace, et comparez. Les <a href="{how_to_make_page_href}">deux shakes de tous les sours</a> sont toute la méthode.</p>` },
      ],
      faq: [
        { q: "Combien d'alcool contient le foamer Ms. Better's ?", a: "Ms. Better's Miraculous Foamer indique {msb_abv} % d'alcool sur sa fiche chez le revendeur." },
        { q: "Le foamer Dr Yanni's contient-il de l'alcool ?", a: "Oui. Dr Yanni's Magic Foamer est présenté comme une émulsion alcoolisée d'origine végétale, à {yanni_abv} %." },
        { q: "Y a-t-il de l'alcool dans VERY AQUAFABA ?", a: "Non. VERY AQUAFABA contient de l'eau et des pois chiches." },
        { q: 'Puis-je utiliser VERY AQUAFABA dans des mocktails ?', a: 'Oui. Comptez {dose} ml par cocktail, dry shake, puis shake avec glace.' },
        { q: 'Où acheter VERY AQUAFABA ?', a: "Cela dépend de votre pays : vous pouvez [acheter de l'aquafaba pour cocktails]({where_to_buy_page_href}) sur Amazon aux États-Unis et en Allemagne, sur InstantChef en France, et par le formulaire de demande dans la plupart des autres pays." },
      ],
    },

    'quillaia-foamers': {
      title: 'Alternative à Foamee et Wonderfoam | VERY AQUAFABA',
      h1: 'Foamee, Wonderfoam et les foamers au quillaja',
      crumb: 'Foamers au quillaja',
      description: "Foamee indique un extrait de saponine végétale, Wonderfoam un extrait de quillaja avec gomme, amidon et conservateurs. VERY AQUAFABA : eau et pois chiches.",
      lead: `Quelques gouttes d'un foamer à la saponine font monter une mousse sur un sour. Les saponines sont des composés moussants présents dans des plantes : Wonderfoam indique un extrait de quillaja, tiré de l'écorce de l'arbre du même nom, et Foamee un extrait de saponine végétale. VERY AQUAFABA tire sa mousse du pois chiche lui-même, à {dose} ml par cocktail, avec de l'eau et des pois chiches sur l'étiquette.`,
      sections: [
        { id: 'labels', title: 'Les étiquettes', html: `{labels_saponin}
<p>Étiquettes vérifiées en {labels_checked}. Les formulations changent : chaque ligne est relue avant toute mise à jour de cette comparaison.</p>` },
        { id: 'saponin', title: "Ce qu'un foamer à la saponine apporte au cocktail", html: `<p>Sur les étiquettes, l'extrait de quillaja apparaît sous le code E999. Dans Wonderfoam, il est accompagné de gomme arabique, d'amidon modifié (E1450) et de deux conservateurs, le benzoate de sodium et le sorbate de potassium. Foamee indique son extrait de saponine avec de l'eau et de l'acide citrique. VERY AQUAFABA indique de l'eau et des pois chiches, sans additifs ni conservateurs.</p>
<p>Pour voir tous les foamers au même endroit, <a href="{foamer_ingredients_href}">comparez les étiquettes côte à côte</a>.</p>` },
        { id: 'tin', title: 'Pas une boîte de pois chiches', html: `<p>Certains foamers à la saponine se comparent à une boîte de pois chiches, et sur ce point ils ont raison : une boîte donne quelques cocktails et vous laisse les pois chiches sur les bras. VERY AQUAFABA n'est pas une boîte. Un Tetrapak de 1 L donne {drinks_1l} cocktails à {dose} ml chacun, le sachet de 200 g en donne {drinks_200g}, et le liquide reste le même d'un pack à l'autre, alors que celui d'une boîte <a href="{aquafaba_vs_chickpea_water_href}">peut varier selon la marque et le lot</a>.</p>` },
        { id: 'dose', title: 'Des gouttes ou une mesure au jigger', html: `<p>Wonderfoam s'utilise à raison de {wonderfoam_dose}. VERY AQUAFABA entre à <b>{dose} ml</b>, mesuré au jigger, et la méthode est celle que vous connaissez déjà : dry shake, puis shake avec glace. Essayez-le dans un <a href="{pisco_sour_href}">pisco sour</a>, à côté de votre foamer habituel.</p>` },
      ],
      faq: [
        { q: 'Que contient Foamee ?', a: "Sa boutique en ligne indique un extrait de saponine végétale, de l'eau et de l'acide citrique." },
        { q: 'Que contient Wonderfoam ?', a: "Sa fiche chez le revendeur indique un extrait de quillaja comme agent moussant, de l'eau, de la gomme arabique, de l'amidon modifié (E1450), du benzoate de sodium et du sorbate de potassium." },
        { q: "Qu'est-ce que l'extrait de quillaja ?", a: "C'est un extrait de l'écorce du quillaja, un arbre, riche en saponines. Il sert d'agent moussant et figure sur les étiquettes sous le code E999." },
        { q: 'VERY AQUAFABA contient-il des conservateurs ?', a: "Non. L'étiquette indique de l'eau et des pois chiches. Fermés, les packs se conservent au moins {unopened_months} mois à température ambiante." },
        { q: 'Où acheter VERY AQUAFABA ?', a: "Vous pouvez [acheter de l'aquafaba pour cocktails]({where_to_buy_page_href}) sur Amazon aux États-Unis et en Allemagne, sur InstantChef en France, ou par le formulaire de demande dans les autres pays." },
      ],
    },
  },
};
