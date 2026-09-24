// Wo kaufen, Deutsch (Set-2 E0 und die deutschsprachigen Länder). Der Bezugsweg je Land ist
// der des Kunden (Arnaud, Mail vom 28. August 2026, "Purchase URL for every country"): die
// USA und Deutschland über Amazon, Frankreich über InstantChef, ALLE ANDEREN LÄNDER über
// das Kontaktformular und das B2B-Formular. Keine Seite behauptet einen Bezugsweg, den wir
// nicht belegen können, und keine nennt Preise oder Bestand.
const grid = (heads, rows, cls = '') => `<table class="va-guide-grid${cls ? ` ${cls}` : ''}">
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
    lead: 'Drei Länder haben heute ein Listing, über das Sie bestellen können: die USA und Deutschland bei Amazon und Frankreich bei InstantChef. Überall sonst führt der Weg über die Formulare, das Kontaktformular für eine Frage und das Profi-Formular für ein Volumen, und die Antwort kommt mit den Formaten und dem technischen Datenblatt zurück.',
    figures: true,
    sections: [
      {
        id: 'countries',
        title: 'Der Weg, Land für Land',
        html: `${grid(['Land', 'Wie Sie kaufen'], [
  ['<a href="{united_states_href}">USA</a>', 'Amazon'],
  ['<a href="{germany_href}">Deutschland</a>', 'Amazon'],
  ['<a href="{france_href}">Frankreich</a>', 'InstantChef'],
  ['<a href="{united_kingdom_href}">Vereinigtes Königreich</a>', 'Anfrageformular'],
  ['<a href="{netherlands_href}">Niederlande</a>', 'Anfrageformular'],
  ['<a href="{belgium_href}">Belgien</a>', 'Anfrageformular'],
  ['Andere Länder', 'Anfrageformular'],
], 'va-guide-grid--pairs')}`,
      },
      { id: 'range', title: 'Was Sie bestellen', html: range },
      {
        id: 'professional',
        title: 'Professionelle Volumen und technisches Datenblatt',
        html: `<p>Die 10 L Bag-in-Box und der 1 T IBC werden in keinem Land über einen Shop verkauft: sie werden pro Projekt kalkuliert, mit dem technischen Datenblatt, sobald Anwendung und Monatsvolumen feststehen. Dafür ist das Profi-Formular auf dieser Seite da; für eine einfache Frage genügt das <a href="{contact_href}">Kontaktformular</a>.</p>
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
      { href: '{professional_href}', label: 'Aquafaba für Profis' },
      { href: '{egg_substitutes_href}', label: 'Pflanzlicher Ei-Ersatz' },
      { href: '{index_href}', label: 'Alle Anwendungsleitfäden' },
    ],
  },

  germany: {
    inCountry: 'in Deutschland',
    title: 'Wo Sie Aquafaba in Deutschland kaufen - VERY AQUAFABA',
    h1: 'Wo Sie VERY AQUAFABA in Deutschland kaufen',
    crumb: 'Deutschland',
    description: 'VERY AQUAFABA in Deutschland bei Amazon: das 1 L Tetrapak und das 200 g Pulver, was ein Gebinde ersetzt, und das Formular für professionelle Volumen.',
    lead: 'In Deutschland führt der Weg über Amazon, mit zwei Listings: dem 1 L Tetrapak und dem 200 g Pulver. Ein Tetrapak ersetzt {liquid_1l_whites} Eiweiße, das sind {meringue_batches_1l} Chargen Baiser oder {cocktails_batches_1l} Sours; ein 200 g Beutel ersetzt {powder_200g_whites} Eiweiße. Die großen Formate werden pro Projekt über das Formular auf dieser Seite kalkuliert.',
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
      { q: 'Wie bekomme ich die großen Formate?', a: 'Über das Profi-Formular auf dieser Seite: Bag-in-Box und IBC werden pro Projekt mit dem technischen Datenblatt kalkuliert.' },
    ],
    links: [
      { href: '{pastry_href}', label: 'Konditorei und Bäckerei' },
      { href: '{bars_href}', label: 'Bars und Cocktails' },
      { href: '{index_href}', label: 'Alle Anwendungsleitfäden' },
      { href: '{products_href}', label: 'Produkte und Formate' },
    ],
  },

  'united-states': {
    inCountry: 'in den USA',
    title: 'Wo Sie Aquafaba in den USA kaufen - VERY AQUAFABA',
    h1: 'Wo Sie VERY AQUAFABA in den USA kaufen',
    crumb: 'USA',
    description: 'VERY AQUAFABA in den USA: die Amazon-Listings mit dem 1 L Tetrapak, dem Cocktail-Listing und dem Viererpack, was ein Tetrapak ersetzt, und das Formular für professionelle Volumen.',
    lead: 'In den USA führt der Weg über Amazon, mit drei Listings: dem 1 L Tetrapak, dem Listing für Cocktailbars und dem Viererpack. Ein Tetrapak ersetzt {liquid_1l_whites} Eiweiße, das sind {cocktails_batches_1l} Sours oder {meringue_batches_1l} Chargen Baiser. Größere Formate und das Pulver laufen über das Formular auf dieser Seite.',
    sections: [
      {
        id: 'order',
        title: 'Die drei Listings',
        html: `<p>Alle drei enthalten dasselbe Aquafaba. Das Cocktail-Listing gibt es, damit eine Bar das Produkt unter dem findet, wonach sie sucht, und das Viererpack ist für einen Betrieb, der mehr als einen Tetrapak auf einmal verbraucht.</p>
<p>Ein Tetrapak sind {liquid_1l_whites} Eiweiße: {cocktails_batches_1l} Sours zu je {cocktails_dose} g, {meringue_batches_1l} Chargen Baiser, {mayonnaise_batches_1l} Chargen Mayonnaise oder {eggs_1l} beim Backen ersetzte ganze Eier. Geöffnet wird er bei höchstens {opened_temp} °C gekühlt und innerhalb von {opened_days} Tagen verbraucht; eine Bar, die in jedem Service Sours ausschenkt, leert ihn also bequem.</p>`,
      },
      { id: 'range', title: 'Das Sortiment hinter den Listings', html: range },
      {
        id: 'professional',
        title: 'Restaurants, Bars und Produktion',
        html: `<p>Für einen Betrieb, der mehr als einen Tetrapak pro Woche verbraucht, oder für eine Linie werden die Formate pro Projekt kalkuliert: die 10 L Bag-in-Box mit {bib_10l_whites} Eiweißen und der 1 T IBC mit {ibc_1t_whites}. Das Pulver ist noch nicht in den US-Listings, es geht also denselben Weg. Beschreiben Sie Anwendung und geschätztes Monatsvolumen über das Formular unten, und das technische Datenblatt kommt mit der Antwort zurück.</p>
<p>Welches Format passt, wird im <a href="{professional_href}">Profi-Bereich</a> nach Tätigkeit ermittelt und in den <a href="{index_href}">Anwendungsleitfäden</a> nach Rezept: eine Bar beginnt bei <a href="{bars_href}">Bars und Cocktails</a>, eine Küche bei <a href="{foodservice_href}">Gemeinschaftsverpflegung</a>.</p>`,
      },
    ],
    faq: [
      { q: 'Wo kann ich Aquafaba in den USA kaufen?', a: 'Bei Amazon, über die Listings unten: den 1 L Tetrapak, das Cocktail-Listing und das Viererpack. Alle drei sind flüssiges VERY AQUAFABA.' },
      { q: 'Was ersetzt ein 1 L Tetrapak?', a: '{liquid_1l_whites} Eiweiße, das sind {cocktails_batches_1l} Sours, {meringue_batches_1l} Chargen Baiser oder {eggs_1l} ganze Eier beim Backen.' },
      { q: 'Wird das Pulver dort verkauft?', a: 'In den US-Listings noch nicht. Fragen Sie es über das Formular auf dieser Seite an, mit Ihrer Anwendung und Ihrem Volumen.' },
      { q: 'Wie lange hält ein geöffneter Tetrapak?', a: '{opened_days} Tage bei höchstens {opened_temp} °C. Verschlossen hält er mindestens {unopened_months} Monate bei Raumtemperatur.' },
    ],
    links: [
      { href: '{bars_href}', label: 'Bars und Cocktails' },
      { href: '{cocktails_href}', label: 'Cocktails: flüssig oder Pulver?' },
      { href: '{index_href}', label: 'Alle Anwendungsleitfäden' },
      { href: '{products_href}', label: 'Produkte und Formate' },
    ],
  },

  'united-kingdom': {
    inCountry: 'im Vereinigten Königreich',
    title: 'Wie Sie Aquafaba im Vereinigten Königreich bestellen - VERY AQUAFABA',
    h1: 'Wie Sie VERY AQUAFABA im Vereinigten Königreich bestellen',
    crumb: 'Vereinigtes Königreich',
    description: 'Es gibt noch kein britisches Listing: Bestellungen laufen über das Anfrageformular, mit der Anwendung und dem Monatsvolumen. Was ein Gebinde in einer Bäckerei, einer Küche oder einer Bar ersetzt, und was Sie vor der Anfrage vorbereiten.',
    lead: 'Im Vereinigten Königreich gibt es noch kein Listing, der Weg führt also über das Anfrageformular auf dieser Seite: Anwendung und geschätztes Monatsvolumen, und die Antwort kommt mit den Formaten und dem technischen Datenblatt zurück. Zur Größenordnung: {white_liquid} g flüssig ersetzen ein Eiweiß, ein 1 L Tetrapak {liquid_1l_whites} und ein 200 g Beutel Pulver {powder_200g_whites}.',
    sections: [
      { id: 'order', title: 'Was in die Anfrage gehört', html: ask },
      { id: 'range', title: 'Die Formate, nach denen Sie fragen', html: range },
      {
        id: 'start',
        title: 'Bäckerei, Küche oder Bar',
        html: `<p>Drei Wege decken die meisten britischen Anfragen ab, und jeder hat seine eigene Seite: eine Bäckerei oder Konditoreiabteilung liest <a href="{pastry_href}">Konditorei und Bäckerei</a>, wo das Format dem Ofenrhythmus folgt; eine Zentralküche oder eine Restaurantgruppe liest <a href="{foodservice_href}">Gemeinschaftsverpflegung und Zentralküchen</a>, aufgebaut um die 10 L Bag-in-Box; eine Bar liest <a href="{bars_href}">Bars und Cocktails</a>, wo ein Sour {cocktails_dose} g braucht.</p>
<p>Die Rechnung für das Formular ist kurz: {meringue_dose} g pro Charge Baiser, {mayonnaise_dose} g pro Charge Mayonnaise, {chocolate_mousse_dose} g pro Charge Mousse, {cocktails_dose} g pro Sour. Zählen Sie die Chargen, die Sie in einem Monat machen, multiplizieren Sie und tragen Sie dieses Volumen ein. Jeder <a href="{index_href}">Anwendungsleitfaden</a> hat einen Rechner, der das für Sie erledigt.</p>`,
      },
    ],
    faq: [
      { q: 'Kann ich heute Aquafaba im Vereinigten Königreich kaufen?', a: 'Es gibt noch kein britisches Listing. Bestellungen laufen über das Anfrageformular auf dieser Seite, mit der Anwendung und dem geschätzten Monatsvolumen.' },
      { q: 'Was sollte in der Anfrage stehen?', a: 'Unternehmen, Land, Anwendung und geschätztes Monatsvolumen, dazu eine Zeile zum Projekt. Das macht die Antwort brauchbar.' },
      { q: 'Wie viel verbraucht eine Bäckerei?', a: 'Zählen Sie die Chargen: ein 1 L Tetrapak, der {liquid_1l_whites} Eiweiße ersetzt, ergibt {meringue_batches_1l} Chargen Baiser oder {macarons_batches_1l} Chargen Macaronschalen.' },
      { q: 'Nach welchem Format sollte ich fragen?', a: 'Flüssig, wenn ein geöffnetes Gebinde bei höchstens {opened_temp} °C innerhalb von {opened_days} Tagen umschlägt; sonst Pulver, denn ein geöffneter Beutel verdirbt nicht, solange er trocken und verschlossen bleibt.' },
    ],
    links: [
      { href: '{pastry_href}', label: 'Konditorei und Bäckerei' },
      { href: '{foodservice_href}', label: 'Gemeinschaftsverpflegung und Zentralküchen' },
      { href: '{bars_href}', label: 'Bars und Cocktails' },
      { href: '{products_href}', label: 'Produkte und Formate' },
    ],
  },

  france: {
    inCountry: 'in Frankreich',
    title: 'Wo Sie Aquafaba in Frankreich kaufen - VERY AQUAFABA',
    h1: 'Wo Sie VERY AQUAFABA in Frankreich kaufen',
    crumb: 'Frankreich',
    description: 'VERY AQUAFABA in Frankreich bei InstantChef: die flüssige Ware in 1 L und das Pulver in 200 g, was jedes Gebinde ersetzt, und das Formular für professionelle Volumen.',
    lead: 'In Frankreich führt der Weg über InstantChef, mit zwei Listings: der flüssigen Ware in 1 L und dem Pulver in 200 g. Ein 1 L Tetrapak ersetzt {liquid_1l_whites} Eiweiße, das sind {meringue_batches_1l} Chargen Baiser oder {cocktails_batches_1l} Sours; ein 200 g Beutel Pulver ersetzt {powder_200g_whites}. Die großen Formate werden pro Projekt über das Formular auf dieser Seite kalkuliert.',
    sections: [
      {
        id: 'order',
        title: 'Die beiden Listings',
        html: `<p>InstantChef führt die flüssige Ware in 1 L und das Pulver in 200 g: es ist dasselbe Aquafaba, in zwei Zuständen. Die flüssige Ware wird gegossen und gewogen, schon auf Aufschlagtemperatur; das Pulver wird mit {white_powder} g Pulver und {white_water} ml Wasser pro Eiweiß angerührt.</p>
<p>Ein 1 L Tetrapak ergibt {meringue_batches_1l} Chargen Baiser zu {meringue_dose} g, {macarons_batches_1l} Chargen Macaronschalen, {mayonnaise_batches_1l} Chargen Mayonnaise oder {cocktails_batches_1l} Sours. Geöffnet hält er {opened_days} Tage bei höchstens {opened_temp} °C; der geöffnete Pulverbeutel dagegen verdirbt nicht, solange er trocken und verschlossen bleibt.</p>`,
      },
      { id: 'range', title: 'Das Sortiment hinter den Listings', html: range },
      {
        id: 'professional',
        title: 'Gastronomie, Produktion und Volumen',
        html: `<p>Über diese beiden Listings hinaus werden die Formate pro Projekt kalkuliert: die 10 L Bag-in-Box, {bib_10l_whites} Eiweiße, für eine Zentralküche, die kiloweise pro Schicht entnimmt, und der 1 T IBC, {ibc_1t_whites}, für eine Linie. Das Profi-Formular unten fragt nach Unternehmen, Land, Anwendung und geschätztem Monatsvolumen; das technische Datenblatt kommt mit der Antwort zurück.</p>
<p>Der <a href="{professional_href}">Profi-Bereich</a> ordnet die Wahl nach Tätigkeit, und die <a href="{index_href}">Anwendungsleitfäden</a> geben die Dosis pro Rezept: <a href="{meringue_href}">Baiser</a>, <a href="{macarons_href}">Macarons</a>, <a href="{mayonnaise_href}">Mayonnaise</a>, <a href="{cocktails_href}">Cocktails</a>.</p>`,
      },
    ],
    faq: [
      { q: 'Wo kann ich Aquafaba in Frankreich kaufen?', a: 'Bei InstantChef, das die flüssige Ware in 1 L und das Pulver in 200 g führt. Die Links stehen in der Tabelle unten.' },
      { q: 'Wie viele Eiweiße ersetzt ein 1 L Tetrapak?', a: '{liquid_1l_whites}, bei {white_liquid} g pro Eiweiß. In der Küche sind das {meringue_batches_1l} Chargen Baiser oder {mayonnaise_batches_1l} Chargen Mayonnaise.' },
      { q: 'Ist das Pulver erhältlich?', a: 'Ja, im 200 g Beutel, das sind {powder_200g_whites} Eiweiße, angerührt mit {white_powder} g Pulver und {white_water} ml Wasser pro Eiweiß.' },
      { q: 'Wie bekomme ich die großen Formate?', a: 'Über das Profi-Formular auf dieser Seite: die 10 L Bag-in-Box und der 1 T IBC werden pro Projekt mit dem technischen Datenblatt kalkuliert.' },
    ],
    links: [
      { href: '{bars_href}', label: 'Bars und Cocktails' },
      { href: '{pastry_href}', label: 'Konditorei und Bäckerei' },
      { href: '{index_href}', label: 'Alle Anwendungsleitfäden' },
      { href: '{products_href}', label: 'Produkte und Formate' },
    ],
  },

  belgium: {
    inCountry: 'in Belgien',
    title: 'Wie Sie Aquafaba in Belgien bestellen - VERY AQUAFABA',
    h1: 'Wie Sie VERY AQUAFABA in Belgien bestellen',
    crumb: 'Belgien',
    description: 'In Belgien gibt es noch kein lokales Listing: Bestellungen laufen über die Formulare, mit der Anwendung und dem Monatsvolumen. Die Äquivalente pro Gebinde und was Sie vorbereiten sollten.',
    lead: 'Es gibt noch kein belgisches Listing: der Weg führt über das Formular auf dieser Seite, das Profi-Formular für ein Volumen und das Kontaktformular für eine Frage. Nennen Sie Anwendung und geschätztes Monatsvolumen, und die Antwort kommt mit den Formaten, dem technischen Datenblatt und dem, was möglich ist, zurück. Zur Größenordnung: ein 1 L Tetrapak ersetzt {liquid_1l_whites} Eiweiße, das sind {chocolate_mousse_batches_1l} Chargen Mousse oder {mayonnaise_batches_1l} Chargen Mayonnaise.',
    sections: [
      { id: 'order', title: 'Was in die Anfrage gehört', html: ask },
      { id: 'range', title: 'Die Formate, nach denen Sie uns fragen', html: range },
      {
        id: 'start',
        title: 'Horeca, Zentralküche, Backstube',
        html: `<p>Die meisten belgischen Anfragen kommen aus dem Horeca-Bereich: eine Zentralküche, die kiloweise pro Schicht entnimmt, liest zuerst die Seite <a href="{foodservice_href}">Gemeinschaftsverpflegung und Zentralküchen</a>, eine Patisserie-Backstube die Seite <a href="{pastry_href}">Konditorei und Bäckerei</a>, eine Bar die Seite <a href="{bars_href}">Bars und Cocktails</a>.</p>
<p>Die Rechnung ist kurz: {mayonnaise_dose} g pro Charge Mayonnaise, {chocolate_mousse_dose} g pro Charge Mousse, {cocktails_dose} g pro Sour. Zählen Sie die Chargen des Monats, multiplizieren Sie, und das ist das Volumen, das Sie ins Formular schreiben; die Rechner der <a href="{index_href}">Leitfäden</a> erledigen das für Sie.</p>`,
      },
    ],
    faq: [
      { q: 'Kann man heute Aquafaba in Belgien kaufen?', a: 'Es gibt noch kein belgisches Listing. Bestellungen laufen über das Profi-Formular auf dieser Seite, mit der Anwendung und dem geschätzten Monatsvolumen.' },
      { q: 'Gibt es diese Seite auch auf Französisch oder Niederländisch?', a: 'Ja, auf Französisch, auf Niederländisch und auf Englisch: die Sprachauswahl oben auf der Seite führt zu jeder Fassung.' },
      { q: 'Was sollte die Anfrage enthalten?', a: 'Unternehmen, Land, Anwendung und geschätztes Monatsvolumen, dazu eine Zeile zum Projekt. Die Antwort bringt das technische Datenblatt.' },
      { q: 'Welches Format sollte ich anfragen?', a: 'Flüssig, wenn ein geöffnetes Gebinde bei höchstens {opened_temp} °C in {opened_days} Tagen umschlägt; sonst Pulver, denn ein geöffneter Beutel verdirbt nicht, solange er trocken und verschlossen bleibt.' },
    ],
    links: [
      { href: '{foodservice_href}', label: 'Gemeinschaftsverpflegung und Zentralküchen' },
      { href: '{bars_href}', label: 'Bars und Cocktails' },
      { href: '{index_href}', label: 'Alle Anwendungsleitfäden' },
      { href: '{products_href}', label: 'Produkte und Formate' },
    ],
  },

  netherlands: {
    inCountry: 'in den Niederlanden',
    title: 'Wie Sie Aquafaba in den Niederlanden bestellen - VERY AQUAFABA',
    h1: 'Wie Sie VERY AQUAFABA in den Niederlanden bestellen',
    crumb: 'Niederlande',
    description: 'Es gibt noch kein niederländisches Listing: Bestellungen laufen über die Formulare, mit der Anwendung und dem Monatsvolumen. Was ein Gebinde in einer Bäckerei oder Küche ersetzt und was Sie vorbereiten.',
    lead: 'Es gibt noch kein niederländisches Listing, der Weg führt also über das Formular auf dieser Seite, das Profi-Formular für ein Volumen und das Kontaktformular für eine Frage. Nennen Sie Anwendung und geschätztes Monatsvolumen, dann kommt die Antwort mit den Formaten und dem technischen Datenblatt zurück. Zum Rechnen: {white_liquid} g flüssig ersetzen ein Eiweiß, ein 1 L Tetrapak {liquid_1l_whites} und ein 200 g Beutel Pulver {powder_200g_whites}.',
    sections: [
      { id: 'order', title: 'Was in die Anfrage gehört', html: ask },
      { id: 'range', title: 'Die Formate, um die es geht', html: range },
      {
        id: 'start',
        title: 'Bäckerei, Küche oder Bar',
        html: `<p>Drei Wege decken die meisten niederländischen Anfragen ab, jeder mit einer eigenen Seite: eine Bäckerei oder Konditoreiabteilung liest <a href="{pastry_href}">Konditorei und Bäckerei</a>, wo das Format dem Ofenrhythmus folgt; eine Zentralküche liest <a href="{foodservice_href}">Gemeinschaftsverpflegung und Zentralküchen</a>, aufgebaut um die 10 L Bag-in-Box; eine Bar liest <a href="{bars_href}">Bars und Cocktails</a>, wo ein Sour {cocktails_dose} g braucht.</p>
<p>Die Rechnung für das Formular ist kurz: {meringue_dose} g pro Charge Baiser, {mayonnaise_dose} g pro Charge Mayonnaise, {chocolate_mousse_dose} g pro Charge Mousse, {cocktails_dose} g pro Sour. Zählen Sie die Chargen des Monats, multiplizieren Sie und tragen Sie dieses Volumen ein. Jeder <a href="{index_href}">Anwendungsleitfaden</a> hat einen Rechner, der das für Sie erledigt.</p>`,
      },
    ],
    faq: [
      { q: 'Kann ich heute Aquafaba in den Niederlanden kaufen?', a: 'Es gibt noch kein niederländisches Listing. Bestellungen laufen über das Profi-Formular auf dieser Seite, mit der Anwendung und dem geschätzten Monatsvolumen.' },
      { q: 'Was muss die Anfrage enthalten?', a: 'Unternehmen, Land, Anwendung und geschätztes Monatsvolumen, dazu eine Zeile zum Projekt. Die Antwort bringt das technische Datenblatt.' },
      { q: 'Wie viel verbraucht eine Bäckerei?', a: 'Zählen Sie die Chargen: {meringue_batches_1l} Chargen Baiser oder {macarons_batches_1l} Chargen Macaronschalen kommen aus einem 1 L Tetrapak, der {liquid_1l_whites} Eiweiße ersetzt.' },
      { q: 'Welches Format frage ich an?', a: 'Flüssig, wenn ein geöffnetes Gebinde bei höchstens {opened_temp} °C innerhalb von {opened_days} Tagen umschlägt; sonst Pulver, denn ein geöffneter Beutel verdirbt nicht, solange er trocken und verschlossen bleibt.' },
    ],
    links: [
      { href: '{pastry_href}', label: 'Konditorei und Bäckerei' },
      { href: '{foodservice_href}', label: 'Gemeinschaftsverpflegung und Zentralküchen' },
      { href: '{bars_href}', label: 'Bars und Cocktails' },
      { href: '{products_href}', label: 'Produkte und Formate' },
    ],
  },
};
