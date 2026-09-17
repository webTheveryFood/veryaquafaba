// Hand-written interface strings for the application decision pages.
// Everything here is UI chrome, titles and link labels (not LLM copy); the
// prose lives in copy.<locale>.json and every figure in facts.json.
// Rule: no em dash / en dash anywhere in this file. One exception: UI.buyCta reproduces
// the client's own CTA wording of 2026-09-16 ("Try it now — Buy on Amazon").

export const LOCALE_TAGS = { en: 'en-GB', de: 'de-DE', fr: 'fr-FR', nl: 'nl-NL' };

// SEO title (<= 60 chars) + H1 per (locale, application). The keyword must
// appear in one of them (checked by scripts/applications/validate.mjs).
export const TITLES = {
  en: {
    meringue: { title: 'Aquafaba Meringue: Liquid or Powder? - VERY AQUAFABA', h1: 'Aquafaba meringue: liquid or powder?', keyword: 'aquafaba meringue' },
    'chocolate-mousse': { title: 'Aquafaba Chocolate Mousse: Liquid or Powder? - VERY AQUAFABA', h1: 'Aquafaba chocolate mousse: liquid or powder?', keyword: 'aquafaba chocolate mousse' },
    mayonnaise: { title: 'Vegan Mayo with Aquafaba: Liquid or Powder? - VERY AQUAFABA', h1: 'Vegan mayo with aquafaba: liquid or powder?', keyword: 'vegan mayo' },
    baking: { title: 'Aquafaba for Baking: Liquid or Powder? - VERY AQUAFABA', h1: 'Aquafaba for baking: liquid or powder?', keyword: 'aquafaba for baking' },
    cocktails: { title: 'Aquafaba Cocktails: Liquid or Powder for Your Bar?', h1: 'Aquafaba in cocktails: liquid or powder for your bar?', keyword: 'aquafaba cocktail' },
    macarons: { title: 'Aquafaba Macarons: Liquid or Powder? - VERY AQUAFABA', h1: 'Aquafaba macarons: liquid or powder?', keyword: 'aquafaba macarons' },
  },
  de: {
    meringue: { title: 'Aquafaba Baiser: flüssig oder Pulver? - VERY AQUAFABA', h1: 'Aquafaba Baiser: flüssig oder Pulver?', keyword: 'aquafaba baiser' },
    'chocolate-mousse': { title: 'Aquafaba Schokoladenmousse: flüssig oder Pulver?', h1: 'Aquafaba Schokoladenmousse: flüssig oder Pulver?', keyword: 'schokoladenmousse' },
    mayonnaise: { title: 'Aquafaba Mayonnaise: flüssig oder Pulver? - VERY AQUAFABA', h1: 'Vegane Mayonnaise mit Aquafaba: flüssig oder Pulver?', keyword: 'mayonnaise' },
    baking: { title: 'Aquafaba zum Backen: flüssig oder Pulver? - VERY AQUAFABA', h1: 'Ei-Ersatz beim Backen: Aquafaba flüssig oder Pulver?', keyword: 'backen' },
    cocktails: { title: 'Aquafaba Cocktails: flüssig oder Pulver? - VERY AQUAFABA', h1: 'Aquafaba für Cocktails: flüssig oder Pulver?', keyword: 'aquafaba cocktails' },
    macarons: { title: 'Aquafaba Macarons: flüssig oder Pulver? - VERY AQUAFABA', h1: 'Aquafaba Macarons: flüssig oder Pulver?', keyword: 'aquafaba macarons' },
  },
  fr: {
    meringue: { title: "Meringue à l'aquafaba : liquide ou poudre ? - VERY AQUAFABA", h1: "Meringue à l'aquafaba : liquide ou en poudre ?", keyword: "meringue à l'aquafaba" },
    'chocolate-mousse': { title: "Mousse au chocolat à l'aquafaba : liquide ou poudre ?", h1: "Mousse au chocolat à l'aquafaba : liquide ou en poudre ?", keyword: 'mousse au chocolat' },
    mayonnaise: { title: "Mayonnaise vegan à l'aquafaba : liquide ou poudre ?", h1: "Mayonnaise vegan à l'aquafaba : liquide ou en poudre ?", keyword: 'mayonnaise vegan' },
    baking: { title: 'Aquafaba en pâtisserie : liquide ou poudre ? - VERY AQUAFABA', h1: 'Aquafaba en pâtisserie : liquide ou en poudre ?', keyword: 'aquafaba en pâtisserie' },
    cocktails: { title: 'Aquafaba cocktails : liquide ou en poudre ? - VERY AQUAFABA', h1: 'Aquafaba pour cocktails : liquide ou en poudre ?', keyword: 'aquafaba' },
    macarons: { title: "Macarons à l'aquafaba : liquide ou poudre ? - VERY AQUAFABA", h1: "Macarons à l'aquafaba : liquide ou en poudre ?", keyword: "macarons à l'aquafaba" },
  },
  nl: {
    meringue: { title: 'Aquafaba meringue: vloeibaar of poeder? - VERY AQUAFABA', h1: 'Aquafaba meringue: vloeibaar of poeder?', keyword: 'aquafaba meringue' },
    'chocolate-mousse': { title: 'Aquafaba chocolademousse: vloeibaar of poeder?', h1: 'Aquafaba chocolademousse: vloeibaar of poeder?', keyword: 'chocolademousse' },
    mayonnaise: { title: 'Aquafaba mayonaise: vloeibaar of poeder? - VERY AQUAFABA', h1: 'Aquafaba mayonaise: vloeibaar of poeder?', keyword: 'aquafaba mayonaise' },
    baking: { title: 'Aquafaba om te bakken: vloeibaar of poeder? - VERY AQUAFABA', h1: 'Ei vervangen bij het bakken: aquafaba vloeibaar of poeder?', keyword: 'bakken' },
    cocktails: { title: 'Aquafaba cocktails: vloeibaar of poeder? - VERY AQUAFABA', h1: 'Aquafaba voor cocktails: vloeibaar of poeder?', keyword: 'aquafaba cocktails' },
    macarons: { title: 'Aquafaba macarons: vloeibaar of poeder? - VERY AQUAFABA', h1: 'Aquafaba macarons: vloeibaar of poeder?', keyword: 'aquafaba macarons' },
  },
};

