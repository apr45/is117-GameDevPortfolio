import React from 'react';
import styles from '../styles/hero.module.css'; // Import as a module

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-scene">
      <div className="hero-grid">
        
        {/* LEFT COLUMN: Narrative Text */}
        <div className="hero-text-block">
          {/* Top small label - matching the exemplar */}
          <p className="hero-label">
            {">"} NJIT // INFORMATION TECHNOLOGY // GAME DEV STUDENT
          </p>
          
          {/* Main Headline - adapts your message to the big, bold style */}
          <h1 className="hero-headline">
            I BUILD ROBUST <span className="glow-yellow">SYSTEMS</span> AND IMMERSIVE <span className="glow-pink">WORLDS</span> FOR VIDEO GAMES.
          </h1>
          
          {/* Detailed Paragraph - matching the sub-text exemplar */}
          <p className="hero-subtext">
            I am an IT student focusing on the part after the concept sprint: 
            the <span className="highlight">physics engines</span>, 
            <span className="highlight">component logic</span>, character <span className="highlight">state management</span>, 
            and data architecture that make an interactive world hold together. 
            My work sits between technical system infrastructure and compelling gameplay mechanics.
          </p>
        </div>
        
        {/* RIGHT COLUMN: Retro Vector Placeholder */}
        <div className="hero-visual-block pixel-border">
          {/* This is a placeholder for your 8-bit asset. 
              We will use a generic icon for now. */}
          <div className="retro-vector-placeholder">
            [RETRO VECTOR_IMG]
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;