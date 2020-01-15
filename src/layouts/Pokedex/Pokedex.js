import React, { useEffect } from 'react';
import './Pokedex.css';
import Line from "../../components/Line/Line"
import Polygon from '../../components/Polygon/Polygon'
import ScreenBorder from '../../components/ScreenBorder/ScreenBorder'
import Screen from '../../components/Screen/Screen'
import Camera from '../../components/Camera/Camera'
import { useDispatch, useSelector } from 'react-redux'

// import { Container } from './styles';

const Pokedex = () => {
  const dispatch = useDispatch();
  const showCamera =  useSelector(state => state.camera);

  useEffect(() => {
  }, [showCamera])

  const sendPokemon = pokemon => {
    dispatch({ type: 'SEARCH', name: pokemon});
  }

  const setCamera = camera => {
    dispatch({ type: 'CAMERA', camera: camera})
  }

  const handleScan = data => {
    sendPokemon(data);
    if(data) {
      setCamera(false);
    }
    
  }

  const handleError = error => {
  }

  return (
    <>
      <div className="header-circles">
        <Polygon
          widthProp={13}
          heightProp={7}
          borderLeftProp="solid 8px #BABACA"
          borderRightProp="solid 8px #BABACA"
          borderTopProp="solid 8px #BABACA"
          borderBottomProp="solid 8px #BABACA"
          colorProp="#157CB3"
          marginLeftProp={5}
          marginTopProp={3}
          borderRadiusProp="50%"
          onClick={() => { setCamera(true) }}
        />
        { showCamera &&
          <div className="camera">
            <Camera 
              handleScan={handleScan}
              handleError={handleError}
            /> 
          </div> 
        }
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
