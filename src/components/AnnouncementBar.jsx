import { ChevronDown } from 'lucide-react';

const AnnouncementBar = () => {
  return (
    <section
      className='w-full h-[48px] bg-black text-white flex
     items-center justify-center text-[12px] md:text-[14px] px-4'
    >
      <div className='wrapper relative w-full text-center flex items-center justify-center'>
        <p className='mr-6 md:mr-0'>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{' '}
          <a href='#' className='underline font-bold pl-1 whitespace-nowrap'>
            ShopNow
          </a>
        </p>

        <button className='hidden md:flex gap-1 cursor-pointer items-center justify-center absolute right-0 top-1/2 -translate-y-1/2'>
          English <ChevronDown size={20} />
        </button>

        <button className='flex md:hidden cursor-pointer items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 text-xl'>
          🇺🇸
        </button>
      </div>
    </section>
  );
};

export default AnnouncementBar;
