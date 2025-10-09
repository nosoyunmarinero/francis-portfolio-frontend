import { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';
import { X } from 'lucide-react';
import './Projects.css';

// Mapeo de tecnologías a iconos
const techIcons = {
  html: <FaHtml5 className="tech-icon" style={{ color: '#e44d26' }} />,
  css: <FaCss3Alt className="tech-icon" style={{ color: '#1572b6' }} />,
  javascript: <FaJs className="tech-icon" style={{ color: '#f7df1e' }} />,
  react: <FaReact className="tech-icon" style={{ color: '#61dafb' }} />,
  node: <FaNodeJs className="tech-icon" style={{ color: '#68a063' }} />,
  mongodb: <SiMongodb className="tech-icon" style={{ color: '#4db33d' }} />,
  express: <SiExpress className="tech-icon" style={{ color: '#ffffff' }} />,
  tailwind: <SiTailwindcss className="tech-icon" style={{ color: '#06b6d4' }} />
};

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Array de proyectos - PERSONALIZA ESTO CON TUS PROYECTOS REALES
  const projects = [
    {
      id: 1,
      name: 'E-Commerce Platform',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      technologies: ['react', 'node', 'mongodb', 'express'],
      description: 'Plataforma completa de comercio electrónico con carrito de compras, autenticación de usuarios y panel de administración.',
      features: ['Carrito de compras', 'Pasarela de pago', 'Panel admin', 'Sistema de reviews'],
      githubUrl: 'https://github.com/tuusuario/proyecto1',
      liveUrl: 'https://proyecto1.com'
    },
    {
      id: 2,
      name: 'Task Manager App',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
      technologies: ['react', 'tailwind', 'javascript'],
      description: 'Aplicación de gestión de tareas con drag & drop, categorías personalizables y modo oscuro.',
      features: ['Drag & Drop', 'Categorías', 'Modo oscuro', 'Local storage'],
      githubUrl: 'https://github.com/tuusuario/proyecto2',
      liveUrl: 'https://proyecto2.com'
    },
    {
      id: 3,
      name: 'Weather Dashboard',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80',
      technologies: ['html', 'css', 'javascript'],
      description: 'Dashboard del clima con pronóstico de 7 días, gráficos interactivos y búsqueda por ubicación.',
      features: ['API del clima', 'Gráficos', 'Geolocalización', 'Responsive'],
      githubUrl: 'https://github.com/tuusuario/proyecto3',
      liveUrl: 'https://proyecto3.com'
    },
    {
      id: 4,
      name: 'Portfolio CMS',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      technologies: ['react', 'node', 'mongodb'],
      description: 'Sistema de gestión de contenido para portfolios con editor visual y generación automática de páginas.',
      features: ['Editor visual', 'Templates', 'SEO optimizado', 'Analytics'],
      githubUrl: 'https://github.com/tuusuario/proyecto4',
      liveUrl: 'https://proyecto4.com'
    },
    {
      id: 5,
      name: 'Social Media Dashboard',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
      technologies: ['react', 'tailwind', 'node'],
      description: 'Dashboard para análisis de redes sociales con métricas en tiempo real y visualizaciones de datos.',
      features: ['Tiempo real', 'Gráficos', 'Multi-plataforma', 'Exportar datos'],
      githubUrl: 'https://github.com/tuusuario/proyecto5',
      liveUrl: 'https://proyecto5.com'
    },
    {
      id: 6,
      name: 'Recipe Finder',
      image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&q=80',
      technologies: ['react', 'javascript', 'css'],
      description: 'Buscador de recetas con filtros avanzados, favoritos y modo de cocina paso a paso.',
      features: ['Búsqueda avanzada', 'Favoritos', 'Modo cocina', 'Calculadora nutricional'],
      githubUrl: 'https://github.com/tuusuario/proyecto6',
      liveUrl: 'https://proyecto6.com'
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="projects-container">
      <div className="projects-content">
        <h1 className="projects-title">My Projects</h1>
        
        <p className="projects-description">
          A collection of web applications and digital experiences I've crafted with passion. 
          Each project represents a unique challenge solved through clean code, modern design, 
          and innovative thinking. From full-stack applications to interactive interfaces, 
          these projects showcase my journey as a developer.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
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

      {/* Modal */}
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