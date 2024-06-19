import { useEffect } from "react";
import { useLocation } from 'react-router-dom';

const PokemonCardEnlarged = () => {
    const location = useLocation();
    const name = location.state.name;
    const imgSource = location.state.imgSource;
    const data = location.state.data;

    const weight = data.weight; 
    const height = data.height; 

    const mainDiv = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px", 
    };
  
    const imgStyle = {
      width: '500px',
      height: '500px',
    };

      const basicDetails = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "space-between",
        padding: "20px", 
      };

    return (
      <div style={mainDiv}>
        <img style={imgStyle} src={imgSource} alt="Dynamic Source" />
        <div style={basicDetails}>
            <h2>Name: {name}</h2>
            <h2>Weight: {weight}</h2>
            <h2>Height: {height}</h2>
        </div>
      </div>
    );
  };
  
  export default PokemonCardEnlarged;





      // const abilities = data.abilities;
    // const types = data.types; 
  /*
   const textDiv = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      };
*/
   
  // const advancedDetails = {
  //   display: "flex",
  //   flexDirection: "column",
  //   justifyContent: "flex-start",
  //   alignItems: "flex-start",
  //   padding: "20px"
  // };

  {/* <div style={basicDetails}> 
                <h2 style={{ margin: '0 0 0 0' }}>Name: {name}</h2>
                <h2 style={{ margin: '0 0 0 0' }}>Weight: {weight}</h2>
                <h2 style={{ margin: '0 0 0 0' }}>Height: {height}</h2>
            </div>
            <div style={advancedDetails}> 
                <h2 style={{ margin: '0 0 0 0' }}>Pokemon Abilities</h2>
                <ul style={{ margin: '0', paddingLeft: '20px' }}>
                    {abilities.map((ability, index) => (
                    <li key={index}>{ability.ability.name}</li>
                    ))}
                </ul>
                <h2 style={{ margin: '0 0 0 0' }}>Types</h2>
                <ul style={{ margin: '0', paddingLeft: '20px' }}>
                    {types.map((type, index) => (
                    <li key={index}>{type.type.name}</li>
                    ))}
                </ul>
            </div> */}