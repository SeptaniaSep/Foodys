"use client";


import { dessert } from "../Dummy/desserts";
import { Foods } from "../Dummy/schema";  
import { DessertsCard } from "./card";

export default function DessertList() {
  const dessertFoods = dessert
  .filter((item) => item.category === "dessert")
  .slice(0, 4);

  const handleAdd = (item: Foods) => {
    console.log("Ditambahkan ke cart:", item);

  };

  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold text-center text-orange-600">
       DESSERTS 
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-10 pt-2">
        {dessertFoods.map((item) => (
          <DessertsCard key={item.id} desserts={item} onAdd={handleAdd} />
        ))}
      </div>
    </section>
  );
}
