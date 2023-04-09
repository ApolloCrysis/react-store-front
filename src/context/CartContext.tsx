import React, { createContext, useState } from "react";
import { type Product } from "../types/product";
import { type CartItem } from "../types/cart";

type CartContextType = {
  addToCart: (product: Product) => void;
  cartItems: CartItem[];
  increaseAmount: (productId: number) => void;
  totalItems: number;
};

export const CartContext = createContext<CartContextType>({
  addToCart: () => {},
  cartItems: [],
  increaseAmount: () => {},
  totalItems: 0,
});

export const CartProvider = ({ children }: React.PropsWithChildren) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const totalItems = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  );

  const addToCart = (product: Product) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === product.id
    );
    if (existingCartItem) {
      const items = cartItems.map((cartItem) => {
        if (cartItem.id === product.id) {
          cartItem.quantity += 1;
        }
        return cartItem;
      });
      setCartItems(items);
    } else {
      const newCartItem = {
        id: product.id,
        name: product.title,
        quantity: 1,
        price: product.price,
        image: product.image,
      };
      setCartItems([...cartItems, newCartItem]);
    }
  };

  const increaseAmount = (productId: number) => {
    const items = cartItems.map((cartItem) => {
      if (cartItem.id === productId) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      } else {
        return cartItem;
      }
    });
    setCartItems(items);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cartItems,
        increaseAmount,
        totalItems: totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
