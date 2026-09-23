// Plant-based egg substitutes, English (set-2 A1 to A4). 'index' is the pillar page, the
// other keys the topic pages (routes.js TOPIC_SLUGS['egg-substitutes']). Every figure is a
// {token} filled from facts.json by data/resources/topics.js; no em/en dash. The equivalence
// table of the site is linked, never repeated: these pages organise the choice.
const grid = (heads, rows) => `<table class="va-guide-grid">
<thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
<tbody>
${rows.map((r) => `<tr>${r.map((c, i) => `<td data-label="${heads[i]}">${c}</td>`).join('')}</tr>`).join('\n')}
</tbody>
</table>`;

export default {
  index: {
    title: 'Plant-Based Egg Substitutes: a Vegan Egg Replacer by Function - VERY AQUAFABA',
    h1: 'Plant-based egg substitutes: start with the function you need to replace',
    crumb: 'Egg substitutes',
    enquiryLabel: 'Egg substitutes',
    description: 'A vegan egg replacer is chosen by function: foaming, emulsifying or binding. VERY AQUAFABA covers the three from chickpeas, at {egg_liquid} g per whole egg and {white_liquid} g per egg white, with the applications where each function is documented.',
    lead: 'A plant-based egg substitute is chosen by the job it has to do: hold a foam, keep an emulsion together or bind a batter. VERY AQUAFABA is chickpea aquafaba, filtered and standardized, and it covers the three: {egg_liquid} g replaces a whole egg, {white_liquid} g an egg white, and {yolk_liquid} g plus {yolk_oil} g of oil stand in for a yolk. This page sorts the choice by function, gives the conversion by weight and sends you to the application where that function is already documented.',
    figures: true,
    sections: [
      {
        id: 'function',
        title: 'By function: foaming, emulsifying, binding',
        html: `<p>Egg does three different jobs in a recipe, and a substitute is judged on the one you actually need. Each row below links to the guide where that function is worked out in full, with its method and its checks.</p>
${grid(['Function', 'What the egg was doing', 'With VERY AQUAFABA', 'Documented in'], [
  ['Foaming', 'Egg white whipped into a foam that carries sugar and air', '{white_liquid} g per egg white, whipped on its own, cold', '<a href="{meringue_href}">Meringue</a>, <a href="{macarons_href}">macarons</a>, <a href="{chocolate_mousse_href}">chocolate mousse</a>, <a href="{cocktails_href}">cocktails</a>'],
  ['Emulsifying', 'Egg holding oil and water together in a sauce', '{mayonnaise_dose} g emulsifies {mayonnaise_oil} g of oil', '<a href="{mayonnaise_href}">Mayonnaise</a>'],
  ['Binding and moisture', 'Whole egg holding a batter together and bringing water', '{egg_liquid} g per whole egg, weighed', '<a href="{baking_href}">Baking</a>'],
  ['Richness of a yolk', 'Yolk bringing fat and colour', '{yolk_liquid} g plus {yolk_oil} g of oil', '<a href="{ratio_href}">Egg ratio page</a>'],
])}
<p>One ingredient covers the four rows, which is what separates aquafaba from a substitute bought per function. What changes is the dose and the way it is handled, not the product.</p>`,
      },
      {
        id: 'convert',
        title: 'Converting a recipe, by weight',
        html: `<p>Aquafaba is weighed, never measured in spoons: that is how a professional recipe stays the same from one batch to the next. The rule is short.</p>
<ul>
<li>{egg_liquid} g of aquafaba replaces one whole egg.</li>
<li>{white_liquid} g replaces one egg white, and so does {white_powder} g of powder made up with {white_water} ml of water.</li>
<li>{yolk_liquid} g plus {yolk_oil} g of oil stand in for one yolk, because aquafaba brings no fat.</li>
</ul>
<p>An egg is about {water_egg_pct} percent water and aquafaba {water_aquafaba_pct} percent, so when whole eggs go out, the other liquids come down by {reduce_liquids} percent and dense bakes are baked through. The site's <a href="{ratio_href}">egg ratio page</a> carries the worked examples, and the <a href="{baking_calc_href}">substitution calculator</a> converts the eggs, whites and yolks of your own recipe into liquid or powder.</p>`,
      },
      {
        id: 'formats',
        title: 'Two formats of the same ingredient',
        html: `<p>The same aquafaba comes ready to pour or dried. Which one suits you is decided by how fast an opened pack is used up and where it is stored, not by the recipe: the conversion above is identical in both.</p>
${grid(['Format', 'Per egg white', 'Once opened', 'Read on'], [
  ['Liquid, 1 L Tetrapak to 1 T IBC', '{white_liquid} g, ready to weigh', '{opened_days} days at {opened_temp} °C or below', '<a href="{liquid_egg_white_href}">Plant-based alternative to liquid egg white</a>'],
  ['Powder, 30 g to 3 kg pouches', '{white_powder} g plus {white_water} ml of water', 'Does not spoil, kept dry and closed', '<a href="{egg_white_powder_href}">Plant-based alternative to egg white powder</a>'],
])}
<p>If what you are replacing is egg white specifically, the <a href="{egg_white_href}">egg white page</a> sets out the equivalence pack by pack. If you are buying for a kitchen, a bar or a line, the <a href="{professional_href}">professionals section</a> sorts the formats by activity.</p>`,
      },
      {
        id: 'labels',
        title: 'What the product is, and what the label says',
        html: `<p>VERY AQUAFABA is the liquid from cooking chickpeas, filtered, refined and standardized for professional use, neutral in taste and clean label, as described on the <a href="{products_href}">Products page</a>. The same page lists what is on the pack: plant-based, gluten free, and a Nutri-Score A on the liquid.</p>
<p>The pack states that it replaces egg white functionality, which is the claim these pages work from: the foam, the emulsion and the binding described above, each demonstrated in a recipe of the site. Anything that depends on the fat of a yolk takes the oil correction. For the technical sheet of a format, use the enquiry form on this page.</p>`,
      },
    ],
    faq: [
      { q: 'What is a vegan egg replacer made of here?', a: 'Chickpeas and water. VERY AQUAFABA is the liquid from cooking chickpeas, filtered, refined and standardized so that every batch behaves the same, as the [Products page]({products_href}) describes.' },
      { q: 'How much aquafaba equals one egg?', a: '{egg_liquid} g of aquafaba per whole egg, {white_liquid} g per egg white, and {yolk_liquid} g plus {yolk_oil} g of oil per yolk. Weigh it rather than measuring it in spoons.' },
      { q: 'Which function does it replace best?', a: 'All three of the table above, each in a documented recipe: foaming in meringue, macarons, mousse and cocktails, emulsifying in mayonnaise, binding and moisture in baking.' },
      { q: 'Do I need to change anything else in the recipe?', a: 'Only the liquids, and only when whole eggs go out: bring the other liquids down by {reduce_liquids} percent, because aquafaba is about {water_aquafaba_pct} percent water against about {water_egg_pct} percent for an egg.' },
      { q: 'Is the powder the same thing as the liquid?', a: 'Yes, dried. {white_powder} g of powder plus {white_water} ml of water gives {white_total} g of aquafaba, the same mass as the liquid, and replaces one egg white.' },
    ],
    links: [
      { href: '{egg_white_href}', label: 'Plant-based alternative to egg white' },
      { href: '{liquid_egg_white_href}', label: 'Plant-based alternative to liquid egg white' },
      { href: '{egg_white_powder_href}', label: 'Plant-based alternative to egg white powder' },
      { href: '{ratio_href}', label: 'How much aquafaba equals one egg' },
      { href: '{professional_href}', label: 'Aquafaba for professionals' },
    ],
  },

  'egg-white': {
    title: 'Plant-Based Alternative to Egg White: {white_liquid} g per Egg White - VERY AQUAFABA',
    h1: 'A plant-based alternative to egg white: {white_liquid} g of aquafaba per egg white',
    crumb: 'Egg white',
    enquiryLabel: 'Egg white alternative',
    description: 'A vegan egg white substitute counted per egg white: {white_liquid} g of VERY AQUAFABA liquid or {white_powder} g of powder replaces one egg white, with the batches each pack gives and the recipes where it is documented.',
    lead: 'One egg white is replaced by {white_liquid} g of VERY AQUAFABA liquid, or by {white_powder} g of powder made up with {white_water} ml of water. That single equivalence is what makes a recipe counted in egg whites easy to convert: a 1 L Tetrapak stands in for {liquid_1l_whites} egg whites and a 200 g pouch for {powder_200g_whites}. This page sets out the equivalence pack by pack, what the foam does in the recipes of the site, and what the whisk needs from you.',
    figures: true,
    sections: [
      {
        id: 'equivalence',
        title: 'The equivalence, pack by pack',
        html: `<p>Every pack is described by the number of egg whites it stands in for, because that is how a recipe counts them.</p>
${grid(['Pack', 'Egg whites', 'What that is in practice'], [
  ['1 L Tetrapak, liquid', '{liquid_1l_whites}', '{meringue_batches_1l} batches of meringue or {macarons_batches_1l} of macarons'],
  ['10 L bag-in-box, liquid', '{bib_10l_whites}', 'A production kitchen drawing by the kilo each shift'],
  ['1 T IBC, liquid', '{ibc_1t_whites}', 'A line dosing continuously'],
  ['30 g pouch, powder', '{powder_30g_whites}', 'A first trial batch'],
  ['200 g pouch, powder', '{powder_200g_whites}', '{meringue_batches_200g} batches of meringue'],
  ['3 kg pouch, powder', '{powder_3kg_whites}', 'A dry premix or a professional kitchen'],
])}
<p>The site's <a href="{ratio_href}">egg ratio page</a> carries the whole conversion, whole eggs and yolks included; this page stays on the egg white.</p>`,
      },
      {
        id: 'does',
        title: 'What it does where an egg white was used',
        html: `<p>Egg white is used for one thing above all: a foam that holds air and carries sugar. Aquafaba makes that foam with no egg in the kitchen, and the recipes of the site show it at four different loads.</p>
<ul>
<li><a href="{meringue_href}">Meringue</a>: {meringue_dose} g, which is {meringue_eggs} egg whites, whipped with {meringue_sugar} g of sugar and dried at {meringue_bake} °C for about {meringue_yield} meringues.</li>
<li><a href="{macarons_href}">Macarons</a>: {macarons_dose} g, {macarons_eggs} egg whites, for about {macarons_yield} shells.</li>
<li><a href="{chocolate_mousse_href}">Chocolate mousse</a>: {chocolate_mousse_dose} g, {chocolate_mousse_eggs} egg whites, folded into chocolate at {chocolate_mousse_fold_temp} °C.</li>
<li><a href="{cocktails_href}">Sours behind the bar</a>: {cocktails_dose} g per drink, dry shaken for {cocktails_dry_shake} seconds.</li>
</ul>
<p>Each guide carries its own <a href="{meringue_calc_href}">quantity calculator</a> and its process sheet, so a batch converts without arithmetic.</p>`,
      },
      {
        id: 'handling',
        title: 'What the whisk asks for',
        html: `<p>The foam is a plain protein foam, with no fat in the recipe, and it behaves accordingly. Three points cover almost every fault, and they are the same ones the guides print.</p>
<ul>
<li>Cold. Aquafaba goes into the bowl at {meringue_chill} °C; made-up powder is chilled to the same temperature. Warm aquafaba climbs slowly and gives a weaker foam.</li>
<li>Clean. A film of grease on the bowl or the whisk holds the volume short, so both are wiped before the aquafaba goes in.</li>
<li>Sugar last. It goes in once the foam holds soft peaks, one spoonful at a time, or it weeps in storage.</li>
</ul>
<p>Whipping time is in minutes, not seconds: {meringue_whip} minutes on high speed for a meringue batch. Where the recipe asks for a stabiliser, cream of tartar or citric acid goes in at soft peaks, not at the start.</p>`,
      },
      {
        id: 'choose',
        title: 'Liquid or powder for the same egg white',
        html: `<p>The equivalence does not change with the format, so the choice is about the pack, not the recipe. Opened liquid is kept at {opened_temp} °C or below and used within {opened_days} days; opened powder does not spoil while it stays dry and closed. Sealed, both keep at least {unopened_months} months at room temperature.</p>
<p>A kitchen that whips most days empties an opened litre in time and takes the <a href="{liquid_egg_white_href}">liquid</a>. One that whips now and then, or has no chilled space to spare, takes the <a href="{egg_white_powder_href}">powder</a> and makes up what the batch needs. The <a href="{professional_href}">professionals section</a> works the same question through by activity.</p>`,
      },
    ],
    faq: [
      { q: 'How many grams of aquafaba replace one egg white?', a: '{white_liquid} g of liquid, or {white_powder} g of powder made up with {white_water} ml of water, which gives {white_total} g of aquafaba.' },
      { q: 'How many egg whites are there in a 1 L pack?', a: '{liquid_1l_whites}. A 10 L bag-in-box stands in for {bib_10l_whites} and a 1 T IBC for {ibc_1t_whites}; in powder, a 200 g pouch for {powder_200g_whites}.' },
      { q: 'Does it whip like an egg white?', a: 'It whips into a foam that carries sugar and air, which is what the meringue, macaron, mousse and sour recipes of this site are built on. It wants the same cold bowl and the same grease-free whisk.' },
      { q: 'Can I use it in a recipe that calls for whole eggs?', a: 'Yes, with the whole egg figure instead: {egg_liquid} g per egg, plus the liquid correction of {reduce_liquids} percent. The [baking guide]({baking_href}) sets it out.' },
      { q: 'Does it need a stabiliser?', a: 'It is optional. Where a recipe uses one, cream of tartar or citric acid goes in while the mixer runs, once the foam holds soft peaks.' },
    ],
    links: [
      { href: '{meringue_href}', label: 'Meringue: liquid or powder?' },
      { href: '{macarons_href}', label: 'Macarons: liquid or powder?' },
      { href: '{ratio_href}', label: 'How much aquafaba equals one egg' },
      { href: '{liquid_egg_white_href}', label: 'Plant-based alternative to liquid egg white' },
      { href: '{egg_white_powder_href}', label: 'Plant-based alternative to egg white powder' },
    ],
  },

  'liquid-egg-white': {
    title: 'Plant-Based Alternative to Liquid Egg White: Formats and Shelf Life - VERY AQUAFABA',
    h1: 'A plant-based alternative to liquid egg white, ready to weigh',
    crumb: 'Liquid egg white',
    enquiryLabel: 'Liquid egg white alternative',
    description: 'VERY AQUAFABA liquid replaces liquid egg white: {white_liquid} g per egg white, packs of 1 L, 10 L and 1 T, at least {unopened_months} months sealed at room temperature and {opened_days} days once opened.',
    lead: 'Liquid egg white is bought to skip the cracking and to dose by weight. VERY AQUAFABA liquid does the same job from chickpeas: {white_liquid} g replaces one egg white, it arrives at a fixed concentration of {viscosity} g/ml and it is poured straight onto the scale. It comes in 1 L, 10 L and 1 T, keeps at least {unopened_months} months sealed at room temperature, and {opened_days} days at {opened_temp} °C or below once opened.',
    figures: true,
    sections: [
      {
        id: 'formats',
        title: 'The liquid formats',
        html: `<p>Three liquid packs, described by the egg whites they replace and by the kitchen that empties them.</p>
${grid(['Pack', 'Egg whites', 'Who empties it'], [
  ['1 L Tetrapak', '{liquid_1l_whites}', 'A pastry section, a bar with sours on the menu, a single site'],
  ['10 L bag-in-box', '{bib_10l_whites}', 'A central kitchen drawing by the kilo each shift'],
  ['1 T IBC', '{ibc_1t_whites}', 'A line dosing continuously'],
])}
<p>Unlike a carton of liquid egg white, the pack is stored in the dry store until it is opened: sealed, it keeps at least {unopened_months} months at room temperature, so the cold chain starts the day you open it.</p>`,
      },
      {
        id: 'storage',
        title: 'Before opening, after opening, frozen',
        html: `<p>The shelf life is the part that decides most kitchens, so here it is in full.</p>
<ul>
<li>Before opening: at least {unopened_months} months at room temperature, both formats of the range.</li>
<li>After opening: refrigerated at {opened_temp} °C or below, used within {opened_days} days.</li>
<li>Frozen: portions of {portion} g at {freeze_temp} °C for up to {freeze_months} months, thawed overnight in the fridge and stirred until even. Never refrozen.</li>
</ul>
<p>The site's <a href="{storage_href}">storage and freezing guide</a> carries the handling in detail. If an opened pack would outlast its {opened_days} days in your kitchen, the <a href="{egg_white_powder_href}">powder</a> answers the same recipe without a date attached.</p>`,
      },
      {
        id: 'use',
        title: 'Using it where liquid egg white was used',
        html: `<p>It is poured and weighed, with nothing to make up. Out of the fridge it is already at the temperature the foam wants, {meringue_chill} °C, which is why a kitchen that whips most days keeps the liquid: it goes from the chiller into the bowl.</p>
<ul>
<li>Foams: {meringue_dose} g for a meringue batch of about {meringue_yield}, {macarons_dose} g for about {macarons_yield} macaron shells.</li>
<li>Emulsions: {mayonnaise_dose} g takes {mayonnaise_oil} g of oil, blended at {mayonnaise_chill} °C.</li>
<li>Behind the bar: {cocktails_dose} g per sour, weighed or jiggered rather than free poured.</li>
<li>On a line: held at {viscosity} g/ml so the foam behaves the same on every run.</li>
</ul>
<p>The <a href="{index_href}">application guides</a> carry the method for each, with a calculator that scales the batch.</p>`,
      },
      {
        id: 'who',
        title: 'Which format for which kitchen',
        html: `<p>The 1 L Tetrapak suits a single site that opens a pack and finishes it inside the week: a pastry section, a bar, a deli counter. The 10 L bag-in-box suits a central kitchen whose draw is continuous, and the 1 T IBC a manufacturing line, where the opened-pack clock never matters because the pack keeps turning over.</p>
<p>Each of those is worked through on its own page: <a href="{pastry_href}">pastry and bakery</a>, <a href="{bars_href}">bars and cocktails</a>, <a href="{foodservice_href}">foodservice and central kitchens</a> and <a href="{industry_href}">food manufacturing</a>. For volumes and the technical sheet, use the enquiry form on this page.</p>`,
      },
    ],
    faq: [
      { q: 'How much liquid replaces one egg white?', a: '{white_liquid} g, weighed. A 1 L Tetrapak therefore stands in for {liquid_1l_whites} egg whites, a 10 L bag-in-box for {bib_10l_whites} and a 1 T IBC for {ibc_1t_whites}.' },
      { q: 'Does it need refrigerating before it is opened?', a: 'No. Sealed, it keeps at least {unopened_months} months at room temperature. Once opened it goes to {opened_temp} °C or below and is used within {opened_days} days.' },
      { q: 'Can it be frozen?', a: 'Yes, in portions of {portion} g at {freeze_temp} °C for up to {freeze_months} months. Thaw overnight in the fridge and stir until even before whipping; it is never refrozen.' },
      { q: 'Where can I buy liquid aquafaba?', a: 'The formats and the current channels are on the [Products page]({products_href}). For professional volumes, describe them through the enquiry form and the technical sheet comes back with the answer.' },
      { q: 'Is the concentration fixed?', a: 'Yes, {viscosity} g/ml. It is filtered, refined and standardized, which is what keeps a foam or an emulsion the same from one run to the next.' },
    ],
    links: [
      { href: '{egg_white_href}', label: 'Plant-based alternative to egg white' },
      { href: '{egg_white_powder_href}', label: 'Plant-based alternative to egg white powder' },
      { href: '{storage_href}', label: 'How to store and freeze aquafaba' },
      { href: '{pastry_href}', label: 'Pastry and bakery' },
      { href: '{bars_href}', label: 'Bars and cocktails' },
    ],
  },

  'egg-white-powder': {
    title: 'Plant-Based Alternative to Egg White Powder, for Cooking - VERY AQUAFABA',
    h1: 'A plant-based alternative to egg white powder, made up with water',
    crumb: 'Egg white powder',
    enquiryLabel: 'Egg white powder alternative',
    description: 'VERY AQUAFABA powder replaces egg white powder in the kitchen: {white_powder} g plus {white_water} ml of water per egg white, pouches of 30 g, 200 g and 3 kg, and no date once the pouch is opened.',
    lead: 'Egg white powder is kept for what it does to a store cupboard: it waits. VERY AQUAFABA powder does the same from chickpeas, for cooking and baking rather than as a protein supplement: {white_powder} g made up with {white_water} ml of water replaces one egg white, a 200 g pouch stands in for {powder_200g_whites}, and an opened pouch does not spoil while it stays dry and closed.',
    figures: true,
    sections: [
      {
        id: 'packs',
        title: 'The pouches and what they replace',
        html: `<p>Three pouches, described by the egg whites they stand in for.</p>
${grid(['Pouch', 'Egg whites', 'Made up, that is'], [
  ['30 g', '{powder_30g_whites}', 'A trial batch, or a bar testing a sour'],
  ['200 g', '{powder_200g_whites}', '{meringue_batches_200g} batches of meringue or {cocktails_batches_200g} sours'],
  ['3 kg', '{powder_3kg_whites}', 'A professional kitchen, or a dry premix on a line'],
])}
<p>Sealed, a pouch keeps at least {unopened_months} months at room temperature. Opened, it does not spoil: it stays dry and closed on a shelf and waits for the next batch, which is the reason kitchens and bars with an uneven rotation keep it rather than a liquid pack with {opened_days} days on it.</p>`,
      },
      {
        id: 'makeup',
        title: 'Making it up: the rule per egg white',
        html: `<p>The proportion is counted per egg white, not per pouch: {white_powder} g of powder and {white_water} ml of water give {white_total} g of aquafaba, which is used exactly as the same mass of liquid would be.</p>
<ul>
<li>A meringue batch, {meringue_eggs} egg whites: {meringue_powder} g of powder and {meringue_water} ml of water.</li>
<li>A mayonnaise batch: {mayonnaise_powder} g and {mayonnaise_water} ml.</li>
<li>One sour: {cocktails_powder} g and {cocktails_water} ml.</li>
</ul>
<p>The <a href="{reconstitution_href}">reconstitution page</a> carries the table from 1 to 20 egg whites. Made up, it is chilled to the temperature the recipe asks for, {meringue_chill} °C for a meringue, because warm aquafaba climbs more slowly and gives a weaker foam.</p>`,
      },
      {
        id: 'when',
        title: 'When the powder is the right choice',
        html: `<p>It is the same ingredient as the liquid, so the reasons to prefer it are about the pack and the room, not the recipe.</p>
<ul>
<li>Uneven rotation: the opened pouch waits with no date attached, while an opened liquid pack has {opened_days} days.</li>
<li>No chilled space: the pouch lives in the dry store, and the chilled shelves stay free for what you just made.</li>
<li>Travel: events and outside catering carry it dry, with no cold chain.</li>
<li>Dry premixes: a producer blending a dry sauce or bake base puts the powder into the premix as it is.</li>
</ul>
<p>For whipped recipes it is not a dry-mix shortcut: the aquafaba is whipped on its own first, so it is made up with water before it meets the almond flour or the sugar.</p>`,
      },
      {
        id: 'kitchen',
        title: 'A culinary ingredient, not a protein supplement',
        html: `<p>This powder is made for foams, emulsions and baking: the meringue that holds its sugar, the mayonnaise that takes its oil, the sponge that binds. It is chickpea aquafaba, dried, and it is dosed by the egg white the recipe replaces, not by a scoop.</p>
<p>The <a href="{products_href}">Products page</a> lists the pouches and what the pack states; the <a href="{index_href}">application guides</a> give the dose per recipe in both formats, and the <a href="{professional_href}">professionals section</a> sorts the formats by activity for a kitchen, a bar or a line.</p>`,
      },
    ],
    faq: [
      { q: 'What is aquafaba powder?', a: 'VERY AQUAFABA in dried form. {white_powder} g of powder plus {white_water} ml of water gives {white_total} g of aquafaba, equivalent to the same mass of the liquid, and replaces one egg white.' },
      { q: 'How many egg whites are there in a 200 g pouch?', a: '{powder_200g_whites}. The 30 g pouch stands in for {powder_30g_whites} and the 3 kg pouch for {powder_3kg_whites}.' },
      { q: 'How long does an opened pouch last?', a: 'It does not spoil while it stays dry and closed, which is why it suits a kitchen or a bar whose rotation is uneven. Sealed, it keeps at least {unopened_months} months at room temperature.' },
      { q: 'Can the powder go straight into a dry mix?', a: 'In a dry premix, yes. In a whipped recipe, no: the aquafaba is whipped on its own first, so make it up with water and chill it before it meets the other dry ingredients.' },
      { q: 'Is it a protein supplement?', a: 'No. It is a culinary ingredient for foams, emulsions and baking, dosed by the egg white the recipe replaces, as the [application guides]({index_href}) set out.' },
    ],
    links: [
      { href: '{reconstitution_href}', label: 'Powder reconstitution: the rule per egg white' },
      { href: '{egg_white_href}', label: 'Plant-based alternative to egg white' },
      { href: '{liquid_egg_white_href}', label: 'Plant-based alternative to liquid egg white' },
      { href: '{meringue_href}', label: 'Meringue: liquid or powder?' },
      { href: '{bars_href}', label: 'Bars and cocktails' },
    ],
  },
};
