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
    <div className="flex justify-center gap-1 sm:gap-4 mb-4 flex-wrap px-1 sm:px-0">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat.toLowerCase())}
          className={`text-xs sm:text-base min-w-[60px] sm:min-w-[100px] px-2 sm:px-4 py-1.5 sm:py-2 rounded-full border flex justify-center items-center
            ${
              selectedCategory === cat.toLowerCase()
                ? 'bg-orange-600 text-white border-orange-600'
                : 'bg-orange-50 text-gray-700 border-orange-600'
            } transition`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
