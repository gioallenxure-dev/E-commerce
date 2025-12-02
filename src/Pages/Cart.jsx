import Breadcrumb from '../ui/Breadcrumb';

const Cart = () => {
  return (
    <main>
      <Breadcrumb />
      <section className='wrapper px-4 w-full md:px-0'>
        <div className='flex justify-around bg-white shadow-lg shadow-gray-300 py-5 font-medium  rounded-sm'>
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Subtotal</span>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </section>
    </main>
  );
};

export default Cart;
