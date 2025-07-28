"use client";

import { useEffect, useRef, useState } from "react";
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

  // Infinite scroll state
  const PAGE_SIZE = 8;
  const [page, setPage] = useState(1);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  // Reset page saat filter/search berubah
  useEffect(() => {
    setPage(1);
  }, [searchTerm, selectedCategory]);

  // Observer untuk infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const totalPages = Math.ceil(filteredItems.length / PAGE_SIZE);
        if (entry.isIntersecting && page < totalPages) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [filteredItems.length, page]);

  const visibleItems = filteredItems.slice(0, page * PAGE_SIZE);

  return (
    <section className="px-4 sm:px-10 pt-5 bg-gray-100 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-orange-600 mb-4">
        All Menu
      </h1>

      {/* Search bar */}
      <div className="flex justify-center items-center pb-4">
        <div className="flex gap-2 w-full max-w-md sm:max-w-xl items-center">
          <IoSearchCircle className="text-orange-600" size={40} />
          <input
            type="text"
            placeholder="Cari menu..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-orange-700 rounded-xl p-2 text-sm sm:text-base"
          />
        </div>
      </div>

      {/* Tabs */}
      <CategoryTabs
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* List Menu */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {visibleItems.map((item) => {
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

      {/* Loader */}
      {visibleItems.length < filteredItems.length && (
        <div ref={loaderRef} className="text-center text-gray-500 py-6 text-sm">
          Loading more...
        </div>
      )}

      {/* Not Found */}
      {filteredItems.length === 0 && (
        <p className="text-center text-gray-500 mt-4 text-sm">
          Menu tidak ditemukan
        </p>
      )}
    </section>
  );
}
