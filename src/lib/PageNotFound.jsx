import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function PageNotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="font-mono text-xs tracking-[0.3em] text-primary mb-4">
          ERROR 404
        </p>
        <h1 className="font-heading font-black text-7xl sm:text-8xl tracking-[-0.04em] mb-6">
          Lost in <span className="text-accent">space</span>
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-10">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-mono font-semibold tracking-wider text-sm hover:bg-accent/90 transition-colors"
        >
          <Home size={16} />
          BACK HOME
        </Link>
      </div>
    </div>
  );
}
