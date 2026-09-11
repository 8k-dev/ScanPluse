"use client";

import { AlertTriangle, Clock, TrendingDown } from "lucide-react";
import { FadeIn } from "./Animate";

const problems = [
  {
    icon: AlertTriangle,
    stat: "40%",
    statLabel: "error rate",
    title: "Manual Counting Errors",
    description:
      "Handwritten tallies and spreadsheet data entry lead to costly inaccuracies. One wrong digit cascades into misorders and lost revenue.",
    color: "text-danger",
    bg: "bg-danger/10",
  },
  {
    icon: Clock,
    stat: "12+ hrs",
    statLabel: "per month wasted",
    title: "Hours Lost to Spreadsheets",
    description:
      "Your team spends entire shifts updating cells, cross-referencing lists, and hunting for discrepancies instead of doing real work.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    icon: TrendingDown,
    stat: "$4,700",
    statLabel: "avg. annual loss",
    title: "Stockouts & Overstocking",
    description:
      "Without real-time visibility, you either run out of bestsellers or drown in dead inventory tying up cash you could be spending elsewhere.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
];

export default function ProblemSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            The Problem
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Spreadsheets Are Costing You
            <span className="text-danger"> More Than You Think</span>
          </h2>
          <p className="mt-5 text-lg text-muted-light">
            Every minute your team spends wrestling with manual inventory
            is a minute they could spend growing your business.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, i) => (
            <FadeIn key={problem.title} delay={i * 0.12}>
              <div className="group relative rounded-2xl bg-surface border border-border p-8 hover:border-border-hover transition-all duration-300 hover:-translate-y-1 h-full">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${problem.bg} ${problem.color} mb-5`}>
                  <problem.icon className="h-6 w-6" />
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className={`text-3xl font-extrabold ${problem.color}`}>
                    {problem.stat}
                  </span>
                  <span className="text-xs text-muted font-medium uppercase tracking-wider">
                    {problem.statLabel}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                <p className="text-muted-light leading-relaxed text-[15px]">
                  {problem.description}
                </p>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
