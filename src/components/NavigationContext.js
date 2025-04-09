import React, { createContext, useState, useContext, useEffect } from 'react';

// Create Context
const NavigationContext = createContext();

// Create a Provider Component
export const NavigationProvider = ({ children }) => {
  // Set the initial value of currentPage state to the value stored in sessionStorage or 'home' if no value is found
  const [currentPage, setCurrentPage] = useState(sessionStorage.getItem('currentPage') || 'home');

  // Function to handle navigation
  const handleNavigation = (page) => {
    setCurrentPage(page);
    sessionStorage.setItem('currentPage', page);
  };

  // Sync currentPage with sessionStorage on component mount
  useEffect(() => {
    sessionStorage.setItem('currentPage', currentPage);
  }, [currentPage]);

  // Return the Provider component with the current page and handleNavigation function as the context value
  return (
    <NavigationContext.Provider value={{ currentPage, handleNavigation }}>
      {children}
    </NavigationContext.Provider>
  );
};

// Custom Hook for using context
export const useNavigation = () => useContext(NavigationContext);
