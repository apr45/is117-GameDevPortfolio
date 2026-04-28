import React from 'react';
import styles from '../styles/AboutMe.module.css';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className={styles.aboutScene}>
      {/* Top Level Stats */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <span className={styles.statValue}>NJIT</span>
          <p className={styles.statLabel}>Current IT Student specializing in Game Development</p>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statValue}>100%</span>
          <p className={styles.statLabel}>Commitment to mastering game mechanics & physics</p>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statValue}>v2.0</span>
          <p className={styles.statLabel}>Digital archive for Triadic Ballet reconstructions</p>
        </div>
      </div>

      <div className={styles.operatingModel}>
        {/* Development Philosophy */}
        <div className={styles.modelContainer}>
          <span className={styles.statLabel}>OPERATING_LOG.SYS</span>
          <div className={styles.modelGrid}>
            <div className={styles.pillarCard}>
              <h3 className={styles.pillarTitle}>MASTER MECHANICS</h3>
              <p className={styles.pillarText}>I focus on the underlying physics that make worlds feel real.</p>
            </div>
            <div className={styles.pillarCard}>
              <h3 className={styles.pillarTitle}>PROTOTYPE EARLY</h3>
              <p className={styles.pillarText}>Finding the "fun" through rapid iteration of core gameplay loops.</p>
            </div>
            <div className={styles.pillarCard}>
              <h3 className={styles.pillarTitle}>AESTHETIC SYNC</h3>
              <p className={styles.pillarText}>Matching technical logic with stunning visual aesthetics.</p>
            </div>
          </div>
        </div>

        {/* The "Note" or Philosophy callout */}
        <div className={styles.facultyNote}>
          <span className={styles.statLabel}>CORE_MISSION</span>
          <p className={styles.quote}>
            "BUILDING SYSTEMS THAT DON'T JUST WORK, BUT DRAW PLAYERS DEEP INTO THE ADVENTURE."
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;