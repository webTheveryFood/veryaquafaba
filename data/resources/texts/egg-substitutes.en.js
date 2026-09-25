// Plant-based egg substitutes, English (set-2 A1 to A4). 'index' is the pillar page, the
// other keys the topic pages (routes.js TOPIC_SLUGS['egg-substitutes']). Every figure is a
// {token} filled from facts.json by data/resources/topics.js; no em/en dash. The equivalence
// table of the site is linked, never repeated: these pages organise the choice.
const grid = (heads, rows, cls = '') => `<table class="va-guide-grid${cls ? ` ${cls}` : ''}">
<thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
<tbody>
${rows.map((r) => `<tr>${r.map((c, i) => `<td data-label="${heads[i]}">${c}</td>`).join('')}</tr>`).join('\n')}
</tbody>
</table>`;

export default {
  index: {
    title: 'Aquafaba, the Plant-Based Egg Substitute - VERY AQUAFABA',
    h1: 'Plant-based egg substitute: how to replace eggs with aquafaba in your recipes',
    crumb: 'Egg substitutes',
    enquiryLabel: 'Egg substitutes',
    description: 'One plant-based egg substitute that foams, emulsifies and binds: {egg_liquid} g of VERY AQUAFABA replaces a whole egg, {white_liquid} g an egg white. When to go egg-free.',
    lead: "One plant-based ingredient can replace whole eggs, egg whites and even yolks. VERY AQUAFABA is chickpea aquafaba: {egg_liquid} g replaces a whole egg and {white_liquid} g an egg white. Below you'll find when an egg-free recipe makes sense, what the egg does in your recipe, how much aquafaba to use instead, and the one adjustment to make.",
    // Question page: answer first, no reference tables after it.
    figures: false,
    sections: [
      {
        id: 'when',
        title: 'When does an egg-free recipe make sense?',
        html: `<p>A vegan menu is the obvious reason, but it is far from the only one. Kitchens go egg-free for five reasons:</p>
<ul>
<li><strong>Vegan and plant-based menus.</strong> The dish has to be egg-free by definition.</li>
<li><strong>Allergen management.</strong> VERY AQUAFABA contains no eggs, dairy, gluten or soy, so the recipe drops one of the major allergens.</li>
<li><strong>Preparations that are never cooked.</strong> Cocktail foams, mousse and mayonnaise are served raw. Aquafaba replaces raw egg white without the food-safety risk that comes with it.</li>
<li><strong>Stock and shelf life.</strong> Eggs need the fridge and a short date. Sealed aquafaba keeps at least {unopened_months} months at room temperature, and the powder does not spoil once opened.</li>
<li><strong>Price stability.</strong> Egg prices move with the season and the market. Aquafaba does not.</li>
</ul>`,
      },
      {
        id: 'function',
        title: 'What is the egg doing in your recipe?',
        html: `<p>Before you swap anything, it helps to know what the egg was doing. In most recipes it does one of three jobs: it holds a foam, it keeps an emulsion together, or it binds a batter and brings moisture. Find your recipe in the table below and you have your dose.</p>
${grid(['What you make', 'What the egg does', 'Use instead', 'Watch for', 'Full guide'], [
  ['Meringues, macarons, mousse, cocktail foams', 'Foaming: whipped white that holds air and sugar', '{white_liquid} g per egg white, whipped cold on its own', 'Grease in the bowl and warm aquafaba both keep the foam short', '<a href="{meringue_href}">Meringue</a>, <a href="{macarons_href}">macarons</a>, <a href="{chocolate_mousse_href}">chocolate mousse</a>, <a href="{cocktails_href}">cocktails</a>'],
  ['Mayonnaise, sauces, dressings', 'Emulsifying: holding oil and water together', '{mayonnaise_dose} g for {mayonnaise_oil} g of oil', 'Oil poured too fast, or too little shear, and the emulsion never starts', '<a href="{mayonnaise_href}">Mayonnaise</a>'],
  ['Cakes, cookies, muffins, brioche', 'Binding and moisture: holding the batter together', '{egg_liquid} g per whole egg', 'Aquafaba brings more water than egg: reduce the other liquids and bake through', '<a href="{baking_href}">Baking</a>'],
  ['Anything that needs the richness of a yolk', 'Fat and colour', '{yolk_liquid} g plus {yolk_oil} g of oil', 'Aquafaba brings no fat, so the oil is not optional', '<a href="{ratio_href}">Egg ratio</a>'],
], 'va-guide-grid--wrap')}
<p>One ingredient covers all four jobs. What changes from one recipe to the next is the dose and the way you handle it.</p>`,
      },
      {
        id: 'convert',
        title: 'How much aquafaba replaces an egg',
        html: `<p>Aquafaba is always weighed, and three numbers cover every recipe:</p>
<ul>
<li>{egg_liquid} g of aquafaba replaces one whole egg.</li>
<li>{white_liquid} g replaces one egg white. In powder, that is {white_powder} g made up with {white_water} ml of water.</li>
<li>{yolk_liquid} g plus {yolk_oil} g of oil stand in for one yolk, because aquafaba brings no fat.</li>
</ul>
<p>Replacing whole eggs? Aquafaba carries more water than an egg, about {water_aquafaba_pct} percent against {water_egg_pct} percent. Reduce the other liquids by {reduce_liquids} percent and bake dense cakes through. Replacing only the whites, as in meringues or macarons, needs no adjustment.</p>
<p>The <a href="{baking_calc_href}">substitution calculator</a> converts the eggs, whites and yolks of your own recipe in one go.</p>`,
      },
      {
        id: 'formats',
        title: 'Liquid or powder?',
        html: `<p>Liquid and powder are the same aquafaba, so the doses above apply to both. The choice comes down to how quickly you use an opened pack and where you can store it.</p>
${grid(['Format', 'Per egg white', 'Once opened', 'Read on'], [
  ['Liquid, ready to pour', '{white_liquid} g, weighed straight from the pack', 'In the fridge at {opened_temp} °C or below, used within {opened_days} days', '<a href="{liquid_egg_white_href}">Liquid egg white alternative</a>'],
  ['Powder, made up with water', '{white_powder} g plus {white_water} ml of water', 'Does not spoil. Keep it dry and closed', '<a href="{egg_white_powder_href}">Egg white powder alternative</a>'],
])}
<p>If you cook egg-free every day, liquid is the simple choice. If you only do it now and then, or you are short on fridge space, powder will wait as long as you need. And if you are buying for a bakery, a bar or a production line, the <a href="{professional_href}">professionals section</a> looks at the formats by activity.</p>`,
      },
      {
        id: 'vary',
        title: 'Why do results vary from one recipe to the next?',
        html: `<p>Usually because the egg was doing a different job in each recipe. Five things explain most surprises:</p>
<ul>
<li><strong>The job.</strong> A foam, a binder and an emulsion are three different results. The dose that whips a meringue is not the dose that binds a cake.</li>
<li><strong>Which part of the egg.</strong> Replacing a white is a direct swap. Replacing a whole egg brings extra water. Replacing a yolk needs the oil.</li>
<li><strong>Technique.</strong> Whipping puts the air in, folding keeps it, a thin stream of oil builds the emulsion. Each guide's troubleshooting table covers the faults of its own recipe.</li>
<li><strong>The rest of the recipe.</strong> Sugar timing, chocolate temperature, humidity in the room and oven heat all change the result, the same as with eggs.</li>
<li><strong>The format, only at preparation.</strong> Liquid is weighed as it comes. Powder is made up with water first. Made up, it is the same aquafaba, at the same dose.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'Is aquafaba vegan?', a: 'Yes. VERY AQUAFABA is made from chickpeas and water, with no eggs, dairy, gluten or soy, so it suits vegan and allergen-free recipes.' },
      { q: 'Can I replace one egg white with aquafaba?', a: 'Yes. {white_liquid} g of liquid aquafaba replaces one egg white, or {white_powder} g of powder made up with {white_water} ml of water. Weigh it rather than measuring it in spoons.' },
      { q: 'Can I use aquafaba instead of a whole egg?', a: 'Yes. {egg_liquid} g replaces one whole egg. Added as it is, it brings the binding and moisture of the egg to cakes, cookies and doughs. For the richness of a yolk, add {yolk_liquid} g of aquafaba plus {yolk_oil} g of oil.' },
      { q: 'Do I need to change anything else in the recipe?', a: 'Only when you replace whole eggs: reduce the other liquids by {reduce_liquids} percent, because aquafaba is about {water_aquafaba_pct} percent water against {water_egg_pct} percent for an egg. Replacing egg whites alone needs no change.' },
      { q: 'Is the powder the same thing as the liquid?', a: 'Yes, dried. {white_powder} g of powder plus {white_water} ml of water gives {white_total} g of aquafaba, the same as the liquid, and replaces one egg white.' },
      { q: 'What is VERY AQUAFABA made of?', a: 'The liquid from cooking chickpeas, filtered, refined and standardized so that every batch behaves the same. It is neutral in taste and clean label, as the [Products page]({products_href}) describes.' },
    ],
    links: [
      { href: '{egg_white_href}', label: 'How to replace egg whites with aquafaba' },
      { href: '{liquid_egg_white_href}', label: 'Switching from liquid egg white to aquafaba' },
      { href: '{egg_white_powder_href}', label: 'Aquafaba powder: the egg white powder alternative' },
      { href: '{ratio_href}', label: 'How much aquafaba equals one egg' },
      { href: '{professional_href}', label: 'Aquafaba for professionals' },
    ],
  },

  'egg-white': {
    title: 'How to Replace Egg Whites with Aquafaba - VERY AQUAFABA',
    h1: 'How to replace egg whites with aquafaba',
    crumb: 'Egg white',
    enquiryLabel: 'Egg white alternative',
    description: 'Replace egg whites with aquafaba: {white_liquid} g of liquid or {white_powder} g of powder per egg white. The conversion from one white to a whole recipe, and what the whisk needs.',
    lead: "One egg white is {white_liquid} g of VERY AQUAFABA liquid, or {white_powder} g of powder made up with {white_water} ml of water. That is the whole conversion, and it holds from a single white to a full recipe: a 1 L Tetrapak stands in for {liquid_1l_whites} egg whites, a 200 g pouch for {powder_200g_whites}. Below you'll find the conversion at the quantities recipes actually use, what the whisk needs from you, and the recipes on this site that run on it.",
    figures: true,
    sections: [
      {
        id: 'convert',
        title: 'From one egg white to a whole recipe',
        html: `<p>Recipes count egg whites, so here is the conversion at the counts you meet most often. Liquid is weighed as it comes; powder is weighed, then made up with water.</p>
${grid(['Egg whites', 'Liquid', 'Powder', 'Water for the powder'], [
  ['1', '{white_liquid} g', '{white_powder} g', '{white_water} ml'],
  ['2', '{whites_2_liquid} g', '{whites_2_powder} g', '{whites_2_water} ml'],
  ['4', '{whites_4_liquid} g', '{whites_4_powder} g', '{whites_4_water} ml'],
  ['5', '{whites_5_liquid} g', '{whites_5_powder} g', '{whites_5_water} ml'],
  ['10', '{whites_10_liquid} g', '{whites_10_powder} g', '{whites_10_water} ml'],
])}
<p>Two whites is a small batch of mousse for two; four is the macaron and mousse batch on this site; five is the meringue batch. The <a href="{reconstitution_href}">reconstitution page</a> continues the table up to 20 egg whites, and each application guide has a calculator that scales the whole recipe.</p>`,
      },
      {
        id: 'whisk',
        title: 'What the whisk needs from you',
        html: `<p>Aquafaba foam is a plain protein foam with no fat in the recipe, and it asks for the same care as egg white, plus a little more patience with the cold. Three things cover almost every fault:</p>
<ul>
<li><strong>Cold.</strong> The aquafaba goes into the bowl at {meringue_chill} °C, and made-up powder is chilled to the same temperature. Warm aquafaba climbs slowly and gives a weaker foam.</li>
<li><strong>Clean.</strong> A film of grease on the bowl or the whisk holds the volume short. Wipe both before the aquafaba goes in.</li>
<li><strong>Sugar last.</strong> It goes in once the foam holds soft peaks, one spoonful at a time. Added faster than it can dissolve, it weeps in storage.</li>
</ul>
<p>Count the whipping in minutes, not seconds: about {meringue_whip} minutes on high speed for a meringue batch. A stabiliser is optional. Where a recipe uses one, cream of tartar or citric acid goes in at soft peaks, not at the start.</p>`,
      },
      {
        id: 'where',
        title: 'Where it whips on this site',
        html: `<p>Four recipes on this site are built on the aquafaba foam, at four different loads:</p>
<ul>
<li><a href="{meringue_href}">Meringue</a>: {meringue_dose} g, or {meringue_eggs} egg whites, whipped with {meringue_sugar} g of sugar and dried at {meringue_bake} °C, for about {meringue_yield} meringues.</li>
<li><a href="{macarons_href}">Macarons</a>: {macarons_dose} g, or {macarons_eggs} egg whites, for about {macarons_yield} shells.</li>
<li><a href="{chocolate_mousse_href}">Chocolate mousse</a>: {chocolate_mousse_dose} g, or {chocolate_mousse_eggs} egg whites, folded into chocolate at {chocolate_mousse_fold_temp} °C.</li>
<li><a href="{cocktails_href}">Sours behind the bar</a>: {cocktails_dose} g per drink, dry shaken for {cocktails_dry_shake} seconds.</li>
</ul>
<p>If your recipe replaces whole eggs rather than whites, the figure is {egg_liquid} g per egg and the <a href="{ratio_href}">egg ratio page</a> takes it from there.</p>`,
      },
      {
        id: 'choose',
        title: 'Liquid or powder for the same egg white?',
        html: `<p>The conversion is identical in both, so the choice is about the pack, not the recipe. A kitchen that whips most days takes the <a href="{liquid_egg_white_href}">liquid</a>: it pours from the fridge already cold, and an opened pack is used within {opened_days} days. One that whips now and then, or has no chilled space to spare, takes the <a href="{egg_white_powder_href}">powder</a>: an opened pouch does not spoil, and you make up what the batch needs.</p>`,
      },
    ],
    faq: [
      { q: 'How many grams of aquafaba replace one egg white?', a: '{white_liquid} g of liquid, or {white_powder} g of powder made up with {white_water} ml of water, which gives {white_total} g of aquafaba.' },
      { q: 'Does it whip like an egg white?', a: 'It whips into a foam that carries sugar and air, which is what the meringue, macaron, mousse and sour recipes on this site are built on. It wants the same cold bowl and the same grease-free whisk.' },
      { q: 'How many egg whites are there in a 1 L pack?', a: '{liquid_1l_whites}. A 10 L bag-in-box stands in for {bib_10l_whites} and a 1 T IBC for {ibc_1t_whites}. In powder, a 200 g pouch stands in for {powder_200g_whites}.' },
      { q: 'Do I need cream of tartar or citric acid?', a: 'It is optional. Where a recipe uses one, it goes in while the mixer runs, once the foam holds soft peaks, and it supports the foam through the sugar and the folding.' },
      { q: 'Can I use it in a recipe that calls for whole eggs?', a: 'Yes, with the whole egg figure instead: {egg_liquid} g per egg, plus a liquid reduction of {reduce_liquids} percent because aquafaba brings more water. The [baking guide]({baking_href}) sets it out.' },
    ],
    links: [
      { href: '{meringue_href}', label: 'Meringue: liquid or powder?' },
      { href: '{macarons_href}', label: 'Macarons: liquid or powder?' },
      { href: '{reconstitution_href}', label: 'Powder reconstitution: the rule per egg white' },
      { href: '{liquid_egg_white_href}', label: 'Switching from liquid egg white to aquafaba' },
      { href: '{egg_white_powder_href}', label: 'Aquafaba powder: the egg white powder alternative' },
    ],
  },

  'liquid-egg-white': {
    title: 'Switching from Liquid Egg White to Aquafaba - VERY AQUAFABA',
    h1: 'Switching from liquid egg white to aquafaba',
    crumb: 'Liquid egg white',
    enquiryLabel: 'Liquid egg white alternative',
    description: 'From liquid egg white to VERY AQUAFABA liquid: the same dose by weight, {white_liquid} g per egg white. What changes, which pack replaces your carton, what to do once open.',
    lead: "If you buy liquid egg white by the carton, you buy it to skip the cracking and to dose by weight. VERY AQUAFABA liquid does the same job from chickpeas: {white_liquid} g replaces one egg white, it arrives at a fixed concentration of {viscosity} g/ml, and it is poured straight onto the scale. Here is what changes when you switch, what does not, which pack replaces your carton, and what to do with what is left in an opened one.",
    figures: true,
    sections: [
      {
        id: 'changes',
        title: 'What changes, and what does not',
        html: `<p>The good news first: the way you work stays the same.</p>
<ul>
<li>You still dose by weight, {white_liquid} g per egg white, straight from the pack onto the scale.</li>
<li>You still pour, with nothing to make up.</li>
<li>You still whip it cold, from a clean bowl, at {meringue_chill} °C for a meringue.</li>
</ul>
<p>What changes is everything around the pack:</p>
<ul>
<li><strong>No cold chain until you open it.</strong> Sealed, the pack keeps at least {unopened_months} months at room temperature, in the dry store. A carton of liquid egg white lives in the fridge from the day it arrives.</li>
<li><strong>{opened_days} days once opened,</strong> at {opened_temp} °C or below, closed between uses.</li>
<li><strong>No raw egg in the kitchen.</strong> The foam and the emulsion are the same; the food-safety concern of raw egg white is gone, and the dish is egg-free for the guest.</li>
<li><strong>One concentration, every time.</strong> The liquid is filtered, refined and standardised at {viscosity} g/ml, so a foam behaves the same from one pack to the next.</li>
</ul>`,
      },
      {
        id: 'packs',
        title: 'Which pack replaces your carton',
        html: `<p>Three liquid packs, described by the egg whites they replace and by the kitchen that empties them.</p>
${grid(['Pack', 'Egg whites', 'Who empties it'], [
  ['1 L Tetrapak', '{liquid_1l_whites}', 'A pastry section, a bar with sours on the menu, a single site'],
  ['10 L bag-in-box', '{bib_10l_whites}', 'A central kitchen drawing by the kilo each shift'],
  ['1 T IBC', '{ibc_1t_whites}', 'A line dosing continuously'],
], 'va-guide-grid--wrap')}
<p>In practice: {meringue_dose} g for a meringue batch of about {meringue_yield}, {macarons_dose} g for about {macarons_yield} macaron shells, {mayonnaise_dose} g for {mayonnaise_oil} g of oil in a mayonnaise, {cocktails_dose} g per sour. The <a href="{index_href}">application guides</a> carry the method for each. Each activity is worked through on its own page: <a href="{pastry_href}">pastry and bakery</a>, <a href="{bars_href}">bars and cocktails</a>, <a href="{foodservice_href}">foodservice</a> and <a href="{industry_href}">food manufacturing</a>.</p>`,
      },
      {
        id: 'opened',
        title: 'What to do with what is left in an opened pack',
        html: `<p>An opened pack has {opened_days} days in the fridge. If your rhythm gets through it in time, close it between uses and that is all. If it does not, you have two options:</p>
<ul>
<li><strong>Freeze it.</strong> Portion it at {portion} g, freeze at {freeze_temp} °C for up to {freeze_months} months, thaw overnight in the fridge and stir until even before whipping. It is never refrozen. The <a href="{storage_href}">storage and freezing guide</a> has the handling in detail.</li>
<li><strong>Or switch that recipe to powder.</strong> An opened pouch does not spoil, and it answers the same recipe at the same dose. The <a href="{egg_white_powder_href}">powder page</a> explains when the pouch is the better buy.</li>
</ul>
<p>Whatever the date says, an opened liquid that smells off, shows bubbles or has separated is discarded.</p>`,
      },
    ],
    faq: [
      { q: 'Is aquafaba stored like liquid egg white?', a: 'Not before opening. Sealed, it keeps at least {unopened_months} months at room temperature, so it waits in the dry store. Once opened it is stored like your carton: at {opened_temp} °C or below, used within {opened_days} days.' },
      { q: 'How much liquid replaces one egg white?', a: '{white_liquid} g, weighed. A 1 L Tetrapak therefore stands in for {liquid_1l_whites} egg whites, a 10 L bag-in-box for {bib_10l_whites} and a 1 T IBC for {ibc_1t_whites}.' },
      { q: 'Can it be frozen?', a: 'Yes, in portions of {portion} g at {freeze_temp} °C for up to {freeze_months} months. Thaw overnight in the fridge and stir until even before whipping; it is never refrozen.' },
      { q: 'Is the concentration fixed?', a: 'Yes, {viscosity} g/ml. It is filtered, refined and standardised, which is what keeps a foam or an emulsion the same from one run to the next.' },
      { q: 'Where can I buy liquid aquafaba?', a: 'The formats and the current channels are on the [Products page]({products_href}). For professional volumes, describe them through the enquiry form and the technical sheet comes back with the answer.' },
    ],
    links: [
      { href: '{egg_white_href}', label: 'How to replace egg whites with aquafaba' },
      { href: '{egg_white_powder_href}', label: 'Aquafaba powder: the egg white powder alternative' },
      { href: '{storage_href}', label: 'How to store and freeze aquafaba' },
      { href: '{pastry_href}', label: 'Pastry and bakery' },
      { href: '{bars_href}', label: 'Bars and cocktails' },
    ],
  },

  'egg-white-powder': {
    title: 'Aquafaba Powder vs Egg White Powder - VERY AQUAFABA',
    h1: 'Aquafaba powder: the egg white powder alternative that keeps',
    crumb: 'Egg white powder',
    enquiryLabel: 'Egg white powder alternative',
    description: 'VERY AQUAFABA powder replaces egg white powder: {white_powder} g plus {white_water} ml of water per egg white, a 200 g pouch for {powder_200g_whites} whites, and no date once opened.',
    lead: "Egg white powder earns its place in the store cupboard by waiting. VERY AQUAFABA powder does the same from chickpeas, for cooking and baking: {white_powder} g made up with {white_water} ml of water replaces one egg white, a 200 g pouch stands in for {powder_200g_whites}, and an opened pouch does not spoil while it stays dry and closed. Here is how to make it up, when the pouch beats the carton, and the one thing it does not do.",
    figures: true,
    sections: [
      {
        id: 'makeup',
        title: 'Making it up',
        html: `<p>The rule is counted per egg white, not per pouch: {white_powder} g of powder and {white_water} ml of water give {white_total} g of aquafaba, used exactly as the same weight of liquid would be. For the batches on this site:</p>
${grid(['Batch', 'Powder', 'Water'], [
  ['Meringue, {meringue_eggs} egg whites', '{meringue_powder} g', '{meringue_water} ml'],
  ['Mayonnaise, one batch', '{mayonnaise_powder} g', '{mayonnaise_water} ml'],
  ['One sour', '{cocktails_powder} g', '{cocktails_water} ml'],
])}
<p>Make it up before you need it and chill it, to {meringue_chill} °C for a meringue, because warm aquafaba climbs more slowly and gives a weaker foam. The <a href="{reconstitution_href}">reconstitution page</a> carries the table from 1 to 20 egg whites.</p>`,
      },
      {
        id: 'when',
        title: 'When the pouch beats the carton',
        html: `<p>It is the same ingredient as the liquid, so the reasons to prefer it are about the pack and the room, not the recipe:</p>
<ul>
<li><strong>Uneven rotation.</strong> The opened pouch waits with no date attached, while an opened liquid pack has {opened_days} days in the fridge.</li>
<li><strong>No chilled space.</strong> The pouch lives in the dry store, and the chilled shelves stay free for what you just made.</li>
<li><strong>Travel.</strong> Events and outside catering carry it dry, with no cold chain.</li>
<li><strong>Dry premixes.</strong> A producer blending a dry sauce or bake base puts the powder into the premix as it is.</li>
</ul>
<p>Sealed, a pouch keeps at least {unopened_months} months at room temperature, like the liquid. The difference begins the day you open it.</p>`,
      },
      {
        id: 'not',
        title: 'The one thing the powder does not do',
        html: `<p>It is not a dry-mix shortcut for whipped recipes. The aquafaba is whipped on its own first, so the powder is made up with water and chilled before it goes anywhere near the almond flour, the icing sugar or the caster sugar. Only in a dry premix does it go in as it is.</p>
<p>And it is a culinary ingredient, not a protein supplement: made for the meringue that holds its sugar, the mayonnaise that takes its oil and the sponge that binds, and dosed by the egg white the recipe replaces, not by a scoop.</p>`,
      },
      {
        id: 'packs',
        title: 'Which pouch',
        html: `${grid(['Pouch', 'Egg whites', 'Made up, that is'], [
  ['30 g', '{powder_30g_whites}', 'A trial batch, or a bar testing a sour'],
  ['200 g', '{powder_200g_whites}', '{meringue_batches_200g} batches of meringue or {cocktails_batches_200g} sours'],
  ['3 kg', '{powder_3kg_whites}', 'A professional kitchen, or a dry premix on a line'],
])}
<p>The <a href="{products_href}">Products page</a> lists the pouches and what the pack states. The <a href="{index_href}">application guides</a> give the dose per recipe in both formats, and the <a href="{professional_href}">professionals section</a> sorts the formats by activity.</p>`,
      },
    ],
    faq: [
      { q: 'What is aquafaba powder?', a: 'VERY AQUAFABA in dried form. {white_powder} g of powder plus {white_water} ml of water gives {white_total} g of aquafaba, equivalent to the same weight of the liquid, and replaces one egg white.' },
      { q: 'How long does an opened pouch last?', a: 'It does not spoil while it stays dry and closed, which is why it suits a kitchen or a bar whose rotation is uneven. Sealed, it keeps at least {unopened_months} months at room temperature.' },
      { q: 'Can the powder go straight into a dry mix?', a: 'In a dry premix, yes. In a whipped recipe, no: the aquafaba is whipped on its own first, so make it up with water and chill it before it meets the other dry ingredients.' },
      { q: 'How many egg whites are there in a 200 g pouch?', a: '{powder_200g_whites}. The 30 g pouch stands in for {powder_30g_whites} and the 3 kg pouch for {powder_3kg_whites}.' },
      { q: 'Is it a protein supplement?', a: 'No. It is a culinary ingredient for foams, emulsions and baking, dosed by the egg white the recipe replaces, as the [application guides]({index_href}) set out.' },
    ],
    links: [
      { href: '{reconstitution_href}', label: 'Powder reconstitution: the rule per egg white' },
      { href: '{egg_white_href}', label: 'How to replace egg whites with aquafaba' },
      { href: '{liquid_egg_white_href}', label: 'Switching from liquid egg white to aquafaba' },
      { href: '{meringue_href}', label: 'Meringue: liquid or powder?' },
      { href: '{bars_href}', label: 'Bars and cocktails' },
    ],
  },
};
