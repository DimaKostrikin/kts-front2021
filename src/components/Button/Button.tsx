import React from 'react';
import './Button.css';

type ButtonProps = {
  children?: JSX.Element;
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled} className="custom-button">
      {children}
    </button>
  );
};

export default Button;
