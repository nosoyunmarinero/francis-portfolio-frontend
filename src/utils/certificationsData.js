import tripletenCert from "../images/tripleten-cert.jpg"
import baseCert from "../images/aprende-base.jpg"
import testerCert from "../images/aprende-tester.jpg"

// Certificaciones - PERSONALIZA CON TUS DATOS REALES
  export const certifications = [
    {
      id: 1,
      name: 'Full Stack Web Development',
      institution: 'Tripleten',
      logo: 'https://tripleten-landings.s3.amazonaws.com/content/20240208153306/tild3234-3838-4730-b033-623432393031__telegram-cloud-docum.png',
      date: '2025',
      skills: ['React', 'Node.js', 'MongoDB', 'Express', 'HTML5', 'CSS3', 'JavaScript(ES6+)', 'Vite', 'Responsive Design', 'API REST', 'FETCH', 'Git', 'Github', 'Figma'],
      description: 'Comprehensive program focused on building and deploying complete web applications using JavaScript, React, Node.js, Express, and MongoDB. Covered frontend and backend development, RESTful APIs, responsive design, version control with Git, and cloud deployment.',
      credentialImg: tripletenCert
    },
    {
      id: 2,
      name: 'Server administrator',
      institution: 'freeCodeCamp',
      logo: 'https://aprende.org/assets/images/logoApp.png',
      date: '2025',
      skills: ['Linux', 'NGINX', 'PM2', 'SSH', 'Cloud Deployment'],
      description: 'Server Administrator & Full Stack Developer skilled in Linux, NGINX, PM2, and Node.js. Experienced in deploying and maintaining secure, high-performance web applications and cloud environments.',
      credentialImg: baseCert
    },
    {
      id: 3,
      name: 'Responsive Web Design',
      institution: 'freeCodeCamp',
      logo: 'https://aprende.org/assets/images/logoApp.png',
      date: '2023',
      skills: ['Jira','Web Testing','Bug Tracking','Debugging','Test Documentation',],
      description: 'Focused on web testing, bug detection, and quality assurance for applications built with HTML, CSS, JavaScript, and Node.js, following agile methodologies.',
      credentialImg: testerCert
    },
   
  ];