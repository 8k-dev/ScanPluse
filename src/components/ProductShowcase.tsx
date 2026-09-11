"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./Animate";

const tabs = [
  {
    id: "scanner",
    label: "Scanner",
    description: "Point, scan, done. The camera recognizes 13 barcode types with a centered target box for precision.",
  },
  {
    id: "vault",
    label: "Inventory Vault",
    description: "Your entire stock at a glance. Search, filter, long-press to quick-increment, tap to edit.",
  },
  {
    id: "dashboard",
    label: "Dashboard",
    description: "Real-time stats: total units, total value, top items by quantity, and location breakdown.",
  },
  {
    id: "labels",
    label: "Barcode Labels",
    description: "Generate Code128B barcodes for any item. Preview before printing. Perfect for warehouse labeling.",
  },
];

function ScannerScreen() {
  return (
    <div className="w-full h-full bg-[#0a0b0d] rounded-xl overflow-hidden relative">
      <div className="px-4 pt-8 pb-3">
        <div className="text-xs font-bold text-foreground">ScanPulse</div>
        <div className="text-[10px] text-muted mt-0.5">Tap to scan barcode</div>
      </div>
      <div className="relative mx-4 aspect-[4/3] rounded-xl bg-[#111214] border border-border overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-accent rounded-tl-lg" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-accent rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-accent rounded-bl-lg" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-accent rounded-br-lg" />
          <div className="absolute left-4 right-4 h-0.5 bg-accent/60 animate-scan-line" />
          <div className="flex gap-[2px] items-end opacity-25">
            {[3,1,2,1,3,1,1,2,3,1,2,1,3,1,1,2,1,3,1,2,3,1,1,2].map((w, i) => (
              <div key={i} className="bg-white" style={{ width: `${w}px`, height: `${16 + (i % 4) * 3}px` }} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <div className="w-16 h-16 rounded-full border-4 border-accent flex items-center justify-center">
          <div className="w-11 h-11 rounded-full bg-accent/20 flex items-center justify-center">
            <div className="w-7 h-7 rounded-full bg-accent" />
          </div>
        </div>
      </div>
    </div>
  );
}

function VaultScreen() {
  const items = [
    { name: "Widget Pro", barcode: "8901234567", qty: 142, price: "$24.99", loc: "A1" },
    { name: "Gadget Mini", barcode: "7654321098", qty: 87, price: "$12.50", loc: "B3" },
    { name: "Component X", barcode: "5432109876", qty: 23, price: "$89.00", loc: "C2" },
    { name: "Adapter Kit", barcode: "3210987654", qty: 310, price: "$6.75", loc: "A4" },
    { name: "Sensor Pack", barcode: "1098765432", qty: 56, price: "$45.00", loc: "D1" },
  ];
  return (
    <div className="w-full h-full bg-[#0a0b0d] rounded-xl overflow-hidden">
      <div className="px-4 pt-8 pb-3 flex items-center justify-between">
        <div>
          <div className="text-xs font-bold text-foreground">Inventory Vault</div>
          <div className="text-[10px] text-muted mt-0.5">5 items</div>
        </div>
        <div className="px-2.5 py-1 rounded-md bg-accent/10 text-accent text-[10px] font-medium">+ Add</div>
      </div>
      <div className="px-3 pb-3">
        <div className="px-3 py-2 rounded-lg bg-[#111214] border border-border text-[10px] text-muted flex items-center gap-2">
          <span>Search items...</span>
        </div>
      </div>
      <div className="px-3 space-y-2">
        {items.map((item) => (
          <div key={item.barcode} className="p-3 rounded-xl bg-[#111214] border border-border">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-[11px] font-semibold text-foreground">{item.name}</div>
                <div className="text-[9px] text-muted mt-0.5">{item.barcode}</div>
              </div>
              <div className="text-right">
                <div className="text-[11px] font-bold text-accent">{item.qty}</div>
                <div className="text-[9px] text-muted">{item.price}</div>
              </div>
            </div>
            <div className="mt-1.5 flex items-center gap-1.5">
              <span className="px-1.5 py-0.5 rounded bg-white/5 text-[8px] text-muted-light">{item.loc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DashboardScreen() {
  return (
    <div className="w-full h-full bg-[#0a0b0d] rounded-xl overflow-hidden">
      <div className="px-4 pt-8 pb-3">
        <div className="text-xs font-bold text-foreground">Dashboard</div>
        <div className="text-[10px] text-muted mt-0.5">Real-time overview</div>
      </div>
      <div className="px-3 grid grid-cols-2 gap-2">
        {[
          { label: "Total Units", value: "618", color: "text-accent" },
          { label: "Total Value", value: "$8,429", color: "text-success" },
          { label: "Top Item", value: "Adapter Kit", color: "text-purple-400" },
          { label: "Locations", value: "4 zones", color: "text-yellow-400" },
        ].map((stat) => (
          <div key={stat.label} className="p-3 rounded-xl bg-[#111214] border border-border">
            <div className="text-[9px] text-muted uppercase tracking-wider">{stat.label}</div>
            <div className={`text-sm font-bold mt-1 ${stat.color}`}>{stat.value}</div>
          </div>
        ))}
      </div>
      <div className="px-3 mt-3">
        <div className="p-3 rounded-xl bg-[#111214] border border-border">
          <div className="text-[9px] text-muted uppercase tracking-wider mb-2">Quick Actions</div>
          <div className="flex gap-2">
            <div className="flex-1 py-2 rounded-lg bg-accent/10 text-accent text-[10px] font-medium text-center">Export CSV</div>
            <div className="flex-1 py-2 rounded-lg bg-success/10 text-success text-[10px] font-medium text-center">Export PDF</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LabelsScreen() {
  return (
    <div className="w-full h-full bg-[#0a0b0d] rounded-xl overflow-hidden">
      <div className="px-4 pt-8 pb-3">
        <div className="text-xs font-bold text-foreground">Barcode Label</div>
        <div className="text-[10px] text-muted mt-0.5">Code128B Generator</div>
      </div>
      <div className="px-4">
        <div className="p-4 rounded-xl bg-white">
          <div className="text-center text-[10px] text-black font-bold mb-2">Widget Pro</div>
          <div className="flex justify-center gap-[1px] items-end mb-1">
            {[2,1,3,1,1,2,3,1,2,1,3,1,1,2,1,3,2,1,1,3,1,2,3,1,1,2,1,3,1,2,1,3,1,1,2].map((w, i) => (
              <div key={i} className="bg-black" style={{ width: `${w}px`, height: `${30 + (i % 3) * 5}px` }} />
            ))}
          </div>
          <div className="text-center text-[8px] text-black font-mono mt-1">8901234567890</div>
        </div>
        <div className="mt-3 text-center">
          <div className="inline-flex px-4 py-2 rounded-lg bg-accent/10 text-accent text-[10px] font-medium">
            Print Label
          </div>
        </div>
      </div>
    </div>
  );
}

const screens: Record<string, React.ReactNode> = {
  scanner: <ScannerScreen />,
  vault: <VaultScreen />,
  dashboard: <DashboardScreen />,
  labels: <LabelsScreen />,
};

export default function ProductShowcase() {
  const [active, setActive] = useState("scanner");

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            Product
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            See It in Action
          </h2>
          <p className="mt-5 text-lg text-muted-light">
            Every screen designed for speed and clarity. Built for the
            warehouse floor, not a desk.
          </p>
        </FadeIn>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <FadeIn direction="left" className="lg:w-1/3">
            <div className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 ${
                    active === tab.id
                      ? "bg-surface border-accent/30 shadow-lg shadow-accent/5"
                      : "bg-transparent border-transparent hover:bg-surface/50 hover:border-border"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full transition-colors ${
                        active === tab.id ? "bg-accent" : "bg-muted/40"
                      }`}
                    />
                    <span
                      className={`font-semibold transition-colors ${
                        active === tab.id ? "text-foreground" : "text-muted-light"
                      }`}
                    >
                      {tab.label}
                    </span>
                  </div>
                  <AnimatePresence>
                    {active === tab.id && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-sm text-muted-light mt-2 ml-5 leading-relaxed"
                      >
                        {tab.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="right" className="lg:w-2/3 flex justify-center">
            <div className="relative w-[300px] sm:w-[340px] h-[500px] sm:h-[560px]">
              <div className="absolute -inset-6 bg-accent/10 rounded-[48px] blur-xl" />
              <div className="relative w-full h-full rounded-[36px] bg-[#1a1b1e] border-2 border-[#2a2b2e] p-3 shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#1a1b1e] rounded-b-2xl z-10" />
                <div className="relative w-full h-full rounded-[28px] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full"
                    >
                      {screens[active]}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}