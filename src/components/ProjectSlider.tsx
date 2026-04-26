import React from 'react';

const ProjectSlider: React.FC = () => {
  return (
    <section id="projects" className="scene">
      <h2 style={{ marginBottom: '2rem' }}>{">"} PROJECT_LOGS</h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '2rem' 
      }}>
        {/* Project Item 1 */}
        <div className="pixel-border">
          <h3 style={{ color: 'var(--accent-yellow)' }}>[ITEM: Physics Engine]</h3>
          <p>Implemented custom Rigidbody dynamics for character persistence.</p>
          <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>RARITY: LEGENDARY</span>
        </div>
        
        {/* Project Item 2 */}
        <div className="pixel-border">
          <h3 style={{ color: 'var(--accent-pink)' }}>[ITEM: Java Mafia]</h3>
          <p>Multi-threaded networking architecture for role-based gaming.</p>
          <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>RARITY: RARE</span>
        </div>

        {/* Placeholder for future project */}
        <div className="pixel-border" style={{ opacity: 0.5, borderStyle: 'dashed' }}>
          <h3 style={{ color: '#666' }}>[LOCKED_SLOT]</h3>
          <p>Complete more sprints to unlock this project log.</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;