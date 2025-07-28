import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { TbMapSearch } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="bg-orange-600 text-orange-200 py-6 px-4 sm:py-10 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
        {/* Link Penting */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Link Penting</h3>
          <ul className="text-xs sm:text-sm space-y-2 sm:space-y-3">
            <li className="flex items-center gap-2">
              <FaWhatsapp size={16} className="text-white " />
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
              <FaMapMarkerAlt size={16} className="text-white" />
              <span>Jl. Contoh Alamat No.123, Kota ABC</span>
            </li>
            <li className="flex items-center gap-2">
              <TbMapSearch size={16} className="text-white" />
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
          <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Marketplace</h3>
          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            <div className="flex gap-2 sm:gap-4">
              {[FaFacebookF, FaInstagram, FaYoutube, FaTiktok].map((Icon, i) => (
                <div
                  key={i}
                  className="border rounded-full text-xl sm:text-4xl"
                >
                  <Icon className="hover:text-orange-900 cursor-pointer p-1 sm:p-2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tentang Kami */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Tentang Kami</h3>
          <p className="text-xs sm:text-sm">
            Foodys adalah platform e-commerce kuliner yang menghadirkan beragam
            menu makanan khas Nusantara yang enak, bergizi, dan menggugah
            selera. Kami menyediakan berbagai pilihan hidangan tradisional dan
            moderent yang bisa kamu pesan dengan mudah dan cepat.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 sm:mt-10 text-center text-xs sm:text-sm text-orange-200">
        @By: Septania Nopa H • Frontend Dev 2025
      </div>
    </footer>
  );
}
