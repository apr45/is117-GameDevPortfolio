import React from 'react';
import styles from '../styles/AboutMe.module.css';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className={styles.aboutScene}>
  <div className={styles.aboutGrid}>
    
    {/* BOX 1: NJIT STATUS */}
    <div className={styles.statCard}>
      <div className={styles.rarityBadge}>STATUS: ACTIVE</div>
      <span className={styles.itemHeader}>[STATION: NJIT]</span>
      <span className={styles.statValue}>IT MAJOR</span>
      <p className={styles.statLabel}>Specializing in Game Development at NJIT.</p>
    </div>

    {/* BOX 2: PROGRAMMING TOOLKIT (Now standard size) */}
    <div className={styles.statCard}>
      <div className={styles.rarityBadge}>STAT: INT</div>
      <span className={styles.itemHeader}>[SKILL: CORE_LOGIC]</span>
      
      {/* Changed to a vertical stack for a narrower box */}
      <div className={styles.verticalStack}>
        <div className={styles.skillRow}>
          <div className={`${styles.circleSmall} ${styles.pythonChart}`}>85%</div>
          <span>PYTHON</span>
        </div>
        <div className={styles.skillRow}>
          <div className={`${styles.circleSmall} ${styles.javaChart}`}>75%</div>
          <span>JAVA</span>
        </div>
        <div className={styles.skillRow}>
          <div className={`${styles.circleSmall} ${styles.unityChart}`}>95%</div>
          <span>C# (UNITY)</span>
        </div>
      </div>
    </div>

    {/* BOX 3: CREATIVE HOBBIES */}
    <div className={styles.statCard}>
      <div className={styles.rarityBadge}>TYPE: ARTISAN</div>
      <span className={styles.itemHeader}>[PATH: WORLD_BUILDING]</span>
      <span className={styles.statValue}>CREATIVE</span>
      <p className={styles.statLabel}>Focusing on Sculpting and Graphic Design.</p>
    </div>

    {/* BOX 4: FUTURE OUTLOOK */}
    <div className={`${styles.statCard} ${styles.facultyNote}`}>
      <div className={styles.rarityBadge}>RARITY: MYTHIC</div>
      <span className={styles.itemHeader}>[MISSION: EXPANSION]</span>
      <p className={styles.quote}>"EVOLVING INTO WEB DEV."</p>
    </div>

  </div>
</section>
  );
};

export default AboutMe;