"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { agents, Agent } from "../data/agents";
import AgentCard from "./AgentCard";
import AgentDetail from "./AgentDetail";
import GlowOrb from "./GlowOrb";

export default function AgentCatalog() {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

  return (
    <section id="marketplace" className="relative py-24 px-6">
      <GlowOrb color="purple" size="lg" className="top-0 right-0 translate-x-1/3 -translate-y-1/3" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Agent <span className="gradient-text">Marketplace</span>
          </h2>
          <p className="text-white/40 max-w-lg mx-auto">
            Browse our collection of intelligent voice agents. Preview them live
            before you buy.
          </p>
          <div className="mt-4 w-24 h-px mx-auto bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />
        </motion.div>

        {/* Agent grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <AgentCard
              key={agent.id}
              agent={agent}
              index={index}
              onSelect={setSelectedAgent}
            />
          ))}
        </div>
      </div>

      {/* Detail modal */}
      <AgentDetail
        agent={selectedAgent}
        onClose={() => setSelectedAgent(null)}
      />
    </section>
  );
}
