import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, BookOpen, Plus } from 'lucide-react';

const sampleBooks = [
  { id: 1, title: 'Quantum Stories', author: 'A. K. Dyson', price: 129000, rating: 4.8, cover: 'https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, title: 'Neon Poetry', author: 'Lyra Nova', price: 89000, rating: 4.6, cover: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, title: 'AI & Human', author: 'R. Ito', price: 159000, rating: 4.9, cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, title: 'Cosmic Atlas', author: 'N. Vega', price: 199000, rating: 5.0, cover: 'https://images.unsplash.com/photo-1552152370-fb05b25ff17d?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, title: 'Hologram Dreams', author: 'M. Liu', price: 119000, rating: 4.7, cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=1200&auto=format&fit=crop' },
  { id: 6, title: 'Silent Orbit', author: 'T. Kepler', price: 139000, rating: 4.5, cover: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop' },
];

const BookCard = ({ book, onAdd }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    whileHover={{ y: -4 }}
    className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md hover:border-cyan-400/30 transition"
  >
    <div className="relative h-56 overflow-hidden">
      <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/60 to-transparent" />
    </div>
    <div className="p-4 text-white">
      <h3 className="font-semibold text-lg leading-tight">{book.title}</h3>
      <p className="text-white/70 text-sm">{book.author}</p>
      <div className="mt-2 flex items-center justify-between">
        <div className="flex items-center gap-1 text-amber-300">
          <Star className="h-4 w-4 fill-amber-300" />
          <span className="text-sm">{book.rating}</span>
        </div>
        <span className="font-bold">Rp {book.price.toLocaleString('id-ID')}</span>
      </div>
      <button
        onClick={() => onAdd(book)}
        className="mt-3 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-4 py-2 rounded-xl font-semibold shadow-lg shadow-fuchsia-500/30 hover:opacity-95 transition"
      >
        <Plus className="h-4 w-4" /> Tambah ke Keranjang
      </button>
    </div>
  </motion.div>
);

const BookGrid = ({ query = '', onAdd }) => {
  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return sampleBooks.filter(b =>
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section id="catalog" className="relative py-14 bg-gradient-to-b from-black to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.08),transparent_60%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between text-white mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Katalog Pilihan</h2>
            <p className="text-white/70">Direkomendasikan AI untuk Anda</p>
          </div>
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(book => (
              <BookCard key={book.id} book={book} onAdd={onAdd} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BookGrid;
