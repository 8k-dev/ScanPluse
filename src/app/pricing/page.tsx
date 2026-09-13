import type { Metadata } from "next";
import Header from "@/components/Header";
import PlansGrid from "@/components/PlansGrid";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pricing - ScanPulse",
  description:
    "Simple, transparent pricing for ScanPulse. Start free, upgrade when ready. No hidden fees.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="relative pt-40 pb-16 sm:pt-48 sm:pb-20 overflow-hidden">
        <div className="hero-glow top-[-100px] left-1/2 -translate-x-1/2" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            Pricing
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight max-w-2xl mx-auto">
            Simple, Transparent
            <span className="gradient-text"> Pricing</span>
          </h1>
          <p className="mt-5 text-lg text-muted-light max-w-xl mx-auto">
            Start free. Upgrade when you&apos;re ready. No hidden fees, no
            surprise charges.
          </p>
        </div>
      </section>
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PlansGrid />
          <p className="text-center text-sm text-muted mt-12">
            Prices in EUR. Payments are processed securely through Ko-fi.
            Cancel anytime.
          </p>
        </div>
      </section>
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}