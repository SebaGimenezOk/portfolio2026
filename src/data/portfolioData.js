export const personalInfo = {
  name: "Sebastian Gimenez",
  role: "Front-End Developer & Mobile Specialist",
  aboutParagraphs: [
    "Mi núcleo técnico es el desarrollo Front-end, especialidad en la que me formé y certifiqué en Coderhouse. Me enfoco en crear arquitecturas web limpias, reactivas y altamente escalables utilizando React, TypeScript, JavaScript, HTML5, CSS3/SASS, Tailwind CSS y Bootstrap.",
    "Para llevar esa misma exigencia de experiencia de usuario al ecosistema mobile, desarrollo aplicaciones nativas con React Native, Expo Go y Redux. Mi stack se completa integrando servicios con NodeJS, Express, MySQL y MongoDB, sumado a un trasfondo sólido en Análisis de Datos (Power BI, SQL Server, Excel y Google Sheets) para optimizar procesos a partir de métricas reales.",
    "Como parte de mi visión aplicada, impulsé GimenezWebFixer, una iniciativa personal orientada al diagnóstico, optimización y resolución de problemas técnicos para plataformas web. Un proyecto activo donde aplico arquitectura limpia y entregables de alto valor."
  ],
  certifications: [
    { title: "Desarrollo Front-End", institution: "Coderhouse" }
  ],
  initiatives: [
    { name: "GimenezWebFixer", description: "Diagnóstico y optimización web personal" }
  ],
  socials: {
    linkedin: "https://linkedin.com/in/sebastiangimenezlopez",
    github: "https://github.com/SebaGimenezOk",
    email: "mailto:sebastiangimenezlopezen@gmail.com",
    cv: "/CV-SEPT-2025.pdf"
  }
};

