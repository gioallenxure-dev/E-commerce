import { useRef } from 'react';
import SectionTitle from '../ui/SectionTitle';
import SliderControls from '../ui/SliderControls';
import CategoryBox from '../ui/CategoryBox';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import {
  Smartphone,
  LaptopMinimal,
  Watch,
  Camera,
  Headphones,
  Gamepad,
  Monitor,
  Printer,
  Mic,
  Mouse,
} from 'lucide-react';

const categories = [
  { icon: Smartphone, label: 'Phones' },
  { icon: LaptopMinimal, label: 'Laptops' },
  { icon: Watch, label: 'Smartwatches' },
  { icon: Camera, label: 'Cameras' },
  { icon: Headphones, label: 'Headphones' },
  { icon: Gamepad, label: 'Gaming' },
  { icon: Monitor, label: 'Monitors' },
  { icon: Printer, label: 'Printers' },
  { icon: Mic, label: 'Microphones' },
  { icon: Mouse, label: 'Mice' },
];

const HomeCategorySection = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <section className='mb-20 flex flex-col gap-14'>
      {/* 1. Header and Controls: Aligned by 'wrapper' */}
      <div className='wrapper px-4 md:px-0 flex flex-col md:flex-row justify-between md:items-end gap-4 md:gap-0 mb-10'>
        <SectionTitle
          sectionCategory='Categories'
          sectionTitle='Browse By Category'
          className='mb-0'
        />
        <SliderControls onPrev={handlePrev} onNext={handleNext} />
      </div>

      {/* 2. Category Carousel: Aligned by 'wrapper' */}
      <div className='wrapper px-4 md:px-0'>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation]}
          slidesPerView={6}
          spaceBetween={30}
          className='mySwiper'
          breakpoints={{
            0: {
              slidesPerView: 'auto',
              spaceBetween: 20,
              style: { paddingLeft: '1rem', paddingRight: '1rem' },
            },

            768: {
              slidesPerView: 6,
              spaceBetween: 30,

              style: { paddingLeft: '0', paddingRight: '0' },
            },
          }}
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index} style={{ width: '100%' }}>
              <CategoryBox Icon={category.icon} label={category.label} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <span className='wrapper block  w-full border-b border-gray-500 mt-15'></span>
    </section>
  );
};

export default HomeCategorySection;
