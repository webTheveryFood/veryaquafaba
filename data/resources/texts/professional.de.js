// Profis nach Zielgruppe, Deutsch (Set-2 B0 bis B4). 'index' ist die Pillar-Seite, die
// anderen Schlüssel die Zielgruppenseiten (routes.js TOPIC_SLUGS.professional). Jede Zahl ist
// ein {token} aus facts.json über data/resources/topics.js; kein Gedankenstrich. Die
// Formulierungen folgen den Leitfäden: das Format entscheidet sich an der Rotation des
// geöffneten Gebindes, an Kühlkette, Lagerplatz und Dosierung, nie an der Ansatzgröße allein.
const grid = (heads, rows, cls = '') => `<table class="va-guide-grid${cls ? ` ${cls}` : ''}">
<thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
<tbody>
${rows.map((r) => `<tr>${r.map((c, i) => `<td data-label="${heads[i]}">${c}</td>`).join('')}</tr>`).join('\n')}
</tbody>
</table>`;
const PICK = ['Ihr Betrieb', 'Empfehlung', 'Warum'];

export default {
  index: {
    title: 'Aquafaba für Profiküchen - VERY AQUAFABA',
    h1: 'Aquafaba für Profis: Welches Format passt zu Ihrer Küche?',
    crumb: 'Profis',
    enquiryLabel: 'Profis',
    description: 'Eine eifreie Zutat für Konditorei, Bar, Zentralküche und Produktionslinie: {white_liquid} g pro Eiweiß. Welches Format und welches Gebinde zu Ihrer Küche passen.',
    lead: 'Ob Sie eine Konditorei, eine Bar, eine Zentralküche oder eine Produktionslinie führen: Eine Zutat deckt Ihre Schäume, Emulsionen und eifreien Gebäcke ab. Die Dosis ändert sich nie: {white_liquid} g flüssig oder {white_powder} g Pulver ersetzen ein Eiweiß. Was sich ändert, sind das Gebinde und das Tempo, in dem Sie es verbrauchen, und genau das klären Sie unten.',
    // Hub für Einkäufer: zuerst die Tabelle nach Tätigkeit, dann Format und Gebinde, dann die Bestellung.
    figures: false,
    sections: [
      {
        id: 'activity',
        title: 'Welche Art von Küche führen Sie?',
        html: `<p>Aquafaba hat in einer Konditorei, hinter einer Bar, in einer Zentralküche und auf einer Produktionslinie jeweils eine andere Aufgabe. Finden Sie Ihre unten; jede Zeile öffnet eine Seite, die für diese Arbeitsweise geschrieben ist.</p>
${grid(['Ihre Tätigkeit', 'Was Aquafaba für Sie tut', 'So werden Sie es verwenden'], [
  ['<a href="{pastry_href}">Konditorei, Bäckerei, Patisserie</a>', 'Baiser, Macarons, Mousse und eifreie Gebäcke', 'Ansatz für Ansatz, geplant nach Ihren Ofentagen'],
  ['<a href="{bars_href}">Bars und Cocktails</a>', 'Ein eifreier Schaum auf Sours und Fizzes', 'Eine Dosis pro Drink, auf Bestellung geshaked'],
  ['<a href="{foodservice_href}">Gemeinschaftsverpflegung und Zentralküchen</a>', 'Mayonnaise, Saucen und Desserts in großen Mengen', 'Kiloweise, aus der 10 L Bag-in-Box'],
  ['<a href="{industry_href}">Lebensmittelindustrie</a>', 'Kontinuierliche Linien und Umformulierung nach Gewicht', 'Aus dem 1 T IBC, kontinuierlich dosiert'],
], 'va-guide-grid--wrap')}
<p>Viele Betriebe liegen zwischen zwei Zeilen. Ein Hotel führt Konditorei und Bar mit demselben Produkt, und eine Zentralküche mit Patisserielinie arbeitet an den Tagen, an denen sie Baiser spritzt, wie eine Bäckerei. Wenn das auf Sie zutrifft, lesen Sie beide.</p>`,
      },
      {
        id: 'decide',
        title: 'Flüssig oder Pulver?',
        html: `<p>Verschlossen halten beide Formate mindestens {unopened_months} Monate bei Raumtemperatur, die Wahl beginnt also erst, wenn ein Gebinde geöffnet ist. Geöffnete flüssige Ware kommt in den Kühlschrank und wird innerhalb von {opened_days} Tagen verbraucht; geöffnetes Pulver verdirbt nicht, es muss nur trocken und verschlossen bleiben. Fünf Fragen klären es für die meisten Küchen.</p>
${grid(['Fragen Sie sich', 'Flüssig, wenn', 'Pulver, wenn'], [
  ['Ist ein geöffnetes Gebinde innerhalb von {opened_days} Tagen aufgebraucht?', 'Ja, das Gebinde schlägt rechtzeitig um', 'Nein, der Beutel wartet ohne Datum auf den nächsten Ansatz'],
  ['Gibt es Kühlplatz für ein geöffnetes Gebinde?', 'Ja, es steht im Kühlschrank, schon auf Arbeitstemperatur', 'Nein, der Beutel steht im Trockenregal'],
  ['Läuft die Arbeit kontinuierlich?', 'Ja, die 10 L Bag-in-Box oder der 1 T IBC, ohne Anrühren', 'Nein, Sie rühren an, was jeder Ansatz braucht'],
  ['Reist das Produkt oder geht es auf Events?', 'Nur mit Kühlkette', 'Ja, es reist trocken'],
  ['Geht es in eine Trockenmischung?', 'Nein', 'Ja, es kommt so in die Vormischung, wie es ist'],
], 'va-guide-grid--wrap')}
<p>Volle Wochenenden und ruhige Wochentage? Viele Küchen führen beides: flüssig für den Ansturm, Pulver für den Rest. Die Umrechnung ist fest, ein Rezept läuft also unverändert mit beiden Formaten.</p>`,
      },
      {
        id: 'packs',
        title: 'Welches Gebinde für wie viel Arbeit',
        html: `<p>Jedes Gebinde lässt sich am leichtesten über die Zahl der Eiweiße vorstellen, die es ersetzt, denn so zählt ein Rezept sie.</p>
${grid(['Gebinde', 'Eiweiße', 'Wer es leert'], [
  ['1 L Tetrapak, flüssig', '{liquid_1l_whites}', 'Eine Konditorei, eine Bar mit Sours auf der Karte, ein einzelner Standort'],
  ['10 L Bag-in-Box, flüssig', '{bib_10l_whites}', 'Eine Zentralküche, die pro Schicht kiloweise entnimmt'],
  ['1 T IBC, flüssig', '{ibc_1t_whites}', 'Eine Produktionslinie mit kontinuierlicher Dosierung'],
  ['30 g Beutel, Pulver', '{powder_30g_whites}', 'Ein erster Versuch, oder eine Bar, die einen Sour testet'],
  ['200 g Beutel, Pulver', '{powder_200g_whites}', 'Eine Küche oder eine Bar mit ungleicher Rotation'],
  ['3 kg Sack, Pulver', '{powder_3kg_whites}', 'Eine Profiküche, oder eine Trockenmischung auf einer Linie'],
], 'va-guide-grid--wrap')}
<p>Das Pulver wird mit {white_powder} g plus {white_water} ml Wasser pro Eiweiß angerührt, was {white_total} g Aquafaba ergibt. Die <a href="{reconstitution_href}">Seite zum Anrühren</a> trägt die Tabelle von 1 bis 20 Eiweißen.</p>`,
      },
      {
        id: 'order',
        title: 'Bestellen für eine Profiküche',
        html: `<p>Das 1 L Tetrapak und der 200 g Beutel werden in den meisten unserer Märkte online verkauft, und die Buttons unten führen Sie dorthin. Bag-in-Box, IBC und der 3 kg Sack werden pro Projekt kalkuliert: Sagen Sie uns über das <a href="{contact_href}">Kontaktformular</a>, was Sie herstellen und ungefähr wie viel davon pro Monat, und das technische Datenblatt kommt mit der Antwort zurück.</p>
<p>Die sechs <a href="{index_href}">Anwendungsleitfäden</a> geben die Methode, die Fehlerbehebung und die Dosis pro Rezept für beide Formate, mit einem Mengenrechner unter jedem, damit Ihr Team schon vor der ersten Lieferung mit denselben Zahlen arbeitet.</p>`,
      },
    ],
    faq: [
      { q: 'Ist die Dosis für flüssig und Pulver dieselbe?', a: 'Ja, in Eiweißen gezählt. {white_liquid} g flüssig ersetzen ein Eiweiß, ebenso {white_powder} g Pulver, angerührt mit {white_water} ml Wasser. Ein Ansatz wird in beiden Formaten nach seiner Eiweißzahl dosiert.' },
      { q: 'Welche Formate gibt es für große Volumen?', a: 'Die 10 L Bag-in-Box ersetzt {bib_10l_whites} Eiweiße und der 1 T IBC {ibc_1t_whites}; beide sind flüssig, für den Dauerbetrieb ohne Anrühren. Als Pulver ersetzt der 3 kg Sack {powder_3kg_whites} Eiweiße.' },
      { q: 'Wie lange hält ein geöffnetes Gebinde?', a: 'Geöffnete flüssige Ware wird bei höchstens {opened_temp} °C gelagert und innerhalb von {opened_days} Tagen verbraucht. Geöffnetes Pulver verdirbt nicht, solange es trocken und verschlossen bleibt. Verschlossen halten beide mindestens {unopened_months} Monate bei Raumtemperatur.' },
      { q: 'Kann eine Küche flüssig und Pulver nebeneinander führen?', a: 'Ja, und viele tun das: flüssig für die Tage, an denen das Gebinde umschlägt, Pulver für die unregelmäßigen Aufträge. Die Umrechnung ist fest, das Rezept ändert sich von einem Format zum anderen also nicht.' },
      { q: 'Wie bestelle ich Aquafaba in großen Mengen für eine Bäckerei, eine Bar oder eine Produktionslinie?', a: 'Das 1 L Tetrapak und der 200 g Beutel werden online gekauft. Für Bag-in-Box, IBC oder den 3 kg Sack beschreiben Sie Ihre Tätigkeit und Ihr Monatsvolumen über unser [Kontaktformular]({contact_href}), und wir kalkulieren pro Projekt.' },
      { q: 'Wie bekomme ich das technische Datenblatt?', a: 'Fordern Sie es über unser [Kontaktformular]({contact_href}) an, mit Unternehmen, Land, Anwendung und geschätztem Monatsvolumen. Es kommt mit der Antwort zurück.' },
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
    title: 'Aquafaba für Konditorei und Bäckerei - VERY AQUAFABA',
    h1: 'So verwenden Sie Aquafaba in Konditorei und Bäckerei',
    crumb: 'Konditorei und Bäckerei',
    enquiryLabel: 'Konditorei und Bäckerei',
    description: 'Baiser, Macarons, Mousse und eifreie Biskuits aus einer Zutat: {white_liquid} g pro Eiweiß, {egg_liquid} g pro ganzem Ei. Wie viele Ansätze ein Gebinde ergibt.',
    lead: 'In einer Konditorei deckt eine Zutat das Baiser, die Macaronschalen, die Schokoladenmousse und die eifreien Biskuits ab: {white_liquid} g Aquafaba pro Eiweiß, {egg_liquid} g pro ganzem Ei. Die Leitfäden geben Ihnen jedes Rezept. Unten geht es um die Abteilung als Ganzes: wie viele Ansätze ein Gebinde ergibt, welches Format zu Ihrem Ofenrhythmus passt, wie Sie die Woche planen und wie Sie ein eigenes Rezept umstellen.',
    // Zielgruppenseite: was die Leitfäden nicht leisten, die Abteilung als Ganzes. Keine Referenztabellen.
    figures: false,
    sections: [
      {
        id: 'batches',
        title: 'Was Sie herstellen können, und wie viel ein Gebinde ergibt',
        html: `<p>Jeder Ansatz wird in Eiweißen gezählt, ein Gebinde lässt sich also am leichtesten über die Ansätze vorstellen, die es ergibt. Die Zahlen stammen aus den VERY AQUAFABA Rezepten; jede Anwendung hat ihren eigenen Leitfaden und Mengenrechner.</p>
${grid(['Anwendung', 'Ein Ansatz', 'Aus einem 1 L Tetrapak', 'Aus einem 200 g Beutel'], [
  ['<a href="{meringue_href}">Baiser</a>', '{meringue_dose} g, also {meringue_eggs} Eiweiße, für etwa {meringue_yield} Baisers', '{meringue_batches_1l} Ansätze', '{meringue_batches_200g} Ansätze'],
  ['<a href="{macarons_href}">Macarons</a>', '{macarons_dose} g, also {macarons_eggs} Eiweiße, für etwa {macarons_yield} Macarons', '{macarons_batches_1l} Ansätze', '{macarons_batches_200g} Ansätze'],
  ['<a href="{chocolate_mousse_href}">Schokoladenmousse</a>', '{chocolate_mousse_dose} g, also {chocolate_mousse_eggs} Eiweiße, für etwa {chocolate_mousse_yield} Portionen', '{chocolate_mousse_batches_1l} Ansätze', '{chocolate_mousse_batches_200g} Ansätze'],
  ['<a href="{baking_href}">Biskuits, Kuchen, Teige</a>', '{egg_liquid} g pro ganzem Ei, {white_liquid} g pro Eiweiß', '{eggs_1l} ganze Eier oder {whites_1l} Eiweiße', '{whites_200g} Eiweiße'],
], 'va-guide-grid--wrap')}
<p>In Pulver wird ein Ansatz mit {white_powder} g plus {white_water} ml Wasser pro Eiweiß angerührt: {meringue_powder} g und {meringue_water} ml für einen Ansatz Baiser, {macarons_powder} g und {macarons_water} ml für Macarons oder Mousse. Die <a href="{reconstitution_href}">Seite zum Anrühren</a> trägt die Tabelle von 1 bis 20 Eiweißen.</p>`,
      },
      {
        id: 'decide',
        title: 'Bekommen Sie ein geöffnetes Gebinde rechtzeitig leer?',
        html: `<p>Verschlossen halten beide Formate mindestens {unopened_months} Monate bei Raumtemperatur, die Wahl beginnt also erst, wenn ein Gebinde geöffnet ist. Ab dann steht flüssige Ware im Kühlschrank und wird innerhalb von {opened_days} Tagen verbraucht, während Pulver einfach wartet, trocken und verschlossen. Ein 1 L Tetrapak sind {meringue_batches_1l} Ansätze Baiser oder {macarons_batches_1l} Ansätze Macarons. Schafft Ihr Ofenrhythmus das in {opened_days} Tagen, ist flüssig die einfache Wahl. Wenn nicht, ist es Pulver.</p>
${grid(PICK, [
  ['Konditorei, die an den meisten Tagen Baiser oder Macarons spritzt', 'Flüssig, 1 L Tetrapak', 'Das Gebinde ist deutlich vor {opened_days} Tagen leer'],
  ['Laden, der auf Bestellung backt, oder ein saisonales Baiserdessert', 'Pulver, 200 g Beutel', 'Es überbrückt die langen Pausen zwischen den Durchgängen'],
  ['Kühlung voll mit Cremes, Ganache und reifenden Macarons', 'Pulver', 'Der Beutel steht im Trockenregal, außerhalb des Kühlraums'],
  ['Tägliche eifreie Linie plus unregelmäßige Aufträge', 'Beides', 'Flüssig für die Linie, Pulver für die Aufträge; das Rezept ist bei beiden dasselbe'],
  ['Pflanzliche Patisserielinie, die kontinuierlich spritzt', 'Flüssig, 10 L Bag-in-Box oder 1 T IBC', 'Dauerbetrieb, ohne Anrühren'],
])}
<p>Lieber flüssig, aber unregelmäßiges Backen? Sie können es in Portionen von {portion} g bei {freeze_temp} °C bis zu {freeze_months} Monate einfrieren. Über Nacht im Kühlschrank auftauen und vor dem Aufschlagen glatt rühren. Es wird nie erneut eingefroren.</p>`,
      },
      {
        id: 'week',
        title: 'Welche Desserts halten, und wie lange?',
        html: `<p>Aquafaba passt besser zu einer Abteilung, die vorarbeitet, als rohes Eiweiß, denn keines der fertigen Produkte hängt auf dieselbe Weise vom Kühlschrank ab. Das verlangt jedes, sobald es fertig ist:</p>
<ul>
<li><strong>Baisers</strong> kühlen auf dem Blech vollständig aus und halten luftdicht bei Raumtemperatur, an einem trockenen Ort, mit einem Trockenmittelbeutel, falls Sie einen haben. Sie ziehen Feuchtigkeit aus der Luft, ihr Platz ist also das Trockenlager, nicht die Kühlung.</li>
<li><strong>Macarons</strong> werden gefüllt und dann {macarons_mature} Stunden vor dem Service gekühlt, damit Schalen und Füllung zusammenfinden. Backen Sie die Schalen am einen Tag, füllen und reifen Sie am nächsten.</li>
<li><strong>Schokoladenmousse</strong> wird in {chocolate_mousse_set_time} Stunden im Kühlschrank fest und hält {chocolate_mousse_keep} Tage in verschlossener Verpackung, sie ist also ein Produkt, das vorab im Ansatz hergestellt wird, kein Dessert auf Bestellung.</li>
</ul>
<p>Nur zwei Dinge in der Abteilung brauchen die Kälte: die Mousse und die reifenden Macarons, dazu das geöffnete Flüssiggebinde. Um dieses Gebinde planen Sie. Öffnen Sie es zu Beginn einer Reihe von Ofentagen, schreiben Sie das Öffnungsdatum darauf, und es ist leer, bevor die {opened_days} Tage um sind. Beschriften Sie, was Sie einfrieren, mit Datum und Gewicht, wie der Lagerleitfaden es verlangt, damit eine Portion, die an einem vollen Morgen herausgenommen wird, die richtige ist.</p>`,
      },
      {
        id: 'switch',
        title: 'So stellen Sie Ihre eigenen Rezepte auf Aquafaba um',
        html: `<p>Beginnen Sie mit dem Rezept, das auf Ihrer Theke am meisten zählt, nicht mit dem, das am einfachsten aussieht, und ändern Sie nur das Ei. Was Sie ersetzen, entscheidet, was sich sonst noch bewegt:</p>
<ul>
<li><strong>Nur Eiweiße</strong>, wie bei Baiser, Macarons und Mousse: ein direkter Tausch. {white_liquid} g Aquafaba pro Eiweiß, und Mandelmehl, Zucker und Schokolade bleiben genau, wie sie sind.</li>
<li><strong>Ganze Eier</strong>, wie bei Biskuits und Kuchen: {egg_liquid} g pro Ei. Aquafaba bringt mehr Wasser mit als ein Ei, etwa {water_aquafaba_pct} Prozent gegenüber {water_egg_pct} Prozent, nehmen Sie die anderen Flüssigkeiten also um {reduce_liquids} Prozent zurück und backen Sie dichte Kuchen durch.</li>
<li><strong>Eigelbe</strong>: {yolk_liquid} g Aquafaba plus {yolk_oil} g Öl, denn Aquafaba bringt kein Fett mit.</li>
</ul>
<p>Wiegen Sie alles, das Aquafaba eingeschlossen, und lassen Sie den Rest der Methode, wie er war: dieselbe Schüssel, dieselben Stufen, derselbe Ofen. Backt die Abteilung in großen Mengen, halten Sie das Aquafaba bei {viscosity} g/ml, damit sich der Schaum bei jedem Durchgang gleich verhält. Der <a href="{baking_calc_href}">Ersatzrechner</a> rechnet Eier, Eiweiße und Eigelbe Ihres Rezepts in einem Zug um, und der <a href="{baking_href}">Back-Leitfaden</a> erklärt, was zu tun ist, wenn ein Biskuit flach oder nass herauskommt.</p>`,
      },
    ],
    faq: [
      { q: 'Kann ein Gebinde am selben Tag Baiser und Macarons bedienen?', a: 'Ja. Beide Rezepte zählen ihren Ansatz in Eiweißen und verwenden dasselbe Aquafaba, gekühlt auf {meringue_chill} °C. Ein 1 L Tetrapak ergibt {meringue_batches_1l} Ansätze Baiser oder {macarons_batches_1l} Ansätze Macarons, oder jede Mischung aus beiden.' },
      { q: 'Kann ich mein Macaronrezept auf Aquafaba umstellen, ohne den Rest zu ändern?', a: 'Ja. Macarons ersetzen nur Eiweiße, der Tausch ist also direkt: {white_liquid} g Aquafaba pro Eiweiß. Mandelmehl, Puderzucker und feiner Zucker bleiben, wie sie sind. Was sich ändert, ist das Timing, und das geht der [Macaron-Leitfaden]({macarons_href}) durch.' },
      { q: 'Wie weit im Voraus kann ich Aquafaba-Schokoladenmousse herstellen?', a: 'Sie wird in {chocolate_mousse_set_time} Stunden im Kühlschrank fest und hält {chocolate_mousse_keep} Tage gekühlt in verschlossener Verpackung, sie wird also im Ansatz vor dem Service hergestellt.' },
      { q: 'Kommt das Pulver direkt ins Mandelmehl?', a: 'Nein. Das Aquafaba wird zuerst für sich aufgeschlagen, das Pulver wird also mit Wasser angerührt, gekühlt und aufgeschlagen, bevor Mandelmehl und Puderzucker untergehoben werden.' },
      { q: 'Wie ersetze ich ganze Eier in einem Biskuit?', a: '{egg_liquid} g Aquafaba pro ganzem Ei und {white_liquid} g pro Eiweiß, gewogen. Nehmen Sie die anderen Flüssigkeiten um {reduce_liquids} Prozent zurück, um das Wasser auszugleichen, und backen Sie durch. Der [Back-Leitfaden]({baking_href}) erklärt den Rest.' },
      { q: 'Kann ich die flüssige Ware einfrieren, wenn meine Baiserarbeit unregelmäßig ist?', a: 'Ja. Portionieren Sie zu {portion} g, frieren Sie bei {freeze_temp} °C bis zu {freeze_months} Monate ein, tauen Sie über Nacht im Kühlschrank auf und rühren Sie vor dem Aufschlagen glatt. Aufgetautes Aquafaba wird nie erneut eingefroren. Das Pulver erspart Ihnen diesen Schritt ganz.' },
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
    title: 'Aquafaba für Bars und Cocktails - VERY AQUAFABA',
    h1: 'Aquafaba für Bars und Cocktails: der vollständige Leitfaden',
    crumb: 'Bars und Cocktails',
    enquiryLabel: 'Bars und Cocktails',
    description: 'Aquafaba hinter der Bar: {cocktails_dose} g pro Sour und zwei Shakes für einen eifreien Schaum. Warum Bars wechseln, welches Gebinde passt, wie Sie den Service vorbereiten.',
    lead: 'Aquafaba gibt einem Sour eine stabile, seidige Schaumkrone, ohne rohes Eiweiß hinter der Bar. Dafür genügen {cocktails_dose} g pro Drink und zwei Shakes, und der Cocktail-Leitfaden führt Sie durch das Rezept. Unten geht es um den Betrieb: warum Bars wechseln, welches Gebinde zu Ihrer Zahl an Sours passt, wie Sie den Service vorbereiten und was ins Barbuch gehört.',
    // Zielgruppenseite: der Barbetrieb, nicht das Rezept (das ist der Cocktail-Leitfaden). Keine Referenztabellen.
    figures: false,
    sections: [
      {
        id: 'why',
        title: 'Warum Bars auf Aquafaba umsteigen',
        html: `<p>Ein Sour wird nie erhitzt, was in den Shaker kommt, wird also so serviert, wie es ist. Das ist das ganze Argument für Aquafaba hinter der Bar:</p>
<ul>
<li><strong>Kein rohes Ei in einem ungekochten Drink.</strong> Rohes Eiweiß bringt ein Lebensmittelsicherheitsrisiko mit, das Aquafaba nicht hat. Die Krone ist dieselbe seidige Schaumkrone, ohne die Bedenken.</li>
<li><strong>Jeder Gast kann ihn bestellen.</strong> Aquafaba ist pflanzlich und eifrei, der Sour auf der Karte ist also derselbe Sour für vegane Gäste.</li>
<li><strong>Ein Regal statt eines Kühlschrankplatzes.</strong> Verschlossen halten beide Formate mindestens {unopened_months} Monate bei Raumtemperatur. Das Pulver braucht nicht einmal nach dem Öffnen den Kühlschrank.</li>
</ul>
<p>Der Drink selbst ändert sich nicht. Whiskey, Zitrone, Sirup, Dry Shake und Wet Shake bleiben genau, wie sie sind, und der <a href="{cocktails_href}">Cocktail-Leitfaden</a> trägt die vollständige Methode und ihre Fehlertabelle.</p>`,
      },
      {
        id: 'decide',
        title: 'Wie viele Sours, bevor Sie das nächste Gebinde öffnen?',
        html: `<p>Ein 1 L Tetrapak schenkt {cocktails_batches_1l} Sours aus, ein 200 g Beutel Pulver {cocktails_batches_200g}. Welches Gebinde Sie kaufen, hängt davon ab, wie schnell Sie es nach dem Öffnen leeren: Geöffnete flüssige Ware steht im Kühlschrank und wird innerhalb von {opened_days} Tagen verbraucht, während ein geöffneter Beutel Pulver einfach wartet, trocken und verschlossen, bis zur nächsten Bestellung. Bartender ohne stetige Sour-Rotation wählen genau deshalb das Pulver.</p>
${grid(['Ihre Bar', 'Empfehlung', 'Warum'], [
  ['Cocktailbar mit Sours auf der Karte, in jedem Service bestellt', 'Flüssig, 1 L Tetrapak', '{cocktails_batches_1l} Drinks pro Gebinde, deutlich vor {opened_days} Tagen aufgebraucht'],
  ['Kiezbar, die ein paar Sours pro Woche ausschenkt', 'Pulver, 200 g Beutel', 'Kein Zeitdruck nach dem Öffnen: Sie rühren an, was der Abend braucht'],
  ['Bar ohne freien Kühlschrankplatz', 'Pulver', 'Der Beutel steht im Trockenregal hinter der Bar'],
  ['Events, Außer-Haus-Catering, Pop-up-Bars', 'Pulver', 'Es reist trocken, ohne Kühlkette'],
  ['Volle Wochenenden, ruhige Wochentage', 'Beides', 'Flüssig für den Ansturm, Pulver für den Rest'],
  ['Hotelgruppe, abgefüllte Sour-Basen, Getränkelinie', 'Flüssig, 10 L Bag-in-Box oder 1 T IBC', 'Dauerbetrieb, ohne Anrühren'],
])}
<p>Lieber flüssig, aber das Gebinde wird nicht rechtzeitig leer? Frieren Sie es in Portionen von {portion} g ein, tauen Sie es im Kühlschrank auf und rühren Sie es vor Gebrauch um. Es wird nie erneut eingefroren.</p>`,
      },
      {
        id: 'service',
        title: 'Den Service vorbereiten',
        html: `<p>Drei Gewohnheiten machen den Unterschied zwischen einer Krone, die hält, und einer, die es nicht tut, und alle drei passieren vor der ersten Bestellung:</p>
<ul>
<li><strong>Die Basis vorbatchen, nicht das Aquafaba.</strong> Whiskey, Zitrone und Sirup lassen sich vorab batchen. Das Aquafaba kommt beim Shaken dazu, Drink für Drink, sonst ist die Höhe bis zur Mitte des Service weg.</li>
<li><strong>Kalt, und abgemessen.</strong> Aquafaba schäumt schneller und hält länger, wenn es gekühlt in den Shaker kommt. Wiegen oder jiggern Sie jedes Mal {cocktails_dose} g: Freies Eingießen macht die Krone von Drink zu Drink ungleich.</li>
<li><strong>Pulver wird angerührt, bevor die Türen aufgehen.</strong> Ein Drink sind {cocktails_powder} g Pulver und {cocktails_water} ml Wasser; pro Eiweiß ergeben {white_powder} g und {white_water} ml {white_total} g Aquafaba. Rühren Sie an, was der Service braucht, kühlen Sie es, und es gießt sich wie die flüssige Ware. Der <a href="{cocktails_calc_href}">Cocktailrechner</a> nennt die Zahlen für jede Zahl von Drinks.</li>
</ul>
<p>Volle Wochenenden und ruhige Wochentage? Viele Bars führen beides: das Tetrapak im Kühlschrank für den Ansturm, den Beutel im Regal für den Rest. Die Dosis ist bei beiden dieselbe.</p>`,
      },
      {
        id: 'book',
        title: 'Was ins Barbuch gehört',
        html: `<p>Aquafaba verlangt vier Zeilen im Barbuch, und sie retten an einem vollen Abend einen flachen Sour:</p>
<ul>
<li><strong>Das Öffnungsdatum auf dem Gebinde.</strong> Geöffnete flüssige Ware wird bei höchstens {opened_temp} °C gelagert und innerhalb von {opened_days} Tagen verbraucht. Schreiben Sie das Datum auf die Packung, sobald sie geöffnet wird.</li>
<li><strong>Die Dosis.</strong> {cocktails_dose} g pro Drink, gewogen oder gejiggert, nie frei eingegossen.</li>
<li><strong>Die Reihenfolge der Shakes.</strong> Erst Dry Shake für {cocktails_dry_shake} Sekunden, dann {cocktails_wet_shake} Sekunden mit Eis. Eis von Anfang an gibt eine dünne Krone.</li>
<li><strong>Wann ein geöffnetes Gebinde weg muss.</strong> Riecht die flüssige Ware unangenehm, zeigt sie Bläschen oder hat sie sich abgesetzt, wird sie entsorgt, egal was das Datum sagt.</li>
</ul>
<p>Das <a href="{cocktails_process_href}">Prozessblatt</a> druckt diese Punkte mit dem Referenzwert jedes Schritts, fertig fürs Barbuch.</p>`,
      },
    ],
    faq: [
      { q: 'Wie viele Sours schenkt ein 1 L Gebinde aus?', a: '{cocktails_batches_1l} Sours zu je {cocktails_dose} g. Ein 200 g Beutel Pulver ergibt {cocktails_batches_200g}, Drink für Drink oder für den ganzen Service angerührt.' },
      { q: 'Muss ich mein Sour-Rezept ändern?', a: 'Nein. Eine Zutat ändert sich: {cocktails_dose} g Aquafaba ersetzen das Eiweiß. Whiskey, Zitrone, Sirup, Dry Shake und Wet Shake bleiben, wie sie sind.' },
      { q: 'Kann das Aquafaba in den Vorbatch?', a: 'Nein. Batchen Sie Whiskey, Zitrone und Sirup und geben Sie das Aquafaba beim Shaken dazu, pro Drink. Aquafaba im Vorbatch gibt bis zur Mitte des Service keine Höhe mehr.' },
      { q: 'Was, wenn ich nur ein paar Sours pro Woche ausschenke?', a: 'Nehmen Sie das Pulver. Ein geöffneter Beutel verdirbt nicht, solange er trocken und verschlossen bleibt, Sie rühren also an, was der Abend braucht, und der Rest wartet. Geöffnete flüssige Ware hat {opened_days} Tage im Kühlschrank.' },
      { q: 'Kann ich es in einer Bar testen, bevor die ganze Gruppe umstellt?', a: 'Ja. Der 30 g Beutel Pulver ist für einen ersten Versuch gemacht: Mit {white_powder} g plus {white_water} ml Wasser pro Eiweiß angerührt, deckt er einen Service Sours ab. Fragen Sie ihn über unser [Kontaktformular]({contact_href}) an.' },
      { q: 'Trägt der Schaum Bitters?', a: 'Ja. Nach Dry Shake und Wet Shake, fein in eine gekühlte Coupe abgeseiht, ist die Krone fest genug, um ein paar Tropfen Bitters zu tragen.' },
    ],
    links: [
      { href: '{cocktails_href}', label: 'Cocktails: flüssig oder Pulver?' },
      { href: '{cocktails_calc_href}', label: 'Mengenrechner für Cocktails' },
      { href: '{cocktails_process_href}', label: 'Prozessblatt für Cocktails' },
      { href: '{reconstitution_href}', label: 'Pulver anrühren: die Regel pro Eiweiß' },
    ],
  },

  foodservice: {
    title: 'Aquafaba für Zentralküchen - VERY AQUAFABA',
    h1: 'So verwenden Sie Aquafaba in einer Zentralküche: der vollständige Leitfaden',
    crumb: 'Gemeinschaftsverpflegung und Zentralküchen',
    enquiryLabel: 'Gemeinschaftsverpflegung und Zentralküchen',
    description: 'Aquafaba für Zentralküchen: Mayonnaise, Mousse, Baiser und eifreie Gebäcke aus einer Zutat. Was eine Schicht produziert und was zu den Standorten reist.',
    lead: 'Eine Zentralküche stellt die Mayonnaise, die Desserts und die eifreien Gebäcke her, die ihre Standorte servieren. Aquafaba deckt alle davon aus einer Zutat ab: {white_liquid} g pro Eiweiß, {egg_liquid} g pro ganzem Ei. Unten ein Tag in dieser Küche: was eine Schicht produzieren kann, was gut reist und wie lange, und wie Sie die Standorte mit demselben Rezept am Laufen halten.',
    figures: false,
    sections: [
      {
        id: 'why',
        title: 'Warum Zentralküchen auf Aquafaba umsteigen',
        html: `<p>Mehrere Standorte aus einer Küche zu versorgen heißt, dass jede Zutat zweimal halten muss: einmal in der Produktion und einmal auf der Straße. Aquafaba verdient seinen Platz aus drei Gründen:</p>
<ul>
<li><strong>Eine Zutat, vier Aufgaben.</strong> Es emulgiert die Mayonnaise, schlägt sich zu Mousse und Baiser auf und bindet Biskuits und Teige. Eine Zeile in der Bestandsliste ersetzt das Ei in allen.</li>
<li><strong>Nichts Rohes in den kalten Saucen.</strong> Mayonnaise wird ungekocht serviert. Aquafaba ersetzt das Ei ohne Rohei-Risiko in dem Gericht, das die Küche verlässt.</li>
<li><strong>Vorrat, der wartet.</strong> Verschlossen halten beide Formate mindestens {unopened_months} Monate bei Raumtemperatur, im Trockenlager, nicht im Kühlraum. Die Uhr läuft erst, wenn ein Gebinde geöffnet ist.</li>
</ul>`,
      },
      {
        id: 'shift',
        title: 'Was eine Schicht produzieren kann',
        html: `<p>Die Ansatzzahlen sind die der VERY AQUAFABA Rezepte. Die 10 L Bag-in-Box ist das Gebinde, aus dem die meisten Zentralküchen entnehmen; das 1 L Tetrapak bedient einen einzelnen Standort.</p>
${grid(['Anwendung', 'Ein Ansatz', 'Aus einer 10 L Bag-in-Box', 'Aus einem 1 L Tetrapak'], [
  ['<a href="{mayonnaise_href}">Mayonnaise</a>', '{mayonnaise_dose} g Aquafaba für etwa {mayonnaise_yield} g Mayonnaise', '{mayonnaise_batches_10l} Ansätze', '{mayonnaise_batches_1l} Ansätze'],
  ['<a href="{chocolate_mousse_href}">Schokoladenmousse</a>', '{chocolate_mousse_dose} g für etwa {chocolate_mousse_yield} Portionen', '{chocolate_mousse_batches_10l} Ansätze', '{chocolate_mousse_batches_1l} Ansätze'],
  ['<a href="{meringue_href}">Baiser</a>', '{meringue_dose} g für etwa {meringue_yield} Baisers', '{meringue_batches_10l} Ansätze', '{meringue_batches_1l} Ansätze'],
  ['<a href="{baking_href}">Biskuits, Kuchen, Teige</a>', '{egg_liquid} g pro ganzem Ei', '{eggs_10l} ganze Eier', '{eggs_1l} ganze Eier'],
], 'va-guide-grid--wrap')}
<p>Mayonnaise braucht sehr wenig Aquafaba pro Ansatz, weshalb selbst ein 1 L Gebinde an einer Saucenstation lange reicht. Die Frage ist nie, ob ein Gebinde groß genug ist; sie ist, ob ein geöffnetes innerhalb von {opened_days} Tagen aufgebraucht wird. Jeder Leitfaden hat einen Mengenrechner, der den Ansatz auf Ihren Durchgang skaliert.</p>`,
      },
      {
        id: 'travel',
        title: 'Was gut reist, und wie lange',
        html: `<p>Hier macht Aquafaba einer Küche, die ausliefert, das Leben leichter. Sobald es fertig ist, verlangt jedes Produkt etwas anderes:</p>
<ul>
<li><strong>Mayonnaise</strong> hält bis zu {mayonnaise_keep} Tage gekühlt, unter hygienischen Bedingungen hergestellt, in einem sauberen Behälter und direkt nach dem Mixen gekühlt. Sie wird fertig verschickt.</li>
<li><strong>Schokoladenmousse</strong> wird im Kühlschrank fest und hält {chocolate_mousse_keep} Tage in verschlossener Verpackung. Portionieren Sie sie zentral und verschicken Sie sie fest.</li>
<li><strong>Baisers</strong> halten luftdicht bei Raumtemperatur an einem trockenen Ort. Keine Kühlkette im Lieferwagen.</li>
<li><strong>Gebäcke und reiche Teige</strong> bleiben länger weich, weil Aquafaba das Austrocknen der Krume verlangsamt. Das sind ein oder zwei Tage zusätzliche Haltbarkeit auf dem Weg zum Standort.</li>
</ul>
<p>Beschriften Sie jeden Behälter mit Produktionsdatum und Gewicht, bevor er die Küche verlässt, wie der Lagerleitfaden es verlangt. Es ist die eine Gewohnheit, die eine Lieferung vom Mixer bis zum Kühlschrank des Standorts rückverfolgbar hält.</p>`,
      },
      {
        id: 'outlets',
        title: 'Die Standorte am Laufen halten',
        html: `<p>Die meisten Gruppen teilen die beiden Formate danach auf, wo die Arbeit stattfindet. Die Zentralküche entnimmt flüssige Ware aus der Bag-in-Box, weil ihr Verbrauch kontinuierlich ist und ein geöffnetes Gebinde rechtzeitig umschlägt. Die Standorte, die vor Ort aufschlagen oder mixen, halten einen 200 g Beutel Pulver im Regal, weil eine ruhige Woche ihn nicht verderben lässt.</p>
${grid(['Ihr Betrieb', 'Empfehlung', 'Warum'], [
  ['Zentralküche, die Aquafaba kiloweise pro Schicht entnimmt', 'Flüssig, 10 L Bag-in-Box oder 1 T IBC', 'Dauerbetrieb, direkt in den Mixer, ohne Anrühren'],
  ['Feinkost- oder Sandwichtheke, die in jedem Service frische Mayonnaise macht', 'Flüssig, 1 L Tetrapak', 'Auf Mixtemperatur gegossen, und das Gebinde schlägt rechtzeitig um'],
  ['Standort mit Mayonnaise oder Mousse auf einem Gericht', 'Pulver, 200 g Beutel', 'Ein geöffneter Liter würde seine {opened_days} Tage überdauern; der Beutel wartet'],
  ['Kühlraum schon voll mit fertiger Sauce und Portionen', 'Pulver', 'Der Beutel belegt nie einen Kühlplatz'],
  ['Standort, der weniger datierte Artikel protokollieren will', 'Pulver', 'Kein geöffnetes, verderbliches Gebinde zum Etikettieren und Prüfen'],
])}
<p>Das Rezept ändert sich zwischen den beiden nicht: {white_liquid} g flüssig sind {white_powder} g Pulver, angerührt mit {white_water} ml Wasser, eine zentral entwickelte Sauce läuft am Standort also genauso. Für die größten Küchen und kontinuierlichen Linien behandelt die <a href="{industry_href}">Seite Lebensmittelindustrie</a> den 1 T IBC.</p>`,
      },
    ],
    faq: [
      { q: 'Wie viele Eiweiße ersetzt eine 10 L Bag-in-Box?', a: '{bib_10l_whites} Eiweiße, bei {white_liquid} g flüssig pro Eiweiß. In Mayonnaise sind das {mayonnaise_batches_10l} Ansätze, in Schokoladenmousse {chocolate_mousse_batches_10l}, in Baiser {meringue_batches_10l}.' },
      { q: 'Können wir Aquafaba-Mousse an unsere Standorte verschicken?', a: 'Ja. Lassen Sie sie zentral fest werden, in verschlossener Verpackung, und sie hält {chocolate_mousse_keep} Tage gekühlt. Die Mayonnaise hält unter denselben Bedingungen bis zu {mayonnaise_keep} Tage gekühlt.' },
      { q: 'Können Standorte mit geringer Rotation dasselbe Produkt verwenden?', a: 'Ja, als Pulver. Ein 200 g Beutel ersetzt {powder_200g_whites} Eiweiße, verdirbt nach dem Öffnen nicht, solange er trocken und verschlossen bleibt, und wird mit {white_powder} g plus {white_water} ml Wasser pro Eiweiß angerührt, wenn der Standort es braucht.' },
      { q: 'Wie lange hält eine geöffnete Bag-in-Box?', a: 'Wie jedes geöffnete Flüssiggebinde: bei höchstens {opened_temp} °C, innerhalb von {opened_days} Tagen verbraucht. Sie passt zu Küchen mit kontinuierlicher Entnahme, damit das Gebinde weiter umschlägt.' },
      { q: 'Braucht der Standort einen Kühlschrankplatz für das Pulver?', a: 'Nein. Der Beutel steht im Trockenregal, geöffnet oder nicht. Nur das angerührte Aquafaba wird vor Gebrauch gekühlt, und nur so viel, wie der Ansatz braucht.' },
      { q: 'Wohin schicken wir unsere Volumen?', a: 'Über unser [Kontaktformular]({contact_href}): Unternehmen, Land, Anwendung und geschätztes Monatsvolumen. Das technische Datenblatt kommt mit der Antwort zurück.' },
    ],
    links: [
      { href: '{mayonnaise_href}', label: 'Mayonnaise: flüssig oder Pulver?' },
      { href: '{chocolate_mousse_href}', label: 'Schokoladenmousse: flüssig oder Pulver?' },
      { href: '{mayonnaise_calc_href}', label: 'Mengenrechner für Mayonnaise' },
      { href: '{industry_href}', label: 'Lebensmittelindustrie' },
    ],
  },

  industry: {
    title: 'Aquafaba für die Lebensmittelindustrie - VERY AQUAFABA',
    h1: 'Aquafaba auf einer Produktionslinie: der vollständige Leitfaden',
    crumb: 'Lebensmittelindustrie',
    enquiryLabel: 'Lebensmittelindustrie',
    description: 'Aquafaba für Industrielinien: flüssig im 1 T IBC und der 10 L Bag-in-Box, standardisiert auf {viscosity} g/ml. Wie Sie das Ei in einer Rezeptur ersetzen.',
    lead: 'Auf einer Produktionslinie läuft Aquafaba als flüssige Ware, entnommen aus dem 1 T IBC oder der 10 L Bag-in-Box und nach Gewicht dosiert. Es kommt gefiltert, aufbereitet und auf {viscosity} g/ml standardisiert an, damit sich ein Schaum oder eine Emulsion bei jedem Durchgang gleich verhält. Unten der Weg vom ersten Versuch bis zur freigegebenen Spezifikation: das Ei in Ihrer Rezeptur ersetzen, was sich im großen Maßstab ändert, welches Gebinde zur Linie passt und wie Sie ein Angebot bekommen.',
    figures: false,
    sections: [
      {
        id: 'why',
        title: 'Warum Hersteller auf Aquafaba umsteigen',
        html: `<p>Vier Dinge, die ein pflanzlicher Ei-Ersatz auf eine Linie bringt, alle auf der Packung oder in der Preisliste statt in einer Behauptung:</p>
<ul>
<li><strong>Eine pflanzliche, eifreie Zutat.</strong> Ohne Eier, Milch, Gluten oder Soja, was ein Hauptallergen aus der Rezeptur nimmt und das Produkt für pflanzliche Sortimente öffnet.</li>
<li><strong>Ein Preis, der nicht dem Eiermarkt folgt.</strong> Eierpreise bewegen sich mit Futterkosten, Krankheiten und Lieferengpässen. Aquafaba nicht.</li>
<li><strong>Ein standardisierter Rohstoff.</strong> Jede Charge kommt mit {viscosity} g/ml an, und genau das hält einen Schaum oder eine Emulsion von einem Durchgang zum nächsten reproduzierbar.</li>
<li><strong>Vorrat, der wartet.</strong> Verschlossen halten die Gebinde mindestens {unopened_months} Monate bei Raumtemperatur. Auf einer kontinuierlichen Linie erreicht ein geöffnetes Gebinde seine {opened_days} Tage nie.</li>
</ul>`,
      },
      {
        id: 'formula',
        title: 'Das Ei in Ihrer Rezeptur ersetzen',
        html: `<p>Die Umrechnung geht nach Gewicht, und es ist dieselbe Regel, die die ganze Website verwendet. Zählen Sie die Eier, Eiweiße und Eigelbe in der Rezeptur und tauschen Sie sie eins zu eins:</p>
<ul>
<li>{egg_liquid} g Aquafaba pro ganzem Ei.</li>
<li>{white_liquid} g pro Eiweiß.</li>
<li>{yolk_liquid} g Aquafaba plus {yolk_oil} g Öl pro Eigelb, denn Aquafaba bringt kein Fett mit.</li>
</ul>
<p>Eiweiße zu ersetzen ist ein direkter Tausch. Ganze Eier zu ersetzen bringt zusätzliches Wasser: Aquafaba besteht zu etwa {water_aquafaba_pct} Prozent aus Wasser gegenüber {water_egg_pct} Prozent bei einem Ei, die anderen Flüssigkeiten gehen also um {reduce_liquids} Prozent zurück, und dichte Gebäcke werden durchgebacken. Nehmen Sie ein Produkt nach dem anderen, ändern Sie nur das Ei, und lassen Sie die Versuchschargen Zeit, Farbe und Textur bestätigen, bevor die Änderung ins Standardverfahren geht. Der <a href="{baking_calc_href}">Ersatzrechner</a> rechnet eine ganze Rezeptur um, und die <a href="{ratio_href}">Seite zum Ei-Verhältnis</a> trägt die Regel mit Rechenbeispielen.</p>`,
      },
      {
        id: 'scale',
        title: 'Worauf Sie beim Hochskalieren achten',
        html: `<p>Eine Rezeptur, die am Arbeitstisch funktioniert, trifft auf der Linie auf vier neue Variablen. Jede stammt aus einem VERY AQUAFABA Rezept, das für die Produktion geschrieben wurde:</p>
<ul>
<li><strong>Die Konzentration halten.</strong> Halten Sie das Aquafaba von Charge zu Charge bei {viscosity} g/ml. Driftet die Dichte, verhält sich der Schaum anders, selbst bei gleichen Gewichten und Zeiten. Siehe den <a href="{meringue_href}">Baiser-Leitfaden</a>.</li>
<li><strong>Auf Mousselinien voremulgieren.</strong> Emulgieren Sie bei großen Ansätzen zuerst einen Teil der Schokolade mit einer kleinen Menge Aquafaba und heben Sie dann den restlichen Schaum unter. So bleibt der Ansatz homogen. Siehe den <a href="{chocolate_mousse_href}">Leitfaden zur Schokoladenmousse</a>.</li>
<li><strong>Hohe Scherkraft auf Saucenlinien.</strong> Bei großen Mayonnaiseansätzen hält die Tröpfchengröße die Emulsion stabil, die Linie läuft also mit einem Hochleistungsmixer, und das Öl kommt als dünner, gleichmäßiger Strahl. Siehe den <a href="{mayonnaise_href}">Mayonnaise-Leitfaden</a>.</li>
<li><strong>Die Haltbarkeit neu prüfen, wenn sich die Feuchtigkeit ändert.</strong> Jede Änderung des Wassers in einem Gebäck ändert seine Wasseraktivität. Überwachen Sie Haltbarkeit und mikrobielle Stabilität des fertigen Produkts nach der Umformulierung, was im industriellen Maßstab am meisten zählt. Siehe den <a href="{baking_href}">Back-Leitfaden</a>.</li>
</ul>`,
      },
      {
        id: 'packs',
        title: 'Welches Gebinde zu Ihrer Linie passt',
        html: `<p>Die Linie wird nach Gewicht dosiert, jedes Gebinde lässt sich also am leichtesten über die Eiweiße vorstellen, die es ersetzt, bei {white_liquid} g pro Eiweiß.</p>
${grid(['Format', 'Eiweiße', 'Wo es läuft'], [
  ['1 T IBC, flüssig', '{ibc_1t_whites}', 'Kontinuierliche Dosierung: Baiserschalen, die jeden Arbeitstag getrocknet werden, Moussebecher für den Handel, Saucenlinien, abgefüllte Sour-Basen'],
  ['10 L Bag-in-Box, flüssig', '{bib_10l_whites}', 'Pilotläufe, kleinere Linien und die Zentralküchen einer Gruppe'],
  ['3 kg Sack, Pulver', '{powder_3kg_whites}', 'Trockenmischungen: ein Hersteller, der eine trockene Saucen- oder Backbasis mischt, gibt es so in die Vormischung, wie es ist'],
], 'va-guide-grid--wrap')}
<p>Für aufgeschlagene und emulgierte Linien ist die flüssige Ware das Format, denn sie kommt mit fester Konzentration an und muss nicht angerührt werden. Das Pulver verdient seinen Platz in einer Trockenmischung. Einmal geöffnet, wird die flüssige Ware bei höchstens {opened_temp} °C gehalten und innerhalb von {opened_days} Tagen verbraucht, was auf einer kontinuierlichen Linie einfach der normale Rhythmus eines Gebindes ist.</p>`,
      },
      {
        id: 'spec',
        title: 'Spezifikation und Angebot erhalten',
        html: `<p>Spezifikationen, Mindestbestellmenge und Lieferzeit hängen von Land, Format und Volumen ab und werden deshalb pro Projekt genannt. Schicken Sie uns die Linie, die Anwendung, die Formate, die Sie erwägen, und das geschätzte Monatsvolumen über unser <a href="{contact_href}">Kontaktformular</a>, und das technische Datenblatt kommt mit dem Angebot zurück. Für die Zentralküchen einer Gruppe, wo die 10 L Bag-in-Box im Tagesbetrieb läuft, siehe die <a href="{foodservice_href}">Seite Gemeinschaftsverpflegung</a>.</p>`,
      },
    ],
    faq: [
      { q: 'Wie viele Eiweiße ersetzt ein 1 T IBC?', a: '{ibc_1t_whites} Eiweiße, bei {white_liquid} g flüssig pro Eiweiß. Die 10 L Bag-in-Box ersetzt {bib_10l_whites}. Beide sind flüssig, kontinuierlich entnommen und ohne Anrühren.' },
      { q: 'Ist das Pulver eine Option für eine Industrielinie?', a: 'Für Trockenmischungen ja: Der 3 kg Sack ersetzt {powder_3kg_whites} Eiweiße und geht so, wie er ist, in eine trockene Saucen- oder Backbasis. Für aufgeschlagene und emulgierte Linien ist die flüssige Ware das Format, denn sie kommt mit fester Konzentration an und muss nicht angerührt werden.' },
      { q: 'Welche Konzentration soll die Linie halten?', a: '{viscosity} g/ml. VERY AQUAFABA ist auf diese Konzentration gefiltert, aufbereitet und standardisiert, damit sich Schaum oder Emulsion bei jedem Durchgang gleich verhalten.' },
      { q: 'Wie rechnen wir eine in Eiern gezählte Rezeptur um?', a: '{egg_liquid} g Aquafaba pro ganzem Ei, {white_liquid} g pro Eiweiß, {yolk_liquid} g plus {yolk_oil} g Öl pro Eigelb, alles nach Gewicht. Andere Flüssigkeiten gehen um {reduce_liquids} Prozent zurück, wenn ganze Eier ersetzt werden, und Testchargen bestätigen Zeit, Farbe und Textur.' },
      { q: 'Ändert der Ei-Ersatz die Haltbarkeit unseres Produkts?', a: 'Das kann er, denn Aquafaba ändert das Wasser in der Rezeptur und damit ihre Wasseraktivität. Überwachen Sie Haltbarkeit und mikrobielle Stabilität des fertigen Produkts nach der Umformulierung, wie der [Back-Leitfaden]({baking_href}) es beschreibt.' },
      { q: 'Wo stehen Mindestbestellmenge und Lieferzeit?', a: 'Sie werden pro Projekt mit dem technischen Datenblatt genannt. Beschreiben Sie Linie, Formate und geschätztes Monatsvolumen über unser [Kontaktformular]({contact_href}), und die Antwort enthält sie.' },
    ],
    links: [
      { href: '{ratio_href}', label: 'Wie viel Aquafaba entspricht einem Ei' },
      { href: '{baking_calc_href}', label: 'Ersatzrechner' },
      { href: '{meringue_href}', label: 'Baiser: flüssig oder Pulver?' },
      { href: '{mayonnaise_href}', label: 'Mayonnaise: flüssig oder Pulver?' },
      { href: '{foodservice_href}', label: 'Gemeinschaftsverpflegung und Zentralküchen' },
    ],
  },
};
