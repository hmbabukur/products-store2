import React from 'react';

interface TextInputProps{
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  className?: string;
}
function TextInput({ value, setValue, placeholder, className }: TextInputProps) {
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
