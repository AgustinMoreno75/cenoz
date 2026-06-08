export type NavigationItem = {
  href: string;
  label: string;
};

export type ContactNumber = {
  label: string;
  display: string;
  href: string;
  raw: string;
};

export type ProductCategory =
  | "sanitarios"
  | "modulos"
  | "atmosfericos";

export type ProductFilter = ProductCategory | "todos";

export type Product = {
  slug: string;
  title: string;
  badge: string;
  category: ProductCategory;
  shortDescription: string;
  description: string;
  seoDescription: string;
  image: string;
  imageAlt: string;
  features: string[];
  applications: string[];
};

export type FAQItem = {
  question: string;
  answer: string;
};

export const siteConfig = {
  name: "CENOZ",
  brandLabel: "Soluciones modulares, sanitarias y operativas",
  defaultTitle: "CENOZ | Módulos portátiles, baños químicos y equipos atmosféricos",
  description:
    "Módulos portátiles, baños químicos y equipos atmosféricos para empresas, obras, municipios y operaciones desde Bahía Blanca.",
  siteUrl: "https://cenoz.com",
  email: "cenoz@cenoz.com",
  whatsappNumber: "2916436899",
  whatsappRaw: "5492916436899",
  whatsappDisplay: "+54 9 291 643-6899",
  whatsappBaseLink: "https://wa.me/5492916436899",
  primaryPhoneDisplay: "(0291) 453-1990",
  primaryPhoneRaw: "+542914531990",
  phoneDisplay: "Teléfono: (0291) 453-1990",
  phoneRaw: "+542914531990",
  phoneLink: "tel:+542914531990",
  contactNumbers: [
    {
      label: "Teléfono",
      display: "(0291) 453-1990",
      href: "tel:+542914531990",
      raw: "+542914531990",
    },
  ] as ContactNumber[],
  addressLine: "Montevideo 849 | B8000KFQ | Bahía Blanca",
  addressLocality: "Bahía Blanca",
  addressRegion: "Buenos Aires",
  addressCountry: "AR",
  postalCode: "B8000KFQ",
  mapsQuery: "Montevideo 849 Bahía Blanca Buenos Aires Argentina",
  coordinates: {
    latitude: -38.7196,
    longitude: -62.2724,
  },
  coverageZones: ["Bahía Blanca"],
  hours: [] as string[],
  defaultKeywords: [
    "módulos portátiles",
    "módulos habitacionales",
    "baños portátiles",
    "cabinas de vigilancia",
    "baños químicos",
    "baños químicos autoservice",
    "baños químicos cloacales",
    "baños químicos para discapacidad",
    "equipos atmosféricos",
    "trailers petroleros",
    "alquiler de módulos",
    "alquiler de baños químicos",
    "Bahía Blanca",
  ],
} as const;

export const navigation: NavigationItem[] = [
  { href: "/", label: "Inicio" },
  { href: "/productos", label: "Productos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export const heroStats = [
  {
    value: "Soluciones",
    label: "catálogo real para módulos portátiles, baños químicos y equipos atmosféricos",
  },
  {
    value: "Conveniencia",
    label: "consultas por WhatsApp, formulario web, email y llamada telefónica",
  },
  {
    value: "Experiencia",
    label: "respuesta para empresas, obras, municipios y operaciones reales",
  },
];

export const demoMedia = {
  hero: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Isuzu_Giga_EXR_Tractor_Head_with_Oil_Tanker_Trailer.jpg/1280px-Isuzu_Giga_EXR_Tractor_Head_with_Oil_Tanker_Trailer.jpg",
    alt: "Trailer petrolero circulando en ruta",
  },
  about: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Mairie_de_Montrouge_-_Chantier_de_construction_du_m%C3%A9tro_%285%29.JPG/1280px-Mairie_de_Montrouge_-_Chantier_de_construction_du_m%C3%A9tro_%285%29.JPG",
    alt: "Módulos de obra apilados en un frente de construcción",
  },
} as const;

