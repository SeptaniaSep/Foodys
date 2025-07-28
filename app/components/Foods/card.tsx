import { CartIcon } from "../cardIcon";
import { Foods } from "../Dummy/schema";
import { Plus } from "lucide-react";

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

  return (
    <div className="rounded-xl shadow-md p-2 sm:p-4 bg-white text-sm sm:text-base">
      <img
        src={foods.image}
        alt={foods.name}
        className="w-full h-24 sm:h-40 object-cover rounded-md"
      />
      <h3 className="font-semibold mt-2 line-clamp-1">{foods.name}</h3>
      <p className="text-xs sm:text-sm text-gray-500">
        Rp {foods.price.toLocaleString("id-ID")}
      </p>

      {cartQuantity === 0 ? (
        <button
          onClick={handleAdd}
          className=" flex mt-2 px-4 py-2 items-center justify-center gap-2 text-white bg-orange-600 rounded-md hover:bg-orange-700 w-full font-semibold"
        >
          Tambah <CartIcon size={20} />
        </button>
      ) : (
        <button
          onClick={handleIncrease}
          className="mt-2 px-4 py-2 flex items-center justify-between gap-2 text-white bg-orange-600 rounded-md hover:bg-orange-700 w-full font-semibold"
        >
          <span className="flex items-center justify-center gap-2"><CartIcon size={20} /> ({cartQuantity})</span>
          <Plus size={18} className="hover:text-yellow-200" />
        </button>
      )}
    </div>
  );
}
