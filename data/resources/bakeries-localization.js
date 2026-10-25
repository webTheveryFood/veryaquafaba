import facts from '../applications/facts.json';
import bakeryFacts from './bakeries-facts.json';
import { siteTokens } from './topics';
import { fmt, fmtValue, fillStrict } from '../applications/index';
import { LOCALE_TAGS, PACK_LABELS } from '../applications/ui';
import { foamRoute } from '../applications/routes';

// Copy for values generated outside the editorial text files. Numbers are always
// supplied by the same facts and calculations as the English pages.
export const bakeryExtraLabels = {
  en: { macaronsGuide: 'Macarons with aquafaba: the professional guide', meringueGuide: 'Meringue method and troubleshooting', meringueRecipe: 'The meringue recipe', recipes: 'Recipes with aquafaba', resources: 'Resources and practical guides', pastry: 'Pastry' },
  fr: { macaronsGuide: "Macarons à l’aquafaba : le guide professionnel", meringueGuide: 'Meringue : méthode et résolution des problèmes', meringueRecipe: 'La recette de meringue', recipes: "Recettes à l’aquafaba", resources: 'Ressources et guides pratiques', pastry: 'Pâtisserie' },
  de: { macaronsGuide: 'Macarons mit Aquafaba: der Leitfaden für Profis', meringueGuide: 'Baiser: Zubereitung und Fehlerbehebung', meringueRecipe: 'Das Baiserrezept', recipes: 'Rezepte mit Aquafaba', resources: 'Ressourcen und praktische Anleitungen', pastry: 'Feingebäck' },
  nl: { macaronsGuide: 'Macarons met aquafaba: de professionele gids', meringueGuide: 'Meringue: werkwijze en problemen oplossen', meringueRecipe: 'Het meringuerecept', recipes: 'Recepten met aquafaba', resources: 'Bronnen en praktische gidsen', pastry: 'Banket' },
};
const LANG = { fr: 0, de: 1, nl: 2 };
const WORDS = {
  'Sugar': ['Sucre', 'Zucker', 'Suiker'],
  'Icing sugar': ['Sucre glace', 'Puderzucker', 'Poedersuiker'],
  'Ground almonds': ["Poudre d’amande", 'Gemahlene Mandeln', 'Gemalen amandelen'],
  'Baking powder': ['Levure chimique', 'Backpulver', 'Bakpoeder'],
  'Cornflour': ['Fécule de maïs', 'Maisstärke', 'Maïszetmeel'],
  'Corn starch': ['Fécule de maïs', 'Maisstärke', 'Maïszetmeel'],
  'Caster sugar': ['Sucre en poudre', 'Feiner Zucker', 'Fijne kristalsuiker'],
  'Cream of tartar (or 1g citric acid)': ['Crème de tartre (ou 1 g d’acide citrique)', 'Weinstein (oder 1 g Zitronensäure)', 'Wijnsteen (of 1 g citroenzuur)'],
  'White wine vinegar or lemon juice': ['Vinaigre de vin blanc ou jus de citron', 'Weißweinessig oder Zitronensaft', 'Wittewijnazijn of citroensap'],
  'Whipped plant-based cream': ['Crème végétale fouettée', 'Aufgeschlagene pflanzliche Sahne', 'Opgeklopte plantaardige room'],
  'Fresh fruit': ['Fruits frais', 'Frisches Obst', 'Vers fruit'],
  'Oven': ['Four', 'Ofen', 'Oven'],
  'Drying time': ['Temps de séchage', 'Trocknungszeit', 'Droogtijd'],
  'Aquafaba temperature': ["Température de l’aquafaba", 'Temperatur des Aquafabas', 'Temperatuur van de aquafaba'],
  'Base': ['Fond', 'Boden', 'Bodem'],
  'Baking time': ['Temps de cuisson', 'Backzeit', 'Baktijd'],
  'Mould': ['Moule', 'Form', 'Vorm'],
  'frame or ring': ['cadre ou cercle', 'Backrahmen oder Tortenring', 'bakraam of bakring'],
  'Water for the syrup': ['Eau pour le sirop', 'Wasser für den Sirup', 'Water voor de siroop'],
  'Sugar for the syrup': ['Sucre pour le sirop', 'Zucker für den Sirup', 'Suiker voor de siroop'],
  'Invert sugar': ['Sucre inverti', 'Invertzucker', 'Invertsuiker'],
  'Water for the carrageenan': ['Eau pour la carraghénane', 'Wasser für das Carrageen', 'Water voor de carrageen'],
  'Sugar for the carrageenan': ['Sucre pour la carraghénane', 'Zucker für das Carrageen', 'Suiker voor de carrageen'],
  'Iota carrageenan': ['Carraghénane iota', 'Iota-Carrageen', 'Iota-carrageen'],
  'Toasted coconut in the mix': ['Noix de coco torréfiée dans la masse', 'Geröstete Kokosraspel in der Masse', 'Geroosterde kokos in de massa'],
  'Grated coconut to toast, mix and coating': ['Noix de coco râpée à torréfier, pour la masse et l’enrobage', 'Kokosraspel zum Rösten, für Masse und Überzug', 'Kokosrasp om te roosteren, voor de massa en de afwerking'],
  'Syrup': ['Sirop', 'Sirup', 'Siroop'],
  'Carrageenan': ['Carraghénane', 'Carrageen', 'Carrageen'],
  'Coconut': ['Noix de coco', 'Kokos', 'Kokos'],
  'frame on a silicone mat or a guitar sheet': ['cadre posé sur un tapis en silicone ou une feuille guitare', 'Rahmen auf einer Silikonmatte oder einer Pralinenfolie', 'raam op een siliconenmat of een vel acetaatfolie'],
  'Ingredient': ['Ingrédient', 'Zutat', 'Ingrediënt'],
  'One batch': ['Une préparation', 'Ein Ansatz', 'Eén bereiding'],
  'Double batch': ['Deux préparations', 'Doppelter Ansatz', 'Dubbele bereiding'],
  'What you check': ['Point à vérifier', 'Prüfpunkt', 'Wat u controleert'],
  'Made from': ['Composition', 'Zutaten', 'Samenstelling'],
  'Allergens': ['Allergènes', 'Allergene', 'Allergenen'],
  'Formats': ['Conditionnements', 'Gebinde', 'Verpakkingen'],
  'One egg white': ["Un blanc d’œuf", 'Ein Eiweiß', 'Eén eiwit'],
  'Once opened or made up': ['Après ouverture ou reconstitution', 'Nach dem Öffnen oder Anrühren', 'Na openen of aanmaken'],
  'Source': ['Source', 'Quelle', 'Bron'],
  'Water, chickpeas. No additives, no preservatives.': ['Eau, pois chiches. Sans additifs ni conservateurs.', 'Wasser, Kichererbsen. Ohne Zusatzstoffe und Konservierungsstoffe.', 'Water, kikkererwten. Zonder additieven of conserveermiddelen.'],
  'None of the 14 EU allergens': ['Aucun des 14 allergènes de l’UE', 'Keines der 14 EU-Allergene', 'Geen van de 14 EU-allergenen'],
  'Potato protein, fibres (soluble corn, flax), acacia fibre, xanthan gum, salt': ['Protéine de pomme de terre, fibres (maïs soluble, lin), fibre d’acacia, gomme xanthane, sel', 'Kartoffelprotein, Ballaststoffe (löslicher Mais, Leinsamen), Akazienfaser, Xanthan, Salz', 'Aardappeleiwit, vezels (oplosbare maïsvezels, lijnzaad), acaciavezels, xanthaangom, zout'],
  'Starch, pea protein, thickener guar gum, salt (organic)': ['Amidon, protéine de pois, épaississant : gomme guar, sel (bio)', 'Stärke, Erbsenprotein, Verdickungsmittel Guarkernmehl, Salz (bio)', 'Zetmeel, erwteneiwit, verdikkingsmiddel guargom, zout (biologisch)'],
  'May contain traces of egg, milk, soy and nuts': ['Peut contenir des traces d’œuf, de lait, de soja et de fruits à coque', 'Kann Spuren von Ei, Milch, Soja und Schalenfrüchten enthalten', 'Kan sporen bevatten van ei, melk, soja en noten'],
  'Water, chickpea extract': ['Eau, extrait de pois chiches', 'Wasser, Kichererbsenextrakt', 'Water, kikkererwtenextract'],
  'Not stated on the product page': ['Non précisé sur la page du produit', 'Auf der Produktseite nicht angegeben', 'Niet vermeld op de productpagina'],
  '72g, 1kg and 15kg': ['72 g, 1 kg et 15 kg', '72 g, 1 kg und 15 kg', '72 g, 1 kg en 15 kg'],
  '3g of powder with 27g of water per egg white': ['3 g de poudre avec 27 g d’eau par blanc d’œuf', '3 g Pulver mit 27 g Wasser pro Eiweiß', '3 g poeder met 27 g water per eiwit'],
  '105g in 895g of cold water for 33 egg whites': ['105 g dans 895 g d’eau froide pour 33 blancs d’œufs', '105 g in 895 g kaltem Wasser für 33 Eiweiße', '105 g in 895 g koud water voor 33 eiwitten'],
  'Made up: 0 to 6 °C, used within 7 days': ['Après reconstitution : de 0 à 6 °C, à utiliser dans les 7 jours', 'Angerührt: bei 0 bis 6 °C lagern und innerhalb von 7 Tagen verbrauchen', 'Na aanmaken: bewaren bij 0 tot 6 °C en binnen 7 dagen gebruiken'],
  '20g sachet': ['Sachet de 20 g', '20 g Beutel', 'Zakje van 20 g'],
  '10g of powder with 80 ml of sparkling water, whipped': ['10 g de poudre avec 80 ml d’eau gazeuse, à fouetter', '10 g Pulver mit 80 ml kohlensäurehaltigem Wasser aufschlagen', '10 g poeder met 80 ml bruiswater, opgeklopt'],
  '200 ml and 1L cartons, 10L bag-in-box': ['Briques de 200 ml et de 1 L, bag-in-box de 10 L', 'Kartons mit 200 ml und 1 L, 10 L Bag-in-Box', 'Pakken van 200 ml en 1 L, bag-in-box van 10 L'],
  'October 2026': ['octobre 2026', 'Oktober 2026', 'oktober 2026'],
  'VERY AQUAFABA, almond dacquoise recipe': ['VERY AQUAFABA, recette de dacquoise aux amandes', 'VERY AQUAFABA, Rezept für Mandel-Dacquoise', 'VERY AQUAFABA, recept voor amandeldacquoise'],
  'VERY AQUAFABA, coconut marshmallow recipe': ['VERY AQUAFABA, recette de guimauves à la noix de coco', 'VERY AQUAFABA, Rezept für Kokos-Marshmallows', 'VERY AQUAFABA, recept voor kokosmarshmallows'],
};
const word = (locale, s) => WORDS[s]?.[LANG[locale]] || s;
const grid = (heads, rows) => `<table class="va-guide-grid va-guide-grid--wrap"><thead><tr>${heads.map((s) => `<th scope="col">${s}</th>`).join('')}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((s, i) => `<td data-label="${heads[i]}">${s}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
const METHODS = {
  fr: ['Versez l’aquafaba dans la cuve du batteur et fouettez jusqu’à ce qu’il soit ferme.', 'Ajoutez le sucre pour obtenir une meringue.', 'Lorsque la meringue se tient, incorporez progressivement la poudre d’amande, le sucre glace, la levure chimique et la fécule de maïs.', 'Mélangez pour homogénéiser.', 'Versez dans un cadre ou un cercle et faites cuire {dacquoise_minutes} minutes à {dacquoise_oven} °C.'],
  de: ['Geben Sie das Aquafaba in die Rührschüssel und schlagen Sie es steif.', 'Geben Sie den Zucker hinzu, um eine Baisermasse herzustellen.', 'Sobald die Baisermasse stabil ist, geben Sie gemahlene Mandeln, Puderzucker, Backpulver und Maisstärke nach und nach hinzu.', 'Vermischen Sie alles gleichmäßig.', 'Füllen Sie die Masse in einen Backrahmen oder Tortenring und backen Sie sie {dacquoise_minutes} Minuten bei {dacquoise_oven} °C.'],
  nl: ['Giet de aquafaba in de mengkom van een mixer en klop stevig op.', 'Voeg de suiker toe om een meringue te maken.', 'Voeg zodra de meringue stevig is de gemalen amandelen, poedersuiker, het bakpoeder en maïszetmeel beetje bij beetje toe.', 'Meng tot alles is opgenomen.', 'Giet in een bakraam of bakring en bak {dacquoise_minutes} minuten op {dacquoise_oven} °C.'],
};
const TABLE_COPY = {
  fr: { formats: 'Liquide : {liquid_1l_label}, {liquid_10l_label} et {liquid_1t_label} ; poudre : sachets de {small_pouch_g} g, {medium_pouch_g} g et {large_pouch_kg} kg', dose: '{white_liquid} g de liquide, ou {white_powder} g de poudre avec {white_water} ml d’eau', opened: 'Liquide : {opened_days} jours à {opened_temp} °C. Poudre : au sec et bien fermée jusqu’à sa date de durabilité minimale', composition: 'Composition de VERY AQUAFABA', storage: 'et conseils de conservation', product: 'Page produit de', wholeEgg: 'ml par œuf entier' },
  de: { formats: 'Flüssig: {liquid_1l_label}, {liquid_10l_label} und {liquid_1t_label}; Pulver: Beutel mit {small_pouch_g} g, {medium_pouch_g} g und {large_pouch_kg} kg', dose: '{white_liquid} g Flüssigkeit oder {white_powder} g Pulver mit {white_water} ml Wasser', opened: 'Flüssig: {opened_days} Tage bei {opened_temp} °C. Pulver: trocken und verschlossen bis zum Mindesthaltbarkeitsdatum', composition: 'Zusammensetzung von VERY AQUAFABA', storage: 'und Hinweise zur Lagerung', product: 'Produktseite von', wholeEgg: 'ml pro ganzem Ei' },
  nl: { formats: 'Vloeibaar: {liquid_1l_label}, {liquid_10l_label} en {liquid_1t_label}; poeder: zakjes van {small_pouch_g} g, {medium_pouch_g} g en {large_pouch_kg} kg', dose: '{white_liquid} g vloeibare aquafaba, of {white_powder} g poeder met {white_water} ml water', opened: 'Vloeibaar: {opened_days} dagen bij {opened_temp} °C. Poeder: droog en gesloten bewaren tot de ten minste houdbaar tot-datum', composition: 'Samenstelling van VERY AQUAFABA', storage: 'en bewaaradvies', product: 'Productpagina van', wholeEgg: 'ml per heel ei' },
};

