import Button from '../ui/Button';
import productsData from '../util/ProductsData';
import ProductBox from '../ui/ProductBox';

const WishlistPage = () => {
  return (
    <main className='wrapper py-20 px-4 md:px-0'>
      <div className='flex justify-between items-center'>
        <h1 className='font-inter   text-lg md:text-2xl'>Wishlist (4)</h1>
        <Button text='Move All To Bag' variant='outline' />
      </div>
      <div className=' grid grid-cols-1 sm:grid-cols-2 mt-10 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {productsData.slice(0, 4).map((product, index) => (
          <div key={index}>
            <ProductBox {...product} showDiscount={index === 0} />
          </div>
        ))}
      </div>
      <div className='mt-10 flex justify-between items-center'>
        <div className='flex items-center text-lg'>
          <span className='w-[20px] h-[40px] bg-primary rounded text-primary'>
            .
          </span>
          <h1 className='text-lg px-3'>Just For You</h1>
        </div>
        <Button text='See All' variant='outline' />
      </div>

      <div className=' grid grid-cols-1 sm:grid-cols-2 my-10 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {productsData.slice(0, 4).map((product, index) => (
          <div key={index}>
            <ProductBox
              {...product}
              showDiscount={index === 0}
              isNew={index === 2}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default WishlistPage;
