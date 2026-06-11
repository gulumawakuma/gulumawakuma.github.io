import React from "react";
import { motion as Motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "../../data/testimonials";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <Motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.3em] text-primary mb-4"
        >
          WHAT PEOPLE SAY
        </Motion.p>
        <Motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-[-0.04em] mb-12 sm:mb-16"
        >
          Testimonials
        </Motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <Motion.blockquote
              key={item.org}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass-light rounded-2xl p-6 sm:p-8 light-card flex flex-col h-full"
            >
              <Quote
                size={28}
                className="text-primary/40 mb-4 shrink-0"
                aria-hidden="true"
              />
              <p className="text-sm sm:text-base text-foreground/90 leading-relaxed flex-1 italic">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-6 pt-5 border-t border-border/60">
                <cite className="not-italic">
                  <p className="text-sm font-heading font-bold text-foreground">
                    {item.author}
                  </p>
                  <p className="text-[11px] sm:text-xs font-mono text-muted-foreground tracking-wide mt-1">
                    {item.context}
                  </p>
                </cite>
              </footer>
            </Motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
