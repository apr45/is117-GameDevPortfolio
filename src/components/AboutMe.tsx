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

        {/* 
          BOX 2: PROGRAMMING STACK (Wide Card)
          This container now spans both columns.
        */}
        <div className={`${styles.statCard} ${styles.wideItem}`}>
          <div className={styles.rarityBadge}>STAT: INT</div>
          <span className={styles.itemHeader}>[SKILL: CORE_LOGIC]</span>
          
          <div className={styles.modelGrid}>
            
            {/* SUB-ITEM 1: PYTHON */}
            <div className={styles.pillarCard}>
              <h3 className={styles.pillarTitle}>1. PYTHON</h3>
              <p className={styles.pillarText}>
                Mastery of data structures and automation. Used for physics-based persistence systems[cite: 2].
              </p>
            </div>

            {/* SUB-ITEM 2: JAVA */}
            <div className={styles.pillarCard}>
              <h3 className={styles.pillarTitle}>2. JAVA</h3>
              <p className={styles.pillarText}>
                Strong object-oriented architecture and system design[cite: 2].
              </p>
            </div>

            {/* SUB-ITEM 3: C# UNITY */}
            <div className={styles.pillarCard}>
              <h3 className={styles.pillarTitle}>3. C# (UNITY)</h3>
              <p className={styles.pillarText}>
                Primary language for developing robust gameplay mechanics within the Unity Engine[cite: 1, 2].
              </p>
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