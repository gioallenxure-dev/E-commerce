import React, { createContext, useState } from 'react';

// 1. Create the Context
export const AuthContext = createContext();

// 2. Create the Provider Component
export const AuthProvider = ({ children }) => {
  // Initialize state from localStorage, defaulting to false
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );

  // Function to simulate login
  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  // Function to simulate logout
  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  // Provide the state and functions to consumers
  const contextValue = {
    isLoggedIn,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
