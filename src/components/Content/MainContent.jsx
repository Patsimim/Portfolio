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
    <article className="mb-12 cursor-pointer hover:translate-x-2 transition-transform duration-200">
      <h3 className="text-2xl md:text-3xl font-light text-white mb-2 tracking-wide hover:text-gray-300 transition-colors">
        {project.title}
      </h3>
      <div className="text-sm text-gray-400 font-light">
        {project.date} / {project.category}: {project.designer}
      </div>
    </article>
  );

  // Right Content Container
  const RightContentContainer = ({ children, className = "" }) => (
    <div className={`min-h-screen flex ${className}`}>
      {/* Left side - empty space */}
      <div className="flex-1"></div>
      
      {/* Right side - content */}
      <div className="w-96 flex flex-col justify-center pr-16 py-20">
        {children}
      </div>
    </div>
  );

  // Home page - About me summary
  const HomePage = () => (
    <div className="px-16 py-20 flex items-center justify-center min-h-screen">
      <div className="max-w-2xl text-center">
        <h2 className="text-5xl md:text-7xl font-thin text-white mb-12 tracking-tight">
          About Me
        </h2>
        
        <div className="space-y-8 text-gray-300">
          <p className="text-lg md:text-xl font-light leading-relaxed">
            Fullstack developer crafting digital experiences with clean code and elegant design.
          </p>
        </div>

        <div className="pt-4">
            <h3 className="text-white mb-2">Expertise</h3>
            <ul className="space-y-1 text-gray-400">
              <li>Frontend: React, Next.js, TypeScript</li>
              <li>Backend: Node.js, Express, FastAPI</li>
              <li>Database: PostgreSQL, MongoDB</li>
              <li>Cloud: AWS, Vercel, Docker</li>
            </ul>
          </div>
      </div>
    </div>
  );

  // Contact page content
  const ContactPage = () => (
    <RightContentContainer>
      <div className="space-y-6">
        <h2 className="text-2xl font-light text-white mb-6">Contact</h2>
        <div className="space-y-6 text-sm">
          <div>
            <h3 className="text-white mb-2">Email</h3>
            <a 
              href="mailto:rojorusselgem@gmail.com" 
              className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-200 inline-block"
            >
              rojorusselgem@gmail.com
            </a>
          </div>
          
          <div>
            <h3 className="text-white mb-2">Social & Work</h3>
            <div className="space-y-2">
              <a 
                href="https://github.com/russelrojo" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-200"
              >
                GitHub ↗
              </a>
              <a 
                href="https://linkedin.com/in/russelrojo" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-200"
              >
                LinkedIn ↗
              </a>
              <a 
                href="#" 
                className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-200"
              >
                Portfolio ↗
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white mb-2">Response Time</h3>
            <p className="text-gray-300">Usually within 24 hours</p>
          </div>
        </div>
      </div>
    </RightContentContainer>
  );

  // Projects page layout
  const ProjectsPage = () => (
    <div className="px-16 py-20">
      <header className="mb-12">
        <h2 className="text-4xl font-light text-white mb-8">Projects</h2>
      </header>
      
      <section aria-label="All projects">
        {(projects || []).map((project, index) => (
          <SimpleProjectCard key={project.id || index} project={project} index={index} />
        ))}
        
        {(!projects || projects.length === 0) && (
          <p className="text-gray-400 text-lg">No projects available.</p>
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
    <main className="min-h-screen pl-64 relative">
      {/* Noise texture overlay */}
      <div className="fixed inset-0 opacity-20 pointer-events-none bg-noise" />
      
      {/* Page title on the right side - like Keita Yamada's design */}
      <div className="fixed right-8 top-8 text-right z-20">
        <h3 className="text-lg font-light text-white tracking-wide">
          {getCurrentPageTitle()}
        </h3>
      </div>
      
      <div className="relative z-1">
        {renderContent()}
      </div>
    </main>
  );
};

export default MainContent;