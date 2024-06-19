import React, {useState, useEffect} from 'react';
import PokemonCardEnlarged from './PokemonCardEnlarged';

const PokemonCard = ({onClickFunction, name, imgSource}) => {
    const [check, setCheck] = useState(false); 

    useEffect(() => {
        console.log(onClickFunction); 
    }, [])

    const divStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
    };

    const imgStyle = {
        width: '300px', 
        height: '300px',
    };

    return (
        <div style={divStyle}>
            <img onClick={onClickFunction} style={imgStyle} src={imgSource}/>
            <p>Name: {name}</p>
        </div>
    );
};

export default PokemonCard;