import { motion } from "framer-motion"; // Import Framer Motion untuk animasi
import { FaWhatsapp, FaInstagram, FaGlobeAsia, FaEnvelope } from "react-icons/fa"; // Icon sosial media

const footerLinks = [
  {
    title: "Produk",
    links: [
      { label: "Kopi Arabika", url: "#" },
      { label: "Kakao", url: "#" },
      { label: "Rempah-rempah", url: "#" },
      { label: "Kelapa", url: "#" },
    ],
  },
  {
    title: "Perusahaan",
    links: [
      { label: "Tentang Kami", url: "#" },
      { label: "Legalitas", url: "#" },
      { label: "Karir", url: "#" },
      { label: "Kontak", url: "#" },
    ],
  },
  {
    title: "Layanan",
    links: [
      { label: "Ekspor", url: "#" },
      { label: "Impor", url: "#" },
      { label: "Konsultasi", url: "#" },
      { label: "Kemitraan", url: "#" },
    ],
  },
];

const socialLinks = [
  {
    icon: <FaWhatsapp className="text-2xl" />,
    url: "https://wa.me/628170053635",
    label: "WhatsApp",
    color: "hover:text-green-500",
  },
  {
    icon: <FaInstagram className="text-2xl" />,
    url: "https://instagram.com/",
    label: "Instagram",
    color: "hover:text-pink-500",
  },
  {
    icon: <FaGlobeAsia className="text-2xl" />,
    url: "https://www.ptanugerahswa.com/",
    label: "Website",
    color: "hover:text-emerald-700",
  },
  {
    icon: <FaEnvelope className="text-2xl" />,
    url: "mailto:info@ptanugerahswa.com",
    label: "Email",
    color: "hover:text-blue-400",
  },
];

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-green-700 via-lime-500 to-yellow-100 py-14 px-6 mt-24 shadow-2xl border-t-4 border-emerald-400 overflow-hidden select-none z-10">
      {/* Ornamen animasi */}
      <motion.div
        className="absolute left-0 top-0 w-64 h-64 bg-emerald-400 opacity-10 rounded-full blur-3xl -z-10"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 bottom-0 w-80 h-80 bg-yellow-200 opacity-20 rounded-full blur-2xl -z-10"
        animate={{ scale: [1.1, 0.8, 1.1], rotate: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      {/* Bagian utama footer */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start md:justify-between gap-14">
        {/* Logo & Slogan */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl animate-spin-slow">🌾</span>
            <span className="font-black text-2xl text-white tracking-widest drop-shadow-lg">PT ANUGERAH SWA MANDIRI</span>
          </div>
          <span className="text-green-100 font-semibold italic max-w-xs mb-3">
            Impor & Ekspor Hasil Pertanian, langsung dari nusantara untuk dunia.
          </span>
          <div className="flex gap-3 mt-1">
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                whileHover={{ scale: 1.25, rotate: -10 + i * 5 }}
                className={`rounded-full bg-white bg-opacity-80 p-2 transition ${link.color} shadow-md hover:shadow-xl`}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
        {/* Navigasi */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-10 text-left"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1 }}
        >
          {footerLinks.map((group, idx) => (
            <div key={group.title}>
              <div className="font-bold text-white text-lg mb-3 tracking-wide">{group.title}</div>
              <ul>
                {group.links.map((link, idl) => (
                  <li key={link.label} className="mb-2">
                    <a
                      href={link.url}
                      className="text-green-100 hover:text-yellow-200 font-medium transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
        {/* Newsletter */}
        <motion.div
          className="flex flex-col items-center md:items-end text-center md:text-right"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1 }}
        >
          <div className="font-bold text-white text-lg mb-3">Dapatkan Update Harga & Produk</div>
          <form
            className="flex gap-2"
            onSubmit={e => {
              e.preventDefault();
              alert('Terima kasih! Tim kami akan menghubungi Anda via email.');
            }}
          >
            <input
              type="email"
              required
              placeholder="Email Anda"
              className="rounded-l-full py-2 px-4 bg-white bg-opacity-80 text-green-900 focus:outline-none w-40 md:w-52"
            />
            <button
              type="submit"
              className="rounded-r-full px-5 py-2 bg-yellow-400 text-green-800 font-bold hover:bg-yellow-300 transition-all shadow"
            >
              Kirim
            </button>
          </form>
          <span className="text-xs mt-2 text-green-100 opacity-70">Gratis & tanpa spam, janji!</span>
        </motion.div>
      </div>
      {/* Divider */}
      <div className="my-10 h-0.5 w-full bg-gradient-to-r from-green-200 via-yellow-300 to-green-400 opacity-50 rounded-full" />
      {/* Copyright & Kreasi */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto text-green-50 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3 }}
      >
        <span>
          &copy; {new Date().getFullYear()} PT ANUGERAH SWA MANDIRI. All rights reserved.
        </span>
        <span className="flex items-center gap-2 mt-2 md:mt-0">
          Project <span className="font-bold text-yellow-200 animate-gradient-text">Irham Rahmat Saleh</span> &amp; Team.
        </span>
      </motion.div>
      {/* Animasi CSS khusus */}
      <style>
        {`
          .animate-spin-slow {
            animation: spin 6s linear infinite;
          }
          @keyframes spin {
            0% {transform: rotate(0deg);}
            100% {transform: rotate(360deg);}
          }
          .animate-gradient-text {
            background: linear-gradient(90deg, #facc15, #4ade80, #10b981, #facc15);
            background-size: 200% 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: gradient-move 4s ease-in-out infinite;
          }
          @keyframes gradient-move {
            0%,100% {background-position: 0% 50%;}
            50% {background-position: 100% 50%;}
          }
        `}
      </style>
    </footer>
  );
};

export default Footer; // Export Footer untuk digunakan di homepage/component lain
