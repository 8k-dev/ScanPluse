"use client";

import {
  ScanLine,
  WifiOff,
  Tag,
  FileSpreadsheet,
  Search,
  LayoutDashboard,
} from "lucide-react";
import { FadeIn } from "./Animate";

const features = [
  {
    icon: ScanLine,
    title: "13-Barcode Scanner",
    description:
      "QR, EAN-13, EAN-8, UPC-A, UPC-E, Code 39, Code 93, Code 128, Codabar, ITF-14, PDF417, Aztec, DataMatrix — all native, no external hardware.",
    span: "md:col-span-2 md:row-span-2",
    gradient: "from-accent/10 to-blue-500/5",
    iconBg: "bg-accent/10 text-accent",
    large: true,
  },
  {
    icon: WifiOff,
    title: "Offline Mode",
    description:
      "Continue scanning and managing inventory without internet. Data syncs automatically when you reconnect.",
    span: "md:col-span-1",
    gradient: "from-yellow-400/10 to-orange-500/5",
    iconBg: "bg-yellow-400/10 text-yellow-400",
  },
  {
    icon: Tag,
    title: "Barcode Labels",
    description:
      "Generate Code128B barcode labels for any item. Print professional labels directly from your phone.",
    span: "md:col-span-1",
    gradient: "from-success/10 to-emerald-500/5",
    iconBg: "bg-success/10 text-success",
  },
  {
    icon: FileSpreadsheet,
    title: "CSV & PDF Export",
    description:
      "One-tap export to CSV or PDF. Share via email, messaging, or cloud storage. Never copy-paste data again.",
    span: "md:col-span-1",
    gradient: "from-purple-400/10 to-pink-500/5",
    iconBg: "bg-purple-400/10 text-purple-400",
  },
  {
    icon: Search,
    title: "Smart Filters",
    description:
      "Search by name, barcode, or location. Filter by quantity, price range, and storage area. Find anything in seconds.",
    span: "md:col-span-1",
    gradient: "from-pink-400/10 to-rose-500/5",
    iconBg: "bg-pink-400/10 text-pink-400",
  },
  {
    icon: LayoutDashboard,
    title: "Live Dashboard",
    description:
      "Total units, total value, top items, location breakdown — real-time inventory intelligence at a glance.",
    span: "md:col-span-2",
    gradient: "from-accent/10 to-purple-500/5",
    iconBg: "bg-accent/10 text-accent",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            Features
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Everything You Need,
            <span className="gradient-text"> Nothing You Don&apos;t</span>
          </h2>
          <p className="mt-5 text-lg text-muted-light">
            Purpose-built for people who manage physical inventory. No
            bloat, no learning curve — just the tools that matter.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.08}>
              <div
                className={`group relative rounded-2xl bg-surface border border-border p-7 hover:border-border-hover transition-all duration-300 hover:-translate-y-1 h-full ${
                  feature.span
                }`}
              >
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <div className="relative z-10">
                  <div
                    className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${feature.iconBg} mb-5`}
                  >
                    <feature.icon
                      className={`h-5 w-5 ${feature.large ? "h-6 w-6" : ""}`}
                    />
                  </div>
                  <h3
                    className={`font-bold mb-2 ${
                      feature.large ? "text-xl" : "text-lg"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
