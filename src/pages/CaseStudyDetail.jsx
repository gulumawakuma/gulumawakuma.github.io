import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import PageShell from "../components/layout/PageShell";
import { getCaseStudyBySlug } from "../data/caseStudies";

function SectionBlock({ title, children }) {
  return (
    <section className="mb-10 sm:mb-12">
      <h2 className="text-xl sm:text-2xl font-heading font-bold mb-4">{title}</h2>
      {children}
    </section>
  );
}

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return <Navigate to="/case-studies" replace />;
  }

  return (
    <PageShell>
      <article className="pt-28 sm:pt-32 pb-20 sm:pb-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            ALL CASE STUDIES
          </Link>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl overflow-hidden border border-border mb-8 light-card"
          >
            <img
              src={study.image}
              alt={study.title}
              className="w-full h-56 sm:h-72 object-cover bg-muted"
            />
          </Motion.div>

          <Motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mb-10"
          >
            <p className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-primary mb-3">
              CASE STUDY · {study.timeline}
            </p>
            <h1 className="text-3xl sm:text-5xl font-heading font-black tracking-[-0.04em] mb-2">
              {study.title}
            </h1>
            <p className="text-lg text-accent font-mono mb-4">{study.subtitle}</p>
            <p className="text-muted-foreground leading-relaxed">{study.summary}</p>

            <div className="flex flex-wrap gap-2 mt-6">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-[10px] font-mono tracking-wider border border-border rounded-full text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            {(study.links.demo || study.links.github) && (
              <div className="flex flex-wrap gap-3 mt-6">
                {study.links.demo && (
                  <a
                    href={study.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-semibold"
                  >
                    <ExternalLink size={14} />
                    Live demo
                  </a>
                )}
                {study.links.github && (
                  <a
                    href={study.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm font-semibold hover:bg-muted/50 transition-colors"
                  >
                    <Github size={14} />
                    Source code
                  </a>
                )}
              </div>
            )}
          </Motion.header>

          <SectionBlock title="The problem">
            <ul className="space-y-3">
              {study.problem.map((item) => (
                <li
                  key={item}
                  className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30"
                >
                  {item}
                </li>
              ))}
            </ul>
          </SectionBlock>

          <SectionBlock title="Approach">
            <ul className="space-y-3">
              {study.approach.map((item) => (
                <li
                  key={item}
                  className="text-sm sm:text-base text-muted-foreground leading-relaxed flex gap-3"
                >
                  <span className="text-primary font-mono shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SectionBlock>

          <SectionBlock title="Key challenges">
            <div className="space-y-4">
              {study.challenges.map((item) => (
                <div key={item.title} className="glass-light rounded-2xl p-5 sm:p-6">
                  <h3 className="font-heading font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </SectionBlock>

          <SectionBlock title="Outcomes">
            <ul className="space-y-3">
              {study.outcomes.map((item) => (
                <li
                  key={item}
                  className="text-sm sm:text-base text-muted-foreground leading-relaxed flex gap-3"
                >
                  <span className="text-accent shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SectionBlock>

          <SectionBlock title="Tech stack">
            <div className="flex flex-wrap gap-2">
              {study.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-mono bg-primary/10 text-primary border border-primary/20 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </SectionBlock>

          <div className="glass-light rounded-2xl p-6 sm:p-8 text-center">
            <p className="text-muted-foreground mb-4">
              Want to talk about this project or something similar?
            </p>
            <Link
              to="/"
              state={{ scrollTo: "#contact" }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-mono font-semibold text-sm"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </article>
    </PageShell>
  );
}
