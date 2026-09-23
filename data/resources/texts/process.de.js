// Prozessblatt, Deutsch. Gleiche Struktur, gleiche {tokens} und gleiche HTML-Tags wie
// process.en.js (geprüft von scripts/applications/check-guides.mjs). Kein Gedankenstrich.
// Schritte, Ursachen und Lösungen sind die der Leitfäden dieser Website.
export default {
  meringue: {
    title: 'Prozessblatt und Kontrollen für Aquafaba-Baiser - VERY AQUAFABA',
    h1: 'Aquafaba-Baiser: Prozessblatt und Kontrollen',
    description: 'Ein druckbares Prozessblatt für das VERY AQUAFABA Baiserrezept, mit dem Referenzwert jedes Schritts, einer Spalte für Ihre eigene Charge und den Kontrollen, wenn eine Charge misslingt.',
    lead: 'Ein druckbares Blatt, das dem VERY AQUAFABA Baiserrezept Schritt für Schritt folgt, mit dem Referenzwert jedes Schritts ({dose} g Aquafaba bei {chill} °C, {sugar} g Zucker, {bake} °C für {bake_time} Stunden) und einer leeren Spalte für das, was Sie tatsächlich getan haben. Darunter die Kontrollen für den Fall, dass eine Charge nicht gelingt.',
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
        id: 'before',
        title: 'Vor dem Start: drei Kontrollen',
        html: `<p>Die meisten Baiserfehler entscheiden sich, bevor die Maschine läuft. Drei Kontrollen decken sie ab.</p>
<ul>
<li>Die Temperatur. Das VERY AQUAFABA flüssig kommt mit {chill} °C aus dem Kühlschrank und direkt in die Schüssel. Angerührtes Pulver wird vor dem Aufschlagen auf dieselbe Temperatur gekühlt; warmes Aquafaba steigt langsam und gibt einen schwächeren Schaum.</li>
<li>Das Fett. Aquafabaschaum ist ein reiner Proteinschaum ohne Fett im Rezept, ein Fettfilm an Schüssel oder Schneebesen hält das Volumen also klein. Wischen Sie beides aus, bevor das Aquafaba hineinkommt.</li>
<li>Der Zucker. Wiegen Sie {sugar} g feinen Zucker ab und halten Sie ihn bereit. Er kommt erst hinein, wenn der Schaum weiche Spitzen hält, und dann esslöffelweise.</li>
</ul>`,
      },
      {
        id: 'whipping',
        title: 'Aufschlagen, Zucker und Aufspritzen',
        html: `<p>Schlagen Sie {dose} g auf hoher Stufe auf. Weiche Spitzen kommen bei der Referenzcharge nach etwa {whip} Minuten: Der Schaum hält eine Form, deren Spitze sich umlegt. Geben Sie jetzt den Stabilisator dazu, falls Sie einen verwenden, gehen Sie auf mittlere Stufe und geben Sie die {sugar} g Zucker esslöffelweise dazu, wobei sich jeder Löffel löst, bevor der nächste kommt. Zurück auf hohe Stufe, bis der Schaum glänzt und eine feste, gerade stehende Spitze hält.</p>
<p>Spritzen Sie Formen von 3 bis 4 cm auf, sobald der Schaum fertig ist. Aquafabaschaum hält weniger gut als Eiweißschaum, eine stehen gelassene Schüssel verliert also Volumen, bevor sie das Blech erreicht.</p>
<p>Bei Industriechargen halten Sie die Aquafabakonzentration bei {concentration} g/ml, damit sich der Schaum bei jedem Durchgang gleich verhält.</p>`,
      },
      {
        id: 'drying',
        title: 'Trocknen und Lagern',
        html: `<p>Die Bleche trocknen bei {bake} °C ohne Umluft für {bake_time} Stunden, bis die Baisers durchgetrocknet sind. Lassen Sie sie auf dem Blech vollständig auskühlen, bevor Sie sie bewegen.</p>
<p>Ausgekühlte Baisers halten luftdicht bei Raumtemperatur, mit einem Trockenmittelbeutel im Behälter, falls Sie einen haben. Sie ziehen Feuchtigkeit aus einem feuchten Raum und werden weich, der Behälter zählt also genauso wie der Ofen.</p>
<p>Ungeöffnet halten beide Formate von VERY AQUAFABA mindestens {unopened_months} Monate bei Raumtemperatur. Nach dem Öffnen bleibt das Flüssige verschlossen im Kühlschrank bei höchstens {opened_temp} °C und wird innerhalb von {opened_days} Tagen verbraucht; das Pulver muss nur trocken und verschlossen bleiben.</p>`,
      },
    ],
    faq: [
      { q: 'Woran erkenne ich, dass der Schaum feste Spitzen hat?', a: 'Heben Sie den Schneebesen an: Die Spitze steht gerade, ohne sich umzulegen, und der Schaum glänzt. Die Referenzcharge erreicht weiche Spitzen in {whip} Minuten; der Zucker kommt danach hinein, und die feste Spitze stellt sich mit dem letzten Zucker ein.' },
      { q: 'Warum schwitzen meine Baisers Sirup im Behälter?', a: 'Der Zucker kam schneller hinein, als er sich lösen konnte. Geben Sie die {sugar} g esslöffelweise auf mittlerer Stufe dazu und lassen Sie jeden Löffel verschwinden, bevor der nächste kommt.' },
      { q: 'Kann ich den aufgeschlagenen Schaum warten lassen, während der Ofen belegt ist?', a: 'Nein. Spritzen und trocknen Sie direkt nach den festen Spitzen. Ist der Ofen voll, schlagen Sie die nächste Schüssel später auf, statt eine fertige Schüssel stehen zu lassen.' },
      { q: 'Die Baisers sind innen klebrig. Was prüfe ich?', a: 'Den Trocknungsschritt: {bake} °C ohne Umluft für die vollen {bake_time} Stunden, bis durchgetrocknet, danach vollständiges Auskühlen auf dem Blech. Formen, die größer als 3 bis 4 cm sind, brauchen länger als die Referenzzeit.' },
      { q: 'Gilt das Blatt auch für das Pulver?', a: 'Ja. Rühren Sie {powder_dose} g Pulver mit {water_dose} ml Wasser an, kühlen Sie es auf {chill} °C und beginnen Sie bei Schritt 1. Die Regel pro Eiweiß: {white_powder} g Pulver + {white_water} ml Wasser = {white_total} g Aquafaba, entspricht derselben Masse an flüssigem Aquafaba.' },
      { q: 'Kann ich dieses Blatt mit einer technischen Frage schicken?', a: 'Ja. Füllen Sie die Spalte Ihrer Charge aus, notieren Sie, was Sie gesehen haben, und beschreiben Sie es über unser [Kontaktformular]({contact_href}) oder das Anfrageformular für Profis auf dieser Seite. Das ausgefüllte Blatt ist für uns der schnellste Weg zu helfen.' },
    ],
  },

  'chocolate-mousse': {
    title: 'Prozessblatt und Kontrollen für Aquafaba-Schokoladenmousse - VERY AQUAFABA',
    h1: 'Aquafaba-Schokoladenmousse: Prozessblatt und Kontrollen',
    description: 'Ein druckbares Prozessblatt für das VERY AQUAFABA Rezept für Schokoladenmousse: Schokoladentemperaturen, Aufschlagen, Unterheben und Kühlen, mit einer Spalte für Ihre eigene Charge und den Kontrollen, wenn eine Mousse misslingt.',
    lead: 'Ein druckbares Blatt, das dem VERY AQUAFABA Rezept für Schokoladenmousse Schritt für Schritt folgt: die Schokolade geschmolzen und auf {fold_temp} °C abgekühlt, {dose} g Aquafaba aufgeschlagen mit {sugar} g Zucker, das Unterheben und die {set_time} Stunden Kühlen. Eine leere Spalte für das, was Sie tatsächlich getan haben, und darunter die Kontrollen für den Fall, dass eine Mousse nicht gelingt.',
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
        id: 'before',
        title: 'Vor dem Start: zuerst die Schokolade',
        html: `<p>Das aufgeschlagene Aquafaba ersetzt sowohl die Eiweiße als auch die Sahne. Die gesamte Struktur kommt aus dem Schaum, Temperatur und Unterheben entscheiden also über das Ergebnis. Die Schokolade wird erledigt, bevor die Maschine läuft.</p>
<ul>
<li>Schmelzen Sie {chocolate} g dunkle Kuvertüre auf 45 bis 50 °C und lassen Sie sie auf {fold_temp} °C abkühlen. Halten Sie sie abgekühlt bereit, bevor Sie aufschlagen: Der Schaum darf nicht auf sie warten.</li>
<li>Wiegen Sie {dose} g VERY AQUAFABA flüssig kalt ab, direkt aus dem Kühlschrank in eine saubere, fettfreie Schüssel. Angerührtes Pulver wird genauso gekühlt; warmes Aquafaba gibt weniger Volumen.</li>
<li>Wiegen Sie {sugar} g feinen Zucker ab und halten Sie ihn für das Aufschlagen bereit.</li>
</ul>`,
      },
      {
        id: 'whipping',
        title: 'Aufschlagen und Unterheben',
        html: `<p>Schlagen Sie das Aquafaba auf hoher Stufe zu weichen Spitzen auf, bei der Referenzcharge etwa {whip} Minuten. Geben Sie jetzt den Stabilisator dazu, falls Sie einen verwenden. Geben Sie die {sugar} g Zucker beim Aufschlagen nach und nach dazu, bis zu glänzenden, festen Spitzen: Die Baisermasse soll dicht und stabil sein.</p>
<p>Heben Sie die abgekühlte Schokolade von Hand mit einem Spatel unter, zügig und leicht, und hören Sie auf, sobald sie verbunden ist. Zu langes Unterheben drückt die Luft heraus und gibt eine dichte, schwere Mousse; Schokolade über {fold_temp} °C schmilzt den Schaum, und die Mousse fällt beim Unterheben zusammen.</p>
<p>Große Chargen? Emulgieren Sie zuerst einen Teil der Schokolade mit etwas Aquafaba und heben Sie dann den restlichen Schaum unter. So bleiben große Durchgänge homogen.</p>`,
      },
      {
        id: 'setting',
        title: 'Kühlen und Lagern',
        html: `<p>Sofort in Becher spritzen oder füllen und mindestens {set_time} Stunden kalt stellen. Eine Charge füllt {yield}. So hergestellt hält die Mousse {keep} Tage im Kühlschrank.</p>
<p>Das geöffnete Flüssiggebinde steht auf demselben Kühlregal wie die Becher: Notieren Sie das Öffnungsdatum darauf, denn es wird innerhalb von {opened_days} Tagen bei höchstens {opened_temp} °C verbraucht. Ungeöffnet halten beide Formate mindestens {unopened_months} Monate bei Raumtemperatur; geöffnetes Pulver muss nur trocken und verschlossen bleiben.</p>`,
      },
    ],
    faq: [
      { q: 'Warum ist die Mousse zusammengefallen, als ich die Schokolade zugegeben habe?', a: 'Die Schokolade war über {fold_temp} °C und hat den Schaum geschmolzen. Kühlen Sie sie vor dem Unterheben auf {fold_temp} °C oder weniger und halten Sie sie bereit, bevor Sie aufschlagen.' },
      { q: 'Warum ist meine Mousse dicht und schwer?', a: 'Zu langes Unterheben hat die Luft herausgedrückt. Heben Sie die Schokolade von Hand zügig und leicht unter und hören Sie auf, sobald sie verbunden ist.' },
      { q: 'Wann kommt der Zucker hinein?', a: 'Erst, wenn der Schaum weiche Spitzen hält, nach etwa {whip} Minuten, und dann nach und nach beim Aufschlagen, bis die Spitzen glänzend und fest sind. Zucker vor den weichen Spitzen verhindert, dass sich der Schaum aufbaut.' },
      { q: 'Wie lange braucht die Mousse zum Festwerden, und wie lange hält sie?', a: 'Mindestens {set_time} Stunden im Kühlschrank zum Festwerden, und hygienisch hergestellt hält sie {keep} Tage. Stellen Sie die Becher direkt nach dem Füllen kalt.' },
      { q: 'Gilt das Blatt auch für das Pulver?', a: 'Ja. Rühren Sie {powder_dose} g Pulver vorab mit {water_dose} ml Wasser an, kühlen Sie es und beginnen Sie bei Schritt 3. Die Regel pro Eiweiß: {white_powder} g Pulver + {white_water} ml Wasser = {white_total} g Aquafaba, entspricht derselben Masse an flüssigem Aquafaba.' },
      { q: 'Kann ich dieses Blatt mit einer technischen Frage schicken?', a: 'Ja. Füllen Sie die Spalte Ihrer Charge aus, notieren Sie, was Sie gesehen haben, und beschreiben Sie es über unser [Kontaktformular]({contact_href}) oder das Anfrageformular für Profis auf dieser Seite.' },
    ],
  },

  mayonnaise: {
    title: 'Vegane Mayonnaise mit Aquafaba: Prozessblatt und Kontrollen - VERY AQUAFABA',
    h1: 'Vegane Mayonnaise mit Aquafaba: Prozessblatt und Kontrollen',
    description: 'Ein druckbares Prozessblatt für das VERY AQUAFABA Mayonnaiserezept: die kalte Emulsion Schritt für Schritt, mit einer Spalte für Ihre eigene Charge und den Kontrollen, wenn die Emulsion misslingt.',
    lead: 'Ein druckbares Blatt, das dem VERY AQUAFABA Mayonnaiserezept Schritt für Schritt folgt: {dose} g gekühltes Aquafaba, Senf, Salz und Zitrone, dann {oil} g Öl als dünner, gleichmäßiger Strahl unter hoher Scherkraft. Eine leere Spalte für das, was Sie tatsächlich getan haben, und darunter die Kontrollen für den Fall, dass die Emulsion nicht bindet.',
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
      { see: 'Instabil bei großen Chargen', check: 'Tröpfchengröße nicht gesteuert', fix: 'Auf einen Hochleistungsmixer wechseln' },
      { see: 'Dünnes Ergebnis aus gefrorenem Vorrat', check: 'Aufgetautes Aquafaba kam dünner zurück', fix: 'Glatt rühren. Wenn weiterhin dünn, bei niedriger Hitze kurz einkochen' },
      { see: 'Haltbarkeit kürzer als {keep} Tage', check: 'Hygiene oder ein langsamer Weg in den Kühlschrank', fix: 'Sauberer Behälter, sofort kühlen' },
    ],
    sections: [
      {
        id: 'before',
        title: 'Vor dem Start: kalt und sauber',
        html: `<p>Hier steht Aquafaba für das Eigelb, nicht für das Eiweiß. Nichts wird aufgeschlagen: Es ist eine kalte Emulsion, die mit Scherkraft aufgebaut wird. Zwei Dinge werden geklärt, bevor der Mixer läuft.</p>
<ul>
<li>Die Temperatur. Das VERY AQUAFABA flüssig lebt nach dem Öffnen im Kühlschrank und hat beim Eingießen Mixtemperatur, {chill} °C. Angerührtes Pulver wird mit kaltem Wasser angerührt oder auf denselben Punkt gekühlt.</li>
<li>Das Gefäß. Hoch und schmal, damit der Stabmixer die Scherkraft hoch hält. Wiegen Sie {dose} g Aquafaba, {mustard} g Senf, {salt} g Salz und {lemon} g Zitronensaft oder Essig hinein.</li>
</ul>`,
      },
      {
        id: 'emulsion',
        title: 'Die Emulsion aufbauen',
        html: `<p>Starten Sie den Stabmixer und lassen Sie {oil} g Öl als dünnen, gleichmäßigen Strahl einlaufen. Halten Sie die Scherkraft hoch, damit die Emulsion bindet. Wenn sie nie beginnt, kam das Öl zu schnell oder die Scherkraft war zu gering. Sobald es andickt, abschmecken und würzen. Zu fest? Einige Gramm kaltes Wasser untermixen, nicht mehr Öl.</p>
<p>Große Chargen? Verwenden Sie einen Hochleistungsmixer, um die Tröpfchengröße zu steuern und die Emulsion stabil zu halten.</p>`,
      },
      {
        id: 'storage',
        title: 'Lagerung',
        html: `<p>In einen sauberen Behälter umfüllen und sofort kühlen. Hygienisch hergestellt hält die Mayonnaise bis zu {keep} Tage im Kühlschrank; eine kürzere Haltbarkeit deutet auf Hygiene oder einen langsamen Weg in den Kühlschrank hin. Eine Charge ergibt {yield}.</p>
<p>Das geöffnete Flüssiggebinde bleibt im Kühlschrank bei höchstens {opened_temp} °C und wird innerhalb von {opened_days} Tagen verbraucht. Ungeöffnet halten beide Formate mindestens {unopened_months} Monate bei Raumtemperatur; geöffnetes Pulver muss nur trocken und verschlossen bleiben.</p>`,
      },
    ],
    faq: [
      { q: 'Warum beginnt die Emulsion nie?', a: 'Das Öl kam zu schnell hinein, oder die Scherkraft war zu gering. Lassen Sie die {oil} g als dünnen, gleichmäßigen Strahl bei voller Mixergeschwindigkeit in einem hohen, schmalen Gefäß einlaufen.' },
      { q: 'Die Mayonnaise ist zu fest zum Verarbeiten. Was gebe ich dazu?', a: 'Einige Gramm kaltes Wasser, untergemixt. Nicht mehr Öl: Die Emulsion hat sich verfestigt, und Öl verfestigt sie weiter.' },
      { q: 'Muss das Aquafaba kalt sein?', a: 'Ja, mit {chill} °C. Warmes Aquafaba gibt eine langsame, instabile Emulsion. Das geöffnete Gebinde lebt im Kühlschrank, es gießt also mit der richtigen Temperatur.' },
      { q: 'Wie lange hält die Mayonnaise?', a: 'Bis zu {keep} Tage im Kühlschrank, wenn sie hygienisch hergestellt und sofort in einem sauberen Behälter gekühlt wird.' },
      { q: 'Gilt das Blatt auch für das Pulver?', a: 'Ja. Rühren Sie {powder_dose} g Pulver auf einer Feinwaage mit {water_dose} ml kaltem Wasser an und beginnen Sie bei Schritt 1. Die Regel pro Eiweiß: {white_powder} g Pulver + {white_water} ml Wasser = {white_total} g Aquafaba, entspricht derselben Masse an flüssigem Aquafaba.' },
      { q: 'Kann ich dieses Blatt mit einer technischen Frage schicken?', a: 'Ja. Füllen Sie die Spalte Ihrer Charge aus, notieren Sie, was Sie gesehen haben, und beschreiben Sie es über unser [Kontaktformular]({contact_href}) oder das Anfrageformular für Profis auf dieser Seite.' },
    ],
  },

  baking: {
    title: 'Aquafaba beim Backen: Versuchsblatt und Kontrollen - VERY AQUAFABA',
    h1: 'Aquafaba beim Backen: Versuchsblatt und Kontrollen',
    description: 'Ein druckbares Blatt für einen Ei-Ersatz-Versuch mit VERY AQUAFABA in Ihrem eigenen Rezept: die Entsprechungen, aufgeschlagen oder nicht, die Anpassungen und die Kontrollen, wenn ein Gebäck misslingt.',
    lead: 'Ein druckbares Blatt, um die Eier Ihrer eigenen Rezeptur durch VERY AQUAFABA zu ersetzen und den Versuch festzuhalten: {egg_liquid} g flüssig pro ganzem Ei, {white_liquid} g pro Eiweiß, aufgeschlagen bei {chill} °C, wenn es Eiweiße ersetzt, so hineingegossen, wie es ist, wenn es ganze Eier ersetzt. Eine leere Spalte für das, was Sie tatsächlich getan haben, und darunter die Kontrollen für den Fall, dass ein Gebäck nicht gelingt.',
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
        id: 'before',
        title: 'Vor dem Versuch: was das Ei in Ihrem Rezept tut',
        html: `<p>Aquafaba erledigt beim Backen drei Aufgaben: Es bindet Luft, es bindet, und es hält Feuchtigkeit. Deshalb arbeitet es auf zwei Arten. Schlagen Sie es auf, wenn es Eiweiße ersetzt. Gießen Sie es so hinein, wie es ist, wenn es die Bindung und Feuchtigkeit ganzer Eier ersetzt.</p>
<ul>
<li>Biskuit und Genoise: bei {chill} °C aufgeschlagen, dann behutsam und zügig untergehoben. Es bringt die Luft.</li>
<li>Kuchen, Cookies und Muffins: mit dem Zucker gemischt, bevor es auf das Fett trifft, für eine stabilere Emulsion.</li>
<li>Zuckerreiche Massen: zuerst mit einem Teil des Zuckers aufgeschlagen, dann mit den Fetten verbunden, für Volumen, das den Backvorgang übersteht.</li>
<li>Cookies und Brownies: direkt zugegeben, nicht aufgeschlagen, für Bindung und Feuchtigkeit.</li>
<li>Brioche und süße Brötchen: nicht aufgeschlagen, mit den Flüssigkeiten des Teigs, für Weichheit und Frischhaltung.</li>
</ul>`,
      },
      {
        id: 'dose',
        title: 'Die Dosierung und die Anpassung',
        html: `<p>Wiegen Sie {egg_liquid} g VERY AQUAFABA flüssig pro ganzem Ei oder {white_liquid} g pro Eiweiß ab, direkt aus dem Gebinde. Für ein Eigelb {yolk_liquid} g Aquafaba plus {yolk_oil} g Öl. In Pulver {white_powder} g + {white_water} ml Wasser pro Eiweiß und {egg_powder} g + {egg_water} ml pro ganzem Ei.</p>
<p>Ganze Eier ersetzen? Aquafaba bringt mehr Wasser mit als Ei. Reduzieren Sie Milch oder Wasser leicht oder erhöhen Sie die trockenen Zutaten, und backen Sie vollständig durch. Nur die Eiweiße zu ersetzen, wie bei Baiser oder Macarons, braucht normalerweise keine Anpassung.</p>`,
      },
      {
        id: 'after',
        title: 'Nach dem Backen: was festgehalten wird',
        html: `<p>Notieren Sie Volumen, Krume und Feuchtigkeit im Vergleich zu Ihrem üblichen Ergebnis und bewahren Sie das Blatt bei der Rezeptur auf. Wenn Sie die Feuchtigkeit des Rezepts verändert haben, prüfen Sie Haltbarkeit und mikrobielle Stabilität neu: Eine andere Feuchtigkeit ändert die Wasseraktivität.</p>
<p>Das geöffnete Flüssiggebinde bleibt im Kühlschrank bei höchstens {opened_temp} °C und wird innerhalb von {opened_days} Tagen verbraucht; ein 1 L Tetrapak ersetzt {eggs_1l} ganze Eier oder {whites_1l} Eiweiße. Ungeöffnet halten beide Formate mindestens {unopened_months} Monate bei Raumtemperatur; geöffnetes Pulver muss nur trocken und verschlossen bleiben.</p>`,
      },
    ],
    faq: [
      { q: 'Warum ist mein Biskuit flach geworden?', a: 'Der Schaum wartete oder wurde zu kräftig untergehoben. Schlagen Sie das Aquafaba bei {chill} °C auf und heben Sie es zügig und behutsam unter.' },
      { q: 'Warum ist der Teig locker und nass?', a: 'Ganze Eier wurden eins zu eins getauscht und das Wasser nicht reduziert. Reduzieren Sie Milch oder Wasser leicht oder geben Sie trockene Zutaten dazu, und backen Sie vollständig durch.' },
      { q: 'Die Mitte ist nass. Was prüfe ich?', a: 'Die Backzeit: Das zusätzliche Wasser, das Aquafaba mitbringt, verlängert das Backen. Backen Sie vollständig durch, bevor Sie es herausnehmen.' },
      { q: 'Muss ich es aufschlagen?', a: 'Nur, wenn es Eiweiße ersetzt. Wenn es die Bindung und Feuchtigkeit ganzer Eier ersetzt, in Cookies, Brownies und Teigen, kommt es nicht aufgeschlagen hinein.' },
      { q: 'Gilt das Blatt auch für das Pulver?', a: 'Ja. {white_powder} g Pulver + {white_water} ml Wasser = {white_total} g Aquafaba, entspricht derselben Masse an flüssigem Aquafaba. Für aufgeschlagene Gebäcke zuerst auf {chill} °C kühlen; in Teige und Massen kommt es so, wie es ist.' },
      { q: 'Kann ich dieses Blatt mit einer technischen Frage schicken?', a: 'Ja. Füllen Sie die Spalte Ihrer Charge aus, notieren Sie, was Sie gesehen haben, und beschreiben Sie es über unser [Kontaktformular]({contact_href}) oder das Anfrageformular für Profis auf dieser Seite.' },
    ],
  },

  cocktails: {
    title: 'Serviceblatt und Schaumkontrollen für Aquafaba Sours - VERY AQUAFABA',
    h1: 'Aquafaba Sours: Serviceblatt und Schaumkontrollen',
    description: 'Ein druckbares Serviceblatt für den VERY AQUAFABA Whiskey Sour: der Aufbau, der Dry Shake und das Schütteln mit Eis, mit einer Spalte für Ihre eigenen Drinks und den Kontrollen, wenn der Schaum in sich zusammenfällt.',
    lead: 'Ein druckbares Blatt, das dem VERY AQUAFABA Whiskey Sour Schritt für Schritt folgt: der Aufbau ohne Eis mit {dose} g gekühltem Aquafaba, der Dry Shake von {dry_shake} Sekunden und das Schütteln mit Eis von {wet_shake} Sekunden. Eine leere Spalte für das, was Sie tatsächlich getan haben, und darunter die Kontrollen für den Fall, dass der Schaum in sich zusammenfällt.',
    powderNote: 'Pulver: Für einen Drink {powder_dose} g VERY AQUAFABA Pulver + {water_dose} ml Wasser. Vor dem Service anrühren und kühlen; kaltes Aquafaba schäumt schneller und hält länger.',
    steps: [
      { step: 'Ohne Eis aufbauen', reference: '{whiskey} ml Whiskey, {lemon_juice} ml Zitronensaft, {syrup} ml Zuckersirup, {dose} g gekühltes Aquafaba' },
      { step: 'Kräftiger Dry Shake', reference: '{dry_shake} s' },
      { step: 'Eis zugeben und erneut schütteln', reference: '{wet_shake} s' },
      { step: 'Fein in eine gekühlte Coupe abseihen', reference: 'Sofort servieren' },
      { step: 'Garnieren', reference: 'Einige Tropfen Bitters auf den Schaum' },
    ],
    checks: [
      { see: 'Dünner Schaum', check: 'Das Eis war von Anfang an dabei', fix: 'Zuerst Dry Shake, dann Eis' },
      { see: 'Langsamer, schlaffer Schaum', check: 'Aquafaba bei Raumtemperatur', fix: 'Bis zum Schütteln gekühlt halten' },
      { see: 'Keine Höhe mehr zur Mitte des Service', check: 'Aquafaba kam in den Vorbatch', fix: 'Nur die Basis batchen, Aquafaba pro Drink zugeben' },
      { see: 'Der Schaum fällt, bevor er den Gast erreicht', check: 'Der Drink wartete am Pass', fix: 'Auf Bestellung schütteln und sofort servieren' },
      { see: 'Ungleichmäßig von Drink zu Drink', check: 'Freies Ausgießen', fix: 'Jedes Mal {dose} g wiegen oder jiggern' },
    ],
    sections: [
      {
        id: 'before',
        title: 'Vor dem Service: die Station',
        html: `<p>In Ihrem Rezept ändert sich nur eine Zutat: Aquafaba ersetzt das Eiweiß. Zwei Dinge werden vor der ersten Bestellung geklärt.</p>
<ul>
<li>Kalt. Das VERY AQUAFABA flüssig kommt aus dem Kühlschrank in den Shaker; zwischen den Services wird es verschlossen und zurück in den Kühlschrank gestellt. Angerührtes Pulver wird genauso gekühlt: Kaltes Aquafaba schäumt schneller und hält länger.</li>
<li>Der Vorbatch. Viel los? Whiskey, Zitrone und Sirup vorab batchen. Das Aquafaba kommt beim Schütteln dazu, nie in den Batch.</li>
</ul>`,
      },
      {
        id: 'shake',
        title: 'Die zwei Shakes',
        html: `<p>Ohne Eis aufbauen: {whiskey} ml Whiskey, {lemon_juice} ml frischer Zitronensaft, {syrup} ml Zuckersirup und {dose} g gekühltes Aquafaba. Kräftiger Dry Shake für {dry_shake} Sekunden: Hier entsteht der Schaum. Eis zugeben und weitere {wet_shake} Sekunden schütteln, zum Kühlen und Verdünnen. Fein in eine gekühlte Coupe abseihen; der Schaum ist fest genug, um einige Tropfen Bitters zu tragen.</p>
<p>Wiegen oder jiggern Sie jedes Mal {dose} g. Freies Ausgießen macht die Drinks ungleichmäßig.</p>`,
      },
      {
        id: 'storage',
        title: 'Zwischen den Services',
        html: `<p>Das geöffnete Flüssiggebinde bleibt verschlossen im Kühlschrank bei höchstens {opened_temp} °C und wird innerhalb von {opened_days} Tagen verbraucht; ein 1 L Tetrapak ergibt {batches_1l} Sours. Geöffnetes Pulver hält, solange der Beutel trocken und verschlossen bleibt. Ungeöffnet halten beide Formate mindestens {unopened_months} Monate bei Raumtemperatur.</p>`,
      },
    ],
    faq: [
      { q: 'Warum ist der Schaum dünn?', a: 'Das Eis war von Anfang an dabei. Zuerst ein Dry Shake von {dry_shake} Sekunden, dann Eis zugeben und weitere {wet_shake} Sekunden schütteln.' },
      { q: 'Warum wird der Schaum zur Mitte des Service schlaff?', a: 'Das Aquafaba kam in den Vorbatch. Batchen Sie nur Whiskey, Zitrone und Sirup und geben Sie {dose} g Aquafaba pro Drink beim Schütteln dazu.' },
      { q: 'Muss der Drink sofort serviert werden?', a: 'Ja. Auf Bestellung schütteln und sofort servieren: Ein Drink, der am Pass wartet, verliert seinen Schaum, bevor er den Gast erreicht.' },
      { q: 'Warum sind die Drinks ungleichmäßig?', a: 'Freies Ausgießen. Wiegen oder jiggern Sie jedes Mal {dose} g Aquafaba.' },
      { q: 'Gilt das Blatt auch für das Pulver?', a: 'Ja. Rühren Sie vor dem Service {powder_dose} g Pulver mit {water_dose} ml Wasser pro Drink an und kühlen Sie es. Die Regel pro Eiweiß: {white_powder} g Pulver + {white_water} ml Wasser = {white_total} g Aquafaba, entspricht derselben Masse an flüssigem Aquafaba.' },
      { q: 'Kann ich dieses Blatt mit einer technischen Frage schicken?', a: 'Ja. Füllen Sie Ihre Spalte aus, notieren Sie, was Sie gesehen haben, und beschreiben Sie es über unser [Kontaktformular]({contact_href}) oder das Anfrageformular für Profis auf dieser Seite.' },
    ],
  },

  macarons: {
    title: 'Prozessblatt und Kontrollen für Aquafaba-Macarons - VERY AQUAFABA',
    h1: 'Aquafaba-Macarons: Prozessblatt und Kontrollen',
    description: 'Ein druckbares Prozessblatt für das VERY AQUAFABA Macaronrezept: Aufschlagen, das Unterheben bis zum Band, das Ruhen, das Backen und das Reifen, mit einer Spalte für Ihre eigene Charge und den Kontrollen, wenn Schalen misslingen.',
    lead: 'Ein druckbares Blatt, das dem VERY AQUAFABA Macaronrezept Schritt für Schritt folgt: {dose} g Aquafaba aufgeschlagen mit {sugar} g feinem Zucker, das Unterheben von {almond} g Mandelmehl und {icing_sugar} g Puderzucker, das Ruhen, das Backen bei {bake} °C für {bake_time} Minuten und die {mature} Stunden Reifen. Eine leere Spalte für das, was Sie tatsächlich getan haben, und darunter die Kontrollen für den Fall, dass die Schalen misslingen.',
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
      { see: 'Die Schalen variieren von Charge zu Charge', check: 'Die Aquafabakonzentration ist gedriftet', fix: 'Bei Industriechargen {concentration} g/ml halten' },
    ],
    sections: [
      {
        id: 'before',
        title: 'Vor dem Aufschlagen: alles andere zuerst',
        html: `<p>Aquafaba ersetzt nur die Eiweiße, Mandelmehl, Puderzucker und feiner Zucker Ihrer Rezeptur bleiben also, wie sie sind. Der Schaum muss zwei Schritte überstehen, das Unterheben und das Ruhen, das Timing zählt also mehr als das Aufschlagen selbst.</p>
<ul>
<li>Sieben Sie {almond} g Mandelmehl und {icing_sugar} g Puderzucker zusammen und stellen Sie sie beiseite. Legen Sie jetzt die Bleche aus. Eine Baisermasse, die steht, während die trockene Mischung oder die Bleche vorbereitet werden, fällt vor dem Aufspritzen zusammen.</li>
<li>Wiegen Sie {dose} g VERY AQUAFABA flüssig kalt ab, aus dem geöffneten Gebinde im Kühlschrank, in eine saubere, fettfreie Schüssel. Angerührtes Pulver wird genauso gekühlt.</li>
<li>Wiegen Sie {sugar} g feinen Zucker und den Weinstein ab.</li>
</ul>`,
      },
      {
        id: 'whipping',
        title: 'Aufschlagen, Unterheben, Aufspritzen und Ruhen',
        html: `<p>Schlagen Sie das Aquafaba auf hoher Stufe zu weichen Spitzen auf. Geben Sie den Weinstein dazu, dann die {sugar} g feinen Zucker nach und nach, bis zu glänzenden, festen Spitzen. Heben Sie die trockene Mischung in drei Portionen unter und hören Sie auf, wenn die Masse in dicken, langsamen Bändern vom Spatel läuft: darüber hinaus oder zu grob untergehoben, verlieren die Schalen ihre Höhe.</p>
<p>Spritzen Sie Kreise von 3 bis 4 cm auf Backpapier, gleichmäßig verteilt. Lassen Sie sie bei Raumtemperatur ruhen, bis sich eine trockene Haut bildet: {rest} Minuten, je nach Luftfeuchtigkeit. In einem feuchten Raum länger ruhen lassen und nach dem Tastgefühl urteilen, nicht nach der Uhr.</p>
<p>Industriechargen? Halten Sie die Aquafabakonzentration bei {concentration} g/ml, damit die Schalen von Durchgang zu Durchgang gleich ausfallen.</p>`,
      },
      {
        id: 'baking',
        title: 'Backen, Reifen und Lagern',
        html: `<p>Backen Sie bei {bake} °C ohne Umluft für {bake_time} Minuten. Lassen Sie sie auf dem Blech vollständig auskühlen, bevor Sie sie anfassen. Setzen Sie sie zusammen, füllen Sie sie und kühlen Sie sie {mature} Stunden vor dem Servieren, damit sich die Textur entwickelt. Eine Charge ergibt {yield}.</p>
<p>Die Schalen ziehen Feuchtigkeit aus der Luft und werden weich, lagern Sie sie also an einem Ort mit niedriger Luftfeuchtigkeit. Das geöffnete Flüssiggebinde teilt sich den Kühlschrank mit den reifenden Macarons: Notieren Sie das Öffnungsdatum darauf, denn es wird innerhalb von {opened_days} Tagen bei höchstens {opened_temp} °C verbraucht. Ungeöffnet halten beide Formate mindestens {unopened_months} Monate bei Raumtemperatur.</p>`,
      },
    ],
    faq: [
      { q: 'Warum ist die Baisermasse vor dem Aufspritzen zusammengefallen?', a: 'Sie stand, während die trockene Mischung oder die Bleche vorbereitet wurden. Sieben Sie Mandelmehl und Puderzucker und legen Sie die Bleche zuerst aus, und schlagen Sie zuletzt auf.' },
      { q: 'Warum haben die Schalen ihre Höhe verloren?', a: 'Die Masse wurde über das Bandstadium hinaus oder zu grob untergehoben. Heben Sie in drei Portionen unter und hören Sie auf, wenn sie in dicken, langsamen Bändern vom Spatel läuft.' },
      { q: 'Nach dem Ruhen hat sich keine Haut gebildet. Was tue ich?', a: 'Der Raum ist feucht. Lassen Sie länger ruhen als die {rest} Minuten der Referenz und urteilen Sie nach dem Tastgefühl, nicht nach der Uhr.' },
      { q: 'Warum variieren die Schalen von Charge zu Charge?', a: 'Die Aquafabakonzentration ist gedriftet. Halten Sie sie bei Industriechargen bei {concentration} g/ml.' },
      { q: 'Gilt das Blatt auch für das Pulver?', a: 'Ja. Rühren Sie {powder_dose} g Pulver mit {water_dose} ml Wasser an, kühlen Sie es und beginnen Sie bei Schritt 2. Die Regel pro Eiweiß: {white_powder} g Pulver + {white_water} ml Wasser = {white_total} g Aquafaba, entspricht derselben Masse an flüssigem Aquafaba.' },
      { q: 'Kann ich dieses Blatt mit einer technischen Frage schicken?', a: 'Ja. Füllen Sie die Spalte Ihrer Charge aus, notieren Sie, was Sie gesehen haben, und beschreiben Sie es über unser [Kontaktformular]({contact_href}) oder das Anfrageformular für Profis auf dieser Seite.' },
    ],
  },
};
