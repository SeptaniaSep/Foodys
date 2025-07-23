import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-orange-600 text-orange-200 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Link Penting */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Link Penting</h3>
          <ul className="text-sm space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Wawawi wawa wi wawa wi wawawa
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blubub bluubub bub
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Kotek kotek kookokok tek
              </a>
            </li>
          </ul>
        </div>

        {/* Marketplace */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Marketplace</h3>
          <div className="grid grid-cols-2 gap-4">
           <div className="flex gap-4">
            <div className="border rounded-full text-4xl">
              <FaFacebookF className="hover:text-orange-900 cursor-pointer p-2" />
            </div>
            <div className="border rounded-full text-4xl">
              <FaInstagram className="hover:text-orange-900 cursor-pointer p-2" />
            </div>
            <div className="border rounded-full text-4xl">
              <FaYoutube className="hover:text-orange-900 cursor-pointer p-2" />
            </div>
            <div className="border rounded-full text-4xl">
              <FaTiktok className="hover:text-orange-900 cursor-pointer p-2" />
            </div>
          </div>
          </div>
        </div>

        {/* Tentang Kami */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Tentang Kami</h3>
          <p className="text-sm mb-4">
            Foodys adalah platform e-commerce kuliner yang menghadirkan beragam menu makanan khas Nusantara yang enak, bergizi, dan menggugah selera. Kami menyediakan berbagai pilihan hidangan tradisional dan moderent yang bisa kamu pesan dengan mudah dan cepat.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm text-orange-200">
        @By: Septania Nopa H • Frontend Dev 2025
      </div>
    </footer>
  );
}
