// Référence technique, français (set-2 F1). Même structure et tokens que reference.en.js.
export default {
  reconstitution: {
    title: "Reconstituer l'aquafaba en poudre : 2 g + 30 ml par blanc d'œuf - VERY AQUAFABA",
    h1: "Reconstituer la poudre VERY AQUAFABA : {white_powder} g de poudre et {white_water} ml d'eau par blanc d'œuf",
    crumb: 'Reconstitution de la poudre',
    eyebrow: 'Référence technique',
    enquiryLabel: 'Reconstitution de la poudre',
    description: "La règle de la poudre VERY AQUAFABA : {white_powder} g de poudre plus {white_water} ml d'eau donnent {white_total} g d'aquafaba et remplacent un blanc d'œuf. Un tableau de 1 à 20 blancs d'œufs, les doses par recette, et ce qui change entre poudre sèche, eau et aquafaba reconstitué.",
    lead: "La poudre VERY AQUAFABA se reconstitue avec de l'eau avant usage, et la règle se compte par blanc d'œuf : {white_powder} g de poudre plus {white_water} ml d'eau donnent {white_total} g d'aquafaba, soit la même masse d'aquafaba liquide, et {white_powder} g de poudre remplacent un blanc d'œuf. Un lot se dose par le nombre de blancs d'œufs que sa recette remplace. Cette page porte la règle, un tableau de 1 à 20 blancs d'œufs et les doses des recettes du site.",
    figures: true,
    sections: [
      {
        id: 'rule',
        title: "La règle par blanc d'œuf",
        html: `<p>Le liquide remplace un blanc d'œuf avec {white_liquid} g. La poudre remplace le même blanc d'œuf avec {white_powder} g, reconstitués avec {white_water} ml d'eau : les {white_total} g obtenus s'utilisent exactement comme {white_total} g d'aquafaba liquide. Une recette comptée en blancs d'œufs se convertit donc dans l'un ou l'autre format sans rien changer d'autre.</p>
<ul>
<li>Meringue, {meringue_eggs} blancs d'œufs : {meringue_powder} g de poudre + {meringue_water} ml d'eau, pour {meringue_dose} g d'aquafaba.</li>
<li>Macarons, {macarons_eggs} blancs d'œufs : {macarons_powder} g + {macarons_water} ml, pour {macarons_dose} g.</li>
<li>Mousse au chocolat, {chocolate_mousse_eggs} blancs d'œufs : {chocolate_mousse_powder} g + {chocolate_mousse_water} ml, pour {chocolate_mousse_dose} g.</li>
<li>Mayonnaise : {mayonnaise_powder} g + {mayonnaise_water} ml, pour les {mayonnaise_dose} g d'un lot.</li>
<li>Un sour : {cocktails_powder} g + {cocktails_water} ml, pour les {cocktails_dose} g d'un verre.</li>
</ul>
<p>Chaque <a href="{index_href}">guide d'application</a> reprend sa propre dose dans les deux formats, et chaque calculateur de quantités la met à l'échelle pour n'importe quel nombre de lots.</p>`,
      },
      {
        id: 'table',
        title: "Tableau : de 1 à 20 blancs d'œufs",
        html: `<p>Poudre et eau par nombre de blancs d'œufs, et l'aquafaba obtenu. Pesez la poudre sur une balance de précision ; l'eau se mesure en millilitres.</p>
{reconstitution_table}
<p>Pour une recette comptée en œufs entiers, le <a href="{baking_calc_href}">calculateur pâtisserie</a> convertit œufs, blancs et jaunes en poudre avec son eau.</p>`,
      },
      {
        id: 'states',
        title: 'Poudre sèche, eau et aquafaba reconstitué',
        html: `<p>Trois états, trois façons de conserver. Le sachet fermé se conserve au moins {unopened_months} mois à température ambiante, comme le liquide. Le sachet ouvert ne s'altère pas : il reste au sec, fermé, sur une étagère sèche, et attend le lot suivant sans date, ce qui explique que les cuisines et les bars à faible rotation le préfèrent. L'aquafaba reconstitué se traite comme le produit liquide : refroidi à la température de foisonnement de la recette, {meringue_chill} °C pour la meringue, avant d'aller dans la cuve, parce qu'un aquafaba tiède monte plus lentement et donne une mousse plus faible.</p>
<p>Reconstituez ce que le lot demande. La poudre n'est pas un raccourci de mélange à sec pour les recettes foisonnées : l'aquafaba se foisonne seul d'abord, donc il est reconstitué avec de l'eau avant d'approcher la poudre d'amande ou le sucre. L'exception est le prémix sec, une base de sauce ou de pâtisserie mélangée à sec par un fabricant, où la poudre entre telle quelle.</p>`,
      },
      {
        id: 'method',
        title: 'Méthode de mélange et temps de repos',
        html: `<p>Cette page ne publie ni méthode de mélange ni temps de repos pour la poudre : seulement la proportion par blanc d'œuf et les doses par recette, qui sont les chiffres confirmés pour le produit. La procédure fait partie de la fiche technique, à demander par le formulaire en bas de cette page.</p>
<p>Ce que les guides fixent, c'est l'état de l'aquafaba reconstitué quand il arrive au batteur : à la température de foisonnement de la recette, pesé plutôt que mesuré en volume, et reconstitué pour le lot en cours.</p>`,
      },
    ],
    faq: [
      { q: "Qu'est-ce que l'aquafaba en poudre ?", a: "La forme séchée de VERY AQUAFABA, reconstituée avec de l'eau avant usage. {white_powder} g de poudre plus {white_water} ml d'eau donnent {white_total} g d'aquafaba, soit la même masse d'aquafaba liquide, et remplacent un blanc d'œuf." },
      { q: "Combien d'eau pour {meringue_powder} g de poudre ?", a: "{meringue_water} ml, selon la proportion de {white_water} ml pour {white_powder} g. C'est la dose d'un lot de meringue, {meringue_eggs} blancs d'œufs, pour {meringue_dose} g d'aquafaba." },
      { q: "Peut-on reconstituer un sachet entier d'un coup ?", a: "Reconstituez ce que le lot demande. Le sachet ouvert ne s'altère pas tant qu'il reste au sec, fermé, donc le reste attend le lot suivant ; l'aquafaba reconstitué se manipule comme le produit liquide." },
      { q: 'La poudre reconstituée foisonne-t-elle comme le liquide ?', a: "Les guides fonctionnent de la même façon avec les deux. Refroidissez-la d'abord à la température de foisonnement, {meringue_chill} °C pour la meringue : un aquafaba tiède monte plus lentement et donne une mousse plus faible qui ne portera pas le sucre." },
      { q: 'Où la poudre est-elle vendue ?', a: "Les sachets de 30 g et de 200 g, et le sac de 3 kg pour les professionnels, figurent sur la [page Produits]({products_href}). Un sachet de 200 g remplace {powder_200g_whites} blancs d'œufs." },
    ],
    links: [
      { href: '{professional_href}', label: "L'aquafaba pour les professionnels" },
      { href: '{pastry_href}', label: 'Pâtisserie et boulangerie' },
      { href: '{bars_href}', label: 'Bars et cocktails' },
      { href: '{meringue_calc_href}', label: 'Calculateur de quantités pour la meringue' },
    ],
  },
};
