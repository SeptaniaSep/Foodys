import { create } from "zustand";
import { Foods } from "@/app/components/Dummy/schema";

// Type untuk 1 item di keranjang
export type CartItem = Foods & { quantity: number };

// Type state dan action
type CartState = {
  cartItems: CartItem[];
  addToCart: (item: Foods) => void;
  updateQuantity: (id: number, amount: number) => void;
  getSubtotal: () => number;
  getItemQuantity: (id: number) => number;
  clearCart: () => void;
};

export const useCartStore = create<CartState>((set, get) => ({
  cartItems: [],
  addToCart: (item: Foods) => {
    const existing = get().cartItems.find((i) => i.id === item.id);
    if (existing) {
      set({
        cartItems: get().cartItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      });
    } else {
      set({
        cartItems: [...get().cartItems, { ...item, quantity: 1 }],
      });
    }
  },
  updateQuantity: (id: number, amount: number) => {
    const updated = get()
      .cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + amount) }
          : item
      )
      .filter((item) => item.quantity > 0);
    set({ cartItems: updated });
  },
  getSubtotal: () => {
    return get().cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  },
   getItemQuantity: (id: number) => {
    const item = get().cartItems.find((item) => item.id === id);
    return item ? item.quantity : 0;
  },
  clearCart: () => {
    set({ cartItems: [] });
  },
}));
