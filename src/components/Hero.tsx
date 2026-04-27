import React from 'react';
import styles from '../styles/Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className={styles.heroScene}>
      <div className={styles.heroGrid}>
        
        {/* LEFT COLUMN: Narrative Text (Jules Morrow Layout) */}
        <div className={styles.heroTextBlock}>
          {/* Top small label - matching the exemplar hierarchy */}
          <p className={styles.heroLabel}>
            {">"} NJIT // INFORMATION TECHNOLOGY // GAME DEV STUDENT
          </p>
          
          {/* Main Headline - High-impact 8-bit text */}
          <h1 className={styles.heroHeadline}>
            I BUILD ROBUST <span className={styles.glowYellow}>SYSTEMS</span> AND 
            IMMERSIVE <span className={styles.glowPink}> WORLDS</span> FOR VIDEO GAMES.
          </h1>
          
          {/* Detailed Paragraph - Professional Narrative */}
          <p className={styles.heroSubtext}>
            I am an IT student focusing on the part after the concept sprint: 
            the <span className={styles.highlight}>physics engines</span>, 
            <span className={styles.highlight}>component logic</span>, character <span className={styles.highlight}>state management</span>, 
            and data architecture that make an interactive world hold together. 
            My work sits between technical system infrastructure and compelling gameplay mechanics.
          </p>
        </div>
        
        {/* RIGHT COLUMN: Retro Visual Asset */}
        <div className={styles.heroVisualBlock}>
          <div className={styles.retroVectorPlaceholder}>
            {/* Visual Asset Placeholder */}
            [RETRO_VECTOR_ASSET]
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;