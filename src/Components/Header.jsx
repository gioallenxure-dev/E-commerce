import { useState } from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link
import { Search, Heart, ShoppingCart, Menu, X } from 'lucide-react'; // Import Menu/X icons
import AnnouncementBar from './AnnouncementBar';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

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
          {/* Search Bar (Hidden on small mobile to save space, optional) */}
          <div className='hidden md:flex justify-between items-center bg-[#F5F5F5] rounded-md px-3 py-2'>
            <input
              type='text'
              className='bg-transparent outline-none text-sm w-48'
              placeholder='What are you looking for?'
            />
            <Search />
          </div>

          {/* Icons */}
          <div className='flex gap-4 items-center'>
            <button>
              <Heart size={24} />
            </button>
            <button>
              <ShoppingCart size={24} />
            </button>

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
          {/* Mobile Search */}
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
