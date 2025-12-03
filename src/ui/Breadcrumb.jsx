import { Link, useLocation } from 'react-router-dom';

const pathNameMap = {
  contact: 'Contact',
  about: 'About',
  cart: 'Cart',
  'product-details': 'Product',
  checkout: 'CheckOut',
  wishlist: 'Wishlist',
  'my-account': 'My Account',
  'view-cart': 'View Cart',
};

const formatPathSegment = (segment) => {
  if (pathNameMap[segment]) {
    return pathNameMap[segment];
  }

  return segment
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const Breadcrumb = ({ customPath }) => {
  const location = useLocation();

  const pathToUse = customPath || location.pathname;

  const pathSegments = pathToUse.split('/').filter((segment) => segment);

  const breadcrumbItems = pathSegments.map((segment, index) => {
    const path = '/' + pathSegments.slice(0, index + 1).join('/');
    const isLast = index === pathSegments.length - 1;
    const displayName = formatPathSegment(segment);

    return {
      path,
      displayName,
      isLast,
    };
  });

  return (
    <nav className='wrapper py-20 px-4 md:px-0'>
      <ol className='flex flex-wrap items-center gap-2 text-sm'>
        <li>
          <Link
            to='/'
            className='text-gray-500 hover:text-black transition-colors'
          >
            Home
          </Link>
        </li>

        {breadcrumbItems.map((item, index) => (
          <li key={index} className='flex items-center gap-2'>
            <span className='text-gray-400'>/</span>
            {item.isLast ? (
              <span className='font-medium text-black'>{item.displayName}</span>
            ) : (
              <Link
                to={item.path}
                className='text-gray-500 hover:text-black transition-colors'
              >
                {item.displayName}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
