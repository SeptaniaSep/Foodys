import { Plus, ShoppingCart } from "lucide-react";
import { Foods } from "../Dummy/schema";

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
    <div className="rounded-xl shadow-md p-4 bg-white">
      <img
        src={desserts.image}
        alt={desserts.name}
        className="w-full h-42 object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold mt-2">{desserts.name}</h3>
      <p className="text-sm text-gray-500">
        Rp {desserts.price.toLocaleString("id-ID")}
      </p>

      {cartQuantity === 0 ? (
        <button
          onClick={handleAdd}
          className="mt-2 px-4 py-2 flex items-center justify-center gap-2 text-white bg-orange-600 rounded-md hover:bg-orange-700 w-full font-semibold"
        >
          <ShoppingCart size={18} />
          Tambah ke Keranjang
        </button>
      ) : (
        <div className="mt-2 flex items-center justify-between bg-orange-600 hover:bg-orange-700 text-white rounded-md px-4 py-2 font-semibold">
          <span>Dalam Keranjang ({cartQuantity})</span>
          <button onClick={handleIncrease} className="px-2">
            <Plus size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
