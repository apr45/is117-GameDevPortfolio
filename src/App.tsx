import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import ProjectSlider from './components/ProjectSlider';
import CTA from './components/CTA';
import './styles/index.css';

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 1. Logic Architecture: Global scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 2. The Magician's Touch: Transform background based on "Level"
  const bgColor = useTransform(scrollYProgress, [0, 0.5, 1], ["#0a0a0a", "#1a1a1a", "#0a0a0a"]);
  const activeLevel = useTransform(scrollYProgress, [0, 0.5, 1], ["LVL 1", "LVL 5", "LVL 10"]);

  return (
    <motion.div ref={containerRef} style={{ backgroundColor: bgColor }} className="scrolly-container">
      
      {/* 3. The Sticky Stage: Stays pinned while you scroll */}
      <div className="sticky-stage">
        <div className="experience-bar-container">
          <motion.div 
            className="experience-bar" 
            style={{ scaleX: scrollYProgress, transformOrigin: "0%" }} 
          />
        </div>
        
        {/* Visual HUD: Shows current Level status */}
        <div className="hud-display pixel-border">
          <p>{">"} STATUS: ACTIVE</p>
          <motion.h3>{activeLevel}</motion.h3>
        </div>
      </div>

      {/* 4. Scrolling Steps: Modular content from your files */}
      <main className="content-steps">
        <div className="step-wrapper"><Hero /></div>
        <div className="step-wrapper"><AboutMe /></div>
        <div className="step-wrapper"><ProjectSlider /></div>
        <div className="step-wrapper"><CTA /></div>
      </main>

    </motion.div>
  );
};

export default App;