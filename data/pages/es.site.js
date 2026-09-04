import { footerContentEs } from '../site';

const navigation = [
  { label: 'Sobre nosotros', href: '/es/' },
  { label: 'Productos', href: '/es/comprar-aquafaba/' },
  { label: 'Recetas', href: '/es/recetas-de-aquafaba/' },
  { label: 'Contacto', href: '/es/comprar-aquafaba/#contact' },
];

const base = {
  locale: 'es-ES',
  currentLanguage: 'ES',
  logoHref: '/es/',
  navigation,
  footer: footerContentEs,
};

function page({ title, description, heroTitle, heroText, image, sections, cta }) {
  return {
    ...base,
    seo: {
      title,
      description,
      image: image || '/wp-content/uploads/2025/09/VERYAQUAFABA_RESOURCES_COVER.webp',
    },
    hero: {
      eyebrow: 'VERY AQUAFABA',
      title: heroTitle,
      text: heroText,
      image: image ? { src: image, alt: heroTitle } : undefined,
    },
    sections,
    cta,
  };
}

const recipeCards = [
  ['Merengues con aquafaba', '/es/recetas-de-aquafaba/merengues/', '/wp-content/uploads/2025/09/AQUAFABA_RECIPES_MINI_LEMON-PIE.webp', 'Crujientes por fuera y ligeros por dentro.'],
  ['Macarons con aquafaba', '/es/recetas-de-aquafaba/macarons/', '/wp-content/uploads/2025/09/AQUAFABA_RECIPES_MINI_MACARON.webp', 'Estructura estable sin clara de huevo.'],
  ['Mayonesa con aquafaba', '/es/recetas-de-aquafaba/mayonesa/', '/wp-content/uploads/2025/09/AQUAFABA_RECIPES_MINI_MAYONNAISE.webp', 'Una emulsión cremosa, estable y vegetal.'],
  ['Whiskey Sour', '/es/recetas-de-aquafaba/whiskey-sour/', '/wp-content/uploads/2025/09/VERYAQUAFABA_RECIPES_MINI_PISCOSOUR.webp', 'Espuma estable para coctelería sin huevo.'],
  ['Mousse de chocolate', '/es/recetas-de-aquafaba/mousse-de-chocolate/', '/wp-content/uploads/2025/09/AQUAFABA_RECIPES_MINI_CHOCOLATE.webp', 'Textura aireada con una base vegetal.'],
  ['Pavlova', '/es/recetas-de-aquafaba/pavlova/', '/wp-content/uploads/2025/09/VERYAQUAFABA_RECIPES_MINI_PAVLOVA.webp', 'Exterior crujiente e interior suave.'],
  ['Proporción aquafaba y huevo', '/es/recetas-de-aquafaba/proporcion-aquafaba-huevo/', '/wp-content/uploads/2025/09/VERYAQUAFABA_RESOURCES_COVER.webp', 'Equivalencias prácticas para sustituir claras.'],
  ['Cómo hacer aquafaba', '/es/recetas-de-aquafaba/como-hacer-aquafaba/', '/wp-content/uploads/2025/09/PHOTO_CHICKPEAS-818x1024.webp', 'Cómo obtenerla y ajustar su concentración.'],
  ['Cómo conservar y congelar aquafaba', '/es/recetas-de-aquafaba/como-conservar-y-congelar-aquafaba/', '/wp-content/uploads/2025/09/PHOTO_CHICKPEAS-818x1024.webp', 'Conservación segura y porciones listas para usar.'],
  ['Aquafaba de la A a la Z', '/es/recetas-de-aquafaba/aquafaba-de-la-a-a-la-z/', '/wp-content/uploads/2025/09/VERYAQUAFABA_RESOURCES_COVER.webp', 'Guía completa de propiedades y usos.'],
  ['Aquafaba en repostería y panadería', '/es/recetas-de-aquafaba/como-usar-aquafaba-en-reposteria-y-panaderia/', '/wp-content/uploads/2025/09/AQUAFABA_RECIPES_MINI_MACARON.webp', 'Montar, ligar y aportar estructura sin huevo.'],
].map(([title, href, image, text]) => ({ title, href, image, text, label: 'Ver receta' }));

