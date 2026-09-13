"use client";

import { FadeIn } from "./Animate";
import PlansGrid from "./PlansGrid";

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            Pricing
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Simple, Transparent
            <span className="gradient-text"> Pricing</span>
          </h2>
          <p className="mt-5 text-lg text-muted-light">
            Start free. Upgrade when you&apos;re ready. No hidden fees, no
            surprise charges.
          </p>
        </FadeIn>

        <PlansGrid />

        <FadeIn delay={0.4}>
          <p className="text-center text-sm text-muted mt-12">
            Prices in EUR. Payments are processed securely through Ko-fi.
            Cancel anytime.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}