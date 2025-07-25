"use client";

import { useState } from "react";
import { DessertsCard } from "@/app/components/Desserts/card";
import { DrinkCard } from "@/app/components/Drinks/card";
import { food } from "@/app/components/Dummy/foods";
import { dessert } from "@/app/components/Dummy/desserts";
import { drink } from "@/app/components/Dummy/drinks";
import { IoSearchCircle } from "react-icons/io5";
import CategoryTabs from "./categoriTab";
import { FoodsCard } from "../components/Foods/card";
import { useCartStore } from "@/lib/cart";

export default function SearchPage() {
  const allItems = [
    ...food.map((item) => ({ ...item, type: "food" })),
    ...dessert.map((item) => ({ ...item, type: "dessert" })),
    ...drink.map((item) => ({ ...item, type: "drink" })),
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const { addToCart, getItemQuantity, updateQuantity } = useCartStore();

  const filteredItems = allItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.type === selectedCategory;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="p-10 pt-5 bg-gray-100 min-h-screen ">
      <h1 className="text-3xl font-bold text-center text-orange-600 mb-4">
        All Menu
      </h1>

      {/* Search bar */}
      <div className="flex justify-center items-center pb-4">
        <div className="flex gap-2 w-full max-w-xl items-center justify-center">
          <IoSearchCircle className="text-orange-600" size={50} />
          <input
            type="text"
            placeholder="Cari menu..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-orange-700 rounded-xl p-2"
          />
        </div>
      </div>

      {/* Tabs */}
      <CategoryTabs
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* List Menu */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {filteredItems.map((item) => {
          const quantity = getItemQuantity(item.id);

          if (item.type === "dessert") {
            return (
              <DessertsCard
                key={item.id}
                desserts={item}
                onAdd={() => addToCart(item)}
                onUpdateQuantity={(id, amount) => updateQuantity(id, amount)}
                cartQuantity={quantity}
              />
            );
          } else if (item.type === "drink") {
            return (
              <DrinkCard
                key={item.id}
                drinks={item}
                onAdd={() => addToCart(item)}
                onUpdateQuantity={(id, amount) => updateQuantity(id, amount)}
                cartQuantity={quantity}
              />
            );
          } else {
            return (
              <FoodsCard
                key={item.id}
                foods={item}
                onAdd={() => addToCart(item)}
                onUpdateQuantity={(id, amount) => updateQuantity(id, amount)}
                cartQuantity={quantity}
              />
            );
          }
        })}
      </div>

      {filteredItems.length === 0 && (
        <p className="text-center text-gray-500 mt-4">Menu tidak ditemukan</p>
      )}
    </section>
  );
}
