import React from 'react';
import styles from '../styles/AboutMe.module.css';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className={styles.aboutScene}>
      {/* Top Level Stats */}
      <div className={styles.statsGrid}>
    {/* All three top cards now use the same 'Item' design */}
    <div className={styles.statCard}>
      <div className={styles.rarityBadge}>TYPE: ID</div>
      <span className={styles.itemHeader}>[STATION: NJIT]</span>
      <span className={styles.statValue}>NJIT</span>
      <p className={styles.statLabel}>Current IT Student specializing in Game Development</p>
    </div>
    
    <div className={styles.statCard}>
       <div className={styles.rarityBadge}>STAT: ATK</div>
       <span className={styles.itemHeader}>[SKILL: PHYSICS]</span>
       <span className={styles.statValue}>100%</span>
       <p className={styles.statLabel}>Commitment to mastering game mechanics</p>
    </div>

    <div className={styles.statCard}>
       <div className={styles.rarityBadge}>TYPE: ARCHIVE</div>
       <span className={styles.itemHeader}>[PROJECT: BALLET]</span>
       <span className={styles.statValue}>v2.0</span>
       <p className={styles.statLabel}>Digital archive for Triadic Ballet reconstructions</p>
    </div>
  </div>

      <div className={styles.operatingModel}>
      {/* Standard Item Box */}
        <div className={styles.modelContainer}>
          <div className={styles.rarityBadge}>TYPE: SYSTEM_LOG</div>
          <span className={styles.itemHeader}>[ITEM: DEVELOPMENT_CORE]</span>
    
          <div className={styles.modelGrid}>
            <div className={styles.pillarCard}>
              <h3 className={styles.pillarTitle}>MASTER MECHANICS</h3>
              <p className={styles.pillarText}>Mastering physics-based character persistence.</p>
            </div>
            {/* ... other pillarCards ... */}
          </div>
        </div>

        {/* Legendary Item Box */}
        <div className={styles.facultyNote}>
          <div className={styles.rarityBadge}>RARITY: LEGENDARY</div>
          <span className={styles.itemHeader}>[MISSION: IMMERSIVE_UX]</span>
    
          <p className={styles.quote}>
            "BUILDING SYSTEMS THAT DRAW PLAYERS DEEP INTO THE ADVENTURE."
          </p>
    
          <div className={styles.terminalTags} style={{ marginTop: '20px', color: 'var(--accent-pink)', fontSize: '0.7rem' }}>
            <span>#UNITY</span> <span>#C#</span> <span>#PHYSICS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;