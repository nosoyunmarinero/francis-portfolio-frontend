import "./Main.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import viteLogo from "../../images/Vitejs-logo.png";
import { localProjects } from "../../utils/projectsData";

const techIcons = {
  html: <FaHtml5 className="project-tech-icon" style={{ color: "#e44d26" }} />,
  css: <FaCss3Alt className="project-tech-icon" style={{ color: "#1572b6" }} />,
  javascript: (
    <FaJs className="project-tech-icon" style={{ color: "#f7df1e" }} />
  ),
  react: <FaReact className="project-tech-icon" style={{ color: "#61dafb" }} />,
  node: <FaNodeJs className="project-tech-icon" style={{ color: "#68a063" }} />,
  mongodb: (
    <SiMongodb className="project-tech-icon" style={{ color: "#4db33d" }} />
  ),
  express: (
    <SiExpress className="project-tech-icon" style={{ color: "#ffffff" }} />
  ),
  tailwind: (
    <SiTailwindcss className="project-tech-icon" style={{ color: "#06b6d4" }} />
  ),
  vite: (
    <img
      src={viteLogo}
      alt="Vite"
      className="project-tech-icon"
      style={{ width: "1.0em", height: "1.0em" }}
    />
  ),
};

function Main() {
  const [githubRepos, setGithubRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/nosoyunmarinero/repos")
      .then((res) => res.json())
      .then((data) => {
        const projects = localProjects
          .map((project) => {
            // Busca el repo que coincida exactamente con repoName
            const repo = data.find((r) => r.name === project.repoName);

            // Si no encuentra el repo, retorna null
            if (!repo) {
              console.warn(
                `Repo "${project.repoName}" no encontrado en GitHub`
              );
              return null;
            }

            return {
              ...project,
              description: repo.description || "No description available",
              githubUrl: repo.html_url,
              liveUrl: repo.homepage || "#",
            };
          })
          .filter(Boolean); // Filtra los null (repos no encontrados)

        setGithubRepos(projects);
      })
      .catch((error) => {
        console.error("Error fetching GitHub repos:", error);
        setGithubRepos([]);
      });
  }, []);

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

  const previewProjects = githubRepos.slice(0, 3);

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
              src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2070&auto=format&fit=crop"
              alt="About me"
            />
            <div className="about_text">
              <h2>About Me</h2>
              <p>
                I'm a passionate full-stack developer who loves creating
                elegant, functional, and meaningful digital experiences through
                creativity and code.
              </p>
              <Link to="/about" className="about_button">
                Learn More →
              </Link>
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
                    {project.technologies.map((tech) => (
                      <span key={tech}>{techIcons[tech]}</span>
                    ))}
                  </div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="preview-project__github-button"
                  >
                    <FaGithub className="preview-project__github-icon" />
                    View on GitHub
                  </a>
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
