import React from 'react';

const Navigation = ({ items, activeItem, onItemClick }) => (
  <nav 
    style={{
      position: 'fixed',
      left: '280px',
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'flex', 
      flexDirection: 'column', 
      gap: '24px', 
      alignItems: 'flex-end', // Changed to align items to the right
      zIndex: 20
    }} 
    role="navigation" 
    aria-label="Main navigation"
  >
    {items.map((item) => (
      <button
        key={item.id}
        onClick={() => onItemClick(item.id)}
        style={{
          display: 'inline-block', 
          textAlign: 'right', // Changed to right-align the text
          padding: '8px 12px', 
          width: 'fit-content',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer'
        }}
        className={`text-sm font-light tracking-wide transition-colors duration-200 hover:scale-105 ${
          activeItem === item.id 
            ? 'text-white' 
            : 'text-gray-400 hover:text-gray-200'
        }`}
        aria-current={activeItem === item.id ? 'page' : undefined}
      >
        {item.label}
      </button>
    ))}
  </nav>
);

const Sidebar = ({ profile, navigation, activeItem, onNavigationClick }) => (
  <>
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
        {/* Navigation is no longer here - it's positioned independently */}
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

    {/* Navigation positioned independently with right-aligned text */}
    <Navigation 
      items={navigation} 
      activeItem={activeItem}
      onItemClick={onNavigationClick}
    />
  </>
);

export default Sidebar;