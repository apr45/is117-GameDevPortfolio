import React from 'react';
import styles from '../styles/AboutMe.module.css';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className={styles.aboutScene}>
      <div className={styles.aboutGrid}>
        
        {/* BOX 1: ACADEMIC STATUS (Standard Card) */}
        <div className={styles.statCard}>
          <div className={styles.rarityBadge}>STATUS: ACTIVE</div>
          <span className={styles.itemHeader}>[STATION: NJIT]</span>
          <span className={styles.statValue}>IT MAJOR</span>
          <p className={styles.statLabel}>
            Specializing in Game Development at NJIT[cite: 1, 3]. Crafting technical architecture[cite: 3].
          </p>
        </div>

        {/* BOX 3: CREATIVE HOBBIES (Standard Card) */}
        <div className={styles.statCard}>
          <div className={styles.rarityBadge}>TYPE: ARTISAN</div>
          <span className={styles.itemHeader}>[PATH: WORLD_BUILDING]</span>
          <span className={styles.statValue}>CREATIVE</span>
          <p className={styles.statLabel}>
            Leveraging <strong>Sculpting</strong> and <strong>Graphic Design</strong> to visualize aesthetic worlds[cite: 1].
          </p>
        </div>

        {/* BOX 2: PROGRAMMING STACK (Wide Card) */}
<div className={`${styles.statCard} ${styles.wideItem}`}>
  <div className={styles.rarityBadge}>STAT: INT</div>
  <span className={styles.itemHeader}>[SKILL: CORE_LOGIC]</span>
  
  <div className={styles.modelGrid}>
    {/* SUB-ITEM: PYTHON */}
    <div className={styles.pillarCard}>
      <div className={styles.chartContainer}>
        <div className={`${styles.circle} ${styles.pythonChart}`}>
          <span className={styles.percentageText}>85%</span>
        </div>
      </div>
      <h3 className={styles.pillarTitle}>PYTHON</h3>
      <p className={styles.pillarText}>Data structures and system automation[cite: 2].</p>
    </div>

    {/* SUB-ITEM: JAVA */}
    <div className={styles.pillarCard}>
      <div className={styles.chartContainer}>
        <div className={`${styles.circle} ${styles.javaChart}`}>
          <span className={styles.percentageText}>75%</span>
        </div>
      </div>
      <h3 className={styles.pillarTitle}>JAVA</h3>
      <p className={styles.pillarText}>Object-oriented architecture and design[cite: 2].</p>
    </div>

    {/* SUB-ITEM: C# (UNITY) */}
    <div className={styles.pillarCard}>
      <div className={styles.chartContainer}>
        <div className={`${styles.circle} ${styles.unityChart}`}>
          <span className={styles.percentageText}>95%</span>
        </div>
      </div>
      <h3 className={styles.pillarTitle}>C# (UNITY)</h3>
      <p className={styles.pillarText}>Gameplay mechanics and Unity engine development[cite: 8].</p>
    </div>
  </div>
</div>
        {/* BOX 4: FUTURE OUTLOOK (Legendary Box - Standard Card) */}
        <div className={`${styles.statCard} ${styles.facultyNote}`}>
          <div className={styles.rarityBadge}>RARITY: MYTHIC</div>
          <span className={styles.itemHeader}>[MISSION: EXPANSION]</span>
          <p className={styles.quote}>
            "EVOLVING BEYOND THE ENGINE INTO WEB DEVELOPMENT."
          </p>
          <p className={styles.statLabel}>
            Integrating immersive interactivity into modern full-stack web ecosystems.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;