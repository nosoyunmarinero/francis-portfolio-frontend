import portfolioMockup from "../images/portfolio-mockup.png";
import AroundImage from "../images/aroundss.png";
import AroundGif from "../images/Around.gif";

export const localProjects = [
  {
    id: 1,
    name: "Personal Portfolio",
     repoName: "francis-portfolio-frontend",
    image: portfolioMockup,
    image2: null,
    technologies: ["react", "node", "mongodb", "vite"],
    features: [
      "Carrito de compras",
      "Pasarela de pago",
      "Panel admin",
      "Sistema de reviews",
    ],
  },
  {
    id: 2,
    name: "Around the US",
    repoName: "web_project_api_full",
    image: AroundImage,
    image2: AroundGif,
    technologies: ["react", "html", "javascript", "express", "mongodb", "node"],
    features: ["Social Media", "Share", "Database"],
  },
  {
    id: 3,
    name: "Crab Jump",
    repoName: "Crab-Jump",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    technologies: ["HTML", "javascript"],
    features: ["Drag & Drop", "Categorías", "Modo oscuro", "Local storage"],
  },
];

export const fetchGitHubProjects = async () => {
  try {
    const response = await fetch(
      "https://api.github.com/users/nosoyunmarinero/repos"
    );
    const data = await response.json();

    const repos = data.slice(0, 7).map((repo, i) => ({
      id: localProjects[i]?.id || repo.id,
      name: localProjects[i]?.name || repo.name,
      repoName: repo.name,
      description: repo.description || "No description available",
      githubUrl: repo.html_url,
      liveUrl: repo.homepage || "#",
      image: localProjects[i]?.image,
      image2: localProjects[i]?.image2,
      technologies: localProjects[i]?.technologies || [],
      features: localProjects[i]?.features || [],
    }));

    return repos;
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
};
