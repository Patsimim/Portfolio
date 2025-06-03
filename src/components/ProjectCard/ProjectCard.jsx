import React, { useState } from 'react';

const ProjectCard = ({ project, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <article 
        style={styles.article}
        onClick={handleClick}
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
          <h3 style={styles.title}>
            {project.title}
          </h3>
          <div style={styles.meta}>
            {project.date} / {project.category}: {project.designer}
          </div>
        </div>
      </article>

      {/* Modal */}
      {isModalOpen && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modalCard} onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button style={styles.closeButton} onClick={closeModal}>
              ×
            </button>
            
            {/* Modal content */}
            <div style={styles.modalContent}>
              <h2 style={styles.modalTitle}>{project.title}</h2>
              
              <div style={styles.modalMeta}>
                <p><strong>Date:</strong> {project.date}</p>
                <p><strong>Role:</strong> {project.category}</p>
                <p><strong>Developer:</strong> {project.designer}</p>
              </div>
              
              <div style={styles.modalDescription}>
                <h3 style={styles.sectionTitle}>Project Description</h3>
                <p style={styles.descriptionText}>
                  {project.description || "A comprehensive fullstack application built with modern technologies. This project showcases advanced development skills and clean architecture patterns."}
                </p>
                
                <h3 style={styles.sectionTitle}>Technologies Used</h3>
                <div style={styles.techStack}>
                  {project.technologies || ["React", "Node.js", "PostgreSQL", "AWS"]}
                </div>
                
                <h3 style={styles.sectionTitle}>Key Features</h3>
                <ul style={styles.featureList}>
                  <li>Responsive design</li>
                  <li>Real-time functionality</li>
                  <li>Secure authentication</li>
                  <li>Performance optimization</li>
                </ul>
              </div>
              
              <div style={styles.modalActions}>
                <a href={project.liveUrl || "#"} style={styles.actionButton} target="_blank" rel="noopener noreferrer">
                  View Live ↗
                </a>
                <a href={project.githubUrl || "#"} style={styles.actionButton} target="_blank" rel="noopener noreferrer">
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  article: {
    marginBottom: '48px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
    display: 'flex',
    justifyContent: 'flex-end',
    textAlign: 'right'
  },
  title: {
    fontSize: 'clamp(48px, 8vw, 100px)',
    fontWeight: '300',
    color: '#ffffff',
    marginBottom: '8px',
    letterSpacing: '0.025em',
    transition: 'color 0.3s ease',
    margin: 0
  },
  meta: {
    fontSize: '14px',
    color: '#9ca3af',
    fontWeight: '300'
  },
  
  // Modal styles
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '20px'
  },
  modalCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: '12px',
    maxWidth: '600px',
    width: '100%',
    maxHeight: '80vh',
    overflowY: 'auto',
    position: 'relative',
    border: '1px solid #333'
  },
  closeButton: {
    position: 'absolute',
    top: '16px',
    right: '16px',
    background: 'none',
    border: 'none',
    color: '#ffffff',
    fontSize: '24px',
    cursor: 'pointer',
    padding: '4px 8px',
    borderRadius: '4px',
    transition: 'background-color 0.2s ease'
  },
  modalContent: {
    padding: '32px'
  },
  modalTitle: {
    fontSize: '32px',
    fontWeight: '300',
    color: '#ffffff',
    marginBottom: '24px',
    letterSpacing: '0.025em',
    margin: '0 0 24px 0'
  },
  modalMeta: {
    marginBottom: '32px',
    padding: '16px',
    backgroundColor: '#0a0a0a',
    borderRadius: '8px',
    border: '1px solid #333'
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: '400',
    color: '#ffffff',
    marginBottom: '12px',
    margin: '0 0 12px 0'
  },
  descriptionText: {
    fontSize: '16px',
    color: '#d1d5db',
    lineHeight: '1.6',
    marginBottom: '24px'
  },
  techStack: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '24px'
  },
  featureList: {
    color: '#d1d5db',
    paddingLeft: '20px',
    marginBottom: '24px'
  },
  modalActions: {
    display: 'flex',
    gap: '16px',
    paddingTop: '24px',
    borderTop: '1px solid #333'
  },
  actionButton: {
    padding: '12px 24px',
    backgroundColor: '#333',
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'background-color 0.2s ease',
    display: 'inline-block'
  }
};

export default ProjectCard;