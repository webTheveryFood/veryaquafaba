// Cocktail expansion, English, wave 2 (October 2026): the how-to-make explainer, the
// pre-batching page, and the guide, quantity calculator and process sheet of White Lady,
// La Rosée and The Sunset (VERY AQUAFABA mixology recipe book, pp. 4, 6 and 7). Merged into
// cocktails.en.js. Every figure is a {token} from facts.json; no dashes, only the brand
// VERY AQUAFABA (the bergamot liqueur of La Rosée is not named), no recipe author named.
import { fixTable, table } from './cocktail-tables.js';

export default {
  labels: {
    responsible: 'Please drink responsibly',
    moreCocktails: 'More cocktails with aquafaba',
    cardAlt: '{name} with an aquafaba foam head',
    ingredients: {
      triple_sec: 'Triple sec', vodka: 'Vodka', bergamot_liqueur: 'Bergamot liqueur', raspberry_syrup: 'Raspberry syrup',
      orange_blossom: 'Orange blossom water', rum: 'Rum', vanilla_tonka_syrup: 'Vanilla and tonka syrup',
    },
  },

  guides: {
    'white-lady': {
      title: 'White Lady with Aquafaba: Egg-Free Recipe | VERY AQUAFABA',
      h1: 'How to make a white lady with aquafaba',
      crumb: 'White lady',
      card: 'Gin, triple sec and lemon, on a stem',
      eyebrow: 'Cocktail guide',
      description: 'A white lady with VERY AQUAFABA instead of egg white: gin, triple sec, lemon and {dose} ml of aquafaba, shaken twice and served in a stemmed glass.',
      lead: `The white lady is all poise until the foam lets you down. Served in a stemmed glass with dried flowers resting on the head, it has nowhere to hide a weak shake or a slack top. Replace the egg white with {dose} ml of VERY AQUAFABA and the drink keeps its clean white head, with the gin, triple sec and lemon still doing exactly what they should underneath. Here's how to build it, how to shake it, and how to keep that pale, polished finish intact from the bar to the table.`,
      sections: [
        { id: 'tin', title: "What goes in the shaker", html: `<ul>
<li>{gin} ml gin</li>
<li>{triple_sec} ml triple sec</li>
<li>{lemon_juice} ml lemon juice</li>
<li>{cane_syrup} ml cane sugar syrup</li>
<li>{dose} ml VERY AQUAFABA, chilled</li>
<li>A cocktail or margarita glass, and a few dried flowers for the garnish</li>
</ul>
<p>This build has two alcoholic components: {gin} ml of gin and {triple_sec} ml of triple sec. With the lemon and syrup, that gives you a {batch_pour} ml base before the {dose} ml of aquafaba goes in.</p>` },
        { id: 'shake', title: 'How to shake it', html: `<ol>
<li>Pour the gin, the triple sec, the lemon, the syrup and the aquafaba straight from the fridge into the shaker.</li>
<li>Shake hard without ice. This first shake builds the foam, and the liquid comes out pale and thick.</li>
<li>Add {ice} ice cubes and shake again, until the shaker frosts on the outside.</li>
<li>Strain into the cocktail or margarita glass. There's no ice in the glass, so the drink goes out as cold as the second shake left it.</li>
<li>Scatter a few dried flowers on the head.</li>
</ol>` },
        { id: 'tips', title: "Tips for a white lady with aquafaba", html: `<p>There is no ice in the serving glass to support the presentation. The foam sits directly on the drink, with the dried flowers on top, so you can read the result immediately. If the garnish sinks, go back to the dry shake and the temperature of the aquafaba before changing anything else.</p>
<p>Gin, triple sec, lemon and syrup can share one bottle before service, and every sour on the list can be <a href="{pre_batching_page_href}">pre-batched the same way</a>. That makes the order a {batch_pour} ml base pour plus {dose} ml of chilled aquafaba. Add the aquafaba only when you are ready to shake, so the head is built for that drink rather than sitting in the batch. The <a href="{process_href}">white lady process sheet</a> keeps the five steps on one page.</p>` },
        { id: 'fix', title: "When the head can't carry the garnish", html: fixTable([
          ['The flowers sink into the drink', 'The head is thin: ice went in before the dry shake', 'Dry shake first, ice second'],
          ['A slow foam that never firms up', 'The aquafaba was at room temperature', 'Keep the pack in the fridge until the shake'],
          ['The head has dropped by the time the glass reaches the guest', 'The drink waited on the pass', 'Shake to order and garnish at once'],
          ['No height by the middle of service', 'The aquafaba went into the pre-batch', 'Batch the gin, triple sec, lemon and syrup only'],
        ]) },
        { id: 'format', title: "White ladies every night, or for the weekend?", html: `<p>A 1 L Tetrapak covers {drinks_1l} white ladies. Once opened, keep it at {opened_temp} °C and use it within {opened_days} days. If your menu can move through those {drinks_1l} drinks in that time, liquid keeps the station simple.</p>
<p>If the white lady is a slower seller or an occasional event drink, powder waits more comfortably between services. Use {powder} g with {water} ml of water per drink; a 200 g pouch makes {drinks_200g}. The <a href="{calculator_href}">white lady quantity calculator</a> scales the whole recipe when you know the number of serves.</p>` },
      ],
      faq: [
        { q: 'What do I use instead of egg white in a white lady?', a: '{dose} ml of VERY AQUAFABA liquid, or {powder} g of powder made up with {water} ml of water.' },
        { q: 'Which glass does a white lady go in?', a: 'A cocktail or margarita glass, with a few dried flowers on the foam.' },
        { q: 'How much triple sec goes into a white lady?', a: '{triple_sec} ml, with {gin} ml of gin, {lemon_juice} ml of lemon juice, {cane_syrup} ml of cane sugar syrup and {dose} ml of aquafaba.' },
        { q: 'Does aquafaba change the taste of a white lady?', a: 'No. In the pack, VERY AQUAFABA has a light roasted note from the cooking of the chickpeas. Once shaken into a drink, it disappears: the foam carries no taste of its own, so the gin, the triple sec and the lemon carry the drink.' },
        { q: 'Can I batch white ladies before service?', a: 'Yes, the gin, triple sec, lemon and syrup. The aquafaba is added to each shaker at the shake, never to the batch.' },
        { q: 'How many white ladies does a 1 L pack make?', a: '{drinks_1l} drinks at {dose} ml each. Once opened, the pack is kept at {opened_temp} °C and used within {opened_days} days.' },
      ],
    },

    'la-rosee': {
      title: 'La Rosée Cocktail with Aquafaba: Recipe | VERY AQUAFABA',
      h1: 'How to make La Rosée, a pink sour with aquafaba',
      crumb: 'La Rosée',
      card: 'Vodka, bergamot and raspberry, in a coupe',
      eyebrow: 'Cocktail guide',
      description: 'La Rosée with VERY AQUAFABA: vodka, bergamot liqueur, raspberry and {dose} ml of aquafaba, shaken twice and served in a coupe.',
      lead: `La Rosée is the sort of drink that catches attention before anyone asks what is in it. Pink in the glass, pale on top, mint set lightly on the foam, it asks to be looked at before it is tasted. That also means every flaw shows. With {dose} ml of VERY AQUAFABA replacing the egg white, the drink keeps its neat white cap above the raspberry colour, while the vodka, bergamot liqueur and {orange_blossom} drops of orange blossom water stay in balance. This guide takes you through the build, the shake and the details that make the drink feel precise rather than merely pretty.`,
      sections: [
        { id: 'tin', title: "What goes in the shaker", html: `<ul>
<li>{vodka} ml vodka</li>
<li>{bergamot_liqueur} ml bergamot liqueur</li>
<li>{lemon_juice} ml lemon juice</li>
<li>{raspberry_syrup} ml raspberry syrup</li>
<li>{orange_blossom} drops of orange blossom water</li>
<li>{dose} ml VERY AQUAFABA, chilled</li>
<li>A coupe glass, and a sprig of mint for the garnish</li>
</ul>
<p>Most of the measures are familiar bar measures. The exception is the orange blossom water: {orange_blossom} drops per drink, counted rather than poured.</p>` },
        { id: 'shake', title: 'How to shake it', html: `<ol>
<li>Build the vodka, the bergamot liqueur, the lemon, the raspberry syrup, the orange blossom water and the chilled aquafaba in the shaker.</li>
<li>Shake hard without ice to build the foam.</li>
<li>Add {ice} ice cubes and shake again to chill and dilute.</li>
<li>Strain into the coupe.</li>
<li>Set a sprig of mint on the head.</li>
</ol>` },
        { id: 'tips', title: "Tips for making La Rosée with aquafaba", html: `<p>La Rosée needs care in two places. The first is the orange blossom water: {orange_blossom} drops a drink, counted with a dropper rather than poured. Across {ex_batches} drinks that's {ex_orange_blossom} drops, and the <a href="{calculator_href}">La Rosée quantity calculator</a> counts them with the larger measures.</p>
<p>The second is the foam. The raspberry syrup colours the whole drink, so a thin head shows pink straight away. Dry shake before the ice goes in, and the mint on top gives you one last check once the drink is in the coupe.</p>
<p>For a busy service, batch the vodka, bergamot liqueur, lemon, raspberry syrup and orange blossom water together. Each order then starts with a {batch_pour} ml pour, and the drops have already been measured in the batch. Keep the aquafaba chilled and separate until the shake, and keep the <a href="{process_href}">La Rosée process sheet</a> by the coupes for the checks.</p>` },
        { id: 'fix', title: "Fixing a thin head on La Rosée", html: fixTable([
          ['Pink showing through a thin head', 'Ice went in before the dry shake', 'Dry shake first, ice second'],
          ['A slack foam that rises slowly', 'The aquafaba was at room temperature', 'Keep it in the fridge until the shake'],
          ['The mint sinks before the drink reaches the table', 'The drink waited on the pass', 'Shake to order and serve at once'],
          ['The orange blossom takes over the drink', 'More than {orange_blossom} drops went in', 'Measure it with a dropper bottle'],
        ]) },
        { id: 'format', title: "Is La Rosée a regular or a special?", html: `<p>A 1 L Tetrapak makes {drinks_1l} La Rosée and, once opened, stays at {opened_temp} °C for {opened_days} days. That works when the drink has a steady place on the menu. If it appears as a special or sells less often, use {powder} g of powder with {water} ml of water per drink and keep the remaining pouch dry and closed.</p>` },
      ],
      faq: [
        { q: 'What is La Rosée?', a: 'A pink sour of vodka, bergamot liqueur, lemon, raspberry syrup and orange blossom water, shaken with {dose} ml of aquafaba and served in a coupe with a sprig of mint.' },
        { q: 'How much orange blossom water goes into La Rosée?', a: '{orange_blossom} drops per drink, with {vodka} ml of vodka, {bergamot_liqueur} ml of bergamot liqueur, {lemon_juice} ml of lemon juice and {raspberry_syrup} ml of raspberry syrup.' },
        { q: 'Can I make La Rosée without egg white?', a: 'Yes. In the VERY AQUAFABA recipe the foam comes from {dose} ml of aquafaba, so there is no egg in the drink.' },
        { q: 'Which glass does La Rosée go in?', a: 'A coupe glass, with a sprig of mint on the foam.' },
        { q: 'How much aquafaba powder per La Rosée?', a: '{powder} g of powder made up with {water} ml of water, for one drink.' },
        { q: 'How many La Rosée does a 1 L pack make?', a: '{drinks_1l} drinks at {dose} ml each. Once opened, the pack is kept at {opened_temp} °C and used within {opened_days} days.' },
      ],
    },

    'the-sunset': {
      title: 'The Sunset Cocktail with Aquafaba: Recipe | VERY AQUAFABA',
      h1: 'How to make The Sunset, a long sour with aquafaba',
      crumb: 'The Sunset',
      card: 'Rum and amaretto, topped with ginger beer',
      eyebrow: 'Cocktail guide',
      description: 'The Sunset with VERY AQUAFABA: rum, amaretto, lemon and vanilla tonka syrup shaken with {dose} ml of aquafaba, topped with ginger beer.',
      lead: `The Sunset feels like a terrace drink from the first read of the spec. Rum, a touch of amaretto, lemon and syrup are shaken short, then the whole thing opens up in the glass with ginger beer and a white head floating above it. With {dose} ml of VERY AQUAFABA in place of the egg white, you keep that soft top without changing the shape of the drink. The important part is sequence: build the foam first, lengthen second. Below is the full method, why the ginger beer waits for the glass, and what to check when the head starts disappearing into the drink.`,
      sections: [
        { id: 'tin', title: "What goes in the shaker, and what goes in the glass", html: `<ul>
<li>{rum} ml rum</li>
<li>{amaretto} ml amaretto</li>
<li>{lemon_juice} ml lemon juice</li>
<li>{vanilla_tonka_syrup} ml vanilla and tonka syrup</li>
<li>{dose} ml VERY AQUAFABA, chilled</li>
<li>Ginger beer to top, in a highball glass</li>
<li>A few dried flowers for the garnish</li>
</ul>
<p>Think of the ginger beer as part of the serve, not part of the shake. It only goes in once the drink is in the highball.</p>` },
        { id: 'build', title: 'How to build it', html: `<ol>
<li>Pour the rum, the amaretto, the lemon, the vanilla and tonka syrup and the aquafaba into the shaker.</li>
<li>Shake hard without ice: the foam is built here.</li>
<li>Add {ice} ice cubes and shake again to chill.</li>
<li>Strain into the highball glass.</li>
<li>Top with ginger beer.</li>
<li>Scatter a few dried flowers on the head.</li>
</ol>` },
        { id: 'tips', title: "Tips for making The Sunset with aquafaba", html: `<p>Build the head before the long part of the drink arrives. Dry shake, shake with ice and strain first; then add the ginger beer in the glass. The sequence mirrors the <a href="{gin_fizz_href}">gin fizz</a>, but the top here is ginger beer rather than tonic.</p>
<p>The amaretto is {amaretto} ml per drink and the vanilla and tonka syrup {vanilla_tonka_syrup} ml. Those are small pours in one highball, but across a service they add up quickly, so measure both with the jigger and count them in the batch rather than pouring by eye.</p>
<p>Batch the rum, amaretto, lemon and syrup before service. Keep the aquafaba chilled for the shaker and the ginger beer for the glass. That leaves every order with the same sequence: base, aquafaba, two shakes, strain, top. The <a href="{process_href}">Sunset process sheet</a> keeps that order on one page.</p>` },
        { id: 'fix', title: "Fixing a head that sinks into the ginger beer", html: fixTable([
          ['Thin head before the top goes in', 'Ice went in before the dry shake', 'Dry shake first, ice second'],
          ['The head collapses as the ginger beer goes in', 'The ginger beer went into the shaker', 'Strain first, then top in the glass'],
          ['A slack foam that rises slowly', 'The aquafaba was at room temperature', 'Keep it in the fridge until the shake'],
          ['The head has gone by the time the drink reaches the table', 'The drink waited on the pass', 'Shake, top and serve at once'],
        ]) },
        { id: 'format', title: "Sunsets all season, or now and then?", html: `<p>A 1 L Tetrapak makes {drinks_1l} Sunsets and a 10 L bag-in-box makes {drinks_10l}. Once opened, liquid stays at {opened_temp} °C and is used within {opened_days} days, so pick the size from the number you can realistically serve in that period.</p>
<p>For occasional orders, use {powder} g of powder with {water} ml of water per drink. Kept dry and closed, the opened pouch keeps until its best-before date, and the <a href="{calculator_href}">Sunset quantity calculator</a> works out the full service from the number of drinks you expect.</p>` },
      ],
      faq: [
        { q: 'When does the ginger beer go into The Sunset?', a: 'After the drink is strained into the highball glass. The ginger beer is poured on top, never shaken.' },
        { q: 'Can I make The Sunset without egg white?', a: 'Yes. The foam comes from {dose} ml of VERY AQUAFABA, shaken with the rum, amaretto, lemon and syrup.' },
        { q: 'How much amaretto goes into The Sunset?', a: '{amaretto} ml, with {rum} ml of rum, {lemon_juice} ml of lemon juice, {vanilla_tonka_syrup} ml of vanilla and tonka syrup and {dose} ml of aquafaba.' },
        { q: 'How much aquafaba powder per Sunset?', a: '{powder} g of powder made up with {water} ml of water, for one drink.' },
        { q: 'Can I batch The Sunset before service?', a: 'Batch the rum, amaretto, lemon and syrup. The aquafaba goes in at the shake and the ginger beer in the glass.' },
        { q: 'How many Sunsets does a 10 L bag-in-box make?', a: '{drinks_10l} drinks at {dose} ml each. Once opened, the bag-in-box is kept at {opened_temp} °C and used within {opened_days} days.' },
      ],
    },
  },

  topics: {
    'how-to-make': {
      title: 'How to Make Cocktails with Aquafaba | VERY AQUAFABA',
      h1: 'How do I make cocktails with aquafaba?',
      crumb: 'How to make cocktails with aquafaba',
      eyebrow: 'Cocktails',
      description: 'Swap the egg white for {dose} ml of VERY AQUAFABA and keep your spec: one method for every sour, and seven sours to try it on.',
      lead: `Aquafaba changes one ingredient, not the way you think about a sour. If you already know how to build, dry shake and finish an egg-white drink, the technique is familiar from the first order. Use {dose} ml of VERY AQUAFABA per drink, keep the ice for the second shake, and the same method carries from a pisco sour to a white lady, La Rosée or a long gin fizz.`,
      sections: [
        { id: 'method', title: "One method, then the drink decides the finish", html: `<ol>
<li>Pour the spirit, citrus, syrup and aquafaba into the shaker.</li>
<li>Shake hard without ice. This is where the foam is made.</li>
<li>Add {ice} ice cubes and shake again to chill.</li>
<li>Strain into the glass and garnish.</li>
</ol>
<p>Two of the seven drinks below are long: the gin fizz takes tonic water and The Sunset ginger beer, both poured into the glass after the strain and never into the shaker.</p>` },
        { id: 'recipes', title: "Seven sours to try it on", html: `${table(['Cocktail', 'Base', 'Glass'], [
          ['<a href="{whiskey_recipe_href}">Whiskey sour</a>', 'Bourbon or Irish whiskey', 'Old fashioned'],
          ['<a href="{pisco_sour_href}">Pisco sour</a>', 'Pisco', 'Old fashioned'],
          ['<a href="{amaretto_sour_href}">Amaretto sour</a>', 'Amaretto, with a vanilla syrup', 'Old fashioned'],
          ['<a href="{gin_fizz_href}">Gin fizz</a>', 'Gin, tonic water on top', 'Highball'],
          ['<a href="{white_lady_href}">White lady</a>', 'Gin and triple sec', 'Cocktail or margarita glass'],
          ['<a href="{la_rosee_href}">La Rosée</a>', 'Vodka and bergamot liqueur, with raspberry', 'Coupe'],
          ['<a href="{the_sunset_href}">The Sunset</a>', 'Rum and amaretto, ginger beer on top', 'Highball'],
        ])}
<p>All seven use {dose} ml of VERY AQUAFABA per drink, and each of the six after the whiskey sour has its own quantity calculator and process sheet. That gives the station one aquafaba measure to remember even though the spirits, glassware, garnish and final top change from drink to drink.</p>` },
        { id: 'order', title: "What the two shakes are doing", html: `<p>The first shake is for the head. The second is for chilling and dilution. Keeping those jobs separate is why the dry shake comes first on every recipe in this set.</p>` },
        { id: 'fix', title: 'When the head comes out thin', html: fixTable([
          ['A thin head, or none at all', 'Ice went in from the start', 'Dry shake first, ice second'],
          ['A slow, slack foam', 'The aquafaba was at room temperature', 'Keep it in the fridge until the shake'],
          ['No height by the middle of service', 'The aquafaba went into the pre-batch', 'Batch the rest and add the aquafaba per drink'],
          ['A long drink that lost its head', 'The tonic or ginger beer went into the shaker', 'Strain first, then top in the glass'],
          ['The foam drops before the drink reaches the guest', 'The drink waited on the pass', 'Shake to order and serve at once'],
        ]) },
        { id: 'next', title: "Start with a sour you already know", html: `<p>Begin with a sour you already make. Change the egg white to {dose} ml of aquafaba, keep the rest of the spec, and get the two-shake rhythm consistent before expanding to the other drinks. For busy service, <a href="{pre_batching_page_href}">batch the spirits, citrus and syrup</a>, but keep the aquafaba for each individual shake.</p>
<p>When you know roughly how many sours you pour, that same number tells you whether to <a href="{powder_page_href}">work from the powder pouch</a> and which <a href="{where_to_buy_page_href}">pack to order for your bar</a>.</p>` },
      ],
      faq: [
        { q: 'Can I use aquafaba instead of egg white in any sour?', a: 'In the seven sours we publish, yes: {dose} ml of aquafaba takes the place of the egg white, and the rest of the spec stays as it is.' },
        { q: 'Do I need to change how I shake?', a: 'No. Shake once without ice to build the foam, then again with {ice} ice cubes to chill, as you would with egg white.' },
        { q: 'Does aquafaba taste of chickpeas in a cocktail?', a: 'In the pack, VERY AQUAFABA has a light roasted note from the cooking of the chickpeas. Once shaken into a drink, it disappears: the foam carries no taste of its own, and the drink tastes of its spirit, citrus and syrup.' },
        { q: 'How much aquafaba powder replaces the liquid in a sour?', a: '{powder} g of powder made up with {water} ml of water, for a drink that takes {dose} ml of liquid.' },
        { q: 'Can I make long drinks with a foam head?', a: 'Yes. The gin fizz and The Sunset are shaken with aquafaba, strained into a highball and topped with tonic water or ginger beer in the glass.' },
        { q: 'Where do I buy aquafaba for cocktails?', a: 'You can [order aquafaba for your bar]({where_to_buy_page_href}) on Amazon in the United States and Germany, on InstantChef in France, or through the enquiry form anywhere else.' },
      ],
    },

    'pre-batching': {
      title: 'Can I Pre-Batch Sours with Aquafaba? | VERY AQUAFABA',
      h1: 'Can I pre-batch sours with aquafaba?',
      crumb: 'Pre-batching sours',
      eyebrow: 'Cocktails',
      description: 'Yes, all but the aquafaba: batch the spirit, citrus and syrup before service and add {dose} ml of VERY AQUAFABA to each shaker at the shake.',
      lead: `Pre-batching is what turns a run of sours from several bottles per order into one clean pour. Spirit, citrus and syrup can all be ready before service. The aquafaba is the part you hold back: add {dose} ml of VERY AQUAFABA when the order lands, then shake the foam fresh in the shaker. That way you get the speed of a batch without asking the head to wait around for hours.`,
      sections: [
        { id: 'batch', title: 'A batch for {ex_batches} pisco sours', html: `${table(['In the batch', 'Kept apart, in the fridge'], [
          ['Pisco: {ex_pisco} ml', 'VERY AQUAFABA liquid: {ex_dose} ml'],
          ['Lime juice: {ex_lime_juice} ml', 'or powder made up: {ex_powder} g + {ex_water} ml of water'],
          ['Cane sugar syrup: {ex_cane_syrup} ml', ''],
        ])}
<p>At the shake, each drink takes one {batch_pour} ml pour from the bottle and {dose} ml of aquafaba from the fridge. The rest of the method doesn't move: dry shake, {ice} ice cubes, shake again, strain. The figures are those of the <a href="{pisco_sour_href}">aquafaba pisco sour</a>.</p>` },
        { id: 'out', title: "Two things wait until the order comes in", html: `<p>Keep the aquafaba separate so each drink builds its head in the shaker. For long drinks, keep the carbonated top separate too: tonic for the <a href="{gin_fizz_href}">gin fizz</a> and ginger beer for <a href="{the_sunset_href}">The Sunset</a> both go into the glass after the strain.</p>
<p>The rest of the base can be batched ahead, including the two spirits in the <a href="{white_lady_href}">white lady</a>, the vanilla syrup in the <a href="{amaretto_sour_href}">amaretto sour</a> and the raspberry syrup in <a href="{la_rosee_href}">La Rosée</a>.</p>` },
        { id: 'station', title: "What the station looks like during service", html: `<p>Keep the batch bottle beside the shakers and the aquafaba chilled below the station. Each order becomes one pour of base, {dose} ml of aquafaba, a dry shake and a second shake with ice. Build the drink when the ticket comes in rather than filling shakers in advance.</p>` },
        { id: 'events', title: "Batching for an event", html: `<p>For an event, decide the number of drinks first and let the <a href="{pisco_sour_calc_href}">pisco sour</a>, <a href="{gin_fizz_calc_href}">gin fizz</a> or <a href="{white_lady_calc_href}">white lady</a> calculator set the batch. A 1 L Tetrapak covers {drinks_1l} cocktails at {dose} ml each; once opened, keep it at {opened_temp} °C and use it within {opened_days} days. If you use powder, make up the amount the event needs before doors open and keep it chilled for service.</p>` },
      ],
      faq: [
        { q: 'Can I add aquafaba to my sour pre-batch?', a: 'No. Add {dose} ml to each shaker at the shake; the foam is made one drink at a time.' },
        { q: 'What goes into the batch bottle?', a: 'The spirit, the citrus and the syrup. For {ex_batches} pisco sours: {ex_pisco} ml of pisco, {ex_lime_juice} ml of lime juice and {ex_cane_syrup} ml of cane sugar syrup.' },
        { q: 'Can I batch long drinks like the gin fizz?', a: 'Yes, the shaken part. The tonic water or ginger beer goes into each glass after the strain.' },
        { q: 'Can I make up the powder ahead for a batched service?', a: 'Yes. Make up {ex_powder} g of powder with {ex_water} ml of water for {ex_batches} drinks before service and keep it chilled until the shake.' },
        { q: 'How long does an opened pack of aquafaba keep during an event?', a: 'Opened liquid is kept at {opened_temp} °C and used within {opened_days} days. Write the opening date on the carton.' },
      ],
    },
  },

  calculator: {
    'white-lady': {
      title: 'White Lady Aquafaba Calculator | VERY AQUAFABA',
      h1: 'How much aquafaba per white lady? Quantity calculator',
      description: 'Work out the VERY AQUAFABA, gin, triple sec, lemon and cane sugar syrup for any number of white ladies, from the Tetrapak or the pouch.',
      lead: `Enter how many white ladies you plan to serve and the calculator works out the gin, triple sec, lemon juice, cane sugar syrup and VERY AQUAFABA, in liquid or powder. With two spirits in the shaker, check both bottles: {ex_batches} white ladies take {ex_gin} ml of gin and {ex_triple_sec} ml of triple sec.`,
      sections: [
        { id: 'spirits', title: "The gin runs twice as fast as the triple sec", html: `<p>Each white lady uses {gin} ml of gin and {triple_sec} ml of triple sec, so the gin disappears twice as fast. Lemon, syrup and aquafaba scale in the same straight line. The shake still stays per drink, with {ice} ice cubes for the second one.</p>` },
        { id: 'packs', title: "Pick the aquafaba pack from the guest count", html: `<ul>
<li><strong>1 L Tetrapak:</strong> {drinks_1l} white ladies.</li>
<li><strong>10 L bag-in-box:</strong> {drinks_10l} white ladies.</li>
<li><strong>200 g pouch:</strong> {drinks_200g} white ladies.</li>
<li><strong>3 kg pouch:</strong> {drinks_3kg} white ladies.</li>
</ul>
<p>An opened liquid pack is kept at {opened_temp} °C and used within {opened_days} days; an opened pouch, kept dry and closed, keeps until its best-before date.</p>` },
        { id: 'example', title: "{ex_batches} white ladies: the wedding numbers", html: `<p>For {ex_batches} white ladies, prepare {ex_gin} ml of gin, {ex_triple_sec} ml of triple sec, {ex_lemon_juice} ml of lemon juice, {ex_cane_syrup} ml of cane sugar syrup and {ex_dose} ml of VERY AQUAFABA. One 1 L Tetrapak covers the aquafaba with {ex_left_1l} ml remaining. With powder, make up {ex_powder} g with {ex_water} ml of water before service.</p>
<p>The batch can save measuring time, but not the final technique. Each drink still needs <a href="{guide_href}">the dry shake before the ice</a> if the flowers are going to sit on the head, and the <a href="{process_href}">white lady process sheet</a> has the checks for each step.</p>` },
      ],
      faq: [
        { q: 'How much aquafaba do I need for one white lady?', a: '{dose} ml of VERY AQUAFABA liquid, or {powder} g of powder with {water} ml of water.' },
        { q: 'How much gin and triple sec for {ex_batches} white ladies?', a: '{ex_gin} ml of gin and {ex_triple_sec} ml of triple sec, with {ex_lemon_juice} ml of lemon juice, {ex_cane_syrup} ml of cane sugar syrup and {ex_dose} ml of aquafaba.' },
        { q: 'Does the calculator count the ice?', a: 'No, only what goes into the shaker. Allow {ice} ice cubes for each drink, for the second shake.' },
        { q: 'Which pack suits a white lady on the weekend list?', a: 'The powder: a 200 g pouch makes {drinks_200g} drinks and, once opened, keeps dry and closed until the best-before date on the pouch.' },
      ],
    },
    'la-rosee': {
      title: 'La Rosée Aquafaba Calculator | VERY AQUAFABA',
      h1: 'How much aquafaba per La Rosée? Quantity calculator',
      description: 'Scale La Rosée with VERY AQUAFABA: the aquafaba, vodka, bergamot liqueur, lemon, raspberry syrup and orange blossom drops for any number of drinks.',
      lead: `Tell the calculator how many coupes of La Rosée you're planning and it works out the vodka, bergamot liqueur, lemon juice, raspberry syrup, orange blossom water and VERY AQUAFABA, in liquid or powder. The drops scale too: {ex_batches} drinks need {ex_orange_blossom} drops of orange blossom water.`,
      sections: [
        { id: 'drops', title: "The drop measure still scales", html: `<p>Drops feel insignificant until the orders multiply. {ex_batches} La Rosée need {ex_orange_blossom} drops, and the calculator keeps that count beside the larger measures. Add {ice} ice cubes per drink for the second shake when you plan the station.</p>` },
        { id: 'packs', title: "Pack size follows the number of coupes", html: `<ul>
<li><strong>1 L Tetrapak:</strong> {drinks_1l} drinks, used within {opened_days} days once opened.</li>
<li><strong>10 L bag-in-box:</strong> {drinks_10l} drinks, for high-volume venues or several bars sharing a pack.</li>
<li><strong>200 g pouch:</strong> {drinks_200g} drinks, kept dry and closed until the best-before date once it's open.</li>
<li><strong>3 kg pouch:</strong> {drinks_3kg} drinks.</li>
</ul>` },
        { id: 'example', title: "{ex_batches} La Rosée: every measure in one place", html: `<p>For {ex_batches} coupes, prepare {ex_vodka} ml of vodka, {ex_bergamot_liqueur} ml of bergamot liqueur, {ex_lemon_juice} ml of lemon juice, {ex_raspberry_syrup} ml of raspberry syrup, {ex_orange_blossom} drops of orange blossom water and {ex_dose} ml of VERY AQUAFABA. With powder, make up {ex_powder} g with {ex_water} ml of water.</p>
<p>Batch the vodka, liqueur, lemon, raspberry and orange blossom water before service. Keep the aquafaba separate so each coupe gets <a href="{guide_href}">its own dry shake</a>, and the <a href="{process_href}">La Rosée process sheet</a> shows what the drink should look like at each step.</p>` },
      ],
      faq: [
        { q: 'How much orange blossom water for {ex_batches} La Rosée?', a: '{ex_orange_blossom} drops, at {orange_blossom} drops per drink.' },
        { q: 'How much aquafaba do I need for one La Rosée?', a: '{dose} ml of VERY AQUAFABA liquid, or {powder} g of powder with {water} ml of water.' },
        { q: 'How much vodka and raspberry syrup for {ex_batches} drinks?', a: '{ex_vodka} ml of vodka and {ex_raspberry_syrup} ml of raspberry syrup, with {ex_bergamot_liqueur} ml of bergamot liqueur, {ex_lemon_juice} ml of lemon juice and {ex_dose} ml of aquafaba.' },
        { q: 'Which pack suits La Rosée as an occasional special?', a: 'The powder: a 200 g pouch makes {drinks_200g} drinks and, once opened, keeps dry and closed until the best-before date on the pouch.' },
      ],
    },
    'the-sunset': {
      title: 'The Sunset Aquafaba Calculator | VERY AQUAFABA',
      h1: 'How much aquafaba per Sunset? Quantity calculator',
      description: 'Work out the VERY AQUAFABA, rum, amaretto, lemon and vanilla tonka syrup for any number of Sunsets, from the Tetrapak or the pouch.',
      lead: `Enter the number of Sunsets you plan to serve and the calculator works out the rum, amaretto, lemon juice, vanilla and tonka syrup and VERY AQUAFABA, in liquid or powder. Even the small pours count: {ex_batches} Sunsets take {ex_amaretto} ml of amaretto and {ex_vanilla_tonka_syrup} ml of syrup.`,
      sections: [
        { id: 'small', title: "The small pours add up first", html: `<p>By the time you serve {ex_batches} Sunsets, the amaretto has reached {ex_amaretto} ml and the vanilla and tonka syrup {ex_vanilla_tonka_syrup} ml. Ginger beer stays outside the table because it tops each highball after the strain and follows your glass. Add {ice} ice cubes per drink for the second shake.</p>` },
        { id: 'packs', title: "Match the aquafaba pack to the pace of the terrace", html: `<p>A 1 L Tetrapak pours {drinks_1l} Sunsets and a 10 L bag-in-box {drinks_10l}, the size for high-volume venues or several bars sharing a pack. Either one, once open, is kept at {opened_temp} °C and used within {opened_days} days. On the pouch side, 200 g makes {drinks_200g} Sunsets and 3 kg makes {drinks_3kg}, and an opened pouch, kept dry and closed, keeps until its best-before date.</p>` },
        { id: 'example', title: "{ex_batches} Sunsets: the base before the first guest arrives", html: `<p>For {ex_batches} Sunsets, batch {ex_rum} ml of rum, {ex_amaretto} ml of amaretto, {ex_lemon_juice} ml of lemon juice and {ex_vanilla_tonka_syrup} ml of vanilla and tonka syrup. Keep {ex_dose} ml of VERY AQUAFABA chilled beside it, or make up {ex_powder} g of powder with {ex_water} ml of water.</p>
<p>Service then becomes one base pour, the aquafaba, two shakes and the ginger beer in the glass. Keep that last step out of the shaker every time: <a href="{guide_href}">build The Sunset</a> in that order, with the <a href="{process_href}">Sunset process sheet</a> on the station for the checks.</p>` },
      ],
      faq: [
        { q: 'How much aquafaba do I need for one Sunset?', a: '{dose} ml of VERY AQUAFABA liquid, or {powder} g of powder with {water} ml of water.' },
        { q: 'How much ginger beer do I need?', a: 'Ginger beer tops each highball after the strain, with no set measure, so it depends on your glass. The calculator covers everything that goes into the shaker.' },
        { q: 'How much rum and amaretto for {ex_batches} Sunsets?', a: '{ex_rum} ml of rum and {ex_amaretto} ml of amaretto, with {ex_lemon_juice} ml of lemon juice, {ex_vanilla_tonka_syrup} ml of vanilla and tonka syrup and {ex_dose} ml of aquafaba.' },
        { q: 'Which pack suits a bar that pours Sunsets every day?', a: "A 1 L Tetrapak ({drinks_1l} drinks) if you pour that many within {opened_days} days of opening, kept at {opened_temp} °C. The 10 L bag-in-box ({drinks_10l} drinks) suits high-volume venues or several bars sharing a pack." },
      ],
    },
  },

  process: {
    'white-lady': {
      title: 'White Lady Process Sheet with Aquafaba | VERY AQUAFABA',
      h1: 'How to shake an aquafaba white lady: the step-by-step sheet',
      description: 'The aquafaba white lady on one page: build, dry shake, shake with ice, strain into a stemmed glass and garnish, with the checks for a thin head.',
      lead: `The garnish tells you everything. If the dried flowers sit neatly on the head, the drink has done its job. If they sink, something earlier in the build went wrong. This sheet gives you one five-step method to follow and the checks to make when the white lady loses the firm finish it needs.`,
      powderNote: 'Powder: for one drink, {powder} g of VERY AQUAFABA powder + {water} ml of water, made up before service and chilled.',
      steps: [
        { step: 'Build', reference: '{gin} ml gin, {triple_sec} ml triple sec, {lemon_juice} ml lemon, {cane_syrup} ml cane sugar syrup, {dose} ml VERY AQUAFABA, chilled' },
        { step: 'Dry shake', reference: 'Hard, without ice: the liquid turns pale and thick' },
        { step: 'With ice', reference: '{ice} cubes, shake again until the shaker frosts' },
        { step: 'Strain', reference: 'Into a cocktail or margarita glass, no ice in the glass' },
        { step: 'Garnish', reference: 'A few dried flowers on the foam' },
      ],
      checks: [
        { see: 'Flowers sink into the drink', check: 'Ice went in before the dry shake', fix: 'Dry shake first, ice second' },
        { see: 'Slow, slack foam', check: 'Aquafaba at room temperature', fix: 'Keep it chilled until the shake' },
        { see: 'No height by mid-service', check: 'Aquafaba was added to the batch', fix: 'Batch the gin, triple sec, lemon and syrup only' },
        { see: 'Head drops before it reaches the guest', check: 'The drink waited on the pass', fix: 'Shake to order and garnish at once' },
      ],
      sections: [
        { id: 'use', title: "When the head won't hold the flowers", html: `<p>Keep it with the stemware or in the bar book, next to the <a href="{guide_href}">white lady method</a>. If the flowers sink, work backwards from the glass: check the head, the second shake, then whether the dry shake happened before the ice went in.</p>` },
        { id: 'before', title: "Set the station before the first order", html: `<ul>
<li><strong>The batch.</strong> Gin, triple sec, lemon and syrup in one bottle; the aquafaba kept apart.</li>
<li><strong>The aquafaba.</strong> In the fridge, and an opened pack used within {opened_days} days at {opened_temp} °C.</li>
<li><strong>The glasses.</strong> Cocktail or margarita glasses ready, and the dried flowers within reach.</li>
<li><strong>The powder, if you use it.</strong> Made up for the night and chilled.</li>
</ul>` },
        { id: 'signs', title: "What the glass should tell you", html: `<p>After the dry shake the liquid is pale and thick, almost like a milkshake. After the shake with ice the shaker is frosted on the outside. In the glass the head sits level and firm enough to hold the flowers on top. If one of these signs is missing, the checks table above shows which step to fix. The <a href="{calculator_href}">white lady quantity calculator</a> works out the quantities for a full night.</p>` },
      ],
      faq: [
        { q: 'Why do the dried flowers sink?', a: 'The head is too thin to hold them, usually because the ice went in before the dry shake. Shake without ice first, then with ice.' },
        { q: 'Does a white lady go over ice?', a: 'No. It goes into a cocktail or margarita glass, strained with no ice in the glass.' },
        { q: 'Does the powder follow the same sheet?', a: 'Yes. Make up {powder} g of powder with {water} ml of water per drink before service, chill it, and follow the same five steps.' },
        { q: 'Can I add the aquafaba to the batched gin and triple sec?', a: 'No. Add it to each shaker at the shake, one drink at a time.' },
      ],
    },
    'la-rosee': {
      title: 'La Rosée Process Sheet with Aquafaba | VERY AQUAFABA',
      h1: 'How to shake La Rosée with aquafaba: the step-by-step sheet',
      description: 'La Rosée on one page: build with {orange_blossom} drops of orange blossom water, dry shake, shake with ice, strain into a coupe and garnish with mint.',
      lead: `La Rosée is generous with clues when something is off. Pink starts showing through a thin head, the mint begins to sink, or the orange blossom pushes too far forward. This sheet keeps the five steps of the drink in one place and gives you a quick way to read what went wrong before the next coupe leaves the bar.`,
      powderNote: 'Powder: for one drink, {powder} g of VERY AQUAFABA powder + {water} ml of water, made up before service and chilled.',
      steps: [
        { step: 'Build', reference: '{vodka} ml vodka, {bergamot_liqueur} ml bergamot liqueur, {lemon_juice} ml lemon, {raspberry_syrup} ml raspberry syrup, {orange_blossom} drops orange blossom water, {dose} ml VERY AQUAFABA, chilled' },
        { step: 'Dry shake', reference: 'Hard, without ice: the foam is built here' },
        { step: 'With ice', reference: '{ice} cubes, shake again to chill' },
        { step: 'Strain', reference: 'Into a coupe glass: a pale head on a pink drink' },
        { step: 'Garnish', reference: 'A sprig of mint on the head' },
      ],
      checks: [
        { see: 'Pink showing through the head', check: 'Ice went in before the dry shake', fix: 'Dry shake first, ice second' },
        { see: 'Slack foam', check: 'Aquafaba at room temperature', fix: 'Keep it chilled until the shake' },
        { see: 'Orange blossom takes over', check: 'More than {orange_blossom} drops went in', fix: 'Measure with a dropper bottle' },
        { see: 'Mint sinks before the table', check: 'The drink waited on the pass', fix: 'Shake to order and serve at once' },
      ],
      sections: [
        { id: 'use', title: "When the pink shows through", html: `<p>Keep it beside the coupe station, with the <a href="{guide_href}">La Rosée method</a>. If the pink starts showing through the head, use the sheet to trace the problem backwards through the strain, second shake and dry shake before changing the recipe.</p>` },
        { id: 'before', title: "Set the station before the first order", html: `<ul>
<li><strong>Base batched.</strong> Vodka, bergamot liqueur, lemon, raspberry syrup and the orange blossom water in one bottle; the aquafaba stays apart.</li>
<li><strong>Dropper bottle.</strong> If the orange blossom water goes in per drink, keep it in a dropper bottle on the station.</li>
<li><strong>Aquafaba cold.</strong> An opened pack is kept at {opened_temp} °C and used within {opened_days} days.</li>
<li><strong>Coupes and mint ready.</strong> The drink goes straight from the strain to the garnish.</li>
</ul>` },
        { id: 'signs', title: "What you should see in the coupe", html: `<p>After the dry shake the liquid is pale pink and thick. After the shake with ice the shaker frosts. In the coupe a pale head settles on the pink drink with a clear line between the two, and the mint sits on top without sinking. The <a href="{calculator_href}">La Rosée quantity calculator</a> works out the batch, drops included.</p>` },
      ],
      faq: [
        { q: 'Why is the pink showing through the foam?', a: 'The head is thin. The usual cause is ice in the shaker before the dry shake; a warm aquafaba gives a slack foam too.' },
        { q: 'Can the orange blossom water go into the batch?', a: 'Yes, at {orange_blossom} drops per drink, with the vodka, bergamot liqueur, lemon and raspberry syrup. The aquafaba stays out of the batch.' },
        { q: 'Does the powder work for La Rosée?', a: 'Yes. Make up {powder} g of powder with {water} ml of water per drink before service and keep it chilled.' },
        { q: 'Which glass and garnish does La Rosée use?', a: 'A coupe glass and a sprig of mint on the head.' },
      ],
    },
    'the-sunset': {
      title: 'The Sunset Process Sheet with Aquafaba | VERY AQUAFABA',
      h1: 'How to build The Sunset with aquafaba: the step-by-step sheet',
      description: 'The Sunset on one page: build, dry shake, shake with ice, strain into a highball, top with ginger beer and garnish, with the checks for the head.',
      lead: `The Sunset has one crucial handover: the drink leaves the shaker, then the ginger beer takes over in the glass. If that sequence gets muddled, the head is usually the first thing to suffer. This sheet keeps all six steps in order and gives you the checks to make when the drink comes out flat, soft or sinking into the top.`,
      powderNote: 'Powder: for one drink, {powder} g of VERY AQUAFABA powder + {water} ml of water, made up before service and chilled.',
      steps: [
        { step: 'Build', reference: '{rum} ml rum, {amaretto} ml amaretto, {lemon_juice} ml lemon, {vanilla_tonka_syrup} ml vanilla and tonka syrup, {dose} ml VERY AQUAFABA, chilled' },
        { step: 'Dry shake', reference: 'Hard, without ice, until the liquid turns pale and thick' },
        { step: 'With ice', reference: '{ice} cubes, a second shake until the shaker frosts' },
        { step: 'Strain', reference: 'Into a highball glass, the head already on top' },
        { step: 'Top', reference: 'Ginger beer into the glass, never into the shaker' },
        { step: 'Garnish', reference: 'A few dried flowers scattered on the head' },
      ],
      checks: [
        { see: 'Foam already thin in the highball', check: 'The ice went in first', fix: 'Shake without ice, then with ice' },
        { see: 'Head sinks as the ginger beer goes in', check: 'Ginger beer shaken with the rest', fix: 'Keep it for the glass, after the strain' },
        { see: 'Foam rises slowly and stays soft', check: 'Aquafaba left out of the fridge', fix: 'Chill it until the moment of the shake' },
        { see: 'Flowers sinking by the time it reaches the guest', check: 'Waited on the pass', fix: 'Top and send it straight out' },
      ],
      sections: [
        { id: 'use', title: "When a Sunset loses its head", html: `<p>Keep it at the highball station, with the <a href="{guide_href}">Sunset method</a> in the bar book. If a Sunset reaches the guest without its head, check three things in order: whether the dry shake came before the ice, whether the aquafaba was chilled, and whether the ginger beer stayed out of the shaker.</p>` },
        { id: 'before', title: "The station before doors open", html: `<ul>
<li><strong>One bottle of base.</strong> Rum, amaretto, lemon and vanilla and tonka syrup, batched together.</li>
<li><strong>Two things kept apart.</strong> The aquafaba in the fridge, an opened pack used within {opened_days} days at {opened_temp} °C, and the ginger beer, chilled.</li>
<li><strong>Glassware and garnish.</strong> Highballs and the dried flowers within reach of the strain.</li>
</ul>` },
        { id: 'signs', title: "What you should see before the ginger beer goes in", html: `<p>Pale and thick after the dry shake, a frosted shaker after the second, and a white head sitting on the drink once it's strained. Then the ginger beer goes in underneath, the head lifts with it, and the flowers go on. To plan a full night, the <a href="{calculator_href}">Sunset quantity calculator</a> works out the base for any number of drinks.</p>` },
      ],
      faq: [
        { q: 'Can the ginger beer go into the shaker?', a: 'No. It goes into the highball after the strain, once the head is built.' },
        { q: 'What should The Sunset look like before the ginger beer?', a: 'Strained into the highball with a white head already on it. The ginger beer then lengthens the drink underneath.' },
        { q: 'Does the powder work for The Sunset?', a: 'Yes: {powder} g of powder in {water} ml of water per drink, made up before service and chilled, then the same six steps.' },
        { q: 'Which parts of The Sunset can I batch?', a: 'The rum, amaretto, lemon and vanilla and tonka syrup. The aquafaba goes in at the shake and the ginger beer in the glass.' },
      ],
    },
  },
};
