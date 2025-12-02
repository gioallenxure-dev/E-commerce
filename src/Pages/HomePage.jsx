import HomeFlashSalesSection from '../components/HomeFlashSalesSection';
import HeroSection from '../components/HomeHeroSection';
import HomeCategorySection from '../components/HomeCategorySection';
import HomeBestSellerSection from '../components/HomeBestSellerSection';
import HomeExploreSection from '../components/HomeExploreSection';
import HomePageBanner from '../assets/HomePageMiddleImg.png';
import HomeNewArrivalSection from '../components/HomeNewArrivalSection';
import ServicesSection from '../components/ServicesSection';

const HomePage = () => {
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
    </main>
  );
};

export default HomePage;
