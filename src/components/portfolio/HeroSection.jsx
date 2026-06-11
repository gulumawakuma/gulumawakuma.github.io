import React from "react";
import { motion as M } from "framer-motion";
import { ArrowDown, MapPin, Download } from "lucide-react";
import { scrollToSection, usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

const RESUME_URL = "/resume.pdf";

const coreTruths = [
  "FULL-STACK ENGINEER",
  "SCALABLE BACKENDS",
  "REACT SPECIALIST",
  "API DESIGN",
  "MOBILE APPLICATIONS",
  "SYSTEM ARCHITECTURE",
  "CLEAN CODE ADVOCATE",
  "CONTINUOUS LEARNER"
];

export default function HeroSection() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-bg" />
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      {/* Grid lines */}
      <div className="absolute inset-0 hero-grid pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[80vh]">

          {/* Left - Portrait */}
          <M.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-border light-card">
              <img
                src="/hero.jpg"
                alt="Guluma Wakuma - Full-Stack & iOS Developer"
                width={800}
                height={800}
                fetchPriority="high"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 hero-portrait-overlay pointer-events-none" />
              
              {/* Location badge */}
              <M.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-6 left-6 surface-badge rounded-full px-4 py-2 flex items-center gap-2"
              >
                <MapPin size={14} className="text-accent" />
                <span className="text-xs font-mono tracking-wider text-foreground/80">
                  ADDIS ABABA, ET
                </span>
              </M.div>
            </div>

            {/* Decorative teal line */}
            <M.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -left-4 top-8 bottom-8 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-transparent origin-top hidden lg:block"
            />
          </M.div>

          {/* Right - Content */}
          <M.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-1 lg:order-2 flex flex-col justify-center"
          >
            <M.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-mono text-xs tracking-[0.3em] text-primary mb-4"
            >
              FULL-STACK &amp; iOS SOFTWARE ENGINEER
            </M.p>

            <M.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-3 mb-6"
            >
              <span className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-xs font-mono font-semibold tracking-wide text-foreground">
                <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
                  {!prefersReducedMotion && (
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  )}
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Open to work
              </span>
              <span className="text-xs font-mono text-muted-foreground tracking-wide">
                Full-time · Freelance · Remote
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground/80 tracking-wide">
                <MapPin size={12} className="text-accent shrink-0" />
                Addis Ababa · EAT (UTC+3)
              </span>
            </M.div>

            <h1 className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-[-0.04em] mb-8">
              <M.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="block text-foreground"
              >
                Guluma
              </M.span>
              <M.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="block text-accent"
              >
                Wakuma
              </M.span>
            </h1>

            <M.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground max-w-lg mb-6 leading-relaxed"
            >
              I build high-quality, scalable web and native iOS applications 
              that deliver exceptional user experiences — from concept to production.
            </M.p>
            <M.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-sm font-mono text-primary/80 max-w-lg mb-10 border-l-2 border-primary/40 pl-4 italic leading-relaxed"
            >
              "Code with clarity, build for purpose, innovate with passion."
            </M.p>

            {/* CTA */}
            <M.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <M.a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-mono font-semibold tracking-wider text-sm hover:bg-accent/90 transition-colors cursor-pointer"
              >
                <Download size={16} />
                Download Resume
              </M.a>
              <M.button
                onClick={() => scrollToSection("#contact", prefersReducedMotion)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-mono font-semibold tracking-wider text-sm hover:border-primary/50 hover:bg-muted/50 transition-colors cursor-pointer"
              >
                Get in Touch
              </M.button>
            </M.div>

            {/* Core Truths */}
            <div className="flex flex-wrap gap-2 mb-12">
              {coreTruths.map((truth, i) => (
                <M.span
                  key={truth}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                  className="px-3 py-1.5 text-[10px] font-mono tracking-widest border border-border rounded-full text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors cursor-default"
                >
                  {truth}
                </M.span>
              ))}
            </div>

            {/* Scroll indicator */}
            <M.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex items-center gap-3 text-muted-foreground"
            >
              <M.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <ArrowDown size={16} />
              </M.div>
              <span className="text-xs font-mono tracking-widest">SCROLL TO EXPLORE</span>
            </M.div>
          </M.div>
        </div>
      </div>
    </section>
  );
}