export const recipesIndexEs = page({
  title: 'Recetas con aquafaba | VERY AQUAFABA',
  description: 'Recetas, técnicas y guías para cocinar, hornear y preparar cócteles con aquafaba.',
  heroTitle: 'Recetas con aquafaba',
  heroText: 'De merengues y macarons a mayonesa, mousse y cocktails: aprende a aprovechar su capacidad para montar, ligar y emulsionar.',
  image: '/wp-content/uploads/2025/09/VERYAQUAFABA_RESOURCES_COVER.webp',
  sections: [
    { type: 'cards', title: 'Recetas y recursos', items: recipeCards },
  ],
  cta: { title: '¿Necesitas un resultado constante?', text: 'Descubre VERY AQUAFABA en líquido y polvo para uso profesional.', href: '/es/comprar-aquafaba/', label: 'Ver productos' },
});

export const meringuesEs = page({
  title: 'Merengues con aquafaba | VERY AQUAFABA',
  description: 'Cómo preparar merengues con aquafaba: proporciones, batido, azúcar, horneado y consejos para una espuma estable.',
  heroTitle: 'Merengues con aquafaba',
  heroText: 'Una espuma estable y brillante sin clara de huevo.',
  image: '/wp-content/uploads/2025/09/AQUAFABA_RECIPES_MINI_LEMON-PIE.webp',
  sections: [
    { type: 'rich-text', title: 'Ingredientes', html: '<ul><li>100 g de aquafaba líquida</li><li>180–200 g de azúcar fino</li><li>1 cucharadita de zumo de limón o unas gotas de ácido</li><li>Vainilla, opcional</li></ul>' },
    { type: 'rich-text', title: 'Preparación', html: '<ol><li>Bate la aquafaba hasta obtener una espuma blanca y firme.</li><li>Agrega el azúcar poco a poco, sin dejar de batir, hasta que el merengue quede brillante y forme picos estables.</li><li>Incorpora el limón y el aroma.</li><li>Forma los merengues y seca a baja temperatura, aproximadamente 90–110 °C, hasta que estén crujientes por fuera.</li><li>Deja enfriar completamente antes de guardar.</li></ol><p>La estabilidad depende de la concentración de la aquafaba, la incorporación gradual del azúcar y un secado suave.</p>' },
  ],
});

export const macaronsEs = page({
  title: 'Macarons con aquafaba | VERY AQUAFABA',
  description: 'Receta y técnica para preparar macarons sin clara de huevo usando aquafaba.',
  heroTitle: 'Macarons con aquafaba',
  heroText: 'Caparazón fino, pie definido y estructura estable con una base vegetal.',
  image: '/wp-content/uploads/2025/09/AQUAFABA_RECIPES_MINI_MACARON.webp',
  sections: [
    { type: 'rich-text', title: 'Base', html: '<ul><li>Aquafaba concentrada o VERY AQUAFABA</li><li>Azúcar fino</li><li>Harina de almendra</li><li>Azúcar glas</li><li>Colorante, opcional</li></ul>' },
    { type: 'rich-text', title: 'Método', html: '<ol><li>Tamiza la harina de almendra con el azúcar glas.</li><li>Monta la aquafaba y añade el azúcar gradualmente hasta obtener un merengue firme.</li><li>Realiza el macaronage hasta conseguir una masa fluida que caiga en cinta.</li><li>Escudilla, deja reposar hasta formar una película superficial y hornea.</li><li>Enfría antes de despegar y rellena una vez estabilizadas las conchas.</li></ol><p>Para producción profesional, una aquafaba estandarizada reduce la variabilidad entre lotes.</p>' },
  ],
});

export const mayonnaiseEs = page({
  title: 'Mayonesa con aquafaba | VERY AQUAFABA',
  description: 'Mayonesa vegetal con aquafaba: emulsión cremosa y estable sin huevo.',
  heroTitle: 'Mayonesa con aquafaba',
  heroText: 'Una emulsión cremosa y estable sin huevo.',
  image: '/wp-content/uploads/2025/09/AQUAFABA_RECIPES_MINI_MAYONNAISE.webp',
  sections: [
    { type: 'rich-text', title: 'Ingredientes', html: '<ul><li>45 g de aquafaba</li><li>1 cucharadita de mostaza</li><li>1 cucharada de vinagre o limón</li><li>180–220 ml de aceite neutro</li><li>Sal al gusto</li></ul>' },
    { type: 'rich-text', title: 'Preparación', html: '<ol><li>Coloca aquafaba, mostaza, ácido y sal en un vaso alto.</li><li>Empieza a triturar y añade el aceite en hilo fino.</li><li>Continúa hasta que la emulsión espese.</li><li>Ajusta sal, acidez y textura.</li></ol><p>La aquafaba funciona como agente emulsionante y permite una textura similar a una mayonesa clásica.</p>' },
  ],
});

