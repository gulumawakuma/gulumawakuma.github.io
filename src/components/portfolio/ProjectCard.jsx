import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { ChevronRight, ExternalLink, Github, Lock, Mail } from "lucide-react";

function ProjectLinkButton({ href, icon, label }) {
  const Icon = icon;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-border text-[10px] sm:text-xs font-mono tracking-wide text-muted-foreground hover:text-accent hover:border-accent/40 transition-colors"
    >
      <Icon className="w-3 h-3 shrink-0" />
      {label}
    </a>
  );
}

export default function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const links = project.links ?? {};
  const hasCaseStudy = Boolean(project.caseStudySlug);
  const hasDemo = Boolean(links.demo);
  const hasGithub = Boolean(links.github);
  const hasAppStore = Boolean(links.appStore);
  const hasPublicLink = hasDemo || hasGithub || hasAppStore;

  return (
    <Motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex-shrink-0 w-[340px] sm:w-[400px] snap-start"
    >
      <div className="relative min-h-[480px] h-full rounded-2xl overflow-hidden border border-border bg-card light-card flex flex-col">
        {/* Image */}
        <div className="relative h-[48%] shrink-0 overflow-hidden bg-muted">
          <Motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: hovered ? 1.04 : 1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 project-image-overlay pointer-events-none" />

          <div className="absolute top-4 left-4 surface-badge rounded-full px-3 py-1">
            <span className="text-[10px] font-mono tracking-widest text-foreground/80">
              {project.platform}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col p-6 bg-card border-t border-border/60">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono text-primary tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-heading font-bold text-foreground mb-2">
            {project.title}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">
            {project.description}
          </p>

          {project.linkNote && !hasPublicLink && (
            <p className="text-[10px] sm:text-xs text-muted-foreground/90 leading-relaxed mb-3 line-clamp-3 flex items-start gap-1.5">
              <Lock className="w-3 h-3 shrink-0 mt-0.5 text-primary/70" />
              <span>{project.linkNote}</span>
            </p>
          )}

          <div className="mt-auto space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              {hasCaseStudy && (
                <Link
                  to={`/case-studies/${project.caseStudySlug}`}
                  className="inline-flex items-center gap-1 sm:gap-2 text-accent text-[11px] sm:text-sm font-medium hover:gap-2 sm:hover:gap-2.5 transition-all"
                >
                  <span>Read case study</span>
                  <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                </Link>
              )}

              {hasDemo && (
                <ProjectLinkButton href={links.demo} icon={ExternalLink} label="Demo" />
              )}
              {hasGithub && (
                <ProjectLinkButton href={links.github} icon={Github} label="GitHub" />
              )}
              {hasAppStore && (
                <ProjectLinkButton href={links.appStore} icon={ExternalLink} label="App Store" />
              )}

              {!hasCaseStudy && !hasPublicLink && (
                <Link
                  to="/"
                  state={{ scrollTo: "#contact" }}
                  className="inline-flex items-center gap-1 sm:gap-2 text-accent text-[11px] sm:text-sm font-medium hover:gap-2 sm:hover:gap-2.5 transition-all"
                >
                  <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                  <span>Request walkthrough</span>
                  <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                </Link>
              )}
            </div>

            <div className="flex items-center justify-end gap-2">
              {project.type === "team" && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-accent/30 text-accent tracking-wider">
                  TEAM
                </span>
              )}
              {project.role && (
                <span className="text-[10px] font-mono text-muted-foreground tracking-wider text-right">
                  {project.role.toUpperCase()}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Motion.div>
  );
}
