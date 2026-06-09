import React from "react";
import Navbar from '../components/portfolio/Navbar'
import HeroSection from "../components/portfolio/HeroSection";
import ProjectsSection from "../components/portfolio/ProjectsSection";
import TechStackSection from "../components/portfolio/TechStackSection";
import ExperienceSection from "../components/portfolio/ExperienceSection";
import AboutSection from "../components/portfolio/AboutSection";
import ContactSection from "../components/portfolio/ContactSection";
import Footer from "../components/portfolio/Footer";
import ScrollToTop from "../components/ui/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <TechStackSection />
      <ExperienceSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}