import { CartItem } from "@/app/components/Dummy/schema";

interface WhatsAppPayload {
  name: string;
  phone: string;
  address: string;
  cartItems: CartItem[];
  subtotal: number;
  forWhom?: string; 
}

export function generateWhatsAppUrl({
  name,
  phone,
  address,
  cartItems,
  subtotal,
  forWhom = "Admin",
}: WhatsAppPayload): string {
  const itemsText = cartItems
    .map(
      (item) =>
        `- ${item.name} x ${item.quantity} = Rp ${item.price * item.quantity}`
    )
    .join("\n");

  const totalText = `\n-------->\n💰 Total: Rp ${subtotal}`;

  const message = `Assalamualaikum Wr. Wb.\nHalo kak aku mau pesen makanan nih :)\n\n📦 Untuk: ${forWhom}\n====================\n👤 Atas nama: ${name}\n📞 No. WA: ${phone}\n🏠 Alamat: ${address}\n====================\n🍽️ Pesanan:\n${itemsText}\n====================${totalText}\n====================\n\nTerimakasih :)`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/6285641557416?text=${encodedMessage}`;
}
