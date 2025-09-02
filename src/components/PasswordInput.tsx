import React from 'react';

interface PasswordInputProps{
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
}

function PasswordInput({ value, setValue, className }: PasswordInputProps) {
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
