import Breadcrumb from '../ui/Breadcrumb';
import Button from '../ui/Button';
import Banks from '../assets/Banks.png';

function InputDesign({ label, type }) {
  return (
    <div className='flex flex-col gap-3'>
      <label htmlFor={type} className='text-gray-500'>
        {label}
      </label>
      <input
        type={type}
        className='focus:outline-none focus:ring-1 focus:ring-gray-300 bg-gray-100 rounded-md p-3 w-full'
      />
    </div>
  );
}

const CheckOut = () => {
  return (
    <main>
      <Breadcrumb customPath='account/my-account/product/view-cart/checkout' />
      <section className='wrapper px-4 mb-60 md:px-0 '>
        <h1 className='font-inter font-medium text-3xl my-10'>
          Billing Details
        </h1>
        <section className='flex flex-col w-full md:flex-row '>
          {/*Left side column*/}
          <section className='flex flex-col gap-5 flex-1 px-0 md:pr-20'>
            <InputDesign label='First Name*' type='text' />
            <InputDesign label='Company Name' type='text' />
            <InputDesign label='Street Address*' type='text' />
            <InputDesign
              label='Apartment, floor, etc. (optional)'
              type='text'
            />
            <InputDesign label='Town/City*' type='text' />
            <InputDesign label='Phone Number*' type='text' />
            <InputDesign label='Email Address*' type='text' />
            <div className='flex flex-row gap-3 items-center'>
              <input type='checkbox' id='checkbox' />
              <label htmlFor='checkbox' className='text-sm'>
                Save this information for faster check-out next time
              </label>
            </div>
          </section>
          {/*Right side column*/}
          <section className='flex flex-col w-full md:w-1/2 mt-10 md:mt-0'>
            <div className='flex flex-col gap-5'>
              {/* Product Items */}
              <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                  <img
                    src='https://images.philips.com/is/image/philipsconsumer/992bbaa06de245549bb9b2ac00df3474?wid=700&hei=700&$pnglarge$'
                    alt='LCD Monitor'
                    className='w-16 h-16 object-cover'
                  />
                  <span className='text-sm'>LCD Monitor</span>
                </div>
                <span className='text-sm'>$650</span>
              </div>

              <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                  <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShiIGKUXby0UZ76ajIDW-HR9iHxlSlHq2ndA&s'
                    alt='H1 Gamepad'
                    className='w-16 h-16 object-cover'
                  />
                  <span className='text-sm'>H1 Gamepad</span>
                </div>
                <span className='text-sm'>$1100</span>
              </div>

              {/* Subtotal, Shipping, Total */}
              <div className='flex justify-between border-b pb-4 mt-4'>
                <span>Subtotal:</span>
                <span>$1750</span>
              </div>

              <div className='flex justify-between border-b pb-4'>
                <span>Shipping:</span>
                <span>Free</span>
              </div>

              <div className='flex justify-between'>
                <span>Total:</span>
                <span>$1750</span>
              </div>

              {/* Payment Options */}
              <div className='flex flex-col gap-4 mt-4'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-3'>
                    <input
                      type='radio'
                      id='bank'
                      name='payment'
                      className='w-5 h-5'
                    />
                    <label htmlFor='bank' className='text-sm'>
                      Bank
                    </label>
                  </div>
                  <img src={Banks} alt='Banks' className='h-6' />
                </div>

                <div className='flex items-center gap-3'>
                  <input
                    type='radio'
                    id='cod'
                    name='payment'
                    defaultChecked
                    className='w-5 h-5'
                  />
                  <label htmlFor='cod' className='text-sm'>
                    Cash on delivery
                  </label>
                </div>
              </div>

              {/* Coupon Code */}
              <div className='flex flex-row gap-4 mt-4'>
                <input
                  type='text'
                  placeholder='Coupon Code'
                  className='border border-gray-600 pl-5 rounded-sm flex-1 py-3'
                />
                <Button text='Apply Coupon' />
              </div>

              {/* Place Order Button */}
              <div className='mt-4'>
                <Button text='Place Order' />
              </div>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
};

export default CheckOut;
