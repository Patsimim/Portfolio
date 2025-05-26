import React, { useState } from 'react';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <article
      className="group cursor-pointer mb-16 transition-all duration-500 ease-out"
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
      <div className="relative">
        <h2 className={`text-6xl md:text-8xl lg:text-9xl font-thin tracking-tight text-white transition-all duration-300 ${
          isHovered ? 'transform translate-x-4' : ''
        }`}>
          {project.title}
        </h2>
        
        <div className={`flex flex-col items-end mt-4 text-right transition-all duration-300 ${
          isHovered ? 'transform translate-x-2' : ''
        }`}>
          <div className="text-xs text-gray-400 font-light">
            <time dateTime={project.date}>{project.date}</time> / {project.category}
            {project.designer && `: ${project.designer}`}
          </div>
        </div>
        
        {/* Hover effect line */}
        <div className={`absolute left-0 top-1/2 h-px bg-white transition-all duration-300 ${
          isHovered ? 'w-12 opacity-100' : 'w-0 opacity-0'
        }`} />
      </div>
    </article>
  );
};

export default ProjectCard;