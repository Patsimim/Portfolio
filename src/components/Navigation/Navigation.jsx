import React from 'react';

const Navigation = ({ items, activeItem, onItemClick }) => (
  <nav className="space-y-6" role="navigation" aria-label="Main navigation">
    {items.map((item) => (
      <button
        key={item.id}
        onClick={() => onItemClick(item.id)}
        className={`block text-left text-sm font-light tracking-wide transition-colors duration-200 hover:scale-105 ${
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