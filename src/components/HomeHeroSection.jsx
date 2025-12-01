import { ChevronRight } from 'lucide-react';
import Banner from '../assets/Banner.png';
import Banner2 from '../assets/Banner2.png';
import Banner3 from '../assets/Banner3.png';
import Banner4 from '../assets/Banner4.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const customSwiperStyles = `
  .swiper-pagination {
    bottom: 10px !important;  
    top: auto !important;
    width: 100% !important;
  }
 
  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background-color: #808080;
    opacity: 0.3;
    margin: 0 6px !important;
  }
  
  .swiper-pagination-bullet-active {
    background-color: #DB4444; 
    opacity: 1;
    border: 2px solid white;
    outline: 1px solid #808080; 
  }
`;

const HomeHeroSection = () => {
  const imgURLs = [Banner, Banner2, Banner3, Banner4];

  return (
    <section className='wrapper flex px-4 mb-40 md:px-0'>
      <style>{customSwiperStyles}</style>

      <section className='hidden md:block w-1/5 border-r border-gray-400 mr-10'>
        <nav className='w-full mt-10'>
          <ul className='flex flex-col gap-4 w-full pr-5 [&_li]:cursor-pointer [&_li]:hover:border-b'>
            <li className='flex justify-between items-center '>
              Woman's Fashion <ChevronRight />
            </li>
            <li className='flex justify-between items-center'>
              Men's Fashion <ChevronRight />
            </li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby's & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Pets</li>
          </ul>
        </nav>
      </section>

      <section className='w-full md:w-4/5 mt-10 '>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          className='w-full h-[200px] md:h-auto bg-black'
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {imgURLs.map((url, index) => (
            <SwiperSlide key={index}>
              <img
                src={url}
                alt={`Banner ${index + 1}`}
                className='w-full h-full object-contain'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
};

export default HomeHeroSection;
