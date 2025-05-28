import React from 'react';

const Navigation = ({ items, activeItem, onItemClick }) => (
  <nav style={{display: 'flex', flexDirection: 'column', gap: '24px'}} role="navigation" aria-label="Main navigation">
    {items.map((item) => (
      <button
        key={item.id}
        onClick={() => onItemClick(item.id)}
        style={{display: 'inline-block', textAlign: 'left', padding: '4px 0'}}
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

export default Navigation;