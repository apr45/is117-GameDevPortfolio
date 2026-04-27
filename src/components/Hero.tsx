import React from 'react';
import styles from '../styles/Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className={styles.heroScene}>
      <div className={styles.heroGrid}>
        
        {/* LEFT COLUMN: The Branding Statement */}
        <div className={styles.heroTextBlock}>
          <h1 className={styles.heroHeadline}>
            I BUILD <span className={styles.glowYellow}>SYSTEMS</span> <br/>
            AND <span className={styles.glowPink}>WORLDS</span>.
          </h1>
          {/* Subtext removed for a cleaner, high-impact look */}
        </div>
        
        {/* RIGHT COLUMN: The Visual Terminal */}
        <div className={styles.heroVisualBlock}>
          <div className={styles.retroTerminalWindow}>
            <div className={styles.terminalHeader}>
              <span>[SYSTEM_ANALYSIS.EXE]</span>
              <div className={styles.controlButtons}>_ [] X</div>
            </div>
            
            <div className={styles.assetVisualArea}>
              <img 
                src="/images/my-photo.webp" 
                alt="Developer Avatar"
                className={styles.devPhoto}
              />
            </div>
            
            <div className={styles.scanlines} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;