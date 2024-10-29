import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeContext } from './context/ThemeContext';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { WbSunny, NightsStay } from '@mui/icons-material';

function App() {

  const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <ThemeProvider theme={theme}>
      Hello World!
    </ThemeProvider>
  );
}

export default App;
