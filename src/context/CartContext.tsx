import React, { createContext, useState } from "react";
import { type CartItem } from "../types/cart";

type CartContextType = {
  totalItems: number;
};

export const CartContext = createContext<CartContextType>({
  totalItems: 0,
});

export const CartProvider = ({ children }: React.PropsWithChildren) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const totalItems = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        totalItems: totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
