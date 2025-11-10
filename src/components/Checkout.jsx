import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CreditCard, Truck, ShieldCheck } from 'lucide-react';

const Checkout = ({ open, onClose, items, onPay }) => {
  const total = useMemo(() => items.reduce((s, it) => s + it.price, 0), [items]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/60" onClick={onClose} />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 140, damping: 18 }}
            className="relative ml-auto h-full w-full sm:w-[460px] bg-slate-950 border-l border-white/10 p-6 overflow-y-auto"
          >
            <div className="flex items-center justify-between text-white mb-4">
              <h3 className="text-xl font-semibold">Keranjang</h3>
              <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-3">
              {items.length === 0 && (
                <div className="text-white/70">Keranjang kosong. Tambahkan buku terlebih dahulu.</div>
              )}
              {items.map((it, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3">
                  <img src={it.cover} alt={it.title} className="h-14 w-14 object-cover rounded-lg" />
                  <div className="flex-1 text-white">
                    <div className="font-medium leading-tight">{it.title}</div>
                    <div className="text-xs text-white/60">{it.author}</div>
                  </div>
                  <div className="text-white font-semibold">Rp {it.price.toLocaleString('id-ID')}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10 border border-white/10 rounded-xl text-white">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-cyan-300" />
                <p className="text-sm text-white/80">Pembayaran terenkripsi dan pengiriman cepat 24-48 jam.</p>
              </div>
            </div>

            <div className="mt-6 text-white">
              <div className="flex items-center justify-between">
                <span className="text-white/70">Subtotal</span>
                <span className="font-semibold">Rp {total.toLocaleString('id-ID')}</span>
              </div>
              <button
                disabled={items.length === 0}
                onClick={() => onPay(total)}
                className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 px-4 py-3 rounded-xl font-semibold shadow-lg hover:opacity-95 transition disabled:opacity-50"
              >
                <CreditCard className="h-5 w-5" /> Bayar Sekarang
              </button>
              <div className="mt-3 flex items-center justify-center gap-2 text-white/70 text-sm">
                <Truck className="h-4 w-4" /> Gratis ongkir untuk pesanan di atas Rp100.000
              </div>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Checkout;