// Prepositional phrase that opens the deterministic answer sentence.
export const APP_PHRASE = {
  en: { meringue: 'For meringue', 'chocolate-mousse': 'For chocolate mousse', mayonnaise: 'For mayonnaise', cocktails: 'For cocktails', macarons: 'For macarons' },
  de: { meringue: 'Für Baiser', 'chocolate-mousse': 'Für Schokoladenmousse', mayonnaise: 'Für Mayonnaise', cocktails: 'Für Cocktails', macarons: 'Für Macarons' },
  fr: { meringue: 'Pour la meringue', 'chocolate-mousse': 'Pour la mousse au chocolat', mayonnaise: 'Pour la mayonnaise', cocktails: 'Pour les cocktails', macarons: 'Pour les macarons' },
  nl: { meringue: 'Voor meringue', 'chocolate-mousse': 'Voor chocolademousse', mayonnaise: 'Voor mayonaise', cocktails: 'Voor cocktails', macarons: 'Voor macarons' },
};

// Short application name for hub links and breadcrumbs.
export const APP_NAMES = {
  en: { meringue: 'Meringue', 'chocolate-mousse': 'Chocolate mousse', mayonnaise: 'Mayonnaise', baking: 'Baking', cocktails: 'Cocktails', macarons: 'Macarons' },
  de: { meringue: 'Baiser', 'chocolate-mousse': 'Schokoladenmousse', mayonnaise: 'Mayonnaise', baking: 'Backen', cocktails: 'Cocktails', macarons: 'Macarons' },
  fr: { meringue: 'Meringue', 'chocolate-mousse': 'Mousse au chocolat', mayonnaise: 'Mayonnaise', baking: 'Pâtisserie', cocktails: 'Cocktails', macarons: 'Macarons' },
  nl: { meringue: 'Meringue', 'chocolate-mousse': 'Chocolademousse', mayonnaise: 'Mayonaise', baking: 'Bakken', cocktails: 'Cocktails', macarons: 'Macarons' },
};

