import { useState } from "react";
import { Foods } from "../Dummy/schema";
import { Plus } from "lucide-react";

export function DrinkCard({
  drinks,
  onAdd,
  onUpdateQuantity,
  cartQuantity = 0,
}: {
  drinks: Foods;
  onAdd: (item: Foods) => void;
  onUpdateQuantity: (id: number, amount: number) => void;
  cartQuantity: number;
}) {
    const [setQuantity] = useState(0);
    
      const handleAdd = () => {
        onAdd(drinks);
      };
    
        const handleIncrease = () => {
    onUpdateQuantity(drinks.id, 1);
  };

  return (
    <div className="rounded-xl shadow-md p-4 bg-white">
      <img
        src={drinks.image}
        alt={drinks.name}
        className="w-full h-42 object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold mt-2">{drinks.name}</h3>
      <p className="text-sm text-gray-500">
        Rp {drinks.price.toLocaleString("id-ID")}
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
