import Image from "next/image";
import Link from "next/link";
import {
  formatInsightDate,
  formatReadTime,
  getCategoryLabel,
  type InsightItem,
} from "@/lib/insights";

type InsightCardProps = {
  item: InsightItem;
  variant?: "featured" | "standard" | "compact" | "editorial";
  showCategory?: boolean;
};

export function InsightCard({
  item,
  variant = "standard",
  showCategory = true,
}: InsightCardProps) {
  const isFeatured = variant === "featured";
  const isEditorial = variant === "editorial";
  const isCompact = variant === "compact";

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border bg-[#0f1c30]/60 transition-all duration-300 hover:border-amber-500/30 ${
        isFeatured || isEditorial
          ? "border-amber-500/25 shadow-xl shadow-black/20"
          : "border-white/8"
      }`}
    >
      {item.imagePath && !isCompact && (
        <Link
          href={item.path}
          className={`relative block overflow-hidden bg-[#0a1424] ${
            isEditorial ? "aspect-[16/10]" : "aspect-[16/9]"
          }`}
        >
          <Image
            src={item.imagePath}
            alt={item.imageAlt ?? item.title}
            width={1024}
            height={576}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            sizes={
              isFeatured || isEditorial
                ? "(max-width: 1024px) 100vw, 50vw"
                : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            }
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#0a1424]/90 via-[#0a1424]/20 to-transparent"
            aria-hidden
          />
        </Link>
      )}

      <div className={`flex flex-1 flex-col ${isCompact ? "p-5" : "p-6 sm:p-7"}`}>
        <div className="flex flex-wrap items-center gap-2">
          {showCategory && (
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-medium text-slate-300">
              {getCategoryLabel(item.categoryId)}
            </span>
          )}
          <span className="rounded-full border border-amber-500/25 bg-amber-500/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.1em] text-amber-300/90 uppercase">
            {item.contentTypeLabel}
          </span>
          <span className="text-[11px] text-slate-500">{formatReadTime(item.readTimeMinutes)}</span>
        </div>

        <h3
          className={`mt-4 font-semibold tracking-tight text-white group-hover:text-amber-200/90 transition-colors ${
            isFeatured
              ? "text-2xl sm:text-3xl leading-tight"
              : isEditorial
                ? "text-xl sm:text-2xl leading-snug"
                : isCompact
                  ? "text-lg"
                  : "text-xl"
          }`}
        >
          <Link href={item.path}>{item.title}</Link>
        </h3>

        <p
          className={`mt-3 flex-1 leading-relaxed text-slate-400 ${
            isFeatured || isEditorial ? "text-base" : "text-sm"
          }`}
        >
          {item.excerpt}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/8 pt-5">
          <time dateTime={item.publishDate} className="text-xs text-slate-500">
            {formatInsightDate(item.publishDate)}
          </time>
          <Link
            href={item.path}
            className="text-xs font-medium text-amber-200/70 hover:text-amber-200 transition-colors"
          >
            Read insight →
          </Link>
        </div>
      </div>
    </article>
  );
}
