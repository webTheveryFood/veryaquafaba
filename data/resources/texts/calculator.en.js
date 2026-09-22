// Quantity calculator pages, English. One entry per application; every figure is a
// {token} filled from facts.json (an unknown token fails the build). No em/en dash.
// The calculator itself (inputs and result table) is rendered by the template; this
// module carries the copy around it.
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
};
