import { Heart, Eye, Star } from 'lucide-react';
import { useState, useContext } from 'react';
import { CartContext } from '../hooks/CartContext';
import { Link } from 'react-router-dom';
const ProductBox = ({
  id,
  imgURLs,
  productName,
  productPrice,
  productPrevPrice,
  starRating,
  stockQuantity,
  showDiscount = false,
  discountPercentage,
  isNew = false,
  colors = [],
}) => {
  const { addToCart, toggleWishlist, isInWishlist } = useContext(CartContext);
  const [selectedColor, setSelectedColor] = useState(colors[0] || null);
  const isFavorited = isInWishlist(id);

  const starArray = Array.from({ length: 5 }, (_, index) => index < starRating);

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist({
      id,
      imgURLs,
      productName,
      productPrice,
      productPrevPrice,
      starRating,
      stockQuantity,
    });
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id,
      imgURLs,
      productName,
      productPrice,
      productPrevPrice,
    });
  };

  return (
    <Link to={`/product-details/${id}`} className='group'>
      <div className='flex flex-col gap-2 group'>
        {/*Image placeholder*/}
        <div className='relative w-full h-70 bg-gray-100 mb-2 flex items-center justify-center overflow-hidden'>
          {/*Top right controls */}
          <div className='absolute top-3 right-3 flex flex-col gap-2 z-10'>
            <div
              className={`rounded-full p-2 cursor-pointer transition-colors duration-300 ${
                isFavorited ? 'bg-primary text-white' : 'bg-white'
              }`}
              onClick={toggleFavorite}
            >
              <Heart size={18} color={isFavorited ? 'white' : 'black'} />
            </div>
            <div className='bg-white rounded-full p-2 cursor-pointer'>
              <Eye size={18} color='black' />
            </div>
          </div>

          {/* Top left badge - NEW or Discount */}
          <div className='absolute top-3 left-3 z-10'>
            {isNew && !showDiscount && (
              <span className='bg-secondary text-white rounded-md px-3 py-1 text-xs font-medium'>
                NEW
              </span>
            )}
            {showDiscount && (
              <span className='bg-primary text-white rounded-md px-3 py-1 text-xs font-medium'>
                -{discountPercentage}%
              </span>
            )}
          </div>

          <img
            src={imgURLs && imgURLs[0] ? imgURLs[0] : ''}
            alt={productName || 'Product Image'}
            className='w-full h-full object-cover'
          />

          {/* Add to Cart button - appears on hover */}
          <button
            className='absolute bottom-0 left-0 right-0 bg-black text-white py-3 font-medium text-center 
                     translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out cursor-pointer'
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
        </div>

        {/*Product title*/}
        <h1 className='text-lg font-semibold'>
          {productName || 'Default Product'}
        </h1>

        {/*Product price and rating on same row when colors exist */}
        <div className='flex flex-col   gap-2'>
          <div className='text-red-500 font-medium'>
            ${productPrice || '0.00'}
            <span className='text-gray-500 line-through pl-2 font-light '>
              ${productPrevPrice || '0.00'}
            </span>{' '}
          </div>
          {/* Rating inline */}
          <div className='flex items-center gap-1'>
            {starArray.map((isFilled, index) => (
              <Star
                key={index}
                size={20}
                color={isFilled ? '#FFAD33' : '#808080'}
                fill={isFilled ? '#FFAD33' : 'none'}
                strokeWidth={1.5}
              />
            ))}
            <span className='text-gray-500 text-sm pl-2'>
              ({stockQuantity || 0})
            </span>
          </div>
        </div>

        {/* Color selector - only shown if colors array is provided */}
        {colors.length > 0 && (
          <div className='flex items-center gap-2 mt-1'>
            {colors.map((color, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedColor(color);
                }}
                className={`w-5 h-5 rounded-full cursor-pointer transition-all ${
                  selectedColor === color
                    ? 'ring-2 ring-offset-2 ring-black'
                    : ''
                }`}
                style={{ backgroundColor: color }}
                aria-label={`Select ${color} color`}
              />
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductBox;
