import Link from "next/link";
import { ConsultationCTA } from "@/app/components/consultation-cta";
import { JsonLd } from "@/app/components/json-ld";
import { ResearchCard } from "@/app/components/research/research-card";
import { ResearchCategoryNav } from "@/app/components/research/research-category-nav";
import { PageShell } from "@/app/components/page-shell";
import { RevealOnScroll } from "@/app/components/reveal-on-scroll";
import {
  RESEARCH_CATEGORIES,
  RESEARCH_HUB_META,
  getFeaturedResearch,
  getResearchByCategory,
} from "@/lib/research";
import { buildResearchHubSchema } from "@/lib/research/schema";
import { DISCOVERY_INTAKE_PATH } from "@/lib/site-config";

export function ResearchHubPage() {
  const featuredResearch = getFeaturedResearch();

  return (
    <PageShell>
      <JsonLd data={buildResearchHubSchema()} />

      <section className="relative overflow-hidden border-b border-white/5 px-6 py-20 lg:px-8 lg:py-28">
        <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-amber-600/8 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-blue-900/10 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
            Hibbert Advisory Group · Research Library
          </p>
          <p className="mt-3 text-sm font-medium text-slate-500">{RESEARCH_HUB_META.pageTitle}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            {RESEARCH_HUB_META.headline}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400 sm:text-xl">
            {RESEARCH_HUB_META.subheadline}
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-500">
            {RESEARCH_HUB_META.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/reports/global-ai-opportunity-report-2026"
              className="inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-3.5 text-sm font-semibold text-[#060d18] hover:bg-amber-400 transition-colors"
            >
              Read the 2026 AI Report
            </Link>
            <Link
              href={DISCOVERY_INTAKE_PATH}
              className="inline-flex items-center justify-center rounded-full border border-amber-500/40 bg-amber-500/10 px-8 py-3.5 text-sm font-semibold text-amber-200 hover:bg-amber-500/20 transition-colors"
            >
              Request Research Access
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Featured research</h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-400">
            Flagship reports, proprietary frameworks, and executive perspectives from Hibbert Advisory Group.
          </p>
          <ul className="mt-12 grid gap-8 lg:grid-cols-2">
            {featuredResearch.map((item, index) => (
              <li key={item.slug} className={index === 0 ? "lg:col-span-2" : undefined}>
                <RevealOnScroll delayMs={index * 80}>
                  <ResearchCard item={item} variant={index === 0 ? "featured" : "standard"} />
                </RevealOnScroll>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ResearchCategoryNav />

      <section className="px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl space-y-20">
          {RESEARCH_CATEGORIES.map((category) => {
            const items = getResearchByCategory(category.id);
            if (items.length === 0) return null;

            return (
              <div key={category.id} id={category.id} className="scroll-mt-24">
                <div className="border-b border-white/8 pb-5">
                  <h2 className="text-2xl font-semibold text-white">{category.label}</h2>
                </div>
                <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((item, index) => (
                    <li key={item.slug}>
                      <RevealOnScroll delayMs={index * 50}>
                        <ResearchCard item={item} />
                      </RevealOnScroll>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <ConsultationCTA />
    </PageShell>
  );
}
