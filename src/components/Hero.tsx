import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from '../styles/Hero.module.css';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const gridY = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section id="hero" className={styles.heroScene}>
      
      {/* --- BACKGROUND LAYER --- */}
      <div className={styles.backgroundCanvas}>
        <motion.div 
          style={{ y: gridY }}
          className={styles.gridFloor} 
        />
        
        {/* Removed floatingCircle from here */}

        <div className={styles.dataPulseContainer}>
          {[...Array(4)].map((_, i) => (
            <div 
              key={i} 
              className={styles.pulseLine} 
              style={{ left: `${20 + i * 20}%`, animationDelay: `${i * 0.8}s` }} 
            />
          ))}
        </div>
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className={styles.heroGrid}>
        <div className={styles.heroTextBlock}>
          {/* Simple Fade-In Entrance (No Glitch/Skew) */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={styles.heroHeadline}
          >
            I BUILD <span className={styles.glowYellow}>SYSTEMS</span> <br/>
            AND <span className={styles.glowPink}>WORLDS</span>.
          </motion.h1>
        </div>
        
        <div className={styles.heroVisualBlock}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className={styles.retroTerminalWindow}
          >
            <div className={styles.terminalHeader}>
              <span className={styles.typingText}>[ANALYZING_ENTITY.SYS]...                   _ [] X</span>
            </div>
            
            <div className={styles.assetVisualArea}>
              <img 
                src="/images/my-photo.webp" 
                alt="Developer Avatar"
                className={styles.devPhoto}
              />
              <div className={styles.scannerLine} />
              <div className={styles.staticOverlay} />
            </div>
            
            <div className={styles.scanlines} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;