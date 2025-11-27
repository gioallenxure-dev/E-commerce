import {
  SendHorizontal,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Copyright,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import QrCode from '../assets/QrCode.png';
import GooglePlay from '../assets/GooglePlay.png';
import AppStore from '../assets/AppStore.png';

const Footer = () => {
  const accountLinks = [
    { id: 1, text: 'My Account', path: '/my-account' },
    { id: 2, text: 'Login / Register', path: '/login' },
    { id: 3, text: 'Cart', path: '/cart' },
    { id: 4, text: 'Wishlist', path: '/wishlist' },
    { id: 4, text: 'Shop', path: '/' },
  ];
  const quickLinks = [
    { id: 1, text: 'Privacy Policy' },
    { id: 2, text: 'Terms Of Use' },
    { id: 3, text: 'FAQ' },
    { id: 4, text: 'Contract' },
  ];
  return (
    <footer className='relative bg-black text-white w-full '>
      <div className='wrapper grid grid-cols-1 md:grid-cols-5 gap-8 py-12 px-5 mt-10 mb-20'>
        {/*First Column*/}
        <div className='flex flex-col gap-6'>
          <Link to='/' className='font-inter text-2xl md:text-3xl font-bold'>
            Exclusive
          </Link>
          <h1 className='font-medium text-lg'>Subscribe</h1>
          <p className='font-light'>Get 10% off your first order</p>
          <div className='flex items-center border border-white p-2 rounded'>
            <input
              type='email'
              placeholder='Enter your email'
              className='w-full bg-transparent focus:outline-none placeholder:text-gray-400 text-white'
            />
            <SendHorizontal className='shrink-0 ml-2' />
          </div>
        </div>

        {/*Second Column*/}
        <div className='flex flex-col gap-6'>
          <h1 className='font-medium text-lg'>Support</h1>
          <p className='font-light'>
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className='font-light'>exclusive@gmail.com</p>
          <p className='font-light'>+88015-88888-9999</p>
        </div>

        {/*Third Column*/}
        <div className='flex flex-col gap-6'>
          <h1 className='font-medium text-lg'>Account</h1>
          <ul className='flex flex-col gap-6'>
            {accountLinks.map((item) => (
              <li key={item.id}>
                <Link to={item.path} className='font-light'>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/*Fourth Column*/}
        <div className='flex flex-col gap-6'>
          <h1 className='font-medium text-lg'>Quick Link</h1>
          <ul className='flex flex-col gap-6'>
            {quickLinks.map((item) => (
              <li key={item.id}>
                <a to={item.path} className='font-light cursor-pointer'>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className='flex flex-col gap-6'>
          <h1 className='font-medium text-lg'>Download App</h1>

          <div className='flex flex-col gap-2'>
            <p className='font-light text-xs text-gray-300'>
              Save $3 with App New User Only
            </p>

            {/* THIS is the "Same Div" that holds QR + Buttons side-by-side */}
            <div className='flex gap-2 items-center'>
              {/* Left Side: QR Code */}
              <div className='w-[80px] h-[80px] bg-white p-1'>
                <img
                  src={QrCode}
                  alt='QR Code'
                  className='w-full h-full object-contain'
                />
              </div>

              {/* Right Side: Stacked Buttons */}
              <div className='flex flex-col gap-2'>
                <img
                  src={GooglePlay}
                  alt='Google Play'
                  className='w-[110px] object-contain cursor-pointer'
                />
                <img
                  src={AppStore}
                  alt='App Store'
                  className='w-[110px] object-contain cursor-pointer'
                />
              </div>
            </div>
          </div>

          {/* Social Icons (Below the group) */}
          <div className='flex gap-6'>
            <Facebook
              size={24}
              className='hover:text-gray-400 cursor-pointer'
            />
            <Twitter size={24} className='hover:text-gray-400 cursor-pointer' />
            <Instagram
              size={24}
              className='hover:text-gray-400 cursor-pointer'
            />
            <Linkedin
              size={24}
              className='hover:text-gray-400 cursor-pointer'
            />
          </div>
        </div>
      </div>

      <div className='absolute bottom-0 py-5 w-full border-t border-gray-700 '>
        <p className='flex items-center justify-center gap-2 text-sm text-gray-600'>
          <Copyright size={15} />
          Copyright Rimel 2022. All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
