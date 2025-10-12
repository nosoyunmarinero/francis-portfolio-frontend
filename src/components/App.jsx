import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';import Header from "./Header/Header";
import Main from "./Main/main.jsx";
import Footer from "./Footer/Footer";
import About from "./About/About.jsx";
import Projects from "./Projects/Projects.jsx";
import Contact from "./Contact/Contact.jsx";
import Preloader from "./Preloader/Preloader.jsx";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
  window.addEventListener('load', () => {
    setLoading(false);
  });
}, []);;

  return (
    <Router>
      {loading && <Preloader />}
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
