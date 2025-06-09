import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faLink } from "@fortawesome/free-solid-svg-icons";
import { faApple, faAndroid } from "@fortawesome/free-brands-svg-icons";

const ProjectCard = ({ project, index, isMobile }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false);
    }
  };

  const getPlatformIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case "android":
        return <FontAwesomeIcon icon={faAndroid} />;
      case "ios":
        return <FontAwesomeIcon icon={faApple} />;
      case "web":
        return <FontAwesomeIcon icon={faGlobe} />;
      default:
        return <FontAwesomeIcon icon={faLink} />;
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <>
      <article
        style={{
          ...styles.article,
          ...(isMobile ? styles.articleMobile : {}),
          transform: isMobile
            ? "none"
            : isHovered
              ? "translateX(-8px)"
              : "translateX(0)",
        }}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          style={{
            ...styles.projectContent,
            ...(isMobile ? styles.projectContentMobile : {}),
          }}
        >
          <div
            style={{
              ...styles.projectInfo,
              ...(isMobile ? styles.projectInfoMobile : {}),
            }}
          >
            <h3
              style={{
                ...styles.title,
                ...(isMobile ? styles.titleMobile : {}),
                color: isHovered ? "#d1d5db" : "#ffffff",
              }}
            >
              {project.title}
            </h3>
            <div
              style={{
                ...styles.meta,
                ...(isMobile ? styles.metaMobile : {}),
              }}
            >
              {project.date} / {project.category}
            </div>
          </div>
        </div>
      </article>

      {/* Modal */}
      {isModalOpen && (
        <div
          style={{
            ...styles.modalOverlay,
            ...(isMobile ? styles.modalOverlayMobile : {}),
          }}
          onClick={closeModal}
        >
          <div
            style={{
              ...styles.modalCard,
              ...(isMobile ? styles.modalCardMobile : {}),
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              style={{
                ...styles.closeButton,
                ...(isMobile ? styles.closeButtonMobile : {}),
                backgroundColor:
                  hoveredButton === "close" ? "#333" : "transparent",
              }}
              onClick={closeModal}
              onMouseEnter={() => setHoveredButton("close")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              ×
            </button>

            {/* Modal content */}
            <div
              style={{
                ...styles.modalContent,
                ...(isMobile ? styles.modalContentMobile : {}),
              }}
            >
              <h2
                style={{
                  ...styles.modalTitle,
                  ...(isMobile ? styles.modalTitleMobile : {}),
                }}
              >
                {project.title}
              </h2>

              {/* Project Image instead of meta info */}
              {project.image && (
                <div
                  style={{
                    ...styles.modalImageContainer,
                    ...(isMobile ? styles.modalImageContainerMobile : {}),
                  }}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    style={{
                      ...styles.modalImage,
                      ...(isMobile ? styles.modalImageMobile : {}),
                    }}
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
              )}

              <div style={styles.modalDescription}>
                <h3
                  style={{
                    ...styles.sectionTitle,
                    ...(isMobile ? styles.sectionTitleMobile : {}),
                  }}
                >
                  Project Description
                </h3>
                <p
                  style={{
                    ...styles.descriptionText,
                    ...(isMobile ? styles.descriptionTextMobile : {}),
                  }}
                >
                  {project.description ||
                    "A comprehensive fullstack application built with modern technologies. This project showcases advanced development skills and clean architecture patterns."}
                </p>

                <h3
                  style={{
                    ...styles.sectionTitle,
                    ...(isMobile ? styles.sectionTitleMobile : {}),
                  }}
                >
                  Technologies Used
                </h3>
                <div
                  style={{
                    ...styles.techStack,
                    ...(isMobile ? styles.techStackMobile : {}),
                  }}
                >
                  {(
                    project.technologies || [
                      "React",
                      "Node.js",
                      "PostgreSQL",
                      "AWS",
                    ]
                  ).map((tech, index) => (
                    <span
                      key={index}
                      style={{
                        ...styles.techTag,
                        ...(isMobile ? styles.techTagMobile : {}),
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Live Links */}
              {project.viewLive && project.viewLive.length > 0 && (
                <div style={styles.modalActions}>
                  <h3
                    style={{
                      ...styles.sectionTitle,
                      ...(isMobile ? styles.sectionTitleMobile : {}),
                    }}
                  >
                    View Live
                  </h3>
                  <div style={styles.viewLiveContainer}>
                    {project.viewLive.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        style={{
                          ...styles.actionButton,
                          ...(isMobile ? styles.actionButtonMobile : {}),
                          backgroundColor:
                            hoveredButton === `live-${index}` ? "#555" : "#333",
                        }}
                        target='_blank'
                        rel='noopener noreferrer'
                        onMouseEnter={() => setHoveredButton(`live-${index}`)}
                        onMouseLeave={() => setHoveredButton(null)}
                      >
                        <span style={styles.platformIcon}>
                          {getPlatformIcon(link.platform)}
                        </span>
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  article: {
    marginBottom: "48px",
    cursor: "pointer",
    transition: "transform 0.2s ease",
    display: "flex",
    justifyContent: "flex-end",
    textAlign: "right",
  },
  projectContent: {
    display: "flex",
    alignItems: "center",
    gap: "24px",
    width: "100%",
    justifyContent: "flex-end",
  },
  projectInfo: {
    textAlign: "right",
  },
  logoContainer: {
    flexShrink: 0,
  },
  projectLogo: {
    width: "60px",
    height: "60px",
    borderRadius: "12px",
    objectFit: "cover",
    border: "2px solid #333",
    transition: "border-color 0.3s ease",
  },
  title: {
    fontSize: "clamp(20px, 8vw, 60px)",
    fontWeight: "300",
    marginBottom: "8px",
    letterSpacing: "0.025em",
    transition: "color 0.3s ease",
    margin: 0,
  },
  meta: {
    fontSize: "14px",
    color: "#9ca3af",
    fontWeight: "300",
  },

  // Modal styles
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    padding: "20px",
  },
  modalCard: {
    backgroundColor: "#1a1a1a",
    borderRadius: "12px",
    maxWidth: "500px",
    width: "100%",
    maxHeight: "80vh",
    overflowY: "auto",
    position: "relative",
    border: "1px solid #333",
    top: 40,
  },
  closeButton: {
    position: "absolute",
    top: "16px",
    right: "16px",
    border: "none",
    color: "#ffffff",
    fontSize: "24px",
    cursor: "pointer",
    padding: "4px 8px",
    borderRadius: "4px",
    transition: "background-color 0.2s ease",
    zIndex: 1001,
  },
  modalContent: {
    padding: "32px",
  },
  modalImageContainer: {
    marginBottom: "32px",
    borderRadius: "12px",
    overflow: "hidden",
    border: "1px solid #333",
  },
  modalImage: {
    width: "100%",
    height: "auto",
    maxHeight: "300px",
    objectFit: "cover",
    display: "block",
  },
  modalTitle: {
    fontSize: "32px",
    fontWeight: "300",
    color: "#ffffff",
    marginBottom: "24px",
    letterSpacing: "0.025em",
    margin: "0 0 24px 0",
  },
  modalMeta: {
    marginBottom: "32px",
    padding: "16px",
    backgroundColor: "#0a0a0a",
    borderRadius: "8px",
    border: "1px solid #333",
  },
  metaText: {
    color: "#d1d5db",
    margin: "0 0 8px 0",
    fontSize: "14px",
  },
  sectionTitle: {
    fontSize: "18px",
    fontWeight: "500",
    color: "#ffffff",
    marginBottom: "16px",
    margin: "0 0 16px 0",
  },
  modalDescription: {
    marginBottom: "32px",
  },
  descriptionText: {
    fontSize: "16px",
    color: "#d1d5db",
    lineHeight: "1.6",
    marginBottom: "24px",
  },
  techStack: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "24px",
  },
  techTag: {
    padding: "4px 12px",
    backgroundColor: "#333",
    color: "#ffffff",
    borderRadius: "16px",
    fontSize: "12px",
    fontWeight: "500",
  },
  modalActions: {
    paddingTop: "24px",
    borderTop: "1px solid #333",
  },
  viewLiveContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  actionButton: {
    padding: "12px 16px",
    color: "#ffffff",
    textDecoration: "none",
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: "500",
    transition: "background-color 0.2s ease",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    justifyContent: "center",
  },
  platformIcon: {
    fontSize: "16px",
    minWidth: "20px",
  },

  // Mobile styles - Updated for better centering
  articleMobile: {
    marginBottom: "32px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
  },
  projectContentMobile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    textAlign: "center",
  },
  projectInfoMobile: {
    textAlign: "center",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  titleMobile: {
    fontSize: "clamp(24px, 8vw, 36px)",
    textAlign: "center",
  },
  metaMobile: {
    fontSize: "13px",
    textAlign: "center",
  },
  modalOverlayMobile: {
    padding: "10px",
    alignItems: "flex-start",
    paddingTop: "20px",
  },
  modalCardMobile: {
    maxWidth: "100%",
    maxHeight: "90vh",
    margin: "0",
    borderRadius: "8px",
  },
  closeButtonMobile: {
    top: "12px",
    right: "12px",
    fontSize: "28px",
    padding: "8px 12px",
  },
  modalContentMobile: {
    padding: "24px 20px",
  },
  modalImageContainerMobile: {
    marginBottom: "24px",
    borderRadius: "8px",
  },
  modalImageMobile: {
    maxHeight: "200px",
  },
  modalTitleMobile: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  sectionTitleMobile: {
    fontSize: "16px",
    marginBottom: "12px",
  },
  descriptionTextMobile: {
    fontSize: "14px",
    marginBottom: "20px",
  },
  techStackMobile: {
    gap: "6px",
    marginBottom: "20px",
    justifyContent: "center",
  },
  techTagMobile: {
    padding: "3px 8px",
    fontSize: "11px",
  },
  actionButtonMobile: {
    padding: "14px 16px",
    fontSize: "15px",
  },
};

export default ProjectCard;
