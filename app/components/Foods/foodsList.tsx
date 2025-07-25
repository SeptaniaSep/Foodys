"use client";

import { food } from "../Dummy/foods";
import { Foods } from "../Dummy/schema";
import { FoodsCard } from "./card";
import CartNote from "../cartList";
import { useCartStore } from "@/lib/cart";
import { useState } from "react";

export function FoodsList() {
  const cartItems = useCartStore((state) => state.cartItems);
  const addToCart = useCartStore((state) => state.addToCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item: Foods) => {
    addToCart(item);
    setIsCartOpen(true);
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold text-center text-orange-600">MENU</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-10 pt-2 pb-2">
        {food.map((product) => {
          const itemInCart = cartItems.find((i) => i.id === product.id);
          const quantity = itemInCart?.quantity || 0;

          return (
            <FoodsCard
              key={product.id}
              foods={product}
              onAdd={handleAddToCart}
              onUpdateQuantity={updateQuantity}
              cartQuantity={quantity}
            />
          );
        })}
      </div>

      <CartNote
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        subtotal={subtotal}
      />
    </section>
  );
}
