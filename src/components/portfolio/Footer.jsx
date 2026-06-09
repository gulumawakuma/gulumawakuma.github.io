import React from "react";
import { motion as Motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-sm tracking-widest text-accent font-semibold">
            GW<span className="text-primary">.</span>
          </div>

          <p className="text-xs font-mono text-muted-foreground flex items-center gap-1">
            © {year} Guluma Wakuma. Crafted with
            <Heart size={10} className="text-accent fill-accent" />
            in Addis Ababa
          </p>

          <div className="flex items-center gap-4">
            <Motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-2 h-2 rounded-full bg-primary"
            />
            <span className="text-xs font-mono text-muted-foreground tracking-wider">
              AVAILABLE FOR WORK
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}