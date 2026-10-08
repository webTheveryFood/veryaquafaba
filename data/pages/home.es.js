import { homeEn } from './home.en';
import { siteLanguages, footerContentEs } from '../site';

export const homeEs = {
  ...homeEn,
  currentLanguage: 'ES',
  languages: siteLanguages,
  logoHref: '/es/',
  navigation: [
    { label: 'Sobre nosotros', href: '/es/' },
    { label: 'Productos', href: '/es/comprar-aquafaba/' },
    { label: 'Recetas', href: '/es/recetas-de-aquafaba/' },
    { label: 'Contacto', href: '/es/comprar-aquafaba/#contact' },
  ],
  footer: footerContentEs,
  seo: {
    ...homeEn.seo,
    title: '¿Qué es la aquafaba? | VERY AQUAFABA – Alternativa vegetal al huevo',
    description: 'Descubre VERY AQUAFABA, una alternativa vegetal a la clara de huevo para chefs, pastelerías, coctelería y fabricantes. Disponible en formato líquido y en polvo.',
  },
  hero: {
    ...homeEn.hero,
    title: '¡Adiós a las claras de huevo!',
    primaryAction: { label: 'descubre la aquafaba', href: '/es/comprar-aquafaba/' },
    secondaryAction: { label: 'solicita muestras gratis', href: '/es/comprar-aquafaba/#contact' },
  },
  about: {
    ...homeEn.about,
    title: '¿Qué es la aquafaba?',
    leftImage: homeEn.about.leftImage,
    rightImage: homeEn.about.rightImage,
    paragraphs: [
      'La aquafaba es el líquido de cocción de los garbanzos, pero en las manos adecuadas se convierte en un potente sustituto de la clara de huevo en una gran variedad de recetas. También puede reemplazar al huevo entero en determinadas aplicaciones gracias a sus propiedades naturales para emulsionar y ligar.',
      'Nuestra solución, VERY AQUAFABA, es una alternativa vegetal al huevo desarrollada para cocinas profesionales y producción industrial. Ofrece el rendimiento de la clara de huevo sin alérgenos, sin los riesgos de suministro y con una conservación mucho más sencilla.',
      'A diferencia del agua de garbanzos casera, se procesa cuidadosamente para eliminar olores no deseados, mantener una concentración constante y garantizar resultados previsibles lote tras lote. Está disponible en formato líquido y en polvo, monta espumas estables para merengues, postres y cócteles, y liga de forma fiable en productos horneados y salsas como la mayonesa.',
      'Montar, ligar y emulsionar: VERY AQUAFABA es una alternativa clean-label al huevo que ofrece un rendimiento constante para chefs, pastelerías, bartenders y fabricantes de Europa, Norteamérica y Australia.',
    ],
    action: { label: 'saber más', href: '/es/comprar-aquafaba/' },
  },
  products: {
    ...homeEn.products,
    title: 'POLVO O LÍQUIDO, TÚ ELIGES',
    subtitle: 'Dos versiones, infinitas posibilidades',
    items: [
      {
        ...homeEn.products.items[0],
        titleImage: homeEn.products.items[0].titleImage,
        text: 'Fácil de almacenar y dosificar, ideal para fábricas, pastelerías y cocinas profesionales.',
      },
      {
        ...homeEn.products.items[1],
        titleImage: homeEn.products.items[1].titleImage,
        text: 'Listo para servir y usar, perfecto para pastelerías, bares y cocinas.',
      },
    ],
    action: { label: 'ver productos', href: '/es/comprar-aquafaba/' },
  },
  benefits: {
    ...homeEn.benefits,
    title: '¿por qué los profesionales eligen VERY AQUAFABA?',
    items: [
      { ...homeEn.benefits.items[0], text: 'Espumas firmes y emulsiones duraderas' },
      { ...homeEn.benefits.items[1], text: 'Mejora la estabilidad del producto' },
      { ...homeEn.benefits.items[2], text: 'Sin huevo, lácteos, gluten ni soja' },
      { ...homeEn.benefits.items[3], text: 'Reduce CO₂ y desperdicio alimentario' },
      { ...homeEn.benefits.items[4], text: 'Ahorra almacenamiento y reduce mermas' },
    ],
  },
  recipes: {
    ...homeEn.recipes,
    title: 'de macarons a mayonesa',
    subtitle: 'La aquafaba no es solo un sustituto: es una herramienta versátil para la cocina moderna',
    items: [
      { ...homeEn.recipes.items[0], title: 'merengues', text: 'Crujientes por fuera, suaves por dentro' },
      { ...homeEn.recipes.items[1], title: 'macarons', text: 'Estructura perfecta sin huevo' },
      { ...homeEn.recipes.items[2], title: 'mayonesa', text: 'Emulsiones cremosas y estables' },
      { ...homeEn.recipes.items[3], title: 'cócteles', text: 'Sours y fizzes con espuma estable' },
      { ...homeEn.recipes.items[4], title: 'bizcochos', text: 'Volumen ligero y estable' },
      { ...homeEn.recipes.items[5], title: 'pavlova', text: 'Exterior crujiente e interior suave' },
    ],
  },
  industry: {
    ...homeEn.industry,
    title: 'CON LA CONFIANZA DE LA INDUSTRIA ALIMENTARIA',
    subtitle: 'Chefs, distribuidores y fabricantes confían en nosotros',
  },
  cta: {
    ...homeEn.cta,
    title: '¿Listo para cocinar de forma más inteligente?',
    subtitle: 'Lleva VERY AQUAFABA a tu cocina o línea de producción',
    primaryAction: { label: 'ver productos', href: '/es/comprar-aquafaba/' },
    secondaryAction: { label: 'solicita muestras gratis', href: '/es/comprar-aquafaba/#contact' },
  },
};
