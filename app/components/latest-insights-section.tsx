import Link from "next/link";
import { InsightCard } from "@/app/components/insights/insight-card";
import { RevealOnScroll } from "@/app/components/reveal-on-scroll";
import { getHomepageInsights, INSIGHTS_HUB_PATH } from "@/lib/insights";

export function LatestInsightsSection() {
  const homepageInsights = getHomepageInsights();

  return (
    <section className="border-t border-white/5 px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
              Research & Thought Leadership
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Latest insights
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
              Executive research and perspectives on AI strategy, transformation, and
              leadership—designed for decision-makers, not casual readers.
            </p>
          </div>
        </RevealOnScroll>

        <ul className="mt-12 grid gap-8 lg:grid-cols-3">
          {homepageInsights.map((item, index) => (
            <li key={item.slug}>
              <RevealOnScroll delayMs={index * 80}>
                <InsightCard item={item} variant="standard" />
              </RevealOnScroll>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-start gap-8 border-t border-white/8 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-6">
            <Link
              href="/services/ai-opportunity-assessment"
              className="text-sm text-slate-400 hover:text-amber-200/90 transition-colors"
            >
              AI Opportunity Assessment
            </Link>
            <Link
              href="/services/ai-strategy-roadmap"
              className="text-sm text-slate-400 hover:text-amber-200/90 transition-colors"
            >
              AI Strategy & Roadmap
            </Link>
            <Link
              href="/reports/global-ai-opportunity-report-2026"
              className="text-sm text-slate-400 hover:text-amber-200/90 transition-colors"
            >
              Global AI Report 2026
            </Link>
          </div>
          <Link
            href={INSIGHTS_HUB_PATH}
            className="inline-flex items-center justify-center rounded-full border border-amber-500/40 bg-amber-500/10 px-8 py-3 text-sm font-semibold text-amber-200 hover:bg-amber-500/20 transition-colors"
          >
            View All Insights
          </Link>
        </div>
      </div>
    </section>
  );
}
