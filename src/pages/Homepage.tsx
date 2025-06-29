import { motion } from "framer-motion"; // Import animasi Framer Motion
import Navbar from "../components/Navbar"; // Import Navbar custom
import Footer from "../components/Footer";
// Footer jangan diimport dulu

const productVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.2, duration: 0.7, type: "spring" }
  }),
}; // Variasi animasi produk

const products = [
  {
    name: "Kopi Arabika Premium",
    desc: "Dikurasi dari pegunungan terbaik Indonesia. Kualitas ekspor, aroma dan rasa juara dunia.",
    img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=500&q=80", // Kopi arabika, closeup biji kopi
  },
  {
    name: "Biji Kakao Pilihan",
    desc: "Biji kakao super untuk pasar Eropa dan Asia. Siap ekspor dalam jumlah besar.",
    img: "https://media.istockphoto.com/id/1406207995/id/foto/kakao-dengan-potongan-cokelat-dan-bubuk-cokelat-di-atas-meja.jpg?s=612x612&w=0&k=20&c=RsB_udSBPZvn_w-pOzfNDzeZ43Otmf6e7m5JsQkw-K4=", // Biji kakao dan buah kakao
  },
  {
    name: "Rempah-rempah Nusantara",
    desc: "Cengkeh, kayu manis, pala, dan rempah eksotis lainnya. Dijamin segar & berkualitas.",
    img: "https://kompaspedia.kompas.id/wp-content/uploads/2024/05/Rempah-00_20130819RON60.jpg", // Rempah-rempah (beragam: kayu manis, cengkeh, pala)
  },
  {
    name: "Kelapa & Turunannya",
    desc: "Kelapa utuh, kopra, minyak kelapa murni dan produk turunannya. Siap kirim ke seluruh dunia.",
    img: "https://images.pexels.com/photos/1424457/pexels-photo-1424457.jpeg?_gl=1*1wluad7*_ga*MTc4OTQ5MTgwNy4xNzUxMTY1NDA4*_ga_8JE65Q40S6*czE3NTExNjU0MDckbzEkZzEkdDE3NTExNjU0MTQkajUzJGwwJGgw", // Kelapa utuh, natural
  },
];
// Data produk unggulan

const benefitVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.4 + i * 0.2, duration: 0.6, type: "spring" }
  }),
}; // Variasi animasi benefit

const benefits = [
  {
    icon: "🚚",
    title: "Pengiriman Cepat",
    desc: "Jaringan logistik global, produk tiba tepat waktu ke seluruh dunia.",
  },
  {
    icon: "🛡️",
    title: "Kualitas Terjamin",
    desc: "Setiap produk lolos QC ketat sebelum dikirim ke pelanggan internasional.",
  },
  {
    icon: "🤝",
    title: "Kemudahan Transaksi",
    desc: "Proses transaksi aman & mudah, didampingi tim profesional.",
  },
  {
    icon: "📈",
    title: "Harga Kompetitif",
    desc: "Penawaran harga terbaik untuk importir dan eksportir skala besar.",
  },
]; // Data benefit

