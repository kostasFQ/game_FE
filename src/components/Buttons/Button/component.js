import React from 'react';

const Button = ({ onClick, title, ...rest }) => (
  <button onClick={onClick} { ...rest }>{ title }</button>
);

export default Button;