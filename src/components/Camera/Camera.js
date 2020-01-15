import React, { useState }from 'react';

import Polygon from '../../components/Polygon/Polygon';
import QrReader from 'react-qr-reader';

const Camera = props => {
  const { handleScan, handleError } = props;

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
