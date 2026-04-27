import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className={styles.heroScene}>
      <div className={styles.heroGrid}>
        
        <div className={styles.heroTextBlock}>
          {/* Glitch Entrance for Headline */}
          <motion.h1 
            initial={{ skewX: 20, opacity: 0 }}
            animate={{ skewX: 0, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className={styles.heroHeadline}
          >
            I BUILD <span className={styles.glowYellow}>SYSTEMS</span> <br/>
            AND <span className={styles.glowPink}>WORLDS</span>.
          </motion.h1>
        </div>
        
        <div className={styles.heroVisualBlock}>
          <div className={styles.retroTerminalWindow}>
            <div className={styles.terminalHeader}>
              <span className={styles.typingText}>[SYSTEM_ANALYSIS.EXE]... RUNNING</span>
              <div className={styles.controlButtons}>_ [] X</div>
            </div>
            
            <div className={styles.assetVisualArea}>
              <img 
                src="/images/my-photo.webp" 
                alt="Developer Avatar"
                className={styles.devPhoto}
              />
              {/* THE SCANNER: Moving laser line */}
              <div className={styles.scannerLine} />
              {/* THE NOISE: Subtle static overlay */}
              <div className={styles.staticOverlay} />
            </div>
            
            <div className={styles.scanlines} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;