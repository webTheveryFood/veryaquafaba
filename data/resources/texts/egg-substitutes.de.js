// Pflanzlicher Ei-Ersatz, Deutsch (Set-2 A1 bis A4). Gleiche Struktur, Tokens und Tags wie
// egg-substitutes.en.js (geprüft von scripts/applications/check-guides.mjs). Kein Gedankenstrich.
const grid = (heads, rows) => `<table class="va-guide-grid">
<thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
<tbody>
${rows.map((r) => `<tr>${r.map((c, i) => `<td data-label="${heads[i]}">${c}</td>`).join('')}</tr>`).join('\n')}
</tbody>
</table>`;

export default {
  index: {
    title: 'Pflanzlicher Ei-Ersatz: veganer Ei-Ersatz nach Funktion - VERY AQUAFABA',
    h1: 'Pflanzlicher Ei-Ersatz: beginnen Sie bei der Funktion, die Sie ersetzen',
    crumb: 'Ei-Ersatz',
    enquiryLabel: 'Ei-Ersatz',
    description: 'Veganer Ei-Ersatz wird nach Funktion gewählt: aufschlagen, emulgieren oder binden. VERY AQUAFABA deckt alle drei aus Kichererbsen ab, mit {egg_liquid} g pro ganzem Ei und {white_liquid} g pro Eiweiß, samt den Anwendungen, in denen jede Funktion dokumentiert ist.',
    lead: 'Pflanzlicher Ei-Ersatz wird nach der Aufgabe gewählt, die er übernehmen soll: einen Schaum tragen, eine Emulsion zusammenhalten oder einen Teig binden. VERY AQUAFABA ist Kichererbsen-Aquafaba, gefiltert und standardisiert, und deckt alle drei ab: {egg_liquid} g ersetzen ein ganzes Ei, {white_liquid} g ein Eiweiß, und {yolk_liquid} g plus {yolk_oil} g Öl treten an die Stelle eines Eigelbs. Diese Seite ordnet die Wahl nach Funktion, gibt die Umrechnung nach Gewicht und führt Sie zu der Anwendung, in der diese Funktion bereits dokumentiert ist.',
    figures: true,
    sections: [
      {
        id: 'function',
        title: 'Nach Funktion: aufschlagen, emulgieren, binden',
        html: `<p>Das Ei übernimmt im Rezept drei verschiedene Aufgaben, und ein Ersatz wird an der gemessen, die Sie wirklich brauchen. Jede Zeile unten führt zu dem Leitfaden, in dem diese Funktion vollständig ausgearbeitet ist, mit Methode und Kontrollen.</p>
${grid(['Funktion', 'Was das Ei geleistet hat', 'Mit VERY AQUAFABA', 'Dokumentiert in'], [
  ['Aufschlagen', 'Eiweiß, zu einem Schaum aufgeschlagen, der Zucker und Luft trägt', '{white_liquid} g pro Eiweiß, für sich allein aufgeschlagen, kalt', '<a href="{meringue_href}">Baiser</a>, <a href="{macarons_href}">Macarons</a>, <a href="{chocolate_mousse_href}">Schokoladenmousse</a>, <a href="{cocktails_href}">Cocktails</a>'],
  ['Emulgieren', 'Ei, das Öl und Wasser in einer Sauce zusammenhält', '{mayonnaise_dose} g emulgieren {mayonnaise_oil} g Öl', '<a href="{mayonnaise_href}">Mayonnaise</a>'],
  ['Binden und Feuchtigkeit', 'Ganzes Ei, das einen Teig bindet und Wasser mitbringt', '{egg_liquid} g pro ganzes Ei, gewogen', '<a href="{baking_href}">Backen</a>'],
  ['Gehalt eines Eigelbs', 'Eigelb, das Fett und Farbe bringt', '{yolk_liquid} g plus {yolk_oil} g Öl', '<a href="{ratio_href}">Seite zum Ei-Verhältnis</a>'],
])}
<p>Ein Produkt deckt alle vier Zeilen ab, und genau das unterscheidet Aquafaba von einem Ersatz, der pro Funktion gekauft wird. Was sich ändert, sind Dosis und Handhabung, nicht das Produkt.</p>`,
      },
      {
        id: 'convert',
        title: 'Ein Rezept umrechnen, nach Gewicht',
        html: `<p>Aquafaba wird gewogen, nie in Löffeln abgemessen: so bleibt ein professionelles Rezept von Charge zu Charge gleich. Die Regel ist kurz.</p>
<ul>
<li>{egg_liquid} g Aquafaba ersetzen ein ganzes Ei.</li>
<li>{white_liquid} g ersetzen ein Eiweiß, ebenso {white_powder} g Pulver, angerührt mit {white_water} ml Wasser.</li>
<li>{yolk_liquid} g plus {yolk_oil} g Öl treten an die Stelle eines Eigelbs, denn Aquafaba bringt kein Fett mit.</li>
</ul>
<p>Ein Ei besteht zu etwa {water_egg_pct} Prozent aus Wasser, Aquafaba zu {water_aquafaba_pct} Prozent; fallen ganze Eier weg, gehen die anderen Flüssigkeiten also um {reduce_liquids} Prozent zurück und dichte Gebäcke werden durchgebacken. Die <a href="{ratio_href}">Seite zum Ei-Verhältnis</a> trägt die Rechenbeispiele, und der <a href="{baking_calc_href}">Ersatzrechner</a> rechnet die Eier, Eiweiße und Eigelbe Ihres eigenen Rezepts in flüssig oder Pulver um.</p>`,
      },
      {
        id: 'formats',
        title: 'Zwei Formate desselben Produkts',
        html: `<p>Dasselbe Aquafaba gibt es gießfertig oder getrocknet. Welches zu Ihnen passt, entscheidet sich daran, wie schnell ein geöffnetes Gebinde aufgebraucht ist und wo es steht, nicht am Rezept: die Umrechnung oben ist bei beiden gleich.</p>
${grid(['Format', 'Pro Eiweiß', 'Nach dem Öffnen', 'Weiterlesen'], [
  ['Flüssig, 1 L Tetrapak bis 1 T IBC', '{white_liquid} g, direkt zum Abwiegen', '{opened_days} Tage bei höchstens {opened_temp} °C', '<a href="{liquid_egg_white_href}">Pflanzliche Alternative zu flüssigem Eiweiß</a>'],
  ['Pulver, Beutel von 30 g bis 3 kg', '{white_powder} g plus {white_water} ml Wasser', 'Verdirbt nicht, trocken und verschlossen gelagert', '<a href="{egg_white_powder_href}">Pflanzliche Alternative zu Eiklarpulver</a>'],
])}
<p>Wenn Sie gezielt Eiweiß ersetzen, zeigt die <a href="{egg_white_href}">Eiweiß-Seite</a> die Entsprechung Gebinde für Gebinde. Kaufen Sie für eine Küche, eine Bar oder eine Linie, ordnet der <a href="{professional_href}">Profi-Bereich</a> die Formate nach Tätigkeit.</p>`,
      },
      {
        id: 'labels',
        title: 'Was das Produkt ist und was das Etikett sagt',
        html: `<p>VERY AQUAFABA ist die Flüssigkeit aus dem Kochen von Kichererbsen, gefiltert, aufbereitet und für den professionellen Einsatz standardisiert, geschmacksneutral und clean label, wie die <a href="{products_href}">Produktseite</a> es beschreibt. Dieselbe Seite nennt, was auf der Packung steht: pflanzlich, glutenfrei und ein Nutri-Score A auf der flüssigen Ware.</p>
<p>Die Packung erklärt, dass sie die Funktionalität von Eiweiß ersetzt, und genau davon gehen diese Seiten aus: der Schaum, die Emulsion und die Bindung von oben, jeweils in einem Rezept der Website gezeigt. Alles, was am Fett eines Eigelbs hängt, bekommt die Ölkorrektur. Für das technische Datenblatt eines Formats nutzen Sie das Anfrageformular auf dieser Seite.</p>`,
      },
    ],
    faq: [
      { q: 'Woraus besteht dieser vegane Ei-Ersatz?', a: 'Aus Kichererbsen und Wasser. VERY AQUAFABA ist die Flüssigkeit aus dem Kochen von Kichererbsen, gefiltert, aufbereitet und standardisiert, damit jede Charge gleich reagiert, wie die [Produktseite]({products_href}) beschreibt.' },
      { q: 'Wie viel Aquafaba entspricht einem Ei?', a: '{egg_liquid} g Aquafaba pro ganzes Ei, {white_liquid} g pro Eiweiß und {yolk_liquid} g plus {yolk_oil} g Öl pro Eigelb. Wiegen Sie ab, statt in Löffeln zu messen.' },
      { q: 'Welche Funktion ersetzt es am besten?', a: 'Alle drei aus der Tabelle oben, jede in einem dokumentierten Rezept: Aufschlagen in Baiser, Macarons, Mousse und Cocktails, Emulgieren in Mayonnaise, Binden und Feuchtigkeit beim Backen.' },
      { q: 'Muss ich sonst etwas am Rezept ändern?', a: 'Nur die Flüssigkeiten, und nur wenn ganze Eier wegfallen: nehmen Sie die anderen Flüssigkeiten um {reduce_liquids} Prozent zurück, denn Aquafaba besteht zu etwa {water_aquafaba_pct} Prozent aus Wasser, ein Ei zu etwa {water_egg_pct} Prozent.' },
      { q: 'Ist das Pulver dasselbe wie die flüssige Ware?', a: 'Ja, getrocknet. {white_powder} g Pulver plus {white_water} ml Wasser ergeben {white_total} g Aquafaba, dieselbe Masse wie flüssig, und ersetzen ein Eiweiß.' },
    ],
    links: [
      { href: '{egg_white_href}', label: 'Pflanzliche Alternative zu Eiweiß' },
      { href: '{liquid_egg_white_href}', label: 'Pflanzliche Alternative zu flüssigem Eiweiß' },
      { href: '{egg_white_powder_href}', label: 'Pflanzliche Alternative zu Eiklarpulver' },
      { href: '{ratio_href}', label: 'Wie viel Aquafaba entspricht einem Ei' },
      { href: '{professional_href}', label: 'Aquafaba für Profis' },
    ],
  },

  'egg-white': {
    title: 'Pflanzliche Alternative zu Eiweiß: {white_liquid} g pro Eiweiß - VERY AQUAFABA',
    h1: 'Eine pflanzliche Alternative zu Eiweiß: {white_liquid} g Aquafaba pro Eiweiß',
    crumb: 'Eiweiß',
    enquiryLabel: 'Eiweiß-Alternative',
    description: 'Veganer Eiweiß-Ersatz, pro Eiweiß gezählt: {white_liquid} g VERY AQUAFABA flüssig oder {white_powder} g Pulver ersetzen ein Eiweiß, mit den Chargen je Gebinde und den Rezepten, in denen es dokumentiert ist.',
    lead: 'Ein Eiweiß wird durch {white_liquid} g VERY AQUAFABA flüssig ersetzt oder durch {white_powder} g Pulver, angerührt mit {white_water} ml Wasser. Diese eine Entsprechung macht ein in Eiweißen gezähltes Rezept leicht umrechenbar: ein 1 L Tetrapak tritt an die Stelle von {liquid_1l_whites} Eiweißen, ein 200 g Beutel an die von {powder_200g_whites}. Diese Seite zeigt die Entsprechung Gebinde für Gebinde, was der Schaum in den Rezepten der Website leistet und was der Besen von Ihnen verlangt.',
    figures: true,
    sections: [
      {
        id: 'equivalence',
        title: 'Die Entsprechung, Gebinde für Gebinde',
        html: `<p>Jedes Gebinde wird über die Zahl der Eiweiße beschrieben, für die es einsteht, denn so zählt ein Rezept sie.</p>
${grid(['Gebinde', 'Eiweiße', 'Was das in der Praxis heißt'], [
  ['1 L Tetrapak, flüssig', '{liquid_1l_whites}', '{meringue_batches_1l} Chargen Baiser oder {macarons_batches_1l} Chargen Macarons'],
  ['10 L Bag-in-Box, flüssig', '{bib_10l_whites}', 'Eine Produktionsküche, die pro Schicht kiloweise entnimmt'],
  ['1 T IBC, flüssig', '{ibc_1t_whites}', 'Eine Linie mit kontinuierlicher Dosierung'],
  ['30 g Beutel, Pulver', '{powder_30g_whites}', 'Eine erste Testcharge'],
  ['200 g Beutel, Pulver', '{powder_200g_whites}', '{meringue_batches_200g} Chargen Baiser'],
  ['3 kg Sack, Pulver', '{powder_3kg_whites}', 'Eine Profiküche oder eine Trockenmischung'],
])}
<p>Die <a href="{ratio_href}">Seite zum Ei-Verhältnis</a> trägt die ganze Umrechnung, ganze Eier und Eigelbe eingeschlossen; diese Seite bleibt beim Eiweiß.</p>`,
      },
      {
        id: 'does',
        title: 'Was es dort leistet, wo Eiweiß verwendet wurde',
        html: `<p>Eiweiß wird vor allem für eines verwendet: einen Schaum, der Luft hält und Zucker trägt. Aquafaba macht diesen Schaum ohne Ei in der Küche, und die Rezepte der Website zeigen ihn bei vier verschiedenen Belastungen.</p>
<ul>
<li><a href="{meringue_href}">Baiser</a>: {meringue_dose} g, also {meringue_eggs} Eiweiße, mit {meringue_sugar} g Zucker aufgeschlagen und bei {meringue_bake} °C getrocknet, für etwa {meringue_yield} Baisers.</li>
<li><a href="{macarons_href}">Macarons</a>: {macarons_dose} g, {macarons_eggs} Eiweiße, für etwa {macarons_yield} Schalen.</li>
<li><a href="{chocolate_mousse_href}">Schokoladenmousse</a>: {chocolate_mousse_dose} g, {chocolate_mousse_eggs} Eiweiße, bei {chocolate_mousse_fold_temp} °C unter die Schokolade gehoben.</li>
<li><a href="{cocktails_href}">Sours hinter der Bar</a>: {cocktails_dose} g pro Drink, {cocktails_dry_shake} Sekunden dry geshaked.</li>
</ul>
<p>Jeder Leitfaden trägt seinen eigenen <a href="{meringue_calc_href}">Mengenrechner</a> und sein Prozessblatt, damit sich eine Charge ohne Rechnerei umrechnet.</p>`,
      },
      {
        id: 'handling',
        title: 'Was der Besen verlangt',
        html: `<p>Der Schaum ist ein reiner Proteinschaum, ohne Fett im Rezept, und verhält sich entsprechend. Drei Punkte decken fast jeden Fehler ab, und es sind dieselben, die die Leitfäden drucken.</p>
<ul>
<li>Kalt. Aquafaba kommt mit {meringue_chill} °C in die Schüssel; angerührtes Pulver wird auf dieselbe Temperatur gekühlt. Warmes Aquafaba steigt langsam und gibt einen schwächeren Schaum.</li>
<li>Sauber. Ein Fettfilm auf Schüssel oder Besen hält das Volumen klein, beide werden also ausgewischt, bevor das Aquafaba hineinkommt.</li>
<li>Zucker zuletzt. Er kommt dazu, wenn der Schaum weiche Spitzen hält, löffelweise, sonst näßt er in der Lagerung.</li>
</ul>
<p>Die Schlagzeit zählt in Minuten, nicht in Sekunden: {meringue_whip} Minuten auf hoher Stufe für eine Baiser-Charge. Wo das Rezept einen Stabilisator vorsieht, kommt Weinstein oder Zitronensäure bei weichen Spitzen dazu, nicht am Anfang.</p>`,
      },
      {
        id: 'choose',
        title: 'Flüssig oder Pulver für dasselbe Eiweiß',
        html: `<p>Die Entsprechung ändert sich mit dem Format nicht, die Wahl betrifft also das Gebinde, nicht das Rezept. Geöffnete flüssige Ware wird bei höchstens {opened_temp} °C gelagert und innerhalb von {opened_days} Tagen verbraucht; geöffnetes Pulver verdirbt nicht, solange es trocken und verschlossen bleibt. Verschlossen halten beide mindestens {unopened_months} Monate bei Raumtemperatur.</p>
<p>Eine Küche, die an den meisten Tagen aufschlägt, bekommt einen geöffneten Liter rechtzeitig leer und nimmt die <a href="{liquid_egg_white_href}">flüssige Ware</a>. Wer nur gelegentlich aufschlägt oder keinen Kühlplatz frei hat, nimmt das <a href="{egg_white_powder_href}">Pulver</a> und rührt an, was die Charge braucht. Der <a href="{professional_href}">Profi-Bereich</a> geht dieselbe Frage nach Tätigkeit durch.</p>`,
      },
    ],
    faq: [
      { q: 'Wie viel Gramm Aquafaba ersetzen ein Eiweiß?', a: '{white_liquid} g flüssig oder {white_powder} g Pulver, angerührt mit {white_water} ml Wasser, was {white_total} g Aquafaba ergibt.' },
      { q: 'Wie viele Eiweiße stecken in einem 1 L Gebinde?', a: '{liquid_1l_whites}. Eine 10 L Bag-in-Box steht für {bib_10l_whites} und ein 1 T IBC für {ibc_1t_whites}; als Pulver ein 200 g Beutel für {powder_200g_whites}.' },
      { q: 'Schlägt es auf wie Eiweiß?', a: 'Es schlägt zu einem Schaum auf, der Zucker und Luft trägt, und darauf bauen die Rezepte für Baiser, Macarons, Mousse und Sour auf dieser Website. Es verlangt dieselbe kalte Schüssel und denselben fettfreien Besen.' },
      { q: 'Kann ich es in einem Rezept mit ganzen Eiern verwenden?', a: 'Ja, mit der Zahl für ganze Eier: {egg_liquid} g pro Ei, dazu die Flüssigkeitskorrektur von {reduce_liquids} Prozent. Der [Leitfaden Backen]({baking_href}) erklärt es.' },
      { q: 'Braucht es einen Stabilisator?', a: 'Er ist optional. Wo ein Rezept einen vorsieht, kommt Weinstein oder Zitronensäure bei laufender Maschine dazu, sobald der Schaum weiche Spitzen hält.' },
    ],
    links: [
      { href: '{meringue_href}', label: 'Baiser: flüssig oder Pulver?' },
      { href: '{macarons_href}', label: 'Macarons: flüssig oder Pulver?' },
      { href: '{ratio_href}', label: 'Wie viel Aquafaba entspricht einem Ei' },
      { href: '{liquid_egg_white_href}', label: 'Pflanzliche Alternative zu flüssigem Eiweiß' },
      { href: '{egg_white_powder_href}', label: 'Pflanzliche Alternative zu Eiklarpulver' },
    ],
  },

  'liquid-egg-white': {
    title: 'Pflanzliche Alternative zu flüssigem Eiweiß: Formate und Haltbarkeit - VERY AQUAFABA',
    h1: 'Eine pflanzliche Alternative zu flüssigem Eiweiß, direkt zum Abwiegen',
    crumb: 'Flüssiges Eiweiß',
    enquiryLabel: 'Alternative zu flüssigem Eiweiß',
    description: 'VERY AQUAFABA flüssig ersetzt flüssiges Eiweiß: {white_liquid} g pro Eiweiß, Gebinde zu 1 L, 10 L und 1 T, mindestens {unopened_months} Monate verschlossen bei Raumtemperatur und {opened_days} Tage nach dem Öffnen.',
    lead: 'Flüssiges Eiweiß kauft man, um das Aufschlagen der Eier zu sparen und nach Gewicht zu dosieren. VERY AQUAFABA flüssig leistet dasselbe aus Kichererbsen: {white_liquid} g ersetzen ein Eiweiß, es kommt mit einer festen Konzentration von {viscosity} g/ml an und wird direkt auf die Waage gegossen. Es gibt es zu 1 L, 10 L und 1 T, es hält verschlossen mindestens {unopened_months} Monate bei Raumtemperatur und nach dem Öffnen {opened_days} Tage bei höchstens {opened_temp} °C.',
    figures: true,
    sections: [
      {
        id: 'formats',
        title: 'Die flüssigen Formate',
        html: `<p>Drei flüssige Gebinde, beschrieben über die Eiweiße, die sie ersetzen, und über die Küche, die sie leer bekommt.</p>
${grid(['Gebinde', 'Eiweiße', 'Wer es leer bekommt'], [
  ['1 L Tetrapak', '{liquid_1l_whites}', 'Eine Konditorei, eine Bar mit Sours auf der Karte, ein einzelner Standort'],
  ['10 L Bag-in-Box', '{bib_10l_whites}', 'Eine Zentralküche, die pro Schicht kiloweise entnimmt'],
  ['1 T IBC', '{ibc_1t_whites}', 'Eine Linie mit kontinuierlicher Dosierung'],
])}
<p>Anders als ein Karton flüssiges Eiweiß wird das Gebinde bis zum Öffnen im Trockenlager aufbewahrt: verschlossen hält es mindestens {unopened_months} Monate bei Raumtemperatur, die Kühlkette beginnt also an dem Tag, an dem Sie es öffnen.</p>`,
      },
      {
        id: 'storage',
        title: 'Vor dem Öffnen, nach dem Öffnen, eingefroren',
        html: `<p>Die Haltbarkeit entscheidet in den meisten Küchen, hier steht sie vollständig.</p>
<ul>
<li>Vor dem Öffnen: mindestens {unopened_months} Monate bei Raumtemperatur, für beide Formate der Gamme.</li>
<li>Nach dem Öffnen: gekühlt bei höchstens {opened_temp} °C, innerhalb von {opened_days} Tagen verbraucht.</li>
<li>Eingefroren: Portionen von {portion} g bei {freeze_temp} °C bis zu {freeze_months} Monate, über Nacht im Kühlschrank aufgetaut und glatt gerührt. Nie erneut einfrieren.</li>
</ul>
<p>Der <a href="{storage_href}">Leitfaden zu Lagerung und Einfrieren</a> beschreibt die Handhabung im Detail. Würde ein geöffnetes Gebinde in Ihrer Küche seine {opened_days} Tage überdauern, beantwortet das <a href="{egg_white_powder_href}">Pulver</a> dasselbe Rezept ohne Datum.</p>`,
      },
      {
        id: 'use',
        title: 'Verwenden, wo flüssiges Eiweiß verwendet wurde',
        html: `<p>Es wird gegossen und gewogen, ohne etwas anzurühren. Aus dem Kühlschrank hat es bereits die Temperatur, die der Schaum will, {meringue_chill} °C, und genau deshalb hält eine Küche, die an den meisten Tagen aufschlägt, die flüssige Ware: sie geht aus der Kühlung in die Schüssel.</p>
<ul>
<li>Schäume: {meringue_dose} g für eine Baiser-Charge von etwa {meringue_yield}, {macarons_dose} g für etwa {macarons_yield} Macaronschalen.</li>
<li>Emulsionen: {mayonnaise_dose} g nehmen {mayonnaise_oil} g Öl auf, bei {mayonnaise_chill} °C gemixt.</li>
<li>Hinter der Bar: {cocktails_dose} g pro Sour, gewogen oder gejiggert statt frei eingegossen.</li>
<li>Auf einer Linie: bei {viscosity} g/ml gehalten, damit der Schaum bei jedem Lauf gleich reagiert.</li>
</ul>
<p>Die <a href="{index_href}">Anwendungsleitfäden</a> tragen die Methode für jeden Fall, mit einem Rechner, der die Charge skaliert.</p>`,
      },
      {
        id: 'who',
        title: 'Welches Format für welche Küche',
        html: `<p>Der 1 L Tetrapak passt zu einem einzelnen Standort, der ein Gebinde öffnet und es innerhalb der Woche leer bekommt: eine Konditorei, eine Bar, eine Feinkosttheke. Die 10 L Bag-in-Box passt zu einer Zentralküche mit kontinuierlicher Entnahme, der 1 T IBC zu einer Produktionslinie, wo die Uhr des geöffneten Gebindes nie zählt, weil das Gebinde weiter umschlägt.</p>
<p>Jeder dieser Fälle hat seine eigene Seite: <a href="{pastry_href}">Konditorei und Bäckerei</a>, <a href="{bars_href}">Bars und Cocktails</a>, <a href="{foodservice_href}">Gemeinschaftsverpflegung und Zentralküchen</a> und <a href="{industry_href}">Lebensmittelindustrie</a>. Für Volumen und das technische Datenblatt nutzen Sie das Anfrageformular auf dieser Seite.</p>`,
      },
    ],
    faq: [
      { q: 'Wie viel flüssige Ware ersetzt ein Eiweiß?', a: '{white_liquid} g, gewogen. Ein 1 L Tetrapak steht damit für {liquid_1l_whites} Eiweiße, eine 10 L Bag-in-Box für {bib_10l_whites} und ein 1 T IBC für {ibc_1t_whites}.' },
      { q: 'Muss es vor dem Öffnen gekühlt werden?', a: 'Nein. Verschlossen hält es mindestens {unopened_months} Monate bei Raumtemperatur. Nach dem Öffnen kommt es auf höchstens {opened_temp} °C und wird innerhalb von {opened_days} Tagen verbraucht.' },
      { q: 'Kann man es einfrieren?', a: 'Ja, in Portionen von {portion} g bei {freeze_temp} °C bis zu {freeze_months} Monate. Über Nacht im Kühlschrank auftauen und vor dem Aufschlagen glatt rühren; erneut eingefroren wird es nie.' },
      { q: 'Wo kann ich flüssiges Aquafaba kaufen?', a: 'Die Formate und die aktuellen Bezugswege stehen auf der [Produktseite]({products_href}). Für professionelle Volumen beschreiben Sie sie über das Anfrageformular, und das technische Datenblatt kommt mit der Antwort zurück.' },
      { q: 'Ist die Konzentration fest?', a: 'Ja, {viscosity} g/ml. Es ist gefiltert, aufbereitet und standardisiert, und genau das hält einen Schaum oder eine Emulsion von Lauf zu Lauf gleich.' },
    ],
    links: [
      { href: '{egg_white_href}', label: 'Pflanzliche Alternative zu Eiweiß' },
      { href: '{egg_white_powder_href}', label: 'Pflanzliche Alternative zu Eiklarpulver' },
      { href: '{storage_href}', label: 'Aquafaba lagern und einfrieren' },
      { href: '{pastry_href}', label: 'Konditorei und Bäckerei' },
      { href: '{bars_href}', label: 'Bars und Cocktails' },
    ],
  },

  'egg-white-powder': {
    title: 'Pflanzliche Alternative zu Eiklarpulver, für die Küche - VERY AQUAFABA',
    h1: 'Eine pflanzliche Alternative zu Eiklarpulver, mit Wasser angerührt',
    crumb: 'Eiklarpulver',
    enquiryLabel: 'Alternative zu Eiklarpulver',
    description: 'VERY AQUAFABA Pulver ersetzt Eiklarpulver in der Küche: {white_powder} g plus {white_water} ml Wasser pro Eiweiß, Beutel zu 30 g, 200 g und 3 kg, und kein Datum, sobald der Beutel geöffnet ist.',
    lead: 'Eiklarpulver hält man wegen einer Eigenschaft im Lager: es wartet. VERY AQUAFABA Pulver leistet dasselbe aus Kichererbsen, für Küche und Backstube und nicht als Proteinpräparat: {white_powder} g, angerührt mit {white_water} ml Wasser, ersetzen ein Eiweiß, ein 200 g Beutel steht für {powder_200g_whites}, und ein geöffneter Beutel verdirbt nicht, solange er trocken und verschlossen bleibt.',
    figures: true,
    sections: [
      {
        id: 'packs',
        title: 'Die Beutel und wofür sie stehen',
        html: `<p>Drei Beutel, beschrieben über die Eiweiße, für die sie einstehen.</p>
${grid(['Beutel', 'Eiweiße', 'Angerührt heißt das'], [
  ['30 g', '{powder_30g_whites}', 'Eine Testcharge oder eine Bar, die einen Sour ausprobiert'],
  ['200 g', '{powder_200g_whites}', '{meringue_batches_200g} Chargen Baiser oder {cocktails_batches_200g} Sours'],
  ['3 kg', '{powder_3kg_whites}', 'Eine Profiküche oder eine Trockenmischung auf einer Linie'],
])}
<p>Verschlossen hält ein Beutel mindestens {unopened_months} Monate bei Raumtemperatur. Geöffnet verdirbt er nicht: er bleibt trocken und verschlossen im Regal und wartet auf die nächste Charge, und deshalb halten Küchen und Bars mit ungleicher Rotation ihn statt eines flüssigen Gebindes mit {opened_days} Tagen.</p>`,
      },
      {
        id: 'makeup',
        title: 'Anrühren: die Regel pro Eiweiß',
        html: `<p>Das Verhältnis wird pro Eiweiß gezählt, nicht pro Beutel: {white_powder} g Pulver und {white_water} ml Wasser ergeben {white_total} g Aquafaba, die genau so verwendet werden wie dieselbe Masse flüssige Ware.</p>
<ul>
<li>Eine Baiser-Charge, {meringue_eggs} Eiweiße: {meringue_powder} g Pulver und {meringue_water} ml Wasser.</li>
<li>Eine Charge Mayonnaise: {mayonnaise_powder} g und {mayonnaise_water} ml.</li>
<li>Ein Sour: {cocktails_powder} g und {cocktails_water} ml.</li>
</ul>
<p>Die <a href="{reconstitution_href}">Seite zum Anrühren</a> trägt die Tabelle von 1 bis 20 Eiweißen. Angerührt wird es auf die Temperatur gekühlt, die das Rezept verlangt, {meringue_chill} °C für ein Baiser, denn warmes Aquafaba steigt langsamer und gibt einen schwächeren Schaum.</p>`,
      },
      {
        id: 'when',
        title: 'Wann das Pulver die richtige Wahl ist',
        html: `<p>Es ist dasselbe Produkt wie die flüssige Ware, die Gründe dafür betreffen also Gebinde und Raum, nicht das Rezept.</p>
<ul>
<li>Ungleiche Rotation: der geöffnete Beutel wartet ohne Datum, ein geöffnetes flüssiges Gebinde hat {opened_days} Tage.</li>
<li>Kein Kühlplatz: der Beutel steht im Trockenlager, und die Kühlregale bleiben frei für das, was Sie gerade gemacht haben.</li>
<li>Unterwegs: Events und Außer-Haus-Catering nehmen es trocken mit, ohne Kühlkette.</li>
<li>Trockenmischungen: ein Hersteller, der eine trockene Saucen- oder Backbasis mischt, gibt das Pulver so hinein, wie es ist.</li>
</ul>
<p>Für aufgeschlagene Rezepte ist es keine Abkürzung für Trockenmischungen: das Aquafaba wird zuerst für sich aufgeschlagen, es wird also mit Wasser angerührt, bevor es auf Mandelmehl oder Zucker trifft.</p>`,
      },
      {
        id: 'kitchen',
        title: 'Ein Lebensmittel für die Küche, kein Proteinpräparat',
        html: `<p>Dieses Pulver ist für Schäume, Emulsionen und Gebäck gemacht: das Baiser, das seinen Zucker hält, die Mayonnaise, die ihr Öl aufnimmt, den Biskuit, der bindet. Es ist getrocknetes Kichererbsen-Aquafaba und wird nach dem Eiweiß dosiert, das das Rezept ersetzt, nicht nach einem Messlöffel.</p>
<p>Die <a href="{products_href}">Produktseite</a> listet die Beutel und was die Packung angibt; die <a href="{index_href}">Anwendungsleitfäden</a> geben die Dosis pro Rezept in beiden Formaten, und der <a href="{professional_href}">Profi-Bereich</a> ordnet die Formate nach Tätigkeit für Küche, Bar oder Linie.</p>`,
      },
    ],
    faq: [
      { q: 'Was ist Aquafaba-Pulver?', a: 'VERY AQUAFABA in getrockneter Form. {white_powder} g Pulver plus {white_water} ml Wasser ergeben {white_total} g Aquafaba, entspricht derselben Masse an flüssiger Ware, und ersetzen ein Eiweiß.' },
      { q: 'Wie viele Eiweiße stecken in einem 200 g Beutel?', a: '{powder_200g_whites}. Der 30 g Beutel steht für {powder_30g_whites} und der 3 kg Sack für {powder_3kg_whites}.' },
      { q: 'Wie lange hält ein geöffneter Beutel?', a: 'Er verdirbt nicht, solange er trocken und verschlossen bleibt, und passt deshalb zu einer Küche oder Bar mit ungleicher Rotation. Verschlossen hält er mindestens {unopened_months} Monate bei Raumtemperatur.' },
      { q: 'Kann das Pulver direkt in eine Trockenmischung?', a: 'In eine Trockenmischung ja. In ein aufgeschlagenes Rezept nein: das Aquafaba wird zuerst für sich aufgeschlagen, rühren Sie es also mit Wasser an und kühlen Sie es, bevor es auf die anderen trockenen Zutaten trifft.' },
      { q: 'Ist es ein Proteinpräparat?', a: 'Nein. Es ist ein Lebensmittel für Schäume, Emulsionen und Gebäck, dosiert nach dem Eiweiß, das das Rezept ersetzt, wie die [Anwendungsleitfäden]({index_href}) zeigen.' },
    ],
    links: [
      { href: '{reconstitution_href}', label: 'Pulver anrühren: die Regel pro Eiweiß' },
      { href: '{egg_white_href}', label: 'Pflanzliche Alternative zu Eiweiß' },
      { href: '{liquid_egg_white_href}', label: 'Pflanzliche Alternative zu flüssigem Eiweiß' },
      { href: '{meringue_href}', label: 'Baiser: flüssig oder Pulver?' },
      { href: '{bars_href}', label: 'Bars und Cocktails' },
    ],
  },
};
