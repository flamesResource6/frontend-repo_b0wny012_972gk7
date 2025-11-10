import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookGrid from './components/BookGrid';
import CartPanel from './components/CartPanel';
import PaymentModal from './components/PaymentModal';

function App() {
  const [openCart, setOpenCart] = useState(false);
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);
  const [payOpen, setPayOpen] = useState(false);

  const total = useMemo(() => items.reduce((s, i) => s + i.price, 0), [items]);

  const addToCart = (book) => setItems((prev) => [...prev, book]);
  const removeFromCart = (idx) => setItems((prev) => prev.filter((_, i) => i !== idx));
  const checkout = () => {
    setOpenCart(false);
    setTimeout(() => setPayOpen(true), 300);
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar onCartOpen={() => setOpenCart(true)} cartCount={items.length} onSearch={setSearch} />
      <Hero />
      <BookGrid query={search} onAdd={addToCart} />

      <section id="why" className="relative py-16 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(236,72,153,0.15),transparent_40%),radial-gradient(circle_at_90%_30%,rgba(34,211,238,0.15),transparent_40%)]" />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'AI Rekomendasi',
              desc: 'Saran buku personal sesuai selera bacaan Anda. Masa depan kurasi.',
            },
            {
              title: 'Pembayaran Aman',
              desc: 'Jalur pembayaran terenkripsi dengan simulasi checkout mulus.',
            },
            {
              title: 'Pengalaman Imersif',
              desc: 'Animasi halus, 3D interaktif, dan desain futuristik 2050.',
            },
          ].map((f, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 text-white/70 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} NovaBooks — Toko buku era 2050.</p>
          <div className="text-xs">Made with love and photons ✨</div>
        </div>
      </footer>

      <CartPanel 
        open={openCart} 
        items={items} 
        onClose={() => setOpenCart(false)} 
        onRemove={removeFromCart} 
        onCheckout={checkout} 
      />

      <PaymentModal open={payOpen} total={total} onClose={() => setPayOpen(false)} />
    </div>
  );
}

export default App;
