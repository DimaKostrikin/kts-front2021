import React from 'react';

import './Input.css';

type InputProps = {
  value: string;
  onChange: React.ChangeEventHandler;
  placeholder?: string;
  disabled?: boolean;
};

const Input: React.FC<InputProps> = ({
  value,
  placeholder,
  onChange,
  disabled,
}) => {
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
