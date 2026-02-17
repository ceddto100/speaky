"use client";

import { useEffect, useRef } from "react";

interface WidgetEmbedProps {
  agentId: string;
}

export default function WidgetEmbed({ agentId }: WidgetEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!document.querySelector('script[src*="elevenlabs.io/convai-widget"]')) {
      const script = document.createElement("script");
      script.src = "https://elevenlabs.io/convai-widget/index.js";
      script.async = true;
      document.body.appendChild(script);
    }

    const container = containerRef.current;
    if (container) {
      container.innerHTML = "";
      const widget = document.createElement("elevenlabs-convai");
      widget.setAttribute("agent-id", agentId);
      container.appendChild(widget);
    }

    return () => {
      if (container) {
        container.innerHTML = "";
      }
    };
  }, [agentId]);

  return (
    <div className="flex flex-col items-center gap-4 py-8">
      <p className="text-sm text-white/50 font-mono">Embedded Chat Widget</p>
      <div ref={containerRef} className="w-full flex justify-center" />
    </div>
  );
}
