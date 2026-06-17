import Link from "next/link";
import { ConsultationCTA } from "@/app/components/consultation-cta";
import { LeadCaptureCta } from "@/app/components/ai-leadership/lead-capture-cta";
import { JsonLd } from "@/app/components/json-ld";
import { PageShell } from "@/app/components/page-shell";
import { RevealOnScroll } from "@/app/components/reveal-on-scroll";
import {
  AI_LEADERSHIP_META,
  ARTICLES,
  PILLARS,
  RESOURCES,
  getArticlePath,
  MICHAEL_HIBBERT,
} from "@/lib/ai-leadership";
import { REPORT_BASE_PATH, REPORT_META } from "@/lib/global-ai-opportunity-report";
import { absoluteUrl } from "@/lib/site-config";

export function AiLeadershipHub() {
  const pageUrl = absoluteUrl("/ai-leadership");
  const latestArticles = [...ARTICLES].slice(0, 6);

  return (
    <PageShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: AI_LEADERSHIP_META.headline,
          description: AI_LEADERSHIP_META.metaDescription,
          url: pageUrl,
        }}
      />

      <section className="relative overflow-hidden border-b border-white/5 px-6 py-20 lg:px-8 lg:py-28">
        <div
          className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-amber-600/8 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
            Executive Resources
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {AI_LEADERSHIP_META.headline}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            {AI_LEADERSHIP_META.subheadline}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/ai-leadership/resources"
              className="inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-3.5 text-sm font-semibold text-[#060d18] hover:bg-amber-400 transition-colors"
            >
              Download Executive Resources
            </Link>
            <Link
              href="/services/ai-opportunity-assessment"
              className="inline-flex items-center justify-center rounded-full border border-amber-500/40 bg-amber-500/10 px-8 py-3.5 text-sm font-semibold text-amber-200 hover:bg-amber-500/20 transition-colors"
            >
              Request an Assessment
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <Link
            href={REPORT_BASE_PATH}
            className="group mb-16 block rounded-2xl border border-amber-500/25 bg-gradient-to-r from-amber-500/10 via-[#0f1c30]/80 to-[#0a1424] p-8 transition-colors hover:border-amber-500/40"
          >
            <p className="text-xs font-medium tracking-[0.2em] text-amber-400/90 uppercase">
              Featured Executive Report · 2026
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white group-hover:text-amber-200/90 transition-colors sm:text-3xl">
              {REPORT_META.title}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-400">
              48-page strategic assessment with readiness frameworks, industry analysis,
              global perspectives, and transformation roadmaps.
            </p>
            <span className="mt-5 inline-block text-sm font-medium text-amber-200/80">
              Request the report →
            </span>
          </Link>

          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Five pillars of AI leadership
          </h2>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((pillar, index) => (
              <li key={pillar.slug}>
                <RevealOnScroll delayMs={index * 60}>
                  <Link
                    href={pillar.path}
                    className="group block h-full rounded-2xl border border-white/8 bg-[#0f1c30]/80 p-7 transition-colors hover:border-amber-500/25"
                  >
                    <div className="mb-5 h-px w-12 bg-gradient-to-r from-amber-500 to-amber-500/0 transition-all group-hover:w-16" />
                    <h3 className="text-xl font-semibold text-white group-hover:text-amber-200/90 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {pillar.subheadline}
                    </p>
                    <span className="mt-5 inline-block text-sm font-medium text-amber-200/80">
                      Explore pillar →
                    </span>
                  </Link>
                </RevealOnScroll>
              </li>
            ))}
          </ul>

          <div className="mt-20">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                Latest articles
              </h2>
              <Link
                href="/ai-leadership/authors/michael-hibbert"
                className="text-sm text-amber-200/80 hover:text-amber-200 transition-colors"
              >
                By {MICHAEL_HIBBERT.name} →
              </Link>
            </div>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {latestArticles.map((article) => {
                const pillar = PILLARS.find((p) => p.slug === article.pillarSlug);
                return (
                  <li key={article.slug}>
                    <Link
                      href={getArticlePath(article)}
                      className="group block rounded-xl border border-white/8 bg-[#0f1c30]/80 p-5 transition-colors hover:border-amber-500/25"
                    >
                      {pillar && (
                        <p className="text-xs font-medium tracking-wider text-amber-400/80 uppercase">
                          {pillar.title}
                        </p>
                      )}
                      <h3 className="mt-2 text-base font-semibold text-white group-hover:text-amber-200/90 transition-colors">
                        {article.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-500">
                        {article.readTimeMinutes} min read
                      </p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="mt-20">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Downloadable resources
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {RESOURCES.map((resource) => (
                <li key={resource.slug}>
                  <Link
                    href={resource.path}
                    className="group block rounded-xl border border-amber-500/20 bg-amber-500/5 p-5 transition-colors hover:border-amber-500/35"
                  >
                    <p className="text-xs font-medium tracking-wider text-amber-400/90 uppercase">
                      {resource.resourceType}
                    </p>
                    <h3 className="mt-2 text-base font-semibold text-white group-hover:text-amber-200/90 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-400 line-clamp-2">
                      {resource.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16">
            <LeadCaptureCta
              headline="Apply these frameworks to your organization"
              body="Request a consultation to discuss how AI leadership principles translate into prioritized initiatives and measurable outcomes for your leadership team."
            />
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </PageShell>
  );
}
