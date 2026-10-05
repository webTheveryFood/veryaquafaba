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
      title: 'White Lady with Aquafaba: Egg-Free Recipe - VERY AQUAFABA',
      h1: 'How to make a white lady with aquafaba',
      crumb: 'White lady',
      card: 'Gin, triple sec and lemon, on a stem',
      eyebrow: 'Cocktail guide',
      description: 'A white lady with VERY AQUAFABA instead of egg white: gin, triple sec, lemon and {dose} ml of aquafaba, shaken twice and served in a stemmed glass.',
      lead: `The white lady is the sour that leaves the bar on a stem: gin and triple sec, lemon, a little cane syrup, a thick white head and a few dried flowers resting on it. In the VERY AQUAFABA recipe book the head comes from {dose} ml of aquafaba in place of the egg white, so nothing in that pale glass comes from an egg. Here's the build, the two shakes, and what keeps the flowers sitting on top.`,
      sections: [
        { id: 'tin', title: 'What goes in the tin', html: `<ul>
<li>{gin} ml gin</li>
<li>{triple_sec} ml triple sec</li>
<li>{lemon_juice} ml lemon juice</li>
<li>{cane_syrup} ml cane sugar syrup</li>
<li>{dose} ml VERY AQUAFABA, chilled</li>
<li>A cocktail or margarita glass, and a few dried flowers for the garnish</li>
</ul>
<p>Two spirits go in this time. The triple sec sits beside the gin at {triple_sec} ml, and that orange liqueur is what turns a gin sour into a white lady. Everything still fits in one tin, with {batch_pour} ml of base before the aquafaba.</p>` },
        { id: 'shake', title: 'How to shake it', html: `<ol>
<li>Pour the gin, the triple sec, the lemon, the syrup and the aquafaba straight from the fridge into the tin.</li>
<li>Shake hard without ice. This first shake builds the foam, and the liquid comes out pale and thick.</li>
<li>Add {ice} ice cubes and shake again, until the tin frosts on the outside.</li>
<li>Strain into the cocktail or margarita glass. There's no ice in the glass, so the drink goes out as cold as the second shake left it.</li>
<li>Scatter a few dried flowers on the head.</li>
</ol>` },
        { id: 'stem', title: 'A head with nothing under it', html: `<p>In an old fashioned glass the foam rides on a drink full of ice. In a stemmed glass it sits straight on the liquid, and the dried flowers rest on the foam itself, so the head has to be firm enough to carry them to the table. That firmness is made in the dry shake: the aquafaba traps air while nothing else is in the tin, and the ice only comes in once the foam is there.</p>` },
        { id: 'fix', title: "When the flowers sink", html: fixTable([
          ['The flowers sink into the drink', 'The head is thin: ice went in before the dry shake', 'Dry shake first, ice second'],
          ['A slow foam that never firms up', 'The aquafaba was at room temperature', 'Keep the pack in the fridge until the shake'],
          ['The head has dropped by the time the glass reaches the guest', 'The drink waited on the pass', 'Shake to order and garnish at once'],
          ['No height by the middle of service', 'The aquafaba went into the pre-batch', 'Batch the gin, triple sec, lemon and syrup only'],
        ]) },
        { id: 'batch', title: 'Two spirits in one bottle', html: `<p>Before service, the gin, the triple sec, the lemon and the syrup can share one bottle, so every order starts with a single {batch_pour} ml pour. The aquafaba stays out of it and goes into each tin at the shake, one drink at a time. The page on <a href="{pre_batching_page_href}">pre-batching sours</a> sets out the station, and the <a href="{process_href}">white lady process sheet</a> keeps the five steps on one page.</p>` },
        { id: 'format', title: 'On the menu every night, or for the weekend?', html: `<p>If white ladies sell every night, the 1 L Tetrapak pours straight into the tin and makes {drinks_1l} of them. Once it's open it keeps {opened_days} days at {opened_temp} °C, which a busy cocktail list gets through easily.</p>
<p>If the drink only comes out at the weekend, the pouch takes the clock away: {powder} g of powder in {water} ml of water for each drink, and a 200 g pouch makes {drinks_200g}. The <a href="{calculator_href}">white lady quantity calculator</a> works out the gin, the triple sec, the lemon, the syrup and the aquafaba for the night.</p>` },
      ],
      faq: [
        { q: 'What do I use instead of egg white in a white lady?', a: '{dose} ml of VERY AQUAFABA liquid, or {powder} g of powder made up with {water} ml of water.' },
        { q: 'Which glass does a white lady go in?', a: 'A cocktail or margarita glass, with a few dried flowers on the foam, as in the VERY AQUAFABA recipe book.' },
        { q: 'How much triple sec goes into a white lady?', a: '{triple_sec} ml, with {gin} ml of gin, {lemon_juice} ml of lemon juice, {cane_syrup} ml of cane sugar syrup and {dose} ml of aquafaba.' },
        { q: 'Does aquafaba change the taste of a white lady?', a: 'No. VERY AQUAFABA is neutral in taste and smell, so the gin, the triple sec and the lemon carry the drink.' },
        { q: 'Can I batch white ladies before service?', a: 'Yes, the gin, triple sec, lemon and syrup. The aquafaba is added to each tin at the shake, never to the batch.' },
        { q: 'How many white ladies does a 1 L pack make?', a: '{drinks_1l} drinks at {dose} ml each. Once opened, the pack is kept at {opened_temp} °C and used within {opened_days} days.' },
      ],
    },

    'la-rosee': {
      title: 'La Rosée Cocktail with Aquafaba: Recipe - VERY AQUAFABA',
      h1: 'How to make La Rosée, a pink sour with aquafaba',
      crumb: 'La Rosée',
      card: 'Vodka, bergamot and raspberry, in a coupe',
      eyebrow: 'Cocktail guide',
      description: 'La Rosée from the VERY AQUAFABA recipe book: vodka, bergamot liqueur, raspberry and {dose} ml of aquafaba, shaken twice and served in a coupe.',
      lead: `La Rosée is one of the two house recipes in the VERY AQUAFABA recipe book, and the one with the colour: a blush pink sour in a coupe, a pale head and a sprig of mint on top. Vodka and bergamot liqueur make the base, raspberry gives the pink, two drops of orange blossom water lift it, and {dose} ml of aquafaba builds the foam an egg white used to.`,
      sections: [
        { id: 'tin', title: 'What goes in the tin', html: `<ul>
<li>{vodka} ml vodka</li>
<li>{bergamot_liqueur} ml bergamot liqueur</li>
<li>{lemon_juice} ml lemon juice</li>
<li>{raspberry_syrup} ml raspberry syrup</li>
<li>{orange_blossom} drops of orange blossom water</li>
<li>{dose} ml VERY AQUAFABA, chilled</li>
<li>A coupe glass, and a sprig of mint for the garnish</li>
</ul>` },
        { id: 'drops', title: 'Two drops, and no more', html: `<p>The orange blossom water is the smallest measure in the recipe and the easiest one to get wrong: {orange_blossom} drops a drink, enough to scent the foam without taking over. A dropper bottle on the station keeps two drops at two, however busy the bar gets.</p>
<p>On a batch it scales like everything else, {ex_orange_blossom} drops for {ex_batches} drinks, and the <a href="{calculator_href}">La Rosée quantity calculator</a> counts them for you.</p>` },
        { id: 'shake', title: 'How to shake it', html: `<ol>
<li>Build the vodka, the bergamot liqueur, the lemon, the raspberry syrup, the orange blossom water and the chilled aquafaba in the tin.</li>
<li>Shake hard without ice to build the foam.</li>
<li>Add {ice} ice cubes and shake again to chill and dilute.</li>
<li>Strain into the coupe.</li>
<li>Set a sprig of mint on the head.</li>
</ol>` },
        { id: 'colour', title: 'Pink underneath, pale on top', html: `<p>The raspberry syrup tints the whole drink, and the aquafaba foam settles on it in a pale layer. That line between the two is what people see first, and it only shows when the head is thick, so the dry shake comes first every time. The mint sprig sits on the foam, which is one more reason to keep it firm.</p>` },
        { id: 'fix', title: 'When the pink shows through the foam', html: fixTable([
          ['Pink showing through a thin head', 'Ice went in before the dry shake', 'Dry shake first, ice second'],
          ['A slack foam that rises slowly', 'The aquafaba was at room temperature', 'Keep it in the fridge until the shake'],
          ['The mint sinks before the drink reaches the table', 'The drink waited on the pass', 'Shake to order and serve at once'],
          ['The orange blossom takes over the drink', 'More than two drops went in', 'Measure it with a dropper bottle'],
        ]) },
        { id: 'format', title: 'How often La Rosée leaves the bar', html: `<p>A house drink that sells every night suits the 1 L Tetrapak: it makes {drinks_1l} coupes of La Rosée, and once open it keeps {opened_days} days at {opened_temp} °C. If it's a special that comes and goes, the pouch keeps once it's open while it stays dry and closed, and each drink takes {powder} g of powder in {water} ml of water. The <a href="{process_href}">La Rosée process sheet</a> puts the five steps and their checks on one page.</p>` },
      ],
      faq: [
        { q: 'What is La Rosée?', a: 'A sour from the VERY AQUAFABA recipe book: vodka, bergamot liqueur, lemon, raspberry syrup and orange blossom water, shaken with {dose} ml of aquafaba and served in a coupe with a sprig of mint.' },
        { q: 'How much orange blossom water goes into La Rosée?', a: '{orange_blossom} drops per drink, with {vodka} ml of vodka, {bergamot_liqueur} ml of bergamot liqueur, {lemon_juice} ml of lemon juice and {raspberry_syrup} ml of raspberry syrup.' },
        { q: 'Can I make La Rosée without egg white?', a: 'Yes. In the VERY AQUAFABA recipe the foam comes from {dose} ml of aquafaba, so there is no egg in the drink.' },
        { q: 'Which glass does La Rosée go in?', a: 'A coupe glass, with a sprig of mint on the foam.' },
        { q: 'How much aquafaba powder per La Rosée?', a: '{powder} g of powder made up with {water} ml of water, for one drink.' },
        { q: 'How many La Rosée does a 1 L pack make?', a: '{drinks_1l} drinks at {dose} ml each. Once opened, the pack is kept at {opened_temp} °C and used within {opened_days} days.' },
      ],
    },

    'the-sunset': {
      title: 'The Sunset Cocktail with Aquafaba: Recipe - VERY AQUAFABA',
      h1: 'How to make The Sunset, a long sour with aquafaba',
      crumb: 'The Sunset',
      card: 'Rum and amaretto, topped with ginger beer',
      eyebrow: 'Cocktail guide',
      description: 'The Sunset from the VERY AQUAFABA recipe book: rum, amaretto, lemon and vanilla tonka syrup shaken with {dose} ml of aquafaba, topped with ginger beer.',
      lead: `The Sunset is the long drink of the VERY AQUAFABA recipe book, the other house recipe beside La Rosée. Rum and a touch of amaretto are shaken with lemon, a vanilla and tonka syrup and {dose} ml of aquafaba, then lengthened with ginger beer in a highball. It goes out golden, with a white head on top and a few dried flowers resting on it.`,
      sections: [
        { id: 'tin', title: 'What goes in the tin, and what goes on top', html: `<ul>
<li>{rum} ml rum</li>
<li>{amaretto} ml amaretto</li>
<li>{lemon_juice} ml lemon juice</li>
<li>{vanilla_tonka_syrup} ml vanilla and tonka syrup</li>
<li>{dose} ml VERY AQUAFABA, chilled</li>
<li>Ginger beer to top, in a highball glass</li>
<li>A few dried flowers for the garnish</li>
</ul>
<p>The shaker holds everything except the ginger beer, which only meets the drink in the glass.</p>` },
        { id: 'build', title: 'How to build it', html: `<ol>
<li>Pour the rum, the amaretto, the lemon, the vanilla and tonka syrup and the aquafaba into the shaker.</li>
<li>Shake hard without ice: the foam is built here.</li>
<li>Add {ice} ice cubes and shake again to chill.</li>
<li>Strain into the highball glass.</li>
<li>Top with ginger beer.</li>
<li>Scatter a few dried flowers on the head.</li>
</ol>` },
        { id: 'long', title: 'Shaken short, served long', html: `<p>The head is built on the shaken part, before the ginger beer arrives. Poured on top after the strain, the ginger beer lengthens the drink underneath and the foam rides up with it. If your team already makes the <a href="{gin_fizz_href}">gin fizz</a>, The Sunset is the same build with ginger beer in place of the tonic water.</p>` },
        { id: 'amaretto', title: 'Amaretto in a supporting role', html: `<p>Here the amaretto is the second voice, {amaretto} ml beside {rum} ml of rum, where in the <a href="{amaretto_sour_href}">amaretto sour</a> it carries the whole drink. With the vanilla and tonka syrup it rounds out the rum, and the ginger beer brings the spice back up at the end.</p>` },
        { id: 'fix', title: 'When the head sinks into the ginger beer', html: fixTable([
          ['Thin head before the top goes in', 'Ice went in before the dry shake', 'Dry shake first, ice second'],
          ['The head collapses as the ginger beer goes in', 'The ginger beer went into the shaker', 'Strain first, then top in the glass'],
          ['A slack foam that rises slowly', 'The aquafaba was at room temperature', 'Keep it in the fridge until the shake'],
          ['The head has gone by the time the drink reaches the table', 'The drink waited on the pass', 'Shake, top and serve at once'],
        ]) },
        { id: 'service', title: 'Running Sunsets on a terrace', html: `<p>Batch the rum, the amaretto, the lemon and the syrup before service. The aquafaba goes into each shaker at the order and the ginger beer into each glass after the strain, so nothing that makes the head or the fizz waits in a bottle. A 10 L bag-in-box makes {drinks_10l} Sunsets and a 1 L Tetrapak {drinks_1l}; once open, either is kept at {opened_temp} °C and used within {opened_days} days. For a bar that only pours a few, the pouch keeps once open: {powder} g of powder in {water} ml of water per drink.</p>
<p>The <a href="{calculator_href}">Sunset quantity calculator</a> works out the night, and the <a href="{process_href}">Sunset process sheet</a> keeps the order of the shakes and the top on one page.</p>` },
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
      title: 'How to Make Cocktails with Aquafaba - VERY AQUAFABA',
      h1: 'How do I make cocktails with aquafaba?',
      crumb: 'How to make cocktails with aquafaba',
      eyebrow: 'Cocktails',
      description: 'Swap the egg white for {dose} ml of VERY AQUAFABA and keep your spec: one method for every sour, and seven recipes from the VERY AQUAFABA recipe book.',
      lead: `If you can shake a sour with egg white, you already know how to make it with aquafaba. Take the white out, put {dose} ml of VERY AQUAFABA in its place, and the rest of your spec stays where it is: the build, the dry shake, the wet shake, the glass. Below is the method that works for every sour on your menu, and seven recipes to try it on.`,
      sections: [
        { id: 'method', title: 'The method, for every sour', html: `<ol>
<li>Pour the spirit, citrus, syrup and aquafaba into the shaker.</li>
<li>Shake hard without ice. This is where the foam is made.</li>
<li>Add {ice} ice cubes and shake again to chill.</li>
<li>Strain into the glass and garnish.</li>
</ol>
<p>Two of the seven drinks below are long: the gin fizz takes tonic water and The Sunset ginger beer, both poured into the glass after the strain and never into the shaker.</p>` },
        { id: 'recipes', title: 'Seven sours to try it on', html: `${table(['Cocktail', 'Base', 'Glass'], [
          ['<a href="{whiskey_recipe_href}">Whiskey sour</a>', 'Bourbon or Irish whiskey', 'Old fashioned'],
          ['<a href="{pisco_sour_href}">Pisco sour</a>', 'Pisco', 'Old fashioned'],
          ['<a href="{amaretto_sour_href}">Amaretto sour</a>', 'Amaretto, with a vanilla syrup', 'The glass your bar uses for sours'],
          ['<a href="{gin_fizz_href}">Gin fizz</a>', 'Gin, tonic water on top', 'Highball'],
          ['<a href="{white_lady_href}">White lady</a>', 'Gin and triple sec', 'Cocktail or margarita glass'],
          ['<a href="{la_rosee_href}">La Rosée</a>', 'Vodka and bergamot liqueur, with raspberry', 'Coupe'],
          ['<a href="{the_sunset_href}">The Sunset</a>', 'Rum and amaretto, ginger beer on top', 'Highball'],
        ])}
<p>In the VERY AQUAFABA recipe book and mixology flyer, every one of them takes {dose} ml of aquafaba per drink, so a single measure covers the whole list. Each name opens its own page with the full recipe, and the six new ones also have a quantity calculator and a process sheet.</p>` },
        { id: 'order', title: 'Why the order of the shakes matters', html: `<p>The foam on a sour is air held in the drink, and the aquafaba holds it while the tin is free of ice. Put the ice in first and it chills and waters the drink before any foam has formed, so the head comes out thin. Shaking dry and then wet splits the two jobs: the first shake makes the head, the second makes the drink cold.</p>` },
        { id: 'fix', title: 'When the head comes out thin', html: fixTable([
          ['A thin head, or none at all', 'Ice went in from the start', 'Dry shake first, ice second'],
          ['A slow, slack foam', 'The aquafaba was at room temperature', 'Keep it in the fridge until the shake'],
          ['No height by the middle of service', 'The aquafaba went into the pre-batch', 'Batch the rest and add the aquafaba per drink'],
          ['A long drink that lost its head', 'The tonic or ginger beer went into the shaker', 'Strain first, then top in the glass'],
          ['The foam drops before the drink reaches the guest', 'The drink waited on the pass', 'Shake to order and serve at once'],
        ]) },
        { id: 'next', title: 'From the first sour to the whole list', html: `<p>Start with one sour you already sell, swap the egg white for {dose} ml of aquafaba and keep everything else. Once the team has the two shakes in their hands, the rest of the list follows. For a busy night, the page on <a href="{pre_batching_page_href}">pre-batching sours</a> shows what goes into the bottle and what waits for the shake.</p>
<p>When you're ready to order, <a href="{where_to_buy_page_href}">where to buy aquafaba for cocktails</a> lists the way to buy in each country, and the page on <a href="{powder_page_href}">aquafaba powder in cocktails</a> covers the pouch for bars that shake only a few sours a week.</p>` },
      ],
      faq: [
        { q: 'Can I use aquafaba instead of egg white in any sour?', a: 'In the sours of the VERY AQUAFABA recipe book, yes: {dose} ml of aquafaba takes the place of the egg white, and the rest of the spec stays as it is.' },
        { q: 'Do I need to change how I shake?', a: 'No. Shake once without ice to build the foam, then again with {ice} ice cubes to chill, as you would with egg white.' },
        { q: 'Does aquafaba taste of chickpeas in a cocktail?', a: 'No. VERY AQUAFABA is neutral in taste and smell, so the drink tastes of its spirit, citrus and syrup.' },
        { q: 'How much aquafaba powder replaces the liquid in a sour?', a: '{powder} g of powder made up with {water} ml of water, for a drink that takes {dose} ml of liquid.' },
        { q: 'Can I make long drinks with a foam head?', a: 'Yes. The gin fizz and The Sunset are shaken with aquafaba, strained into a highball and topped with tonic water or ginger beer in the glass.' },
        { q: 'Where do I buy aquafaba for cocktails?', a: 'Country by country on [where to buy aquafaba for cocktails]({where_to_buy_page_href}): Amazon in the United States and Germany, InstantChef in France, and the enquiry form everywhere else.' },
      ],
    },

    'pre-batching': {
      title: 'Can I Pre-Batch Sours with Aquafaba? - VERY AQUAFABA',
      h1: 'Can I pre-batch sours with aquafaba?',
      crumb: 'Pre-batching sours',
      eyebrow: 'Cocktails',
      description: 'Yes, all but the aquafaba: batch the spirit, citrus and syrup before service and add {dose} ml of VERY AQUAFABA to each tin at the shake.',
      lead: `Yes, almost all of it. The spirit, the citrus and the syrup can go into one bottle before service, so each order starts with a single pour. The aquafaba is the one thing you leave out: add {dose} ml of VERY AQUAFABA to each tin as the order comes in, then shake, because the foam is made one drink at a time.`,
      sections: [
        { id: 'batch', title: 'A batch for {ex_batches} pisco sours', html: `${table(['In the batch', 'Kept apart, in the fridge'], [
          ['Pisco: {ex_pisco} ml', 'VERY AQUAFABA liquid: {ex_dose} ml'],
          ['Lime juice: {ex_lime_juice} ml', 'or powder made up: {ex_powder} g + {ex_water} ml of water'],
          ['Cane sugar syrup: {ex_cane_syrup} ml', ''],
        ])}
<p>At the shake, each drink takes one {batch_pour} ml pour from the bottle and {dose} ml of aquafaba from the fridge. The rest of the method doesn't move: dry shake, {ice} ice cubes, shake again, strain. The figures come from the <a href="{pisco_sour_href}">pisco sour</a> of the VERY AQUAFABA recipe book.</p>` },
        { id: 'out', title: 'What stays out of the bottle', html: `<p>Two things never go into the batch. The first is the aquafaba, because the foam is built in each tin during the dry shake; poured into the bottle hours earlier, it no longer gives the drink its height by the middle of service. The second is the top of the long drinks: the tonic water of the <a href="{gin_fizz_href}">gin fizz</a> and the ginger beer of <a href="{the_sunset_href}">The Sunset</a> go into each glass after the strain.</p>
<p>Everything else batches: the two spirits of the <a href="{white_lady_href}">white lady</a>, the vanilla syrup of the <a href="{amaretto_sour_href}">amaretto sour</a>, the raspberry of <a href="{la_rosee_href}">La Rosée</a>.</p>` },
        { id: 'station', title: 'Pouring from the batch on a busy night', html: `<p>Keep the batch bottle within reach of the shakers and the aquafaba in the fridge underneath. Each order is then the same four moves: one pour of batch, {dose} ml of aquafaba, the dry shake, the shake with ice. Build the tins as the orders come in rather than ahead, so the foam is always made to order and goes out at its height.</p>` },
        { id: 'events', title: 'Events and large services', html: `<p>For a wedding, a launch or a full terrace, size the batch with the quantity calculator of each drink: the <a href="{pisco_sour_calc_href}">pisco sour</a>, the <a href="{gin_fizz_calc_href}">gin fizz</a> or the <a href="{white_lady_calc_href}">white lady</a> calculator scales every ingredient to the number of guests. A 1 L Tetrapak covers {drinks_1l} drinks and, once open, is kept at {opened_temp} °C and used within {opened_days} days, so open it on the day. With the powder, make up what the event needs before doors open and keep it chilled.</p>` },
      ],
      faq: [
        { q: 'Can I add aquafaba to my sour pre-batch?', a: 'No. Add {dose} ml to each tin at the shake; the foam is made one drink at a time.' },
        { q: 'What goes into the batch bottle?', a: 'The spirit, the citrus and the syrup. For {ex_batches} pisco sours: {ex_pisco} ml of pisco, {ex_lime_juice} ml of lime juice and {ex_cane_syrup} ml of cane sugar syrup.' },
        { q: 'Can I batch long drinks like the gin fizz?', a: 'Yes, the shaken part. The tonic water or ginger beer goes into each glass after the strain.' },
        { q: 'Can I make up the powder ahead for a batched service?', a: 'Yes. Make up {ex_powder} g of powder with {ex_water} ml of water for {ex_batches} drinks before service and keep it chilled until the shake.' },
        { q: 'How long does an opened pack of aquafaba keep during an event?', a: 'Opened liquid is kept at {opened_temp} °C and used within {opened_days} days. Write the opening date on the carton.' },
      ],
    },
  },

  calculator: {
    'white-lady': {
      title: 'White Lady Aquafaba Calculator - VERY AQUAFABA',
      h1: 'How much aquafaba per white lady? Quantity calculator',
      description: 'Work out the VERY AQUAFABA, gin, triple sec, lemon and cane sugar syrup for any number of white ladies, from the Tetrapak or the pouch.',
      lead: `A white lady puts more into the tin than most sours: gin, triple sec, lemon and syrup before the aquafaba even goes in. Type the number of drinks and the calculator gives each of them, with the VERY AQUAFABA from the Tetrapak or made up from the pouch with its water.`,
      sections: [
        { id: 'spirits', title: 'Two spirits to order', html: `<p>Each drink takes {gin} ml of gin and {triple_sec} ml of triple sec, so a big night uses both bottles at once, the gin twice as fast. Everything scales in a straight line; the shakes don't, and every white lady still gets its own dry shake and {ice} ice cubes in the second one. The ice isn't in the table, so count it in when you plan the night.</p>` },
        { id: 'packs', title: 'How many white ladies from a pack', html: `<ul>
<li><strong>1 L Tetrapak:</strong> {drinks_1l} white ladies.</li>
<li><strong>10 L bag-in-box:</strong> {drinks_10l} white ladies.</li>
<li><strong>200 g pouch:</strong> {drinks_200g} white ladies.</li>
<li><strong>3 kg pouch:</strong> {drinks_3kg} white ladies.</li>
</ul>
<p>An opened liquid pack is kept at {opened_temp} °C and used within {opened_days} days; an opened pouch keeps while it stays dry and closed.</p>` },
        { id: 'example', title: 'Example: {ex_batches} white ladies for a wedding', html: `<p>{ex_batches} white ladies take {ex_gin} ml of gin, {ex_triple_sec} ml of triple sec, {ex_lemon_juice} ml of lemon juice, {ex_cane_syrup} ml of cane sugar syrup and {ex_dose} ml of VERY AQUAFABA. One 1 L Tetrapak covers the aquafaba with {ex_left_1l} ml to spare. With the powder, the same wedding takes {ex_powder} g made up with {ex_water} ml of water before the doors open.</p>
<p>The <a href="{guide_href}">white lady guide</a> has the method, and the <a href="{process_href}">process sheet</a> the checks for each step.</p>` },
      ],
      faq: [
        { q: 'How much aquafaba do I need for one white lady?', a: '{dose} ml of VERY AQUAFABA liquid, or {powder} g of powder with {water} ml of water.' },
        { q: 'How much gin and triple sec for {ex_batches} white ladies?', a: '{ex_gin} ml of gin and {ex_triple_sec} ml of triple sec, with {ex_lemon_juice} ml of lemon juice, {ex_cane_syrup} ml of cane sugar syrup and {ex_dose} ml of aquafaba.' },
        { q: 'Does the calculator count the ice?', a: 'No, only what goes into the tin. Allow {ice} ice cubes for each drink, for the second shake.' },
        { q: 'Which pack suits a white lady on the weekend list?', a: 'The powder: a 200 g pouch makes {drinks_200g} drinks and keeps once opened while it stays dry and closed.' },
      ],
    },
    'la-rosee': {
      title: 'La Rosée Aquafaba Calculator - VERY AQUAFABA',
      h1: 'How much aquafaba per La Rosée? Quantity calculator',
      description: 'Scale La Rosée with VERY AQUAFABA: the aquafaba, vodka, bergamot liqueur, lemon, raspberry syrup and orange blossom drops for any number of drinks.',
      lead: `La Rosée puts six things in the tin, down to two drops of orange blossom water. Type the number of drinks and the calculator gives every one of them, the drops included, with the VERY AQUAFABA from the Tetrapak or made up from the pouch.`,
      sections: [
        { id: 'drops', title: 'The drops add up too', html: `<p>Two drops of orange blossom water vanish into one drink, but they add up across a night: {ex_orange_blossom} drops for {ex_batches} coupes. The calculator scales them with the vodka, the bergamot liqueur, the lemon and the raspberry syrup, so the house recipe tastes the same in the first coupe and the last. Count {ice} ice cubes per drink on top, for the second shake.</p>` },
        { id: 'packs', title: 'How many La Rosée from a pack', html: `<ul>
<li><strong>1 L Tetrapak:</strong> {drinks_1l} drinks, used within {opened_days} days once opened.</li>
<li><strong>10 L bag-in-box:</strong> {drinks_10l} drinks, for a house drink that sells all night.</li>
<li><strong>200 g pouch:</strong> {drinks_200g} drinks, with no clock once it's open.</li>
<li><strong>3 kg pouch:</strong> {drinks_3kg} drinks.</li>
</ul>` },
        { id: 'example', title: 'Example: {ex_batches} La Rosée for a private event', html: `<p>{ex_batches} coupes of La Rosée take {ex_vodka} ml of vodka, {ex_bergamot_liqueur} ml of bergamot liqueur, {ex_lemon_juice} ml of lemon juice, {ex_raspberry_syrup} ml of raspberry syrup, {ex_orange_blossom} drops of orange blossom water and {ex_dose} ml of VERY AQUAFABA, or {ex_powder} g of powder made up with {ex_water} ml of water. Batch everything but the aquafaba before the guests arrive.</p>
<p>The <a href="{guide_href}">La Rosée guide</a> has the method, and the <a href="{process_href}">process sheet</a> the checks for each step.</p>` },
      ],
      faq: [
        { q: 'How much orange blossom water for {ex_batches} La Rosée?', a: '{ex_orange_blossom} drops, at {orange_blossom} drops per drink.' },
        { q: 'How much aquafaba do I need for one La Rosée?', a: '{dose} ml of VERY AQUAFABA liquid, or {powder} g of powder with {water} ml of water.' },
        { q: 'How much vodka and raspberry syrup for {ex_batches} drinks?', a: '{ex_vodka} ml of vodka and {ex_raspberry_syrup} ml of raspberry syrup, with {ex_bergamot_liqueur} ml of bergamot liqueur, {ex_lemon_juice} ml of lemon juice and {ex_dose} ml of aquafaba.' },
        { q: 'Which pack suits La Rosée as an occasional special?', a: 'The powder: a 200 g pouch makes {drinks_200g} drinks and keeps once opened while it stays dry and closed.' },
      ],
    },
    'the-sunset': {
      title: 'The Sunset Aquafaba Calculator - VERY AQUAFABA',
      h1: 'How much aquafaba per Sunset? Quantity calculator',
      description: 'Work out the VERY AQUAFABA, rum, amaretto, lemon and vanilla tonka syrup for any number of Sunsets, from the Tetrapak or the pouch.',
      lead: `Two of the measures in The Sunset are small ones, {amaretto} ml of amaretto and {vanilla_tonka_syrup} ml of syrup, and they're the ones a bar runs short of without noticing. Type the number of drinks and the calculator scales the rum, the amaretto, the lemon juice, the vanilla and tonka syrup and the VERY AQUAFABA together, with the aquafaba from the Tetrapak or made up from the pouch.`,
      sections: [
        { id: 'small', title: 'Small measures, big nights', html: `<p>At {amaretto} ml a drink the amaretto barely registers, but {ex_batches} Sunsets take {ex_amaretto} ml of it, and the vanilla and tonka syrup climbs the same way. The ginger beer is the one thing no table can count: it tops each highball after the strain, so it follows the size of your glass. Allow {ice} ice cubes per drink for the second shake as well.</p>` },
        { id: 'packs', title: 'Which pack covers the season', html: `<p>A 1 L Tetrapak pours {drinks_1l} Sunsets and a 10 L bag-in-box {drinks_10l}, the size for a terrace that sells long drinks all afternoon. Either one, once open, is kept at {opened_temp} °C and used within {opened_days} days. On the pouch side, 200 g makes {drinks_200g} Sunsets and 3 kg makes {drinks_3kg}, and an opened pouch keeps while it stays dry and closed.</p>` },
        { id: 'example', title: 'Example: {ex_batches} Sunsets for a summer party', html: `<p>A party of {ex_batches} Sunsets starts with one bottle of base: {ex_rum} ml of rum, {ex_amaretto} ml of amaretto, {ex_lemon_juice} ml of lemon juice and {ex_vanilla_tonka_syrup} ml of vanilla and tonka syrup. Beside it, in the fridge, sit {ex_dose} ml of VERY AQUAFABA, or {ex_powder} g of powder made up with {ex_water} ml of water. Each guest's drink is then one pour from the bottle, the aquafaba, two shakes and the ginger beer on top.</p>
<p>The <a href="{guide_href}">Sunset guide</a> explains the build, and the <a href="{process_href}">process sheet</a> lists the checks.</p>` },
      ],
      faq: [
        { q: 'How much aquafaba do I need for one Sunset?', a: '{dose} ml of VERY AQUAFABA liquid, or {powder} g of powder with {water} ml of water.' },
        { q: 'How much ginger beer do I need?', a: 'The recipe book tops each highball with ginger beer after the strain and gives no measure, so it depends on your glass. The calculator covers everything that goes into the shaker.' },
        { q: 'How much rum and amaretto for {ex_batches} Sunsets?', a: '{ex_rum} ml of rum and {ex_amaretto} ml of amaretto, with {ex_lemon_juice} ml of lemon juice, {ex_vanilla_tonka_syrup} ml of vanilla and tonka syrup and {ex_dose} ml of aquafaba.' },
        { q: 'Which pack suits a bar that pours Sunsets all afternoon?', a: 'A 10 L bag-in-box: {drinks_10l} drinks, kept at {opened_temp} °C and used within {opened_days} days once opened.' },
      ],
    },
  },

  process: {
    'white-lady': {
      title: 'White Lady Process Sheet with Aquafaba - VERY AQUAFABA',
      h1: 'How to shake an aquafaba white lady: the step-by-step sheet',
      description: 'The aquafaba white lady on one page: build, dry shake, shake with ice, strain into a stemmed glass and garnish, with the checks for a thin head.',
      lead: `A white lady goes out on a stem with flowers resting on the foam, so a thin head shows the moment the glass lands. This sheet keeps the five steps of the VERY AQUAFABA recipe on one page, with what each should look like, so the head comes out firm whoever is shaking.`,
      powderNote: 'Powder: for one drink, {powder} g of VERY AQUAFABA powder + {water} ml of water, made up before service and chilled.',
      steps: [
        { step: 'Build', reference: '{gin} ml gin, {triple_sec} ml triple sec, {lemon_juice} ml lemon, {cane_syrup} ml cane sugar syrup, {dose} ml VERY AQUAFABA, chilled' },
        { step: 'Dry shake', reference: 'Hard, without ice: the liquid turns pale and thick' },
        { step: 'With ice', reference: '{ice} cubes, shake again until the tin frosts' },
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
        { id: 'use', title: 'How to use this sheet', html: `<p>Keep it in the bar book next to the <a href="{guide_href}">white lady guide</a>. When a head comes out thin or the flowers sink, walk back through the five steps in order: the cause is usually the temperature of the aquafaba or the moment the ice went in.</p>` },
        { id: 'before', title: 'Before service', html: `<ul>
<li><strong>The batch.</strong> Gin, triple sec, lemon and syrup in one bottle; the aquafaba kept apart.</li>
<li><strong>The aquafaba.</strong> In the fridge, and an opened pack used within {opened_days} days at {opened_temp} °C.</li>
<li><strong>The glasses.</strong> Cocktail or margarita glasses ready, and the dried flowers within reach.</li>
<li><strong>The powder, if you use it.</strong> Made up for the night and chilled.</li>
</ul>` },
        { id: 'signs', title: 'What each step should look like', html: `<p>After the dry shake the liquid is pale and thick, almost like a milkshake. After the shake with ice the tin is frosted on the outside. In the glass the head sits level and firm enough to hold the flowers on top. If one of the three is missing, the checks above point to the step, and the <a href="{calculator_href}">white lady quantity calculator</a> sizes the batch for the night.</p>` },
      ],
      faq: [
        { q: 'Why do the dried flowers sink?', a: 'The head is too thin to hold them, usually because the ice went in before the dry shake. Shake without ice first, then with ice.' },
        { q: 'Does a white lady go over ice?', a: 'No. The recipe book serves it in a cocktail or margarita glass, strained with no ice in the glass.' },
        { q: 'Does the powder follow the same sheet?', a: 'Yes. Make up {powder} g of powder with {water} ml of water per drink before service, chill it, and follow the same five steps.' },
        { q: 'Can I add the aquafaba to the batched gin and triple sec?', a: 'No. Add it to each tin at the shake, one drink at a time.' },
      ],
    },
    'la-rosee': {
      title: 'La Rosée Process Sheet with Aquafaba - VERY AQUAFABA',
      h1: 'How to shake La Rosée with aquafaba: the step-by-step sheet',
      description: 'La Rosée on one page: build with two drops of orange blossom water, dry shake, shake with ice, strain into a coupe and garnish with mint.',
      lead: `La Rosée has six things in the tin, one of them measured in drops, and a pink drink that shows every flaw in the foam. This sheet lays out the five steps of the VERY AQUAFABA recipe with what each should look like, so the house drink comes out the same on a quiet Tuesday and a full Saturday.`,
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
        { see: 'Orange blossom takes over', check: 'More than two drops went in', fix: 'Measure with a dropper bottle' },
        { see: 'Mint sinks before the table', check: 'The drink waited on the pass', fix: 'Shake to order and serve at once' },
      ],
      sections: [
        { id: 'use', title: 'How to use this sheet', html: `<p>Pin it next to the <a href="{guide_href}">La Rosée guide</a>. The five steps follow the VERY AQUAFABA recipe book in order. Most problems with this drink show up as pink through the foam, and the checks start there.</p>` },
        { id: 'before', title: 'Before service', html: `<ul>
<li><strong>Base batched.</strong> Vodka, bergamot liqueur, lemon, raspberry syrup and the orange blossom water in one bottle; the aquafaba stays apart.</li>
<li><strong>Dropper bottle.</strong> If the orange blossom water goes in per drink, keep it in a dropper bottle on the station.</li>
<li><strong>Aquafaba cold.</strong> An opened pack is kept at {opened_temp} °C and used within {opened_days} days.</li>
<li><strong>Coupes and mint ready.</strong> The drink goes straight from the strain to the garnish.</li>
</ul>` },
        { id: 'signs', title: 'How to tell La Rosée is right', html: `<p>After the dry shake the liquid is pale pink and thick. After the shake with ice the tin frosts. In the coupe a pale head settles on the pink drink with a clear line between the two, and the mint sits on top without sinking. The <a href="{calculator_href}">La Rosée quantity calculator</a> works out the batch, drops included.</p>` },
      ],
      faq: [
        { q: 'Why is the pink showing through the foam?', a: 'The head is thin. The usual cause is ice in the tin before the dry shake; a warm aquafaba gives a slack foam too.' },
        { q: 'Can the orange blossom water go into the batch?', a: 'Yes, at {orange_blossom} drops per drink, with the vodka, bergamot liqueur, lemon and raspberry syrup. The aquafaba stays out of the batch.' },
        { q: 'Does the powder work for La Rosée?', a: 'Yes. Make up {powder} g of powder with {water} ml of water per drink before service and keep it chilled.' },
        { q: 'Which glass and garnish does La Rosée use?', a: 'A coupe glass and a sprig of mint, as in the VERY AQUAFABA recipe book.' },
      ],
    },
    'the-sunset': {
      title: 'The Sunset Process Sheet with Aquafaba - VERY AQUAFABA',
      h1: 'How to build The Sunset with aquafaba: the step-by-step sheet',
      description: 'The Sunset on one page: build, dry shake, shake with ice, strain into a highball, top with ginger beer and garnish, with the checks for the head.',
      lead: `The Sunset is a house recipe with a highball finish: rum and amaretto shaken with lemon, vanilla and tonka syrup and aquafaba, then ginger beer in the glass. This sheet sets out its six steps with what each one should look like, and the checks for the evening a head sinks under the ginger beer.`,
      powderNote: 'Powder: for one drink, {powder} g of VERY AQUAFABA powder + {water} ml of water, made up before service and chilled.',
      steps: [
        { step: 'Build', reference: '{rum} ml rum, {amaretto} ml amaretto, {lemon_juice} ml lemon, {vanilla_tonka_syrup} ml vanilla and tonka syrup, {dose} ml VERY AQUAFABA, chilled' },
        { step: 'Dry shake', reference: 'Hard, without ice, until the liquid turns pale and thick' },
        { step: 'With ice', reference: '{ice} cubes, a second shake until the tin frosts' },
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
        { id: 'use', title: 'Where this sheet helps', html: `<p>File it next to the <a href="{guide_href}">Sunset guide</a>. On most nights nobody needs it. When a Sunset reaches the table without its head, read the six steps against what happened at the station: the top, the temperature of the aquafaba and the moment the ice went in are where the answer usually is.</p>` },
        { id: 'before', title: 'The station before doors open', html: `<ul>
<li><strong>One bottle of base.</strong> Rum, amaretto, lemon and vanilla and tonka syrup, batched together.</li>
<li><strong>Two things kept apart.</strong> The aquafaba in the fridge, an opened pack used within {opened_days} days at {opened_temp} °C, and the ginger beer, chilled.</li>
<li><strong>Glassware and garnish.</strong> Highballs and the dried flowers within reach of the strain.</li>
</ul>` },
        { id: 'signs', title: 'Reading the drink at each step', html: `<p>Pale and thick after the dry shake, a frosted tin after the second, and a white head sitting on the drink once it's strained. Then the ginger beer goes in underneath, the head lifts with it, and the flowers go on. The <a href="{calculator_href}">Sunset quantity calculator</a> scales the base for the night.</p>` },
      ],
      faq: [
        { q: 'Can the ginger beer go into the shaker?', a: 'No. The recipe book pours it into the highball after the strain, once the head is built.' },
        { q: 'What should The Sunset look like before the ginger beer?', a: 'Strained into the highball with a white head already on it. The ginger beer then lengthens the drink underneath.' },
        { q: 'Does the powder work for The Sunset?', a: 'Yes: {powder} g of powder in {water} ml of water per drink, made up before service and chilled, then the same six steps.' },
        { q: 'Which parts of The Sunset can I batch?', a: 'The rum, amaretto, lemon and vanilla and tonka syrup. The aquafaba goes in at the shake and the ginger beer in the glass.' },
      ],
    },
  },
};
