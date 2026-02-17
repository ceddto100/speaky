"use client";

import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

interface BuyButtonProps {
  price: number;
  pricePeriod: string;
  agentName: string;
}

export default function BuyButton({ price, pricePeriod, agentName }: BuyButtonProps) {
  const handleBuy = () => {
    alert(
      `Thank you for your interest in ${agentName}! Purchase flow coming soon. Price: $${price}/${pricePeriod}`
    );
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={handleBuy}
      className="relative w-full py-4 rounded-2xl font-bold text-lg overflow-hidden group"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-[length:200%_100%] animate-gradient-shift" />

      {/* Glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-neon-cyan to-neon-purple blur-xl" />

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-3 text-bg-primary">
        <ShoppingCart className="w-5 h-5" />
        Buy Now — ${price}/{pricePeriod}
      </span>
    </motion.button>
  );
}