export const companyStats = [
  { value: "Empresas", label: "segmento prioritario para la nueva etapa comercial de CENOZ" },
  { value: "Obras", label: "consultas frecuentes por módulos y baños para infraestructura" },
  { value: "Respuesta directa", label: "canales ágiles para cotizar sin precios públicos" },
];

export const advantages = [
  {
    title: "Soluciones",
    description:
      "Oferta actual organizada en módulos portátiles, baños químicos y equipos atmosféricos para resolver rápido y con claridad.",
    icon: "solutions",
  },
  {
    title: "Conveniencia",
    description:
      "WhatsApp, formulario web, email y llamada para acompañar la consulta según la preferencia de cada cliente.",
    icon: "delivery",
  },
  {
    title: "Experiencia",
    description:
      "Respuesta enfocada en empresas, constructoras, municipios, eventos y contextos donde la operación no puede esperar.",
    icon: "trust",
  },
  {
    title: "Entrega inmediata",
    description:
      "Disponibilidad y respuesta comercial ágil para coordinar entregas rápidas cuando la operación necesita resolverse sin demora.",
    icon: "speed",
  },
] as const;

export const products: Product[] = [
  {
    slug: "trailers-petroleros-12-mts",
    title: "Trailers petroleros de paneles",
    badge: "Módulos portátiles",
    category: "modulos",
    shortDescription:
      "Unidades de 12 mts para apoyo petrolero, logística y operación en campo.",
    description:
      "Solución móvil orientada a empresas que necesitan soporte petrolero, presencia operativa y una estructura lista para responder en obra o campo.",
    seoDescription:
      "Trailers petroleros de 12 mts en Bahía Blanca para operaciones petroleras, industriales y de apoyo en campo.",
    image: "/images/trailer-petrolero-1.jpg",
    imageAlt: "Trailer petrolero industrial sobre ruta",
    features: [
      "Formato de 12 mts.",
      "Pensados para apoyo petrolero y operación en campo.",
      "Consulta según disponibilidad y necesidad del proyecto.",
    ],
    applications: [
      "Operaciones petroleras y energéticas.",
      "Apoyo logístico en frentes de trabajo.",
      "Empresas con necesidades móviles de soporte técnico.",
    ],
  },
  {
    slug: "trailer-petrolero-tradicional",
    title: "Trailer petrolero tradicional",
    badge: "Módulos portátiles",
    category: "modulos",
    shortDescription:
      "Unidades de 12 mts para apoyo petrolero, logística y operación en campo.",
    description:
      "Solución móvil orientada a empresas que necesitan soporte petrolero, presencia operativa y una estructura lista para responder en obra o campo.",
    seoDescription:
      "Trailer petrolero tradicional de 12 mts en Bahía Blanca para operaciones petroleras, industriales y de apoyo en campo.",
    image: "/images/trailer-petrolero-tradicional.jpg",
    imageAlt: "Trailer petrolero tradicional blanco en traslado dentro de un predio operativo",
    features: [
      "Formato de 12 mts.",
      "Pensados para apoyo petrolero y operación en campo.",
      "Consulta según disponibilidad y necesidad del proyecto.",
    ],
    applications: [
      "Operaciones petroleras y energéticas.",
      "Apoyo logístico en frentes de trabajo.",
      "Empresas con necesidades móviles de soporte técnico.",
    ],
  },
  {
    slug: "modulos-portatiles-habitacionales",
    title: "Módulos portátiles habitacionales (6 mts)",
    badge: "Producto destacado",
    category: "modulos",
    shortDescription:
      "Módulos de 6 mts para permanencia, descanso y apoyo diario en obra.",
    description:
      "La línea que CENOZ quiere destacar: módulos habitacionales de 6 mts pensados para empresas y obras que necesitan resolver rápido, claro y sin fricción.",
    seoDescription:
      "Módulos portátiles habitacionales de 6 mts en Bahía Blanca para obras, empresas y bases operativas.",
    image: "/images/modulo-portatil.jpg",
    imageAlt: "Módulos portátiles habitacionales y oficinas de obra en contenedores",
    features: [
      "Formato habitacional de 6 mts.",
      "Pensados para permanencia de personal y apoyo en infraestructura.",
      "Alta demanda en obras y proyectos de empresas.",
    ],
    applications: [
      "Obras de infraestructura.",
      "Bases operativas temporales.",
      "Empresas que necesitan resolver alojamiento o apoyo rápido.",
    ],
  },
  {
    slug: "modulos-habitacionales-tradicional",
    title: "Módulos habitacionales (Tradicional)",
    badge: "Producto destacado",
    category: "modulos",
    shortDescription:
      "Módulos de 6 mts para permanencia, descanso y apoyo diario en obra.",
    description:
      "La línea que CENOZ quiere destacar: módulos habitacionales de 6 mts pensados para empresas y obras que necesitan resolver rápido, claro y sin fricción.",
    seoDescription:
      "Módulos habitacionales tradicionales de 6 mts en Bahía Blanca para obras, empresas y bases operativas.",
    image: "/images/ModuloHabitacionalTradicional.jpg",
    imageAlt: "Módulo habitacional tradicional blanco en un predio operativo",
    features: [
      "Formato habitacional de 6 mts.",
      "Pensados para permanencia de personal y apoyo en infraestructura.",
      "Alta demanda en obras y proyectos de empresas.",
    ],
    applications: [
      "Obras de infraestructura.",
      "Bases operativas temporales.",
      "Empresas que necesitan resolver alojamiento o apoyo rápido.",
    ],
  },
  {
    slug: "modulos-con-kit-rodante",
    title: "Modulos con kit rodante",
    badge: "Producto destacado",
    category: "modulos",
    shortDescription:
      "Módulos de 6 mts con kit rodante para permanencia, descanso y apoyo diario en obra.",
    description:
      "Módulos con kit rodante pensados para empresas y obras que necesitan una solución habitable móvil, clara y lista para operar sin fricción.",
    seoDescription:
      "Módulos con kit rodante de 6 mts en Bahía Blanca para obras, empresas y bases operativas con traslado práctico.",
    image: "/images/modulo-rodante.jpg",
    imageAlt: "Módulos blancos con kit rodante en un predio operativo",
    features: [
      "Formato habitacional de 6 mts con kit rodante.",
      "Pensados para permanencia de personal y apoyo en infraestructura.",
      "Alta demanda en obras y proyectos de empresas.",
    ],
    applications: [
      "Obras de infraestructura.",
      "Bases operativas temporales.",
      "Empresas que necesitan resolver alojamiento o apoyo rápido.",
    ],
  },
  {
    slug: "banos-portatiles",
    title: "Baños químicos y cloacales",
    badge: "Solución sanitaria",
    category: "sanitarios",
    shortDescription:
      "Modelos tradicionales, autoservice, cloacales y para personas con discapacidad.",
    description:
      "Línea sanitaria con modelos tradicionales, autoservice, cloacales y adaptados para personas con discapacidad, pensada para obras, empresas y operativos que necesitan resolver higiene con practicidad.",
    seoDescription:
      "Baños químicos y cloacales en Bahía Blanca para obras, empresas y operativos, con modelos tradicionales, autoservice y adaptados.",
    image: "/images/banos-portatiles.jpg",
    imageAlt: "Baños portátiles blancos exhibidos en un galpón",
    features: [
      "Versiones tradicionales.",
      "Modelos autoservice, cloacales y adaptados para personas con discapacidad.",
      "Consulta según cantidad, permanencia y tipo de operación.",
    ],
    applications: [
      "Obras de infraestructura y construcción.",
      "Empresas e industria.",
      "Operativos, predios y necesidades sanitarias temporales.",
    ],
  },
  {
    slug: "cabinas-de-vigilancia",
    title: "Cabinas de vigilancia",
    badge: "Control de acceso",
    category: "modulos",
    shortDescription:
      "Cabinas de 1.30, 2.20, 2.40, 2.50 y 6 mts para control, ingreso y permanencia.",
    description:
      "Cabinas pensadas para control de acceso, vigilancia y presencia operativa en empresas, predios, obras y puntos de ingreso donde hace falta claridad y resguardo.",
    seoDescription:
      "Cabinas de vigilancia en Bahía Blanca en medidas de 1.30 a 6 mts para control de acceso y seguridad operativa.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Guard_booth_20190426_135110.jpg/1280px-Guard_booth_20190426_135110.jpg",
    imageAlt: "Cabina de vigilancia en un predio industrial",
    features: [
      "Medidas disponibles: 1.30, 2.20, 2.40, 2.50 y 6 mts.",
      "Pensadas para ingresos, accesos y puntos de control.",
      "Aplicables a empresas, obras, municipios y predios.",
    ],
    applications: [
      "Control de accesos en obras y plantas.",
      "Predios logísticos o industriales.",
      "Municipios y espacios con control de ingreso.",
    ],
  },
  {
    slug: "banos-quimicos",
    title: "Baños químicos",
    badge: "Solución sanitaria",
    category: "sanitarios",
    shortDescription:
      "Modelos tradicionales, autoservice, cloacales y para personas con discapacidad.",
    description:
      "Línea sanitaria orientada a obras, empresas, municipios y eventos que necesitan resolver higiene con rapidez, claridad y buena disponibilidad.",
    seoDescription:
      "Baños químicos en Bahía Blanca para obras, empresas, municipios y eventos, con modelos tradicionales, autoservice y adaptados.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/WTB_Portable_toilets_1.jpg/1280px-WTB_Portable_toilets_1.jpg",
    imageAlt: "Fila de baños químicos portátiles en un evento",
    features: [
      "Versiones tradicionales.",
      "Modelos autoservice, cloacales y adaptados para personas con discapacidad.",
      "Consulta según cantidad, permanencia y tipo de operación.",
    ],
    applications: [
      "Obras de infraestructura.",
      "Empresas e industria.",
      "Municipios, eventos y operativos especiales.",
    ],
  },
  {
    slug: "equipos-atmosfericos",
    title: "Equipos atmosféricos",
    badge: "Servicio operativo",
    category: "atmosfericos",
    shortDescription:
      "Respuesta para saneamiento y apoyo operativo en contextos que exigen intervención específica.",
    description:
      "Equipos atmosféricos orientados a resolver necesidades de saneamiento y apoyo operativo con una respuesta concreta para empresas, obras y servicios especiales.",
    seoDescription:
      "Equipos atmosféricos en Bahía Blanca para saneamiento, apoyo operativo y necesidades técnicas específicas.",
    image: "/images/equipo-atmosferico.jpg",
    imageAlt: "Equipo atmosférico portátil con mangueras amarillas frente a un galpón",
    features: [
      "Respuesta para situaciones que requieren equipamiento atmosférico.",
      "Aplicación en empresas, obras y servicios operativos especiales.",
      "Atención comercial directa para evaluar la alternativa conveniente.",
    ],
    applications: [
      "Saneamiento y mantenimiento operativo.",
      "Intervenciones específicas en obra o industria.",
      "Empresas que necesitan resolver con rapidez y criterio.",
    ],
  },
  {
    slug: "productos-a-medida",
    title: "Productos a medida",
    badge: "Proyecto personalizado",
    category: "modulos",
    shortDescription:
      "Productos personalizados desarrollados a medida según la necesidad real de cada cliente.",
    description:
      "Productos a medida pensados para empresas, industria y operaciones que necesitan una solución personalizada, fabricada según espacio, uso y requerimientos concretos.",
    seoDescription:
      "Productos a medida en Bahía Blanca con módulos personalizados para empresas, industria y operaciones con requerimientos específicos.",
    image: "/images/proyectos-a-medida.jpg",
    imageAlt: "Módulo personalizado fabricado por CENOZ para una operación industrial",
    features: [
      "Diseños personalizados según operación y espacio disponible.",
      "Configuraciones a medida para empresas, industria y proyectos especiales.",
      "Definición comercial directa de formato, terminaciones y uso real.",
    ],
    applications: [
      "Plantas industriales y predios corporativos.",
      "Obras con requerimientos específicos.",
      "Espacios operativos diseñados a medida para cada necesidad.",
    ],
  },
];

