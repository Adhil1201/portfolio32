import React, { useState, useEffect } from 'react';
import Aurora from './components/Aurora';
import DockNavigation from './components/DockNavigation';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import SplashCursor from './components/SplashCursor';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    
    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle scroll-based section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      <Aurora />
      
      <main>
        <div id="home">
          <Home onNavigate={handleSectionChange} />
        </div>
        
        <div id="about">
          <About />
        </div>
        
        <div id="projects">
          <Projects />
        </div>
        
        <div id="contact">
          <Contact />
        </div>
      </main>

      <DockNavigation 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange} 
      />
      
      <SplashCursor />
    </div>
  );
}

export default App;