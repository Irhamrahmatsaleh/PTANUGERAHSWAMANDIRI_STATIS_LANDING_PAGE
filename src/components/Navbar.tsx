import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-green-600 via-lime-400 to-green-700 shadow-lg fixed w-full z-50">
      {/* Navbar dengan gradasi hijau, shadow, dan fixed */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Kontainer utama */}
        <div className="flex items-center space-x-3">
          {/* Logo atau Icon */}
          <span className="text-3xl animate-pulse">🌾</span>
          {/* Nama Perusahaan */}
          <span className="text-white font-extrabold text-xl md:text-2xl tracking-widest drop-shadow-lg transition-all duration-300 hover:text-yellow-200">
            PT ANUGERAH SWA MANDIRI
          </span>
        </div>
        {/* Menu Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Tagline */}
          <span className="text-white/90 font-medium italic tracking-wide animate-fade-in">
            Impor & Ekspor Hasil Pertanian Terpercaya
          </span>
          {/* Tombol Kontak */}
          <a
            href="https://wa.me/628170053635"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-300 hover:bg-yellow-400 transition px-5 py-2 rounded-full font-bold text-green-900 shadow-md border-2 border-white hover:scale-110 duration-200"
          >
            +62 817-0053-635
          </a>
        </div>
        {/* Hamburger untuk Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setOpen(!open)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {/* Icon hamburger */}
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"}
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Menu Mobile */}
      {open && (
        <div className="md:hidden bg-green-600/95 px-4 py-4 space-y-5 animate-slide-down">
          <div className="text-white/90 font-medium italic tracking-wide">
            Impor & Ekspor Hasil Pertanian Terpercaya
          </div>
          <a
            href="https://wa.me/628170053635"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-yellow-300 hover:bg-yellow-400 transition px-5 py-2 rounded-full font-bold text-green-900 shadow-md border-2 border-white text-center"
          >
            +62 817-0053-635
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar; // Export komponen Navbar
