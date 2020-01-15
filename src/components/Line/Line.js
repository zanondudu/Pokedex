import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledDiv = styled.div`
  border-top:1px solid black;
  transform: rotate(${props => props.rotacao }deg);
  width: ${props => props.tamanho }vw;
  margin-top: ${props => props.margemTopo}vw;
  margin-left: ${props => props.margemEsquerda}vw;
`;

const Line = props => {
  const { degreesProp,
          widthProp,
          marginTopProp,
          marginLeftProp
        } = props;
  
  return (
    <StyledDiv 
      rotacao={degreesProp}
      tamanho={widthProp}
      margemTopo={marginTopProp}
      margemEsquerda={marginLeftProp}
    />
  );
};

Line.propTypes = {
  widthProp: PropTypes.number.isRequired,
  degreesProp: PropTypes.number.isRequired,
  marginTopProp: PropTypes.number.isRequired,
  marginLeftProp: PropTypes.number.isRequired,
};

export default Line
