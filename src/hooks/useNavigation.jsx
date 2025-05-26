import { useState } from 'react';

export const useNavigation = (initialItem = 'home') => {
  const [activeItem, setActiveItem] = useState(initialItem);
  
  const handleNavigationClick = (itemId) => {
    setActiveItem(itemId);
    // Add routing logic here if using React Router
    console.log(`Navigating to: ${itemId}`);
  };
  
  return {
    activeItem,
    handleNavigationClick
  };
};