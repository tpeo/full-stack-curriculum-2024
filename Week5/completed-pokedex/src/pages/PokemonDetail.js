import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Typography, Paper, Box, Chip, CircularProgress } from "@mui/material";
import { ThemeContext } from "../context/ThemeContext"; // Adjust path as needed

function PokemonDetail() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const { theme } = useContext(ThemeContext); // Access the theme from context

  useEffect(() => {
    // Directly fetch Pokémon data within useEffect
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => {
      setPokemon(response.data);
    });
  }, [name]);

  if (!pokemon) {
    return <CircularProgress style={{ margin: "20% auto", display: "block" }} />;
  }

  const imageUrl = pokemon.sprites.other["official-artwork"].front_default;
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: isDarkMode ? "#121212" : "#f4f4f9", // Dark mode background
        padding: 4,
        borderRadius: 2,
        boxShadow: 3,
        maxWidth: 600,
        margin: "20px auto",
        color: isDarkMode ? "#ffffff" : "#333", // Text color for dark mode
      }}
    >
      <img
        src={imageUrl}
        alt={name}
        style={{ width: "100%", maxWidth: "300px", borderRadius: "8px" }}
      />

      <Typography variant="h2" gutterBottom sx={{ marginTop: 2 }}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </Typography>

      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", marginBottom: 2 }}>
        {pokemon.types.map((typeInfo) => (
          <Chip
            key={typeInfo.type.name}
            label={typeInfo.type.name.toUpperCase()}
            sx={{
              backgroundColor: isDarkMode ? "#8e44ad" : "#8ecae6", // Adjust color for dark mode
              color: "white",
            }}
          />
        ))}
      </Box>

      <Paper
        elevation={3}
        sx={{
          padding: 2,
          borderRadius: 2,
          marginBottom: 2,
          backgroundColor: isDarkMode ? "#333" : "#ffffff", // Paper background for dark mode
          width: "100%",
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
          Stats
        </Typography>
        {pokemon.stats.map((stat) => (
          <Typography key={stat.stat.name} sx={{ textTransform: "capitalize" }}>
            {stat.stat.name}: <strong>{stat.base_stat}</strong>
          </Typography>
        ))}
      </Paper>

      <Paper
        elevation={3}
        sx={{
          padding: 2,
          borderRadius: 2,
          backgroundColor: isDarkMode ? "#333" : "#ffffff", // Paper background for dark mode
          width: "100%",
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
          Abilities
        </Typography>
        {pokemon.abilities.map((abilityInfo) => (
          <Typography key={abilityInfo.ability.name} sx={{ textTransform: "capitalize" }}>
            {abilityInfo.ability.name}
          </Typography>
        ))}
      </Paper>
    </Box>
  );
}

export default PokemonDetail;
