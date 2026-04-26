import React from 'react';

// Interfaces for our content sections
interface SceneProps {
  title: string;
  id: string;
  children: React.ReactNode;
}

const Scene: React.FC<SceneProps> = ({ title, id, children }) => (
  <section id={id} style={{ height: '100vh', padding: '2rem', borderBottom: '2px solid #333' }}>
    <h2 style={{ fontFamily: 'monospace' }}>{title}</h2>
    {children}
  </section>
);

const App: React.FC = () => {
  return (
    <main>
      {/* Hero Section - The "Magician" Hook */}
      <Scene id="hero" title="> INITIATING_PLAYER_JOURNEY">
        <p>Developing the future of play, one line at a time.</p>
      </Scene>

      {/* Identity Section - The "Unity" Principle */}
      <Scene id="identity" title="> DEVELOPER_STATS">
        <p>
          I am an IT student at NJIT specializing in Game Development. 
          My journey is defined by a commitment to mastering game mechanics 
          and physics implementation...
        </p>
      </Scene>

      {/* Projects Section - Future Horizontal Scroll */}
      <Scene id="projects" title="> PROJECT_LOGS">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem' 
        }}>

          <div className="pixel-border">
            <h3 style={{ color: 'var(--accent-yellow)' }}>[ITEM: Physics Engine]</h3>
            <p>Implemented custom Rigidbody dynamics for character persistence.</p>
            <span style={{ fontSize: '0.8rem' }}>RARITY: LEGENDARY</span>
          </div>
    
          <div className="pixel-border">
            <h3 style={{ color: 'var(--accent-pink)' }}>[ITEM: Java Mafia]</h3>
            <p>Multi-threaded networking architecture for role-based gaming.</p>
            <span style={{ fontSize: '0.8rem' }}>RARITY: RARE</span>
          </div>
        </div>
      </Scene>

      {/* CTA Section - Collaboration */}
      <Scene id="contact" title="> JOIN_PARTY">
        <p>Contact me for potential collaboration.</p>
      </Scene>
    </main>
  );
};

export default App;