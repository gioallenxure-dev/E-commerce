import { useRef } from 'react';
import SectionTitle from '../ui/SectionTitle';
import SliderControls from '../ui/SliderControls';
import CountdownTimer from '../ui/CountdownTimer';
import ProductBox from '../ui/ProductBox';
import Button from '../ui/Button';
import productsData from '../util/ProductsData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const HomeFlashSalesSection = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <section className='mb-30  '>
      {/* Flash Sale Heading - aligned with wrapper */}
      <div className='wrapper px-4 md:px-0 flex flex-col md:flex-row justify-between md:items-end gap-4 md:gap-0 mb-10'>
        <div className='flex flex-col md:flex-row md:items-end gap-4 md:gap-16'>
          <SectionTitle
            sectionCategory="Today's"
            sectionTitle='Flash Sales'
            className='mb-0'
          />
          <CountdownTimer />
        </div>
        <SliderControls onPrev={handlePrev} onNext={handleNext} />
      </div>

      {/* Flash Sale Product Carousel - left aligned with wrapper, overflows right */}
      <div className='flex flex-col gap-14'>
        <div className='overflow-hidden'>
          <div className='px-4 md:px-0'>
            <div className='md:ml-[max(0px,calc((100vw-1500px)/2))]'>
              <Swiper
                modules={[Navigation]}
                slidesPerView={'auto'}
                spaceBetween={30}
                className='overflow-visible!'
                onSwiper={(swiper) => (swiperRef.current = swiper)}
              >
                {productsData.map((product, index) => (
                  <SwiperSlide key={index} style={{ width: '270px' }}>
                    <ProductBox {...product} showDiscount={true} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {/* View All Products button - aligned with wrapper */}
        <div className='wrapper px-4 md:px-0 flex justify-center'>
          <Button text='View All Products' />
        </div>
      </div>

      <span className='wrapper block  w-full border-b border-gray-500 mt-20'></span>
    </section>
  );
};

export default HomeFlashSalesSection;
