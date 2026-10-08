// Foam pages, English (October 2026): the cocktail foamer hub and its three sets, under the
// cocktails guide. Built by data/resources/cocktails.js (buildFoam). Pages 1 to 5 follow
// foam-sample-articles-en.md; every figure is a {token} from facts.json (cocktail dose and packs,
// facts.foamers for the competitor labels, alcohol, the Imbibe test and the 14 EU allergens).
// Label tables ({labels_*}) are built from facts.foamers with their sources. No dashes; the
// competitors are named only with their published labels (Directive 2006/114/EC, article 4).

export default {
  labels: {
    eyebrow: 'Cocktail foamer',
    hubLink: 'Aquafaba cocktail foamer for sours',
  },

  pages: {
    'cocktail-foamer': {
      title: 'Aquafaba Cocktail Foamer for Sours | VERY AQUAFABA',
      h1: 'An aquafaba cocktail foamer for sours',
      crumb: 'Cocktail foamer',
      description: 'VERY AQUAFABA is an aquafaba cocktail foamer made from water and chickpeas: {dose} ml a drink, dry shake first, then shake with ice.',
      lead: `Ask a bartender why egg white still has a place in a sour and the answer is usually sitting on top of the drink: a thick white head with enough structure to carry the garnish. VERY AQUAFABA gives you an aquafaba alternative at {dose} ml per drink, using the same dry shake followed by a shake with ice. If you already know how to make a sour, the technique is familiar. The real questions are what goes into the foamer, how it fits your existing spec and which format makes sense for the number of drinks you pour.`,
      sections: [
        { id: 'swap', title: 'Swap the egg white, keep the method', html: `<p>Nothing else in the build needs to move. Your spirit, citrus, syrup, glass and garnish stay where they are. Add <b>{dose} ml of VERY AQUAFABA</b> in place of the egg white, dry shake first, then add the ice and shake again.</p>
<p>If you already make egg white sours, the <a href="{how_to_make_page_href}">method for every sour</a> will feel familiar from the first order.</p>` },
        { id: 'sour', title: 'What aquafaba can do in a sour', html: `<p>Aquafaba is already used as an egg white alternative because of the foam it brings to a shaken drink.</p>
<p>In {imbibe_date}, <a href="{imbibe_url}">Imbibe tested six vegan cocktail foamers</a> and described the aquafaba-based product in its test as giving “{imbibe_quote}”, with dense, creamy foam and added body. That test was of another product, not VERY AQUAFABA, but it shows why aquafaba itself has become useful behind the bar.</p>
<p>VERY AQUAFABA is made from aquafaba, with water and chickpeas on the label. The light roasted note it has in the pack, from the cooking of the chickpeas, disappears once it is shaken into a drink.</p>` },
        { id: 'label', title: 'A foamer without additives', html: `<p>Turn the pack around and the ingredient list is short: <b>water and chickpeas</b>, with no additives and no preservatives.</p>
<p>Other cocktail foamers use different approaches, including emulsifiers, gums, cellulose, preservatives or plant extracts. If ingredients matter to your bar, you can <a href="{foamer_ingredients_href}">compare cocktail foamer labels side by side</a> and check each product against its own published label.</p>` },
        { id: 'can', title: 'Why not just open a can?', html: `<p>The liquid in a can of chickpeas is aquafaba too, but it was not packed for the bar.</p>
<p>Different canned products can give you different liquids to work with, and you still have to open, drain and deal with the chickpeas. VERY AQUAFABA gives you a defined product and a working dose of <b>{dose} ml per drink</b>, ready to pour from the fridge.</p>
<p>For service, that means one spec everyone behind the bar can follow instead of adjusting around whichever can happens to be open.</p>` },
        { id: 'packs', title: 'Sours every night, or a few a week?', html: `<p>A <b>1 L Tetrapak makes {drinks_1l} drinks</b> at {dose} ml each. Once opened, it is kept at <b>{opened_temp} °C</b> and used within <b>{opened_days} days</b>.</p>
<p>If sours only leave the bar occasionally, powder gives you more flexibility. A <b>200 g pouch makes {drinks_200g} drinks</b>, using <b>{powder} g of powder with {water} ml of water per drink</b>, and the opened pouch, kept dry and closed, keeps until its best-before date.</p>
<p>For bars pouring at much higher volumes, VERY AQUAFABA is also available as a <a href="{bulk_foamer_href}">10 L bag-in-box and a 3 kg powder pouch</a>.</p>` },
      ],
      faq: [
        { q: 'What is a cocktail foamer?', a: 'It is the ingredient that creates the white foam head on a shaken sour. Egg white is the traditional option. VERY AQUAFABA uses aquafaba instead, at {dose} ml per drink.' },
        { q: 'Does aquafaba foam like egg white?', a: 'Aquafaba is used as an egg white alternative in foamed drinks. In an {imbibe_date} Imbibe test of six vegan foamers, an aquafaba-based product was described as giving “{imbibe_quote}”. That test was not carried out on VERY AQUAFABA.' },
        { q: 'How much foamer do I use per cocktail?', a: 'Use {dose} ml of VERY AQUAFABA liquid per drink, or {powder} g of powder made up with {water} ml of water.' },
        { q: 'Is there alcohol in VERY AQUAFABA?', a: 'No. VERY AQUAFABA contains water and chickpeas, so the product itself adds no alcohol to the drink.' },
        { q: 'Does it taste of chickpeas?', a: 'In the pack, VERY AQUAFABA has a light roasted note from the cooking of the chickpeas. Once shaken into a drink, it disappears: the foam carries no taste of its own, and the flavour stays with the spirit, citrus, syrup and other ingredients in your drink.' },
        { q: 'Where can I buy VERY AQUAFABA for my bar?', a: 'You can [buy aquafaba for cocktails]({where_to_buy_page_href}) on Amazon in the United States and Germany, on InstantChef in France, and through the enquiry form elsewhere.' },
      ],
    },

    'foamer-ingredients': {
      title: "What's in Your Cocktail Foamer? | VERY AQUAFABA",
      h1: "What's in your cocktail foamer?",
      crumb: 'Foamer ingredients',
      description: 'Compare cocktail foamer ingredients side by side. VERY AQUAFABA lists water and chickpeas, with no additives or preservatives.',
      lead: `Turn the bottle around. VERY AQUAFABA lists just water and chickpeas, with no additives and no preservatives. Other cocktail foamers take different routes to the same job. Some use gums, emulsifiers, starches or plant extracts, and some contain alcohol. The table below puts the labels next to one another so you can see what each product actually declares.`,
      sections: [
        { id: 'labels', title: 'The labels, side by side', html: `{labels_all}
<p><b>Labels checked: {labels_checked}.</b></p>
<p>Product formulations can change, so each source should be checked again before this comparison is updated.</p>` },
        { id: 'look', title: 'What should you look for on a foamer label?', html: `<p><b>What creates the foam.</b> In VERY AQUAFABA, the foaming ingredient comes from the chickpea itself. In several of the foamers above, the label instead lists ingredients such as methylcellulose, polysorbate 80, saponin extract or modified starch.</p>
<p><b>Whether the product contains alcohol.</b> Ms. Better's lists {msb_abv}% alcohol and Dr Yanni's {yanni_abv}%. VERY AQUAFABA contains no alcohol, so the product itself does not add alcohol to the drink.</p>
<p><b>Which allergens are declared.</b> VEGG White declares soy. Chickpea is not one of the {eu_allergens} allergens <a href="{eu_rules_href}">EU food information rules</a> require to be declared, but anyone with a known chickpea or legume allergy should still avoid it.</p>` },
        { id: 'try', title: 'Try it in a sour you already make', html: `<p>You do not need a new cocktail spec to try VERY AQUAFABA.</p>
<p>Use <b>{dose} ml per drink</b>, dry shake, then shake with ice. A <b>1 L Tetrapak makes {drinks_1l} drinks</b> and is used within <b>{opened_days} days at {opened_temp} °C</b> once opened. If you only pour sours occasionally, a <b>200 g pouch makes {drinks_200g} drinks</b> and, once opened, keeps dry and closed until the best-before date on the pouch.</p>
<p>Start with something already on your list, such as a <a href="{pisco_sour_href}">pisco sour</a>, and compare the result in a drink you already know.</p>` },
      ],
      faq: [
        { q: 'Which cocktail foamer has no additives?', a: 'VERY AQUAFABA lists water and chickpeas only, with no additives and no preservatives.' },
        { q: 'Does VERY AQUAFABA contain preservatives?', a: 'No. The label lists water and chickpeas. Sealed packs keep at least {unopened_months} months at room temperature. Once opened, liquid is kept at {opened_temp} °C and used within {opened_days} days.' },
        { q: 'Is VERY AQUAFABA vegan?', a: 'VERY AQUAFABA itself is plant-based. The other ingredients in a finished cocktail have their own labels and should be checked separately.' },
        { q: 'Which foamers contain alcohol?', a: "In the comparison above, Ms. Better's lists {msb_abv}% alcohol and Dr Yanni's {yanni_abv}%. VERY AQUAFABA contains no alcohol." },
      ],
    },

    'aquafaba-vs-chickpea-water': {
      title: 'Is Aquafaba Just Chickpea Water? | VERY AQUAFABA',
      h1: 'Is aquafaba just chickpea water?',
      crumb: 'Aquafaba or chickpea water?',
      description: 'Aquafaba starts as chickpea cooking water. Compare canned chickpea liquid with VERY AQUAFABA for dosing, prep and service behind the bar.',
      lead: `Yes. Aquafaba is the cooking liquid of chickpeas, so the liquid in a can and VERY AQUAFABA start from the same idea. The difference behind the bar is how you work with them. A can has to be opened and drained, and the liquid can vary with the product you buy. VERY AQUAFABA comes as a defined product with a working dose of {dose} ml per drink, ready to pour from the fridge.`,
      sections: [
        { id: 'compare', title: 'A can or a pack', html: `<table class="va-guide-grid va-guide-grid--compare">
<thead><tr><th scope="col"></th><th scope="col">A can of chickpeas</th><th scope="col">VERY AQUAFABA</th></tr></thead>
<tbody>
<tr><td data-label="">From one product to the next</td><td data-label="A can of chickpeas">Can vary by brand and batch</td><td data-label="VERY AQUAFABA">A defined product and working dose</td></tr>
<tr><td data-label="">Before it goes in the shaker</td><td data-label="A can of chickpeas">Open, drain and sometimes prepare further</td><td data-label="VERY AQUAFABA">Pour {dose} ml from the fridge</td></tr>
<tr><td data-label="">What is left over</td><td data-label="A can of chickpeas">The chickpeas</td><td data-label="VERY AQUAFABA">Nothing</td></tr>
<tr><td data-label="">On the label</td><td data-label="A can of chickpeas">Depends on the can</td><td data-label="VERY AQUAFABA">Water and chickpeas</td></tr>
<tr><td data-label="">Once opened</td><td data-label="A can of chickpeas">Depends on the product</td><td data-label="VERY AQUAFABA">Liquid: {opened_days} days at {opened_temp} °C. Powder: keeps dry and closed until the best-before date</td></tr>
</tbody>
</table>` },
        { id: 'service', title: 'Why that matters during service', html: `<p>One sour is easy to adjust. Forty in the middle of a busy service are less forgiving.</p>
<p>With canned chickpea liquid, you may need to adapt to the liquid you have opened. With VERY AQUAFABA, everyone can work from the same <b>{dose} ml dose per drink</b>. That makes it easier to write one spec, train the station around it and <a href="{pre_batching_page_href}">pre-batch the rest of the sour</a> while keeping the aquafaba separate for the shake.</p>
<p>You still make the foam one drink at a time. The advantage is that the dose does not have to be reinvented with every new can.</p>` },
      ],
      faq: [
        { q: 'Can I use the liquid from canned chickpeas in cocktails?', a: 'Yes. Chickpea cooking liquid is aquafaba. How it behaves can vary between products, and some bartenders prepare or reduce it before use. VERY AQUAFABA is supplied with a working dose of {dose} ml per drink.' },
        { q: 'Is chickpea water the same as aquafaba?', a: 'Aquafaba is chickpea cooking liquid. VERY AQUAFABA is an aquafaba product made from water and chickpeas and supplied for direct use or as powder.' },
        { q: 'Does aquafaba taste of chickpeas?', a: 'In the pack, VERY AQUAFABA has a light roasted note from the cooking of the chickpeas. Once shaken into a drink, it disappears: the foam carries no taste of its own, and the flavour of the drink stays with its other ingredients.' },
        { q: 'Where can I buy aquafaba for cocktails?', a: 'You can [buy aquafaba for cocktails]({where_to_buy_page_href}) on Amazon in the United States and Germany, on InstantChef in France, and through the enquiry form elsewhere.' },
      ],
    },

    'is-aquafaba-an-allergen': {
      title: 'Is Aquafaba an Allergen? | VERY AQUAFABA',
      h1: 'Is aquafaba an allergen?',
      crumb: 'Is aquafaba an allergen?',
      description: 'Chickpea is not one of the {eu_allergens} allergens covered by EU mandatory allergen labelling. VERY AQUAFABA contains no eggs, dairy, gluten or soy.',
      lead: `Under EU food information rules, chickpea is not one of the {eu_allergens} allergens that must be declared. VERY AQUAFABA contains no eggs, dairy, gluten or soy. That does not mean chickpeas cannot cause an allergic reaction. Anyone with a known chickpea or legume allergy should avoid the product. For a bar, the useful distinction is simple: VERY AQUAFABA itself contains no egg, but every finished cocktail still needs to be considered ingredient by ingredient.`,
      sections: [
        { id: 'eu', title: 'Is chickpea one of the {eu_allergens} EU allergens?', html: `<p><a href="{eu_rules_href}">EU food information rules</a> name {eu_allergens} allergens that require declaration, including eggs, soy, peanuts and lupin. <b>Chickpea is not on that list.</b></p>
<p>That describes its status under EU mandatory allergen labelling. It does not mean chickpea allergy is impossible.</p>
<p>If a guest tells you they have a chickpea or legume allergy, treat it seriously and follow your normal allergen procedure.</p>` },
        { id: 'egg', title: 'What about guests who cannot have egg?', html: `<p>VERY AQUAFABA itself contains <b>no egg</b>.</p>
<p>So if an egg white is the ingredient preventing someone from having a particular sour, replacing the egg white with VERY AQUAFABA removes egg from the foam ingredient. The rest of the cocktail still needs to be checked separately, including spirits, syrups and garnishes.</p>
<p>Cross-contact and preparation procedures also depend on how your own bar works, so follow the allergen process already used in your venue.</p>` },
        { id: 'taste', title: 'Does it taste of chickpeas?', html: `<p>Straight from the pack, VERY AQUAFABA carries a light roasted note from the cooking of the chickpeas. Shaken into a drink, it disappears: the foam carries no taste of its own.</p>
<p>At <b>{dose} ml per drink</b>, it builds the foam while the flavour comes from the spirit, citrus, syrup and the rest of the cocktail.</p>` },
      ],
      faq: [
        { q: 'Is chickpea one of the {eu_allergens} EU allergens?', a: 'No. Chickpea is not one of the {eu_allergens} allergens covered by EU mandatory allergen labelling. It can still cause allergic reactions, particularly for someone with a known chickpea or legume allergy.' },
        { q: 'Does VERY AQUAFABA contain egg?', a: 'No. VERY AQUAFABA contains water and chickpeas and no egg.' },
        { q: 'Can someone with an egg allergy drink a cocktail made with aquafaba?', a: "VERY AQUAFABA itself contains no egg. Whether a finished cocktail is suitable depends on its other ingredients and how it is prepared, so check the full drink and follow your venue's allergen procedure." },
        { q: 'Does aquafaba smell?', a: 'In the pack, VERY AQUAFABA has a light roasted note from the cooking of the chickpeas. Once it is shaken into a drink, that note disappears.' },
        { q: 'Which cocktail foamers declare soy?', a: 'In our comparison, VEGG White declares soy. You can [compare cocktail foamer ingredients]({foamer_ingredients_href}) side by side.' },
      ],
    },

    'bulk-foamer': {
      title: 'Bulk Cocktail Foamer: 10L or 3kg | VERY AQUAFABA',
      h1: 'Bulk cocktail foamer: 10 L liquid or 3 kg powder?',
      crumb: 'Bulk cocktail foamer',
      description: 'VERY AQUAFABA in bulk: 10 L liquid makes {drinks_10l} drinks and a 3 kg powder pouch {drinks_3kg}. Compare packs by the number of sours you pour.',
      lead: `Pouring sours all night from 1 L cartons means opening a lot of cartons. At higher volumes, VERY AQUAFABA comes in two larger formats: the 10 L bag-in-box makes {drinks_10l} drinks at {dose} ml each, while the 3 kg powder pouch makes {drinks_3kg}. The right choice depends less on the total size of the pack than on how quickly your bar will use it.`,
      sections: [
        { id: 'finish', title: 'Can you finish 10 L in time?', html: `<p>Once opened, a <b>10 L bag-in-box is kept at {opened_temp} °C and used within {opened_days} days</b>.</p>
<p>{drinks_10l} drinks across that period works out at roughly:</p>
<ul>
<li><b>{bib_day3} sours a day</b> over {open_min} days</li>
<li><b>{bib_day4} sours a day</b> over {open_max} days</li>
</ul>
<p>If your service is regularly around that level, the 10 L format gives you liquid aquafaba ready to pour without moving through multiple 1 L cartons.</p>
<p>If your daily volume is well below that, the opened-pack clock starts to matter more than the size of the pack.</p>` },
        { id: 'between', title: 'What if you are between 1 L and 10 L volumes?', html: `<p>Not every bar fits neatly into a pack threshold.</p>
<p>A <b>1 L Tetrapak makes {drinks_1l} drinks</b>, which means around <b>{l1_day_range} drinks a day</b> if you want to finish it within {opened_days} days.</p>
<p>A 10 L bag-in-box moves that threshold up to around <b>{bib_day_range} drinks a day</b>.</p>
<p>If you sit somewhere between the two, the decision depends on how steady your service is. Several 1 L packs may make sense when volumes are predictable. Powder can make more sense when the number of sours changes sharply from one day to the next.</p>` },
        { id: 'powder', title: 'When powder makes more sense', html: `<p>The <b>3 kg pouch makes {drinks_3kg} drinks</b> at <b>{powder} g of powder with {water} ml of water per drink</b>.</p>
<p>Unlike opened liquid, the opened pouch does not have to be used within {opened_days} days. Keep it dry and closed, and it keeps until the best-before date on the pouch, so you can make up what a service needs rather than committing to an opened 10 L pack.</p>
<p>Prepare the quantity you need before service and keep the made-up aquafaba chilled.</p>` },
        { id: 'pattern', title: 'Pack by service pattern', html: `<table class="va-guide-grid">
<thead><tr><th scope="col">Your service</th><th scope="col">Pack to consider</th><th scope="col">Why</th></tr></thead>
<tbody>
<tr><td data-label="Your service">Around {l1_day_range} sours a day</td><td data-label="Pack to consider">1 L Tetrapak</td><td data-label="Why">{drinks_1l} drinks, enough to finish the pack within {opened_days} days</td></tr>
<tr><td data-label="Your service">Between the liquid pack thresholds</td><td data-label="Pack to consider">Several 1 L packs or powder</td><td data-label="Why">Depends on how steady your volume is</td></tr>
<tr><td data-label="Your service">Around {bib_day_range} sours a day</td><td data-label="Pack to consider">10 L bag-in-box</td><td data-label="Why">{drinks_10l} drinks, enough to finish the pack within {opened_days} days</td></tr>
<tr><td data-label="Your service">Volume changes significantly from day to day</td><td data-label="Pack to consider">Powder</td><td data-label="Why">Make up what you need; the opened pouch keeps dry and closed until its best-before date</td></tr>
</tbody>
</table>
<p>The table is a starting point, not a rule. A venue with very uneven volumes may prefer powder at a higher average, while a bar with extremely predictable service may find liquid easier to run.</p>` },
      ],
      faq: [
        { q: 'How many drinks does a 10L bag-in-box make?', a: 'It makes {drinks_10l} drinks at {dose} ml each. Once opened, the pack is kept at {opened_temp} °C and used within {opened_days} days.' },
        { q: 'How many drinks does a 3kg pouch make?', a: 'A 3 kg pouch makes {drinks_3kg} drinks at {powder} g of powder made up with {water} ml of water per drink. Kept dry and closed, the opened pouch keeps until its best-before date.' },
        { q: 'When does 10L make sense for a bar?', a: 'To use {drinks_10l} drinks within {opened_days} days, you are looking at roughly {bib_day_range} sours a day. Below that, compare the liquid formats with powder based on how predictable your service is.' },
        { q: 'Should I use several 1L packs or one 10L pack?', a: 'Look at how many sours you actually pour within {opened_days} days. A 1 L pack covers {drinks_1l} drinks. A 10 L pack covers {drinks_10l}. If your volume falls between those thresholds, several 1 L packs or powder may fit better.' },
        { q: 'How do I order in volume?', a: 'Use the professional enquiry form and tell us how many sites you operate, roughly how many drinks you pour and which formats you are considering. We can then send the relevant technical information with the reply.' },
      ],
    },

    'egg-white-alternative': {
      title: 'Egg White Alternative for Cocktails | VERY AQUAFABA',
      h1: 'What can I use instead of egg white in cocktails?',
      crumb: 'Egg white alternative',
      description: 'Use {dose} ml of VERY AQUAFABA in place of the egg white in a sour: same build, same dry shake, same glass, and nothing to crack or separate.',
      lead: `Most sour specs on a bar list still say "one egg white", and that line is all you need to change. Take the white out and put {dose} ml of VERY AQUAFABA in its place. The spirit, the citrus, the syrup, the dry shake, the shake with ice and the glass all stay as they are, so the drink you serve tonight is the drink you served last week, without the egg.`,
      sections: [
        { id: 'swap', title: 'One line of the spec changes', html: `<ol>
<li>Build the drink as you always do: spirit, citrus and syrup in the tin.</li>
<li>Where the spec says one egg white, pour <b>{dose} ml of VERY AQUAFABA</b>, straight from the fridge.</li>
<li>Shake hard without ice to build the foam.</li>
<li>Add the ice and shake again to chill the drink.</li>
<li>Strain into the glass and garnish as usual.</li>
</ol>
<p>In a sour, VERY AQUAFABA is dosed per drink rather than per egg, so the same {dose} ml goes in whatever the spec. The <a href="{how_to_make_page_href}">method for every sour</a> walks through the two shakes drink by drink.</p>` },
        { id: 'station', title: 'What changes at the station', html: `<p>The drink stays the same; the prep around it gets shorter. There is nothing to crack, nothing to separate and no yolks waiting to be used up. You pour or jigger the aquafaba like any other liquid, and it goes into the tin cold.</p>
<p>Sealed packs keep at least <b>{unopened_months} months</b> at room temperature. An opened 1 L Tetrapak lives in the fridge at <b>{opened_temp} °C</b> and is used within <b>{opened_days} days</b>; it makes {drinks_1l} drinks. If you shake only a few sours a week, the 200 g pouch makes {drinks_200g}, at {powder} g of powder in {water} ml of water each, and, once opened, keeps dry and closed until the best-before date on the pouch.</p>` },
        { id: 'menu', title: 'Moving a whole sour list across', html: `<p>Keep your pre-batch as it is: spirit, citrus and syrup in one bottle before service. The aquafaba stays out of the bottle and goes into each tin at the shake, one drink at a time, so you can <a href="{pre_batching_page_href}">pre-batch your sours</a> exactly as you do now.</p>
<p>Start with one sour you already sell, swap the white and taste it next to the old spec. The <a href="{pisco_sour_href}">pisco sour</a> is a good first test: same build, same glass, and the head has to carry a garnish.</p>` },
        { id: 'egg', title: 'Guests who ask about egg', html: `<p>VERY AQUAFABA contains no egg, so the foam itself no longer brings egg into the drink. The rest of the cocktail still has to be checked ingredient by ingredient, and anyone with a known chickpea or legume allergy should avoid it. <a href="{is_aquafaba_an_allergen_href}">Answer the allergen question</a> with the EU rules in hand before the guest asks twice.</p>` },
      ],
      faq: [
        { q: 'How much aquafaba replaces one egg white in a cocktail?', a: 'In a sour, use {dose} ml of VERY AQUAFABA per drink in place of the egg white, or {powder} g of powder made up with {water} ml of water.' },
        { q: 'Do I need to change the rest of my recipe?', a: 'No. The spirit, citrus, syrup, the two shakes and the glass stay as they are. Only the egg white changes.' },
        { q: 'Does aquafaba foam like egg white?', a: 'Aquafaba takes the place of the egg white in a shaken sour: the same dry shake, the same shake with ice, and a white head on the drink. Start with {dose} ml of VERY AQUAFABA in one of your own sours and judge the foam against the egg white version.' },
        { q: 'Can I keep aquafaba behind the bar like egg whites?', a: 'Keep the opened liquid in the fridge at {opened_temp} °C and use it within {opened_days} days. Sealed packs keep at least {unopened_months} months at room temperature.' },
        { q: 'Does aquafaba change the taste of a sour?', a: 'No. In the pack, VERY AQUAFABA has a light roasted note from the cooking of the chickpeas. Once shaken into a drink, it disappears: the foam carries no taste of its own, and the drink keeps the flavour of its spirit, citrus and syrup.' },
      ],
    },

    'alcohol-free-foamer': {
      title: 'Alcohol-Free Foamer for Zero-Proof Sours | VERY AQUAFABA',
      h1: 'A foamer for alcohol-free sours',
      crumb: 'Alcohol-free foamer',
      description: 'VERY AQUAFABA contains no alcohol: water and chickpeas, {dose} ml a drink. Some foamers list {msb_abv}% or {yanni_abv}% alcohol. What that means for a zero-proof menu.',
      lead: `A zero-proof sour gets judged on its head as much as any other sour: the same white foam, the same body, and nothing in the glass that a guest who isn't drinking has to ask about. VERY AQUAFABA is water and chickpeas, so it adds no alcohol to the drink, and it goes into the tin at {dose} ml, exactly as it does in a classic sour.`,
      sections: [
        { id: 'label', title: 'Check what the foamer is made of', html: `<p>Not every foamer is alcohol-free. Ms. Better's Miraculous Foamer lists <b>{msb_abv}% alcohol</b> and Dr Yanni's Magic Foamer <b>{yanni_abv}%</b>, so even a few drops of either bring alcohol into a drink built to have none.</p>
<p>VERY AQUAFABA lists water and chickpeas, with no alcohol. You can <a href="{foamer_ingredients_href}">compare cocktail foamer labels side by side</a>, each line taken from the product's published label.</p>` },
        { id: 'build', title: 'Building a zero-proof sour', html: `<p>The method doesn't change because the spirit has gone. Build your alcohol-free base, citrus and syrup in the tin, add <b>{dose} ml of VERY AQUAFABA</b> straight from the fridge, shake hard without ice, then add the ice and shake again. Strain and garnish as you would any sour.</p>
<p>If you already know the <a href="{how_to_make_page_href}">two shakes for every sour</a>, a zero-proof version is the same drill.</p>` },
        { id: 'one', title: 'One foamer for both sides of the menu', html: `<p>Because the same pack works in a classic sour and in its alcohol-free version, the bar keeps one spec and one product. A 1 L Tetrapak makes {drinks_1l} drinks and, once opened, is kept at {opened_temp} °C and used within {opened_days} days. If zero-proof sours are an occasional order, the 200 g pouch makes {drinks_200g} drinks and, once opened, keeps dry and closed until the best-before date on the pouch.</p>` },
        { id: 'rest', title: 'What else to check in the glass', html: `<p>The foam is only one ingredient. Bitters, syrups, cordials and garnishes have their own labels, so read each one when a drink is sold as alcohol-free. VERY AQUAFABA takes the foamer off that list.</p>` },
      ],
      faq: [
        { q: 'Is there alcohol in VERY AQUAFABA?', a: 'No. VERY AQUAFABA contains water and chickpeas, so it adds no alcohol to the drink.' },
        { q: 'Which cocktail foamers contain alcohol?', a: "Ms. Better's Miraculous Foamer lists {msb_abv}% alcohol and Dr Yanni's Magic Foamer {yanni_abv}%, according to their retail listings." },
        { q: 'Can I use aquafaba in mocktails?', a: 'Yes. Use {dose} ml of VERY AQUAFABA per drink, dry shake, then shake with ice, as in any sour.' },
        { q: 'Does aquafaba change the taste of an alcohol-free drink?', a: 'No. In the pack, VERY AQUAFABA has a light roasted note from the cooking of the chickpeas. Once shaken into a drink, it disappears: the foam carries no taste of its own, and the flavour stays with the base, citrus and syrup.' },
        { q: 'Where can I buy VERY AQUAFABA?', a: 'You can [buy aquafaba for cocktails]({where_to_buy_page_href}) on Amazon in the United States and Germany, on InstantChef in France, and through the enquiry form elsewhere.' },
      ],
    },

    'drinks-producers': {
      title: 'Aquafaba for Drinks Producers | VERY AQUAFABA',
      h1: 'Aquafaba for cocktail mix and drinks producers',
      crumb: 'Drinks producers',
      description: 'VERY AQUAFABA for sour mix and drinks producers: 10 L bag-in-box, 1 T IBC and 3 kg pouch, what the label lists, and the method to print for bartenders.',
      lead: `If you sell sour mix to bars, your customers still put the foam in themselves, one drink at a time. VERY AQUAFABA supplies production in the 10 L bag-in-box and the 1 T IBC for the liquid and the 3 kg pouch for the powder. The method behind the bar stays simple: your mix goes in the bottle, and the aquafaba goes in at the shake.`,
      sections: [
        { id: 'formats', title: 'Formats for production', html: `<p>At {dose} ml a drink, a <b>10 L bag-in-box covers {drinks_10l} drinks</b>, a <b>1 T IBC {drinks_1t}</b> and a <b>3 kg pouch {drinks_3kg}</b>. Sealed, every format keeps at least {unopened_months} months at room temperature; opened liquid is kept at {opened_temp} °C and used within {opened_days} days.</p>
<p>Minimum order and lead time come back with your answer when you describe your volumes in the professional enquiry form.</p>` },
        { id: 'label', title: 'What to print for the bartender', html: `<p>Your mix carries the spirit, citrus and syrup. The bartender adds <b>{dose} ml of VERY AQUAFABA</b> to the tin with one pour of the mix, shakes hard without ice, then adds the ice and shakes again. Those lines, printed on your label or your spec card, are what turn the mix into a sour with a head.</p>
<p>Bartenders who want the detail can follow the <a href="{how_to_make_page_href}">two shakes for every sour</a>.</p>` },
        { id: 'specs', title: 'Specs for your quality team', html: `<p>VERY AQUAFABA lists water and chickpeas, with no additives and no preservatives. The <a href="{products_href}">Products page</a> lists it as vegan, clean-label, Halal and Kosher, with a Nutri-Score A. The technical sheet comes with the answer to your enquiry.</p>` },
        { id: 'bottled', title: 'Pre-mixed and bottled drinks', html: `<p>The method on this site adds the aquafaba at the shake, never into the batch. If you are developing a bottled or pre-mixed cocktail with the foam already inside, describe the product in the enquiry form and we will come back to you on how VERY AQUAFABA fits it.</p>` },
      ],
      faq: [
        { q: 'Which VERY AQUAFABA formats exist for production?', a: 'The 10 L bag-in-box and the 1 T IBC for the liquid, and the 3 kg pouch for the powder.' },
        { q: 'How many drinks does a 1T IBC make?', a: '{drinks_1t} drinks at {dose} ml each.' },
        { q: 'Where do I find the minimum order and lead time?', a: 'They come back with your answer when you describe your volumes in the professional enquiry form.' },
        { q: 'Can VERY AQUAFABA go into a bottled cocktail?', a: 'The method on this site adds it at the shake. For a bottled or pre-mixed product, describe it in the enquiry form and we will come back to you.' },
      ],
    },

    'vegg-white-alternative': {
      title: 'VEGG White Alternative for Cocktails | VERY AQUAFABA',
      h1: 'Looking for a VEGG White alternative?',
      crumb: 'VEGG White alternative',
      description: 'VEGG White and VERY AQUAFABA side by side: what each label lists, the declared allergens and the dose per drink, with the source of each line.',
      lead: `VEGG White is a liquid cocktail foamer used one to one in place of egg white. VERY AQUAFABA does the same job at {dose} ml a drink, with a much shorter label: water and chickpeas, no additives and no preservatives. Here are the two side by side, each line taken from a published source.`,
      sections: [
        { id: 'labels', title: 'The two labels', html: `{labels_vegg}
<p>Labels checked: {labels_checked}. Formulations change, so each line is read again before this comparison is updated.</p>` },
        { id: 'soy', title: 'Soy on the label', html: `<p>VEGG White declares soy, from its soy lecithin. VERY AQUAFABA contains no soy, no eggs, no dairy and no gluten. Chickpea is not one of the {eu_allergens} allergens EU law requires on a label, but anyone with a known chickpea or legume allergy should still avoid it. <a href="{is_aquafaba_an_allergen_href}">Answer the allergen question</a> before a guest asks.</p>` },
        { id: 'dose', title: 'Dose and format', html: `<p>VEGG White is used one to one in place of egg white. VERY AQUAFABA is measured at <b>{dose} ml per drink</b>, poured from a 1 L Tetrapak that makes {drinks_1l} drinks, or made up from powder at {powder} g in {water} ml of water. For a busy bar, the <a href="{bulk_foamer_href}">10 L bag-in-box or the 3 kg pouch</a> keeps one product across every station.</p>` },
        { id: 'try', title: 'Try it in a sour you already make', html: `<p>Swap the foamer in one drink you already sell and taste the two side by side. Build as usual, add {dose} ml of VERY AQUAFABA, shake dry, then with ice. A <a href="{pisco_sour_href}">pisco sour</a> or a <a href="{gin_fizz_href}">gin fizz</a> shows the head clearly.</p>` },
      ],
      faq: [
        { q: 'What is VEGG White made of?', a: "Its published list reads water, emulsifiers, methylcellulose, esters of fatty acids, soy lecithin, thickeners, maltodextrin, xanthan gum, acacia gum, preservative E211 and antioxidant ascorbic acid, according to Difford's Guide." },
        { q: 'Does VEGG White contain soy?', a: 'Yes. It declares soy, from its soy lecithin.' },
        { q: 'Is VERY AQUAFABA soy-free?', a: 'Yes. VERY AQUAFABA contains water and chickpeas, with no soy, eggs, dairy or gluten.' },
        { q: 'How much VERY AQUAFABA do I use per drink?', a: '{dose} ml of liquid, or {powder} g of powder made up with {water} ml of water.' },
        { q: 'Where can I buy VERY AQUAFABA?', a: 'You can [buy aquafaba for cocktails]({where_to_buy_page_href}) on Amazon in the United States and Germany, on InstantChef in France, and through the enquiry form elsewhere.' },
      ],
    },

    'fee-foam-alternative': {
      title: 'Fee Foam Alternative Without Additives | VERY AQUAFABA',
      h1: 'Looking for a Fee Foam alternative?',
      crumb: 'Fee Foam alternative',
      description: 'Fee Foam lists propylene glycol and polysorbate 80; VERY AQUAFABA lists water and chickpeas. Both labels side by side, with the dose and sources.',
      lead: `Fee Foam comes in a dasher bottle, a few dashes per drink. Turn it around and the label lists water, propylene glycol, polysorbate 80, two preservatives, citric acid and lemon extract. VERY AQUAFABA lists water and chickpeas, with no additives and no preservatives, and goes into the tin at {dose} ml a drink.`,
      sections: [
        { id: 'labels', title: 'The two labels', html: `{labels_fee}
<p>Labels checked: {labels_checked}. Formulations change, so each line is read again before this comparison is updated.</p>` },
        { id: 'foam', title: 'What makes the foam', html: `<p>In Fee Foam, the label lists polysorbate 80 (E433), an emulsifier, alongside propylene glycol (E1520), with potassium sorbate (E202) and sodium benzoate (E211) as preservatives. In VERY AQUAFABA the foam comes from the chickpea itself, and the label stops at water and chickpeas.</p>
<p>If ingredients matter to your menu, <a href="{foamer_ingredients_href}">compare every foamer label</a> in one table.</p>` },
        { id: 'dose', title: 'Dashes or a measured pour', html: `<p>The maker suggests {fee_dose} of Fee Foam. VERY AQUAFABA is measured with a jigger at <b>{dose} ml</b>, the same pour every time, and once opened the 1 L Tetrapak is kept at {opened_temp} °C and used within {opened_days} days. It makes {drinks_1l} drinks.</p>` },
        { id: 'try', title: 'Try it in a sour you already make', html: `<p>Take one sour off your list, swap the dashes for {dose} ml of VERY AQUAFABA, shake dry, then with ice, and compare the head. A <a href="{pisco_sour_href}">pisco sour</a> is an easy first test.</p>` },
      ],
      faq: [
        { q: 'What is in Fee Foam?', a: "Water, propylene glycol, polysorbate 80, potassium sorbate, less than 1/10 of 1% benzoate of soda as preservative, citric acid and pure lemon extract, according to Difford's Guide." },
        { q: 'Does Fee Foam contain preservatives?', a: 'Its label lists potassium sorbate and sodium benzoate.' },
        { q: 'Does VERY AQUAFABA contain preservatives?', a: 'No. The label lists water and chickpeas. Sealed packs keep at least {unopened_months} months at room temperature.' },
        { q: 'How much VERY AQUAFABA replaces Fee Foam in a drink?', a: 'Use {dose} ml of VERY AQUAFABA per drink, or {powder} g of powder made up with {water} ml of water.' },
        { q: 'Where can I buy VERY AQUAFABA?', a: 'You can [buy aquafaba for cocktails]({where_to_buy_page_href}) on Amazon in the United States and Germany, on InstantChef in France, and through the enquiry form elsewhere.' },
      ],
    },

    'ms-betters-alternative': {
      title: "Ms. Better's Foamer Alternative | VERY AQUAFABA",
      h1: "Looking for an alternative to Ms. Better's or Dr Yanni's?",
      crumb: "Ms. Better's alternative",
      description: "Ms. Better's Miraculous Foamer lists {msb_abv}% alcohol and Dr Yanni's {yanni_abv}%. VERY AQUAFABA is water and chickpeas, with no alcohol, at {dose} ml a drink.",
      lead: `Dropper foamers go into the drink a few drops at a time. The catch shows on a zero-proof menu. Ms. Better's Miraculous Foamer lists {msb_abv}% alcohol and Dr Yanni's Magic Foamer {yanni_abv}%, so each one adds alcohol to the drink. VERY AQUAFABA is water and chickpeas, with none.`,
      sections: [
        { id: 'labels', title: 'The labels', html: `{labels_alcohol}
<p>Labels checked: {labels_checked}. Formulations change, so each line is read again before this comparison is updated.</p>` },
        { id: 'alcohol', title: 'Where the alcohol matters', html: `<p>In a classic sour, a few drops of a {msb_abv}% foamer barely register next to the spirit. In a drink sold as alcohol-free, they are the one ingredient that breaks the promise. VERY AQUAFABA adds no alcohol, so the same foamer works in a whiskey sour and in its <a href="{alcohol_free_foamer_href}">zero-proof version</a>.</p>` },
        { id: 'dose', title: 'Drops or millilitres', html: `<p>Ms. Better's is used at {msb_dose}. VERY AQUAFABA goes in at <b>{dose} ml</b>, measured with a jigger, the same way as the egg white it replaces. A 1 L Tetrapak makes {drinks_1l} drinks; the 200 g pouch makes {drinks_200g} and, once opened, keeps dry and closed until the best-before date on the pouch.</p>` },
        { id: 'try', title: 'Try it in a sour you already make', html: `<p>Swap the drops for {dose} ml of VERY AQUAFABA in one drink, shake dry, then with ice, and compare. The <a href="{how_to_make_page_href}">two shakes for every sour</a> are all the method there is.</p>` },
      ],
      faq: [
        { q: "How much alcohol is in Ms. Better's foamer?", a: "Ms. Better's Miraculous Foamer lists {msb_abv}% alcohol on its retail listing." },
        { q: "Is Dr Yanni's foamer alcoholic?", a: "Yes. Dr Yanni's Magic Foamer is listed as a plant-based alcoholic emulsion at {yanni_abv}%." },
        { q: 'Is there alcohol in VERY AQUAFABA?', a: 'No. VERY AQUAFABA contains water and chickpeas.' },
        { q: 'Can I use VERY AQUAFABA in mocktails?', a: 'Yes. Use {dose} ml per drink, dry shake, then shake with ice.' },
        { q: 'Where can I buy VERY AQUAFABA?', a: 'You can [buy aquafaba for cocktails]({where_to_buy_page_href}) on Amazon in the United States and Germany, on InstantChef in France, and through the enquiry form elsewhere.' },
      ],
    },

    'quillaia-foamers': {
      title: 'Foamee and Wonderfoam Alternative | VERY AQUAFABA',
      h1: 'Foamee, Wonderfoam and the quillaia foamers',
      crumb: 'Quillaia foamers',
      description: 'Foamee lists a vegetable saponin extract and Wonderfoam quillaia extract with gum, starch and preservatives. VERY AQUAFABA lists water and chickpeas.',
      lead: `A few drops of a saponin foamer lift a head on a sour. Saponins are foaming compounds found in plants: Wonderfoam lists quillaia extract, from the bark of the quillaia tree, and Foamee a vegetable saponin extract. VERY AQUAFABA gets its foam from the chickpea itself, at {dose} ml a drink, with water and chickpeas on the label.`,
      sections: [
        { id: 'labels', title: 'The labels', html: `{labels_saponin}
<p>Labels checked: {labels_checked}. Formulations change, so each line is read again before this comparison is updated.</p>` },
        { id: 'saponin', title: 'What a saponin foamer adds to the drink', html: `<p>Quillaia extract appears on labels as E999. In Wonderfoam it sits with gum arabic, modified starch (E1450) and two preservatives, sodium benzoate and potassium sorbate. Foamee lists its saponin extract with water and citric acid. VERY AQUAFABA lists water and chickpeas, with no additives and no preservatives.</p>
<p>To see every foamer in one place, <a href="{foamer_ingredients_href}">compare the labels side by side</a>.</p>` },
        { id: 'tin', title: 'Not a tin of chickpeas', html: `<p>Some saponin foamers compare themselves with a tin of chickpeas, and on that point they're right: a tin gives you a few drinks and leaves you with the chickpeas. VERY AQUAFABA is not a tin. A 1 L Tetrapak makes {drinks_1l} drinks at {dose} ml each, the 200 g pouch makes {drinks_200g}, and the liquid is the same from one pack to the next. <a href="{aquafaba_vs_chickpea_water_href}">See what separates a pack from a can</a>.</p>` },
        { id: 'dose', title: 'Drops or a measured pour', html: `<p>Wonderfoam is used at {wonderfoam_dose}. VERY AQUAFABA goes in at <b>{dose} ml</b>, measured with a jigger, and the method is the one you already know: dry shake, then shake with ice. Try it in a <a href="{pisco_sour_href}">pisco sour</a> next to your usual foamer.</p>` },
      ],
      faq: [
        { q: 'What is in Foamee?', a: 'Its store lists a vegetable saponin extract, water and citric acid.' },
        { q: 'What is in Wonderfoam?', a: 'Its retail listing reads quillaia extract as the foaming agent, water, gum arabic, modified starch (E1450), sodium benzoate and potassium sorbate.' },
        { q: 'What is quillaia extract?', a: 'An extract of the bark of the quillaia tree, rich in saponins, used as a foaming agent and listed as E999.' },
        { q: 'Does VERY AQUAFABA contain preservatives?', a: 'No. The label lists water and chickpeas. Sealed packs keep at least {unopened_months} months at room temperature.' },
        { q: 'Where can I buy VERY AQUAFABA?', a: 'You can [buy aquafaba for cocktails]({where_to_buy_page_href}) on Amazon in the United States and Germany, on InstantChef in France, and through the enquiry form elsewhere.' },
      ],
    },
  },
};
