import { useState } from 'react';
import xmark from '../assets/xmark.png';

const Login = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthType = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-black text-white p-8 rounded-lg">
        <img src={xmark} width={24} className='float-right cursor-pointer' onClick={onClose} alt="" />
        <h2 className="text-2xl font-bold mb-4 text-center">{isLogin ? 'Login' : 'Register'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-1">
              Username:
            </label>
            <input type="text" id="username" name="username" className="bg-transparent rounded-lg w-60 border-2 border-white px-2 py-1 mt-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">
              Password:
            </label>
            <input type="password" id="password" name="password" className="bg-transparent rounded-lg w-60 border-2 border-white px-2 py-1 mt-2" />
          </div>
          {!isLogin && (
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">
                Email:
              </label>
              <input type="email" id="email" name="email" className="bg-transparent rounded-lg w-60 border-2 border-white px-2 py-1 mt-2" />
            </div>
          )}
          <div className='flex justify-between mt-6'>
            <button type="submit" className="bg-custom-red text-white px-4 py-2 rounded-lg w-5/12">
              {isLogin ? 'Sign In' : 'Register'}
            </button>
            <button onClick={toggleAuthType} type="button" className="bg-gray-500 text-white px-4 py-2 rounded-lg w-5/12">
              {isLogin ? 'Register' : 'Sign In'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
