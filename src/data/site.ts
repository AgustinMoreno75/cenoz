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
  | "atmosfericos"
  | "especiales";

export type ProductFilter = ProductCategory | "todos";

export type ProductAvailability = "Alta" | "Media" | "Baja";

export type ProductImage = {
  src: string;
  alt: string;
};

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
  galleryImages?: ProductImage[];
  technicalSpecifications?: string[];
  availability?: ProductAvailability;
  features: string[];
  applications: string[];
};

export type FAQItem = {
  question: string;
  answer: string;
};

export const siteConfig = {
  name: "CENOZ",
  brandLabel: "MÓDULOS PORTÁTILES, BAÑOS QUÍMICOS Y EQUIPOS ATMOSFÉRICOS",
  defaultTitle: "CENOZ | Módulos portátiles, baños químicos y equipos atmosféricos",
  description:
    "Soluciones modulares industriales desde Bahía Blanca a toda la República Argentina, con venta y alquiler de módulos portátiles, baños químicos y equipos atmosféricos.",
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
  coverageZones: ["Toda la República Argentina"],
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
    "República Argentina",
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
      "Trailers petroleros de 12 mts desde Bahía Blanca a toda la República Argentina para operaciones petroleras, industriales y de apoyo en campo.",
    image: "/images/trailer-petrolero-1.jpg",
    imageAlt: "Trailer petrolero industrial sobre ruta",
    galleryImages: [
      {
        src: "/images/trailer-petrolero-paneles-detalle-1.jpg",
        alt: "Detalle del sistema inferior de apoyo y traslado de un trailer petrolero de paneles",
      },
      {
        src: "/images/trailer-petrolero-paneles-interior.jpg",
        alt: "Interior de un trailer petrolero de paneles con revestimiento blanco y ventanas laterales",
      },
      {
        src: "/images/trailer-petrolero-paneles-traslado-1.jpg",
        alt: "Trailer petrolero de paneles de gran porte en traslado sobre la calle",
      },
      {
        src: "/images/trailer-petrolero-paneles-traslado-2.jpg",
        alt: "Trailer petrolero de paneles siendo maniobrado con autoelevador en la vía pública",
      },
    ],
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
      "Trailer petrolero tradicional de 12 mts desde Bahía Blanca a toda la República Argentina para operaciones petroleras, industriales y de apoyo en campo.",
    image: "/images/trailer-petrolero-tradicional.jpg",
    imageAlt: "Trailer petrolero tradicional blanco en traslado dentro de un predio operativo",
    galleryImages: [
      {
        src: "/images/trailer-petrolero-tradicional-exterior.jpg",
        alt: "Trailer petrolero tradicional blanco visto de lateral en un predio",
      },
      {
        src: "/images/trailer-petrolero-tradicional-interior.jpg",
        alt: "Interior de trailer petrolero tradicional con revestimiento claro y piso de madera",
      },
    ],
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
    slug: "trailer-petrolero-tradicional-2",
    title: "Modulo Portatil Paneles (6m)",
    badge: "Módulos portátiles",
    category: "modulos",
    shortDescription:
      "Unidades de 12 mts para apoyo petrolero, logística y operación en campo.",
    description:
      "Solución móvil orientada a empresas que necesitan soporte petrolero, presencia operativa y una estructura lista para responder en obra o campo.",
    seoDescription:
      "Trailer petrolero tradicional de 12 mts desde Bahía Blanca a toda la República Argentina para operaciones petroleras, industriales y de apoyo en campo.",
    image: "/images/moduloPanel6.jpeg",
    imageAlt: "Modulo portatil de paneles de 6 metros blanco con ventanas laterales",
    galleryImages: [
      {
        src: "/images/modulo-paneles-6m-galeria.jpg",
        alt: "Modulo portatil de paneles de 6 metros blanco visto de frente en un galpón",
      },
      {
        src: "/images/modulo-paneles-6m-galeria-2.jpg",
        alt: "Modulo portatil de paneles de 6 metros blanco visto en perspectiva exterior",
      },
      {
        src: "/images/modulo-paneles-6m-galeria-3.jpg",
        alt: "Interior de modulo portatil de paneles de 6 metros con piso de madera y paredes claras",
      },
      {
        src: "/images/modulo-paneles-6m-galeria-4.jpg",
        alt: "Interior de modulo portatil de paneles de 6 metros acondicionado como oficina",
      },
      {
        src: "/images/modulo-paneles-6m-galeria-5.jpg",
        alt: "Modulo portatil de paneles de 6 metros blanco exhibido en campo abierto",
      },
    ],
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
    slug: "modulos-habitacionales-tradicional",
    title: "Módulos habitacionales (Tradicional)",
    badge: "Producto destacado",
    category: "modulos",
    shortDescription:
      "Módulos de 6 mts para permanencia, descanso y apoyo diario en obra.",
    description:
      "La línea que CENOZ quiere destacar: módulos habitacionales de 6 mts pensados para empresas y obras que necesitan resolver rápido, claro y sin fricción.",
    seoDescription:
      "Módulos habitacionales tradicionales de 6 mts desde Bahía Blanca a toda la República Argentina para obras, empresas y bases operativas.",
    image: "/images/ModuloHabitacionalTradicional.jpg",
    imageAlt: "Módulo habitacional tradicional blanco en un predio operativo",
    galleryImages: [
      {
        src: "/images/modulo-habitacional-tradicional-galeria-1.jpg",
        alt: "Módulo habitacional tradicional blanco con detalles verdes visto en perspectiva exterior",
      },
      {
        src: "/images/modulo-habitacional-tradicional-galeria-2.jpg",
        alt: "Módulo habitacional tradicional blanco con puerta lateral y ventanas abatibles",
      },
      {
        src: "/images/modulo-habitacional-tradicional-galeria-3.jpg",
        alt: "Dos módulos habitacionales tradicionales blancos exhibidos en un predio",
      },
      {
        src: "/images/modulo-habitacional-tradicional-galeria-4.jpg",
        alt: "Interior de módulo habitacional tradicional acondicionado como sala de reuniones",
      },
      {
        src: "/images/modulo-habitacional-tradicional-galeria-5.jpg",
        alt: "Interior de módulo habitacional tradicional equipado como oficina con escritorios",
      },
      {
        src: "/images/modulo-habitacional-tradicional-galeria-6.jpg",
        alt: "Interior vacío de módulo habitacional tradicional con piso de madera",
      },
      {
        src: "/images/modulo-habitacional-tradicional-galeria-7.jpg",
        alt: "Interior de módulo habitacional tradicional montado como oficina operativa",
      },
      {
        src: "/images/modulo-habitacional-tradicional-galeria-8.jpg",
        alt: "Interior de módulo habitacional tradicional con cama cucheta",
      },
    ],
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
    slug: "modulos-portatiles-habitacionales",
    title: "Módulos portátiles habitacionales (2.4mx2.4m)",
    badge: "Producto destacado",
    category: "modulos",
    shortDescription:
      "Módulos de 6 mts para permanencia, descanso y apoyo diario en obra.",
    description:
      "La línea que CENOZ quiere destacar: módulos habitacionales de 6 mts pensados para empresas y obras que necesitan resolver rápido, claro y sin fricción.",
    seoDescription:
      "Módulos portátiles habitacionales de 6 mts desde Bahía Blanca a toda la República Argentina para obras, empresas y bases operativas.",
    image: "/images/modulo-portatil.jpg",
    imageAlt: "Módulos portátiles habitacionales y oficinas de obra en contenedores",
    galleryImages: [
      {
        src: "/images/modulo-portatil-habitacional-galeria-1.jpg",
        alt: "Cabina modular portátil blanca con ventanas perimetrales exhibida en un predio",
      },
      {
        src: "/images/modulo-portatil-habitacional-galeria-2.jpg",
        alt: "Módulo portátil habitacional compacto con frente vidriado y puerta lateral",
      },
      {
        src: "/images/modulo-portatil-habitacional-galeria-3.jpg",
        alt: "Módulo portátil habitacional compacto con puerta principal y ventanas laterales",
      },
      {
        src: "/images/modulo-portatil-habitacional-galeria-4.jpg",
        alt: "Vista exterior trasera de módulo portátil habitacional blanco con amplias ventanas",
      },
      {
        src: "/images/modulo-portatil-habitacional-galeria-5.jpg",
        alt: "Dos módulos portátiles habitacionales blancos instalados sobre césped",
      },
      {
        src: "/images/modulo-portatil-habitacional-galeria-6.jpg",
        alt: "Módulos portátiles habitacionales utilizados como posta sanitizante",
      },
      {
        src: "/images/modulo-portatil-habitacional-galeria-7.jpg",
        alt: "Cabina modular portátil vidriada instalada en un predio operativo",
      },
      {
        src: "/images/modulo-portatil-habitacional-galeria-8.jpg",
        alt: "Módulo portátil habitacional compacto blanco con puerta frontal y ventana lateral",
      },
    ],
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
    slug: "modulos-portatiles-habitacionales-2",
    title: "Modulo Tradicional (2.5mx2.4m)",
    badge: "Producto destacado",
    category: "modulos",
    shortDescription:
      "Módulos de 6 mts para permanencia, descanso y apoyo diario en obra.",
    description:
      "La línea que CENOZ quiere destacar: módulos habitacionales de 6 mts pensados para empresas y obras que necesitan resolver rápido, claro y sin fricción.",
    seoDescription:
      "Módulos portátiles habitacionales de 6 mts desde Bahía Blanca a toda la República Argentina para obras, empresas y bases operativas.",
    image: "/images/moduTra2.jpeg",
    imageAlt: "Módulos tradicionales blancos exhibidos en fila sobre césped",
    galleryImages: [
      {
        src: "/images/modulo-tradicional-2-5x2-4m-galeria-1.jpg",
        alt: "Módulo tradicional blanco de 2.5 por 2.4 metros con puerta abierta visto desde el frente",
      },
      {
        src: "/images/modulo-tradicional-2-5x2-4m-galeria-2.jpg",
        alt: "Módulo tradicional blanco de 2.5 por 2.4 metros con ventanas laterales y acceso abierto",
      },
      {
        src: "/images/modulo-tradicional-2-5x2-4m-galeria-3.jpg",
        alt: "Interior del módulo tradicional con piso símil madera, puerta interna y mueble lateral",
      },
      {
        src: "/images/modulo-tradicional-2-5x2-4m-galeria-4.jpg",
        alt: "Sector de lavatorio del módulo tradicional con mesada doble y espejos",
      },
      {
        src: "/images/modulo-tradicional-2-5x2-4m-galeria-5.jpg",
        alt: "Vista superior del sanitario interior del módulo tradicional con piso símil madera",
      },
      {
        src: "/images/modulo-tradicional-2-5x2-4m-galeria-6.jpg",
        alt: "Plato de ducha interior del módulo tradicional con grifería superior",
      },
      {
        src: "/images/modulo-tradicional-2-5x2-4m-galeria-7.jpg",
        alt: "Termotanque instalado en el interior del módulo tradicional junto a las conexiones de agua",
      },
      {
        src: "/images/modulo-tradicional-2-5x2-4m-galeria-8.jpg",
        alt: "Interior del módulo tradicional con mingitorio, inodoro y llaves de paso visibles",
      },
    ],
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
      "Módulos con kit rodante de 6 mts desde Bahía Blanca a toda la República Argentina para obras, empresas y bases operativas con traslado práctico.",
    image: "/images/modulo-rodante.jpg",
    imageAlt: "Módulos blancos con kit rodante en un predio operativo",
    galleryImages: [
      {
        src: "/images/modulo-kit-rodante-galeria-1.jpg",
        alt: "Fila de módulos blancos con kit rodante alineados en un predio operativo",
      },
      {
        src: "/images/modulo-kit-rodante-galeria-2.jpg",
        alt: "Módulos con kit rodante estacionados en línea dentro de un predio abierto",
      },
      {
        src: "/images/modulo-kit-rodante-galeria-3.jpg",
        alt: "Módulos con kit rodante instalados como apoyo sanitario en un operativo de campo",
      },
      {
        src: "/images/modulo-kit-rodante-galeria-4.jpg",
        alt: "Otra vista de módulos con kit rodante utilizados en un operativo de apoyo sanitario",
      },
    ],
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
      "Baños químicos y cloacales desde Bahía Blanca a toda la República Argentina para obras, empresas y operativos, con modelos tradicionales, autoservice y adaptados.",
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
      "Cabinas de vigilancia desde Bahía Blanca a toda la República Argentina en medidas de 1.30 a 6 mts para control de acceso y seguridad operativa.",
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
      "Baños químicos desde Bahía Blanca a toda la República Argentina para obras, empresas, municipios y eventos, con modelos tradicionales, autoservice y adaptados.",
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
      "Equipos atmosféricos desde Bahía Blanca a toda la República Argentina para saneamiento, apoyo operativo y necesidades técnicas específicas.",
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
    category: "especiales",
    shortDescription:
      "Productos personalizados desarrollados a medida según la necesidad real de cada cliente.",
    description:
      "Productos a medida pensados para empresas, industria y operaciones que necesitan una solución personalizada, fabricada según espacio, uso y requerimientos concretos.",
    seoDescription:
      "Productos a medida desde Bahía Blanca a toda la República Argentina con módulos personalizados para empresas, industria y operaciones con requerimientos específicos.",
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
  modulos: "Módulos Portátiles",
  sanitarios: "Baños Químicos",
  atmosfericos: "Equipos atmosféricos",
  especiales: "Proyectos Especiales / Productos a Medida",
};

export const productFilterOptions: Array<{ value: ProductFilter; label: string }> = [
  { value: "todos", label: "Todos" },
  { value: "modulos", label: "Módulos Portátiles" },
  { value: "sanitarios", label: "Baños Químicos" },
  { value: "atmosfericos", label: "Equipos atmosféricos" },
  { value: "especiales", label: "Proyectos Especiales / Productos a Medida" },
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
    title: "Solicitud de presupuesto",
    description:
      "Preparamos una respuesta comercial directa sin precios públicos, enfocada en la necesidad real del cliente.",
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