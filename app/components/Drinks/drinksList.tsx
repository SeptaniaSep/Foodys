"use client";

import { useEffect, useRef } from "react";
import { drink } from "../Dummy/drinks";
import { Foods } from "../Dummy/schema";
import { DrinkCard } from "./card";


export default function DrinkList() {
  const drinkFoods = drink.filter((item) => item.category === "drink");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const interval = setInterval(() => {
      if (!scrollContainer) return;

      // Geser 1 card ke kanan (220px)
      scrollContainer.scrollBy({ left: 220, behavior: "smooth" });

      // Jika sudah hampir habis, scroll ulang ke awal (tanpa reset mendadak)
      if (
        scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
        scrollContainer.scrollWidth - 220
      ) {
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleAdd = (item: Foods) => {
    console.log("Ditambahkan ke cart:", item);
  };

  return (
    <section className="p-4 ">
      <h2 className="text-2xl font-bold text-orange-600 mb-4 text-center">
        DRINKS
      </h2>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 px-2 pb-4 scroll-smooth hide-scrollbar"
      >
        {drinkFoods.map((item) => (
          <div key={item.id} className="min-w-[220px] flex-shrink-0">
            <DrinkCard drinks={item} onAdd={handleAdd} />
          </div>
        ))}
      </div>
    </section>
  );
}
