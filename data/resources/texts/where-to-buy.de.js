// Wo kaufen, Deutsch (Set-2 E0 und die deutschsprachigen Länder). 'index' ist das
// Verzeichnis; jeder andere Schlüssel ist ein Land, dessen Bezugswege in
// data/resources/stockists.js stehen. Keine Preise, kein Bestand: das gehört dem Händler.
const grid = (heads, rows) => `<table class="va-guide-grid">
<thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
<tbody>
${rows.map((r) => `<tr>${r.map((c, i) => `<td data-label="${heads[i]}">${c}</td>`).join('')}</tr>`).join('\n')}
</tbody>
</table>`;

const range = `<p>Das Sortiment ist in jedem Land dasselbe. Jedes Gebinde wird über die Eiweiße beschrieben, die es ersetzt, bei {white_liquid} g flüssig oder {white_powder} g Pulver pro Eiweiß.</p>
<ul>
<li>Flüssig: 1 L Tetrapak = {liquid_1l_whites} Eiweiße, 10 L Bag-in-Box = {bib_10l_whites}, 1 T IBC = {ibc_1t_whites}.</li>
<li>Pulver: 30 g = {powder_30g_whites} Eiweiße, 200 g = {powder_200g_whites}, 3 kg = {powder_3kg_whites}.</li>
</ul>
<p>Verschlossen halten beide mindestens {unopened_months} Monate bei Raumtemperatur. Geöffnete flüssige Ware wird bei höchstens {opened_temp} °C gekühlt und innerhalb von {opened_days} Tagen verbraucht; geöffnetes Pulver verdirbt nicht, solange es trocken und verschlossen bleibt. Die <a href="{products_href}">Produktseite</a> zeigt das ganze Sortiment.</p>`;

