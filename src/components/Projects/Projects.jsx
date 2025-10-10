import { useState, useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import { X } from "lucide-react";
import "./Projects.css";

const techIcons = {
  html: <FaHtml5 className="tech-icon" style={{ color: "#e44d26" }} />,
  css: <FaCss3Alt className="tech-icon" style={{ color: "#1572b6" }} />,
  javascript: <FaJs className="tech-icon" style={{ color: "#f7df1e" }} />,
  react: <FaReact className="tech-icon" style={{ color: "#61dafb" }} />,
  node: <FaNodeJs className="tech-icon" style={{ color: "#68a063" }} />,
  mongodb: <SiMongodb className="tech-icon" style={{ color: "#4db33d" }} />,
  express: <SiExpress className="tech-icon" style={{ color: "#ffffff" }} />,
  tailwind: (
    <SiTailwindcss className="tech-icon" style={{ color: "#06b6d4" }} />
  ),
};

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [githubRepos, setGithubRepos] = useState([]);

  // 🔹 Tus proyectos con títulos personalizados, imágenes, tecnologías y features
  const localProjects = [
    {
      id: 1,
      name: "E-Commerce Platform",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      technologies: ["react", "node", "mongodb", "express"],
      features: [
        "Carrito de compras",
        "Pasarela de pago",
        "Panel admin",
        "Sistema de reviews",
      ],
    },
    {
      id: 2,
      name: "Task Manager App",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      technologies: ["react", "tailwind", "javascript"],
      features: ["Drag & Drop", "Categorías", "Modo oscuro", "Local storage"],
    },
    {
      id: 3,
      name: "Weather Dashboard",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80",
      technologies: ["html", "css", "javascript"],
      features: ["API del clima", "Gráficos", "Geolocalización", "Responsive"],
    },
    {
      id: 4,
      name: "Portfolio CMS",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      technologies: ["react", "node", "mongodb"],
      features: ["Editor visual", "Templates", "SEO optimizado", "Analytics"],
    },
    {
      id: 5,
      name: "Social Media Dashboard",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
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
      image:
        "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&q=80",
      technologies: ["react", "javascript", "css"],
      features: [
        "Búsqueda avanzada",
        "Favoritos",
        "Modo cocina",
        "Calculadora nutricional",
      ],
    },
  ];

  // 🔹 Traer los datos reales desde GitHub y combinarlos con tus datos locales
  useEffect(() => {
    fetch("https://api.github.com/users/nosoyunmarinero/repos")
      .then((res) => res.json())
      .then((data) => {
        const repos = data.slice(0, 6).map((repo, i) => ({
          id: localProjects[i]?.id || repo.id,
          name: localProjects[i]?.name || repo.name,
          repoName: repo.name,
          description: repo.description || "No description available",
          githubUrl: repo.html_url,
          liveUrl: repo.homepage || "#",
          image: localProjects[i]?.image,
          technologies: localProjects[i]?.technologies || [],
          features: localProjects[i]?.features || [],
        }));
        setGithubRepos(repos);
      });
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  return (
    <div className="projects-container">
      <div className="projects-content">
        <h1 className="projects-title">My Projects</h1>
        <p className="projects-description">
          A collection of web applications and digital experiences I've crafted
          with passion. Each project represents a unique challenge solved
          through clean code, modern design, and innovative thinking.
        </p>

        <div className="projects-grid">
          {githubRepos.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => openModal(project)}
            >
              <div className="project-card-image">
                <img src={project.image} alt={project.name} />
                <div className="project-card-overlay">
                  <span>View Details</span>
                </div>
              </div>
              <div className="project-card-content">
                <h3 className="project-card-title">{project.name}</h3>
                <div className="project-card-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-icon-wrapper">
                      {techIcons[tech]}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="modal-image">
              <img src={selectedProject.image} alt={selectedProject.name} />
            </div>

            <div className="modal-body">
              <h2 className="modal-title">{selectedProject.name}</h2>
              <p className="modal-subtitle">@{selectedProject.repoName}</p>

              <div className="modal-technologies">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech} className="modal-tech-icon">
                    {techIcons[tech]}
                  </span>
                ))}
              </div>

              <p className="modal-description">{selectedProject.description}</p>

              <div className="modal-features">
                <h3>Key Features:</h3>
                <ul>
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-links">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-link modal-link-github"
                >
                  <FaGithub size={20} />
                  View Code
                </a>
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-link modal-link-live"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
