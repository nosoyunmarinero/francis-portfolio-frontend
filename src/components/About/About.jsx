import { useState } from 'react';
import { X } from 'lucide-react';
import './About.css';
import { certifications } from '../../utils/certificationsData';

function About() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [showImageModal, setShowImageModal] = useState(false);

  

  const openModal = (cert) => {
    setSelectedCert(cert);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCert(null);
      setShowImageModal(false);
    document.body.style.overflow = 'unset';
  };

  const openImageModal = () => {
  setShowImageModal(true);
};

const closeImageModal = () => {
  setShowImageModal(false);
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

                {selectedCert.credentialImg && (
                 <button className='certification-modal__button' onClick={(e) => {
    e.stopPropagation(); // ← Agrega esto
    openImageModal();
  }}>
                  View Credential
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/*Modal Cert image*/ }
        {showImageModal && (
  <div className="image-modal" onClick={closeImageModal}>
    <div className="image-modal__content" onClick={(e) => e.stopPropagation()}>
      <button className="image-modal__close" onClick={closeImageModal}>
                <X size={24} />
              </button>
      <img src={selectedCert.credentialImg} alt="Certificado completo" />
    </div>
  </div>
)}

      </div>
    </div>
  );
}

export default About;