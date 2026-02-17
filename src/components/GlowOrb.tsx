"use client";

import { cn } from "../lib/utils";

interface GlowOrbProps {
  color?: "cyan" | "purple" | "pink";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const colorMap = {
  cyan: "from-neon-cyan/20 to-neon-blue/10",
  purple: "from-neon-purple/20 to-neon-pink/10",
  pink: "from-neon-pink/20 to-neon-purple/10",
};

const sizeMap = {
  sm: "w-48 h-48",
  md: "w-80 h-80",
  lg: "w-[500px] h-[500px]",
};

export default function GlowOrb({
  color = "cyan",
  size = "md",
  className,
}: GlowOrbProps) {
  return (
    <div
      className={cn(
        "absolute rounded-full blur-3xl opacity-20 pointer-events-none animate-float",
        `bg-gradient-to-br ${colorMap[color]}`,
        sizeMap[size],
        className
      )}
    />
  );
}
