// Process sheet pages, English. One entry per application. The sheet (steps with their
// reference value and a blank column) and the checks table are rendered by the template;
// this module carries the steps, the checks and the copy. Every figure is a {token}
// filled from facts.json; no em/en dash. Steps, causes and fixes are the guide's own
// method and troubleshooting rows, nothing is added from outside the sources.
export default {
  meringue: {
    title: 'Aquafaba Meringue Process Sheet and Checks - VERY AQUAFABA',
    h1: 'Aquafaba meringue: process sheet and checks',
    description: 'A printable process sheet for the VERY AQUAFABA meringue recipe, with the reference value of each step, a column for your own batch and the checks to run when a batch goes wrong.',
    lead: 'A printable sheet that follows the VERY AQUAFABA meringue recipe step by step, with the reference value of each step ({dose} g of aquafaba at {chill} °C, {sugar} g of sugar, {bake} °C for {bake_time} hours) and a blank column for what you actually did. Below it, the checks to run when a batch does not come out right.',
    powderNote: 'Powder: make up {powder_dose} g of VERY AQUAFABA powder with {water_dose} ml of water before step 1 and chill it to {chill} °C.',
    steps: [
      { step: 'Chill the aquafaba', reference: '{chill} °C' },
      { step: 'Degrease the bowl and the whisk', reference: 'No fat, no residue' },
      { step: 'Whip on high speed to soft peaks', reference: '{dose} g, {whip} min' },
      { step: 'Add the optional stabiliser while whipping', reference: '2 g cream of tartar or 1 g citric acid' },
      { step: 'Add the sugar on medium speed, one tablespoon at a time', reference: '{sugar} g caster sugar' },
      { step: 'Back to high speed until glossy and stiff', reference: 'Stiff peaks' },
      { step: 'Pipe straight away', reference: '3 to 4 cm' },
      { step: 'Dry with the fan off', reference: '{bake} °C, {bake_time} h' },
      { step: 'Cool on the tray, then store airtight', reference: 'Room temperature, desiccant pouch' },
    ],
    checks: [
      { see: 'Foam never reaches full volume', check: 'Grease on the bowl or whisk', fix: 'Degrease everything before you start' },
      { see: 'Foam builds slowly and stays weak', check: 'Aquafaba too warm', fix: 'Chill to {chill} °C first' },
      { see: 'Syrup beads on the meringues in storage', check: 'Sugar went in faster than it could dissolve', fix: 'One tablespoon at a time, at medium speed' },
      { see: 'Volume lost before piping', check: 'The bowl stood waiting', fix: 'Pipe and dry straight after stiff peaks' },
      { see: 'Meringues turn soft and sticky', check: 'Meringue pulls moisture from the air', fix: 'Store airtight in a dry place, with a desiccant pouch' },
    ],
    sections: [
      {
        id: 'before',
        title: 'Before you start: three checks',
        html: `<p>Most meringue faults are decided before the mixer turns on. Three checks cover them.</p>
<ul>
<li>Temperature. The VERY AQUAFABA liquid comes out of the fridge at {chill} °C and goes straight into the bowl. Made-up powder is chilled to the same temperature before whipping; warm aquafaba climbs slowly and gives a weaker foam.</li>
<li>Grease. Aquafaba foam is a plain protein foam with no fat in the recipe, so a film of grease on the bowl or the whisk holds the volume short. Wipe both before the aquafaba goes in.</li>
<li>Sugar. Weigh {sugar} g of caster sugar and keep it at hand. It goes in only once the foam holds soft peaks, and one tablespoon at a time.</li>
</ul>`,
      },
      {
        id: 'whipping',
        title: 'Whipping, sugar and piping',
        html: `<p>Whip {dose} g on high speed. Soft peaks come at about {whip} minutes for the reference batch: the foam holds a shape that bends over at the tip. Add the stabiliser now if you use it, drop to medium speed and add the {sugar} g of sugar one tablespoon at a time, letting each one dissolve before the next. Back to high speed until the foam is glossy and holds a stiff peak that stands straight.</p>
<p>Pipe 3 to 4 cm shapes as soon as the foam is ready. Aquafaba foam holds less well than egg white foam, so a bowl left standing loses volume before it reaches the tray.</p>
<p>On industrial batches, hold the aquafaba concentration at {concentration} g/ml so the foam behaves the same on every run.</p>`,
      },
      {
        id: 'drying',
        title: 'Drying and storage',
        html: `<p>Trays dry at {bake} °C with the fan off for {bake_time} hours, until the meringues are dry through. Leave them to cool completely on the tray before you move them.</p>
<p>Cooled meringues keep airtight at room temperature, with a desiccant pouch in the container if you have one. They pull moisture from a humid room and go soft, so the container matters as much as the oven.</p>
<p>Unopened, both formats of VERY AQUAFABA keep at least {unopened_months} months at room temperature. Once opened, the liquid stays closed in the fridge at {opened_temp} °C or below and is used within {opened_days} days; the powder only needs to stay dry and closed.</p>`,
      },
    ],
    faq: [
      { q: 'How do I know the foam has reached stiff peaks?', a: 'Lift the whisk: the peak stands straight without bending over and the foam is glossy. The reference batch reaches soft peaks in {whip} minutes; the sugar goes in after that, and the stiff peak comes with the last of the sugar.' },
      { q: 'Why do my meringues weep syrup in the container?', a: 'The sugar went in faster than it could dissolve. Add the {sugar} g one tablespoon at a time at medium speed and let each spoonful disappear before the next.' },
      { q: 'Can I hold the whipped foam while the oven is busy?', a: 'No. Pipe and dry straight after stiff peaks. If the oven is full, whip the next bowl later rather than letting a finished bowl stand.' },
      { q: 'The meringues are sticky inside. What do I check?', a: 'The drying step: {bake} °C with the fan off for the full {bake_time} hours, until dry through, then a complete cool on the tray. Larger shapes than 3 to 4 cm need longer than the reference time.' },
      { q: 'Does the powder follow the same sheet?', a: 'Yes. Make up {powder_dose} g of powder with {water_dose} ml of water, chill it to {chill} °C and start at step 1. The rule per egg white: {white_powder} g of powder + {white_water} ml of water = {white_total} g of aquafaba, equivalent to the same mass of liquid aquafaba.' },
      { q: 'Can I send this sheet with a technical question?', a: 'Yes. Fill in your batch column, note what you saw, and describe it through our [contact form]({contact_href}) or the professional enquiry form on this page. The filled-in sheet is the fastest way for us to help.' },
    ],
  },

  'chocolate-mousse': {
    title: 'Aquafaba Chocolate Mousse Process Sheet and Checks - VERY AQUAFABA',
    h1: 'Aquafaba chocolate mousse: process sheet and checks',
    description: 'A printable process sheet for the VERY AQUAFABA chocolate mousse recipe: chocolate temperatures, whipping, folding and setting, with a column for your own batch and the checks when a mousse fails.',
    lead: 'A printable sheet that follows the VERY AQUAFABA chocolate mousse recipe step by step: the chocolate melted and cooled to {fold_temp} °C, {dose} g of aquafaba whipped with {sugar} g of sugar, the fold and the {set_time} hours of setting. A blank column for what you actually did, and below it the checks to run when a mousse does not come out right.',
    powderNote: 'Powder: make up {powder_dose} g of VERY AQUAFABA powder with {water_dose} ml of water ahead of time and chill it before step 3.',
    steps: [
      { step: 'Melt the dark couverture', reference: '{chocolate} g, 45 to 50 °C' },
      { step: 'Let the chocolate cool', reference: '{fold_temp} °C' },
      { step: 'Degrease the bowl and the whisk, weigh the chilled aquafaba', reference: '{dose} g' },
      { step: 'Whip on high speed to soft peaks', reference: '{whip} min' },
      { step: 'Add the optional stabiliser', reference: '2 g cream of tartar or 1 g citric acid' },
      { step: 'Add the sugar gradually while whipping, to glossy stiff peaks', reference: '{sugar} g caster sugar' },
      { step: 'Fold the cooled chocolate in by hand, quickly and lightly', reference: 'Stop as soon as combined' },
      { step: 'Pipe or spoon into cups straight away', reference: '{yield}' },
      { step: 'Chill to set', reference: 'At least {set_time} h; keeps {keep} days' },
    ],
    checks: [
      { see: 'Mousse collapses as the chocolate goes in', check: 'Chocolate above {fold_temp} °C melted the foam', fix: 'Cool it to {fold_temp} °C or lower before folding' },
      { see: 'Dense, heavy mousse', check: 'Over-folding knocked the air out', fix: 'Fold just until combined' },
      { see: 'Foam will not build', check: 'Grease in the bowl, or sugar added before soft peaks', fix: 'Clean bowl, and sugar only once soft peaks have formed' },
      { see: 'Volume lost before folding', check: 'The foam stood waiting for the chocolate', fix: 'Have the chocolate cooled and ready before you whip' },
      { see: 'Weak, slow foam', check: 'Aquafaba too warm', fix: 'Whip it chilled' },
      { see: 'Uneven foam from frozen stock', check: 'Not fully thawed or not stirred', fix: 'Thaw completely and stir until even. Never refreeze' },
    ],
    sections: [
      {
        id: 'before',
        title: 'Before you start: the chocolate first',
        html: `<p>The whipped aquafaba replaces both the egg whites and the cream. All the structure comes from the foam, so temperature and folding decide the result. The chocolate is dealt with before the mixer turns on.</p>
<ul>
<li>Melt {chocolate} g of dark couverture to 45 to 50 °C, then let it cool to {fold_temp} °C. Have it cooled and ready before you whip: the foam must not stand waiting for it.</li>
<li>Weigh {dose} g of VERY AQUAFABA liquid cold, straight from the fridge into a clean, grease-free bowl. Made-up powder is chilled the same way; warm aquafaba gives less volume.</li>
<li>Weigh {sugar} g of caster sugar and keep it at hand for the whipping.</li>
</ul>`,
      },
      {
        id: 'whipping',
        title: 'Whipping and folding',
        html: `<p>Whip the aquafaba on high speed to soft peaks, about {whip} minutes for the reference batch. Add the stabiliser now if you use it. Add the {sugar} g of sugar gradually while whipping, to glossy stiff peaks: the meringue should be dense and stable.</p>
<p>Fold the cooled chocolate in by hand with a spatula, quickly and lightly, and stop as soon as it is combined. Over-folding knocks the air out and gives a dense, heavy mousse; chocolate above {fold_temp} °C melts the foam and the mousse collapses as it goes in.</p>
<p>Large batches? Emulsify part of the chocolate with a little aquafaba first, then fold in the rest of the foam. It keeps big runs homogeneous.</p>`,
      },
      {
        id: 'setting',
        title: 'Setting and storage',
        html: `<p>Pipe or spoon into cups straight away and chill for at least {set_time} hours. One batch fills {yield}. Made this way the mousse keeps {keep} days in the fridge.</p>
<p>The opened liquid pack sits on the same chilled shelving as the setting cups: mark the opening date on it, because it is used within {opened_days} days at {opened_temp} °C or below. Unopened, both formats keep at least {unopened_months} months at room temperature; opened powder only needs to stay dry and closed.</p>`,
      },
    ],
    faq: [
      { q: 'Why did the mousse collapse when I added the chocolate?', a: 'The chocolate was above {fold_temp} °C and melted the foam. Cool it to {fold_temp} °C or lower before folding, and have it ready before you whip.' },
      { q: 'Why is my mousse dense and heavy?', a: 'Over-folding knocked the air out. Fold the chocolate in by hand, quickly and lightly, and stop as soon as it is combined.' },
      { q: 'When does the sugar go in?', a: 'Only once the foam holds soft peaks, after about {whip} minutes, and then gradually while whipping until the peaks are glossy and stiff. Sugar added before soft peaks stops the foam from building.' },
      { q: 'How long does the mousse set and keep?', a: 'At least {set_time} hours in the fridge to set, and it keeps {keep} days made hygienically. Chill the cups straight after piping.' },
      { q: 'Does the powder follow the same sheet?', a: 'Yes. Make up {powder_dose} g of powder with {water_dose} ml of water ahead of time and chill it, then start at step 3. The rule per egg white: {white_powder} g of powder + {white_water} ml of water = {white_total} g of aquafaba, equivalent to the same mass of liquid aquafaba.' },
      { q: 'Can I send this sheet with a technical question?', a: 'Yes. Fill in your batch column, note what you saw, and describe it through our [contact form]({contact_href}) or the professional enquiry form on this page.' },
    ],
  },

  mayonnaise: {
    title: 'Vegan Mayo with Aquafaba: Process Sheet and Checks - VERY AQUAFABA',
    h1: 'Vegan mayo with aquafaba: process sheet and checks',
    description: 'A printable process sheet for the VERY AQUAFABA mayonnaise recipe: the cold emulsion step by step, with a column for your own batch and the checks to run when the emulsion fails.',
    lead: 'A printable sheet that follows the VERY AQUAFABA mayonnaise recipe step by step: {dose} g of chilled aquafaba, the mustard, salt and lemon, then {oil} g of oil in a thin, steady stream under high shear. A blank column for what you actually did, and below it the checks to run when the emulsion does not take.',
    powderNote: 'Powder: make up {powder_dose} g of VERY AQUAFABA powder with {water_dose} ml of cold water on a fine scale before step 1, or chill it to {chill} °C.',
    steps: [
      { step: 'Chill the aquafaba', reference: '{chill} °C' },
      { step: 'Combine aquafaba, mustard, salt and lemon juice or vinegar in a tall, narrow vessel', reference: '{dose} g, {mustard} g, {salt} g, {lemon} g' },
      { step: 'Start the stick blender at full speed', reference: 'High shear' },
      { step: 'Drizzle in the oil in a thin, steady stream', reference: '{oil} g, {oil_ratio} to the aquafaba' },
      { step: 'Once it thickens, taste and season', reference: 'Thickened' },
      { step: 'Too tight? Blend in a few grams of cold water', reference: 'Water, not more oil' },
      { step: 'Transfer to a clean container, refrigerate at once', reference: 'Keeps up to {keep} days' },
    ],
    checks: [
      { see: 'The emulsion never starts', check: 'Oil added too fast, or too little shear', fix: 'Thin, steady stream with the blender at full speed' },
      { see: 'Slow, unstable emulsion', check: 'Aquafaba too warm', fix: 'Use it at {chill} °C' },
      { see: 'Too thick to work', check: 'The emulsion tightened', fix: 'Blend in a few grams of cold water, not more oil' },
      { see: 'Unstable on large batches', check: 'Droplet size not controlled', fix: 'Move to a high-shear blender' },
      { see: 'Thin result from frozen stock', check: 'Thawed aquafaba came back thinner', fix: 'Stir until even. If still thin, reduce briefly over low heat' },
      { see: 'Shelf life shorter than {keep} days', check: 'Hygiene or a slow trip to the fridge', fix: 'Clean container, refrigerate immediately' },
    ],
    sections: [
      {
        id: 'before',
        title: 'Before you start: cold and clean',
        html: `<p>Here aquafaba stands in for the egg yolk, not the white. Nothing is whipped: it is a cold emulsion, built with shear. Two things are settled before the blender starts.</p>
<ul>
<li>Temperature. The VERY AQUAFABA liquid lives in the fridge once opened, so it is at blending temperature, {chill} °C, when you pour. Made-up powder is made with cold water or chilled to the same point.</li>
<li>The vessel. Tall and narrow, so the stick blender keeps the shear high. Weigh {dose} g of aquafaba, {mustard} g of mustard, {salt} g of salt and {lemon} g of lemon juice or vinegar into it.</li>
</ul>`,
      },
      {
        id: 'emulsion',
        title: 'Building the emulsion',
        html: `<p>Start the stick blender and drizzle in {oil} g of oil in a thin, steady stream. Keep the shear high so the emulsion takes. If it never starts, the oil went in too fast or the shear was too low. Once it thickens, taste and season. Too tight? Blend in a few grams of cold water, not more oil.</p>
<p>Large batches? Use a high-shear blender to control droplet size and keep the emulsion stable.</p>`,
      },
      {
        id: 'storage',
        title: 'Storage',
        html: `<p>Transfer to a clean container and refrigerate at once. Made hygienically, the mayo keeps up to {keep} days in the fridge; a shorter shelf life points to hygiene or a slow trip to the fridge. One batch makes {yield}.</p>
<p>The opened liquid pack stays in the fridge at {opened_temp} °C or below and is used within {opened_days} days. Unopened, both formats keep at least {unopened_months} months at room temperature; opened powder only needs to stay dry and closed.</p>`,
      },
    ],
    faq: [
      { q: 'Why does the emulsion never start?', a: 'The oil went in too fast, or the shear was too low. Drizzle the {oil} g in a thin, steady stream with the blender at full speed, in a tall, narrow vessel.' },
      { q: 'The mayo is too thick to work. What do I add?', a: 'A few grams of cold water, blended in. Not more oil: the emulsion tightened, and oil tightens it further.' },
      { q: 'Does the aquafaba need to be cold?', a: 'Yes, at {chill} °C. Warm aquafaba gives a slow, unstable emulsion. The opened pack lives in the fridge, so it pours at the right temperature.' },
      { q: 'How long does the mayo keep?', a: 'Up to {keep} days in the fridge when it is made hygienically and refrigerated at once in a clean container.' },
      { q: 'Does the powder follow the same sheet?', a: 'Yes. Make up {powder_dose} g of powder with {water_dose} ml of cold water on a fine scale and start at step 1. The rule per egg white: {white_powder} g of powder + {white_water} ml of water = {white_total} g of aquafaba, equivalent to the same mass of liquid aquafaba.' },
      { q: 'Can I send this sheet with a technical question?', a: 'Yes. Fill in your batch column, note what you saw, and describe it through our [contact form]({contact_href}) or the professional enquiry form on this page.' },
    ],
  },

  baking: {
    title: 'Aquafaba Baking Trial Sheet and Checks - VERY AQUAFABA',
    h1: 'Aquafaba in baking: trial sheet and checks',
    description: 'A printable sheet to run an egg substitution trial with VERY AQUAFABA in your own recipe: the equivalences, whipped or unwhipped, the adjustments, and the checks when a bake goes wrong.',
    lead: 'A printable sheet to replace the eggs of your own formula with VERY AQUAFABA and record the trial: {egg_liquid} g of liquid per whole egg, {white_liquid} g per egg white, whipped at {chill} °C when it stands in for whites, poured in as it is when it stands in for whole eggs. A blank column for what you actually did, and below it the checks to run when a bake does not come out right.',
    powderNote: 'Powder: {white_powder} g + {white_water} ml of water per egg white, {egg_powder} g + {egg_water} ml per whole egg. For whipped bakes, chill it to {chill} °C first; for doughs and batters it goes in as it is.',
    steps: [
      { step: 'Note the eggs of your formula', reference: 'Whole eggs, whites, yolks' },
      { step: 'Work out the aquafaba', reference: '{egg_liquid} g per whole egg, {white_liquid} g per egg white, {yolk_liquid} g + {yolk_oil} g oil per yolk' },
      { step: 'Decide whipped or unwhipped', reference: 'Whites: whipped. Whole eggs: as it is' },
      { step: 'Chill the aquafaba if it is whipped', reference: '{chill} °C' },
      { step: 'Whipped: fold in gently and promptly', reference: 'Sponges and génoise' },
      { step: 'Cakes, cookies and muffins: mix it with the sugar before the fat', reference: 'A more stable emulsion' },
      { step: 'Whole eggs swapped: reduce the milk or water slightly, or raise the dry ingredients', reference: 'Aquafaba carries more water than egg' },
      { step: 'Bake fully', reference: 'The extra water lengthens the bake' },
      { step: 'Note volume, crumb and moisture; re-check shelf life if you reformulated', reference: 'Water activity changes' },
    ],
    checks: [
      { see: 'Flat sponge', check: 'The foam stood waiting, or was folded too hard', fix: 'Fold in promptly and gently' },
      { see: 'Loose, wet batter', check: 'Whole eggs swapped one for one, water not reduced', fix: 'Reduce the milk or water slightly, or add dry ingredients' },
      { see: 'Wet centre', check: 'The extra water lengthens the bake', fix: 'Bake fully before you pull it' },
      { see: 'Weak foam', check: 'Aquafaba too warm', fix: 'Whip it at {chill} °C' },
      { see: 'Weak foam or binding from frozen stock', check: 'Thawed aquafaba came back thinner', fix: 'Reduce briefly over low heat. Never refreeze' },
      { see: 'Shelf life of the product has shifted', check: 'Changing moisture changes water activity', fix: 'Re-check shelf life and microbial stability after reformulating' },
    ],
    sections: [
      {
        id: 'before',
        title: 'Before the trial: what the egg does in your recipe',
        html: `<p>Aquafaba does three jobs in baking: it traps air, it binds, and it holds moisture. So it works in two ways. Whip it when it replaces egg whites. Pour it in as it is when it replaces the binding and moisture of whole eggs.</p>
<ul>
<li>Sponges and génoise: whipped at {chill} °C, then folded in gently and promptly. It brings the air.</li>
<li>Cakes, cookies and muffins: mixed with the sugar before it meets the fat, for a more stable emulsion.</li>
<li>High-sugar batters: whipped with part of the sugar first, then combined with the fats, for volume that lasts through the bake.</li>
<li>Cookies and brownies: added directly, unwhipped, for binding and moisture.</li>
<li>Brioche and sweet rolls: unwhipped, with the liquids of the dough, for softness and keeping quality.</li>
</ul>`,
      },
      {
        id: 'dose',
        title: 'The dose and the adjustment',
        html: `<p>Weigh {egg_liquid} g of VERY AQUAFABA liquid per whole egg or {white_liquid} g per egg white, straight from the pack. For a yolk, {yolk_liquid} g of aquafaba plus {yolk_oil} g of oil. In powder, {white_powder} g + {white_water} ml of water per egg white and {egg_powder} g + {egg_water} ml per whole egg.</p>
<p>Replacing whole eggs? Aquafaba carries more water than egg. Reduce the milk or water slightly, or raise the dry ingredients, and bake fully. Replacing only the whites, as in meringues or macarons, normally needs no adjustment.</p>`,
      },
      {
        id: 'after',
        title: 'After the bake: what to record',
        html: `<p>Note the volume, the crumb and the moisture against your usual result, and keep the sheet with the formula. If you changed the moisture of the recipe, re-check its shelf life and microbial stability: changing moisture changes water activity.</p>
<p>The opened liquid pack stays in the fridge at {opened_temp} °C or below and is used within {opened_days} days; a 1 L Tetrapak replaces {eggs_1l} whole eggs or {whites_1l} egg whites. Unopened, both formats keep at least {unopened_months} months at room temperature; opened powder only needs to stay dry and closed.</p>`,
      },
    ],
    faq: [
      { q: 'Why did my sponge come out flat?', a: 'The foam stood waiting, or was folded too hard. Whip the aquafaba at {chill} °C and fold it in promptly and gently.' },
      { q: 'Why is the batter loose and wet?', a: 'Whole eggs were swapped one for one and the water was not reduced. Reduce the milk or water slightly, or add dry ingredients, and bake fully.' },
      { q: 'The centre is wet. What do I check?', a: 'The bake time: the extra water aquafaba brings lengthens the bake. Bake fully before you pull it.' },
      { q: 'Do I have to whip it?', a: 'Only when it replaces egg whites. When it replaces the binding and moisture of whole eggs, in cookies, brownies and doughs, it goes in unwhipped.' },
      { q: 'Does the powder follow the same sheet?', a: 'Yes. {white_powder} g of powder + {white_water} ml of water = {white_total} g of aquafaba, equivalent to the same mass of liquid aquafaba. For whipped bakes chill it to {chill} °C first; for doughs and batters it goes in as it is.' },
      { q: 'Can I send this sheet with a technical question?', a: 'Yes. Fill in your batch column, note what you saw, and describe it through our [contact form]({contact_href}) or the professional enquiry form on this page.' },
    ],
  },

  cocktails: {
    title: 'Aquafaba Sour Service Sheet and Foam Checks - VERY AQUAFABA',
    h1: 'Aquafaba sours: service sheet and foam checks',
    description: 'A printable service sheet for the VERY AQUAFABA whiskey sour: the build, the dry shake and the shake with ice, with a column for your own drinks and the checks to run when the foam falls flat.',
    lead: 'A printable sheet that follows the VERY AQUAFABA whiskey sour step by step: the build without ice with {dose} g of chilled aquafaba, the dry shake of {dry_shake} seconds and the shake with ice of {wet_shake} seconds. A blank column for what you actually did, and below it the checks to run when the foam falls flat.',
    powderNote: 'Powder: for one drink, {powder_dose} g of VERY AQUAFABA powder + {water_dose} ml of water. Make it up before service and chill it; cold aquafaba foams faster and holds longer.',
    steps: [
      { step: 'Build without ice', reference: '{whiskey} ml whiskey, {lemon_juice} ml lemon juice, {syrup} ml simple syrup, {dose} g chilled aquafaba' },
      { step: 'Dry shake hard', reference: '{dry_shake} s' },
      { step: 'Add ice and shake again', reference: '{wet_shake} s' },
      { step: 'Fine strain into a chilled coupe', reference: 'Serve at once' },
      { step: 'Garnish', reference: 'A few drops of bitters on the head' },
    ],
    checks: [
      { see: 'Thin head', check: 'Ice went in from the start', fix: 'Dry shake first, ice second' },
      { see: 'Slow, slack foam', check: 'Aquafaba at room temperature', fix: 'Keep it chilled until the shake' },
      { see: 'No height by mid-service', check: 'Aquafaba was added to the pre-batch', fix: 'Batch the base only, add aquafaba per drink' },
      { see: 'Foam drops before it reaches the guest', check: 'The drink waited on the pass', fix: 'Shake to order and serve at once' },
      { see: 'Uneven from drink to drink', check: 'Free pouring', fix: 'Weigh or jigger {dose} g every time' },
    ],
    sections: [
      {
        id: 'before',
        title: 'Before service: the station',
        html: `<p>Nothing changes in your recipe except one ingredient: aquafaba replaces the egg white. Two things are settled before the first order.</p>
<ul>
<li>Cold. The VERY AQUAFABA liquid goes from the fridge into the tin; it is closed and put back in the fridge between services. Made-up powder is chilled the same way: cold aquafaba foams faster and holds longer.</li>
<li>The pre-batch. Busy service? Pre-batch the whiskey, lemon and syrup. Add the aquafaba at the shake, never in the batch.</li>
</ul>`,
      },
      {
        id: 'shake',
        title: 'The two shakes',
        html: `<p>Build without ice: {whiskey} ml of whiskey, {lemon_juice} ml of fresh lemon juice, {syrup} ml of simple syrup and {dose} g of chilled aquafaba. Dry shake hard for {dry_shake} seconds: this is where the foam is made. Add ice and shake another {wet_shake} seconds to chill and dilute. Fine strain into a chilled coupe; the head is firm enough to carry a few drops of bitters.</p>
<p>Weigh or jigger {dose} g every time. Free pouring is what makes drinks uneven.</p>`,
      },
      {
        id: 'storage',
        title: 'Between services',
        html: `<p>The opened liquid pack stays closed in the fridge at {opened_temp} °C or below and is used within {opened_days} days; a 1 L Tetrapak makes {batches_1l} sours. Opened powder keeps as long as the pouch stays dry and sealed. Unopened, both formats keep at least {unopened_months} months at room temperature.</p>`,
      },
    ],
    faq: [
      { q: 'Why is the head thin?', a: 'Ice went in from the start. Dry shake first, for {dry_shake} seconds, then add ice and shake another {wet_shake} seconds.' },
      { q: 'Why does the foam go slack by mid-service?', a: 'The aquafaba was added to the pre-batch. Batch the whiskey, lemon and syrup only, and add {dose} g of aquafaba per drink at the shake.' },
      { q: 'Does the drink have to be served at once?', a: 'Yes. Shake to order and serve at once: a drink that waits on the pass loses its foam before it reaches the guest.' },
      { q: 'Why are the drinks uneven?', a: 'Free pouring. Weigh or jigger {dose} g of aquafaba every time.' },
      { q: 'Does the powder follow the same sheet?', a: 'Yes. Make up {powder_dose} g of powder with {water_dose} ml of water per drink before service and chill it. The rule per egg white: {white_powder} g of powder + {white_water} ml of water = {white_total} g of aquafaba, equivalent to the same mass of liquid aquafaba.' },
      { q: 'Can I send this sheet with a technical question?', a: 'Yes. Fill in your column, note what you saw, and describe it through our [contact form]({contact_href}) or the professional enquiry form on this page.' },
    ],
  },

  macarons: {
    title: 'Aquafaba Macaron Process Sheet and Checks - VERY AQUAFABA',
    h1: 'Aquafaba macarons: process sheet and checks',
    description: 'A printable process sheet for the VERY AQUAFABA macaron recipe: whipping, the fold to the ribbon, the rest, the bake and the maturing, with a column for your own batch and the checks when shells fail.',
    lead: 'A printable sheet that follows the VERY AQUAFABA macaron recipe step by step: {dose} g of aquafaba whipped with {sugar} g of caster sugar, the fold with {almond} g of almond flour and {icing_sugar} g of icing sugar, the rest, the bake at {bake} °C for {bake_time} minutes and the {mature} hours of maturing. A blank column for what you actually did, and below it the checks to run when the shells go wrong.',
    powderNote: 'Powder: make up {powder_dose} g of VERY AQUAFABA powder with {water_dose} ml of water and chill it before step 2. Cold aquafaba whips faster into a more stable foam.',
    steps: [
      { step: 'Sift the almond flour and icing sugar together; line the trays', reference: '{almond} g, {icing_sugar} g' },
      { step: 'Whip the chilled aquafaba on high speed to soft peaks', reference: '{dose} g' },
      { step: 'Add the cream of tartar, then the caster sugar gradually, to glossy stiff peaks', reference: '{sugar} g' },
      { step: 'Fold the dry mix in three additions', reference: 'Stop at thick, slow ribbons' },
      { step: 'Pipe rounds onto parchment, evenly spaced', reference: '3 to 4 cm' },
      { step: 'Rest at room temperature until a dry skin forms', reference: '{rest} min, depending on humidity' },
      { step: 'Bake with the fan off', reference: '{bake} °C, {bake_time} min' },
      { step: 'Cool fully on the tray before handling', reference: 'Fully cooled' },
      { step: 'Pair, fill and refrigerate before serving', reference: '{mature} h' },
    ],
    checks: [
      { see: 'Foam will not reach volume', check: 'Grease on the bowl or whisk', fix: 'Degrease everything before you start' },
      { see: 'Meringue deflates before piping', check: 'It stood while the dry mix or trays were prepared', fix: 'Sift and line the trays first, whip last' },
      { see: 'Shells lose their lift', check: 'Folded past the ribbon stage, or folded roughly', fix: 'Stop at thick, slow ribbons' },
      { see: 'No skin after resting', check: 'Humid room', fix: 'Rest longer and judge by touch, not the clock' },
      { see: 'Shells weep in storage', check: 'Sugar not fully dissolved', fix: 'Add the caster sugar gradually' },
      { see: 'Shells soften in storage', check: 'Shells pull moisture from the air', fix: 'Store in a low-humidity place' },
      { see: 'Shells vary from batch to batch', check: 'Aquafaba concentration drifted', fix: 'Hold {concentration} g/ml on industrial batches' },
    ],
    sections: [
      {
        id: 'before',
        title: 'Before you whip: everything else first',
        html: `<p>Aquafaba replaces the egg whites only, so the almond flour, icing sugar and caster sugar of your formula stay as they are. The foam has to survive two steps, the fold and the rest, so timing matters more than the whipping itself.</p>
<ul>
<li>Sift {almond} g of almond flour and {icing_sugar} g of icing sugar together and set aside. Line the trays now. A meringue that stands while the dry mix or the trays are prepared deflates before piping.</li>
<li>Weigh {dose} g of VERY AQUAFABA liquid cold, from the opened pack in the fridge, into a clean, grease-free bowl. Made-up powder is chilled the same way.</li>
<li>Weigh {sugar} g of caster sugar and the cream of tartar.</li>
</ul>`,
      },
      {
        id: 'whipping',
        title: 'Whipping, folding, piping and resting',
        html: `<p>Whip the aquafaba on high speed to soft peaks. Add the cream of tartar, then the {sugar} g of caster sugar gradually, to glossy stiff peaks. Fold the dry mix in three additions and stop when the batter runs off the spatula in thick, slow ribbons: folded past that point, or folded roughly, the shells lose their lift.</p>
<p>Pipe 3 to 4 cm rounds onto parchment, evenly spaced. Rest at room temperature until a dry skin forms: {rest} minutes, depending on humidity. In a humid room, rest longer and judge by touch, not the clock.</p>
<p>Running industrial batches? Hold the aquafaba concentration at {concentration} g/ml for shells that match from run to run.</p>`,
      },
      {
        id: 'baking',
        title: 'Baking, maturing and storage',
        html: `<p>Bake at {bake} °C, fan off, for {bake_time} minutes. Cool fully on the tray before handling. Pair, fill and refrigerate for {mature} hours before serving, so the texture develops. One batch makes {yield}.</p>
<p>Shells pull moisture from the air and soften, so store them in a low-humidity place. The opened liquid pack shares the fridge with the maturing macarons: mark the opening date on it, because it is used within {opened_days} days at {opened_temp} °C or below. Unopened, both formats keep at least {unopened_months} months at room temperature.</p>`,
      },
    ],
    faq: [
      { q: 'Why did the meringue deflate before piping?', a: 'It stood while the dry mix or the trays were prepared. Sift the almond flour and icing sugar and line the trays first, and whip last.' },
      { q: 'Why did the shells lose their lift?', a: 'The batter was folded past the ribbon stage, or folded roughly. Fold in three additions and stop when it runs off the spatula in thick, slow ribbons.' },
      { q: 'No skin has formed after resting. What do I do?', a: 'The room is humid. Rest longer, beyond the {rest} minutes of the reference, and judge by touch, not the clock.' },
      { q: 'Why do the shells vary from batch to batch?', a: 'The aquafaba concentration drifted. On industrial batches hold it at {concentration} g/ml.' },
      { q: 'Does the powder follow the same sheet?', a: 'Yes. Make up {powder_dose} g of powder with {water_dose} ml of water, chill it and start at step 2. The rule per egg white: {white_powder} g of powder + {white_water} ml of water = {white_total} g of aquafaba, equivalent to the same mass of liquid aquafaba.' },
      { q: 'Can I send this sheet with a technical question?', a: 'Yes. Fill in your batch column, note what you saw, and describe it through our [contact form]({contact_href}) or the professional enquiry form on this page.' },
    ],
  },
};
