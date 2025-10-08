import "./Main.css";
import { useEffect } from "react";
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

  return (
    <main>
      <section className="home" id="home">
        <div className="fade-section profile">
          <img
            className="profile_picture"
            src="https://s1.abcstatics.com/media/play/2021/04/28/sailor-moon-k28F--1248x698@abc.jpg"
            alt="profile picture"
          />
          <div className="name_box">Francisco Romero</div>
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
                I’m a passionate full-stack developer who loves creating
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
          <h2 className="home_projects-heading">Explore my Projects</h2>
          <div className="carousel">
            <div className="card">Proyecto 1</div>
            <div className="card">Proyecto 2</div>
            <div className="card">Proyecto 3</div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
