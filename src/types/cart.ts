export type CartItem = {
  id: number;
  name: string;
  quantity: number;
  price: number;
};

export type Cart = {
  items: CartItem[];
};
