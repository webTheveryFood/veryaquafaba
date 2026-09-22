// Prozessblatt, Deutsch. Gleiche Struktur, gleiche {tokens} und gleiche HTML-Tags wie
// process.en.js (geprüft von scripts/applications/check-guides.mjs). Kein Gedankenstrich.
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
};
