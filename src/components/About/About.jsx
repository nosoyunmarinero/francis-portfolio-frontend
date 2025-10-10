// import { useState } from 'react';
import "./About.css";

function About() {
  // Certificaciones - PERSONALIZA CON TUS DATOS REALES
  const certifications = [
    {
      id: 1,
      name: "Full Stack Web Development",
      institution: "freeCodeCamp",
      logo: "https://design-style-guide.freecodecamp.org/downloads/fcc_secondary_small.jpg",
      date: "2024",
      skills: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      id: 2,
      name: "JavaScript Algorithms",
      institution: "freeCodeCamp",
      logo: "https://design-style-guide.freecodecamp.org/downloads/fcc_secondary_small.jpg",
      date: "2023",
      skills: ["JavaScript", "Algorithms", "Data Structures"],
    },
    {
      id: 3,
      name: "Responsive Web Design",
      institution: "freeCodeCamp",
      logo: "https://design-style-guide.freecodecamp.org/downloads/fcc_secondary_small.jpg",
      date: "2023",
      skills: ["HTML5", "CSS3", "Flexbox", "Grid"],
    },
    {
      id: 4,
      name: "React Complete Guide",
      institution: "Udemy",
      logo: "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg",
      date: "2024",
      skills: ["React", "Hooks", "Redux", "Context API"],
    },
    {
      id: 5,
      name: "Node.js Developer",
      institution: "Udemy",
      logo: "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg",
      date: "2024",
      skills: ["Node.js", "Express", "REST APIs", "MongoDB"],
    },
    {
      id: 6,
      name: "Git & GitHub",
      institution: "Platzi",
      logo: "https://static.platzi.com/media/platzi-isotipo@2x.png",
      date: "2023",
      skills: ["Git", "GitHub", "Version Control", "Collaboration"],
    },
  ];

  return (
    <div className="about-container">
      <div className="about-content-wrapper">
        {/* Sección Hero con foto y biografía */}
        <section className="about-hero">
          <h1 className="about-title">About Me</h1>

          <div className="about-bio-section">
            <div className="about-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2070&auto=format&fit=crop"
                alt="Francisco Romero"
                className="about-main-image"
              />
            </div>

            <div className="about-story">
              <h2 className="about-story-title">My Journey</h2>
              <p className="about-story-text">
                Hello! I'm Francisco, a passionate full-stack developer based in
                Mexico City. My journey into web development began three years
                ago when I discovered the magic of turning ideas into
                interactive digital experiences.
              </p>
              <p className="about-story-text">
                What started as curiosity quickly became a deep passion for
                creating elegant, user-friendly applications. I specialize in
                building modern web applications using React, Node.js, and
                MongoDB, always focusing on clean code and exceptional user
                experiences.
              </p>
              <p className="about-story-text">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community. I believe in continuous learning and
                love tackling challenging problems that push my skills to new
                levels.
              </p>
              <p className="about-story-text">
                I'm currently seeking opportunities to collaborate on innovative
                projects where I can contribute my skills while growing as a
                developer. Let's build something amazing together!
              </p>
            </div>
          </div>
        </section>

        {/* Sección de Certificaciones */}
        <section className="about-certifications">
          <h2 className="certifications-title">
            Certifications & Achievements
          </h2>
          <p className="certifications-subtitle">
            Continuous learning is at the core of my development journey. Here
            are some of the certifications I've earned along the way.
          </p>

          <div className="certifications-grid">
            {certifications.map((cert) => (
              <div key={cert.id} className="certification-card">
                <div className="certification-logo">
                  <img src={cert.logo} alt={cert.institution} />
                </div>
                <div className="certification-content">
                  <h3 className="certification-name">{cert.name}</h3>
                  <p className="certification-institution">
                    {cert.institution}
                  </p>
                  <p className="certification-date">{cert.date}</p>
                  <div className="certification-skills">
                    {cert.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
