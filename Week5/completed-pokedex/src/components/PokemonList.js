import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';
import { Grid2 } from '@mui/material';

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  // Fetches list of first 151 Pokémon from the PokéAPI
  function fetchPokemons() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => {
        setPokemons(response.data.results); // Updates state with Pokémon data
      });
  }

  // Runs fetchPokemons once when component mounts
  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <Grid2 container justifyContent="center">
      {/* Maps each Pokémon into a PokemonCard with unique index */}
      {pokemons.map((pokemon, index) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} index={index + 1} />
      ))}
    </Grid2>
  );
}

export default PokemonList;
