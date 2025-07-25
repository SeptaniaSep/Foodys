"use client";

import { useState, useEffect } from "react";
import { useCartStore } from "@/lib/cart";
import { drink } from "../Dummy/drinks";
import { Foods } from "../Dummy/schema";
import { DrinkCard } from "./card";
import CartNote from "../cartList";

export default function DrinkList() {
  const cartItems = useCartStore((state) => state.cartItems);
  const addToCart = useCartStore((state) => state.addToCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const items = drink.filter((item) => item.category === "drink");
  const totalItems = items.length;

  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % totalItems);
    }, 2000);
    return () => clearInterval(interval);
  }, [totalItems]);

  const visibleItems = Array.from({ length: 4 }, (_, i) => items[(startIndex + i) % totalItems]);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold text-center text-orange-600">DRINKS</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-10 pt-2 pb-2">
        {visibleItems.map((item) => {
          const inCart = cartItems.find((i) => i.id === item.id);
          const quantity = inCart?.quantity || 0;

          return (
            <DrinkCard
              key={item.id}
              drinks={item}
              onAdd={() => {
                addToCart(item);
                setIsCartOpen(true);
              }}
              onUpdateQuantity={(id, amount) => updateQuantity(id, amount)}
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
