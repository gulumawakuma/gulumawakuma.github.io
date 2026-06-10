import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

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
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-accent hover:gap-2.5 transition-all"
            >
              View case studies
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-border bg-card light-card flex items-center justify-center hover:bg-muted transition-colors cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-border bg-card light-card flex items-center justify-center hover:bg-muted transition-colors cursor-pointer"
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