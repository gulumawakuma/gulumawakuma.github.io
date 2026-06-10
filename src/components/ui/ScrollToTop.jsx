import React, { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { getScrollBehavior, usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: getScrollBehavior(prefersReducedMotion) });

  return (
    <AnimatePresence>
      {visible && (
        <Motion.button
          onClick={scrollTop}
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-accent text-accent-foreground shadow-lg shadow-accent/20 flex items-center justify-center hover:bg-accent/90 transition-colors"
        >
          <ArrowUp size={18} />
        </Motion.button>
      )}
    </AnimatePresence>
  );
}
