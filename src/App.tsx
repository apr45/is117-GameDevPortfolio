import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import ProjectSlider from './components/ProjectSlider';
import CTA from './components/CTA';
import './styles/index.css';

/**
 * 1. SceneWrapper: Handles the BSEAI-inspired Zoom & Fade
 * This component tracks its own scroll progress relative to the viewport.
 */
const SceneWrapper = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Animation logic: Fade and zoom in at 20% scroll, fade and zoom out at 80%
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  
  // Smooth out the scale transition for a premium feel
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });

  return (
    <motion.div 
      ref={ref} 
      style={{ opacity, scale: smoothScale }} 
      className="step-wrapper"
    >
      {children}
    </motion.div>
  );
};

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 2. Global Logic: Tracks total journey progress for the HUD and background
  const { scrollYProgress: globalScroll } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const bgColor = useTransform(globalScroll, [0, 0.5, 1], ["#0a0a0a", "#1a1a1a", "#0a0a0a"]);

  return (
    <motion.div ref={containerRef} style={{ backgroundColor: bgColor }} className="scrolly-container">

      {/* 1. THE GLOBAL STICKY HEADER (Now using index.css classes) */}
      <header className="global-sticky-header">
        {">"} NJIT // <span className="blue-accent">IT</span> // <span className="green-accent">GAME DEV STUDENT</span>
      </header>
      
      {/* 2. THE STICKY HUD STAGE */}
      <div className="sticky-stage">
        {/* Experience Bar Container: Pinned at the top just below the header */}
        <div className="experience-tracker">
          <div className="bar-label">XP_PROGRESS:</div>
          <div className="experience-bar-container">
            <motion.div 
              className="experience-bar" 
              style={{ scaleX: globalScroll, transformOrigin: "0%" }} 
            />
          </div>
        </div>
      </div>

      {/* 3. Animated Scrolling Steps: Integrated SceneWrappers */}
      <main className="content-steps">
        <SceneWrapper><Hero /></SceneWrapper>
        <SceneWrapper><AboutMe /></SceneWrapper>
        <SceneWrapper><ProjectSlider /></SceneWrapper>
        <SceneWrapper><CTA /></SceneWrapper>
      </main>

    </motion.div>
  );
};

export default App;