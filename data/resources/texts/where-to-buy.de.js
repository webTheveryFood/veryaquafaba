// Wo kaufen, Deutsch (Set-2 E0 und die Länderseiten). Der Bezugsweg je Land ist der des
// Kunden (Arnaud, Mail vom 28. August 2026, "Purchase URL for every country"): die USA und
// Deutschland über Amazon, Frankreich über InstantChef, ALLE ANDEREN LÄNDER über das
// Kontaktformular und das B2B-Formular. Keine Seite behauptet einen Bezugsweg, den wir nicht
// belegen können, und keine nennt Preise oder Bestand. Kein Gedankenstrich.
const grid = (heads, rows, cls = '') => `<table class="va-guide-grid${cls ? ` ${cls}` : ''}">
<thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
<tbody>
${rows.map((r) => `<tr>${r.map((c, i) => `<td data-label="${heads[i]}">${c}</td>`).join('')}</tr>`).join('\n')}
</tbody>
</table>`;

// Das Sortiment ist überall dasselbe; nur der Weg dorthin ändert sich je Land (vom Verzeichnis verwendet).
const range = `<p>Jedes Gebinde wird über die Eiweiße beschrieben, die es ersetzt, bei {white_liquid} g flüssig oder {white_powder} g Pulver pro Eiweiß.</p>
<ul>
<li>Flüssig: 1 L Tetrapak = {liquid_1l_whites} Eiweiße, 10 L Bag-in-Box = {bib_10l_whites}, 1 T IBC = {ibc_1t_whites}.</li>
<li>Pulver: 30 g = {powder_30g_whites} Eiweiße, 200 g = {powder_200g_whites}, 3 kg = {powder_3kg_whites}.</li>
</ul>
<p>Verschlossen halten beide mindestens {unopened_months} Monate bei Raumtemperatur. Geöffnete flüssige Ware wird bei höchstens {opened_temp} °C gekühlt und innerhalb von {opened_days} Tagen verbraucht; geöffnetes Pulver verdirbt nicht, solange es trocken und verschlossen bleibt. Die <a href="{products_href}">Produktseite</a> zeigt das ganze Sortiment.</p>`;

