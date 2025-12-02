import { useState, useContext, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search,
  Heart,
  ShoppingCart,
  Menu,
  X,
  User,
  ShoppingBag,
  XCircle,
  Star,
  LogOut,
} from 'lucide-react';
import AnnouncementBar from './AnnouncementBar';
import { AuthContext } from '../hooks/AuthContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const userMenuRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
    navigate('/');
  };

  const userMenuItems = [
    { icon: User, text: 'Manage My Account', path: '/my-account' },
    { icon: ShoppingBag, text: 'My Order', path: '/cart' },
    { icon: XCircle, text: 'My Cancellations', path: '/cart' },
    { icon: Star, text: 'My Reviews', path: '/cart' },
  ];

  const navItems = [
    { id: 1, text: 'Home', path: '/' },
    { id: 2, text: 'Contact', path: '/contact' },
    { id: 3, text: 'About', path: '/about' },
    { id: 4, text: 'Sign Up', path: '/sign-up' },
  ];

  return (
    <section className='w-full border-b border-gray-300'>
      <AnnouncementBar />
      <header className='wrapper flex justify-between items-center pt-12 pb-7 px-4 md:px-0 '>
        {/* Logo */}
        <Link to='/' className='font-inter text-2xl md:text-3xl font-bold'>
          Exclusive
        </Link>

        {/* Desktop Navigation (Hidden on Mobile) */}
        <nav className='hidden md:flex'>
          <ul className='flex gap-13'>
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className=' relative group overflow-hidden pb-1'
                >
                  {item.text}
                  <span className='absolute bottom-0 left-0 w-full h-[3px] bg-[#838181] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out origin-center'></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <div className='flex items-center gap-4'>
          <div className='hidden md:flex justify-between items-center bg-[#F5F5F5] rounded-md px-3 py-2'>
            <input
              type='text'
              className='bg-transparent outline-none text-sm w-48'
              placeholder='What are you looking for?'
            />
            <Search />
          </div>

          <div className='flex gap-4 items-center'>
            <Link to='/wishlist'>
              <Heart size={24} />
            </Link>
            <Link to='/cart'>
              <ShoppingCart size={24} />
            </Link>

            {/* User icon with dropdown - only shown when logged in */}
            {isLoggedIn && (
              <div className='relative' ref={userMenuRef}>
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className={`rounded-full p-1.5 transition-colors duration-300 cursor-pointer ${
                    isUserMenuOpen
                      ? 'bg-primary text-white'
                      : 'hover:bg-primary hover:text-white'
                  }`}
                >
                  <User size={24} />
                </button>

                {/* Dropdown Menu */}
                {isUserMenuOpen && (
                  <div className='absolute right-0 mt-2 w-56 bg-gradient-to-br from-gray-800/90 via-gray-700/90 to-gray-600/80 backdrop-blur-md rounded-lg shadow-xl py-2 z-50'>
                    {userMenuItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        onClick={() => setIsUserMenuOpen(false)}
                        className='flex items-center gap-3 px-4 py-3 text-white hover:bg-white/20 transition-colors'
                      >
                        <item.icon size={20} strokeWidth={1.5} />
                        <span className='text-sm'>{item.text}</span>
                      </Link>
                    ))}
                    <button
                      onClick={handleLogout}
                      className='flex items-center gap-3 px-4 py-3 text-white hover:bg-white/20 transition-colors w-full cursor-pointer'
                    >
                      <LogOut size={20} strokeWidth={1.5} />
                      <span className='text-sm'>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Hamburger Button (Visible on Mobile Only) */}
            <button className='md:hidden' onClick={handleToggle}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown  */}
      {isOpen && (
        <div className='md:hidden bg-white border-t border-gray-200 px-4 py-4 absolute w-full z-50'>
          <div className='flex items-center bg-[#F5F5F5] rounded-md px-3 py-2 mb-4'>
            <input
              type='text'
              className='bg-transparent outline-none text-sm w-full'
              placeholder='What are you looking for?'
            />
            <Search />
          </div>

          <ul className='flex flex-col gap-7'>
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className='block text-lg font-medium'
                  onClick={() => setIsOpen(false)}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Header;
