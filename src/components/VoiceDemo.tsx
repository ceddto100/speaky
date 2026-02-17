"use client";

import { useConversation } from "@elevenlabs/react";
import { motion } from "framer-motion";
import { Mic, Volume2, AlertCircle } from "lucide-react";
import { useState } from "react";

interface VoiceDemoProps {
  agentId: string;
}

export default function VoiceDemo({ agentId }: VoiceDemoProps) {
  const [error, setError] = useState<string | null>(null);

  const conversation = useConversation({
    onConnect: () => setError(null),
    onDisconnect: () => {},
    onError: (err) => setError(String(err)),
  });

  const { status, isSpeaking } = conversation;
  const isConnected = status === "connected";

  const handleStart = async () => {
    setError(null);
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      await conversation.startSession({ agentId, connectionType: "websocket" });
    } catch (err) {
      setError(
        err instanceof DOMException && err.name === "NotAllowedError"
          ? "Microphone access was denied. Please allow microphone access and try again."
          : "Failed to start voice demo. Please try again."
      );
    }
  };

  const handleEnd = async () => {
    await conversation.endSession();
  };

  return (
    <div className="flex flex-col items-center gap-6 py-8">
      {/* Animated audio visualizer ring */}
      <div className="relative">
        <motion.div
          className="w-32 h-32 rounded-full flex items-center justify-center relative"
          animate={{
            boxShadow: isConnected
              ? isSpeaking
                ? [
                    "0 0 40px rgba(0,240,255,0.6), 0 0 80px rgba(0,240,255,0.3)",
                    "0 0 60px rgba(0,240,255,0.8), 0 0 120px rgba(0,240,255,0.4)",
                    "0 0 40px rgba(0,240,255,0.6), 0 0 80px rgba(0,240,255,0.3)",
                  ]
                : "0 0 20px rgba(0,240,255,0.3), 0 0 40px rgba(0,240,255,0.1)"
              : "0 0 10px rgba(255,255,255,0.05)",
          }}
          transition={
            isSpeaking
              ? { duration: 1, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.5 }
          }
        >
          {/* Outer ring */}
          <div
            className={`absolute inset-0 rounded-full border-2 transition-colors duration-500 ${
              isConnected ? "border-neon-cyan/50" : "border-white/10"
            }`}
          />

          {/* Inner ring (spins when connected) */}
          <motion.div
            className={`absolute inset-2 rounded-full border transition-colors duration-500 ${
              isConnected
                ? "border-neon-cyan/20 border-t-neon-cyan/60"
                : "border-white/5"
            }`}
            animate={isConnected ? { rotate: 360 } : {}}
            transition={
              isConnected
                ? { duration: 3, repeat: Infinity, ease: "linear" }
                : {}
            }
          />

          {/* Icon */}
          {isConnected ? (
            <Volume2 className="w-10 h-10 text-neon-cyan" />
          ) : (
            <Mic className="w-10 h-10 text-white/30" />
          )}
        </motion.div>
      </div>

      {/* Status text */}
      <p className="text-sm text-white/50 font-mono">
        {isConnected
          ? isSpeaking
            ? "Agent is speaking..."
            : "Listening... speak now"
          : "Ready to connect"}
      </p>

      {/* Error message */}
      {error && (
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs max-w-xs text-center">
          <AlertCircle className="w-4 h-4 shrink-0" />
          {error}
        </div>
      )}

      {/* Start / End button */}
      <motion.button
        onClick={isConnected ? handleEnd : handleStart}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
          isConnected
            ? "bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20"
            : "bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/20 hover:shadow-neon"
        }`}
      >
        {isConnected ? "End Demo" : "Start Voice Demo"}
      </motion.button>

      {!isConnected && (
        <p className="text-xs text-white/20">
          Microphone access required for voice demo
        </p>
      )}
    </div>
  );
}
