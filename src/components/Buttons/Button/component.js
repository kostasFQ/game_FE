import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, title, ...rest }) => <button onClick={onClick} {...rest}>{title}</button>;

Button.defaultProps = {
  onClick: () => { },
};

Button.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired
}

export default Button;