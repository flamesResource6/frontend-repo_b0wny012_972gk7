import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] sm:h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6o2b9t7m-3C1x8zU/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-3 py-1 text-xs mb-4">
            <Sparkles className="h-3 w-3 text-cyan-300" />
            Toko Buku Futuristik 2050
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
            Jelajahi Perpustakaan Masa Depan
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            Temukan jutaan buku kurasi AI dengan pengalaman belanja imersif, pembayaran kilat, dan animasi sinematik.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#catalog" className="inline-flex items-center gap-2 bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-5 py-3 rounded-xl font-semibold shadow-lg shadow-fuchsia-500/30 hover:opacity-95 transition">
              <Rocket className="h-5 w-5" /> Mulai Jelajah
            </a>
            <a href="#trending" className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-5 py-3 rounded-xl hover:bg-white/20 transition">
              Tren Hari Ini
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
