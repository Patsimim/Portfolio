import React, { useState, useEffect, useMemo, useCallback } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import Resume from "../Resume/Resume";
import { techStacks } from "../../data/techStacks";

const MainContent = ({
  activeItem,
  projects,
  simpleProjects,
  faqData,
  profile,
  navigation,
  onNavigationClick,
}) => {
  const [currentStackIndex, setCurrentStackIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Currently learning technologies
  const currentlyLearning = useMemo(
    () => [
      { name: "MongoDB", image: null },
      { name: "Angular", image: null },
      { name: "Express.js", image: null },
      { name: "AWS", image: null },
    ],
    []
  );

  useEffect(() => {
    let timeoutId;

    const checkScreenSize = () => {
      const newIsMobile = window.innerWidth <= 768;
      if (newIsMobile !== isMobile) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setIsMobile(newIsMobile);
        }, 100);
      }
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
      clearTimeout(timeoutId);
    };
  }, [isMobile]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentStackIndex((prevIndex) =>
          prevIndex === techStacks.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 1200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const RightContentContainer = useCallback(
    ({ children, className = "" }) => (
      <div
        style={{
          ...styles.rightContentContainer,
          ...(isMobile ? styles.rightContentContainerMobile : {}),
        }}
      >
        {!isMobile && <div style={styles.rightContentSpacer}></div>}
        <div
          style={{
            ...styles.rightContentMain,
            ...(isMobile ? styles.rightContentMainMobile : {}),
          }}
        >
          {children}
        </div>
      </div>
    ),
    [isMobile]
  );
  // HomePage component
  const HomePage = useMemo(
    () => (
      <div
        style={{
          ...styles.homePage,
          ...(isMobile ? styles.homePageMobile : {}),
        }}
      >
        <div
          style={{
            ...styles.homeContent,
            ...(isMobile ? styles.homeContentMobile : {}),
          }}
        >
          <h2
            style={{
              ...styles.homeTitle,
              ...(isMobile ? styles.homeTitleMobile : {}),
            }}
          >
            About Me
          </h2>

          <div style={styles.homeText}>
            <p
              style={{
                ...styles.homeParagraph,
                ...(isMobile ? styles.homeParagraphMobile : {}),
              }}
            >
              I'm a Computer Engineering graduate from Silliman University and a
              dedicated Fullstack Developer with strong work ethics,
              adaptability, and a growth-oriented mindset. I am passionate about
              delivering high-quality results and committed to continuous
              learning and improvement.
            </p>
            {/* <p
              style={{
                ...styles.homeParagraph,
                ...(isMobile ? styles.homeParagraphMobile : {}),
              }}
            >
              I began my career as a Backend Developer at Buudl, and later
              transitioned into a Fullstack Developer role as I took on more
              responsibilities. My experience spans across building web
              applications using Next.js, mobile apps, admin portals using
              React, and managing backend services. I've also been entrusted
              with reviewing team merge requests, and handling deployments for
              iOS, Android, and web platforms.
            </p> */}
            <p
              style={{
                ...styles.homeParagraph,
                ...(isMobile ? styles.homeParagraphMobile : {}),
              }}
            >
              I'm now seeking a role where I can continue to grow both
              technically and professionally, contribute meaningfully to the
              team, and take on new challenges that will help me reach my full
              potential.
            </p>
            <p
              style={{
                ...styles.homeParagraph,
                ...styles.homeParagraphPersonal,
                ...(isMobile ? styles.homeParagraphMobile : {}),
              }}
            >
              Outside of work, I enjoy watching movies and anime, playing chess,
              staying active with basketball and jogging, and reading comics
              —activities that keep me both inspired and balanced.
            </p>
          </div>

          <div style={styles.expertiseSection}>
            <div
              style={{
                ...styles.techStackContainer,
                ...(isMobile ? styles.techStackContainerMobile : {}),
              }}
            >
              <div
                style={{
                  ...styles.techStackWrapper,
                  ...(isMobile ? styles.techStackWrapperMobile : {}),
                }}
              >
                {techStacks[currentStackIndex].techs.map((tech, index) => (
                  <div
                    key={`${tech.name}-${currentStackIndex}`}
                    style={{
                      ...styles.techItem,
                      ...(isMobile ? styles.techItemMobile : {}),
                      animationDelay: isTransitioning
                        ? `${index * 0.1}s`
                        : `${index * 0.15}s`,
                      animation: isTransitioning
                        ? `slideOutToRight 1.2s ease forwards`
                        : `slideInFromLeft 0.8s ease forwards`,
                      animationFillMode: "forwards",
                    }}
                  >
                    <img
                      src={tech.image}
                      alt={tech.name}
                      style={{
                        ...styles.techImage,
                        ...(isMobile ? styles.techImageMobile : {}),
                      }}
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                    <span
                      style={{
                        ...styles.techName,
                        ...(isMobile ? styles.techNameMobile : {}),
                      }}
                    >
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Currently Learning Section */}
          <div style={styles.learningSection}>
            <h3
              style={{
                ...styles.learningTitle,
                ...(isMobile ? styles.learningTitleMobile : {}),
              }}
            >
              Currently Learning
            </h3>
            <div
              style={{
                ...styles.learningContainer,
                ...(isMobile ? styles.learningContainerMobile : {}),
              }}
            >
              {currentlyLearning.map((tech, index) => (
                <div
                  key={tech.name}
                  style={{
                    ...styles.learningItem,
                    ...(isMobile ? styles.learningItemMobile : {}),
                  }}
                >
                  <div style={styles.learningItemInner}>
                    <span
                      style={{
                        ...styles.learningName,
                        ...(isMobile ? styles.learningNameMobile : {}),
                      }}
                    >
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    [isMobile, currentStackIndex, isTransitioning, currentlyLearning]
  );

  // Contact page content
  const ContactPage = useMemo(
    () => (
      <RightContentContainer>
        <div style={styles.contactContainer}>
          <div
            style={{
              ...styles.contactSections,
              ...(isMobile ? styles.contactSectionsMobile : {}),
            }}
          >
            <div>
              <h3
                style={{
                  ...styles.contactSectionTitle,
                  ...(isMobile ? styles.contactSectionTitleMobile : {}),
                }}
              >
                Email
              </h3>
              <a
                href='mailto:rojorusselgem@gmail.com'
                style={{
                  ...styles.contactLink,
                  ...(isMobile ? styles.contactLinkMobile : {}),
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#ffffff";
                  e.target.style.transform = "translateX(8px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#d1d5db";
                  e.target.style.transform = "translateX(0)";
                }}
              >
                rojorusselgem@gmail.com
              </a>
            </div>

            <div>
              <h3
                style={{
                  ...styles.contactSectionTitle,
                  ...(isMobile ? styles.contactSectionTitleMobile : {}),
                }}
              >
                Social & Work
              </h3>
              <div>
                <a
                  href='https://github.com/Patsimim'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{
                    ...styles.contactLinkBlock,
                    ...(isMobile ? styles.contactLinkBlockMobile : {}),
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#ffffff";
                    e.target.style.transform = "translateX(8px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#d1d5db";
                    e.target.style.transform = "translateX(0)";
                  }}
                >
                  GitHub ↗
                </a>
                <a
                  href='https://www.linkedin.com/in/russel-gem-rojo-486079355/'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{
                    ...styles.contactLinkBlock,
                    ...(isMobile ? styles.contactLinkBlockMobile : {}),
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#ffffff";
                    e.target.style.transform = "translateX(8px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#d1d5db";
                    e.target.style.transform = "translateX(0)";
                  }}
                >
                  LinkedIn ↗
                </a>
                <a
                  href='#'
                  style={{
                    ...styles.contactLinkBlock,
                    ...(isMobile ? styles.contactLinkBlockMobile : {}),
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#ffffff";
                    e.target.style.transform = "translateX(8px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#d1d5db";
                    e.target.style.transform = "translateX(0)";
                  }}
                >
                  Portfolio ↗
                </a>
              </div>
            </div>

            <div>
              <h3
                style={{
                  ...styles.contactSectionTitle,
                  ...(isMobile ? styles.contactSectionTitleMobile : {}),
                }}
              >
                Response Time
              </h3>
              <p
                style={{
                  ...styles.contactText,
                  ...(isMobile ? styles.contactTextMobile : {}),
                }}
              >
                Usually within 24 hours
              </p>
            </div>
          </div>
        </div>
      </RightContentContainer>
    ),
    [isMobile, RightContentContainer]
  );

  // Projects page layout
  const ProjectsPage = useMemo(
    () => (
      <div
        style={{
          ...styles.projectsPage,
          ...(isMobile ? styles.projectsPageMobile : {}),
        }}
      >
        <section aria-label='All projects'>
          {(projects || []).map((project, index) => (
            <ProjectCard
              key={`${project.id || index}-${project.title}`} // More stable key
              project={project}
              index={index}
              isMobile={isMobile}
            />
          ))}

          {(!projects || projects.length === 0) && (
            <p style={styles.projectsEmpty}>No projects available.</p>
          )}
        </section>
      </div>
    ),
    [projects, isMobile]
  );

  // Resume page
  const ResumePage = useMemo(
    () => (
      <div
        style={{
          ...styles.resumePage,
          ...(isMobile ? styles.resumePageMobile : {}),
        }}
      >
        <Resume />
      </div>
    ),
    [isMobile]
  );

  const renderContent = useCallback(() => {
    switch (activeItem) {
      case "home":
        return HomePage;
      case "projects":
        return ProjectsPage;
      case "contact":
        return ContactPage;
      case "resume":
        return ResumePage;
      default:
        return HomePage;
    }
  }, [activeItem, HomePage, ProjectsPage, ContactPage, ResumePage]);

  return (
    <main
      style={{
        ...styles.main,
        ...(isMobile ? styles.mainMobile : {}),
      }}
    >
      <div style={styles.noiseOverlay} />

      <div style={styles.contentContainer}>{renderContent()}</div>
    </main>
  );
};

const styles = {
  // Desktop styles
  main: {
    minHeight: "100vh",
    paddingLeft: "420px",
    position: "relative",
  },
  contentContainer: {
    position: "relative",
    zIndex: 1,
  },
  rightContentContainer: {
    minHeight: "100vh",
    display: "flex",
  },
  rightContentSpacer: {
    flex: 1,
  },
  rightContentMain: {
    width: "384px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingRight: "64px",
    paddingTop: "80px",
    paddingBottom: "80px",
  },
  // Home Page Styles
  homePage: {
    padding: "80px 64px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  },
  homeContent: {
    maxWidth: "600px",
    textAlign: "center",
  },
  homeTitle: {
    fontSize: "clamp(24px, 6vw, 60px)",
    fontWeight: "100",
    color: "#ffffff",
    marginBottom: "48px",
    letterSpacing: "-0.025em",
    textAlign: "center",
  },
  homeText: {
    marginBottom: "40px",
  },
  homeParagraph: {
    fontSize: "clamp(14px, 1.6vw, 16px)",
    fontWeight: "300",
    lineHeight: "1.7",
    color: "#d1d5db",
    marginBottom: "24px",
  },
  homeParagraphPersonal: {
    marginTop: "32px",
    paddingTop: "24px",
    borderTop: "1px solid rgba(75, 85, 99, 0.2)",
    color: "#9ca3af",
    fontSize: "clamp(14px, 1.6vw, 16px)",
    fontStyle: "italic",
  },
  expertiseSection: {
    paddingTop: "16px",
    marginBottom: "48px",
  },
  expertiseTitle: {
    color: "#ffffff",
    marginBottom: "16px",
    fontSize: "16px",
    fontWeight: "400",
    transition: "all 0.3s ease",
  },
  techStackContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "16px",
    minHeight: "150px",
    overflow: "hidden",
  },
  techStackWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "48px",
    width: "100%",
  },
  techItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
    opacity: 1,
  },
  techImage: {
    width: "96px",
    height: "96px",
    objectFit: "contain",
    filter: "brightness(0.9)",
    transition: "all 0.3s ease",
  },
  techName: {
    color: "#9ca3af",
    fontSize: "14px",
    fontWeight: "300",
    textAlign: "center",
  },

  // Currently Learning Styles - COMPLETELY STATIC
  learningSection: {
    paddingTop: "32px",
    borderTop: "1px solid rgba(75, 85, 99, 0.3)",
  },
  learningTitle: {
    color: "#ffffff",
    fontSize: "26",
    fontWeight: "400",
    textAlign: "center",
    marginBottom: "24px",
    opacity: 0.9,
  },
  learningContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "32px",
    flexWrap: "wrap",
  },
  learningItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    opacity: 1,
  },
  learningItemInner: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
    padding: "16px",
    border: "1px solid rgba(75, 85, 99, 0.2)",
    borderRadius: "12px",
    backgroundColor: "rgba(17, 24, 39, 0.3)",
    backdropFilter: "blur(8px)",
    cursor: "default",
  },
  learningName: {
    color: "#9ca3af",
    fontSize: "14px",
    fontWeight: "300",
    textAlign: "center",
  },

  // Contact Page Styles
  contactContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  contactTitle: {
    fontSize: "24px",
    fontWeight: "300",
    color: "#ffffff",
    marginBottom: "24px",
  },
  contactSections: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    fontSize: "14px",
  },
  contactSectionTitle: {
    color: "#ffffff",
    marginBottom: "8px",
    fontSize: "16px",
    fontWeight: "400",
  },
  contactLink: {
    color: "#d1d5db",
    textDecoration: "none",
    transition: "all 0.2s ease",
    display: "inline-block",
  },
  contactLinkBlock: {
    color: "#d1d5db",
    textDecoration: "none",
    transition: "all 0.2s ease",
    display: "block",
    marginBottom: "8px",
  },
  contactText: {
    color: "#d1d5db",
  },
  // Projects Page Styles
  projectsPage: {
    padding: "80px 64px",
  },
  projectsHeader: {
    marginBottom: "48px",
  },
  projectsTitle: {
    fontSize: "36px",
    fontWeight: "300",
    color: "#ffffff",
    marginBottom: "32px",
  },
  projectsEmpty: {
    color: "#9ca3af",
    fontSize: "18px",
  },
  // Resume Page Styles
  resumePage: {
    padding: "0",
    minHeight: "100vh",
    width: "100%",
  },

  // Mobile styles
  mainMobile: {
    paddingLeft: "0",
    paddingTop: "70px",
  },
  rightContentContainerMobile: {
    minHeight: "calc(100vh - 70px)",
    flexDirection: "column",
  },
  rightContentMainMobile: {
    width: "100%",
    padding: "40px 20px",
    justifyContent: "flex-start",
  },
  homePageMobile: {
    padding: "40px 20px",
    minHeight: "calc(100vh - 70px)",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: "60px",
  },
  homeContentMobile: {
    maxWidth: "100%",
    textAlign: "center",
  },
  homeTitleMobile: {
    fontSize: "clamp(32px, 10vw, 48px)",
    marginBottom: "32px",
  },
  homeParagraphMobile: {
    fontSize: "16px",
    textAlign: "center",
    marginBottom: "20px",
  },
  techStackContainerMobile: {
    minHeight: "120px",
  },
  techStackWrapperMobile: {
    gap: "24px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  techItemMobile: {
    gap: "8px",
  },
  techImageMobile: {
    width: "60px",
    height: "60px",
  },
  techNameMobile: {
    fontSize: "12px",
  },

  // Mobile Learning Styles
  learningTitleMobile: {
    fontSize: "16px",
    marginBottom: "20px",
  },
  learningContainerMobile: {
    gap: "20px",
  },
  learningItemMobile: {
    flex: "0 1 calc(50% - 10px)",
    minWidth: "120px",
  },
  learningNameMobile: {
    fontSize: "13px",
  },

  contactSectionsMobile: {
    gap: "32px",
  },
  contactSectionTitleMobile: {
    fontSize: "18px",
    marginBottom: "12px",
  },
  contactLinkMobile: {
    fontSize: "16px",
  },
  contactLinkBlockMobile: {
    fontSize: "16px",
    marginBottom: "12px",
  },
  contactTextMobile: {
    fontSize: "16px",
  },
  projectsPageMobile: {
    padding: "40px 20px",
  },
  resumePageMobile: {
    padding: "0",
    width: "100%",
  },
  noiseOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.1,
    pointerEvents: "none",
  },
};

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

  @keyframes pulse {
    0%, 100% {
      opacity: 0.4;
    }
    50% {
      opacity: 1;
    }
  }
`;
document.head.appendChild(styleSheet);

export default MainContent;
