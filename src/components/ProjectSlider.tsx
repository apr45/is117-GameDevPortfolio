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
                  <h3 className={styles.pillarTitle}>[TEAM PROJECT: ROYAL GUARDSTOWN]</h3>
                  <span className={styles.statusLabel}>STATUS: ONGOING</span>
                </div>
              </div>
              <p className={styles.projectDesc}>
                Developed a sophisticated Unity-based RTS/FPS hybrid, bridging tower 
                defense mechanics with immersive first-person combat. 
                Collaborated in a 5-person agile team to engineer the primary UI/UX 
                framework, execute strategic level design, and produce high-fidelity 
                custom iconography.
              </p>
            </div>
            <div className={styles.imageSide}>
              <div className={styles.crtOverlay} />
              <span className={styles.imageLabel}>Royal Guardstown</span>
              <img src="/physics-preview.jpg" alt="Physics" className={styles.cardImage} />
            </div>
          </div>

          {/* Project 2: Java Mafia */}
          <div className={`${styles.projectCard} pixel-border`}>
            <div className={styles.contentSide}>
              <div className={styles.cardHeader}>
                <div className={styles.headerMain}>
                  <h3 className={styles.pillarTitle}>[CLIENT-SERVER: MAFIA PARTY]</h3>
                  <span className={styles.statusLabel}>STATUS: ONGOING</span>
                </div>
              </div>
              <p className={styles.projectDesc}>
                Engineered a multi-threaded networking architecture in Java to 
                facilitate real-time communication between a central server 
                and concurrent clients. Implemented a complex state machine to 
                manage synchronized "Night/Day" game cycles, secure data persistence, and 
                automated moderator logic for error-tolerant session hosting.
              </p>
            </div>
            <div className={styles.imageSide}>
              <div className={styles.crtOverlay} />
              <span className={styles.imageLabel}>Mafia Party</span>
              <img src="/mafia-preview.jpg" alt="Mafia" className={styles.cardImage} />
            </div>
          </div>

          {/* Project 3: Bauhaus Digital */}
          <div className={`${styles.projectCard} pixel-border`}>
            <div className={styles.contentSide}>
              <div className={styles.cardHeader}>
                <div className={styles.headerMain}>
                  <h3 className={styles.pillarTitle}>[MUSEUM EXHIBIT: TRIADIC BALLET]</h3>
                  <span className={styles.statusLabel}>STATUS: COMPLETE</span>
                </div>
              </div>
              <p className={styles.projectDesc}>
                Architected a digital reconstruction of Oskar Schlemmer's "Triadic Ballet," 
                translating the experimental trinity-based performance into a 
                minimalist, functional interface. This exhibition leverages 
                Bauhaus-era aesthetics to offer an interactive exploration 
                of Schlemmer's legacy through avant-garde components.
              </p>
            </div>
            <div className={styles.imageSide}>
              <div className={styles.crtOverlay} />
              <span className={styles.imageLabel}>Triadic Ballet</span>
              <img src="/bauhaus-preview.jpg" alt="Bauhaus" className={styles.cardImage} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;