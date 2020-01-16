import React from 'react';
import { useDispatch } from 'react-redux'
import QrReader from 'react-qr-reader';
import './Camera.css';
import Polygon from '../../components/Polygon/Polygon'

const Camera = props => {
  const { handleScan, handleError } = props;
  const dispatch = useDispatch();

  const setCamera = camera => {
    dispatch({ type: 'CAMERA', camera: camera})
  }

  return ( 
    <>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      <div>
        {/* <button onClick={() => { setCamera(false) }}>
          fechar camera
        </button> */}
        <Polygon
          widthProp={88}
          heightProp={37}
          colorProp="#f2f2f2"
          marginLeftProp={0}
          marginTopProp={3}
          borderRadiusProp="15%"
        />
      </div>
    </>
  );
};

export default Camera
