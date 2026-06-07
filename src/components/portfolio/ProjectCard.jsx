import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronRight } from "lucide-react";

export default function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex-shrink-0 w-[340px] sm:w-[400px] snap-start"
    >
      <div className="relative h-[480px] rounded-2xl overflow-hidden border border-border/50 bg-card">
        {/* Image */}
        <div className="relative h-[55%] overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: hovered ? 1.05 : 1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
          
          {/* Platform badge */}
          <div className="absolute top-4 left-4 glass-light rounded-full px-3 py-1">
            <span className="text-[10px] font-mono tracking-widest text-foreground/80">
              {project.platform}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
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
          
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>

          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center gap-2 text-accent text-sm font-medium"
              animate={{ x: hovered ? 4 : 0 }}
            >
              <span>View Project</span>
              <ChevronRight size={14} />
            </motion.div>
            <div className="flex items-center gap-2">
              {project.type === "team" && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-accent/30 text-accent tracking-wider">
                  TEAM
                </span>
              )}
              {project.role && (
                <span className="text-[10px] font-mono text-muted-foreground tracking-wider">
                  {project.role.toUpperCase()}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}