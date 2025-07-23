import { Foods } from "../Dummy/schema";
import { Plus, Minus, ShoppingCart } from "lucide-react";

export function FoodsCard({
  foods,
  onAdd,
  onUpdateQuantity,
  cartQuantity = 0,
}: {
  foods: Foods;
  onAdd: (p: Foods) => void;
  onUpdateQuantity: (id: number, amount: number) => void;
  cartQuantity: number;
}) {
  const handleAdd = () => {
    onAdd(foods);
  };

  const handleIncrease = () => {
    onUpdateQuantity(foods.id, 1);
  };

  const handleDecrease = () => {
    onUpdateQuantity(foods.id, -1);
  };

  return (
    <div className="rounded-xl shadow-md p-4 bg-white">
      <img
        src={foods.image}
        alt={foods.name}
        className="w-full h-42 object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold mt-2">{foods.name}</h3>
      <p className="text-sm text-gray-500">
        Rp {foods.price.toLocaleString("id-ID")}
      </p>

      {cartQuantity === 0 ? (
        <button
          onClick={handleAdd}
          className="mt-2 px-4 py-1 flex items-center justify-center gap-2 text-orange-600 border border-orange-500 rounded-full hover:bg-orange-100 w-full cursor-pointer"
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      ) : (
        <div className="mt-2 flex items-center cursor-pointer justify-between bg-orange-500 text-white rounded-full px-4 py-1 w-full">
          <button
            className="border rounded-full cursor-pointer"
            onClick={handleDecrease}
          >
            <Minus size={21} />
          </button>
          <span className="text-sm">{cartQuantity}</span>
          <button
            className="border rounded-full cursor-pointer"
            onClick={handleIncrease}
          >
            <Plus size={21} />
          </button>
        </div>
      )}
    </div>
  );
}