const Homepage = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-green-100 via-lime-300 to-emerald-200 relative overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 flex flex-col items-center text-center select-none">
        <motion.h1
          className="text-4xl md:text-6xl font-black text-green-800 drop-shadow-xl mb-4 leading-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          Mulai Bisnis Impor & Ekspor Pertanian<br />
          <span className="bg-gradient-to-r from-yellow-400 via-emerald-400 to-green-600 bg-clip-text text-transparent animate-pulse">
            #1 di Indonesia
          </span>
        </motion.h1>
        <motion.p
          className="mt-3 text-lg md:text-2xl text-green-900 font-medium max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3 }}
        >
          PT ANUGERAH SWA MANDIRI siap menjadi mitra ekspor-impor hasil pertanian Anda ke pasar global.<br />
          <span className="text-emerald-700 font-bold">Beli langsung dari petani, kualitas ekspor dunia.</span>
        </motion.p>
        <motion.a
          href="https://wa.me/628170053635"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 px-10 py-4 rounded-full bg-gradient-to-r from-green-600 to-yellow-500 text-white text-xl font-extrabold shadow-xl hover:scale-105 hover:shadow-2xl hover:bg-yellow-400 transition-all duration-300 flex items-center gap-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          whileHover={{ scale: 1.08, boxShadow: "0px 4px 32px 0px rgba(34,197,94,0.25)" }}
        >
          <span>Pesan Sekarang</span>
          <span className="animate-bounce">🌏</span>
        </motion.a>
        <motion.div
          className="absolute left-4 top-40 w-32 h-32 bg-yellow-50 rounded-full filter blur-3xl opacity-30 -z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 2, delay: 0.6 }}
        />
        <motion.div
          className="absolute right-4 bottom-12 w-44 h-44 bg-green-200 rounded-full filter blur-2xl opacity-20 -z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 2.2, delay: 1 }}
        />
      </section>
      {/* Produk Unggulan */}
      <section className="w-full max-w-6xl mx-auto px-4 py-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {products.map((prod, i) => (
          <motion.div
            key={prod.name}
            className="bg-white/80 rounded-2xl shadow-xl hover:shadow-2xl transition hover:scale-105 flex flex-col items-center p-7 relative group border-2 border-green-200"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={productVariants}
          >
            <img
              src={prod.img}
              alt={prod.name}
              className="rounded-xl w-28 h-28 object-cover mb-4 border-4 border-white shadow-lg group-hover:scale-110 transition-transform"
            />
            <div className="font-bold text-green-800 text-lg mb-2 group-hover:text-emerald-600 transition">{prod.name}</div>
            <div className="text-green-700 text-sm font-medium">{prod.desc}</div>
            <motion.div
              className="absolute -top-5 -right-5 bg-yellow-400 text-white font-bold rounded-full px-4 py-1 shadow-lg text-xs opacity-0 group-hover:opacity-100 transition"
              initial={{ opacity: 0, scale: 0.7 }}
              whileHover={{ opacity: 1, scale: 1.1 }}
            >
              HOT!
            </motion.div>
          </motion.div>
        ))}
      </section>
      {/* Benefit Section */}
      <section className="w-full max-w-5xl mx-auto px-4 py-10 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            className="bg-gradient-to-br from-emerald-100 via-green-50 to-yellow-50 rounded-xl shadow-md p-7 flex flex-col items-center text-center border border-emerald-200"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={benefitVariants}
          >
            <span className="text-4xl mb-3 animate-bounce">{b.icon}</span>
            <div className="font-bold text-green-800 text-lg mb-1">{b.title}</div>
            <div className="text-green-600 text-sm">{b.desc}</div>
          </motion.div>
        ))}
      </section>
      {/* Testimoni Section */}
      <section className="w-full max-w-4xl mx-auto px-4 py-14">
        <motion.h2
          className="text-2xl md:text-3xl font-extrabold text-center text-emerald-900 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Testimoni Klien Kami
        </motion.h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          <motion.div
            className="bg-white/90 rounded-2xl shadow-lg p-7 border-l-4 border-green-400"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="italic text-green-800 mb-3">"Produk kopi dan rempahnya benar-benar fresh dan sesuai standar ekspor. Proses pengiriman cepat banget!"</div>
            <div className="font-bold text-green-900">— Andi, Importir Dubai</div>
          </motion.div>
          <motion.div
            className="bg-white/90 rounded-2xl shadow-lg p-7 border-l-4 border-yellow-400"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="italic text-green-800 mb-3">"Harga bersaing dan layanan konsultasi sangat responsif. Rekomendasi untuk importir pemula!”</div>
            <div className="font-bold text-green-900">— Siti, Malaysia</div>
          </motion.div>
        </div>
      </section>
      {/* Call To Action Final */}
      <motion.section
        className="w-full py-12 flex flex-col items-center bg-gradient-to-r from-emerald-400 to-green-300"
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="text-2xl md:text-3xl font-black text-white mb-4 drop-shadow-lg">Segera Hubungi Kami & Mulai Bisnismu!</div>
        <a
          href="https://wa.me/628170053635"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 px-10 py-3 rounded-full bg-yellow-400 text-green-800 font-bold text-lg shadow-lg hover:bg-yellow-300 hover:scale-105 transition-all duration-300"
        >
          WhatsApp: +62 817-0053-635
        </a>
      </motion.section>
      <Footer />
    </div>
  );
};

export default Homepage; // Export komponen Homepage
