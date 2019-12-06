import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, children, ...rest }) => (
  <button type="button" onClick={onClick} {...rest}>{children}</button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

Button.defaultProps = {
  onClick: () => {},
  children: '',
};

export default Button;
