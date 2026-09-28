// Technisches Wissen, Deutsch (Set-2 F1). Die Seite zum Anrühren trägt die Regel des Kunden
// pro Eiweiß (2 g + 30 ml = 32 g) und eine Tabelle von 1 bis 20 Eiweißen, erzeugt von
// data/resources/topics.js als {reconstitution_table}. Mischmethode und Standzeit werden
// nicht veröffentlicht: kein Verfahren wird erfunden, es wird auf das technische Datenblatt
// verwiesen. Gleiche Struktur und Tokens wie reference.en.js. Kein Gedankenstrich.
const grid = (heads, rows, cls = '') => `<table class="va-guide-grid${cls ? ` ${cls}` : ''}">
<thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
<tbody>
${rows.map((r) => `<tr>${r.map((c, i) => `<td data-label="${heads[i]}">${c}</td>`).join('')}</tr>`).join('\n')}
</tbody>
</table>`;

export default {
  reconstitution: {
    title: 'Wie verwenden Sie Aquafaba-Pulver? - VERY AQUAFABA',
    h1: 'Wie verwenden Sie Aquafaba-Pulver?',
    crumb: 'Pulver anrühren',
    eyebrow: 'Technisches Wissen',
    enquiryLabel: 'Pulver anrühren',
    description: 'Die Regel für VERY AQUAFABA Pulver: {white_powder} g Pulver plus {white_water} ml Wasser pro Eiweiß. Dosis je Rezept, Tabelle von 1 bis 20 Eiweißen und was ein Beutel ergibt.',
    lead: 'Aquafaba-Pulver ist ein pflanzlicher Ersatz für Eiweiß, den Sie vor Gebrauch mit Wasser anrühren. Zwei Gramm in {white_water} ml Wasser stehen für ein Eiweiß, und gekühlt lässt es sich zu Baiser aufschlagen, in eine Mousse unterheben oder zu einer Mayonnaise emulgieren. Unten finden Sie die Dosis für jedes Rezept der Website, die Umrechnung für jedes in Eiweißen gezählte Rezept und was ein Beutel ergibt.',
    figures: true,
    sections: [
      {
        id: 'rule',
        title: 'Wie viel Aquafaba-Pulver ersetzt ein Eiweiß?',
        html: `<p>Rezepte zählen Eiweiße, also tut es das Pulver auch. Wo die flüssige Ware ein Eiweiß mit {white_liquid} g ersetzt, ersetzt das Pulver es mit {white_powder} g, angerührt in {white_water} ml Wasser, was {white_total} g Aquafaba ergibt, entspricht derselben Masse an flüssigem Aquafaba. Zählen Sie die Eiweiße in Ihrem Rezept, und die Umrechnung unten ist dieselbe, egal welches Format Sie in der Hand halten.</p>`,
      },
      {
        id: 'batch',
        title: 'So verwenden Sie Aquafaba-Pulver in Ihren Rezepten',
        html: `<p>Für die Rezepte auf dieser Website steht hier, was auf die Waage kommt. Wiegen Sie das Pulver auf einer Feinwaage; das Wasser wird in Millilitern abgemessen.</p>
${grid(['Rezept', 'Pulver', 'Wasser', 'Erhaltenes Aquafaba'], [
  ['<a href="{meringue_href}">Baiser</a>, ein Ansatz ({meringue_eggs} Eiweiße)', '{meringue_powder} g', '{meringue_water} ml', '{meringue_dose} g'],
  ['<a href="{macarons_href}">Macarons</a>, ein Ansatz ({macarons_eggs} Eiweiße)', '{macarons_powder} g', '{macarons_water} ml', '{macarons_dose} g'],
  ['<a href="{chocolate_mousse_href}">Schokoladenmousse</a>, ein Ansatz ({chocolate_mousse_eggs} Eiweiße)', '{chocolate_mousse_powder} g', '{chocolate_mousse_water} ml', '{chocolate_mousse_dose} g'],
  ['<a href="{mayonnaise_href}">Mayonnaise</a>, ein Ansatz', '{mayonnaise_powder} g', '{mayonnaise_water} ml', '{mayonnaise_dose} g'],
  ['<a href="{cocktails_href}">Whiskey Sour</a>, ein Drink', '{cocktails_powder} g', '{cocktails_water} ml', '{cocktails_dose} g'],
], 'va-guide-grid--wrap')}
<p>Jeder Leitfaden hat einen Mengenrechner, der sein Rezept auf jede Zahl von Ansätzen skaliert, flüssig und als Pulver mit seinem Wasser.</p>`,
      },
      {
        id: 'table',
        title: 'Wie rechnen Sie Eiweiße in Aquafaba-Pulver um?',
        html: `<p>Zählen Sie die Eiweiße in Ihrem Rezept und suchen Sie die Zeile. Die letzte Spalte ist das Aquafaba, das Sie in der Schüssel haben werden.</p>
{reconstitution_table}
<p>Für ein in ganzen Eiern gezähltes Rezept rechnet der <a href="{baking_calc_href}">Ersatzrechner</a> Eier, Eiweiße und Eigelbe in Pulver mit seinem Wasser um.</p>`,
      },
      {
        id: 'pouch',
        title: 'Wie viel Aquafaba ergibt ein Beutel?',
        html: `<p>Ein Beutel wirkt klein neben einem Liter flüssiger Ware, bis das Wasser dazukommt. Hier steht, was jeder enthält:</p>
${grid(['Beutel', 'Eiweiße', 'Wasser dazu', 'Ergibt Aquafaba'], [
  ['30 g', '{powder_30g_whites}', '{powder_30g_water}', '{powder_30g_total}'],
  ['200 g', '{powder_200g_whites}', '{powder_200g_water}', '{powder_200g_total}'],
  ['3 kg', '{powder_3kg_whites}', '{powder_3kg_water}', '{powder_3kg_total}'],
])}
<p>Der 30 g Beutel ist zum Ausprobieren: ein Service Sours oder ein paar Ansätze Baiser. Der 200 g Beutel ist die Arbeitsgröße für eine Küche oder eine Bar. Der 3 kg Sack ist für eine Profiküche oder eine Trockenmischung auf einer Linie. Die <a href="{products_href}">Produktseite</a> listet sie alle.</p>`,
      },
      {
        id: 'states',
        title: 'So lagern Sie das Pulver und das angerührte Aquafaba',
        html: `<p>Das Pulver durchläuft drei Zustände, und jeder verlangt etwas anderes:</p>
<ul>
<li><strong>Im Beutel.</strong> Verschlossen hält es mindestens {unopened_months} Monate bei Raumtemperatur. Geöffnet verdirbt es nicht: trocken und verschlossen im Regal wartet es ohne Datum auf den nächsten Ansatz. Genau deshalb wählen Küchen und Bars mit geringer Rotation das Pulver.</li>
<li><strong>Angerührt.</strong> Ab hier behandeln Sie es wie die flüssige Ware. Rühren Sie an, was der Ansatz braucht, und kühlen Sie es auf die Aufschlagtemperatur des Rezepts, {meringue_chill} °C für ein Baiser, bevor es in die Schüssel kommt. Warmes Aquafaba steigt langsamer und gibt einen schwächeren Schaum.</li>
<li><strong>In der Schüssel.</strong> Bei aufgeschlagenen Rezepten wird das Aquafaba zuerst für sich aufgeschlagen, rühren Sie es also an, bevor es in die Nähe von Mandelmehl oder Zucker kommt. Das Pulver ist keine Abkürzung für Trockenmischungen. Die eine Ausnahme ist eine Trockenmischung, eine Saucen- oder Backbasis, die ein Hersteller trocken mischt: dort kommt das Pulver so hinein, wie es ist.</li>
</ul>
<p>Für die Mischmethode und die Standzeit Ihres Formats fordern Sie das technische Datenblatt über unser <a href="{contact_href}">Kontaktformular</a> an.</p>`,
      },
    ],
    faq: [
      { q: 'Was ist Aquafaba-Pulver?', a: 'Die getrocknete Form von VERY AQUAFABA, vor Gebrauch mit Wasser angerührt. {white_powder} g Pulver plus {white_water} ml Wasser ergeben {white_total} g Aquafaba, entspricht derselben Masse an flüssigem Aquafaba, und {white_powder} g Pulver ersetzen ein Eiweiß.' },
      { q: 'Wie viel Wasser brauche ich für {meringue_powder} g Pulver?', a: '{meringue_water} ml, nach dem Verhältnis von {white_water} ml je {white_powder} g. Das ist die Dosis eines Ansatzes Baiser, {meringue_eggs} Eiweiße.' },
      { q: 'Die Tabelle sagt {white_total} g pro Eiweiß, mein Rezept {white_liquid} g. Was nehme ich?', a: 'Zählen Sie in Eiweißen, nicht in Gramm. Rühren Sie für jedes Eiweiß, das das Rezept ersetzt, {white_powder} g Pulver mit {white_water} ml Wasser an und verwenden Sie alles. Die erhaltenen {white_total} g stehen für die {white_liquid} g flüssige Ware, die das Rezept sonst verwenden würde.' },
      { q: 'Kann ich einen ganzen Beutel auf einmal anrühren?', a: 'Rühren Sie an, was der Ansatz braucht. Der geöffnete Beutel verdirbt nicht, solange er trocken und verschlossen bleibt, der Rest wartet also auf den nächsten Ansatz. Einmal angerührt wird das Aquafaba wie das flüssige Produkt gehandhabt.' },
      { q: 'Schlägt angerührtes Pulver wie die flüssige Ware auf?', a: 'Ja. Die Leitfäden funktionieren mit beiden gleich. Kühlen Sie es zuerst auf Aufschlagtemperatur, {meringue_chill} °C für Baiser: warmes Aquafaba steigt langsamer und gibt einen schwächeren Schaum, der den Zucker nicht trägt.' },
      { q: 'Wo wird das Pulver verkauft?', a: 'Die Beutel zu 30 g und 200 g sowie der 3 kg Sack für Profis stehen auf der [Produktseite]({products_href}). Ein 200 g Beutel ersetzt {powder_200g_whites} Eiweiße.' },
    ],
    links: [
      { href: '{meringue_href}', label: 'Baiser: flüssig oder Pulver?' },
      { href: '{meringue_calc_href}', label: 'Mengenrechner für Baiser' },
      { href: '{baking_calc_href}', label: 'Ersatzrechner' },
      { href: '{professional_href}', label: 'Aquafaba für Profis' },
      { href: '{products_href}', label: 'Produkte und Formate' },
    ],
  },
};
