import React from 'react';
import { X, Trash2, CreditCard } from 'lucide-react';

const CartPanel = ({ open, items, onClose, onRemove, onCheckout }) => {
  const total = items.reduce((sum, it) => sum + it.price, 0);

  return (
    <div className={`fixed inset-0 z-50 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/50 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-slate-900 text-white border-l border-white/10 transform transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h3 className="font-semibold">Keranjang</h3>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-4 space-y-3 overflow-y-auto h-[calc(100%-160px)]">
          {items.length === 0 ? (
            <p className="text-white/60">Belum ada item di keranjang.</p>
          ) : (
            items.map((it, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3">
                <img src={it.cover} alt={it.title} className="h-16 w-12 object-cover rounded" />
                <div className="flex-1">
                  <p className="font-medium leading-snug">{it.title}</p>
                  <p className="text-xs text-white/60">{it.author}</p>
                  <p className="font-semibold mt-1">Rp{it.price.toLocaleString('id-ID')}</p>
                </div>
                <button onClick={() => onRemove(idx)} className="p-2 hover:bg-white/10 rounded-lg">
                  <Trash2 className="h-4 w-4 text-red-400" />
                </button>
              </div>
            ))
          )}
        </div>
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center justify-between mb-3">
            <span className="text-white/60">Total</span>
            <span className="font-bold">Rp{total.toLocaleString('id-ID')}</span>
          </div>
          <button
            onClick={onCheckout}
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-fuchsia-500 to-cyan-400 hover:opacity-90 text-slate-900 font-semibold px-4 py-3 rounded-xl"
          >
            <CreditCard className="h-5 w-5" />
            Checkout Sekarang
          </button>
        </div>
      </aside>
    </div>
  );
};

export default CartPanel;
