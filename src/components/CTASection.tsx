"use client";

import { ArrowRight } from "lucide-react";
import { FadeIn } from "./Animate";

export default function CTASection() {
  return (
    <section id="cta" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/[0.03] to-background" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-purple-500/10 to-success/20" />
            <div className="absolute inset-0 glass" />

            <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Ready to Ditch
                <br />
                <span className="gradient-text">Your Spreadsheets?</span>
              </h2>
              <p className="mt-5 text-lg text-muted-light max-w-xl mx-auto">
                Join hundreds of teams already using ScanPulse to manage
                inventory faster, smarter, and with zero errors.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#pricing"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-full transition-all hover:shadow-xl hover:shadow-accent/25 text-base"
                >
                  Get Started Free
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-foreground font-semibold rounded-full border border-border hover:border-border-hover transition-all text-base"
                >
                  Schedule a Demo
                </a>
              </div>

              <p className="mt-6 text-sm text-muted">
                Free forever plan available. No credit card required.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}