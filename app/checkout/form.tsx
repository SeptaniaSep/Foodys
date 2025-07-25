"use client";

import { useState } from "react";
import { useCartStore } from "@/lib/cart";
import { generateWhatsAppUrl } from "./wa";
import { CartItem } from "../components/Dummy/schema";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const { cartItems } = useCartStore();
  const subtotal = useCartStore((state) => state.getSubtotal());

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    deliveryMethod: "ambil", 
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validasi alamat jika metode antar
    if (
      formData.deliveryMethod === "delivery" &&
      formData.address.trim() === ""
    ) {
      alert("Mohon masukkan alamat lengkap untuk pengantaran.");
      return;
    }

    const waUrl = generateWhatsAppUrl({
      name: formData.name,
      phone: formData.phone,
      address:
        formData.deliveryMethod === "delivery"
          ? formData.address
          : "Pickup di tempat",
      cartItems,
      subtotal: subtotal,
    });

    window.open(waUrl, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white  shadow-lg p-8 max-w-xl w-full relative max-h-screen ">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-orange-600 text-4xl"
        >
          &times;
        </button>

        <form onSubmit={handleSubmit} className="space-y-3">
          <h2 className="text-xl font-semibold text-orange-600">
            Form Pesanan
          </h2>

          <div>
            <label className="block text-sm font-medium">Nama Pemesan</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-orange-600 rounded bg-orange-50"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Nomor WhatsApp</label>
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-orange-600 rounded bg-orange-50"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Metode Pengiriman
            </label>
            <div className="flex items-center gap-4 mt-1">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="deliveryMethod"
                  value="ambil"
                  checked={formData.deliveryMethod === "ambil"}
                  onChange={handleChange}
                />
                Ambil
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="deliveryMethod"
                  value="delivery"
                  checked={formData.deliveryMethod === "delivery"}
                  onChange={handleChange}
                />
                Antar
              </label>
            </div>
          </div>

          {formData.deliveryMethod === "delivery" && (
            <div>
              <label className="block text-sm font-medium">
                Alamat Pengiriman
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-orange-600 rounded bg-orange-50"
                required={formData.deliveryMethod === "delivery"}
              />
            </div>
          )}

          <div className="flex flex-col h-[200px] border-t pt-4">
            <h3 className="text-lg font-semibold mb-2 text-orange-600">
              Daftar Belanja
            </h3>

            {cartItems.length === 0 ? (
              <p className="text-gray-700 font-light">
                Belum ada item dalam keranjang...
              </p>
            ) : (
              <>
                {/* Daftar item scrollable */}
                <div className="flex-1 overflow-y-auto hide-scrollbar pr-2">
                  <ul className="space-y-2">
                    {cartItems.map((item: CartItem) => (
                      <li key={item.id} className="flex justify-between">
                        <span>
                          {item.name} x {item.quantity}
                        </span>
                        <span>Rp {item.price * item.quantity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Total & tombol di bawah */}
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-bold mb-2">
                    <span>Total</span>
                    <span>Rp {subtotal}</span>
                  </div>
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-full">
                    Lanjut Pesan
                  </button>
                </div>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
