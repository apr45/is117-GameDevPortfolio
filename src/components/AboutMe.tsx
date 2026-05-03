import React from 'react';
import styles from '../styles/AboutMe.module.css';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className={styles.aboutScene}>
      <div className={styles.aboutGrid}>
        
        {/* BOX 1: ACADEMIC STATUS */}
        <div className={styles.statCard}>
          <div className={styles.rarityBadge}>STATUS: ACTIVE</div>
          <span className={styles.itemHeader}>[STATION: NJIT]</span>
          <span className={styles.statValue}>IT MAJOR</span>
          <p className={styles.statLabel}>
            Specializing in Game Development. Crafting the bridge between technical infrastructure and player experience.
          </p>
        </div>

        {/* BOX 2: PROGRAMMING STACK */}
        <div className={styles.statCard}>
          <div className={styles.rarityBadge}>STAT: INT</div>
          <span className={styles.itemHeader}>[SKILL: CORE_LOGIC]</span>
          <span className={styles.statValue}>DEV TOOLKIT</span>
          <div className={styles.tagRow}>
            <span className={styles.tag}>#PYTHON</span>
            <span className={styles.tag}>#JAVA</span>
            <span className={styles.tag}>#C#_UNITY</span>
          </div>
          <p className={styles.statLabel} style={{marginTop: '10px'}}>
            Architecting robust systems and gameplay mechanics within the Unity Engine.
          </p>
        </div>

        {/* BOX 3: CREATIVE HOBBIES */}
        <div className={styles.statCard}>
          <div className={styles.rarityBadge}>TYPE: ARTISAN</div>
          <span className={styles.itemHeader}>[PATH: WORLD_BUILDING]</span>
          <span className={styles.statValue}>CREATIVE</span>
          <p className={styles.statLabel}>
            Leveraging <strong>Sculpting</strong> and <strong>Graphic Design</strong> to visualize aesthetic worlds and tangible assets.
          </p>
        </div>

        {/* BOX 4: FUTURE OUTLOOK (LEGENDARY BOX) */}
        <div className={`${styles.statCard} ${styles.facultyNote}`}>
          <div className={styles.rarityBadge}>RARITY: MYTHIC</div>
          <span className={styles.itemHeader}>[MISSION: EXPANSION]</span>
          <p className={styles.quote}>
            "EVOLVING BEYOND THE GAME ENGINE INTO FULL-STACK WEB DEVELOPMENT."
          </p>
          <p className={styles.statLabel}>
            Seeking to integrate immersive interactive mechanics into modern web ecosystems.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;