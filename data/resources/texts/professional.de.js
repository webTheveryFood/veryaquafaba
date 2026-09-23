// Profis nach Zielgruppe, Deutsch (Set-2 B0 bis B4). Gleiche Struktur, Tokens und Tags wie
// professional.en.js (geprüft von scripts/applications/check-guides.mjs). Kein Gedankenstrich.
const grid = (heads, rows) => `<table class="va-guide-grid">
<thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
<tbody>
${rows.map((r) => `<tr>${r.map((c, i) => `<td data-label="${heads[i]}">${c}</td>`).join('')}</tr>`).join('\n')}
</tbody>
</table>`;
const PICK = ['Ihr Betrieb', 'Empfehlung', 'Warum'];

export default {
  index: {
    title: 'Aquafaba für Profis: Konditorei, Bars, Gemeinschaftsverpflegung und Industrie - VERY AQUAFABA',
    h1: 'Aquafaba für Profis: welches Format für welche Küche',
    crumb: 'Profis',
    enquiryLabel: 'Profis',
    description: 'VERY AQUAFABA in der Profiküche, hinter der Bar, in der Zentralküche und auf Industrielinien: wo jede Tätigkeit einsteigt, das ganze Sortiment mit Eiweiß-Äquivalenten und das Anfrageformular für Volumen.',
    lead: 'VERY AQUAFABA ersetzt Eiweiß in der Konditorei, hinter der Bar, in der Zentralküche und auf Industrielinien. Eine Regel gilt überall: {white_liquid} g flüssig oder {white_powder} g Pulver ersetzen ein Eiweiß. Was sich von Betrieb zu Betrieb ändert, sind Format, Gebinde und Rhythmus des Verbrauchs. Diese Seite führt jede Tätigkeit auf ihre eigene Seite, zeigt das ganze Sortiment und öffnet das Anfrageformular für professionelle Volumen.',
    figures: true,
    sections: [
      {
        id: 'start',
        title: 'Wo jede Tätigkeit einsteigt',
        html: `<p>Vier Tätigkeiten, vier Arbeitsweisen, ein Produkt. Jede Seite unten ist für die Arbeitsweise dieser Küche geschrieben: was sie mit Aquafaba herstellt, wie schnell ein geöffnetes Gebinde aufgebraucht ist und welches Gebinde passt.</p>
${grid(['Tätigkeit', 'Hier beginnen', 'Was die Seite abdeckt'], [
  ['Konditorei, Bäckerei, Patisserie', '<a href="{pastry_href}">Konditorei und Bäckerei</a>', 'Baiser, Macarons, Mousse und eifreies Backen; das Format nach Ofenrhythmus; Chargen nach Eiweißzahl'],
  ['Cocktailbar, Hotelbar, Events', '<a href="{bars_href}">Bars und Cocktails</a>', 'Der Sour, die Dosis pro Drink, Pulver für ein paar Sours pro Woche und flüssig für jeden Service'],
  ['Zentralküche, Kantine, Restaurantgruppe', '<a href="{foodservice_href}">Gemeinschaftsverpflegung und Zentralküchen</a>', 'Mayonnaise, Saucen und Desserts in großen Mengen; Kühlkette und Platz; die 10 L Bag-in-Box'],
  ['Lebensmittelhersteller, Industrielinie', '<a href="{industry_href}">Lebensmittelindustrie</a>', 'Der 1 T IBC und die Bag-in-Box für kontinuierliche Linien; Umrechnung nach Gewicht; wie Sie Spezifikationen anfordern'],
])}
<p>Liegt Ihr Betrieb zwischen zweien, lesen Sie beide: ein Hotel führt Konditorei und Bar mit demselben Produkt, und eine Zentralküche mit Patisserielinie liest sich an den Tagen, an denen sie Baiser spritzt, wie eine Bäckerei.</p>`,
      },
      {
        id: 'range',
        title: 'Das Sortiment, mit Eiweiß-Äquivalenten',
        html: `<p>Jedes Gebinde wird über die Zahl der Eiweiße beschrieben, die es ersetzt, denn so wird ein Rezept gezählt. Die flüssige Form ist gebrauchsfertig; das Pulver wird mit Wasser angerührt, {white_powder} g + {white_water} ml pro Eiweiß, das ergibt {white_total} g Aquafaba.</p>
<ul>
<li>Flüssig: 1 L Tetrapak = {liquid_1l_whites} Eiweiße. 10 L Bag-in-Box = {bib_10l_whites}. 1 T IBC = {ibc_1t_whites}.</li>
<li>Pulver: 30 g Beutel = {powder_30g_whites} Eiweiße. 200 g Beutel = {powder_200g_whites}. 3 kg Sack = {powder_3kg_whites}.</li>
</ul>
<p>Verschlossen halten beide Formate mindestens {unopened_months} Monate bei Raumtemperatur. Geöffnete flüssige Ware liegt im Kühlschrank bei höchstens {opened_temp} °C und wird innerhalb von {opened_days} Tagen verbraucht. Geöffnetes Pulver verdirbt nicht, es muss nur trocken und verschlossen bleiben. Gebinde und Lagerung stehen in den Kennzahlen unten; das technische Datenblatt fordern Sie über das Formular auf dieser Seite an.</p>`,
      },
      {
        id: 'decide',
        title: 'Flüssig oder Pulver? Die Fragen, die entscheiden',
        html: `<p>Es geht nicht um die Chargengröße. Es geht darum, wie schnell ein geöffnetes Gebinde aufgebraucht ist, ob ein Kühlplatz frei ist, wie viel Trockenlager es gibt und wie die Küche am liebsten dosiert. Dieselben Fragen kommen auf jeder Zielgruppenseite wieder, beantwortet für diese Küche.</p>
${grid(['Frage', 'Spricht für flüssig', 'Spricht für Pulver'], [
  ['Ist ein geöffnetes Gebinde in {opened_days} Tagen aufgebraucht?', 'Ja: das Gebinde ist rechtzeitig leer', 'Nein: der Beutel wartet ohne Datum auf die nächste Charge'],
  ['Gibt es Kühlplatz für ein geöffnetes Gebinde?', 'Ja: es liegt im Kühlschrank, schon auf Arbeitstemperatur', 'Nein: der Beutel steht im Trockenregal'],
  ['Läuft die Arbeit kontinuierlich?', 'Ja: 10 L Bag-in-Box oder 1 T IBC, Dauerbetrieb und kein Anrühren', 'Nein: rühren Sie an, was die Charge braucht'],
  ['Reist das Produkt oder geht es auf Events?', 'Nur mit Kühlkette', 'Ja: es reist trocken'],
  ['Geht das Rezept in eine Trockenmischung?', 'Nein', 'Ja: es kommt trocken in die Vormischung'],
])}
<p>Volle Wochenenden, ruhige Wochentage? Beides: flüssig für den Ansturm, Pulver für den Rest. Die Umrechnung ist fest, ein Rezept läuft mit beiden.</p>`,
      },
      {
        id: 'tools',
        title: 'Die Leitfäden und die Werkzeuge dahinter',
        html: `<p>Sechs Anwendungsleitfäden beantworten flüssig oder Pulver für Baiser, Schokoladenmousse, Mayonnaise, Backen, Cocktails und Macarons, jeder mit seiner Methode, seiner Fehlertabelle und seinen Kennzahlen. Unter jedem Leitfaden liegen zwei Werkzeuge: ein Mengenrechner, der das Rezept nach Chargen oder Stück skaliert, flüssig und als Pulver mit seinem Wasser, und ein druckbares Prozessblatt mit dem Referenzwert jedes Schritts und den Kontrollen, wenn eine Charge misslingt.</p>
<p>Die <a href="{reconstitution_href}">Seite zum Anrühren des Pulvers</a> trägt die Regel pro Eiweiß und eine Tabelle von 1 bis 20 Eiweißen, für jedes in Eiweißen gezählte Rezept. Der <a href="{index_href}">Anwendungsindex</a> listet jeden Leitfaden und jedes Werkzeug.</p>`,
      },
    ],
    faq: [
      { q: 'Ist die Dosis für flüssig und Pulver dieselbe?', a: 'Ja, in Eiweißen gezählt. {white_liquid} g flüssig ersetzen ein Eiweiß, ebenso {white_powder} g Pulver, angerührt mit {white_water} ml Wasser, was {white_total} g Aquafaba ergibt. Eine Charge wird in beiden Formaten nach ihrer Eiweißzahl dosiert.' },
      { q: 'Welche Formate gibt es für große Volumen?', a: 'Die 10 L Bag-in-Box ersetzt {bib_10l_whites} Eiweiße und der 1 T IBC {ibc_1t_whites}; beide flüssig, für den Dauerbetrieb ohne Anrühren. Als Pulver ersetzt der 3 kg Sack {powder_3kg_whites} Eiweiße. Beschreiben Sie Ihre Volumen über das [Anfrageformular]({contact_href}), um das technische Datenblatt zu erhalten.' },
      { q: 'Wie lange hält ein geöffnetes Gebinde?', a: 'Geöffnete flüssige Ware wird bei höchstens {opened_temp} °C gelagert und innerhalb von {opened_days} Tagen verbraucht. Geöffnetes Pulver verdirbt nicht, solange es trocken und verschlossen bleibt. Verschlossen halten beide mindestens {unopened_months} Monate bei Raumtemperatur.' },
      { q: 'Kann eine Küche flüssig und Pulver nebeneinander führen?', a: 'Ja. Flüssig für die Tage, an denen das Gebinde umschlägt, Pulver für die unregelmäßigen Aufträge. Die Umrechnung ist fest, das Rezept ändert sich von einem Format zum anderen nicht.' },
      { q: 'Wie bekommen wir das technische Datenblatt?', a: 'Über das Formular auf dieser Seite: es fragt nach Unternehmen, Land, Anwendung und geschätztem Monatsvolumen, und das technische Datenblatt kommt mit der Antwort zurück.' },
    ],
    links: [
      { href: '{pastry_href}', label: 'Konditorei und Bäckerei' },
      { href: '{bars_href}', label: 'Bars und Cocktails' },
      { href: '{foodservice_href}', label: 'Gemeinschaftsverpflegung und Zentralküchen' },
      { href: '{industry_href}', label: 'Lebensmittelindustrie' },
      { href: '{reconstitution_href}', label: 'Pulver anrühren: die Regel pro Eiweiß' },
    ],
  },

  pastry: {
    title: 'Aquafaba für Konditorei und Bäckerei: flüssig oder Pulver nach Rotation - VERY AQUAFABA',
    h1: 'Aquafaba für Konditorei und Bäckerei: flüssig oder Pulver nach Ofenrhythmus',
    crumb: 'Konditorei und Bäckerei',
    enquiryLabel: 'Konditorei und Bäckerei',
    description: 'VERY AQUAFABA in der Konditorei und der Bäckerei: Baiser, Macarons, Schokoladenmousse und eifreies Backen, das Format nach Ofenrhythmus, Chargen nach Eiweißzahl und die Kontrollen, bevor der Mixer anläuft.',
    lead: 'In der Konditorei geht das Aquafaba in Baiser, Macaronschalen, Schokoladenmousse und eifreie Biskuits. Welches Format zu Ihnen passt, entscheidet sich daran, wie oft Sie den Ofen füllen und wie schnell ein geöffnetes Gebinde aufgebraucht ist: geöffnete flüssige Ware hält {opened_days} Tage bei höchstens {opened_temp} °C, geöffnetes Pulver verdirbt nicht. Diese Seite zählt jede Charge in Eiweißen, stellt das Format Ihrem Rhythmus gegenüber und nennt die drei Kontrollen, die die meisten Fehler entscheiden, bevor der Mixer anläuft.',
    sections: [
      {
        id: 'makes',
        title: 'Was eine Konditorei damit herstellt',
        html: `<p>Jede Anwendung hat ihren eigenen Leitfaden, Rechner und ihr Prozessblatt. Die Chargenzahlen unten stammen aus den VERY AQUAFABA Rezepten; die Gebindespalten sagen, wie viele Chargen ein Gebinde ergibt.</p>
${grid(['Anwendung', 'Pro Charge', 'Aus einem 1 L Tetrapak', 'Aus einem 200 g Beutel'], [
  ['<a href="{meringue_href}">Baiser</a>', '{meringue_dose} g, {meringue_eggs} Eiweiße, ca. {meringue_yield} Baisers', '{meringue_batches_1l} Chargen', '{meringue_batches_200g} Chargen'],
  ['<a href="{macarons_href}">Macarons</a>', '{macarons_dose} g, {macarons_eggs} Eiweiße, ca. {macarons_yield} Macarons', '{macarons_batches_1l} Chargen', '{macarons_batches_200g} Chargen'],
  ['<a href="{chocolate_mousse_href}">Schokoladenmousse</a>', '{chocolate_mousse_dose} g, {chocolate_mousse_eggs} Eiweiße, ca. {chocolate_mousse_yield} Portionen', '{chocolate_mousse_batches_1l} Chargen', '{chocolate_mousse_batches_200g} Chargen'],
  ['<a href="{baking_href}">Backen</a>', '{egg_liquid} g pro ganzes Ei, {white_liquid} g pro Eiweiß', '{eggs_1l} ganze Eier oder {whites_1l} Eiweiße', '{whites_200g} Eiweiße'],
])}
<p>Für ein Eigelb lautet die Regel der Website {yolk_liquid} g Aquafaba plus {yolk_oil} g Öl. Der <a href="{baking_calc_href}">Backrechner</a> rechnet Eier, Eiweiße und Eigelbe jedes Rezepts in flüssig um, oder in Pulver mit seinem Wasser.</p>`,
      },
      {
        id: 'decide',
        title: 'Flüssig oder Pulver? Beginnen Sie beim Ofenrhythmus',
        html: `<p>Verschlossen halten beide Formate mindestens {unopened_months} Monate bei Raumtemperatur. Die Wahl beginnt an dem Tag, an dem Sie das Gebinde öffnen. Ein 1 L Tetrapak ergibt {meringue_batches_1l} Chargen Baiser oder {macarons_batches_1l} Chargen Macarons; backen Sie so viele nicht in den {opened_days} Tagen nach dem Öffnen, ist das Pulver die bessere Wahl, denn ein geöffneter Beutel wartet ohne Datum auf das nächste Blech.</p>
${grid(PICK, [
  ['Konditorei, die an den meisten Tagen Baiser oder Macarons spritzt', 'Flüssig, 1 L Tetrapak', 'Das Gebinde ist deutlich vor {opened_days} Tagen leer'],
  ['Bäckerei mit täglicher eifreier Linie', 'Flüssig, 1 L Tetrapak', 'Aus dem Kühlschrank gegossen, schon auf Aufschlagtemperatur'],
  ['Laden, der auf Bestellung backt, oder ein saisonales Baiserdessert', 'Pulver, 200 g Beutel', 'Es überbrückt die langen Pausen zwischen den Läufen'],
  ['Kühlung belegt mit Cremes, Ganache und reifenden Macarons', 'Pulver', 'Der Beutel steht im Trockenregal, außerhalb des Kühlraums'],
  ['Tägliche Linie plus unregelmäßige Aufträge', 'Beides', 'Flüssig für die Linie, Pulver für die Aufträge; die Umrechnung ist fest'],
  ['Pflanzliche Patisserielinie, die kontinuierlich spritzt', 'Flüssig, 10 L Bag-in-Box oder 1 T IBC', 'Dauerbetrieb und kein Anrühren'],
])}
<p>Lieber flüssig, aber unregelmäßiges Backen? Frieren Sie es in Portionen von {portion} g bei {freeze_temp} °C bis zu {freeze_months} Monate ein, tauen Sie es über Nacht im Kühlschrank auf und rühren Sie es vor dem Aufschlagen glatt. Es wird nie erneut eingefroren.</p>`,
      },
      {
        id: 'whites',
        title: 'Chargen in Eiweißen gezählt',
        html: `<p>Das Pulver wird pro Charge nach der Zahl der Eiweiße dosiert, die das Rezept ersetzt: {white_powder} g Pulver und {white_water} ml Wasser pro Eiweiß. Das angerührte Aquafaba wird dann wie die flüssige Ware vor dem Aufschlagen auf {meringue_chill} °C gekühlt, denn warmes Aquafaba steigt langsam und gibt einen schwächeren Schaum.</p>
<ul>
<li>Baiser, {meringue_eggs} Eiweiße: {meringue_powder} g Pulver + {meringue_water} ml Wasser.</li>
<li>Macarons, {macarons_eggs} Eiweiße: {macarons_powder} g Pulver + {macarons_water} ml Wasser.</li>
<li>Schokoladenmousse, {chocolate_mousse_eggs} Eiweiße: {chocolate_mousse_powder} g Pulver + {chocolate_mousse_water} ml Wasser.</li>
</ul>
<p>Das Pulver ist keine Abkürzung für Trockenmischungen: das Aquafaba wird zuerst für sich aufgeschlagen, rühren Sie es also mit Wasser an, bevor es in die Nähe von Mandelmehl oder Zucker kommt. Die <a href="{reconstitution_href}">Seite zum Anrühren</a> trägt die Tabelle von 1 bis 20 Eiweißen; jeder <a href="{meringue_calc_href}">Mengenrechner</a> skaliert das ganze Rezept nach Chargen oder Stück.</p>`,
      },
      {
        id: 'checks',
        title: 'Bevor der Mixer anläuft: drei Kontrollen',
        html: `<p>Die meisten Fehler bei Baiser und Macarons entscheiden sich vor dem Aufschlagen. Drei Kontrollen decken sie ab, und sie sind die ersten Zeilen jedes Prozessblatts.</p>
<ul>
<li>Temperatur. Die flüssige Ware kommt mit {meringue_chill} °C aus dem Kühlschrank und geht direkt in die Schüssel; angerührtes Pulver wird auf dieselbe Temperatur gekühlt.</li>
<li>Fett. Aquafabaschaum ist ein reiner Proteinschaum ohne Fett im Rezept, ein Fettfilm auf Schüssel oder Besen hält also das Volumen klein. Wischen Sie beides aus, bevor das Aquafaba hineinkommt.</li>
<li>Zucker. Er kommt erst dazu, wenn der Schaum weiche Spitzen hält, esslöffelweise bei mittlerer Geschwindigkeit; schneller zugegeben, als er sich lösen kann, näßt er in der Lagerung.</li>
</ul>
<p>Für Biskuits und Kuchen ergänzt die <a href="{ratio_href}">Seite zum Ei-Verhältnis</a> die Wasserregel: ein Ei besteht zu etwa {water_egg_pct} Prozent aus Wasser, Aquafaba zu {water_aquafaba_pct} Prozent, also gehen andere Flüssigkeiten um {reduce_liquids} Prozent zurück, wenn ganze Eier ersetzt werden. Die <a href="{meringue_process_href}">Prozessblätter</a> drucken den Referenzwert jedes Schritts mit einer leeren Spalte für Ihre eigene Charge.</p>`,
      },
    ],
    faq: [
      { q: 'Kann ein Gebinde am selben Tag Baiser und Macarons bedienen?', a: 'Ja. Beide Rezepte zählen ihre Charge in Eiweißen und verwenden dasselbe Aquafaba, gekühlt auf {meringue_chill} °C. Ein 1 L Tetrapak ergibt {meringue_batches_1l} Chargen Baiser oder {macarons_batches_1l} Chargen Macarons, oder jede Mischung aus beiden.' },
      { q: 'Wie viele Baiserchargen ergibt eine 10 L Bag-in-Box?', a: '{meringue_batches_10l} Chargen zu {meringue_dose} g, oder {macarons_batches_10l} Chargen Macarons. Die Bag-in-Box ersetzt {bib_10l_whites} Eiweiße und passt zu einer Linie, die jeden Arbeitstag spritzt.' },
      { q: 'Kommt das Pulver direkt ins Mandelmehl?', a: 'Nein. Das Aquafaba wird zuerst für sich aufgeschlagen, das Pulver wird also mit Wasser angerührt, gekühlt und aufgeschlagen, bevor Mandelmehl und Puderzucker untergehoben werden.' },
      { q: 'Wie ersetzen wir ganze Eier in einem Biskuit?', a: '{egg_liquid} g Aquafaba pro ganzes Ei und {white_liquid} g pro Eiweiß, gewogen, nie nach Volumen. Andere Flüssigkeiten gehen um {reduce_liquids} Prozent zurück, um das Wasser auszugleichen, und der [Leitfaden Backen]({baking_href}) erklärt den Rest.' },
      { q: 'Können wir die flüssige Ware einfrieren, wenn die Baiserarbeit unregelmäßig ist?', a: 'Ja. Portionieren Sie zu {portion} g, frieren Sie bei {freeze_temp} °C bis zu {freeze_months} Monate ein, tauen Sie über Nacht im Kühlschrank auf und rühren Sie vor dem Aufschlagen glatt. Aufgetautes Aquafaba wird nie erneut eingefroren. Das Pulver nimmt Ihnen diesen Ablauf ganz ab.' },
    ],
    links: [
      { href: '{meringue_href}', label: 'Baiser: flüssig oder Pulver?' },
      { href: '{macarons_href}', label: 'Macarons: flüssig oder Pulver?' },
      { href: '{chocolate_mousse_href}', label: 'Schokoladenmousse: flüssig oder Pulver?' },
      { href: '{baking_href}', label: 'Backen: flüssig oder Pulver?' },
      { href: '{reconstitution_href}', label: 'Pulver anrühren: die Regel pro Eiweiß' },
    ],
  },

  bars: {
    title: 'Aquafaba für Bars und Cocktails: Pulver oder flüssig nach Rotation - VERY AQUAFABA',
    h1: 'Aquafaba für Bars und Cocktails: Pulver für ein paar Sours pro Woche, flüssig für jeden Service',
    crumb: 'Bars und Cocktails',
    enquiryLabel: 'Bars und Cocktails',
    description: 'VERY AQUAFABA hinter der Bar: {cocktails_dose} g pro Sour und zwei Shakes, das Format danach, wie viele Sours Sie ausschenken, das Pulver pro Drink angerührt, und was Sie prüfen, wenn der Schaum zusammenfällt.',
    lead: 'Aquafaba gibt einem Sour eine stabile, seidige Schaumkrone, ohne rohes Eiweiß hinter der Bar: {cocktails_dose} g pro Drink und zwei Shakes. Ein 1 L Tetrapak schenkt {cocktails_batches_1l} Sours aus, ein 200 g Beutel Pulver {cocktails_batches_200g}. Welches zu Ihrer Bar passt, entscheidet sich daran, wie viele Sours Sie zwischen einem Öffnen und dem nächsten ausschenken, denn geöffnete flüssige Ware hält {opened_days} Tage im Kühlschrank und geöffnetes Pulver verdirbt nicht.',
    sections: [
      {
        id: 'sour',
        title: 'Der Sour, die Dosis und der Shake',
        html: `<p>Am Rezept ändert sich nichts außer einer Zutat: Aquafaba ersetzt das Eiweiß. Der VERY AQUAFABA Whiskey Sour wird ohne Eis gebaut, mit {cocktails_whiskey} ml Whiskey, {cocktails_lemon_juice} ml frischem Zitronensaft, {cocktails_syrup} ml Zuckersirup und {cocktails_dose} g gekühltem Aquafaba.</p>
<ol>
<li>Kräftiger Dry Shake für {cocktails_dry_shake} Sekunden. Hier entsteht der Schaum.</li>
<li>Eis dazu und weitere {cocktails_wet_shake} Sekunden shaken, zum Kühlen und Verdünnen.</li>
<li>Fein in eine gekühlte Coupe abseihen. Die Krone ist fest genug, um ein paar Tropfen Bitters zu tragen.</li>
</ol>
<p>Voller Service? Mischen Sie Whiskey, Zitrone und Sirup vor. Das Aquafaba kommt beim Shake dazu, nie in den Vorbatch, und wird jedes Mal mit {cocktails_dose} g gewogen oder gejiggert: freies Eingießen macht die Krone von Drink zu Drink ungleich. Der <a href="{cocktails_href}">Leitfaden Cocktails</a> trägt die ganze Methode und ihre Fehlertabelle.</p>`,
      },
      {
        id: 'decide',
        title: 'Flüssig oder Pulver? Beginnen Sie damit, wie viele Sours Sie ausschenken',
        html: `<p>Verschlossen stehen beide Formate mindestens {unopened_months} Monate im Regal bei Raumtemperatur. Die Wahl beginnt an dem Tag, an dem Sie das Gebinde öffnen: geöffnete flüssige Ware liegt im Kühlschrank bei höchstens {opened_temp} °C und wird innerhalb von {opened_days} Tagen verbraucht, geöffnetes Pulver muss nur trocken und verschlossen bleiben. Bartender ohne stetige Sour-Rotation bevorzugen genau deshalb das Pulver.</p>
${grid(['Ihre Bar', 'Empfehlung', 'Warum'], [
  ['Cocktailbar mit Sours auf der Karte, in jedem Service bestellt', 'Flüssig, 1 L Tetrapak', '{cocktails_batches_1l} Drinks pro Gebinde, deutlich vor {opened_days} Tagen aufgebraucht'],
  ['Kiezbar, die ein paar Sours pro Woche ausschenkt', 'Pulver, 200 g Beutel', 'Keine Uhr nach dem Öffnen; rühren Sie an, was der Abend braucht'],
  ['Bar ohne freien Kühlschrankplatz', 'Pulver', 'Der Beutel steht im Trockenregal hinter der Bar'],
  ['Events, Außer-Haus-Catering, Pop-up-Bars', 'Pulver', 'Es reist trocken, ohne Kühlkette'],
  ['Volle Wochenenden, ruhige Wochentage', 'Beides', 'Flüssig für den Ansturm, Pulver für den Rest'],
  ['Hotelgruppe, abgefüllte Sour-Basen, Getränkelinie', 'Flüssig, 10 L Bag-in-Box oder 1 T IBC', 'Dauerbetrieb und kein Anrühren'],
])}
<p>Lieber flüssig, aber das Gebinde wird nicht rechtzeitig leer? Frieren Sie es in Portionen von {portion} g ein, tauen Sie es im Kühlschrank auf und rühren Sie es vor Gebrauch um.</p>`,
      },
      {
        id: 'powder',
        title: 'Pulver hinter der Bar: anrühren, was der Abend braucht',
        html: `<p>Für einen Drink {cocktails_powder} g Pulver und {cocktails_water} ml Wasser. Pro Eiweiß gezählt ergeben {white_powder} g Pulver und {white_water} ml Wasser {white_total} g Aquafaba, etwas mehr als ein Sour. Rühren Sie es vor dem Service an und kühlen Sie es: kaltes Aquafaba schäumt schneller und hält länger, Aquafaba bei Raumtemperatur gibt einen langsamen, schlaffen Schaum.</p>
<p>Die <a href="{reconstitution_href}">Seite zum Anrühren</a> trägt die Tabelle von 1 bis 20 Eiweißen für einen ganzen Service; der <a href="{cocktails_calc_href}">Cocktailrechner</a> gibt flüssig, Pulver und sein Wasser für jede Zahl von Drinks.</p>`,
      },
      {
        id: 'service',
        title: 'Im Service: was Sie prüfen, wenn der Schaum zusammenfällt',
        html: `<p>Fünf Fehler decken die meisten flachen Sours ab, und jeder hat seine Ursache beim Shake, nicht im Produkt.</p>
${grid(['Was Sie sehen', 'Ursache', 'Lösung'], [
  ['Dünne Krone', 'Eis war von Anfang an drin', 'Erst Dry Shake, dann Eis'],
  ['Langsamer, schlaffer Schaum', 'Aquafaba bei Raumtemperatur', 'Bis zum Shake gekühlt halten'],
  ['Keine Höhe mehr ab Mitte des Service', 'Aquafaba kam in den Vorbatch', 'Nur die Basis vormischen, Aquafaba pro Drink zugeben'],
  ['Schaum fällt, bevor er beim Gast ist', 'Der Drink wartete am Pass', 'Auf Bestellung shaken und sofort servieren'],
  ['Ungleich von Drink zu Drink', 'Freies Eingießen', 'Jedes Mal {cocktails_dose} g wiegen oder jiggern'],
])}
<p>Das <a href="{cocktails_process_href}">Prozessblatt</a> druckt diese Kontrollen mit dem Referenzwert jedes Schritts, fürs Barbuch.</p>`,
      },
    ],
    faq: [
      { q: 'Wie viele Sours schenkt ein 1 L Gebinde aus?', a: '{cocktails_batches_1l} Sours zu je {cocktails_dose} g. Ein 200 g Beutel Pulver ergibt {cocktails_batches_200g}, Drink für Drink oder für den Service angerührt.' },
      { q: 'Müssen wir das Sour-Rezept ändern?', a: 'Nein. Eine Zutat ändert sich: {cocktails_dose} g Aquafaba ersetzen das Eiweiß. Whiskey, Zitrone, Sirup, Dry Shake und Wet Shake bleiben, wie sie sind.' },
      { q: 'Kann das Aquafaba in den Vorbatch?', a: 'Nein. Mischen Sie Whiskey, Zitrone und Sirup vor und geben Sie das Aquafaba beim Shake dazu, pro Drink. Aquafaba im Vorbatch gibt ab Mitte des Service keine Höhe mehr.' },
      { q: 'Was, wenn wir nur ein paar Sours pro Woche ausschenken?', a: 'Nehmen Sie das Pulver. Ein geöffneter Beutel verdirbt nicht, solange er trocken und verschlossen bleibt, Sie rühren also an, was der Abend braucht, und der Rest wartet. Geöffnete flüssige Ware hat {opened_days} Tage im Kühlschrank.' },
      { q: 'Trägt der Schaum Bitters?', a: 'Ja. Nach Dry Shake und Wet Shake, fein in eine gekühlte Coupe abgeseiht, ist die Krone fest genug, um ein paar Tropfen Bitters zu tragen.' },
    ],
    links: [
      { href: '{cocktails_href}', label: 'Cocktails: flüssig oder Pulver?' },
      { href: '{cocktails_calc_href}', label: 'Mengenrechner für Cocktails' },
      { href: '{cocktails_process_href}', label: 'Prozessblatt und Kontrollen für den Sour' },
      { href: '{reconstitution_href}', label: 'Pulver anrühren: die Regel pro Eiweiß' },
    ],
  },

  foodservice: {
    title: 'Aquafaba für Gemeinschaftsverpflegung und Zentralküchen: Kühlkette, Platz, Bag-in-Box - VERY AQUAFABA',
    h1: 'Aquafaba für Gemeinschaftsverpflegung und Zentralküchen: Kühlkette, Platz und die 10 L Bag-in-Box',
    crumb: 'Gemeinschaftsverpflegung und Zentralküchen',
    enquiryLabel: 'Gemeinschaftsverpflegung und Zentralküchen',
    description: 'VERY AQUAFABA in Zentralküchen, Kantinen und Restaurantgruppen: Mayonnaise, Saucen und Desserts in großen Mengen, das Format nach Kühlkette und Platz, und die 10 L Bag-in-Box, die {bib_10l_whites} Eiweiße ersetzt.',
    lead: 'Eine Zentralküche verwendet Aquafaba in Mayonnaise und kalten Saucen, in Schokoladenmousse und Baiser für die Dessertlinie und im eifreien Backen für die Standorte. Die 10 L Bag-in-Box ersetzt {bib_10l_whites} Eiweiße und wird kiloweise pro Schicht entnommen; der 1 L Tetrapak bedient einen einzelnen Standort; der 200 g Beutel Pulver den Standort, dessen Rotation für ein geöffnetes flüssiges Gebinde zu gering ist. Diese Seite stellt das Format Kühlkette und Platz gegenüber und zählt die Chargen pro Gebinde.',
    sections: [
      {
        id: 'uses',
        title: 'Wo Aquafaba in einer Zentralküche hingeht',
        html: `<p>Die Chargenzahlen sind die der VERY AQUAFABA Rezepte; die letzte Spalte zählt die Chargen, die eine 10 L Bag-in-Box ergibt.</p>
${grid(['Anwendung', 'Pro Charge', 'Chargen pro 10 L Bag-in-Box'], [
  ['<a href="{mayonnaise_href}">Mayonnaise</a>', '{mayonnaise_dose} g Aquafaba für ca. {mayonnaise_yield} g Mayonnaise', '{mayonnaise_batches_10l}'],
  ['<a href="{chocolate_mousse_href}">Schokoladenmousse</a>', '{chocolate_mousse_dose} g für ca. {chocolate_mousse_yield} Portionen', '{chocolate_mousse_batches_10l}'],
  ['<a href="{meringue_href}">Baiser</a>', '{meringue_dose} g für ca. {meringue_yield} Baisers', '{meringue_batches_10l}'],
  ['<a href="{baking_href}">Backen</a>', '{egg_liquid} g pro ganzes Ei, {white_liquid} g pro Eiweiß', '{eggs_10l} ganze Eier'],
])}
<p>Eine Charge Mayonnaise braucht sehr wenig Aquafaba, {mayonnaise_dose} g, selbst ein 1 L Tetrapak ergibt also {mayonnaise_batches_1l} Chargen; die Frage für die Saucenstation ist, ob dieses Gebinde innerhalb von {opened_days} Tagen nach dem Öffnen aufgebraucht ist, nicht ob es groß genug ist.</p>`,
      },
      {
        id: 'decide',
        title: 'Kühlkette und Platz: die Fragen, die entscheiden',
        html: `<p>Die fertige Mayonnaise und die Mousse brauchen den Kühlschrank ohnehin, die Wahl dreht sich also um das geöffnete Gebinde, nicht um die Sauce. Geöffnete flüssige Ware wird bei höchstens {opened_temp} °C gelagert und innerhalb von {opened_days} Tagen verbraucht; geöffnetes Pulver verdirbt nicht und belegt nie einen Kühlplatz.</p>
${grid(['Ihr Betrieb', 'Empfehlung', 'Warum'], [
  ['Zentralküche, die Aquafaba kiloweise pro Schicht entnimmt', 'Flüssig, 10 L Bag-in-Box oder 1 T IBC', 'Dauerbetrieb, direkt in den Hochleistungsmixer, kein Anrühren'],
  ['Feinkost- oder Sandwichtheke, die in jedem Service frische Mayonnaise macht', 'Flüssig, 1 L Tetrapak', 'Auf Mixtemperatur gegossen, und das Gebinde schlägt rechtzeitig um'],
  ['Restaurant mit Mayonnaise oder Mousse auf einem Gericht der Karte', 'Pulver, 200 g Beutel', 'Ein geöffneter Liter würde seine {opened_days} Tage überdauern'],
  ['Kühlraum schon voll mit fertiger Sauce und Portionen', 'Pulver', 'Der Beutel belegt nie einen Kühlplatz'],
  ['Sie wollen weniger datierte Artikel auf der Saucenstation', 'Pulver', 'Kein geöffnetes, verderbliches Gebinde zum Etikettieren, Protokollieren und Prüfen'],
  ['Zentralküche, in der jeder Standort selbst aufschlägt', 'Pulver vor Ort', 'Der Beutel übersteht eine ruhige Woche am Standort'],
])}
<p>Zentrale Produktion plus Standorte mit ungleicher Rotation? Flüssig in der Zentralküche, Pulver an den Standorten: die Umrechnung ist fest, dasselbe Rezept läuft also mit beiden.</p>`,
      },
      {
        id: 'bib',
        title: 'Die 10 L Bag-in-Box im täglichen Betrieb',
        html: `<p>Die Bag-in-Box ist das flüssige Format zwischen dem 1 L Tetrapak und dem 1 T IBC: {bib_10l_whites} Eiweiße, entnommen, wie die Schicht sie braucht, ohne Anrühren. Sie passt zu der Küche, deren Aquafabaverbrauch kontinuierlich ist, weil das geöffnete Gebinde weiter umschlägt. Geöffnet wird sie wie jedes flüssige Gebinde gelagert, bei höchstens {opened_temp} °C.</p>
<p>Verschlossen hält sie mindestens {unopened_months} Monate bei Raumtemperatur, der Vorrat kann also im Trockenlager warten, bis er geöffnet wird. Beschreiben Sie Standorte, Anwendungen und geschätztes Monatsvolumen über das Anfrageformular, um das technische Datenblatt zu erhalten; die größten Küchen finden sich auf der <a href="{industry_href}">Seite Lebensmittelindustrie</a>, wo der 1 T IBC beschrieben ist.</p>`,
      },
      {
        id: 'mayo',
        title: 'Mayonnaise und kalte Saucen in großen Mengen',
        html: `<p>Die VERY AQUAFABA Mayonnaise emulgiert {mayonnaise_oil} g Öl auf {mayonnaise_dose} g Aquafaba, ein Ölverhältnis von {mayonnaise_oil_ratio}, mit {mayonnaise_mustard} g Senf, {mayonnaise_salt} g Salz und {mayonnaise_lemon} g Zitronensaft oder Essig. Das Aquafaba wird bei {mayonnaise_chill} °C verwendet: zu warm, ist die Emulsion langsam und instabil. Bei großen Chargen hält die Tröpfchengröße sie stabil, deshalb wechselt eine Zentralküche auf einen Hochleistungsmixer.</p>
<p>Öl zu schnell zugegeben, oder mit zu wenig Scherung, und die Emulsion kommt nie in Gang: ein dünner, stetiger Strahl bei voller Mixergeschwindigkeit. Zu dick zum Arbeiten, mixen Sie ein paar Gramm kaltes Wasser ein, nicht mehr Öl. Die fertige Sauce hält {mayonnaise_keep} Tage gekühlt, in einem sauberen Behälter und sofort gekühlt. Der <a href="{mayonnaise_calc_href}">Mayonnaiserechner</a> skaliert die Charge und das <a href="{mayonnaise_process_href}">Prozessblatt</a> druckt Schritte und Kontrollen.</p>`,
      },
    ],
    faq: [
      { q: 'Wie viele Eiweiße ersetzt eine 10 L Bag-in-Box?', a: '{bib_10l_whites} Eiweiße, bei {white_liquid} g flüssig pro Eiweiß. In Mayonnaise sind das {mayonnaise_batches_10l} Chargen, in Schokoladenmousse {chocolate_mousse_batches_10l}, in Baiser {meringue_batches_10l}.' },
      { q: 'Können Standorte mit geringer Rotation dasselbe Produkt verwenden?', a: 'Ja, als Pulver. Ein 200 g Beutel ersetzt {powder_200g_whites} Eiweiße, verdirbt nach dem Öffnen nicht, solange er trocken und verschlossen bleibt, und wird mit {white_powder} g plus {white_water} ml Wasser pro Eiweiß angerührt, wenn der Standort es braucht.' },
      { q: 'Wie lange hält eine geöffnete Bag-in-Box?', a: 'Wie jedes geöffnete flüssige Gebinde: bei höchstens {opened_temp} °C, innerhalb von {opened_days} Tagen verbraucht. Sie passt zu Küchen mit kontinuierlicher Entnahme, damit das Gebinde weiter umschlägt.' },
      { q: 'Gibt es einen Schritt zum Anrühren der flüssigen Ware?', a: 'Nein. Die flüssige Ware kommt mit fester Konzentration an, bereit, in den Mixer gewogen zu werden. Nur das Pulver wird mit Wasser angerührt.' },
      { q: 'Wohin schicken wir unsere Volumen?', a: 'Über das [Anfrageformular]({contact_href}) auf dieser Seite: Unternehmen, Land, Anwendung und geschätztes Monatsvolumen. Das technische Datenblatt kommt mit der Antwort zurück.' },
    ],
    links: [
      { href: '{mayonnaise_href}', label: 'Mayonnaise: flüssig oder Pulver?' },
      { href: '{chocolate_mousse_href}', label: 'Schokoladenmousse: flüssig oder Pulver?' },
      { href: '{meringue_href}', label: 'Baiser: flüssig oder Pulver?' },
      { href: '{mayonnaise_calc_href}', label: 'Mengenrechner für Mayonnaise' },
      { href: '{industry_href}', label: 'Lebensmittelindustrie: der 1 T IBC' },
    ],
  },

  industry: {
    title: 'Aquafaba für die Lebensmittelindustrie: 1 T IBC und Bag-in-Box für kontinuierliche Linien - VERY AQUAFABA',
    h1: 'Aquafaba für die Lebensmittelindustrie: der 1 T IBC und die Bag-in-Box für kontinuierliche Linien',
    crumb: 'Lebensmittelindustrie',
    enquiryLabel: 'Lebensmittelindustrie',
    description: 'VERY AQUAFABA auf Industrielinien: der 1 T IBC, der {ibc_1t_whites} Eiweiße ersetzt, die 10 L Bag-in-Box, der 3 kg Sack Pulver für Trockenmischungen, Umrechnung nach Gewicht und wie Sie Spezifikationen anfordern.',
    lead: 'Industrielinien laufen mit flüssiger Ware: der 1 T IBC ersetzt {ibc_1t_whites} Eiweiße und die 10 L Bag-in-Box {bib_10l_whites}, beide kontinuierlich entnommen und ohne Anrühren. VERY AQUAFABA ist gefiltert, aufbereitet und standardisiert, damit jede Charge gleich reagiert, bei einer Konzentration von {viscosity} g/ml. Diese Seite zeigt die Formate für kontinuierliche Linien, die Umrechnungsregel nach Gewicht und wie Spezifikationen, Mindestbestellmenge und Lieferzeit angefordert werden.',
    sections: [
      {
        id: 'formats',
        title: 'Formate für kontinuierliche Linien',
        html: `<p>Die Linie wird nach Gewicht dosiert, jedes Format wird also über die Eiweiße beschrieben, die es bei {white_liquid} g pro Eiweiß ersetzt.</p>
${grid(['Format', 'Eiweiße', 'Wo es läuft'], [
  ['1 T IBC, flüssig', '{ibc_1t_whites}', 'Kontinuierliche Dosierung auf einer Linie: Baiserschalen, die jeden Arbeitstag getrocknet werden, Moussebecher für den Handel, Saucenlinien, abgefüllte Sour-Basen'],
  ['10 L Bag-in-Box, flüssig', '{bib_10l_whites}', 'Pilotläufe, kleinere Linien und die Zentralküchen einer Gruppe'],
  ['3 kg Sack, Pulver', '{powder_3kg_whites}', 'Trockenmischungen: ein Hersteller, der trockene Saucen- oder Backbasen mischt, gibt es trocken in die Vormischung'],
])}
<p>Verschlossen halten beide Formate mindestens {unopened_months} Monate bei Raumtemperatur. Einmal geöffnet, wird die flüssige Ware bei höchstens {opened_temp} °C gehalten und innerhalb von {opened_days} Tagen verbraucht, was auf einer kontinuierlichen Linie der normale Rhythmus eines geöffneten Gebindes ist; das Pulver verdirbt nicht, solange es trocken und verschlossen bleibt.</p>`,
      },
      {
        id: 'reformulate',
        title: 'Umrechnen im Linienmaßstab, nach Gewicht',
        html: `<p>Die Ei-Verhältnisregel der Website ist der Ausgangspunkt jeder Umrechnung: {egg_liquid} g Aquafaba pro ganzes Ei, {white_liquid} g pro Eiweiß und {yolk_liquid} g Aquafaba plus {yolk_oil} g Öl pro Eigelb. Zählen Sie die Eier oder Eiweiße der Rezeptur, multiplizieren Sie mit dem Äquivalenzgewicht und halten Sie das Aquafaba bei {viscosity} g/ml, damit Schaum oder Emulsion bei jedem Lauf gleich reagieren.</p>
<p>Ein Ei besteht zu etwa {water_egg_pct} Prozent aus Wasser, Aquafaba zu {water_aquafaba_pct} Prozent, andere Flüssigkeiten gehen also um {reduce_liquids} Prozent zurück, wenn ganze Eier ersetzt werden, und dichte Gebäcke werden durchgebacken. Testchargen bestätigen Zeit, Farbe und Textur; die Anpassungen werden als Standardverfahren der Linie festgehalten. Die <a href="{ratio_href}">Seite zum Ei-Verhältnis</a> erklärt die Regel mit Rechenbeispielen und der <a href="{baking_calc_href}">Backrechner</a> rechnet eine ganze Rezeptur um.</p>`,
      },
      {
        id: 'lines',
        title: 'Linien nach Anwendung',
        html: `<ul>
<li>Baiserschalen, die jeden Arbeitstag getrocknet werden: {meringue_dose} g pro Charge von ca. {meringue_yield}, {meringue_batches_10l} Chargen pro Bag-in-Box, Zucker zu gleichem Gewicht, getrocknet bei {meringue_bake} °C. Der Schaum ist der einfachste Test im Sortiment, jeder Fehler landet also in ihm: Fett und zu schnell zugegebener Zucker. Siehe den <a href="{meringue_href}">Leitfaden Baiser</a>.</li>
<li>Saucenlinien: {mayonnaise_dose} g Aquafaba emulgieren {mayonnaise_oil} g Öl, kiloweise direkt in den Hochleistungsmixer entnommen, wo die Tröpfchengröße große Chargen stabil hält. Siehe den <a href="{mayonnaise_href}">Leitfaden Mayonnaise</a>.</li>
<li>Vorportionierte Moussebecher für den Handel: {chocolate_mousse_dose} g pro Charge von ca. {chocolate_mousse_yield} Portionen, in Schokolade bei {chocolate_mousse_fold_temp} °C untergehoben. Siehe den <a href="{chocolate_mousse_href}">Leitfaden Schokoladenmousse</a>.</li>
<li>Abgefüllte Sour-Basen und Getränkelinien: die Basis wird ohne Aquafaba gemischt, das beim Shake mit {cocktails_dose} g pro Drink dazukommt. Siehe den <a href="{cocktails_href}">Leitfaden Cocktails</a>.</li>
</ul>`,
      },
      {
        id: 'specs',
        title: 'Spezifikationen, Mindestbestellmenge und Lieferzeit',
        html: `<p>Spezifikationen, Mindestbestellmenge und Lieferzeit für eine Industrielinie werden auf dieser Seite nicht veröffentlicht: sie hängen von Land, Format und Volumen ab und werden pro Projekt mit dem technischen Datenblatt genannt. Das Anfrageformular auf dieser Seite fragt nach Unternehmen, Land, Anwendung und geschätztem Monatsvolumen; beschreiben Sie die Linie und die Formate, die Sie erwägen, und das technische Datenblatt kommt mit der Antwort zurück.</p>
<p>Die <a href="{foodservice_href}">Seite Gemeinschaftsverpflegung</a> behandelt die Zentralküchen einer Gruppe, wo die 10 L Bag-in-Box im Tagesbetrieb läuft, und der <a href="{professional_href}">Profi-Index</a> zeigt das ganze Sortiment.</p>`,
      },
    ],
    faq: [
      { q: 'Wie viele Eiweiße ersetzt ein 1 T IBC?', a: '{ibc_1t_whites} Eiweiße, bei {white_liquid} g flüssig pro Eiweiß. Die 10 L Bag-in-Box ersetzt {bib_10l_whites}. Beide sind flüssig, kontinuierlich entnommen und ohne Anrühren.' },
      { q: 'Ist das Pulver eine Option für eine Industrielinie?', a: 'Für Trockenmischungen ja: der 3 kg Sack ersetzt {powder_3kg_whites} Eiweiße und geht so, wie er ist, in eine trockene Saucen- oder Backbasis. Für aufgeschlagene und emulgierte Linien ist die flüssige Ware das Format, denn sie kommt mit fester Konzentration an und muss nicht angerührt werden.' },
      { q: 'Welche Konzentration soll die Linie halten?', a: '{viscosity} g/ml. VERY AQUAFABA ist auf diese Konzentration gefiltert, aufbereitet und standardisiert, damit Schaum oder Emulsion bei jedem Lauf gleich reagieren.' },
      { q: 'Wie rechnen wir eine in Eiern gezählte Rezeptur um?', a: '{egg_liquid} g Aquafaba pro ganzes Ei, {white_liquid} g pro Eiweiß, {yolk_liquid} g plus {yolk_oil} g Öl pro Eigelb, alles nach Gewicht. Andere Flüssigkeiten gehen um {reduce_liquids} Prozent zurück, und Testchargen bestätigen Zeit, Farbe und Textur.' },
      { q: 'Wo stehen Mindestbestellmenge und Lieferzeit?', a: 'Sie werden pro Projekt mit dem technischen Datenblatt genannt, nicht auf dieser Seite. Beschreiben Sie Linie, Formate und geschätztes Monatsvolumen über das [Anfrageformular]({contact_href}), und die Antwort enthält sie.' },
    ],
    links: [
      { href: '{foodservice_href}', label: 'Gemeinschaftsverpflegung und Zentralküchen' },
      { href: '{meringue_href}', label: 'Baiser: flüssig oder Pulver?' },
      { href: '{mayonnaise_href}', label: 'Mayonnaise: flüssig oder Pulver?' },
      { href: '{ratio_href}', label: 'Wie viel Aquafaba entspricht einem Ei' },
      { href: '{baking_calc_href}', label: 'Rechner für den Ei-Ersatz' },
    ],
  },
};