export function localizedBakeryTokens(locale, original, contact, routes) {
  if (locale === 'en') return {};
  const number = (value) => fmt(locale, value, 2);
  // All arithmetic was completed before this point. Never parse decimal commas
  // or localized thousands separators back into calculations.
  const t = Object.fromEntries(Object.entries(original).map(([k, v]) => [k, typeof v === 'string' && /^-?\d[\d,]*(?:\.\d+)?$/.test(v) ? number(Number(v.replace(/,/g, ''))) : v]));
  Object.assign(t, siteTokens(locale, contact), Object.fromEntries(Object.entries(routes).map(([k, href]) => [`${k}_href`, href])), {
    liquid_1l_label: PACK_LABELS[locale].liquid_1l, liquid_10l_label: PACK_LABELS[locale].bib_10l, liquid_1t_label: PACK_LABELS[locale].ibc_1t,
    baking_chill: fmtValue(locale, facts.applications.baking.process.find((p) => p.key === 'chill').value),
    pavlova_hours: fmtValue(locale, bakeryFacts.pavlova.bake_hours),
    allergen_href: foamRoute(locale, 'is-aquafaba-an-allergen'),
    labels_checked: word(locale, bakeryFacts.competitors._fuente.checked),
    very_label: word(locale, facts.foamers.very.label), very_allergens: word(locale, facts.foamers.very.allergens),
  });
  const fill = (s) => fillStrict(s, t, `bakery-tokens.${locale}`);
  const ingredients = [['VERY AQUAFABA', 'aquafaba_g'], ['Sugar', 'sugar_g'], ['Icing sugar', 'icing_sugar_g'], ['Ground almonds', 'ground_almonds_g'], ['Baking powder', 'baking_powder_g'], ['Cornflour', 'cornflour_g']];
  t.dacquoise_ingredients = `<ul>${ingredients.map(([label, field]) => `<li>${word(locale, label)}: ${number(bakeryFacts.dacquoise[field])} g</li>`).join('')}</ul>`;
  t.dacquoise_method = `<ol>${METHODS[locale].map((s) => `<li>${fill(s)}</li>`).join('')}</ol>`;
  t.dacquoise_double_table = grid(['Ingredient', 'One batch', 'Double batch'].map((s) => word(locale, s)), ingredients.map(([label, field]) => [word(locale, label), `${number(bakeryFacts.dacquoise[field])} g`, `${number(bakeryFacts.dacquoise[field] * bakeryFacts.examples.recipe_scale)} g`]));
  const C = TABLE_COPY[locale];
  for (const key of ['yumgo', 'ruf', 'oggs']) {
    const brand = bakeryFacts.competitors[key];
    for (const field of ['label', 'allergens', 'formats', 'dose', 'batch', 'opened']) if (brand[field]) t[`${key}_${field}`] = word(locale, brand[field]);
    t[`${key}_table`] = grid([word(locale, 'What you check'), 'VERY AQUAFABA', brand.name], [
      [word(locale, 'Made from'), t.very_label, word(locale, brand.label)],
      [word(locale, 'Allergens'), t.very_allergens, word(locale, brand.allergens)],
      [word(locale, 'Formats'), fill(C.formats), word(locale, brand.formats)],
      [word(locale, 'One egg white'), fill(C.dose), brand.dose ? word(locale, brand.dose) : `${number(brand.ml_per_egg)} ${C.wholeEgg}`],
      [word(locale, 'Once opened or made up'), fill(C.opened), word(locale, brand.opened)],
      [word(locale, 'Source'), `<a href="${routes.composition}">${C.composition}</a>, ${C.storage}`, `${C.product} ${brand.name} (${t.labels_checked})`],
    ]);
  }
  return t;
}

