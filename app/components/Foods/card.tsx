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
          className="mt-2 px-4 py-2 flex items-center justify-center gap-2 text-white bg-orange-600 rounded-md hover:bg-orange-700 w-full font-semibold"
        >
          Tambah ke Keranjang
        </button>
      ) : (
        <div className="mt-2 flex justify-between items-center bg-orange-600 hover:bg-orange-700 text-white rounded-md px-4 py-2 font-semibold">
          <span>Dalam Keranjang ({cartQuantity})</span>
          <button onClick={handleIncrease} className="hover:text-yellow-200">
            <Plus size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
