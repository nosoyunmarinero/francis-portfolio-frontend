import { useState } from 'react';
import { X } from 'lucide-react';
import './About.css';

function About() {
  const [selectedCert, setSelectedCert] = useState(null);

  // Certificaciones - PERSONALIZA CON TUS DATOS REALES
  const certifications = [
    {
      id: 1,
      name: 'Full Stack Web Development',
      institution: 'freeCodeCamp',
      logo: 'https://design-style-guide.freecodecamp.org/downloads/fcc_secondary_small.jpg',
      date: '2024',
      skills: ['React', 'Node.js', 'MongoDB', 'Express'],
      description: 'Comprehensive bootcamp covering full-stack web development with modern technologies and best practices.',
      credentialUrl: 'https://freecodecamp.org/certification/example'
    },
    {
      id: 2,
      name: 'JavaScript Algorithms',
      institution: 'freeCodeCamp',
      logo: 'https://design-style-guide.freecodecamp.org/downloads/fcc_secondary_small.jpg',
      date: '2023',
      skills: ['JavaScript', 'Algorithms', 'Data Structures'],
      description: 'Deep dive into JavaScript algorithms and data structures with hands-on problem solving exercises.',
      credentialUrl: 'https://freecodecamp.org/certification/example'
    },
    {
      id: 3,
      name: 'Responsive Web Design',
      institution: 'freeCodeCamp',
      logo: 'https://design-style-guide.freecodecamp.org/downloads/fcc_secondary_small.jpg',
      date: '2023',
      skills: ['HTML5', 'CSS3', 'Flexbox', 'Grid'],
      description: 'Master responsive web design principles, CSS Grid, Flexbox, and modern layout techniques.',
      credentialUrl: 'https://freecodecamp.org/certification/example'
    },
    {
      id: 4,
      name: 'React Complete Guide',
      institution: 'Udemy',
      logo: 'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg',
      date: '2024',
      skills: ['React', 'Hooks', 'Redux', 'Context API'],
      description: 'Complete React course covering hooks, state management, performance optimization, and advanced patterns.',
      credentialUrl: 'https://udemy.com/certificate/example'
    },
    {
      id: 5,
      name: 'Node.js Developer',
      institution: 'Udemy',
      logo: 'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg',
      date: '2024',
      skills: ['Node.js', 'Express', 'REST APIs', 'MongoDB'],
      description: 'Backend development with Node.js, Express framework, RESTful API design, and database integration.',
      credentialUrl: 'https://udemy.com/certificate/example'
    },
    {
      id: 6,
      name: 'Git & GitHub',
      institution: 'Platzi',
      logo: 'https://static.platzi.com/media/platzi-isotipo@2x.png',
      date: '2023',
      skills: ['Git', 'GitHub', 'Version Control', 'Collaboration'],
      description: 'Version control fundamentals, Git workflows, branch management, and team collaboration strategies.',
      credentialUrl: 'https://platzi.com/certificate/example'
    }
  ];

  const openModal = (cert) => {
    setSelectedCert(cert);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCert(null);
    document.body.style.overflow = 'unset';
  };

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
                Hello! I'm Francisco, a passionate full-stack developer based in Mexico City. 
                My journey into web development began three years ago when I discovered the 
                magic of turning ideas into interactive digital experiences.
              </p>
              <p className="about-story-text">
                What started as curiosity quickly became a deep passion for creating elegant, 
                user-friendly applications. I specialize in building modern web applications 
                using React, Node.js, and MongoDB, always focusing on clean code and exceptional 
                user experiences.
              </p>
              <p className="about-story-text">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I believe 
                in continuous learning and love tackling challenging problems that push my skills 
                to new levels.
              </p>
              <p className="about-story-text">
                I'm currently seeking opportunities to collaborate on innovative projects where 
                I can contribute my skills while growing as a developer. Let's build something 
                amazing together!
              </p>
            </div>
          </div>
        </section>

        {/* Sección de Certificaciones */}
        <section className="about-certifications">
          <h2 className="certifications-title">Certifications & Achievements</h2>
          <p className="certifications-subtitle">
            Continuous learning is at the core of my development journey. 
            Here are some of the certifications I've earned along the way.
          </p>
          
          <div className="certifications-grid">
            {certifications.map((cert) => (
              <div 
                key={cert.id} 
                className="certification-card"
                onClick={() => openModal(cert)}
              >
                <div className="certification-logo">
                  <img src={cert.logo} alt={cert.institution} />
                </div>
                <div className="certification-content">
                  <h3 className="certification-name">{cert.name}</h3>
                  <p className="certification-institution">{cert.institution}</p>
                  <p className="certification-date">{cert.date}</p>
                  <div className="certification-skills">
                    {cert.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
                <div className="certification-card__overlay">
                  <span>View Details</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modal de Certificación */}
        {selectedCert && (
          <div className="certification-modal" onClick={closeModal}>
            <div className="certification-modal__content" onClick={(e) => e.stopPropagation()}>
              <button className="certification-modal__close" onClick={closeModal}>
                <X size={24} />
              </button>

              <div className="certification-modal__header">
                <div className="certification-modal__logo">
                  <img src={selectedCert.logo} alt={selectedCert.institution} />
                </div>
                <div className="certification-modal__info">
                  <h2 className="certification-modal__title">{selectedCert.name}</h2>
                  <p className="certification-modal__institution">{selectedCert.institution}</p>
                  <p className="certification-modal__date">{selectedCert.date}</p>
                </div>
              </div>

              <div className="certification-modal__body">
                <p className="certification-modal__description">
                  {selectedCert.description}
                </p>

                <div className="certification-modal__skills">
                  <h3 className="certification-modal__skills-title">Skills Acquired:</h3>
                  <div className="certification-modal__skills-list">
                    {selectedCert.skills.map((skill, index) => (
                      <span key={index} className="certification-modal__skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedCert.credentialUrl && (
                  <a 
                    href={selectedCert.credentialUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="certification-modal__button"
                  >
                    View Credential
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default About;