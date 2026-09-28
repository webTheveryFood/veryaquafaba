// FR application guides
export default {
  "cocktails": {
    "lead": "L'aquafaba donne à vos sours une mousse stable et soyeuse, sans blanc d'œuf cru derrière le bar. Il suffit de {dose} g par cocktail et de deux passages au shaker. Vous trouverez ci-dessous la méthode, que faire quand la mousse ne tient pas, et comment choisir entre le liquide et la poudre selon le fonctionnement de votre bar.",
    "glance": {
      "note": null,
      "groups": [
        {
          "title": "Liquide",
          "items": [
            {
              "value": "{dose} g",
              "label": "par cocktail"
            },
            {
              "value": "{batches_1l} cocktails",
              "label": "avec un Tetrapak de 1 L"
            }
          ]
        },
        {
          "title": "Poudre",
          "items": [
            {
              "value": "{powder_dose} g",
              "label": "par cocktail, à mélanger avec de l'eau"
            },
            {
              "value": "{batches_200g} cocktails",
              "label": "avec un sachet de 200 g"
            }
          ]
        }
      ]
    },
    "sections": [
      {
        "id": "how",
        "title": "Comment réussir un sour à l'aquafaba",
        "html": "<p>Votre recette ne change pas, à un ingrédient près : l'aquafaba remplace le blanc d'œuf.</p>\n<ol>\n<li>Versez dans le shaker, sans glace : 50 ml de whiskey, 25 ml de jus de citron frais, 20 ml de sirop de sucre et {dose} g d'aquafaba réfrigéré.</li>\n<li>Dry shake : secouez vigoureusement pendant {dry_shake} secondes. C'est là que la mousse se forme.</li>\n<li>Ajoutez la glace et secouez encore {wet_shake} secondes pour refroidir et diluer.</li>\n<li>Filtrez finement dans une coupe refroidie. La mousse est assez ferme pour porter quelques gouttes de bitters.</li>\n</ol>\n<p>Gros service ? Préparez à l'avance le mélange whiskey, citron et sirop. Ajoutez l'aquafaba au moment du shake, jamais dans le mélange.</p>\n<p><a href=\"{recipe_href}\">Voir la recette complète du Whiskey Sour</a></p>"
      },
      {
        "id": "decide",
        "title": "Liquide ou poudre ? Tout dépend du nombre de sours que vous servez",
        "html": "<p>Non ouverts, les deux formats se conservent au moins {unopened_months} mois sur une étagère, à température ambiante. Le choix se joue le jour où vous ouvrez le produit. Une fois ouvert, le liquide se garde au réfrigérateur et s'utilise dans les {opened_days} jours. La poudre ouverte ne s'altère pas : elle doit simplement rester au sec, sachet fermé.</p>\n<table class=\"va-guide-grid\">\n<thead><tr><th scope=\"col\">Votre activité</th><th scope=\"col\">Notre conseil</th><th scope=\"col\">Pourquoi</th></tr></thead>\n<tbody>\n<tr><td data-label=\"Votre activité\">Des sours à la carte, commandés à chaque service</td><td data-label=\"Notre conseil\">Liquide, Tetrapak de 1 L</td><td data-label=\"Pourquoi\">{batches_1l} cocktails par brique, terminée bien avant les {opened_days} jours</td></tr>\n<tr><td data-label=\"Votre activité\">Quelques sours par semaine</td><td data-label=\"Notre conseil\">Poudre, sachet de 200 g</td><td data-label=\"Pourquoi\">Aucun délai après ouverture, vous reconstituez ce qu'il faut pour le soir</td></tr>\n<tr><td data-label=\"Votre activité\">Pas de place au réfrigérateur</td><td data-label=\"Notre conseil\">Poudre</td><td data-label=\"Pourquoi\">Elle se range au sec, sur une étagère</td></tr>\n<tr><td data-label=\"Votre activité\">Événementiel et prestations à l'extérieur</td><td data-label=\"Notre conseil\">Poudre</td><td data-label=\"Pourquoi\">Elle voyage au sec, sans chaîne du froid</td></tr>\n<tr><td data-label=\"Votre activité\">Week-ends chargés, semaine calme</td><td data-label=\"Notre conseil\">Les deux</td><td data-label=\"Pourquoi\">Le liquide pour les coups de feu, la poudre pour le reste</td></tr>\n<tr><td data-label=\"Votre activité\">Groupe hôtelier, bases de sour en bouteille, ligne de boissons</td><td data-label=\"Notre conseil\">Liquide, bag-in-box de 10 L ou IBC de 1 T</td><td data-label=\"Pourquoi\">Utilisation en continu : le délai après ouverture ne se pose jamais</td></tr>\n</tbody>\n</table>\n<p>Vous préférez le liquide mais vous ne finissez pas la brique à temps ? Congelez-le en petites portions, laissez-le décongeler au réfrigérateur, puis mélangez avant utilisation.</p>"
      },
      {
        "id": "formats",
        "title": "Bien utiliser chaque format",
        "html": "<div class=\"va-guide-cols\">\n<div>\n<h3>Liquide</h3>\n<ul>\n<li>Prêt à verser, directement du réfrigérateur au shaker.</li>\n<li>Refermez-le et remettez-le au réfrigérateur entre deux services.</li>\n<li>Jetez-le s'il dégage une mauvaise odeur, s'il présente des bulles ou s'il s'est séparé.</li>\n</ul>\n</div>\n<div>\n<h3>Poudre</h3>\n<ul>\n<li>{white_powder} g de poudre + {white_water} ml d'eau = {white_total} g d'aquafaba, soit la même masse d'aquafaba liquide. {white_powder} g de poudre remplacent 1 blanc d'œuf.</li>\n<li>Pour un cocktail : {powder_dose} g de poudre + {water_dose} ml d'eau.</li>\n<li>Reconstituez-la avant le service et mettez-la au frais. Froid, l'aquafaba mousse plus vite et tient plus longtemps.</li>\n</ul>\n</div>\n</div>"
      },
      {
        "id": "fix",
        "title": "Quand la mousse ne tient pas",
        "html": "<table class=\"va-guide-grid va-guide-grid--fix\">\n<thead><tr><th scope=\"col\">Ce que vous constatez</th><th scope=\"col\">La cause</th><th scope=\"col\">La solution</th></tr></thead>\n<tbody>\n<tr><td data-label=\"Ce que vous constatez\">Mousse trop fine</td><td data-label=\"La cause\">La glace a été mise dès le départ</td><td data-label=\"La solution\">Dry shake d'abord, glace ensuite</td></tr>\n<tr><td data-label=\"Ce que vous constatez\">Mousse lente à monter, sans tenue</td><td data-label=\"La cause\">Aquafaba à température ambiante</td><td data-label=\"La solution\">Gardez-le au frais jusqu'au moment du shake</td></tr>\n<tr><td data-label=\"Ce que vous constatez\">Plus de hauteur de mousse en milieu de service</td><td data-label=\"La cause\">L'aquafaba a été ajouté au mélange préparé à l'avance</td><td data-label=\"La solution\">Ne préparez à l'avance que la base, ajoutez l'aquafaba cocktail par cocktail</td></tr>\n<tr><td data-label=\"Ce que vous constatez\">La mousse retombe avant d'arriver au client</td><td data-label=\"La cause\">Le cocktail a attendu sur le comptoir</td><td data-label=\"La solution\">Shakez à la commande et servez aussitôt</td></tr>\n<tr><td data-label=\"Ce que vous constatez\">Résultat irrégulier d'un cocktail à l'autre</td><td data-label=\"La cause\">Dosage à l'œil</td><td data-label=\"La solution\">Pesez ou dosez au jigger {dose} g à chaque fois</td></tr>\n</tbody>\n</table>"
      }
    ],
    "faq": [
      {
        "q": "Quelle quantité d'aquafaba faut-il par cocktail ?",
        "a": "{dose} g d'aquafaba réfrigéré par cocktail, à la place du blanc d'œuf. Un Tetrapak de 1 L permet {batches_1l} cocktails, un sachet de poudre de 200 g en permet {batches_200g}."
      },
      {
        "q": "Liquide ou poudre : que choisir pour mon bar ?",
        "a": "Comptez vos sours. Si un Tetrapak de 1 L est vide dans les {opened_days} jours après ouverture, le liquide est le choix le plus simple : il se verse directement dans le shaker. Sinon, la poudre est plus sûre : elle ne s'altère pas une fois le sachet ouvert."
      },
      {
        "q": "Combien de temps se conserve un produit ouvert derrière le bar ?",
        "a": "Le liquide ouvert se garde fermé au réfrigérateur, à {opened_temp} °C maximum, et s'utilise dans les {opened_days} jours. La poudre ouverte se conserve tant que le sachet reste au sec et bien fermé. Non ouverts, les deux formats se gardent au moins {unopened_months} mois à température ambiante."
      },
      {
        "q": "Un bar peut-il avoir les deux formats en stock ?",
        "a": "Oui, et certains le font. Le liquide couvre les coups de feu du week-end, la poudre couvre les jours calmes de la semaine et les événements à l'extérieur, où elle voyage au sec, sans réfrigérateur."
      },
      {
        "q": "Comment reconstituer la poudre pour le service ?",
        "a": "Dosez selon le nombre de blancs d'œufs : {powder_dose} g de poudre et {water_dose} ml d'eau pour un cocktail. Reconstituez-la à l'avance et mettez-la au frais avant le service. La règle par blanc d'œuf : {white_powder} g de poudre + {white_water} ml d'eau = {white_total} g d'aquafaba, soit la même masse d'aquafaba liquide. {white_powder} g de poudre remplacent 1 blanc d'œuf."
      },
      {
        "q": "L'aquafaba change-t-il le goût du cocktail ?",
        "a": "Non. Il apporte la mousse et l'onctuosité en bouche. Le goût reste celui de votre whiskey, du citron et du sirop."
      },
      {
        "q": "Est-ce plus sûr que le blanc d'œuf ?",
        "a": "Un sour n'est jamais cuit : le blanc d'œuf cru est donc un point de vigilance connu derrière le bar. L'aquafaba est végétal et sans œuf, ce qui rend aussi le cocktail adapté à une clientèle vegan."
      },
      {
        "q": "La poudre mousse-t-elle aussi bien que le liquide ?",
        "a": "Oui. Reconstituée avec de l'eau et bien refroidie, elle donne la même mousse au dry shake. L'ordre des shakes et la température comptent plus que le format d'origine."
      },
      {
        "q": "Où trouver les spécifications pour un programme de boissons ?",
        "a": "Demandez la fiche technique via notre [formulaire de contact]({contact_href}). Pour des volumes en bag-in-box ou en IBC, indiquez-nous votre débit et votre volume mensuel, et nous reviendrons vers vous."
      }
    ]
  },
  "meringue": {
    "lead": "L'aquafaba se monte en meringues croustillantes et brillantes, sans le moindre blanc d'œuf. Il ne faut que deux ingrédients, à poids égal : {dose} g d'aquafaba et {sugar} g de sucre. Ce guide vous accompagne pas à pas dans la méthode, vous explique quoi faire quand une fournée ne réussit pas, et vous aide à choisir entre le liquide et la poudre.",
    "glance": {
      "note": "Une préparation donne {yield}.",
      "groups": [
        {
          "title": "Liquide",
          "items": [
            {
              "value": "{dose} g",
              "label": "par préparation, à la place de {eggs} blancs d'œufs"
            },
            {
              "value": "{batches_1l} préparations",
              "label": "avec un Tetrapak de 1 L"
            }
          ]
        },
        {
          "title": "Poudre",
          "items": [
            {
              "value": "{powder_dose} g",
              "label": "par préparation, à mélanger avec de l'eau"
            },
            {
              "value": "{batches_200g} préparations",
              "label": "avec un sachet de 200 g"
            }
          ]
        }
      ]
    },
    "sections": [
      {
        "id": "how",
        "title": "Comment réussir la meringue à l'aquafaba",
        "html": "<p>La recette est simple, mais l'ordre des étapes compte. Suivez-les une à une et prenez votre temps pour le sucre.</p>\n<ol>\n<li>Réfrigérez l'aquafaba à {chill} °C. Froid, il monte plus vite et retient davantage d'air.</li>\n<li>Fouettez {dose} g à vitesse élevée dans un bol propre et sans trace de gras, jusqu'aux pics souples, environ {whip} minutes.</li>\n<li>Stabilisant facultatif, à ajouter tout en fouettant : 2 g de crème de tartre ou 1 g d'acide citrique.</li>\n<li>Passez à vitesse moyenne et ajoutez {sugar} g de sucre semoule, une cuillère à soupe à la fois, en laissant chaque cuillère se dissoudre. Repassez à vitesse élevée jusqu'à obtenir des pics fermes et brillants.</li>\n<li>Pochez aussitôt des formes de 3 à 4 cm et faites sécher à {bake} °C, chaleur statique, pendant {bake_time} h, jusqu'à séchage complet.</li>\n<li>Laissez refroidir complètement sur la plaque. Conservez dans une boîte hermétique à température ambiante, avec un sachet déshydratant si possible.</li>\n</ol>\n<p>Vous travaillez en production industrielle ? Maintenez la concentration de l'aquafaba à {concentration} g/ml pour que la mousse réagisse de la même façon à chaque fabrication.</p>\n<p><a href=\"{recipe_href}\">Voir la recette complète des meringues</a></p>"
      },
      {
        "id": "decide",
        "title": "Liquide ou poudre ? Tout dépend de la fréquence de vos fournées",
        "html": "<p>Le bon format dépend de la fréquence à laquelle vous faites des meringues. Non ouverts, les deux formats se conservent au moins {unopened_months} mois à température ambiante. Une fois ouvert, le liquide va au réfrigérateur, alors que la poudre doit simplement rester au sec, sachet fermé. Un Tetrapak de 1 L donne {batches_1l} préparations de meringues. Si vous n'en faites pas autant dans les {opened_days} jours qui suivent l'ouverture, mieux vaut choisir la poudre.</p>\n<table class=\"va-guide-grid\">\n<thead><tr><th scope=\"col\">Votre activité</th><th scope=\"col\">Notre conseil</th><th scope=\"col\">Pourquoi</th></tr></thead>\n<tbody>\n<tr><td data-label=\"Votre activité\">Laboratoire de pâtisserie qui poche des meringues presque tous les jours</td><td data-label=\"Notre conseil\">Liquide, Tetrapak de 1 L</td><td data-label=\"Pourquoi\">{batches_1l} préparations par brique, largement utilisées en {opened_days} jours</td></tr>\n<tr><td data-label=\"Votre activité\">Restaurant avec un dessert meringué de saison</td><td data-label=\"Notre conseil\">Poudre, sachet de 200 g</td><td data-label=\"Pourquoi\">{batches_200g} préparations par sachet, sans date à surveiller après ouverture</td></tr>\n<tr><td data-label=\"Votre activité\">Plus de place au froid</td><td data-label=\"Notre conseil\">Poudre</td><td data-label=\"Pourquoi\">Vos meringues sont déjà stockées au sec, le sachet les rejoint</td></tr>\n<tr><td data-label=\"Votre activité\">Vous voulez une concentration déjà réglée</td><td data-label=\"Notre conseil\">Liquide</td><td data-label=\"Pourquoi\">Il arrive à densité constante, sans rien à reconstituer</td></tr>\n<tr><td data-label=\"Votre activité\">Ligne qui sèche des meringues chaque jour de production</td><td data-label=\"Notre conseil\">Liquide, bag-in-box de 10 L ou IBC de 1 T</td><td data-label=\"Pourquoi\">Utilisation en continu, sans étape de reconstitution</td></tr>\n</tbody>\n</table>\n<p>Vous préférez le liquide mais vos fournées sont irrégulières ? Congelez-le en portions, laissez-le décongeler une nuit au réfrigérateur, puis mélangez bien avant de fouetter.</p>"
      },
      {
        "id": "formats",
        "title": "Bien utiliser chaque format",
        "html": "<div class=\"va-guide-cols\">\n<div>\n<h3>Liquide</h3>\n<ul>\n<li>Il passe directement du réfrigérateur au bol, déjà à la bonne température pour être fouetté.</li>\n<li>Une brique donne {batches_1l} préparations : ouvrez-la au début d'une série de jours de cuisson.</li>\n<li>Jetez-le s'il dégage une mauvaise odeur, s'il présente des bulles ou s'il s'est séparé.</li>\n</ul>\n</div>\n<div>\n<h3>Poudre</h3>\n<ul>\n<li>{white_powder} g de poudre + {white_water} ml d'eau = {white_total} g d'aquafaba, soit la même masse d'aquafaba liquide. {white_powder} g de poudre remplacent 1 blanc d'œuf.</li>\n<li>Pour une préparation de meringues : {powder_dose} g de poudre + {water_dose} ml d'eau.</li>\n<li>Refroidissez le mélange à {chill} °C avant de fouetter. Tiède, l'aquafaba monte plus lentement et la mousse est moins ferme.</li>\n</ul>\n</div>\n</div>"
      },
      {
        "id": "fix",
        "title": "Quand la meringue ne réussit pas",
        "html": "<table class=\"va-guide-grid va-guide-grid--fix\">\n<thead><tr><th scope=\"col\">Ce que vous constatez</th><th scope=\"col\">La cause</th><th scope=\"col\">La solution</th></tr></thead>\n<tbody>\n<tr><td data-label=\"Ce que vous constatez\">La mousse n'atteint jamais son plein volume</td><td data-label=\"La cause\">Du gras sur le bol ou le fouet</td><td data-label=\"La solution\">Dégraissez tout le matériel avant de commencer</td></tr>\n<tr><td data-label=\"Ce que vous constatez\">La mousse monte lentement et reste molle</td><td data-label=\"La cause\">Aquafaba trop chaud</td><td data-label=\"La solution\">Réfrigérez-le d'abord à {chill} °C</td></tr>\n<tr><td data-label=\"Ce que vous constatez\">Des perles de sirop apparaissent sur les meringues stockées</td><td data-label=\"La cause\">Le sucre a été ajouté plus vite qu'il ne pouvait se dissoudre</td><td data-label=\"La solution\">Une cuillère à soupe à la fois, à vitesse moyenne</td></tr>\n<tr><td data-label=\"Ce que vous constatez\">Le volume retombe avant le pochage</td><td data-label=\"La cause\">La préparation a attendu dans le bol</td><td data-label=\"La solution\">Pochez et séchez dès que les pics sont fermes</td></tr>\n<tr><td data-label=\"Ce que vous constatez\">Les meringues ramollissent et collent</td><td data-label=\"La cause\">La meringue absorbe l'humidité de l'air</td><td data-label=\"La solution\">Boîte hermétique, endroit sec, sachet déshydratant</td></tr>\n<tr><td data-label=\"Ce que vous constatez\">Les résultats varient d'une fabrication à l'autre</td><td data-label=\"La cause\">La concentration de l'aquafaba a varié</td><td data-label=\"La solution\">Maintenez {concentration} g/ml en production industrielle</td></tr>\n</tbody>\n</table>"
      }
    ],
    "faq": [
      {
        "q": "Quelle quantité d'aquafaba faut-il pour des meringues ?",
        "a": "{dose} g d'aquafaba réfrigéré et {sugar} g de sucre donnent {yield}. Cela remplace {eggs} blancs d'œufs. Un Tetrapak de 1 L permet {batches_1l} préparations, un sachet de poudre de 200 g en permet {batches_200g}."
      },
      {
        "q": "Liquide ou poudre : que choisir pour ma pâtisserie ?",
        "a": "Regardez votre planning de cuisson. Si vous faites assez de meringues pour vider un Tetrapak de 1 L dans les {opened_days} jours après ouverture, le liquide est le choix le plus simple. Si la meringue ne revient que de temps en temps, la poudre est plus sûre : le sachet ouvert ne s'altère pas."
      },
      {
        "q": "Combien de temps se conserve un produit ouvert ?",
        "a": "Le liquide ouvert se garde fermé, à {opened_temp} °C maximum, et s'utilise dans les {opened_days} jours. La poudre ouverte se conserve tant que le sachet reste au sec et bien fermé. Avant ouverture, les deux formats se gardent au moins {unopened_months} mois à température ambiante."
      },
      {
        "q": "Puis-je congeler l'aquafaba liquide si je fais des meringues de façon irrégulière ?",
        "a": "Oui. Portionnez-le, congelez-le jusqu'à {freeze_months} mois, laissez-le décongeler une nuit au réfrigérateur et mélangez-le bien avant de le fouetter. Décongelé, il monte en meringue comme du frais, mais il ne se recongèle jamais."
      },
      {
        "q": "Pourquoi mes meringues suintent-elles dans la boîte ?",
        "a": "Le sucre ne s'est pas complètement dissous. Passez le batteur à vitesse moyenne, ajoutez le sucre cuillère par cuillère en attendant que chacune ait disparu, puis repassez à vitesse élevée jusqu'à ce que la mousse soit ferme et brillante."
      },
      {
        "q": "Faut-il encore de la crème de tartre ou de l'acide citrique avec l'aquafaba ?",
        "a": "C'est facultatif, mais cela renforce la mousse avant l'arrivée du sucre. Ajoutez-le batteur en marche, une fois les pics souples formés, et non dès le départ."
      },
      {
        "q": "Comment reconstituer la poudre pour une préparation ?",
        "a": "Dosez selon le nombre de blancs d'œufs : {powder_dose} g de poudre et {water_dose} ml d'eau pour une préparation. Refroidissez le mélange à {chill} °C avant de le fouetter. La règle par blanc d'œuf : {white_powder} g de poudre + {white_water} ml d'eau = {white_total} g d'aquafaba, soit la même masse d'aquafaba liquide. {white_powder} g de poudre remplacent 1 blanc d'œuf."
      },
      {
        "q": "Où trouver les spécifications pour la production ?",
        "a": "Demandez la fiche technique via notre [formulaire de contact]({contact_href}). Pour des volumes en bag-in-box ou en IBC, indiquez-nous vos volumes de meringues et votre rythme de production, et nous reviendrons vers vous."
      }
    ]
  },
  "chocolate-mousse": {
    "lead": "Dans cette mousse, l'aquafaba monté remplace à la fois les blancs d'œufs et la crème, pour une texture plus légère et un goût de chocolat franc. Une préparation demande {dose} g d'aquafaba, et l'étape qui décide de tout, c'est de laisser le chocolat redescendre à {fold_temp} °C avant de l'incorporer. Nous voyons ici la méthode, comment rattraper une mousse qui retombe, et quel format, liquide ou poudre, convient à votre carte des desserts.",
    "glance": {
      "note": "Une préparation donne {yield}.",
      "groups": [
        {
          "title": "Liquide",
          "items": [
            {
              "value": "{dose} g",
              "label": "par préparation, à la place de {eggs} blancs d'œufs"
            },
            {
              "value": "{batches_1l} préparations",
              "label": "avec un Tetrapak de 1 L"
            }
          ]
        },
        {
          "title": "Poudre",
          "items": [
            {
              "value": "{powder_dose} g",
              "label": "par préparation, à mélanger avec de l'eau"
            },
            {
              "value": "{batches_200g} préparations",
              "label": "avec un sachet de 200 g"
            }
          ]
        }
      ]
    },
    "sections": [
      {
        "id": "how",
        "title": "Comment réussir la mousse au chocolat à l'aquafaba",
        "html": "<p>L'aquafaba monté remplace à la fois les blancs d'œufs et la crème. Toute la structure vient de l'aquafaba monté : la température et l'incorporation font donc le résultat.</p>\n<ol>\n<li>Faites fondre {chocolate} g de chocolat noir de couverture jusqu'à 45 à 50 °C, puis laissez-le refroidir à {fold_temp} °C.</li>\n<li>Fouettez {dose} g d'aquafaba réfrigéré à vitesse élevée dans un bol propre et sans trace de gras, jusqu'aux pics souples, environ {whip} minutes. Stabilisant facultatif à ce stade : 2 g de crème de tartre ou 1 g d'acide citrique.</li>\n<li>Ajoutez progressivement {sugar} g de sucre semoule tout en fouettant, jusqu'à obtenir des pics fermes et brillants. La meringue doit être dense et stable.</li>\n<li>Incorporez le chocolat refroidi à la main, à la spatule, d'un geste rapide et léger. Arrêtez dès que le mélange est homogène.</li>\n<li>Dressez aussitôt en verrines, à la poche ou à la cuillère, et réfrigérez au moins {set_time} heures.</li>\n</ol>\n<p>Grandes quantités ? Émulsionnez d'abord une partie du chocolat avec un peu d'aquafaba, puis incorporez le reste de l'aquafaba monté. Les grosses productions restent ainsi homogènes.</p>\n<p><a href=\"{recipe_href}\">Voir la recette complète de la mousse au chocolat</a></p>"
      },
      {
        "id": "decide",
        "title": "Liquide ou poudre ? Tout dépend de la fréquence de la mousse à votre carte",
        "html": "<p>La mousse se conserve de toute façon au réfrigérateur : garder au froid un Tetrapak d'aquafaba liquide ouvert n'est donc pas un problème. Ce qui compte, c'est la vitesse à laquelle vous l'utilisez. Non ouverts, les deux formats se conservent au moins {unopened_months} mois, et la poudre ouverte ne s'altère pas. Un Tetrapak de 1 L donne {batches_1l} préparations de mousse. Si vous n'en faites pas autant dans les {opened_days} jours qui suivent l'ouverture, mieux vaut choisir la poudre.</p>\n<table class=\"va-guide-grid\">\n<thead><tr><th scope=\"col\">Votre activité</th><th scope=\"col\">Notre conseil</th><th scope=\"col\">Pourquoi</th></tr></thead>\n<tbody>\n<tr><td data-label=\"Votre activité\">Pâtisserie qui dresse des mousses en coupes pour la vitrine chaque matin</td><td data-label=\"Notre conseil\">Liquide, Tetrapak de 1 L</td><td data-label=\"Pourquoi\">{batches_1l} préparations par brique, vidée bien avant les {opened_days} jours</td></tr>\n<tr><td data-label=\"Votre activité\">Restaurant où la mousse revient à la carte par roulement, quelques verrines à la fois</td><td data-label=\"Notre conseil\">Poudre, sachet de 200 g</td><td data-label=\"Pourquoi\">{batches_200g} préparations par sachet, et il attend d'une carte à l'autre</td></tr>\n<tr><td data-label=\"Votre activité\">Peu de place au froid, grande réserve sèche</td><td data-label=\"Notre conseil\">Poudre</td><td data-label=\"Pourquoi\">Les étagères réfrigérées restent libres pour les portions que vous venez de dresser</td></tr>\n<tr><td data-label=\"Votre activité\">Vous voulez un aquafaba prêt à monter</td><td data-label=\"Notre conseil\">Liquide</td><td data-label=\"Pourquoi\">Déjà froid, il va directement dans le batteur, sans rien à reconstituer</td></tr>\n<tr><td data-label=\"Votre activité\">Cuisine centrale dont chaque point de vente monte son aquafaba</td><td data-label=\"Notre conseil\">Poudre</td><td data-label=\"Pourquoi\">Le sachet supporte une semaine calme sur place</td></tr>\n<tr><td data-label=\"Votre activité\">Ligne qui remplit des coupes préportionnées pour la vente au détail</td><td data-label=\"Notre conseil\">Liquide, bag-in-box de 10 L ou IBC de 1 T</td><td data-label=\"Pourquoi\">Soutirage en continu, et la pré-émulsion au chocolat utilise le même liquide</td></tr>\n</tbody>\n</table>\n<p>Vous préférez le liquide mais vos desserts tournent de façon irrégulière ? Congelez-le en portions, laissez-le décongeler une nuit au réfrigérateur, puis mélangez bien avant de fouetter.</p>"
      },
      {
        "id": "formats",
        "title": "Bien utiliser chaque format",
        "html": "<div class=\"va-guide-cols\">\n<div>\n<h3>Liquide</h3>\n<ul>\n<li>Il se pèse froid, directement du réfrigérateur au batteur.</li>\n<li>Il partage les étagères réfrigérées des coupes en train de prendre. Notez la date d'ouverture sur la brique.</li>\n<li>Jetez-le s'il dégage une mauvaise odeur, s'il présente des bulles ou s'il s'est séparé.</li>\n</ul>\n</div>\n<div>\n<h3>Poudre</h3>\n<ul>\n<li>{white_powder} g de poudre + {white_water} ml d'eau = {white_total} g d'aquafaba, soit la même masse d'aquafaba liquide. {white_powder} g de poudre remplacent 1 blanc d'œuf.</li>\n<li>Pour une préparation de mousse : {powder_dose} g de poudre + {water_dose} ml d'eau.</li>\n<li>Reconstituez-la à l'avance et mettez-la au frais. Tiède, l'aquafaba donne moins de volume.</li>\n</ul>\n</div>\n</div>"
      },
      {
        "id": "fix",
        "title": "Quand la mousse ne réussit pas",
        "html": "<table class=\"va-guide-grid va-guide-grid--fix\">\n<thead><tr><th scope=\"col\">Ce que vous constatez</th><th scope=\"col\">La cause</th><th scope=\"col\">La solution</th></tr></thead>\n<tbody>\n<tr><td data-label=\"Ce que vous constatez\">La mousse retombe quand le chocolat est incorporé</td><td data-label=\"La cause\">Un chocolat à plus de {fold_temp} °C a fait fondre l'aquafaba monté</td><td data-label=\"La solution\">Laissez-le refroidir à {fold_temp} °C ou moins avant de l'incorporer</td></tr>\n<tr><td data-label=\"Ce que vous constatez\">Mousse dense et lourde</td><td data-label=\"La cause\">Trop mélangée, elle a perdu son air</td><td data-label=\"La solution\">Incorporez juste assez pour homogénéiser</td></tr>\n<tr><td data-label=\"Ce que vous constatez\">L'aquafaba ne monte pas</td><td data-label=\"La cause\">Du gras dans le bol, ou du sucre ajouté avant les pics souples</td><td data-label=\"La solution\">Bol propre, et sucre seulement une fois les pics souples formés</td></tr>\n<tr><td data-label=\"Ce que vous constatez\">Le volume retombe avant l'incorporation</td><td data-label=\"La cause\">L'aquafaba monté a attendu le chocolat</td><td data-label=\"La solution\">Ayez le chocolat refroidi et prêt avant de fouetter</td></tr>\n<tr><td data-label=\"Ce que vous constatez\">L'aquafaba monte lentement et reste mou</td><td data-label=\"La cause\">Aquafaba trop chaud</td><td data-label=\"La solution\">Fouettez-le bien froid</td></tr>\n<tr><td data-label=\"Ce que vous constatez\">L'aquafaba congelé monte de façon irrégulière</td><td data-label=\"La cause\">Décongélation incomplète ou aquafaba non mélangé</td><td data-label=\"La solution\">Décongelez complètement et mélangez jusqu'à homogénéité. Ne recongelez jamais</td></tr>\n</tbody>\n</table>"
      }
    ],
    "faq": [
      {
        "q": "Quelle quantité d'aquafaba faut-il pour une mousse au chocolat ?",
        "a": "{dose} g d'aquafaba réfrigéré, {sugar} g de sucre et {chocolate} g de chocolat noir donnent {yield}. Cela remplace {eggs} blancs d'œufs. Un Tetrapak de 1 L permet {batches_1l} préparations, un sachet de poudre de 200 g en permet {batches_200g}."
      },
      {
        "q": "Liquide ou poudre : que choisir pour la mousse dans ma cuisine ?",
        "a": "Tout dépend de la fréquence de vos préparations. Avec de la mousse presque tous les jours, un Tetrapak de 1 L ouvert est vide dans les {opened_days} jours : le liquide convient. Si la mousse est un dessert occasionnel, prenez la poudre, car le sachet ouvert ne s'altère pas d'une carte à l'autre."
      },
      {
        "q": "Le format change-t-il la mousse finie ?",
        "a": "Non. Dès lors que l'aquafaba est froid et pesé à la bonne dose, il monte de la même façon dans le bol. Ce qui change, c'est la gestion du stock avant la préparation, pas le dessert dans l'assiette."
      },
      {
        "q": "L'aquafaba peut-il remplacer la crème en plus du blanc d'œuf ?",
        "a": "Oui. Dans cette recette, toute la structure vient de l'aquafaba monté et du chocolat de couverture, sans crème laitière. La texture est plus légère et le goût du chocolat ressort nettement."
      },
      {
        "q": "Combien de temps se conserve la mousse finie ?",
        "a": "Elle prend au réfrigérateur pendant au moins {set_time} heures, puis se conserve {keep} jours au froid, dans un emballage fermé. C'est un produit à préparer à l'avance, pas un dessert minute."
      },
      {
        "q": "Peut-on monter un aquafaba liquide congelé puis décongelé ?",
        "a": "Oui. Pour la mousse, il se comporte comme du frais, à condition d'être décongelé lentement au réfrigérateur et mélangé jusqu'à retrouver une consistance homogène. Encore partiellement congelé, il monte de façon irrégulière, et un aquafaba décongelé ne se recongèle jamais."
      },
      {
        "q": "Comment reconstituer la poudre pour une préparation ?",
        "a": "Dosez selon le nombre de blancs d'œufs : {powder_dose} g de poudre et {water_dose} ml d'eau pour une préparation. Refroidissez le mélange avant de le fouetter. La règle par blanc d'œuf : {white_powder} g de poudre + {white_water} ml d'eau = {white_total} g d'aquafaba, soit la même masse d'aquafaba liquide. {white_powder} g de poudre remplacent 1 blanc d'œuf."
      },
      {
        "q": "Où obtenir des chiffres pour ma propre formulation ?",
        "a": "Indiquez-nous vos volumes de mousse, le format envisagé et votre rythme de production via notre [formulaire de contact]({contact_href}). La fiche technique est envoyée sur demande."
      }
    ]
  },
  "mayonnaise": {
    "lead": "L'aquafaba donne une mayonnaise vegan épaisse et stable, sans le moindre jaune d'œuf. Toute la recette repose sur un seul ratio : {oil_ratio} entre l'huile et l'aquafaba, en poids. Ce guide vous présente la méthode et les erreurs courantes, puis vous aide à décider lequel, du liquide ou de la poudre, convient le mieux à votre cuisine.",
    "glance": {
      "note": "Une préparation donne {yield} de mayonnaise.",
      "groups": [
        {
          "title": "Liquide",
          "items": [
            {
              "value": "{dose} g",
              "label": "par préparation, avec {oil} g d'huile"
            },
            {
              "value": "{batches_1l} préparations",
              "label": "avec un Tetrapak de 1 L"
            }
          ]
        },
        {
          "title": "Poudre",
          "items": [
            {
              "value": "{powder_dose} g",
              "label": "par préparation, à mélanger avec de l'eau"
            },
            {
              "value": "{batches_200g} préparations",
              "label": "avec un sachet de 200 g"
            }
          ]
        }
      ]
    },
    "sections": [
      {
        "id": "how",
        "title": "Comment réussir une mayonnaise vegan à l'aquafaba",
        "html": "<p>Ici, l'aquafaba remplace le jaune d'œuf, pas le blanc. Rien n'est fouetté : c'est une émulsion à froid, obtenue par cisaillement.</p>\n<ol>\n<li>Dans un récipient haut et étroit, mélangez {dose} g d'aquafaba réfrigéré avec la moutarde, le sel et le jus de citron ou le vinaigre.</li>\n<li>Mettez le mixeur plongeant en marche et versez {oil} g d'huile en filet fin et régulier. Maintenez un cisaillement élevé pour que l'émulsion prenne.</li>\n<li>Une fois la mayonnaise épaissie, goûtez et rectifiez l'assaisonnement. Trop ferme ? Incorporez quelques grammes d'eau froide au mixeur.</li>\n<li>Transférez dans un récipient propre et réfrigérez aussitôt. Préparée dans de bonnes conditions d'hygiène, elle se conserve jusqu'à {keep} jours au réfrigérateur.</li>\n</ol>\n<p>Grandes quantités ? Utilisez un mixeur à haut cisaillement pour maîtriser la taille des gouttelettes et garder une émulsion stable.</p>\n<p><a href=\"{recipe_href}\">Voir la recette complète de la mayonnaise</a></p>"
      },
      {
        "id": "decide",
        "title": "Liquide ou poudre ? Tout dépend de la fréquence à laquelle vous faites de la mayonnaise",
        "html": "<p>Une préparation de mayonnaise demande très peu d'aquafaba : {dose} g. Un Tetrapak de 1 L donne donc {batches_1l} préparations, et une fois ouvert, vous avez {opened_days} jours pour l'utiliser. Si vous n'en faites pas autant dans ce délai, mieux vaut choisir la poudre : un sachet de 200 g donne {batches_200g} préparations, sans date à surveiller après ouverture. La mayonnaise finie va de toute façon au réfrigérateur : le choix porte donc sur le produit ouvert, pas sur la sauce.</p>\n<table class=\"va-guide-grid\">\n<thead><tr><th scope=\"col\">Votre activité</th><th scope=\"col\">Notre conseil</th><th scope=\"col\">Pourquoi</th></tr></thead>\n<tbody>\n<tr><td data-label=\"Votre activité\">Traiteur ou sandwicherie qui fait sa mayonnaise fraîche à chaque service</td><td data-label=\"Notre conseil\">Liquide, Tetrapak de 1 L</td><td data-label=\"Pourquoi\">Il se verse à la bonne température pour le mixage, et la brique tourne dans les temps</td></tr>\n<tr><td data-label=\"Votre activité\">Restaurant avec de la mayonnaise sur un seul plat de la carte</td><td data-label=\"Notre conseil\">Poudre, sachet de 200 g</td><td data-label=\"Pourquoi\">Un litre ouvert ne serait pas fini dans les {opened_days} jours</td></tr>\n<tr><td data-label=\"Votre activité\">Chambre froide déjà pleine de sauce finie</td><td data-label=\"Notre conseil\">Poudre</td><td data-label=\"Pourquoi\">Le sachet ne prend jamais de place au froid</td></tr>\n<tr><td data-label=\"Votre activité\">Vous voulez moins de produits datés au poste sauces</td><td data-label=\"Notre conseil\">Poudre</td><td data-label=\"Pourquoi\">Pas de produit ouvert et périssable à étiqueter, enregistrer et contrôler</td></tr>\n<tr><td data-label=\"Votre activité\">Fabricant de bases de sauce sèches</td><td data-label=\"Notre conseil\">Poudre</td><td data-label=\"Pourquoi\">Elle s'intègre à sec dans le prémix</td></tr>\n<tr><td data-label=\"Votre activité\">Cuisine centrale ou ligne industrielle</td><td data-label=\"Notre conseil\">Liquide, bag-in-box de 10 L ou IBC de 1 T</td><td data-label=\"Pourquoi\">Soutiré au kilo par chaque équipe, directement dans le mélangeur à haut cisaillement</td></tr>\n</tbody>\n</table>\n<p>Vous préférez le liquide mais vous faites rarement de la mayonnaise ? Congelez-le en portions : deux portions de {white_liquid} g font une préparation. Laissez décongeler complètement au réfrigérateur, puis mélangez jusqu'à homogénéité avant de mixer.</p>"
      },
      {
        "id": "formats",
        "title": "Bien utiliser chaque format",
        "html": "<div class=\"va-guide-cols\">\n<div>\n<h3>Liquide</h3>\n<ul>\n<li>Une fois ouvert, il se garde au réfrigérateur : il est donc à la bonne température pour le mixage quand vous le versez.</li>\n<li>Il se pèse sur n'importe quelle balance de cuisine.</li>\n<li>Jetez-le s'il dégage une mauvaise odeur, s'il présente des bulles ou s'il s'est séparé.</li>\n</ul>\n</div>\n<div>\n<h3>Poudre</h3>\n<ul>\n<li>{white_powder} g de poudre + {white_water} ml d'eau = {white_total} g d'aquafaba, soit la même masse d'aquafaba liquide. {white_powder} g de poudre remplacent 1 blanc d'œuf.</li>\n<li>Pour une préparation de mayonnaise : {powder_dose} g de poudre + {water_dose} ml d'eau. Utilisez une balance de précision.</li>\n<li>Reconstituez-la à l'eau froide, ou refroidissez le mélange à {chill} °C avant de mixer.</li>\n</ul>\n</div>\n</div>"
      },
      {
        "id": "fix",
        "title": "Quand l'émulsion ne réussit pas",
        "html": "<table class=\"va-guide-grid va-guide-grid--fix\">\n<thead><tr><th scope=\"col\">Ce que vous constatez</th><th scope=\"col\">La cause</th><th scope=\"col\">La solution</th></tr></thead>\n<tbody>\n<tr><td data-label=\"Ce que vous constatez\">L'émulsion ne démarre pas</td><td data-label=\"La cause\">Huile versée trop vite, ou cisaillement insuffisant</td><td data-label=\"La solution\">Filet fin et régulier, mixeur à pleine vitesse</td></tr>\n<tr><td data-label=\"Ce que vous constatez\">Émulsion lente et instable</td><td data-label=\"La cause\">Aquafaba trop chaud</td><td data-label=\"La solution\">Utilisez-le à {chill} °C</td></tr>\n<tr><td data-label=\"Ce que vous constatez\">Trop épaisse pour être travaillée</td><td data-label=\"La cause\">L'émulsion s'est resserrée</td><td data-label=\"La solution\">Incorporez quelques grammes d'eau froide au mixeur, pas davantage d'huile</td></tr>\n<tr><td data-label=\"Ce que vous constatez\">Instable sur les grandes quantités</td><td data-label=\"La cause\">Taille des gouttelettes non maîtrisée</td><td data-label=\"La solution\">Passez à un mixeur à haut cisaillement</td></tr>\n<tr><td data-label=\"Ce que vous constatez\">Résultat trop fluide avec de l'aquafaba congelé</td><td data-label=\"La cause\">L'aquafaba décongelé est devenu plus fluide</td><td data-label=\"La solution\">Mélangez jusqu'à homogénéité. S'il reste trop fluide, faites-le réduire brièvement à feu doux</td></tr>\n<tr><td data-label=\"Ce que vous constatez\">Conservation inférieure à {keep} jours</td><td data-label=\"La cause\">Hygiène insuffisante ou mise au froid trop lente</td><td data-label=\"La solution\">Récipient propre, réfrigération immédiate</td></tr>\n</tbody>\n</table>"
      }
    ],
    "faq": [
      {
        "q": "Quelle quantité d'aquafaba faut-il pour une mayonnaise vegan ?",
        "a": "{dose} g d'aquafaba réfrigéré et {oil} g d'huile donnent {yield} de mayonnaise, soit un ratio huile/aquafaba de {oil_ratio} en poids. Un Tetrapak de 1 L permet {batches_1l} préparations, un sachet de poudre de 200 g en permet {batches_200g}."
      },
      {
        "q": "Liquide ou poudre : que choisir pour la mayonnaise dans ma cuisine ?",
        "a": "Comptez vos préparations. Seule une cuisine qui émulsionne tous les jours vient à bout d'un Tetrapak de 1 L dans les {opened_days} jours après ouverture. Si la mayonnaise ne revient que de temps en temps, prenez la poudre : le sachet ouvert ne s'altère pas."
      },
      {
        "q": "Le format change-t-il le goût de la sauce ?",
        "a": "Non. Dans une base à la moutarde, au sel et à l'acide, aucun des deux formats ne laisse de note de légumineuse perceptible une fois l'émulsion prise. Les versions aromatisées aux herbes, à l'ail ou aux épices partent de la même base, avec la même dose d'aquafaba."
      },
      {
        "q": "Comment reconstituer la poudre pour une préparation ?",
        "a": "Dosez selon le nombre de blancs d'œufs : {powder_dose} g de poudre et {water_dose} ml d'eau pour une préparation. La règle par blanc d'œuf : {white_powder} g de poudre + {white_water} ml d'eau = {white_total} g d'aquafaba, soit la même masse d'aquafaba liquide. {white_powder} g de poudre remplacent 1 blanc d'œuf. Utilisez de l'eau froide, ou refroidissez le mélange à {chill} °C avant de mixer."
      },
      {
        "q": "Puis-je passer d'un format à l'autre sur une recette déjà en production ?",
        "a": "Oui. {white_liquid} g de liquide équivalent à {white_powder} g de poudre reconstituée avec de l'eau : le poids d'aquafaba se convertit donc directement. Le ratio d'huile, la moutarde et l'acide ne changent pas."
      },
      {
        "q": "Combien de temps se conserve la mayonnaise à l'aquafaba ?",
        "a": "Jusqu'à {keep} jours au réfrigérateur, à condition qu'elle ait été préparée dans de bonnes conditions d'hygiène, stockée dans un récipient propre et mise au froid aussitôt après le mixage."
      },
      {
        "q": "Peut-on congeler le liquide quand la rotation est lente ?",
        "a": "Oui. La mayonnaise fait partie des préparations où l'aquafaba décongelé fonctionne comme du frais. Congelez des portions jusqu'à {freeze_months} mois, décongelez complètement et mélangez jusqu'à retrouver une texture homogène avant d'émulsionner. Ne recongelez jamais une portion décongelée."
      },
      {
        "q": "Qu'ajoute un produit ouvert à mes enregistrements HACCP ?",
        "a": "Un Tetrapak ouvert est un produit périssable daté au poste sauces : il est enregistré, gardé au froid et contrôlé avant utilisation. La mayonnaise est crue et servie froide, ce contrôle a donc son importance. Un sachet de poudre fermé, stocké au sec, ne crée pas ce point de contrôle."
      },
      {
        "q": "Quel pack pour une ligne de production en continu ?",
        "a": "Les lignes en continu prennent le liquide : le bag-in-box pour les cuisines centrales et l'IBC de 1 T là où l'aquafaba est soutiré au kilo par chaque équipe. Demandez la fiche technique et précisez vos volumes via notre [formulaire de contact]({contact_href})."
      }
    ]
  },
  "baking": {
    "lead": "En pâtisserie et en boulangerie, l'aquafaba peut remplacer les œufs entiers ou seulement les blancs, de la génoise à la brioche. Comptez {egg_liquid} g par œuf remplacé. Vous verrez comment l'incorporer selon le type de produit, ce qu'il faut ajuster dans votre recette, et comment choisir le format adapté à votre production.",
    "glance": {
      "note": "Un œuf entier = {egg_liquid} g d'aquafaba liquide.",
      "groups": [
        {
          "title": "Liquide",
          "items": [
            {
              "value": "{white_liquid} g",
              "label": "par blanc d'œuf"
            },
            {
              "value": "{whites_1l} blancs d'œufs",
              "label": "avec un Tetrapak de 1 L"
            }
          ]
        },
        {
          "title": "Poudre",
          "items": [
            {
              "value": "{white_powder} g",
              "label": "par blanc d'œuf, à mélanger avec de l'eau"
            },
            {
              "value": "{whites_200g} blancs d'œufs",
              "label": "avec un sachet de 200 g"
            }
          ]
        }
      ]
    },
    "sections": [
      {
        "id": "how",
        "title": "Comment utiliser l'aquafaba en pâtisserie et en boulangerie",
        "html": "<p>En cuisson, l'aquafaba remplit trois fonctions : il emprisonne l'air, il lie et il retient l'humidité. Il s'utilise donc de deux façons. Montez-le quand il remplace des blancs d'œufs. Versez-le tel quel quand il remplace le liant et l'humidité des œufs entiers.</p>\n<table class=\"va-guide-grid va-guide-grid--wrap\">\n<thead><tr><th scope=\"col\">Ce que vous préparez</th><th scope=\"col\">Comment incorporer l'aquafaba</th><th scope=\"col\">Ce qu'il apporte</th></tr></thead>\n<tbody>\n<tr><td data-label=\"Ce que vous préparez\">Génoises et biscuits montés</td><td data-label=\"Comment incorporer l'aquafaba\">Monté à {chill} °C, puis incorporé délicatement et sans attendre</td><td data-label=\"Ce qu'il apporte\">L'air</td></tr>\n<tr><td data-label=\"Ce que vous préparez\">Gâteaux, cookies et muffins</td><td data-label=\"Comment incorporer l'aquafaba\">Mélangé au sucre avant d'entrer en contact avec la matière grasse</td><td data-label=\"Ce qu'il apporte\">Une émulsion plus stable</td></tr>\n<tr><td data-label=\"Ce que vous préparez\">Appareils très sucrés</td><td data-label=\"Comment incorporer l'aquafaba\">Monté d'abord avec une partie du sucre, puis mélangé aux matières grasses</td><td data-label=\"Ce qu'il apporte\">Un volume qui tient à la cuisson</td></tr>\n<tr><td data-label=\"Ce que vous préparez\">Cookies et brownies</td><td data-label=\"Comment incorporer l'aquafaba\">Ajouté directement, sans le monter</td><td data-label=\"Ce qu'il apporte\">Liaison et humidité</td></tr>\n<tr><td data-label=\"Ce que vous préparez\">Brioches et pains sucrés</td><td data-label=\"Comment incorporer l'aquafaba\">Sans le monter, avec les liquides de la pâte</td><td data-label=\"Ce qu'il apporte\">Moelleux et conservation</td></tr>\n</tbody>\n</table>\n<p>Vous remplacez des œufs entiers ? L'aquafaba contient plus d'eau que l'œuf. Réduisez légèrement le lait ou l'eau, ou augmentez les ingrédients secs, et cuisez à cœur. Si vous ne remplacez que les blancs, comme pour les meringues ou les macarons, aucun ajustement n'est généralement nécessaire.</p>\n<p><a href=\"{recipe_href}\">Lire le guide complet de l'aquafaba en pâtisserie et boulangerie</a></p>"
      },
      {
        "id": "decide",
        "title": "Liquide ou poudre ? Tout dépend de la fréquence de vos fabrications sans œuf",
        "html": "<p>Reconstituée avec de l'eau, la poudre apporte à la pâte la même quantité d'eau que le liquide : le travail sur la recette est donc identique. Le choix se fait sur le rythme et le stockage. Un Tetrapak de 1 L remplace {eggs_1l} œufs entiers ou {whites_1l} blancs d'œufs et, une fois ouvert, s'utilise dans les {opened_days} jours, au réfrigérateur. Un sachet de 200 g remplace {whites_200g} blancs d'œufs et ne s'altère pas après ouverture.</p>\n<table class=\"va-guide-grid\">\n<thead><tr><th scope=\"col\">Votre activité</th><th scope=\"col\">Notre conseil</th><th scope=\"col\">Pourquoi</th></tr></thead>\n<tbody>\n<tr><td data-label=\"Votre activité\">Boulangerie avec une gamme sans œuf tous les jours</td><td data-label=\"Notre conseil\">Liquide, Tetrapak de 1 L</td><td data-label=\"Pourquoi\">Une brique ouverte est vide bien avant les {opened_days} jours</td></tr>\n<tr><td data-label=\"Votre activité\">Cuisine avec des commandes vegan occasionnelles</td><td data-label=\"Notre conseil\">Poudre, sachet de 200 g</td><td data-label=\"Pourquoi\">Vous reconstituez ce qu'il faut pour la commande, le reste attend</td></tr>\n<tr><td data-label=\"Votre activité\">Génoises et biscuits montés pour le volume</td><td data-label=\"Notre conseil\">Liquide</td><td data-label=\"Pourquoi\">La brique ouverte est déjà à la bonne température pour être montée</td></tr>\n<tr><td data-label=\"Votre activité\">Étagères réfrigérées réservées aux crèmes et aux garnitures</td><td data-label=\"Notre conseil\">Poudre</td><td data-label=\"Pourquoi\">Elle se range au sec, sur une étagère</td></tr>\n<tr><td data-label=\"Votre activité\">Gamme quotidienne et commandes irrégulières</td><td data-label=\"Notre conseil\">Les deux</td><td data-label=\"Pourquoi\">L'équivalence est fixe : une recette fonctionne avec l'un comme avec l'autre</td></tr>\n<tr><td data-label=\"Votre activité\">Ligne de boulangerie industrielle ou restauration multi-sites</td><td data-label=\"Notre conseil\">Liquide, bag-in-box de 10 L ou IBC de 1 T</td><td data-label=\"Pourquoi\">Dosage en continu, sans étape de reconstitution</td></tr>\n</tbody>\n</table>\n<p>Rotation irrégulière, mais vous préférez le liquide ? La congélation en portions fonctionne, au prix de place au congélateur, d'une nuit de décongélation et d'un contrôle de la viscosité. Ce sont ces manipulations que la poudre vous évite.</p>"
      },
      {
        "id": "formats",
        "title": "Bien utiliser chaque format",
        "html": "<div class=\"va-guide-cols\">\n<div>\n<h3>Liquide</h3>\n<ul>\n<li>Pesez {egg_liquid} g par œuf entier ou {white_liquid} g par blanc d'œuf, directement à la sortie de la brique.</li>\n<li>Jetez-le s'il dégage une mauvaise odeur, s'il présente des bulles ou s'il s'est séparé.</li>\n</ul>\n</div>\n<div>\n<h3>Poudre</h3>\n<ul>\n<li>{white_powder} g de poudre + {white_water} ml d'eau = {white_total} g d'aquafaba, soit la même masse d'aquafaba liquide. {white_powder} g de poudre remplacent 1 blanc d'œuf.</li>\n<li>Pour les préparations montées, refroidissez d'abord le mélange à {chill} °C. Pour les pâtes et les appareils, il s'ajoute tel quel.</li>\n</ul>\n</div>\n</div>"
      },
      {
        "id": "fix",
        "title": "Quand la recette ne réussit pas",
        "html": "<table class=\"va-guide-grid va-guide-grid--fix\">\n<thead><tr><th scope=\"col\">Ce que vous constatez</th><th scope=\"col\">La cause</th><th scope=\"col\">La solution</th></tr></thead>\n<tbody>\n<tr><td data-label=\"Ce que vous constatez\">Génoise plate</td><td data-label=\"La cause\">L'aquafaba monté a attendu, ou a été incorporé trop vigoureusement</td><td data-label=\"La solution\">Incorporez sans attendre et délicatement</td></tr>\n<tr><td data-label=\"Ce que vous constatez\">Pâte trop liquide</td><td data-label=\"La cause\">Œufs entiers remplacés un pour un, sans réduire l'eau</td><td data-label=\"La solution\">Réduisez légèrement le lait ou l'eau, ou ajoutez des ingrédients secs</td></tr>\n<tr><td data-label=\"Ce que vous constatez\">Cœur encore humide</td><td data-label=\"La cause\">L'eau supplémentaire allonge la cuisson</td><td data-label=\"La solution\">Cuisez à cœur avant de défourner</td></tr>\n<tr><td data-label=\"Ce que vous constatez\">Mousse molle</td><td data-label=\"La cause\">Aquafaba trop chaud</td><td data-label=\"La solution\">Montez-le à {chill} °C</td></tr>\n<tr><td data-label=\"Ce que vous constatez\">Mousse molle ou liaison faible avec de l'aquafaba congelé</td><td data-label=\"La cause\">L'aquafaba décongelé est devenu plus fluide</td><td data-label=\"La solution\">Faites-le réduire brièvement à feu doux. Ne recongelez jamais</td></tr>\n<tr><td data-label=\"Ce que vous constatez\">La durée de conservation du produit a changé</td><td data-label=\"La cause\">Modifier l'humidité modifie l'activité de l'eau</td><td data-label=\"La solution\">Revérifiez la durée de conservation et la stabilité microbiologique après reformulation</td></tr>\n</tbody>\n</table>"
      }
    ],
    "faq": [
      {
        "q": "Quelle quantité d'aquafaba pour remplacer un œuf en pâtisserie ?",
        "a": "{egg_liquid} g d'aquafaba liquide remplacent un œuf entier et {white_liquid} g remplacent un blanc d'œuf. En poudre, comptez {white_powder} g par blanc d'œuf, à reconstituer avec de l'eau. Ce sont des valeurs de départ : ajustez les autres liquides pour garder la consistance de votre pâte."
      },
      {
        "q": "L'aquafaba remplace-t-il les œufs entiers ou seulement les blancs ?",
        "a": "Les deux. Monté, il remplace les blancs et apporte l'air aux génoises et aux biscuits montés. Versé tel quel, il remplace le liant et l'humidité d'un œuf entier, comme dans les cookies, les brownies et les pâtes enrichies."
      },
      {
        "q": "Liquide ou poudre : que choisir pour ma boulangerie ?",
        "a": "Tout dépend de votre rythme de fabrication sans œuf. Avec une gamme quotidienne, un Tetrapak de 1 L ouvert est vide dans les {opened_days} jours : le liquide convient. Pour des commandes vegan occasionnelles, prenez la poudre, car le sachet ouvert ne s'altère pas."
      },
      {
        "q": "Comment reconstituer la poudre ?",
        "a": "Dosez selon le nombre de blancs d'œufs. La règle par blanc d'œuf : {white_powder} g de poudre + {white_water} ml d'eau = {white_total} g d'aquafaba, soit la même masse d'aquafaba liquide. {white_powder} g de poudre remplacent 1 blanc d'œuf. Pour les préparations montées, refroidissez le mélange à {chill} °C avant de le fouetter."
      },
      {
        "q": "La poudre évite-t-elle l'ajustement de recette que demande le liquide ?",
        "a": "Non. Reconstituée avec de l'eau, elle apporte la même quantité d'eau à la pâte : il faut donc toujours réduire légèrement les autres liquides ou augmenter les ingrédients secs. Le sachet change la rotation et le stockage, pas la formulation."
      },
      {
        "q": "Quel format pour la brioche et les autres pâtes enrichies ?",
        "a": "L'un ou l'autre. L'aquafaba s'ajoute sans être monté, avec les liquides de la pâte, pour le moelleux et la conservation : la température de fouettage ne joue donc aucun rôle. Choisissez selon la fréquence à laquelle vous faites cette pâte et la place dont vous disposez pour stocker le produit."
      },
      {
        "q": "Comment savoir qu'un liquide ouvert n'est plus utilisable ?",
        "a": "Une odeur aigre, des bulles dans la brique ou un aspect séparé : il se jette, il ne s'utilise pas. Même chose pour un produit conservé au-dessus de {opened_temp} °C ou plus de {opened_days} jours après ouverture."
      },
      {
        "q": "Une boulangerie peut-elle avoir les deux formats en stock ?",
        "a": "Oui, et plusieurs le font : le liquide pour la gamme quotidienne sans œuf, le sachet pour les commandes irrégulières. L'équivalence est fixe : une recette mise au point avec un format fonctionne avec l'autre."
      },
      {
        "q": "Où trouver les spécifications pour une production industrielle ?",
        "a": "Demandez la fiche technique via notre [formulaire de contact]({contact_href}). Pour des volumes en bag-in-box ou en IBC, décrivez-nous votre ligne et votre volume mensuel, et nous reviendrons vers vous."
      }
    ]
  },
  "macarons": {
    "lead": "Oui, on peut faire des macarons sans blancs d'œufs. Remplacez simplement les blancs par {dose} g d'aquafaba, et gardez le reste de votre recette tel quel. Ce guide vous accompagne étape par étape, vous indique les points à surveiller en cours de route, et vous aide à choisir entre le liquide et la poudre.",
    "glance": {
      "note": "Une préparation donne {yield}.",
      "groups": [
        {
          "title": "Liquide",
          "items": [
            {
              "value": "{dose} g",
              "label": "par préparation, à la place de {eggs} blancs d'œufs"
            },
            {
              "value": "{batches_1l} préparations",
              "label": "avec un Tetrapak de 1 L"
            }
          ]
        },
        {
          "title": "Poudre",
          "items": [
            {
              "value": "{powder_dose} g",
              "label": "par préparation, à mélanger avec de l'eau"
            },
            {
              "value": "{batches_200g} préparations",
              "label": "avec un sachet de 200 g"
            }
          ]
        }
      ]
    },
    "sections": [
      {
        "id": "how",
        "title": "Comment réussir les macarons à l'aquafaba",
        "html": "<p>L'aquafaba ne remplace que les blancs d'œufs : la poudre d'amandes, le sucre glace et le sucre semoule de votre recette ne changent pas. La meringue doit tenir pendant deux étapes, le macaronage et le croûtage : l'enchaînement des étapes compte donc plus que le fouettage lui-même.</p>\n<ol>\n<li>Tamisez ensemble la poudre d'amandes et le sucre glace, puis réservez. Chemisez les plaques dès maintenant.</li>\n<li>Fouettez {dose} g d'aquafaba réfrigéré à vitesse élevée dans un bol propre et sans trace de gras, jusqu'aux pics souples. Ajoutez la crème de tartre, puis {sugar} g de sucre semoule progressivement, jusqu'à obtenir des pics fermes et brillants.</li>\n<li>Incorporez le mélange sec en trois fois et macaronnez. Arrêtez quand la pâte retombe de la spatule en ruban épais et lent.</li>\n<li>Pochez des ronds de 3 à 4 cm sur papier cuisson, en les espaçant régulièrement.</li>\n<li>Laissez croûter à température ambiante jusqu'à ce qu'une fine croûte sèche se forme : {rest} minutes, selon l'humidité.</li>\n<li>Enfournez à {bake} °C, chaleur statique, pendant {bake_time} minutes. Laissez refroidir complètement sur la plaque avant de manipuler.</li>\n<li>Assemblez les coques par paires, garnissez et réfrigérez {mature} heures avant de servir, le temps que la texture se développe.</li>\n</ol>\n<p>Vous travaillez en production industrielle ? Maintenez la concentration de l'aquafaba à {concentration} g/ml pour obtenir des coques régulières d'une fabrication à l'autre.</p>\n<p><a href=\"{recipe_href}\">Voir la recette complète des macarons</a></p>"
      },
      {
        "id": "decide",
        "title": "Liquide ou poudre ? Tout dépend de la fréquence à laquelle vous pochez",
        "html": "<p>Vos macarons maturent déjà au réfrigérateur : garder au froid un Tetrapak d'aquafaba liquide ouvert est donc facile. Ce qui compte, c'est la vitesse à laquelle vous l'utilisez. Un Tetrapak de 1 L donne {batches_1l} préparations de macarons. Si vous n'en faites pas autant dans les {opened_days} jours qui suivent l'ouverture, mieux vaut choisir la poudre : un sachet de 200 g donne {batches_200g} préparations et ne s'altère pas après ouverture. Non ouverts, les deux formats se conservent au moins {unopened_months} mois à température ambiante.</p>\n<table class=\"va-guide-grid\">\n<thead><tr><th scope=\"col\">Votre activité</th><th scope=\"col\">Notre conseil</th><th scope=\"col\">Pourquoi</th></tr></thead>\n<tbody>\n<tr><td data-label=\"Votre activité\">Pâtisserie qui poche des coques presque tous les jours d'ouverture</td><td data-label=\"Notre conseil\">Liquide, Tetrapak de 1 L</td><td data-label=\"Pourquoi\">{batches_1l} préparations par brique, utilisées dans les {opened_days} jours</td></tr>\n<tr><td data-label=\"Votre activité\">Boutique qui fait ses macarons à la commande</td><td data-label=\"Notre conseil\">Poudre, sachet de 200 g</td><td data-label=\"Pourquoi\">Elle couvre les longs intervalles entre deux fabrications</td></tr>\n<tr><td data-label=\"Votre activité\">Réfrigérateur déjà plein de macarons en maturation et de ganache</td><td data-label=\"Notre conseil\">Poudre</td><td data-label=\"Pourquoi\">Elle se garde au sec, sachet fermé, hors du froid</td></tr>\n<tr><td data-label=\"Votre activité\">Vous fouettez dès que les plaques sont chemisées</td><td data-label=\"Notre conseil\">Liquide</td><td data-label=\"Pourquoi\">Froid et prêt à être fouetté, sans rien à reconstituer</td></tr>\n<tr><td data-label=\"Votre activité\">Ligne de pâtisserie végétale qui poche en continu</td><td data-label=\"Notre conseil\">Liquide, bag-in-box de 10 L ou IBC de 1 T</td><td data-label=\"Pourquoi\">L'alimentation ne s'arrête jamais, et la chaîne du froid est celle de l'usine</td></tr>\n</tbody>\n</table>\n<p>La poudre n'est pas un raccourci à mélanger à sec. L'aquafaba se monte d'abord seul : reconstituez donc la poudre avec de l'eau avant tout contact avec la poudre d'amandes.</p>"
      },
      {
        "id": "formats",
        "title": "Bien utiliser chaque format",
        "html": "<div class=\"va-guide-cols\">\n<div>\n<h3>Liquide</h3>\n<ul>\n<li>Il sort froid de la brique ouverte, comme la recette le demande pour le fouetter.</li>\n<li>Il partage le réfrigérateur avec vos macarons en maturation : notez la date d'ouverture sur la brique.</li>\n<li>Jetez-le s'il dégage une mauvaise odeur, s'il présente des bulles ou s'il s'est séparé.</li>\n</ul>\n</div>\n<div>\n<h3>Poudre</h3>\n<ul>\n<li>{white_powder} g de poudre + {white_water} ml d'eau = {white_total} g d'aquafaba, soit la même masse d'aquafaba liquide. {white_powder} g de poudre remplacent 1 blanc d'œuf.</li>\n<li>Pour une préparation de macarons : {powder_dose} g de poudre + {water_dose} ml d'eau.</li>\n<li>Reconstituez-la et mettez-la au frais avant de fouetter. Froid, l'aquafaba monte plus vite et donne une mousse plus stable.</li>\n</ul>\n</div>\n</div>"
      },
      {
        "id": "fix",
        "title": "Quand les coques ne réussissent pas",
        "html": "<table class=\"va-guide-grid va-guide-grid--fix\">\n<thead><tr><th scope=\"col\">Ce que vous constatez</th><th scope=\"col\">La cause</th><th scope=\"col\">La solution</th></tr></thead>\n<tbody>\n<tr><td data-label=\"Ce que vous constatez\">La mousse n'atteint pas son volume</td><td data-label=\"La cause\">Du gras sur le bol ou le fouet</td><td data-label=\"La solution\">Dégraissez tout le matériel avant de commencer</td></tr>\n<tr><td data-label=\"Ce que vous constatez\">La meringue retombe avant le pochage</td><td data-label=\"La cause\">Elle a attendu pendant la préparation du mélange sec ou des plaques</td><td data-label=\"La solution\">Tamisez et chemisez les plaques d'abord, fouettez en dernier</td></tr>\n<tr><td data-label=\"Ce que vous constatez\">Les coques manquent de développement</td><td data-label=\"La cause\">Macaronage poussé au-delà du ruban, ou trop brutal</td><td data-label=\"La solution\">Arrêtez au ruban épais et lent</td></tr>\n<tr><td data-label=\"Ce que vous constatez\">Pas de croûte après le repos</td><td data-label=\"La cause\">Pièce humide</td><td data-label=\"La solution\">Laissez croûter plus longtemps et jugez au toucher, pas à la montre</td></tr>\n<tr><td data-label=\"Ce que vous constatez\">Les coques suintent pendant le stockage</td><td data-label=\"La cause\">Sucre incomplètement dissous</td><td data-label=\"La solution\">Ajoutez le sucre semoule progressivement</td></tr>\n<tr><td data-label=\"Ce que vous constatez\">Les coques ramollissent pendant le stockage</td><td data-label=\"La cause\">Les coques absorbent l'humidité de l'air</td><td data-label=\"La solution\">Conservez-les dans un endroit peu humide</td></tr>\n<tr><td data-label=\"Ce que vous constatez\">Les coques varient d'une fabrication à l'autre</td><td data-label=\"La cause\">La concentration de l'aquafaba a varié</td><td data-label=\"La solution\">Maintenez {concentration} g/ml en production industrielle</td></tr>\n</tbody>\n</table>"
      }
    ],
    "faq": [
      {
        "q": "Quelle quantité d'aquafaba faut-il pour des macarons ?",
        "a": "{dose} g d'aquafaba réfrigéré et {sugar} g de sucre semoule donnent {yield}. Cela remplace {eggs} blancs d'œufs. Un Tetrapak de 1 L permet {batches_1l} préparations, un sachet de poudre de 200 g en permet {batches_200g}."
      },
      {
        "q": "Liquide ou poudre : que choisir pour mon atelier ?",
        "a": "Comptez vos fabrications. Si vous pochez assez souvent pour finir un Tetrapak de 1 L dans les {opened_days} jours après ouverture, le liquide suit votre rythme. Si vous faites vos macarons à la commande, prenez la poudre : le sachet ouvert attend sans s'altérer."
      },
      {
        "q": "Faut-il ajuster le reste de ma recette ?",
        "a": "Non. Dans les macarons, on ne remplace que des blancs d'œufs, pas des œufs entiers : le remplacement est donc direct. La poudre d'amandes, le sucre glace et le sucre semoule restent exactement ceux de votre recette."
      },
      {
        "q": "Faut-il encore ajouter un stabilisant acide à la meringue ?",
        "a": "La recette le considère comme facultatif. La crème de tartre ou l'acide citrique s'ajoute une fois les pics souples formés et avant le sucre semoule, et soutient la meringue pendant le macaronage et le croûtage. Ajoutez-le à la meringue, jamais au mélange sec."
      },
      {
        "q": "Le temps de croûtage change-t-il dans une pièce humide ?",
        "a": "Oui, et il se juge au toucher. Les coques sont prêtes quand la surface est sèche sous un doigt léger. Dans une pièce humide, cette croûte se forme lentement : {rest} minutes est un repère, pas une règle."
      },
      {
        "q": "Combien de temps se conserve un produit ouvert ?",
        "a": "Le liquide ouvert se garde fermé, à {opened_temp} °C maximum, et s'utilise dans les {opened_days} jours. Fiez-vous aussi à vos sens : une odeur aigre, des bulles ou une séparation, et il n'entre pas dans la meringue. La poudre ouverte se conserve tant que le sachet reste au sec et bien fermé."
      },
      {
        "q": "Comment reconstituer la poudre pour une préparation ?",
        "a": "Dosez selon le nombre de blancs d'œufs : {powder_dose} g de poudre et {water_dose} ml d'eau pour une préparation. Refroidissez le mélange avant de le fouetter. La règle par blanc d'œuf : {white_powder} g de poudre + {white_water} ml d'eau = {white_total} g d'aquafaba, soit la même masse d'aquafaba liquide. {white_powder} g de poudre remplacent 1 blanc d'œuf."
      },
      {
        "q": "Pouvez-vous m'envoyer la spécification de concentration pour mon dossier de production ?",
        "a": "Oui, la fiche technique est envoyée sur demande. Utilisez notre [formulaire de contact]({contact_href}) pour décrire votre production, vos sites et le format envisagé."
      }
    ]
  }
};
