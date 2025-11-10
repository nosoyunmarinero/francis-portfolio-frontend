import portfolioMockup from "../images/portfolio-mockup.png";
import AroundImage from "../images/aroundss.png";
import AroundGif from "../images/Around.gif";
import CrabJump from "../images/Crab-jump.png"
import CrabGif from "../images/crab.gif"

export const localProjects = [
  {
    id: 1,
    name: "Personal Portfolio",
     repoName: "francis-portfolio-frontend",
    image: portfolioMockup,
    image2: null,
    liveUrl: "https://nosoyunmarinero.github.io/francis-portfolio-frontend/",
    technologies: ["react", "node", "mongodb", "vite"],
    features: [
  "Modern React Architecture",
  "Smooth Animations",
  "Project Showcase",
  "SEO Optimized",
  "Responsive Design",
  "Interactive UI",
  "Dynamic Routing",
  "Contact Form",
],
  },
  {
    id: 2,
    name: "Around the US",
    repoName: "web_project_api_full",
    image: AroundImage,
    image2: AroundGif,
    liveUrl: "https://nosoyunmarinero.github.io/web_project_api_full/",
    technologies: ["react", "html", "javascript", "express", "mongodb", "node"],
    features: ["Social Media", "Share", "Database"],
  },
  {
    id: 3,
    name: "Crab Jump",
    repoName: "Crab-Jump",
    image: CrabJump,
    image2: CrabGif,
    liveUrl: "https://nosoyunmarinero.github.io/Crab-Jump/",
    technologies: ["html", "javascript", "css"],
    features: ["Canvas", "Local storage", "Loop", "game"],
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
