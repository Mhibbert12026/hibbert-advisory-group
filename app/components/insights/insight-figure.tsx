import Image from "next/image";
import {
  INSIGHT_IMAGES,
  type InsightImageKey,
} from "@/lib/insights/ai-differentiator-images";

type InsightFigureProps = {
  imageKey: InsightImageKey;
  caption?: string;
  priority?: boolean;
  variant?: "inline" | "featured";
};

export function InsightFigure({
  imageKey,
  caption,
  priority = false,
  variant = "inline",
}: InsightFigureProps) {
  const meta = INSIGHT_IMAGES[imageKey];
  const resolvedCaption = caption ?? meta.caption;

  return (
    <figure
      className={`insight-figure ${variant === "featured" ? "insight-figure--featured" : ""}`}
    >
      <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0a1424] shadow-2xl shadow-black/30 transition-all duration-500 hover:border-amber-500/25 hover:shadow-amber-500/5">
        <Image
          src={meta.src}
          alt={meta.alt}
          width={meta.width}
          height={meta.height}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.01]"
          sizes={
            variant === "featured"
              ? "100vw"
              : "(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 768px"
          }
        />
      </div>
      {resolvedCaption && (
        <figcaption className="mt-4 border-l-2 border-amber-500/30 pl-4 text-sm leading-relaxed text-slate-400">
          {resolvedCaption}
        </figcaption>
      )}
    </figure>
  );
}
