import React from 'react';
import Polygon from '../../components/Polygon/Polygon'
import Card from '../../components/Card/Card'
import './Screen.css'

// import { Container } from './styles';

const Screen = () => (
  <div className="screen">
    <div className="display-background">
      <Polygon 
        widthProp={75} 
        heightProp={30}
        colorProp="#f2f2f2"
        marginLeftProp={12}
        marginTopProp={-45}
        borderRadiusProp="7%"
      />
    </div>
    <div className="display">
      <Card></Card>
    </div>
  </div>
)

export default Screen;
