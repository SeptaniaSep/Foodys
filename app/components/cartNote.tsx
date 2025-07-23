"use client";

import { X } from "lucide-react";
import { CartItem } from "./Dummy/schema";
import { useState } from "react";
import { useRouter } from "next/navigation";


interface CartNoteProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, amount: number) => void;
  subtotal: number;
}

export default function CartNote({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  subtotal,
}: CartNoteProps) {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
   const router = useRouter();
  return (
    <div
      className={`fixed top-0 right-0 h-full w-[550px] bg-white shadow-lg z-50 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b font-semibold text-orange-600">
        <h2>FOODYS CARTtttt</h2>
        <button onClick={onClose}>
          <X />
        </button>
      </div>

      <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-160px)]">
        {items.length === 0 ? (
          <p className="text-center text-gray-500">Keranjang kosong</p>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="flex items-start justify-between border-b pb-2"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 object-cover rounded-md"
              />
              <div className="flex-1 ml-2">
                <p className="font-semibold text-sm">{item.name}</p>
                <p className="text-xs">
                  {item.quantity} × Rp{item.price.toLocaleString()}
                </p>
              </div>
              <div className="flex items-center space-x-1">
                <button
                  className="px-2 border rounded-full text-sm"
                  onClick={() => onUpdateQuantity(item.id, -1)}
                >
                  -
                </button>
                <span className="text-sm">{item.quantity}</span>
                <button
                  className="px-2 border rounded-full text-sm"
                  onClick={() => onUpdateQuantity(item.id, 1)}
                >
                  +
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="p-4 border-t">
        <div className="flex justify-between font-semibold mb-2">
          <span>Subtotal:</span>
          <span>Rp{subtotal.toLocaleString()}</span>
        </div>
        <button
          className="w-full bg-orange-300 text-white py-2 rounded-full hover:bg-orange-600 flex items-center justify-between px-4"
          onClick={() => router.push("/checkout")}
        >
          Pembayaran <span>→</span>
        </button>
      </div>
    </div>
  );
}
