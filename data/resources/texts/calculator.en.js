// Quantity calculator pages, English. One entry per application; every figure is a
// {token} filled from facts.json (an unknown token fails the build). No em/en dash.
// The calculator itself (inputs and result table) is rendered by the template; this
// module carries the copy around it, written in the language of the guides and recipes.
export default {
  meringue: {
    title: 'Aquafaba Meringue Quantity Calculator - VERY AQUAFABA',
    h1: 'How much aquafaba for meringue? Quantity calculator',
    description: 'Scale the VERY AQUAFABA meringue recipe to any number of batches or meringues: liquid aquafaba, sugar, and the powder and water equivalent, from the published recipe.',
    lead: 'One batch of the VERY AQUAFABA meringue recipe takes {dose} g of liquid aquafaba and {sugar} g of sugar and makes {yield}. Enter how many batches or how many meringues you need and the calculator scales the aquafaba, the sugar and the powder and water equivalent for you.',
    example: { batches: 5 },
    sections: [
      {
        id: 'reference',
        title: 'The reference batch, from the recipe',
        html: `<p>Every figure on this page scales from the same starting point: the meringue recipe published on this site. It calls for {dose} g of VERY AQUAFABA liquid, whipped with {sugar} g of caster sugar, and yields {yield} of 3 to 4 cm. That single batch replaces {eggs} egg whites, because {white_liquid} g of liquid aquafaba stands in for one egg white.</p>
<p>In powder, the same batch is {powder_dose} g of VERY AQUAFABA powder made up with {water_dose} ml of water. The rule behind it is the one printed on every guide: {white_powder} g of powder + {white_water} ml of water = {white_total} g of aquafaba, the same mass as the liquid, and {white_powder} g of powder replaces one egg white.</p>
<p>The optional stabiliser, 2 g of cream of tartar or 1 g of citric acid per batch, scales with the batch too. It is not in the calculator because many kitchens leave it out.</p>`,
      },
      {
        id: 'scaling',
        title: 'What scales and what does not',
        html: `<p>Aquafaba, sugar, powder and water scale in a straight line: twice the meringues, twice of each. Three things do not.</p>
<ul>
<li>Whipping time. The reference batch reaches soft peaks in {whip} minutes on high speed. A fuller bowl takes longer to climb, so judge the foam by its peaks, not by the clock.</li>
<li>Drying. Trays dry at {bake} °C with the fan off for {bake_time} hours whatever the batch size. More meringues mean more trays, not a hotter oven.</li>
<li>Temperature. The aquafaba goes into the bowl at {chill} °C, and made-up powder is chilled to the same point, for one batch or for ten.</li>
</ul>
<p>Whip what your mixer bowl holds comfortably and pipe each bowl straight away: aquafaba foam loses volume if it stands while the next bowl whips.</p>`,
      },
      {
        id: 'packs',
        title: 'How many batches a pack gives you',
        html: `<p>Once you know your number of batches, the pack size follows.</p>
<table class="va-guide-grid">
<thead><tr><th scope="col">Pack</th><th scope="col">Batches</th><th scope="col">Meringues, about</th></tr></thead>
<tbody>
<tr><td data-label="Pack">1 L Tetrapak of liquid</td><td data-label="Batches">{batches_1l}</td><td data-label="Meringues, about">{pieces_1l}</td></tr>
<tr><td data-label="Pack">10 L bag-in-box of liquid</td><td data-label="Batches">{batches_10l}</td><td data-label="Meringues, about">{pieces_10l}</td></tr>
<tr><td data-label="Pack">200 g pouch of powder</td><td data-label="Batches">{batches_200g}</td><td data-label="Meringues, about">{pieces_200g}</td></tr>
<tr><td data-label="Pack">3 kg pouch of powder</td><td data-label="Batches">{batches_3kg}</td><td data-label="Meringues, about">{pieces_3kg}</td></tr>
</tbody>
</table>
<p>Liquid or powder is a separate decision, made in the <a href="{guide_href}">meringue guide</a>: it depends on how often you fill the oven and on the {opened_days} days an opened liquid pack lasts in the fridge.</p>`,
      },
      {
        id: 'example',
        title: 'Worked example: {ex_pieces} meringues for an event',
        html: `<p>A pastry section needs {ex_pieces} small meringues for a buffet. That is {ex_batches} batches of the reference recipe.</p>
<ul>
<li>Liquid: {ex_dose} g of VERY AQUAFABA and {ex_sugar} g of caster sugar, replacing {ex_eggs} egg whites.</li>
<li>Powder: {ex_powder} g of powder made up with {ex_water} ml of water, then the same {ex_sugar} g of sugar.</li>
<li>Oven: {ex_batches} batches piped at 3 to 4 cm fill several trays, and each tray dries for the full {bake_time} hours at {bake} °C.</li>
</ul>
<p>Whipped in one go, that volume needs a large planetary mixer. In a bench mixer, whip it as {ex_batches} separate batches and pipe each one before the next starts.</p>`,
      },
    ],
    faq: [
      { q: 'How many meringues does one batch make?', a: '{yield} of 3 to 4 cm, from {dose} g of aquafaba and {sugar} g of sugar. Pipe them smaller and the count goes up; the quantities do not change.' },
      { q: 'How much aquafaba replaces one egg white?', a: '{white_liquid} g of liquid, or {white_powder} g of powder made up with {white_water} ml of water. One batch of meringue replaces {eggs} egg whites.' },
      { q: 'Can I halve the batch?', a: 'Yes. {half_dose} g of aquafaba and {half_sugar} g of sugar make about {half_yield} meringues. A small volume in a large bowl takes longer to whip, so use the smallest bowl of your mixer.' },
      { q: 'Does a double batch need twice the whipping time?', a: 'No. It needs more time than a single batch, but not twice as much. Whip to soft peaks, which take {whip} minutes for the reference batch, and add the sugar only then.' },
      { q: 'How much water do I add to the powder?', a: '{white_water} ml for every {white_powder} g of powder. For one batch of meringue that is {powder_dose} g of powder and {water_dose} ml of water; the calculator scales both.' },
      { q: 'Where does the sugar figure come from?', a: 'From the meringue recipe on this site: equal weights, {sugar} g of sugar for {dose} g of aquafaba. The full method is in the [meringue recipe]({recipe_href}).' },
    ],
  },

  'chocolate-mousse': {
    title: 'Aquafaba Chocolate Mousse Quantity Calculator - VERY AQUAFABA',
    h1: 'How much aquafaba for chocolate mousse? Quantity calculator',
    description: 'Scale the VERY AQUAFABA chocolate mousse recipe to any number of portions or batches: liquid aquafaba, sugar, dark chocolate, and the powder and water equivalent.',
    lead: 'One batch of the VERY AQUAFABA chocolate mousse recipe takes {dose} g of liquid aquafaba, {sugar} g of sugar and {chocolate} g of dark chocolate, and makes {yield}. Enter how many portions or how many batches you need and the calculator scales all four, plus the powder and water equivalent.',
    example: { batches: 5 },
    sections: [
      {
        id: 'reference',
        title: 'The reference batch, from the recipe',
        html: `<p>The starting point is the chocolate mousse recipe published on this site: {dose} g of VERY AQUAFABA liquid, {sugar} g of caster sugar and {chocolate} g of dark couverture, for {yield}. The whipped aquafaba replaces both the egg whites and the cream, so one batch stands in for {eggs} egg whites, at {white_liquid} g of liquid per white.</p>
<p>In powder, the same batch is {powder_dose} g of VERY AQUAFABA powder made up with {water_dose} ml of water: {white_powder} g of powder + {white_water} ml of water = {white_total} g of aquafaba, the same mass as the liquid, and {white_powder} g of powder replaces one egg white.</p>
<p>The optional stabiliser, 2 g of cream of tartar or 1 g of citric acid per batch, scales with the batch and is left out of the calculator.</p>`,
      },
      {
        id: 'scaling',
        title: 'What scales and what does not',
        html: `<p>Aquafaba, sugar, chocolate, powder and water scale in a straight line. The two temperatures and the setting time do not.</p>
<ul>
<li>The chocolate is melted to 45 to 50 °C and cooled to {fold_temp} °C before folding, for one batch or for ten. Chocolate above {fold_temp} °C melts the foam.</li>
<li>Whipping to soft peaks takes about {whip} minutes for the reference batch; a fuller bowl takes longer, so judge by the peaks.</li>
<li>The mousse sets for at least {set_time} hours in the fridge whatever the batch, and keeps {keep} days.</li>
</ul>
<p>Large batches? Emulsify part of the chocolate with a little aquafaba first, then fold in the rest of the foam. It keeps big runs homogeneous.</p>`,
      },
      {
        id: 'packs',
        title: 'How many batches a pack gives you',
        html: `<p>Once you know your number of batches, the pack size follows.</p>
<table class="va-guide-grid">
<thead><tr><th scope="col">Pack</th><th scope="col">Batches</th><th scope="col">Portions, about</th></tr></thead>
<tbody>
<tr><td data-label="Pack">1 L Tetrapak of liquid</td><td data-label="Batches">{batches_1l}</td><td data-label="Portions, about">{pieces_1l}</td></tr>
<tr><td data-label="Pack">10 L bag-in-box of liquid</td><td data-label="Batches">{batches_10l}</td><td data-label="Portions, about">{pieces_10l}</td></tr>
<tr><td data-label="Pack">200 g pouch of powder</td><td data-label="Batches">{batches_200g}</td><td data-label="Portions, about">{pieces_200g}</td></tr>
<tr><td data-label="Pack">3 kg pouch of powder</td><td data-label="Batches">{batches_3kg}</td><td data-label="Portions, about">{pieces_3kg}</td></tr>
</tbody>
</table>
<p>Liquid or powder is decided in the <a href="{guide_href}">chocolate mousse guide</a>: it depends on how often you make mousse and on the {opened_days} days an opened liquid pack lasts in the fridge.</p>`,
      },
      {
        id: 'example',
        title: 'Worked example: {ex_pieces} portions for a banquet',
        html: `<p>A kitchen needs {ex_pieces} portions of mousse for a banquet. That is {ex_batches} batches of the reference recipe.</p>
<ul>
<li>Liquid: {ex_dose} g of VERY AQUAFABA, {ex_sugar} g of caster sugar and {ex_chocolate} g of dark chocolate, replacing {ex_eggs} egg whites.</li>
<li>Powder: {ex_powder} g of powder made up with {ex_water} ml of water, then the same sugar and chocolate.</li>
<li>Fridge: {ex_pieces} cups need chilled space for at least {set_time} hours before service.</li>
</ul>
<p>Have all the chocolate cooled to {fold_temp} °C before the first bowl is whipped: the foam must not stand waiting for it.</p>`,
      },
    ],
    faq: [
      { q: 'How many portions does one batch make?', a: '{yield}, from {dose} g of aquafaba, {sugar} g of sugar and {chocolate} g of dark chocolate. Smaller cups give more portions; the quantities do not change.' },
      { q: 'How much aquafaba replaces one egg white?', a: '{white_liquid} g of liquid, or {white_powder} g of powder made up with {white_water} ml of water. One batch of mousse replaces {eggs} egg whites and the cream.' },
      { q: 'Can I halve the batch?', a: 'Yes. {half_dose} g of aquafaba, {half_sugar} g of sugar and {half_chocolate} g of chocolate make about {half_yield} portions. Use the smallest bowl of your mixer for a small volume.' },
      { q: 'Does the chocolate temperature change with the batch size?', a: 'No. Cool it to {fold_temp} °C before folding, whatever the quantity. Chocolate above {fold_temp} °C melts the foam and the mousse collapses as it goes in.' },
      { q: 'How much water do I add to the powder?', a: '{white_water} ml for every {white_powder} g of powder. For one batch of mousse that is {powder_dose} g of powder and {water_dose} ml of water; the calculator scales both.' },
      { q: 'Where do the chocolate and sugar figures come from?', a: 'From the chocolate mousse recipe on this site: {chocolate} g of dark couverture and {sugar} g of caster sugar for {dose} g of aquafaba. The full method is in the [chocolate mousse recipe]({recipe_href}).' },
    ],
  },

  mayonnaise: {
    title: 'Vegan Mayo with Aquafaba: Quantity Calculator - VERY AQUAFABA',
    h1: 'How much aquafaba for vegan mayo? Quantity calculator',
    description: 'Scale the VERY AQUAFABA mayonnaise recipe to the grams of mayo or the number of batches you need: aquafaba, oil, mustard, salt, lemon juice, and the powder and water equivalent.',
    lead: 'One batch of the VERY AQUAFABA mayonnaise recipe takes {dose} g of liquid aquafaba and {oil} g of oil and makes {yield} of mayonnaise. Enter how many grams of mayo or how many batches you need and the calculator scales the aquafaba, the oil, the mustard, the salt, the lemon juice and the powder and water equivalent.',
    example: { batches: 4 },
    sections: [
      {
        id: 'reference',
        title: 'The reference batch, from the recipe',
        html: `<p>The starting point is the mayonnaise recipe published on this site: {dose} g of VERY AQUAFABA liquid, {mustard} g of Dijon mustard, {salt} g of salt, {oil} g of neutral oil and {lemon} g of lemon juice or white wine vinegar, for {yield}. Here aquafaba stands in for the egg yolk, not the white: nothing is whipped, it is a cold emulsion built with shear. The oil to aquafaba ratio is {oil_ratio} by weight.</p>
<p>In powder, the same batch is {powder_dose} g of VERY AQUAFABA powder made up with {water_dose} ml of water, on a fine scale: {white_powder} g of powder + {white_water} ml of water = {white_total} g of aquafaba, the same mass as the liquid.</p>`,
      },
      {
        id: 'scaling',
        title: 'What scales and what does not',
        html: `<p>Aquafaba, oil, mustard, salt, lemon juice, powder and water scale in a straight line. Two things do not.</p>
<ul>
<li>Temperature. The aquafaba goes in chilled, at {chill} °C, for one batch or for ten. Warm aquafaba gives a slow, unstable emulsion.</li>
<li>Shear. The oil goes in as a thin, steady stream with the blender at full speed. Large batches need a high-shear blender to control droplet size and keep the emulsion stable.</li>
</ul>
<p>Made hygienically and refrigerated at once, the mayo keeps up to {keep} days in the fridge whatever the batch size.</p>`,
      },
      {
        id: 'packs',
        title: 'How many batches a pack gives you',
        html: `<p>Once you know your number of batches, the pack size follows.</p>
<table class="va-guide-grid">
<thead><tr><th scope="col">Pack</th><th scope="col">Batches</th><th scope="col">Mayonnaise, about</th></tr></thead>
<tbody>
<tr><td data-label="Pack">1 L Tetrapak of liquid</td><td data-label="Batches">{batches_1l}</td><td data-label="Mayonnaise, about">{pieces_1l} g</td></tr>
<tr><td data-label="Pack">10 L bag-in-box of liquid</td><td data-label="Batches">{batches_10l}</td><td data-label="Mayonnaise, about">{pieces_10l} g</td></tr>
<tr><td data-label="Pack">200 g pouch of powder</td><td data-label="Batches">{batches_200g}</td><td data-label="Mayonnaise, about">{pieces_200g} g</td></tr>
<tr><td data-label="Pack">3 kg pouch of powder</td><td data-label="Batches">{batches_3kg}</td><td data-label="Mayonnaise, about">{pieces_3kg} g</td></tr>
</tbody>
</table>
<p>Liquid or powder is decided in the <a href="{guide_href}">vegan mayo guide</a>: it depends on how often you make mayo and on the {opened_days} days an opened liquid pack lasts in the fridge.</p>`,
      },
      {
        id: 'example',
        title: 'Worked example: {ex_batches} batches for a foodservice kitchen',
        html: `<p>A kitchen needs about {ex_pieces} g of mayonnaise for the week. That is {ex_batches} batches of the reference recipe.</p>
<ul>
<li>Liquid: {ex_dose} g of VERY AQUAFABA, {ex_oil} g of oil, {ex_mustard} g of mustard, {ex_salt} g of salt and {ex_lemon} g of lemon juice or vinegar, replacing {ex_eggs} egg whites' worth of aquafaba.</li>
<li>Powder: {ex_powder} g of powder made up with {ex_water} ml of water, then the same oil, mustard, salt and lemon.</li>
<li>Equipment: at this volume, move to a high-shear blender and drizzle the oil in a thin, steady stream.</li>
</ul>
<p>Transfer to clean containers and refrigerate at once: the {keep} days of shelf life start there.</p>`,
      },
    ],
    faq: [
      { q: 'How much mayonnaise does one batch make?', a: '{yield}, from {dose} g of aquafaba and {oil} g of oil. Enter the grams you need and the calculator gives the batches and every ingredient.' },
      { q: 'How much aquafaba replaces the egg in mayonnaise?', a: 'In this recipe aquafaba stands in for the yolk: {dose} g of liquid for {oil} g of oil, a {oil_ratio} ratio by weight. In powder, {powder_dose} g made up with {water_dose} ml of water.' },
      { q: 'Can I halve the batch?', a: 'Yes. {half_dose} g of aquafaba and {half_oil} g of oil make about {half_yield} g of mayo. Use a tall, narrow vessel so the stick blender keeps the shear high on a small volume.' },
      { q: 'Does the oil go in faster on a large batch?', a: 'No. The oil always goes in as a thin, steady stream with the blender at full speed. If the emulsion never starts, the oil went in too fast or the shear was too low.' },
      { q: 'How much water do I add to the powder?', a: '{white_water} ml for every {white_powder} g of powder. For one batch of mayo that is {powder_dose} g of powder and {water_dose} ml of water, weighed on a fine scale; the calculator scales both.' },
      { q: 'Where do the oil and mustard figures come from?', a: 'From the mayonnaise recipe on this site: {oil} g of neutral oil, {mustard} g of Dijon mustard, {salt} g of salt and {lemon} g of lemon juice or vinegar for {dose} g of aquafaba. The full method is in the [mayonnaise recipe]({recipe_href}).' },
    ],
  },

  baking: {
    title: 'Aquafaba Egg Substitution Calculator for Baking - VERY AQUAFABA',
    h1: 'How much aquafaba replaces the eggs in your bake? Substitution calculator',
    description: 'Enter the whole eggs, egg whites and yolks of your recipe and get the VERY AQUAFABA liquid or powder that replaces them, from the equivalences on the Products page.',
    lead: 'Baking has no single dose: the quantity follows the eggs of your own recipe. {egg_liquid} g of VERY AQUAFABA liquid replaces one whole egg and {white_liquid} g replaces one egg white. Enter the eggs of your formula and the calculator gives the liquid, the powder with its water, and the oil to add when you replace yolks.',
    example: { eggs: 3, whites: 2 },
    sections: [
      {
        id: 'rule',
        title: 'The equivalences behind the calculator',
        html: `<p>The figures come from the Products page and the baking guide of this site. One whole egg = {egg_liquid} g of liquid aquafaba. One egg white = {white_liquid} g of liquid, or {white_powder} g of powder made up with {white_water} ml of water ({white_total} g of aquafaba). One egg yolk = {yolk_liquid} g of aquafaba plus {yolk_oil} g of oil.</p>
<p>The powder for a whole egg follows the same ratio: {egg_powder} g of powder made up with {egg_water} ml of water. The calculator applies these four equivalences to the eggs you type in and adds them up.</p>`,
      },
      {
        id: 'how',
        title: 'How the aquafaba goes into the bake',
        html: `<p>Aquafaba does three jobs in baking: it traps air, it binds, and it holds moisture. So it works in two ways. Whip it when it replaces egg whites. Pour it in as it is when it replaces the binding and moisture of whole eggs.</p>
<ul>
<li>Sponges and génoise: whipped at {chill} °C, then folded in gently and promptly.</li>
<li>Cakes, cookies and muffins: mixed with the sugar before it meets the fat.</li>
<li>Cookies and brownies: added directly, unwhipped, for binding and moisture.</li>
<li>Brioche and sweet rolls: unwhipped, with the liquids of the dough.</li>
</ul>
<p>Replacing whole eggs? Aquafaba carries more water than egg. Reduce the milk or water slightly, or raise the dry ingredients, and bake fully. Replacing only the whites normally needs no adjustment. The <a href="{guide_href}">baking guide</a> takes each case in turn.</p>`,
      },
      {
        id: 'packs',
        title: 'How many eggs a pack replaces',
        html: `<p>Once you know how many eggs your production replaces, the pack size follows.</p>
<table class="va-guide-grid">
<thead><tr><th scope="col">Pack</th><th scope="col">Whole eggs</th><th scope="col">Egg whites</th></tr></thead>
<tbody>
<tr><td data-label="Pack">1 L Tetrapak of liquid</td><td data-label="Whole eggs">{eggs_1l}</td><td data-label="Egg whites">{whites_1l}</td></tr>
<tr><td data-label="Pack">10 L bag-in-box of liquid</td><td data-label="Whole eggs">{eggs_10l}</td><td data-label="Egg whites">{whites_10l}</td></tr>
<tr><td data-label="Pack">200 g pouch of powder</td><td data-label="Whole eggs">{eggs_200g}</td><td data-label="Egg whites">{whites_200g}</td></tr>
<tr><td data-label="Pack">3 kg pouch of powder</td><td data-label="Whole eggs">{eggs_3kg}</td><td data-label="Egg whites">{whites_3kg}</td></tr>
</tbody>
</table>
<p>Unopened, both formats keep at least {unopened_months} months at room temperature. An opened liquid pack lasts {opened_days} days in the fridge; an opened pouch of powder only needs to stay dry and closed.</p>`,
      },
      {
        id: 'example',
        title: 'Worked example: a recipe with {ex_eggs} eggs and {ex_whites} egg whites',
        html: `<p>A cake formula calls for {ex_eggs} whole eggs and {ex_whites} egg whites.</p>
<ul>
<li>Liquid: {ex_liquid} g of VERY AQUAFABA in total. The whites' share is whipped at {chill} °C; the whole eggs' share goes in as it is, with the sugar before the fat.</li>
<li>Powder: {ex_powder} g of powder made up with {ex_water} ml of water, then used the same way.</li>
<li>Adjustment: the whole eggs are swapped, so reduce the milk or water slightly, or add dry ingredients, and bake fully.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'How much aquafaba replaces one whole egg?', a: '{egg_liquid} g of VERY AQUAFABA liquid, or {egg_powder} g of powder made up with {egg_water} ml of water. Whole eggs bring water with them, so reduce the other liquids slightly.' },
      { q: 'How much aquafaba replaces one egg white?', a: '{white_liquid} g of liquid, or {white_powder} g of powder made up with {white_water} ml of water. Replacing only the whites normally needs no other adjustment.' },
      { q: 'Can aquafaba replace the yolk?', a: 'For binding and richness, {yolk_liquid} g of aquafaba plus {yolk_oil} g of oil stand in for one yolk. The calculator adds the oil when you enter yolks.' },
      { q: 'Do I whip it or pour it in?', a: 'Whip it, chilled to {chill} °C, when it replaces egg whites in a sponge or a high-sugar batter. Pour it in unwhipped when it replaces the binding and moisture of whole eggs in cookies, brownies and doughs.' },
      { q: 'Why is my batter loose after swapping the eggs?', a: 'Whole eggs were swapped one for one and the water was not reduced. Reduce the milk or water slightly, or add dry ingredients, and bake fully.' },
      { q: 'Where do these equivalences come from?', a: 'From the Products page and the [guide to baking with aquafaba]({recipe_href}) on this site: {egg_liquid} g per whole egg, {white_liquid} g per egg white and {white_powder} g of powder per egg white.' },
    ],
  },

  cocktails: {
    title: 'Aquafaba Cocktail Quantity Calculator: Sours per Pack - VERY AQUAFABA',
    h1: 'How much aquafaba per cocktail and per service? Quantity calculator',
    description: 'Scale the VERY AQUAFABA whiskey sour to the number of cocktails of your service: aquafaba per drink, whiskey, lemon and syrup, and the powder and water equivalent.',
    lead: 'One aquafaba sour takes {dose} g of chilled VERY AQUAFABA liquid in place of the egg white, with {whiskey} ml of whiskey, {lemon_juice} ml of lemon juice and {syrup} ml of simple syrup. Enter the number of cocktails of your service and the calculator scales the aquafaba, the three other ingredients and the powder and water equivalent.',
    example: { batches: 40 },
    sections: [
      {
        id: 'reference',
        title: 'The reference drink, from the recipe',
        html: `<p>The starting point is the whiskey sour recipe published on this site: {whiskey} ml of whiskey, {lemon_juice} ml of fresh lemon juice, {syrup} ml of simple syrup and {dose} g of chilled VERY AQUAFABA, for {yield}. Nothing changes in the recipe except one ingredient: aquafaba replaces the egg white.</p>
<p>In powder, one drink is {powder_dose} g of VERY AQUAFABA powder made up with {water_dose} ml of water. The rule per egg white: {white_powder} g of powder + {white_water} ml of water = {white_total} g of aquafaba, the same mass as the liquid. Make it up before service and chill it.</p>`,
      },
      {
        id: 'scaling',
        title: 'What scales and what does not',
        html: `<p>Aquafaba, whiskey, lemon, syrup, powder and water scale in a straight line with the number of drinks. The shakes do not.</p>
<ul>
<li>Every drink is shaken to order: a dry shake of {dry_shake} seconds without ice, where the foam is made, then {wet_shake} seconds with ice to chill and dilute.</li>
<li>Busy service? Pre-batch the whiskey, lemon and syrup. Add the aquafaba at the shake, never in the batch: aquafaba added to the pre-batch gives no height by mid-service.</li>
<li>Weigh or jigger {dose} g every time. Free pouring is what makes drinks uneven.</li>
</ul>`,
      },
      {
        id: 'packs',
        title: 'How many cocktails a pack gives you',
        html: `<p>Once you know your number of sours per week, the pack size follows.</p>
<table class="va-guide-grid">
<thead><tr><th scope="col">Pack</th><th scope="col">Cocktails</th></tr></thead>
<tbody>
<tr><td data-label="Pack">1 L Tetrapak of liquid</td><td data-label="Cocktails">{batches_1l}</td></tr>
<tr><td data-label="Pack">10 L bag-in-box of liquid</td><td data-label="Cocktails">{batches_10l}</td></tr>
<tr><td data-label="Pack">200 g pouch of powder</td><td data-label="Cocktails">{batches_200g}</td></tr>
<tr><td data-label="Pack">3 kg pouch of powder</td><td data-label="Cocktails">{batches_3kg}</td></tr>
</tbody>
</table>
<p>Liquid or powder is decided in the <a href="{guide_href}">cocktail guide</a>: count your sours. If an opened 1 L pack is empty within {opened_days} days, liquid pours straight into the tin; if not, powder does not spoil once the pouch is opened.</p>`,
      },
      {
        id: 'example',
        title: 'Worked example: {ex_batches} sours in one service',
        html: `<p>A bar pours {ex_batches} sours on a Saturday night.</p>
<ul>
<li>Liquid: {ex_dose} g of VERY AQUAFABA, {ex_whiskey} ml of whiskey, {ex_lemon_juice} ml of lemon juice and {ex_syrup} ml of simple syrup.</li>
<li>Powder: {ex_powder} g of powder made up with {ex_water} ml of water before service, chilled.</li>
<li>Pre-batch: the whiskey, lemon and syrup can be batched ahead; the aquafaba goes into the tin per drink, at the shake.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'How much aquafaba do I use per cocktail?', a: '{dose} g of chilled aquafaba per drink, in place of the egg white. A 1 L Tetrapak makes {batches_1l} cocktails and a 200 g pouch of powder makes {batches_200g}.' },
      { q: 'Can I batch the aquafaba with the base?', a: 'No. Batch the whiskey, lemon and syrup only, and add the aquafaba per drink at the shake. Aquafaba in the pre-batch loses its height by mid-service.' },
      { q: 'How much water do I add to the powder?', a: '{white_water} ml for every {white_powder} g of powder. For one drink that is {powder_dose} g of powder and {water_dose} ml of water; for a service, the calculator scales both.' },
      { q: 'Does a larger service change the shake?', a: 'No. Every drink gets its dry shake of {dry_shake} seconds and its shake with ice of {wet_shake} seconds. The number of drinks changes the stock, not the method.' },
      { q: 'Does aquafaba change the taste of the drink?', a: 'No. It carries the foam and the smooth mouthfeel. The flavour stays with your whiskey, lemon and syrup.' },
      { q: 'Where do the drink figures come from?', a: 'From the whiskey sour recipe on this site: {whiskey} ml of whiskey, {lemon_juice} ml of lemon juice, {syrup} ml of simple syrup and {dose} g of aquafaba per drink. The full method is in the [whiskey sour recipe]({recipe_href}).' },
    ],
  },

  macarons: {
    title: 'Aquafaba Macaron Quantity Calculator - VERY AQUAFABA',
    h1: 'How much aquafaba for macarons? Quantity calculator',
    description: 'Scale the VERY AQUAFABA macaron recipe to any number of macarons or batches: liquid aquafaba, caster sugar, almond flour, icing sugar, and the powder and water equivalent.',
    lead: 'One batch of the VERY AQUAFABA macaron recipe takes {dose} g of liquid aquafaba, {sugar} g of caster sugar, {almond} g of almond flour and {icing_sugar} g of icing sugar, and makes {yield}. Enter how many macarons or how many batches you need and the calculator scales all of it, plus the powder and water equivalent.',
    example: { batches: 5 },
    sections: [
      {
        id: 'reference',
        title: 'The reference batch, from the recipe',
        html: `<p>The starting point is the macaron recipe published on this site: {dose} g of VERY AQUAFABA liquid, {sugar} g of caster sugar, {almond} g of extra fine almond flour and {icing_sugar} g of icing sugar, for {yield}. Aquafaba replaces the egg whites only, so the almond flour, icing sugar and caster sugar of your formula stay as they are. One batch stands in for {eggs} egg whites, at {white_liquid} g of liquid per white.</p>
<p>In powder, the same batch is {powder_dose} g of VERY AQUAFABA powder made up with {water_dose} ml of water: {white_powder} g of powder + {white_water} ml of water = {white_total} g of aquafaba, the same mass as the liquid. Make it up and chill it before you whip.</p>`,
      },
      {
        id: 'scaling',
        title: 'What scales and what does not',
        html: `<p>Aquafaba, the three sugars and flours, powder and water scale in a straight line. The rest, the times and the temperature, does not.</p>
<ul>
<li>Resting: the piped rounds rest at room temperature until a dry skin forms, {rest} minutes depending on humidity, whatever the batch.</li>
<li>Baking: {bake} °C, fan off, for {bake_time} minutes per tray. More macarons mean more trays.</li>
<li>Maturing: paired and filled shells rest {mature} hours in the fridge before serving.</li>
</ul>
<p>Running industrial batches? Hold the aquafaba concentration at {concentration} g/ml for shells that match from run to run.</p>`,
      },
      {
        id: 'packs',
        title: 'How many batches a pack gives you',
        html: `<p>Once you know your number of batches, the pack size follows.</p>
<table class="va-guide-grid">
<thead><tr><th scope="col">Pack</th><th scope="col">Batches</th><th scope="col">Macarons, about</th></tr></thead>
<tbody>
<tr><td data-label="Pack">1 L Tetrapak of liquid</td><td data-label="Batches">{batches_1l}</td><td data-label="Macarons, about">{pieces_1l}</td></tr>
<tr><td data-label="Pack">10 L bag-in-box of liquid</td><td data-label="Batches">{batches_10l}</td><td data-label="Macarons, about">{pieces_10l}</td></tr>
<tr><td data-label="Pack">200 g pouch of powder</td><td data-label="Batches">{batches_200g}</td><td data-label="Macarons, about">{pieces_200g}</td></tr>
<tr><td data-label="Pack">3 kg pouch of powder</td><td data-label="Batches">{batches_3kg}</td><td data-label="Macarons, about">{pieces_3kg}</td></tr>
</tbody>
</table>
<p>Liquid or powder is decided in the <a href="{guide_href}">macaron guide</a>: it depends on how often you pipe shells and on the {opened_days} days an opened liquid pack lasts in the fridge.</p>`,
      },
      {
        id: 'example',
        title: 'Worked example: {ex_pieces} macarons for a wedding',
        html: `<p>A pastry shop takes an order of {ex_pieces} filled macarons. That is {ex_batches} batches of the reference recipe.</p>
<ul>
<li>Liquid: {ex_dose} g of VERY AQUAFABA, {ex_sugar} g of caster sugar, {ex_almond} g of almond flour and {ex_icing_sugar} g of icing sugar, replacing {ex_eggs} egg whites.</li>
<li>Powder: {ex_powder} g of powder made up with {ex_water} ml of water, then the same sugars and flour.</li>
<li>Planning: the shells are baked {bake_time} minutes per tray at {bake} °C, then paired, filled and matured {mature} hours before the day.</li>
</ul>
<p>Sift and line the trays first, whip last: the foam has to survive the fold and the rest, so it must not stand while the dry mix is prepared.</p>`,
      },
    ],
    faq: [
      { q: 'How many macarons does one batch make?', a: '{yield}, from {dose} g of aquafaba, {sugar} g of caster sugar, {almond} g of almond flour and {icing_sugar} g of icing sugar. Pipe the rounds at 3 to 4 cm.' },
      { q: 'How much aquafaba replaces one egg white?', a: '{white_liquid} g of liquid, or {white_powder} g of powder made up with {white_water} ml of water. One batch of macarons replaces {eggs} egg whites.' },
      { q: 'Can I halve the batch?', a: 'Yes. {half_dose} g of aquafaba, {half_sugar} g of caster sugar, {half_almond} g of almond flour and {half_icing_sugar} g of icing sugar make about {half_yield} macarons. Use the smallest bowl of your mixer.' },
      { q: 'Does a larger batch rest or bake longer?', a: 'No. Each tray rests until a dry skin forms, {rest} minutes depending on humidity, and bakes {bake_time} minutes at {bake} °C. A larger batch means more trays, not longer times.' },
      { q: 'How much water do I add to the powder?', a: '{white_water} ml for every {white_powder} g of powder. For one batch of macarons that is {powder_dose} g of powder and {water_dose} ml of water; the calculator scales both.' },
      { q: 'Where do the almond and sugar figures come from?', a: 'From the macaron recipe on this site: {almond} g of almond flour, {icing_sugar} g of icing sugar and {sugar} g of caster sugar for {dose} g of aquafaba. The full method is in the [macaron recipe]({recipe_href}).' },
    ],
  },
};
