export type Project = {
  title: string
  description: { es: string; en: string }
  stack: string[]
  demo: string
  github: string
}

export const projects: Project[] = [
  {
    title: "Comanda Electrónica — SaaS",
    description: {
      es: "SaaS funcional de gestión gastronómica de principio a fin: 4 interfaces por rol (mozo, cocina, barra, caja) más panel admin con reportes, con pagos integrados vía Mercado Pago QR.",
      en: "Functional restaurant-management SaaS built end-to-end: 4 role-based interfaces (waiter, kitchen, bar, cashier) plus an admin dashboard with reports, with payments integrated via Mercado Pago QR."
    },
    stack: ["Java 21", "Spring Boot", "React", "Vite","TypeScript", "PostgreSQL", "Mercado Pago QR"],
    demo: "",
    github: "https://github.com/NicolasNievas/Gastro-App",
  },
    {
    title: "Coffee Craze — Ecommerce",
    description: {
      es: "Sistema de ecommerce completo con ~25 endpoints REST, autenticación JWT, pagos con Mercado Pago, gestión de órdenes y panel admin.",
      en: "Full ecommerce system with ~25 REST endpoints, JWT auth, Mercado Pago payments, order management and admin panel."
    },
    stack: ["Java 17", "Spring Boot", "Next.js", "React", "PostgreSQL", "JPA/Hibernate", "JWT", "Mercado Pago"],
    demo: "https://coffe-craze.vercel.app",
    github: "https://github.com/NicolasNievas/Tesis-UTN",
  },
  {
    title: "Customer & Loyalty System",
    description: {
      es: "Sistema de gestión de clientes y fidelización con arquitectura de microservicios, contenedorizado con Docker.",
      en: "Customer and loyalty management system with microservices architecture, containerized with Docker."
    },
    stack: ["Java 17", "Spring Boot", "Angular", "Docker", "JUnit", "Mockito"],
    demo: "",
    github: "",
  },
  {
    title: "Auth with Firebase & Supabase",
    description: {
        es: "Sistema de autenticación con registro de usuarios, verificación de email y login con Google y GitHub usando Firebase y Supabase.",
        en: "Authentication system with user registration, email verification and login via Google and GitHub using Firebase and Supabase.",
    },
    stack: ["React", "Next.js", "Firebase", "Supabase", "Tailwind CSS"],
    demo: "https://authentication-with-firebase-five.vercel.app",
    github: "https://github.com/NicolasNievas/Authentication-with-Firebase-",
},
]

export const experience = [
  {
    company: "Trasus Consulting",
    role: { es: "Backend Developer (.NET)", en: "Backend Developer (.NET)" },
    period: "Feb 2025 – Dec 2025",
    location: "Córdoba, Argentina",
    bullets: {
      es: [
        "Diseñé y desarrollé más de 15 endpoints REST con ASP.NET Web API bajo arquitectura en capas (MVC).",
        "Modelé y optimicé el acceso a datos en Oracle mediante stored procedures, functions y triggers.",
        "Implementé la capa de acceso a datos con Entity Framework.",
        "Integré servicios backend con frontends Angular y ASPX (WebForms), usando JavaScript.",
        "Resolví tickets y gestioné el ciclo de cambios con GitLab (merge requests, code review) dentro de un equipo Agile/Scrum.",
      ],
      en: [
        "Designed and built 15+ REST endpoints with ASP.NET Web API under layered (MVC) architecture.",
        "Modeled and optimized Oracle data access through stored procedures, functions and triggers.",
        "Implemented the data access layer using Entity Framework.",
        "Integrated backend services with Angular and ASPX (WebForms) frontends using JavaScript.",
        "Resolved tickets and managed the change cycle with GitLab (merge requests, code review) within an Agile/Scrum team.",
      ],
    },
    stack: ["C#", ".NET Framework", "ASP.NET Web API", "ASPX / WebForms", "Entity Framework", "Oracle", "Stored Procedures", "Angular", "JavaScript", "GitLab", "Scrum"],
  },
]