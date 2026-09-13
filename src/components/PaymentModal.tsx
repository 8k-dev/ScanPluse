"use client"

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Lock } from "lucide-react";
import { kofiEmbedUrl, type PaymentPlan } from "@/lib/kofi";

interface PaymentModalProps {
  open: boolean;
  plan: PaymentPlan;
  onClose: () => void;
}

/**
 * Branded checkout modal that embeds Ko-fi's widget in an iframe instead of
 * redirecting the user away. The iframe is taller than its visible window
 * so Ko-fi's branding bar at the bottom is cropped out.
 */
export default function PaymentModal({ open, plan, onClose }: PaymentModalProps) {
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[560px] overflow-hidden rounded-3xl glass shadow-2xl shadow-black/50"
          >
            <div className="flex items-center justify-between px-7 py-6 border-b border-border">
              <div>
                <h3 className="text-lg font-bold">
                  {plan === "monthly" ? "Premium Monthly" : "Lifetime Access"}
                </h3>
                <p className="text-sm text-muted flex items-center gap-1.5 mt-0.5">
                  <Lock className="h-3.5 w-3.5" />
                  Secure checkout via Ko-fi
                </p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-muted hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="relative h-[440px] overflow-hidden">
              <div className="absolute -bottom-2 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
              <iframe
                title="Payment"
                src={kofiEmbedUrl(plan)}
                className="absolute -top-12 left-0 h-[560px] w-full"
                loading="lazy"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}