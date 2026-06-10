import React, { useState, useEffect, useMemo } from "react";
import { motion as Motion } from "framer-motion";
import { MapPin, Coffee, Code2, Briefcase, GraduationCap, Github, ArrowUpRight } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

const SKYLINE_IMG = "https://media.base44.com/images/public/6a252a130a6d44cc87309d9e/7acdeece5_generated_bd81da44.png";

function AddisClockWidget({ compact = false }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const addisTime = new Date(time.toLocaleString("en-US", { timeZone: "Africa/Addis_Ababa" }));
  const hours = addisTime.getHours().toString().padStart(2, "0");
  const minutes = addisTime.getMinutes().toString().padStart(2, "0");
  const seconds = addisTime.getSeconds().toString().padStart(2, "0");

  return (
    <div className={`flex flex-col items-center justify-center text-center ${compact ? "py-2" : ""}`}>
      <MapPin size={16} className="text-accent mb-2" />
      <p className="text-[9px] sm:text-[10px] font-mono tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-3">
        ADDIS ABABA, ET
      </p>
      <div className="font-mono text-3xl sm:text-4xl font-bold tracking-wider text-foreground">
        {hours}
        <span className="text-primary animate-pulse">:</span>
        {minutes}
        <span className="text-primary/50">:</span>
        <span className="text-muted-foreground text-2xl">{seconds}</span>
      </div>
      <p className="text-xs text-muted-foreground mt-2 font-mono">EAT (UTC+3)</p>
    </div>
  );
}

function StatCard({ stat, index }) {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="glass-light rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center h-full"
    >
      <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
        <stat.icon size={20} className="text-primary" />
      </div>
      <p className="text-3xl sm:text-4xl font-heading font-black text-foreground leading-none">
        {stat.value}
      </p>
      <p className="text-[10px] sm:text-xs font-mono text-muted-foreground tracking-wider mt-2 uppercase">
        {stat.label}
      </p>
      <p className="text-xs text-muted-foreground/70 mt-2 leading-snug max-w-[140px]">
        {stat.detail}
      </p>
    </Motion.div>
  );
}

const stats = [
  { icon: Code2, label: "Projects Shipped", value: "10+", detail: "Web, iOS & full-stack" },
  { icon: Coffee, label: "Cups of Buna", value: "∞", detail: "Ethiopian coffee powered" },
  { icon: Briefcase, label: "Years Coding", value: "3+", detail: "Professional experience" },
  { icon: GraduationCap, label: "CSE Degree", value: "BSc", detail: "Computer Science" },
];

