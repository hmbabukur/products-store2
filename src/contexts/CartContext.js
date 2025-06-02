import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [checkoutCount, setCheckoutCount] = useState(0);

  function addToCart(product) {
  setCartItems(function(prev) {
    const existingItem = prev.find(function(item) {
      return item.id === product.id;
    });

    if (existingItem) {
      return prev.map(function(item) {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    } else {
      return [...prev, { ...product, quantity: 1 }];
    }
  });
}

    function removeFromCart(id) {
    setCartItems(function(prev) {
      return prev.filter((item) => item.id !== id);
    });
  }
  
  function clearCart() {
    setCartItems([]);
  };

 
  function incrementCheckoutCount() {
    const totalItems = cartItems.reduce(function(sum, item) {
      return sum + item.quantity;
    }, 0);

    setCheckoutCount(function(prev) {
      return prev + totalItems;
    });
  }

  function resetCheckoutCount() {
    setCheckoutCount(0);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems: cartItems || [], 
        addToCart,
        removeFromCart,
        clearCart,
        checkoutCount,
        incrementCheckoutCount,
        resetCheckoutCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
