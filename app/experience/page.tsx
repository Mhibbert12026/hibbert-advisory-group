import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/app/components/page-shell";
import { createPageMetadata } from "@/lib/seo";
import {
  EXECUTIVE_CASE_STUDIES,
  EXPERIENCE_PAGE_META,
} from "@/lib/executive-case-studies";
import { DISCOVERY_INTAKE_PATH } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: EXPERIENCE_PAGE_META.title,
  description: EXPERIENCE_PAGE_META.description,
  path: "/experience",
});

function ExperienceCaseCard({
  study,
}: {
  study: (typeof EXECUTIVE_CASE_STUDIES)[number];
}) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/8 bg-gradient-to-br from-[#132238]/80 via-[#0f1c30]/90 to-[#0a1424] p-7 shadow-lg shadow-black/20 sm:p-8">
      <p className="text-[11px] font-semibold tracking-[0.16em] text-amber-400/85 uppercase">
        {study.sector}
      </p>
      <h2 className="mt-3 text-xl font-semibold tracking-tight text-white sm:text-2xl">
        {study.organization}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">{study.headline}</p>
      <ul className="mt-6 flex flex-1 flex-col gap-2.5 border-t border-white/8 pt-6">
        {study.outcomes.map((outcome) => (
          <li
            key={outcome}
            className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-300"
          >
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-500/70" aria-hidden />
            {outcome}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function ExperiencePage() {
  return (
    <PageShell>
      <section className="border-b border-white/5 bg-[#060d18] px-6 py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
            Proof & Experience
          </p>
          <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {EXPERIENCE_PAGE_META.headline}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {EXPERIENCE_PAGE_META.subheader}
          </p>
        </div>
      </section>

      <section className="px-6 py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {EXECUTIVE_CASE_STUDIES.map((study) => (
              <li key={study.id}>
                <ExperienceCaseCard study={study} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-white/5 bg-[#0a1424] px-6 py-14 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-12">
          <div className="relative mx-auto h-[280px] w-[220px] shrink-0 overflow-hidden rounded-xl border border-amber-500/25 lg:mx-0">
            <Image
              src="/michael-hibbert-headshot.png"
              alt="Michael Hibbert"
              fill
              className="object-cover object-top"
              sizes="220px"
            />
          </div>
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold text-white">Michael Hibbert</h2>
            <p className="mt-2 text-amber-200/90">Founder & Principal Advisor</p>
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              15+ years leading product strategy, digital transformation, and AI initiatives
              across media, technology, nonprofit, and startup organizations.
            </p>
            <Link
              href={DISCOVERY_INTAKE_PATH}
              className="mt-6 inline-flex rounded-full bg-amber-500 px-7 py-3 text-sm font-semibold text-[#060d18] hover:bg-amber-400 transition-colors"
            >
              Start Discovery
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
