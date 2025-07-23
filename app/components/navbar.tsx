"use client";

import { useEffect, useState } from "react";
import { CartIcon } from "./cardIcon";
import CartNote from "./cartNote";
import { Search, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCartStore } from "../lib/cart";

export default function Navbar() {
  const pathname = usePathname();
  const [openCart, setOpenCart] = useState(false);

  const cartItems = useCartStore((state) => state.cartItems);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);

  const totalQuantity = hydrated
    ? cartItems.reduce((acc, item) => acc + item.quantity, 0)
    : 0;

  const subtotal = hydrated
    ? cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    : 0;

  const linkClass = (path: string) =>
    `flex items-center gap-2 text-base font-semibold transition-colors duration-200 ${
      pathname === path ? "text-orange-600" : "text-gray-900"
    } hover:text-orange-600`;

  return (
    <>
      <nav className="fixed top-0 z-40 w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
        {/* Navigation links */}
        <div className="flex items-center gap-6">
          <Link href="/" className={linkClass("/")}>
            <Home size={24} />
            Home
          </Link>
          <Link href="/search" className={linkClass("/search")}>
            <Search size={24} />
            All Menu
          </Link>
        </div>

        {/* Cart Button */}
        <button
          className="relative"
          onClick={() => setOpenCart(true)}
          aria-label="Open cart"
        >
          <CartIcon size={28} className="text-orange-600" />
          {totalQuantity > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
              {totalQuantity}
            </span>
          )}
        </button>
      </nav>

      {/* Cart Modal */}
      <CartNote
        isOpen={openCart}
        onClose={() => setOpenCart(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        subtotal={subtotal}
      />
    </>
  );
}
