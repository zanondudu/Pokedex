import React, { useState }from 'react';

import Polygon from '../../components/Polygon/Polygon';
import QrReader from 'react-qr-reader';

const Camera = props => {
  const [pokemonName, setPokemonName] = useState('');
  const [handleScan, setHandleScan] = useState(data => {    
    setPokemonName('data');
    console.log(pokemonName);
    
  })
  const [handleError, setHandleError] = useState(() => {    
    // alert('Deu ruim')
  })
   
  return ( 
    <>
      <Polygon
        widthProp={13} 
        heightProp={7}
        borderLeftProp="solid 8px #babaca"
        borderRightProp="solid 8px #babaca"
        borderTopProp="solid 8px #babaca"
        borderBottomProp="solid 8px #babaca"
        colorProp="#157cb3"
        marginLeftProp={5}
        marginTopProp={3}
        borderRadiusProp="50%"
      />
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
    </>
  );
};

export default Camera