export default function AboutSection() {
  const { theme } = useTheme();

  const githubStats = useMemo(() => {
    const isDark = theme === "dark";
    const titleColor = isDark ? "e8b73b" : "92680a";
    const textColor = isDark ? "94a3b8" : "5a6b7d";
    const datesColor = isDark ? "64748b" : "94a3b8";

    return {
      stats: `https://github-readme-stats-fast.vercel.app/api?username=gulumawakuma&show_icons=true&theme=tokyonight&hide_border=true&include_all_commits=true&count_private=true&bg_color=00000000&title_color=${titleColor}&text_color=${textColor}&icon_color=1077a3&ring_color=${titleColor}`,
      langs: `https://github-readme-stats-fast.vercel.app/api/top-langs/?username=gulumawakuma&layout=compact&theme=tokyonight&hide_border=true&langs_count=8&bg_color=00000000&title_color=${titleColor}&text_color=${textColor}`,
      streak: `https://streak-stats.demolab.com/?user=gulumawakuma&theme=tokyonight&hide_border=true&background=00000000&ring=${titleColor}&fire=${titleColor}&currStreakLabel=${titleColor}&sideLabels=${textColor}&dates=${datesColor}`,
    };
  }, [theme]);

  return (
    <section id="about" className="py-20 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] text-primary mb-4"
        >
          THE PERSON
        </Motion.p>
        <Motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-[-0.04em] mb-10 sm:mb-16"
        >
          About Me
        </Motion.h2>

        {/* Bio + Location */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass-light rounded-2xl p-5 sm:p-6 md:p-8 min-w-0"
          >
            <h3 className="text-xl sm:text-2xl font-heading font-bold mb-3 sm:mb-4 leading-snug">
              Building from the <span className="text-accent">Highlands</span>
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
              I'm Guluma Wakuma — a Full-Stack &amp; iOS Software Engineer based in Addis Ababa, Ethiopia. 
              With strong expertise in React, Node.js, Swift, SwiftUI, and UIKit, I create clean, 
              maintainable, performance-driven code across the full stack.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
              I'm comfortable taking projects from concept to production — designing responsive frontends, 
              building robust RESTful APIs, and delivering polished native iOS apps. I thrive on solving 
              complex real-world problems and collaborating with cross-functional teams.
            </p>
            <p className="text-xs sm:text-sm font-mono text-primary/80 border-l-2 border-primary/40 pl-3 sm:pl-4 italic leading-relaxed">
              "Code with clarity, build for purpose, innovate with passion."
            </p>
            <div className="mt-4 sm:mt-5 flex flex-wrap gap-2">
              {["Full-Time", "Freelance", "Onsite"].map(t => (
                <span key={t} className="px-2.5 sm:px-3 py-1 text-[9px] sm:text-[10px] font-mono tracking-wide sm:tracking-widest border border-accent/40 text-accent rounded-full">
                  OPEN TO {t.toUpperCase()}
                </span>
              ))}
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-light rounded-2xl overflow-hidden flex flex-col min-h-[320px]"
          >
            <div className="p-5 sm:p-6 border-b border-border/50 shrink-0">
              <AddisClockWidget compact />
            </div>
            <div className="relative flex-1 min-h-[160px]">
              <img
                src={SKYLINE_IMG}
                alt="Addis Ababa skyline at twilight"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 skyline-overlay pointer-events-none" />
              <div className="absolute bottom-3 left-4">
                <p className="text-[10px] font-mono tracking-widest text-foreground/80">
                  HOME BASE
                </p>
              </div>
            </div>
          </Motion.div>
        </div>

        {/* Stats */}
        <div className="mt-4">
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] text-primary mb-4 px-1">
            QUICK FACTS
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>

        {/* GitHub Activity */}
        <Motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-20"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Github size={18} className="text-primary" />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] text-primary">
                  GITHUB ACTIVITY
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                  Live contribution stats
                </p>
              </div>
            </div>
            <a
              href="https://github.com/gulumawakuma"
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:border-accent/50 hover:bg-accent/5 transition-colors"
            >
              <span className="text-xs font-mono tracking-wider text-foreground/80 group-hover:text-accent transition-colors">
                @gulumawakuma
              </span>
              <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-accent transition-colors" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="group relative glass-light rounded-2xl p-4 sm:p-6 flex items-center justify-center min-h-[180px] transition-colors duration-300 hover:border-primary/30">
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden dark:block pointer-events-none" />
              <img
                src={githubStats.stats}
                alt="GitHub stats for gulumawakuma"
                loading="lazy"
                className="relative w-full min-w-0 max-w-md h-auto"
              />
            </div>

            <div className="group relative glass-light rounded-2xl p-4 sm:p-6 flex items-center justify-center min-h-[180px] transition-colors duration-300 hover:border-primary/30">
              <div className="absolute -top-16 -left-16 w-40 h-40 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden dark:block pointer-events-none" />
              <img
                src={githubStats.langs}
                alt="Top languages for gulumawakuma"
                loading="lazy"
                className="relative w-full min-w-0 max-w-md h-auto"
              />
            </div>

            <div className="group relative glass-light rounded-2xl p-4 sm:p-6 flex items-center justify-center min-h-[200px] transition-colors duration-300 hover:border-primary/30 lg:col-span-2">
              <div className="absolute inset-x-0 -bottom-16 h-40 bg-gradient-to-t from-primary/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden dark:block pointer-events-none" />
              <img
                src={githubStats.streak}
                alt="GitHub streak for gulumawakuma"
                loading="lazy"
                className="relative w-full min-w-0 max-w-xl h-auto"
              />
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}