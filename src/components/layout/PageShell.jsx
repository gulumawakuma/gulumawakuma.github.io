import React from "react";
import Navbar from "../portfolio/Navbar";
import Footer from "../portfolio/Footer";
import ScrollToTop from "../ui/ScrollToTop";

export default function PageShell({ children }) {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <div className="page-grid" aria-hidden="true" />
      <div className="relative z-[1]">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}
