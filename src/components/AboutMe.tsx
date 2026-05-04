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
            Sophomere specializing in Game Development with good-standing in all courses.
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
  <span className={styles.itemHeader}>[INTEREST: DIGITAL DESIGN]</span>
  
  <div className={styles.modelGridHobbies}>
    {/* HOBBY 1: 3D MODELING */}
    <div className={styles.pillarCard}>
      <h3 className={styles.pillarTitle}>1. 3D MODELING</h3>
      <p className={styles.pillarText}>
        Utilizing Blender to engineer high-fidelity digital sculptures, focusing on the production of optimized character and environmental assets for seamless integration into real-time game engines.
      </p>
    </div>

    {/* HOBBY 2: GRAPHIC ILLUSTRATION */}
    <div className={styles.pillarCard}>
      <h3 className={styles.pillarTitle}>2. GRAPHIC ILLUSTRATION</h3>
      <p className={styles.pillarText}>
        Leveraging Adobe Photoshop to architect cohesive visual languages, spanning from high-level conceptual drafts to functional user interface (UI) components for game applications.
      </p>
    </div>
  </div>
</div>

        {/* BOX 4: GAME DEV GOALS */}
        <div className={styles.statCard}>
          <span className={styles.itemHeader}>[MISSION: SOFTWARE CAREER]</span>
          <span className={styles.statValue}>GAME DEV</span>
          <p className={styles.statLabel}>
            Aspires to work as programmer and designer within a professional studio environment before transitioning to build indie titles as a solo  developer or with a small, specialized team.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;