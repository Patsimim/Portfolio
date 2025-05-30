import React, { useState } from 'react';
import { portfolioData } from '../data/data';
import { useNavigation } from '../hooks/useNavigation';
import Sidebar from './SideBar/Sidebar';
import MainContent from './Content/MainContent';
import OpeningPage from './Opening';

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { activeItem, handleNavigationClick } = useNavigation();
  
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-black font-sans">
      <style jsx>{`
        .bg-noise {
          background-image: 
            radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
            radial-gradient(circle at 70% 50%, white 1px, transparent 1px);
          background-size: 3px 3px, 5px 5px;
          background-position: 0 0, 2px 2px;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .portfolio-enter {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>

      {isLoading ? (
        <OpeningPage onComplete={handleLoadingComplete} />
      ) : (
        <div className="min-h-screen portfolio-enter">
          {/* Always show sidebar */}
          <Sidebar 
            profile={portfolioData.profile}
            navigation={portfolioData.navigation}
            activeItem={activeItem}
            onNavigationClick={handleNavigationClick}
          />
          
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
      )}
    </div>
  );
};

export default Portfolio;