export const chocolateMousseEs = page({
  title: 'Mousse de chocolate con aquafaba | VERY AQUAFABA',
  description: 'Mousse de chocolate aireada y vegetal preparada con aquafaba montada.',
  heroTitle: 'Mousse de chocolate',
  heroText: 'Ligera, aireada y sin clara de huevo.',
  image: '/wp-content/uploads/2025/09/AQUAFABA_RECIPES_MINI_CHOCOLATE.webp',
  sections: [
    { type: 'rich-text', title: 'Ingredientes', html: '<ul><li>120 g de aquafaba</li><li>180–200 g de chocolate negro</li><li>Azúcar al gusto, opcional</li><li>Una pizca de sal</li></ul>' },
    { type: 'rich-text', title: 'Preparación', html: '<ol><li>Derrite el chocolate y deja que baje ligeramente de temperatura.</li><li>Monta la aquafaba hasta picos firmes.</li><li>Incorpora una pequeña parte al chocolate para aligerarlo.</li><li>Añade el resto con movimientos envolventes.</li><li>Refrigera varias horas antes de servir.</li></ol>' },
  ],
});

export const pavlovaEs = page({
  title: 'Pavlova con aquafaba | VERY AQUAFABA',
  description: 'Pavlova sin clara de huevo preparada con aquafaba: exterior crujiente e interior suave.',
  heroTitle: 'Pavlova con aquafaba',
  heroText: 'Crujiente por fuera, suave y aireada por dentro.',
  image: '/wp-content/uploads/2025/09/VERYAQUAFABA_RECIPES_MINI_PAVLOVA.webp',
  sections: [
    { type: 'rich-text', title: 'Preparación', html: '<p>Monta la aquafaba hasta que esté firme y agrega el azúcar gradualmente. Cuando el merengue esté brillante, forma un disco alto con una cavidad central. Hornea a baja temperatura y deja enfriar lentamente dentro del horno. Termina con crema vegetal, fruta fresca o el acompañamiento que prefieras.</p><p>El secado lento ayuda a crear la combinación característica de corteza crujiente y centro tierno.</p>' },
  ],
});

export const eggRatioEs = page({
  title: 'Proporción aquafaba y huevo | VERY AQUAFABA',
  description: 'Equivalencias orientativas entre aquafaba, claras de huevo y huevo entero para cocinar y hornear.',
  heroTitle: '¿Cuánta aquafaba equivale a un huevo?',
  heroText: 'Una guía práctica para sustituir claras y, en algunas aplicaciones, huevo entero.',
  image: '/wp-content/uploads/2025/09/VERYAQUAFABA_RESOURCES_COVER.webp',
  sections: [
    { type: 'rich-text', title: 'Equivalencias orientativas', html: '<p><strong>1 clara de huevo ≈ 30 g de aquafaba líquida.</strong></p><p>Como punto de partida, 2 cucharadas de aquafaba equivalen aproximadamente a una clara. Para aplicaciones de huevo entero suele utilizarse una cantidad mayor y conviene ajustar según la receta.</p><p>VERY AQUAFABA está estandarizada para reducir la variación natural del agua de cocción casera.</p>' },
  ],
});

export const storageEs = page({
  title: 'Cómo conservar y congelar aquafaba | VERY AQUAFABA',
  description: 'Cómo guardar aquafaba en frío, congelarla por porciones y descongelarla antes de usar.',
  heroTitle: 'Cómo conservar y congelar aquafaba',
  heroText: 'Porciones listas para usar y menos desperdicio.',
  image: '/wp-content/uploads/2025/09/PHOTO_CHICKPEAS-818x1024.webp',
  sections: [
    { type: 'rich-text', title: 'Conservación', html: '<p>La aquafaba casera debe mantenerse refrigerada en un recipiente limpio y cerrado y utilizarse en pocos días. Para conservarla más tiempo, congélala en porciones pequeñas —por ejemplo, en cubiteras— y pásala después a un recipiente hermético.</p><p>Descongela en refrigeración y mezcla antes de usar. Si la textura cambia ligeramente, vuelve a homogeneizarla. Los formatos profesionales tienen instrucciones de conservación específicas que deben respetarse.</p>' },
  ],
});

