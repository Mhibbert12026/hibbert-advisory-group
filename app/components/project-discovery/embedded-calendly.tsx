"use client";

import { useEffect, useRef, useState } from "react";
import { buildCalendlyEmbedUrl } from "@/lib/calendly-embed";

type EmbeddedCalendlyProps = {
  onScheduled: () => void;
};

const INITIAL_HEIGHT = 520;
const MIN_HEIGHT = 460;
const MAX_HEIGHT = 880;
const LOADING_FALLBACK_MS = 7000;

function CalendlyLoadingState() {
  return (
    <div
      className="flex h-full min-h-[460px] flex-col items-center justify-center gap-6 px-6 py-10"
      role="status"
      aria-live="polite"
      aria-label="Loading scheduling calendar"
    >
      <div className="relative h-10 w-10" aria-hidden>
        <div className="absolute inset-0 rounded-full border-2 border-white/10" />
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-amber-400" />
      </div>
      <div className="text-center">
        <p className="text-sm font-medium text-slate-200">Preparing your calendar</p>
        <p className="mt-1 text-xs text-slate-500">Available times load in a moment</p>
      </div>
      <div className="grid w-full max-w-md grid-cols-7 gap-1.5 opacity-40" aria-hidden>
        {Array.from({ length: 35 }, (_, index) => (
          <div
            key={index}
            className="aspect-square rounded-md bg-white/[0.06] animate-pulse"
            style={{ animationDelay: `${(index % 7) * 80}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

export function EmbeddedCalendly({ onScheduled }: EmbeddedCalendlyProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [widgetHeight, setWidgetHeight] = useState(INITIAL_HEIGHT);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "https://calendly.com") return;

      const eventName = event.data?.event;

      if (eventName === "calendly.event_scheduled") {
        onScheduled();
      }

      if (eventName === "calendly.page_height") {
        const height = event.data?.payload?.height;
        if (typeof height === "number" && height > 0) {
          setWidgetHeight(Math.min(Math.max(height, MIN_HEIGHT), MAX_HEIGHT));
          setIsLoading(false);
        }
      }

      if (
        eventName === "calendly.event_type_viewed" ||
        eventName === "calendly.date_and_time_selected" ||
        eventName === "calendly.profile_page_viewed"
      ) {
        setIsLoading(false);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [onScheduled]);

  useEffect(() => {
    const fallbackTimer = window.setTimeout(() => setIsLoading(false), LOADING_FALLBACK_MS);
    return () => window.clearTimeout(fallbackTimer);
  }, []);

  useEffect(() => {
    const mountWidget = () => {
      const container = containerRef.current;
      const calendly = window.Calendly;

      if (!container || !calendly) return;

      container.innerHTML = "";
      calendly.initInlineWidget({
        url: buildCalendlyEmbedUrl(),
        parentElement: container,
      });
    };

    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]',
    );

    if (window.Calendly) {
      mountWidget();
      return;
    }

    if (existingScript) {
      existingScript.addEventListener("load", mountWidget);
      return () => existingScript.removeEventListener("load", mountWidget);
    }

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = mountWidget;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="relative w-full">
      {isLoading ? (
        <div className="absolute inset-0 z-10 bg-[#0a1424]">
          <CalendlyLoadingState />
        </div>
      ) : null}

      <div
        ref={containerRef}
        className="w-full overflow-hidden transition-[height] duration-300 ease-out [&_iframe]:block [&_iframe]:w-full"
        style={{ height: widgetHeight }}
        aria-busy={isLoading}
        aria-hidden={isLoading}
      />
    </div>
  );
}

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}
