import { useState } from "react";
import { Foods } from "../Dummy/schema";
import { Minus, Plus, ShoppingCart } from "lucide-react";

export function DessertsCard({
  desserts,
  onAdd,
}: {
  desserts: Foods;
  onAdd: (item: Foods) => void;
}) {
   const [quantity, setQuantity] = useState(0);
      
        const handleAdd = () => {
          setQuantity(1);
          onAdd(desserts);
        };
      
        const handleIncrease = () => {
          setQuantity((prev) => prev + 1);
          onAdd(desserts);
        };
      
        const handleDecrease = () => {
          if (quantity > 1) {
            setQuantity((prev) => prev - 1);
          } else {
            setQuantity(0);
          }
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
      {quantity === 0 ? (
        <button
          onClick={handleAdd}
          className="mt-2 px-4 py-1 flex items-center justify-center gap-2 text-orange-600 border border-orange-500 rounded-full hover:bg-orange-100 w-full  cursor-pointer"
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
          <span className="text-sm">{quantity}</span>
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
