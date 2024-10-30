import React, { createContext, useState } from 'react';
import { createTheme } from '@mui/material/styles';

// Creates the ThemeContext, which we’ll use to access and provide theme values in our app
// ThemeContext lets components access the theme data (like mode and toggleTheme function) wherever needed
export const ThemeContext = createContext();

// ThemeContextProvider is the actual provider component that wraps parts of our app
// It supplies theme data and functions (like toggleTheme) to any components inside it
export const ThemeContextProvider = ({ children }) => {
  // Sets initial theme mode to 'light'
  const [mode, setMode] = useState('light');

  // Function to toggle between 'light' and 'dark' themes
  const toggleTheme = () => {
    setMode(mode === 'light' ? 'dark' : 'light'); // If current mode is 'light', set to 'dark', and vice versa
  };

  // Creates a theme based on the current mode
  const theme = createTheme({
    palette: {
      mode, // Uses the value of mode ('light' or 'dark') to set the theme
    },
  });

  return (
    // Provides the theme and toggleTheme function to all components wrapped by this provider
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