export const aquafaba101Es = page({
  title: 'Aquafaba de la A a la Z | VERY AQUAFABA',
  description: 'Guía completa sobre qué es la aquafaba, por qué funciona y cómo usarla para montar, ligar y emulsionar.',
  heroTitle: 'Aquafaba de la A a la Z',
  heroText: 'Qué es, cómo funciona y dónde aporta valor en cocina y producción.',
  image: '/wp-content/uploads/2025/09/VERYAQUAFABA_RESOURCES_COVER.webp',
  sections: [
    { type: 'rich-text', title: '¿Qué es la aquafaba?', html: '<p>La aquafaba es el líquido de cocción de los garbanzos. Contiene una combinación de proteínas, almidones y otros compuestos solubles que le permiten atrapar aire, estabilizar espumas, ligar ingredientes y favorecer emulsiones.</p>' },
    { type: 'rich-text', title: 'Usos principales', html: '<ul><li>Merengues, macarons y pavlova.</li><li>Mousse y postres aireados.</li><li>Mayonesa y salsas emulsionadas.</li><li>Cócteles tipo sour.</li><li>Ligado y estructura en determinadas masas y preparaciones.</li></ul><p>La concentración importa: una aquafaba demasiado diluida puede necesitar reducción antes de montar.</p>' },
  ],
});

export const makeAquafabaEs = page({
  title: 'Cómo hacer aquafaba | VERY AQUAFABA',
  description: 'Cómo obtener aquafaba a partir de garbanzos cocidos o en conserva y ajustar su concentración.',
  heroTitle: 'Cómo hacer aquafaba',
  heroText: 'Del líquido de los garbanzos a un ingrediente funcional.',
  image: '/wp-content/uploads/2025/09/PHOTO_CHICKPEAS-818x1024.webp',
  sections: [
    { type: 'rich-text', title: 'Método casero', html: '<ol><li>Utiliza el líquido de un frasco de garbanzos o el agua de cocción.</li><li>Cuélalo para retirar partículas.</li><li>Si está muy líquido, redúcelo suavemente hasta obtener una textura ligeramente viscosa.</li><li>Enfría por completo antes de montar.</li></ol><p>El agua de cocción casera cambia según variedad, proporción de agua y proceso. Para resultados repetibles en cocina profesional, una versión estandarizada evita tener que corregir cada lote.</p>' },
  ],
});

export const bakingEs = page({
  title: 'Cómo usar aquafaba en repostería y panadería | VERY AQUAFABA',
  description: 'Guía práctica para usar aquafaba en repostería y panadería como agente de montado, ligado y estructura.',
  heroTitle: 'Aquafaba en repostería y panadería',
  heroText: 'Montar, ligar y aportar estructura sin depender de la clara de huevo.',
  image: '/wp-content/uploads/2025/09/AQUAFABA_RECIPES_MINI_MACARON.webp',
  sections: [
    { type: 'rich-text', title: 'Cómo trabajar con ella', html: '<p>Para espumas, utiliza la aquafaba fría y un recipiente limpio y libre de grasa. Para ligar masas o rellenos, incorpórala como parte de la fase líquida y ajusta el resto de líquidos si es necesario.</p><p>En elaboraciones muy sensibles —macarons, merengues o producción repetitiva— la concentración y la constancia del ingrediente son claves. Un formato estandarizado permite trabajar con proporciones repetibles.</p>' },
  ],
});

export const whiskeySourEs = page({
  title: 'Whiskey Sour con aquafaba | VERY AQUAFABA',
  description: 'Whiskey Sour con espuma de aquafaba: alternativa vegetal a la clara de huevo para coctelería.',
  heroTitle: 'Whiskey Sour con aquafaba',
  heroText: 'Espuma sedosa y estable sin clara de huevo.',
  image: '/wp-content/uploads/2025/09/VERYAQUAFABA_RECIPES_MINI_PISCOSOUR.webp',
  sections: [
    { type: 'rich-text', title: 'Ingredientes', html: '<ul><li>50 ml de whiskey</li><li>25 ml de zumo de limón</li><li>15–20 ml de almíbar</li><li>20–30 ml de aquafaba</li><li>Hielo</li></ul>' },
    { type: 'rich-text', title: 'Preparación', html: '<ol><li>Agita primero sin hielo para desarrollar la espuma.</li><li>Añade hielo y vuelve a agitar con fuerza.</li><li>Cuela en una copa fría y deja que la espuma se estabilice.</li></ol><p>La aquafaba aporta la textura de un sour clásico sin usar huevo crudo.</p>' },
  ],
});