export const productCategoryLabels: Record<ProductCategory, string> = {
  modulos: "Módulos portátiles",
  sanitarios: "Sanitarios",
  atmosfericos: "Equipos atmosféricos",
};

export const productFilterOptions: Array<{ value: ProductFilter; label: string }> = [
  { value: "todos", label: "Todos" },
  { value: "modulos", label: "Módulos portátiles" },
  { value: "sanitarios", label: "Sanitarios" },
  { value: "atmosfericos", label: "Equipos atmosféricos" },
];

export const galleryItems = [
  {
    title: "Módulos habitacionales",
    description:
      "La línea que el cliente quiere destacar: módulos de 6 mts para empresas, obras y apoyo operativo.",
    image: products[1].image,
    imageAlt: products[1].imageAlt,
    layout: "wide",
  },
  {
    title: "Trailers petroleros",
    description:
      "Unidades de 12 mts para operación petrolera y soporte técnico en campo.",
    image: products[0].image,
    imageAlt: products[0].imageAlt,
    layout: "tall",
  },
  {
    title: "Baños químicos",
    description:
      "Versiones tradicionales, autoservice, cloacales y para personas con discapacidad.",
    image: products[4].image,
    imageAlt: products[4].imageAlt,
    layout: "standard",
  },
  {
    title: "Equipos atmosféricos",
    description:
      "Respuesta para saneamiento y apoyo operativo cuando la intervención debe resolverse sin demoras.",
    image: products[5].image,
    imageAlt: products[5].imageAlt,
    layout: "standard",
  },
] as const;

