import { useState } from 'react';

export const useNavigation = (initialItem = 'home') => {
  const [activeItem, setActiveItem] = useState(initialItem);
  
  const handleNavigationClick = (itemId) => {
    setActiveItem(itemId);
    console.log(`Navigating to: ${itemId}`);
  };
  
  return {
    activeItem,
    handleNavigationClick
  };
};