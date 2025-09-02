import React from 'react';
import TextInput from '../components/TextInput';
import PasswordInput from '../components/PasswordInput';

function LoginFormFields({ username, setUsername, password, setPassword }) {
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
