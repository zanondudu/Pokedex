import React from 'react';
import Polygon from '../../components/Polygon/Polygon'

// import { Container } from './styles';

const ScreenBorder = () => (
    <>
      <Polygon
        widthProp={85} 
        heightProp={42}
        colorProp="#bfbfbf"
        marginLeftProp={7}
        marginTopProp={3}
      />
      <Polygon
        widthProp={26} 
        heightProp={10}
        colorProp="red"
        marginLeftProp={-1}
        marginTopProp={-5}
        degreesProp={36}
      />
    </>
)

export default ScreenBorder;
