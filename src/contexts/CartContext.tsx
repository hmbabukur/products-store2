import { createContext, useState, ReactNode } from 'react';

export interface Product{
  id: number;
  name?: string;
  price: number;
  quantity?: number;
  thumbnail?: string;
  title?: string;
}

interface CartContextType{
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  checkoutCount: number;
  incrementCheckoutCount: () => void;
  resetCheckoutCount: () => void;
}
export const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: {children: ReactNode} ) {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [checkoutCount, setCheckoutCount] = useState<number>(0);

  function addToCart(product: Product) {
  setCartItems(function(prev) {
    const existingItem = prev.find(function(item) {
      return item.id === product.id;
    });

    if (existingItem) {
      return prev.map(function(item) {
        if (item.id === product.id) {
          return { ...item, quantity: (item.quantity || 1) + 1 };
        } else {
          return item;
        }
      });
    } else {
      return [...prev, { ...product, quantity: 1 }];
    }
  });
}

    function removeFromCart(id: number) {
    setCartItems(function(prev) {
      return prev.filter((item) => item.id !== id);
    });
  }
  
  function clearCart() {
    setCartItems([]);
  };

 
  function incrementCheckoutCount() {
    const totalItems = cartItems.reduce(function(sum, item) {
      return sum + (item.quantity || 0);
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
