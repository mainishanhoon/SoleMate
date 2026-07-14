import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface Product {
  id: string | number;
  name: string;
  price: number;
  [key: string]: any;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('shopping_cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart data from localStorage", e);
      }
    }
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('shopping_cart', JSON.stringify(cartItems));
    } else if (cartItems.length === 0) {

      const savedCart = localStorage.getItem('shopping_cart');
      if (savedCart && JSON.parse(savedCart).length > 0) {
        localStorage.setItem('shopping_cart', JSON.stringify([]));
      }
    }
  }, [cartItems]);

  const addToCart = (product: any) => {
    setCartItems((prevItems) => {
      const productId = product.id || product._id;
      const existingItem = prevItems.find((item) => item.id === productId);

      let updatedItems: CartItem[];
      if (existingItem) {
        updatedItems = prevItems.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        updatedItems = [
          ...prevItems,
          { id: productId, name: product.name, price: product.price, quantity: 1 }
        ];
      }

      localStorage.setItem('solemate_cart', JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}