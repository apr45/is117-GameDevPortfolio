import React from 'react';
import styles from '../styles/ProjectSlider.module.css';

const ProjectSlider: React.FC = () => {
  return (
    <section className={styles.projectSection} id="projects">
      <h2 className={styles.sectionTitle}>{">"} PROJECT_LOGS</h2>
      
      <div className={styles.scrollContainer}>
        <div className={styles.projectTrack}>
          
          {/* Project Item 1: Physics Engine */}
          <div className={`${styles.projectCard} pixel-border`}>
            <div className={styles.contentSide}>
              <div className={styles.cardHeader}>
                <h3 style={{ color: 'var(--accent-yellow)' }}>[ITEM: Physics Engine]</h3>
                <span className={styles.rarityLabel}>RARITY: LEGENDARY</span>
              </div>
              <p className={styles.projectDesc}>Implemented custom Rigidbody dynamics for character persistence and state management[cite: 8].</p>
              <div className={styles.techStack}>#UNITY #C# #PHYSICS</div>
            </div>
            <div className={styles.imageSide}>
              <div className={styles.crtOverlay} />
              <span className={styles.imageLabel}>Physics Engine</span>
              <img src="/physics-preview.jpg" alt="Physics" className={styles.cardImage} />
            </div>
          </div>

          {/* Project Item 2: Java Mafia */}
          <div className={`${styles.projectCard} pixel-border`}>
            <div className={styles.contentSide}>
              <div className={styles.cardHeader}>
                <h3 style={{ color: 'var(--accent-pink)' }}>[ITEM: Java Mafia]</h3>
                <span className={styles.rarityLabel}>RARITY: RARE</span>
              </div>
              <p className={styles.projectDesc}>Multi-threaded networking architecture for real-time role-assignment and game logic[cite: 8].</p>
              <div className={styles.techStack}>#JAVA #NETWORKING #THREADS</div>
            </div>
            <div className={styles.imageSide}>
              <div className={styles.crtOverlay} />
              <span className={styles.imageLabel}>Java Mafia</span>
              <img src="/mafia-preview.jpg" alt="Mafia" className={styles.cardImage} />
            </div>
          </div>

          {/* Project Item 3: BauHaus Museum */}
          <div className={`${styles.projectCard} pixel-border`}>
            <div className={styles.contentSide}>
              <div className={styles.cardHeader}>
                <h1 style={{ color: 'var(--accent-yellow)', fontSize: '1.2rem' }}>[ITEM: BAUHAUS_DIGITAL]</h1>
                <span className={styles.rarityLabel}>RARITY: EPIC</span>
              </div>
              <p className={styles.projectDesc}>Digital reconstruction of Schlemmer's Triadic Ballet using minimalist geometric design[cite: 8].</p>
              <div className={styles.techStack}>#WEB #DESIGN #BAUHAUS</div>
            </div>
            <div className={styles.imageSide}>
              <div className={styles.crtOverlay} />
              <span className={styles.imageLabel}>Bauhaus Digital</span>
              <img src="/bauhaus-preview.jpg" alt="Bauhaus" className={styles.cardImage} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;