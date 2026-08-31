import { buyEn } from './buy.en.js';
import { buyLanguages } from '../buy-languages.js';
import { footerContentEs } from '../site.js';

export const buyEs = {
  ...buyEn,
  page: {
    locale: 'es-ES',
    currentLanguage: 'ES',
    elementorPageId: '85',
    logoHref: '/es/',
    headerIds: buyEn.page.headerIds,
  },
  navigation: [
    { label: 'Sobre nosotros', href: '/es/' },
    { label: 'Productos', href: '/es/comprar-aquafaba/' },
    { label: 'Recetas', href: '/es/recetas-de-aquafaba/' },
    { label: 'Contacto', href: '/es/comprar-aquafaba/#contact' },
  ],
  seo: {
    ...buyEn.seo,
    title: 'Productos - VERY AQUAFABA',
    description: 'Descubre VERY AQUAFABA líquido y en polvo, una alternativa vegetal a la clara de huevo diseñada para cocinas profesionales y producción industrial.',
  },
  languages: buyLanguages,
  footer: footerContentEs,
  hero: {
    ...buyEn.hero,
    // Los títulos dentro de los SVG no tienen versión ES; se conservan en inglés.
    titleImage: buyEn.hero.titleImage,
    title: 'Tu elección, infinitas creaciones',
    titleAlt: 'DOS VERSIONES',
    products: buyEn.hero.products,
    actions: [
      { label: 'solicitar fichas técnicas', href: '#contact' },
      { label: 'pedir muestras gratis', href: '#contact' },
    ],
  },
  intro: {
    ...buyEn.intro,
    title: 'Más que agua de garbanzos',
    paragraphs: [
      'La aquafaba es el líquido que se obtiene al cocinar garbanzos. Aunque hace años que se utiliza en cocinas domésticas, los resultados pueden ser variables.',
      'VERY AQUAFABA transforma esta base natural en un ingrediente profesional: filtrado, refinado y estandarizado para ofrecer un rendimiento fiable en cada lote. De sabor neutro, clean label y fácil de usar, aporta una capacidad estable para montar, ligar y emulsionar en cocinas, pastelerías y procesos industriales a gran escala.',
    ],
  },
  technical: {
    ...buyEn.technical,
    title: 'ESPECIFICACIONES TÉCNICAS',
    items: [
      'Vida útil: de 6 a 24 meses según el formato',
      'Conservación: a temperatura ambiente para el polvo; refrigerado para el líquido después de abrir',
      'Origen: garbanzos cultivados en Europa',
      'Certificaciones: Vegan, sin alérgenos, clean-label, HALAL, KOSHER, NUTRISCORE A',
    ],
    action: { label: 'solicitar fichas técnicas', href: '#contact' },
  },
  comparison: {
    ...buyEn.comparison,
    title: '¿Mejor que los huevos?',
    subtitle: 'Tú decides',
    featureLabel: 'CARACTERÍSTICA',
    eggsLabel: 'HUEVOS',
    rows: [
      { feature: 'Sin alérgenos', egg: 'Alérgeno principal' },
      { feature: 'Sin colesterol', egg: 'Contienen colesterol' },
      { feature: 'Larga conservación', egg: 'Requieren refrigeración y tienen una vida útil limitada' },
      { feature: 'Seguridad alimentaria', egg: 'Riesgos microbiológicos y de contaminación' },
      { feature: 'Estabilidad de precio', egg: 'Varían con costes, enfermedades y problemas de suministro' },
      { feature: 'Origen vegetal', egg: 'Producto de origen animal' },
      { feature: 'Eficiencia de recursos', egg: 'Producción animal intensiva en recursos' },
    ],
  },
  formats: {
    ...buyEn.formats,
    title: 'ELIGE EL FORMATO QUE MEJOR TE FUNCIONE',
    items: [
      { ...buyEn.formats.items[0], altWord: 'POLVO', lines: [['BOLSA 200g', '= 100 claras'], ['BOLSA 500g', '= 250 claras'], ['BOLSA 5kg', '= 2500 claras']] },
      { ...buyEn.formats.items[1], altWord: 'LÍQUIDO', lines: [['TETRAPAK 1L', '= 33 claras'], ['BAG-IN-BOX 5L', '= 165 claras'], ['IBC 1T', '= 33.000 claras']] },
    ],
    action: { label: 'pedir muestras gratis', href: '#contact' },
  },
  industrial: {
    ...buyEn.industrial,
    title: 'FABRICANTES INDUSTRIALES',
    subtitle: 'ESCALA CON CONFIANZA',
    text: 'Desde pruebas de laboratorio hasta producción a gran escala, VERY AQUAFABA crece con tu operación. Disponible en formatos líquidos y en polvo a granel, está diseñado para integrarse de forma fluida en líneas de producción industrial y ofrecer el mismo rendimiento fiable tanto en lotes piloto como en producciones completas.',
    action: { label: 'pedir muestras gratis', href: '#contact' },
  },
  howToBuy: {
    ...buyEn.howToBuy,
    title: 'CÓMO COMPRAR',
    subtitle: 'Encuentra VERY AQUAFABA a través de nuestros distribuidores',
  },
  faq: {
    title: 'PREGUNTAS FRECUENTES',
    items: [
      ['P: ¿Qué es la aquafaba?', 'R: El líquido obtenido al cocinar garbanzos.'],
      ['P: ¿Puedo hacerla en casa?', 'R: SÍ, guarda el agua de los garbanzos y redúcela si está demasiado líquida.'],
      ['P: ¿Qué es VERY AQUAFABA?', 'R: Una versión estandarizada para uso profesional\ne industrial.'],
      ['P: ¿Cuánto equivale a una clara?', 'R: VERY AQUAFABA Líquido 1L = 33 claras\n⮕ 1 clara ≈ 30g de líquido\nVERY AQUAFABA Polvo 200G = 100 claras\n⮕ 1 clara ≈ 2g de polvo'],
      ['P: ¿Sirve para merengues?', 'R: SÍ, se bate con azúcar igual que las claras.'],
      ['P: ¿Sirve para cócteles?', 'R: SÍ, es ideal para sours con espuma.'],
      ['P: ¿Sirve para mayonesa?', 'R: SÍ, permite emulsiones estables y cremosas sin huevo.'],
      ['P: ¿Tiene sabor a garbanzo?', 'R: NO, tiene sabor neutro.'],
      ['P: ¿Cuál es su vida útil?', 'R: Hasta 24 meses, según el formato.'],
    ].map(([question, answer]) => ({ question, answer })),
  },
  contact: {
    ...buyEn.contact,
    title: '¡Contacta con nosotros!',
    subtitle: 'Tanto si buscas formatos pequeños para tu cocina como grandes volúmenes para tu línea de producción, estamos aquí para ayudarte.',
    formLocale: 'es-ES',
    formLabels: {
      name: 'Tu nombre',
      email: 'Tu correo electrónico',
      message: 'Tu mensaje',
      submit: 'Enviar mensaje',
      aria: 'Formulario de contacto',
    },
    businessTitle: 'DATOS DE CONTACTO COMERCIAL',
    headquartersLabel: 'SEDE CENTRAL:',
    rdLabel: 'I+D:',
    emailLabel: 'Email',
    interests: ['Pedir muestras gratis', 'Solicitar fichas técnicas', 'Otras consultas'],
  },
};
