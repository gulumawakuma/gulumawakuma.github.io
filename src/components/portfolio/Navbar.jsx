import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Calendar } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";
import { useActiveSection } from "../../hooks/useActiveSection";
import { scrollToSection, usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { getBookingUrl } from "../../config/site";

const RESUME_URL = "/resume.pdf";
const CASE_STUDIES_PATH = "/case-studies";

const sectionNavItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = sectionNavItems.map((item) => item.href.slice(1));

function navLinkClass(isActive) {
  return isActive
    ? "px-4 py-2 text-sm font-medium text-foreground bg-primary/10 border border-primary/25 rounded-full cursor-pointer"
    : "px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted/50 cursor-pointer";
}

function mobileNavLinkClass(isActive) {
  return isActive
    ? "w-full text-left px-4 py-3 rounded-xl text-base font-medium text-foreground bg-primary/10 border border-primary/20 cursor-pointer"
    : "w-full text-left px-4 py-3 rounded-xl text-base font-medium text-foreground hover:bg-muted/60 transition-colors cursor-pointer";
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const isCaseStudiesActive = location.pathname.startsWith(CASE_STUDIES_PATH);
  const activeSection = useActiveSection(isHome ? sectionIds : []);
  const prefersReducedMotion = usePrefersReducedMotion();
  const bookingUrl = getBookingUrl();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleSectionClick = (href) => {
    setMobileOpen(false);
    if (isHome) {
      scrollToSection(href, prefersReducedMotion);
    } else {
      navigate("/", { state: { scrollTo: href } });
    }
  };

  return (
    <>
      <Motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass py-3" : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Motion.button
            onClick={() => handleSectionClick("#home")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-mono text-sm tracking-widest text-accent font-semibold cursor-pointer"
          >
            GW<span className="text-primary">.</span>
          </Motion.button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {sectionNavItems.map((item) => {
              const isActive = isHome && activeSection === item.href.slice(1);
              return (
                <Motion.button
                  key={item.label}
                  onClick={() => handleSectionClick(item.href)}
                  whileHover={{ scale: isActive ? 1 : 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className={navLinkClass(isActive)}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Motion.button>
              );
            })}
            <Motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
              <Link
                to={CASE_STUDIES_PATH}
                className={navLinkClass(isCaseStudiesActive)}
                aria-current={isCaseStudiesActive ? "page" : undefined}
              >
                Case Studies
              </Link>
            </Motion.div>
            <Motion.a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="ml-2 px-5 py-2 text-sm font-semibold border border-border rounded-full hover:border-primary/50 hover:bg-muted/50 transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              <Download size={14} />
              Resume
            </Motion.a>
            <ThemeToggle className="ml-1" />
            {bookingUrl && (
              <Motion.a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="ml-2 px-4 py-2 text-sm font-semibold border border-primary/40 text-primary rounded-full hover:bg-primary/10 transition-colors cursor-pointer inline-flex items-center gap-2"
                title="Schedule a 15-min chat"
              >
                <Calendar size={14} />
                <span className="hidden xl:inline">Schedule a 15-min chat</span>
                <span className="xl:hidden">15-min chat</span>
              </Motion.a>
            )}
            <Motion.button
              onClick={() => handleSectionClick("#contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="ml-2 px-5 py-2 text-sm font-semibold bg-accent text-accent-foreground rounded-full cursor-pointer"
            >
              Hire Me
            </Motion.button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="text-foreground p-2 cursor-pointer"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </Motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <Motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-background/70 backdrop-blur-[2px] md:hidden cursor-pointer"
            />

            <Motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed top-0 left-0 bottom-0 z-50 w-[min(300px,85vw)] glass border-r border-border flex flex-col md:hidden shadow-xl"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-border">
                <button
                  onClick={() => handleSectionClick("#home")}
                  className="font-mono text-sm tracking-widest text-accent font-semibold cursor-pointer"
                >
                  GW<span className="text-primary">.</span>
                </button>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="text-muted-foreground hover:text-foreground p-1 cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-1">
                {sectionNavItems.map((item, i) => {
                  const isActive = isHome && activeSection === item.href.slice(1);
                  return (
                    <Motion.button
                      key={item.label}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => handleSectionClick(item.href)}
                      className={mobileNavLinkClass(isActive)}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </Motion.button>
                  );
                })}
                <Motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: sectionNavItems.length * 0.05 }}
                >
                  <Link
                    to={CASE_STUDIES_PATH}
                    onClick={() => setMobileOpen(false)}
                    className={mobileNavLinkClass(isCaseStudiesActive)}
                    aria-current={isCaseStudiesActive ? "page" : undefined}
                  >
                    Case Studies
                  </Link>
                </Motion.div>
              </nav>

              <div className="p-4 border-t border-border flex flex-col gap-2">
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-border text-sm font-semibold hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <Download size={16} />
                  Resume
                </a>
                {bookingUrl && (
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-primary/40 text-primary text-sm font-semibold hover:bg-primary/10 transition-colors cursor-pointer"
                  >
                    <Calendar size={16} />
                    Schedule a 15-min chat
                  </a>
                )}
                <button
                  onClick={() => handleSectionClick("#contact")}
                  className="w-full px-4 py-3 rounded-xl bg-accent text-accent-foreground text-sm font-semibold cursor-pointer"
                >
                  Hire Me
                </button>
              </div>
            </Motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
