import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faClipboard,
  faAddressBook,
  faFileText,
} from "@fortawesome/free-solid-svg-icons";

const getNavigationIcon = (itemId) => {
  switch (itemId) {
    case "home":
      return faHouse;
    case "projects":
      return faClipboard;
    case "contact":
      return faAddressBook;
    case "resume":
      return faFileText;
    default:
      return faHouse;
  }
};

const Navigation = ({
  items,
  activeItem,
  onItemClick,
  isMobile,
  closeMobileMenu,
}) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <nav
      style={styles.navigation}
      role='navigation'
      aria-label='Main navigation'
    >
      {items.map((item) => (
        <div key={item.id} style={styles.navItemContainer}>
          <button
            onClick={() => {
              onItemClick(item.id);
              if (isMobile && closeMobileMenu) {
                closeMobileMenu();
              }
            }}
            style={{
              ...styles.navButton,
              ...(activeItem === item.id
                ? styles.navButtonActive
                : styles.navButtonInactive),
              ...(isMobile ? styles.navButtonMobile : styles.navButtonDesktop),
              ...(!isMobile && hoveredItem === item.id
                ? styles.navButtonDesktopExpanded
                : {}),
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                if (activeItem !== item.id) {
                  e.target.style.color = "#d1d5db";
                }
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                if (activeItem !== item.id) {
                  e.target.style.color = "#9ca3af";
                }
              }
            }}
            aria-current={activeItem === item.id ? "page" : undefined}
            aria-label={item.label}
          >
            <div
              style={{
                ...styles.navButtonContent,
                ...(isMobile ? {} : styles.navButtonContentDesktop),
              }}
            >
              {!isMobile ? (
                <div
                  style={styles.iconContainer}
                  onMouseEnter={(e) => {
                    setHoveredItem(item.id);
                    e.target.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    setHoveredItem(null);
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  {hoveredItem === item.id ? (
                    <span style={styles.navTextDesktop}>{item.label}</span>
                  ) : (
                    <FontAwesomeIcon
                      icon={getNavigationIcon(item.id)}
                      style={styles.navIconDesktop}
                    />
                  )}
                </div>
              ) : (
                <>
                  <FontAwesomeIcon
                    icon={getNavigationIcon(item.id)}
                    style={styles.navIconMobile}
                  />
                  <span style={styles.navTextMobile}>{item.label}</span>
                </>
              )}
            </div>
          </button>
        </div>
      ))}
    </nav>
  );
};

