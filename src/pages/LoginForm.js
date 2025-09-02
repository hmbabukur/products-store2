import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import LoginFormFields from '../components/LoginFormFields';
import LoginButtons from '../components/LoginButtons';

function LoginForm() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
    navigate('/');
  };
  
  const handleCancel = () => {
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center bg-gray-200 w-[90%] max-w-lg mx-auto rounded-lg p-8 shadow-md mt-20">
      <h2 className='font-bold text-2xl mb-10'>Login</h2>
      <LoginFormFields
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
      <LoginButtons onSubmit={handleSubmit} onCancel={handleCancel} />
    </form>
  );
}

export default LoginForm;
