import { AuthContext } from '../hooks/AuthContext';
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthImg from '../assets/AuthImg.png';
import Inputs from '../ui/Inputs';

const Login = () => {
  const { isLoggedIn, login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username && password) {
      login();
      navigate('/');
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <section className='flex flex-col mt-20 mb-60 md:flex-row '>
      <div className='hidden md:flex  md:w-[50%] bg-[#CBE4E8]  h-[800px] overflow-hidden'>
        <img src={AuthImg} alt='Phone with Cart' className='object-contain' />
      </div>

      <div className='flex flex-col justify-center w-full md:w-[41%] px-8 md:pl-50 gap-8'>
        <div className='flex flex-col gap-5'>
          <h1 className='font-inter text-4xl font-medium tracking-wide md:text-5xl'>
            Log in to Exclusive
          </h1>
          <p className='text-gray-600'>Enter your details below</p>
        </div>

        <form className='flex flex-col gap-6 w-full' onSubmit={handleSubmit}>
          <Inputs
            type='text'
            placeholder='Email or Phone Number'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Inputs
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className='flex flex-row gap-4 justify-between items-center mt-4'>
            <button
              type='submit'
              className='cursor-pointer bg-primary  hover:bg-[#C03939] px-15 py-4 text-white font-medium rounded-md '
            >
              Log In
            </button>

            <a href='#' className='text-primary'>
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