// Answer templates. {dose} {yield} {eggs} {powder} come from facts + derive.
// withDoseNoEggs is used when the dose is not a whole number of egg whites
// (cocktails: 25 g), so no rounded equivalence is ever printed.
export const ANSWER = {
  en: {
    withDose: '{phrase}, VERY AQUAFABA liquid is dosed at {dose} g per batch ({yield}), the equivalent of {eggs} egg whites or {powder} g of powder.',
    withDoseNoEggs: '{phrase}, VERY AQUAFABA liquid is dosed at {dose} g per batch ({yield}), the equivalent of {powder} g of powder.',
    equivalence: 'In baking, {egg} g of VERY AQUAFABA liquid replaces one whole egg and {white} g replaces one egg white, which corresponds to {powderWhite} g of powder per egg white.',
  },
  de: {
    withDose: '{phrase} wird VERY AQUAFABA flüssig mit {dose} g pro Ansatz ({yield}) dosiert, das entspricht {eggs} Eiweißen oder {powder} g Pulver.',
    withDoseNoEggs: '{phrase} wird VERY AQUAFABA flüssig mit {dose} g pro Ansatz ({yield}) dosiert, das entspricht {powder} g Pulver.',
    equivalence: 'Beim Backen ersetzen {egg} g VERY AQUAFABA flüssig ein ganzes Ei und {white} g ein Eiweiß, was {powderWhite} g Pulver pro Eiweiß entspricht.',
  },
  fr: {
    withDose: "{phrase}, VERY AQUAFABA liquide se dose à {dose} g par préparation ({yield}), soit l'équivalent de {eggs} blancs d'œufs ou de {powder} g de poudre.",
    withDoseNoEggs: "{phrase}, VERY AQUAFABA liquide se dose à {dose} g par préparation ({yield}), soit l'équivalent de {powder} g de poudre.",
    equivalence: "En pâtisserie, {egg} g de VERY AQUAFABA liquide remplacent un œuf entier et {white} g remplacent un blanc d'œuf, soit {powderWhite} g de poudre par blanc.",
  },
  nl: {
    withDose: '{phrase} wordt VERY AQUAFABA vloeibaar gedoseerd op {dose} g per bereiding ({yield}), het equivalent van {eggs} eiwitten of {powder} g poeder.',
    withDoseNoEggs: '{phrase} wordt VERY AQUAFABA vloeibaar gedoseerd op {dose} g per bereiding ({yield}), het equivalent van {powder} g poeder.',
    equivalence: 'Bij het bakken vervangt {egg} g VERY AQUAFABA vloeibaar een heel ei en {white} g een eiwit, wat overeenkomt met {powderWhite} g poeder per eiwit.',
  },
};

export const YIELD_UNITS = {
  en: { meringues: 'small meringues', portions: 'portions', g: 'g', cocktails: 'cocktail', macarons: 'filled macarons', approx: 'about' },
  de: { meringues: 'kleine Baisers', portions: 'Portionen', g: 'g', cocktails: 'Cocktail', macarons: 'gefüllte Macarons', approx: 'ca.' },
  fr: { meringues: 'petites meringues', portions: 'portions', g: 'g', cocktails: 'cocktail', macarons: 'macarons garnis', approx: 'environ' },
  nl: { meringues: 'kleine meringues', portions: 'porties', g: 'g', cocktails: 'cocktail', macarons: 'gevulde macarons', approx: 'ca.' },
};

export const UNIT_WORDS = {
  en: { days: 'days', months: 'months' },
  de: { days: 'Tage', months: 'Monate' },
  fr: { days: 'jours', months: 'mois' },
  nl: { days: 'dagen', months: 'maanden' },
};

