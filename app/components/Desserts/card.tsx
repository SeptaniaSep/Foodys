import { Plus, ShoppingCart } from "lucide-react";
import { Foods } from "../Dummy/schema";
import { CartIcon } from "../cardIcon";

interface DessertsCardProps {
  desserts: Foods;
  onAdd: (item: Foods) => void;
  onUpdateQuantity: (id: number, amount: number) => void;
  cartQuantity: number;
}

export function DessertsCard({
  desserts,
  onAdd,
  onUpdateQuantity,
  cartQuantity = 0,
}: DessertsCardProps) {
  const handleAdd = () => {
    onAdd(desserts);
  };

  const handleIncrease = () => {
    onUpdateQuantity(desserts.id, 1);
  };

  return (
    <div className="rounded-xl shadow-md p-2 sm:p-4 bg-white text-sm sm:text-base">
      <img
        src={desserts.image}
        alt={desserts.name}
        className="w-full h-24 sm:h-40 object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold mt-2">{desserts.name}</h3>
      <p className="text-sm text-gray-500">
        Rp {desserts.price.toLocaleString("id-ID")}
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
          <span className="flex items-center justify-center gap-2">
            <CartIcon size={20} /> ({cartQuantity})
          </span>
          <Plus size={18} className="hover:text-yellow-200" />
        </button>
      )}
    </div>
  );
}
