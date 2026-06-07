import React from "react";
import { motion as M } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";

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
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      
      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(198 82% 35%) 1px, transparent 1px), linear-gradient(90deg, hsl(198 82% 35%) 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[80vh]">

          {/* Left - Portrait */}
          <M.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden">
              <img
                src='/hero.png'
                alt="Guluma Wakuma - Full-Stack & iOS Developer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Location badge */}
              <M.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-6 left-6 glass-light rounded-full px-4 py-2 flex items-center gap-2"
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
              className="font-mono text-xs tracking-[0.3em] text-primary mb-6"
            >
              FULL-STACK &amp; iOS SOFTWARE ENGINEER
            </M.p>

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