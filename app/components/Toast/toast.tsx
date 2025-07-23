"use client";
import { useEffect, useState } from "react";
import { Foods } from "../Dummy/schema";


type BestSellerToastProps = {
  products: Foods[];
};

export default function BestSellerToast({ products }: BestSellerToastProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false); // sembunyikan
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % products.length);
        setShow(true); // munculkan lagi
      }, 300); // waktu untuk transisi keluar
    }, 4000); // tiap 4 detik ganti produk

    return () => clearInterval(interval);
  }, [products.length]);

  const product = products[currentIndex];

  if (!show) return null;

  return (
    <div
      className="fixed bottom-4 left-4 bg-white border rounded-xl p-4 w-64 shadow-lg transition-all duration-300"
      style={{
        transform: "translateX(0)",
        animation: "slideIn 0.3s ease-out",
      }}
    >
      <div className="flex gap-3 items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-14 h-14 rounded-md object-cover"
        />
        <div>
          <p className="font-semibold text-sm text-gray-800">{product.name}</p>
          <p className="text-xs text-gray-600">Best Seller 💥</p>
          <p className="text-sm text-green-600 font-bold">Rp{product.price.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}
