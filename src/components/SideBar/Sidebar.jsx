import React from 'react';
import Navigation from '../Navigation/Navigation';

const Sidebar = ({ profile, navigation, activeItem, onNavigationClick }) => (
  <aside className="fixed left-0 top-0 h-full w-64 bg-black p-8 flex flex-col justify-between z-10">
    {/* Header */}
    <div>
      <header className="mb-12">
        <h1 className="text-2xl font-light text-white mb-2 tracking-wide">
          {profile.name}
        </h1>
        <p className="text-sm text-gray-400 font-light">
          {profile.title}
        </p>
      </header>
      
      <Navigation 
        items={navigation} 
        activeItem={activeItem}
        onItemClick={onNavigationClick}
      />
    </div>
    
    {/* Footer */}
    <footer className="text-xs text-gray-500 font-light">
      © {new Date().getFullYear()} {profile.name}
    </footer>
    
    {/* Vertical text */}
    <div className="absolute right-8 top-1/2 transform -rotate-90 origin-center">
      <span className="text-xs text-gray-500 font-light tracking-widest">
        PORTFOLIO
      </span>
    </div>
  </aside>
);

export default Sidebar;