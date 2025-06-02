import React from 'react';



const Navigation = ({ items, activeItem, onItemClick }) => (
  <nav style={styles.navigation} role="navigation" aria-label="Main navigation">
    {items.map((item) => (
      <button
        key={item.id}
        onClick={() => onItemClick(item.id)}
        style={{
          ...styles.navButton,
          ...(activeItem === item.id ? styles.navButtonActive : styles.navButtonInactive)
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.05)';
          if (activeItem !== item.id) {
            e.target.style.color = '#d1d5db';
          }
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          if (activeItem !== item.id) {
            e.target.style.color = '#9ca3af';
          }
        }}
        aria-current={activeItem === item.id ? 'page' : undefined}
      >
        {item.label}
      </button>
    ))}
  </nav>
);

const Sidebar = ({ profile, navigation, activeItem, onNavigationClick }) => (
  <aside style={styles.sidebar}>
    {/* Header */}
    <div style={styles.header}>
      <h1 style={styles.title}>
        {profile.name}
      </h1>
      <p style={styles.subtitle}>
        {profile.title}
      </p>
    </div>

    {/* Top spacer */}
    <div style={styles.spacerTop}></div>

    {/* Navigation */}
    <Navigation 
      items={navigation} 
      activeItem={activeItem}
      onItemClick={onNavigationClick}
    />

    {/* Bottom spacer with minimum height */}
    <div style={styles.spacerBottom}></div>

    {/* Footer */}
    <footer style={styles.footer}>
      © {new Date().getFullYear()} {profile.name}
    </footer>
  </aside>
);

const styles = {
  sidebar: {
    position: 'fixed',
    left: 0,
    top: 0,
    height: '100vh',
    width: '300px',
    backgroundColor: '#000000',
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 10
  },
  header: {
    marginBottom: '48px'
  },
  title: {
    fontSize: '24px',
    fontWeight: '300',
    color: '#ffffff',
    marginBottom: '8px',
    letterSpacing: '0.025em',
    margin: 0
  },
  subtitle: {
    fontSize: '14px',
    color: '#9ca3af',
    fontWeight: '300',
    margin: 0
  },
  spacerTop: {
    flex: 1
  },
  navigation: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  navButton: {
    fontSize: '14px',
    fontWeight: '300',
    letterSpacing: '0.025em',
    transition: 'all 0.2s ease',
    display: 'block',
    padding: '8px 16px',
    width: '100%',
    textAlign: 'left',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer'
  },
  navButtonActive: {
    color: '#ffffff'
  },
  navButtonInactive: {
    color: '#9ca3af'
  },
  spacerBottom: {
    flex: 1,
    minHeight: '80px'
  },
  footer: {
    fontSize: '12px',
    color: '#6b7280',
    fontWeight: '300'
  },
};
export default Sidebar;