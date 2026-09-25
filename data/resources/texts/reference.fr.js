// Référence technique, français (set-2 F1). Même structure et tokens que reference.en.js.
// La page de reconstitution porte la règle par blanc d'œuf (2 g + 30 ml = 32 g) et un tableau
// de 1 à 20 blancs d'œufs, généré par data/resources/topics.js dans {reconstitution_table}.
// La méthode de mélange et le temps de repos ne sont pas publiés : aucune procédure n'est
// inventée, la fiche technique est indiquée. Aucun tiret long.
const grid = (heads, rows, cls = '') => `<table class="va-guide-grid${cls ? ` ${cls}` : ''}">
<thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
<tbody>
${rows.map((r) => `<tr>${r.map((c, i) => `<td data-label="${heads[i]}">${c}</td>`).join('')}</tr>`).join('\n')}
</tbody>
</table>`;

export default {
  reconstitution: {
    title: "Comment utiliser l'aquafaba en poudre - VERY AQUAFABA",
    h1: "Comment utiliser l'aquafaba en poudre ?",
    crumb: 'Reconstitution de la poudre',
    eyebrow: 'Référence technique',
    enquiryLabel: 'Reconstitution de la poudre',
    description: "La règle de la poudre VERY AQUAFABA : {white_powder} g plus {white_water} ml d'eau par blanc d'œuf. Dose par recette, tableau de 1 à 20 blancs et ce que donne un sachet.",
    lead: "L'aquafaba en poudre est un substitut végétal au blanc d'œuf que vous reconstituez avec de l'eau avant usage. Deux grammes dans {white_water} ml d'eau tiennent lieu d'un blanc d'œuf, et une fois refroidi, il se monte en meringue, s'incorpore dans une mousse ou émulsionne une mayonnaise. Ci-dessous, la dose pour chaque recette du site, la conversion pour toute recette comptée en blancs d'œufs, et ce que donne un sachet.",
    figures: true,
    sections: [
      {
        id: 'rule',
        title: "Quelle quantité d'aquafaba en poudre remplace un blanc d'œuf ?",
        html: `<p>Les recettes comptent en blancs d'œufs, la poudre aussi. Là où le liquide remplace un blanc d'œuf avec {white_liquid} g, la poudre le remplace avec {white_powder} g reconstitués dans {white_water} ml d'eau, ce qui donne {white_total} g d'aquafaba, soit la même masse de liquide. Comptez les blancs de votre recette, et la conversion ci-dessous est la même quel que soit le format que vous avez en main.</p>`,
      },
      {
        id: 'batch',
        title: "Comment utiliser l'aquafaba en poudre dans vos recettes",
        html: `<p>Pour les recettes de ce site, voici ce qui va sur la balance. Pesez la poudre sur une balance de précision ; l'eau se mesure en millilitres.</p>
${grid(['Recette', 'Poudre', 'Eau', 'Aquafaba obtenu'], [
  ["<a href=\"{meringue_href}\">Meringue</a>, une préparation ({meringue_eggs} blancs d'œufs)", '{meringue_powder} g', '{meringue_water} ml', '{meringue_dose} g'],
  ["<a href=\"{macarons_href}\">Macarons</a>, une préparation ({macarons_eggs} blancs d'œufs)", '{macarons_powder} g', '{macarons_water} ml', '{macarons_dose} g'],
  ["<a href=\"{chocolate_mousse_href}\">Mousse au chocolat</a>, une préparation ({chocolate_mousse_eggs} blancs d'œufs)", '{chocolate_mousse_powder} g', '{chocolate_mousse_water} ml', '{chocolate_mousse_dose} g'],
  ['<a href="{mayonnaise_href}">Mayonnaise</a>, une préparation', '{mayonnaise_powder} g', '{mayonnaise_water} ml', '{mayonnaise_dose} g'],
  ['<a href="{cocktails_href}">Whiskey sour</a>, un cocktail', '{cocktails_powder} g', '{cocktails_water} ml', '{cocktails_dose} g'],
], 'va-guide-grid--wrap')}
<p>Chaque guide a un calculateur de quantités qui adapte sa recette à n'importe quel nombre de préparations, en liquide et en poudre avec son eau.</p>`,
      },
      {
        id: 'table',
        title: "Comment convertir des blancs d'œufs en aquafaba en poudre ?",
        html: `<p>Comptez les blancs d'œufs de votre recette et trouvez la ligne. La dernière colonne est l'aquafaba que vous aurez dans la cuve.</p>
{reconstitution_table}
<p>Pour une recette comptée en œufs entiers, le <a href="{baking_calc_href}">calculateur de substitution</a> convertit œufs, blancs et jaunes en poudre avec son eau.</p>`,
      },
      {
        id: 'pouch',
        title: "Quelle quantité d'aquafaba donne un sachet ?",
        html: `<p>Un sachet paraît petit à côté d'un litre de liquide, jusqu'à ce que vous ajoutiez l'eau. Voici ce que contient chacun :</p>
${grid(['Sachet', "Blancs d'œufs", 'Eau à ajouter', 'Aquafaba obtenu'], [
  ['30 g', '{powder_30g_whites}', '{powder_30g_water}', '{powder_30g_total}'],
  ['200 g', '{powder_200g_whites}', '{powder_200g_water}', '{powder_200g_total}'],
  ['3 kg', '{powder_3kg_whites}', '{powder_3kg_water}', '{powder_3kg_total}'],
])}
<p>Le sachet de 30 g est un essai : un service de sours ou deux préparations de meringue. Le sachet de 200 g est le format de travail d'une cuisine ou d'un bar. Le sac de 3 kg est pour une cuisine professionnelle ou un prémix sec sur une ligne. La <a href="{products_href}">page Produits</a> les liste tous.</p>`,
      },
      {
        id: 'states',
        title: "Comment conserver la poudre, et l'aquafaba reconstitué",
        html: `<p>La poudre passe par trois états, et chacun demande quelque chose de différent :</p>
<ul>
<li><strong>Dans le sachet.</strong> Fermé, il se conserve au moins {unopened_months} mois à température ambiante. Ouvert, il ne s'altère pas : gardez-le au sec, fermé, sur une étagère, et il attend la préparation suivante sans date. C'est toute la raison pour laquelle les cuisines et les bars à faible rotation le choisissent.</li>
<li><strong>Reconstitué.</strong> À partir de là, traitez-le comme le liquide. Reconstituez ce que la préparation demande, et refroidissez-le à la température de foisonnement de la recette, {meringue_chill} °C pour une meringue, avant qu'il n'entre dans la cuve. Un aquafaba tiède monte plus lentement et donne une mousse plus faible.</li>
<li><strong>Dans la cuve.</strong> Pour les recettes montées, l'aquafaba se monte seul d'abord, reconstituez-le donc avant qu'il n'approche la poudre d'amande ou le sucre. La poudre n'est pas un raccourci de mélange à sec. La seule exception est un prémix sec, une base de sauce ou de pâtisserie mélangée à sec par un fabricant, où la poudre entre telle quelle.</li>
</ul>
<p>Pour la méthode de mélange et le temps de repos de votre format, demandez la fiche technique par notre <a href="{contact_href}">formulaire de contact</a>.</p>`,
      },
    ],
    faq: [
      { q: "Qu'est-ce que l'aquafaba en poudre ?", a: "La forme séchée de VERY AQUAFABA, reconstituée avec de l'eau avant usage. {white_powder} g de poudre plus {white_water} ml d'eau donnent {white_total} g d'aquafaba, soit la même masse d'aquafaba liquide, et {white_powder} g de poudre remplacent un blanc d'œuf." },
      { q: "Combien d'eau pour {meringue_powder} g de poudre ?", a: "{meringue_water} ml, selon la proportion de {white_water} ml pour {white_powder} g. C'est la dose d'une préparation de meringue, {meringue_eggs} blancs d'œufs." },
      { q: "Le tableau dit {white_total} g par blanc d'œuf. Ma recette dit {white_liquid} g. Lequel utiliser ?", a: "Comptez en blancs d'œufs, pas en grammes. Reconstituez {white_powder} g de poudre avec {white_water} ml d'eau pour chaque blanc d'œuf que la recette remplace, et utilisez le tout. Les {white_total} g obtenus tiennent lieu des {white_liquid} g de liquide que la recette utiliserait sinon." },
      { q: "Puis-je reconstituer un sachet entier d'un coup ?", a: "Reconstituez ce que la préparation demande. Le sachet ouvert ne s'altère pas tant qu'il reste au sec, fermé, le reste attend donc la préparation suivante. Une fois reconstitué, l'aquafaba se manipule comme le produit liquide." },
      { q: 'La poudre reconstituée monte-t-elle comme le liquide ?', a: "Oui. Les guides fonctionnent de la même façon avec les deux. Refroidissez-la d'abord à la température de foisonnement, {meringue_chill} °C pour la meringue : un aquafaba tiède monte plus lentement et donne une mousse plus faible qui ne portera pas le sucre." },
      { q: 'Où la poudre est-elle vendue ?', a: "Les sachets de 30 g et de 200 g, et le sac de 3 kg pour les professionnels, figurent sur la [page Produits]({products_href}). Un sachet de 200 g remplace {powder_200g_whites} blancs d'œufs." },
    ],
    links: [
      { href: '{meringue_href}', label: 'Meringue : liquide ou poudre ?' },
      { href: '{meringue_calc_href}', label: 'Calculateur de quantités pour la meringue' },
      { href: '{baking_calc_href}', label: 'Calculateur de substitution' },
      { href: '{professional_href}', label: "L'aquafaba pour les professionnels" },
      { href: '{products_href}', label: 'Produits et formats' },
    ],
  },
};
