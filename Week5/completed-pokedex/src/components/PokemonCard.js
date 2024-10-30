import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function PokemonCard(props) {
  const pokemonName = props.pokemon.name;
  // Generate image URL based on Pokémon index number
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.index}.png`;

  return (
    // Card component displays Pokémon image and name
    <Card sx={{ margin: 1 }}>
      {/* Link each card to its respective Pokémon detail page */}
      <CardActionArea component={Link} to={`/${pokemonName}`}>
        <CardMedia component="img" height="140" image={imageUrl} alt={pokemonName} />
        <CardContent>
          {/* Capitalize and display the Pokémon name */}
          <Typography variant="h6">
            {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PokemonCard;