// Storage and shelf-life rows (facts.shared.shelf_life; sources: client flyers + site guide).
export const STORAGE_LABELS = {
  en: { title: 'Storage and shelf life', unopened: 'Before opening, at room temperature', liquidOpened: 'Liquid after opening, refrigerated at 4 °C or below', powderOpened: 'Powder after opening', liquidOpenedValue: "{temp} °C or below, {days}", frozenValue: "{temp} °C, up to {months} months, {a} to {b} g portions, never refrozen", powderKeeps: "does not spoil; keep dry and closed" },
  de: { title: 'Lagerung und Haltbarkeit', unopened: 'Vor dem Öffnen, bei Raumtemperatur', liquidOpened: 'Flüssig nach dem Öffnen, gekühlt bei höchstens 4 °C', powderOpened: 'Pulver nach dem Öffnen', liquidOpenedValue: "höchstens {temp} °C, {days}", frozenValue: "{temp} °C, bis zu {months} Monate, Portionen von {a} bis {b} g, nie erneut einfrieren", powderKeeps: "verdirbt nicht; trocken und verschlossen lagern" },
  fr: { title: 'Conservation', unopened: 'Avant ouverture, à température ambiante', liquidOpened: 'Liquide après ouverture, au réfrigérateur à 4 °C maximum', powderOpened: 'Poudre après ouverture', liquidOpenedValue: "{temp} °C maximum, {days}", frozenValue: "{temp} °C, jusqu’à {months} mois, portions de {a} à {b} g, jamais recongelé", powderKeeps: "ne s’altère pas ; à garder au sec, sachet fermé" },
  nl: { title: 'Bewaring en houdbaarheid', unopened: 'Voor opening, op kamertemperatuur', liquidOpened: 'Vloeibaar na opening, gekoeld op maximaal 4 °C', powderOpened: 'Poeder na opening', liquidOpenedValue: "maximaal {temp} °C, {days}", frozenValue: "{temp} °C, tot {months} maanden, porties van {a} tot {b} g, nooit opnieuw invriezen", powderKeeps: "bederft niet; droog en gesloten bewaren" },
};

