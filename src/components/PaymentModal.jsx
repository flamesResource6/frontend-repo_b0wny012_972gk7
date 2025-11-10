import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X, QrCode, CreditCard, Smartphone } from 'lucide-react';

const PaymentModal = ({ open, onClose, amount }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[70] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/70" onClick={onClose} />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 160, damping: 18 }}
            className="relative w-[95%] sm:w-[520px] bg-slate-950 border border-white/10 rounded-2xl p-6 text-white"
          >
            <button onClick={onClose} className="absolute top-3 right-3 p-2 hover:bg-white/10 rounded-lg">
              <X className="h-5 w-5" />
            </button>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-3 py-1 text-xs mb-4">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Pembayaran Instan 2050
              </div>
              <h3 className="text-2xl font-bold">Selesaikan Pembayaran</h3>
              <p className="text-white/70 mt-1">Total: <span className="font-semibold text-white">Rp {amount.toLocaleString('id-ID')}</span></p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <QrCode className="h-8 w-8 mx-auto text-cyan-300" />
                  <div className="mt-2 text-sm text-white/80">QRIS</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <CreditCard className="h-8 w-8 mx-auto text-fuchsia-300" />
                  <div className="mt-2 text-sm text-white/80">Kartu</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <Smartphone className="h-8 w-8 mx-auto text-emerald-300" />
                  <div className="mt-2 text-sm text-white/80">E-Wallet</div>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-white/10 rounded-xl p-4 text-left text-white/80 text-sm">
                Dana akan diproses otomatis. Ini adalah simulasi pembayaran untuk demo.
              </div>

              <button onClick={onClose} className="mt-6 w-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-4 py-3 rounded-xl font-semibold shadow-lg hover:opacity-95 transition">
                Selesai
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PaymentModal;
