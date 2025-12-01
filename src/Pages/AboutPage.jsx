import { Twitter, Instagram, Linkedin } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Breadcrumb from '../ui/Breadcrumb';
import ServicesSection from '../components/ServicesSection';
import AboutAnalyticsSection from '../components/AboutAnalyticsSection';
import AboutImg from '../assets/AboutImg.png';
import Profile1 from '../assets/Profile1.png';
import Profile2 from '../assets/Profile2.png';
import Profile3 from '../assets/Profile3.png';

import 'swiper/css';
import 'swiper/css/pagination';

const customSwiperStyles = `
  .swiper {
    padding-bottom: 100px !important;
  }

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

function ProfileCard({ imgSrc, name, role }) {
  return (
    <div className='flex flex-col w-full '>
      <div className='bg-[#F5F5F5] rounded-lg pt-10 px-4 flex justify-center items-end h-[430px] md:h-[570px] mb-6'>
        <img src={imgSrc} alt={name} className='h-full object-contain' />
      </div>

      <div className='flex flex-col gap-2'>
        <h1 className='font-inter font-medium text-3xl'>{name}</h1>
        <p className='text-base text-gray-600'>{role}</p>

        <div className='flex gap-4 mt-2'>
          <Twitter className='w-5 h-5 hover:text-primary cursor-pointer transition-colors' />
          <Instagram className='w-5 h-5 hover:text-primary cursor-pointer transition-colors' />
          <Linkedin className='w-5 h-5 hover:text-primary cursor-pointer transition-colors' />
        </div>
      </div>
    </div>
  );
}

const AboutPage = () => {
  const teamMembers = [
    { id: 1, name: 'Tom Cruise', role: 'Founder & Chairman', img: Profile1 },
    { id: 2, name: 'Emma Watson', role: 'Managing Director', img: Profile2 },
    { id: 3, name: 'Will Smith', role: 'Product Designer', img: Profile3 },

    { id: 4, name: 'Tom Cruise', role: 'Founder & Chairman', img: Profile1 },
    { id: 5, name: 'Emma Watson', role: 'Managing Director', img: Profile2 },
  ];
  return (
    <main className='px-4 md:px-0'>
      <style>{customSwiperStyles}</style>
      <Breadcrumb />

      {/*Our Story section*/}
      <section className='relative w-full  mb-40 md:mb-60 overflow-hidden'>
        <div className='wrapper px-4 md:px-0 flex items-center z-10 relative md:min-h-[800px]'>
          <div className='w-full md:w-1/2 py-12 md:py-0 md:pr-25 bg-white md:bg-transparent rounded-lg md:rounded-none'>
            <h1 className='text-4xl md:text-6xl font-inter tracking-wide font-medium mb-8'>
              Our Story
            </h1>
            <p className=' text-lg leading-relaxed mb-6'>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p className='text-lg leading-relaxed'>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>

          <div className='hidden md:block w-1/2 h-full'></div>
        </div>

        <div className='w-full h-[400px] md:absolute md:top-0 md:right-0 md:h-full md:w-1/2 z-0'>
          <img
            src={AboutImg}
            alt='Shopping women'
            className='w-full h-full object-cover'
          />
        </div>
      </section>

      {/*Analytics Section*/}
      <AboutAnalyticsSection />

      {/*Profile Section*/}
      <section className='wrapper mb-40 md:mb-40'>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className='pb-20'
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <ProfileCard
                imgSrc={member.img}
                name={member.name}
                role={member.role}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/*Service offer*/}
      <ServicesSection />
    </main>
  );
};

export default AboutPage;