export default {
  index: {
    title: 'Wo Sie VERY AQUAFABA kaufen, nach Land - VERY AQUAFABA',
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

  'united-states': {
    inCountry: 'in den USA',
    title: 'Wo Sie Aquafaba in den USA kaufen - VERY AQUAFABA',
    h1: 'Wo Sie VERY AQUAFABA in den USA kaufen',
    crumb: 'USA',
    description: 'VERY AQUAFABA in den USA bei Amazon kaufen: das 1 L Tetrapak, das Tetrapak für Cocktailbars und das Viererpack. Welches passt, und wie Sie mehr bestellen.',
    lead: 'Jede Profiküche hat ein Rezept, das Eiweiß braucht, und einen Grund, keines zu verwenden: einen veganen Gast, ein rohes Ei im Sour, ein Allergen auf dem Etikett. VERY AQUAFABA ist Kichererbsen-Aquafaba, ein pflanzliches Eiweiß, das wie das Original aufschlägt, bindet und emulgiert. Wenn Sie in den USA sind, kaufen Sie es direkt bei Amazon. Unten steht, welches Produkt Sie wählen und wie Sie größere Mengen bestellen.',
    sections: [
      {
        id: 'which',
        title: 'Welches Produkt zu Ihnen passt',
        html: `<p>Beginnen Sie damit, wie schnell Sie es verbrauchen. Ein geöffnetes Tetrapak steht im Kühlschrank und wird innerhalb von {opened_days} Tagen verbraucht, kaufen Sie also für die Woche, die Sie wirklich haben.</p>
<ul>
<li><strong>Ein paar Mal pro Woche Baiser aufschlagen oder Mousse unterheben?</strong> Ein 1 L Tetrapak genügt. Es entspricht {liquid_1l_whites} Eiweißen, das sind {meringue_batches_1l} Ansätze Baiser oder {macarons_batches_1l} Ansätze Macarons, und das nächste wartet verschlossen im Trockenlager, mindestens {unopened_months} Monate.</li>
<li><strong>Jeden Abend Sours shaken?</strong> Bestellen Sie das Tetrapak, das für Cocktailbars gelistet ist. Dasselbe Aquafaba, dort zu finden, wo Bartender danach suchen, und ein Tetrapak schenkt {cocktails_batches_1l} Sours aus, bevor es leer ist, deutlich innerhalb seiner {opened_days} Tage.</li>
<li><strong>Ein Tetrapak vor Wochenende leer?</strong> Nehmen Sie das Viererpack. Öffnen Sie eines, lassen Sie drei verschlossen im Regal und bestellen Sie nach, wenn das letzte in den Kühlschrank kommt.</li>
</ul>
<p>Wenn Sie nur ab und zu aufschlagen, passt das Pulver vielleicht besser zu Ihnen, denn ein geöffneter Beutel verdirbt nicht. Es ist in den USA noch nicht bei Amazon, aber Sie können es unten anfragen.</p>`,
      },
      {
        id: 'more',
        title: 'Brauchen Sie mehr als ein Tetrapak pro Woche?',
        html: `<p>Über das Tetrapak hinaus kalkulieren wir pro Projekt: Die 10 L Bag-in-Box sind {bib_10l_whites} Eiweiße, der 1 T IBC {ibc_1t_whites}, und das Pulver, das in den USA noch nicht bei Amazon ist, geht denselben Weg. Sagen Sie uns über das Formular auf dieser Seite, was Sie herstellen und ungefähr wie viel pro Monat, und das technische Datenblatt kommt mit dem Angebot zurück.</p>
<p>Nicht sicher, welches Format oder wie viel? Der <a href="{professional_href}">Profi-Bereich</a> klärt es nach Tätigkeit, und jeder <a href="{index_href}">Anwendungsleitfaden</a> hat einen Rechner, der das Rezept auf Ihre Ansätze skaliert.</p>`,
      },
    ],
    faq: [
      { q: 'Wo kann ich Aquafaba in den USA kaufen?', a: 'Bei Amazon, über die drei Produkte auf dieser Seite: das 1 L Tetrapak, dasselbe Tetrapak gelistet für Cocktailbars und das Viererpack. Alle drei sind flüssiges VERY AQUAFABA.' },
      { q: 'Was ersetzt ein 1 L Tetrapak?', a: '{liquid_1l_whites} Eiweiße, das sind {cocktails_batches_1l} Sours, {meringue_batches_1l} Ansätze Baiser oder {eggs_1l} ganze Eier beim Backen.' },
      { q: 'Unterscheiden sich die drei Produkte nur in der Menge?', a: 'Ja. Sie enthalten dasselbe Aquafaba. Das Produkt für Cocktailbars ist das 1 L Tetrapak unter dem Namen, nach dem eine Bar sucht, und das Viererpack sind vier Tetrapaks für einen Betrieb, der mehr als eines auf einmal verbraucht.' },
      { q: 'Kann ich das Pulver in den USA kaufen?', a: 'Bei Amazon noch nicht. Fragen Sie es über das Formular auf dieser Seite an, mit Ihrer Anwendung und Ihrem Monatsvolumen, und wir melden uns mit dem, was möglich ist.' },
      { q: 'Wie lange hält ein geöffnetes Tetrapak?', a: '{opened_days} Tage bei höchstens {opened_temp} °C. Verschlossen hält es mindestens {unopened_months} Monate bei Raumtemperatur.' },
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
    title: 'Aquafaba im Vereinigten Königreich bestellen - VERY AQUAFABA',
    h1: 'So bekommen Sie VERY AQUAFABA im Vereinigten Königreich',
    crumb: 'Vereinigtes Königreich',
    description: 'VERY AQUAFABA im Vereinigten Königreich: noch kein Online-Shop, aber eine Nachricht genügt. Wie Sie bestellen, wie viel Sie anfragen und welches Format passt.',
    lead: 'Zu Baiser aufschlagen, in Mousse unterheben, in einen Sour shaken: VERY AQUAFABA ist Kichererbsen-Aquafaba, ein pflanzliches Eiweiß, das alles kann, was das Original kann, ohne das Ei. Sagen Sie uns, was Sie herstellen und ungefähr wie viel, und wir melden uns mit den Formaten, dem technischen Datenblatt und einem Angebot. Einen Online-Shop im Vereinigten Königreich haben wir noch nicht eröffnet, aber das sollte Sie nicht davon abhalten, es auszuprobieren. Schreiben Sie uns.',
    sections: [
      {
        id: 'order',
        title: 'So bestellen Sie im Vereinigten Königreich',
        html: `<p>Erzählen Sie uns von Ihrer Küche, und wir übernehmen von dort. So bestellen Sie Aquafaba bei uns:</p>
<ol>
<li><strong>Sagen Sie uns, was Sie herstellen und ungefähr wie viel pro Monat.</strong> Das Formular am Ende dieser Seite fragt nach Ihrem Unternehmen, der Anwendung und einem geschätzten Monatsvolumen. Eine Zeile zum Projekt hilft.</li>
<li><strong>Wir melden uns mit den Formaten, die wir Ihnen schicken können, dem technischen Datenblatt und einem Angebot,</strong> einschließlich Mindestbestellmenge und Lieferzeit für Ihr Volumen.</li>
<li><strong>Sie bestellen.</strong> Verschlossen halten die Gebinde mindestens {unopened_months} Monate bei Raumtemperatur, eine erste Bestellung kann also im Trockenlager warten, bis Sie sie brauchen.</li>
</ol>
<p>Ein Amazon-Listing für das Vereinigte Königreich ist geplant. Sobald es live ist, verlinkt diese Seite dorthin, und das 1 L Tetrapak ist einen Klick entfernt.</p>`,
      },
      {
        id: 'howmuch',
        title: 'Wie viel sollten Sie anfragen?',
        html: `<p>Sie brauchen keine genaue Zahl, eine grobe Monatsmenge reicht uns für ein Angebot. Am einfachsten kommen Sie dorthin, wenn Sie in den Rezepten denken, die Sie herstellen. Ein Sour braucht {cocktails_dose} g Aquafaba, eine Bar mit zehn Sours pro Abend liegt also bei etwa {sours_10_night_l} Litern im Monat. Ein Ansatz Baiser braucht {meringue_dose} g, ein Ansatz Mayonnaise {mayonnaise_dose} g. Zählen Sie Ihre Ansätze, und wenn die Summe schwer vorstellbar ist, hat jeder <a href="{index_href}">Anwendungsleitfaden</a> einen Rechner, der das für Sie erledigt.</p>
<p>Zur Größenordnung: Ein 1 L Tetrapak sind {liquid_1l_whites} Eiweiße, genug für {cocktails_batches_1l} Sours oder {meringue_batches_1l} Ansätze Baiser. Eine gut besuchte Cocktailbar verbraucht eines pro Woche. Eine Hotelgruppe oder eine Zentralküche liegt näher an der 10 L Bag-in-Box.</p>`,
      },
      {
        id: 'format',
        title: 'Flüssig oder Pulver: Wonach sollten Sie fragen?',
        html: `<p>Beides ist dasselbe Aquafaba. Flüssig ist gießfertig und steht nach dem Öffnen im Kühlschrank, {opened_days} Tage lang. Pulver wird mit Wasser angerührt, wenn Sie es brauchen, und ein geöffneter Beutel hält, bis Sie ihn brauchen, trocken und verschlossen.</p>
<p>Wenn Sie es also an den meisten Tagen verwenden, fragen Sie nach flüssig. Wenn Sie es ab und zu verwenden oder Ihr Kühlschrank schon voll ist, fragen Sie nach Pulver. Und wenn Ihre Wochenenden voll und Ihre Wochentage ruhig sind, führen viele Bars beides. Die <a href="{bars_href}">Seite Bars und Cocktails</a> und die <a href="{pastry_href}">Seite Konditorei und Bäckerei</a> gehen weiter ins Detail.</p>`,
      },
    ],
    faq: [
      { q: 'Kann ich heute Aquafaba im Vereinigten Königreich kaufen?', a: 'Noch nicht in einem Shop. Sie können VERY AQUAFABA direkt bei uns bestellen: Schicken Sie Ihre Anwendung und Ihr geschätztes Monatsvolumen über das Formular auf dieser Seite, und wir antworten mit den Formaten, dem technischen Datenblatt und einem Angebot.' },
      { q: 'Wird VERY AQUAFABA bei Amazon UK erhältlich sein?', a: 'Ja, das ist geplant. Diese Seite verlinkt das Listing, sobald es live ist.' },
      { q: 'Gibt es eine Mindestbestellmenge?', a: 'Sie hängt von Format und Volumen ab und kommt deshalb mit dem Angebot. Sagen Sie uns, was Sie herstellen und wie viel pro Monat, und Sie erhalten Mindestbestellmenge und Lieferzeit zusammen mit dem technischen Datenblatt.' },
      { q: 'Nach welchem Format sollte ich fragen?', a: 'Flüssig, wenn ein geöffnetes Gebinde innerhalb von {opened_days} Tagen im Kühlschrank verbraucht wird; Pulver, wenn nicht, denn ein geöffneter Beutel verdirbt nicht, solange er trocken und verschlossen bleibt. Viele Bars führen beides.' },
      { q: 'Wie viele Sours schenkt ein Liter aus?', a: '{cocktails_batches_1l}, zu je {cocktails_dose} g, zuerst dry geshaked. Ein 200 g Beutel Pulver schenkt {cocktails_batches_200g} aus.' },
    ],
    links: [
      { href: '{bars_href}', label: 'Bars und Cocktails' },
      { href: '{pastry_href}', label: 'Konditorei und Bäckerei' },
      { href: '{cocktails_href}', label: 'Cocktails: flüssig oder Pulver?' },
      { href: '{products_href}', label: 'Produkte und Formate' },
    ],
  },

  france: {
    inCountry: 'in Frankreich',
    title: 'Wo Sie Aquafaba in Frankreich kaufen - VERY AQUAFABA',
    h1: 'Wo Sie VERY AQUAFABA in Frankreich kaufen',
    crumb: 'Frankreich',
    description: 'VERY AQUAFABA in Frankreich bei InstantChef kaufen: flüssig in 1 L und Pulver in 200 g. Welches zu Ihrer Konditorei oder Bar passt, wie Sie mehr bestellen.',
    lead: 'Sie müssen nicht auf Baiser verzichten, um eifrei zu arbeiten. VERY AQUAFABA ist Kichererbsen-Aquafaba, ein pflanzliches Eiweiß, das wie das Original aufschlägt, bindet und emulgiert. Wenn Sie in Frankreich sind, kaufen Sie es direkt bei InstantChef, flüssig und als Pulver. Unten steht, welches zu Ihnen passt und wie Sie größere Mengen bestellen.',
    sections: [
      {
        id: 'which',
        title: 'Sollten Sie flüssiges Aquafaba oder Pulver kaufen?',
        html: `<p>Beginnen Sie bei Ihrem Rhythmus: wie oft Sie spritzen, aufschlagen oder shaken, und ob ein geöffnetes Gebinde rechtzeitig aufgebraucht ist.</p>
<ul>
<li><strong>An den meisten Tagen Macarons oder Baiser spritzen?</strong> Das 1 L Tetrapak. Es kommt direkt aus dem Kühlschrank auf Aufschlagtemperatur und ergibt {macarons_batches_1l} Ansätze Macaronschalen oder {meringue_batches_1l} Ansätze Baiser. Geöffnet wird es innerhalb von {opened_days} Tagen bei höchstens {opened_temp} °C verbraucht.</li>
<li><strong>In jedem Service Sours shaken?</strong> Wieder das Tetrapak: {cocktails_dose} g pro Drink, zuerst dry geshaked, {cocktails_batches_1l} Sours pro Tetrapak. Wenn Sie nur ein paar Sours pro Woche ausschenken, nehmen Sie stattdessen den Beutel und rühren an, was der Abend braucht.</li>
<li><strong>Backen auf Bestellung, oder wenig Platz im Kühlschrank?</strong> Der 200 g Beutel Pulver: {white_powder} g und {white_water} ml Wasser pro Eiweiß, {powder_200g_whites} Eiweiße pro Beutel, und kein Datum nach dem Öffnen.</li>
</ul>
<p>Die <a href="{pastry_href}">Seite Konditorei und Bäckerei</a> und die <a href="{bars_href}">Seite Bars und Cocktails</a> gehen bei jedem dieser Punkte weiter ins Detail, und der <a href="{macarons_href}">Macaron-Leitfaden</a> trägt die vollständige Methode.</p>`,
      },
      {
        id: 'more',
        title: 'Einkaufen für ein Labor oder eine Gruppe',
        html: `<p>InstantChef führt die beiden Formate, mit denen die meisten Küchen beginnen. Wenn Sie mehr brauchen, kalkulieren wir es pro Projekt: Die 10 L Bag-in-Box sind {bib_10l_whites} Eiweiße, für eine Zentralküche, die kiloweise entnimmt, und der 1 T IBC {ibc_1t_whites}, für eine Linie. Sagen Sie uns über das Formular auf dieser Seite, was Sie herstellen und ungefähr wie viel pro Monat, und das technische Datenblatt kommt mit dem Angebot zurück.</p>`,
      },
    ],
    faq: [
      { q: 'Wo kann ich Aquafaba in Frankreich kaufen?', a: 'Bei InstantChef, über die beiden Produkte auf dieser Seite: die flüssige Ware in 1 L und das Pulver in 200 g.' },
      { q: 'Wie viele Ansätze Macarons ergibt ein 1 L Tetrapak?', a: '{macarons_batches_1l} Ansätze von etwa {macarons_yield} Schalen, zu je {macarons_dose} g. Dasselbe Tetrapak ergibt {meringue_batches_1l} Ansätze Baiser oder {cocktails_batches_1l} Sours.' },
      { q: 'Gibt es das Pulver auch bei InstantChef?', a: 'Ja, den 200 g Beutel, das sind {powder_200g_whites} Eiweiße, angerührt mit je {white_powder} g Pulver und {white_water} ml Wasser. Ein geöffneter Beutel hält, solange er trocken und verschlossen bleibt.' },
      { q: 'Wird VERY AQUAFABA in Frankreich bei Amazon erhältlich sein?', a: 'Das ist der Plan. Bis dahin führt InstantChef beide Formate, und diese Seite verlinkt Amazon, sobald es live ist.' },
      { q: 'Wie bekomme ich die großen Formate?', a: 'Über das Formular auf dieser Seite: Bag-in-Box und IBC werden pro Projekt kalkuliert, mit dem technischen Datenblatt.' },
    ],
    links: [
      { href: '{bars_href}', label: 'Bars und Cocktails' },
      { href: '{pastry_href}', label: 'Konditorei und Bäckerei' },
      { href: '{macarons_href}', label: 'Macarons: flüssig oder Pulver?' },
      { href: '{index_href}', label: 'Alle Anwendungsleitfäden' },
      { href: '{products_href}', label: 'Produkte und Formate' },
    ],
  },

  belgium: {
    inCountry: 'in Belgien',
    title: 'Aquafaba in Belgien bestellen - VERY AQUAFABA',
    h1: 'So bekommen Sie VERY AQUAFABA in Belgien',
    crumb: 'Belgien',
    description: 'VERY AQUAFABA in Belgien: noch kein Online-Shop, aber eine Nachricht genügt. Wie Sie bestellen, wie viel Sie anfragen und ob flüssig oder Pulver.',
    lead: 'Schokoladenmousse ohne Ei, Macarons ohne Eiweiß: VERY AQUAFABA ist Kichererbsen-Aquafaba, ein pflanzliches Eiweiß, das wie das Original aufschlägt, bindet und emulgiert. In einem belgischen Online-Shop ist es noch nicht, aber eine Nachricht an uns genügt. Sagen Sie uns, was Sie herstellen und ungefähr wie viel, und wir melden uns mit den Formaten, dem technischen Datenblatt und einem Angebot.',
    sections: [
      {
        id: 'order',
        title: 'So bestellen Sie in Belgien',
        html: `<p>Erzählen Sie uns von Ihrer Küche, und wir übernehmen von dort. So bestellen Sie Aquafaba bei uns:</p>
<ol>
<li><strong>Schicken Sie uns ein paar Zeilen dazu, was Sie herstellen und ungefähr wie viel pro Monat.</strong> Das Formular am Ende dieser Seite fragt nach Ihrem Unternehmen, der Anwendung und einem geschätzten Monatsvolumen.</li>
<li><strong>Wir antworten mit den Formaten, die wir Ihnen schicken können, dem technischen Datenblatt und einem Angebot,</strong> einschließlich Mindestbestellmenge und Lieferzeit für Ihr Volumen.</li>
<li><strong>Sie bestellen.</strong> Verschlossen halten die Gebinde mindestens {unopened_months} Monate bei Raumtemperatur, nichts muss also in der Woche der Lieferung verbraucht werden.</li>
</ol>
<p>Ein Amazon-Listing für Belgien und die Niederlande ist geplant. Sobald es live ist, verlinkt diese Seite dorthin.</p>`,
      },
      {
        id: 'howmuch',
        title: 'Wie viel sollten Sie anfragen?',
        html: `<p>Eine grobe Monatsmenge reicht. Denken Sie in den Desserts, die Sie anrichten: Ein Ansatz Schokoladenmousse braucht {chocolate_mousse_dose} g Aquafaba für etwa {chocolate_mousse_yield} Portionen, ein Restaurant mit sechzig Portionen pro Woche liegt also bei etwa {mousse_60_week_l} Litern im Monat. Ein Ansatz Macarons braucht {macarons_dose} g, ein Ansatz Baiser {meringue_dose} g. Jeder <a href="{index_href}">Anwendungsleitfaden</a> hat einen Rechner, der die Rechnung für Ihr Rezept erledigt.</p>
<p>Zur Größenordnung: Ein 1 L Tetrapak sind {liquid_1l_whites} Eiweiße, das sind {chocolate_mousse_batches_1l} Ansätze Mousse oder {macarons_batches_1l} Ansätze Macarons. Ein 200 g Beutel Pulver sind {powder_200g_whites} Eiweiße. Eine Konditorei, die an den meisten Tagen spritzt, verbraucht ein Tetrapak in wenigen Tagen; einem Restaurant mit Mousse als einem Dessert unter mehreren dient ein Beutel besser.</p>`,
      },
      {
        id: 'format',
        title: 'Flüssig oder Pulver: Wonach sollten Sie fragen?',
        html: `<p>Dasselbe Aquafaba, zwei Zustände. Die flüssige Ware kommt aus dem Kühlschrank schon auf Aufschlagtemperatur und wird nach dem Öffnen innerhalb von {opened_days} Tagen verbraucht. Das Pulver wird mit Wasser angerührt, wenn Sie es brauchen, {white_powder} g und {white_water} ml pro Eiweiß, und ein geöffneter Beutel hält, bis Sie ihn brauchen, trocken und verschlossen.</p>
<p>Eine Konditorei, die an den meisten Tagen aufschlägt, fragt nach flüssig. Ein Restaurant, das ab und zu eine Mousse macht, fragt nach Pulver, damit zwischen zwei Karten nichts verdirbt. Eine Schokoladenlinie, die jeden Tag Aquafaba unterhebt, liegt näher an der 10 L Bag-in-Box. Der <a href="{chocolate_mousse_href}">Leitfaden zur Schokoladenmousse</a> und die <a href="{pastry_href}">Seite Konditorei und Bäckerei</a> gehen weiter ins Detail.</p>`,
      },
    ],
    faq: [
      { q: 'Kann ich heute Aquafaba in Belgien kaufen?', a: 'Noch nicht in einem Shop. Schicken Sie uns ein paar Zeilen über das Formular auf dieser Seite, was Sie herstellen und Ihr geschätztes Monatsvolumen, und wir antworten mit den Formaten, dem technischen Datenblatt und einem Angebot.' },
      { q: 'Wird VERY AQUAFABA in Belgien bei Amazon erhältlich sein?', a: 'Ja, ein Amazon-Listing für Belgien und die Niederlande ist geplant. Diese Seite verlinkt es, sobald es live ist.' },
      { q: 'Gibt es eine Mindestbestellmenge?', a: 'Sie hängt von Format und Volumen ab und kommt deshalb mit dem Angebot. Sagen Sie uns, was Sie herstellen und wie viel pro Monat, und Sie erhalten Mindestbestellmenge und Lieferzeit zusammen mit dem technischen Datenblatt.' },
      { q: 'Wie viele Portionen Mousse ergibt ein Liter?', a: 'Ein 1 L Tetrapak sind {chocolate_mousse_batches_1l} Ansätze von etwa {chocolate_mousse_yield} Portionen, zu je {chocolate_mousse_dose} g Aquafaba. Die Mousse wird in {chocolate_mousse_set_time} Stunden fest und hält {chocolate_mousse_keep} Tage gekühlt.' },
      { q: 'Sollte eine Konditorei nach flüssig oder Pulver fragen?', a: 'Flüssig, wenn Sie an den meisten Tagen aufschlagen, denn ein geöffnetes Tetrapak wird innerhalb von {opened_days} Tagen verbraucht. Pulver, wenn Sie ab und zu eine Mousse machen oder Macarons spritzen, denn ein geöffneter Beutel verdirbt nicht.' },
    ],
    links: [
      { href: '{chocolate_mousse_href}', label: 'Schokoladenmousse: flüssig oder Pulver?' },
      { href: '{macarons_href}', label: 'Macarons: flüssig oder Pulver?' },
      { href: '{pastry_href}', label: 'Konditorei und Bäckerei' },
      { href: '{products_href}', label: 'Produkte und Formate' },
    ],
  },

  germany: {
    inCountry: 'in Deutschland',
    title: 'Wo Sie Aquafaba in Deutschland kaufen - VERY AQUAFABA',
    h1: 'Wo Sie VERY AQUAFABA in Deutschland kaufen',
    crumb: 'Deutschland',
    description: 'VERY AQUAFABA in Deutschland bei Amazon kaufen: 1 L Tetrapak flüssig und 200 g Beutel Pulver. Welches Ihre Bäckerei vorrätig hält, wie Sie mehr bestellen.',
    lead: 'Jede Bäckerei bekommt die Anfrage früher oder später: ein Kuchen ohne Ei, eine vegane Bestellung zum Geburtstag, ein Kunde mit Allergie. VERY AQUAFABA ist Kichererbsen-Aquafaba, ein pflanzliches Eiweiß, das wie das Original aufschlägt, bindet und emulgiert. Wenn Sie in Deutschland sind, kaufen Sie es direkt bei Amazon, flüssig und als Pulver. Unten steht, welches Sie vorrätig halten und wie Sie größere Mengen bestellen.',
    sections: [
      {
        id: 'which',
        title: 'Welches Aquafaba-Format sollten Sie kaufen?',
        html: `<p>Beginnen Sie damit, wie viel davon in die tägliche Produktion geht, denn das entscheidet, ob ein geöffnetes Gebinde rechtzeitig umschlägt.</p>
<ul>
<li><strong>Jeden Tag eifrei backen?</strong> Halten Sie das 1 L Tetrapak im Kühlschrank. Es ersetzt {eggs_1l} ganze Eier oder {liquid_1l_whites} Eiweiße und kommt direkt auf Aufschlagtemperatur in die Maschine. Geöffnet wird es innerhalb von {opened_days} Tagen verbraucht, was eine tägliche Linie leicht schafft.</li>
<li><strong>Gelegentlich eine vegane Bestellung?</strong> Der 200 g Beutel Pulver ist das Richtige. Mit {white_powder} g Pulver und {white_water} ml Wasser pro Eiweiß angerührt, deckt er {powder_200g_whites} Eiweiße ab, und ein geöffneter Beutel hält, solange er trocken und verschlossen bleibt. Zwischen zwei Bestellungen verdirbt nichts.</li>
<li><strong>Beides, an verschiedenen Wochentagen?</strong> Viele Bäckereien halten das Tetrapak für die Linie und den Beutel für die Bestellungen. Das Rezept ist bei beiden dasselbe.</li>
</ul>
<p>Eines sollten Sie wissen, wenn Sie ganze Eier in einem Biskuit oder einer Brioche ersetzen: Aquafaba bringt mehr Wasser mit als ein Ei, nehmen Sie die anderen Flüssigkeiten also um {reduce_liquids} Prozent zurück und backen Sie durch. Der <a href="{baking_href}">Back-Leitfaden</a> geht es Gebäck für Gebäck durch.</p>`,
      },
      {
        id: 'more',
        title: 'Brauchen Sie mehr als ein Tetrapak pro Woche?',
        html: `<p>Amazon führt die beiden Formate, mit denen die meisten Küchen beginnen. Wenn Sie mehr brauchen, kalkulieren wir es pro Projekt: Die 10 L Bag-in-Box sind {bib_10l_whites} Eiweiße, der 1 T IBC {ibc_1t_whites} und der 3 kg Sack Pulver {powder_3kg_whites}, der für eine Trockenmischung. Sagen Sie uns über das Formular auf dieser Seite, was Sie backen und ungefähr wie viel pro Monat, und das technische Datenblatt kommt mit dem Angebot zurück.</p>`,
      },
    ],
    faq: [
      { q: 'Wo kann ich Aquafaba in Deutschland kaufen?', a: 'Bei Amazon, über die beiden Produkte auf dieser Seite: das 1 L Tetrapak flüssig und den 200 g Beutel Pulver.' },
      { q: 'Wie viele Eier ersetzt ein 1 L Tetrapak beim Backen?', a: '{eggs_1l} ganze Eier zu je {egg_liquid} g oder {liquid_1l_whites} Eiweiße zu je {white_liquid} g. Nehmen Sie die anderen Flüssigkeiten um {reduce_liquids} Prozent zurück, wenn Sie ganze Eier ersetzen.' },
      { q: 'Sollte eine Bäckerei die flüssige Ware oder das Pulver kaufen?', a: 'Die flüssige Ware, wenn eifreies Backen zum Alltag gehört, denn ein geöffnetes Tetrapak wird innerhalb von {opened_days} Tagen verbraucht. Das Pulver für gelegentliche vegane Bestellungen, denn ein geöffneter Beutel verdirbt nicht. Viele Bäckereien halten beides.' },
      { q: 'Wie bekomme ich die großen Formate?', a: 'Über das Formular auf dieser Seite: Bag-in-Box, IBC und der 3 kg Sack werden pro Projekt kalkuliert, mit dem technischen Datenblatt.' },
    ],
    links: [
      { href: '{pastry_href}', label: 'Konditorei und Bäckerei' },
      { href: '{baking_href}', label: 'Backen: flüssig oder Pulver?' },
      { href: '{reconstitution_href}', label: 'Pulver anrühren: die Regel pro Eiweiß' },
      { href: '{index_href}', label: 'Alle Anwendungsleitfäden' },
      { href: '{products_href}', label: 'Produkte und Formate' },
    ],
  },

  netherlands: {
    inCountry: 'in den Niederlanden',
    title: 'Aquafaba in den Niederlanden bestellen - VERY AQUAFABA',
    h1: 'So bekommen Sie VERY AQUAFABA in den Niederlanden',
    crumb: 'Niederlande',
    description: 'VERY AQUAFABA in den Niederlanden: noch kein Online-Shop, aber schreiben Sie uns. Wie Sie bestellen, wie viel Sie anfragen, und flüssig oder Pulver.',
    lead: 'Ein veganer Kuchen, der aufgeht, ein Baiser, das hält, eine Mousse, die fest wird: VERY AQUAFABA ist Kichererbsen-Aquafaba, ein pflanzliches Eiweiß, das wie das Original aufschlägt, bindet und emulgiert. In einem niederländischen Online-Shop sind wir noch nicht, vorerst bekommen Sie es also, indem Sie uns schreiben. Sagen Sie uns, was Sie backen und ungefähr wie viel, und wir melden uns mit den Formaten, dem technischen Datenblatt und einem Angebot.',
    sections: [
      {
        id: 'order',
        title: 'So bestellen Sie in den Niederlanden',
        html: `<p>Erzählen Sie uns von Ihrer Bäckerei oder Küche, und wir übernehmen von dort. So bestellen Sie Aquafaba bei uns:</p>
<ol>
<li><strong>Schreiben Sie uns, was Sie backen und ungefähr wie viel pro Monat.</strong> Das Formular am Ende dieser Seite fragt nach Ihrem Unternehmen, der Anwendung und einem geschätzten Monatsvolumen. Eine Zeile zum Projekt hilft.</li>
<li><strong>Wir antworten mit den Formaten, die wir Ihnen schicken können, dem technischen Datenblatt und einem Angebot,</strong> einschließlich Mindestbestellmenge und Lieferzeit für Ihr Volumen.</li>
<li><strong>Sie bestellen.</strong> Verschlossen halten die Gebinde mindestens {unopened_months} Monate bei Raumtemperatur, eine erste Bestellung kann also im Trockenlager warten, bis die nächste vegane Anfrage kommt.</li>
</ol>
<p>Ein Amazon-Listing für die Niederlande und Belgien ist geplant. Sobald es live ist, verlinkt diese Seite dorthin.</p>`,
      },
      {
        id: 'howmuch',
        title: 'Wie viel sollten Sie anfragen?',
        html: `<p>Eine grobe Monatsmenge ist alles, was wir brauchen. Für eine Bäckerei kommen Sie am einfachsten dorthin, indem Sie die Eier zählen, die Sie ersetzen würden: Ein ganzes Ei sind {egg_liquid} g Aquafaba, ein Eiweiß {white_liquid} g. Eine Bäckerei, die dreißig Eier am Tag tauscht, liegt bei etwa {eggs_30_day_l} Litern im Monat; ein Ansatz Baiser sind {meringue_dose} g. Wenn Sie die Rechnung lieber nicht selbst machen, rechnet der <a href="{baking_calc_href}">Ersatzrechner</a> ein ganzes Rezept um.</p>
<p>Zur Größenordnung: Ein 1 L Tetrapak ersetzt {eggs_1l} ganze Eier oder {liquid_1l_whites} Eiweiße, das sind {meringue_batches_1l} Ansätze Baiser. Ein 200 g Beutel Pulver ersetzt {powder_200g_whites} Eiweiße. Eine Bäckerei mit täglicher eifreier Linie verbraucht ein Tetrapak in wenigen Tagen; einer mit gelegentlicher veganer Bestellung dient ein Beutel besser.</p>`,
      },
      {
        id: 'format',
        title: 'Flüssig oder Pulver: Wonach sollten Sie fragen?',
        html: `<p>Es ist dasselbe Aquafaba in zwei Zuständen. Die flüssige Ware kommt direkt in die Maschine und steht nach dem Öffnen {opened_days} Tage im Kühlschrank. Das Pulver wird mit Wasser angerührt, wenn Sie es brauchen, {white_powder} g und {white_water} ml pro Eiweiß, und ein geöffneter Beutel hält, bis Sie ihn brauchen, trocken und verschlossen.</p>
<p>Für eine tägliche eifreie Linie fragen Sie nach flüssig: Das Gebinde schlägt deutlich innerhalb seiner {opened_days} Tage um. Für die gelegentliche vegane Bestellung fragen Sie nach Pulver: Zwischen zwei Bestellungen verdirbt nichts. Viele Bäckereien halten beides. Eines sollten Sie wissen, wenn Sie ganze Eier ersetzen: Aquafaba bringt mehr Wasser mit als ein Ei, nehmen Sie die anderen Flüssigkeiten also um {reduce_liquids} Prozent zurück. Der <a href="{baking_href}">Back-Leitfaden</a> geht es Gebäck für Gebäck durch, und die <a href="{pastry_href}">Seite Konditorei und Bäckerei</a> plant die Woche um das, was hält.</p>`,
      },
    ],
    faq: [
      { q: 'Kann ich heute Aquafaba in den Niederlanden kaufen?', a: 'Noch nicht in einem Shop. Schreiben Sie uns über das Formular auf dieser Seite, was Sie backen und Ihr geschätztes Monatsvolumen, und wir antworten mit den Formaten, dem technischen Datenblatt und einem Angebot.' },
      { q: 'Wird VERY AQUAFABA in den Niederlanden bei Amazon erhältlich sein?', a: 'Ja, ein Amazon-Listing für die Niederlande und Belgien ist geplant. Diese Seite verlinkt es, sobald es live ist.' },
      { q: 'Gibt es eine Mindestbestellmenge?', a: 'Sie hängt von Format und Volumen ab und kommt deshalb mit dem Angebot. Sagen Sie uns, was Sie backen und wie viel pro Monat, und Sie erhalten Mindestbestellmenge und Lieferzeit zusammen mit dem technischen Datenblatt.' },
      { q: 'Wie viele Eier ersetzt ein 1 L Tetrapak?', a: '{eggs_1l} ganze Eier zu je {egg_liquid} g oder {liquid_1l_whites} Eiweiße zu je {white_liquid} g. Nehmen Sie die anderen Flüssigkeiten um {reduce_liquids} Prozent zurück, wenn Sie ganze Eier ersetzen.' },
      { q: 'Sollte eine Bäckerei nach flüssig oder Pulver fragen?', a: 'Flüssig für eine tägliche eifreie Linie, denn ein geöffnetes Tetrapak wird innerhalb von {opened_days} Tagen verbraucht. Pulver für gelegentliche vegane Bestellungen, denn ein geöffneter Beutel verdirbt nicht. Viele Bäckereien halten beides.' },
    ],
    links: [
      { href: '{pastry_href}', label: 'Konditorei und Bäckerei' },
      { href: '{baking_href}', label: 'Backen: flüssig oder Pulver?' },
      { href: '{baking_calc_href}', label: 'Ersatzrechner' },
      { href: '{products_href}', label: 'Produkte und Formate' },
    ],
  },

};