const Sidebar = ({ profile, navigation, activeItem, onNavigationClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobile &&
        isMobileMenuOpen &&
        !event.target.closest(".sidebar") &&
        !event.target.closest(".mobile-menu-toggle")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile, isMobileMenuOpen]);

  useEffect(() => {
    if (isMobile && isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobile, isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  if (isMobile) {
    return (
      <>
        {/* Mobile Header */}
        <header style={styles.mobileHeader}>
          <div style={styles.mobileHeaderContent}>
            <button
              className='mobile-menu-toggle'
              style={styles.hamburger}
              onClick={toggleMobileMenu}
              aria-label='Toggle navigation menu'
            >
              <span
                style={{
                  ...styles.hamburgerLine,
                  transform: isMobileMenuOpen
                    ? "rotate(45deg) translate(5px, 5px)"
                    : "none",
                }}
              ></span>
              <span
                style={{
                  ...styles.hamburgerLine,
                  opacity: isMobileMenuOpen ? "0" : "1",
                }}
              ></span>
              <span
                style={{
                  ...styles.hamburgerLine,
                  transform: isMobileMenuOpen
                    ? "rotate(-45deg) translate(7px, -6px)"
                    : "none",
                }}
              ></span>
            </button>
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div style={styles.mobileOverlay} onClick={closeMobileMenu}>
            <aside
              className='sidebar'
              style={{
                ...styles.mobileSidebar,
                transform: isMobileMenuOpen
                  ? "translateX(0)"
                  : "translateX(-100%)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Header */}
              <div style={styles.mobileMenuHeader}>
                <h1 style={styles.mobileTitle}>{profile.name}</h1>
                <p style={styles.mobileSubtitle}>{profile.title}</p>
              </div>

              {/* Navigation */}
              <Navigation
                items={navigation}
                activeItem={activeItem}
                onItemClick={onNavigationClick}
                isMobile={true}
                closeMobileMenu={closeMobileMenu}
              />

              {/* Footer */}
              <footer style={styles.mobileFooter}>
                © {new Date().getFullYear()} {profile.name}
              </footer>
            </aside>
          </div>
        )}
      </>
    );
  }

  // Desktop sidebar
  return (
    <aside style={styles.sidebar} className='sidebar'>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>{profile.name}</h1>
        <p style={styles.subtitle}>{profile.title}</p>
      </div>

      {/* Top spacer */}
      <div style={styles.spacerTop}></div>

      {/* Navigation */}
      <Navigation
        items={navigation}
        activeItem={activeItem}
        onItemClick={onNavigationClick}
        isMobile={false}
      />

      <div style={styles.spacerBottom}></div>

      {/* Footer */}
      <footer style={styles.footer}>
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </aside>
  );
};

const styles = {
  // Desktop sidebar styles
  sidebar: {
    position: "fixed",
    left: 0,
    top: 0,
    height: "100vh",
    width: "420px",
    backgroundColor: "#000000",
    padding: "32px",
    display: "flex",
    flexDirection: "column",
    zIndex: 10,
  },
  header: {
    marginBottom: "48px",
  },
  title: {
    fontSize: "40px",
    fontWeight: "300",
    color: "#ffffff",
    marginBottom: "8px",
    letterSpacing: "0.025em",
    margin: 0,
  },
  subtitle: {
    fontSize: "20px",
    color: "#9ca3af",
    fontWeight: "300",
    margin: 0,
  },
  spacerTop: {
    flex: 1,
  },
  navigation: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  navButton: {
    fontSize: "24px",
    fontWeight: "400",
    letterSpacing: "0.025em",
    transition: "all 0.2s ease",
    display: "block",
    padding: "8px 16px",
    width: "100%",
    textAlign: "left",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    outline: "none",
  },
  navButtonActive: {
    color: "#ffffff",
  },
  navButtonInactive: {
    color: "#9ca3af",
  },
  navButtonMobile: {
    fontSize: "20px",
    padding: "12px 16px",
  },
  spacerBottom: {
    flex: 1,
    minHeight: "80px",
  },
  footer: {
    fontSize: "14px",
    color: "#6b7280",
    fontWeight: "300",
  },

  // Mobile styles
  mobileHeader: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: "70px",
    backgroundColor: "transparent",
    zIndex: 20,
    display: "flex",
    alignItems: "center",
    pointerEvents: "none",
  },
  mobileHeaderContent: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    padding: "0 20px",
  },
  hamburger: {
    background: "rgba(0, 0, 0, 0.8)",
    border: "none",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    width: "48px",
    height: "48px",
    padding: "12px",
    borderRadius: "8px",
    pointerEvents: "auto",
    backdropFilter: "blur(8px)",
  },
  hamburgerLine: {
    display: "block",
    height: "2px",
    width: "100%",
    backgroundColor: "#ffffff",
    transformOrigin: "1px",
    transition: "all 0.3s ease",
  },
  mobileOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 15,
    backdropFilter: "blur(2px)",
  },
  mobileSidebar: {
    position: "fixed",
    left: 0,
    top: 0,
    height: "100vh",
    width: "280px",
    backgroundColor: "#000000",
    padding: "32px 24px",
    display: "flex",
    flexDirection: "column",
    zIndex: 25,
    transition: "transform 0.3s ease",
    borderRight: "1px solid #333",
  },
  mobileMenuHeader: {
    marginBottom: "40px",
    paddingTop: "20px",
  },
  mobileTitle: {
    fontSize: "26px",
    fontWeight: "300",
    color: "#ffffff",
    marginBottom: "8px",
    letterSpacing: "0.025em",
    margin: 0,
  },
  mobileSubtitle: {
    fontSize: "16px",
    color: "#9ca3af",
    fontWeight: "300",
    margin: 0,
  },
  mobileFooter: {
    fontSize: "14px",
    color: "#6b7280",
    fontWeight: "300",
    marginTop: "auto",
    paddingTop: "20px",
  },

  // Navigation icon styles
  navItemContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  navButtonContent: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    width: "100%",
  },
  navButtonContentDesktop: {
    justifyContent: "flex-start",
    gap: 0,
    width: "100%",
  },
  navButtonDesktop: {
    width: "100%",
    height: "64px",
    borderRadius: "12px",
    justifyContent: "flex-start",
    alignItems: "center",
    display: "flex",
    padding: "8px 16px",
    transition: "all 0.2s ease",
    textAlign: "left",
  },
  iconContainer: {
    display: "inline-flex",
    alignItems: "center",
    minWidth: "24px",
    height: "24px",
    justifyContent: "center",
    cursor: "pointer",
    transition: "transform 0.2s ease",
  },
  navIcon: {
    fontSize: "20px",
    minWidth: "24px",
    textAlign: "center",
  },
  navIconDesktop: {
    fontSize: "20px",
    width: "20px",
    height: "20px",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  navIconMobile: {
    fontSize: "24px",
    minWidth: "32px",
  },
  navTextDesktop: {
    fontSize: "24px",
    fontWeight: "400",
    letterSpacing: "0.025em",
    animation: "fadeInText 0.3s ease-in-out",
  },
  navTextMobile: {
    fontSize: "20px",
    fontWeight: "400",
    letterSpacing: "0.025em",
  },
  tooltip: {
    position: "absolute",
    left: "100%",
    top: "50%",
    transform: "translateY(-50%)",
    marginLeft: "16px",
    backgroundColor: "#333",
    color: "#ffffff",
    padding: "10px 16px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "400",
    whiteSpace: "nowrap",
    zIndex: 100,
    pointerEvents: "none",
    opacity: 0.95,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
    animation: "fadeIn 0.2s ease-out",
    border: "1px solid #555",
  },
};

export default Sidebar;
