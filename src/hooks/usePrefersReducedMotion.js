import { useEffect, useState } from "react";

export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (event) => setPrefersReducedMotion(event.matches);
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  return prefersReducedMotion;
}

export function getScrollBehavior(prefersReducedMotion = false) {
  return prefersReducedMotion ? "auto" : "smooth";
}

export function scrollToSection(selector, prefersReducedMotion = false) {
  document.querySelector(selector)?.scrollIntoView({
    behavior: getScrollBehavior(prefersReducedMotion),
  });
}
