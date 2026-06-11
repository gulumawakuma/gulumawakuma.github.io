import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from '../components/portfolio/Navbar'
import HeroSection from "../components/portfolio/HeroSection";
import ProjectsSection from "../components/portfolio/ProjectsSection";
import TechStackSection from "../components/portfolio/TechStackSection";
import ExperienceSection from "../components/portfolio/ExperienceSection";
import TestimonialsSection from "../components/portfolio/TestimonialsSection";
import AboutSection from "../components/portfolio/AboutSection";
import ContactSection from "../components/portfolio/ContactSection";
import Footer from "../components/portfolio/Footer";
import ScrollToTop from "../components/ui/ScrollToTop";
import PageMeta from "../components/seo/PageMeta";
import { defaultMeta } from "../data/pageMeta";
import { scrollToSection, usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!location.state?.scrollTo) return;

    const hash = location.state.scrollTo;
    requestAnimationFrame(() => scrollToSection(hash, prefersReducedMotion));
    navigate(location.pathname, { replace: true, state: {} });
  }, [location.state?.scrollTo, location.pathname, navigate, prefersReducedMotion]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <PageMeta {...defaultMeta} />
      <div className="page-grid" aria-hidden="true" />
      <div className="relative z-[1]">
        <Navbar />
        <HeroSection />
        <ProjectsSection />
        <TechStackSection />
        <ExperienceSection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}