export default {
  index: {
    title: 'Wo Sie VERY AQUAFABA kaufen: die Bezugswege nach Land - VERY AQUAFABA',
    h1: 'Wo Sie VERY AQUAFABA kaufen, Land für Land',
    crumb: 'Wo kaufen',
    enquiryLabel: 'Wo kaufen',
    description: 'Die Länder mit einem VERY AQUAFABA Bezugsweg und wie Sie dort kaufen: Onlineshops, Großhändler und Gastronomiehändler, dazu das Anfrageformular für ein Land, das noch nicht dabei ist.',
    lead: 'VERY AQUAFABA wird über eigene Händler verkauft, und der Bezugsweg hängt vom Land ab: hier ein Onlineshop, dort ein Gastronomiegroßhändler, anderswo eine Marktplatzplattform für den Handel. Diese Seite listet die Länder, für die ein Bezugsweg erfasst ist, in der Sprache dieses Landes, und sagt, was zu tun ist, wenn Ihres nicht dabei ist.',
    figures: true,
    sections: [
      {
        id: 'countries',
        title: 'Länder mit einem Bezugsweg',
        html: `<p>Jede Seite trägt die Bezugswege dieses Landes mit ihren Links, das, was dort gelistet ist, und das Anfrageformular für professionelle Volumen.</p>
${grid(['Land', 'Sprache der Seite', 'Bezugswege'], [
  ['<a href="{germany_href}">Deutschland</a>', 'Deutsch', 'Amazon, Baba Gourmet'],
  ['<a href="{switzerland_href}">Schweiz</a>', 'Deutsch und Französisch', 'Siradis'],
  ['Frankreich, Belgien, Luxemburg', 'Französisch', 'Instantchef, Maison Medelys, Ankorstore, The Cocktailist, JMillet, Vitodistribution, Botanica, Horeca Totaal, Provencale'],
  ['Belgien', 'Niederländisch', 'Botanica, Horeca Totaal'],
  ['USA, Kanada, Australien, Schweden', 'Englisch', 'Amazon, Qualifirst, Apromo Trading, Chokladhuset'],
])}
<p>Ein Land erscheint hier, sobald ein Bezugsweg dafür erfasst ist. Wo es keinen gibt, ist das Anfrageformular am Ende dieser Seite der Weg hinein: es fragt nach Land, Anwendung und geschätztem Monatsvolumen.</p>`,
      },
      { id: 'range', title: 'Was Sie bestellen', html: range },
      {
        id: 'professional',
        title: 'Professionelle Volumen und technisches Datenblatt',
        html: `<p>Die 10 L Bag-in-Box und der 1 T IBC werden nicht über einen Shop verkauft: sie werden pro Projekt kalkuliert, mit dem technischen Datenblatt, sobald Anwendung und Monatsvolumen feststehen. Dafür ist das Anfrageformular am Ende dieser Seite da, und die Antwort trägt die Spezifikationen Ihres Formats.</p>
<p>Wenn Sie noch zwischen flüssig und Pulver schwanken, ordnet der <a href="{professional_href}">Profi-Bereich</a> die Frage nach Tätigkeit: <a href="{pastry_href}">Konditorei und Bäckerei</a>, <a href="{bars_href}">Bars und Cocktails</a>, <a href="{foodservice_href}">Gemeinschaftsverpflegung</a> und <a href="{industry_href}">Lebensmittelindustrie</a>.</p>`,
      },
    ],
    faq: [
      { q: 'Welche Länder haben heute einen Bezugsweg?', a: 'Deutschland, die Schweiz, Frankreich, Belgien, Luxemburg, die USA, Kanada, Australien und Schweden, jedes auf seiner eigenen Seite in der Sprache dieses Landes.' },
      { q: 'Mein Land fehlt, was nun?', a: 'Nutzen Sie das Anfrageformular am Ende dieser Seite: Land, Anwendung und geschätztes Monatsvolumen. Neue Märkte entstehen aus diesen Anfragen.' },
      { q: 'Stehen auf diesen Seiten Preise?', a: 'Nein. Preise und Bestand gehören dem Händler, deshalb verlinkt jede Seite den Bezugsweg und überlässt ihm das.' },
      { q: 'Kann man Bag-in-Box oder IBC online bestellen?', a: 'Nein. Die 10 L Bag-in-Box und der 1 T IBC werden pro Projekt mit dem technischen Datenblatt kalkuliert, über das Anfrageformular.' },
    ],
    links: [
      { href: '{germany_href}', label: 'Wo Sie in Deutschland kaufen' },
      { href: '{switzerland_href}', label: 'Wo Sie in der Schweiz kaufen' },
      { href: '{professional_href}', label: 'Aquafaba für Profis' },
      { href: '{egg_substitutes_href}', label: 'Pflanzlicher Ei-Ersatz' },
    ],
  },

  germany: {
    country: 'Deutschland',
    title: 'Wo Sie Aquafaba in Deutschland kaufen - VERY AQUAFABA',
    h1: 'Wo Sie VERY AQUAFABA in Deutschland kaufen',
    crumb: 'Deutschland',
    description: 'VERY AQUAFABA in Deutschland: Amazon und Baba Gourmet, was ein 1 L Tetrapak ersetzt, wie er nach dem Öffnen gelagert wird, und das Formular für professionelle Volumen.',
    lead: 'In Deutschland führt der Weg über Amazon und über Baba Gourmet. Ein 1 L Tetrapak ersetzt {liquid_1l_whites} Eiweiße, das sind {meringue_batches_1l} Chargen Baiser, {chocolate_mousse_batches_1l} Chargen Mousse oder {cocktails_batches_1l} Sours. Größere Formate und das Pulver laufen über das Anfrageformular am Ende dieser Seite.',
    sections: [
      {
        id: 'order',
        title: 'Zwei Bezugswege',
        html: `<p>Amazon führt die flüssige Ware im 1 L Tetrapak, das Format eines einzelnen Betriebs. Baba Gourmet ist ein Fachhändler: fragen Sie dort nach dem aktuellen Sortiment, flüssig wie Pulver.</p>
<p>Was ein Tetrapak abdeckt: {meringue_batches_1l} Chargen Baiser zu {meringue_dose} g, {macarons_batches_1l} Chargen Macaronschalen, {mayonnaise_batches_1l} Chargen Mayonnaise oder {eggs_1l} ganze Eier beim Backen. Verschlossen wartet er mindestens {unopened_months} Monate im Trockenlager; geöffnet {opened_days} Tage bei höchstens {opened_temp} °C.</p>`,
      },
      { id: 'range', title: 'Das Sortiment hinter dem Listing', html: range },
      {
        id: 'professional',
        title: 'Gastronomie, Bäckerei und Volumen',
        html: `<p>Für einen Betrieb, der mehr als ein Gebinde pro Woche verbraucht, oder für eine Linie werden die Formate pro Projekt kalkuliert: die 10 L Bag-in-Box mit {bib_10l_whites} Eiweißen und der 1 T IBC mit {ibc_1t_whites}. Für unregelmäßige Rotation steht das Pulver bereit: ein 200 g Beutel ersetzt {powder_200g_whites} Eiweiße und wartet geöffnet ohne Datum.</p>
<p>Das Formular unten fragt nach Unternehmen, Land, Anwendung und geschätztem Monatsvolumen; das technische Datenblatt kommt mit der Antwort. Die <a href="{pastry_href}">Seite Konditorei und Bäckerei</a> und die <a href="{bars_href}">Seite Bars und Cocktails</a> zeigen, welches Format welcher Betrieb am Ende nimmt.</p>`,
      },
    ],
    faq: [
      { q: 'Wo kann ich Aquafaba in Deutschland kaufen?', a: 'Bei Amazon und bei Baba Gourmet. Die Links stehen in der Tabelle unten.' },
      { q: 'Wie viele Eiweiße ersetzt ein 1 L Tetrapak?', a: '{liquid_1l_whites}, bei {white_liquid} g pro Eiweiß. In der Küche sind das {meringue_batches_1l} Chargen Baiser oder {mayonnaise_batches_1l} Chargen Mayonnaise.' },
      { q: 'Gibt es das Pulver dort?', a: 'Fragen Sie beim Fachhändler nach dem aktuellen Sortiment. Ein 200 g Beutel ersetzt {powder_200g_whites} Eiweiße; über das Anfrageformular bekommen Sie die professionellen Formate.' },
      { q: 'Wie lange hält ein geöffnetes Gebinde?', a: '{opened_days} Tage bei höchstens {opened_temp} °C. Verschlossen hält es mindestens {unopened_months} Monate bei Raumtemperatur.' },
    ],
    links: [
      { href: '{pastry_href}', label: 'Konditorei und Bäckerei' },
      { href: '{bars_href}', label: 'Bars und Cocktails' },
      { href: '{index_href}', label: 'Alle Anwendungsleitfäden' },
      { href: '{products_href}', label: 'Produkte und Formate' },
    ],
  },

  switzerland: {
    country: 'Schweiz',
    title: 'Wo Sie Aquafaba in der Schweiz kaufen - VERY AQUAFABA',
    h1: 'Wo Sie VERY AQUAFABA in der Schweiz kaufen',
    crumb: 'Schweiz',
    description: 'VERY AQUAFABA in der Schweiz über Siradis: das Sortiment beim Händler erfragen, die Entsprechungen je Gebinde und das Formular für professionelle Volumen.',
    lead: 'In der Schweiz ist Siradis der erfasste Bezugsweg; der Händler führt VERY AQUAFABA in seinem Katalog. Fragen Sie dort nach dem aktuellen Sortiment: ein 1 L Tetrapak ersetzt {liquid_1l_whites} Eiweiße, ein 200 g Beutel Pulver {powder_200g_whites}. Diese Seite gibt es auch auf Französisch.',
    sections: [
      {
        id: 'order',
        title: 'Über den Händler bestellen',
        html: `<p>Siradis listet das Produkt im eigenen Katalog. Wie bei jedem Händler gehören ihm Sortiment und Bestand: fragen Sie, was er führt, flüssig und als Pulver, und rechnen Sie Ihren Bedarf mit den Entsprechungen unten in Gebinde um.</p>
<p>Ein 1 L Tetrapak sind {meringue_batches_1l} Chargen Baiser zu {meringue_dose} g, {macarons_batches_1l} Chargen Macaronschalen oder {cocktails_batches_1l} Sours. Ein 200 g Beutel Pulver sind {meringue_batches_200g} Chargen Baiser, angerührt mit {white_powder} g Pulver und {white_water} ml Wasser pro Eiweiß.</p>`,
      },
      { id: 'range', title: 'Das Sortiment, nach dem Sie fragen', html: range },
      {
        id: 'professional',
        title: 'Hotellerie, Konditorei und Volumen',
        html: `<p>Für ein Hotel, eine Konditorei oder eine Zentralküche werden die großen Formate pro Projekt kalkuliert: 10 L Bag-in-Box mit {bib_10l_whites} Eiweißen und 1 T IBC mit {ibc_1t_whites}. Das Formular unten fragt nach Anwendung und geschätztem Monatsvolumen, und das technische Datenblatt kommt mit der Antwort.</p>
<p>Die <a href="{pastry_href}">Seite Konditorei und Bäckerei</a> stellt das Format dem Ofenrhythmus gegenüber, die <a href="{bars_href}">Seite Bars und Cocktails</a> der Zahl der Sours, und die <a href="{reconstitution_href}">Seite zum Anrühren</a> trägt die Tabelle von 1 bis 20 Eiweißen für das Pulver.</p>`,
      },
    ],
    faq: [
      { q: 'Wo kann ich Aquafaba in der Schweiz kaufen?', a: 'Bei Siradis, das VERY AQUAFABA im Katalog führt. Der Link steht in der Tabelle unten.' },
      { q: 'Welche Formate sind verfügbar?', a: 'Das gelistete Sortiment gehört dem Händler: fragen Sie dort. Es gibt die flüssige Ware in 1 L, 10 L und 1 T und das Pulver in 30 g, 200 g und 3 kg.' },
      { q: 'Gibt es diese Seite auf Französisch?', a: 'Ja, dieselbe Seite existiert auf Französisch für die Schweiz, mit demselben Bezugsweg.' },
      { q: 'Wie bestellen wir für mehrere Betriebe?', a: 'Über das Anfrageformular am Ende dieser Seite: die großen Formate werden pro Projekt mit dem technischen Datenblatt kalkuliert.' },
    ],
    links: [
      { href: '{pastry_href}', label: 'Konditorei und Bäckerei' },
      { href: '{bars_href}', label: 'Bars und Cocktails' },
      { href: '{reconstitution_href}', label: 'Pulver anrühren: die Regel pro Eiweiß' },
      { href: '{products_href}', label: 'Produkte und Formate' },
    ],
  },
};
