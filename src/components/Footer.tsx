"use client";

import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-neon-cyan" />
          <span className="font-bold gradient-text tracking-wider">SPEAKY</span>
        </div>

        <p className="text-sm text-white/20">
          &copy; {new Date().getFullYear()} Speaky. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a href="#" className="text-sm text-white/30 hover:text-neon-cyan transition-colors">
            Privacy
          </a>
          <a href="#" className="text-sm text-white/30 hover:text-neon-cyan transition-colors">
            Terms
          </a>
          <a href="#" className="text-sm text-white/30 hover:text-neon-cyan transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
