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
    <div style={styles.container}>
      <style dangerouslySetInnerHTML={{ __html: portfolioStyles }} />

      {isLoading ? (
        <OpeningPage onComplete={handleLoadingComplete} />
      ) : (
        <div style={styles.portfolioEnter}>
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

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#000000',
    fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif'
  },
  portfolioEnter: {
    minHeight: '100vh',
    animation: 'fadeIn 0.8s ease-out'
  }
};

// CSS keyframes, background noise pattern, and scrollbar hiding
const portfolioStyles = `
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

  /* Hide scrollbar for webkit browsers (Chrome, Safari, Edge) */
  *::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE and Edge legacy */
  * {
    -ms-overflow-style: none;
  }

  /* Hide scrollbar for Firefox */
  * {
    scrollbar-width: none;
  }

  /* Ensure scrolling still works */
  html, body {
    overflow-x: hidden;
  }

  /* Alternative approach - target specific containers if needed */
  .scrollable-content::-webkit-scrollbar {
    display: none;
  }
  
  .scrollable-content {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export default Portfolio;