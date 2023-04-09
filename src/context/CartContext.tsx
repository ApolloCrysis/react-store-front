import React, { createContext, useState } from "react";
import { type Product } from "../types/product";
import { type CartItem } from "../types/cart";

type CartContextType = {
  addToCart: (product: Product) => void;
  cartItems: CartItem[];
  clearCart: () => void;
  decreaseAmount: (productId: number) => void;
  increaseAmount: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  totalItems: number;
  totalPriceAmount: number;
};

export const CartContext = createContext<CartContextType>({
  addToCart: () => {},
  cartItems: [],
  clearCart: () => {},
  decreaseAmount: () => {},
  increaseAmount: () => {},
  removeFromCart: () => {},
  totalItems: 0,
  totalPriceAmount: 0,
});

export const CartProvider = ({ children }: React.PropsWithChildren) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const totalItems = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  );

  const totalPriceAmount = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
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

  const removeFromCart = (productId: number) => {
    const response = confirm(
      "Are you sure you want to remove this item from your cart?"
    );
    if (response) {
      const items = cartItems.filter((cartItem) => {
        return cartItem.id !== productId;
      });
      setCartItems(items);
    }
  };

  const clearCart = () => {
    const response = confirm("Are you sure you want to clear your cart?");
    if (response) {
      setCartItems([]);
    }
  };

  const decreaseAmount = (productId: number) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productId
    );

    if (existingCartItem) {
      if (existingCartItem.quantity === 1) {
        removeFromCart(productId);
        return;
      }

      const items = cartItems.map((cartItem) => {
        if (cartItem.id === productId) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        } else {
          return cartItem;
        }
      });
      setCartItems(items);
    }
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cartItems,
        clearCart,
        decreaseAmount,
        increaseAmount,
        removeFromCart,
        totalItems,
        totalPriceAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
