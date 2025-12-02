import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import productsData from '../util/ProductsData';
import ProductBox from '../ui/ProductBox';

const HomeBestSellerSection = () => {
  return (
    <section className='mb-20 flex flex-col gap-14'>
      {/* 1. Header and Controls: Aligned by 'wrapper' */}
      <div className='wrapper px-4 md:px-0 flex flex-col md:flex-row justify-between md:items-end gap-4 md:gap-0 mb-10'>
        <SectionTitle
          sectionCategory='This Month'
          sectionTitle='Best Selling Products'
          className='mb-0'
        />
        <Button text='View All' />
      </div>
      {/* 2. Product Grid: Aligned by 'wrapper' */}
      <div className='wrapper px-4 md:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {productsData.slice(0, 4).map((product, index) => (
          <div key={index}>
            <ProductBox {...product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeBestSellerSection;
