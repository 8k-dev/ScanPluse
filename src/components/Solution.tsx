"use client";

import { AlertTriangle, Clock, TrendingDown, ScanLine, Package, FileBarChart } from "lucide-react";
import { FadeIn } from "./Animate";

const problems = [
  {
    icon: AlertTriangle,
    stat: "40%",
    title: "Error rate",
    description: "One wrong digit cascades into misorders and lost revenue.",
    color: "text-danger",
    bg: "bg-danger/10",
  },
  {
    icon: Clock,
    stat: "12+ hrs",
    title: "Lost monthly",
    description: "Your team spends shifts updating cells instead of doing real work.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    icon: TrendingDown,
    stat: "€4,700",
    title: "Avg. annual loss",
    description: "Without real-time stock you run out of bestsellers or drown in dead inventory.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
];

const steps = [
  {
    number: "01",
    icon: ScanLine,
    title: "Scan",
    description:
      "Point your phone at any barcode — QR, EAN-13, UPC, Code 128 — it's recognized instantly.",
    detail: "13 barcode types",
    color: "from-accent to-blue-400",
  },
  {
    number: "02",
    icon: Package,
    title: "Manage",
    description:
      "Set quantities, prices, and locations. Attach photos. Everything updates in real-time.",
    detail: "Real-time sync",
    color: "from-accent/70 to-success",
  },
  {
    number: "03",
    icon: FileBarChart,
    title: "Report",
    description:
      "Export to CSV or PDF in one tap. Generate printable barcode labels backed by real numbers.",
    detail: "CSV & PDF export",
    color: "from-success to-emerald-400",
  },
];

export default function Solution() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            Why Teams Switch
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Manual Inventory Is
            <span className="text-danger"> Costing You</span>
          </h2>
          <p className="mt-5 text-lg text-muted-light">
            Every minute spent wrestling with spreadsheets is time you could
            spend growing your business. ScanPulse ends the paper trail.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, i) => (
            <FadeIn key={problem.title} delay={i * 0.12}>
              <div className="group relative rounded-2xl bg-surface border border-border p-8 hover:border-border-hover transition-all duration-300 hover:-translate-y-1 h-full">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${problem.bg} ${problem.color} mb-6`}>
                  <problem.icon className="h-6 w-6" />
                </div>
                <div className={`text-3xl font-extrabold ${problem.color}`}>
                  {problem.stat}
                </div>
                <h3 className="text-lg font-bold mt-2 mb-3">{problem.title}</h3>
                <p className="text-muted-light leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center max-w-3xl mx-auto mt-24 mb-16">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Three Steps to
            <span className="gradient-text"> Smarter Inventory</span>
          </h2>
          <p className="mt-5 text-lg text-muted-light">
            No complicated setup. No training manuals. Just scan, manage, and go.
          </p>
        </FadeIn>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-24 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-accent/40 via-success/40 to-success/50" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.15}>
                <div className="relative text-center group">
                  <div className="relative mx-auto mb-8">
                    <div className={`relative mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} p-[1px]`}>
                      <div className="flex items-center justify-center w-full h-full rounded-2xl bg-background">
                        <step.icon className="h-8 w-8 text-foreground" />
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-surface border border-border flex items-center justify-center text-xs font-bold text-accent">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-light leading-relaxed max-w-sm mx-auto mb-5">
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