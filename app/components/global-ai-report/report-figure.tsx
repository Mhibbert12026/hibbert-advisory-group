import Image from "next/image";
import { REPORT_IMAGES } from "@/lib/global-ai-opportunity-report/images";
import type { ReportFigureBlock } from "@/lib/global-ai-opportunity-report/types";

const variantStyles = {
  hero: "w-full",
  full: "w-full",
  contained: "mx-auto w-full",
  featured: "w-full",
} as const;

export function ReportFigure({ figure }: { figure: ReportFigureBlock }) {
  const meta = REPORT_IMAGES[figure.imageKey];
  const alt = figure.alt ?? meta.alt;
  const caption = figure.caption ?? meta.caption;
  const variant = figure.variant ?? meta.variant;
  const maxWidth = figure.maxWidth ?? meta.maxWidth;

  return (
    <figure
      className={`report-figure my-12 ${variant === "featured" ? "report-figure--featured" : ""}`}
      style={maxWidth ? { maxWidth: `${maxWidth}px`, marginLeft: "auto", marginRight: "auto" } : undefined}
    >
      <div
        className={`group relative overflow-hidden rounded-xl border border-white/10 bg-[#0a1424] shadow-2xl shadow-black/30 transition-all duration-500 hover:border-amber-500/25 hover:shadow-amber-500/5 ${variantStyles[variant]}`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#060d18]/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
        <Image
          src={meta.src}
          alt={alt}
          width={meta.width}
          height={meta.height}
          loading="lazy"
          className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.01]"
          sizes={
            variant === "contained"
              ? "(max-width: 1000px) 100vw, 1000px"
              : "(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1152px"
          }
        />
      </div>
      {caption && (
        <figcaption className="mt-4 border-l-2 border-amber-500/30 pl-4 text-sm leading-relaxed text-slate-400">
          {caption}
        </figcaption>
      )}
      {figure.pullQuote && (
        <blockquote className="mt-6 text-center">
          <p className="text-lg font-medium italic text-amber-200/90 sm:text-xl">
            &ldquo;{figure.pullQuote}&rdquo;
          </p>
        </blockquote>
      )}
    </figure>
  );
}
