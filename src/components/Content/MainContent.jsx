import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';

const MainContent = ({ 
  activeItem, 
  projects, 
  simpleProjects, 
  faqData, 
  profile, 
  navigation, 
  onNavigationClick 
}) => {
  
  // Get current page title
  const getCurrentPageTitle = () => {
    const currentNav = navigation.find(nav => nav.id === activeItem);
    return currentNav ? currentNav.label : 'Home';
  };

  // Simple project card component for projects page
  const SimpleProjectCard = ({ project, index }) => (
    <article 
      style={styles.simpleProjectCard}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateX(-8px)';
        e.currentTarget.querySelector('h3').style.color = '#d1d5db';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateX(0)';
        e.currentTarget.querySelector('h3').style.color = '#ffffff';
      }}
    >
      <div style={{ textAlign: 'right' }}>
        <h3 style={styles.simpleProjectTitle}>
          {project.title}
        </h3>
        <div style={styles.simpleProjectMeta}>
          {project.date} / {project.category}: {project.designer}
        </div>
      </div>
    </article>
  );

  // Right Content Container
  const RightContentContainer = ({ children, className = "" }) => (
    <div style={styles.rightContentContainer}>
      {/* Left side - empty space */}
      <div style={styles.rightContentSpacer}></div>
      
      {/* Right side - content */}
      <div style={styles.rightContentMain}>
        {children}
      </div>
    </div>
  );

  // Home page - About me summary
  const HomePage = () => (
    <div style={styles.homePage}>
      <div style={styles.homeContent}>
        <h2 style={styles.homeTitle}>
          About Me
        </h2>
        
        <div style={styles.homeText}>
          <p style={styles.homeParagraph}>
            Fullstack developer crafting digital experiences with clean code and elegant design.
          </p>
        </div>

        <div style={styles.expertiseSection}>
          <h3 style={styles.expertiseTitle}>Expertise</h3>
          <ul style={styles.expertiseList}>
            <li style={styles.expertiseItem}>Frontend: React, Next.js, TypeScript</li>
            <li style={styles.expertiseItem}>Backend: Node.js, Express, FastAPI</li>
            <li style={styles.expertiseItem}>Database: PostgreSQL, MongoDB</li>
            <li style={styles.expertiseItem}>Cloud: AWS, Vercel, Docker</li>
          </ul>
        </div>
      </div>
    </div>
  );

  // Contact page content
  const ContactPage = () => (
    <RightContentContainer>
      <div style={styles.contactContainer}>
        <div style={styles.contactSections}>
          <div>
            <h3 style={styles.contactSectionTitle}>Email</h3>
            <a 
              href="mailto:rojorusselgem@gmail.com" 
              style={styles.contactLink}
              onMouseEnter={(e) => {
                e.target.style.color = '#ffffff';
                e.target.style.transform = 'translateX(8px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#d1d5db';
                e.target.style.transform = 'translateX(0)';
              }}
            >
              rojorusselgem@gmail.com
            </a>
          </div>
          
          <div>
            <h3 style={styles.contactSectionTitle}>Social & Work</h3>
            <div>
              <a 
                href="https://github.com/Patsimim" 
                target="_blank"
                rel="noopener noreferrer"
                style={styles.contactLinkBlock}
                onMouseEnter={(e) => {
                  e.target.style.color = '#ffffff';
                  e.target.style.transform = 'translateX(8px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#d1d5db';
                  e.target.style.transform = 'translateX(0)';
                }}
              >
                GitHub ↗
              </a>
              <a 
                href="https://www.linkedin.com/in/russel-gem-rojo-486079355/" 
                target="_blank"
                rel="noopener noreferrer"
                style={styles.contactLinkBlock}
                onMouseEnter={(e) => {
                  e.target.style.color = '#ffffff';
                  e.target.style.transform = 'translateX(8px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#d1d5db';
                  e.target.style.transform = 'translateX(0)';
                }}
              >
                LinkedIn ↗
              </a>
              <a 
                href="#" 
                style={styles.contactLinkBlock}
                onMouseEnter={(e) => {
                  e.target.style.color = '#ffffff';
                  e.target.style.transform = 'translateX(8px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#d1d5db';
                  e.target.style.transform = 'translateX(0)';
                }}
              >
                Portfolio ↗
              </a>
            </div>
          </div>
          
          <div>
            <h3 style={styles.contactSectionTitle}>Response Time</h3>
            <p style={styles.contactText}>Usually within 24 hours</p>
          </div>
        </div>
      </div>
    </RightContentContainer>
  );

  // Projects page layout
  const ProjectsPage = () => (
    <div style={styles.projectsPage}>
      <section aria-label="All projects">
        {(projects || []).map((project, index) => (
          <SimpleProjectCard key={project.id || index} project={project} index={index} />
        ))}
        
        {(!projects || projects.length === 0) && (
          <p style={styles.projectsEmpty}>No projects available.</p>
        )}
      </section>
    </div>
  );

  const renderContent = () => {
    switch (activeItem) {
      case 'home':
        return <HomePage />;
      case 'projects':
        return <ProjectsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <main style={styles.main}>
      {/* Noise texture overlay */}
      <div style={styles.noiseOverlay} />
      
      <div style={styles.contentContainer}>
        {renderContent()}
      </div>
    </main>
  );
};

