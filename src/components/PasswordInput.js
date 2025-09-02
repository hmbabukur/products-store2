
import React from 'react';

function PasswordInput({ value, setValue, className }) {
  return (
    <input
      className={className}
      type="password"
      placeholder="Password"
      value={value}
      required
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default PasswordInput;
