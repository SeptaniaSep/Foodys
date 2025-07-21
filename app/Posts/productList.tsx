"use client";

import { ProductCard } from "./card";
import { products } from "./dummyFoods";
import { Foods } from "./dummyFoods";

export function ProductList() {
  const handleAddToCart = (item: Foods) => {
    console.log("Added to cart:", item);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-10">
      {products.map((product) => (
        <ProductCard key={product.id} foods={product} onAdd={handleAddToCart} />
      ))}
    </div>
  );
}
