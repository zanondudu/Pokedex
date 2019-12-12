import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: green;
  color: ${props => props.color};
  border: none;
  box-shadow: 2px 2px 5px #babaca;
`;

const Button = props => {
  const { children, onClick, color } = props;
  return (
    <StyledButton color={color} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.string
};

Button.defaultProps = {
  onClick: () => {},
  color: "#fff"
};

export default Button;
