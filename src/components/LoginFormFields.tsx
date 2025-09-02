import React, { type SetStateAction } from 'react';
import TextInput from './TextInput';
import PasswordInput from './PasswordInput';

interface LoginFormFieldsProps{
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

function LoginFormFields({ username, setUsername, password, setPassword }: LoginFormFieldsProps) {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm mb-6">
      <TextInput
        className="border border-gray-500 px-4 py-2 rounded-lg"
        value={username}
        setValue={setUsername}
        placeholder="Username"
      />

      <PasswordInput
        className="border border-gray-500 px-4 py-2 rounded-lg"
        value={password}
        setValue={setPassword}
      />
    </div>

  );
}

export default LoginFormFields;
