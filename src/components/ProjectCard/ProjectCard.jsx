import React, { useState } from 'react';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <article
      style={styles.article}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          console.log(`Selected project: ${project.title}`);
        }
      }}
    >
      <div style={styles.container}>
        <h2 style={{
          ...styles.title,
          ...(isHovered ? styles.titleHovered : {})
        }}>
          {project.title}
        </h2>
        
        <div style={{
          ...styles.metaContainer,
          ...(isHovered ? styles.metaContainerHovered : {})
        }}>
          <div style={styles.metaText}>
            <time dateTime={project.date}>{project.date}</time> / {project.category}
            {project.designer && `: ${project.designer}`}
          </div>
        </div>
        
        {/* Hover effect line */}
        <div style={{
          ...styles.hoverLine,
          ...(isHovered ? styles.hoverLineVisible : styles.hoverLineHidden)
        }} />
      </div>
    </article>
  );
};

const styles = {
  article: {
    cursor: 'pointer',
    marginBottom: '64px',
    transition: 'all 0.5s ease-out',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  container: {
    position: 'relative',
    textAlign: 'right'
  },
  title: {
    fontSize: 'clamp(48px, 8vw, 144px)',
    fontWeight: '100',
    letterSpacing: '-0.025em',
    color: '#ffffff',
    transition: 'all 0.3s ease',
    margin: 0
  },
  titleHovered: {
    transform: 'translateX(-16px)'
  },
  metaContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: '16px',
    textAlign: 'left',
    transition: 'all 0.3s ease'
  },
  metaContainerHovered: {
    transform: 'translateX(-8px)'
  },
  metaText: {
    fontSize: '12px',
    color: '#9ca3af',
    fontWeight: '300'
  },
  hoverLine: {
    position: 'absolute',
    right: 0,
    top: '50%',
    height: '1px',
    backgroundColor: '#ffffff',
    transition: 'all 0.3s ease'
  },
  hoverLineVisible: {
    width: '48px',
    opacity: 1
  },
  hoverLineHidden: {
    width: 0,
    opacity: 0
  }
};
export default ProjectCard;