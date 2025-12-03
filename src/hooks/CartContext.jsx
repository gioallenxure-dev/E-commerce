import React, { createContext, useState, useEffect } from 'react';

// Create the Context
export const CartContext = createContext();

// Create the Provider Component
export const CartProvider = ({ children }) => {
  // Initialize state from localStorage
  const [cartCount, setCartCount] = useState(() => {
    const saved = localStorage.getItem('cartCount');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [wishlistCount, setWishlistCount] = useState(() => {
    const saved = localStorage.getItem('wishlistCount');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('cartItems');
    return saved ? JSON.parse(saved) : [];
  });

  const [wishlistItems, setWishlistItems] = useState(() => {
    const saved = localStorage.getItem('wishlistItems');
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever counts change
  useEffect(() => {
    localStorage.setItem('cartCount', cartCount.toString());
  }, [cartCount]);

  useEffect(() => {
    localStorage.setItem('wishlistCount', wishlistCount.toString());
  }, [wishlistCount]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  // Add item to cart
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      // Update quantity if item already exists
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Add new item
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      setCartCount(cartCount + 1);
    }
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
    setCartCount(Math.max(0, cartCount - 1));
  };

  // Add item to wishlist
  const addToWishlist = (product) => {
    const exists = wishlistItems.find((item) => item.id === product.id);

    if (!exists) {
      setWishlistItems([...wishlistItems, product]);
      setWishlistCount(wishlistCount + 1);
      return true; // Successfully added
    }
    return false; // Already exists
  };

  // Remove item from wishlist
  const removeFromWishlist = (productId) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== productId));
    setWishlistCount(Math.max(0, wishlistCount - 1));
  };

  // Toggle wishlist item
  const toggleWishlist = (product) => {
    const exists = wishlistItems.find((item) => item.id === product.id);

    if (exists) {
      removeFromWishlist(product.id);
      return false; // Removed
    } else {
      addToWishlist(product);
      return true; // Added
    }
  };

  // Check if item is in wishlist
  const isInWishlist = (productId) => {
    return wishlistItems.some((item) => item.id === productId);
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
    setCartCount(0);
  };

  // Clear wishlist
  const clearWishlist = () => {
    setWishlistItems([]);
    setWishlistCount(0);
  };

  const contextValue = {
    cartCount,
    wishlistCount,
    cartItems,
    wishlistItems,
    addToCart,
    removeFromCart,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    isInWishlist,
    clearCart,
    clearWishlist,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
