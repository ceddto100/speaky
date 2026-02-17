"use client";

import { motion } from "framer-motion";
import GlowOrb from "./GlowOrb";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      <GlowOrb color="cyan" size="lg" className="top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2" />
      <GlowOrb color="purple" size="lg" className="bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs text-neon-cyan mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse-glow" />
          Next Generation Voice AI
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight"
        >
          The Future of{" "}
          <span className="gradient-text text-glow-cyan">Voice</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed"
        >
          Discover, preview, and deploy intelligent voice agents for your
          business. Powered by cutting-edge AI technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#marketplace"
            className="group relative px-8 py-4 rounded-full font-semibold text-bg-primary bg-gradient-to-r from-neon-cyan to-neon-blue overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <span className="relative z-10">Explore Agents</span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#marketplace"
            className="px-8 py-4 rounded-full font-semibold border border-white/10 text-white/70 hover:border-neon-cyan/30 hover:text-neon-cyan transition-all duration-300"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-neon-cyan"
          />
        </div>
      </motion.div>
    </section>
  );
}
