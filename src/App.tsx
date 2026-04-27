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
    // Adjusted offset to trigger earlier in the scroll
    offset: ["start end", "end start"] 
  });

  // Change these values to [0, 0.1, 0.9, 1] so it fades in ALMOST immediately
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.9, 1, 1, 0.9]);
  
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });

  return (
  <motion.div 
    ref={ref} 
    style={{ 
      opacity, 
      scale: smoothScale,
      position: 'relative',
      // --- ADDED FOR CENTERING ---
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      minHeight: '100vh' // Ensures each section takes up the full view for centering
    }}
  >
    {children}
  </motion.div>
  );
};

const BackgroundDecor = () => {
  return (
    <div className="bg-pixel-layer">
      {/* Generate 30 retro stars */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="retro-star"
          animate={{
            y: [-10, -1000], // Drifting upward
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * -20,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `100%`,
            width: i % 3 === 0 ? '4px' : '2px', // Varied pixel sizes
            height: i % 3 === 0 ? '4px' : '2px',
          }}
        />
      ))}
    </div>
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

    <BackgroundDecor />
     
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