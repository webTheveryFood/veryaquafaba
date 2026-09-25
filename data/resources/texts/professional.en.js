// Professionals by audience, English (set-2 B0 to B4). 'index' is the pillar page, the
// other keys the audience pages (routes.js TOPIC_SLUGS.professional). Every figure is a
// {token} filled from facts.json by data/resources/topics.js; no em/en dash. The wording
// follows the guides: the format is decided by rotation against the opened pack, cold
// chain, storage space and dosing, never by batch size alone.
const grid = (heads, rows, cls = '') => `<table class="va-guide-grid${cls ? ` ${cls}` : ''}">
<thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
<tbody>
${rows.map((r) => `<tr>${r.map((c, i) => `<td data-label="${heads[i]}">${c}</td>`).join('')}</tr>`).join('\n')}
</tbody>
</table>`;
const PICK = ['Your kitchen', 'Pick', 'Why'];

export default {
  index: {
    title: 'Aquafaba for Professional Kitchens - VERY AQUAFABA',
    h1: 'Aquafaba for professionals: which format fits your kitchen?',
    crumb: 'Professionals',
    enquiryLabel: 'Professionals',
    description: 'One egg-free ingredient for pastry sections, bars, central kitchens and production lines: {white_liquid} g per egg white. Which format and pack fit your kitchen.',
    lead: "Whatever you run, a pastry section, a bar, a central kitchen or a production line, one ingredient covers your foams, emulsions and egg-free bakes. The dose never changes: {white_liquid} g of liquid or {white_powder} g of powder replaces one egg white. What changes is the pack and the pace you use it at, and that is what you settle below.",
    // Hub for buyers: the activity table first, then the format and pack decisions, then how to order.
    figures: false,
    sections: [
      {
        id: 'activity',
        title: 'Which kind of kitchen do you run?',
        html: `<p>Aquafaba does a different job in a pastry section, behind a bar, in a central kitchen and on a production line. Find yours below; each row opens a page written for that way of working.</p>
${grid(['Your activity', 'What aquafaba does for you', 'How you will use it'], [
  ['<a href="{pastry_href}">Pastry, bakery, patisserie</a>', 'Meringues, macarons, mousse and egg-free bakes', 'By the batch, planned around your oven days'],
  ['<a href="{bars_href}">Bars and cocktails</a>', 'An egg-free foam on sours and fizzes', 'One dose per drink, shaken to order'],
  ['<a href="{foodservice_href}">Foodservice and central kitchens</a>', 'Mayonnaise, sauces and desserts at volume', 'By the kilo, from the 10 L bag-in-box'],
  ['<a href="{industry_href}">Food manufacturing</a>', 'Continuous lines and reformulation by weight', 'From the 1 T IBC, dosed continuously'],
], 'va-guide-grid--wrap')}
<p>Many businesses sit between two rows. A hotel runs a pastry section and a bar on the same product, and a central kitchen with a patisserie line works like a bakery on the days it pipes meringue. If that is you, read both.</p>`,
      },
      {
        id: 'decide',
        title: 'Liquid or powder?',
        html: `<p>Sealed, both formats keep at least {unopened_months} months at room temperature, so the choice only begins once a pack is open. Opened liquid goes in the fridge and is used within {opened_days} days; opened powder does not spoil, it just needs to stay dry and closed. Five questions settle it for most kitchens.</p>
${grid(['Ask yourself', 'Liquid, if', 'Powder, if'], [
  ['Will an opened pack be used up within {opened_days} days?', 'Yes, the pack turns over in time', 'No, the pouch waits for the next batch with no date attached'],
  ['Is there chilled space for an opened pack?', 'Yes, it lives in the fridge, already at working temperature', 'No, the pouch lives on a dry shelf'],
  ['Is the work continuous?', 'Yes, the 10 L bag-in-box or the 1 T IBC, with no reconstitution step', 'No, you make up what each batch needs'],
  ['Does the product travel, or go to events?', 'Only with a cold chain', 'Yes, it travels dry'],
  ['Does it go into a dry premix?', 'No', 'Yes, it goes into the premix as it is'],
], 'va-guide-grid--wrap')}
<p>Busy weekends and quiet weekdays? Many kitchens keep both: liquid for the rush, powder for the rest. The conversion is fixed, so a recipe runs on either format without changing.</p>`,
      },
      {
        id: 'packs',
        title: 'Which pack, for how much work',
        html: `<p>Every pack is easiest to picture by the number of egg whites it replaces, because that is how a recipe counts them.</p>
${grid(['Pack', 'Egg whites', 'Who empties it'], [
  ['1 L Tetrapak, liquid', '{liquid_1l_whites}', 'A pastry section, a bar with sours on the menu, a single site'],
  ['10 L bag-in-box, liquid', '{bib_10l_whites}', 'A central kitchen drawing by the kilo each shift'],
  ['1 T IBC, liquid', '{ibc_1t_whites}', 'A production line dosing continuously'],
  ['30 g pouch, powder', '{powder_30g_whites}', 'A first trial, or a bar testing a sour'],
  ['200 g pouch, powder', '{powder_200g_whites}', 'A kitchen or a bar with uneven rotation'],
  ['3 kg pouch, powder', '{powder_3kg_whites}', 'A professional kitchen, or a dry premix on a line'],
], 'va-guide-grid--wrap')}
<p>The powder is made up at {white_powder} g plus {white_water} ml of water per egg white, which gives {white_total} g of aquafaba. The <a href="{reconstitution_href}">reconstitution page</a> has the table from 1 to 20 egg whites.</p>`,
      },
      {
        id: 'order',
        title: 'Ordering for a professional kitchen',
        html: `<p>The 1 L Tetrapak and the 200 g pouch are sold online in most of our markets, and the buttons below take you there. The bag-in-box, the IBC and the 3 kg pouch are quoted per project: tell us what you make and roughly how much of it each month through the <a href="{contact_href}">contact form</a>, and the technical sheet comes back with the answer.</p>
<p>The six <a href="{index_href}">application guides</a> give the method, the troubleshooting and the dose per recipe for both formats, with a quantity calculator under each one, so your team can work from the same figures before the first delivery arrives.</p>`,
      },
    ],
    faq: [
      { q: 'Is the dose the same for the liquid and the powder?', a: 'Yes, counted in egg whites. {white_liquid} g of liquid replaces one egg white, and so does {white_powder} g of powder made up with {white_water} ml of water. A batch is dosed by its egg white count in either format.' },
      { q: 'Which formats exist for high volumes?', a: 'The 10 L bag-in-box replaces {bib_10l_whites} egg whites and the 1 T IBC {ibc_1t_whites}; both are liquid, for continuous use with no reconstitution step. In powder, the 3 kg pouch replaces {powder_3kg_whites} egg whites.' },
      { q: 'How long does an opened pack last?', a: 'Opened liquid is kept at {opened_temp} °C or below and used within {opened_days} days. Opened powder does not spoil while it stays dry and closed. Sealed, both keep at least {unopened_months} months at room temperature.' },
      { q: 'Can a kitchen run liquid and powder side by side?', a: 'Yes, and many do: liquid for the days the pack turns over, powder for the irregular orders. The conversion is fixed, so the recipe does not change from one format to the other.' },
      { q: 'How do I order bulk aquafaba for a bakery, a bar or a production line?', a: 'The 1 L Tetrapak and the 200 g pouch are bought online. For the bag-in-box, the IBC or the 3 kg pouch, describe your activity and your monthly volume through our [contact form]({contact_href}) and we will quote per project.' },
      { q: 'How do I get the technical sheet?', a: 'Ask for it through our [contact form]({contact_href}), with your company, your country, the application and the estimated monthly volume. It is sent back with the answer.' },
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
    title: 'Aquafaba for Pastry and Bakery - VERY AQUAFABA',
    h1: 'How to use aquafaba in your pastry kitchen or bakery',
    crumb: 'Pastry and bakery',
    enquiryLabel: 'Pastry and bakery',
    description: 'Meringue, macarons, mousse and egg-free sponges from one ingredient: {white_liquid} g per egg white, {egg_liquid} g per whole egg. How many batches a pack gives you.',
    lead: "In a pastry section, one ingredient covers the meringue, the macaron shells, the chocolate mousse and the egg-free sponges: {white_liquid} g of aquafaba per egg white, {egg_liquid} g per whole egg. The guides give you each recipe. Below, the section as a whole: how many batches a pack gives, which format fits your oven schedule, how to plan the week, and how to move a recipe of your own across.",
    // Audience page: what the guides cannot do, the section as a whole. No reference tables.
    figures: false,
    sections: [
      {
        id: 'batches',
        title: 'What you can make, and how much a pack gives',
        html: `<p>Every batch is counted in egg whites, so a pack is easiest to picture by the batches it gives. The figures come from the VERY AQUAFABA recipes; each application has its own guide and quantity calculator.</p>
${grid(['Application', 'One batch', 'From a 1 L Tetrapak', 'From a 200 g pouch'], [
  ['<a href="{meringue_href}">Meringue</a>', '{meringue_dose} g, or {meringue_eggs} egg whites, for about {meringue_yield} meringues', '{meringue_batches_1l} batches', '{meringue_batches_200g} batches'],
  ['<a href="{macarons_href}">Macarons</a>', '{macarons_dose} g, or {macarons_eggs} egg whites, for about {macarons_yield} macarons', '{macarons_batches_1l} batches', '{macarons_batches_200g} batches'],
  ['<a href="{chocolate_mousse_href}">Chocolate mousse</a>', '{chocolate_mousse_dose} g, or {chocolate_mousse_eggs} egg whites, for about {chocolate_mousse_yield} portions', '{chocolate_mousse_batches_1l} batches', '{chocolate_mousse_batches_200g} batches'],
  ['<a href="{baking_href}">Sponges, cakes, doughs</a>', '{egg_liquid} g per whole egg, {white_liquid} g per egg white', '{eggs_1l} whole eggs or {whites_1l} egg whites', '{whites_200g} egg whites'],
], 'va-guide-grid--wrap')}
<p>In powder, a batch is made up at {white_powder} g plus {white_water} ml of water per egg white: {meringue_powder} g and {meringue_water} ml for a meringue batch, {macarons_powder} g and {macarons_water} ml for macarons or mousse. The <a href="{reconstitution_href}">reconstitution page</a> has the table from 1 to 20 egg whites.</p>`,
      },
      {
        id: 'decide',
        title: 'Will you finish an opened pack in time?',
        html: `<p>Sealed, both formats keep at least {unopened_months} months at room temperature, so the choice only begins once a pack is open. From then on, liquid lives in the fridge and is used within {opened_days} days, while powder simply waits, dry and closed. A 1 L Tetrapak is {meringue_batches_1l} batches of meringue or {macarons_batches_1l} of macarons. If your oven schedule gets through that in {opened_days} days, liquid is the easy choice. If it does not, powder is.</p>
${grid(PICK, [
  ['Pastry section piping meringue or macarons most days', 'Liquid, 1 L Tetrapak', 'The pack is empty well inside {opened_days} days'],
  ['Shop baking to order, or a seasonal meringue dessert', 'Powder, 200 g pouch', 'It covers the long gaps between runs'],
  ['Chiller full of creams, ganache and maturing macarons', 'Powder', 'The pouch lives on a dry rack, outside the cold store'],
  ['Daily egg-free line plus irregular orders', 'Both', 'Liquid for the line, powder for the orders; the recipe is the same on either'],
  ['Plant-based patisserie line piping continuously', 'Liquid, 10 L bag-in-box or 1 T IBC', 'Continuous use, with nothing to make up'],
])}
<p>If you prefer liquid but bake irregularly, you can freeze it in portions of {portion} g at {freeze_temp} °C for up to {freeze_months} months. Thaw overnight in the fridge and stir until even before whipping. It is never refrozen.</p>`,
      },
      {
        id: 'week',
        title: 'Which desserts hold, and for how long?',
        html: `<p>Aquafaba fits a make-ahead section better than raw egg white does, because none of the finished products depends on the fridge in the same way. Here is what each one asks for once it is made:</p>
<ul>
<li><strong>Meringues</strong> cool fully on the tray and keep airtight at room temperature, in a dry place, with a desiccant pouch if you have one. They pull moisture from the air, so the dry store, not the chiller, is their home.</li>
<li><strong>Macarons</strong> are filled, then refrigerated for {macarons_mature} hours before service, so the shells and the filling come together. Bake the shells one day, fill and mature the next.</li>
<li><strong>Chocolate mousse</strong> sets in the fridge in {chocolate_mousse_set_time} hours and keeps {chocolate_mousse_keep} days in sealed packaging, so it is a batch product made ahead, not a dessert made to order.</li>
</ul>
<p>Only two things in the section need the cold: the mousse and the maturing macarons, plus the opened liquid pack. That is the pack to plan around. Open it at the start of a run of oven days, write the opening date on it, and it is gone before the {opened_days} days are up. Label what you freeze with the date and the weight, as the storage guide asks, so that a portion taken out on a busy morning is the right one.</p>`,
      },
      {
        id: 'switch',
        title: 'How to move your own recipes to aquafaba',
        html: `<p>Start with the recipe that matters most on your counter, not the one that looks easiest, and change only the egg. What you replace decides what else moves:</p>
<ul>
<li><strong>Egg whites only</strong>, as in meringue, macarons and mousse: a direct swap. {white_liquid} g of aquafaba per white, and the almond flour, the sugar and the chocolate stay exactly as they are.</li>
<li><strong>Whole eggs</strong>, as in sponges and cakes: {egg_liquid} g per egg. Aquafaba carries more water than an egg, about {water_aquafaba_pct} percent against {water_egg_pct} percent, so bring the other liquids down by {reduce_liquids} percent and bake dense cakes through.</li>
<li><strong>Yolks</strong>: {yolk_liquid} g of aquafaba plus {yolk_oil} g of oil, because aquafaba brings no fat.</li>
</ul>
<p>Weigh everything, the aquafaba included, and keep the rest of the method as it was: same bowl, same speeds, same oven. If the section bakes in volume, hold the aquafaba at {viscosity} g/ml so the foam behaves the same on every run. The <a href="{baking_calc_href}">substitution calculator</a> converts the eggs, whites and yolks of your recipe in one go, and the <a href="{baking_href}">baking guide</a> covers what to do when a sponge comes out flat or wet.</p>`,
      },
    ],
    faq: [
      { q: 'Can one pack serve meringue and macarons on the same day?', a: 'Yes. Both recipes count their batch in egg whites and use the same aquafaba, chilled to {meringue_chill} °C. A 1 L Tetrapak gives {meringue_batches_1l} batches of meringue or {macarons_batches_1l} of macarons, or any mix of the two.' },
      { q: 'Can I switch my macaron recipe to aquafaba without changing the rest?', a: 'Yes. Macarons replace egg whites only, so the swap is direct: {white_liquid} g of aquafaba per white. The almond flour, icing sugar and caster sugar stay as they are. What changes is timing, which the [macarons guide]({macarons_href}) walks through.' },
      { q: 'How far ahead can I make aquafaba chocolate mousse?', a: 'It sets in {chocolate_mousse_set_time} hours in the fridge and keeps {chocolate_mousse_keep} days refrigerated in sealed packaging, so it is made in batches ahead of service.' },
      { q: 'Does the powder go straight into the almond flour?', a: 'No. The aquafaba is whipped on its own first, so the powder is made up with water, chilled, and whipped before the almond flour and the icing sugar are folded in.' },
      { q: 'How do I replace whole eggs in a sponge?', a: '{egg_liquid} g of aquafaba per whole egg and {white_liquid} g per egg white, weighed. Bring the other liquids down by {reduce_liquids} percent to balance the water, and bake through. The [baking guide]({baking_href}) sets out the rest.' },
      { q: 'Can I freeze the liquid when my meringue work is irregular?', a: 'Yes. Portion it at {portion} g, freeze at {freeze_temp} °C for up to {freeze_months} months, thaw overnight in the fridge and stir until even before whipping. Thawed aquafaba is never refrozen. The powder removes that step altogether.' },
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
    title: 'Aquafaba for Bars and Cocktails - VERY AQUAFABA',
    h1: 'How to use aquafaba for bars and cocktails: the complete guide',
    crumb: 'Bars and cocktails',
    enquiryLabel: 'Bars and cocktails',
    description: 'Aquafaba behind the bar: {cocktails_dose} g per sour and two shakes for a silky egg-free foam. Why bars switch, which pack fits your volume and how to set up for service.',
    lead: "Aquafaba gives a sour a stable, silky foam head with no raw egg white behind the bar. It takes {cocktails_dose} g per drink and two shakes, and the cocktails guide walks you through the recipe. Below, running it: why bars switch, which pack fits how many sours you pour, how to set up for service, and what to write in the bar book.",
    // Audience page: the bar operation, not the recipe (that is the cocktails guide). No reference tables.
    figures: false,
    sections: [
      {
        id: 'why',
        title: 'Why bars are switching to aquafaba',
        html: `<p>A sour is never cooked, so whatever goes into the tin is served as it is. That is the whole case for aquafaba behind the bar:</p>
<ul>
<li><strong>No raw egg in an uncooked drink.</strong> Raw egg white carries a food-safety risk that aquafaba does not. The foam is the same silky head, with none of the concern.</li>
<li><strong>Every guest can order it.</strong> Aquafaba is plant-based and egg-free, so the sour on the menu is the same sour for vegan guests.</li>
<li><strong>A shelf instead of a fridge slot.</strong> Sealed, both formats keep at least {unopened_months} months at room temperature. The powder does not even need the fridge once opened.</li>
</ul>
<p>The drink itself does not change. The whiskey, the lemon, the syrup, the dry shake and the wet shake stay exactly as they are, and the <a href="{cocktails_href}">cocktails guide</a> has the full method and its troubleshooting table.</p>`,
      },
      {
        id: 'decide',
        title: 'How many sours before you open the next pack?',
        html: `<p>A 1 L Tetrapak pours {cocktails_batches_1l} sours and a 200 g pouch of powder {cocktails_batches_200g}. The pack to buy depends on how fast you get through it once it is open: opened liquid lives in the fridge and is used within {opened_days} days, while an opened pouch of powder simply waits, dry and closed, for the next order. Bartenders without a steady sour rotation choose the powder for exactly that reason.</p>
${grid(['Your bar', 'Pick', 'Why'], [
  ['Cocktail bar with sours on the menu, ordered every service', 'Liquid, 1 L Tetrapak', '{cocktails_batches_1l} drinks per pack, finished well inside {opened_days} days'],
  ['Neighbourhood bar pouring a few sours a week', 'Powder, 200 g pouch', 'No clock once opened: make up what tonight needs'],
  ['Bar with no fridge space to spare', 'Powder', 'The pouch lives on a dry shelf behind the bar'],
  ['Events, outside catering, pop-up bars', 'Powder', 'It travels dry, with no cold chain'],
  ['Busy weekends, quiet weekdays', 'Both', 'Liquid for the rush, powder for the rest'],
  ['Hotel group, bottled sour bases, beverage line', 'Liquid, 10 L bag-in-box or 1 T IBC', 'Continuous use, with nothing to make up'],
])}
<p>If you prefer the liquid but cannot finish a pack in time, freeze it in portions of {portion} g, thaw in the fridge and stir before use. It is never refrozen.</p>`,
      },
      {
        id: 'service',
        title: 'Setting up for service',
        html: `<p>Three habits make the difference between a head that holds and one that does not, and all three happen before the first order:</p>
<ul>
<li><strong>Pre-batch the base, not the aquafaba.</strong> Whiskey, lemon and syrup can be batched ahead. The aquafaba goes in at the shake, one drink at a time, or the height is gone by mid-service.</li>
<li><strong>Cold, and measured.</strong> Aquafaba foams faster and holds longer when it comes to the tin chilled. Weigh or jigger {cocktails_dose} g every time: free pouring is what makes the head uneven from drink to drink.</li>
<li><strong>Powder is made up before doors open.</strong> One drink is {cocktails_powder} g of powder and {cocktails_water} ml of water; per egg white, {white_powder} g and {white_water} ml give {white_total} g of aquafaba. Make up what the service needs, chill it, and it pours like the liquid. The <a href="{cocktails_calc_href}">cocktail calculator</a> gives the figures for any number of drinks.</li>
</ul>
<p>Busy weekends and quiet weekdays? Many bars keep both: the Tetrapak in the fridge for the rush, the pouch on the shelf for the rest. The dose is the same in either.</p>`,
      },
      {
        id: 'book',
        title: 'What to write in the bar book',
        html: `<p>Aquafaba asks for four lines in the bar book, and they save a flat sour on a busy night:</p>
<ul>
<li><strong>The opening date on the pack.</strong> Opened liquid is kept at {opened_temp} °C or below and used within {opened_days} days. Write the date on the carton the moment it is opened.</li>
<li><strong>The dose.</strong> {cocktails_dose} g per drink, weighed or jiggered, never free poured.</li>
<li><strong>The order of the shakes.</strong> Dry shake for {cocktails_dry_shake} seconds first, then {cocktails_wet_shake} seconds with ice. Ice in from the start gives a thin head.</li>
<li><strong>When to bin an opened pack.</strong> If the liquid smells off, shows bubbles or has separated, it goes, whatever the date says.</li>
</ul>
<p>The <a href="{cocktails_process_href}">process sheet</a> prints these with the reference value of each step, ready for the bar book.</p>`,
      },
    ],
    faq: [
      { q: 'How many sours does a 1 L pack pour?', a: '{cocktails_batches_1l} sours at {cocktails_dose} g each. A 200 g pouch of powder gives {cocktails_batches_200g}, made up drink by drink or for the whole service.' },
      { q: 'Do I need to change my sour recipe?', a: 'No. One ingredient changes: {cocktails_dose} g of aquafaba replaces the egg white. The whiskey, the lemon, the syrup, the dry shake and the wet shake stay as they are.' },
      { q: 'Can the aquafaba go into the pre-batch?', a: 'No. Batch the whiskey, lemon and syrup, then add the aquafaba at the shake, per drink. Aquafaba in the pre-batch gives no height by mid-service.' },
      { q: 'What if I only pour a few sours a week?', a: 'Take the powder. An opened pouch does not spoil while it stays dry and closed, so you make up what tonight needs and the rest waits. Opened liquid has {opened_days} days in the fridge.' },
      { q: 'Can I try it in one bar before the whole group?', a: 'Yes. The 30 g pouch of powder is made for a first trial: made up at {white_powder} g plus {white_water} ml of water per egg white, it covers a service of sours. Ask for it through our [contact form]({contact_href}).' },
      { q: 'Does the foam carry bitters?', a: 'Yes. After the dry shake and the wet shake, fine strained into a chilled coupe, the head is firm enough to carry a few drops of bitters.' },
    ],
    links: [
      { href: '{cocktails_href}', label: 'Cocktails: liquid or powder?' },
      { href: '{cocktails_calc_href}', label: 'Cocktail quantity calculator' },
      { href: '{cocktails_process_href}', label: 'Cocktail process sheet' },
      { href: '{reconstitution_href}', label: 'Powder reconstitution: the rule per egg white' },
    ],
  },

  foodservice: {
    title: 'Aquafaba for Central Kitchens - VERY AQUAFABA',
    h1: 'How to use aquafaba in a central kitchen: the complete guide',
    crumb: 'Foodservice and central kitchens',
    enquiryLabel: 'Foodservice and central kitchens',
    description: 'Aquafaba for central kitchens: mayonnaise, mousse, meringue and egg-free bakes from one ingredient. What a shift produces and what travels to the outlets.',
    lead: "A central kitchen makes the mayonnaise, the desserts and the egg-free bakes that its outlets serve. Aquafaba covers all of them from one ingredient: {white_liquid} g per egg white, {egg_liquid} g per whole egg. Below, a day in that kitchen: what a shift can produce, what travels well and for how long, and how to keep the outlets running on the same recipe.",
    figures: false,
    sections: [
      {
        id: 'why',
        title: 'Why central kitchens are switching to aquafaba',
        html: `<p>Feeding several sites from one kitchen means every ingredient has to hold up twice: once in production and once on the road. Aquafaba earns its place for three reasons:</p>
<ul>
<li><strong>One ingredient, four jobs.</strong> It emulsifies the mayonnaise, whips into the mousse and the meringue, and binds the sponges and doughs. One line in the stock list replaces the egg in all of them.</li>
<li><strong>Nothing raw in the cold sauces.</strong> Mayonnaise is served uncooked. Aquafaba replaces the egg with no raw-egg risk in the dish that leaves the kitchen.</li>
<li><strong>Stock that waits.</strong> Sealed, both formats keep at least {unopened_months} months at room temperature, in the dry store, not the walk-in. The clock only starts once a pack is open.</li>
</ul>`,
      },
      {
        id: 'shift',
        title: 'What one shift can produce',
        html: `<p>The batch figures are those of the VERY AQUAFABA recipes. The 10 L bag-in-box is the pack most central kitchens draw from; the 1 L Tetrapak serves a single site.</p>
${grid(['Application', 'One batch', 'From a 10 L bag-in-box', 'From a 1 L Tetrapak'], [
  ['<a href="{mayonnaise_href}">Mayonnaise</a>', '{mayonnaise_dose} g of aquafaba for about {mayonnaise_yield} g of mayo', '{mayonnaise_batches_10l} batches', '{mayonnaise_batches_1l} batches'],
  ['<a href="{chocolate_mousse_href}">Chocolate mousse</a>', '{chocolate_mousse_dose} g for about {chocolate_mousse_yield} portions', '{chocolate_mousse_batches_10l} batches', '{chocolate_mousse_batches_1l} batches'],
  ['<a href="{meringue_href}">Meringue</a>', '{meringue_dose} g for about {meringue_yield} meringues', '{meringue_batches_10l} batches', '{meringue_batches_1l} batches'],
  ['<a href="{baking_href}">Sponges, cakes, doughs</a>', '{egg_liquid} g per whole egg', '{eggs_10l} whole eggs', '{eggs_1l} whole eggs'],
], 'va-guide-grid--wrap')}
<p>Mayonnaise uses very little aquafaba per batch, which is why even a 1 L pack goes a long way on a sauce station. The question is never whether a pack is big enough; it is whether an opened one is used up within {opened_days} days. Each guide has a quantity calculator that scales the batch to your run.</p>`,
      },
      {
        id: 'travel',
        title: 'What travels well, and for how long',
        html: `<p>This is where aquafaba makes life easier for a kitchen that dispatches. Once made, each product asks for something different:</p>
<ul>
<li><strong>Mayonnaise</strong> keeps up to {mayonnaise_keep} days refrigerated, made under hygienic conditions, in a clean container and chilled straight after blending. It ships finished.</li>
<li><strong>Chocolate mousse</strong> sets in the fridge and keeps {chocolate_mousse_keep} days in sealed packaging. Portion it centrally and ship it set.</li>
<li><strong>Meringues</strong> keep airtight at room temperature in a dry place. No cold chain on the van.</li>
<li><strong>Bakes and enriched doughs</strong> stay soft longer, because aquafaba slows drying in the crumb. That is a day or two of extra shelf life on the way to the outlet.</li>
</ul>
<p>Label every container with the production date and the weight before it leaves, as the storage guide asks. It is the one habit that keeps a dispatch traceable from the mixer to the outlet's fridge.</p>`,
      },
      {
        id: 'outlets',
        title: 'Keeping the outlets running',
        html: `<p>Most groups split the two formats by where the work happens. The central kitchen draws liquid from the bag-in-box, because its use is continuous and an opened pack turns over in time. The outlets that whip or blend on site keep a 200 g pouch of powder on the shelf, because a quiet week does not spoil it.</p>
${grid(['Your operation', 'Pick', 'Why'], [
  ['Central kitchen drawing aquafaba by the kilo each shift', 'Liquid, 10 L bag-in-box or 1 T IBC', 'Continuous use, straight into the mixer, nothing to make up'],
  ['Deli or sandwich counter making fresh mayo every service', 'Liquid, 1 L Tetrapak', 'Poured at blending temperature, and the pack turns over in time'],
  ['Outlet with mayo or mousse on one dish', 'Powder, 200 g pouch', 'An opened litre would outlast its {opened_days} days; the pouch waits'],
  ['Cold store already full of finished sauce and portions', 'Powder', 'The pouch never takes a chilled slot'],
  ['Outlet that wants fewer dated items to log', 'Powder', 'No opened, perishable pack to label and inspect'],
])}
<p>The recipe does not change between the two: {white_liquid} g of liquid is {white_powder} g of powder made up with {white_water} ml of water, so a sauce developed centrally runs the same at the outlet. For the largest kitchens and continuous lines, the <a href="{industry_href}">food manufacturing page</a> covers the 1 T IBC.</p>`,
      },
    ],
    faq: [
      { q: 'How many egg whites does a 10 L bag-in-box replace?', a: '{bib_10l_whites} egg whites, at {white_liquid} g of liquid per egg white. In mayonnaise that is {mayonnaise_batches_10l} batches, in chocolate mousse {chocolate_mousse_batches_10l}, in meringue {meringue_batches_10l}.' },
      { q: 'Can we ship aquafaba mousse to our outlets?', a: 'Yes. Set it centrally, in sealed packaging, and it keeps {chocolate_mousse_keep} days refrigerated. The mayonnaise keeps up to {mayonnaise_keep} days chilled under the same conditions.' },
      { q: 'Can outlets with low rotation use the same product?', a: 'Yes, in powder. A 200 g pouch replaces {powder_200g_whites} egg whites, does not spoil once opened while it stays dry and closed, and is made up at {white_powder} g plus {white_water} ml of water per egg white when the outlet needs it.' },
      { q: 'How long does an opened bag-in-box keep?', a: 'Like every opened liquid pack: at {opened_temp} °C or below, used within {opened_days} days. It suits kitchens whose draw is continuous, so the pack keeps turning over.' },
      { q: 'Does the outlet need a fridge slot for the powder?', a: 'No. The pouch lives on a dry shelf, opened or not. Only the made-up aquafaba is chilled before use, and only as much as the batch needs.' },
      { q: 'Where do we send our volumes?', a: 'Through our [contact form]({contact_href}): company, country, application and estimated monthly volume. The technical sheet comes back with the answer.' },
    ],
    links: [
      { href: '{mayonnaise_href}', label: 'Mayonnaise: liquid or powder?' },
      { href: '{chocolate_mousse_href}', label: 'Chocolate mousse: liquid or powder?' },
      { href: '{mayonnaise_calc_href}', label: 'Mayonnaise quantity calculator' },
      { href: '{industry_href}', label: 'Food manufacturing' },
    ],
  },

  industry: {
    title: 'Aquafaba for Food Manufacturing - VERY AQUAFABA',
    h1: 'How to use aquafaba on a production line: the complete guide',
    crumb: 'Food manufacturing',
    enquiryLabel: 'Food manufacturing',
    description: 'Aquafaba for industrial lines: liquid in the 1 T IBC and the 10 L bag-in-box, standardised at {viscosity} g/ml. How to replace the egg in a formula at scale.',
    lead: "On a production line, aquafaba runs as a liquid, drawn from the 1 T IBC or the 10 L bag-in-box and dosed by weight. It arrives filtered, refined and standardised at {viscosity} g/ml, so a foam or an emulsion behaves the same on every run. Below, the work from the first trial to the signed-off specification: replacing the egg in your formula, what changes at scale, which pack fits the line, and how to get a quote.",
    figures: false,
    sections: [
      {
        id: 'why',
        title: 'Why manufacturers are switching to aquafaba',
        html: `<p>Four things a plant-based egg replacement brings to a line, all of them on the pack or on the price list rather than in a claim:</p>
<ul>
<li><strong>A plant-based, egg-free ingredient.</strong> No eggs, dairy, gluten or soy, which takes a major allergen out of the formula and opens the product to plant-based ranges.</li>
<li><strong>A price that does not follow the egg market.</strong> Egg prices move with feed costs, disease and supply shocks. Aquafaba does not.</li>
<li><strong>A standardised input.</strong> Every batch arrives at {viscosity} g/ml, which is what keeps a foam or an emulsion reproducible from one run to the next.</li>
<li><strong>Stock that waits.</strong> Sealed, the packs keep at least {unopened_months} months at room temperature. On a continuous line an opened pack never reaches its {opened_days} days.</li>
</ul>`,
      },
      {
        id: 'formula',
        title: 'Replacing the egg in your formula',
        html: `<p>The conversion is by weight, and it is the same rule the whole site uses. Count the eggs, the whites and the yolks in the formula, then swap them one for one:</p>
<ul>
<li>{egg_liquid} g of aquafaba per whole egg.</li>
<li>{white_liquid} g per egg white.</li>
<li>{yolk_liquid} g of aquafaba plus {yolk_oil} g of oil per yolk, because aquafaba brings no fat.</li>
</ul>
<p>Replacing egg whites is a direct swap. Replacing whole eggs brings extra water: aquafaba is about {water_aquafaba_pct} percent water against {water_egg_pct} percent for an egg, so the other liquids come down by {reduce_liquids} percent and dense bakes are baked through. Take one product at a time, change only the egg, and let the trial batches confirm time, colour and texture before the change goes into the standard procedure. The <a href="{baking_calc_href}">substitution calculator</a> converts a whole formula, and the <a href="{ratio_href}">egg ratio page</a> carries the rule with worked examples.</p>`,
      },
      {
        id: 'scale',
        title: 'What to watch when you scale up',
        html: `<p>A formula that works at the bench meets four new variables on the line. Each one comes from a VERY AQUAFABA recipe written for production:</p>
<ul>
<li><strong>Hold the concentration.</strong> Keep the aquafaba at {viscosity} g/ml from batch to batch. If the density drifts, the foam behaves differently even with the same weights and timings. See the <a href="{meringue_href}">meringue guide</a>.</li>
<li><strong>Pre-emulsify on mousse lines.</strong> For large batches, emulsify part of the chocolate with a small quantity of aquafaba first, then fold in the rest of the foam. It keeps the batch homogeneous. See the <a href="{chocolate_mousse_href}">chocolate mousse guide</a>.</li>
<li><strong>High shear on sauce lines.</strong> On large mayonnaise batches, droplet size is what keeps the emulsion stable, so the line runs on a high-shear mixer with the oil in a thin, steady stream. See the <a href="{mayonnaise_href}">mayonnaise guide</a>.</li>
<li><strong>Re-check shelf life when moisture changes.</strong> Any change to the water in a bake changes its water activity. Monitor the shelf life and the microbial stability of the finished product after reformulating, which matters most at industrial scale. See the <a href="{baking_href}">baking guide</a>.</li>
</ul>`,
      },
      {
        id: 'packs',
        title: 'Which pack fits your line',
        html: `<p>The line is dosed by weight, so each pack is easiest to picture by the egg whites it replaces, at {white_liquid} g per egg white.</p>
${grid(['Format', 'Egg whites', 'Where it runs'], [
  ['1 T IBC, liquid', '{ibc_1t_whites}', 'Continuous dosing: meringue shells dried every working day, retail mousse cups, sauce lines, bottled sour bases'],
  ['10 L bag-in-box, liquid', '{bib_10l_whites}', 'Pilot runs, smaller lines and the central kitchens of a group'],
  ['3 kg pouch, powder', '{powder_3kg_whites}', 'Dry premixes: a producer blending a dry sauce or bake base puts it into the premix as it is'],
], 'va-guide-grid--wrap')}
<p>For whipped and emulsified lines the liquid is the format, because it arrives at a fixed concentration with nothing to make up. The powder earns its place in a dry premix. Once opened, the liquid is held at {opened_temp} °C or below and used within {opened_days} days, which on a continuous line is simply the normal rhythm of a pack.</p>`,
      },
      {
        id: 'spec',
        title: 'Getting your specification and quote',
        html: `<p>Specifications, minimum order and lead time depend on the country, the format and the volume, so they are given per project. Send us the line, the application, the formats you are considering and the estimated monthly volume through our <a href="{contact_href}">contact form</a>, and the technical sheet comes back with the quote. For the central kitchens of a group, where the 10 L bag-in-box runs day to day, see the <a href="{foodservice_href}">foodservice page</a>.</p>`,
      },
    ],
    faq: [
      { q: 'How many egg whites does a 1 T IBC replace?', a: '{ibc_1t_whites} egg whites, at {white_liquid} g of liquid per egg white. The 10 L bag-in-box replaces {bib_10l_whites}. Both are liquid, drawn continuously with no reconstitution step.' },
      { q: 'Is the powder an option for an industrial line?', a: 'For dry premixes, yes: the 3 kg pouch replaces {powder_3kg_whites} egg whites and goes into a dry sauce or bake base as it is. For whipped and emulsified lines the liquid is the format, because it arrives at a fixed concentration with nothing to make up.' },
      { q: 'What concentration should the line hold?', a: '{viscosity} g/ml. VERY AQUAFABA is filtered, refined and standardised to that concentration, so the foam or the emulsion behaves the same on every run.' },
      { q: 'How do we convert a formula counted in eggs?', a: '{egg_liquid} g of aquafaba per whole egg, {white_liquid} g per egg white, {yolk_liquid} g plus {yolk_oil} g of oil per yolk, all by weight. Other liquids come down by {reduce_liquids} percent when whole eggs are replaced, and test batches confirm time, colour and texture.' },
      { q: 'Does replacing eggs change the shelf life of our product?', a: 'It can, because aquafaba changes the water in the formula and therefore its water activity. Monitor the shelf life and the microbial stability of the finished product after reformulating, as the [baking guide]({baking_href}) sets out.' },
      { q: 'Where are the minimum order and the lead time?', a: 'They are given per project with the technical sheet. Describe the line, the formats and the estimated monthly volume through our [contact form]({contact_href}) and the answer carries them.' },
    ],
    links: [
      { href: '{ratio_href}', label: 'How much aquafaba equals one egg' },
      { href: '{baking_calc_href}', label: 'Substitution calculator' },
      { href: '{meringue_href}', label: 'Meringue: liquid or powder?' },
      { href: '{mayonnaise_href}', label: 'Mayonnaise: liquid or powder?' },
      { href: '{foodservice_href}', label: 'Foodservice and central kitchens' },
    ],
  },
};
