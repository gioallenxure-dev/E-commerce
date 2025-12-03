const ProductsData = [
  {
    id: 1,
    imgURLs: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    productName: 'Wireless Headphones',
    productPrice: '59.99',
    productPrevPrice: '89.99',
    starRating: 4.5,
    stockQuantity: 120,
    discountPercentage: 33,
    numWhoRated: 10,
    sizeAvail: ['xs', 's', 'M', 'L', 'XL'],
    productDescription:
      'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
    inStock: true,
  },
  {
    id: 2,
    imgURLs: [
      'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    productName: 'Mini car',
    productPrice: '59.99',
    productPrevPrice: '89.99',
    starRating: 3,
    stockQuantity: 5,
    discountPercentage: 33,
    numWhoRated: 50,
    sizeAvail: ['xs', 's', 'M', 'L', 'XL'],
    productDescription:
      'A small, detailed collectible die-cast model car with working wheels and vibrant finish, perfect for display.',
    inStock: true,
  },
  {
    id: 3,
    imgURLs: [
      'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    productName: 'Mini Retro Camera',
    productPrice: '69.99',
    productPrevPrice: '79.99',
    starRating: 5,
    stockQuantity: 50,
    discountPercentage: 33,
    numWhoRated: 150,
    sizeAvail: ['xs', 's'],
    productDescription:
      'Capture nostalgia with this fully functional mini retro camera. Compact design with modern sensor capabilities.',
    inStock: true,
  },
  {
    id: 4,
    imgURLs: [
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    productName: 'Heaven Jordan Max Printer',
    productPrice: '69.99',
    productPrevPrice: '99.99',
    starRating: 4,
    stockQuantity: 90,
    discountPercentage: 33,
    numWhoRated: 30,
    sizeAvail: ['xs', 's', 'M', 'L', 'XL'],
    productDescription:
      'High-speed inkjet printer with wireless connectivity and duplex printing, designed for home and small office use.',
    inStock: false, // Out of stock example
  },
  {
    id: 5,
    imgURLs: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    productName: 'Sunglasses ni Master Roshi',
    productPrice: '414131',
    productPrevPrice: '89.99',
    starRating: 4.5,
    stockQuantity: 120,
    discountPercentage: 33,
    numWhoRated: 88,
    sizeAvail: ['xs', 's', 'M', 'L', 'XL'],
    productDescription:
      'Iconic, polarized sunglasses featuring UV400 protection and a durable acetate frame. Stand out from the crowd!',
    inStock: true,
  },
  {
    id: 6,
    imgURLs: [
      'https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?q=80&w=679&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    productName: 'Pabango ni Diwata Pares',
    productPrice: '1000000',
    productPrevPrice: '89.99',
    starRating: 3,
    stockQuantity: 5,
    discountPercentage: 33,
    numWhoRated: 20,
    sizeAvail: ['xs', 's', 'M', 'L', 'XL'],
    productDescription:
      'A captivating, long-lasting fragrance with notes of citrus and jasmine, inspired by a true icon.',
    inStock: true,
  },
  {
    id: 7,
    imgURLs: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1aXPezNkGw6ukwep5VjxaAz57QBZOMc8hew&s', // Replaced unreachable image URL with Unsplash placeholder
    ],
    productName: 'My Angel Baby',
    productPrice: '69.99',
    productPrevPrice: '79.99',
    starRating: 5,
    stockQuantity: 50,
    discountPercentage: 33,
    numWhoRated: 5,
    sizeAvail: ['xs', 's', 'M', 'L', 'XL'],
    productDescription:
      'The softest cotton onesie for your little angel, featuring a comforting design and easy-snap closures.',
    inStock: false,
  },
  {
    id: 8,
    imgURLs: [
      'https://plus.unsplash.com/premium_photo-1681711648620-9fa368907a86?q=80&w=708&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    productName: 'Magic Beans',
    productPrice: '69.99',
    productPrevPrice: '99.99',
    starRating: 4,
    stockQuantity: 90,
    discountPercentage: 33,
    numWhoRated: 102,
    sizeAvail: ['xs', 's', 'M', 'L', 'XL'],
    productDescription:
      'Guaranteed to grow tall! These specialty, ethically sourced beans are perfect for gardening or culinary adventures.',
    inStock: false, // Out of stock example
  },
];

export default ProductsData;
