// Technisches Wissen, Deutsch (Set-2 F1). Gleiche Struktur und Tokens wie reference.en.js.
export default {
  reconstitution: {
    title: 'Aquafaba-Pulver anrühren: 2 g + 30 ml pro Eiweiß - VERY AQUAFABA',
    h1: 'VERY AQUAFABA Pulver anrühren: {white_powder} g Pulver und {white_water} ml Wasser pro Eiweiß',
    crumb: 'Pulver anrühren',
    eyebrow: 'Technisches Wissen',
    enquiryLabel: 'Pulver anrühren',
    description: 'Die Regel für VERY AQUAFABA Pulver: {white_powder} g Pulver plus {white_water} ml Wasser ergeben {white_total} g Aquafaba und ersetzen ein Eiweiß. Eine Tabelle von 1 bis 20 Eiweißen, die Dosen pro Rezept und was sich zwischen trockenem Pulver, Wasser und angerührtem Aquafaba ändert.',
    lead: 'VERY AQUAFABA Pulver wird vor Gebrauch mit Wasser angerührt, und die Regel wird pro Eiweiß gezählt: {white_powder} g Pulver plus {white_water} ml Wasser ergeben {white_total} g Aquafaba, entspricht derselben Masse an flüssigem Aquafaba, und {white_powder} g Pulver ersetzen ein Eiweiß. Eine Charge wird nach der Zahl der Eiweiße dosiert, die ihr Rezept ersetzt. Diese Seite trägt die Regel, eine Tabelle von 1 bis 20 Eiweißen und die Dosen der Website-Rezepte.',
    figures: true,
    sections: [
      {
        id: 'rule',
        title: 'Die Regel pro Eiweiß',
        html: `<p>Die flüssige Ware ersetzt ein Eiweiß mit {white_liquid} g. Das Pulver ersetzt dasselbe Eiweiß mit {white_powder} g, angerührt mit {white_water} ml Wasser: die erhaltenen {white_total} g werden genau so verwendet wie {white_total} g flüssiges Aquafaba. Ein in Eiweißen gezähltes Rezept lässt sich also in beide Formate umrechnen, ohne sonst etwas zu ändern.</p>
<ul>
<li>Baiser, {meringue_eggs} Eiweiße: {meringue_powder} g Pulver + {meringue_water} ml Wasser, für {meringue_dose} g Aquafaba.</li>
<li>Macarons, {macarons_eggs} Eiweiße: {macarons_powder} g + {macarons_water} ml, für {macarons_dose} g.</li>
<li>Schokoladenmousse, {chocolate_mousse_eggs} Eiweiße: {chocolate_mousse_powder} g + {chocolate_mousse_water} ml, für {chocolate_mousse_dose} g.</li>
<li>Mayonnaise: {mayonnaise_powder} g + {mayonnaise_water} ml, für die {mayonnaise_dose} g einer Charge.</li>
<li>Ein Sour: {cocktails_powder} g + {cocktails_water} ml, für die {cocktails_dose} g eines Drinks.</li>
</ul>
<p>Jeder <a href="{index_href}">Anwendungsleitfaden</a> wiederholt seine eigene Dosis in beiden Formaten, und jeder Mengenrechner skaliert sie auf jede Zahl von Chargen.</p>`,
      },
      {
        id: 'table',
        title: 'Tabelle: von 1 bis 20 Eiweißen',
        html: `<p>Pulver und Wasser je Zahl der Eiweiße, und das erhaltene Aquafaba. Wiegen Sie das Pulver auf einer Feinwaage; das Wasser wird in Millilitern abgemessen.</p>
{reconstitution_table}
<p>Für ein in ganzen Eiern gezähltes Rezept rechnet der <a href="{baking_calc_href}">Backrechner</a> Eier, Eiweiße und Eigelbe in Pulver mit seinem Wasser um.</p>`,
      },
      {
        id: 'states',
        title: 'Trockenes Pulver, Wasser und angerührtes Aquafaba',
        html: `<p>Drei Zustände, drei Arten der Aufbewahrung. Der verschlossene Beutel hält mindestens {unopened_months} Monate bei Raumtemperatur, wie die flüssige Ware. Der geöffnete Beutel verdirbt nicht: er bleibt trocken und verschlossen im Trockenregal und wartet ohne Datum auf die nächste Charge, weshalb Küchen und Bars mit geringer Rotation ihn bevorzugen. Das angerührte Aquafaba wird wie das flüssige Produkt behandelt: auf die Aufschlagtemperatur des Rezepts gekühlt, {meringue_chill} °C für Baiser, bevor es in die Schüssel kommt, denn warmes Aquafaba steigt langsamer und gibt einen schwächeren Schaum.</p>
<p>Rühren Sie an, was die Charge braucht. Das Pulver ist bei aufgeschlagenen Rezepten keine Abkürzung für Trockenmischungen: das Aquafaba wird zuerst für sich aufgeschlagen, es wird also mit Wasser angerührt, bevor es in die Nähe von Mandelmehl oder Zucker kommt. Die Ausnahme ist eine Trockenmischung, eine Saucen- oder Backbasis, die ein Hersteller trocken mischt, wo das Pulver so hineinkommt, wie es ist.</p>`,
      },
      {
        id: 'method',
        title: 'Mischmethode und Standzeit',
        html: `<p>Diese Seite veröffentlicht keine Mischmethode und keine Standzeit für das Pulver: nur das Verhältnis pro Eiweiß und die Dosen pro Rezept, das sind die für das Produkt bestätigten Zahlen. Das Verfahren ist Teil des technischen Datenblatts, das Sie über das Formular auf dieser Seite anfordern.</p>
<p>Was die Leitfäden festlegen, ist der Zustand des angerührten Aquafabas, wenn es in den Mixer kommt: auf Aufschlagtemperatur des Rezepts, gewogen statt nach Volumen abgemessen, und für die anstehende Charge angerührt.</p>`,
      },
    ],
    faq: [
      { q: 'Was ist Aquafaba-Pulver?', a: 'Die getrocknete Form von VERY AQUAFABA, vor Gebrauch mit Wasser angerührt. {white_powder} g Pulver plus {white_water} ml Wasser ergeben {white_total} g Aquafaba, entspricht derselben Masse an flüssigem Aquafaba, und ersetzen ein Eiweiß.' },
      { q: 'Wie viel Wasser für {meringue_powder} g Pulver?', a: '{meringue_water} ml, nach dem Verhältnis von {white_water} ml je {white_powder} g. Das ist die Dosis einer Charge Baiser, {meringue_eggs} Eiweiße, für {meringue_dose} g Aquafaba.' },
      { q: 'Können wir einen ganzen Beutel auf einmal anrühren?', a: 'Rühren Sie an, was die Charge braucht. Der geöffnete Beutel verdirbt nicht, solange er trocken und verschlossen bleibt, der Rest wartet also auf die nächste Charge; das angerührte Aquafaba wird wie das flüssige Produkt gehandhabt.' },
      { q: 'Schlägt angerührtes Pulver wie die flüssige Ware auf?', a: 'Die Leitfäden funktionieren mit beiden gleich. Kühlen Sie es zuerst auf Aufschlagtemperatur, {meringue_chill} °C für Baiser: warmes Aquafaba steigt langsamer und gibt einen schwächeren Schaum, der den Zucker nicht trägt.' },
      { q: 'Wo wird das Pulver verkauft?', a: 'Die Beutel zu 30 g und 200 g sowie der 3 kg Sack für Profis stehen auf der [Produktseite]({products_href}). Ein 200 g Beutel ersetzt {powder_200g_whites} Eiweiße.' },
    ],
    links: [
      { href: '{professional_href}', label: 'Aquafaba für Profis' },
      { href: '{pastry_href}', label: 'Konditorei und Bäckerei' },
      { href: '{bars_href}', label: 'Bars und Cocktails' },
      { href: '{meringue_calc_href}', label: 'Mengenrechner für Baiser' },
    ],
  },
};