const TOOL_COPY = {
  fr: { base: 'fond de pavlova de {pavlova_diameter} cm', oven: '{pavlova_oven} °C, chaleur statique', hours: '{pavlova_hours} heures', edge: '{pavlova_diameter} cm, avec des bords légèrement relevés', minutes: '{dacquoise_minutes} minutes', syrup: '{mm_syrup_c} °C, refroidi à {mm_syrup_cool_c} °C', coconut: '{mm_toast_min} minutes à {mm_toast_c} °C, chaleur tournante' },
  de: { base: 'Pavlovaboden mit {pavlova_diameter} cm Durchmesser', oven: '{pavlova_oven} °C, ohne Umluft', hours: '{pavlova_hours} Stunden', edge: '{pavlova_diameter} cm, mit leicht erhöhtem Rand', minutes: '{dacquoise_minutes} Minuten', syrup: '{mm_syrup_c} °C, auf {mm_syrup_cool_c} °C abgekühlt', coconut: '{mm_toast_min} Minuten bei {mm_toast_c} °C mit Umluft' },
  nl: { base: 'pavlovabodem van {pavlova_diameter} cm', oven: '{pavlova_oven} °C, zonder ventilator', hours: '{pavlova_hours} uur', edge: '{pavlova_diameter} cm, met iets opstaande randen', minutes: '{dacquoise_minutes} minuten', syrup: '{mm_syrup_c} °C, afgekoeld tot {mm_syrup_cool_c} °C', coconut: '{mm_toast_min} minuten op {mm_toast_c} °C, met ventilator' },
};
export function localizedBakeryTool(locale, tool, tokens) {
  if (locale === 'en') return tool;
  const C = TOOL_COPY[locale];
  const f = (s) => fillStrict(s, tokens, `bakery-tool.${locale}`);
  const replacements = { 'Drying time': C.hours, 'Base': C.edge, 'Baking time': C.minutes, 'Syrup': C.syrup, 'Coconut': C.coconut };
  return {
    ...tool, localeTag: LOCALE_TAGS[locale], noSpace: false,
    reference: { ...tool.reference, yield: tool.reference.yield ? { ...tool.reference.yield, unit: f(C.base) } : null, ingredients: tool.reference.ingredients.map((i) => ({ ...i, label: word(locale, i.label) })) },
    fixed: tool.fixed.map((i) => ({ label: word(locale, i.label), value: i.label === 'Oven' && /fan off/.test(i.value) ? f(C.oven) : replacements[i.label] ? f(replacements[i.label]) : word(locale, i.value) })),
    source: tool.source ? { ...tool.source, text: word(locale, tool.source.text) } : null,
  };
}

