import React, { useState } from 'react';
import "./Navbar.css"
import Button from "../Button"
import { useDispatch } from 'react-redux'

// import { Container } from './styles';

const Navbar = () => {

  const dispatch = useDispatch();
  const [pokemon, setPokemon] = useState('');

  function search() {
    dispatch({ type: 'SEARCH', name: pokemon});
  }

  return(
  <div className="content">        
      <input
       className="input"
       onChange={e => setPokemon(e.target.value)}
      />
      <Button 
        texto="Go!"
        heightProp={35}
        fontWeightProp={900}
        onClick={search}
      />
  </div>
  )
}
export default Navbar;
