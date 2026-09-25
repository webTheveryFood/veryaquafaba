// Process sheet pages, English. One entry per application. The sheet (steps with their
// reference value and a blank column) and the checks table are rendered by the template;
// this module carries the steps, the checks and the copy. Every figure is a {token}
// filled from facts.json; no em/en dash. Steps, causes and fixes are the guide's own
// method and troubleshooting rows, nothing is added from outside the sources.
export default {
  meringue: {
    title: 'How to Make Aquafaba Meringue: Step by Step - VERY AQUAFABA',
    h1: 'How to make aquafaba meringue: the step-by-step sheet',
    description: 'A printable process sheet for the VERY AQUAFABA meringue recipe: each step with the value to hit, a column for your batch and the checks when a tray goes wrong.',
    lead: "Meringue is a recipe where the difference between a good tray and a sticky one is a few degrees and a few minutes. This sheet is how you catch them: the VERY AQUAFABA meringue recipe as a checklist you print, fill in as you go, and keep.",
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
        id: 'use',
        title: 'How to use this sheet',
        html: `<p>Print one per batch and keep it next to the mixer, with the <a href="{recipe_href}">full meringue recipe</a> at hand if you need the method in detail. As you go, write what you actually did in the last column: the temperature the aquafaba went in at, how long it took to reach soft peaks, how long the tray stayed in the oven. Most of the time it will match the reference. When it doesn't, you have the reason on paper before anyone tastes a meringue.</p>
<p>Keep the filled-in sheets. A batch that failed is worth as much as one that worked, because the next baker starts from what you learned rather than finding it out again. And if a batch goes wrong and you can't see why, send us the sheet: it is the fastest way for us to help.</p>`,
      },
      {
        id: 'before',
        title: 'Before you whip aquafaba for meringue',
        html: `<p>Three things settle most meringue batches before the mixer turns on:</p>
<ul>
<li>The aquafaba is cold, straight from the fridge at {chill} °C. Made-up powder is chilled to the same point.</li>
<li>The bowl and the whisk are wiped clean. Aquafaba foam has no fat of its own, and a film of grease holds the volume short.</li>
<li>The {sugar} g of caster sugar is weighed and within reach, because it goes in one spoonful at a time and you will not want to stop to weigh it.</li>
</ul>`,
      },
      {
        id: 'look',
        title: 'How to tell each step is going right',
        html: `<p>The sheet gives you the value to hit. This is how you know you have hit it, step by step:</p>
<ul>
<li><strong>Step 3, soft peaks.</strong> Lift the whisk: the foam holds a shape, but the tip bends over. For the reference batch that comes at about {whip} minutes on high speed. A fuller bowl takes longer, so trust the peak, not the clock.</li>
<li><strong>Step 5, the sugar.</strong> Each spoonful disappears into the foam before the next goes in. If you can feel grains against the side of the bowl, wait. Sugar that has not dissolved is what weeps out of the finished meringue in storage.</li>
<li><strong>Step 6, stiff peaks.</strong> The peak stands straight when you lift the whisk and the foam is glossy. It comes with the last of the sugar. That is your signal to pipe, not to leave the bowl for a minute.</li>
<li><strong>Step 7, piping.</strong> Rounds of 3 to 4 cm on parchment, evenly spaced. Aquafaba foam holds less well than egg white foam, so the bowl that waits while another whips loses volume.</li>
<li><strong>Step 8, drying.</strong> At {bake} °C with the fan off, the meringues are not baking, they are drying. They are done when they are dry all the way through, at about {bake_time} hours for this size; larger shapes need longer. A sticky centre means they came out too soon.</li>
<li><strong>Step 9, cooling.</strong> Fully cold on the tray before they are moved, then into an airtight container with a desiccant pouch if you have one. Meringue pulls moisture from the air, so the container matters as much as the oven.</li>
</ul>
<p>On industrial batches, hold the aquafaba concentration at {concentration} g/ml so the foam behaves the same on every run.</p>`,
      },
    ],
    faq: [
      { q: 'How do I know the foam has reached stiff peaks?', a: 'Lift the whisk: the peak stands straight without bending over and the foam is glossy. The reference batch reaches soft peaks in {whip} minutes; the sugar goes in after that, and the stiff peak comes with the last of the sugar.' },
      { q: 'Can I hold the whipped foam while the oven is busy?', a: 'No. Pipe and dry straight after stiff peaks. If the oven is full, whip the next bowl later rather than letting a finished bowl stand.' },
      { q: 'The meringues are sticky inside. What do I check?', a: 'The drying step: {bake} °C with the fan off for the full {bake_time} hours, until dry through, then a complete cool on the tray. Larger shapes than 3 to 4 cm need longer than the reference time.' },
      { q: 'Does the powder follow the same sheet?', a: 'Yes. Make up {powder_dose} g of powder with {water_dose} ml of water, chill it to {chill} °C and start at step 1. The rule per egg white: {white_powder} g of powder + {white_water} ml of water = {white_total} g of aquafaba, equivalent to the same mass of liquid aquafaba.' },
      { q: 'Can I send this sheet with a technical question?', a: 'Yes. Fill in your batch column, note what you saw, and describe it through our [contact form]({contact_href}) or the professional enquiry form on this page. The filled-in sheet is the fastest way for us to help.' },
    ],
  },

  'chocolate-mousse': {
    title: 'Aquafaba Chocolate Mousse, Step by Step - VERY AQUAFABA',
    h1: 'How to make aquafaba chocolate mousse: the step-by-step sheet',
    description: 'A printable process sheet for the VERY AQUAFABA chocolate mousse: chocolate temperatures, whipping, folding and setting, a column for your batch and the checks.',
    lead: "Chocolate mousse is a recipe of two temperatures, and the mousse only holds if the chocolate meets the foam at the right one. This sheet is how you make sure it does: the VERY AQUAFABA mousse recipe as a checklist you print, fill in as you go, and keep.",
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
        id: 'use',
        title: 'How to use this sheet',
        html: `<p>Print one per batch and keep it by the mixer, with the <a href="{recipe_href}">full chocolate mousse recipe</a> at hand if you need the method in detail. As you go, write what you actually did in the last column: the temperature of the chocolate when you folded it in, how long the foam took to reach stiff peaks, how long the cups set. When a mousse comes out heavy or collapses, the reason is usually on that sheet.</p>
<p>Keep the filled-in sheets. The next person to make the mousse starts from what worked, and if a batch goes wrong and you can't see why, send us the sheet: it is the fastest way for us to help.</p>`,
      },
      {
        id: 'before',
        title: 'Before you whip aquafaba for mousse',
        html: `<p>Three things settle most batches before the whisk turns:</p>
<ul>
<li>The chocolate is melted, and it is already cooling. It has to reach {fold_temp} °C before it meets the foam, and the foam must not wait for it.</li>
<li>The aquafaba is cold, straight from the fridge. Made-up powder is chilled to the same point.</li>
<li>The bowl and the whisk are wiped clean, and the {sugar} g of sugar is weighed and within reach.</li>
</ul>`,
      },
      {
        id: 'look',
        title: 'How to tell each step is going right',
        html: `<p>The sheet gives you the value to hit. This is how you know you have hit it:</p>
<ul>
<li><strong>Step 1, melting.</strong> Smooth and fluid at 45 to 50 °C, over a bain-marie or in a tempering machine. No grains, no scorching at the edges.</li>
<li><strong>Step 2, cooling.</strong> A thermometer says {fold_temp} °C. Warmer than that and the chocolate melts the foam as it goes in; that is the collapse you see on the first fold.</li>
<li><strong>Step 4, soft peaks.</strong> Lift the whisk: the foam holds a shape and the tip bends over, after about {whip} minutes for the reference batch. A fuller bowl takes longer.</li>
<li><strong>Step 6, stiff peaks.</strong> Glossy, dense, and the peak stands straight. The meringue should feel firm on the spatula before any chocolate touches it.</li>
<li><strong>Step 7, folding.</strong> By hand, quick and light, and you stop the moment the colour is even. Every extra turn of the spatula costs air, and a dense mousse is the sign of too many.</li>
<li><strong>Step 9, setting.</strong> Piped or spooned straight away, then at least {set_time} hours in the fridge. It holds its shape when the cup is tilted. In sealed packaging it keeps {keep} days.</li>
</ul>
<p>On large batches, emulsify part of the chocolate with a little aquafaba first, then fold in the rest of the foam. It keeps big runs homogeneous.</p>`,
      },
    ],
    faq: [
      { q: 'When does the sugar go in?', a: 'Only once the foam holds soft peaks, after about {whip} minutes, and then gradually while whipping until the peaks are glossy and stiff. Sugar added before soft peaks stops the foam from building.' },
      { q: 'How long does the mousse set and keep?', a: 'At least {set_time} hours in the fridge to set, and it keeps {keep} days made hygienically. Chill the cups straight after piping.' },
      { q: 'Does the powder follow the same sheet?', a: 'Yes. Make up {powder_dose} g of powder with {water_dose} ml of water ahead of time and chill it, then start at step 3. The rule per egg white: {white_powder} g of powder + {white_water} ml of water = {white_total} g of aquafaba, equivalent to the same mass of liquid aquafaba.' },
      { q: 'Can I send this sheet with a technical question?', a: 'Yes. Fill in your batch column, note what you saw, and describe it through our [contact form]({contact_href}) or the professional enquiry form on this page.' },
    ],
  },

  mayonnaise: {
    title: 'Vegan Mayo with Aquafaba, Step by Step - VERY AQUAFABA',
    h1: 'How to make vegan mayo with aquafaba: the step-by-step sheet',
    description: 'A printable process sheet for the VERY AQUAFABA mayonnaise recipe: the cold emulsion step by step, a column for your own batch and the checks when it fails.',
    lead: "A mayonnaise either takes or it doesn't, and by the time you can tell, the oil is already in. This sheet is how you get it to take every time: the VERY AQUAFABA vegan mayo recipe as a checklist you print, fill in as you go, and keep.",
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
        id: 'use',
        title: 'How to use this sheet',
        html: `<p>Print one per batch and keep it at the sauce station, with the <a href="{recipe_href}">full mayonnaise recipe</a> at hand if you need the method in detail. As you go, write what you actually did in the last column: the temperature of the aquafaba, how fast the oil went in, when it thickened, when it went into the fridge. When an emulsion breaks, the reason is nearly always one of those.</p>
<p>Keep the filled-in sheets. They tell the next cook what worked on your blender with your oil, and if a batch goes wrong and you can't see why, send us the sheet: it is the fastest way for us to help.</p>`,
      },
      {
        id: 'before',
        title: 'Before you blend aquafaba into mayonnaise',
        html: `<p>Three things settle most batches before the blender starts:</p>
<ul>
<li>The aquafaba is at {chill} °C. Warm aquafaba gives a slow, unstable emulsion, and made-up powder is chilled to the same point.</li>
<li>The vessel is tall and narrow, so the head of the stick blender stays under the surface and the shear stays high.</li>
<li>The {oil} g of oil is measured and ready to pour in a thin, steady stream. Stopping to measure mid-stream is how an emulsion breaks.</li>
</ul>`,
      },
      {
        id: 'look',
        title: 'How to tell each step is going right',
        html: `<p>The sheet gives you the value to hit. This is how you know you have hit it:</p>
<ul>
<li><strong>Step 2, the base.</strong> Aquafaba, mustard, salt and acid are one smooth liquid at the bottom of the vessel before any oil goes in.</li>
<li><strong>Step 4, the oil.</strong> A thin, steady stream with the blender at full speed. Within the first spoonfuls the base turns pale and starts to thicken; that is the emulsion taking. If it stays thin and the oil pools on top, stop pouring and blend until it catches before adding more.</li>
<li><strong>Step 5, thickened.</strong> It holds a soft peak on the spatula and the surface stays where you leave it. Taste, then season.</li>
<li><strong>Step 6, too tight.</strong> If it stiffens to a paste, a few grams of cold water bring it back. More oil makes it worse.</li>
<li><strong>Step 7, into the fridge.</strong> A clean container, lid on, chilled at once. The {keep} days start there, and only under hygienic conditions.</li>
</ul>
<p>On large batches, move to a high-shear blender. Droplet size is what keeps a big emulsion stable.</p>`,
      },
    ],
    faq: [
      { q: 'Does the aquafaba need to be cold?', a: 'Yes, at {chill} °C. Warm aquafaba gives a slow, unstable emulsion. The opened pack lives in the fridge, so it pours at the right temperature.' },
      { q: 'How long does the mayo keep?', a: 'Up to {keep} days in the fridge when it is made hygienically and refrigerated at once in a clean container.' },
      { q: 'Does the powder follow the same sheet?', a: 'Yes. Make up {powder_dose} g of powder with {water_dose} ml of cold water on a fine scale and start at step 1. The rule per egg white: {white_powder} g of powder + {white_water} ml of water = {white_total} g of aquafaba, equivalent to the same mass of liquid aquafaba.' },
      { q: 'Can I send this sheet with a technical question?', a: 'Yes. Fill in your batch column, note what you saw, and describe it through our [contact form]({contact_href}) or the professional enquiry form on this page.' },
    ],
  },

  baking: {
    title: 'Replacing Eggs with Aquafaba in Baking - VERY AQUAFABA',
    h1: 'How to replace eggs with aquafaba in baking: the trial sheet',
    description: 'A printable sheet for an egg substitution trial with VERY AQUAFABA in your own recipe: the equivalences, the adjustments and the checks when a bake goes wrong.',
    lead: "Replacing the eggs in a bake is a small change that touches everything around it: the water, the bake time, the crumb. This sheet is how you keep track of what you changed and what it did: one trial per sheet, filled in as you go, and kept for the next one.",
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
        id: 'use',
        title: 'How to use this sheet',
        html: `<p>Print one per trial, one recipe at a time, with the <a href="{recipe_href}">baking guide</a> at hand for the method behind each step. Write your recipe's eggs at the top, then fill in the last column as you go: how much aquafaba went in and whether it was whipped, what you took out of the liquids, how long the bake ran, and what the crumb looked like when it was cool. That column is the difference between a trial you can repeat and one you have to run again.</p>
<p>Keep the filled-in sheets, the failed ones especially. And if a bake comes out wrong and you can't see why, send us the sheet: it is the fastest way for us to help.</p>`,
      },
      {
        id: 'before',
        title: 'Before you swap the eggs',
        html: `<p>Three things decide the trial before the oven is on:</p>
<ul>
<li>Which eggs you are replacing. Whites only is a direct swap. Whole eggs bring extra water. Yolks need the {yolk_oil} g of oil.</li>
<li>Whipped or poured. Aquafaba is whipped, at {chill} °C, when it stands in for whites in a sponge or a high-sugar batter. It goes in as it is when it stands in for the binding and moisture of whole eggs.</li>
<li>Only the egg changes. Same flour, same mixing, same oven, or you will not know what the aquafaba did.</li>
</ul>`,
      },
      {
        id: 'look',
        title: 'How to tell each step is going right',
        html: `<p>The sheet gives you the value to hit. This is how you know you have hit it:</p>
<ul>
<li><strong>Step 2, the aquafaba.</strong> {egg_liquid} g per whole egg, {white_liquid} g per egg white, weighed. In powder, {white_powder} g and {white_water} ml of water per egg white.</li>
<li><strong>Step 5, whipped and folded.</strong> The foam goes in as soon as it is ready, folded gently until the streaks are gone and no longer. A sponge that comes out flat stood too long or was folded too hard.</li>
<li><strong>Step 7, the water.</strong> Whole eggs swapped, so the milk or water comes down slightly, or the dry ingredients go up. The batter should look the way it did with eggs, not looser.</li>
<li><strong>Step 8, the bake.</strong> The extra water means a longer bake. A skewer comes out clean; a wet centre means it came out too soon.</li>
<li><strong>Step 9, the notes.</strong> Volume, crumb and moisture, written down while the bake is in front of you. If you changed the moisture, the shelf life of the product may have moved with it, so re-check it.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'The centre is wet. What do I check?', a: 'The bake time: the extra water aquafaba brings lengthens the bake. Bake fully before you pull it.' },
      { q: 'Do I have to whip it?', a: 'Only when it replaces egg whites. When it replaces the binding and moisture of whole eggs, in cookies, brownies and doughs, it goes in unwhipped.' },
      { q: 'Does the powder follow the same sheet?', a: 'Yes. {white_powder} g of powder + {white_water} ml of water = {white_total} g of aquafaba, equivalent to the same mass of liquid aquafaba. For whipped bakes chill it to {chill} °C first; for doughs and batters it goes in as it is.' },
      { q: 'Can I send this sheet with a technical question?', a: 'Yes. Fill in your batch column, note what you saw, and describe it through our [contact form]({contact_href}) or the professional enquiry form on this page.' },
    ],
  },

  cocktails: {
    title: 'How to Shake an Aquafaba Sour: Step by Step - VERY AQUAFABA',
    h1: 'How to shake an aquafaba sour: the step-by-step sheet',
    description: 'A printable service sheet for the VERY AQUAFABA whiskey sour: the build, the dry shake and the shake with ice, plus the checks to run when the foam falls flat.',
    lead: "A sour is a thirty-second drink, and the foam is decided in the first fifteen. This sheet is how the whole team shakes it the same way: the VERY AQUAFABA whiskey sour as a checklist for the station, filled in on the nights when the head is not what it should be.",
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
        id: 'use',
        title: 'How to use this sheet',
        html: `<p>Print it and put it in the bar book, with the <a href="{recipe_href}">full whiskey sour recipe</a> at hand for the build. Most nights the column stays empty. On the night the head is thin or drops early, fill it in: was the aquafaba cold, did the dry shake come first, was it weighed, did the drink wait on the pass. One filled-in sheet usually points at the cause.</p>
<p>Keep the sheets with the bar book, so that a new bartender shakes the sour the way the bar shakes it. And if the foam is still not what it should be and you can't see why, send us the sheet: it is the fastest way for us to help.</p>`,
      },
      {
        id: 'before',
        title: 'Before service',
        html: `<p>Three things settle the sour before the first order:</p>
<ul>
<li>The aquafaba is in the fridge, and it goes back there between services. Made-up powder is chilled the same way; cold aquafaba foams faster and holds longer.</li>
<li>The base is pre-batched if the night is busy: whiskey, lemon and syrup. The aquafaba is never in it.</li>
<li>A jigger or a scale is at the station. {dose} g per drink, every drink.</li>
</ul>`,
      },
      {
        id: 'look',
        title: 'How to tell each step is going right',
        html: `<p>The sheet gives you the value to hit. This is how you know you have hit it:</p>
<ul>
<li><strong>Step 1, the build.</strong> No ice in the tin. {whiskey} ml of whiskey, {lemon_juice} ml of lemon juice, {syrup} ml of simple syrup and {dose} g of aquafaba, cold.</li>
<li><strong>Step 2, the dry shake.</strong> {dry_shake} seconds, hard. When you open the tin the liquid has turned pale and thick; that is the foam, and it is made here or not at all.</li>
<li><strong>Step 3, with ice.</strong> {wet_shake} seconds more. The tin frosts on the outside. This shake chills and dilutes; it does not make foam.</li>
<li><strong>Step 4, the strain.</strong> Fine strained into a chilled coupe, the head rises on its own and sits firm. It goes out at once; a drink that waits on the pass loses its head on the way.</li>
<li><strong>Step 5, the garnish.</strong> A few drops of bitters sit on the foam without sinking. If they sink, the head is not firm enough, and the answer is in steps 1 and 2.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'Does the drink have to be served at once?', a: 'Yes. Shake to order and serve at once: a drink that waits on the pass loses its foam before it reaches the guest.' },
      { q: 'How long does an opened carton last behind the bar?', a: 'Opened liquid is kept at 4 °C or below and used within {opened_days} days. Write the opening date on the carton and pour from it for the service, not from the bottle well.' },
      { q: 'Does the powder follow the same sheet?', a: 'Yes. Make up {powder_dose} g of powder with {water_dose} ml of water per drink before service and chill it. The rule per egg white: {white_powder} g of powder + {white_water} ml of water = {white_total} g of aquafaba, equivalent to the same mass of liquid aquafaba.' },
      { q: 'Can I send this sheet with a technical question?', a: 'Yes. Fill in your column, note what you saw, and describe it through our [contact form]({contact_href}) or the professional enquiry form on this page.' },
    ],
  },

  macarons: {
    title: 'How to Make Aquafaba Macarons: Step by Step - VERY AQUAFABA',
    h1: 'How to make aquafaba macarons: the step-by-step sheet',
    description: 'A printable process sheet for the VERY AQUAFABA macaron recipe: whipping, the fold, the rest, the bake and the maturing, a column for your batch and the checks.',
    lead: "Macaron shells are decided in the minutes between the whisk stopping and the tray going in. This sheet is how you keep those minutes under control: the VERY AQUAFABA macaron recipe as a checklist you print, fill in as you go, and keep.",
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
        id: 'use',
        title: 'How to use this sheet',
        html: `<p>Print one per batch and keep it by the mixer, with the <a href="{recipe_href}">full macaron recipe</a> at hand if you need the method in detail. As you go, write what you actually did in the last column: how long the meringue took, how many folds, how long the shells rested and what the room was like, how long the tray baked. Macarons fail for small reasons, and this is where you find them.</p>
<p>Keep the filled-in sheets. Humidity changes from one day to the next, and the sheets from a damp week are worth more than any rule. If a batch goes wrong and you can't see why, send us the sheet: it is the fastest way for us to help.</p>`,
      },
      {
        id: 'before',
        title: 'Before you whip aquafaba for macarons',
        html: `<p>Three things settle most batches before the whisk turns:</p>
<ul>
<li>The almond flour and the icing sugar are sifted together and the trays are lined. The foam must not wait while you do it.</li>
<li>The aquafaba is cold, straight from the fridge. Made-up powder is chilled to the same point.</li>
<li>The bowl and the whisk are wiped clean, and the {sugar} g of caster sugar is weighed and within reach.</li>
</ul>`,
      },
      {
        id: 'look',
        title: 'How to tell each step is going right',
        html: `<p>The sheet gives you the value to hit. This is how you know you have hit it:</p>
<ul>
<li><strong>Step 3, stiff peaks.</strong> Glossy, and the peak stands straight when you lift the whisk. The sugar went in gradually, after soft peaks; sugar that did not dissolve is what weeps out of the shells later.</li>
<li><strong>Step 4, the fold.</strong> Three additions, and you stop when the batter runs off the spatula in a thick, slow ribbon. Past that point the shells lose their lift.</li>
<li><strong>Step 5, piping.</strong> Rounds of 3 to 4 cm, evenly spaced, and the batter settles flat without spreading.</li>
<li><strong>Step 6, the rest.</strong> A dry skin that does not stick to a light finger. It takes {rest} minutes in a dry room and longer in a damp one; judge by touch, not by the clock.</li>
<li><strong>Step 7, the bake.</strong> {bake} °C with the fan off, {bake_time} minutes per tray. The shells lift off the parchment cleanly once fully cooled.</li>
<li><strong>Step 9, maturing.</strong> Paired, filled and refrigerated for {mature} hours before serving, so the shell and the filling come together.</li>
</ul>
<p>On industrial batches, hold the aquafaba concentration at {concentration} g/ml for shells that match from run to run.</p>`,
      },
    ],
    faq: [
      { q: 'No skin has formed after resting. What do I do?', a: 'The room is humid. Rest longer, beyond the {rest} minutes of the reference, and judge by touch, not the clock.' },
      { q: 'Why do the shells vary from batch to batch?', a: 'The aquafaba concentration drifted. On industrial batches hold it at {concentration} g/ml.' },
      { q: 'Does the powder follow the same sheet?', a: 'Yes. Make up {powder_dose} g of powder with {water_dose} ml of water, chill it and start at step 2. The rule per egg white: {white_powder} g of powder + {white_water} ml of water = {white_total} g of aquafaba, equivalent to the same mass of liquid aquafaba.' },
      { q: 'Can I send this sheet with a technical question?', a: 'Yes. Fill in your batch column, note what you saw, and describe it through our [contact form]({contact_href}) or the professional enquiry form on this page.' },
    ],
  },
};
