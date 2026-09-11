"use client";

import { ScanLine, Package, FileBarChart } from "lucide-react";
import { FadeIn } from "./Animate";

const steps = [
  {
    number: "01",
    icon: ScanLine,
    title: "Scan",
    description:
      "Point your phone camera at any barcode — QR, EAN-13, UPC, Code 128, and 9 more symbologies recognized instantly.",
    detail: "13 barcode types",
    color: "from-accent to-blue-400",
  },
  {
    number: "02",
    icon: Package,
    title: "Manage",
    description:
      "Set quantities, prices, locations. Attach photos. Organize with smart search and filters. Everything updates in real-time.",
    detail: "Real-time sync",
    color: "from-purple-400 to-pink-400",
  },
  {
    number: "03",
    icon: FileBarChart,
    title: "Report",
    description:
      "Export to CSV or PDF in one tap. Generate printable barcode labels. Make data-driven reorder decisions backed by actual numbers.",
    detail: "CSV & PDF export",
    color: "from-success to-emerald-400",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Three Steps to
            <span className="gradient-text"> Smarter Inventory</span>
          </h2>
          <p className="mt-5 text-lg text-muted-light">
            No complicated setup. No training manuals. Just scan, manage,
            and go.
          </p>
        </FadeIn>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-24 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-accent/50 via-purple-400/50 to-success/50" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.15}>
                <div className="relative text-center group">
                  <div className="relative mx-auto mb-8">
                    <div
                      className={`relative mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} p-[1px]`}
                    >
                      <div className="flex items-center justify-center w-full h-full rounded-2xl bg-background">
                        <step.icon className="h-8 w-8 text-foreground" />
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-surface border border-border flex items-center justify-center text-xs font-bold text-accent">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-light leading-relaxed max-w-sm mx-auto mb-4">
                    {step.description}
                  </p>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-border text-xs font-medium text-muted-light">
                    {step.detail}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
