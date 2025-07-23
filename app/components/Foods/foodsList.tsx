"use client";

import { useState } from "react";
import { food } from "../Dummy/foods";
import { Foods } from "../Dummy/schema";
import { FoodsCard } from "./card";
import { CartItem } from "../Dummy/schema";
import CartNote from "../cartNote";

export function FoodsList() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item: Foods) => {
    const exist = cartItems.find((ci) => ci.id === item.id);
    if (exist) {
      setCartItems((prev) =>
        prev.map((ci) =>
          ci.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        )
      );
    } else {
      setCartItems((prev) => [...prev, { ...item, quantity: 1 }]);
    }
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: number, amount: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + amount) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
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
              onUpdateQuantity={handleUpdateQuantity}
              cartQuantity={quantity}
            />
          );
        })}
      </div>

      <CartNote
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        subtotal={subtotal}
      />
    </section>
  );
}
