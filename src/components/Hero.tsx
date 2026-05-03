import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className={styles.heroScene}>
      
      {/* --- BACKGROUND LAYER --- */}
     <div className={styles.backgroundCanvas}>
        {/* Changed motion.div to standard div and removed style={{ y: gridY }} */}
        <div className={styles.gridFloor} />

        <div className={styles.dataPulseContainer}>
          {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className={styles.pulseLine} 
            style={{ 
            left: `${15 + i * 20}%`, 
            animationDelay: `${i * 1.2}s`,
            opacity: 0.4 /* Subtle transparency */
          }} 
          />
          ))}
        </div>
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className={styles.heroGrid}>
        <div className={styles.heroTextBlock}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={styles.heroHeadline}
          >
            Embark on a journey where I design 
            <span className={styles.glowYellow}> aesthetic worlds</span> and develop 
            <span className={styles.glowPink}> interactive mechanics</span> to build 
            <span className={styles.glowYellow}> immersive gameplay</span>.
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
              <div className={styles.typingWrapper}>
                <span className={styles.typingText}>[ANALYZING_ENTITY.SYS]...</span>
              </div>
              <div className={styles.controlButtons}>_ [] X</div>
            </div>
            
            <div className={styles.assetVisualArea}>
              <img 
                src="./images/test.png" 
                alt="Developer Avatar"
                className={styles.devPhoto}
                onLoad={() => console.log("Image loaded successfully")}
                onError={(e) => console.error("Image failed to load:", e)}
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