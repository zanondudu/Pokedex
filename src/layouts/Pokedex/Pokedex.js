import React from 'react';
import './Pokedex.css';
import Line from "../../components/Line/Line"
import Polygon from '../../components/Polygon/Polygon'
import ScreenBorder from '../../components/ScreenBorder/ScreenBorder'
import Screen from '../../components/Screen/Screen'
import Camera from '../../components/Camera/Camera'
import { useDispatch } from 'react-redux'

// import { Container } from './styles';

const Pokedex = () => {

  const dispatch = useDispatch();

  const sendPokemon = pokemon => {
    dispatch({ type: 'SEARCH', name: pokemon});
    console.log('ss');
    
  }

  const handleScan = data => {
    sendPokemon(data);
  }
  const errorScan = error => {
    console.log('error');
  }

  return (
    <>
      <div className="header-circles">
        <Camera 
          handleScan={handleScan}
          errorScan={errorScan}
        />
        <Polygon
          widthProp={7} 
          heightProp={4}
          colorProp="#ce0000"
          marginLeftProp={4}
          marginTopProp={3}
          borderRadiusProp="50%"
        />
        <Polygon
          widthProp={7} 
          heightProp={4}
          colorProp="yellow"
          marginLeftProp={3}
          marginTopProp={3}
          borderRadiusProp="50%"
        />
        <Polygon
          widthProp={7} 
          heightProp={4}
          colorProp="green"
          marginLeftProp={3}
          marginTopProp={3}
          borderRadiusProp="50%"
        />
      </div>
      <div className="lines">
        <Line 
          degreesProp={180}
          widthProp={28} 
          marginTopProp={-10} 
          marginLeftProp={72.3}
        />
        <Line
          degreesProp={130} 
          widthProp={28.8} 
          marginTopProp={10.7} 
          marginLeftProp={48.5}
        />
        <Line
          degreesProp={180}
          widthProp={53.6}
          marginTopProp={11}
          marginLeftProp={0}
        />
      </div>
      <ScreenBorder />
      <>
        <Screen></Screen>
      </>
    </>  
  )
}
  

export default Pokedex;
