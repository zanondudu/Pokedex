import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  const { children, onClick } = props;
  return <button onClick={onClick}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

Button.defaultProps = {
  onClick: () => {}
};

export default Button;
