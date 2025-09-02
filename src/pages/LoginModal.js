import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import LoginFormFields from '../components/LoginFormFields';
import LoginButtons from '../components/LoginButtons';

function LoginModal({ isOpen, onClose, onLoginSuccess }) {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
    onClose();
    onLoginSuccess();
    navigate('/checkout');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 w-[90%] max-w-md rounded-lg p-8 shadow-xl"
      >
        <h2 className="font-bold text-2xl text-center mb-8">Login</h2>

        <LoginFormFields
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
        />
        <LoginButtons onSubmit={handleSubmit} onCancel={onClose} />
      </form>
    </div>
  );
}

export default LoginModal;
