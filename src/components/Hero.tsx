import React from 'react';
// Modular CSS import prevents style bleeding
import styles from '../styles/Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className={styles.heroScene}>

      <div className={styles.heroGrid}>
        
        {/* LEFT COLUMN: Narrative & Title Structure */}
        <div className={styles.heroTextBlock}>
        
          {/* Main Headline - Activated as a big, bold TITLE */}
          <h1 className={styles.heroHeadline}>
            I BUILD ROBUST <span className={styles.glowYellow}>SYSTEMS</span> AND 
            IMMERSIVE <span className={styles.glowPink}> WORLDS</span>.
          </h1>
          
          <p className={styles.heroSubtext}>
            I am an IT student focusing on the part after the concept sprint...
          </p>
        </div>
        
        {/* RIGHT COLUMN: Attention-Grabbing 8-bit Visual */}
        <div className={styles.heroVisualBlock}>
          <div className={styles.retroTerminalWindow}>
            {/* 1. Terminal HUD Element */}
            <div className={styles.terminalHeader}>
              <span>[SYSTEM_ANALYSIS.EXE]</span>
              <div className={styles.controlButtons}>_ [] X</div>
            </div>
            
            {/* 2. Imported Photo Placeholder (Jules Morrow layout style) */}
            <div className={styles.assetVisualArea}>
              <img 
                src="/images/my-photo.webp" // <--- Import your photo path here
                alt="Developer Avatar"
                className={styles.devPhoto}
              />
            </div>
            
            {/* 3. 8-bit Scanline Overlay (The Magician's Touch) */}
            <div className={styles.scanlines} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;