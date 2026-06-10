import React, { useState, useEffect, useMemo } from "react";
import { motion as Motion } from "framer-motion";
import { MapPin, Clock, Coffee, Code2, Briefcase, GraduationCap, Github, ArrowUpRight } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

const SKYLINE_IMG = "https://media.base44.com/images/public/6a252a130a6d44cc87309d9e/7acdeece5_generated_bd81da44.png";

function AddisClockWidget() {
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
    <div className="glass-light rounded-2xl p-6 flex flex-col items-center justify-center h-full">
      <MapPin size={16} className="text-accent mb-2" />
      <p className="text-[10px] font-mono tracking-[0.3em] text-muted-foreground mb-3">
        ADDIS ABABA
      </p>
      <div className="font-mono text-4xl font-bold tracking-wider text-foreground">
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

const stats = [
  { icon: Code2, label: "Projects Shipped", value: "10+" },
  { icon: Coffee, label: "Cups of Buna", value: "∞" },
  { icon: Briefcase, label: "Years Coding", value: "3+" },
  { icon: GraduationCap, label: "CSE Degree", value: "BSc" },
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
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <Motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.3em] text-primary mb-4"
        >
          THE PERSON
        </Motion.p>
        <Motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-[-0.04em] mb-16"
        >
          About Me
        </Motion.h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px]">
          {/* Bio - Large card */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-2 row-span-2 glass-light rounded-2xl p-8 flex flex-col justify-center transition-transform duration-300 hover:-translate-y-1"
          >
            <h3 className="text-2xl font-heading font-bold mb-4">
              Building from the <span className="text-accent">Highlands</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm Guluma Wakuma — a Full-Stack &amp; iOS Software Engineer based in Addis Ababa, Ethiopia. 
              With strong expertise in React, Node.js, Swift, SwiftUI, and UIKit, I create clean, 
              maintainable, performance-driven code across the full stack.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm comfortable taking projects from concept to production — designing responsive frontends, 
              building robust RESTful APIs, and delivering polished native iOS apps. I thrive on solving 
              complex real-world problems and collaborating with cross-functional teams.
            </p>
            <p className="text-sm font-mono text-primary/80 border-l-2 border-primary/40 pl-4 italic">
              "Code with clarity, build for purpose, innovate with passion."
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Full-Time", "Freelance", "Onsite"].map(t => (
                <span key={t} className="px-3 py-1 text-[10px] font-mono tracking-widest border border-accent/40 text-accent rounded-full">
                  OPEN TO {t.toUpperCase()}
                </span>
              ))}
            </div>
          </Motion.div>

          {/* Clock Widget */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="row-span-1 transition-transform duration-300 hover:-translate-y-1"
          >
            <AddisClockWidget />
          </Motion.div>

          {/* Skyline */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="row-span-1 rounded-2xl overflow-hidden relative transition-transform duration-300 hover:-translate-y-1"
          >
            <img
              src={SKYLINE_IMG}
              alt="Addis Ababa skyline at twilight"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 skyline-overlay pointer-events-none" />
            <div className="absolute bottom-3 left-4">
              <p className="text-[10px] font-mono tracking-widest text-foreground/80">
                HOME BASE
              </p>
            </div>
          </Motion.div>

          {/* Stats */}
          {stats.map((stat, i) => (
            <Motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="glass-light rounded-2xl p-5 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1"
            >
              <stat.icon size={18} className="text-primary" />
              <div>
                <p className="text-2xl font-heading font-bold text-foreground">{stat.value}</p>
                <p className="text-xs font-mono text-muted-foreground tracking-wider mt-1">
                  {stat.label.toUpperCase()}
                </p>
              </div>
            </Motion.div>
          ))}
        </div>

        {/* GitHub Activity */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Github size={18} className="text-primary" />
              </div>
              <div>
                <p className="font-mono text-xs tracking-[0.3em] text-primary">
                  GITHUB ACTIVITY
                </p>
                <p className="text-sm text-muted-foreground mt-0.5">
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
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="group relative glass-light rounded-2xl p-6 flex items-center justify-center overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden dark:block" />
              <img
                src={githubStats.stats}
                alt="GitHub stats for gulumawakuma"
                loading="lazy"
                className="relative w-full max-w-md"
              />
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              className="group relative glass-light rounded-2xl p-6 flex items-center justify-center overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="absolute -top-16 -left-16 w-40 h-40 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden dark:block" />
              <img
                src={githubStats.langs}
                alt="Top languages for gulumawakuma"
                loading="lazy"
                className="relative w-full max-w-md"
              />
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18 }}
              className="group relative glass-light rounded-2xl p-6 flex items-center justify-center overflow-hidden transition-transform duration-300 hover:-translate-y-1 lg:col-span-2"
            >
              <div className="absolute inset-x-0 -bottom-16 h-40 bg-gradient-to-t from-primary/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden dark:block" />
              <img
                src={githubStats.streak}
                alt="GitHub streak for gulumawakuma"
                loading="lazy"
                className="relative w-full max-w-xl"
              />
            </Motion.div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}