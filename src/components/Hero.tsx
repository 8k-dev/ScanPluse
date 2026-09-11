"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { FadeIn } from "./Animate";

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[320px]">
      <div className="absolute -inset-4 bg-accent/20 rounded-[40px] blur-2xl" />
      <div className="relative rounded-[36px] bg-[#1a1b1e] border-2 border-[#2a2b2e] p-3 shadow-2xl shadow-black/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#1a1b1e] rounded-b-2xl z-10" />
        <div className="relative rounded-[28px] bg-[#0a0b0d] overflow-hidden aspect-[9/19]">
          {/* Status bar */}
          <div className="flex justify-between items-center px-6 pt-3 text-[10px] text-muted font-medium">
            <span>9:41</span>
            <div className="flex gap-1 items-center">
              <div className="w-4 h-2.5 border border-muted rounded-sm relative">
                <div className="absolute inset-[1px] right-[2px] bg-success rounded-[1px]" />
              </div>
            </div>
          </div>

          {/* App header */}
          <div className="px-4 pt-4 pb-3">
            <div className="text-xs font-bold text-foreground tracking-tight">
              ScanPulse
            </div>
            <div className="text-[9px] text-muted mt-0.5">Tap to scan barcode</div>
          </div>

          {/* Camera viewfinder */}
          <div className="relative mx-4 aspect-[4/3] rounded-xl bg-[#111214] border border-border overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Corner brackets */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-accent rounded-tl-md" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-accent rounded-tr-md" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-accent rounded-bl-md" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-accent rounded-br-md" />
              {/* Scan line */}
              <div className="absolute left-3 right-3 h-0.5 bg-accent/60 animate-scan-line" />
              {/* Barcode placeholder */}
              <div className="flex gap-[2px] items-end opacity-30">
                {[3,1,2,1,3,1,1,2,3,1,2,1,3,1,1,2,1,3,1,2,3,1].map((w, i) => (
                  <div
                    key={i}
                    className="bg-white/60"
                    style={{ width: `${w}px`, height: `${14 + (i % 3) * 4}px` }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Scan button */}
          <div className="flex justify-center mt-4">
            <div className="w-14 h-14 rounded-full border-4 border-accent flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-accent" />
              </div>
            </div>
          </div>

          {/* Bottom nav */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-around py-3 px-4 bg-[#111214]/80 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-1">
              <div className="w-5 h-5 rounded-md bg-accent/20 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-accent rounded-sm" />
              </div>
              <span className="text-[8px] text-accent font-medium">Scan</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-5 h-5 flex items-center justify-center">
                <div className="w-4 h-3 border border-muted rounded-sm" />
              </div>
              <span className="text-[8px] text-muted">Vault</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="hero-glow top-[-200px] left-1/2 -translate-x-1/2" />
      <div className="hero-glow bottom-[-100px] left-[-200px] opacity-50" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                Barcode Inventory, Reimagined
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                <span className="text-foreground">Scan.</span>{" "}
                <span className="text-foreground">Track.</span>{" "}
                <span className="gradient-text">Reorder.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="mt-6 text-lg sm:text-xl text-muted-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                The barcode inventory app that replaces spreadsheets. Scan
                items in seconds, track stock in real-time, never run out
                again.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#pricing"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-full transition-all hover:shadow-xl hover:shadow-accent/25 text-base"
                >
                  Start Free — No Credit Card
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-foreground font-semibold rounded-full border border-border hover:border-border-hover transition-all text-base"
                >
                  <Play className="h-4 w-4" />
                  Watch Demo
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="mt-10 flex items-center gap-6 justify-center lg:justify-start text-sm text-muted">
                <div className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>4.9 / 5 rating</span>
                </div>
                <div className="h-4 w-px bg-border" />
                <span>Free forever plan</span>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} direction="right" className="flex justify-center lg:justify-end">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <PhoneMockup />
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
