import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from '../styles/ProjectSlider.module.css'; // Recommended for horizontal layout logic

const ProjectSlider: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // 1. Logic Architecture: Track scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: targetRef
  });

  // 2. The Magician's Transition: Translate vertical scroll (0 to 1) 
  // into horizontal movement (-X percentage)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <section ref={targetRef} className={styles.horizontalScrollContainer}>
      <div className={styles.stickyWrapper}>
        <h2 className={styles.sectionTitle}>{">"} PROJECT_LOGS</h2>
        
        {/* 3. The Track: This div moves horizontally as you scroll vertically */}
        <motion.div style={{ x }} className={styles.projectTrack}>
          
          {/* Project Item 1: Physics Engine */}
          <div className={`${styles.projectCard} pixel-border`}>
            <div className={styles.cardHeader}>
              <h3 style={{ color: 'var(--accent-yellow)' }}>[ITEM: Physics Engine]</h3>
              <span className={styles.rarityLabel}>RARITY: LEGENDARY</span>
            </div>
            <p>Implemented custom Rigidbody dynamics for character persistence and state management.</p>
            <div className={styles.techStack}>#UNITY #C# #PHYSICS</div>
          </div>

          {/* Project Item 2: Java Mafia */}
          <div className={`${styles.projectCard} pixel-border`}>
            <div className={styles.cardHeader}>
              <h3 style={{ color: 'var(--accent-pink)' }}>[ITEM: Java Mafia]</h3>
              <span className={styles.rarityLabel}>RARITY: RARE</span>
            </div>
            <p>Multi-threaded networking architecture for real-time role-assignment and game logic.</p>
            <div className={styles.techStack}>#JAVA #NETWORKING #THREADS</div>
          </div>

          {/* Project Item 3: BauHaus Museum (New) */}
          <div className={`${styles.projectCard} pixel-border`}>
            <div className={styles.cardHeader}>
              <h1 style={{ color: 'var(--accent-yellow)' }}>[ITEM: BAUHAUS_DIGITAL]</h1>
              <span className={styles.rarityLabel}>RARITY: EPIC</span>
            </div>
            <p>Digital reconstruction of Schlemmer's Triadic Ballet using minimalist geometric design.</p>
            <div className={styles.techStack}>#WEB #DESIGN #BAUHAUS</div>
          </div>

          {/* Locked Slot for Future Sprints */}
          <div className={`${styles.projectCard} ${styles.lockedSlot} pixel-border`}>
            <h3>[LOCKED_SLOT]</h3>
            <p>Complete more code sprints to unlock this project log.</p>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSlider;