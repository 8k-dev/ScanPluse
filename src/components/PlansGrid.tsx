"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check } from "lucide-react";
import { FadeIn } from "./Animate";
import PaymentModal from "./PaymentModal";
import { useAuth } from "@/lib/auth";
import type { PaymentPlan } from "@/lib/kofi";

const plans = [
  {
    name: "Free",
    price: "0",
    currency: "€",
    period: "forever",
    description: "For personal use and getting started.",
    features: [
      "Up to 10 inventory items",
      "Barcode scanning",
      "Offline mode",
      "Basic search",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Premium",
    price: "5",
    currency: "€",
    period: "/ month",
    description: "Everything unlocked, billed monthly. Cancel anytime.",
    features: [
      "Unlimited inventory items",
      "All 13 barcode types",
      "CSV & PDF export",
      "Homepage label generator",
      "Dashboard analytics",
      "Priority support",
    ],
    cta: "Subscribe via Ko-fi",
    popular: true,
  },
  {
    name: "Lifetime",
    price: "20",
    currency: "€",
    period: "one-time",
    description: "Pay once, own it forever. No recurring charges.",
    features: [
      "Unlimited inventory items",
      "All features unlocked",
      "No recurring charges",
      "Future features included",
    ],
    cta: "Buy Lifetime Access",
    popular: false,
  },
];

export default function PlansGrid() {
  const { user } = useAuth();
  const router = useRouter();
  const [modalPlan, setModalPlan] = useState<PaymentPlan | null>(null);

  const handleFree = () => {
    router.push(user ? "/dashboard" : "/register");
  };

  const handleCta = (plan: (typeof plans)[number]) => {
    if (plan.name === "Free") {
      handleFree();
      return;
    }
    setModalPlan(plan.name === "Premium" ? "monthly" : "lifetime");
  };

  return (
    <>
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
                <p className="text-sm text-muted-light mt-2 min-h-[40px]">
                  {plan.description}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-sm text-muted-light">{plan.currency}</span>
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="text-muted text-sm">{plan.period}</span>
                </div>
              </div>

              <ul className="mt-8 space-y-4 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="h-4 w-4 text-success mt-1 shrink-0" />
                    <span className="text-muted-light">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleCta(plan)}
                className={`mt-10 block w-full text-center py-4 rounded-full font-semibold text-sm transition-all cursor-pointer ${
                  plan.popular
                    ? "bg-accent hover:bg-accent-hover text-white hover:shadow-lg hover:shadow-accent/25"
                    : "bg-white/5 hover:bg-white/10 text-foreground border border-border hover:border-border-hover"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          </FadeIn>
        ))}
      </div>

      <PaymentModal
        open={modalPlan !== null}
        plan={modalPlan ?? "monthly"}
        onClose={() => setModalPlan(null)}
      />
    </>
  );
}