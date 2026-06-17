import Image from "next/image";
import { REPORT_IMAGES } from "@/lib/global-ai-opportunity-report/images";

export function ReportCoverHero({ priority = false }: { priority?: boolean }) {
  const cover = REPORT_IMAGES.cover;

  return (
    <div className="report-cover-hero relative w-full overflow-hidden border-b border-white/10">
      <div className="relative aspect-[3/2] w-full sm:aspect-[16/9] lg:aspect-[21/9]">
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          priority={priority}
          className="object-cover object-center transition-transform duration-700 hover:scale-[1.005]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#060d18] via-[#060d18]/20 to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#060d18]/60 via-transparent to-transparent lg:from-[#060d18]/40"
          aria-hidden
        />
      </div>
    </div>
  );
}

export function ReportCoverCard({ className = "" }: { className?: string }) {
  const cover = REPORT_IMAGES.cover;

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-amber-500/20 shadow-2xl shadow-black/40 transition-all duration-500 hover:border-amber-500/35 hover:shadow-amber-500/10 ${className}`}
    >
      <Image
        src={cover.src}
        alt={cover.alt}
        width={cover.width}
        height={cover.height}
        priority
        className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>
  );
}
