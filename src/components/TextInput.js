import React from 'react';

function TextInput({ value, setValue, placeholder, className }) {
  return (
    <input
    className={className}
      type="text"
      placeholder={placeholder}
      value={value}
      required
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default TextInput;
