import Breadcrumb from '../ui/Breadcrumb';
import ProductsData from '../util/ProductsData';
import ProductBox from '../ui/ProductBox';
import SectionTitle from '../ui/SectionTitle';
import { useParams } from 'react-router-dom';
import { Star, Heart, Truck, RotateCcw, Plus, Minus } from 'lucide-react';
import { useState, useContext } from 'react';
import { CartContext } from '../hooks/CartContext';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const numericId = parseInt(id);
  const product = ProductsData.find((p) => p.id === numericId);
  const { toggleWishlist, isInWishlist } = useContext(CartContext);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(2);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(
    product?.sizeAvail?.[0] || 'M'
  );

  if (!product) {
    return (
      <main className='flex justify-center items-center h-screen text-2xl font-bold'>
        <p>Product not found.</p>
      </main>
    );
  }

  const mainImage = product.imgURLs[0];

  // Create 4 placeholder thumbnails
  const thumbnails = Array(4).fill(mainImage);

  // Star rating
  const starArray = Array.from(
    { length: 5 },
    (_, index) => index < Math.floor(product.starRating)
  );

  // Color options (using hex colors for display)
  const colorOptions = [
    { name: 'Black', hex: '#A0BCE0' },
    { name: 'Red', hex: '#E07575' },
  ];

  // Size options from product data
  const sizeOptions = product.sizeAvail || ['XS', 'S', 'M', 'L', 'XL'];

  // Check stock status
  const inStock = product.inStock !== false && product.stockQuantity > 0;
  const isFavorited = isInWishlist(product.id);

  const handleQuantityChange = (type) => {
    if (type === 'increment') {
      setQuantity((prev) => prev + 1);
    } else if (type === 'decrement' && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <main>
      <Breadcrumb customPath={`product-details/${product.productName}`} />

      <section className='wrapper px-4 md:px-0 flex flex-col lg:flex-row gap-8 lg:gap-25 my-5  '>
        {/* LEFT SIDE: Image Gallery */}
        <aside className='flex flex-col md:flex-row gap-4 lg:w-[900px]'>
          {/* Thumbnails - vertical on desktop, horizontal on mobile */}
          <div className='flex md:flex-col gap-4 order-2 md:order-1 overflow-x-auto md:overflow-visible'>
            {thumbnails.map((url, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 md:w-32 md:h-28 lg:w-40 lg:h-34.5 bg-gray-100 rounded-md shrink-0 
                           cursor-pointer transition-all ${
                             selectedImage === index
                               ? 'ring-2 ring-primary'
                               : 'hover:ring-2 hover:ring-gray-300'
                           }`}
              >
                <img
                  src={url}
                  alt={`Thumbnail ${index + 1}`}
                  className='w-full h-full object-cover'
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className='grow order-1 md:order-2 bg-gray-100 rounded-md h-[300px] md:h-[400px] lg:h-[600px] flex items-center justify-center'>
            <img
              src={mainImage}
              alt={product.productName}
              className='w-full h-full object-cover rounded-md'
            />
          </div>
        </aside>

        {/* RIGHT SIDE: Product Details */}
        <section className='lg:w-[500px] flex flex-col gap-6'>
          {/* Product Name */}
          <h1 className='text-2xl font-semibold'>{product.productName}</h1>

          {/* Rating & Stock */}
          <div className='flex items-center gap-4 flex-wrap'>
            <div className='flex items-center gap-2'>
              {starArray.map((isFilled, index) => (
                <Star
                  key={index}
                  size={20}
                  color={isFilled ? '#FFAD33' : '#808080'}
                  fill={isFilled ? '#FFAD33' : 'none'}
                  strokeWidth={1.5}
                />
              ))}
              <span className='text-gray-500 text-sm'>
                ({product.numWhoRated || 150} Reviews)
              </span>
            </div>
            <span className='text-gray-300'>|</span>
            <span
              className={`text-sm font-medium ${
                inStock ? 'text-secondary' : 'text-primary'
              }`}
            >
              {inStock ? 'In Stock' : 'No Stock'}
            </span>
          </div>

          {/* Price */}
          <div className='text-2xl font-normal'>${product.productPrice}</div>

          {/* Description */}
          <p className='text-sm leading-relaxed border-b border-gray-300 pb-6'>
            {product.productDescription ||
              'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.'}
          </p>

          {/* Colors */}
          <div className='flex items-center gap-6'>
            <span className='text-lg font-normal'>Colours:</span>
            <div className='flex items-center gap-2'>
              {colorOptions.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(index)}
                  className={`w-6 h-6 rounded-full cursor-pointer transition-all ${
                    selectedColor === index
                      ? 'ring-2 ring-offset-2 ring-black'
                      : 'hover:ring-2 hover:ring-offset-2 hover:ring-gray-400'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  aria-label={`Select ${color.name} color`}
                />
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className='flex items-center gap-6'>
            <span className='text-lg font-normal'>Size:</span>
            <div className='flex items-center gap-4'>
              {sizeOptions.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={` cursor-pointer w-8 h-8 rounded-md border transition-all text-sm font-medium  ${
                    selectedSize === size
                      ? 'bg-primary text-white border-primary'
                      : 'border-gray-300 hover:border-primary'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Buy Button */}
          <div className='flex items-center gap-2 sm:gap-4 flex-wrap'>
            {/* Quantity Selector */}
            <div className='flex border-2 border-gray-300 rounded-md overflow-hidden'>
              <button
                onClick={() => handleQuantityChange('decrement')}
                className='cursor-pointer flex items-center justify-center px-2 sm:px-3 py-2.5 hover:bg-primary hover:text-white transition-colors border-r-2 border-gray-300'
              >
                <Minus size={18} />
              </button>
              <span className='flex items-center px-4 sm:px-8 py-2.5 font-medium text-base sm:text-lg'>
                {quantity}
              </span>
              <button
                onClick={() => handleQuantityChange('increment')}
                className='cursor-pointer flex items-center justify-center px-2 sm:px-3 py-2.5 hover:bg-primary hover:text-white transition-colors border-l-2 border-gray-300'
              >
                <Plus size={18} />
              </button>
            </div>

            {/* Buy Now Button */}
            <button className='cursor-pointer bg-primary text-white px-6 sm:px-12 py-2.5 rounded-md font-medium hover:bg-red-600 transition-colors grow sm:grow-0'>
              Buy Now
            </button>

            {/* Wishlist Button */}
            <button
              onClick={() => toggleWishlist(product)}
              className={`cursor-pointer border-2 rounded-md p-2 transition-colors shrink-0 ${
                isFavorited
                  ? 'bg-primary border-primary'
                  : 'border-gray-300 hover:border-primary'
              }`}
            >
              <Heart
                size={22}
                color={isFavorited ? 'white' : 'black'}
                fill={isFavorited ? 'white' : 'none'}
              />
            </button>
          </div>

          {/* Delivery Info */}
          <div className='flex flex-col border-2 border-gray-300 rounded-md'>
            {/* Free Delivery */}
            <div className='flex items-center gap-4 p-4 border-b border-gray-300'>
              <Truck size={40} />
              <div className='flex flex-col'>
                <h3 className='font-medium'>Free Delivery</h3>
                <p className='text-xs underline'>
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>

            {/* Return Delivery */}
            <div className='flex items-center gap-4 p-4'>
              <RotateCcw size={40} />
              <div className='flex flex-col'>
                <h3 className='font-medium'>Return Delivery</h3>
                <p className='text-xs'>
                  Free 30 Days Delivery Returns.{' '}
                  <span className='underline'>Details</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className='wrapper my-30 px-4 md:px-0'>
        <SectionTitle sectionCategory='Related Item' />
        <div className=' grid grid-cols-1 sm:grid-cols-2 mt-10 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {ProductsData.slice(0, 4).map((product, index) => (
            <div key={index}>
              <ProductBox {...product} showDiscount={index <= 2} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProductDetailsPage;