export const privacyEs = page({
  title: 'Política de privacidad | VERY AQUAFABA',
  description: 'Información sobre privacidad y tratamiento de datos en VERY AQUAFABA.',
  heroTitle: 'Política de privacidad',
  heroText: 'Información sobre los datos que pueden tratarse al utilizar este sitio y contactar con VERY Food Company.',
  sections: [
    { type: 'rich-text', title: 'Privacidad', html: '<p>VERY Food Company trata los datos facilitados voluntariamente a través de formularios o comunicaciones para responder consultas comerciales, técnicas o de producto. Los datos deben utilizarse únicamente para la finalidad para la que fueron proporcionados y conservarse durante el tiempo necesario para atender la relación o cumplir obligaciones aplicables.</p><p>Para cuestiones relacionadas con privacidad o ejercicio de derechos, utiliza los datos de contacto publicados en el sitio. Esta versión en español acompaña a la documentación legal vigente del sitio.</p>' },
  ],
});

export const termsEs = page({
  title: 'Términos de uso | VERY AQUAFABA',
  description: 'Términos de uso del sitio VERY AQUAFABA.',
  heroTitle: 'Términos de uso',
  heroText: 'Condiciones generales de acceso y uso del sitio.',
  sections: [
    { type: 'rich-text', html: '<p>El contenido de este sitio se ofrece con fines informativos y comerciales sobre VERY AQUAFABA y VERY Food Company. Las marcas, imágenes, textos y materiales asociados están protegidos por sus respectivos derechos. El uso del sitio no concede licencias sobre dichos contenidos salvo autorización expresa.</p><p>Las especificaciones de producto, disponibilidad y condiciones comerciales pueden cambiar; para decisiones de compra o aplicación industrial deben consultarse las fichas técnicas y condiciones vigentes.</p>' },
  ],
});

export const legalNoticeEs = page({
  title: 'Aviso legal | VERY AQUAFABA',
  description: 'Información legal de VERY Food Company.',
  heroTitle: 'Aviso legal',
  heroText: 'Información corporativa de VERY Food Company.',
  sections: [
    { type: 'rich-text', html: '<p><strong>VERY Food Company SAS</strong><br>CP 50 169 94597 Rungis Cedex | FRANCE<br>R.C.S. Créteil 909 030 140<br>TVA FR34909030140<br>APE 72.19Z</p><p>Contacto: <a href="mailto:orders@theveryfood.co">orders@theveryfood.co</a></p>' },
  ],
});

export const constructionEs = page({
  title: 'Página en construcción | VERY AQUAFABA',
  description: 'Esta sección de VERY AQUAFABA está en construcción.',
  heroTitle: 'Página en construcción',
  heroText: 'Estamos terminando esta sección. Mientras tanto puedes consultar nuestros productos y recetas.',
  sections: [],
  cta: { title: 'Seguir explorando', href: '/es/', label: 'Volver al inicio' },
});

export const notFoundEs = page({
  title: 'Página no encontrada | VERY AQUAFABA',
  description: 'La página solicitada no está disponible.',
  heroTitle: 'Página no encontrada',
  heroText: 'La URL que buscas no está disponible o ha cambiado.',
  sections: [],
  cta: { title: 'Volver a VERY AQUAFABA', href: '/es/', label: 'Ir al inicio' },
});

export const spanishNativePages = {
  '/es/recetas-de-aquafaba/': recipesIndexEs,
  '/es/recetas-de-aquafaba/merengues/': meringuesEs,
  '/es/recetas-de-aquafaba/macarons/': macaronsEs,
  '/es/recetas-de-aquafaba/mayonesa/': mayonnaiseEs,
  '/es/recetas-de-aquafaba/mousse-de-chocolate/': chocolateMousseEs,
  '/es/recetas-de-aquafaba/pavlova/': pavlovaEs,
  '/es/recetas-de-aquafaba/proporcion-aquafaba-huevo/': eggRatioEs,
  '/es/recetas-de-aquafaba/como-conservar-y-congelar-aquafaba/': storageEs,
  '/es/recetas-de-aquafaba/aquafaba-de-la-a-a-la-z/': aquafaba101Es,
  '/es/recetas-de-aquafaba/como-hacer-aquafaba/': makeAquafabaEs,
  '/es/recetas-de-aquafaba/como-usar-aquafaba-en-reposteria-y-panaderia/': bakingEs,
  '/es/recetas-de-aquafaba/whiskey-sour/': whiskeySourEs,
  '/es/politica-de-privacidad/': privacyEs,
  '/es/terminos-de-uso/': termsEs,
  '/es/aviso-legal/': legalNoticeEs,
  '/es/404-error/': notFoundEs,
  '/es/en-construccion/': constructionEs,
};
