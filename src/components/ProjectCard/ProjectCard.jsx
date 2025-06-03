import React from 'react';

const ProjectCard = ({ project, index }) => {
  return (
    <article 
      style={styles.article}
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
  }
};

export default ProjectCard;