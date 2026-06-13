import React from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, BookOpen } from "lucide-react";
import PageShell from "../components/layout/PageShell";
import PageMeta from "../components/seo/PageMeta";
import { caseStudiesIndexMeta } from "../data/pageMeta";
import { caseStudies } from "../data/caseStudies";

export default function CaseStudies() {
  return (
    <PageShell>
      <PageMeta {...caseStudiesIndexMeta} />
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
            {/* Long-form breakdowns of how I scoped, built, and shipped flagship projects —
            problem, approach, challenges, and outcomes. */}
            In-depth explorations of select projects, showcasing the challenges, design decisions, and technical solutions that went into building them.
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

                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4 mt-auto pt-4 border-t border-border/60">
                    <span className="text-[10px] font-mono text-muted-foreground tracking-wider">
                      {study.role}
                    </span>
                    <Link
                      to={`/case-studies/${study.slug}`}
                      className="inline-flex items-center gap-1 sm:gap-2 text-[11px] sm:text-sm font-medium text-accent hover:gap-2 sm:hover:gap-3 transition-all shrink-0"
                    >
                      <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
                      Read case study
                      <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
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
