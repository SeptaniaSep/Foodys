"use client";

import { useState } from "react";
import { useCartStore } from "@/app/lib/cart";
import { CartItem } from "@/app/components/Dummy/schema";

export default function CheckoutForm() {
  const { cartItems, subtotal } = useCartStore();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Data:", formData, cartItems);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 bg-white rounded shadow space-y-6">
      <h2 className="text-xl font-bold">Form Pemesanan</h2>

      <div>
        <label className="block text-sm font-medium">Nama Pemesan</label>
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded"
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
          className="w-full mt-1 p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Alamat Pengiriman</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded"
          required
        />
      </div>

      <div className="border-t pt-4">
        <h3 className="text-lg font-semibold mb-2">Invoice Pembelian</h3>
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Belum ada item dalam keranjang.</p>
        ) : (
          <ul className="space-y-2">
            {cartItems.map((item: CartItem) => (
              <li key={item.id} className="flex justify-between">
                <span>{item.name} x {item.quantity}</span>
                <span>Rp {item.price * item.quantity}</span>
              </li>
            ))}
            <li className="flex justify-between font-bold border-t pt-2">
              <span>Total</span>
              <span>Rp {subtotal()}</span>
            </li>
          </ul>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded"
      >
        Lanjut Pemesanan
      </button>
    </form>
  );
}
