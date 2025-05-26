import React from 'react';
import { portfolioData } from '../data/data';
import { useNavigation } from '../hooks/useNavigation';
import Sidebar from './SideBar/Sidebar';
import MainContent from './Content/MainContent';

const Portfolio = () => {
  const { activeItem, handleNavigationClick } = useNavigation();
  
  return (
    <div className="min-h-screen bg-black font-sans">
      {/* Border wrapper */}
      <div className="min-h-screen border border-gray-600 m-4">
        <style jsx>{`
          .bg-noise {
            background-image: 
              radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
              radial-gradient(circle at 70% 50%, white 1px, transparent 1px);
            background-size: 3px 3px, 5px 5px;
            background-position: 0 0, 2px 2px;
          }
        `}</style>
        
        {/* Only show sidebar when not on projects page */}
        {activeItem !== 'projects' && (
          <Sidebar 
            profile={portfolioData.profile}
            navigation={portfolioData.navigation}
            activeItem={activeItem}
            onNavigationClick={handleNavigationClick}
          />
        )}
        
        <MainContent 
          activeItem={activeItem}
          projects={portfolioData.projects}
          simpleProjects={portfolioData.simpleProjects}
          faqData={portfolioData.faqData}
          profile={portfolioData.profile}
          navigation={portfolioData.navigation}
          onNavigationClick={handleNavigationClick}
        />
      </div>
    </div>
  );
};

export default Portfolio;