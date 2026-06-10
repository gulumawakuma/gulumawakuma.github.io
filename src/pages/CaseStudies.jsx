import React from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, BookOpen } from "lucide-react";
import PageShell from "../components/layout/PageShell";
import { caseStudies } from "../data/caseStudies";

export default function CaseStudies() {
  return (
    <PageShell>
      <section className="pt-28 sm:pt-32 pb-20 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            BACK TO HOME
          </Link>

          <Motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] text-primary mb-4"
          >
            DEEP DIVES
          </Motion.p>
          <Motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-[-0.04em] mb-4"
          >
            Case Studies
          </Motion.h1>
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl leading-relaxed mb-12 sm:mb-16"
          >
            Long-form breakdowns of how I scoped, built, and shipped flagship projects —
            problem, approach, challenges, and outcomes.
          </Motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {caseStudies.map((study, index) => (
              <Motion.article
                key={study.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.08 }}
                className="glass-light rounded-2xl overflow-hidden light-card flex flex-col"
              >
                <div className="relative h-52 sm:h-56 overflow-hidden bg-muted">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 project-image-overlay pointer-events-none" />
                </div>

                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-primary tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-2xl font-heading font-bold mb-1">{study.title}</h2>
                  <p className="text-sm text-accent font-mono mb-3">{study.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                    {study.summary}
                  </p>

                  <div className="flex items-center justify-between gap-4 mt-auto pt-4 border-t border-border/60">
                    <span className="text-[10px] font-mono text-muted-foreground tracking-wider">
                      {study.role}
                    </span>
                    <Link
                      to={`/case-studies/${study.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all"
                    >
                      <BookOpen size={16} />
                      Read case study
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </Motion.article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
