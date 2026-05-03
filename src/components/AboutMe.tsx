import React from 'react';
import styles from '../styles/AboutMe.module.css';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className={styles.aboutScene}>
      <div className={styles.asymmetricGrid}>
        
        {/* BOX 1: NJIT STATUS (Narrow - Top Left) */}
        <div className={styles.statCard}>
          <div className={styles.rarityBadge}>STATUS: ACTIVE</div>
          <span className={styles.itemHeader}>[STATION: NJIT]</span>
          <span className={styles.statValue}>IT MAJOR</span>
          <p className={styles.statLabel}>
            Specializing in Game Development. Crafting the technical bridge between systems and player experience.
          </p>
        </div>

        {/* BOX 2: PROGRAMMING TOOLKIT (Wide - Top Right) */}
        /* BOX 2: PROGRAMMING TOOLKIT (Wide - Top Right) */
<div className={`${styles.statCard} ${styles.wideItem}`}>
  <div className={styles.rarityBadge}>STAT: INT</div>
  <span className={styles.itemHeader}>[SKILL: CORE_LOGIC]</span>
  
  <div className={styles.modelGrid}>
    {/* PYTHON */}
    <div className={styles.pillarCard}>
      <div className={styles.chartContainer}>
        <div className={`${styles.circleSmall} ${styles.pythonChart}`}>
          <span className={styles.percentageText}>85%</span>
        </div>
      </div>
      <h3 className={styles.pillarTitle}>1. PYTHON</h3>
      <p className={styles.pillarText}>System automation & data structures.</p>
    </div>

    {/* JAVA */}
    <div className={styles.pillarCard}>
      <div className={styles.chartContainer}>
        <div className={`${styles.circleSmall} ${styles.javaChart}`}>
          <span className={styles.percentageText}>75%</span>
        </div>
      </div>
      <h3 className={styles.pillarTitle}>2. JAVA</h3>
      <p className={styles.pillarText}>Robust object-oriented design patterns.</p>
    </div>

    {/* C# (UNITY) */}
    <div className={styles.pillarCard}>
      <div className={styles.chartContainer}>
        <div className={`${styles.circleSmall} ${styles.unityChart}`}>
          <span className={styles.percentageText}>95%</span>
        </div>
      </div>
      <h3 className={styles.pillarTitle}>3. C# (UNITY)</h3>
      <p className={styles.pillarText}>Primary gameplay mechanics developer.</p>
    </div>
  </div>
</div>

        {/* BOX 3: CREATIVE PATH (Wide - Bottom Left) */}
        <div className={`${styles.statCard} ${styles.wideItem}`}>
          <div className={styles.rarityBadge}>TYPE: ARTISAN</div>
          <span className={styles.itemHeader}>[PATH: WORLD_BUILDING]</span>
          <p className={styles.quote}>
            SCULPTING & GRAPHIC DESIGN
          </p>
          <p className={styles.statLabel}>
            Visualizing aesthetic environments and tangible assets to build deeper gameplay immersion.
          </p>
        </div>

        {/* BOX 4: WEB DEV GOALS (Narrow - Bottom Right) */}
        {/* Removed facultyNote class to get rid of the pink shadow */}
        <div className={styles.statCard}>
          <div className={styles.rarityBadge}>RARITY: LEGENDARY</div>
          <span className={styles.itemHeader}>[MISSION: WEB_EXPANSION]</span>
          <span className={styles.statValue}>WEB_DEV</span>
          <p className={styles.statLabel}>
            Evolving interactive mechanics into modern, full-stack web ecosystems.
          </p>
          <div className={styles.terminalTags} style={{ marginTop: '10px', color: 'var(--accent-pink)', fontSize: '0.7rem' }}>
            <span>#MERN_STACK</span> <span>#INTEGRATION</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;