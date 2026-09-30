import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import Hero from './sections/Hero';
import About from './sections/About';
import EducationExperience from './sections/EducationExperience';
import Achievements from './sections/Achievements';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import UIUXShowcase from './sections/UIUXShowcase';
import WhyWorkWithMe from './sections/WhyWorkWithMe';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Sync loader duration with progress fill animation (1.8s)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Custom Mouse Elements */}
      <CustomCursor />
      <div className="ambient-glow" />
      <ParticleBackground />

      {/* Screen Loader */}
      {isLoading ? (
        <div className="loader-container">
          <div className="loader-logo">
            BHAVYA<span>.</span>
          </div>
          <div className="loader-bar">
            <div className="loader-progress" />
          </div>
        </div>
      ) : (
        <div style={{ position: 'relative', zIndex: 2 }}>
          {/* Header Navigation */}
          <Navbar />

          {/* Section Directives */}
          <main>
            <Hero />
            <About />
            <EducationExperience />
            <Achievements />
            <Skills />
            <Projects />
            <UIUXShowcase />
            <WhyWorkWithMe />
            <Contact />
          </main>

          {/* Site Footer */}
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
