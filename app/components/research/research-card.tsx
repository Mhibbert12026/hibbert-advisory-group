import Image from "next/image";
import Link from "next/link";
import {
  formatResearchDate,
  getCategoryLabel,
  type ResearchItem,
} from "@/lib/research";

const statusStyles: Record<ResearchItem["status"], string> = {
  featured: "border-amber-500/40 bg-amber-500/15 text-amber-200",
  framework: "border-amber-500/30 bg-amber-500/10 text-amber-300",
  "featured-perspective": "border-amber-500/40 bg-amber-500/15 text-amber-200",
  "coming-soon": "border-white/15 bg-white/[0.04] text-slate-400",
  published: "border-white/10 bg-white/[0.03] text-slate-400",
};

type ResearchCardProps = {
  item: ResearchItem;
  variant?: "featured" | "standard";
};

export function ResearchCard({ item, variant = "standard" }: ResearchCardProps) {
  const isFeatured = variant === "featured";

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:border-amber-500/35 ${
        isFeatured
          ? "border-amber-500/25 bg-gradient-to-br from-[#152a45]/60 via-[#0f1c30] to-[#0a1424] shadow-2xl shadow-black/30"
          : "border-white/8 bg-[#0f1c30]/60"
      }`}
    >
      {item.imagePath && (
        <Link href={item.path} className="relative block aspect-[16/9] overflow-hidden bg-[#0a1424]">
          <Image
            src={item.imagePath}
            alt={item.imageAlt ?? item.title}
            width={1024}
            height={576}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            sizes={isFeatured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1424]/90 via-transparent to-transparent" aria-hidden />
        </Link>
      )}

      <div className={`flex flex-1 flex-col ${isFeatured ? "p-7 sm:p-8" : "p-6"}`}>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-semibold tracking-[0.12em] text-amber-400/90 uppercase">
            {item.typeLabel}
          </span>
          <span
            className={`rounded-full border px-2.5 py-0.5 text-[10px] font-medium ${statusStyles[item.status]}`}
          >
            {item.statusLabel}
          </span>
        </div>

        <h3
          className={`mt-4 font-semibold tracking-tight text-white group-hover:text-amber-200/90 transition-colors ${
            isFeatured ? "text-2xl sm:text-3xl leading-tight" : "text-xl"
          }`}
        >
          <Link href={item.path}>{item.title}</Link>
        </h3>

        <p className={`mt-3 flex-1 leading-relaxed text-slate-400 ${isFeatured ? "text-base" : "text-sm"}`}>
          {item.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/8 pt-5">
          <div className="flex flex-wrap gap-3 text-xs text-slate-500">
            <span>{getCategoryLabel(item.categoryId)}</span>
            {item.readTimeMinutes && <span>{item.readTimeMinutes} min read</span>}
            {item.publishDate && (
              <time dateTime={item.publishDate}>{formatResearchDate(item.publishDate)}</time>
            )}
          </div>
          <Link
            href={item.path}
            className="text-xs font-medium text-amber-200/70 hover:text-amber-200 transition-colors"
          >
            {item.status === "coming-soon" ? "View roadmap →" : "Explore →"}
          </Link>
        </div>
      </div>
    </article>
  );
}
