"use client";

import { Check } from "lucide-react";
import { FadeIn } from "./Animate";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "Perfect for small businesses and personal inventory tracking.",
    features: [
      "Up to 200 items",
      "Barcode scanning",
      "CSV export",
      "1 location",
      "Offline mode",
      "Basic search",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$9",
    period: "/month",
    description: "For growing businesses that need advanced tools and more capacity.",
    features: [
      "Unlimited items",
      "All 13 barcode types",
      "CSV & PDF export",
      "Unlimited locations",
      "Offline mode",
      "Smart filters",
      "Barcode label generator",
      "Dashboard analytics",
      "Priority support",
    ],
    cta: "Start 14-Day Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$29",
    period: "/month",
    description: "For teams that need advanced controls and dedicated support.",
    features: [
      "Everything in Pro",
      "Multi-user access",
      "API access",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Advanced analytics",
      "Data backup & restore",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
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

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1}>
              <div
                className={`relative rounded-2xl p-8 h-full flex flex-col ${
                  plan.popular
                    ? "bg-surface border-2 border-accent shadow-xl shadow-accent/10"
                    : "bg-surface border border-border hover:border-border-hover"
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-white text-xs font-bold">
                    Most Popular
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="text-sm text-muted-light mt-2 h-10">
                    {plan.description}
                  </p>
                  <div className="mt-5 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold">
                      {plan.price}
                    </span>
                    <span className="text-muted text-sm">{plan.period}</span>
                  </div>
                </div>

                <ul className="mt-8 space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="h-4.5 w-4.5 text-success mt-0.5 shrink-0" />
                      <span className="text-muted-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={`mt-8 block w-full text-center py-3.5 rounded-full font-semibold text-sm transition-all ${
                    plan.popular
                      ? "bg-accent hover:bg-accent-hover text-white hover:shadow-lg hover:shadow-accent/25"
                      : "bg-white/5 hover:bg-white/10 text-foreground border border-border hover:border-border-hover"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <p className="text-center text-sm text-muted mt-8">
            All plans include SSL encryption, automatic backups, and a
            30-day money-back guarantee.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}