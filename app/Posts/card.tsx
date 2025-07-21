import { Foods } from "./dummyFoods";

export function ProductCard({ foods, onAdd }: { foods: Foods; onAdd: (p: Foods) => void }) {
  return (
    <div className="rounded-xl shadow-md p-4 bg-white">
      <img
        src={foods.image}
        alt={foods.name}
        className="w-full h-42 object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold mt-2">{foods.name}</h3>
      <p className="text-sm text-gray-500">Rp {foods.price.toLocaleString("id-ID")}</p>
      <button
        onClick={() => onAdd(foods)}
        className="mt-2 px-4 py-1 bg-orange-500 text-white rounded-full hover:bg-orange-600"
      >
        Add to Cart
      </button>
    </div>
  );
}
