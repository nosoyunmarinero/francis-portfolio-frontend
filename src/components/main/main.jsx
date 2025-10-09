import "./Main.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

function Main() {
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("visible", entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((sec) => observer.observe(sec));
  }, []);

  // Proyectos de vista previa (primeros 3)
  const previewProjects = [
    {
      id: 1,
      name: 'E-Commerce Platform',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      technologies: [
        <FaReact key="react" className="project-tech-icon" style={{ color: '#61dafb' }} />,
        <FaNodeJs key="node" className="project-tech-icon" style={{ color: '#68a063' }} />,
        <SiMongodb key="mongo" className="project-tech-icon" style={{ color: '#4db33d' }} />
      ]
    },
    {
      id: 2,
      name: 'Task Manager App',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
      technologies: [
        <FaReact key="react" className="project-tech-icon" style={{ color: '#61dafb' }} />,
        <FaJs key="js" className="project-tech-icon" style={{ color: '#f7df1e' }} />
      ]
    },
    {
      id: 3,
      name: 'Weather Dashboard',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80',
      technologies: [
        <FaHtml5 key="html" className="project-tech-icon" style={{ color: '#e44d26' }} />,
        <FaCss3Alt key="css" className="project-tech-icon" style={{ color: '#1572b6' }} />,
        <FaJs key="js" className="project-tech-icon" style={{ color: '#f7df1e' }} />
      ]
    }
  ];

  return (
    <main>
      <section className="home" id="home">
        <div className="home__profile">
          <img
            className="home__profile_picture"
            src="https://s1.abcstatics.com/media/play/2021/04/28/sailor-moon-k28F--1248x698@abc.jpg"
            alt="profile picture"
          />
          <div className="home__name_box">Francisco Romero</div>
        </div>

        <h1 className="fade-section home-heading">
          Crafting imagination into interactive realities.
        </h1>

        <p className="fade-section home-subheading">
          Bringing unique ideas to life through code, design, and creativity.
        </p>

        <div className="fade-section tech-icons">
          <FaHtml5 className="icon html" />
          <FaCss3Alt className="icon css" />
          <FaJs className="icon js" />
          <FaReact className="icon react" />
          <FaNodeJs className="icon node" />
          <SiMongodb className="icon mongo" />
          <FaGithub className="icon github" />
        </div>

        <div className="fade-section home_about" id="about">
          <div className="about_content">
            <img
              className="about_image"
              src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About me"
            />
            <div className="about_text">
              <h2>About Me</h2>
              <p>
                I'm a passionate full-stack developer who loves creating
                elegant, functional, and meaningful digital experiences through
                creativity and code.
              </p>
              <a href="/about" className="about_button">
                Learn More →
              </a>
            </div>
          </div>
        </div>

        <div className="fade-section home_projects">
          <h2 className="home_projects-heading">Featured Projects</h2>
          
          <div className="projects-preview-grid">
            {previewProjects.map((project) => (
              <div key={project.id} className="preview-project-card">
                <div className="preview-project-image">
                  <img src={project.image} alt={project.name} />
                </div>
                <div className="preview-project-content">
                  <h3 className="preview-project-title">{project.name}</h3>
                  <div className="preview-project-technologies">
                    {project.technologies}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link to="/projects" className="explore-more-link">
            Explore More Projects →
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Main;