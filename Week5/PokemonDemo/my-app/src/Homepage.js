import './App.css';
import React, {useEffect, useState } from "react";
import PokemonCard from './PokemonCard.js'; 
import { useNavigate } from 'react-router-dom';

function HomePage() {
    
const navigate = useNavigate();

const [searchValue, setSearchValue] = useState('');
const [pokemonPictureURLs, setPokemonPictureURLs] = useState([]); 
const [pokemonListData, setPokemonListData] = useState([]); 

const pokemonList = [
    "bulbasaur",
    "ivysaur",
    "venusaur",
    "charmander",
    "charmeleon",
    "charizard",
    "squirtle",
    "wartortle",
    "blastoise",
    "caterpie",
    "metapod",
    "butterfree",
    "weedle",
    "kakuna",
];

const handleInputChange = (event) => {
  setSearchValue(event.target.value);
};

  useEffect(() => {
    const getPokemon = async () => {
        if(pokemonPictureURLs.length !== pokemonList.length) {
          try {
            const pokemonListURLS = []; 
            for (let i = 0; i < pokemonList.length; i++) {
              pokemonListURLS.push(`https://pokeapi.co/api/v2/pokemon/${pokemonList[i]}`); 
            }
            
            const tempData = []; 
            const tempPicture = []; 
            for (let i = 0; i < pokemonList.length; i++) {
              const response = await fetch(pokemonListURLS[i]); 
              const data = await response.json();
              tempData.push(data); 
              tempPicture.push(`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${data.id}.svg`); 
            }
            setPokemonListData(tempData); 
            setPokemonPictureURLs(tempPicture);        
          } catch {
            console.log("Error occured")
          }
        }
    }
    getPokemon(); 
  }, [])

  function navigateToEnlarge(name, imgSource, data) {
    navigate("/enlarged", {state: {name: name, imgSource: imgSource, data: data}}); 
  }

  const outerDivStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "space-evenly",
    gap: "30px",
};

const searchDivStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "30px", 
  gap: "10px"

};

const inputStyle = {
  fontSize: "2rem"
}

const cardDivStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "space-evenly",
    gap: "30px",
    flexWrap: 'wrap', 
};

  return (
    <div style={outerDivStyle}> 
      <div style={searchDivStyle}>
        <label>Search Pokemon</label>
        <input
          style={inputStyle}
          value={searchValue}
          onChange={handleInputChange}
        />      
      </div>
      <div style={cardDivStyle} className="App">
      {pokemonPictureURLs.length === pokemonList.length && (
          pokemonPictureURLs
            .map((pokemonURL, index) => ({
              name: pokemonList[index],
              imgSource: pokemonPictureURLs[index],
              data: pokemonListData[index],
            }))
            .filter(pokemon => pokemon.name.toLowerCase().startsWith(searchValue.toLowerCase()))
            .map((filteredPokemon, index) => (
              <PokemonCard
                onClickFunction={() => navigateToEnlarge(filteredPokemon.name, filteredPokemon.imgSource, filteredPokemon.data)}
                name={filteredPokemon.name}
                imgSource={filteredPokemon.imgSource}
              />
            ))
        )}
      </div>
    </div>
  );
  
}

export default HomePage;