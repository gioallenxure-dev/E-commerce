import { Link } from 'react-router-dom';
import Breadcrumb from '../ui/Breadcrumb';

const NotFoundPage = () => {
  return (
    <section>
      <Breadcrumb customPath='/404-error' />

      <div className='flex flex-col items-center gap-10 mt-20 mb-60 px-4 text-center'>
        <h1 className='font-inter text-5xl font-medium tracking-wide md:text-9xl mb-6'>
          404 Not Found
        </h1>
        <p className='text-sm md:text-lg'>
          Your visited page not found. You may go home page.
        </p>

        <Link
          to='/'
          className='py-4 px-10 bg-primary text-white rounded-md mt-4'
        >
          Back to home page
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
