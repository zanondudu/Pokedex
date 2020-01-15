import React, { useEffect, useState }from 'react';
import { useSelector } from 'react-redux'

import axios from 'axios';

const Card = () => {
  const name = useSelector(state => state.name);
  const [pokemonData, setpokemonData] = useState([]);
  const [ imgUrl, setImgUrl ] = useState('');

  useEffect(() => {
    async function getPokemonData() {
      
      const { data: response }  = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      if(response) {
        setpokemonData(response);  
        setImgUrl(response.sprites.front_default);
      }
    };
    if(name) {
      getPokemonData();
    }
  }, [name]); 

  return (
    <>
      <img width="300px"  height="300px" className="screen" alt="" src={imgUrl}></img>
    </>
  ) 
}

export default Card;

// const Button = props => {
//     const { children, onClick, color } = props;
//     return (
//       <StyledButton color={color} onClick={onClick}>
//         {children}
//       </StyledButton>
//     );
//   };
  