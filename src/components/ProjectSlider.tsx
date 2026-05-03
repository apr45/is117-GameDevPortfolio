import React from 'react';
import styles from '../styles/ProjectSlider.module.css';

const ProjectSlider: React.FC = () => {
  return (
    <section className={styles.projectSection} id="projects">
      <h2 className={styles.sectionTitle}>{">"} PROJECT_LOGS</h2>
      
      {/* Native horizontal scroll container */}
      <div className={styles.scrollContainer}>
        <div className={styles.projectTrack}>

{/* Project Item 1: Physics Engine */}
<div className={`${styles.projectCard} pixel-border`}>
  <div className={styles.imageSlot}>
    <div className={styles.crtOverlay} />
    {/* Use your local path or a themed placeholder */}
    <img src="/physics-engine.jpg" alt="Physics Engine" className={styles.cardImage} />
  </div>
  
  <div className={styles.cardHeader}>
    <h3 style={{ color: 'var(--accent-yellow)' }}>[ITEM: Physics Engine]</h3>
    <span className={styles.rarityLabel}>RARITY: LEGENDARY</span>
  </div>
  <p>Implemented custom Rigidbody dynamics for character persistence and state management[cite: 10].</p>
  <div className={styles.techStack}>#UNITY #C# #PHYSICS[cite: 10]</div>
</div>

{/* Project Item 2: Java Mafia */}
<div className={`${styles.projectCard} pixel-border`}>
  <div className={styles.imageSlot}>
    <div className={styles.crtOverlay} />
    <img src="/java-mafia.jpg" alt="Java Mafia" className={styles.cardImage} />
  </div>

  <div className={styles.cardHeader}>
    <h3 style={{ color: 'var(--accent-pink)' }}>[ITEM: Java Mafia]</h3>
    <span className={styles.rarityLabel}>RARITY: RARE</span>
  </div>
  <p>Multi-threaded networking architecture for real-time role-assignment and game logic[cite: 10].</p>
  <div className={styles.techStack}>#JAVA #NETWORKING #THREADS[cite: 10]</div>
</div>

{/* Project Item 3: BauHaus Museum */}
<div className={`${styles.projectCard} pixel-border`}>
  <div className={styles.imageSlot}>
    <div className={styles.crtOverlay} />
    <img src="/bauhaus-museum.jpg" alt="BauHaus Digital" className={styles.cardImage} />
  </div>

  <div className={styles.cardHeader}>
    <h1 style={{ color: 'var(--accent-yellow)' }}>[ITEM: BAUHAUS_DIGITAL]</h1>
    <span className={styles.rarityLabel}>RARITY: EPIC</span>
  </div>
  <p>Digital reconstruction of Schlemmer's Triadic Ballet using minimalist geometric design[cite: 10].</p>
  <div className={styles.techStack}>#WEB #DESIGN #BAUHAUS[cite: 10]</div>
</div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;