// Row labels of the key-figures table (derived rows + facts.process keys).
export const ROW_LABELS = {
  en: {
    powder_dose: 'Powder dose per batch', reconstitution: 'Reconstitution', water_batch: 'Water for this batch', per_white: 'Per egg white', frozen: 'Frozen, in portions', unopened: 'Before opening, ambient', opened: 'After opening',
    liquid_dose: 'Liquid dose per batch', egg_whites: 'Egg whites replaced', powder_equiv: 'Powder equivalent',
    batches_1l: 'Batches per 1 L Tetrapak', batches_200g: 'Batches per 200 g of powder',
    egg_liquid: 'Liquid per whole egg', white_liquid: 'Liquid per egg white', white_powder: 'Powder per egg white',
    eggs_1l: 'Whole eggs per 1 L Tetrapak', whites_1l: 'Egg whites per 1 L Tetrapak', whites_200g: 'Egg whites per 200 g of powder',
    sugar: 'Sugar per batch', chocolate: 'Dark chocolate per batch', oil: 'Oil per batch', oil_ratio: 'Oil to aquafaba ratio (by weight)',
    chill: 'Aquafaba temperature before use', whip: 'Whipping time', bake: 'Baking temperature', bake_time: 'Baking time',
    rest: 'Resting before baking', mature: 'Maturing, refrigerated', fold_temp: 'Chocolate temperature when folding', set_time: 'Setting time, refrigerated',
    keep: 'Shelf life, refrigerated', dry_shake: 'Dry shake', wet_shake: 'Shake with ice', concentration: 'Concentration for industrial batches',
  },
  de: {
    powder_dose: 'Pulverdosierung pro Ansatz', reconstitution: 'Anrühren', water_batch: 'Wasser für diesen Ansatz', per_white: 'Pro Eiweiß', frozen: 'Eingefroren, portioniert', unopened: 'Vor dem Öffnen, ungekühlt', opened: 'Nach dem Öffnen',
    liquid_dose: 'Flüssig-Dosierung pro Ansatz', egg_whites: 'Ersetzte Eiweiße', powder_equiv: 'Pulver-Äquivalent',
    batches_1l: 'Ansätze pro 1 L Tetrapak', batches_200g: 'Ansätze pro 200 g Pulver',
    egg_liquid: 'Flüssig pro ganzem Ei', white_liquid: 'Flüssig pro Eiweiß', white_powder: 'Pulver pro Eiweiß',
    eggs_1l: 'Ganze Eier pro 1 L Tetrapak', whites_1l: 'Eiweiße pro 1 L Tetrapak', whites_200g: 'Eiweiße pro 200 g Pulver',
    sugar: 'Zucker pro Ansatz', chocolate: 'Zartbitterschokolade pro Ansatz', oil: 'Öl pro Ansatz', oil_ratio: 'Verhältnis Öl zu Aquafaba (Gewicht)',
    chill: 'Aquafaba-Temperatur vor der Verarbeitung', whip: 'Aufschlagzeit', bake: 'Backtemperatur', bake_time: 'Backzeit',
    rest: 'Ruhezeit vor dem Backen', mature: 'Reifezeit im Kühlschrank', fold_temp: 'Schokoladentemperatur beim Unterheben', set_time: 'Kühlzeit zum Festwerden',
    keep: 'Haltbarkeit gekühlt', dry_shake: 'Dry Shake', wet_shake: 'Shake mit Eis', concentration: 'Konzentration für Industrieansätze',
  },
  fr: {
    powder_dose: 'Dose de poudre par préparation', reconstitution: 'Reconstitution', water_batch: 'Eau pour cette préparation', per_white: "Par blanc d'œuf", frozen: 'Congelé, en portions', unopened: 'Avant ouverture, ambiant', opened: 'Après ouverture',
    liquid_dose: 'Dose de liquide par préparation', egg_whites: "Blancs d'œufs remplacés", powder_equiv: 'Équivalent en poudre',
    batches_1l: 'Préparations par Tetrapak de 1 L', batches_200g: 'Préparations par sachet de 200 g',
    egg_liquid: 'Liquide par œuf entier', white_liquid: "Liquide par blanc d'œuf", white_powder: "Poudre par blanc d'œuf",
    eggs_1l: 'Œufs entiers par Tetrapak de 1 L', whites_1l: "Blancs d'œufs par Tetrapak de 1 L", whites_200g: "Blancs d'œufs par sachet de 200 g",
    sugar: 'Sucre par préparation', chocolate: 'Chocolat noir par préparation', oil: 'Huile par préparation', oil_ratio: 'Rapport huile/aquafaba (en poids)',
    chill: "Température de l'aquafaba avant utilisation", whip: 'Temps de fouettage', bake: 'Température de cuisson', bake_time: 'Temps de cuisson',
    rest: 'Croûtage avant cuisson', mature: 'Maturation au réfrigérateur', fold_temp: "Température du chocolat à l'incorporation", set_time: 'Temps de prise au froid',
    keep: 'Conservation au réfrigérateur', dry_shake: 'Dry shake', wet_shake: 'Shake avec glace', concentration: 'Concentration pour lots industriels',
  },
  nl: {
    powder_dose: 'Poederdosering per bereiding', reconstitution: 'Aanmaken', water_batch: 'Water voor deze bereiding', per_white: 'Per eiwit', frozen: 'Ingevroren, in porties', unopened: 'Voor opening, omgevingstemperatuur', opened: 'Na opening',
    liquid_dose: 'Vloeibare dosering per bereiding', egg_whites: 'Vervangen eiwitten', powder_equiv: 'Poederequivalent',
    batches_1l: 'Bereidingen per 1 L Tetrapak', batches_200g: 'Bereidingen per 200 g poeder',
    egg_liquid: 'Vloeibaar per heel ei', white_liquid: 'Vloeibaar per eiwit', white_powder: 'Poeder per eiwit',
    eggs_1l: 'Hele eieren per 1 L Tetrapak', whites_1l: 'Eiwitten per 1 L Tetrapak', whites_200g: 'Eiwitten per 200 g poeder',
    sugar: 'Suiker per bereiding', chocolate: 'Pure chocolade per bereiding', oil: 'Olie per bereiding', oil_ratio: 'Verhouding olie/aquafaba (gewicht)',
    chill: 'Temperatuur van de aquafaba voor gebruik', whip: 'Opkloptijd', bake: 'Baktemperatuur', bake_time: 'Baktijd',
    rest: 'Rusttijd voor het bakken', mature: 'Rijping in de koelkast', fold_temp: 'Chocoladetemperatuur bij het spatelen', set_time: 'Opstijftijd in de koelkast',
    keep: 'Houdbaarheid gekoeld', dry_shake: 'Dry shake', wet_shake: 'Shake met ijs', concentration: 'Concentratie voor industriële batches',
  },
};

