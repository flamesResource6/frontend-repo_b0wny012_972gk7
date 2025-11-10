import React from 'react';
import { ShoppingCart, Search, Sparkles } from 'lucide-react';

const Navbar = ({ onCartOpen, cartCount, onSearch }) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-4">
        <div className="flex items-center gap-2 text-white">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 via-cyan-400 to-indigo-500 animate-pulse shadow-lg shadow-fuchsia-500/30" />
          <span className="font-semibold tracking-wide text-lg">NovaBooks</span>
          <Sparkles className="h-4 w-4 text-cyan-300" />
        </div>

        <div className="hidden md:flex flex-1 max-w-xl items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white">
          <Search className="h-4 w-4 text-white/60" />
          <input
            type="text"
            placeholder="Cari judul, penulis, atau genre..."
            onChange={(e) => onSearch?.(e.target.value)}
            className="w-full bg-transparent outline-none placeholder-white/50 text-sm"
          />
        </div>

        <nav className="ml-auto flex items-center gap-3">
          <button
            onClick={onCartOpen}
            className="relative inline-flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2 rounded-xl transition"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="hidden sm:inline">Keranjang</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 h-5 w-5 text-[10px] grid place-items-center rounded-full bg-fuchsia-500 text-white font-bold shadow-lg">
                {cartCount}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
