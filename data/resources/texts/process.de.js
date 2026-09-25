// Prozessblatt, Deutsch. Gleiche Struktur, gleiche {tokens} und gleiche HTML-Tags wie
// process.en.js (geprüft von scripts/applications/check-guides.mjs). Kein Gedankenstrich.
// Schritte, Ursachen und Lösungen sind die der Leitfäden dieser Website.
export default {
  meringue: {
    title: 'Aquafaba-Baiser Schritt für Schritt - VERY AQUAFABA',
    h1: 'Aquafaba-Baiser Schritt für Schritt: das Prozessblatt',
    description: 'Druckbares Prozessblatt für das VERY AQUAFABA Baiserrezept: jeder Schritt mit Zielwert, Spalte für Ihren Ansatz und die Kontrollen, wenn ein Blech misslingt.',
    lead: 'Baiser ist ein Rezept, bei dem ein paar Grad und ein paar Minuten über ein gutes und ein klebriges Blech entscheiden. Mit diesem Blatt behalten Sie beides im Griff: das VERY AQUAFABA Baiserrezept als Checkliste, die Sie ausdrucken, beim Arbeiten ausfüllen und aufbewahren.',
    powderNote: 'Pulver: Rühren Sie {powder_dose} g VERY AQUAFABA Pulver vor Schritt 1 mit {water_dose} ml Wasser an und kühlen Sie es auf {chill} °C.',
    steps: [
      { step: 'Das Aquafaba kühlen', reference: '{chill} °C' },
      { step: 'Schüssel und Schneebesen entfetten', reference: 'Kein Fett, keine Rückstände' },
      { step: 'Auf hoher Stufe zu weichen Spitzen aufschlagen', reference: '{dose} g, {whip} min' },
      { step: 'Den optionalen Stabilisator beim Aufschlagen zugeben', reference: '2 g Weinstein oder 1 g Zitronensäure' },
      { step: 'Den Zucker auf mittlerer Stufe zugeben, esslöffelweise', reference: '{sugar} g feiner Zucker' },
      { step: 'Wieder auf hoher Stufe, bis glänzend und fest', reference: 'Feste Spitzen' },
      { step: 'Sofort aufspritzen', reference: '3 bis 4 cm' },
      { step: 'Ohne Umluft trocknen', reference: '{bake} °C, {bake_time} h' },
      { step: 'Auf dem Blech auskühlen lassen, dann luftdicht lagern', reference: 'Raumtemperatur, Trockenmittelbeutel' },
    ],
    checks: [
      { see: 'Der Schaum erreicht nie das volle Volumen', check: 'Fett an Schüssel oder Schneebesen', fix: 'Vor dem Start alles entfetten' },
      { see: 'Der Schaum baut sich langsam auf und bleibt schwach', check: 'Aquafaba zu warm', fix: 'Zuerst auf {chill} °C kühlen' },
      { see: 'Sirupperlen auf den Baisers bei der Lagerung', check: 'Der Zucker kam schneller hinein, als er sich lösen konnte', fix: 'Esslöffelweise, auf mittlerer Stufe' },
      { see: 'Volumen geht vor dem Aufspritzen verloren', check: 'Die Schüssel stand und wartete', fix: 'Direkt nach den festen Spitzen aufspritzen und trocknen' },
      { see: 'Die Baisers werden weich und klebrig', check: 'Baiser zieht Feuchtigkeit aus der Luft', fix: 'Luftdicht und trocken lagern, mit Trockenmittelbeutel' },
    ],
    sections: [
      {
        id: 'use',
        title: 'So arbeiten Sie mit diesem Blatt',
        html: `<p>Drucken Sie eines pro Ansatz und legen Sie es neben die Maschine, mit dem <a href="{recipe_href}">vollständigen Baiserrezept</a> griffbereit, falls Sie die Methode im Detail brauchen. Tragen Sie beim Arbeiten in die letzte Spalte ein, was Sie tatsächlich getan haben: mit welcher Temperatur das Aquafaba hineinkam, wie lange es bis zu den weichen Spitzen dauerte, wie lange das Blech im Ofen blieb. Meistens stimmt es mit dem Referenzwert überein. Wenn nicht, haben Sie den Grund auf dem Papier, bevor jemand ein Baiser probiert.</p>
<p>Bewahren Sie die ausgefüllten Blätter auf. Ein misslungener Ansatz ist so viel wert wie ein gelungener, denn der nächste Konditor beginnt mit dem, was Sie gelernt haben, statt es noch einmal herauszufinden. Und wenn ein Ansatz misslingt und Sie nicht sehen, warum, schicken Sie uns das Blatt: Es ist für uns der schnellste Weg zu helfen.</p>`,
      },
      {
        id: 'before',
        title: 'Bevor Sie Aquafaba für Baiser aufschlagen',
        html: `<p>Drei Dinge entscheiden die meisten Baiseransätze, bevor die Maschine läuft:</p>
<ul>
<li>Das Aquafaba ist kalt, mit {chill} °C direkt aus dem Kühlschrank. Angerührtes Pulver wird auf denselben Punkt gekühlt.</li>
<li>Schüssel und Schneebesen sind sauber ausgewischt. Aquafabaschaum hat kein eigenes Fett, und ein Fettfilm hält das Volumen klein.</li>
<li>Die {sugar} g feiner Zucker sind abgewogen und in Reichweite, denn sie kommen löffelweise hinein, und Sie wollen nicht zum Wiegen anhalten.</li>
</ul>`,
      },
      {
        id: 'look',
        title: 'Woran Sie erkennen, dass jeder Schritt gelingt',
        html: `<p>Das Blatt nennt den Zielwert. So erkennen Sie, dass Sie ihn getroffen haben, Schritt für Schritt:</p>
<ul>
<li><strong>Schritt 3, weiche Spitzen.</strong> Heben Sie den Schneebesen an: Der Schaum hält eine Form, aber die Spitze legt sich um. Beim Referenzansatz ist das nach etwa {whip} Minuten auf hoher Stufe so weit. Eine vollere Schüssel braucht länger, vertrauen Sie also der Spitze, nicht der Uhr.</li>
<li><strong>Schritt 5, der Zucker.</strong> Jeder Löffel verschwindet im Schaum, bevor der nächste hineinkommt. Wenn Sie Körner an der Schüsselwand spüren, warten Sie. Ungelöster Zucker ist das, was später bei der Lagerung aus dem fertigen Baiser näßt.</li>
<li><strong>Schritt 6, feste Spitzen.</strong> Die Spitze steht gerade, wenn Sie den Schneebesen anheben, und der Schaum glänzt. Sie stellt sich mit dem letzten Zucker ein. Das ist Ihr Signal zum Aufspritzen, nicht dazu, die Schüssel eine Minute stehen zu lassen.</li>
<li><strong>Schritt 7, Aufspritzen.</strong> Kreise von 3 bis 4 cm auf Backpapier, gleichmäßig verteilt. Aquafabaschaum hält weniger gut als Eiweißschaum, die Schüssel, die wartet, während eine andere aufschlägt, verliert also Volumen.</li>
<li><strong>Schritt 8, Trocknen.</strong> Bei {bake} °C ohne Umluft backen die Baisers nicht, sie trocknen. Sie sind fertig, wenn sie durchgetrocknet sind, bei dieser Größe nach etwa {bake_time} Stunden; größere Formen brauchen länger. Eine klebrige Mitte heißt, sie kamen zu früh heraus.</li>
<li><strong>Schritt 9, Auskühlen.</strong> Auf dem Blech vollständig auskühlen lassen, bevor sie bewegt werden, dann in einen luftdichten Behälter mit Trockenmittelbeutel, falls Sie einen haben. Baiser zieht Feuchtigkeit aus der Luft, der Behälter zählt also genauso wie der Ofen.</li>
</ul>
<p>Bei Industrieansätzen halten Sie die Aquafabakonzentration bei {concentration} g/ml, damit sich der Schaum bei jedem Durchgang gleich verhält.</p>`,
      },
    ],
    faq: [
      { q: 'Woran erkenne ich, dass der Schaum feste Spitzen hat?', a: 'Heben Sie den Schneebesen an: Die Spitze steht gerade, ohne sich umzulegen, und der Schaum glänzt. Der Referenzansatz erreicht weiche Spitzen in {whip} Minuten; der Zucker kommt danach hinein, und die feste Spitze stellt sich mit dem letzten Zucker ein.' },
      { q: 'Kann ich den aufgeschlagenen Schaum warten lassen, während der Ofen belegt ist?', a: 'Nein. Spritzen und trocknen Sie direkt nach den festen Spitzen. Ist der Ofen voll, schlagen Sie die nächste Schüssel später auf, statt eine fertige Schüssel stehen zu lassen.' },
      { q: 'Die Baisers sind innen klebrig. Was prüfe ich?', a: 'Den Trocknungsschritt: {bake} °C ohne Umluft für die vollen {bake_time} Stunden, bis durchgetrocknet, danach vollständiges Auskühlen auf dem Blech. Formen, die größer als 3 bis 4 cm sind, brauchen länger als die Referenzzeit.' },
      { q: 'Gilt das Blatt auch für das Pulver?', a: 'Ja. Rühren Sie {powder_dose} g Pulver mit {water_dose} ml Wasser an, kühlen Sie es auf {chill} °C und beginnen Sie bei Schritt 1. Die Regel pro Eiweiß: {white_powder} g Pulver + {white_water} ml Wasser = {white_total} g Aquafaba, entspricht derselben Masse an flüssigem Aquafaba.' },
      { q: 'Kann ich dieses Blatt mit einer technischen Frage schicken?', a: 'Ja. Füllen Sie die Spalte Ihres Ansatzes aus, notieren Sie, was Sie gesehen haben, und beschreiben Sie es über unser [Kontaktformular]({contact_href}) oder das Anfrageformular für Profis auf dieser Seite. Das ausgefüllte Blatt ist für uns der schnellste Weg zu helfen.' },
    ],
  },

  'chocolate-mousse': {
    title: 'Aquafaba-Schokoladenmousse: Prozessblatt - VERY AQUAFABA',
    h1: 'Aquafaba-Schokoladenmousse Schritt für Schritt: das Prozessblatt',
    description: 'Druckbares Prozessblatt für die VERY AQUAFABA Schokoladenmousse: Temperaturen, Aufschlagen, Unterheben, Kühlen, eine Spalte für Ihren Ansatz und die Kontrollen.',
    lead: 'Schokoladenmousse ist ein Rezept mit zwei Temperaturen, und die Mousse hält nur, wenn die Schokolade bei der richtigen auf den Schaum trifft. Mit diesem Blatt stellen Sie das sicher: das VERY AQUAFABA Mousserezept als Checkliste, die Sie ausdrucken, beim Arbeiten ausfüllen und aufbewahren.',
    powderNote: 'Pulver: Rühren Sie {powder_dose} g VERY AQUAFABA Pulver vorab mit {water_dose} ml Wasser an und kühlen Sie es vor Schritt 3.',
    steps: [
      { step: 'Die dunkle Kuvertüre schmelzen', reference: '{chocolate} g, 45 bis 50 °C' },
      { step: 'Die Schokolade abkühlen lassen', reference: '{fold_temp} °C' },
      { step: 'Schüssel und Schneebesen entfetten, das gekühlte Aquafaba abwiegen', reference: '{dose} g' },
      { step: 'Auf hoher Stufe zu weichen Spitzen aufschlagen', reference: '{whip} min' },
      { step: 'Den optionalen Stabilisator zugeben', reference: '2 g Weinstein oder 1 g Zitronensäure' },
      { step: 'Den Zucker beim Aufschlagen nach und nach zugeben, bis glänzend und fest', reference: '{sugar} g feiner Zucker' },
      { step: 'Die abgekühlte Schokolade von Hand zügig und leicht unterheben', reference: 'Aufhören, sobald verbunden' },
      { step: 'Sofort in Becher spritzen oder füllen', reference: '{yield}' },
      { step: 'Kalt stellen', reference: 'Mindestens {set_time} h; hält {keep} Tage' },
    ],
    checks: [
      { see: 'Die Mousse fällt zusammen, sobald die Schokolade hineinkommt', check: 'Schokolade über {fold_temp} °C hat den Schaum geschmolzen', fix: 'Vor dem Unterheben auf {fold_temp} °C oder weniger abkühlen' },
      { see: 'Dichte, schwere Mousse', check: 'Zu langes Unterheben hat die Luft herausgedrückt', fix: 'Nur unterheben, bis verbunden' },
      { see: 'Der Schaum baut sich nicht auf', check: 'Fett in der Schüssel oder Zucker vor den weichen Spitzen zugegeben', fix: 'Saubere Schüssel, und Zucker erst nach den weichen Spitzen' },
      { see: 'Volumen geht vor dem Unterheben verloren', check: 'Der Schaum wartete auf die Schokolade', fix: 'Die Schokolade abgekühlt bereithalten, bevor Sie aufschlagen' },
      { see: 'Schwacher, langsamer Schaum', check: 'Aquafaba zu warm', fix: 'Gekühlt aufschlagen' },
      { see: 'Ungleichmäßiger Schaum aus gefrorenem Vorrat', check: 'Nicht vollständig aufgetaut oder nicht umgerührt', fix: 'Vollständig auftauen und glatt rühren. Nie erneut einfrieren' },
    ],
    sections: [
      {
        id: 'use',
        title: 'So arbeiten Sie mit diesem Blatt',
        html: `<p>Drucken Sie eines pro Ansatz und legen Sie es neben die Maschine, mit dem <a href="{recipe_href}">vollständigen Rezept für Schokoladenmousse</a> griffbereit, falls Sie die Methode im Detail brauchen. Tragen Sie beim Arbeiten in die letzte Spalte ein, was Sie tatsächlich getan haben: die Temperatur der Schokolade beim Unterheben, wie lange der Schaum bis zu den festen Spitzen brauchte, wie lange die Becher kalt standen. Wird eine Mousse schwer oder fällt sie zusammen, steht der Grund meist auf diesem Blatt.</p>
<p>Bewahren Sie die ausgefüllten Blätter auf. Wer die Mousse als Nächstes macht, beginnt mit dem, was funktioniert hat, und wenn ein Ansatz misslingt und Sie nicht sehen, warum, schicken Sie uns das Blatt: Es ist für uns der schnellste Weg zu helfen.</p>`,
      },
      {
        id: 'before',
        title: 'Bevor Sie Aquafaba für Mousse aufschlagen',
        html: `<p>Drei Dinge entscheiden die meisten Ansätze, bevor der Besen läuft:</p>
<ul>
<li>Die Schokolade ist geschmolzen und kühlt bereits ab. Sie muss {fold_temp} °C erreichen, bevor sie auf den Schaum trifft, und der Schaum darf nicht auf sie warten.</li>
<li>Das Aquafaba ist kalt, direkt aus dem Kühlschrank. Angerührtes Pulver wird auf denselben Punkt gekühlt.</li>
<li>Schüssel und Schneebesen sind sauber ausgewischt, und die {sugar} g Zucker sind abgewogen und in Reichweite.</li>
</ul>`,
      },
      {
        id: 'look',
        title: 'Woran Sie erkennen, dass jeder Schritt gelingt',
        html: `<p>Das Blatt nennt den Zielwert. So erkennen Sie, dass Sie ihn getroffen haben:</p>
<ul>
<li><strong>Schritt 1, Schmelzen.</strong> Glatt und flüssig bei 45 bis 50 °C, über dem Wasserbad oder in der Temperiermaschine. Keine Körner, kein Anbrennen am Rand.</li>
<li><strong>Schritt 2, Abkühlen.</strong> Das Thermometer zeigt {fold_temp} °C. Wärmer, und die Schokolade schmilzt den Schaum beim Hineinkommen; das ist das Zusammenfallen, das Sie beim ersten Unterheben sehen.</li>
<li><strong>Schritt 4, weiche Spitzen.</strong> Heben Sie den Schneebesen an: Der Schaum hält eine Form und die Spitze legt sich um, beim Referenzansatz nach etwa {whip} Minuten. Eine vollere Schüssel braucht länger.</li>
<li><strong>Schritt 6, feste Spitzen.</strong> Glänzend, dicht, und die Spitze steht gerade. Die Baisermasse sollte sich auf dem Spatel fest anfühlen, bevor Schokolade sie berührt.</li>
<li><strong>Schritt 7, Unterheben.</strong> Von Hand, zügig und leicht, und Sie hören auf, sobald die Farbe gleichmäßig ist. Jeder zusätzliche Zug mit dem Spatel kostet Luft, und eine dichte Mousse ist das Zeichen für zu viele.</li>
<li><strong>Schritt 9, Kühlen.</strong> Sofort gespritzt oder gefüllt, dann mindestens {set_time} Stunden im Kühlschrank. Sie hält ihre Form, wenn der Becher gekippt wird. In verschlossener Verpackung hält sie {keep} Tage.</li>
</ul>
<p>Bei großen Ansätzen emulgieren Sie zuerst einen Teil der Schokolade mit etwas Aquafaba und heben dann den restlichen Schaum unter. So bleiben große Durchgänge homogen.</p>`,
      },
    ],
    faq: [
      { q: 'Wann kommt der Zucker hinein?', a: 'Erst, wenn der Schaum weiche Spitzen hält, nach etwa {whip} Minuten, und dann nach und nach beim Aufschlagen, bis die Spitzen glänzend und fest sind. Zucker vor den weichen Spitzen verhindert, dass sich der Schaum aufbaut.' },
      { q: 'Wie lange braucht die Mousse zum Festwerden, und wie lange hält sie?', a: 'Mindestens {set_time} Stunden im Kühlschrank zum Festwerden, und hygienisch hergestellt hält sie {keep} Tage. Stellen Sie die Becher direkt nach dem Füllen kalt.' },
      { q: 'Gilt das Blatt auch für das Pulver?', a: 'Ja. Rühren Sie {powder_dose} g Pulver vorab mit {water_dose} ml Wasser an, kühlen Sie es und beginnen Sie bei Schritt 3. Die Regel pro Eiweiß: {white_powder} g Pulver + {white_water} ml Wasser = {white_total} g Aquafaba, entspricht derselben Masse an flüssigem Aquafaba.' },
      { q: 'Kann ich dieses Blatt mit einer technischen Frage schicken?', a: 'Ja. Füllen Sie die Spalte Ihres Ansatzes aus, notieren Sie, was Sie gesehen haben, und beschreiben Sie es über unser [Kontaktformular]({contact_href}) oder das Anfrageformular für Profis auf dieser Seite.' },
    ],
  },

  mayonnaise: {
    title: 'Vegane Mayonnaise mit Aquafaba: Prozessblatt - VERY AQUAFABA',
    h1: 'Vegane Mayonnaise mit Aquafaba Schritt für Schritt: das Prozessblatt',
    description: 'Druckbares Prozessblatt für die VERY AQUAFABA Mayonnaise: die kalte Emulsion Schritt für Schritt, Spalte für Ihren Ansatz und Kontrollen, wenn sie misslingt.',
    lead: 'Eine Mayonnaise bindet oder sie bindet nicht, und wenn Sie es sehen, ist das Öl schon drin. Mit diesem Blatt bindet sie jedes Mal: das VERY AQUAFABA Rezept für vegane Mayonnaise als Checkliste, die Sie ausdrucken, beim Arbeiten ausfüllen und aufbewahren.',
    powderNote: 'Pulver: Rühren Sie {powder_dose} g VERY AQUAFABA Pulver vor Schritt 1 auf einer Feinwaage mit {water_dose} ml kaltem Wasser an, oder kühlen Sie es auf {chill} °C.',
    steps: [
      { step: 'Das Aquafaba kühlen', reference: '{chill} °C' },
      { step: 'Aquafaba, Senf, Salz und Zitronensaft oder Essig in einem hohen, schmalen Gefäß vermengen', reference: '{dose} g, {mustard} g, {salt} g, {lemon} g' },
      { step: 'Den Stabmixer auf voller Geschwindigkeit starten', reference: 'Hohe Scherkraft' },
      { step: 'Das Öl als dünnen, gleichmäßigen Strahl einlaufen lassen', reference: '{oil} g, {oil_ratio} zum Aquafaba' },
      { step: 'Sobald es andickt, abschmecken und würzen', reference: 'Angedickt' },
      { step: 'Zu fest? Einige Gramm kaltes Wasser untermixen', reference: 'Wasser, nicht mehr Öl' },
      { step: 'In einen sauberen Behälter umfüllen, sofort kühlen', reference: 'Hält bis zu {keep} Tage' },
    ],
    checks: [
      { see: 'Die Emulsion beginnt nie', check: 'Öl zu schnell zugegeben oder zu wenig Scherkraft', fix: 'Dünner, gleichmäßiger Strahl bei voller Mixergeschwindigkeit' },
      { see: 'Langsame, instabile Emulsion', check: 'Aquafaba zu warm', fix: 'Mit {chill} °C verwenden' },
      { see: 'Zu fest zum Verarbeiten', check: 'Die Emulsion hat sich verfestigt', fix: 'Einige Gramm kaltes Wasser untermixen, nicht mehr Öl' },
      { see: 'Instabil bei großen Ansätzen', check: 'Tröpfchengröße nicht gesteuert', fix: 'Auf einen Hochleistungsmixer wechseln' },
      { see: 'Dünnes Ergebnis aus gefrorenem Vorrat', check: 'Aufgetautes Aquafaba kam dünner zurück', fix: 'Glatt rühren. Wenn weiterhin dünn, bei niedriger Hitze kurz einkochen' },
      { see: 'Haltbarkeit kürzer als {keep} Tage', check: 'Hygiene oder ein langsamer Weg in den Kühlschrank', fix: 'Sauberer Behälter, sofort kühlen' },
    ],
    sections: [
      {
        id: 'use',
        title: 'So arbeiten Sie mit diesem Blatt',
        html: `<p>Drucken Sie eines pro Ansatz und legen Sie es an die Saucenstation, mit dem <a href="{recipe_href}">vollständigen Mayonnaiserezept</a> griffbereit, falls Sie die Methode im Detail brauchen. Tragen Sie beim Arbeiten in die letzte Spalte ein, was Sie tatsächlich getan haben: die Temperatur des Aquafabas, wie schnell das Öl einlief, wann es andickte, wann es in den Kühlschrank kam. Wenn eine Emulsion bricht, liegt der Grund fast immer an einem dieser Punkte.</p>
<p>Bewahren Sie die ausgefüllten Blätter auf. Sie sagen dem nächsten Koch, was mit Ihrem Mixer und Ihrem Öl funktioniert hat, und wenn ein Ansatz misslingt und Sie nicht sehen, warum, schicken Sie uns das Blatt: Es ist für uns der schnellste Weg zu helfen.</p>`,
      },
      {
        id: 'before',
        title: 'Bevor Sie Aquafaba zu Mayonnaise mixen',
        html: `<p>Drei Dinge entscheiden die meisten Ansätze, bevor der Mixer läuft:</p>
<ul>
<li>Das Aquafaba hat {chill} °C. Warmes Aquafaba gibt eine langsame, instabile Emulsion, und angerührtes Pulver wird auf denselben Punkt gekühlt.</li>
<li>Das Gefäß ist hoch und schmal, damit der Kopf des Stabmixers unter der Oberfläche bleibt und die Scherkraft hoch bleibt.</li>
<li>Die {oil} g Öl sind abgemessen und bereit, als dünner, gleichmäßiger Strahl einzulaufen. Mitten im Strahl zum Abmessen anzuhalten ist der Moment, in dem eine Emulsion bricht.</li>
</ul>`,
      },
      {
        id: 'look',
        title: 'Woran Sie erkennen, dass jeder Schritt gelingt',
        html: `<p>Das Blatt nennt den Zielwert. So erkennen Sie, dass Sie ihn getroffen haben:</p>
<ul>
<li><strong>Schritt 2, die Basis.</strong> Aquafaba, Senf, Salz und Säure sind eine glatte Flüssigkeit am Boden des Gefäßes, bevor Öl hineinkommt.</li>
<li><strong>Schritt 4, das Öl.</strong> Ein dünner, gleichmäßiger Strahl bei voller Mixergeschwindigkeit. Schon nach den ersten Löffeln wird die Basis heller und beginnt anzudicken; das ist die Emulsion, die bindet. Bleibt sie dünn und sammelt sich das Öl oben, hören Sie auf zu gießen und mixen Sie, bis sie greift, bevor mehr dazukommt.</li>
<li><strong>Schritt 5, angedickt.</strong> Sie hält eine weiche Spitze auf dem Spatel, und die Oberfläche bleibt, wo Sie sie lassen. Abschmecken, dann würzen.</li>
<li><strong>Schritt 6, zu fest.</strong> Wird sie zu einer Paste, holen einige Gramm kaltes Wasser sie zurück. Mehr Öl macht es schlimmer.</li>
<li><strong>Schritt 7, in den Kühlschrank.</strong> Ein sauberer Behälter, Deckel drauf, sofort gekühlt. Die {keep} Tage beginnen dort, und nur unter hygienischen Bedingungen.</li>
</ul>
<p>Bei großen Ansätzen wechseln Sie auf einen Hochleistungsmixer. Die Tröpfchengröße ist das, was eine große Emulsion stabil hält.</p>`,
      },
    ],
    faq: [
      { q: 'Muss das Aquafaba kalt sein?', a: 'Ja, mit {chill} °C. Warmes Aquafaba gibt eine langsame, instabile Emulsion. Das geöffnete Gebinde steht im Kühlschrank, es kommt also mit der richtigen Temperatur aus der Packung.' },
      { q: 'Wie lange hält die Mayonnaise?', a: 'Bis zu {keep} Tage im Kühlschrank, wenn sie hygienisch hergestellt und sofort in einem sauberen Behälter gekühlt wird.' },
      { q: 'Gilt das Blatt auch für das Pulver?', a: 'Ja. Rühren Sie {powder_dose} g Pulver auf einer Feinwaage mit {water_dose} ml kaltem Wasser an und beginnen Sie bei Schritt 1. Die Regel pro Eiweiß: {white_powder} g Pulver + {white_water} ml Wasser = {white_total} g Aquafaba, entspricht derselben Masse an flüssigem Aquafaba.' },
      { q: 'Kann ich dieses Blatt mit einer technischen Frage schicken?', a: 'Ja. Füllen Sie die Spalte Ihres Ansatzes aus, notieren Sie, was Sie gesehen haben, und beschreiben Sie es über unser [Kontaktformular]({contact_href}) oder das Anfrageformular für Profis auf dieser Seite.' },
    ],
  },

  baking: {
    title: 'Eier beim Backen durch Aquafaba ersetzen - VERY AQUAFABA',
    h1: 'Eier beim Backen durch Aquafaba ersetzen: das Versuchsblatt',
    description: 'Druckbares Blatt für einen Ei-Ersatz-Versuch mit VERY AQUAFABA in Ihrem Rezept: Entsprechungen, Anpassungen und Kontrollen, wenn ein Gebäck misslingt.',
    lead: 'Die Eier in einem Gebäck zu ersetzen ist eine kleine Änderung, die alles darum herum berührt: das Wasser, die Backzeit, die Krume. Mit diesem Blatt behalten Sie im Blick, was Sie geändert haben und was es bewirkt hat: ein Versuch pro Blatt, beim Arbeiten ausgefüllt und für den nächsten aufbewahrt.',
    powderNote: 'Pulver: {white_powder} g + {white_water} ml Wasser pro Eiweiß, {egg_powder} g + {egg_water} ml pro ganzem Ei. Für aufgeschlagene Gebäcke zuerst auf {chill} °C kühlen; in Teige und Massen kommt es so, wie es ist.',
    steps: [
      { step: 'Die Eier Ihrer Rezeptur notieren', reference: 'Ganze Eier, Eiweiße, Eigelbe' },
      { step: 'Das Aquafaba berechnen', reference: '{egg_liquid} g pro ganzem Ei, {white_liquid} g pro Eiweiß, {yolk_liquid} g + {yolk_oil} g Öl pro Eigelb' },
      { step: 'Aufgeschlagen oder nicht aufgeschlagen entscheiden', reference: 'Eiweiße: aufgeschlagen. Ganze Eier: so, wie es ist' },
      { step: 'Das Aquafaba kühlen, wenn es aufgeschlagen wird', reference: '{chill} °C' },
      { step: 'Aufgeschlagen: behutsam und zügig unterheben', reference: 'Biskuit und Genoise' },
      { step: 'Kuchen, Cookies und Muffins: mit dem Zucker mischen, bevor es auf das Fett trifft', reference: 'Eine stabilere Emulsion' },
      { step: 'Ganze Eier getauscht: Milch oder Wasser leicht reduzieren oder die trockenen Zutaten erhöhen', reference: 'Aquafaba bringt mehr Wasser mit als Ei' },
      { step: 'Vollständig durchbacken', reference: 'Das zusätzliche Wasser verlängert das Backen' },
      { step: 'Volumen, Krume und Feuchtigkeit notieren; bei Umformulierung die Haltbarkeit neu prüfen', reference: 'Die Wasseraktivität ändert sich' },
    ],
    checks: [
      { see: 'Flacher Biskuit', check: 'Der Schaum wartete oder wurde zu kräftig untergehoben', fix: 'Zügig und behutsam unterheben' },
      { see: 'Lockerer, nasser Teig', check: 'Ganze Eier eins zu eins getauscht, Wasser nicht reduziert', fix: 'Milch oder Wasser leicht reduzieren oder trockene Zutaten zugeben' },
      { see: 'Nasse Mitte', check: 'Das zusätzliche Wasser verlängert das Backen', fix: 'Vollständig durchbacken, bevor Sie es herausnehmen' },
      { see: 'Schwacher Schaum', check: 'Aquafaba zu warm', fix: 'Bei {chill} °C aufschlagen' },
      { see: 'Schwacher Schaum oder schwache Bindung aus gefrorenem Vorrat', check: 'Aufgetautes Aquafaba kam dünner zurück', fix: 'Bei niedriger Hitze kurz einkochen. Nie erneut einfrieren' },
      { see: 'Die Haltbarkeit des Produkts hat sich verschoben', check: 'Eine andere Feuchtigkeit ändert die Wasseraktivität', fix: 'Haltbarkeit und mikrobielle Stabilität nach der Umformulierung neu prüfen' },
    ],
    sections: [
      {
        id: 'use',
        title: 'So arbeiten Sie mit diesem Blatt',
        html: `<p>Drucken Sie eines pro Versuch, ein Rezept nach dem anderen, mit dem <a href="{recipe_href}">Back-Leitfaden</a> griffbereit für die Methode hinter jedem Schritt. Schreiben Sie die Eier Ihres Rezepts oben hin und füllen Sie dann beim Arbeiten die letzte Spalte aus: wie viel Aquafaba hineinkam und ob es aufgeschlagen war, was Sie bei den Flüssigkeiten weggenommen haben, wie lange das Backen dauerte und wie die Krume nach dem Auskühlen aussah. Diese Spalte ist der Unterschied zwischen einem Versuch, den Sie wiederholen können, und einem, den Sie noch einmal machen müssen.</p>
<p>Bewahren Sie die ausgefüllten Blätter auf, die misslungenen besonders. Und wenn ein Gebäck misslingt und Sie nicht sehen, warum, schicken Sie uns das Blatt: Es ist für uns der schnellste Weg zu helfen.</p>`,
      },
      {
        id: 'before',
        title: 'Bevor Sie die Eier tauschen',
        html: `<p>Drei Dinge entscheiden den Versuch, bevor der Ofen an ist:</p>
<ul>
<li>Welche Eier Sie ersetzen. Nur Eiweiße ist ein direkter Tausch. Ganze Eier bringen zusätzliches Wasser mit. Eigelbe brauchen die {yolk_oil} g Öl.</li>
<li>Aufgeschlagen oder hineingegossen. Aquafaba wird bei {chill} °C aufgeschlagen, wenn es Eiweiße in einem Biskuit oder einer zuckerreichen Masse ersetzt. Es kommt so hinein, wie es ist, wenn es die Bindung und Feuchtigkeit ganzer Eier ersetzt.</li>
<li>Nur das Ei ändert sich. Dasselbe Mehl, dasselbe Mischen, derselbe Ofen, sonst wissen Sie nicht, was das Aquafaba bewirkt hat.</li>
</ul>`,
      },
      {
        id: 'look',
        title: 'Woran Sie erkennen, dass jeder Schritt gelingt',
        html: `<p>Das Blatt nennt den Zielwert. So erkennen Sie, dass Sie ihn getroffen haben:</p>
<ul>
<li><strong>Schritt 2, das Aquafaba.</strong> {egg_liquid} g pro ganzem Ei, {white_liquid} g pro Eiweiß, gewogen. In Pulver {white_powder} g und {white_water} ml Wasser pro Eiweiß.</li>
<li><strong>Schritt 5, aufgeschlagen und untergehoben.</strong> Der Schaum kommt hinein, sobald er fertig ist, behutsam untergehoben, bis die Schlieren verschwunden sind, und nicht länger. Ein Biskuit, der flach herauskommt, stand zu lange oder wurde zu kräftig untergehoben.</li>
<li><strong>Schritt 7, das Wasser.</strong> Ganze Eier getauscht, also gehen Milch oder Wasser leicht zurück oder die trockenen Zutaten hinauf. Der Teig sollte so aussehen wie mit Eiern, nicht lockerer.</li>
<li><strong>Schritt 8, das Backen.</strong> Das zusätzliche Wasser bedeutet eine längere Backzeit. Ein Holzstäbchen kommt sauber heraus; eine nasse Mitte heißt, es kam zu früh aus dem Ofen.</li>
<li><strong>Schritt 9, die Notizen.</strong> Volumen, Krume und Feuchtigkeit, aufgeschrieben, solange das Gebäck vor Ihnen steht. Wenn Sie die Feuchtigkeit geändert haben, kann sich die Haltbarkeit des Produkts mit verschoben haben, prüfen Sie sie also neu.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'Die Mitte ist nass. Was prüfe ich?', a: 'Die Backzeit: Das zusätzliche Wasser, das Aquafaba mitbringt, verlängert das Backen. Backen Sie vollständig durch, bevor Sie es herausnehmen.' },
      { q: 'Muss ich es aufschlagen?', a: 'Nur, wenn es Eiweiße ersetzt. Wenn es die Bindung und Feuchtigkeit ganzer Eier ersetzt, in Cookies, Brownies und Teigen, kommt es nicht aufgeschlagen hinein.' },
      { q: 'Gilt das Blatt auch für das Pulver?', a: 'Ja. {white_powder} g Pulver + {white_water} ml Wasser = {white_total} g Aquafaba, entspricht derselben Masse an flüssigem Aquafaba. Für aufgeschlagene Gebäcke zuerst auf {chill} °C kühlen; in Teige und Massen kommt es so, wie es ist.' },
      { q: 'Kann ich dieses Blatt mit einer technischen Frage schicken?', a: 'Ja. Füllen Sie die Spalte Ihres Ansatzes aus, notieren Sie, was Sie gesehen haben, und beschreiben Sie es über unser [Kontaktformular]({contact_href}) oder das Anfrageformular für Profis auf dieser Seite.' },
    ],
  },

  cocktails: {
    title: 'Aquafaba Sour shaken: Schritt für Schritt - VERY AQUAFABA',
    h1: 'Einen Aquafaba Sour shaken, Schritt für Schritt: das Serviceblatt',
    description: 'Druckbares Serviceblatt für den VERY AQUAFABA Whiskey Sour: Aufbau, Dry Shake und Shaken mit Eis, dazu die Kontrollen, wenn der Schaum zusammenfällt.',
    lead: 'Ein Sour ist ein Drink von dreißig Sekunden, und der Schaum entscheidet sich in den ersten fünfzehn. Mit diesem Blatt shaked das ganze Team ihn gleich: der VERY AQUAFABA Whiskey Sour als Checkliste für die Station, ausgefüllt an den Abenden, an denen die Krone nicht so ist, wie sie sein sollte.',
    powderNote: 'Pulver: Für einen Drink {powder_dose} g VERY AQUAFABA Pulver + {water_dose} ml Wasser. Vor dem Service anrühren und kühlen; kaltes Aquafaba schäumt schneller und hält länger.',
    steps: [
      { step: 'Ohne Eis aufbauen', reference: '{whiskey} ml Whiskey, {lemon_juice} ml Zitronensaft, {syrup} ml Zuckersirup, {dose} g gekühltes Aquafaba' },
      { step: 'Kräftiger Dry Shake', reference: '{dry_shake} s' },
      { step: 'Eis zugeben und erneut shaken', reference: '{wet_shake} s' },
      { step: 'Fein in eine gekühlte Coupe abseihen', reference: 'Sofort servieren' },
      { step: 'Garnieren', reference: 'Einige Tropfen Bitters auf die Krone' },
    ],
    checks: [
      { see: 'Dünne Krone', check: 'Das Eis war von Anfang an im Shaker', fix: 'Erst Dry Shake, dann Eis' },
      { see: 'Träger, schlaffer Schaum', check: 'Aquafaba bei Raumtemperatur', fix: 'Bis zum Shaken kalt stellen' },
      { see: 'Mitten im Service keine Höhe mehr', check: 'Das Aquafaba kam in den Vorbatch', fix: 'Nur die Basis batchen, Aquafaba pro Drink zugeben' },
      { see: 'Der Schaum fällt, bevor er beim Gast ist', check: 'Der Drink wartete am Pass', fix: 'Auf Bestellung shaken und sofort servieren' },
      { see: 'Ungleichmäßig von Drink zu Drink', check: 'Freies Eingießen', fix: 'Jedes Mal {dose} g wiegen oder jiggern' },
    ],
    sections: [
      {
        id: 'use',
        title: 'So arbeiten Sie mit diesem Blatt',
        html: `<p>Drucken Sie es aus und legen Sie es ins Barbuch, mit dem <a href="{recipe_href}">vollständigen Whiskey-Sour-Rezept</a> griffbereit für den Aufbau. An den meisten Abenden bleibt die Spalte leer. An dem Abend, an dem die Krone dünn ist oder früh fällt, füllen Sie sie aus: War das Aquafaba kalt, kam der Dry Shake zuerst, wurde gewogen, wartete der Drink am Pass. Ein ausgefülltes Blatt zeigt meist auf die Ursache.</p>
<p>Bewahren Sie die Blätter beim Barbuch auf, damit ein neuer Bartender den Sour so shaked, wie die Bar ihn shaked. Und wenn der Schaum trotzdem nicht so ist, wie er sein sollte, und Sie nicht sehen, warum, schicken Sie uns das Blatt: Es ist für uns der schnellste Weg zu helfen.</p>`,
      },
      {
        id: 'before',
        title: 'Vor dem Service',
        html: `<p>Drei Dinge entscheiden den Sour vor der ersten Bestellung:</p>
<ul>
<li>Das Aquafaba steht im Kühlschrank, und zwischen den Services kommt es dorthin zurück. Angerührtes Pulver wird genauso gekühlt; kaltes Aquafaba schäumt schneller und hält länger.</li>
<li>Die Basis ist vorgebatcht, wenn viel los ist: Whiskey, Zitrone und Sirup. Das Aquafaba ist nie darin.</li>
<li>Ein Jigger oder eine Waage steht an der Station. {dose} g pro Drink, bei jedem Drink.</li>
</ul>`,
      },
      {
        id: 'look',
        title: 'Woran Sie erkennen, dass jeder Schritt gelingt',
        html: `<p>Das Blatt nennt den Zielwert. So erkennen Sie, dass Sie ihn getroffen haben:</p>
<ul>
<li><strong>Schritt 1, der Aufbau.</strong> Kein Eis im Shaker. {whiskey} ml Whiskey, {lemon_juice} ml Zitronensaft, {syrup} ml Zuckersirup und {dose} g Aquafaba, kalt.</li>
<li><strong>Schritt 2, der Dry Shake.</strong> {dry_shake} Sekunden, kräftig. Wenn Sie den Shaker öffnen, ist die Flüssigkeit hell und dick geworden; das ist der Schaum, und er entsteht hier oder gar nicht.</li>
<li><strong>Schritt 3, mit Eis.</strong> {wet_shake} Sekunden mehr. Der Shaker beschlägt außen. Dieses Shaken kühlt und verdünnt; es macht keinen Schaum.</li>
<li><strong>Schritt 4, das Abseihen.</strong> Fein in eine gekühlte Coupe abgeseiht, steigt die Krone von selbst und sitzt fest. Der Drink geht sofort raus; ein Drink, der am Pass wartet, verliert seine Krone auf dem Weg.</li>
<li><strong>Schritt 5, die Garnitur.</strong> Einige Tropfen Bitters sitzen auf dem Schaum, ohne zu sinken. Sinken sie, ist die Krone nicht fest genug, und die Antwort liegt in den Schritten 1 und 2.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'Muss der Drink sofort serviert werden?', a: 'Ja. Auf Bestellung shaken und sofort servieren: Ein Drink, der am Pass wartet, verliert seinen Schaum, bevor er den Gast erreicht.' },
      { q: 'Wie lange hält ein geöffnetes Gebinde hinter der Bar?', a: 'Geöffnete flüssige Ware wird bei höchstens 4 °C gelagert und innerhalb von {opened_days} Tagen verbraucht. Schreiben Sie das Öffnungsdatum auf die Packung und gießen Sie für den Service daraus, nicht aus der Speedrail.' },
      { q: 'Gilt das Blatt auch für das Pulver?', a: 'Ja. Rühren Sie vor dem Service {powder_dose} g Pulver mit {water_dose} ml Wasser pro Drink an und kühlen Sie es. Die Regel pro Eiweiß: {white_powder} g Pulver + {white_water} ml Wasser = {white_total} g Aquafaba, entspricht derselben Masse an flüssigem Aquafaba.' },
      { q: 'Kann ich dieses Blatt mit einer technischen Frage schicken?', a: 'Ja. Füllen Sie Ihre Spalte aus, notieren Sie, was Sie gesehen haben, und beschreiben Sie es über unser [Kontaktformular]({contact_href}) oder das Anfrageformular für Profis auf dieser Seite.' },
    ],
  },

  macarons: {
    title: 'Aquafaba-Macarons Schritt für Schritt - VERY AQUAFABA',
    h1: 'Aquafaba-Macarons Schritt für Schritt: das Prozessblatt',
    description: 'Druckbares Prozessblatt für das VERY AQUAFABA Macaronrezept: Aufschlagen, Unterheben, Ruhen, Backen und Reifen, eine Spalte für Ihren Ansatz und die Kontrollen.',
    lead: 'Macaronschalen entscheiden sich in den Minuten zwischen dem Stillstand des Besens und dem Blech im Ofen. Mit diesem Blatt behalten Sie diese Minuten unter Kontrolle: das VERY AQUAFABA Macaronrezept als Checkliste, die Sie ausdrucken, beim Arbeiten ausfüllen und aufbewahren.',
    powderNote: 'Pulver: Rühren Sie {powder_dose} g VERY AQUAFABA Pulver mit {water_dose} ml Wasser an und kühlen Sie es vor Schritt 2. Kaltes Aquafaba schlägt sich schneller zu einem stabileren Schaum auf.',
    steps: [
      { step: 'Mandelmehl und Puderzucker zusammen sieben; die Bleche auslegen', reference: '{almond} g, {icing_sugar} g' },
      { step: 'Das gekühlte Aquafaba auf hoher Stufe zu weichen Spitzen aufschlagen', reference: '{dose} g' },
      { step: 'Den Weinstein zugeben, dann den feinen Zucker nach und nach, bis glänzend und fest', reference: '{sugar} g' },
      { step: 'Die trockene Mischung in drei Portionen unterheben', reference: 'Bei dicken, langsamen Bändern aufhören' },
      { step: 'Kreise auf Backpapier spritzen, gleichmäßig verteilt', reference: '3 bis 4 cm' },
      { step: 'Bei Raumtemperatur ruhen lassen, bis sich eine trockene Haut bildet', reference: '{rest} min, je nach Luftfeuchtigkeit' },
      { step: 'Ohne Umluft backen', reference: '{bake} °C, {bake_time} min' },
      { step: 'Auf dem Blech vollständig auskühlen lassen, bevor Sie sie anfassen', reference: 'Vollständig ausgekühlt' },
      { step: 'Zusammensetzen, füllen und vor dem Servieren kühlen', reference: '{mature} h' },
    ],
    checks: [
      { see: 'Der Schaum erreicht kein Volumen', check: 'Fett an Schüssel oder Schneebesen', fix: 'Vor dem Start alles entfetten' },
      { see: 'Die Baisermasse fällt vor dem Aufspritzen zusammen', check: 'Sie stand, während die trockene Mischung oder die Bleche vorbereitet wurden', fix: 'Zuerst sieben und die Bleche auslegen, zuletzt aufschlagen' },
      { see: 'Die Schalen verlieren ihre Höhe', check: 'Über das Bandstadium hinaus oder zu grob untergehoben', fix: 'Bei dicken, langsamen Bändern aufhören' },
      { see: 'Keine Haut nach dem Ruhen', check: 'Feuchter Raum', fix: 'Länger ruhen lassen und nach dem Tastgefühl urteilen, nicht nach der Uhr' },
      { see: 'Die Schalen schwitzen bei der Lagerung', check: 'Zucker nicht vollständig gelöst', fix: 'Den feinen Zucker nach und nach zugeben' },
      { see: 'Die Schalen werden bei der Lagerung weich', check: 'Die Schalen ziehen Feuchtigkeit aus der Luft', fix: 'An einem Ort mit niedriger Luftfeuchtigkeit lagern' },
      { see: 'Die Schalen variieren von Ansatz zu Ansatz', check: 'Die Aquafabakonzentration ist gedriftet', fix: 'Bei Industrieansätzen {concentration} g/ml halten' },
    ],
    sections: [
      {
        id: 'use',
        title: 'So arbeiten Sie mit diesem Blatt',
        html: `<p>Drucken Sie eines pro Ansatz und legen Sie es neben die Maschine, mit dem <a href="{recipe_href}">vollständigen Macaronrezept</a> griffbereit, falls Sie die Methode im Detail brauchen. Tragen Sie beim Arbeiten in die letzte Spalte ein, was Sie tatsächlich getan haben: wie lange die Baisermasse brauchte, wie viele Züge beim Unterheben, wie lange die Schalen ruhten und wie der Raum war, wie lange das Blech backte. Macarons scheitern an kleinen Dingen, und hier finden Sie sie.</p>
<p>Bewahren Sie die ausgefüllten Blätter auf. Die Luftfeuchtigkeit ändert sich von einem Tag zum nächsten, und die Blätter einer feuchten Woche sind mehr wert als jede Regel. Wenn ein Ansatz misslingt und Sie nicht sehen, warum, schicken Sie uns das Blatt: Es ist für uns der schnellste Weg zu helfen.</p>`,
      },
      {
        id: 'before',
        title: 'Bevor Sie Aquafaba für Macarons aufschlagen',
        html: `<p>Drei Dinge entscheiden die meisten Ansätze, bevor der Besen läuft:</p>
<ul>
<li>Mandelmehl und Puderzucker sind zusammen gesiebt und die Bleche ausgelegt. Der Schaum darf nicht warten, während Sie das erledigen.</li>
<li>Das Aquafaba ist kalt, direkt aus dem Kühlschrank. Angerührtes Pulver wird auf denselben Punkt gekühlt.</li>
<li>Schüssel und Schneebesen sind sauber ausgewischt, und die {sugar} g feiner Zucker sind abgewogen und in Reichweite.</li>
</ul>`,
      },
      {
        id: 'look',
        title: 'Woran Sie erkennen, dass jeder Schritt gelingt',
        html: `<p>Das Blatt nennt den Zielwert. So erkennen Sie, dass Sie ihn getroffen haben:</p>
<ul>
<li><strong>Schritt 3, feste Spitzen.</strong> Glänzend, und die Spitze steht gerade, wenn Sie den Schneebesen anheben. Der Zucker kam nach und nach hinein, nach den weichen Spitzen; ungelöster Zucker ist das, was später aus den Schalen näßt.</li>
<li><strong>Schritt 4, das Unterheben.</strong> Drei Portionen, und Sie hören auf, wenn die Masse in einem dicken, langsamen Band vom Spatel läuft. Darüber hinaus verlieren die Schalen ihre Höhe.</li>
<li><strong>Schritt 5, Aufspritzen.</strong> Kreise von 3 bis 4 cm, gleichmäßig verteilt, und die Masse verläuft flach, ohne auseinanderzulaufen.</li>
<li><strong>Schritt 6, das Ruhen.</strong> Eine trockene Haut, die nicht an einem leicht aufgelegten Finger klebt. In einem trockenen Raum dauert das {rest} Minuten, in einem feuchten länger; urteilen Sie nach dem Tastgefühl, nicht nach der Uhr.</li>
<li><strong>Schritt 7, das Backen.</strong> {bake} °C ohne Umluft, {bake_time} Minuten pro Blech. Vollständig ausgekühlt lösen sich die Schalen sauber vom Backpapier.</li>
<li><strong>Schritt 9, das Reifen.</strong> Zusammengesetzt, gefüllt und {mature} Stunden vor dem Servieren gekühlt, damit Schale und Füllung zusammenfinden.</li>
</ul>
<p>Bei Industrieansätzen halten Sie die Aquafabakonzentration bei {concentration} g/ml, damit die Schalen von Durchgang zu Durchgang gleich ausfallen.</p>`,
      },
    ],
    faq: [
      { q: 'Nach dem Ruhen hat sich keine Haut gebildet. Was tue ich?', a: 'Der Raum ist feucht. Lassen Sie länger ruhen als die {rest} Minuten der Referenz und urteilen Sie nach dem Tastgefühl, nicht nach der Uhr.' },
      { q: 'Warum variieren die Schalen von Ansatz zu Ansatz?', a: 'Die Aquafabakonzentration ist gedriftet. Halten Sie sie bei Industrieansätzen bei {concentration} g/ml.' },
      { q: 'Gilt das Blatt auch für das Pulver?', a: 'Ja. Rühren Sie {powder_dose} g Pulver mit {water_dose} ml Wasser an, kühlen Sie es und beginnen Sie bei Schritt 2. Die Regel pro Eiweiß: {white_powder} g Pulver + {white_water} ml Wasser = {white_total} g Aquafaba, entspricht derselben Masse an flüssigem Aquafaba.' },
      { q: 'Kann ich dieses Blatt mit einer technischen Frage schicken?', a: 'Ja. Füllen Sie die Spalte Ihres Ansatzes aus, notieren Sie, was Sie gesehen haben, und beschreiben Sie es über unser [Kontaktformular]({contact_href}) oder das Anfrageformular für Profis auf dieser Seite.' },
    ],
  },
};
