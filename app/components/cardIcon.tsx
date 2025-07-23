"use client";

import { ShoppingCart } from "lucide-react";

export function CartIcon({ size = 30, className = "" }: { size?: number; className?: string }) {
  return <ShoppingCart size={size} className={className} />;
}