// Headings of the grouped tables: the figures, packs and storage are shown as a liquid
// block and a powder block, with the shared process parameters in their own block.
export const FORMAT_LABELS = {
  en: { liquid: 'Liquid', powder: 'Powder', process: 'Process parameters' },
  de: { liquid: 'Flüssig', powder: 'Pulver', process: 'Verarbeitungsparameter' },
  fr: { liquid: 'Liquide', powder: 'Poudre', process: 'Paramètres du processus' },
  nl: { liquid: 'Vloeibaar', powder: 'Poeder', process: 'Procesparameters' },
};

export const PACK_LABELS = {
  en: { liquid_1l: '1 L Tetrapak', bib_5l: '5 L bag-in-box', ibc_1t: '1 T IBC', powder_200g: '200 g pouch', powder_500g: '500 g pouch', powder_5kg: '5 kg', eggWhites: '= {n} egg whites', onRequest: 'on request' },
  de: { liquid_1l: '1 L Tetrapak', bib_5l: '5 L Bag-in-Box', ibc_1t: '1 T IBC', powder_200g: '200 g Beutel', powder_500g: '500 g Beutel', powder_5kg: '5 kg', eggWhites: '= {n} Eiweiße', onRequest: 'auf Anfrage' },
  fr: { liquid_1l: 'Tetrapak de 1 L', bib_5l: 'Bag-in-box de 5 L', ibc_1t: 'IBC de 1 T', powder_200g: 'Sachet de 200 g', powder_500g: 'Sachet de 500 g', powder_5kg: '5 kg', eggWhites: "= {n} blancs d'œufs", onRequest: 'sur demande' },
  nl: { liquid_1l: '1 L Tetrapak', bib_5l: '5 L bag-in-box', ibc_1t: '1 T IBC', powder_200g: 'Zakje van 200 g', powder_500g: 'Zakje van 500 g', powder_5kg: '5 kg', eggWhites: '= {n} eiwitten', onRequest: 'op aanvraag' },
};

// Powder reconstitution, published at the client's request (2026-09-16), inside the powder
// block of the key figures. Figures come from facts.shared.powder_reconstitution.
export const RECONSTITUTION_LABELS = {
  en: { ratio: '{p} part powder + {w} parts water, by weight', perWhite: '{powder} g powder + {water} ml water', water: '{water} g' },
  de: { ratio: '{p} Teil Pulver + {w} Teile Wasser, nach Gewicht', perWhite: '{powder} g Pulver + {water} ml Wasser', water: '{water} g' },
  fr: { ratio: "{p} part de poudre + {w} parts d'eau, en poids", perWhite: "{powder} g de poudre + {water} ml d'eau", water: '{water} g' },
  nl: { ratio: '{p} deel poeder + {w} delen water, op gewicht', perWhite: '{powder} g poeder + {water} ml water', water: '{water} g' },
};

