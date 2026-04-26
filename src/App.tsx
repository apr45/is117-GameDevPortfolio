import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import ProjectSlider from './components/ProjectSlider';
import CTA from './components/CTA';
import './styles/index.css';

const App: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      // Logic for tracking the Player Journey through the scroll timeline
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalHeight;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scrolly-wrapper">
      {/* 8-bit Progress Bar (The Magician's UI) */}
      <div 
        className="experience-bar" 
        style={{ width: `${scrollProgress * 100}%` }} 
      />

      <main className="viewport">
        <Hero />
        <AboutMe />
        <ProjectSlider />
        <CTA />
      </main>
    </div>
  );
};

export default App;