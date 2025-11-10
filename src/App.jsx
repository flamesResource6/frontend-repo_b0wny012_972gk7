import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BookGrid from './components/BookGrid';
import Checkout from './components/Checkout';

function App() {
  const [query, setQuery] = useState('');
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const total = useMemo(() => cart.reduce((s, it) => s + it.price, 0), [cart]);

  const handleAdd = (book) => {
    setCart((c) => [...c, book]);
  };

  const handlePay = () => {
    // Simulasi pembayaran instan
    setCartOpen(false);
    setTimeout(() => {
      alert(`Pembayaran berhasil! Total: Rp ${total.toLocaleString('id-ID')}`);
      setCart([]);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar onCartOpen={() => setCartOpen(true)} cartCount={cart.length} onSearch={setQuery} />
      <HeroSection />
      <BookGrid query={query} onAdd={handleAdd} />

      <footer className="relative py-10 bg-slate-950 text-white/70">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <div className="text-white font-semibold">NovaBooks</div>
            <p className="text-white/60 mt-2 text-sm">Toko buku futuristik dengan kurasi AI dan pembayaran kilat.</p>
          </div>
          <div>
            <div className="text-white font-semibold mb-2">Bantuan</div>
            <ul className="space-y-1 text-sm">
              <li>Pusat Bantuan</li>
              <li>Pengiriman</li>
              <li>Kebijakan Privasi</li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold mb-2">Kategori</div>
            <ul className="space-y-1 text-sm">
              <li>Fiksi Ilmiah</li>
              <li>Bisnis</li>
              <li>Teknologi</li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold mb-2">Newsletter</div>
            <div className="flex items-center gap-2">
              <input placeholder="Email Anda" className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm outline-none" />
              <button className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-4 py-2 rounded-xl font-semibold">Kirim</button>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-white/50">© {new Date().getFullYear()} NovaBooks. All rights reserved.</div>
      </footer>

      <Checkout open={cartOpen} onClose={() => setCartOpen(false)} items={cart} onPay={handlePay} />
    </div>
  );
}

export default App;
