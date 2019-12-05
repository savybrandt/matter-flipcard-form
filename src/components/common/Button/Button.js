import React from 'react';
import PropTypes from 'prop-types'

const Button = ({ onClick, children, ...rest }) => (
  <button onClick={onClick} {...rest}>{children}</button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node
}

export default Button;