import React from 'react';
import styles from '../styles/AboutMe.module.css';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className={styles.aboutScene}>
      <div className={styles.asymmetricGrid}>
        
        {/* BOX 1: NJIT STATUS (Narrow - Top Left) */}
        <div className={styles.statCard}>
          <span className={styles.itemHeader}>[EDUCATION: NJIT]</span>
          <span className={styles.statValue}>IT MAJOR</span>
          <p className={styles.statLabel}>
            Specializing in Game Development. Crafting the technical bridge between systems and player experience.
          </p>
        </div>

        {/* BOX 2: PROGRAMMING TOOLKIT (Wide - Top Right) */}
<div className={`${styles.statCard} ${styles.wideItem}`}>
  <span className={styles.itemHeader}>[SKILLS: PROGRAMMING_LANGUAGES]</span>
  
  <div className={styles.modelGrid}>
    {/* PYTHON */}
    <div className={styles.pillarCard}>
      <div className={styles.chartContainer}>
        <div className={`${styles.circleSmall} ${styles.pythonChart}`}>
          <span className={styles.percentageText}>70%</span>
        </div>
      </div>
      <h3 className={styles.pillarTitle}>1. PYTHON</h3>
      <p className={styles.pillarText}>Mastering basic syntax and logic to engineer simple yet efficient scripts.</p>
    </div>

    {/* JAVA */}
    <div className={styles.pillarCard}>
      <div className={styles.chartContainer}>
        <div className={`${styles.circleSmall} ${styles.javaChart}`}>
          <span className={styles.percentageText}>85%</span>
        </div>
      </div>
      <h3 className={styles.pillarTitle}>2. JAVA</h3>
      <p className={styles.pillarText}>Implementing advanced OOP concepts to architect robust client and server-side infrastructures.</p>
    </div>

    {/* C# (UNITY) */}
    <div className={styles.pillarCard}>
      <div className={styles.chartContainer}>
        <div className={`${styles.circleSmall} ${styles.unityChart}`}>
          <span className={styles.percentageText}>55%</span>
        </div>
      </div>
      <h3 className={styles.pillarTitle}>3. C#</h3>
      <p className={styles.pillarText}>Ongoing learning process to develop complex game mechanics within the Unity engine.</p>
    </div>
  </div>
</div>

{/* BOX 3: CREATIVE PATH (Wide - Bottom Left) */}
<div className={`${styles.statCard} ${styles.wideItem}`}>
  <span className={styles.itemHeader}>[PATH: WORLD_BUILDING]</span>
  
  <div className={styles.modelGridHobbies}>
    {/* HOBBY 1: SCULPTING */}
    <div className={styles.pillarCard}>
      <h3 className={styles.pillarTitle}>1. SCULPTING</h3>
      <p className={styles.pillarText}>
        Physical and digital modeling to create tangible assets for gameplay immersion.
      </p>
    </div>

    {/* HOBBY 2: GRAPHIC DESIGN */}
    <div className={styles.pillarCard}>
      <h3 className={styles.pillarTitle}>2. DESIGN</h3>
      <p className={styles.pillarText}>
        Focusing on minimalist and geometric aesthetics inspired by the Bauhaus movement.
      </p>
    </div>
  </div>
</div>

        {/* BOX 4: WEB DEV GOALS (Narrow - Bottom Right) */}
        <div className={styles.statCard}>
          <span className={styles.itemHeader}>[MISSION: WEB_EXPANSION]</span>
          <span className={styles.statValue}>WEB_DEV</span>
          <p className={styles.statLabel}>
            Evolving interactive mechanics into modern, full-stack web ecosystems.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;