export const faqs: FAQItem[] = [
  {
    question: "¿Qué productos comercializa CENOZ?",
    answer:
      "CENOZ ofrece trailers petroleros de 12 mts, módulos portátiles habitacionales de 6 mts, pañoles y obradores de 4 y 6 mts, cabinas de vigilancia, baños químicos y equipos atmosféricos.",
  },
  {
    question: "¿Qué quieren destacar especialmente en la nueva web?",
    answer:
      "Todos los productos son importantes, pero el foco principal está puesto en módulos portátiles, seguidos por baños químicos y equipos atmosféricos.",
  },
  {
    question: "¿Quiénes suelen consultar o contratar?",
    answer:
      "Empresas, constructoras, municipios, eventos y clientes que necesitan resolver infraestructura o servicios sanitarios para operación real.",
  },
  {
    question: "¿Cómo solicito una cotización?",
    answer:
      "Podés escribir por WhatsApp, completar el formulario web, enviar un email o llamar. CENOZ prefiere cotizar de forma directa y no publicar precios en la web.",
  },
  {
    question: "¿Qué datos pide el formulario?",
    answer:
      "La consulta solicita razón social o nombre de la empresa, CUIT, nombre y apellido de quien consulta, teléfono, email y el detalle del producto o servicio de interés.",
  },
];

export const workflowSteps = [
  {
    title: "Consulta y relevamiento",
    description:
      "Recibimos la consulta y relevamos producto, formato, cantidad y contexto de uso.",
  },
  {
    title: "Conveniencia operativa",
    description:
      "Sugerimos la alternativa más conveniente según empresa, obra, municipio o evento.",
  },
  {
    title: "Propuesta comercial",
    description:
      "Armamos una respuesta directa sin precios públicos, enfocada en la necesidad real del cliente.",
  },
  {
    title: "Coordinación",
    description:
      "Definimos disponibilidad, continuidad y pasos siguientes para avanzar con claridad.",
  },
];

export function buildMailtoLink(subject: string, bodyLines: string[] = []) {
  const query = new URLSearchParams({
    subject,
    body: bodyLines.join("\n"),
  });

  return `mailto:${siteConfig.email}?${query.toString()}`;
}

export function buildMapsLink() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.mapsQuery)}`;
}

export function buildWhatsAppLink(message: string) {
  return `${siteConfig.whatsappBaseLink}?text=${encodeURIComponent(message)}`;
}