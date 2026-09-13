"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Infinity as InfinityIcon,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProtectedRoute from "@/components/ProtectedRoute";
import PaymentModal from "@/components/PaymentModal";
import { useAuth } from "@/lib/auth";
import type { PaymentPlan } from "@/lib/kofi";
import type { Plan } from "@/lib/types";

const PLAN_LABELS: Record<Plan, string> = {
  free: "Free",
  monthly: "Premium Monthly",
  lifetime: "Lifetime",
};

function formatDate(value: string): string {
  return new Date(value).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function PlanSummary() {
  const { user } = useAuth();
  const [modalPlan, setModalPlan] = useState<PaymentPlan | null>(null);

  if (!user) return null;

  const { subscription } = user;
  const isPaid = subscription.plan !== "free";

  return (
    <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent/20 via-accent/5 to-success/10 border border-border p-8 sm:p-10">
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <span
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold ${
                isPaid
                  ? "bg-accent/15 text-accent border border-accent/20"
                  : "bg-white/5 text-muted-light border border-border"
              }`}
            >
              <ShieldCheck className="h-4 w-4" />
              {PLAN_LABELS[subscription.plan]}
            </span>
            {isPaid && subscription.plan === "lifetime" && (
              <span className="inline-flex items-center gap-1.5 text-sm text-muted-light">
                <InfinityIcon className="h-4 w-4" />
                Never expires
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Welcome back, <span className="gradient-text">{user.email}</span>
          </h1>
          <p className="mt-3 text-muted-light max-w-md">
            {subscription.plan === "free" &&
              "Your free plan is active with up to 10 items. Unlock everything when you're ready."}
            {subscription.plan === "monthly" &&
              subscription.expiresAt &&
              `Your Premium subscription is active until ${formatDate(subscription.expiresAt)}.`}
            {subscription.plan === "lifetime" &&
              "You own ScanPulse Lifetime. Everything is unlocked, forever."}
          </p>
        </div>

        <div className="relative mt-8 flex flex-col sm:flex-row gap-3">
          {subscription.plan === "lifetime" ? (
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-accent hover:bg-accent-hover text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-accent/25"
            >
              Go to the app
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          ) : (
            <>
              <button
                onClick={() => setModalPlan("monthly")}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold transition-all ${
                  subscription.plan === "monthly"
                    ? "bg-white/5 text-foreground border border-border hover:border-border-hover"
                    : "bg-accent hover:bg-accent-hover text-white hover:shadow-lg hover:shadow-accent/25"
                }`}
              >
                <Sparkles className="h-4 w-4" />
                {subscription.plan === "monthly" ? "Manage with Ko-fi" : "Upgrade to Premium"}
              </button>
              <button
                onClick={() => setModalPlan("lifetime")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-foreground font-semibold text-sm border border-border hover:border-border-hover transition-all"
              >
                <InfinityIcon className="h-4 w-4" />
                Buy Lifetime Access
              </button>
            </>
          )}
        </div>

      <div className="mt-8 grid sm:grid-cols-2 gap-4">
        <Link
          href="/pricing"
          className="rounded-2xl bg-surface border border-border hover:border-border-hover p-6 transition-all duration-300 hover:-translate-y-0.5"
        >
          <div className="text-sm font-semibold mb-1">Compare plans</div>
          <p className="text-sm text-muted-light">
            See what comes with Premium and Lifetime on the pricing page.
          </p>
        </Link>
        <Link
          href="/"
          className="rounded-2xl bg-surface border border-border hover:border-border-hover p-6 transition-all duration-300 hover:-translate-y-0.5"
        >
          <div className="text-sm font-semibold mb-1">Back to home</div>
          <p className="text-sm text-muted-light">
            Learn more about ScanPulse features or read the FAQ.
          </p>
        </Link>
      </div>

      <PaymentModal
        open={modalPlan !== null}
        plan={modalPlan ?? "monthly"}
        onClose={() => setModalPlan(null)}
      />
    </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="relative pt-40 pb-24 sm:pt-48 sm:pb-32 min-h-[60vh]">
        <div className="hero-glow top-[-100px] left-1/2 -translate-x-1/2" />
        <ProtectedRoute>
          <PlanSummary />
        </ProtectedRoute>
      </section>
      <Footer />
    </main>
  );
}