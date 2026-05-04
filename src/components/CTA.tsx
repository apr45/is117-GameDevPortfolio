/* --- CTA.tsx --- */
import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/CTA.module.css';

const CTA: React.FC = () => {
  return (
    <footer id="contact" className={styles.ctaContainer}>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className={styles.terminalBox}
      >
        <span className={styles.statusHeader}>
          [SYSTEM_STATUS: <span className={styles.pinkText}>ONLINE</span>] [LOCATION: NJIT]
        </span>
        
        {/* Entire title now uses the pink utility class */}
        <h2 className={`${styles.mainTitle} ${styles.pinkText}`}>
          Establish Connection
        </h2>
        
        {/* Description updated to the yellow accent */}
        <p className={`${styles.description} ${styles.yellowText}`}>
          Looking for fellow NJIT developers, designers, or creators. <br />
          Whether it's a game jam, a system architecture deep-dive, or 
          a Bauhaus-inspired project—let's build the next level together.
        </p>

        <div className={styles.buttonWrapper}>
          <motion.button 
            className={styles.pixelButton}
            onClick={() => window.location.href = 'mailto:your-email@njit.edu'}
          >
            INITIATE_CHAT.EXE
          </motion.button>
        </div>
      </motion.div>
    </footer>
  );
};