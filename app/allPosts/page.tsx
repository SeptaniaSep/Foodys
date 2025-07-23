import DessertList from "@/app/components/Desserts/dessertsList";
import BackgroundSlider from "../components/bgHome";
import { FoodsList } from "../components/Foods/foodsList";
import DrinkList from "@/app/components/Drinks/drinksList";

export default function AllPosts() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="p-6 pb-2">
        <BackgroundSlider />
      </div>

      <FoodsList />

      <DrinkList />

      <DessertList />
    </main>
  );
}