export const ENQUIRY_FORM = {
  en: { title: 'Discuss your production needs', company: 'Company', country: 'Country', email: 'Work email', application: 'Application', volume: 'Estimated monthly volume', project: 'Project description', submit: 'Send enquiry', sending: 'Sending…', success: 'Thank you. Your enquiry has been sent; we will get back to you shortly.', error: 'Your enquiry could not be sent. Please try again or use the contact form.', close: 'Close' },
  de: { title: 'Ihr Produktionsvorhaben besprechen', company: 'Unternehmen', country: 'Land', email: 'Geschäftliche E-Mail', application: 'Anwendung', volume: 'Geschätztes Monatsvolumen', project: 'Projektbeschreibung', submit: 'Anfrage senden', sending: 'Wird gesendet…', success: 'Vielen Dank. Ihre Anfrage wurde gesendet; wir melden uns in Kürze bei Ihnen.', error: 'Ihre Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder nutzen Sie das Kontaktformular.', close: 'Schließen' },
  fr: { title: 'Parlons de vos besoins de production', company: 'Entreprise', country: 'Pays', email: 'E-mail professionnel', application: 'Application', volume: 'Volume mensuel estimé', project: 'Description du projet', submit: 'Envoyer la demande', sending: 'Envoi…', success: 'Merci. Votre demande a bien été envoyée ; nous vous répondrons rapidement.', error: "Votre demande n'a pas pu être envoyée. Réessayez ou utilisez le formulaire de contact.", close: 'Fermer' },
  nl: { title: 'Bespreek uw productiebehoeften', company: 'Bedrijf', country: 'Land', email: 'Zakelijk e-mailadres', application: 'Toepassing', volume: 'Geschat maandelijks volume', project: 'Projectomschrijving', submit: 'Aanvraag versturen', sending: 'Versturen…', success: 'Bedankt. Uw aanvraag is verzonden; we nemen spoedig contact met u op.', error: 'Uw aanvraag kon niet worden verzonden. Probeer het opnieuw of gebruik het contactformulier.', close: 'Sluiten' },
};

export const UI = {
  en: {
    eyebrow: 'Professional application guide', figuresTitle: 'Key figures', sourceLabel: 'Source', updatedLabel: 'Updated',
    packsTitle: 'Available packs', faqTitle: 'Frequently asked questions', buyTitle: 'Where to buy VERY AQUAFABA',
    buyCta: 'Try it now — Buy on Amazon', sheetCta: 'Request the technical sheet',
    enquiryProLabel: 'Professional enquiries:', enquiryProLink: 'Discuss your production needs', enquiryGenLabel: 'General enquiries:', enquiryGenLink: 'Get in touch',
    relatedTitle: 'Go further', recipeLink: 'See the full recipe', hubLink: 'All aquafaba recipes and guides', productsLink: 'Products and formats',
    home: 'Home', resourcesName: 'Resources', resourcesTitle: 'Liquid or powder? Pick the right aquafaba for your recipe', resourcesText: 'Meringue, mousse, mayo, cocktails, macarons or baking: each guide tells you which format works best, how much to use and why.', resourcesLink: 'All professional guides', cardCta: 'Read the guide',
    recipeToApp: 'Liquid or powder for this application? Read the professional guide',
  },
  de: {
    eyebrow: 'Leitfaden für Profis', figuresTitle: 'Kennzahlen', sourceLabel: 'Quelle', updatedLabel: 'Aktualisiert',
    packsTitle: 'Verfügbare Gebinde', faqTitle: 'Häufige Fragen', buyTitle: 'VERY AQUAFABA kaufen',
    buyCta: 'Jetzt testen — Auf Amazon kaufen', sheetCta: 'Technisches Datenblatt anfordern',
    enquiryProLabel: 'Anfragen für Profis:', enquiryProLink: 'Ihr Produktionsvorhaben besprechen', enquiryGenLabel: 'Allgemeine Anfragen:', enquiryGenLink: 'Kontakt aufnehmen',
    relatedTitle: 'Weiterführend', recipeLink: 'Zum vollständigen Rezept', hubLink: 'Alle Aquafaba-Rezepte und Anleitungen', productsLink: 'Produkte und Formate',
    home: 'Startseite', resourcesName: 'Ressourcen', resourcesTitle: 'Flüssig oder Pulver? Das richtige Aquafaba für Ihr Rezept', resourcesText: 'Baiser, Mousse, Mayonnaise, Cocktails, Macarons oder Backen: jeder Leitfaden sagt Ihnen, welches Format am besten passt, wie viel Sie brauchen und warum.', resourcesLink: 'Alle Leitfäden für Profis', cardCta: 'Zum Leitfaden',
    recipeToApp: 'Flüssig oder Pulver für diese Anwendung? Zum Leitfaden für Profis',
  },
  fr: {
    eyebrow: 'Guide professionnel', figuresTitle: 'Chiffres clés', sourceLabel: 'Source', updatedLabel: 'Mis à jour',
    packsTitle: 'Formats disponibles', faqTitle: 'Questions fréquentes', buyTitle: 'Où acheter VERY AQUAFABA',
    buyCta: 'Essayez maintenant — Acheter sur InstantChef', sheetCta: 'Demander la fiche technique',
    enquiryProLabel: 'Demandes professionnelles :', enquiryProLink: 'Parlons de vos besoins de production', enquiryGenLabel: 'Demandes générales :', enquiryGenLink: 'Nous contacter',
    relatedTitle: 'Pour aller plus loin', recipeLink: 'Voir la recette complète', hubLink: 'Toutes les recettes et guides aquafaba', productsLink: 'Produits et formats',
    home: 'Accueil', resourcesName: 'Ressources', resourcesTitle: 'Liquide ou poudre ? Choisissez le bon aquafaba pour votre recette', resourcesText: 'Meringue, mousse, mayonnaise, cocktails, macarons ou pâtisserie : chaque guide vous dit quel format convient le mieux, quelle dose utiliser et pourquoi.', resourcesLink: 'Tous les guides professionnels', cardCta: 'Lire le guide',
    recipeToApp: 'Liquide ou poudre pour cette application ? Lire le guide professionnel',
  },
  nl: {
    eyebrow: 'Professionele gids', figuresTitle: 'Kerncijfers', sourceLabel: 'Bron', updatedLabel: 'Bijgewerkt',
    packsTitle: 'Beschikbare verpakkingen', faqTitle: 'Veelgestelde vragen', buyTitle: 'VERY AQUAFABA kopen',
    buyCta: null, sheetCta: 'Technische fiche aanvragen',
    enquiryProLabel: 'Professionele aanvragen:', enquiryProLink: 'Bespreek uw productiebehoeften', enquiryGenLabel: 'Algemene vragen:', enquiryGenLink: 'Neem contact op',
    relatedTitle: 'Meer weten', recipeLink: 'Bekijk het volledige recept', hubLink: 'Alle aquafaba-recepten en gidsen', productsLink: 'Producten en formaten',
    home: 'Home', resourcesName: 'Bronnen', resourcesTitle: 'Vloeibaar of poeder? Kies de juiste aquafaba voor uw recept', resourcesText: 'Meringue, mousse, mayonaise, cocktails, macarons of bakken: elke gids vertelt u welk formaat het beste werkt, hoeveel u nodig hebt en waarom.', resourcesLink: 'Alle professionele gidsen', cardCta: 'Lees de gids',
    recipeToApp: 'Vloeibaar of poeder voor deze toepassing? Lees de professionele gids',
  },
};

