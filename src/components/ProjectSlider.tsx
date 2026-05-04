import React from 'react';
import styles from '../styles/ProjectSlider.module.css';

const ProjectSlider: React.FC = () => {
  return (
    <section className={styles.projectSection} id="projects">
      <h2 className={styles.sectionTitle}>{">"} PROJECT_LOGS</h2>
      
      <div className={styles.scrollContainer}>
        <div className={styles.projectTrack}>
          
          {/* Project 1: Royal Guardsman */}
          <div className={`${styles.projectCard} pixel-border`}>
            <div className={styles.contentSide}>
              <div className={styles.cardHeader}>
                <div className={styles.headerMain}>
                  <h3 className={styles.pillarTitle}>[TEAM PROJECT: Royal Guardstown]</h3>
                  <span className={styles.statusLabel}>STATUS: Ongoing</span>
                </div>
              </div>
              <p className={styles.projectDesc}>
                Developed a sophisticated Unity-based RTS/FPS hybrid, bridging tower 
                defense mechanics with immersive first-person combat. 
                Collaborated in a 5-person agile team to engineer the primary UI/UX 
                framework, execute strategic level design, and produce high-fidelity 
                custom iconography.
              </p>
              <div className={styles.techStack}>#UNITY #C# #LEVEL_DESIGN #UI_UX</div>
            </div>
            <div className={styles.imageSide}>
              <div className={styles.crtOverlay} />
              <span className={styles.imageLabel}>Physics Engine</span>
              <img src="/physics-preview.jpg" alt="Physics" className={styles.cardImage} />
            </div>
          </div>

          {/* Project 2: Java Mafia */}
          <div className={`${styles.projectCard} pixel-border`}>
            <div className={styles.contentSide}>
              <div className={styles.cardHeader}>
                <div className={styles.headerMain}>
                  <h3 className={styles.pillarTitle} style={{ color: 'var(--accent-pink)' }}>[ITEM: Java Mafia]</h3>
                  <span className={styles.statusLabel}>STATUS: COMPLETE</span>
                </div>
              </div>
              <p className={styles.projectDesc}>
                Multi-threaded networking architecture for real-time role-assignment and game logic.
              </p>
              <div className={styles.techStack}>#JAVA #NETWORKING #THREADS</div>
            </div>
            <div className={styles.imageSide}>
              <div className={styles.crtOverlay} />
              <span className={styles.imageLabel}>Java Mafia</span>
              <img src="/mafia-preview.jpg" alt="Mafia" className={styles.cardImage} />
            </div>
          </div>

          {/* Project 3: Bauhaus Digital */}
          <div className={`${styles.projectCard} pixel-border`}>
            <div className={styles.contentSide}>
              <div className={styles.cardHeader}>
                <div className={styles.headerMain}>
                  <h3 className={styles.pillarTitle}>[ITEM: BAUHAUS_DIGITAL]</h3>
                  <span className={styles.statusLabel}>STATUS: ONGOING</span>
                </div>
              </div>
              <p className={styles.projectDesc}>
                Digital reconstruction of Schlemmer's Triadic Ballet using minimalist geometric design.
              </p>
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