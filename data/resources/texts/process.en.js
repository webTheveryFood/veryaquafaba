// Process sheet pages, English. One entry per application. The sheet (steps with their
// reference value and a blank column) and the checks table are rendered by the template;
// this module carries the steps, the checks and the copy. Every figure is a {token}
// filled from facts.json; no em/en dash. Causes and fixes come from the guide's own
// troubleshooting table, nothing is added from outside the sources.
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
};