// Primary purchase destination per country (client 2026-09-16): EN Amazon US (UK later),
// DE Amazon DE, FR InstantChef until Amazon FR, NL none until Amazon NL/BE (the technical
// sheet leads). Tracking parameters and rel are added centrally in tracking.js. Other
// listings (multipacks, 200 g) are recorded in LIBRERIA DE DATA, referencia/veryaquafaba/03.
export const WHERE_TO_BUY = {
  en: {
    goal: 'amazon-click-us',
    buy: 'https://www.amazon.com/dp/B0DH34RT6K',
    // Dedicated cocktail listing (different ASIN) on the cocktails page.
    overrides: { cocktails: 'https://www.amazon.com/dp/B0H73834LS' },
  },
  de: { goal: 'amazon-click-de', buy: 'https://www.amazon.de/dp/B0DH34RT6K' },
  fr: { goal: 'stockist-click-fr', buy: 'https://instantchef.com/products/aquafaba-1l' },
  nl: { goal: null, buy: null },
};

// Recipe translationKey (lib/page-registry.js) -> application key.
export const RECIPE_TO_APPLICATION = {
  'recipe:meringues': 'meringue',
  'recipe:macarons': 'macarons',
  'recipe:mayonnaise': 'mayonnaise',
  'recipe:chocolate-mousse': 'chocolate-mousse',
  'recipe:whiskey-sour': 'cocktails',
  'recipe:how-to-use-aquafaba-in-baking': 'baking',
};
