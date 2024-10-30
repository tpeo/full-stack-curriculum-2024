import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeContext } from './context/ThemeContext';
import PokemonDetail from './pages/PokemonDetail';
import PokemonList from './components/PokemonList';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { WbSunny, NightsStay } from '@mui/icons-material';

function App() {
  // Access theme and toggle function from ThemeContext
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    // Wraps entire app in ThemeProvider to apply selected theme
    <ThemeProvider theme={theme}>
      {/* AppBar as a top navigation bar with theme toggle */}
      <AppBar position='sticky'>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Pokédex App
          </Typography>
          {/* Toggle button switches between light and dark mode */}
          <IconButton onClick={toggleTheme}>
            {theme.palette.mode === 'dark' ? <WbSunny /> : <NightsStay />}
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* Route configuration for navigation between pages */}
      <Routes>
        {/* Home route displaying list of Pokémon */}
        <Route path="/" element={<PokemonList />} />
        {/* Dynamic route for individual Pokémon details */}
        <Route path="/:name" element={<PokemonDetail />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
