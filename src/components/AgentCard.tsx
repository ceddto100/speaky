"use client";

import { motion } from "framer-motion";
import { Check, Clock } from "lucide-react";
import { Agent } from "../data/agents";
import { cn } from "../lib/utils";

interface AgentCardProps {
  agent: Agent;
  index: number;
  onSelect: (agent: Agent) => void;
}

const accentStyles = {
  cyan: {
    border: "hover:border-neon-cyan/30",
    shadow: "hover:shadow-neon",
    badge: "text-neon-cyan bg-neon-cyan/10",
    price: "text-neon-cyan",
    button: "border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/10",
  },
  purple: {
    border: "hover:border-neon-purple/30",
    shadow: "hover:shadow-neon-purple",
    badge: "text-neon-purple bg-neon-purple/10",
    price: "text-neon-purple",
    button: "border-neon-purple/30 text-neon-purple hover:bg-neon-purple/10",
  },
  pink: {
    border: "hover:border-neon-pink/30",
    shadow: "",
    badge: "text-neon-pink bg-neon-pink/10",
    price: "text-neon-pink",
    button: "border-neon-pink/30 text-neon-pink hover:bg-neon-pink/10",
  },
};

export default function AgentCard({ agent, index, onSelect }: AgentCardProps) {
  const styles = accentStyles[agent.accentColor];
  const isAvailable = agent.status === "available";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ scale: 1.02, y: -4 }}
      className={cn(
        "glass rounded-2xl p-6 relative overflow-hidden group cursor-pointer transition-all duration-500",
        styles.border,
        styles.shadow,
        !isAvailable && "opacity-60"
      )}
      onClick={() => isAvailable && onSelect(agent)}
    >
      {/* Shine effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shine" />
      </div>

      {/* Top gradient line */}
      <div
        className={cn(
          "absolute top-0 left-0 right-0 h-px",
          agent.accentColor === "cyan" && "bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent",
          agent.accentColor === "purple" && "bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent",
          agent.accentColor === "pink" && "bg-gradient-to-r from-transparent via-neon-pink/50 to-transparent"
        )}
      />

      <div className="relative z-10">
        {/* Status badge */}
        <div className="flex items-center justify-between mb-4">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium",
              styles.badge
            )}
          >
            {isAvailable ? (
              <>
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse-glow" />
                Available
              </>
            ) : (
              <>
                <Clock className="w-3 h-3" />
                Coming Soon
              </>
            )}
          </span>
        </div>

        {/* Agent info */}
        <h3 className="text-xl font-bold text-white mb-1">{agent.name}</h3>
        <p className="text-sm text-white/40 mb-4">{agent.tagline}</p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {agent.features.slice(0, 3).map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-white/50"
            >
              <Check className="w-3.5 h-3.5 text-white/30 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Price */}
        <div className="flex items-baseline gap-1 mb-6">
          <span className={cn("text-3xl font-bold", styles.price)}>
            ${agent.price}
          </span>
          <span className="text-sm text-white/30">/{agent.pricePeriod}</span>
        </div>

        {/* CTA */}
        <button
          disabled={!isAvailable}
          className={cn(
            "w-full py-3 rounded-xl text-sm font-semibold border transition-all duration-300",
            isAvailable ? styles.button : "border-white/10 text-white/30 cursor-not-allowed"
          )}
        >
          {isAvailable ? "View Details" : "Coming Soon"}
        </button>
      </div>
    </motion.div>
  );
}
