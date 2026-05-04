import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/CTA.module.css';

const CTA: React.FC = () => {
  return (
    <footer id="contact" className={styles.ctaContainer}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className={styles.terminalBox}
      >
        <span className={styles.statusHeader}>
          [SYSTEM_STATUS: <span className={styles.pinkText}>ONLINE</span>] [LOCATION: NJIT]
        </span>
        
        <h2 className={styles.mainTitle}>
          Establish <span className={styles.pinkText}>Connection</span>
        </h2>
        
        <p className={styles.description}>
          Looking for fellow NJIT developers, designers, or creators. <br />
          Whether it's a game jam, a system architecture deep-dive, or 
          a Bauhaus-inspired project—let's build the next level together.
        </p>

        <div className={styles.buttonWrapper}>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "var(--accent-yellow)", color: "#000" }}
            whileTap={{ scale: 0.95 }}
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

export default CTA;