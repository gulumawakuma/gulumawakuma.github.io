import React, { useRef } from "react";
import { motion as Motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Inisra",
    description: "A WeWork-style co-working platform with a full admin dashboard — workspace booking, member management, billing, and real-time analytics built end-to-end.",
    platform: "FULL-STACK",
    tags: ["REACT", "NODE.JS", "EXPRESS", "POSTGRESQL"],
    image: "https://media.base44.com/images/public/6a252a130a6d44cc87309d9e/901f2c158_generated_image.png",
    role: "Backend & Admin Dashboard",
    type: "solo",
  },
  {
    title: "ORA",
    description: "A comprehensive POS and inventory management system enabling real-time stock tracking, sales reporting, and multi-location product management.",
    platform: "FULL-STACK",
    tags: ["REACT", "NODE.JS", "EXPRESS", "MONGODB"],
    image: "https://media.base44.com/images/public/6a252a130a6d44cc87309d9e/3633ecbb8_generated_image.png",
    role: "Full-Stack Engineer",
    type: "solo",
  },
  {
    title: "Fetness Track",
    description: "A native iOS fitness tracking app delivering personalized workout plans, progress visualization, and health metrics — built with a polished SwiftUI interface.",
    platform: "iOS • SWIFT",
    tags: ["SWIFT", "SWIFTUI", "CORE DATA"],
    image: "https://media.base44.com/images/public/6a252a130a6d44cc87309d9e/26ec04780_generated_image.png",
    role: "iOS Engineer",
    type: "solo",
  },
  {
    title: "ABCMS",
    description: "An AI-powered customs management system for streamlining import/export processing, automated document verification, and intelligent risk assessment.",
    platform: "FULL-STACK",
    tags: ["AI/ML", "PYTHON", "REACT", "NODE.JS"],
    image: "https://media.base44.com/images/public/6a252a130a6d44cc87309d9e/6c655b8a7_generated_image.png",
    role: "Team Contributor",
    type: "team",
  },
  {
    title: "CaseFlow",
    description: "A case flow management system enabling legal teams to track, assign, and resolve cases with automated workflows, audit trails, and status dashboards.",
    platform: "FULL-STACK",
    tags: ["REACT", "NODE.JS", "POSTGRESQL"],
    image: "https://media.base44.com/images/public/6a252a130a6d44cc87309d9e/d97ec4811_generated_image.png",
    role: "Team Contributor",
    type: "team",
  },
  {
    title: "Agentic AI",
    description: "A multi-agent AI orchestration platform where autonomous agents collaborate to complete complex tasks — built with modern LLM tooling and agent frameworks.",
    platform: "AI • AGENTS",
    tags: ["PYTHON", "LLMs", "AGENT FRAMEWORKS"],
    image: "https://media.base44.com/images/public/6a252a130a6d44cc87309d9e/f80d3ce39_generated_image.png",
    role: "Team Contributor",
    type: "team",
  },
];

export default function ProjectsSection() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const amount = dir === "left" ? -420 : 420;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex items-end justify-between">
          <div>
            <Motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-xs tracking-[0.3em] text-primary mb-4"
            >
              SELECTED WORK
            </Motion.p>
            <Motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-[-0.04em]"
            >
              Projects
            </Motion.h2>
          </div>

          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal scroll gallery */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto overflow-y-hidden hide-scrollbar px-6 lg:px-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))] scroll-px-6 lg:scroll-px-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))] snap-x snap-mandatory pb-4"
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}