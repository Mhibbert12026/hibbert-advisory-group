import Link from "next/link";
import Image from "next/image";
import { INSIGHT_AUTHOR } from "@/lib/insights/author";

export function InsightAuthorSection() {
  return (
    <section className="border-t border-white/10 pt-16" aria-labelledby="author-heading">
      <article className="overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-[#152a45]/80 via-[#0f1c30] to-[#0a1424] shadow-xl shadow-black/25">
        <div className="grid gap-0 lg:grid-cols-[240px_1fr]">
          <div className="relative aspect-square lg:aspect-auto lg:min-h-[280px]">
            <Image
              src={INSIGHT_AUTHOR.imagePath}
              alt={INSIGHT_AUTHOR.name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 240px"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center p-8 lg:p-10">
            <p className="text-xs font-medium tracking-[0.2em] text-amber-400/80 uppercase">
              About the Author
            </p>
            <h2 id="author-heading" className="mt-3 text-2xl font-semibold text-white">
              {INSIGHT_AUTHOR.name}
            </h2>
            <p className="mt-1 text-sm text-amber-200/80">{INSIGHT_AUTHOR.title}</p>
            <p className="mt-5 text-base leading-relaxed text-slate-300">
              {INSIGHT_AUTHOR.biography}
            </p>
            <div className="mt-6">
              <p className="text-xs font-medium tracking-wider text-slate-500 uppercase">
                Areas of Expertise
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {INSIGHT_AUTHOR.expertise.map((area) => (
                  <li
                    key={area}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href={INSIGHT_AUTHOR.path}
              className="mt-8 inline-flex text-sm font-medium text-amber-200/80 hover:text-amber-200 transition-colors"
            >
              View full profile →
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
}
