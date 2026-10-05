// Cocktail expansion, English (October 2026, wave 1; wave 2 in cocktails-2.en.js): the guides, quantity calculators and
// process sheets of three cocktails of the VERY AQUAFABA recipe book, and two question pages.
// Built by data/resources/cocktails.js. Every figure is a {token} filled from facts.json
// (facts.cocktail_recipes and facts.shared); no dashes, only the brand VERY AQUAFABA.
// Copy based on the approved expansion artifact (source of truth, 2026-10-05).

import { fixTable, table } from './cocktail-tables.js';
import WAVE2 from './cocktails-2.en.js';

const WAVE1 = {
  labels: {
    cocktailsGuide: 'Aquafaba in cocktails: liquid or powder for your bar?',
    barsPage: 'Aquafaba for bars and cocktails',
    calculatorLink: 'Quantity calculator for this cocktail',
    processLink: 'Process sheet for this cocktail',
    perDrink: 'Per drink',
    drinks: '= {n} drinks',
    drinksUnit: 'drinks',
    ingredients: {
      pisco: 'Pisco', lime_juice: 'Lime juice', cane_syrup: 'Cane sugar syrup',
      amaretto: 'Amaretto', lemon_juice: 'Lemon juice', vanilla_syrup: 'Vanilla syrup', gin: 'Gin',
    },
  },

  guides: {
    'pisco-sour': {
      title: 'Pisco Sour with Aquafaba: Egg-Free Recipe - VERY AQUAFABA',
      h1: 'How to make a pisco sour with aquafaba',
      crumb: 'Pisco sour',
      card: 'Pisco, lime and a dried lemon slice',
      eyebrow: 'Cocktail guide',
      description: 'A pisco sour with VERY AQUAFABA instead of egg white: {dose} ml per drink, the two shakes in the right order, and which format suits your bar.',
      lead: `The pisco sour is a drink people remember for its foam, and that foam has always come from an egg white. Swap it for {dose} ml of VERY AQUAFABA and you keep the thick white head, the silky texture and the bright lime, with no egg behind the bar. The method doesn't change either: two shakes, in the right order, and we'll show you why that order matters.`,
      sections: [
        { id: 'tin', title: 'What goes in the tin', html: `<ul>
<li>{pisco} ml pisco</li>
<li>{lime_juice} ml fresh lime juice</li>
<li>{cane_syrup} ml cane sugar syrup</li>
<li>{dose} ml VERY AQUAFABA, chilled</li>
<li>An old fashioned glass, and a slice of dried lemon for the garnish</li>
</ul>
<p>That's the whole recipe. The {dose} ml of aquafaba does the job the egg white did, and nothing else in your spec has to change.</p>` },
        { id: 'shake', title: 'How to shake it', html: `<p>The method is the one you already know, two shakes, and the order matters more than the strength.</p>
<ol>
<li>Build everything in the tin: pisco, lime, syrup and the aquafaba straight from the fridge.</li>
<li>Shake hard without ice. This dry shake is where the foam is made. When you open the tin the liquid should look pale and thick, almost like a milkshake.</li>
<li>Add {ice} ice cubes and shake again until the tin frosts on the outside. This shake chills the drink and dilutes it.</li>
<li>Strain into the old fashioned glass. The head rises as it settles, so give it a few seconds before you garnish.</li>
<li>Lay the dried lemon slice on the foam.</li>
</ol>` },
        { id: 'why', title: 'Why the dry shake comes first', html: `<p>Foam is air trapped in a liquid, and aquafaba traps it while nothing gets in the way. Ice in the tin chills and dilutes the drink before the foam has formed, and the head comes out thin. Shake it dry first to build the foam, then with ice to finish the drink.</p>` },
        { id: 'fix', title: "When the head doesn't hold", html: fixTable([
          ['A thin head, or none at all', 'Ice went in before the dry shake', 'Dry shake first, ice second'],
          ['A slow, slack foam', 'The aquafaba was at room temperature', 'Keep the pack in the fridge until the shake'],
          ['The foam drops before the drink reaches the guest', 'The drink waited on the pass', 'Shake to order and serve at once'],
          ['No height by the middle of service', 'The aquafaba went into the pre-batch', 'Batch the pisco, lime and syrup only, and add the aquafaba per drink'],
        ]) },
        { id: 'busy', title: 'On a busy night', html: `<p>Pre-batch the pisco, lime and syrup before service. Keep the aquafaba out of the batch and add it to each tin at the shake, because the foam is made one drink at a time. The <a href="{process_href}">process sheet for the pisco sour</a> puts every step on one page for the station.</p>` },
        { id: 'format', title: 'Pisco sours every night, or a few a week?', html: `<p>A 1 L Tetrapak makes {drinks_1l} pisco sours, and once it's open it keeps {opened_days} days at {opened_temp} °C. If pisco sours sell every night, the liquid pours straight into the tin and the pack runs out well inside that time.</p>
<p>If it's a drink you make a few times a week, the powder is the safer choice. Make up {powder} g with {water} ml of water for each drink, and the opened pouch keeps as long as it stays dry and closed. For a whole service, the <a href="{calculator_href}">pisco sour quantity calculator</a> works out the aquafaba, the pisco, the lime and the syrup.</p>` },
      ],
      faq: [
        { q: 'Does aquafaba change the taste of a pisco sour?', a: "No. It's neutral in taste and smell, so the flavour stays with the pisco and lime. It carries the foam and the silky texture." },
        { q: 'Can I make a pisco sour vegan?', a: 'Yes, as far as the foam goes. VERY AQUAFABA is plant-based and egg-free, so the head brings no egg into the drink.' },
        { q: 'How much aquafaba do I use per pisco sour?', a: '{dose} ml of liquid, or {powder} g of powder made up with {water} ml of water.' },
        { q: 'Is aquafaba safer than raw egg white in cocktails?', a: 'A sour is never cooked, so raw egg white is a known concern behind the bar. Aquafaba takes that question away.' },
        { q: 'Do I need to change my pisco sour recipe?', a: 'No. The pisco, the lime and the cane sugar syrup stay as they are, and {dose} ml of aquafaba takes the place of the egg white.' },
        { q: 'Can I pre-batch pisco sours with aquafaba?', a: 'Yes, the base. Pisco, lime and syrup go into one bottle before service, and the aquafaba is added to each tin at the shake.' },
        { q: 'How long does an opened pack of aquafaba last behind the bar?', a: 'Opened liquid is kept at {opened_temp} °C and used within {opened_days} days. An opened pouch of powder keeps while it stays dry and closed, and sealed packs keep at least {unopened_months} months at room temperature.' },
        { q: 'Where can I buy aquafaba for pisco sours?', a: 'Country by country on [where to buy aquafaba for cocktails]({where_to_buy_page_href}): Amazon in the United States and Germany, InstantChef in France, and the enquiry form everywhere else.' },
      ],
    },

    'amaretto-sour': {
      title: 'Amaretto Sour with Aquafaba: Egg-Free Recipe - VERY AQUAFABA',
      h1: 'How to make an amaretto sour with aquafaba',
      crumb: 'Amaretto sour',
      card: 'Amaretto, lemon and vanilla syrup',
      eyebrow: 'Cocktail guide',
      description: 'An amaretto sour with VERY AQUAFABA in place of egg white: {amaretto} ml of amaretto, {dose} ml of aquafaba, two shakes and a white head with no egg.',
      lead: `The amaretto sour is the sweet one of the sours: a big pour of amaretto, lemon to cut it, a little vanilla and a white head on top. In the VERY AQUAFABA recipe that head comes from {dose} ml of aquafaba instead of an egg white. Here's what goes in the tin, how to shake it, and how to keep the foam up when the orders stack.`,
      sections: [
        { id: 'tin', title: 'What goes in the tin', html: `<ul>
<li>{amaretto} ml amaretto</li>
<li>{lemon_juice} ml lemon juice</li>
<li>{vanilla_syrup} ml vanilla syrup</li>
<li>{dose} ml VERY AQUAFABA, chilled</li>
</ul>
<p>This one comes from the VERY AQUAFABA mixology flyer, and it's the only sour of the set built on {amaretto} ml of liqueur with a vanilla syrup. The flyer names no glass and no garnish, so serve it the way your bar already serves its sours.</p>` },
        { id: 'measures', title: 'Why the measures look different', html: `<p>The pisco sour and the gin fizz build on a spirit with a full measure of cane sugar syrup. Here the base is {amaretto} ml of amaretto against {lemon_juice} ml of lemon, so the drink leans sweet, and the syrup is a small {vanilla_syrup} ml of vanilla rather than a full measure of sugar.</p>
<p>The aquafaba doesn't move: {dose} ml, the same as in the pisco sour and the gin fizz. One measure for every sour on the list keeps the station simple.</p>` },
        { id: 'shake', title: 'How to shake it', html: `<ol>
<li>Pour the amaretto, the lemon, the vanilla syrup and the chilled aquafaba into the tin.</li>
<li>Shake hard without ice: this is where the head is built.</li>
<li>Add {ice} ice cubes and shake again to chill and dilute the drink.</li>
<li>Strain into the glass and send it out straight away.</li>
</ol>
<p>A sweet sour shows a weak head quickly, so the two habits that matter are the same as ever: the aquafaba comes from the fridge, and the ice goes in second.</p>` },
        { id: 'flat', title: 'When it comes out flat', html: `<ul>
<li><strong>Thin head from the first drink.</strong> The ice went in before the dry shake. Shake dry first, then with ice.</li>
<li><strong>A foam that rises slowly and stays slack.</strong> The aquafaba sat out at room temperature. Keep the pack in the fridge until the shake.</li>
<li><strong>Good at the bar, flat at the table.</strong> The drink waited on the pass. Shake to order and serve at once.</li>
</ul>` },
        { id: 'format', title: 'How many amaretto sours you sell decides the pack', html: `<p>Count how many amaretto sours you sell in a few days. A 1 L Tetrapak pours {drinks_1l} of them, and once it's open it has {opened_days} days at {opened_temp} °C, which suits a bar where the drink is on the menu and ordered every night.</p>
<p>If it's an occasional order, the powder takes the clock away. A 200 g pouch makes {drinks_200g} drinks at {powder} g of powder and {water} ml of water each, and an open pouch keeps dry and closed until the next one. The <a href="{calculator_href}">amaretto sour quantity calculator</a> scales every ingredient for the night you're planning.</p>` },
        { id: 'batch', title: 'Batching amaretto sours for service', html: `<p>The amaretto, the lemon and the vanilla syrup can go into one bottle before doors open. The aquafaba stays out of that bottle and goes into each tin at the shake, one drink at a time. The <a href="{process_href}">amaretto sour process sheet</a> lists each step with what to check, ready for the bar book.</p>` },
      ],
      faq: [
        { q: 'What do I use instead of egg white in an amaretto sour?', a: '{dose} ml of VERY AQUAFABA liquid, or {powder} g of powder made up with {water} ml of water.' },
        { q: 'Does aquafaba taste of chickpeas in an amaretto sour?', a: 'No. VERY AQUAFABA is neutral in taste and smell, so the drink tastes of the amaretto, the lemon and the vanilla.' },
        { q: 'Which glass does the VERY AQUAFABA amaretto sour use?', a: 'The mixology flyer names no glass and no garnish. Use the glass your bar already serves its sours in.' },
        { q: 'Can I batch amaretto sours before service?', a: 'Yes, the amaretto, lemon and vanilla syrup. The aquafaba is added to each tin at the shake, never to the batch.' },
        { q: 'How many amaretto sours does a 1 L pack make?', a: '{drinks_1l} drinks at {dose} ml each. Once opened, the pack is kept at {opened_temp} °C and used within {opened_days} days.' },
        { q: 'Is an amaretto sour with aquafaba vegan?', a: 'The foam is: VERY AQUAFABA is plant-based and egg-free, so the head brings no egg into the drink.' },
      ],
    },

    'gin-fizz': {
      title: 'Gin Fizz with Aquafaba: Egg-Free Recipe - VERY AQUAFABA',
      h1: 'How to make a gin fizz with aquafaba',
      crumb: 'Gin fizz',
      card: 'Gin and lemon, topped with tonic water',
      eyebrow: 'Cocktail guide',
      description: 'A gin fizz with VERY AQUAFABA instead of egg white: shaken with {dose} ml of aquafaba, strained into a highball and topped with tonic water.',
      lead: `A gin fizz is a sour that grows tall: shaken like the others, then lengthened in a highball with tonic water, with the white head riding on top. In the VERY AQUAFABA recipe book that head comes from {dose} ml of aquafaba instead of an egg white. The one thing to get right is the order: shake, strain, then top.`,
      sections: [
        { id: 'tin', title: 'What goes in the tin, and what goes on top', html: `<ul>
<li>{gin} ml gin</li>
<li>{lemon_juice} ml lemon juice</li>
<li>{cane_syrup} ml cane sugar syrup</li>
<li>{dose} ml VERY AQUAFABA, chilled</li>
<li>Tonic water to top, in a highball glass</li>
<li>A slice of dried lemon for the garnish</li>
</ul>
<p>Everything except the tonic goes into the shaker. The tonic only meets the drink once it's in the glass.</p>` },
        { id: 'build', title: 'How to build it', html: `<ol>
<li>Pour the gin, the lemon, the cane sugar syrup and the aquafaba into the shaker.</li>
<li>Shake hard without ice to build the foam.</li>
<li>Add {ice} ice cubes and shake again to chill the drink.</li>
<li>Strain into the highball glass.</li>
<li>Top with tonic water.</li>
<li>Lay the dried lemon slice on the head.</li>
</ol>` },
        { id: 'tonic', title: 'Why the tonic goes in last', html: `<p>In the recipe book the tonic is poured after the drink is strained, never shaken. The aquafaba builds its head on the gin, the lemon and the syrup during the dry shake; the tonic then lengthens the drink in the glass, and the head sits on top of a long drink instead of a short one.</p>
<p>That makes the gin fizz the easiest of the set to stretch on a busy terrace: the shaken part is the same size as a pisco sour, and the highball takes the rest.</p>` },
        { id: 'thin', title: 'When the head comes out thin', html: fixTable([
          ['Thin head before the tonic goes in', 'Ice went in before the dry shake', 'Dry shake first, ice second'],
          ['A slack foam that rises slowly', 'The aquafaba was at room temperature', 'Keep it in the fridge until the shake'],
          ['The head has gone by the time the drink reaches the table', 'The drink waited on the pass', 'Shake, top and serve at once'],
        ]) },
        { id: 'format', title: 'Which pack keeps up with your gin fizzes', html: `<p>The liquid is the quick one: a 1 L Tetrapak goes from the fridge to the tin and makes {drinks_1l} gin fizzes, and a 10 L bag-in-box makes {drinks_10l} for a bar where long drinks sell all night. Either way, an opened pack is kept at {opened_temp} °C and used within {opened_days} days.</p>
<p>The powder suits a bar that shakes a gin fizz now and then: {powder} g of powder in {water} ml of water per drink, made up before service and chilled, and the pouch keeps once it's open while it stays dry and closed.</p>` },
        { id: 'service', title: 'Running gin fizzes on a busy night', html: `<p>Batch the gin, the lemon and the syrup before service. The aquafaba goes into each tin at the shake, and the tonic into each glass after the strain, so nothing that makes the head or the fizz sits waiting in a bottle. The <a href="{process_href}">gin fizz process sheet</a> keeps the order on one page, and the <a href="{calculator_href}">gin fizz quantity calculator</a> works out the night.</p>` },
      ],
      faq: [
        { q: 'Can I make a gin fizz without egg white?', a: 'Yes. Shake {dose} ml of VERY AQUAFABA with the gin, lemon and syrup in place of the egg white, then top with tonic water.' },
        { q: 'When do I add the tonic water to a gin fizz?', a: 'After the drink is strained into the highball glass. The tonic is poured on top, never shaken.' },
        { q: 'How much aquafaba goes into a gin fizz?', a: '{dose} ml of liquid, or {powder} g of powder made up with {water} ml of water.' },
        { q: 'Does aquafaba change the taste of the gin?', a: 'No. VERY AQUAFABA is neutral in taste and smell, so the gin, the lemon and the tonic carry the flavour.' },
        { q: 'Can I make up the powder before service?', a: 'Yes. Make up {powder} g of powder with {water} ml of water per drink before service and keep it chilled until the shake.' },
        { q: 'How many gin fizzes does a 10 L bag-in-box make?', a: '{drinks_10l} drinks at {dose} ml each. Once opened, the bag-in-box is kept at {opened_temp} °C and used within {opened_days} days.' },
      ],
    },
  },

  topics: {
    'where-to-buy': {
      title: 'Where to Buy Aquafaba for Cocktails - VERY AQUAFABA',
      h1: 'Where to buy aquafaba for cocktails',
      crumb: 'Where to buy',
      eyebrow: 'Cocktails',
      description: 'Where to buy VERY AQUAFABA for your bar: Amazon in the United States and Germany, InstantChef in France, and the enquiry form everywhere else.',
      lead: `Looking for aquafaba for your bar? In the United States and Germany you'll find VERY AQUAFABA on Amazon, and in France on InstantChef. Everywhere else, send us your details through the form on this page and we'll come back to you about your order.`,
      sections: [
        { id: 'countries', title: 'Where to buy, country by country', html: `${table(['Where you are', 'Where to buy'], [
          ['<a href="{united_states_en_href}">United States</a>', 'Amazon, including the cocktail listing'],
          ['<a href="{germany_en_href}">Germany</a>', 'Amazon'],
          ['<a href="{france_en_href}">France</a>', 'InstantChef'],
          ['<a href="{united_kingdom_en_href}">United Kingdom</a>, <a href="{belgium_en_href}">Belgium</a>, <a href="{netherlands_en_href}">the Netherlands</a> and everywhere else', 'The enquiry form on this page'],
        ])}
<p>Each country page shows the formats and the way to order there.</p>` },
        { id: 'choose', title: 'How often a sour leaves your bar', html: `<p>Before you buy, think about how often a sour leaves your bar. The liquid pours straight into the tin, which suits a menu where sours sell every night: an opened pack is kept at {opened_temp} °C and used within {opened_days} days. The powder keeps once the pouch is open, so it's the easier choice when you only shake a few a week.</p>
<p>The <a href="{cocktails_href}">cocktails guide</a> walks through that choice for the way your bar works.</p>` },
        { id: 'packs', title: 'Which pack fits your bar?', html: `${table(['Pack', 'Drinks at {dose} ml each'], [
          ['1 L Tetrapak', '{drinks_1l}'],
          ['10 L bag-in-box', '{drinks_10l}'],
          ['30 g pouch', '{drinks_30g}'],
          ['200 g pouch', '{drinks_200g}'],
          ['3 kg pouch', '{drinks_3kg}'],
        ])}
<p>The counts use {dose} ml per drink, the dose of the <a href="{pisco_sour_href}">pisco sour</a>, the <a href="{amaretto_sour_href}">amaretto sour</a> and the <a href="{gin_fizz_href}">gin fizz</a> in the VERY AQUAFABA recipe book. With the powder, one drink is {powder} g made up with {water} ml of water.</p>` },
        { id: 'groups', title: 'Ordering for more than one bar', html: `<p>Several venues, a new cocktail list or a volume that doesn't fit a single pack: describe it in the professional enquiry form on this page, with your sites and the formats you have in mind, and the technical sheet comes with the answer. The page on <a href="{bars_href}">aquafaba for bars and cocktails</a> covers setting up the station before you order.</p>` },
      ],
      faq: [
        { q: 'Where can I buy aquafaba for cocktails in the United States?', a: 'On Amazon, including a listing for cocktails. The [United States page]({united_states_en_href}) has the link.' },
        { q: 'Can I buy VERY AQUAFABA in the United Kingdom?', a: 'Through the enquiry form on this page: leave your details and the formats you need, and we come back to you about the order.' },
        { q: 'Where do I buy it in France?', a: 'On InstantChef, in liquid and in powder. The [France page]({france_en_href}) has the link.' },
        { q: 'Which pack should a bar buy?', a: 'Count your sours. If an opened pack is used within {opened_days} days, the liquid is the easy choice; if not, the powder keeps once the pouch is open.' },
        { q: 'How many cocktails does a 1 L pack make?', a: '{drinks_1l} drinks at {dose} ml each, the dose of the cocktails in the VERY AQUAFABA recipe book.' },
        { q: 'Can I get the technical sheet before I order?', a: 'Yes. Ask for it through the professional enquiry form on this page or the [contact form]({contact_href}).' },
      ],
    },

    powder: {
      title: 'Can I Use Aquafaba Powder in Cocktails? - VERY AQUAFABA',
      h1: 'Can I use aquafaba powder in cocktails?',
      crumb: 'Aquafaba powder in cocktails',
      eyebrow: 'Cocktails',
      description: 'Yes: {powder} g of VERY AQUAFABA powder made up with {water} ml of water per drink, chilled, then shaken like the liquid. When bars choose it.',
      lead: `Yes, and once it's made up, it works in the tin just like the liquid. The powder gives your sour the same white foam head, and an open pouch can wait on the back shelf until the next order comes in. When it does, you only need a little powder, some water and the same two shakes you already know.`,
      sections: [
        { id: 'why', title: 'Why bars choose the powder', html: `<p>Once the pouch is opened, the powder keeps while it stays dry and closed. A bar that sells sours a few times a week makes up what tonight needs, and the rest of the pouch waits for the next service.</p>
${table(['Drinks tonight', 'Powder', 'Water'], [
  ['10', '{p10} g', '{w10} ml'],
  ['{ex_batches}', '{ex_powder} g', '{ex_water} ml'],
])}
<p>For one drink, that's {powder} g of powder in {water} ml of water, chilled before it goes in the tin. These doses come from the powder rule: {white_powder} g of powder and {white_water} ml of water make {white_total} g of aquafaba, the same as the liquid.</p>` },
        { id: 'make', title: 'Making it up for service', html: `<p>Weigh the powder for the drinks you expect, add the water, and chill the made-up aquafaba before doors open. Cold aquafaba foams faster and holds longer, so it waits in the fridge, not on the bar. The <a href="{reconstitution_href}">powder reconstitution page</a> has the rule from one egg white to twenty.</p>` },
        { id: 'pouch', title: 'Which pouch to keep on the back shelf', html: `<p>At {dose} ml a drink, the dose of the cocktails in the VERY AQUAFABA recipe book, a 30 g pouch makes {drinks_30g} drinks, a 200 g pouch {drinks_200g} and a 3 kg pouch {drinks_3kg}. Sealed, every pouch keeps at least {unopened_months} months at room temperature, so the next one can wait in the dry store.</p>
<p>The recipes to start with are the <a href="{pisco_sour_href}">pisco sour</a>, the <a href="{amaretto_sour_href}">amaretto sour</a> and the <a href="{gin_fizz_href}">gin fizz</a>, and <a href="{where_to_buy_page_href}">where to buy aquafaba for cocktails</a> lists the way to order in each country.</p>` },
        { id: 'mistakes', title: 'Mistakes to avoid', html: `<ul>
<li><strong>Ice in the tin from the start.</strong> The head comes out thin. Shake dry first, then with ice.</li>
<li><strong>Made-up aquafaba left on the bar.</strong> Warm aquafaba gives a slow, slack foam. Keep it chilled until the shake.</li>
<li><strong>Aquafaba in the pre-batch.</strong> The height is gone by the middle of service. Batch the spirit, citrus and syrup, and add the aquafaba per drink.</li>
</ul>` },
      ],
      faq: [
        { q: 'How much aquafaba powder do I use per cocktail?', a: '{powder} g of VERY AQUAFABA powder made up with {water} ml of water, for a drink that takes {dose} ml of liquid.' },
        { q: 'Does aquafaba powder foam like the liquid?', a: 'Yes. Once it is made up and chilled, it goes into the tin and through the two shakes the same way as the liquid.' },
        { q: 'How long does an opened pouch keep?', a: 'An opened pouch of powder does not spoil while it stays dry and closed. Sealed, it keeps at least {unopened_months} months at room temperature.' },
        { q: 'Can I make up the powder before service?', a: 'Yes. Make up what the night needs before service and keep it in the fridge until the shake.' },
        { q: 'Which pouch should a bar buy?', a: 'A 30 g pouch makes {drinks_30g} drinks, a 200 g pouch {drinks_200g} and a 3 kg pouch {drinks_3kg}, at {dose} ml a drink.' },
        { q: 'Where can I buy aquafaba powder for cocktails?', a: 'Country by country on [where to buy aquafaba for cocktails]({where_to_buy_page_href}).' },
      ],
    },
  },

  calculator: {
    'pisco-sour': {
      title: 'Pisco Sour Aquafaba Calculator - VERY AQUAFABA',
      h1: 'How much aquafaba per pisco sour? Quantity calculator',
      description: 'Work out the VERY AQUAFABA, pisco, lime and syrup for any number of pisco sours, in liquid or in powder with its water.',
      lead: `Tell the calculator how many pisco sours you are planning and it works out the VERY AQUAFABA, the pisco, the lime juice and the syrup, in liquid or in powder with its water.`,
      sections: [
        { id: 'scaling', title: "What changes with a busier service, and what doesn't", html: `<p>The pisco, the lime, the syrup and the aquafaba scale in a straight line. The shake does not: every drink still gets its own dry shake, because the foam is made in the tin, one drink at a time. The ice scales with the drinks too, {ice} cubes for each second shake, so count it in when you order for the night.</p>` },
        { id: 'packs', title: 'How many pisco sours from a pack', html: `<ul>
<li><strong>1 L Tetrapak:</strong> {drinks_1l} pisco sours.</li>
<li><strong>10 L bag-in-box:</strong> {drinks_10l} pisco sours.</li>
<li><strong>200 g pouch:</strong> {drinks_200g} pisco sours.</li>
<li><strong>3 kg pouch:</strong> {drinks_3kg} pisco sours.</li>
</ul>
<p>An opened liquid pack is kept at {opened_temp} °C and used within {opened_days} days, so size the pack to what you pour in that time. An opened pouch keeps while it stays dry and closed.</p>` },
        { id: 'example', title: 'Example: {ex_batches} pisco sours for a Saturday night', html: `<p>For {ex_batches} pisco sours you need {ex_dose} ml of VERY AQUAFABA, {ex_pisco} ml of pisco, {ex_lime_juice} ml of lime juice and {ex_cane_syrup} ml of cane sugar syrup, plus {ex_ice} ice cubes for the second shakes. One 1 L Tetrapak covers the aquafaba with {ex_left_1l} ml left for the next {opened_days} days.</p>
<p>With the powder, the same night takes {ex_powder} g of powder and {ex_water} ml of water, made up before service and chilled. The <a href="{guide_href}">pisco sour guide</a> has the method, and the <a href="{process_href}">process sheet</a> the checks.</p>` },
      ],
      faq: [
        { q: 'How much aquafaba do I need for one pisco sour?', a: '{dose} ml of VERY AQUAFABA liquid, or {powder} g of powder with {water} ml of water.' },
        { q: 'How much pisco and lime for {ex_batches} drinks?', a: '{ex_pisco} ml of pisco and {ex_lime_juice} ml of lime juice, with {ex_cane_syrup} ml of cane sugar syrup and {ex_dose} ml of aquafaba.' },
        { q: 'Does the calculator count the ice?', a: 'No, only the liquids. Allow {ice} ice cubes for each drink, for the second shake.' },
        { q: 'Should I make up all the powder at once?', a: 'Make up what the service needs before doors open and keep it chilled. An opened pouch keeps dry and closed for the next service.' },
      ],
    },
    'amaretto-sour': {
      title: 'Amaretto Sour Aquafaba Calculator - VERY AQUAFABA',
      h1: 'How much aquafaba per amaretto sour? Quantity calculator',
      description: 'Scale an amaretto sour with VERY AQUAFABA: the aquafaba, amaretto, lemon and vanilla syrup for any number of drinks, liquid or powder.',
      lead: `An amaretto sour takes more liqueur than any other sour in the set, so a busy night uses amaretto faster than you think. Type the number of drinks and the calculator gives the VERY AQUAFABA, the amaretto, the lemon juice and the vanilla syrup, in liquid or in powder with its water.`,
      sections: [
        { id: 'scaling', title: 'The amaretto adds up first', html: `<p>Each drink takes {amaretto} ml of amaretto against {dose} ml of aquafaba, so when you scale up it's the liqueur that runs low first, not the aquafaba. Everything scales in a straight line; the two shakes stay one drink at a time, with {ice} ice cubes in each second shake.</p>` },
        { id: 'packs', title: 'How many amaretto sours from a pack', html: `<ul>
<li><strong>1 L Tetrapak:</strong> {drinks_1l} drinks, used within {opened_days} days once opened.</li>
<li><strong>10 L bag-in-box:</strong> {drinks_10l} drinks, for a bar where the drink sells every night.</li>
<li><strong>200 g pouch:</strong> {drinks_200g} drinks, with no clock once it's open.</li>
<li><strong>3 kg pouch:</strong> {drinks_3kg} drinks.</li>
</ul>
<p>On a quiet week, make up only what the night needs: {p10} g of powder in {w10} ml of water covers ten amaretto sours, and the rest of the pouch stays dry and closed for the next service.</p>` },
        { id: 'example', title: 'Example: {ex_batches} amaretto sours for a party', html: `<p>{ex_batches} amaretto sours take {ex_amaretto} ml of amaretto, {ex_lemon_juice} ml of lemon juice, {ex_vanilla_syrup} ml of vanilla syrup and {ex_dose} ml of VERY AQUAFABA, or {ex_powder} g of powder made up with {ex_water} ml of water. Batch the amaretto, the lemon and the syrup before the party and keep the aquafaba for the shake.</p>
<p>The <a href="{guide_href}">amaretto sour guide</a> has the method, and the <a href="{process_href}">process sheet</a> the checks for each step.</p>` },
      ],
      faq: [
        { q: 'How much amaretto for {ex_batches} amaretto sours?', a: '{ex_amaretto} ml of amaretto, with {ex_lemon_juice} ml of lemon juice, {ex_vanilla_syrup} ml of vanilla syrup and {ex_dose} ml of aquafaba.' },
        { q: 'How much aquafaba powder per amaretto sour?', a: '{powder} g of powder made up with {water} ml of water, for one drink.' },
        { q: 'Does the vanilla syrup scale with the drinks?', a: 'Yes, {vanilla_syrup} ml per drink, in a straight line like the other ingredients.' },
        { q: 'Which pack suits an amaretto sour that sells a few times a week?', a: 'The powder: a 200 g pouch makes {drinks_200g} drinks and keeps once opened while it stays dry and closed.' },
      ],
    },
    'gin-fizz': {
      title: 'Gin Fizz Aquafaba Calculator - VERY AQUAFABA',
      h1: 'How much aquafaba per gin fizz? Quantity calculator',
      description: 'Work out the VERY AQUAFABA, gin, lemon and cane sugar syrup for any number of gin fizzes, in liquid or in powder with its water.',
      lead: `A gin fizz is shaken short and served long, so the shaker only sees part of the drink. Type the number of gin fizzes and the calculator gives what goes into the tin: the VERY AQUAFABA, the gin, the lemon juice and the cane sugar syrup, in liquid or in powder with its water.`,
      sections: [
        { id: 'tonic', title: 'What the calculator leaves out', html: `<p>The tonic water isn't in the table: the recipe book tops each highball with it after the strain, so it depends on the glass rather than on a measure. The ice isn't either; allow {ice} cubes per drink for the second shake.</p>` },
        { id: 'packs', title: 'How many gin fizzes from a pack', html: `<ul>
<li><strong>1 L Tetrapak:</strong> {drinks_1l} gin fizzes.</li>
<li><strong>10 L bag-in-box:</strong> {drinks_10l} gin fizzes, for long drinks that sell all night.</li>
<li><strong>200 g pouch:</strong> {drinks_200g} gin fizzes.</li>
<li><strong>3 kg pouch:</strong> {drinks_3kg} gin fizzes.</li>
</ul>
<p>Once open, a liquid pack is kept at {opened_temp} °C and used within {opened_days} days; a pouch keeps while it stays dry and closed.</p>` },
        { id: 'example', title: 'Example: {ex_batches} gin fizzes for a terrace night', html: `<p>{ex_batches} gin fizzes take {ex_gin} ml of gin, {ex_lemon_juice} ml of lemon juice, {ex_cane_syrup} ml of cane sugar syrup and {ex_dose} ml of VERY AQUAFABA, then a top of tonic water in each glass. With the powder, that's {ex_powder} g made up with {ex_water} ml of water before service.</p>
<p>The <a href="{guide_href}">gin fizz guide</a> has the build, and the <a href="{process_href}">process sheet</a> keeps the order of the shakes and the tonic on one page.</p>` },
      ],
      faq: [
        { q: 'How much aquafaba do I need for one gin fizz?', a: '{dose} ml of VERY AQUAFABA liquid, or {powder} g of powder with {water} ml of water.' },
        { q: 'Why is the tonic water not in the calculator?', a: 'It goes on top of each drink after the strain, so the amount depends on the glass. Everything that goes into the shaker is in the table.' },
        { q: 'How much gin for {ex_batches} gin fizzes?', a: '{ex_gin} ml of gin, with {ex_lemon_juice} ml of lemon juice, {ex_cane_syrup} ml of cane sugar syrup and {ex_dose} ml of aquafaba.' },
        { q: 'Which pack suits a bar that sells gin fizzes every night?', a: 'The liquid: a 1 L Tetrapak makes {drinks_1l} drinks and a 10 L bag-in-box {drinks_10l}, used within {opened_days} days once opened.' },
      ],
    },
  },

  process: {
    'pisco-sour': {
      title: 'Pisco Sour Process Sheet with Aquafaba - VERY AQUAFABA',
      h1: 'How to shake an aquafaba pisco sour: the step-by-step sheet',
      description: 'The aquafaba pisco sour on one page: build, dry shake, shake with ice, strain and garnish, with what to check at each step and the fixes.',
      lead: `Every bartender shakes a little differently, and with a foamed drink you see it in the glass. This sheet puts the pisco sour on one page, with what to check at each step, so the head comes out the same whoever is on the station. Keep it with your specs, and when a drink comes out flat, walk back through the steps to find where it went wrong.`,
      powderNote: 'Powder: for one drink, {powder} g of VERY AQUAFABA powder + {water} ml of water, made up before service and chilled.',
      steps: [
        { step: 'Build', reference: '{pisco} ml pisco, {lime_juice} ml lime, {cane_syrup} ml syrup, {dose} ml VERY AQUAFABA, chilled' },
        { step: 'Dry shake', reference: 'Hard, without ice: the liquid turns pale and thick' },
        { step: 'With ice', reference: '{ice} cubes, shake again: the tin frosts on the outside' },
        { step: 'Strain', reference: 'Into an old fashioned glass: the head rises and sits firm' },
        { step: 'Garnish', reference: 'A slice of dried lemon on the foam' },
      ],
      checks: [
        { see: 'Thin head', check: 'Ice went in from the start', fix: 'Dry shake first, ice second' },
        { see: 'Slow, slack foam', check: 'Aquafaba at room temperature', fix: 'Keep it chilled until the shake' },
        { see: 'No height by mid-service', check: 'Aquafaba was added to the pre-batch', fix: 'Batch the base only, add aquafaba per drink' },
        { see: 'Foam drops before it reaches the guest', check: 'The drink waited on the pass', fix: 'Shake to order and serve at once' },
      ],
      sections: [
        { id: 'use', title: 'How to use this sheet', html: `<p>Print it and keep it in the bar book next to the <a href="{guide_href}">pisco sour guide</a>. Most nights the checks stay quiet. On the night a head comes out thin or drops early, go back through the five steps in order: the cause is almost always the temperature of the aquafaba or the moment the ice went in.</p>` },
        { id: 'before', title: 'Before service', html: `<ul>
<li><strong>Aquafaba cold.</strong> The pack lives in the fridge, and an opened one is used within {opened_days} days at {opened_temp} °C.</li>
<li><strong>Powder made up.</strong> If you work with the powder, make up what the night needs and chill it.</li>
<li><strong>The opening date on the pack.</strong> Write it on the carton the moment it's opened.</li>
<li><strong>The base batched.</strong> Pisco, lime and syrup in one bottle; the aquafaba stays apart.</li>
</ul>` },
        { id: 'signs', title: 'How to tell each step is going right', html: `<p>After the dry shake the liquid looks pale and thick, almost like a milkshake. After the shake with ice the tin is frosted on the outside. In the glass the head rises as it settles and sits firm enough to hold the dried lemon slice. If any of the three is missing, the checks above tell you which step to fix, and the <a href="{calculator_href}">quantity calculator</a> sizes the batch for the night.</p>` },
      ],
      faq: [
        { q: 'Why do I shake without ice first?', a: 'The dry shake builds the foam. Ice in the tin from the start chills and dilutes the drink before the foam forms, and the head comes out thin.' },
        { q: 'How long does an opened pack last behind the bar?', a: 'Opened liquid is kept at {opened_temp} °C and used within {opened_days} days. Write the opening date on the carton.' },
        { q: 'Does the powder follow the same sheet?', a: 'Yes. Make up {powder} g of powder with {water} ml of water per drink before service, chill it, and follow the same five steps.' },
        { q: 'Can I add the aquafaba to my pre-batch?', a: 'No. Batch the pisco, lime and syrup, and add the aquafaba to each tin at the shake, one drink at a time.' },
      ],
    },
    'amaretto-sour': {
      title: 'Amaretto Sour Process Sheet with Aquafaba - VERY AQUAFABA',
      h1: 'How to shake an aquafaba amaretto sour: the step-by-step sheet',
      description: 'The aquafaba amaretto sour on one page: build, dry shake, shake with ice and strain, with what to check at each step when the head falls flat.',
      lead: `A sweet sour shows a weak head quickly, which makes the amaretto sour a good test of the station. This sheet lists the four steps of the VERY AQUAFABA recipe with what each one should look like, and the checks for the nights the foam doesn't hold.`,
      powderNote: 'Powder: for one drink, {powder} g of VERY AQUAFABA powder + {water} ml of water, made up before service and chilled.',
      steps: [
        { step: 'Build', reference: '{amaretto} ml amaretto, {lemon_juice} ml lemon, {vanilla_syrup} ml vanilla syrup, {dose} ml VERY AQUAFABA, chilled' },
        { step: 'Dry shake', reference: 'Hard, without ice: the liquid turns pale and thick' },
        { step: 'With ice', reference: '{ice} cubes, shake again until the tin frosts' },
        { step: 'Strain', reference: 'Into the glass your bar uses for sours, and serve straight away' },
      ],
      checks: [
        { see: 'Thin head from the first drink', check: 'Ice went in before the dry shake', fix: 'Dry shake first, ice second' },
        { see: 'Foam rises slowly and stays slack', check: 'Aquafaba left at room temperature', fix: 'Keep the pack in the fridge until the shake' },
        { see: 'No height later in the night', check: 'Aquafaba was added to the batched amaretto and lemon', fix: 'Batch the amaretto, lemon and syrup only' },
        { see: 'Flat by the time it reaches the table', check: 'The drink waited on the pass', fix: 'Shake to order and serve at once' },
      ],
      sections: [
        { id: 'use', title: 'How to use this sheet', html: `<p>Keep it next to the <a href="{guide_href}">amaretto sour guide</a> in the bar book. The recipe comes from the VERY AQUAFABA mixology flyer, which names no glass and no garnish, so the sheet ends at the strain: the glass and any garnish are your bar's own.</p>` },
        { id: 'before', title: 'Before service', html: `<ul>
<li><strong>The batch.</strong> Amaretto, lemon and vanilla syrup in one bottle, the aquafaba kept apart.</li>
<li><strong>The aquafaba.</strong> Chilled, and an opened pack used within {opened_days} days at {opened_temp} °C.</li>
<li><strong>The powder, if you use it.</strong> Made up for the night and kept in the fridge.</li>
</ul>` },
        { id: 'signs', title: 'What a good amaretto sour looks like at each step', html: `<p>After the dry shake the liquid is pale and thick. After the shake with ice the tin frosts. In the glass the head sits firm on top of the amaretto. If the head is thin or slack, the checks point to the step, and the <a href="{calculator_href}">amaretto sour quantity calculator</a> sizes the batch.</p>` },
      ],
      faq: [
        { q: 'Which glass do I strain an amaretto sour into?', a: 'The VERY AQUAFABA flyer names no glass. Use the glass your bar already serves its sours in.' },
        { q: 'Why does my amaretto sour lose its head?', a: 'Usually the ice went in before the dry shake, the aquafaba was warm, or the drink waited on the pass. The checks on this sheet cover all three.' },
        { q: 'Can I use the powder for amaretto sours?', a: 'Yes. Make up {powder} g of powder with {water} ml of water per drink before service and keep it chilled.' },
        { q: 'Can the aquafaba go into the batched amaretto and lemon?', a: 'No. Add it to each tin at the shake, one drink at a time.' },
      ],
    },
    'gin-fizz': {
      title: 'Gin Fizz Process Sheet with Aquafaba - VERY AQUAFABA',
      h1: 'How to build an aquafaba gin fizz: the step-by-step sheet',
      description: 'The aquafaba gin fizz on one page: build, dry shake, shake with ice, strain, top with tonic and garnish, with the checks for a thin head.',
      lead: `A gin fizz has one more step than the other sours, and it's the one that goes wrong: the tonic. This sheet keeps the order of the VERY AQUAFABA recipe on one page, from the dry shake to the top, so every bartender builds the head before the drink is lengthened.`,
      powderNote: 'Powder: for one drink, {powder} g of VERY AQUAFABA powder + {water} ml of water, made up before service and chilled.',
      steps: [
        { step: 'Build', reference: '{gin} ml gin, {lemon_juice} ml lemon, {cane_syrup} ml cane sugar syrup, {dose} ml VERY AQUAFABA, chilled' },
        { step: 'Dry shake', reference: 'Hard, without ice: the foam is built here' },
        { step: 'With ice', reference: '{ice} cubes, shake again to chill' },
        { step: 'Strain', reference: 'Into a highball glass' },
        { step: 'Top', reference: 'Tonic water, poured on top, never shaken' },
        { step: 'Garnish', reference: 'A slice of dried lemon on the head' },
      ],
      checks: [
        { see: 'Thin head before the top', check: 'Ice went in before the dry shake', fix: 'Dry shake first, ice second' },
        { see: 'Slack foam', check: 'Aquafaba at room temperature', fix: 'Keep it chilled until the shake' },
        { see: 'No head on the long drink', check: 'The tonic went into the shaker', fix: 'Strain first, then top with tonic in the glass' },
        { see: 'Head gone by the table', check: 'The drink waited on the pass', fix: 'Shake, top and serve at once' },
      ],
      sections: [
        { id: 'use', title: 'How to use this sheet', html: `<p>Pin it next to the <a href="{guide_href}">gin fizz guide</a>. The six steps follow the VERY AQUAFABA recipe book in order; the only one that differs from a pisco sour is the top, and that's where the checks start when a long drink comes out without its head.</p>` },
        { id: 'before', title: 'Before service', html: `<ul>
<li><strong>Base batched.</strong> Gin, lemon and cane sugar syrup in one bottle; the aquafaba and the tonic stay apart.</li>
<li><strong>Aquafaba cold.</strong> An opened pack is kept at {opened_temp} °C and used within {opened_days} days.</li>
<li><strong>Highballs ready.</strong> The drink goes straight from the strain to the top.</li>
</ul>` },
        { id: 'signs', title: 'What each step should look like', html: `<p>After the dry shake the liquid is pale and thick. After the shake with ice the tin frosts. Strained into the highball, the drink carries its head; the tonic then lengthens it underneath and the dried lemon sits on top. The <a href="{calculator_href}">gin fizz quantity calculator</a> works out the gin, lemon, syrup and aquafaba for the night.</p>` },
      ],
      faq: [
        { q: 'When does the tonic go into a gin fizz?', a: 'After the strain, poured into the highball on top of the drink. It never goes into the shaker.' },
        { q: 'Why is my gin fizz flat?', a: 'Check the order: dry shake first, then ice, then strain, then the tonic. A warm aquafaba or a drink left on the pass also loses the head.' },
        { q: 'Does the powder work for gin fizzes?', a: 'Yes. Make up {powder} g of powder with {water} ml of water per drink before service and keep it chilled.' },
        { q: 'Can I batch gin fizzes?', a: 'Batch the gin, lemon and syrup. The aquafaba goes in at the shake and the tonic in the glass.' },
      ],
    },
  },
};

// Wave 2 (how to make, pre-batching, White Lady, La Rosée, The Sunset) lives in its own module.
export default {
  labels: { ...WAVE1.labels, ...WAVE2.labels, ingredients: { ...WAVE1.labels.ingredients, ...WAVE2.labels.ingredients } },
  guides: { ...WAVE1.guides, ...WAVE2.guides },
  topics: { ...WAVE1.topics, ...WAVE2.topics },
  calculator: { ...WAVE1.calculator, ...WAVE2.calculator },
  process: { ...WAVE1.process, ...WAVE2.process },
};
