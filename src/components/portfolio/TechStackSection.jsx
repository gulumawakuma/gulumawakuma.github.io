import React from "react";
import { motion as Motion } from "framer-motion";
import { Server, Monitor, Smartphone } from "lucide-react";

const pillars = [
  {
    icon: Server,
    title: "Backend",
    subtitle: "The Foundation",
    color: "text-primary",
    borderColor: "border-primary/30",
    bgColor: "bg-primary/5",
    techs: [
      { name: "Node.js (Express)", level: 95 },
      { name: "REST APIs", level: 95 },
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 86 },
      { name: "MySQL", level: 84 },
      { name: "Docker & CI/CD", level: 80 },
      { name: "Spring Boot", level: 70 },
      { name: "Laravel", level: 68 },
    ],
  },
  {
    icon: Monitor,
    title: "Frontend",
    subtitle: "The Surface",
    color: "text-foreground",
    borderColor: "border-foreground/20",
    bgColor: "bg-foreground/5",
    techs: [
      { name: "React", level: 96 },
      { name: "TypeScript", level: 92 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "Tailwind CSS", level: 93 },
      { name: "HTML & CSS", level: 95 },
      { name: "Angular", level: 72 },
    ],
  },
  {
    icon: Smartphone,
    title: "iOS",
    subtitle: "The Pulse",
    color: "text-accent",
    borderColor: "border-accent/30",
    bgColor: "bg-accent/5",
    techs: [
      { name: "Swift", level: 93 },
      { name: "SwiftUI", level: 92 },
      { name: "UIKit", level: 88 },
      { name: "Core Data", level: 84 },
      { name: "Combine", level: 82 },
      { name: "Git & Agile/Scrum", level: 90 },
    ],
  },
];

function SkillBar({ name, level, delay, color }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1.5">
        <span className="text-xs font-mono tracking-wider text-muted-foreground">{name}</span>
        <span className="text-xs font-mono text-muted-foreground/60">{level}%</span>
      </div>
      <div className="h-1 bg-muted rounded-full overflow-hidden">
        <Motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className={`h-full rounded-full ${
            color === "text-primary" ? "bg-primary" :
            color === "text-accent" ? "bg-accent" :
            "bg-foreground/60"
          }`}
        />
      </div>
    </div>
  );
}

export default function TechStackSection() {
  return (
    <section id="stack" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <Motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.3em] text-primary mb-4"
        >
          EXPERTISE
        </Motion.p>
        <Motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-[-0.04em] mb-16"
        >
          Tech Stack
        </Motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, pi) => (
            <Motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: pi * 0.15 }}
              className={`relative rounded-2xl border ${pillar.borderColor} ${pillar.bgColor} p-8 group hover:border-opacity-60 transition-all duration-500 light-card`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-lg ${pillar.bgColor} border ${pillar.borderColor}`}>
                  <pillar.icon size={20} className={pillar.color} />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold">{pillar.title}</h3>
                  <p className="text-xs font-mono text-muted-foreground tracking-wider">
                    {pillar.subtitle}
                  </p>
                </div>
              </div>

              <div className="my-6 h-[1px] bg-border/50" />

              {/* Skills */}
              {pillar.techs.map((tech, ti) => (
                <SkillBar
                  key={tech.name}
                  name={tech.name}
                  level={tech.level}
                  delay={pi * 0.15 + ti * 0.08}
                  color={pillar.color}
                />
              ))}
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}