const styles = {
  main: {
    minHeight: '100vh',
    paddingLeft: '256px',
    position: 'relative'
  },
  // noiseOverlay: {
  //   position: 'fixed',
  //   inset: 0,
  //   opacity: 0.2,
  //   pointerEvents: 'none',
  //   backgroundImage: `
  //     radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
  //     radial-gradient(circle at 70% 50%, white 1px, transparent 1px)
  //   `,
  //   backgroundSize: '3px 3px, 5px 5px',
  //   backgroundPosition: '0 0, 2px 2px'
  // },
  pageTitle: {
    position: 'fixed',
    right: '32px',
    top: '32px',
    textAlign: 'right',
    zIndex: 20
  },
  pageTitleText: {
    fontSize: '18px',
    fontWeight: '300',
    color: '#ffffff',
    letterSpacing: '0.025em'
  },
  contentContainer: {
    position: 'relative',
    zIndex: 1
  },
  // Simple Project Card Styles
  simpleProjectCard: {
    marginBottom: '48px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
    display: 'flex',
    justifyContent: 'flex-end',
    textAlign: 'right'
  },
  simpleProjectTitle: {
    fontSize: 'clamp(24px, 4vw, 32px)',
    fontWeight: '300',
    color: '#ffffff',
    marginBottom: '8px',
    letterSpacing: '0.025em',
    transition: 'color 0.3s ease',
    margin: 0
  },
  simpleProjectMeta: {
    fontSize: '14px',
    color: '#9ca3af',
    fontWeight: '300'
  },
  // Right Content Container Styles
  rightContentContainer: {
    minHeight: '100vh',
    display: 'flex'
  },
  rightContentSpacer: {
    flex: 1
  },
  rightContentMain: {
    width: '384px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingRight: '64px',
    paddingTop: '80px',
    paddingBottom: '80px'
  },
  // Home Page Styles
  homePage: {
    padding: '80px 64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh'
  },
  homeContent: {
    maxWidth: '512px',
    textAlign: 'center'
  },
  homeTitle: {
    fontSize: 'clamp(48px, 8vw, 112px)',
    fontWeight: '100',
    color: '#ffffff',
    marginBottom: '48px',
    letterSpacing: '-0.025em',
    margin: '0 0 48px 0'
  },
  homeText: {
    marginBottom: '32px'
  },
  homeParagraph: {
    fontSize: 'clamp(18px, 2vw, 20px)',
    fontWeight: '300',
    lineHeight: '1.6',
    color: '#d1d5db'
  },
  expertiseSection: {
    paddingTop: '16px'
  },
  expertiseTitle: {
    color: '#ffffff',
    marginBottom: '8px',
    fontSize: '16px',
    fontWeight: '400'
  },
  expertiseList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  },
  expertiseItem: {
    color: '#9ca3af',
    fontSize: '14px'
  },
  // Contact Page Styles
  contactContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  contactTitle: {
    fontSize: '24px',
    fontWeight: '300',
    color: '#ffffff',
    marginBottom: '24px'
  },
  contactSections: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    fontSize: '14px'
  },
  contactSectionTitle: {
    color: '#ffffff',
    marginBottom: '8px',
    fontSize: '16px',
    fontWeight: '400'
  },
  contactLink: {
    color: '#d1d5db',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    display: 'inline-block'
  },
  contactLinkBlock: {
    color: '#d1d5db',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    display: 'block',
    marginBottom: '8px'
  },
  contactText: {
    color: '#d1d5db'
  },
  // Projects Page Styles
  projectsPage: {
    padding: '80px 64px'
  },
  projectsHeader: {
    marginBottom: '48px'
  },
  projectsTitle: {
    fontSize: '36px',
    fontWeight: '300',
    color: '#ffffff',
    marginBottom: '32px'
  },
  projectsEmpty: {
    color: '#9ca3af',
    fontSize: '18px'
  }
};

export default MainContent;