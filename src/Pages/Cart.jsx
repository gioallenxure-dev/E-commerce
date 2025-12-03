import Breadcrumb from '../ui/Breadcrumb';
import Button from '../ui/Button';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

{
  /*Cart Item component*/
}
function cartItem({ image, name, price, quantity, isHide }) {
  return (
    <div className='grid grid-cols-4 items-center bg-white shadow-lg shadow-gray-300 py-4 rounded-sm my-5 text-sm md:text-base'>
      <div className='flex flex-col md:flex-row items-center justify-center'>
        <div className='mr-4 relative'>
          <img
            src={image}
            alt='Product Image'
            className='  w-16 h-16 object-cover'
          />
          <X
            className={
              isHide
                ? 'absolute top-0 left-0 cursor-pointer p-1 rounded-full bg-primary text-white'
                : 'hidden'
            }
          />
        </div>
        <span>{name}</span>
      </div>
      <span className='text-center'>${price}</span>
      <div className='flex justify-center'>
        <input
          type='number'
          className='border-1 border-gray-500 w-15 py-3  text-center rounded-lg'
          defaultValue={quantity}
        />
      </div>
      <span className='text-center'>${price * quantity}</span>
    </div>
  );
}

const Cart = () => {
  const navigate = useNavigate();

  {
    /*cart information*/
  }
  const productsInCart = [
    {
      name: 'LCD Monitor',
      image:
        'https://images.philips.com/is/image/philipsconsumer/992bbaa06de245549bb9b2ac00df3474?wid=700&hei=700&$pnglarge$',
      price: 99.99,
      quantity: 2,
      isHide: true,
    },
    {
      name: 'H1 Gamepad',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShiIGKUXby0UZ76ajIDW-HR9iHxlSlHq2ndA&s',
      price: 199.99,
      quantity: 1,
    },
    {
      name: 'Funko Pop',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnegWw1Ab-ETMCKFbf3qtPlSRt1XIGEfqO7w&s',
      price: 199.99,
      quantity: 1,
    },
  ];

  return (
    <main>
      <Breadcrumb />
      {/*cart header*/}
      <section className='wrapper px-4 w-full md:px-0'>
        <div className='grid grid-cols-4 bg-white shadow-lg shadow-gray-300 py-4 font-medium rounded-sm my-5 text-sm md:text-base text-center'>
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Subtotal</span>
        </div>
        {/*cart items*/}
        {productsInCart.map((product, index) => (
          <div key={index}>{cartItem(product)}</div>
        ))}

        {/*two buttons below cart items*/}
        <div className='flex flex-row gap-5 justify-between my-10'>
          <Button text='Return To Shop' variant='outline' />
          <Button text='Update Cart' variant='outline' />
        </div>

        {/*Left side column*/}
        <div className='flex flex-col justify-between mt-20 mb-40 gap-5 md:flex-row'>
          <div>
            <div className='flex flex-row gap-4'>
              <input
                type='text'
                placeholder='Coupon Code'
                className='border-1 border-gray-600 pl-5 rounded-sm w-70'
              />
              <Button text='Apply Coupon' />
            </div>
          </div>

          {/*right side column*/}
          <div className='w-full md:max-w-[500px] border-1 rounded-lg'>
            <div className='flex flex-col p-8 gap-3  '>
              <h1 className='font-inter font-medium text-2xl my-2'>
                Cart Total
              </h1>
              <p flex className='flex justify-between my-2 border-b-1 pb-4'>
                <span>Subtotal:</span>
                <span>$1750</span>
              </p>
              <p flex className='flex justify-between my-2 border-b-1 pb-4 '>
                <span>Shipping:</span>
                <span>Free</span>
              </p>
              <p flex className='flex justify-between my-2 '>
                <span>Total:</span>
                <span>$1750</span>
              </p>
            </div>
            <div className='flex justify-center mb-4'>
              <Button
                text='Proceed to Checkout'
                onClick={() => navigate('/checkout')}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
