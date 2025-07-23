'use client';
import React from 'react';

interface CategoryTabsProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const categories = ['All', 'Food', 'Dessert', 'Drink'];

export default function CategoryTabs({
  selectedCategory,
  setSelectedCategory,
}: CategoryTabsProps) {
  return (
    <div className="flex justify-center gap-4 mb-4 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat.toLowerCase())}
          className={`min-w-[100px] px-4 py-2 rounded-full border flex justify-center items-center
            ${
              selectedCategory === cat.toLowerCase()
                ? 'bg-orange-600 text-white border-orange-600'
                : ' bg-orange-50 text-gray-700 border-orange-600'
            } transition`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