export const projects = [
  {
    id: "bonami-web",
    title: "Bonami Web Platform",
    description: "Plataforma web moderna orientada a la experiencia de usuario, desarrollada con interfaces limpias y alto rendimiento.",
    tools: ["React", "Tailwind CSS", "TypeScript"],
    link: "https://github.com/SebaGimenezOk/BonamiWeb",
    featured: true,
    longDescription: "Desarrollo integral de la interfaz web para Bonami, enfocada en la velocidad de carga, diseño responsivo estricto y una arquitectura de componentes modular y mantenible.",
    highlights: [
      "Arquitectura de componentes limpia con React",
      "Optimización avanzada de assets y carga ultra rápida",
      "Diseño adaptativo para todo tipo de pantallas"
    ],
    screenshots: [
      { url: "/images/projects/bonami/web-02.webp", caption: "Vista y flujo inicial de la plataforma web" },
      { url: "/images/projects/bonami/web-03.webp", caption: "Sección de contenido y detalles" },
      { url: "/images/projects/bonami/web-04.webp", caption: "Módulo de gestión e interacción" },
      { url: "/images/projects/bonami/web-05.webp", caption: "Panel de control y visualización" },
      { url: "/images/projects/bonami/web-06.webp", caption: "Vista final y adaptación de componentes" }
    ]
  },
  {
    id: "bonami-app-native",
    title: "Bonami Mobile App",
    description: "Aplicación móvil multiplataforma diseñada para ofrecer una experiencia nativa fluida, navegación por gestos y consumo eficiente.",
    tools: ["React Native", "Expo Go", "Mobile UI"],
    link: "https://github.com/SebaGimenezOk/BonamiAppNative",
    featured: true,
    longDescription: "Aplicación móvil desarrollada con React Native y Expo, pensada para garantizar fluidez a 60fps, integración con APIs y una interfaz adaptada a patrones de diseño nativos.",
    highlights: [
      "Navegación nativa fluida e intuitiva",
      "Manejo eficiente de estados en el cliente",
      "Diseño adaptado a estándares móviles modernos"
    ],
    screenshots: [
      { url: "/images/projects/bonami/mobile-001.webp", caption: "Pantalla principal de la app mobile" },
      { url: "/images/projects/bonami/mobile-02.webp", caption: "Navegación por secciones y vistas secundarias" },
      { url: "/images/projects/bonami/mobile-03.webp", caption: "Detalles y componentes interactivos" },
      { url: "/images/projects/bonami/mobile-04.webp", caption: "Flujo de usuario y pantallas de ajuste" }
    ]
  },
  {
    id: "cronicas-de-un-espectador",
    title: "Crónicas de un Espectador",
    description: "Plataforma web editorial de crítica cultural y teatro con Headless WordPress, reproductor de audio y optimización SEO.",
    tools: ["Next.js", "Headless WordPress", "Tailwind CSS", "GraphQL"],
    link: "https://cronicasdeunespectador.com",
    featured: true,
    longDescription: "Desarrollo completo de la plataforma editorial integrando Next.js en el frontend con Headless WordPress vía GraphQL. Implementación de reproductores de audio personalizados, campos ACF y rendimiento optimizado para Core Web Vitals.",
    highlights: [
      "Arquitectura Jamstack enfocada en velocidad y SEO",
      "Player de audio integrado para contenidos culturales",
      "Gestión de contenidos desACOPLADA (Headless CMS)"
    ],
    screenshots: [
      { url: "/images/projects/cronicas/cronicas 01.webp", caption: "Portada principal y diseño editorial" },
      { url: "/images/projects/cronicas/cronicas 02.webp", caption: "Banners y secciones recientes" },
      { url: "/images/projects/cronicas/cronicas 03.webp", caption: "Banners newsletter y asociados" },
      { url: "/images/projects/cronicas/cronicas 04.webp", caption: "Listas de audios" },
      { url: "/images/projects/cronicas/cronicas 05.webp", caption: "Versión de temporadas" },
      { url: "/images/projects/cronicas/cronicas 06.webp", caption: "Versión categorias" }

    ]
  },
  {
    id: "gimenez-web-fixer",
    title: "GimenezWebFixer",
    description: "Identidad visual y single-page de servicios de desarrollo front-end, optimización y resolución de problemas técnicos.",
    tools: ["React", "Vite", "Tailwind CSS"],
    link: "https://github.com/SebaGimenezOk", // O el link correspondiente
    featured: true,
    longDescription: "Landing page corporativa y de servicios orientada al diagnóstico, optimización de performance y soluciones front-end a medida. Diseñada bajo una estética minimalista y profesional.",
    highlights: [
      "Identidad visual minimalista B&W con isotipo personalizado",
      "Estructura orientada a conversión y contacto rápido",
      "Cero fricción y máxima velocidad de carga"
    ],
    screenshots: [
      { url: "/images/projects/gimenezwebfixer/gwf 01.webp", caption: "Hero section y propuesta de valor" },
      { url: "/images/projects/gimenezwebfixer/gwf 02.webp", caption: "Secciones especializdas" },
      { url: "/images/projects/gimenezwebfixer/gwf 03.webp", caption: "Modal interactivo intiutivo" },
      { url: "/images/projects/gimenezwebfixer/gwf 04.webp", caption: "Modal interactivo intiutivo" },
       { url: "/images/projects/gimenezwebfixer/gwf 05.webp", caption: "Modulos de Diagnostico" },
      
    ]
  }
];

export const skillCategories = [
  {
    category: "Front-End",
    skills: ["TypeScript", "JavaScript", "React", "Next.js", "Astro", "Tailwind CSS", "Bootstrap", "Material UI"]
  },
  {
    category: "Data Analytics & Back-End",
    skills: ["Power BI", "Tableau", "Python", "SQL Server", "Node.js", "MongoDB", "Express", "MySQL"]
  },
  {
    category: "Mobile",
    skills: ["React Native", "Expo Go", "Android Studio", "Xcode", "Flutter", "Dart", "Swift", "Kotlin"]
  }
];