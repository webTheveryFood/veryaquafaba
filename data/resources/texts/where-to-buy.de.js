// Wo kaufen, Deutsch (Set-2 E0 und die deutschsprachigen Länder). Der Bezugsweg je Land ist
// der des Kunden (Arnaud, Mail vom 28. August 2026, "Purchase URL for every country"): die
// USA und Deutschland über Amazon, Frankreich über InstantChef, ALLE ANDEREN LÄNDER über
// das Kontaktformular und das B2B-Formular. Keine Seite behauptet einen Bezugsweg, den wir
// nicht belegen können, und keine nennt Preise oder Bestand.
const grid = (heads, rows) => `<table class="va-guide-grid">
<thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
<tbody>
${rows.map((r) => `<tr>${r.map((c, i) => `<td data-label="${heads[i]}">${c}</td>`).join('')}</tr>`).join('\n')}
</tbody>
</table>`;

const range = `<p>Jedes Gebinde wird über die Eiweiße beschrieben, die es ersetzt, bei {white_liquid} g flüssig oder {white_powder} g Pulver pro Eiweiß.</p>
<ul>
<li>Flüssig: 1 L Tetrapak = {liquid_1l_whites} Eiweiße, 10 L Bag-in-Box = {bib_10l_whites}, 1 T IBC = {ibc_1t_whites}.</li>
<li>Pulver: 30 g = {powder_30g_whites} Eiweiße, 200 g = {powder_200g_whites}, 3 kg = {powder_3kg_whites}.</li>
</ul>
<p>Verschlossen halten beide mindestens {unopened_months} Monate bei Raumtemperatur. Geöffnete flüssige Ware wird bei höchstens {opened_temp} °C gekühlt und innerhalb von {opened_days} Tagen verbraucht; geöffnetes Pulver verdirbt nicht, solange es trocken und verschlossen bleibt. Die <a href="{products_href}">Produktseite</a> zeigt das ganze Sortiment.</p>`;

const ask = `<p>Das Profi-Formular fragt nach Unternehmen, Land, Anwendung und geschätztem Monatsvolumen, dazu eine Zeile zum Projekt. Diese Felder machen die Antwort brauchbar: die Anwendung entscheidet über das Format, das Volumen über das Gebinde.</p>
<ul>
<li>Anwendung: Baiser, Macarons, Mousse, Mayonnaise, Backen, Cocktails oder das Produkt, das Sie entwickeln.</li>
<li>Volumen: pro Monat, in Litern oder in ersetzten Eiweißen, je nachdem, was Sie kennen.</li>
<li>Format: flüssig, wenn ein geöffnetes Gebinde in {opened_days} Tagen umschlägt, sonst Pulver.</li>
</ul>
<p>Die Antwort bringt das technische Datenblatt und das, was für Ihr Land möglich ist. Für eine allgemeine Frage genügt das <a href="{contact_href}">Kontaktformular</a>.</p>`;

