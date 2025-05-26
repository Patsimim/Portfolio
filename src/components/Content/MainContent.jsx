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
  
  // Simple project card component for projects page
  const SimpleProjectCard = ({ project }) => (
    <article className="mb-12 cursor-pointer hover:text-gray-300 transition-colors duration-200">
      <h3 className="text-2xl md:text-3xl font-light text-white mb-2 tracking-wide">
        {project.title}
      </h3>
      <div className="text-sm text-gray-400 font-light">
        {project.dateRange} / {project.role}: {project.designer}
      </div>
    </article>
  );

  // FAQ item component
  const FAQItem = ({ faq }) => (
    <article className="mb-12">
      <h3 className="text-lg md:text-xl font-light text-white mb-4 leading-relaxed">
        {faq.question}
      </h3>
      <div className="text-sm text-gray-300 font-light leading-relaxed max-w-2xl">
        {faq.answer}
      </div>
    </article>
  );

  // Projects page layout (full width with horizontal nav)
  const ProjectsPage = () => (
    <div className="p-8">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-light text-white mb-2 tracking-wide">
          {profile.name}
        </h1>
        <p className="text-sm text-gray-400 font-light mb-8">
          {profile.title}
        </p>
        
        {/* Horizontal Navigation */}
        <nav className="flex gap-8 mb-8">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigationClick(item.id)}
              className={`text-sm font-light tracking-wide transition-colors duration-200 ${
                activeItem === item.id 
                  ? 'text-white' 
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        
        <div className="text-xs text-gray-500 font-light mb-2">
          © {new Date().getFullYear()} {profile.name}
        </div>
        <div className="text-xs text-gray-500 font-light tracking-widest mb-12">
          PORTFOLIO
        </div>
      </header>
      
      <section aria-label="All projects">
        {simpleProjects.map((project) => (
          <SimpleProjectCard key={project.id} project={project} />
        ))}
      </section>
    </div>
  );

  const renderContent = () => {
    switch (activeItem) {
      case 'home':
        return (
          <div className="px-16 py-20">
            <section aria-label="Featured projects">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </section>
          </div>
        );
      case 'projects':
        return <ProjectsPage />;
      case 'faq':
        return (
          <div className="px-16 py-20">
            <section aria-label="Frequently Asked Questions">
              {faqData.map((faq) => (
                <FAQItem key={faq.id} faq={faq} />
              ))}
            </section>
          </div>
        );
      case 'info':
        return (
          <div className="px-16 py-20">
            <h2 className="text-4xl font-light text-white mb-8">Info</h2>
            <p className="text-gray-300">Information page content goes here.</p>
          </div>
        );
      case 'contact':
        return (
          <div className="px-16 py-20">
            <h2 className="text-4xl font-light text-white mb-8">Contact</h2>
            <p className="text-gray-300">Contact information goes here.</p>
          </div>
        );
      case 'copycats':
        return (
          <div className="px-16 py-20">
            <h2 className="text-4xl font-light text-white mb-8">Copycats</h2>
            <p className="text-gray-300">Copycats information goes here.</p>
          </div>
        );
      default:
        return (
          <div className="px-16 py-20">
            <section aria-label="Featured projects">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </section>
          </div>
        );
    }
  };

  // For projects page, render without sidebar margin
  if (activeItem === 'projects') {
    return (
      <main className="min-h-screen bg-black">
        <div className="fixed inset-0 opacity-20 pointer-events-none bg-noise" />
        <div className="relative z-1">
          {renderContent()}
        </div>
      </main>
    );
  }

  return (
    <main className="ml-64 min-h-screen bg-black">
      {/* Noise texture overlay */}
      <div className="fixed inset-0 opacity-20 pointer-events-none bg-noise" />
      
      <div className="relative z-1">
        {renderContent()}
      </div>
    </main>
  );
};

export default MainContent;