const FINDER = {
  fr: {
    days: 'Blancs d’œufs remplacés en {opened_days} jours', week: 'Blancs d’œufs remplacés en une semaine', unit: 'blancs d’œufs', result: 'Le conditionnement pour votre semaine', pick: 'Notre conseil', why: 'Pourquoi', liquidWeek: 'Liquide pour la semaine', powderWeek: 'Poudre pour la semaine, avec son eau',
    empty: 'Indiquez le nombre de blancs d’œufs que vous remplacez en {opened_days} jours et en une semaine.',
    powderPouch: 'Sachet de poudre de {size}',
    whyLiquid: 'Vous utilisez l’équivalent de {liquid_1l_whites} blancs d’œufs dans les {opened_days} jours suivant l’ouverture : vous pouvez verser le liquide directement dans la cuve.',
    whyBib: 'Vous utilisez {bib_10l_whites} blancs d’œufs ou plus en {opened_days} jours : pour cet usage continu, un robinet remplace dix briques. Ce format est proposé sur devis pour votre projet.',
    whyIbc: 'Une production qui remplace {ibc_1t_whites} blancs d’œufs en quelques jours dose au kilo sur une ligne : l’IBC est proposé sur devis pour votre projet.',
    whyP30: 'Moins de {powder_30g_whites} blancs d’œufs par semaine : le sachet d’essai permet de reconstituer {powder_30g_whites} blancs d’œufs, préparation par préparation.',
    whyP200: 'Vous ne finiriez pas un litre ouvert dans les {opened_days} jours. Le sachet se conserve au sec et bien fermé, et remplace {powder_200g_whites} blancs d’œufs.',
    whyP3kg: 'Plus de {powder_200g_whites} blancs d’œufs par semaine, mais pas assez en {opened_days} jours pour utiliser le liquide : choisissez le sachet équivalant à {powder_3kg_whites} blancs d’œufs, proposé sur devis pour votre projet.',
  },
  de: {
    days: 'Eiweiße, die Sie in {opened_days} Tagen ersetzen', week: 'Eiweiße, die Sie in einer Woche ersetzen', unit: 'Eiweiße', result: 'Die passende Packung für Ihre Woche', pick: 'Empfehlung', why: 'Warum', liquidWeek: 'Flüssiges Aquafaba für die Woche', powderWeek: 'Pulver und Wasser für die Woche',
    empty: 'Geben Sie ein, wie viele Eiweiße Sie in {opened_days} Tagen und in einer Woche ersetzen.', powderPouch: 'Pulverbeutel mit {size}',
    whyLiquid: 'Sie verbrauchen eine geöffnete Packung für {liquid_1l_whites} Eiweiße innerhalb von {opened_days} Tagen. So können Sie das flüssige Aquafaba direkt in die Schüssel geben.',
    whyBib: 'Sie ersetzen {bib_10l_whites} Eiweiße oder mehr in {opened_days} Tagen: Bei kontinuierlichem Verbrauch genügt ein Hahn statt zehn Packungen. Sie erhalten ein Angebot für Ihr Vorhaben.',
    whyIbc: 'Wer in wenigen Tagen {ibc_1t_whites} Eiweiße ersetzt, dosiert kiloweise an einer Produktionslinie. Dafür kommt der IBC infrage, mit einem Angebot für Ihr Vorhaben.',
    whyP30: 'Weniger als {powder_30g_whites} Eiweiße pro Woche: Mit dem Probierbeutel ersetzen Sie {powder_30g_whites} Eiweiße und rühren das Pulver nach Bedarf je Ansatz an.',
    whyP200: 'Ein geöffneter Liter würde länger als {opened_days} Tage reichen. Der Beutel wird trocken und verschlossen gelagert und ersetzt {powder_200g_whites} Eiweiße.',
    whyP3kg: 'Mehr als {powder_200g_whites} Eiweiße pro Woche, aber zu wenig in {opened_days} Tagen für die Flüssigvariante: Der Beutel für {powder_3kg_whites} Eiweiße wird für Ihr Vorhaben angeboten.',
  },
  nl: {
    days: 'Eiwitten die u in {opened_days} dagen vervangt', week: 'Eiwitten die u in een week vervangt', unit: 'eiwitten', result: 'De verpakking voor uw week', pick: 'Onze keuze', why: 'Waarom', liquidWeek: 'Vloeibare aquafaba voor de week', powderWeek: 'Poeder voor de week, met het bijbehorende water',
    empty: 'Vul in hoeveel eiwitten u in {opened_days} dagen en in een week vervangt.', powderPouch: 'Zakje poeder van {size}',
    whyLiquid: 'U verbruikt een geopende verpakking voor {liquid_1l_whites} eiwitten binnen {opened_days} dagen. U kunt de vloeibare aquafaba rechtstreeks in de kom gieten.',
    whyBib: 'U gebruikt {bib_10l_whites} eiwitten of meer in {opened_days} dagen: bij doorlopend gebruik vervangt één kraan tien pakken. U ontvangt een offerte voor uw project.',
    whyIbc: 'Bij een productie van {ibc_1t_whites} eiwitten in enkele dagen doseert u per kilo aan een productielijn. De IBC is op offerte verkrijgbaar voor uw project.',
    whyP30: 'Minder dan {powder_30g_whites} eiwitten per week: het proefzakje vervangt {powder_30g_whites} eiwitten, aangemaakt per bereiding.',
    whyP200: 'U zou een geopende liter niet binnen {opened_days} dagen opmaken. Het zakje blijft droog en gesloten bewaard en vervangt {powder_200g_whites} eiwitten.',
    whyP3kg: 'Meer dan {powder_200g_whites} eiwitten per week, maar te weinig in {opened_days} dagen voor vloeibare aquafaba: het zakje voor {powder_3kg_whites} eiwitten is op offerte verkrijgbaar voor uw project.',
  },
};
export function localizedPackFinder(locale, original, tokens) {
  if (locale === 'en') return original;
  const { powderPouch, ...copy } = FINDER[locale];
  const labels = Object.fromEntries(Object.entries(copy).map(([k, s]) => [k, fillStrict(s, tokens, `pack-finder.${locale}`)]));
  labels.packs = { liquid: tokens.liquid_1l_label, bib: tokens.liquid_10l_label, ibc: tokens.liquid_1t_label, p30: powderPouch.replace('{size}', `${tokens.small_pouch_g} g`), p200: powderPouch.replace('{size}', `${tokens.medium_pouch_g} g`), p3kg: powderPouch.replace('{size}', `${tokens.large_pouch_kg} kg`) };
  return { ...original, localeTag: LOCALE_TAGS[locale], labels };
}

export const localizedBakerySource = (locale, source) => source ? { ...source, text: word(locale, source.text) } : null;
