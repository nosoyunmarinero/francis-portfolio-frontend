import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import fiverrLogo from "../../images/fiverr.png"; // Ajusta la ruta a tu PNG
import "./Contact.css";

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setSent(true);
      form.reset();
    } else {
      alert("Error sending message.");
    }
  };

  return (
    <section className="contact-section">
      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-subtitle">Let's build something great together!</p>

      <div className="contact-links">
        <a
          href="https://github.com/nosoyunmarinero"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/francisco-romero-ab816326b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a href="mailto:nosoyunmarinero@gmail.com">
          <FaEnvelope /> Email
        </a>
        <a
          href="https://es.fiverr.com/s/jjrqdbV"
          target="_blank"
          rel="noopener noreferrer"
        > 
          Fiverr
        </a>
      </div>

      <form
        onSubmit={handleSubmit}
        action="https://formspree.io/f/xnnggpnl"
        method="POST"
        className="contact-form"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit">Send Message</button>
        {sent && <p className="sent-msg">¡Message sent successfully!</p>}
      </form>
    </section>
  );
}

export default Contact;
