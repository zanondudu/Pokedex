import React from 'react';
import Polygon from '../../components/Polygon/Polygon'
import Card from '../../components/Card/Card'

// import { Container } from './styles';

const Screen = () => (
  <div>
    <Polygon 
      widthProp={75} 
      heightProp={30}
      colorProp="#f2f2f2"
      marginLeftProp={12}
      marginTopProp={-45}
      borderRadiusProp="7%"
    />
    <Card></Card>
  </div>
)

export default Screen;
