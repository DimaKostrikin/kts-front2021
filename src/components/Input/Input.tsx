import React from 'react';

import './Input.css';

type InputProps = {
  value: string;
  onChange: React.ChangeEventHandler;
  placeholder?: string;
  disabled?: boolean;
};

const Input = ({ value, placeholder, onChange, disabled }: InputProps) => {
  return (
    <input
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      type="text"
      className="custom-input"
      disabled={disabled}
    />
  );
};

export default Input;
