import SectionTitle from '../ui/SectionTitle';
import SliderControls from '../ui/SliderControls';
import productsData from '../util/ProductsData';
import ProductBox from '../ui/ProductBox';
import Button from '../ui/Button';

const HomeExploreSection = () => {
  return (
    <section className='mb-20 flex flex-col gap-14'>
      {/* 1. Header and Controls: Aligned by 'wrapper' */}
      <div className='wrapper px-4 md:px-0 flex flex-col md:flex-row justify-between md:items-end gap-4 md:gap-0 mb-10'>
        <SectionTitle
          sectionCategory='Our Products'
          sectionTitle='Explore Our Products'
          className='mb-0'
        />
        <SliderControls />
      </div>
      {/* 2. Product Grid: Aligned by 'wrapper' */}
      <div className='wrapper px-4 md:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {productsData.slice(0, 8).map((product, index) => (
          <div key={index}>
            <ProductBox
              {...product}
              // Show NEW badge and colors only on last 4 products (index 4-7)
              isNew={index >= 4 && index % 2 === 0}
              colors={index >= 4 ? ['#FF0000', '#DB4444'] : []}
            />
          </div>
        ))}
      </div>
      <div className='wrapper px-4 md:px-0 flex justify-center'>
        <Button text='View All Products' />
      </div>
    </section>
  );
};

export default HomeExploreSection;
