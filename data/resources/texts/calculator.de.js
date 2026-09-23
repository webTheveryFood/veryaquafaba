// Mengenrechner, Deutsch. Gleiche Struktur, gleiche {tokens} und gleiche HTML-Tags wie
// calculator.en.js (geprüft von scripts/applications/check-guides.mjs). Kein Gedankenstrich.
// Formulierungen und Zahlen folgen den Leitfäden und Rezepten der Website.
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

  'chocolate-mousse': {
    title: 'Mengenrechner für Aquafaba-Schokoladenmousse - VERY AQUAFABA',
    h1: 'Wie viel Aquafaba für Schokoladenmousse? Der Mengenrechner',
    description: 'Skalieren Sie das VERY AQUAFABA Rezept für Schokoladenmousse auf beliebig viele Portionen oder Chargen: flüssiges Aquafaba, Zucker, dunkle Schokolade sowie die Entsprechung in Pulver und Wasser.',
    lead: 'Eine Charge des VERY AQUAFABA Rezepts für Schokoladenmousse braucht {dose} g flüssiges Aquafaba, {sugar} g Zucker und {chocolate} g dunkle Schokolade und ergibt {yield}. Geben Sie ein, wie viele Portionen oder wie viele Chargen Sie brauchen, und der Rechner skaliert alle vier Mengen plus die Entsprechung in Pulver und Wasser.',
    example: { batches: 5 },
    sections: [
      {
        id: 'reference',
        title: 'Die Referenzcharge aus dem Rezept',
        html: `<p>Der Ausgangspunkt ist das Rezept für Schokoladenmousse auf dieser Website: {dose} g VERY AQUAFABA flüssig, {sugar} g feiner Zucker und {chocolate} g dunkle Kuvertüre, für {yield}. Das aufgeschlagene Aquafaba ersetzt sowohl die Eiweiße als auch die Sahne, eine Charge steht also für {eggs} Eiweiße, bei {white_liquid} g flüssig pro Eiweiß.</p>
<p>In Pulver entspricht dieselbe Charge {powder_dose} g VERY AQUAFABA Pulver, angerührt mit {water_dose} ml Wasser: {white_powder} g Pulver + {white_water} ml Wasser = {white_total} g Aquafaba, dieselbe Masse wie flüssig, und {white_powder} g Pulver ersetzen ein Eiweiß.</p>
<p>Der optionale Stabilisator, 2 g Weinstein oder 1 g Zitronensäure pro Charge, skaliert mit der Charge und bleibt im Rechner außen vor.</p>`,
      },
      {
        id: 'scaling',
        title: 'Was mitwächst und was nicht',
        html: `<p>Aquafaba, Zucker, Schokolade, Pulver und Wasser wachsen linear mit. Die beiden Temperaturen und die Kühlzeit nicht.</p>
<ul>
<li>Die Schokolade wird auf 45 bis 50 °C geschmolzen und vor dem Unterheben auf {fold_temp} °C abgekühlt, für eine Charge wie für zehn. Schokolade über {fold_temp} °C schmilzt den Schaum.</li>
<li>Das Aufschlagen bis zu weichen Spitzen dauert bei der Referenzcharge etwa {whip} Minuten; eine vollere Schüssel braucht länger, beurteilen Sie also nach den Spitzen.</li>
<li>Die Mousse steht mindestens {set_time} Stunden im Kühlschrank, unabhängig von der Charge, und hält {keep} Tage.</li>
</ul>
<p>Große Chargen? Emulgieren Sie zuerst einen Teil der Schokolade mit etwas Aquafaba und heben Sie dann den restlichen Schaum unter. So bleiben große Durchgänge homogen.</p>`,
      },
      {
        id: 'packs',
        title: 'Wie viele Chargen ein Gebinde ergibt',
        html: `<p>Sobald Sie Ihre Chargenzahl kennen, ergibt sich das Gebinde von selbst.</p>
<table class="va-guide-grid">
<thead><tr><th scope="col">Gebinde</th><th scope="col">Chargen</th><th scope="col">Portionen, ca.</th></tr></thead>
<tbody>
<tr><td data-label="Gebinde">1 L Tetrapak flüssig</td><td data-label="Chargen">{batches_1l}</td><td data-label="Portionen, ca.">{pieces_1l}</td></tr>
<tr><td data-label="Gebinde">10 L Bag-in-Box flüssig</td><td data-label="Chargen">{batches_10l}</td><td data-label="Portionen, ca.">{pieces_10l}</td></tr>
<tr><td data-label="Gebinde">200 g Beutel Pulver</td><td data-label="Chargen">{batches_200g}</td><td data-label="Portionen, ca.">{pieces_200g}</td></tr>
<tr><td data-label="Gebinde">3 kg Sack Pulver</td><td data-label="Chargen">{batches_3kg}</td><td data-label="Portionen, ca.">{pieces_3kg}</td></tr>
</tbody>
</table>
<p>Flüssig oder Pulver entscheidet der <a href="{guide_href}">Leitfaden zur Schokoladenmousse</a>: Es hängt davon ab, wie oft Sie Mousse machen, und von den {opened_days} Tagen, die ein geöffnetes Flüssiggebinde im Kühlschrank hält.</p>`,
      },
      {
        id: 'example',
        title: 'Rechenbeispiel: {ex_pieces} Portionen für ein Bankett',
        html: `<p>Eine Küche braucht {ex_pieces} Portionen Mousse für ein Bankett. Das sind {ex_batches} Chargen des Referenzrezepts.</p>
<ul>
<li>Flüssig: {ex_dose} g VERY AQUAFABA, {ex_sugar} g feiner Zucker und {ex_chocolate} g dunkle Schokolade, als Ersatz für {ex_eggs} Eiweiße.</li>
<li>Pulver: {ex_powder} g Pulver, angerührt mit {ex_water} ml Wasser, dann derselbe Zucker und dieselbe Schokolade.</li>
<li>Kühlschrank: {ex_pieces} Becher brauchen vor dem Service mindestens {set_time} Stunden Kühlplatz.</li>
</ul>
<p>Lassen Sie die gesamte Schokolade auf {fold_temp} °C abkühlen, bevor die erste Schüssel aufgeschlagen wird: Der Schaum darf nicht auf sie warten.</p>`,
      },
    ],
    faq: [
      { q: 'Wie viele Portionen ergibt eine Charge?', a: '{yield}, aus {dose} g Aquafaba, {sugar} g Zucker und {chocolate} g dunkler Schokolade. Kleinere Becher ergeben mehr Portionen; die Mengen bleiben gleich.' },
      { q: 'Wie viel Aquafaba ersetzt ein Eiweiß?', a: '{white_liquid} g flüssig oder {white_powder} g Pulver, angerührt mit {white_water} ml Wasser. Eine Charge Mousse ersetzt {eggs} Eiweiße und die Sahne.' },
      { q: 'Kann ich die Charge halbieren?', a: 'Ja. {half_dose} g Aquafaba, {half_sugar} g Zucker und {half_chocolate} g Schokolade ergeben etwa {half_yield} Portionen. Nehmen Sie für eine kleine Menge die kleinste Schüssel Ihrer Maschine.' },
      { q: 'Ändert sich die Schokoladentemperatur mit der Chargengröße?', a: 'Nein. Kühlen Sie sie vor dem Unterheben auf {fold_temp} °C, egal bei welcher Menge. Schokolade über {fold_temp} °C schmilzt den Schaum, und die Mousse fällt beim Unterheben zusammen.' },
      { q: 'Wie viel Wasser gebe ich zum Pulver?', a: '{white_water} ml auf je {white_powder} g Pulver. Für eine Charge Mousse sind das {powder_dose} g Pulver und {water_dose} ml Wasser; der Rechner skaliert beides.' },
      { q: 'Woher kommen die Mengen für Schokolade und Zucker?', a: 'Aus dem Rezept für Schokoladenmousse auf dieser Website: {chocolate} g dunkle Kuvertüre und {sugar} g feiner Zucker auf {dose} g Aquafaba. Die vollständige Methode steht im [Rezept für Schokoladenmousse]({recipe_href}).' },
    ],
  },

  mayonnaise: {
    title: 'Vegane Mayonnaise mit Aquafaba: Mengenrechner - VERY AQUAFABA',
    h1: 'Wie viel Aquafaba für vegane Mayonnaise? Der Mengenrechner',
    description: 'Skalieren Sie das VERY AQUAFABA Mayonnaiserezept auf die Gramm Mayonnaise oder die Chargen, die Sie brauchen: Aquafaba, Öl, Senf, Salz, Zitronensaft sowie die Entsprechung in Pulver und Wasser.',
    lead: 'Eine Charge des VERY AQUAFABA Mayonnaiserezepts braucht {dose} g flüssiges Aquafaba und {oil} g Öl und ergibt {yield} Mayonnaise. Geben Sie ein, wie viele Gramm Mayonnaise oder wie viele Chargen Sie brauchen, und der Rechner skaliert Aquafaba, Öl, Senf, Salz, Zitronensaft und die Entsprechung in Pulver und Wasser.',
    example: { batches: 4 },
    sections: [
      {
        id: 'reference',
        title: 'Die Referenzcharge aus dem Rezept',
        html: `<p>Der Ausgangspunkt ist das Mayonnaiserezept auf dieser Website: {dose} g VERY AQUAFABA flüssig, {mustard} g Dijon-Senf, {salt} g Salz, {oil} g neutrales Öl und {lemon} g Zitronensaft oder Weißweinessig, für {yield}. Hier steht Aquafaba für das Eigelb, nicht für das Eiweiß: Nichts wird aufgeschlagen, es ist eine kalte Emulsion, die mit Scherkraft aufgebaut wird. Das Verhältnis von Öl zu Aquafaba beträgt {oil_ratio} nach Gewicht.</p>
<p>In Pulver entspricht dieselbe Charge {powder_dose} g VERY AQUAFABA Pulver, angerührt mit {water_dose} ml Wasser, auf einer Feinwaage: {white_powder} g Pulver + {white_water} ml Wasser = {white_total} g Aquafaba, dieselbe Masse wie flüssig.</p>`,
      },
      {
        id: 'scaling',
        title: 'Was mitwächst und was nicht',
        html: `<p>Aquafaba, Öl, Senf, Salz, Zitronensaft, Pulver und Wasser wachsen linear mit. Zwei Dinge tun das nicht.</p>
<ul>
<li>Die Temperatur. Das Aquafaba kommt gekühlt hinein, mit {chill} °C, für eine Charge wie für zehn. Warmes Aquafaba gibt eine langsame, instabile Emulsion.</li>
<li>Die Scherkraft. Das Öl kommt als dünner, gleichmäßiger Strahl bei voller Mixergeschwindigkeit hinein. Große Chargen brauchen einen Hochleistungsmixer, um die Tröpfchengröße zu steuern und die Emulsion stabil zu halten.</li>
</ul>
<p>Hygienisch hergestellt und sofort gekühlt hält die Mayonnaise bis zu {keep} Tage im Kühlschrank, unabhängig von der Chargengröße.</p>`,
      },
      {
        id: 'packs',
        title: 'Wie viele Chargen ein Gebinde ergibt',
        html: `<p>Sobald Sie Ihre Chargenzahl kennen, ergibt sich das Gebinde von selbst.</p>
<table class="va-guide-grid">
<thead><tr><th scope="col">Gebinde</th><th scope="col">Chargen</th><th scope="col">Mayonnaise, ca.</th></tr></thead>
<tbody>
<tr><td data-label="Gebinde">1 L Tetrapak flüssig</td><td data-label="Chargen">{batches_1l}</td><td data-label="Mayonnaise, ca.">{pieces_1l} g</td></tr>
<tr><td data-label="Gebinde">10 L Bag-in-Box flüssig</td><td data-label="Chargen">{batches_10l}</td><td data-label="Mayonnaise, ca.">{pieces_10l} g</td></tr>
<tr><td data-label="Gebinde">200 g Beutel Pulver</td><td data-label="Chargen">{batches_200g}</td><td data-label="Mayonnaise, ca.">{pieces_200g} g</td></tr>
<tr><td data-label="Gebinde">3 kg Sack Pulver</td><td data-label="Chargen">{batches_3kg}</td><td data-label="Mayonnaise, ca.">{pieces_3kg} g</td></tr>
</tbody>
</table>
<p>Flüssig oder Pulver entscheidet der <a href="{guide_href}">Leitfaden zur veganen Mayonnaise</a>: Es hängt davon ab, wie oft Sie Mayonnaise machen, und von den {opened_days} Tagen, die ein geöffnetes Flüssiggebinde im Kühlschrank hält.</p>`,
      },
      {
        id: 'example',
        title: 'Rechenbeispiel: {ex_batches} Chargen für eine Gemeinschaftsküche',
        html: `<p>Eine Küche braucht für die Woche etwa {ex_pieces} g Mayonnaise. Das sind {ex_batches} Chargen des Referenzrezepts.</p>
<ul>
<li>Flüssig: {ex_dose} g VERY AQUAFABA, {ex_oil} g Öl, {ex_mustard} g Senf, {ex_salt} g Salz und {ex_lemon} g Zitronensaft oder Essig, so viel Aquafaba wie für {ex_eggs} Eiweiße.</li>
<li>Pulver: {ex_powder} g Pulver, angerührt mit {ex_water} ml Wasser, dann dasselbe Öl, derselbe Senf, dasselbe Salz und dieselbe Zitrone.</li>
<li>Gerät: Bei dieser Menge wechseln Sie zum Hochleistungsmixer und lassen das Öl als dünnen, gleichmäßigen Strahl einlaufen.</li>
</ul>
<p>In saubere Behälter umfüllen und sofort kühlen: Dort beginnen die {keep} Tage Haltbarkeit.</p>`,
      },
    ],
    faq: [
      { q: 'Wie viel Mayonnaise ergibt eine Charge?', a: '{yield}, aus {dose} g Aquafaba und {oil} g Öl. Geben Sie die Gramm ein, die Sie brauchen, und der Rechner nennt die Chargen und jede Zutat.' },
      { q: 'Wie viel Aquafaba ersetzt das Ei in der Mayonnaise?', a: 'In diesem Rezept steht Aquafaba für das Eigelb: {dose} g flüssig auf {oil} g Öl, ein Verhältnis von {oil_ratio} nach Gewicht. In Pulver {powder_dose} g, angerührt mit {water_dose} ml Wasser.' },
      { q: 'Kann ich die Charge halbieren?', a: 'Ja. {half_dose} g Aquafaba und {half_oil} g Öl ergeben etwa {half_yield} g Mayonnaise. Nehmen Sie ein hohes, schmales Gefäß, damit der Stabmixer bei einer kleinen Menge die Scherkraft hoch hält.' },
      { q: 'Darf das Öl bei einer großen Charge schneller einlaufen?', a: 'Nein. Das Öl läuft immer als dünner, gleichmäßiger Strahl bei voller Mixergeschwindigkeit ein. Wenn die Emulsion nie beginnt, kam das Öl zu schnell oder die Scherkraft war zu gering.' },
      { q: 'Wie viel Wasser gebe ich zum Pulver?', a: '{white_water} ml auf je {white_powder} g Pulver. Für eine Charge Mayonnaise sind das {powder_dose} g Pulver und {water_dose} ml Wasser, auf einer Feinwaage gewogen; der Rechner skaliert beides.' },
      { q: 'Woher kommen die Mengen für Öl und Senf?', a: 'Aus dem Mayonnaiserezept auf dieser Website: {oil} g neutrales Öl, {mustard} g Dijon-Senf, {salt} g Salz und {lemon} g Zitronensaft oder Essig auf {dose} g Aquafaba. Die vollständige Methode steht im [Mayonnaiserezept]({recipe_href}).' },
    ],
  },

  baking: {
    title: 'Aquafaba-Rechner für den Ei-Ersatz beim Backen - VERY AQUAFABA',
    h1: 'Wie viel Aquafaba ersetzt die Eier in Ihrem Gebäck? Der Ersatzrechner',
    description: 'Geben Sie die ganzen Eier, Eiweiße und Eigelbe Ihres Rezepts ein und erhalten Sie das VERY AQUAFABA flüssig oder Pulver, das sie ersetzt, nach den Entsprechungen der Produktseite.',
    lead: 'Beim Backen gibt es keine einzelne Dosierung: Die Menge folgt den Eiern Ihres eigenen Rezepts. {egg_liquid} g VERY AQUAFABA flüssig ersetzen ein ganzes Ei und {white_liquid} g ein Eiweiß. Geben Sie die Eier Ihrer Rezeptur ein, und der Rechner nennt das Flüssige, das Pulver mit seinem Wasser und das Öl, das beim Ersatz von Eigelb dazukommt.',
    example: { eggs: 3, whites: 2 },
    sections: [
      {
        id: 'rule',
        title: 'Die Entsprechungen hinter dem Rechner',
        html: `<p>Die Zahlen stammen von der Produktseite und aus dem Back-Leitfaden dieser Website. Ein ganzes Ei = {egg_liquid} g flüssiges Aquafaba. Ein Eiweiß = {white_liquid} g flüssig oder {white_powder} g Pulver, angerührt mit {white_water} ml Wasser ({white_total} g Aquafaba). Ein Eigelb = {yolk_liquid} g Aquafaba plus {yolk_oil} g Öl.</p>
<p>Das Pulver für ein ganzes Ei folgt demselben Verhältnis: {egg_powder} g Pulver, angerührt mit {egg_water} ml Wasser. Der Rechner wendet diese vier Entsprechungen auf die eingegebenen Eier an und zählt sie zusammen.</p>`,
      },
      {
        id: 'how',
        title: 'Wie das Aquafaba ins Gebäck kommt',
        html: `<p>Aquafaba erledigt beim Backen drei Aufgaben: Es bindet Luft, es bindet, und es hält Feuchtigkeit. Deshalb arbeitet es auf zwei Arten. Schlagen Sie es auf, wenn es Eiweiße ersetzt. Gießen Sie es so hinein, wie es ist, wenn es die Bindung und Feuchtigkeit ganzer Eier ersetzt.</p>
<ul>
<li>Biskuit und Genoise: bei {chill} °C aufgeschlagen, dann behutsam und zügig untergehoben.</li>
<li>Kuchen, Cookies und Muffins: mit dem Zucker gemischt, bevor es auf das Fett trifft.</li>
<li>Cookies und Brownies: direkt zugegeben, nicht aufgeschlagen, für Bindung und Feuchtigkeit.</li>
<li>Brioche und süße Brötchen: nicht aufgeschlagen, mit den Flüssigkeiten des Teigs.</li>
</ul>
<p>Ganze Eier ersetzen? Aquafaba bringt mehr Wasser mit als Ei. Reduzieren Sie Milch oder Wasser leicht oder erhöhen Sie die trockenen Zutaten, und backen Sie vollständig durch. Nur die Eiweiße zu ersetzen braucht normalerweise keine Anpassung. Der <a href="{guide_href}">Back-Leitfaden</a> geht jeden Fall einzeln durch.</p>`,
      },
      {
        id: 'packs',
        title: 'Wie viele Eier ein Gebinde ersetzt',
        html: `<p>Sobald Sie wissen, wie viele Eier Ihre Produktion ersetzt, ergibt sich das Gebinde von selbst.</p>
<table class="va-guide-grid">
<thead><tr><th scope="col">Gebinde</th><th scope="col">Ganze Eier</th><th scope="col">Eiweiße</th></tr></thead>
<tbody>
<tr><td data-label="Gebinde">1 L Tetrapak flüssig</td><td data-label="Ganze Eier">{eggs_1l}</td><td data-label="Eiweiße">{whites_1l}</td></tr>
<tr><td data-label="Gebinde">10 L Bag-in-Box flüssig</td><td data-label="Ganze Eier">{eggs_10l}</td><td data-label="Eiweiße">{whites_10l}</td></tr>
<tr><td data-label="Gebinde">200 g Beutel Pulver</td><td data-label="Ganze Eier">{eggs_200g}</td><td data-label="Eiweiße">{whites_200g}</td></tr>
<tr><td data-label="Gebinde">3 kg Sack Pulver</td><td data-label="Ganze Eier">{eggs_3kg}</td><td data-label="Eiweiße">{whites_3kg}</td></tr>
</tbody>
</table>
<p>Ungeöffnet halten beide Formate mindestens {unopened_months} Monate bei Raumtemperatur. Ein geöffnetes Flüssiggebinde hält {opened_days} Tage im Kühlschrank; ein geöffneter Pulverbeutel muss nur trocken und verschlossen bleiben.</p>`,
      },
      {
        id: 'example',
        title: 'Rechenbeispiel: ein Rezept mit {ex_eggs} Eiern und {ex_whites} Eiweißen',
        html: `<p>Eine Kuchenrezeptur verlangt {ex_eggs} ganze Eier und {ex_whites} Eiweiße.</p>
<ul>
<li>Flüssig: insgesamt {ex_liquid} g VERY AQUAFABA. Der Anteil der Eiweiße wird bei {chill} °C aufgeschlagen; der Anteil der ganzen Eier kommt so hinein, wie er ist, mit dem Zucker vor dem Fett.</li>
<li>Pulver: {ex_powder} g Pulver, angerührt mit {ex_water} ml Wasser, dann genauso verwendet.</li>
<li>Anpassung: Die ganzen Eier werden getauscht, also Milch oder Wasser leicht reduzieren oder trockene Zutaten zugeben und vollständig durchbacken.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'Wie viel Aquafaba ersetzt ein ganzes Ei?', a: '{egg_liquid} g VERY AQUAFABA flüssig oder {egg_powder} g Pulver, angerührt mit {egg_water} ml Wasser. Ganze Eier bringen Wasser mit, reduzieren Sie also die anderen Flüssigkeiten leicht.' },
      { q: 'Wie viel Aquafaba ersetzt ein Eiweiß?', a: '{white_liquid} g flüssig oder {white_powder} g Pulver, angerührt mit {white_water} ml Wasser. Nur die Eiweiße zu ersetzen braucht normalerweise keine weitere Anpassung.' },
      { q: 'Kann Aquafaba das Eigelb ersetzen?', a: 'Für Bindung und Fülle stehen {yolk_liquid} g Aquafaba plus {yolk_oil} g Öl für ein Eigelb. Der Rechner fügt das Öl hinzu, wenn Sie Eigelbe eingeben.' },
      { q: 'Aufschlagen oder einfach hineingießen?', a: 'Aufschlagen, gekühlt auf {chill} °C, wenn es Eiweiße in einem Biskuit oder einem zuckerreichen Teig ersetzt. Nicht aufgeschlagen hineingießen, wenn es die Bindung und Feuchtigkeit ganzer Eier in Cookies, Brownies und Teigen ersetzt.' },
      { q: 'Warum ist mein Teig nach dem Eiertausch zu flüssig?', a: 'Ganze Eier wurden eins zu eins getauscht und das Wasser nicht reduziert. Reduzieren Sie Milch oder Wasser leicht oder geben Sie trockene Zutaten dazu, und backen Sie vollständig durch.' },
      { q: 'Woher stammen diese Entsprechungen?', a: 'Von der Produktseite und aus dem [Leitfaden zum Backen mit Aquafaba]({recipe_href}) auf dieser Website: {egg_liquid} g pro ganzem Ei, {white_liquid} g pro Eiweiß und {white_powder} g Pulver pro Eiweiß.' },
    ],
  },

  cocktails: {
    title: 'Aquafaba-Mengenrechner für Cocktails: Sours pro Gebinde - VERY AQUAFABA',
    h1: 'Wie viel Aquafaba pro Cocktail und pro Service? Der Mengenrechner',
    description: 'Skalieren Sie den VERY AQUAFABA Whiskey Sour auf die Cocktailzahl Ihres Service: Aquafaba pro Drink, Whiskey, Zitrone und Sirup sowie die Entsprechung in Pulver und Wasser.',
    lead: 'Ein Aquafaba Sour braucht {dose} g gekühltes VERY AQUAFABA flüssig anstelle des Eiweißes, mit {whiskey} ml Whiskey, {lemon_juice} ml Zitronensaft und {syrup} ml Zuckersirup. Geben Sie die Cocktailzahl Ihres Service ein, und der Rechner skaliert das Aquafaba, die drei anderen Zutaten und die Entsprechung in Pulver und Wasser.',
    example: { batches: 40 },
    sections: [
      {
        id: 'reference',
        title: 'Der Referenzdrink aus dem Rezept',
        html: `<p>Der Ausgangspunkt ist das Whiskey-Sour-Rezept auf dieser Website: {whiskey} ml Whiskey, {lemon_juice} ml frischer Zitronensaft, {syrup} ml Zuckersirup und {dose} g gekühltes VERY AQUAFABA, für {yield}. In Ihrem Rezept ändert sich nur eine Zutat: Aquafaba ersetzt das Eiweiß.</p>
<p>In Pulver entspricht ein Drink {powder_dose} g VERY AQUAFABA Pulver, angerührt mit {water_dose} ml Wasser. Die Regel pro Eiweiß: {white_powder} g Pulver + {white_water} ml Wasser = {white_total} g Aquafaba, dieselbe Masse wie flüssig. Vor dem Service anrühren und kühlen.</p>`,
      },
      {
        id: 'scaling',
        title: 'Was mitwächst und was nicht',
        html: `<p>Aquafaba, Whiskey, Zitrone, Sirup, Pulver und Wasser wachsen linear mit der Zahl der Drinks. Das Schütteln nicht.</p>
<ul>
<li>Jeder Drink wird auf Bestellung geschüttelt: ein Dry Shake von {dry_shake} Sekunden ohne Eis, in dem der Schaum entsteht, dann {wet_shake} Sekunden mit Eis zum Kühlen und Verdünnen.</li>
<li>Viel los? Whiskey, Zitrone und Sirup vorab batchen. Das Aquafaba kommt beim Schütteln dazu, nie in den Batch: Aquafaba im Vorbatch gibt bis zur Mitte des Service keine Höhe mehr.</li>
<li>Wiegen oder jiggern Sie jedes Mal {dose} g. Freies Ausgießen macht die Drinks ungleichmäßig.</li>
</ul>`,
      },
      {
        id: 'packs',
        title: 'Wie viele Cocktails ein Gebinde ergibt',
        html: `<p>Sobald Sie Ihre Zahl an Sours pro Woche kennen, ergibt sich das Gebinde von selbst.</p>
<table class="va-guide-grid">
<thead><tr><th scope="col">Gebinde</th><th scope="col">Cocktails</th></tr></thead>
<tbody>
<tr><td data-label="Gebinde">1 L Tetrapak flüssig</td><td data-label="Cocktails">{batches_1l}</td></tr>
<tr><td data-label="Gebinde">10 L Bag-in-Box flüssig</td><td data-label="Cocktails">{batches_10l}</td></tr>
<tr><td data-label="Gebinde">200 g Beutel Pulver</td><td data-label="Cocktails">{batches_200g}</td></tr>
<tr><td data-label="Gebinde">3 kg Sack Pulver</td><td data-label="Cocktails">{batches_3kg}</td></tr>
</tbody>
</table>
<p>Flüssig oder Pulver entscheidet der <a href="{guide_href}">Cocktail-Leitfaden</a>: Zählen Sie Ihre Sours. Ist ein geöffnetes 1 L Gebinde innerhalb von {opened_days} Tagen leer, gießt Flüssiges direkt in den Shaker; wenn nicht, verdirbt Pulver nach dem Öffnen des Beutels nicht.</p>`,
      },
      {
        id: 'example',
        title: 'Rechenbeispiel: {ex_batches} Sours in einem Service',
        html: `<p>Eine Bar schenkt an einem Samstagabend {ex_batches} Sours aus.</p>
<ul>
<li>Flüssig: {ex_dose} g VERY AQUAFABA, {ex_whiskey} ml Whiskey, {ex_lemon_juice} ml Zitronensaft und {ex_syrup} ml Zuckersirup.</li>
<li>Pulver: {ex_powder} g Pulver, vor dem Service mit {ex_water} ml Wasser angerührt und gekühlt.</li>
<li>Vorbatch: Whiskey, Zitrone und Sirup lassen sich vorab batchen; das Aquafaba kommt pro Drink beim Schütteln in den Shaker.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'Wie viel Aquafaba nehme ich pro Cocktail?', a: '{dose} g gekühltes Aquafaba pro Drink anstelle des Eiweißes. Ein 1 L Tetrapak ergibt {batches_1l} Cocktails, ein 200 g Beutel Pulver {batches_200g}.' },
      { q: 'Kann ich das Aquafaba mit der Basis batchen?', a: 'Nein. Batchen Sie nur Whiskey, Zitrone und Sirup und geben Sie das Aquafaba pro Drink beim Schütteln dazu. Aquafaba im Vorbatch verliert bis zur Mitte des Service seine Höhe.' },
      { q: 'Wie viel Wasser gebe ich zum Pulver?', a: '{white_water} ml auf je {white_powder} g Pulver. Für einen Drink sind das {powder_dose} g Pulver und {water_dose} ml Wasser; für einen Service skaliert der Rechner beides.' },
      { q: 'Ändert ein größerer Service das Schütteln?', a: 'Nein. Jeder Drink bekommt seinen Dry Shake von {dry_shake} Sekunden und sein Schütteln mit Eis von {wet_shake} Sekunden. Die Zahl der Drinks ändert den Vorrat, nicht die Methode.' },
      { q: 'Verändert Aquafaba den Geschmack des Drinks?', a: 'Nein. Es trägt den Schaum und das weiche Mundgefühl. Der Geschmack bleibt bei Ihrem Whiskey, Ihrer Zitrone und Ihrem Sirup.' },
      { q: 'Woher kommen die Mengen des Drinks?', a: 'Aus dem Whiskey-Sour-Rezept auf dieser Website: {whiskey} ml Whiskey, {lemon_juice} ml Zitronensaft, {syrup} ml Zuckersirup und {dose} g Aquafaba pro Drink. Die vollständige Methode steht im [Whiskey-Sour-Rezept]({recipe_href}).' },
    ],
  },

  macarons: {
    title: 'Mengenrechner für Aquafaba-Macarons - VERY AQUAFABA',
    h1: 'Wie viel Aquafaba für Macarons? Der Mengenrechner',
    description: 'Skalieren Sie das VERY AQUAFABA Macaronrezept auf beliebig viele Macarons oder Chargen: flüssiges Aquafaba, feiner Zucker, Mandelmehl, Puderzucker sowie die Entsprechung in Pulver und Wasser.',
    lead: 'Eine Charge des VERY AQUAFABA Macaronrezepts braucht {dose} g flüssiges Aquafaba, {sugar} g feinen Zucker, {almond} g Mandelmehl und {icing_sugar} g Puderzucker und ergibt {yield}. Geben Sie ein, wie viele Macarons oder wie viele Chargen Sie brauchen, und der Rechner skaliert alles, plus die Entsprechung in Pulver und Wasser.',
    example: { batches: 5 },
    sections: [
      {
        id: 'reference',
        title: 'Die Referenzcharge aus dem Rezept',
        html: `<p>Der Ausgangspunkt ist das Macaronrezept auf dieser Website: {dose} g VERY AQUAFABA flüssig, {sugar} g feiner Zucker, {almond} g extrafeines Mandelmehl und {icing_sugar} g Puderzucker, für {yield}. Aquafaba ersetzt nur die Eiweiße, Mandelmehl, Puderzucker und feiner Zucker Ihrer Rezeptur bleiben also, wie sie sind. Eine Charge steht für {eggs} Eiweiße, bei {white_liquid} g flüssig pro Eiweiß.</p>
<p>In Pulver entspricht dieselbe Charge {powder_dose} g VERY AQUAFABA Pulver, angerührt mit {water_dose} ml Wasser: {white_powder} g Pulver + {white_water} ml Wasser = {white_total} g Aquafaba, dieselbe Masse wie flüssig. Vor dem Aufschlagen anrühren und kühlen.</p>`,
      },
      {
        id: 'scaling',
        title: 'Was mitwächst und was nicht',
        html: `<p>Aquafaba, die drei Zucker- und Mehlmengen, Pulver und Wasser wachsen linear mit. Der Rest, die Zeiten und die Temperatur, nicht.</p>
<ul>
<li>Das Ruhen: Die gespritzten Kreise ruhen bei Raumtemperatur, bis sich eine trockene Haut bildet, {rest} Minuten je nach Luftfeuchtigkeit, unabhängig von der Charge.</li>
<li>Das Backen: {bake} °C ohne Umluft, {bake_time} Minuten pro Blech. Mehr Macarons bedeuten mehr Bleche.</li>
<li>Das Reifen: Zusammengesetzte und gefüllte Schalen ruhen {mature} Stunden im Kühlschrank vor dem Servieren.</li>
</ul>
<p>Industriechargen? Halten Sie die Aquafabakonzentration bei {concentration} g/ml, damit die Schalen von Durchgang zu Durchgang gleich ausfallen.</p>`,
      },
      {
        id: 'packs',
        title: 'Wie viele Chargen ein Gebinde ergibt',
        html: `<p>Sobald Sie Ihre Chargenzahl kennen, ergibt sich das Gebinde von selbst.</p>
<table class="va-guide-grid">
<thead><tr><th scope="col">Gebinde</th><th scope="col">Chargen</th><th scope="col">Macarons, ca.</th></tr></thead>
<tbody>
<tr><td data-label="Gebinde">1 L Tetrapak flüssig</td><td data-label="Chargen">{batches_1l}</td><td data-label="Macarons, ca.">{pieces_1l}</td></tr>
<tr><td data-label="Gebinde">10 L Bag-in-Box flüssig</td><td data-label="Chargen">{batches_10l}</td><td data-label="Macarons, ca.">{pieces_10l}</td></tr>
<tr><td data-label="Gebinde">200 g Beutel Pulver</td><td data-label="Chargen">{batches_200g}</td><td data-label="Macarons, ca.">{pieces_200g}</td></tr>
<tr><td data-label="Gebinde">3 kg Sack Pulver</td><td data-label="Chargen">{batches_3kg}</td><td data-label="Macarons, ca.">{pieces_3kg}</td></tr>
</tbody>
</table>
<p>Flüssig oder Pulver entscheidet der <a href="{guide_href}">Macaron-Leitfaden</a>: Es hängt davon ab, wie oft Sie Schalen spritzen, und von den {opened_days} Tagen, die ein geöffnetes Flüssiggebinde im Kühlschrank hält.</p>`,
      },
      {
        id: 'example',
        title: 'Rechenbeispiel: {ex_pieces} Macarons für eine Hochzeit',
        html: `<p>Eine Patisserie nimmt einen Auftrag über {ex_pieces} gefüllte Macarons an. Das sind {ex_batches} Chargen des Referenzrezepts.</p>
<ul>
<li>Flüssig: {ex_dose} g VERY AQUAFABA, {ex_sugar} g feiner Zucker, {ex_almond} g Mandelmehl und {ex_icing_sugar} g Puderzucker, als Ersatz für {ex_eggs} Eiweiße.</li>
<li>Pulver: {ex_powder} g Pulver, angerührt mit {ex_water} ml Wasser, dann dieselben Zucker und dasselbe Mehl.</li>
<li>Planung: Die Schalen backen {bake_time} Minuten pro Blech bei {bake} °C, werden dann zusammengesetzt, gefüllt und reifen {mature} Stunden vor dem Tag.</li>
</ul>
<p>Erst sieben und die Bleche auslegen, zuletzt aufschlagen: Der Schaum muss das Unterheben und das Ruhen überstehen, er darf also nicht stehen, während die trockene Mischung vorbereitet wird.</p>`,
      },
    ],
    faq: [
      { q: 'Wie viele Macarons ergibt eine Charge?', a: '{yield}, aus {dose} g Aquafaba, {sugar} g feinem Zucker, {almond} g Mandelmehl und {icing_sugar} g Puderzucker. Spritzen Sie die Kreise auf 3 bis 4 cm.' },
      { q: 'Wie viel Aquafaba ersetzt ein Eiweiß?', a: '{white_liquid} g flüssig oder {white_powder} g Pulver, angerührt mit {white_water} ml Wasser. Eine Charge Macarons ersetzt {eggs} Eiweiße.' },
      { q: 'Kann ich die Charge halbieren?', a: 'Ja. {half_dose} g Aquafaba, {half_sugar} g feiner Zucker, {half_almond} g Mandelmehl und {half_icing_sugar} g Puderzucker ergeben etwa {half_yield} Macarons. Nehmen Sie die kleinste Schüssel Ihrer Maschine.' },
      { q: 'Ruht oder backt eine größere Charge länger?', a: 'Nein. Jedes Blech ruht, bis sich eine trockene Haut bildet, {rest} Minuten je nach Luftfeuchtigkeit, und backt {bake_time} Minuten bei {bake} °C. Eine größere Charge bedeutet mehr Bleche, nicht längere Zeiten.' },
      { q: 'Wie viel Wasser gebe ich zum Pulver?', a: '{white_water} ml auf je {white_powder} g Pulver. Für eine Charge Macarons sind das {powder_dose} g Pulver und {water_dose} ml Wasser; der Rechner skaliert beides.' },
      { q: 'Woher kommen die Mengen für Mandeln und Zucker?', a: 'Aus dem Macaronrezept auf dieser Website: {almond} g Mandelmehl, {icing_sugar} g Puderzucker und {sugar} g feiner Zucker auf {dose} g Aquafaba. Die vollständige Methode steht im [Macaronrezept]({recipe_href}).' },
    ],
  },
};
