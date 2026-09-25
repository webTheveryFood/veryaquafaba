// Pflanzlicher Ei-Ersatz, Deutsch (Set-2 A1 bis A4). 'index' ist die Pillar-Seite, die
// anderen Schlüssel die Themenseiten (routes.js TOPIC_SLUGS['egg-substitutes']). Jede Zahl
// ist ein {token} aus facts.json über data/resources/topics.js; kein Gedankenstrich. Die
// Äquivalenztabelle der Website wird verlinkt, nie wiederholt: diese Seiten ordnen die Wahl.
const grid = (heads, rows, cls = '') => `<table class="va-guide-grid${cls ? ` ${cls}` : ''}">
<thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
<tbody>
${rows.map((r) => `<tr>${r.map((c, i) => `<td data-label="${heads[i]}">${c}</td>`).join('')}</tr>`).join('\n')}
</tbody>
</table>`;

export default {
  index: {
    title: 'Aquafaba, der pflanzliche Ei-Ersatz - VERY AQUAFABA',
    h1: 'Pflanzlicher Ei-Ersatz: So ersetzen Sie Eier in Ihren Rezepten durch Aquafaba',
    crumb: 'Ei-Ersatz',
    enquiryLabel: 'Ei-Ersatz',
    description: 'Ein pflanzlicher Ei-Ersatz, der schäumt, emulgiert und bindet: {egg_liquid} g VERY AQUAFABA ersetzen ein ganzes Ei, {white_liquid} g ein Eiweiß. Wann sich eifrei lohnt.',
    lead: 'Eine pflanzliche Zutat kann ganze Eier, Eiweiße und sogar Eigelbe ersetzen. VERY AQUAFABA ist Kichererbsen-Aquafaba: {egg_liquid} g ersetzen ein ganzes Ei und {white_liquid} g ein Eiweiß. Unten finden Sie, wann ein eifreies Rezept sinnvoll ist, was das Ei in Ihrem Rezept tut, wie viel Aquafaba an seine Stelle tritt und welche eine Anpassung nötig ist.',
    // Fragenseite: zuerst die Antwort, keine Referenztabellen danach.
    figures: false,
    sections: [
      {
        id: 'when',
        title: 'Wann ist ein eifreies Rezept sinnvoll?',
        html: `<p>Eine vegane Karte ist der naheliegende Grund, aber bei weitem nicht der einzige. Küchen gehen aus fünf Gründen auf eifrei:</p>
<ul>
<li><strong>Vegane und pflanzliche Karten.</strong> Das Gericht muss per Definition eifrei sein.</li>
<li><strong>Allergenmanagement.</strong> VERY AQUAFABA enthält keine Eier, Milch, Gluten oder Soja, das Rezept verliert also eines der Hauptallergene.</li>
<li><strong>Zubereitungen, die nie erhitzt werden.</strong> Cocktailschäume, Mousse und Mayonnaise werden roh serviert. Aquafaba ersetzt rohes Eiweiß ohne das Lebensmittelsicherheitsrisiko, das damit einhergeht.</li>
<li><strong>Vorrat und Haltbarkeit.</strong> Eier brauchen den Kühlschrank und haben ein kurzes Datum. Verschlossenes Aquafaba hält mindestens {unopened_months} Monate bei Raumtemperatur, und das Pulver verdirbt nach dem Öffnen nicht.</li>
<li><strong>Preisstabilität.</strong> Eierpreise bewegen sich mit Saison und Markt. Aquafaba nicht.</li>
</ul>`,
      },
      {
        id: 'function',
        title: 'Was tut das Ei in Ihrem Rezept?',
        html: `<p>Bevor Sie etwas tauschen, hilft es zu wissen, was das Ei getan hat. In den meisten Rezepten übernimmt es eine von drei Aufgaben: Es trägt einen Schaum, es hält eine Emulsion zusammen, oder es bindet einen Teig und bringt Feuchtigkeit. Finden Sie Ihr Rezept in der Tabelle unten, und Sie haben Ihre Dosis.</p>
${grid(['Was Sie herstellen', 'Was das Ei tut', 'Stattdessen', 'Worauf Sie achten', 'Ganzer Leitfaden'], [
  ['Baisers, Macarons, Mousse, Cocktailschäume', 'Schäumen: aufgeschlagenes Eiweiß, das Luft und Zucker hält', '{white_liquid} g pro Eiweiß, kalt und für sich aufgeschlagen', 'Fett in der Schüssel und warmes Aquafaba halten den Schaum beide klein', '<a href="{meringue_href}">Baiser</a>, <a href="{macarons_href}">Macarons</a>, <a href="{chocolate_mousse_href}">Schokoladenmousse</a>, <a href="{cocktails_href}">Cocktails</a>'],
  ['Mayonnaise, Saucen, Dressings', 'Emulgieren: Öl und Wasser zusammenhalten', '{mayonnaise_dose} g auf {mayonnaise_oil} g Öl', 'Öl zu schnell eingegossen oder zu wenig Scherkraft, und die Emulsion beginnt nie', '<a href="{mayonnaise_href}">Mayonnaise</a>'],
  ['Kuchen, Cookies, Muffins, Brioche', 'Binden und Feuchtigkeit: den Teig zusammenhalten', '{egg_liquid} g pro ganzem Ei', 'Aquafaba bringt mehr Wasser mit als Ei: die anderen Flüssigkeiten reduzieren und durchbacken', '<a href="{baking_href}">Backen</a>'],
  ['Alles, was den Gehalt eines Eigelbs braucht', 'Fett und Farbe', '{yolk_liquid} g plus {yolk_oil} g Öl', 'Aquafaba bringt kein Fett mit, das Öl ist also nicht optional', '<a href="{ratio_href}">Ei-Verhältnis</a>'],
], 'va-guide-grid--wrap')}
<p>Eine Zutat deckt alle vier Aufgaben ab. Was sich von einem Rezept zum nächsten ändert, sind die Dosis und die Handhabung.</p>`,
      },
      {
        id: 'convert',
        title: 'Wie viel Aquafaba ersetzt ein Ei',
        html: `<p>Aquafaba wird immer gewogen, und drei Zahlen decken jedes Rezept ab:</p>
<ul>
<li>{egg_liquid} g Aquafaba ersetzen ein ganzes Ei.</li>
<li>{white_liquid} g ersetzen ein Eiweiß. In Pulver sind das {white_powder} g, angerührt mit {white_water} ml Wasser.</li>
<li>{yolk_liquid} g plus {yolk_oil} g Öl stehen für ein Eigelb, denn Aquafaba bringt kein Fett mit.</li>
</ul>
<p>Ganze Eier ersetzen? Aquafaba bringt mehr Wasser mit als ein Ei, etwa {water_aquafaba_pct} Prozent gegenüber {water_egg_pct} Prozent. Nehmen Sie die anderen Flüssigkeiten um {reduce_liquids} Prozent zurück und backen Sie dichte Kuchen durch. Nur die Eiweiße zu ersetzen, wie bei Baisers oder Macarons, braucht keine Anpassung.</p>
<p>Der <a href="{baking_calc_href}">Ersatzrechner</a> rechnet Eier, Eiweiße und Eigelbe Ihres eigenen Rezepts in einem Zug um.</p>`,
      },
      {
        id: 'formats',
        title: 'Flüssig oder Pulver?',
        html: `<p>Flüssig und Pulver sind dasselbe Aquafaba, die Dosen oben gelten also für beide. Die Wahl hängt davon ab, wie schnell Sie ein geöffnetes Gebinde verbrauchen und wo Sie es lagern können.</p>
${grid(['Format', 'Pro Eiweiß', 'Nach dem Öffnen', 'Weiterlesen'], [
  ['Flüssig, gießfertig', '{white_liquid} g, direkt aus dem Gebinde gewogen', 'Im Kühlschrank bei höchstens {opened_temp} °C, innerhalb von {opened_days} Tagen verbraucht', '<a href="{liquid_egg_white_href}">Alternative zu flüssigem Eiweiß</a>'],
  ['Pulver, mit Wasser angerührt', '{white_powder} g plus {white_water} ml Wasser', 'Verdirbt nicht. Trocken und verschlossen lagern', '<a href="{egg_white_powder_href}">Alternative zu Eiklarpulver</a>'],
])}
<p>Wenn Sie jeden Tag eifrei kochen, ist flüssig die einfache Wahl. Wenn Sie es nur ab und zu tun oder wenig Platz im Kühlschrank haben, wartet Pulver so lange, wie Sie brauchen. Und wenn Sie für eine Bäckerei, eine Bar oder eine Produktionslinie einkaufen, ordnet der <a href="{professional_href}">Profi-Bereich</a> die Formate nach Tätigkeit.</p>`,
      },
      {
        id: 'vary',
        title: 'Warum fallen die Ergebnisse von Rezept zu Rezept unterschiedlich aus?',
        html: `<p>Meistens, weil das Ei in jedem Rezept eine andere Aufgabe hatte. Fünf Dinge erklären die meisten Überraschungen:</p>
<ul>
<li><strong>Die Aufgabe.</strong> Ein Schaum, ein Bindemittel und eine Emulsion sind drei verschiedene Ergebnisse. Die Dosis, die ein Baiser aufschlägt, ist nicht die Dosis, die einen Kuchen bindet.</li>
<li><strong>Welcher Teil des Eis.</strong> Ein Eiweiß zu ersetzen ist ein direkter Tausch. Ein ganzes Ei zu ersetzen bringt zusätzliches Wasser. Ein Eigelb zu ersetzen braucht das Öl.</li>
<li><strong>Die Technik.</strong> Aufschlagen bringt die Luft hinein, Unterheben hält sie, ein dünner Ölstrahl baut die Emulsion auf. Die Fehlertabelle jedes Leitfadens deckt die Fehler seines eigenen Rezepts ab.</li>
<li><strong>Der Rest des Rezepts.</strong> Zuckertiming, Schokoladentemperatur, Luftfeuchtigkeit im Raum und Ofenhitze verändern das Ergebnis, genau wie bei Eiern.</li>
<li><strong>Das Format, nur bei der Vorbereitung.</strong> Flüssig wird gewogen, wie es kommt. Pulver wird zuerst mit Wasser angerührt. Angerührt ist es dasselbe Aquafaba, in derselben Dosis.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'Ist Aquafaba vegan?', a: 'Ja. VERY AQUAFABA wird aus Kichererbsen und Wasser hergestellt, ohne Eier, Milch, Gluten oder Soja, und passt damit zu veganen und allergenfreien Rezepten.' },
      { q: 'Kann ich ein Eiweiß durch Aquafaba ersetzen?', a: 'Ja. {white_liquid} g flüssiges Aquafaba ersetzen ein Eiweiß, oder {white_powder} g Pulver, angerührt mit {white_water} ml Wasser. Wiegen Sie es ab, statt es in Löffeln zu messen.' },
      { q: 'Kann ich Aquafaba statt eines ganzen Eis verwenden?', a: 'Ja. {egg_liquid} g ersetzen ein ganzes Ei. So zugegeben, wie es ist, bringt es die Bindung und Feuchtigkeit des Eis in Kuchen, Cookies und Teige. Für den Gehalt eines Eigelbs geben Sie {yolk_liquid} g Aquafaba plus {yolk_oil} g Öl dazu.' },
      { q: 'Muss ich sonst etwas am Rezept ändern?', a: 'Nur, wenn Sie ganze Eier ersetzen: Nehmen Sie die anderen Flüssigkeiten um {reduce_liquids} Prozent zurück, denn Aquafaba besteht zu etwa {water_aquafaba_pct} Prozent aus Wasser gegenüber {water_egg_pct} Prozent bei einem Ei. Nur Eiweiße zu ersetzen braucht keine Änderung.' },
      { q: 'Ist das Pulver dasselbe wie die flüssige Ware?', a: 'Ja, getrocknet. {white_powder} g Pulver plus {white_water} ml Wasser ergeben {white_total} g Aquafaba, dasselbe wie flüssig, und ersetzen ein Eiweiß.' },
      { q: 'Woraus besteht VERY AQUAFABA?', a: 'Aus dem Kochwasser von Kichererbsen, gefiltert, aufbereitet und standardisiert, damit sich jede Charge gleich verhält. Es ist geschmacksneutral und clean label, wie die [Produktseite]({products_href}) beschreibt.' },
    ],
    links: [
      { href: '{egg_white_href}', label: 'So ersetzen Sie Eiweiß durch Aquafaba' },
      { href: '{liquid_egg_white_href}', label: 'Von flüssigem Eiweiß zu Aquafaba wechseln' },
      { href: '{egg_white_powder_href}', label: 'Aquafaba-Pulver: die Alternative zu Eiklarpulver' },
      { href: '{ratio_href}', label: 'Wie viel Aquafaba entspricht einem Ei' },
      { href: '{professional_href}', label: 'Aquafaba für Profis' },
    ],
  },

  'egg-white': {
    title: 'Eiweiß durch Aquafaba ersetzen - VERY AQUAFABA',
    h1: 'So ersetzen Sie Eiweiß durch Aquafaba',
    crumb: 'Eiweiß',
    enquiryLabel: 'Eiweiß-Alternative',
    description: 'Eiweiß durch Aquafaba ersetzen: {white_liquid} g flüssig oder {white_powder} g Pulver pro Eiweiß. Die Umrechnung von einem Eiweiß bis zum ganzen Rezept, und was der Besen braucht.',
    lead: 'Ein Eiweiß sind {white_liquid} g VERY AQUAFABA flüssig oder {white_powder} g Pulver, angerührt mit {white_water} ml Wasser. Das ist die ganze Umrechnung, und sie gilt vom einzelnen Eiweiß bis zum vollständigen Rezept: Ein 1 L Tetrapak steht für {liquid_1l_whites} Eiweiße, ein 200 g Beutel für {powder_200g_whites}. Unten finden Sie die Umrechnung in den Mengen, die Rezepte tatsächlich verwenden, was der Besen von Ihnen braucht und die Rezepte auf dieser Website, die damit arbeiten.',
    figures: true,
    sections: [
      {
        id: 'convert',
        title: 'Von einem Eiweiß zum ganzen Rezept',
        html: `<p>Rezepte zählen Eiweiße, hier steht also die Umrechnung für die Zahlen, denen Sie am häufigsten begegnen. Flüssig wird gewogen, wie es kommt; Pulver wird gewogen und dann mit Wasser angerührt.</p>
${grid(['Eiweiße', 'Flüssig', 'Pulver', 'Wasser für das Pulver'], [
  ['1', '{white_liquid} g', '{white_powder} g', '{white_water} ml'],
  ['2', '{whites_2_liquid} g', '{whites_2_powder} g', '{whites_2_water} ml'],
  ['4', '{whites_4_liquid} g', '{whites_4_powder} g', '{whites_4_water} ml'],
  ['5', '{whites_5_liquid} g', '{whites_5_powder} g', '{whites_5_water} ml'],
  ['10', '{whites_10_liquid} g', '{whites_10_powder} g', '{whites_10_water} ml'],
])}
<p>Zwei Eiweiße sind ein kleiner Ansatz Mousse für zwei; vier sind der Ansatz Macarons und Mousse auf dieser Website; fünf der Ansatz Baiser. Die <a href="{reconstitution_href}">Seite zum Anrühren</a> führt die Tabelle bis 20 Eiweiße fort, und jeder Anwendungsleitfaden hat einen Rechner, der das ganze Rezept skaliert.</p>`,
      },
      {
        id: 'whisk',
        title: 'Was der Besen von Ihnen braucht',
        html: `<p>Aquafabaschaum ist ein reiner Proteinschaum ohne Fett im Rezept, und er verlangt dieselbe Sorgfalt wie Eiweiß, plus etwas mehr Geduld mit der Kälte. Drei Dinge decken fast jeden Fehler ab:</p>
<ul>
<li><strong>Kalt.</strong> Das Aquafaba kommt mit {meringue_chill} °C in die Schüssel, und angerührtes Pulver wird auf dieselbe Temperatur gekühlt. Warmes Aquafaba steigt langsam und gibt einen schwächeren Schaum.</li>
<li><strong>Sauber.</strong> Ein Fettfilm auf Schüssel oder Besen hält das Volumen klein. Wischen Sie beides aus, bevor das Aquafaba hineinkommt.</li>
<li><strong>Zucker zuletzt.</strong> Er kommt hinein, sobald der Schaum weiche Spitzen hält, löffelweise. Schneller zugegeben, als er sich lösen kann, näßt er bei der Lagerung.</li>
</ul>
<p>Zählen Sie das Aufschlagen in Minuten, nicht in Sekunden: etwa {meringue_whip} Minuten auf hoher Stufe für einen Ansatz Baiser. Ein Stabilisator ist optional. Wo ein Rezept einen vorsieht, kommt Weinstein oder Zitronensäure bei weichen Spitzen dazu, nicht am Anfang.</p>`,
      },
      {
        id: 'where',
        title: 'Wo es auf dieser Website aufgeschlagen wird',
        html: `<p>Vier Rezepte auf dieser Website bauen auf dem Aquafabaschaum auf, bei vier verschiedenen Belastungen:</p>
<ul>
<li><a href="{meringue_href}">Baiser</a>: {meringue_dose} g, also {meringue_eggs} Eiweiße, mit {meringue_sugar} g Zucker aufgeschlagen und bei {meringue_bake} °C getrocknet, für etwa {meringue_yield} Baisers.</li>
<li><a href="{macarons_href}">Macarons</a>: {macarons_dose} g, also {macarons_eggs} Eiweiße, für etwa {macarons_yield} Schalen.</li>
<li><a href="{chocolate_mousse_href}">Schokoladenmousse</a>: {chocolate_mousse_dose} g, also {chocolate_mousse_eggs} Eiweiße, bei {chocolate_mousse_fold_temp} °C unter die Schokolade gehoben.</li>
<li><a href="{cocktails_href}">Sours hinter der Bar</a>: {cocktails_dose} g pro Drink, {cocktails_dry_shake} Sekunden Dry Shake.</li>
</ul>
<p>Wenn Ihr Rezept ganze Eier statt Eiweiße ersetzt, lautet die Zahl {egg_liquid} g pro Ei, und die <a href="{ratio_href}">Seite zum Ei-Verhältnis</a> übernimmt von dort.</p>`,
      },
      {
        id: 'choose',
        title: 'Flüssig oder Pulver für dasselbe Eiweiß?',
        html: `<p>Die Umrechnung ist bei beiden identisch, die Wahl betrifft also das Gebinde, nicht das Rezept. Eine Küche, die an den meisten Tagen aufschlägt, nimmt die <a href="{liquid_egg_white_href}">flüssige Ware</a>: Sie kommt schon kalt aus dem Kühlschrank, und ein geöffnetes Gebinde wird innerhalb von {opened_days} Tagen verbraucht. Eine, die ab und zu aufschlägt oder keinen Kühlplatz frei hat, nimmt das <a href="{egg_white_powder_href}">Pulver</a>: Ein geöffneter Beutel verdirbt nicht, und Sie rühren an, was der Ansatz braucht.</p>`,
      },
    ],
    faq: [
      { q: 'Wie viel Gramm Aquafaba ersetzen ein Eiweiß?', a: '{white_liquid} g flüssig oder {white_powder} g Pulver, angerührt mit {white_water} ml Wasser, was {white_total} g Aquafaba ergibt.' },
      { q: 'Schlägt es auf wie Eiweiß?', a: 'Es schlägt zu einem Schaum auf, der Zucker und Luft trägt, und darauf bauen die Rezepte für Baiser, Macarons, Mousse und Sour auf dieser Website auf. Es verlangt dieselbe kalte Schüssel und denselben fettfreien Besen.' },
      { q: 'Wie viele Eiweiße stecken in einem 1 L Gebinde?', a: '{liquid_1l_whites}. Eine 10 L Bag-in-Box steht für {bib_10l_whites} und ein 1 T IBC für {ibc_1t_whites}. Als Pulver steht ein 200 g Beutel für {powder_200g_whites}.' },
      { q: 'Brauche ich Weinstein oder Zitronensäure?', a: 'Das ist optional. Wo ein Rezept einen Stabilisator vorsieht, kommt er bei laufender Maschine dazu, sobald der Schaum weiche Spitzen hält, und stützt den Schaum durch den Zucker und das Unterheben.' },
      { q: 'Kann ich es in einem Rezept mit ganzen Eiern verwenden?', a: 'Ja, mit der Zahl für ganze Eier: {egg_liquid} g pro Ei, dazu eine Flüssigkeitsreduktion von {reduce_liquids} Prozent, weil Aquafaba mehr Wasser mitbringt. Der [Back-Leitfaden]({baking_href}) erklärt es.' },
    ],
    links: [
      { href: '{meringue_href}', label: 'Baiser: flüssig oder Pulver?' },
      { href: '{macarons_href}', label: 'Macarons: flüssig oder Pulver?' },
      { href: '{reconstitution_href}', label: 'Pulver anrühren: die Regel pro Eiweiß' },
      { href: '{liquid_egg_white_href}', label: 'Von flüssigem Eiweiß zu Aquafaba wechseln' },
      { href: '{egg_white_powder_href}', label: 'Aquafaba-Pulver: die Alternative zu Eiklarpulver' },
    ],
  },

  'liquid-egg-white': {
    title: 'Von flüssigem Eiweiß zu Aquafaba wechseln - VERY AQUAFABA',
    h1: 'Von flüssigem Eiweiß zu Aquafaba wechseln',
    crumb: 'Flüssiges Eiweiß',
    enquiryLabel: 'Alternative zu flüssigem Eiweiß',
    description: 'Von flüssigem Eiweiß zu VERY AQUAFABA: dieselbe Dosis nach Gewicht, {white_liquid} g pro Eiweiß. Was sich ändert, welches Gebinde Ihren Karton ersetzt, was geöffnet gilt.',
    lead: 'Wer flüssiges Eiweiß im Karton kauft, kauft es, um das Aufschlagen der Eier zu sparen und nach Gewicht zu dosieren. VERY AQUAFABA flüssig leistet dasselbe aus Kichererbsen: {white_liquid} g ersetzen ein Eiweiß, es kommt mit einer festen Konzentration von {viscosity} g/ml an und wird direkt auf die Waage gegossen. Hier steht, was sich beim Wechsel ändert, was nicht, welches Gebinde Ihren Karton ersetzt und was mit dem Rest in einem geöffneten Gebinde geschieht.',
    figures: true,
    sections: [
      {
        id: 'changes',
        title: 'Was sich ändert, und was nicht',
        html: `<p>Zuerst die gute Nachricht: Ihre Arbeitsweise bleibt dieselbe.</p>
<ul>
<li>Sie dosieren weiterhin nach Gewicht, {white_liquid} g pro Eiweiß, direkt aus dem Gebinde auf die Waage.</li>
<li>Sie gießen weiterhin, ohne etwas anzurühren.</li>
<li>Sie schlagen es weiterhin kalt auf, aus einer sauberen Schüssel, bei {meringue_chill} °C für ein Baiser.</li>
</ul>
<p>Was sich ändert, ist alles rund um das Gebinde:</p>
<ul>
<li><strong>Keine Kühlkette, bis Sie es öffnen.</strong> Verschlossen hält das Gebinde mindestens {unopened_months} Monate bei Raumtemperatur, im Trockenlager. Ein Karton flüssiges Eiweiß steht vom Tag der Lieferung an im Kühlschrank.</li>
<li><strong>{opened_days} Tage nach dem Öffnen,</strong> bei höchstens {opened_temp} °C, zwischen den Verwendungen verschlossen.</li>
<li><strong>Kein rohes Ei in der Küche.</strong> Schaum und Emulsion sind dieselben; die Sicherheitsbedenken bei rohem Eiweiß sind weg, und das Gericht ist für den Gast eifrei.</li>
<li><strong>Eine Konzentration, jedes Mal.</strong> Die flüssige Ware ist gefiltert, aufbereitet und auf {viscosity} g/ml standardisiert, ein Schaum verhält sich also von einem Gebinde zum nächsten gleich.</li>
</ul>`,
      },
      {
        id: 'packs',
        title: 'Welches Gebinde Ihren Karton ersetzt',
        html: `<p>Drei flüssige Gebinde, beschrieben über die Eiweiße, die sie ersetzen, und über die Küche, die sie leert.</p>
${grid(['Gebinde', 'Eiweiße', 'Wer es leert'], [
  ['1 L Tetrapak', '{liquid_1l_whites}', 'Eine Konditorei, eine Bar mit Sours auf der Karte, ein einzelner Standort'],
  ['10 L Bag-in-Box', '{bib_10l_whites}', 'Eine Zentralküche, die pro Schicht kiloweise entnimmt'],
  ['1 T IBC', '{ibc_1t_whites}', 'Eine Linie mit kontinuierlicher Dosierung'],
], 'va-guide-grid--wrap')}
<p>In der Praxis: {meringue_dose} g für einen Ansatz Baiser von etwa {meringue_yield}, {macarons_dose} g für etwa {macarons_yield} Macaronschalen, {mayonnaise_dose} g auf {mayonnaise_oil} g Öl in einer Mayonnaise, {cocktails_dose} g pro Sour. Die <a href="{index_href}">Anwendungsleitfäden</a> tragen die Methode für jeden Fall. Jede Tätigkeit wird auf ihrer eigenen Seite durchgearbeitet: <a href="{pastry_href}">Konditorei und Bäckerei</a>, <a href="{bars_href}">Bars und Cocktails</a>, <a href="{foodservice_href}">Gemeinschaftsverpflegung</a> und <a href="{industry_href}">Lebensmittelindustrie</a>.</p>`,
      },
      {
        id: 'opened',
        title: 'Was mit dem Rest in einem geöffneten Gebinde geschieht',
        html: `<p>Ein geöffnetes Gebinde hat {opened_days} Tage im Kühlschrank. Schafft Ihr Rhythmus das rechtzeitig, verschließen Sie es zwischen den Verwendungen, und das ist alles. Wenn nicht, haben Sie zwei Möglichkeiten:</p>
<ul>
<li><strong>Einfrieren.</strong> Portionieren Sie zu {portion} g, frieren Sie bei {freeze_temp} °C bis zu {freeze_months} Monate ein, tauen Sie über Nacht im Kühlschrank auf und rühren Sie vor dem Aufschlagen glatt. Es wird nie erneut eingefroren. Der <a href="{storage_href}">Leitfaden zu Lagerung und Einfrieren</a> beschreibt die Handhabung im Detail.</li>
<li><strong>Oder dieses Rezept auf Pulver umstellen.</strong> Ein geöffneter Beutel verdirbt nicht, und er beantwortet dasselbe Rezept in derselben Dosis. Die <a href="{egg_white_powder_href}">Pulverseite</a> erklärt, wann der Beutel der bessere Kauf ist.</li>
</ul>
<p>Egal, was das Datum sagt: Geöffnete flüssige Ware, die unangenehm riecht, Bläschen zeigt oder sich abgesetzt hat, wird entsorgt.</p>`,
      },
    ],
    faq: [
      { q: 'Wird Aquafaba wie flüssiges Eiweiß gelagert?', a: 'Nicht vor dem Öffnen. Verschlossen hält es mindestens {unopened_months} Monate bei Raumtemperatur, es wartet also im Trockenlager. Einmal geöffnet wird es wie Ihr Karton gelagert: bei höchstens {opened_temp} °C, innerhalb von {opened_days} Tagen verbraucht.' },
      { q: 'Wie viel flüssige Ware ersetzt ein Eiweiß?', a: '{white_liquid} g, gewogen. Ein 1 L Tetrapak steht damit für {liquid_1l_whites} Eiweiße, eine 10 L Bag-in-Box für {bib_10l_whites} und ein 1 T IBC für {ibc_1t_whites}.' },
      { q: 'Kann man es einfrieren?', a: 'Ja, in Portionen von {portion} g bei {freeze_temp} °C bis zu {freeze_months} Monate. Über Nacht im Kühlschrank auftauen und vor dem Aufschlagen glatt rühren; erneut eingefroren wird es nie.' },
      { q: 'Ist die Konzentration fest?', a: 'Ja, {viscosity} g/ml. Es ist gefiltert, aufbereitet und standardisiert, und genau das hält einen Schaum oder eine Emulsion von Durchgang zu Durchgang gleich.' },
      { q: 'Wo kann ich flüssiges Aquafaba kaufen?', a: 'Die Formate und die aktuellen Bezugswege stehen auf der [Produktseite]({products_href}). Für professionelle Volumen beschreiben Sie diese über das Anfrageformular, und das technische Datenblatt kommt mit der Antwort zurück.' },
    ],
    links: [
      { href: '{egg_white_href}', label: 'So ersetzen Sie Eiweiß durch Aquafaba' },
      { href: '{egg_white_powder_href}', label: 'Aquafaba-Pulver: die Alternative zu Eiklarpulver' },
      { href: '{storage_href}', label: 'Aquafaba lagern und einfrieren' },
      { href: '{pastry_href}', label: 'Konditorei und Bäckerei' },
      { href: '{bars_href}', label: 'Bars und Cocktails' },
    ],
  },

  'egg-white-powder': {
    title: 'Aquafaba-Pulver statt Eiklarpulver - VERY AQUAFABA',
    h1: 'Aquafaba-Pulver: die Alternative zu Eiklarpulver, die wartet',
    crumb: 'Eiklarpulver',
    enquiryLabel: 'Alternative zu Eiklarpulver',
    description: 'VERY AQUAFABA Pulver ersetzt Eiklarpulver: {white_powder} g plus {white_water} ml Wasser pro Eiweiß, ein 200 g Beutel für {powder_200g_whites} Eiweiße, und kein Datum nach dem Öffnen.',
    lead: 'Eiklarpulver verdient seinen Platz im Vorratsschrank, weil es wartet. VERY AQUAFABA Pulver leistet dasselbe aus Kichererbsen, zum Kochen und Backen: {white_powder} g, angerührt mit {white_water} ml Wasser, ersetzen ein Eiweiß, ein 200 g Beutel steht für {powder_200g_whites}, und ein geöffneter Beutel verdirbt nicht, solange er trocken und verschlossen bleibt. Hier steht, wie Sie es anrühren, wann der Beutel den Karton schlägt und das eine, was es nicht tut.',
    figures: true,
    sections: [
      {
        id: 'makeup',
        title: 'Anrühren',
        html: `<p>Die Regel wird pro Eiweiß gezählt, nicht pro Beutel: {white_powder} g Pulver und {white_water} ml Wasser ergeben {white_total} g Aquafaba, die genau so verwendet werden wie dasselbe Gewicht flüssige Ware. Für die Ansätze auf dieser Website:</p>
${grid(['Ansatz', 'Pulver', 'Wasser'], [
  ['Baiser, {meringue_eggs} Eiweiße', '{meringue_powder} g', '{meringue_water} ml'],
  ['Mayonnaise, ein Ansatz', '{mayonnaise_powder} g', '{mayonnaise_water} ml'],
  ['Ein Sour', '{cocktails_powder} g', '{cocktails_water} ml'],
])}
<p>Rühren Sie es an, bevor Sie es brauchen, und kühlen Sie es, auf {meringue_chill} °C für ein Baiser, denn warmes Aquafaba steigt langsamer und gibt einen schwächeren Schaum. Die <a href="{reconstitution_href}">Seite zum Anrühren</a> trägt die Tabelle von 1 bis 20 Eiweißen.</p>`,
      },
      {
        id: 'when',
        title: 'Wann der Beutel den Karton schlägt',
        html: `<p>Es ist dieselbe Zutat wie die flüssige Ware, die Gründe, es vorzuziehen, betreffen also Gebinde und Raum, nicht das Rezept:</p>
<ul>
<li><strong>Ungleiche Rotation.</strong> Der geöffnete Beutel wartet ohne Datum, während ein geöffnetes Flüssiggebinde {opened_days} Tage im Kühlschrank hat.</li>
<li><strong>Kein Kühlplatz.</strong> Der Beutel steht im Trockenlager, und die Kühlregale bleiben frei für das, was Sie gerade hergestellt haben.</li>
<li><strong>Unterwegs.</strong> Events und Außer-Haus-Catering nehmen es trocken mit, ohne Kühlkette.</li>
<li><strong>Trockenmischungen.</strong> Ein Hersteller, der eine trockene Saucen- oder Backbasis mischt, gibt das Pulver so in die Vormischung, wie es ist.</li>
</ul>
<p>Verschlossen hält ein Beutel mindestens {unopened_months} Monate bei Raumtemperatur, wie die flüssige Ware. Der Unterschied beginnt an dem Tag, an dem Sie ihn öffnen.</p>`,
      },
      {
        id: 'not',
        title: 'Das eine, was das Pulver nicht tut',
        html: `<p>Es ist keine Abkürzung für Trockenmischungen bei aufgeschlagenen Rezepten. Das Aquafaba wird zuerst für sich aufgeschlagen, das Pulver wird also mit Wasser angerührt und gekühlt, bevor es in die Nähe von Mandelmehl, Puderzucker oder feinem Zucker kommt. Nur in einer Trockenmischung kommt es so hinein, wie es ist.</p>
<p>Und es ist eine Zutat für die Küche, kein Proteinpräparat: gemacht für das Baiser, das seinen Zucker hält, die Mayonnaise, die ihr Öl aufnimmt, und den Biskuit, der bindet, und dosiert nach dem Eiweiß, das das Rezept ersetzt, nicht nach einem Messlöffel.</p>`,
      },
      {
        id: 'packs',
        title: 'Welcher Beutel',
        html: `${grid(['Beutel', 'Eiweiße', 'Angerührt heißt das'], [
  ['30 g', '{powder_30g_whites}', 'Ein Versuchsansatz, oder eine Bar, die einen Sour testet'],
  ['200 g', '{powder_200g_whites}', '{meringue_batches_200g} Ansätze Baiser oder {cocktails_batches_200g} Sours'],
  ['3 kg', '{powder_3kg_whites}', 'Eine Profiküche, oder eine Trockenmischung auf einer Linie'],
])}
<p>Die <a href="{products_href}">Produktseite</a> listet die Beutel und was die Packung angibt. Die <a href="{index_href}">Anwendungsleitfäden</a> geben die Dosis pro Rezept in beiden Formaten, und der <a href="{professional_href}">Profi-Bereich</a> ordnet die Formate nach Tätigkeit.</p>`,
      },
    ],
    faq: [
      { q: 'Was ist Aquafaba-Pulver?', a: 'VERY AQUAFABA in getrockneter Form. {white_powder} g Pulver plus {white_water} ml Wasser ergeben {white_total} g Aquafaba, entspricht demselben Gewicht der flüssigen Ware, und ersetzen ein Eiweiß.' },
      { q: 'Wie lange hält ein geöffneter Beutel?', a: 'Er verdirbt nicht, solange er trocken und verschlossen bleibt, und passt deshalb zu einer Küche oder Bar mit ungleicher Rotation. Verschlossen hält er mindestens {unopened_months} Monate bei Raumtemperatur.' },
      { q: 'Kann das Pulver direkt in eine Trockenmischung?', a: 'In eine Trockenmischung ja. In ein aufgeschlagenes Rezept nein: Das Aquafaba wird zuerst für sich aufgeschlagen, rühren Sie es also mit Wasser an und kühlen Sie es, bevor es auf die anderen trockenen Zutaten trifft.' },
      { q: 'Wie viele Eiweiße stecken in einem 200 g Beutel?', a: '{powder_200g_whites}. Der 30 g Beutel steht für {powder_30g_whites} und der 3 kg Sack für {powder_3kg_whites}.' },
      { q: 'Ist es ein Proteinpräparat?', a: 'Nein. Es ist eine Zutat für Schäume, Emulsionen und Gebäck, dosiert nach dem Eiweiß, das das Rezept ersetzt, wie die [Anwendungsleitfäden]({index_href}) zeigen.' },
    ],
    links: [
      { href: '{reconstitution_href}', label: 'Pulver anrühren: die Regel pro Eiweiß' },
      { href: '{egg_white_href}', label: 'So ersetzen Sie Eiweiß durch Aquafaba' },
      { href: '{liquid_egg_white_href}', label: 'Von flüssigem Eiweiß zu Aquafaba wechseln' },
      { href: '{meringue_href}', label: 'Baiser: flüssig oder Pulver?' },
      { href: '{bars_href}', label: 'Bars und Cocktails' },
    ],
  },
};
