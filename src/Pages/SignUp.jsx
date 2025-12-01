import { Link } from 'react-router-dom';
import AuthImg from '../assets/AuthImg.png';
import Google from '../assets/Google.png';
import Inputs from '../ui/Inputs';

const SignUp = () => {
  return (
    <section className='flex flex-col mt-20 mb-60 md:flex-row '>
      <div className='hidden md:flex  md:w-[50%] bg-[#CBE4E8]  h-[800px] overflow-hidden'>
        <img src={AuthImg} alt='Phone with Cart' className='object-contain' />
      </div>

      <div className='flex flex-col justify-center w-full md:w-[41%] px-8 md:pl-50 gap-8'>
        <div className='flex flex-col gap-5'>
          <h1 className='font-inter text-4xl font-medium tracking-wide md:text-5xl'>
            Create an account
          </h1>
          <p className='text-gray-600'>Enter your details below</p>
        </div>

        <form className='flex flex-col gap-6 w-full'>
          <Inputs type='text' placeholder='Name' />
          <Inputs type='text' placeholder='Email or Phone Number' />
          <Inputs type='password' placeholder='Password' />

          <div className='flex flex-col gap-4 mt-4'>
            <button
              type='submit'
              className='cursor-pointer bg-primary  hover:bg-[#C03939] transition-all duration-200 py-4 text-white font-medium rounded-md w-full'
            >
              Create Account
            </button>

            <button
              type='button'
              className=' cursor-pointer flex items-center justify-center gap-3 py-4 border border-gray-300 rounded-md w-full hover:bg-gray-50 transition-all'
            >
              <img src={Google} alt='Google logo' className='w-6 h-6' />
              <span>Sign up with Google</span>
            </button>
          </div>
        </form>

        <div className='flex justify-center items-center gap-2 text-gray-600'>
          <p>Already have account?</p>
          <Link
            to='/login'
            className='font-medium text-gray-800 underline underline-offset-4 decoration-gray-400 hover:text-black'
          >
            Log in
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
