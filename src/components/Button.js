import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #e2e838;
  color: #2a5aeb;
  border: none;
  border-radius: 15px;
  box-shadow: 2px 2px 5px #babaca;
  max-height: ${props => props.altura }px;
  font-weight: ${props => props.espessuraFonte};
`;

const Button = props => {
  const { onClick, texto, heightProp, fontWeightProp } = props;
  
  return (
      <StyledButton
      onClick={onClick}
      altura={heightProp}
      espessuraFonte={fontWeightProp}
      >
      {texto}
      </StyledButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  heightProp: PropTypes.number.isRequired,
  fontWeightProp: PropTypes.number,
};

Button.defaultProps = {
  onClick: () => {},
  fontWeightProp: 300
};

export default Button