export default {
  index: {
    title: 'Wo Sie VERY AQUAFABA kaufen: der Weg nach Land - VERY AQUAFABA',
    h1: 'Wo Sie VERY AQUAFABA kaufen, Land für Land',
    crumb: 'Wo kaufen',
    enquiryLabel: 'Wo kaufen',
    description: 'Wie Sie VERY AQUAFABA in jedem Land kaufen: die Amazon-Listings in den USA und in Deutschland, InstantChef in Frankreich und die Formulare überall sonst.',
    lead: 'Drei Länder haben heute ein Listing, über das Sie bestellen können: die USA und Deutschland bei Amazon und Frankreich bei InstantChef. Überall sonst führt der Weg über die Formulare, das Kontaktformular für eine Frage und das Profi-Formular für ein Volumen, und die Antwort kommt mit den Formaten und dem technischen Datenblatt zurück. Diese Seite sagt, was wo gilt, damit niemand in einen Shop geschickt wird, der ihn nicht bedient.',
    figures: true,
    sections: [
      {
        id: 'countries',
        title: 'Der Weg, Land für Land',
        html: `<p>Jede Länderseite trägt ihren eigenen Weg, in der Sprache dieses Landes.</p>
${grid(['Land', 'Wie Sie bestellen'], [
  ['<a href="{germany_href}">Deutschland</a>', 'Amazon: 1 L und 200 g Pulver'],
  ['<a href="{united_states_href}">USA</a>', 'Amazon: 1 L, Cocktail-Listing und Viererpack, Seite auf Englisch'],
  ['<a href="{france_href}">Frankreich</a>', 'InstantChef: 1 L und 200 g Pulver, Seite auf Französisch'],
  ['<a href="{united_kingdom_href}">Vereinigtes Königreich</a>', 'Profi- und Kontaktformular, Seite auf Englisch'],
  ['<a href="{netherlands_href}">Niederlande</a>', 'Profi- und Kontaktformular, Seite auf Niederländisch'],
  ['<a href="{belgium_href}">Belgien</a>', 'Profi- und Kontaktformular, Seite auf Französisch'],
  ['Jedes andere Land', 'Die Formulare am Ende dieser Seite'],
])}
<p>Ein Land wechselt in die erste Gruppe, sobald dafür ein Listing bestätigt ist. Bis dahin ist die Anfrage der ehrliche Weg: sie zeigt uns, wo die Nachfrage ist, und sie bringt Ihnen eine Antwort mit den Formaten und dem technischen Datenblatt.</p>`,
      },
      { id: 'range', title: 'Was Sie bestellen', html: range },
      {
        id: 'professional',
        title: 'Professionelle Volumen und technisches Datenblatt',
        html: `<p>Die 10 L Bag-in-Box und der 1 T IBC werden in keinem Land über einen Shop verkauft: sie werden pro Projekt kalkuliert, mit dem technischen Datenblatt, sobald Anwendung und Monatsvolumen feststehen. Dafür ist das Profi-Formular am Ende dieser Seite da; für eine einfache Frage genügt das <a href="{contact_href}">Kontaktformular</a>.</p>
<p>Wenn Sie noch zwischen flüssig und Pulver schwanken, ordnet der <a href="{professional_href}">Profi-Bereich</a> die Frage nach Tätigkeit: <a href="{pastry_href}">Konditorei und Bäckerei</a>, <a href="{bars_href}">Bars und Cocktails</a>, <a href="{foodservice_href}">Gemeinschaftsverpflegung</a> und <a href="{industry_href}">Lebensmittelindustrie</a>.</p>`,
      },
    ],
    faq: [
      { q: 'In welchen Ländern kann man heute direkt bestellen?', a: 'In den USA und in Deutschland über Amazon und in Frankreich über InstantChef. Das sind die von VERY AQUAFABA bestätigten Listings.' },
      { q: 'Mein Land ist keines dieser drei, was nun?', a: 'Nutzen Sie das Profi-Formular: Land, Anwendung und geschätztes Monatsvolumen. Die Antwort bringt das technische Datenblatt und das, was für Ihr Land möglich ist.' },
      { q: 'Stehen auf diesen Seiten Preise?', a: 'Nein. Preise und Bestand gehören dem Shop, deshalb verlinkt jede Seite das Listing und überlässt ihm das.' },
      { q: 'Kann man Bag-in-Box oder IBC online bestellen?', a: 'Nein, in keinem Land. Die 10 L Bag-in-Box und der 1 T IBC werden pro Projekt mit dem technischen Datenblatt kalkuliert, über das Profi-Formular.' },
    ],
    links: [
      { href: '{germany_href}', label: 'Wo Sie in Deutschland kaufen' },
      { href: '{france_href}', label: 'Wo Sie in Frankreich kaufen' },
      { href: '{united_states_href}', label: 'Wo Sie in den USA kaufen' },
      { href: '{professional_href}', label: 'Aquafaba für Profis' },
      { href: '{egg_substitutes_href}', label: 'Pflanzlicher Ei-Ersatz' },
    ],
  },

  germany: {
    country: 'Deutschland',
    title: 'Wo Sie Aquafaba in Deutschland kaufen - VERY AQUAFABA',
    h1: 'Wo Sie VERY AQUAFABA in Deutschland kaufen',
    crumb: 'Deutschland',
    description: 'VERY AQUAFABA in Deutschland bei Amazon: das 1 L Tetrapak und das 200 g Pulver, was ein Gebinde ersetzt, und das Formular für professionelle Volumen.',
    lead: 'In Deutschland führt der Weg über Amazon, mit zwei Listings: dem 1 L Tetrapak und dem 200 g Pulver. Ein Tetrapak ersetzt {liquid_1l_whites} Eiweiße, das sind {meringue_batches_1l} Chargen Baiser oder {cocktails_batches_1l} Sours; ein 200 g Beutel ersetzt {powder_200g_whites} Eiweiße. Die großen Formate werden pro Projekt über das Formular am Ende dieser Seite kalkuliert.',
    sections: [
      {
        id: 'order',
        title: 'Die beiden Listings',
        html: `<p>Es ist dasselbe Aquafaba in zwei Zuständen. Die flüssige Ware wird gegossen und gewogen, aus dem Kühlschrank schon auf Aufschlagtemperatur; das Pulver wird mit {white_powder} g Pulver und {white_water} ml Wasser pro Eiweiß angerührt.</p>
<p>Ein 1 L Tetrapak sind {meringue_batches_1l} Chargen Baiser zu {meringue_dose} g, {macarons_batches_1l} Chargen Macaronschalen, {mayonnaise_batches_1l} Chargen Mayonnaise oder {eggs_1l} ganze Eier beim Backen. Geöffnet hält er {opened_days} Tage bei höchstens {opened_temp} °C; der geöffnete Pulverbeutel verdirbt nicht, solange er trocken und verschlossen bleibt.</p>`,
      },
      { id: 'range', title: 'Das Sortiment hinter den Listings', html: range },
      {
        id: 'professional',
        title: 'Gastronomie, Bäckerei und Volumen',
        html: `<p>Für einen Betrieb, der mehr als ein Gebinde pro Woche verbraucht, oder für eine Linie werden die Formate pro Projekt kalkuliert: die 10 L Bag-in-Box mit {bib_10l_whites} Eiweißen und der 1 T IBC mit {ibc_1t_whites}. Das Profi-Formular unten fragt nach Unternehmen, Land, Anwendung und geschätztem Monatsvolumen; das technische Datenblatt kommt mit der Antwort.</p>
<p>Die <a href="{pastry_href}">Seite Konditorei und Bäckerei</a> und die <a href="{bars_href}">Seite Bars und Cocktails</a> zeigen, welches Format welcher Betrieb am Ende nimmt, und die <a href="{index_href}">Anwendungsleitfäden</a> geben die Dosis pro Rezept.</p>`,
      },
    ],
    faq: [
      { q: 'Wo kann ich Aquafaba in Deutschland kaufen?', a: 'Bei Amazon, über die Listings unten: das 1 L Tetrapak und das 200 g Pulver.' },
      { q: 'Wie viele Eiweiße ersetzt ein 1 L Tetrapak?', a: '{liquid_1l_whites}, bei {white_liquid} g pro Eiweiß. In der Küche sind das {meringue_batches_1l} Chargen Baiser oder {mayonnaise_batches_1l} Chargen Mayonnaise.' },
      { q: 'Gibt es das Pulver dort?', a: 'Ja, im 200 g Beutel, das sind {powder_200g_whites} Eiweiße, angerührt mit {white_powder} g Pulver und {white_water} ml Wasser pro Eiweiß.' },
      { q: 'Wie bekomme ich die großen Formate?', a: 'Über das Profi-Formular am Ende dieser Seite: Bag-in-Box und IBC werden pro Projekt mit dem technischen Datenblatt kalkuliert.' },
    ],
    links: [
      { href: '{pastry_href}', label: 'Konditorei und Bäckerei' },
      { href: '{bars_href}', label: 'Bars und Cocktails' },
      { href: '{index_href}', label: 'Alle Anwendungsleitfäden' },
      { href: '{products_href}', label: 'Produkte und Formate' },
    ],
  },

};
