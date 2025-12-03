import HomeFlashSalesSection from '../components/HomeFlashSalesSection';
import HeroSection from '../components/HomeHeroSection';
import HomeCategorySection from '../components/HomeCategorySection';
import HomeBestSellerSection from '../components/HomeBestSellerSection';
import HomeExploreSection from '../components/HomeExploreSection';
import HomePageBanner from '../assets/HomePageMiddleImg.png';
import HomeNewArrivalSection from '../components/HomeNewArrivalSection';
import ServicesSection from '../components/ServicesSection';
import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const HomePage = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <main>
      <HeroSection />
      <HomeFlashSalesSection />
      <HomeCategorySection />
      <HomeBestSellerSection />
      <div className='wrapper w-full my-20'>
        <img
          src={HomePageBanner}
          alt='Speaker'
          className='object-fill w-full'
        />
      </div>
      <HomeExploreSection />
      <HomeNewArrivalSection />
      <ServicesSection />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className='cursor-pointer fixed bottom-8 right-8 w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-50'
          aria-label='Scroll to top'
        >
          <ArrowUp size={24} className='text-black' />
        </button>
      )}
    </main>
  );
};

export default HomePage;
