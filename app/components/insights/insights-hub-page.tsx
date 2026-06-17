import Link from "next/link";
import { ConsultationCTA } from "@/app/components/consultation-cta";
import { JsonLd } from "@/app/components/json-ld";
import { InsightAuthorityCard } from "@/app/components/insights/insight-authority-card";
import { InsightCard } from "@/app/components/insights/insight-card";
import { InsightCategoryNav } from "@/app/components/insights/insight-category-nav";
import { InsightFeaturedGrid } from "@/app/components/insights/insight-featured-grid";
import { InsightInternalLinks } from "@/app/components/insights/insight-internal-links";
import { InsightRecommendedServices } from "@/app/components/insights/insight-recommended-services";
import { PageShell } from "@/app/components/page-shell";
import { RevealOnScroll } from "@/app/components/reveal-on-scroll";
import {
  INSIGHT_CATEGORIES,
  INSIGHTS_HUB_META,
  getFeaturedContent,
  getInsightsByCategory,
  getLatestInsights,
} from "@/lib/insights";
import { buildInsightsHubSchema } from "@/lib/insights/schema";
import { DISCOVERY_INTAKE_PATH } from "@/lib/site-config";

export function InsightsHubPage() {
  const featuredContent = getFeaturedContent();
  const latestInsights = getLatestInsights(9);

  return (
    <PageShell>
      <JsonLd data={buildInsightsHubSchema()} />

      <section className="relative overflow-hidden border-b border-white/5 px-6 py-20 lg:px-8 lg:py-28">
        <div
          className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-amber-600/8 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
            Hibbert Advisory Group · Research & Thought Leadership
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            {INSIGHTS_HUB_META.headline}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400 sm:text-xl">
            {INSIGHTS_HUB_META.subheadline}
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
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-[0.2em] text-amber-400/90 uppercase">
              Editor&apos;s Selection
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              Featured content
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Flagship research and executive perspectives on where AI creates value—and
              where leadership, strategy, and execution determine outcomes.
            </p>
          </div>
          <div className="mt-12">
            <InsightFeaturedGrid items={featuredContent} />
          </div>
        </div>
      </section>

      <InsightCategoryNav />

      <section className="border-b border-white/5 px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl space-y-20">
          {INSIGHT_CATEGORIES.map((category) => {
            const items = getInsightsByCategory(category.id);
            if (items.length === 0) return null;

            return (
              <div key={category.id} id={category.id} className="scroll-mt-24">
                <div className="border-b border-white/8 pb-5">
                  <h2 className="text-2xl font-semibold text-white">{category.label}</h2>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-500">
                    {category.description}
                  </p>
                </div>
                <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((item, index) => (
                    <li key={item.slug}>
                      <RevealOnScroll delayMs={index * 50}>
                        <InsightCard item={item} variant="standard" />
                      </RevealOnScroll>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-b border-white/5 px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Latest insights</h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-400">
            Recent research, analysis, and executive perspectives—curated for leadership teams.
          </p>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {latestInsights.map((item, index) => (
              <li key={item.slug}>
                <RevealOnScroll delayMs={index * 60}>
                  <InsightCard item={item} variant="standard" />
                </RevealOnScroll>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl space-y-16">
          <InsightAuthorityCard />
          <InsightRecommendedServices />
          <InsightInternalLinks />
        </div>
      </section>

      <ConsultationCTA />
    </PageShell>
  );
}
