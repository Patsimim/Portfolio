import React, { useState, useEffect } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import { techStacks } from '../../data/techStacks';

const MainContent = ({ 
  activeItem, 
  projects, 
  simpleProjects, 
  faqData, 
  profile, 
  navigation, 
  onNavigationClick 
}) => {
  
  // State for current tech stack index
  const [currentStackIndex, setCurrentStackIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-rotate tech stacks every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentStackIndex((prevIndex) => 
          prevIndex === techStacks.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 1200); // Match the slower exit transition duration
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Get current page title
  const getCurrentPageTitle = () => {
    const currentNav = navigation.find(nav => nav.id === activeItem);
    return currentNav ? currentNav.label : 'Home';
  };

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
          <div style={styles.techStackContainer}>
            <div style={styles.techStackWrapper}>
              {techStacks[currentStackIndex].techs.map((tech, index) => (
                <div key={`${tech.name}-${currentStackIndex}`} style={{
                  ...styles.techItem,
                  animationDelay: isTransitioning ? `${index * 0.1}s` : `${index * 0.15}s`,
                  animation: isTransitioning 
                    ? `slideOutToRight 1.2s ease forwards` 
                    : `slideInFromLeft 0.8s ease forwards`,
                  animationFillMode: 'forwards'
                }}>
                  <img 
                    src={tech.image} 
                    alt={tech.name}
                    style={styles.techImage}
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.target.style.display = 'none';
                    }}
                  />
                  <span style={styles.techName}>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
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
          <ProjectCard key={project.id || index} project={project} index={index} />
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
  contentContainer: {
    position: 'relative',
    zIndex: 1
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
    fontSize: 'clamp(38px, 8vw, 90px)',
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
    fontSize: 'clamp(16px, 2vw, 18px)',
    fontWeight: '300',
    lineHeight: '1.6',
    color: '#d1d5db'
  },
  expertiseSection: {
    paddingTop: '16px'
  },
  expertiseTitle: {
    color: '#ffffff',
    marginBottom: '16px',
    fontSize: '16px',
    fontWeight: '400',
    transition: 'all 0.3s ease'
  },
  techStackContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '16px',
    minHeight: '150px',
    overflow: 'hidden'
  },
  techStackWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '48px',
    width: '100%'
  },
  techItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    opacity: 1
  },
  techImage: {
    width: '96px',
    height: '96px',
    objectFit: 'contain',
    filter: 'brightness(0.9)',
    transition: 'all 0.3s ease'
  },
  techName: {
    color: '#9ca3af',
    fontSize: '14px',
    fontWeight: '300',
    textAlign: 'center'
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

// Add CSS animation for smooth left-to-right transition
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @keyframes slideInFromLeft {
    0% {
      opacity: 0;
      transform: translateX(-60px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes slideOutToRight {
    0% {
      opacity: 1;
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      transform: translateX(60px);
    }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(styleSheet);

export default MainContent;