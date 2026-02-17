"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Mic, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import { Agent } from "../data/agents";
import VoiceDemo from "./VoiceDemo";
import WidgetEmbed from "./WidgetEmbed";
import BuyButton from "./BuyButton";

interface AgentDetailProps {
  agent: Agent | null;
  onClose: () => void;
}

type Tab = "voice" | "widget";

export default function AgentDetail({ agent, onClose }: AgentDetailProps) {
  const [activeTab, setActiveTab] = useState<Tab>("voice");

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  useEffect(() => {
    if (agent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [agent]);

  return (
    <AnimatePresence>
      {agent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass rounded-3xl shadow-glass"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5 text-white/50" />
            </button>

            <div className="p-6 md:p-8 lg:p-10">
              {/* Header */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-neon-cyan bg-neon-cyan/10 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse-glow" />
                  Available Now
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {agent.name}
                </h2>
                <p className="text-white/40 text-lg">{agent.tagline}</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left: Info */}
                <div>
                  <p className="text-white/60 leading-relaxed mb-6">
                    {agent.description}
                  </p>

                  <h4 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-3">
                    Features
                  </h4>
                  <ul className="space-y-3 mb-8">
                    {agent.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-white/50"
                      >
                        <div className="w-5 h-5 rounded-full bg-neon-cyan/10 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-neon-cyan" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-bold text-neon-cyan">
                      ${agent.price}
                    </span>
                    <span className="text-white/30">/{agent.pricePeriod}</span>
                  </div>

                  <BuyButton
                    price={agent.price}
                    pricePeriod={agent.pricePeriod}
                    agentName={agent.name}
                  />
                </div>

                {/* Right: Demo */}
                <div>
                  {/* Tabs */}
                  <div className="flex gap-2 mb-6">
                    <button
                      onClick={() => setActiveTab("voice")}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                        activeTab === "voice"
                          ? "bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30"
                          : "text-white/40 hover:text-white/60 border border-transparent"
                      }`}
                    >
                      <Mic className="w-4 h-4" />
                      Try Voice Demo
                    </button>
                    <button
                      onClick={() => setActiveTab("widget")}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                        activeTab === "widget"
                          ? "bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30"
                          : "text-white/40 hover:text-white/60 border border-transparent"
                      }`}
                    >
                      <MessageSquare className="w-4 h-4" />
                      Chat Widget
                    </button>
                  </div>

                  {/* Tab content */}
                  <div className="rounded-2xl bg-white/[0.02] border border-white/5 min-h-[300px]">
                    {activeTab === "voice" ? (
                      <VoiceDemo agentId={agent.agentId} />
                    ) : (
                      <WidgetEmbed agentId={agent.agentId} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
