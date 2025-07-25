"use client";

import { X } from "lucide-react";
import { CartItem } from "./Dummy/schema";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import CheckoutModal from "../checkout/form";

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
  return (
    <div
      className={`fixed top-0 right-0 h-full w-[550px] bg-white shadow-lg z-50 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b font-semibold text-orange-600">
        <h2>KERANJANG FOODYS</h2>
        <button onClick={onClose}>
          <X />
        </button>
      </div>

      {/* Body */}
      <div className="p-4 space-y-4 overflow-y-auto hide-scrollbar h-[calc(100%-160px)]">
        {items.length === 0 ? (
          <p className="text-center text-orange-300">Keranjang kosong</p>
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
                  className="px-2 border rounded-full text-xl"
                  onClick={() => onUpdateQuantity(item.id, -1)}
                >
                  -
                </button>
                <span className="text-sm">{item.quantity}</span>
                <button
                  className="px-2 border rounded-full text-xl"
                  onClick={() => onUpdateQuantity(item.id, 1)}
                >
                  +
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t">
        <div className="flex justify-between font-semibold mb-2">
          <span>Subtotal:</span>
          <span>Rp{subtotal.toLocaleString()}</span>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <button className="w-full bg-orange-300 text-white py-2 rounded-full hover:bg-orange-600 flex items-center justify-between px-4">
              Pembayaran <span>→</span>
            </button>
          </DialogTrigger>

          <DialogContent className="max-w-2xl">
            {/* Close tombol dialog + tutup cart */}
            <DialogClose asChild>
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={onClose}
              >
                <X />
              </button>
            </DialogClose>

            <CheckoutModal isOpen={isOpen}  cartItems={items} onClose={onClose} />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
