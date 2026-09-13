"use client";

import { Star, Quote } from "lucide-react";
import { FadeIn } from "./Animate";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Operations Manager",
    company: "QuickMart Retail",
    avatar: "SC",
    rating: 5,
    quote:
      "We cut our weekly inventory count from 3 hours to 15 minutes. The offline mode means our warehouse never worries about connectivity.",
    color: "bg-accent",
  },
  {
    name: "Marcus Johnson",
    role: "Owner",
    company: "JJ Electronics",
    avatar: "MJ",
    rating: 5,
    quote:
      "Now I scan a barcode and everything updates — quantity, price, location. The CSV export alone saved me hours every week.",
    color: "bg-success",
  },
  {
    name: "Elena Rodriguez",
    role: "Supply Chain Lead",
    company: "FreshFoods Co.",
    avatar: "ER",
    rating: 5,
    quote:
      "The label generator is a game-changer. We labeled our entire cold storage in an afternoon and gained real-time visibility.",
    color: "bg-teal-500",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Loved by Teams Who
            <span className="gradient-text"> Actually Use It</span>
          </h2>
          <p className="mt-5 text-lg text-muted-light">
            Real stories from businesses that ditched spreadsheets and never
            looked back.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.12}>
              <div className="group relative rounded-2xl bg-surface border border-border p-8 hover:border-border-hover transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <Quote className="h-8 w-8 text-accent/20 mb-5" />

                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 text-yellow-400" fill="currentColor" />
                  ))}
                </div>

                <p className="text-base text-muted-light leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="mt-6 pt-5 border-t border-border flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-sm font-bold text-white`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted">{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}