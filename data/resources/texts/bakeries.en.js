// Session-written drafts, explicitly requested while Tontin's editorial mode is pending.
// Product figures resolve from applications/facts.json; pastry facts from bakeries-facts.json.
// See content/expansion-bakeries/README.md for provenance and source discrepancies.
const grid = (heads, rows) => `<table class="va-guide-grid va-guide-grid--wrap">
<thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
<tbody>${rows.map((row) => `<tr>${row.map((cell, i) => `<td data-label="${heads[i]}">${cell}</td>`).join('')}</tr>`).join('\n')}</tbody>
</table>`;

export default {
  liquid: {
    title: 'Liquid Aquafaba: How to Use It and Where to Buy It',
    h1: 'Liquid aquafaba: how to use it and where to buy it',
    crumb: 'Liquid aquafaba',
    eyebrow: 'Liquid and formats',
    description: 'How bakers use liquid aquafaba in meringues, sponges and egg-free bakes, how much replaces an egg, which pack to choose and where to buy it.',
    lead: 'If aquafaba is already part of your weekly production, liquid has one plain advantage: there is nothing to prepare before you use it. Weigh it from the pack, chill it when the recipe needs whipping, and it is ready for the mixer. {white_liquid}g replaces one egg white, {egg_liquid}g a whole egg, and a {liquid_1l_label} gives you the equivalent of {liquid_1l_whites} egg whites. The question for a bakery is less whether liquid works and more whether you will use an opened pack in time.',
    sections: [
      {
        id: 'figures', title: 'What one pack gives you',
        html: `${grid(['What you count', 'Liquid aquafaba'], [
  ['One egg white', '{white_liquid}g'],
  ['One whole egg', '{egg_liquid}g'],
  ['{liquid_1l_label}', '{liquid_1l_whites} egg whites'],
  ['{liquid_10l_label}', '{liquid_10l_whites} egg whites'],
  ['Once opened', '{opened_days} days at {opened_temp} °C'],
  ['Unopened', 'At least {unopened_months} months at room temperature'],
])}`,
      },
      {
        id: 'jobs', title: 'Start with the job the egg was doing',
        html: `<p>Not every recipe needs aquafaba in the same way, and the way you handle the liquid follows from what the egg was doing.</p>
<p>When it replaces egg white, chill it and whip it. That is the route for meringue, macaron shells, génoise and any preparation where the white was there to hold air. When it replaces a whole egg for binding and moisture, it can go into the preparation unwhipped: in cakes, cookies and muffins, <a href="{baking_href}">the baking method</a> combines it with the sugar before it meets the fat.</p>
<p>A baker replacing five egg whites in a meringue is asking aquafaba to build a foam. A baker replacing whole eggs in a cake is asking it to bind and carry moisture. Same pack, two different doses: {white_liquid}g per white, {egg_liquid}g per whole egg.</p>`,
      },
      {
        id: 'meringue', title: 'A worked example: one batch of meringue',
        html: `<p>For one batch of meringue, use {meringue_dose}g of liquid aquafaba with {meringue_sugar}g of caster sugar. That replaces {meringue_eggs} egg whites and makes about {meringue_yield} small meringues.</p>
<p>Chill the aquafaba to {meringue_chill} °C, then whip it in a clean, grease-free bowl to soft peaks. Add the sugar progressively and keep whipping until the meringue is glossy and stiff. <a href="{meringue_href}">The full meringue method</a> covers the drying and what to do when a batch goes wrong.</p>
<p>At that dose a {liquid_1l_label} makes {meringue_batches_1l} batches, or around {liquid_1l_meringues} small meringues. That is a more useful way to think about a pack than its volume: if the section turns out several trays of meringues, mousse or macarons across the same few days, the liquid moves through the kitchen on its own.</p>`,
      },
      {
        id: 'rhythm', title: 'When liquid fits better than powder',
        html: `<p>The deciding point is rarely the recipe. It is the production rhythm. Once opened, liquid VERY AQUAFABA is kept at {opened_temp} °C and used within {opened_days} days, so it suits a bakery that can open a pack and keep it moving.</p>
<p>Meringues on Monday, macaron shells on Tuesday, an egg-free cake on Wednesday: the recipes differ, but one open pack can move between them. Powder becomes the practical choice when those jobs are occasional or unpredictable, because you make up only what the day needs and <a href="{powder_href}">the rest of the pouch stays dry</a>.</p>
<p>Some kitchens keep both. Liquid covers regular production and busy periods. Powder sits behind it for quieter weeks, trials or recipes that come up less often. <a href="{storage_href}">How to store opened aquafaba</a> applies to both formats.</p>`,
      },
      {
        id: 'packs', title: 'How many egg whites do you use in three or four days?',
        html: `<p>That one count decides the pack. The {liquid_1l_label} replaces {liquid_1l_whites} egg whites and is small enough to use over several production days. The {liquid_10l_label} replaces {liquid_10l_whites}, and makes sense once aquafaba is moving through production by the kilo rather than by the occasional batch.</p>
<p>If the answer is around {liquid_1l_whites}, a {liquid_1l_label} is easy to rotate. If it is several hundred, the {liquid_10l_label} is worth discussing. If you would struggle to finish 1L in {opened_days} days, powder fits the calendar better.</p>
<p>You do not need a forecast. Take a normal week and count the egg whites across the preparations you would move to aquafaba: {meringue_eggs} for a batch of meringue, {chocolate_mousse_eggs} for a mousse, more across macarons and sponges. Convert the total at {white_liquid}g of liquid per white, and <a href="{supply_href}">plan the stock from that number</a>.</p>`,
      },
      {
        id: 'buy', title: 'Where to buy liquid VERY AQUAFABA',
        html: `<p>The buying route depends on the country and the volume. The {liquid_1l_label} is sold online on Amazon in the United States and Germany, and on InstantChef in France; <a href="{where_to_buy_href}">check the route for your country</a> before ordering.</p>
<p>For professional volumes, including the {liquid_10l_label}, ordering works through an enquiry. Send us your country, what you produce and your estimated monthly volume, and we confirm the formats available for your market, the minimum order and the lead time. <a href="{products_href}">Compare the liquid packs and powder pouches</a> first, then use the business option in the purchase window below.</p>`,
      },
    ],
    faq: [
      { q: 'How much liquid aquafaba replaces one egg white?', a: 'Use {white_liquid}g of liquid VERY AQUAFABA for one egg white. When it stands in for a white that was whipped, chill it before whipping.' },
      { q: 'How much liquid aquafaba replaces one whole egg?', a: 'Use {egg_liquid}g of liquid aquafaba per whole egg where it takes on the binding and moisture of the egg, as in cakes, cookies and muffins.' },
      { q: 'Do I need to whip liquid aquafaba?', a: 'Only when the egg white was providing air and structure, as in meringue or macaron shells. Where aquafaba replaces the binding and moisture of a whole egg, it goes in unwhipped.' },
      { q: 'How long does liquid aquafaba keep after opening?', a: 'Keep the opened pack at {opened_temp} °C and use it within {opened_days} days. Unopened, it keeps at least {unopened_months} months at room temperature.' },
      { q: 'How many egg whites does a 1L Tetrapak replace?', a: 'A {liquid_1l_label} replaces {liquid_1l_whites} egg whites, counted at {white_liquid}g of liquid aquafaba per white. For meringue, that is {meringue_batches_1l} batches of {meringue_dose}g.' },
      { q: 'Where can a bakery buy liquid VERY AQUAFABA?', a: 'The 1L pack is sold online on Amazon in the United States and Germany and on InstantChef in France. For the {liquid_10l_label} and other professional formats, send an enquiry with your country, application and monthly volume.' },
    ],
    links: ['powder', 'supply', 'pouch'],
  },
  powder: {
    title: 'Aquafaba Powder: What It Is and Which Pouch to Buy',
    h1: 'Aquafaba powder: what it is and which pouch to buy',
    crumb: 'Aquafaba powder',
    eyebrow: 'Powder and formats',
    description: 'Make up aquafaba powder, compare pouch sizes and choose a format for your kitchen. Includes egg white equivalents, recipe doses and storage advice.',
    lead: 'A meringue, a mousse or a mayonnaise can start with a pouch from the dry store. Aquafaba powder is a plant-based egg white replacement: {white_powder}g mixed with {white_water} ml of water replaces one egg white. VERY AQUAFABA comes in {small_pouch_g}g, {medium_pouch_g}g and {large_pouch_kg}kg pouches, so the choice starts with how much you will use after opening.',
    sections: [
      {
        id: 'make-up', title: 'What you put in the bowl',
        html: `<p>The powder is the dried format of VERY AQUAFABA. Add water before using it in a whipped recipe; it does not go straight into the almond flour or sugar. Once prepared, aquafaba can provide the foam in a meringue, the aeration in a mousse or the emulsion in mayonnaise.</p>
<p>For each egg white, measure {white_powder}g of powder and {white_water} ml of water. Together they make {white_total}g of prepared aquafaba. For a recipe counted in egg whites, <a href="{reconstitution_href}">scale the powder and water together</a>, then follow the handling instructions for that preparation.</p>
<p>Keep the dry pouch separate from the aquafaba you have made up. The storage rule for dry powder no longer applies once water has been added. Preparing just the amount you need leaves the rest of the pouch available for another oven day.</p>`,
      },
      {
        id: 'batches', title: 'How much powder goes into a recipe?',
        html: `<p>These quantities follow the published egg-white conversion used in our application guides. The liquid recipe dose and the mass obtained after mixing powder are different columns, so you can see what each figure means.</p>
${grid(['Preparation', 'Liquid recipe dose', 'Powder + water', 'Prepared mass'], [
  ['<a href="{meringue_href}">Meringue</a>', '{meringue_dose}g', '{meringue_powder}g + {meringue_water} ml', '{meringue_prepared}g'],
  ['<a href="{chocolate_mousse_href}">Chocolate mousse</a>', '{chocolate_mousse_dose}g', '{chocolate_mousse_powder}g + {chocolate_mousse_water} ml', '{chocolate_mousse_prepared}g'],
  ['<a href="{macarons_href}">Macarons</a>', '{macarons_dose}g', '{macarons_powder}g + {macarons_water} ml', '{macarons_prepared}g'],
  ['<a href="{mayonnaise_href}">Mayonnaise</a>', '{mayonnaise_dose}g', '{mayonnaise_powder}g + {mayonnaise_water} ml', '{mayonnaise_prepared}g'],
])}
<p>For example, the meringue preparation replaces {meringue_eggs} egg whites: {meringue_powder}g of powder plus {meringue_water} ml of water makes {meringue_prepared}g. The liquid version uses {meringue_dose}g. Follow the powder method in the matching guide rather than treating the liquid dose as the weight of water to add to any recipe.</p>`,
      },
      {
        id: 'choose', title: 'Which pouch fits your next oven days?',
        html: `<p>Start with the recipes you actually plan to make, then compare their powder doses with the amount in the pouch. You do not have to prepare the entire pack on opening.</p>
${grid(['Pouch', 'Egg whites replaced', 'Example using the meringue conversion'], [
  ['{small_pouch_g}g', '{powder_30g_whites}', '{small_meringue_batches} batches'],
  ['{medium_pouch_g}g', '{powder_200g_whites}', '{meringue_batches_200g} batches'],
  ['{large_pouch_kg}kg', '{powder_3kg_whites}', '{meringue_batches_3kg} batches'],
])}
<p>The small pouch gives you a measured amount for trying a preparation. The middle size covers several oven days without opening a production pack. For regular larger runs, compare your weekly use with the larger pouch before ordering. <a href="{pouch_href}">Work out how far the {medium_pouch_g}g pouch goes</a> if that is the size you are considering.</p>`,
      },
      {
        id: 'storage', title: 'How often will you use the opened pack?',
        html: `<p>Both formats keep for at least {unopened_months} months at room temperature before opening. Once opened, keep powder dry and closed until the best-before date on its pouch. The liquid keeps {opened_days} days at {opened_temp} °C.</p>
<p>If your kitchen will finish an opened liquid pack within that time, pouring straight into the bowl may suit the way you work. If the next meringue or macaron batch is further away, powder lets you measure each preparation separately. <a href="{storage_href}">Check how to store opened aquafaba</a> when planning the recipes that share a pack.</p>
<p>Compare the full range of <a href="{products_href}">liquid packs and powder pouches</a>, then use the purchase button below to find the buying route for your country or send a professional enquiry.</p>`,
      },
    ],
    faq: [
      { q: 'How much aquafaba powder replaces one egg white?', a: 'Use {white_powder}g of VERY AQUAFABA powder with {white_water} ml of water. This makes {white_total}g of prepared aquafaba and follows the published conversion for one egg white.' },
      { q: 'Can I add the powder straight to a meringue mixture?', a: 'Make it up with water before whipping. In a meringue, the aquafaba needs to form the foam before the sugar is incorporated; adding dry powder to the other ingredients does not follow that method.' },
      { q: 'Which pouch should I choose for a first recipe?', a: 'The {small_pouch_g}g pouch replaces {powder_30g_whites} egg whites. At {meringue_powder}g of powder per meringue preparation, it covers {small_meringue_batches} batches. Check the powder dose of the recipe you want to try.' },
      { q: 'How do I keep the pouch after opening?', a: 'Keep it dry and closed, and use it by the best-before date printed on the pouch. Only make up what you need; prepared aquafaba is no longer stored as dry powder.' },
      { q: 'Can I order powder for a professional kitchen?', a: 'Yes. Compare the {small_pouch_g}g, {medium_pouch_g}g and {large_pouch_kg}kg pouches, then use the business option in the purchase window to tell us your application and volumes.' },
    ],
    links: ['pouch', 'supply', 'vegan'],
  },

  pouch: {
    title: 'How Far Does a {medium_pouch_g}g Pouch of Aquafaba Powder Go?',
    h1: 'How far does a {medium_pouch_g}g pouch of aquafaba powder go?',
    crumb: '{medium_pouch_g}g pouch',
    eyebrow: 'Plan your pouch',
    description: 'A {medium_pouch_g}g pouch replaces {powder_200g_whites} egg whites. Turn that into meringue, mousse and mayonnaise batches, plan weekly use and keep opened powder correctly.',
    lead: 'A {medium_pouch_g}g pouch replaces {powder_200g_whites} egg whites, but the useful number is how many of your recipes it covers. Using our published powder doses, that means {meringue_batches_200g} meringue batches, {chocolate_mousse_batches_200g} chocolate mousse batches or {mayonnaise_batches_200g} mayonnaise batches. Those are alternatives: a pouch shared between recipes will cover a mixture of them.',
    sections: [
      {
        id: 'yield', title: 'Turn the pouch into batches',
        html: `<p>The table starts from the powder used in each preparation. Divide the amount in the pouch by that dose to find how many complete batches it covers. The water is added separately and does not use up any more powder.</p>
${grid(['Recipe', 'Powder per batch', 'Water per batch', 'Complete batches per pouch'], [
  ['Meringue', '{meringue_powder}g', '{meringue_water} ml', '{meringue_batches_200g}'],
  ['Chocolate mousse', '{chocolate_mousse_powder}g', '{chocolate_mousse_water} ml', '{chocolate_mousse_batches_200g}'],
  ['Macarons', '{macarons_powder}g', '{macarons_water} ml', '{macarons_batches_200g}'],
  ['Mayonnaise', '{mayonnaise_powder}g', '{mayonnaise_water} ml', '{mayonnaise_batches_200g}'],
])}
<p>Use the matching method to <a href="{meringue_href}">whip and bake meringues</a> or <a href="{macarons_href}">make the macaron shells</a>. The pouch tells you how much ingredient you have; the recipe determines what you do with it.</p>`,
      },
      {
        id: 'week', title: 'How many weeks of baking does that cover?',
        html: `<p>If you bake {weekly_meringue_batches} batches of meringue a week, you use {weekly_meringue_powder}g of powder. At that rate, a pouch covers {meringue_weeks} weeks. If you instead make {weekly_mayonnaise_batches} batches of mayonnaise a week, you use {weekly_mayonnaise_powder}g, giving {mayonnaise_weeks} weeks of that schedule.</p>
<p>Those are planning examples, not a promise about the life of an opened product. The best-before date still applies. If you make both recipes, add their powder use together rather than adding the two estimates of weeks.</p>
<p>For that combined schedule, the weekly total is {combined_weekly_powder}g. A pouch covers {combined_full_weeks} complete weeks, with {combined_powder_left}g left. Writing the total beside your prep list makes it easier to judge when to order the next pouch.</p>`,
      },
      {
        id: 'daily', title: 'Prepare the amount you need today',
        html: `<p>Count {white_powder}g of powder and {white_water} ml of water for each egg white being replaced. A meringue preparation counted as {meringue_eggs} whites therefore needs {meringue_powder}g and {meringue_water} ml. That mixture weighs {meringue_prepared}g; do not mistake the {meringue_dose}g liquid recipe dose for its final prepared weight.</p>
<p>Measure the powder before adding water, keep the unused powder dry and close the pouch. Follow the recipe's preparation and chilling steps before whipping. You can <a href="{reconstitution_href}">check the conversion for another egg-white count</a> without making up the whole bag.</p>
<p>Once water has been added, handle the prepared aquafaba as the liquid product. Keeping the pouch dry is what lets you return to it for a later batch.</p>`,
      },
      {
        id: 'open-pouch', title: 'What changes after the pouch is open?',
        html: `<p>An unopened pouch keeps at least {unopened_months} months at room temperature. After opening, keep it dry and closed until the best-before date on the pack. A quiet week does not require you to prepare the remaining powder.</p>
<p>The liquid format has a different opened-pack window: {opened_days} days at {opened_temp} °C. Compare that window with your oven days if you are deciding whether to change formats. <a href="{powder_href}">Compare all the powder pouch sizes</a> if the middle size is too much or too little for your usual recipes.</p>
<p>The {small_pouch_g}g pouch covers {powder_30g_whites} whites; the {large_pouch_kg}kg pouch covers {powder_3kg_whites}. Use the buying window below for the route available in your country, or choose the business enquiry for larger orders.</p>`,
      },
    ],
    faq: [
      { q: 'How many egg whites does a {medium_pouch_g}g pouch replace?', a: '{powder_200g_whites} egg whites, using {white_powder}g of powder with {white_water} ml of water for each one. The pouch contains dry powder, so add the water when you prepare it.' },
      { q: 'Can I make all the batches in the table from one pouch?', a: 'Each row assumes the entire pouch is used for that recipe. If you split it between meringues, mousse and mayonnaise, add the powder used by each batch to track what is left.' },
      { q: 'How much powder do I need for one meringue batch?', a: 'The published powder conversion uses {meringue_powder}g with {meringue_water} ml of water for {meringue_eggs} egg whites. The prepared mass is {meringue_prepared}g; the liquid version of the recipe uses {meringue_dose}g.' },
      { q: 'How long will the pouch last if I bake twice a week?', a: 'If each oven day uses one of our meringue preparations, the total is {weekly_meringue_powder}g of powder a week, so the pouch covers {meringue_weeks} weeks. Use it by its best-before date and keep it dry and closed between batches.' },
      { q: 'Where can I buy the {medium_pouch_g}g pouch?', a: 'Use the purchase button to select your country and buying route. If you are ordering for a bakery or kitchen, the business option lets you send your application and required volumes.' },
    ],
    links: ['powder', 'supply'],
  },

  vegan: {
    title: 'Is Aquafaba Vegan? Ingredients and Kitchen Uses',
    h1: 'Is aquafaba vegan?',
    crumb: 'Is aquafaba vegan?',
    eyebrow: 'Ingredients and use',
    description: 'Yes, aquafaba is plant-based. Check what VERY AQUAFABA contains, how it replaces egg white and what to check before calling a finished dish vegan.',
    lead: 'Yes. Aquafaba is plant-based, and VERY AQUAFABA is made from chickpeas and water, with no additives or preservatives. It can replace egg white in a recipe, but whether the finished dish is vegan depends on every other ingredient you put into it.',
    sections: [
      {
        id: 'ingredients', title: 'What is in VERY AQUAFABA?',
        html: `<p>Aquafaba is the cooking water from chickpeas. Its role in a recipe comes from what it can do: whip into foam, help bind ingredients or form an emulsion. It is not an egg product, even when you use it in a preparation usually made with egg white.</p>
<p>VERY AQUAFABA contains chickpeas and water. Both the liquid and powder formats are vegan. The powder is made up with water before use in a whipped preparation; choosing it does not add an animal ingredient.</p>
<p>Start with the ingredient list when checking whether a product fits your recipe. For the practical difference between formats, <a href="{powder_href}">see how the powder is prepared and portioned</a>. That choice is about how you work and store it, rather than whether the aquafaba itself is plant-based.</p>`,
      },
      {
        id: 'dish', title: 'Check the whole recipe, including the filling',
        html: `<p>Replacing egg white is one part of making a dish vegan. A mousse still contains its chocolate; a filled macaron includes its filling; a pastry may be finished with a cream or glaze. Check those ingredients as well as the component made with aquafaba.</p>
<p>A meringue made with aquafaba and suitable sugar can be vegan. For a chocolate mousse, choose chocolate that fits the same requirement. The aquafaba does not change the ingredients of the chocolate, and it does not make a dairy filling plant-based.</p>
<p>The same distinction matters when you describe a finished dessert. Name what you have changed, such as replacing egg white with aquafaba, and check the complete recipe before calling the whole dish vegan. The ingredient label and the finished recipe answer different questions.</p>`,
      },
      {
        id: 'allergens', title: 'Vegan and allergen information answer different questions',
        html: `<p>A plant-based recipe can still contain ingredients someone needs to avoid. The almonds in a dacquoise remain almonds after the egg white is replaced. Flour, chocolate and fillings also have their own ingredient and allergen information.</p>
<p>Read each label when choosing ingredients for a particular person. Do not use the word vegan as a substitute for checking those labels. The fact that VERY AQUAFABA contains chickpeas is relevant information in its own right.</p>
<p>For a concrete example, <a href="{dacquoise_href}">make the almond dacquoise with aquafaba</a>: the recipe uses aquafaba for its meringue and ground almonds for the pastry. Removing egg white does not remove the almonds.</p>`,
      },
      {
        id: 'dose', title: 'How much do you use instead of an egg?',
        html: `<p>The published conversion is {white_liquid}g of liquid aquafaba per egg white, or {white_powder}g of powder made up with {white_water} ml of water. A whole egg uses {egg_liquid}g of liquid aquafaba. Whole-egg substitution needs its own recipe checks because egg yolk and egg white do different jobs.</p>
<p>Begin with a preparation that already gives an aquafaba method. You can <a href="{meringue_href}">whip meringues</a> with {meringue_dose}g of liquid aquafaba and {meringue_sugar}g of sugar, or <a href="{chocolate_mousse_href}">fold a chocolate mousse</a> using {chocolate_mousse_dose}g of liquid aquafaba. Follow the method as well as the quantity.</p>
<p>For your own formula, <a href="{ratio_href}">check the egg substitution quantities</a> before scaling. Decide whether you are replacing whites or whole eggs first; a vegan ingredient does not make those two conversions interchangeable.</p>`,
      },
      {
        id: 'keep', title: 'Choose a format you will use in time',
        html: `<p>Unopened liquid and powder keep for at least {unopened_months} months at room temperature. After opening, liquid keeps {opened_days} days at {opened_temp} °C. Keep opened powder dry and closed until the pouch's best-before date.</p>
<p>If you only make the recipe occasionally, prepare the powder you need for that batch. If it is on the prep list regularly, compare your use with an opened liquid pack. Both choices keep the same plant-based ingredient at the centre of the recipe.</p>`,
      },
    ],
    faq: [
      { q: 'Is aquafaba vegan?', a: 'Yes. Aquafaba comes from cooking chickpeas, and VERY AQUAFABA contains chickpeas and water. Whether a finished dish is vegan depends on its other ingredients too.' },
      { q: 'Is aquafaba powder vegan as well?', a: 'Yes. VERY AQUAFABA powder is a vegan format of the product. Make it up with water before using it in whipped recipes.' },
      { q: 'Does using aquafaba make a chocolate mousse vegan?', a: 'Replacing egg white removes that egg ingredient. You still need to check the chocolate and any other additions or toppings before describing the whole mousse as vegan.' },
      { q: 'Can I use vegan to mean that a dish has no allergens?', a: 'No. For example, the almond dacquoise contains almonds even when its meringue is made with aquafaba. Check the ingredient and allergen information for the complete recipe.' },
      { q: 'How much liquid aquafaba replaces a whole egg?', a: 'The published conversion is {egg_liquid}g per whole egg. Use the guidance for the particular recipe and check its other liquids; this is a different substitution from replacing only egg white.' },
    ],
    links: ['dacquoise', 'powder', 'supply'],
  },

  supply: {
    title: 'A Reliable Egg White Replacement for Kitchens and Bakeries',
    h1: 'A reliable egg white replacement for kitchens and bakeries',
    crumb: 'Egg white supply',
    eyebrow: 'For kitchens and bakeries',
    description: 'Plan aquafaba stock from the egg whites your kitchen uses. Compare liquid packs and powder pouches, opened-pack storage and a weekly worked example.',
    lead: 'Meringues, macarons and mousses start with the egg whites available for the day. VERY AQUAFABA gives you a plant-based replacement that keeps at least {unopened_months} months at room temperature before opening. Count {white_liquid}g of liquid per egg white, then choose the pack around how quickly your kitchen will use it.',
    sections: [
      {
        id: 'recipes', title: 'Start with the work the egg white is doing',
        html: `<p>Choose a recipe where you can check the aquafaba quantity and method together. In a meringue, the white supplies the foam; in a mousse, that foam is folded into the mixture. The preparation determines what you need to watch in the bowl.</p>
<p>For a starting point, <a href="{meringue_href}">make a batch of meringues</a> using {meringue_dose}g of liquid aquafaba, or <a href="{macarons_href}">follow the macaron method</a> using {macarons_dose}g. These are specific recipes, not a promise that every formula will work unchanged.</p>
<p>A whole-egg substitution is a separate calculation. The published liquid conversion is {egg_liquid}g per whole egg, compared with {white_liquid}g per white. Check which ingredient your recipe calls for before converting the order sheet.</p>`,
      },
      {
        id: 'rotation', title: 'Will the opened liquid pack be used in time?',
        html: `<p>Liquid aquafaba pours straight into the bowl. Once the pack is open, it keeps {opened_days} days at {opened_temp} °C. Look at the recipes scheduled inside that window, rather than choosing a pack just because it covers a whole week's total.</p>
<p>Powder lets you prepare individual batches. Use {white_powder}g with {white_water} ml of water per egg white, and keep the remaining powder dry and closed until its best-before date. That can suit oven days separated by gaps.</p>
<p>The unopened shelf life and the opened-pack window are different measures. An unopened pack can wait at room temperature for at least {unopened_months} months, but that does not extend the time available after opening liquid. <a href="{storage_href}">Plan the storage of opened packs</a> alongside the prep list.</p>`,
      },
      {
        id: 'packs', title: 'Match the packs to your egg-white count',
        html: `<p>These are the published pack equivalences. Use them to compare the order with your regular recipes, then check that the opened pack will turn over within its storage window.</p>
${grid(['Format', 'Pack', 'Egg whites replaced'], [
  ['Liquid', '{liquid_1l_label}', '{liquid_1l_whites}'],
  ['Liquid', '{liquid_10l_label}', '{liquid_10l_whites}'],
  ['Liquid', '{liquid_1t_label}', '{liquid_1t_whites}'],
  ['Powder', '{small_pouch_g}g pouch', '{powder_30g_whites}'],
  ['Powder', '{medium_pouch_g}g pouch', '{powder_200g_whites}'],
  ['Powder', '{large_pouch_kg}kg pouch', '{powder_3kg_whites}'],
])}
<p>For example, a week of {stock_whites} egg whites corresponds to {stock_liquid}g of liquid aquafaba. Using the powder conversion, it needs {stock_powder}g with {stock_water} ml of water, prepared as the recipes are made. That uses half a {medium_pouch_g}g pouch. The liquid and powder figures describe their respective conversions, not identical prepared weights.</p>`,
      },
      {
        id: 'schedule', title: 'Put the quantities on the prep list',
        html: `<p>Record the application, the number of batches and the aquafaba dose for each day. Add the recipes that can share an opened pack within its storage window. That gives you a useful basis for choosing between separate liquid packs and powder weighed by the batch.</p>
<p>For a recipe with an established powder dose, <a href="{pouch_href}">calculate the number of batches in a {medium_pouch_g}g pouch</a>. Keep the water alongside the powder quantity on the sheet, so it is not mistaken for a dry ingredient added directly to a whipped preparation.</p>
<p>When ordering, tell us the format, application and volume you need. You can <a href="{products_href}">compare the available packs</a> first, then use the business option below to send an enquiry. The purchase window also shows the buying route for your country.</p>`,
      },
    ],
    faq: [
      { q: 'How many egg whites does a {liquid_1l_label} replace?', a: 'The published pack equivalence is {liquid_1l_whites} egg whites. For recipe conversion, use {white_liquid}g of liquid aquafaba per egg white.' },
      { q: 'Can I keep unopened aquafaba outside the fridge?', a: 'Yes. Both formats keep at least {unopened_months} months at room temperature before opening. Once opened, liquid keeps {opened_days} days at {opened_temp} °C.' },
      { q: 'Which format suits occasional oven days?', a: 'Powder lets you weigh the amount for each batch while keeping the remaining pouch dry and closed. Compare that with how much liquid you would use within {opened_days} days of opening a pack.' },
      { q: 'Does every recipe stay the same when I replace egg white?', a: 'Use an aquafaba method for the preparation you are making and check its quantities and handling steps. The examples here support specific recipes; they do not establish that every existing formula can be changed without a trial.' },
      { q: 'How do I enquire about larger packs?', a: 'Choose the business option in the purchase window and give the application, format and quantities you need. Liquid is available in a {liquid_10l_label} and a {liquid_1t_label}; the larger powder pouch is {large_pouch_kg}kg.' },
    ],
    links: ['powder', 'pouch', 'dacquoise'],
  },

  dacquoise: {
    title: 'Almond Dacquoise with Aquafaba: The Pastry Recipe',
    h1: 'Almond dacquoise with aquafaba: the pastry recipe',
    crumb: 'Almond dacquoise',
    eyebrow: 'Pastry recipe',
    description: 'Make an almond dacquoise with {dacquoise_aquafaba}g of aquafaba. Follow the ingredient quantities and baking method, with a powder conversion and double-batch table.',
    lead: 'An almond dacquoise starts with a meringue, then takes ground almonds and icing sugar before it goes into a frame or ring. This recipe uses {dacquoise_aquafaba}g of VERY AQUAFABA in place of the egg white and bakes for {dacquoise_minutes} minutes at {dacquoise_oven} °C. The almonds stay in the recipe, so the finished pastry contains nuts.',
    sections: [
      {
        id: 'ingredients', title: 'What goes into the dacquoise',
        html: `<p>Keep the sugar for the meringue separate from the icing sugar. They enter at different points: the first goes into the whipped aquafaba, while the icing sugar is added with the ground almonds and the other dry ingredients.</p>
{dacquoise_ingredients}
<p>The aquafaba quantity is a measured recipe dose. It is equivalent to a little over {dacquoise_whites_floor} egg whites using the published {white_liquid}g conversion, so use the stated {dacquoise_aquafaba}g rather than rounding down to a whole number of whites. The weight in the ingredient list is the reference for this batch.</p>`,
      },
      {
        id: 'method', title: 'Make the meringue before adding the almonds',
        html: `<p>The meringue is built first. Only then do the ground almonds, icing sugar, baking powder and cornflour go in. Have those ingredients weighed before you start, so you can follow the order without stopping to measure them.</p>
{dacquoise_method}
<p>Use a frame or ring for the bake. Record its dimensions and the depth of the mixture when you try the recipe, so you can repeat the same preparation. Check the bake in the mould you use before setting a production yield.</p>`,
      },
      {
        id: 'foam', title: 'Check the foam before it carries the dry ingredients',
        html: `<p>Start with a clean bowl and whisk. Chill the aquafaba before whipping; the meringue guidance uses {meringue_chill} °C. A weak foam at this stage will still be weak when the dry ingredients are added.</p>
<p>Add the sugar gradually to the whipped aquafaba, then check that the meringue holds before continuing. If it is not developing as expected, <a href="{meringue_href}">check the meringue method and troubleshooting</a> while the mixture is still at that stage.</p>
<p>The almonds belong after the meringue has formed. Keeping that sequence clear matters more than converting the recipe to an approximate egg count: you need both the measured quantity and the foam it produces.</p>`,
      },
      {
        id: 'powder', title: 'Using powder for the measured aquafaba dose',
        html: `<p>The reconstitution rule is {white_powder}g of powder with {white_water} ml of water, giving {white_total}g of aquafaba. For this batch, {dacquoise_powder}g with {dacquoise_water} ml gives {dacquoise_prepared}g. Weigh out {dacquoise_aquafaba}g of that prepared mixture for the recipe rather than treating the entire mixture as if it weighed {dacquoise_aquafaba}g.</p>
<p>This is a calculation from the preparation rule. Follow the powder's preparation instructions and chill the measured aquafaba before whipping. <a href="{reconstitution_href}">Check the powder and water proportions</a> if you are making a different amount.</p>
<p>Keep the unused dry powder separate and close its pouch. The batch you have made up now needs the handling of liquid aquafaba, not the storage of dry powder.</p>`,
      },
      {
        id: 'double', title: 'Scale every ingredient from the same batch',
        html: `<p>For a double batch, multiply each ingredient by the same factor. Keep the individual quantities on the prep sheet so that the sugars remain separate and the small amounts of baking powder and cornflour are included.</p>
{dacquoise_double_table}
<p>If preparing that aquafaba from powder, {dacquoise_double_powder}g with {dacquoise_double_water} ml makes {dacquoise_double_prepared}g. Weigh the {dacquoise_double_aquafaba}g needed for the double recipe. Doubling the ingredients does not mean doubling the baking time; the reference bake remains {dacquoise_minutes} minutes at {dacquoise_oven} °C.</p>
<p>For regular production, <a href="{supply_href}">plan the aquafaba stock around your oven days</a>. Keep the recipe dose separate from pack equivalences, which are useful for ordering but do not replace the quantities on the scale.</p>`,
      },
    ],
    faq: [
      { q: 'Can I make almond dacquoise without egg white?', a: 'Yes. This recipe uses {dacquoise_aquafaba}g of VERY AQUAFABA for the meringue, followed by sugar, icing sugar, ground almonds, baking powder and cornflour. Follow the ingredient quantities and the order of the method.' },
      { q: 'What temperature and time does this recipe use?', a: 'The reference bake is {dacquoise_minutes} minutes at {dacquoise_oven} °C in a frame or ring. Check the bake in the mould you use before fixing a production yield.' },
      { q: 'How much powder should I prepare for the recipe?', a: 'Make up {dacquoise_powder}g of powder with {dacquoise_water} ml of water. This produces {dacquoise_prepared}g of aquafaba; weigh out the {dacquoise_aquafaba}g required by the recipe. The prepared mass and the recipe dose are not the same number.' },
      { q: 'Does the dacquoise contain nuts?', a: 'Yes. It contains ground almonds. Replacing egg white with aquafaba does not remove those almonds or change the ingredient information of the other components.' },
      { q: 'Do I double the bake when I double the ingredients?', a: 'No. The reference method is {dacquoise_minutes} minutes at {dacquoise_oven} °C. Scale the ingredients together, keep the method in the same order and check the bake for the frames or rings you use.' },
    ],
    links: ['supply', 'vegan', 'powder'],
  },
};
