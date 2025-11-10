import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[75vh] w-full overflow-hidden bg-gradient-to-br from-black via-slate-900 to-indigo-950 text-white">
      <div className="absolute inset-0 opacity-70">
        <Spline 
          scene="https://prod.spline.design/3py6jzv9xYyG8ZrW/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 grid md:grid-cols-2 items-center gap-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-3 py-1 rounded-full">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-white/80">Bookstore 2050</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Masa Depan Toko Buku, Hari Ini
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            Jelajahi koleksi buku futuristik, AI rekomendasi personal, dan pengalaman belanja imersif dengan animasi dan 3D.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#catalog" className="px-6 py-3 rounded-xl bg-fuchsia-500 hover:bg-fuchsia-600 transition shadow-lg shadow-fuchsia-500/30">Belanja Sekarang</a>
            <a href="#why" className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition">Mengapa NovaBooks?</a>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950/90 to-transparent" />
    </section>
  );
};

export default Hero;
