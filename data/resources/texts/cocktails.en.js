// Cocktail expansion, English (October 2026, wave 1; wave 2 in cocktails-2.en.js): the guides, quantity calculators and
// process sheets of three cocktails of the VERY AQUAFABA recipe book, and two question pages.
// Built by data/resources/cocktails.js. Every figure is a {token} filled from facts.json
// (facts.cocktail_recipes and facts.shared); no dashes, only the brand VERY AQUAFABA.
// Copy based on the approved expansion artifact (source of truth, 2026-10-05).

import { fixTable, table } from './cocktail-tables.js';
import WAVE2 from './cocktails-2.en.js';

const WAVE1 = {
  labels: {
    dropsUnit: "drops",
    calcTitle: "{name} aquafaba calculator",
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
      title: 'Pisco Sour with Aquafaba: Egg-Free Recipe | VERY AQUAFABA',
      h1: 'How to make a pisco sour with aquafaba',
      crumb: 'Pisco sour',
      card: 'Pisco, lime and a dried lemon slice',
      eyebrow: 'Cocktail guide',
      description: "Make a pisco sour with {dose} ml of VERY AQUAFABA instead of egg white. Recipe, shake order, service tips and pack sizes for professional bars.",
      lead: `Some drinks are remembered for their flavour. A pisco sour is remembered for the moment it lands: that pale, lifted head sitting above the glass before the first sip even happens. Swap the egg white for {dose} ml of VERY AQUAFABA and you keep the look that makes the drink unmistakable, along with the bright lime and the soft, silky body underneath. What matters then is not changing the recipe, but getting the shake right, so this guide walks through the build, the order of the two shakes, and the checks that keep the foam looking the part.`,
      sections: [
        { id: 'tin', title: "What goes in the shaker", html: `<ul>
<li>{pisco} ml pisco</li>
<li>{lime_juice} ml fresh lime juice</li>
<li>{cane_syrup} ml cane sugar syrup</li>
<li>{dose} ml VERY AQUAFABA, chilled</li>
<li>An old fashioned glass, and a slice of dried lemon for the garnish</li>
</ul>
<p>There is no new cocktail to learn here. The only change is the foaming ingredient: use {dose} ml of VERY AQUAFABA and keep the rest of the spec as written.</p>` },
        { id: 'shake', title: "How to shake it", html: `<p>If you already know a sour, this will feel familiar. What matters is doing the two shakes in the right order.</p>
<ol>
<li>Build everything in the shaker: pisco, lime, syrup and the aquafaba straight from the fridge.</li>
<li>Shake hard without ice. This dry shake is where the foam is made. When you open the shaker the liquid should look pale and thick, almost like a milkshake.</li>
<li>Add {ice} ice cubes and shake again until the shaker frosts on the outside. This shake chills the drink and dilutes it.</li>
<li>Strain into the old fashioned glass. The head rises as it settles, so give it a few seconds before you garnish.</li>
<li>Lay the dried lemon slice on the foam.</li>
</ol>` },
        { id: 'tips', title: "Tips for a pisco sour with aquafaba", html: `<p>The dry shake has one job: build the foam before the drink is chilled and diluted. Once that head has formed, the second shake with ice brings the drink to serving temperature. Reverse the order and the head comes out thinner.</p>
<p>You can take most of the measuring out of service by batching the pisco, lime and syrup before doors open. Keep the aquafaba separate in the fridge and add {dose} ml to each shaker when the order comes in. The foam is still made one drink at a time, but the build becomes much quicker, and the <a href="{process_href}">pisco sour process sheet</a> keeps every step on one page for the station.</p>` },
        { id: 'fix', title: "Fixing a thin head on a pisco sour", html: fixTable([
          ['A thin head, or none at all', 'Ice went in before the dry shake', 'Dry shake first, ice second'],
          ['A slow, slack foam', 'The aquafaba was at room temperature', 'Keep the pack in the fridge until the shake'],
          ['The foam drops before the drink reaches the guest', 'The drink waited on the pass', 'Shake to order and serve at once'],
          ['No height by the middle of service', 'The aquafaba went into the pre-batch', 'Batch the pisco, lime and syrup only, and add the aquafaba per drink'],
        ]) },
        { id: 'format', title: "How many pisco sours leave your bar?", html: `<p>A 1 L Tetrapak gives you {drinks_1l} pisco sours. Once opened, it stays at {opened_temp} °C and is used within {opened_days} days. If {drinks_1l} drinks fit comfortably into that rhythm, liquid is the straightforward option: fridge, measure, shaker.</p>
<p>If pisco sours are occasional orders, powder gives you more flexibility. Use {powder} g with {water} ml of water per drink and keep the opened pouch dry and closed between services. The <a href="{calculator_href}">pisco sour quantity calculator</a> scales the full spec when you know how many drinks you are planning.</p>` },
      ],
      faq: [
        { q: 'Does aquafaba change the taste of a pisco sour?', a: "No. It's neutral in taste and smell, so the flavour stays with the pisco and lime. It carries the foam and the silky texture." },
        { q: 'Can I make a pisco sour vegan?', a: 'The foam, yes: VERY AQUAFABA is plant-based and egg-free, so the head brings no egg into the drink. The pisco, the lime and the syrup carry their own labels.' },
        { q: 'How much aquafaba do I use per pisco sour?', a: '{dose} ml of liquid, or {powder} g of powder made up with {water} ml of water.' },
        { q: 'Is aquafaba safer than raw egg white in cocktails?', a: "A sour is never cooked, so the egg white goes into the glass raw. VERY AQUAFABA is plant-based and presents lower health risks than raw egg white, such as listeria or salmonella." },
        { q: 'Do I need to change my pisco sour recipe?', a: 'No. The pisco, the lime and the cane sugar syrup stay as they are, and {dose} ml of aquafaba takes the place of the egg white.' },
        { q: 'Can I pre-batch pisco sours with aquafaba?', a: 'Yes, the base. Pisco, lime and syrup go into one bottle before service, and the aquafaba is added to each shaker at the shake.' },
        { q: 'How long does an opened pack of aquafaba last behind the bar?', a: 'Opened liquid is kept at {opened_temp} °C and used within {opened_days} days. An opened pouch of powder keeps while it stays dry and closed, and sealed packs keep at least {unopened_months} months at room temperature.' },
        { q: 'Where can I buy aquafaba for pisco sours?', a: 'It depends on where your bar is: you can [buy aquafaba for cocktails]({where_to_buy_page_href}) on Amazon in the United States and Germany, on InstantChef in France, and through the enquiry form everywhere else.' },
      ],
    },

    'amaretto-sour': {
      title: 'Amaretto Sour with Aquafaba: Egg-Free Recipe | VERY AQUAFABA',
      h1: 'How to make an amaretto sour with aquafaba',
      crumb: 'Amaretto sour',
      card: 'Amaretto, lemon and vanilla syrup',
      eyebrow: 'Cocktail guide',
      description: 'An amaretto sour with VERY AQUAFABA in place of egg white: {amaretto} ml of amaretto, {dose} ml of aquafaba, two shakes and a white head with no egg.',
      lead: `The amaretto sour always arrives with a bit more generosity than the rest: more liqueur in the shaker, more roundness in the glass, and a white head that stops the drink from slipping too far into sweetness. With {dose} ml of VERY AQUAFABA in place of the egg white, that balance stays intact. You still get the almond-rich base, the lemon cutting through it, and the soft cap on top that makes the whole drink feel finished. Below is the full build, the two-shake method, and what to watch when the foam looks weaker than the drink deserves.`,
      sections: [
        { id: 'tin', title: "What goes in the shaker", html: `<ul>
<li>{amaretto} ml amaretto</li>
<li>{lemon_juice} ml lemon juice</li>
<li>{vanilla_syrup} ml vanilla syrup</li>
<li>{dose} ml VERY AQUAFABA, chilled</li>
</ul>
<p>The {amaretto} ml pour is what sets this spec apart from the other sours here. There's no set glass or garnish, so keep the serve your bar already uses.</p>` },
        { id: 'shake', title: "How to shake it", html: `<ol>
<li>Pour the amaretto, the lemon, the vanilla syrup and the chilled aquafaba into the shaker.</li>
<li>Shake hard without ice: this is where the head is built.</li>
<li>Add {ice} ice cubes and shake again to chill and dilute the drink.</li>
<li>Strain into the glass and send it out straight away.</li>
</ol>
<p>There are only two technique points to keep consistent: use the aquafaba chilled, and keep the ice for the second shake.</p>` },
        { id: 'tips', title: "Tips for balancing an amaretto sour with aquafaba", html: `<p>The amaretto is the number that changes the pace of this drink. At {amaretto} ml per order, a busy service gets through the liqueur much faster than the aquafaba. The vanilla syrup stays at {vanilla_syrup} ml, while VERY AQUAFABA stays at the same {dose} ml dose used across these sour recipes.</p>
<p>Batch the amaretto, lemon and vanilla syrup before doors open. Then each order needs the batched base plus {dose} ml of chilled aquafaba before the dry shake. Keep the aquafaba out of the bottle so the foam is still built fresh in each shaker, and keep the <a href="{process_href}">amaretto sour process sheet</a> in the bar book for the checks.</p>` },
        { id: 'flat', title: "Fixing a flat amaretto sour", html: fixTable([
          ['A thin head from the first drink', 'The ice went in before the dry shake', 'Dry shake first, ice second'],
          ['A foam that rises slowly and stays slack', 'The aquafaba sat out at room temperature', 'Keep the pack in the fridge until the shake'],
          ['Good at the bar, flat at the table', 'The drink waited on the pass', 'Shake to order and serve at once'],
        ]) },
        { id: 'format', title: "How often do you pour amaretto sours?", html: `<p>Start with one question: will you pour {drinks_1l} amaretto sours within {opened_days} days? That is what a 1 L Tetrapak gives you at {dose} ml per drink, and the opened pack stays at {opened_temp} °C during that time.</p>
<p>For a slower-moving menu, powder is easier to hold between services. A 200 g pouch makes {drinks_200g} drinks at {powder} g per drink, made up with {water} ml of water. Use the <a href="{calculator_href}">amaretto sour quantity calculator</a> to turn your expected covers into the full shopping list for the night.</p>` },
      ],
      faq: [
        { q: 'What do I use instead of egg white in an amaretto sour?', a: '{dose} ml of VERY AQUAFABA liquid, or {powder} g of powder made up with {water} ml of water.' },
        { q: 'Does aquafaba taste of chickpeas in an amaretto sour?', a: 'No. VERY AQUAFABA is neutral in taste and smell, so the drink tastes of the amaretto, the lemon and the vanilla.' },
        { q: 'Which glass do I serve an amaretto sour in?', a: 'The glass your bar already serves its sours in. The garnish is your own choice too.' },
        { q: 'Can I batch amaretto sours before service?', a: 'Yes, the amaretto, lemon and vanilla syrup. The aquafaba is added to each shaker at the shake, never to the batch.' },
        { q: 'How many amaretto sours does a 1 L pack make?', a: '{drinks_1l} drinks at {dose} ml each. Once opened, the pack is kept at {opened_temp} °C and used within {opened_days} days.' },
        { q: 'Is an amaretto sour with aquafaba vegan?', a: 'The foam is: VERY AQUAFABA is plant-based and egg-free, so the head brings no egg into the drink.' },
      ],
    },

    'gin-fizz': {
      title: 'Gin Fizz with Aquafaba: Egg-Free Recipe | VERY AQUAFABA',
      h1: 'How to make a gin fizz with aquafaba',
      crumb: 'Gin fizz',
      card: 'Gin and lemon, topped with tonic water',
      eyebrow: 'Cocktail guide',
      description: 'A gin fizz with VERY AQUAFABA instead of egg white: shaken with {dose} ml of aquafaba, strained into a highball and topped with tonic water.',
      lead: `A gin fizz has a bit of theatre to it. It starts life like a sour in the shaker, then stretches upward in the glass, finished with tonic and a white head riding on top. That only works when the order is right. Use {dose} ml of VERY AQUAFABA in place of the egg white, build the foam first, then let the highball become a highball after the strain. This guide shows the full spec, the shake, the top, and the small details that keep the drink lively instead of flat.`,
      sections: [
        { id: 'tin', title: "What goes in the shaker, and what goes in the glass", html: `<ul>
<li>{gin} ml gin</li>
<li>{lemon_juice} ml lemon juice</li>
<li>{cane_syrup} ml cane sugar syrup</li>
<li>{dose} ml VERY AQUAFABA, chilled</li>
<li>Tonic water to top, in a highball glass</li>
<li>A slice of dried lemon for the garnish</li>
</ul>
<p>Keep the tonic beside the glass, not beside the shaker. Everything else is shaken first.</p>` },
        { id: 'build', title: 'How to build it', html: `<ol>
<li>Pour the gin, the lemon, the cane sugar syrup and the aquafaba into the shaker.</li>
<li>Shake hard without ice to build the foam.</li>
<li>Add {ice} ice cubes and shake again to chill the drink.</li>
<li>Strain into the highball glass.</li>
<li>Top with tonic water.</li>
<li>Lay the dried lemon slice on the head.</li>
</ol>` },
        { id: 'tips', title: "Tips for a gin fizz with aquafaba", html: `<p>The head is made before the tonic enters the drink. Dry shake the gin, lemon, syrup and aquafaba, shake again with ice, then strain. The tonic goes into the highball afterwards so the long part of the drink is built in the glass, not in the shaker.</p>
<p>Batch the gin, lemon and syrup, and you reduce each order to a few clear moves. Pour the base, add {dose} ml of chilled aquafaba, shake twice, strain, then top with tonic. Keeping both the aquafaba and tonic out of the batch protects the two things this drink needs at the end: its head and its fizz. The <a href="{process_href}">gin fizz process sheet</a> keeps that order on one page.</p>` },
        { id: 'thin', title: "Fixing a thin head on a gin fizz", html: fixTable([
          ['Thin head before the tonic goes in', 'Ice went in before the dry shake', 'Dry shake first, ice second'],
          ['A slack foam that rises slowly', 'The aquafaba was at room temperature', 'Keep it in the fridge until the shake'],
          ['The head has gone by the time the drink reaches the table', 'The drink waited on the pass', 'Shake, top and serve at once'],
        ]) },
        { id: 'format', title: "How fast do gin fizzes move?", html: `<p>A 1 L Tetrapak makes {drinks_1l} gin fizzes and a 10 L bag-in-box makes {drinks_10l}. Once opened, liquid stays at {opened_temp} °C and is used within {opened_days} days, so the right pack is the one your service can actually move through.</p>
<p>If gin fizz orders are less predictable, use {powder} g of powder with {water} ml of water per drink. Make up what you need before service, chill it, and keep the rest of the pouch dry and closed. The <a href="{calculator_href}">gin fizz quantity calculator</a> works out the night.</p>` },
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
      title: 'Where to Buy Aquafaba for Cocktails | VERY AQUAFABA',
      h1: 'Where to buy aquafaba for cocktails',
      crumb: 'Where to buy',
      eyebrow: 'Cocktails',
      description: 'Where to buy VERY AQUAFABA for your bar: Amazon in the United States and Germany, InstantChef in France, and the enquiry form everywhere else.',
      lead: `Once aquafaba earns a place behind the bar, the practical questions start. Can you get it locally? Do you want liquid ready to pour, or powder that can sit on the shelf between quieter weeks? VERY AQUAFABA is sold through different channels by country, and the right format mostly comes down to how quickly you will use an opened pack.`,
      sections: [
        { id: 'countries', title: "Where to buy aquafaba in your country", html: `${table(['Where you are', 'Where to buy'], [
          ['<a href="{united_states_en_href}">United States</a>', 'Amazon, including the cocktail listing'],
          ['<a href="{germany_en_href}">Germany</a>', 'Amazon'],
          ['<a href="{france_en_href}">France</a>', 'InstantChef'],
          ['<a href="{united_kingdom_en_href}">United Kingdom</a>, <a href="{belgium_en_href}">Belgium</a>, <a href="{netherlands_en_href}">the Netherlands</a> and everywhere else', 'The enquiry form on this page'],
        ])}
<p>The route is different by market, so start with your country rather than with a pack size.</p>` },
        { id: 'choose', title: "How quickly will you use an opened pack?", html: `<p>The purchase decision gets easier once you know <a href="{cocktails_href}">how quickly you will use an opened pack</a>. Liquid pours straight from the fridge and, once opened, stays at {opened_temp} °C for {opened_days} days. Powder can wait dry and closed between services, which makes it useful when sour orders are less frequent.</p>` },
        { id: 'packs', title: "Turn your sour count into a pack size", html: `${table(['Pack', 'Drinks at {dose} ml each'], [
          ['1 L Tetrapak', '{drinks_1l}'],
          ['10 L bag-in-box', '{drinks_10l}'],
          ['30 g pouch', '{drinks_30g}'],
          ['200 g pouch', '{drinks_200g}'],
          ['3 kg pouch', '{drinks_3kg}'],
        ])}
<p>These counts use the {dose} ml dose of the <a href="{pisco_sour_href}">pisco sour</a>, the <a href="{amaretto_sour_href}">amaretto sour</a>, the <a href="{gin_fizz_href}">gin fizz</a> and the other cocktail recipes. If you work with powder, each drink uses {powder} g of powder made up with {water} ml of water.</p>` },
        { id: 'groups', title: "Ordering for several venues", html: `<p>If you are ordering for several venues or a volume beyond a single pack, use the professional enquiry form with the number of sites and the formats you are considering. That gives us enough context to answer the order and send the technical sheet with it. Before you order, you can <a href="{bars_href}">set up the aquafaba station for your bar</a>.</p>` },
      ],
      faq: [
        { q: 'Where can I buy aquafaba for cocktails in the United States?', a: 'On Amazon, including a listing for cocktails: [buy VERY AQUAFABA in the United States]({united_states_en_href}).' },
        { q: 'Can I buy VERY AQUAFABA in the United Kingdom?', a: 'Through the enquiry form on this page: leave your details and the formats you need, and we come back to you about the order.' },
        { q: 'Where do I buy it in France?', a: 'On InstantChef, in liquid and in powder: [buy VERY AQUAFABA in France]({france_en_href}).' },
        { q: 'Which pack should a bar buy?', a: 'Count your sours. If an opened pack is used within {opened_days} days, the liquid is the easy choice; if not, the powder keeps once the pouch is open.' },
        { q: 'How many cocktails does a 1 L pack make?', a: '{drinks_1l} drinks at {dose} ml each, the dose every VERY AQUAFABA cocktail uses.' },
        { q: 'Can I get the technical sheet before I order?', a: 'Yes. Ask for it through the professional enquiry form on this page or the [contact form]({contact_href}).' },
      ],
    },

    powder: {
      title: 'Can I Use Aquafaba Powder in Cocktails? | VERY AQUAFABA',
      h1: 'Can I use aquafaba powder in cocktails?',
      crumb: 'Aquafaba powder in cocktails',
      eyebrow: 'Cocktails',
      description: 'Yes: {powder} g of VERY AQUAFABA powder made up with {water} ml of water per drink, chilled, then shaken like the liquid. When bars choose it.',
      lead: `Powder makes most sense when your sour orders come in waves rather than every night. You make up what the service needs, chill it, and the rest of the pouch stays dry and closed until the next time. For one drink, use {powder} g of VERY AQUAFABA powder with {water} ml of water. Once it is made up, it goes into the same shaker and follows the same two-shake method as the liquid.`,
      sections: [
        { id: 'why', title: "Powder makes sense when sours are occasional", html: `<p>An opened pouch keeps while it stays dry and closed. That lets you make up only the amount required for the current service and leave the rest untouched for the next one.</p>
${table(['Drinks tonight', 'Powder', 'Water'], [
  ['10', '{p10} g', '{w10} ml'],
  ['{ex_batches}', '{ex_powder} g', '{ex_water} ml'],
])}
<p>For one drink, that's {powder} g of powder in {water} ml of water, chilled before it goes in the shaker. These doses come from the powder rule: {white_powder} g of powder and {white_water} ml of water make {white_total} g of aquafaba, the same as the liquid.</p>` },
        { id: 'make', title: "Make up only what tonight needs", html: `<p>Weigh the powder for the number of drinks you expect, add the corresponding water and chill the made-up aquafaba before service. Keep it in the fridge until it goes into the shaker. The same <a href="{reconstitution_href}">powder-to-water rule</a> scales from a single drink to a full service.</p>` },
        { id: 'pouch', title: "Which pouch to keep on the back shelf", html: `<p>At {dose} ml per drink, a 30 g pouch makes {drinks_30g} cocktails, a 200 g pouch makes {drinks_200g} and a 3 kg pouch makes {drinks_3kg}. Sealed pouches keep at least {unopened_months} months at room temperature, so you can size the order around actual cocktail volume rather than around the next few days of service.</p>
<p>If you want to test the method on a familiar spec, start with the <a href="{pisco_sour_href}">pisco sour</a>, <a href="{amaretto_sour_href}">amaretto sour</a> or <a href="{gin_fizz_href}">gin fizz</a>, then <a href="{where_to_buy_page_href}">choose the powder format available in your country</a>.</p>` },
        { id: 'mistakes', title: "Three mistakes that flatten the head", html: `<ul>
<li><strong>Ice in the shaker from the start.</strong> The head comes out thin. Shake dry first, then with ice.</li>
<li><strong>Made-up aquafaba left on the bar.</strong> Warm aquafaba gives a slow, slack foam. Keep it chilled until the shake.</li>
<li><strong>Aquafaba in the pre-batch.</strong> The height is gone by the middle of service. Batch the spirit, citrus and syrup, and add the aquafaba per drink.</li>
</ul>` },
      ],
      faq: [
        { q: 'How much aquafaba powder do I use per cocktail?', a: '{powder} g of VERY AQUAFABA powder made up with {water} ml of water, for a drink that takes {dose} ml of liquid.' },
        { q: 'Does aquafaba powder foam like the liquid?', a: 'Yes. Once it is made up and chilled, it goes into the shaker and through the two shakes the same way as the liquid.' },
        { q: 'How long does an opened pouch keep?', a: 'An opened pouch of powder does not spoil while it stays dry and closed. Sealed, it keeps at least {unopened_months} months at room temperature.' },
        { q: 'Can I make up the powder before service?', a: 'Yes. Make up what the night needs before service and keep it in the fridge until the shake.' },
        { q: 'Which pouch should a bar buy?', a: 'A 30 g pouch makes {drinks_30g} drinks, a 200 g pouch {drinks_200g} and a 3 kg pouch {drinks_3kg}, at {dose} ml a drink.' },
        { q: 'Where can I buy aquafaba powder for cocktails?', a: 'It depends on your country: [order aquafaba powder for your bar]({where_to_buy_page_href}) from Amazon, InstantChef or our enquiry form.' },
      ],
    },
  },

  calculator: {
    'pisco-sour': {
      title: 'Pisco Sour Aquafaba Calculator | VERY AQUAFABA',
      h1: 'How much aquafaba per pisco sour? Quantity calculator',
      description: 'Work out the VERY AQUAFABA, pisco, lime and syrup for any number of pisco sours, in liquid or in powder with its water.',
      lead: `Tell the calculator how many pisco sours you're planning and it works out the pisco, lime juice, syrup and VERY AQUAFABA you need, in liquid or powder. For {ex_batches} pisco sours, that's {ex_pisco} ml of pisco, {ex_lime_juice} ml of fresh lime juice and {ex_dose} ml of aquafaba.`,
      sections: [
        { id: 'scaling', title: "What scales, and what stays one drink at a time", html: `<p>Double the drinks and you double the pisco, lime, syrup and aquafaba. What you cannot batch away is the foam: each drink still needs its own dry shake, followed by {ice} ice cubes for the second shake. Plan the ingredients in bulk, but keep the final build per drink.</p>` },
        { id: 'packs', title: "How many pisco sours from a pack", html: `<ul>
<li><strong>1 L Tetrapak:</strong> {drinks_1l} pisco sours.</li>
<li><strong>10 L bag-in-box:</strong> {drinks_10l} pisco sours.</li>
<li><strong>200 g pouch:</strong> {drinks_200g} pisco sours.</li>
<li><strong>3 kg pouch:</strong> {drinks_3kg} pisco sours.</li>
</ul>
<p>An opened liquid pack is kept at {opened_temp} °C and used within {opened_days} days, so size the pack to what you pour in that time. An opened pouch keeps while it stays dry and closed.</p>` },
        { id: 'example', title: "{ex_batches} pisco sours: what needs to be ready", html: `<p>For {ex_batches} pisco sours, prepare {ex_pisco} ml of pisco, {ex_lime_juice} ml of lime juice, {ex_cane_syrup} ml of cane sugar syrup and {ex_dose} ml of VERY AQUAFABA. You will also need {ex_ice} ice cubes for the second shakes. A 1 L Tetrapak covers the aquafaba and leaves {ex_left_1l} ml to use within the remaining {opened_days} days of the opened pack.</p>
<p>Using powder instead? Make up {ex_powder} g with {ex_water} ml of water before service and keep it chilled. The quantities can be prepared in advance, but every drink still gets the same <a href="{guide_href}">two-shake service</a>, and the <a href="{process_href}">pisco sour process sheet</a> gives the station the checks.</p>` },
      ],
      faq: [
        { q: 'How much aquafaba do I need for one pisco sour?', a: '{dose} ml of VERY AQUAFABA liquid, or {powder} g of powder with {water} ml of water.' },
        { q: 'How much pisco and lime for {ex_batches} drinks?', a: '{ex_pisco} ml of pisco and {ex_lime_juice} ml of lime juice, with {ex_cane_syrup} ml of cane sugar syrup and {ex_dose} ml of aquafaba.' },
        { q: 'Does the calculator count the ice?', a: 'No, only the liquids. Allow {ice} ice cubes for each drink, for the second shake.' },
        { q: 'Should I make up all the powder at once?', a: 'Make up what the service needs before doors open and keep it chilled. An opened pouch keeps dry and closed for the next service.' },
      ],
    },
    'amaretto-sour': {
      title: 'Amaretto Sour Aquafaba Calculator | VERY AQUAFABA',
      h1: 'How much aquafaba per amaretto sour? Quantity calculator',
      description: 'Scale an amaretto sour with VERY AQUAFABA: the aquafaba, amaretto, lemon and vanilla syrup for any number of drinks, liquid or powder.',
      lead: `Enter the number of amaretto sours you plan to serve and the calculator works out the amaretto, lemon juice, vanilla syrup and VERY AQUAFABA, in liquid or powder. Check the amaretto first: at {amaretto} ml a drink, {ex_batches} amaretto sours take {ex_amaretto} ml.`,
      sections: [
        { id: 'scaling', title: "Check the amaretto bottle first", html: `<p>At {amaretto} ml per drink, amaretto is the number that grows fastest. The lemon, vanilla syrup and aquafaba scale with it, but the service stays individual: dry shake each drink, then add {ice} ice cubes and shake again.</p>` },
        { id: 'packs', title: "How many amaretto sours from a pack", html: `<ul>
<li><strong>1 L Tetrapak:</strong> {drinks_1l} drinks, used within {opened_days} days once opened.</li>
<li><strong>10 L bag-in-box:</strong> {drinks_10l} drinks, for high-volume venues or several bars sharing a pack.</li>
<li><strong>200 g pouch:</strong> {drinks_200g} drinks, with no clock once it's open.</li>
<li><strong>3 kg pouch:</strong> {drinks_3kg} drinks.</li>
</ul>
<p>On a quiet week, make up only what the night needs: {p10} g of powder in {w10} ml of water covers ten amaretto sours, and the rest of the pouch stays dry and closed for the next service.</p>` },
        { id: 'example', title: "{ex_batches} amaretto sours: the service list", html: `<p>For {ex_batches} drinks, set aside {ex_amaretto} ml of amaretto, {ex_lemon_juice} ml of lemon juice, {ex_vanilla_syrup} ml of vanilla syrup and {ex_dose} ml of VERY AQUAFABA. With powder, that becomes {ex_powder} g made up with {ex_water} ml of water.</p>
<p>Batch the amaretto, lemon and syrup before the event. Keep the aquafaba chilled and separate so each order still <a href="{guide_href}">builds its foam in the shaker</a>, and the <a href="{process_href}">amaretto sour process sheet</a> shows what each step should look like.</p>` },
      ],
      faq: [
        { q: 'How much amaretto for {ex_batches} amaretto sours?', a: '{ex_amaretto} ml of amaretto, with {ex_lemon_juice} ml of lemon juice, {ex_vanilla_syrup} ml of vanilla syrup and {ex_dose} ml of aquafaba.' },
        { q: 'How much aquafaba powder per amaretto sour?', a: '{powder} g of powder made up with {water} ml of water, for one drink.' },
        { q: 'Does the vanilla syrup scale with the drinks?', a: 'Yes, {vanilla_syrup} ml per drink, in a straight line like the other ingredients.' },
        { q: 'Which pack suits an amaretto sour that sells a few times a week?', a: 'The powder: a 200 g pouch makes {drinks_200g} drinks and keeps once opened while it stays dry and closed.' },
      ],
    },
    'gin-fizz': {
      title: 'Gin Fizz Aquafaba Calculator | VERY AQUAFABA',
      h1: 'How much aquafaba per gin fizz? Quantity calculator',
      description: 'Work out the VERY AQUAFABA, gin, lemon and cane sugar syrup for any number of gin fizzes, in liquid or in powder with its water.',
      lead: `Type in the number of gin fizzes and the calculator works out everything that goes into the shaker: gin, lemon juice, cane sugar syrup and VERY AQUAFABA, in liquid or powder. The tonic isn't included, because the amount depends on your glass.`,
      sections: [
        { id: 'tonic', title: "What the calculator leaves out", html: `<p>The table stops before the final top. Tonic is added in the highball after the strain, so the amount follows your glass rather than a fixed recipe measure. Ice is also outside the calculator: allow {ice} cubes per drink for the second shake.</p>` },
        { id: 'packs', title: "How many gin fizzes from a pack", html: `<ul>
<li><strong>1 L Tetrapak:</strong> {drinks_1l} gin fizzes.</li>
<li><strong>10 L bag-in-box:</strong> {drinks_10l} gin fizzes, for high-volume venues or several bars sharing a pack.</li>
<li><strong>200 g pouch:</strong> {drinks_200g} gin fizzes.</li>
<li><strong>3 kg pouch:</strong> {drinks_3kg} gin fizzes.</li>
</ul>
<p>Once open, a liquid pack is kept at {opened_temp} °C and used within {opened_days} days; a pouch keeps while it stays dry and closed.</p>` },
        { id: 'example', title: "{ex_batches} gin fizzes: what goes behind the bar", html: `<p>For {ex_batches} gin fizzes, prepare {ex_gin} ml of gin, {ex_lemon_juice} ml of lemon juice, {ex_cane_syrup} ml of cane sugar syrup and {ex_dose} ml of VERY AQUAFABA. If you use powder, make up {ex_powder} g with {ex_water} ml of water before service.</p>
<p>Tonic stays outside the batch and outside the calculator, because the <a href="{guide_href}">gin fizz is topped in the glass</a>. Shake each drink, strain it into the highball, then top it to your house serve, in the order the <a href="{process_href}">gin fizz process sheet</a> sets out.</p>` },
      ],
      faq: [
        { q: 'How much aquafaba do I need for one gin fizz?', a: '{dose} ml of VERY AQUAFABA liquid, or {powder} g of powder with {water} ml of water.' },
        { q: 'Why is the tonic water not in the calculator?', a: 'It goes on top of each drink after the strain, so the amount depends on the glass. Everything that goes into the shaker is in the table.' },
        { q: 'How much gin for {ex_batches} gin fizzes?', a: '{ex_gin} ml of gin, with {ex_lemon_juice} ml of lemon juice, {ex_cane_syrup} ml of cane sugar syrup and {ex_dose} ml of aquafaba.' },
        { q: 'Which pack suits a bar that sells gin fizzes every night?', a: "A 1 L Tetrapak: it makes {drinks_1l} drinks and is used within {opened_days} days once opened. The 10 L bag-in-box ({drinks_10l} drinks) suits high-volume venues or several bars sharing a pack." },
      ],
    },
  },

  process: {
    'pisco-sour': {
      title: 'Pisco Sour Process Sheet with Aquafaba | VERY AQUAFABA',
      h1: 'How to shake an aquafaba pisco sour: the step-by-step sheet',
      description: 'The aquafaba pisco sour on one page: build, dry shake, shake with ice, strain and garnish, with what to check at each step and the fixes.',
      lead: `A good pisco sour has a very particular rhythm: build, dry shake, ice, shake again, strain. When that rhythm slips, you see it straight away in the head. This sheet sets out the five steps to work from, along with the signs to look for when the foam starts coming out thinner than it should.`,
      powderNote: 'Powder: for one drink, {powder} g of VERY AQUAFABA powder + {water} ml of water, made up before service and chilled.',
      steps: [
        { step: 'Build', reference: '{pisco} ml pisco, {lime_juice} ml lime, {cane_syrup} ml syrup, {dose} ml VERY AQUAFABA, chilled' },
        { step: 'Dry shake', reference: 'Hard, without ice: the liquid turns pale and thick' },
        { step: 'With ice', reference: '{ice} cubes, shake again: the shaker frosts on the outside' },
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
        { id: 'use', title: "When a pisco sour comes out flat", html: `<p>Keep the sheet with the bar specs, next to the <a href="{guide_href}">pisco sour method</a>. When a head comes out thin or drops early, compare the drink with the five steps in order. Start with two simple checks: was the aquafaba chilled, and did the ice only go in after the dry shake?</p>` },
        { id: 'before', title: "Set the station before the first order", html: `<ul>
<li><strong>Aquafaba cold.</strong> The pack lives in the fridge, and an opened one is used within {opened_days} days at {opened_temp} °C.</li>
<li><strong>Powder made up.</strong> If you work with the powder, make up what the night needs and chill it.</li>
<li><strong>The opening date on the pack.</strong> Write it on the carton the moment it's opened.</li>
<li><strong>The base batched.</strong> Pisco, lime and syrup in one bottle; the aquafaba stays apart.</li>
</ul>` },
        { id: 'signs', title: "Read the drink as you go", html: `<p>After the dry shake the liquid looks pale and thick, almost like a milkshake. After the shake with ice the shaker is frosted on the outside. In the glass the head rises as it settles and sits firm enough to hold the dried lemon slice. If one of these signs is missing, the checks table above shows which step to fix. To plan a full night, the <a href="{calculator_href}">pisco sour quantity calculator</a> gives every quantity for the number of drinks you expect.</p>` },
      ],
      faq: [
        { q: 'Why do I shake without ice first?', a: 'The dry shake builds the foam. Ice in the shaker from the start chills and dilutes the drink before the foam forms, and the head comes out thin.' },
        { q: 'How long does an opened pack last behind the bar?', a: 'Opened liquid is kept at {opened_temp} °C and used within {opened_days} days. Write the opening date on the carton.' },
        { q: 'Does the powder follow the same sheet?', a: 'Yes. Make up {powder} g of powder with {water} ml of water per drink before service, chill it, and follow the same five steps.' },
        { q: 'Can I add the aquafaba to my pre-batch?', a: 'No. Batch the pisco, lime and syrup, and add the aquafaba to each shaker at the shake, one drink at a time.' },
      ],
    },
    'amaretto-sour': {
      title: 'Amaretto Sour Process Sheet with Aquafaba | VERY AQUAFABA',
      h1: 'How to shake an aquafaba amaretto sour: the step-by-step sheet',
      description: 'The aquafaba amaretto sour on one page: build, dry shake, shake with ice and strain, with what to check at each step when the head falls flat.',
      lead: `An amaretto sour does not hide a weak head particularly well. Against that rich, amber body, a soft or thinning foam looks obvious the moment the drink is strained. This sheet keeps the build consistent from one drink to the next and gives you a quick way to trace the problem when the drink is not leaving the station as it should.`,
      powderNote: 'Powder: for one drink, {powder} g of VERY AQUAFABA powder + {water} ml of water, made up before service and chilled.',
      steps: [
        { step: 'Build', reference: '{amaretto} ml amaretto, {lemon_juice} ml lemon, {vanilla_syrup} ml vanilla syrup, {dose} ml VERY AQUAFABA, chilled' },
        { step: 'Dry shake', reference: 'Hard, without ice: the liquid turns pale and thick' },
        { step: 'With ice', reference: '{ice} cubes, shake again until the shaker frosts' },
        { step: 'Strain', reference: 'Into the glass your bar uses for sours, and serve straight away' },
      ],
      checks: [
        { see: 'Thin head from the first drink', check: 'Ice went in before the dry shake', fix: 'Dry shake first, ice second' },
        { see: 'Foam rises slowly and stays slack', check: 'Aquafaba left at room temperature', fix: 'Keep the pack in the fridge until the shake' },
        { see: 'No height later in the night', check: 'Aquafaba was added to the batched amaretto and lemon', fix: 'Batch the amaretto, lemon and syrup only' },
        { see: 'Flat by the time it reaches the table', check: 'The drink waited on the pass', fix: 'Shake to order and serve at once' },
      ],
      sections: [
        { id: 'use', title: "Adding your own glass and garnish", html: `<p>Keep it with your bar specs, next to the <a href="{guide_href}">amaretto sour method</a>, and add your own glass and garnish to the printed copy. The sheet stops at the strain, so the final serve stays with your house spec.</p>` },
        { id: 'before', title: "Set the station before the first order", html: `<ul>
<li><strong>The batch.</strong> Amaretto, lemon and vanilla syrup in one bottle, the aquafaba kept apart.</li>
<li><strong>The aquafaba.</strong> Chilled, and an opened pack used within {opened_days} days at {opened_temp} °C.</li>
<li><strong>The powder, if you use it.</strong> Made up for the night and kept in the fridge.</li>
</ul>` },
        { id: 'signs', title: "What you should see before you send it", html: `<p>After the dry shake the liquid is pale and thick. After the shake with ice the shaker frosts. In the glass the head sits firm on top of the amaretto. If the head is thin or slack, the checks table above shows which step to fix. To plan a full night, use the <a href="{calculator_href}">amaretto sour quantity calculator</a>.</p>` },
      ],
      faq: [
        { q: 'Which glass do I strain an amaretto sour into?', a: 'The glass your bar already serves its sours in. The sheet leaves the glass and the garnish to you.' },
        { q: 'Why does my amaretto sour lose its head?', a: 'Usually the ice went in before the dry shake, the aquafaba was warm, or the drink waited on the pass. The checks on this sheet cover all three.' },
        { q: 'Can I use the powder for amaretto sours?', a: 'Yes. Make up {powder} g of powder with {water} ml of water per drink before service and keep it chilled.' },
        { q: 'Can the aquafaba go into the batched amaretto and lemon?', a: 'No. Add it to each shaker at the shake, one drink at a time.' },
      ],
    },
    'gin-fizz': {
      title: 'Gin Fizz Process Sheet with Aquafaba | VERY AQUAFABA',
      h1: 'How to build an aquafaba gin fizz: the step-by-step sheet',
      description: 'The aquafaba gin fizz on one page: build, dry shake, shake with ice, strain, top with tonic and garnish, with the checks for a thin head.',
      lead: `The gin fizz is simple until the last few seconds. You can build a good head in the shaker and still lose it if the tonic goes in at the wrong moment. This sheet keeps the six steps in the right order, from the dry shake to the top, with the checks to run when the drink reaches the highball without the lift you expected.`,
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
        { id: 'use', title: "When a gin fizz loses its head", html: `<p>Keep it where the highballs are built, with the <a href="{guide_href}">gin fizz method</a> in the bar book. If the drink reaches the glass without a proper head, check the shake order first. If the head disappears after that, check that the tonic went into the glass and not into the shaker.</p>` },
        { id: 'before', title: "Set the station before the first order", html: `<ul>
<li><strong>Base batched.</strong> Gin, lemon and cane sugar syrup in one bottle; the aquafaba and the tonic stay apart.</li>
<li><strong>Aquafaba cold.</strong> An opened pack is kept at {opened_temp} °C and used within {opened_days} days.</li>
<li><strong>Highballs ready.</strong> The drink goes straight from the strain to the top.</li>
</ul>` },
        { id: 'signs', title: "What the glass should tell you", html: `<p>After the dry shake the liquid is pale and thick. After the shake with ice the shaker frosts. Strained into the highball, the drink carries its head; the tonic then lengthens it underneath and the dried lemon sits on top. The <a href="{calculator_href}">gin fizz quantity calculator</a> works out the gin, lemon, syrup and aquafaba for the night.</p>` },
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
