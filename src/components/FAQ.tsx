"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "./Animate";

const faqs = [
  {
    question: "What barcode types does ScanPulse support?",
    answer:
      "ScanPulse supports 13 barcode symbologies: QR Code, EAN-13, EAN-8, UPC-A, UPC-E, Code 39, Code 93, Code 128, Codabar, ITF-14, PDF417, Aztec, and DataMatrix. Recognition happens natively on your device — no external scanner hardware required.",
  },
  {
    question: "Does it work without internet?",
    answer:
      "Yes. ScanPulse has a full offline mode powered by local caching. You can scan barcodes, add and edit items, and manage your inventory entirely offline. Data syncs automatically when your connection returns.",
  },
  {
    question: "Can I export my inventory data?",
    answer:
      "Absolutely. You can export your entire inventory as a CSV file or a professionally formatted PDF with one tap. Share via email, messaging apps, or cloud storage.",
  },
  {
    question: "How does the barcode label generator work?",
    answer:
      "ScanPulse includes a built-in Code128B barcode encoder. Enter any item name and the app generates a scannable label preview that you can print directly from your phone. No internet connection needed.",
  },
  {
    question: "How much does the Premium plan cost?",
    answer:
      "The Free plan includes up to 10 items at no cost. Premium costs €5 per month and unlocks unlimited items plus every feature. A Lifetime plan is available for a one-time €20 payment — no recurring charges, ever.",
  },
  {
    question: "How are payments handled?",
    answer:
      "Payments are processed securely through Ko-fi. The monthly Premium plan self-renews via your Ko-fi membership and gives you 30 more days each payment. Lifetime access is a single payment that never expires and includes all future features.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Your data is encrypted in transit and at rest. Only you can access your inventory data, and we never sell or share your information with third parties.",
  },
  {
    question: "What platforms are supported?",
    answer:
      "ScanPulse is available on iOS and Android as a native app and works as a web application in any modern browser. Your data syncs seamlessly across all devices.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-6 text-left group"
      >
        <span
          className={`text-base font-semibold transition-colors pr-4 ${
            isOpen ? "text-accent" : "text-foreground group-hover:text-accent/80"
          }`}
        >
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown className="h-5 w-5 text-muted" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm text-muted-light leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-20">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Frequently Asked
            <span className="gradient-text"> Questions</span>
          </h2>
          <p className="mt-5 text-lg text-muted-light">
            Everything you need to know about ScanPulse.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="bg-surface rounded-2xl border border-border p-6 sm:p-8">
            {faqs.map((faq, i) => (
              <FAQItem
                key={faq.question}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}