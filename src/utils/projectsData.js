import portfolioMockup from "../images/portfolio-mockup.png";

// Proyectos locales/manuales
export const localProjects = [
  {
    id: 1,
    name: "Personal Portfolio",
    image: portfolioMockup,
    technologies: ["react", "node", "mongodb", "vite"],
    features: [
      "Secciones: Sobre mí, Proyectos y Contacto",
      "Modo oscuro/claro",
      "Animaciones suaves y transiciones",
      "Responsive Design para móviles y desktop",
      "Formulario de contacto funcional",
      "Integración con GitHub",
    ],
  },
  {
    id: 2,
    name: "Task Manager App",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    technologies: ["react", "tailwind", "javascript"],
    features: ["Drag & Drop", "Categorías", "Modo oscuro", "Local storage"],
  },
  {
    id: 3,
    name: "Weather Dashboard",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80",
    technologies: ["html", "css", "javascript"],
    features: ["API del clima", "Gráficos", "Geolocalización", "Responsive"],
  },
  {
    id: 4,
    name: "Portfolio CMS",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    technologies: ["react", "node", "mongodb"],
    features: ["Editor visual", "Templates", "SEO optimizado", "Analytics"],
  },
  {
    id: 5,
    name: "Social Media Dashboard",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    technologies: ["react", "tailwind", "node"],
    features: [
      "Tiempo real",
      "Gráficos",
      "Multi-plataforma",
      "Exportar datos",
    ],
  },
  {
    id: 6,
    name: "Recipe Finder",
    image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&q=80",
    technologies: ["react", "javascript", "css"],
    features: [
      "Búsqueda avanzada",
      "Favoritos",
      "Modo cocina",
      "Calculadora nutricional",
    ],
  },
  
  {
    id: 100,
    name: "Nuevo Proyecto Manual",
    image: "/images/manual-project.png",
    technologies: ["react", "vite"],
    features: ["Feature 1", "Feature 2"],
  },
  
];

// Función para traer proyectos de GitHub combinando con locales
export const fetchAllProjects = async () => {
  try {
    const response = await fetch("https://api.github.com/users/nosoyunmarinero/repos");
    const githubData = await response.json();

    // Transformamos todos los repos de GitHub
    const githubProjects = githubData.map((repo) => ({
      id: repo.id,
      name: repo.name,
      repoName: repo.name,
      description: repo.description || "No description available",
      githubUrl: repo.html_url,
      liveUrl: repo.homepage || "#",
      image: null, 
      technologies: [], 
      features: [],
    }));

    // Combinar locales + GitHub
    return [...localProjects, ...githubProjects];
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    // Si falla GitHub, solo devolver locales
    return [...localProjects];
  }
};
