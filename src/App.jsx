import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Studies from './sections/Studies';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import ScrollToTopButton from './components/ScrollToTopButton';
import { useState, useEffect } from 'react';
import './styles/global.css';



function App() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };




  return (
    <div className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light transition-colors duration-300">
      <Navbar onNavigate={scrollToSection} />
      <Home />
      <About />
      <Studies />
      <Experience />
      <Skills />
      <Contact />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
