"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Marketplace", href: "#marketplace" },
  { label: "Pricing", href: "#marketplace" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-glass"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="relative">
            <Zap className="w-6 h-6 text-neon-cyan group-hover:text-neon-purple transition-colors duration-300" />
            <div className="absolute inset-0 blur-md bg-neon-cyan/30 group-hover:bg-neon-purple/30 transition-colors duration-300 rounded-full" />
          </div>
          <span className="text-xl font-bold gradient-text tracking-wider">
            SPEAKY
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/60 hover:text-neon-cyan transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-neon-cyan transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <a
          href="#marketplace"
          className="px-5 py-2 rounded-full text-sm font-medium border border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/10 hover:shadow-neon transition-all duration-300"
        >
          Get Started
        </a>
      </div>
    </motion.nav>
  );
}
