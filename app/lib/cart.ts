import { create } from "zustand";
import { CartItem, Foods } from "../components/Dummy/schema";


type CartState = {
  cartItems: CartItem[];
  addToCart: (item: Foods) => void;
  updateQuantity: (id: number, amount: number) => void;
  subtotal: () => number;
};

export const useCartStore = create<CartState>((set, get) => ({
  cartItems: [],
  addToCart: (item: Foods) => {
    const { cartItems } = get();
    const found = cartItems.find((i) => i.id === item.id);
    if (found) {
      set({
        cartItems: cartItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      });
    } else {
      set({ cartItems: [...cartItems, { ...item, quantity: 1 }] });
    }
  },
  updateQuantity: (id, amount) => {
    const updated = get()
      .cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + amount } : item
      )
      .filter((item) => item.quantity > 0);
    set({ cartItems: updated });
  },
  subtotal: () =>
    get().cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    ),
}));
