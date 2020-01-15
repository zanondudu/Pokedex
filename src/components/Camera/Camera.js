import React from 'react';
import { useDispatch } from 'react-redux'
import QrReader from 'react-qr-reader';
import './Camera.css';

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
        <button onClick={() => { setCamera(false) }}>
          fechar camera
        </button>
      </div>
    </>
  );
};

export default Camera
