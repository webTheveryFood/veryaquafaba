// Professionals by audience, English (set-2 B0 to B4). 'index' is the pillar page, the
// other keys the audience pages (routes.js TOPIC_SLUGS.professional). Every figure is a
// {token} filled from facts.json by data/resources/topics.js; no em/en dash. The wording
// follows the guides: the format is decided by rotation against the opened pack, cold
// chain, storage space and dosing, never by batch size alone.
const grid = (heads, rows) => `<table class="va-guide-grid">
<thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
<tbody>
${rows.map((r) => `<tr>${r.map((c, i) => `<td data-label="${heads[i]}">${c}</td>`).join('')}</tr>`).join('\n')}
</tbody>
</table>`;
const PICK = ['Your kitchen', 'Pick', 'Why'];

export default {
  index: {
    title: 'Aquafaba for Professionals: Pastry, Bars, Foodservice and Industry - VERY AQUAFABA',
    h1: 'Aquafaba for professionals: which format for which kitchen',
    crumb: 'Professionals',
    enquiryLabel: 'Professionals',
    description: 'VERY AQUAFABA in professional kitchens, behind the bar, in central kitchens and on industrial lines: where each activity starts, the full range with egg white equivalences, and the enquiry form for volumes.',
    lead: 'VERY AQUAFABA replaces egg white in pastry sections, behind the bar, in central kitchens and on industrial lines. One rule holds everywhere: {white_liquid} g of liquid or {white_powder} g of powder replaces one egg white. What changes from one activity to the next is the format, the pack and the rhythm of use. This page sends each activity to its own page, sets out the full range and opens the enquiry form for professional volumes.',
    figures: true,
    sections: [
      {
        id: 'start',
        title: 'Where each activity starts',
        html: `<p>Four activities, four ways of working, one product. Each page below is written for the way that kitchen runs: what it makes with aquafaba, how fast an opened pack is used up, and which pack fits.</p>
${grid(['Activity', 'Start here', 'What it covers'], [
  ['Pastry section, bakery, patisserie', '<a href="{pastry_href}">Pastry and bakery</a>', 'Meringue, macarons, mousse and egg-free baking; the format by oven schedule; batches by egg white count'],
  ['Cocktail bar, hotel bar, events', '<a href="{bars_href}">Bars and cocktails</a>', 'The sour, the dose per drink, powder for a few sours a week and liquid for every service'],
  ['Central kitchen, canteen, multi-outlet restaurant', '<a href="{foodservice_href}">Foodservice and central kitchens</a>', 'Mayonnaise, sauces and desserts at scale; cold chain and space; the 10 L bag-in-box'],
  ['Food manufacturer, industrial line', '<a href="{industry_href}">Food manufacturing</a>', 'The 1 T IBC and the bag-in-box for continuous lines; reformulating by weight; how to request specifications'],
])}
<p>If your activity sits between two of them, read both: a hotel runs a pastry section and a bar on the same product, and a central kitchen with a patisserie line reads like a bakery on the days it pipes meringue.</p>`,
      },
      {
        id: 'range',
        title: 'The range, with egg white equivalences',
        html: `<p>Every pack is described by the number of egg whites it replaces, because that is how a recipe is counted. The liquid is ready to use; the powder is made up with water at {white_powder} g + {white_water} ml per egg white, which gives {white_total} g of aquafaba.</p>
<ul>
<li>Liquid: 1 L Tetrapak = {liquid_1l_whites} egg whites. 10 L bag-in-box = {bib_10l_whites}. 1 T IBC = {ibc_1t_whites}.</li>
<li>Powder: 30 g pouch = {powder_30g_whites} egg whites. 200 g pouch = {powder_200g_whites}. 3 kg pouch = {powder_3kg_whites}.</li>
</ul>
<p>Sealed, both formats keep at least {unopened_months} months at room temperature. Opened liquid lives in the fridge at {opened_temp} °C or below and is used within {opened_days} days. Opened powder does not spoil, it only needs to stay dry and closed. The packs and the storage rows are set out in the key figures below; the technical sheet is requested through the form at the foot of this page.</p>`,
      },
      {
        id: 'decide',
        title: 'Liquid or powder? The questions that decide',
        html: `<p>The choice is not about batch size. It is about how fast an opened pack is used up, whether a chilled slot is available, how much dry store there is, and how the kitchen prefers to dose. The same questions come back on every audience page, answered for that kitchen.</p>
${grid(['Question', 'Points to liquid', 'Points to powder'], [
  ['Is an opened pack used up inside {opened_days} days?', 'Yes: the pack turns over in time', 'No: the pouch waits for the next batch with no date attached'],
  ['Is there chilled space for an opened pack?', 'Yes: it lives in the fridge, already at working temperature', 'No: the pouch lives on a dry shelf'],
  ['Is the work continuous?', 'Yes: 10 L bag-in-box or 1 T IBC, continuous use and no reconstitution step', 'No: make up what the batch needs'],
  ['Does the product travel or go to events?', 'Only with a cold chain', 'Yes: it travels dry'],
  ['Does the recipe go into a dry premix?', 'No', 'Yes: it goes into the premix dry'],
])}
<p>Busy weekends and quiet weekdays? Both: liquid for the rush, powder for the rest. The conversion is fixed, so a recipe runs on either.</p>`,
      },
      {
        id: 'tools',
        title: 'The guides and the tools behind them',
        html: `<p>Six application guides answer liquid or powder for meringue, chocolate mousse, mayonnaise, baking, cocktails and macarons, each with its method, its troubleshooting table and its key figures. Under each guide sit two tools: a quantity calculator that scales the recipe by batches or pieces, in liquid and in powder with its water, and a printable process sheet with the reference value of each step and the checks to run when a batch goes wrong.</p>
<p>The <a href="{reconstitution_href}">powder reconstitution page</a> carries the rule per egg white and a table from 1 to 20 egg whites, for any recipe counted in whites. The <a href="{index_href}">applications index</a> lists every guide and tool.</p>`,
      },
    ],
    faq: [
      { q: 'Is the dose the same for the liquid and the powder?', a: 'Yes, counted in egg whites. {white_liquid} g of liquid replaces one egg white, and so does {white_powder} g of powder made up with {white_water} ml of water, which gives {white_total} g of aquafaba. A batch is dosed by its egg white count in either format.' },
      { q: 'Which formats exist for high volumes?', a: 'The 10 L bag-in-box replaces {bib_10l_whites} egg whites and the 1 T IBC {ibc_1t_whites}; both are liquid, for continuous use with no reconstitution step. In powder, the 3 kg pouch replaces {powder_3kg_whites} egg whites. Describe your volumes through the [enquiry form]({contact_href}) to receive the technical sheet.' },
      { q: 'How long does an opened pack last?', a: 'Opened liquid is kept at {opened_temp} °C or below and used within {opened_days} days. Opened powder does not spoil while it stays dry and closed. Sealed, both keep at least {unopened_months} months at room temperature.' },
      { q: 'Can a kitchen run liquid and powder side by side?', a: 'Yes. Liquid for the days the pack turns over, powder for the irregular orders. The conversion is fixed, so the recipe does not change from one format to the other.' },
      { q: 'How do we get the technical sheet?', a: 'Through the form at the foot of this page: it asks for the company, the country, the application and the estimated monthly volume, and the technical sheet is sent back with the answer.' },
    ],
    links: [
      { href: '{pastry_href}', label: 'Pastry and bakery' },
      { href: '{bars_href}', label: 'Bars and cocktails' },
      { href: '{foodservice_href}', label: 'Foodservice and central kitchens' },
      { href: '{industry_href}', label: 'Food manufacturing' },
      { href: '{reconstitution_href}', label: 'Powder reconstitution: the rule per egg white' },
    ],
  },

  pastry: {
    title: 'Aquafaba for Pastry and Bakery: Liquid or Powder by Rotation - VERY AQUAFABA',
    h1: 'Aquafaba for pastry and bakery: liquid or powder by oven schedule',
    crumb: 'Pastry and bakery',
    enquiryLabel: 'Pastry and bakery',
    description: 'VERY AQUAFABA in the pastry section and the bakery: meringue, macarons, chocolate mousse and egg-free baking, the format by oven schedule, batches counted in egg whites, and the checks before the mixer turns on.',
    lead: 'In a pastry section the aquafaba goes into meringue, macaron shells, chocolate mousse and egg-free sponges. Which format suits you is decided by how often you fill the oven and how fast an opened pack is used up: opened liquid keeps {opened_days} days at {opened_temp} °C or below, opened powder does not spoil. This page counts each batch in egg whites, sets the format against your schedule and lists the three checks that decide most faults before the mixer turns on.',
    sections: [
      {
        id: 'makes',
        title: 'What a pastry kitchen makes with it',
        html: `<p>Each application has its own guide, calculator and process sheet. The batch figures below come from the VERY AQUAFABA recipes; the pack columns say how many batches one pack gives.</p>
${grid(['Application', 'Per batch', 'From a 1 L Tetrapak', 'From a 200 g pouch'], [
  ['<a href="{meringue_href}">Meringue</a>', '{meringue_dose} g, {meringue_eggs} egg whites, about {meringue_yield} meringues', '{meringue_batches_1l} batches', '{meringue_batches_200g} batches'],
  ['<a href="{macarons_href}">Macarons</a>', '{macarons_dose} g, {macarons_eggs} egg whites, about {macarons_yield} macarons', '{macarons_batches_1l} batches', '{macarons_batches_200g} batches'],
  ['<a href="{chocolate_mousse_href}">Chocolate mousse</a>', '{chocolate_mousse_dose} g, {chocolate_mousse_eggs} egg whites, about {chocolate_mousse_yield} portions', '{chocolate_mousse_batches_1l} batches', '{chocolate_mousse_batches_200g} batches'],
  ['<a href="{baking_href}">Baking</a>', '{egg_liquid} g per whole egg, {white_liquid} g per egg white', '{eggs_1l} whole eggs or {whites_1l} egg whites', '{whites_200g} egg whites'],
])}
<p>For a yolk, the site rule is {yolk_liquid} g of aquafaba plus {yolk_oil} g of oil. The <a href="{baking_calc_href}">baking calculator</a> converts the eggs, whites and yolks of any recipe into liquid, or into powder with its water.</p>`,
      },
      {
        id: 'decide',
        title: 'Liquid or powder? Start with the oven schedule',
        html: `<p>Sealed, both formats keep at least {unopened_months} months at room temperature. The choice starts the day you open the pack. A 1 L Tetrapak makes {meringue_batches_1l} batches of meringue or {macarons_batches_1l} of macarons; if you will not bake that many in the {opened_days} days after opening it, the powder is the better choice, because an opened pouch waits for the next tray with no date attached.</p>
${grid(PICK, [
  ['Pastry section piping meringue or macarons most days', 'Liquid, 1 L Tetrapak', 'The pack is empty well inside {opened_days} days'],
  ['Bakery with an egg-free line every day', 'Liquid, 1 L Tetrapak', 'Poured from the fridge already at whipping temperature'],
  ['Shop baking to order, or a seasonal meringue dessert', 'Powder, 200 g pouch', 'It covers the long gaps between runs'],
  ['Chiller committed to creams, ganache and maturing macarons', 'Powder', 'The pouch lives on a dry rack, outside the cold store'],
  ['Daily line plus irregular orders', 'Both', 'Liquid for the line, powder for the orders; the conversion is fixed'],
  ['Plant-based patisserie line piping continuously', 'Liquid, 10 L bag-in-box or 1 T IBC', 'Continuous use and no reconstitution step'],
])}
<p>Prefer liquid but bake irregularly? Freeze it in portions of {portion} g at {freeze_temp} °C for up to {freeze_months} months, thaw overnight in the fridge and stir until even before whipping. It is never refrozen.</p>`,
      },
      {
        id: 'whites',
        title: 'Batches counted in egg whites',
        html: `<p>The powder is dosed per batch by the number of egg whites the recipe replaces: {white_powder} g of powder and {white_water} ml of water per egg white. The made-up aquafaba is then chilled to {meringue_chill} °C before whipping, like the liquid, because warm aquafaba climbs slowly and gives a weaker foam.</p>
<ul>
<li>Meringue, {meringue_eggs} egg whites: {meringue_powder} g of powder + {meringue_water} ml of water.</li>
<li>Macarons, {macarons_eggs} egg whites: {macarons_powder} g of powder + {macarons_water} ml of water.</li>
<li>Chocolate mousse, {chocolate_mousse_eggs} egg whites: {chocolate_mousse_powder} g of powder + {chocolate_mousse_water} ml of water.</li>
</ul>
<p>The powder is not a dry-mix shortcut: the aquafaba is whipped on its own first, so make it up with water before it goes anywhere near the almond flour or the sugar. The <a href="{reconstitution_href}">reconstitution page</a> carries the table from 1 to 20 egg whites; each <a href="{meringue_calc_href}">quantity calculator</a> scales the whole recipe by batches or by pieces.</p>`,
      },
      {
        id: 'checks',
        title: 'Before the mixer turns on: three checks',
        html: `<p>Most meringue and macaron faults are decided before whipping. Three checks cover them, and they are the first rows of every process sheet.</p>
<ul>
<li>Temperature. The liquid comes out of the fridge at {meringue_chill} °C and goes straight into the bowl; made-up powder is chilled to the same temperature.</li>
<li>Grease. Aquafaba foam is a plain protein foam with no fat in the recipe, so a film of grease on the bowl or the whisk holds the volume short. Wipe both before the aquafaba goes in.</li>
<li>Sugar. It goes in only once the foam holds soft peaks, one tablespoon at a time at medium speed; added faster than it can dissolve, it weeps in storage.</li>
</ul>
<p>For sponges and cakes, the site's <a href="{ratio_href}">egg ratio page</a> adds the water rule: an egg is about {water_egg_pct} percent water and aquafaba {water_aquafaba_pct} percent, so other liquids come down by {reduce_liquids} percent when whole eggs are replaced. The <a href="{meringue_process_href}">process sheets</a> print the reference value of each step with a blank column for your own batch.</p>`,
      },
    ],
    faq: [
      { q: 'Can one pack serve meringue and macarons on the same day?', a: 'Yes. Both recipes count their batch in egg whites and use the same aquafaba, chilled to {meringue_chill} °C. A 1 L Tetrapak gives {meringue_batches_1l} batches of meringue or {macarons_batches_1l} of macarons, or any mix of the two.' },
      { q: 'How many meringue batches does a 10 L bag-in-box give?', a: '{meringue_batches_10l} batches of {meringue_dose} g, or {macarons_batches_10l} batches of macarons. The bag-in-box replaces {bib_10l_whites} egg whites and suits a line that pipes every working day.' },
      { q: 'Does the powder go straight into the almond flour?', a: 'No. The aquafaba is whipped on its own first, so the powder is made up with water, chilled, and whipped before the almond flour and the icing sugar are folded in.' },
      { q: 'How do we replace whole eggs in a sponge?', a: '{egg_liquid} g of aquafaba per whole egg and {white_liquid} g per egg white, weighed, never measured by volume. Other liquids come down by {reduce_liquids} percent to balance the water, and the [baking guide]({baking_href}) sets out the rest.' },
      { q: 'Can we freeze the liquid when the meringue work is irregular?', a: 'Yes. Portion it at {portion} g, freeze at {freeze_temp} °C for up to {freeze_months} months, thaw overnight in the fridge and stir until even before whipping. Thawed aquafaba is never refrozen. The powder removes that workflow altogether.' },
    ],
    links: [
      { href: '{meringue_href}', label: 'Meringue: liquid or powder?' },
      { href: '{macarons_href}', label: 'Macarons: liquid or powder?' },
      { href: '{chocolate_mousse_href}', label: 'Chocolate mousse: liquid or powder?' },
      { href: '{baking_href}', label: 'Baking: liquid or powder?' },
      { href: '{reconstitution_href}', label: 'Powder reconstitution: the rule per egg white' },
    ],
  },

  bars: {
    title: 'Aquafaba for Bars and Cocktails: Powder or Liquid by Rotation - VERY AQUAFABA',
    h1: 'Aquafaba for bars and cocktails: powder for a few sours a week, liquid for every service',
    crumb: 'Bars and cocktails',
    enquiryLabel: 'Bars and cocktails',
    description: 'VERY AQUAFABA behind the bar: {cocktails_dose} g per sour and two shakes, the format by how many sours you pour, the powder made up per drink, and what to check when the foam falls flat.',
    lead: 'Aquafaba gives a sour a stable, silky foam head with no raw egg white behind the bar: {cocktails_dose} g per drink and two shakes. A 1 L Tetrapak pours {cocktails_batches_1l} sours and a 200 g pouch of powder {cocktails_batches_200g}. Which one suits your bar is decided by how many sours you pour between one opening and the next, because opened liquid keeps {opened_days} days in the fridge and opened powder does not spoil.',
    sections: [
      {
        id: 'sour',
        title: 'The sour, the dose and the shake',
        html: `<p>Nothing changes in the recipe except one ingredient: aquafaba replaces the egg white. The VERY AQUAFABA whiskey sour builds without ice with {cocktails_whiskey} ml of whiskey, {cocktails_lemon_juice} ml of fresh lemon juice, {cocktails_syrup} ml of simple syrup and {cocktails_dose} g of chilled aquafaba.</p>
<ol>
<li>Dry shake hard for {cocktails_dry_shake} seconds. This is where the foam is made.</li>
<li>Add ice and shake another {cocktails_wet_shake} seconds to chill and dilute.</li>
<li>Fine strain into a chilled coupe. The head is firm enough to carry a few drops of bitters.</li>
</ol>
<p>Busy service? Pre-batch the whiskey, lemon and syrup. The aquafaba is added at the shake, never in the batch, and it is weighed or jiggered at {cocktails_dose} g every time: free pouring is what makes the head uneven from drink to drink. The <a href="{cocktails_href}">cocktails guide</a> carries the full method and its troubleshooting table.</p>`,
      },
      {
        id: 'decide',
        title: 'Liquid or powder? Start with how many sours you pour',
        html: `<p>Sealed, both formats sit on a shelf at room temperature for at least {unopened_months} months. The choice starts the day you open the pack: opened liquid lives in the fridge at {opened_temp} °C or below and is used within {opened_days} days, opened powder only needs to stay dry and closed. Bartenders without a steady sour rotation prefer the powder for exactly that reason.</p>
${grid(['Your bar', 'Pick', 'Why'], [
  ['Cocktail bar with sours on the menu, ordered every service', 'Liquid, 1 L Tetrapak', '{cocktails_batches_1l} drinks per pack, finished well inside {opened_days} days'],
  ['Neighbourhood bar pouring a few sours a week', 'Powder, 200 g pouch', 'No clock once opened; make up what tonight needs'],
  ['Bar with no fridge space to spare', 'Powder', 'The pouch lives on a dry shelf behind the bar'],
  ['Events, outside catering, pop-up bars', 'Powder', 'It travels dry, with no cold chain'],
  ['Busy weekends, quiet weekdays', 'Both', 'Liquid for the rush, powder for the rest'],
  ['Hotel group, bottled sour bases, beverage line', 'Liquid, 10 L bag-in-box or 1 T IBC', 'Continuous use and no reconstitution step'],
])}
<p>Prefer liquid but cannot finish a pack in time? Freeze it in portions of {portion} g, thaw in the fridge and stir before use.</p>`,
      },
      {
        id: 'powder',
        title: 'Powder behind the bar: make up what tonight needs',
        html: `<p>For one drink, {cocktails_powder} g of powder and {cocktails_water} ml of water. Counted by the egg white, {white_powder} g of powder and {white_water} ml of water give {white_total} g of aquafaba, a little more than one sour. Make it up before service and chill it: cold aquafaba foams faster and holds longer, while aquafaba at room temperature gives a slow, slack foam.</p>
<p>The <a href="{reconstitution_href}">reconstitution page</a> carries the table from 1 to 20 egg whites for a whole service; the <a href="{cocktails_calc_href}">cocktail calculator</a> gives the liquid, the powder and its water for any number of drinks.</p>`,
      },
      {
        id: 'service',
        title: 'During service: what to check when the foam falls flat',
        html: `<p>Five faults cover most flat sours, and each one has a cause at the shake, not in the product.</p>
${grid(['What you see', 'Why', 'Fix'], [
  ['Thin head', 'Ice went in from the start', 'Dry shake first, ice second'],
  ['Slow, slack foam', 'Aquafaba at room temperature', 'Keep it chilled until the shake'],
  ['No height by mid-service', 'Aquafaba was added to the pre-batch', 'Batch the base only, add aquafaba per drink'],
  ['Foam drops before it reaches the guest', 'The drink waited on the pass', 'Shake to order and serve at once'],
  ['Uneven from drink to drink', 'Free pouring', 'Weigh or jigger {cocktails_dose} g every time'],
])}
<p>The <a href="{cocktails_process_href}">process sheet</a> prints these checks with the reference value of each step, for the bar book.</p>`,
      },
    ],
    faq: [
      { q: 'How many sours does a 1 L pack pour?', a: '{cocktails_batches_1l} sours at {cocktails_dose} g each. A 200 g pouch of powder gives {cocktails_batches_200g}, made up drink by drink or for the service.' },
      { q: 'Do we need to change the sour recipe?', a: 'No. One ingredient changes: {cocktails_dose} g of aquafaba replaces the egg white. The whiskey, the lemon, the syrup, the dry shake and the wet shake stay as they are.' },
      { q: 'Can the aquafaba go into the pre-batch?', a: 'No. Batch the whiskey, lemon and syrup, then add the aquafaba at the shake, per drink. Aquafaba in the pre-batch gives no height by mid-service.' },
      { q: 'What if we only pour a few sours a week?', a: 'Take the powder. An opened pouch does not spoil while it stays dry and closed, so you make up what tonight needs and the rest waits. Opened liquid has {opened_days} days in the fridge.' },
      { q: 'Does the foam carry bitters?', a: 'Yes. After the dry shake and the wet shake, fine strained into a chilled coupe, the head is firm enough to carry a few drops of bitters.' },
    ],
    links: [
      { href: '{cocktails_href}', label: 'Cocktails: liquid or powder?' },
      { href: '{cocktails_calc_href}', label: 'Cocktail quantity calculator' },
      { href: '{cocktails_process_href}', label: 'Sour process sheet and checks' },
      { href: '{reconstitution_href}', label: 'Powder reconstitution: the rule per egg white' },
    ],
  },

  foodservice: {
    title: 'Aquafaba for Foodservice and Central Kitchens: Cold Chain, Space, Bag-in-Box - VERY AQUAFABA',
    h1: 'Aquafaba for foodservice and central kitchens: cold chain, space and the 10 L bag-in-box',
    crumb: 'Foodservice and central kitchens',
    enquiryLabel: 'Foodservice and central kitchens',
    description: 'VERY AQUAFABA in central kitchens, canteens and multi-outlet restaurants: mayonnaise, sauces and desserts at scale, the format by cold chain and space, and the 10 L bag-in-box that replaces {bib_10l_whites} egg whites.',
    lead: 'A central kitchen uses aquafaba in mayonnaise and cold sauces, in chocolate mousse and meringue for the dessert line, and in egg-free baking for the outlets. The 10 L bag-in-box replaces {bib_10l_whites} egg whites and is drawn by the kilo each shift; the 1 L Tetrapak serves a single site; the 200 g pouch of powder serves the outlet whose rotation is too low for an opened liquid pack. This page sets the format against cold chain and space, and counts the batches per pack.',
    sections: [
      {
        id: 'uses',
        title: 'Where aquafaba goes in a central kitchen',
        html: `<p>The batch figures are those of the VERY AQUAFABA recipes; the last column counts the batches one 10 L bag-in-box gives.</p>
${grid(['Application', 'Per batch', 'Batches per 10 L bag-in-box'], [
  ['<a href="{mayonnaise_href}">Mayonnaise</a>', '{mayonnaise_dose} g of aquafaba for about {mayonnaise_yield} g of mayo', '{mayonnaise_batches_10l}'],
  ['<a href="{chocolate_mousse_href}">Chocolate mousse</a>', '{chocolate_mousse_dose} g for about {chocolate_mousse_yield} portions', '{chocolate_mousse_batches_10l}'],
  ['<a href="{meringue_href}">Meringue</a>', '{meringue_dose} g for about {meringue_yield} meringues', '{meringue_batches_10l}'],
  ['<a href="{baking_href}">Baking</a>', '{egg_liquid} g per whole egg, {white_liquid} g per egg white', '{eggs_10l} whole eggs'],
])}
<p>A batch of mayonnaise uses very little aquafaba, {mayonnaise_dose} g, so even a 1 L Tetrapak makes {mayonnaise_batches_1l} batches; the question for the sauce station is whether that pack is used up within {opened_days} days of opening, not whether it is big enough.</p>`,
      },
      {
        id: 'decide',
        title: 'Cold chain and space: the questions that decide',
        html: `<p>The finished mayonnaise and the mousse need the fridge either way, so the choice is about the opened pack, not the sauce. Opened liquid is kept at {opened_temp} °C or below and used within {opened_days} days; opened powder does not spoil and never takes a chilled slot.</p>
${grid(['Your operation', 'Pick', 'Why'], [
  ['Central kitchen drawing aquafaba by the kilo each shift', 'Liquid, 10 L bag-in-box or 1 T IBC', 'Continuous use, straight into the high-shear mixer, no reconstitution step'],
  ['Deli or sandwich counter making fresh mayo every service', 'Liquid, 1 L Tetrapak', 'Poured at blending temperature, and the pack turns over in time'],
  ['Restaurant with mayo or mousse on one menu dish', 'Powder, 200 g pouch', 'An opened litre would outlast its {opened_days} days'],
  ['Cold store already full of finished sauce and portions', 'Powder', 'The pouch never takes a chilled slot'],
  ['You want fewer dated items on the sauce station', 'Powder', 'No opened, perishable pack to label, log and inspect'],
  ['Central kitchen where each outlet whips its own', 'Powder on site', 'The pouch survives a quiet week at the outlet'],
])}
<p>Central production plus outlets with uneven rotation? Liquid in the central kitchen, powder at the outlets: the conversion is fixed, so the same recipe runs on either.</p>`,
      },
      {
        id: 'bib',
        title: 'The 10 L bag-in-box in daily use',
        html: `<p>The bag-in-box is the liquid format between the 1 L Tetrapak and the 1 T IBC: {bib_10l_whites} egg whites, drawn as the shift needs them, with nothing to make up. It suits the kitchen whose aquafaba use is continuous, because the opened pack keeps turning over. Opened, it is stored like every liquid pack, at {opened_temp} °C or below.</p>
<p>Sealed, it keeps at least {unopened_months} months at room temperature, so the stock can wait in the dry store until it is opened. Describe the sites, the applications and the estimated monthly volume through the enquiry form to receive the technical sheet; the largest kitchens are on the <a href="{industry_href}">food manufacturing page</a>, where the 1 T IBC is described.</p>`,
      },
      {
        id: 'mayo',
        title: 'Mayonnaise and cold sauces at scale',
        html: `<p>The VERY AQUAFABA mayonnaise emulsifies {mayonnaise_oil} g of oil on {mayonnaise_dose} g of aquafaba, an oil ratio of {mayonnaise_oil_ratio}, with {mayonnaise_mustard} g of mustard, {mayonnaise_salt} g of salt and {mayonnaise_lemon} g of lemon juice or vinegar. The aquafaba is used at {mayonnaise_chill} °C: too warm, the emulsion is slow and unstable. On large batches the droplet size is what keeps it stable, which is why a central kitchen moves to a high-shear blender.</p>
<p>Oil added too fast, or with too little shear, and the emulsion never starts: a thin, steady stream with the blender at full speed. Too thick to work, blend in a few grams of cold water, not more oil. The finished sauce keeps {mayonnaise_keep} days refrigerated, in a clean container and refrigerated immediately. The <a href="{mayonnaise_calc_href}">mayonnaise calculator</a> scales the batch and the <a href="{mayonnaise_process_href}">process sheet</a> prints the steps and checks.</p>`,
      },
    ],
    faq: [
      { q: 'How many egg whites does a 10 L bag-in-box replace?', a: '{bib_10l_whites} egg whites, at {white_liquid} g of liquid per egg white. In mayonnaise that is {mayonnaise_batches_10l} batches, in chocolate mousse {chocolate_mousse_batches_10l}, in meringue {meringue_batches_10l}.' },
      { q: 'Can outlets with low rotation use the same product?', a: 'Yes, in powder. A 200 g pouch replaces {powder_200g_whites} egg whites, does not spoil once opened while it stays dry and closed, and is made up at {white_powder} g plus {white_water} ml of water per egg white when the outlet needs it.' },
      { q: 'How long does an opened bag-in-box keep?', a: 'Like every opened liquid pack: at {opened_temp} °C or below, used within {opened_days} days. It suits kitchens whose draw is continuous, so the pack keeps turning over.' },
      { q: 'Is there a step to reconstitute the liquid?', a: 'No. The liquid arrives at a fixed concentration, ready to weigh into the mixer. Only the powder is made up with water.' },
      { q: 'Where do we send our volumes?', a: 'Through the [enquiry form]({contact_href}) at the foot of this page: company, country, application and estimated monthly volume. The technical sheet comes back with the answer.' },
    ],
    links: [
      { href: '{mayonnaise_href}', label: 'Mayonnaise: liquid or powder?' },
      { href: '{chocolate_mousse_href}', label: 'Chocolate mousse: liquid or powder?' },
      { href: '{meringue_href}', label: 'Meringue: liquid or powder?' },
      { href: '{mayonnaise_calc_href}', label: 'Mayonnaise quantity calculator' },
      { href: '{industry_href}', label: 'Food manufacturing: the 1 T IBC' },
    ],
  },

  industry: {
    title: 'Aquafaba for Food Manufacturing: 1 T IBC and Bag-in-Box for Continuous Lines - VERY AQUAFABA',
    h1: 'Aquafaba for food manufacturing: the 1 T IBC and the bag-in-box for continuous lines',
    crumb: 'Food manufacturing',
    enquiryLabel: 'Food manufacturing',
    description: 'VERY AQUAFABA on industrial lines: the 1 T IBC that replaces {ibc_1t_whites} egg whites, the 10 L bag-in-box, the 3 kg powder pouch for dry premixes, reformulation by weight and how to request specifications.',
    lead: 'Industrial lines run on liquid: the 1 T IBC replaces {ibc_1t_whites} egg whites and the 10 L bag-in-box {bib_10l_whites}, both drawn continuously with no reconstitution step. VERY AQUAFABA is filtered, refined and standardized so that every batch behaves the same, at a concentration of {viscosity} g/ml. This page sets out the formats for continuous lines, the reformulation rule by weight, and how specifications, minimum order and lead time are requested.',
    sections: [
      {
        id: 'formats',
        title: 'Formats for continuous lines',
        html: `<p>The line is dosed by weight, so each format is described by the egg whites it replaces at {white_liquid} g per egg white.</p>
${grid(['Format', 'Egg whites', 'Where it runs'], [
  ['1 T IBC, liquid', '{ibc_1t_whites}', 'Continuous dosing on a line: meringue shells dried every working day, retail mousse cups, sauce lines, bottled sour bases'],
  ['10 L bag-in-box, liquid', '{bib_10l_whites}', 'Pilot runs, smaller lines and the central kitchens of a group'],
  ['3 kg pouch, powder', '{powder_3kg_whites}', 'Dry premixes: a producer blending dry sauce or bake bases puts it into the premix dry'],
])}
<p>Sealed, both formats keep at least {unopened_months} months at room temperature. Once opened, the liquid is held at {opened_temp} °C or below and used within {opened_days} days, which on a continuous line is the normal rhythm of an opened pack; the powder does not spoil while it stays dry and closed.</p>`,
      },
      {
        id: 'reformulate',
        title: 'Reformulating at line scale, by weight',
        html: `<p>The site's egg ratio rule is the starting point of every reformulation: {egg_liquid} g of aquafaba per whole egg, {white_liquid} g per egg white, and {yolk_liquid} g of aquafaba plus {yolk_oil} g of oil per yolk. Count the eggs or egg whites of the formula, multiply by the equivalent weight, and hold the aquafaba at {viscosity} g/ml so the foam or the emulsion behaves the same on every run.</p>
<p>An egg is about {water_egg_pct} percent water and aquafaba {water_aquafaba_pct} percent, so other liquids come down by {reduce_liquids} percent when whole eggs are replaced, and dense bakes are baked through. Test batches confirm time, colour and texture; the adjustments are recorded as the line's standard procedure. The <a href="{ratio_href}">egg ratio page</a> sets out the rule with worked examples and the <a href="{baking_calc_href}">baking calculator</a> converts a whole formula.</p>`,
      },
      {
        id: 'lines',
        title: 'Lines by application',
        html: `<ul>
<li>Meringue shells dried every working day: {meringue_dose} g per batch of about {meringue_yield}, {meringue_batches_10l} batches per bag-in-box, sugar in equal weight, dried at {meringue_bake} °C. The foam is the plainest test in the range, so every fault lands in it: grease and sugar added too fast. See the <a href="{meringue_href}">meringue guide</a>.</li>
<li>Sauce lines: {mayonnaise_dose} g of aquafaba emulsifies {mayonnaise_oil} g of oil, drawn by the kilo straight into the high-shear mixer, where droplet size keeps large batches stable. See the <a href="{mayonnaise_href}">mayonnaise guide</a>.</li>
<li>Pre-portioned retail mousse cups: {chocolate_mousse_dose} g per batch of about {chocolate_mousse_yield} portions, folded into chocolate at {chocolate_mousse_fold_temp} °C. See the <a href="{chocolate_mousse_href}">chocolate mousse guide</a>.</li>
<li>Bottled sour bases and beverage lines: the base is batched without the aquafaba, which is added at the shake at {cocktails_dose} g per drink. See the <a href="{cocktails_href}">cocktails guide</a>.</li>
</ul>`,
      },
      {
        id: 'specs',
        title: 'Specifications, minimum order and lead time',
        html: `<p>The specifications, the minimum order and the lead time for an industrial line are not published on this page: they depend on the country, the format and the volume, and they are given per project with the technical sheet. The enquiry form at the foot of this page asks for the company, the country, the application and the estimated monthly volume; describe the line and the formats you are considering, and the technical sheet comes back with the answer.</p>
<p>The <a href="{foodservice_href}">foodservice page</a> covers the central kitchens of a group, where the 10 L bag-in-box runs day to day, and the <a href="{professional_href}">professionals index</a> sets out the full range.</p>`,
      },
    ],
    faq: [
      { q: 'How many egg whites does a 1 T IBC replace?', a: '{ibc_1t_whites} egg whites, at {white_liquid} g of liquid per egg white. The 10 L bag-in-box replaces {bib_10l_whites}. Both are liquid, drawn continuously with no reconstitution step.' },
      { q: 'Is the powder an option for an industrial line?', a: 'For dry premixes, yes: the 3 kg pouch replaces {powder_3kg_whites} egg whites and goes into a dry sauce or bake base as it is. For whipped and emulsified lines the liquid is the format, because it arrives at a fixed concentration with nothing to make up.' },
      { q: 'What concentration should the line hold?', a: '{viscosity} g/ml. VERY AQUAFABA is filtered, refined and standardized to that concentration, so the foam or the emulsion behaves the same on every run.' },
      { q: 'How do we convert a formula counted in eggs?', a: '{egg_liquid} g of aquafaba per whole egg, {white_liquid} g per egg white, {yolk_liquid} g plus {yolk_oil} g of oil per yolk, all by weight. Other liquids come down by {reduce_liquids} percent, and test batches confirm time, colour and texture.' },
      { q: 'Where are the minimum order and the lead time?', a: 'They are given per project with the technical sheet, not on this page. Describe the line, the formats and the estimated monthly volume through the [enquiry form]({contact_href}) and the answer carries them.' },
    ],
    links: [
      { href: '{foodservice_href}', label: 'Foodservice and central kitchens' },
      { href: '{meringue_href}', label: 'Meringue: liquid or powder?' },
      { href: '{mayonnaise_href}', label: 'Mayonnaise: liquid or powder?' },
      { href: '{ratio_href}', label: 'How much aquafaba equals one egg' },
      { href: '{baking_calc_href}', label: 'Egg substitution calculator' },
    ],
  },
};
