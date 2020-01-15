import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledDiv = styled.div`
  border-radius: ${props => props.radioBorda};
  border-left:${props => props.bordaEsquerda};
  border-top:${props => props.bordaCima};
  border-bottom:${props => props.bordaBaixo};
  border-right:${props => props.bordaDireita};
  width: ${props => props.largura }vw;
  height: ${props => props.altura}vh;
  background-color: ${props => props.cor};
  margin-top: ${props => props.margemTopo}vh; 
  margin-left: ${props => props.margemEsquerda}vw;
  transform: rotate(${props => props.rotacao }deg);
`;

const Polygon = props => {
  const { widthProp,
          borderLeftProp,
          borderTopProp,
          borderRightProp,
          borderBottomProp,
          colorProp,
          heightProp,
          marginTopProp,
          marginLeftProp,
          borderRadiusProp,
          degreesProp,
        } = props;
  
  
  return (
    <StyledDiv 
      bordaEsquerda={borderLeftProp}
      bordaDireita={borderRightProp}
      bordaCima={borderTopProp}
      bordaBaixo={borderBottomProp}
      largura={widthProp}
      altura={heightProp}
      cor={colorProp}
      margemTopo={marginTopProp}
      margemEsquerda={marginLeftProp}
      radioBorda={borderRadiusProp}
      rotacao={degreesProp}
    />
  );
};

Polygon.propTypes = {
  widthProp: PropTypes.number.isRequired,
  heightProp: PropTypes.number.isRequired,
  borderLeftProp: PropTypes.string,
  borderTopProp: PropTypes.string,
  borderRightProp: PropTypes.string,
  borderBottomProp: PropTypes.string,
  colorProp: PropTypes.string.isRequired,
  marginTopProp: PropTypes.number.isRequired,
  marginLeftProp: PropTypes.number.isRequired,
  borderRadiusProp: PropTypes.string,
  degreesProp: PropTypes.number
};

Polygon.defaultProps = {
  borderLeftProp: 'none',
  borderTopProp: 'none',
  borderRightProp: 'none',
  borderBottomProp: 'none',
  degreesProp: 0,
  borderRadiusProp: '0%'
};

export default Polygon
