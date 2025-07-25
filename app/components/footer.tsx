import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { TbMapSearch } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="bg-orange-600 text-orange-200 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Link Penting */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Link Penting</h3>
          <ul className="text-sm space-y-3">
            <li className="flex items-center gap-2">
              <FaWhatsapp size={20} className="text-white" />
              <a
                href="https://wa.me/6285641557416"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Chat via WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt size={20} className="text-white" />
              <span>Jl. Contoh Alamat No.123, Kota ABC</span>
            </li>
            <li className="flex items-center gap-2">
              <TbMapSearch size={20} className="text-white" />
              <a
                href="https://www.google.com/maps?q=-7.797068,110.370529"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Lihat lokasi di Google Maps
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
            Foodys adalah platform e-commerce kuliner yang menghadirkan beragam
            menu makanan khas Nusantara yang enak, bergizi, dan menggugah
            selera. Kami menyediakan berbagai pilihan hidangan tradisional dan
            moderent yang bisa kamu pesan dengan mudah dan cepat.
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
