import Image from "next/image";
import Link from "next/link";
import { AUTHOR_HEADSHOT } from "@/lib/global-ai-opportunity-report/images";
import type { AuthorProfileBlock } from "@/lib/global-ai-opportunity-report/types";

export function ReportAuthorProfile({ profile }: { profile: AuthorProfileBlock }) {
  return (
    <article className="report-author-profile my-10 overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-[#152a45]/80 via-[#0f1c30] to-[#0a1424] shadow-xl shadow-black/25">
      <div className="grid gap-0 lg:grid-cols-[280px_1fr]">
        <div className="relative aspect-square lg:aspect-auto lg:min-h-[320px]">
          <Image
            src={AUTHOR_HEADSHOT.src}
            alt={AUTHOR_HEADSHOT.alt}
            fill
            className="object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
            sizes="(max-width: 1024px) 100vw, 280px"
            loading="lazy"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#0f1c30] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0f1c30]/80"
            aria-hidden
          />
        </div>
        <div className="flex flex-col justify-center p-8 lg:p-10">
          <p className="text-xs font-medium tracking-[0.2em] text-amber-400/80 uppercase">
            Report Author
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
            {profile.name}
          </h3>
          <p className="mt-2 text-sm text-amber-200/80">{profile.title}</p>
          <p className="mt-6 text-base leading-relaxed text-slate-300">
            {profile.biography}
          </p>
          <div className="mt-6">
            <p className="text-xs font-medium tracking-wider text-slate-500 uppercase">
              Areas of expertise
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {profile.expertise.map((area) => (
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
            href="/about/michael-hibbert"
            className="mt-8 inline-flex text-sm font-medium text-amber-200/80 hover:text-amber-200 transition-colors"
          >
            View full profile →
          </Link>
        </div>
      </div>
    </article>
  );
}
