// Mengenrechner, Deutsch. Gleiche Struktur, gleiche {tokens} und gleiche HTML-Tags wie
// calculator.en.js (geprüft von scripts/applications/check-guides.mjs). Kein Gedankenstrich.
export default {
  meringue: {
    title: 'Mengenrechner für Aquafaba-Baiser - VERY AQUAFABA',
    h1: 'Wie viel Aquafaba für Baiser? Der Mengenrechner',
    description: 'Skalieren Sie das VERY AQUAFABA Baiserrezept auf beliebig viele Chargen oder Baisers: flüssiges Aquafaba, Zucker sowie die Entsprechung in Pulver und Wasser, nach dem veröffentlichten Rezept.',
    lead: 'Eine Charge des VERY AQUAFABA Baiserrezepts braucht {dose} g flüssiges Aquafaba und {sugar} g Zucker und ergibt {yield}. Geben Sie ein, wie viele Chargen oder wie viele Baisers Sie brauchen, und der Rechner skaliert Aquafaba, Zucker und die Entsprechung in Pulver und Wasser für Sie.',
    example: { batches: 5 },
    sections: [
      {
        id: 'reference',
        title: 'Die Referenzcharge aus dem Rezept',
        html: `<p>Jede Zahl auf dieser Seite geht vom selben Ausgangspunkt aus: dem Baiserrezept, das auf dieser Website veröffentlicht ist. Es verlangt {dose} g VERY AQUAFABA flüssig, aufgeschlagen mit {sugar} g feinem Zucker, und ergibt {yield} von 3 bis 4 cm. Diese eine Charge ersetzt {eggs} Eiweiße, denn {white_liquid} g flüssiges Aquafaba stehen für ein Eiweiß.</p>
<p>In Pulver entspricht dieselbe Charge {powder_dose} g VERY AQUAFABA Pulver, angerührt mit {water_dose} ml Wasser. Dahinter steht die Regel, die auf jedem Leitfaden steht: {white_powder} g Pulver + {white_water} ml Wasser = {white_total} g Aquafaba, dieselbe Masse wie flüssig, und {white_powder} g Pulver ersetzen ein Eiweiß.</p>
<p>Der optionale Stabilisator, 2 g Weinstein oder 1 g Zitronensäure pro Charge, skaliert ebenfalls mit der Charge. Er steht nicht im Rechner, weil viele Küchen ohne ihn arbeiten.</p>`,
      },
      {
        id: 'scaling',
        title: 'Was mitwächst und was nicht',
        html: `<p>Aquafaba, Zucker, Pulver und Wasser wachsen linear mit: doppelt so viele Baisers, doppelt so viel von jedem. Drei Dinge tun das nicht.</p>
<ul>
<li>Die Aufschlagzeit. Die Referenzcharge erreicht in {whip} Minuten auf hoher Stufe weiche Spitzen. Eine vollere Schüssel braucht länger, beurteilen Sie den Schaum also nach den Spitzen, nicht nach der Uhr.</li>
<li>Das Trocknen. Die Bleche trocknen bei {bake} °C ohne Umluft für {bake_time} Stunden, unabhängig von der Chargengröße. Mehr Baisers bedeuten mehr Bleche, nicht einen heißeren Ofen.</li>
<li>Die Temperatur. Das Aquafaba kommt mit {chill} °C in die Schüssel, und angerührtes Pulver wird auf denselben Punkt gekühlt, für eine Charge wie für zehn.</li>
</ul>
<p>Schlagen Sie auf, was Ihre Rührschüssel bequem fasst, und spritzen Sie jede Schüssel sofort aus: Aquafabaschaum verliert Volumen, wenn er steht, während die nächste Schüssel läuft.</p>`,
      },
      {
        id: 'packs',
        title: 'Wie viele Chargen ein Gebinde ergibt',
        html: `<p>Sobald Sie Ihre Chargenzahl kennen, ergibt sich das Gebinde von selbst.</p>
<table class="va-guide-grid">
<thead><tr><th scope="col">Gebinde</th><th scope="col">Chargen</th><th scope="col">Baisers, ca.</th></tr></thead>
<tbody>
<tr><td data-label="Gebinde">1 L Tetrapak flüssig</td><td data-label="Chargen">{batches_1l}</td><td data-label="Baisers, ca.">{pieces_1l}</td></tr>
<tr><td data-label="Gebinde">10 L Bag-in-Box flüssig</td><td data-label="Chargen">{batches_10l}</td><td data-label="Baisers, ca.">{pieces_10l}</td></tr>
<tr><td data-label="Gebinde">200 g Beutel Pulver</td><td data-label="Chargen">{batches_200g}</td><td data-label="Baisers, ca.">{pieces_200g}</td></tr>
<tr><td data-label="Gebinde">3 kg Sack Pulver</td><td data-label="Chargen">{batches_3kg}</td><td data-label="Baisers, ca.">{pieces_3kg}</td></tr>
</tbody>
</table>
<p>Flüssig oder Pulver ist eine eigene Entscheidung, die im <a href="{guide_href}">Baiser-Leitfaden</a> fällt: Sie hängt davon ab, wie oft Sie den Ofen füllen, und von den {opened_days} Tagen, die ein geöffnetes Flüssiggebinde im Kühlschrank hält.</p>`,
      },
      {
        id: 'example',
        title: 'Rechenbeispiel: {ex_pieces} Baisers für eine Veranstaltung',
        html: `<p>Eine Patisserie braucht {ex_pieces} kleine Baisers für ein Buffet. Das sind {ex_batches} Chargen des Referenzrezepts.</p>
<ul>
<li>Flüssig: {ex_dose} g VERY AQUAFABA und {ex_sugar} g feiner Zucker, als Ersatz für {ex_eggs} Eiweiße.</li>
<li>Pulver: {ex_powder} g Pulver, angerührt mit {ex_water} ml Wasser, dann dieselben {ex_sugar} g Zucker.</li>
<li>Ofen: {ex_batches} Chargen, gespritzt auf 3 bis 4 cm, füllen mehrere Bleche, und jedes Blech trocknet die vollen {bake_time} Stunden bei {bake} °C.</li>
</ul>
<p>In einem Durchgang aufgeschlagen braucht diese Menge eine große Planetenrührmaschine. In einer Tischmaschine schlagen Sie sie als {ex_batches} getrennte Chargen auf und spritzen jede aus, bevor die nächste beginnt.</p>`,
      },
    ],
    faq: [
      { q: 'Wie viele Baisers ergibt eine Charge?', a: '{yield} von 3 bis 4 cm, aus {dose} g Aquafaba und {sugar} g Zucker. Spritzen Sie kleiner, steigt die Stückzahl; die Mengen bleiben gleich.' },
      { q: 'Wie viel Aquafaba ersetzt ein Eiweiß?', a: '{white_liquid} g flüssig oder {white_powder} g Pulver, angerührt mit {white_water} ml Wasser. Eine Charge Baiser ersetzt {eggs} Eiweiße.' },
      { q: 'Kann ich die Charge halbieren?', a: 'Ja. {half_dose} g Aquafaba und {half_sugar} g Zucker ergeben etwa {half_yield} Baisers. Eine kleine Menge in einer großen Schüssel braucht länger zum Aufschlagen, nehmen Sie also die kleinste Schüssel Ihrer Maschine.' },
      { q: 'Braucht eine doppelte Charge die doppelte Aufschlagzeit?', a: 'Nein. Sie braucht mehr Zeit als eine einfache Charge, aber nicht doppelt so viel. Schlagen Sie bis zu weichen Spitzen, die bei der Referenzcharge {whip} Minuten dauern, und geben Sie den Zucker erst dann dazu.' },
      { q: 'Wie viel Wasser gebe ich zum Pulver?', a: '{white_water} ml auf je {white_powder} g Pulver. Für eine Charge Baiser sind das {powder_dose} g Pulver und {water_dose} ml Wasser; der Rechner skaliert beides.' },
      { q: 'Woher kommt die Zuckermenge?', a: 'Aus dem Baiserrezept auf dieser Website: gleiche Gewichte, {sugar} g Zucker auf {dose} g Aquafaba. Die vollständige Methode steht im [Baiserrezept]({recipe_href}).' },
    ],
  },
};
