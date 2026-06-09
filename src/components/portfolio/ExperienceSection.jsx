import React from "react";
import { motion as Motion } from "framer-motion";
import { Briefcase, Calendar, ArrowRight } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer",
    org: "Ethiopian Artificial Intelligence Institute",
    period: "Present",
    current: true,
    desc: "Building and maintaining AI-driven platforms and tools at Ethiopia's national AI institute, contributing to projects spanning customs management, agentic AI, and case flow systems.",
    tags: ["AI/ML", "FULL-STACK", "PYTHON", "REACT"],
  },
  {
    role: "Remote Software Engineer",
    org: "Revelo",
    period: "2023 – 2024",
    current: false,
    desc: "Delivered high-quality full-stack solutions for international clients through Revelo's remote talent network, working across web platforms with React and Node.js.",
    tags: ["REACT", "NODE.JS", "REMOTE"],
  },
  {
    role: "Full-Stack Developer",
    org: "10 Academy",
    period: "2024",
    current: false,
    desc: "Completed an intensive full-stack development training program, building real-world projects and deepening expertise in modern web architectures and agile workflows.",
    tags: ["INTENSIVE", "FULL-STACK", "AGILE"],
  },
  {
    role: "iOS Developer",
    org: "Avrioc",
    period: "2025 – 2026",
    current: false,
    desc: "Participated in a structured iOS development training program, mastering Swift, SwiftUI, UIKit, and Apple's ecosystem to build production-ready native iOS applications.",
    tags: ["SWIFT", "SWIFTUI", "UIKIT"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <Motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.3em] text-primary mb-4"
        >
          CAREER
        </Motion.p>
        <Motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-[-0.04em] mb-4"
        >
          Experience
        </Motion.h2>
        <Motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex gap-6 mb-16"
        >
          <div className="glass-light rounded-xl px-5 py-3 flex flex-col items-center">
            <span className="text-2xl font-heading font-black text-accent">3+</span>
            <span className="text-[10px] font-mono tracking-widest text-muted-foreground mt-1">YEARS CODING</span>
          </div>
          <div className="glass-light rounded-xl px-5 py-3 flex flex-col items-center">
            <span className="text-2xl font-heading font-black text-primary">10+</span>
            <span className="text-[10px] font-mono tracking-widest text-muted-foreground mt-1">PROJECTS</span>
          </div>
        </Motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary via-primary/30 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <Motion.div
                key={exp.org}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="md:pl-16 relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 hidden md:block">
                  <div className={`w-4 h-4 rounded-full border-2 ${exp.current ? "border-accent bg-accent/30 shadow-[0_0_12px_hsl(42_80%_54%/0.5)]" : "border-primary/60 bg-primary/10"}`} />
                </div>

                <div className="glass-light rounded-2xl p-6 sm:p-8 hover:border-primary/30 border border-border/50 transition-all duration-300 group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-heading font-bold text-foreground">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 text-[9px] font-mono tracking-widest bg-accent/20 text-accent rounded-full border border-accent/30">
                            CURRENT
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-primary">
                        <Briefcase size={12} />
                        <span className="text-sm font-medium">{exp.org}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground flex-shrink-0">
                      <Calendar size={12} />
                      <span className="text-xs font-mono tracking-wider">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {exp.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono tracking-widest text-muted-foreground border border-border/60 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}