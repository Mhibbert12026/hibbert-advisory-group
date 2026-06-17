import Link from "next/link";
import { ConsultationCTA } from "@/app/components/consultation-cta";
import { InsightAuthorityCard } from "@/app/components/insights/insight-authority-card";
import { InsightRecommendedServices } from "@/app/components/insights/insight-recommended-services";
import { JsonLd } from "@/app/components/json-ld";
import { PageShell } from "@/app/components/page-shell";
import { RevealOnScroll } from "@/app/components/reveal-on-scroll";
import { INSIGHTS_HUB_PATH } from "@/lib/insights";
import { buildOrganizationSchema } from "@/lib/insights/schema";
import { selectedExperienceCaseStudies } from "@/lib/selected-experience";
import { DISCOVERY_INTAKE_PATH, absoluteUrl } from "@/lib/site-config";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Recent Engagements & Impact | Executive Case Studies",
  description:
    "Representative executive engagements across media, streaming, radio, B2B platforms, and AI-enabled SaaS—illustrating product leadership, transformation, and measurable business outcomes.",
  path: "/insights/recent-engagements-impact",
});

const engagementLinks: Record<string, { path: string; label: string }> = {
  "New York Times": {
    path: "/services/fractional-product-leadership",
    label: "Fractional Product Leadership",
  },
  "Paramount Global": {
    path: "/strategy-to-execution",
    label: "Strategy to Execution",
  },
  "CBS Radio": {
    path: "/services/digital-transformation",
    label: "Digital Transformation Advisory",
  },
  "Penton Media": {
    path: "/services/fractional-product-leadership",
    label: "Fractional Product Leadership",
  },
  "JobFit AI": {
    path: "/services/ai-opportunity-assessment",
    label: "AI Opportunity Assessment",
  },
};

function CaseStudyBlock({
  label,
  items,
}: {
  label: string;
  items: readonly string[];
}) {
  return (
    <div>
      <p className="text-xs font-medium tracking-wider text-amber-400/90 uppercase">
        {label}
      </p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-slate-400">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-400" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function RecentEngagementsImpactPage() {
  const pageUrl = absoluteUrl("/insights/recent-engagements-impact");

  return (
    <PageShell>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            name: "Recent Engagements & Impact",
            headline: "Recent Engagements & Impact",
            description:
              "Executive case studies illustrating product leadership, digital transformation, and AI-enabled initiatives.",
            url: pageUrl,
            articleSection: "Case Studies",
            author: {
              "@type": "Person",
              name: "Michael Hibbert",
              url: absoluteUrl("/about/michael-hibbert"),
            },
            publisher: {
              "@type": "Organization",
              name: "Hibbert Advisory Group",
              url: absoluteUrl("/"),
            },
            isPartOf: {
              "@type": "CollectionPage",
              name: "Insights, Research & Perspectives",
              url: absoluteUrl(INSIGHTS_HUB_PATH),
            },
          },
          buildOrganizationSchema(),
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
              {
                "@type": "ListItem",
                position: 2,
                name: "Insights",
                item: absoluteUrl(INSIGHTS_HUB_PATH),
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Recent Engagements & Impact",
                item: pageUrl,
              },
            ],
          },
        ]}
      />

      <section className="relative overflow-hidden border-b border-white/5 px-6 py-20 lg:px-8 lg:py-28">
        <div className="relative mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <li>
                <Link href="/" className="hover:text-amber-200/90 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href={INSIGHTS_HUB_PATH} className="hover:text-amber-200/90 transition-colors">
                  Insights
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-slate-300">Recent Engagements & Impact</li>
            </ol>
          </nav>
          <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
            Insights
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Recent Engagements & Impact
          </h1>
          <p className="mt-6 max-w-3xl text-2xl font-medium text-amber-200/90">
            Real Experience. Measurable Impact.
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-400">
            Representative engagements illustrating how product leadership, transformation
            programs, and AI-enabled initiatives translate into measurable business outcomes
            across media, technology, and growth-stage organizations.
          </p>
          <Link
            href="/about/michael-hibbert"
            className="mt-8 inline-flex text-sm font-medium text-amber-200/90 hover:text-amber-200 transition-colors"
          >
            About Michael Hibbert →
          </Link>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl space-y-12">
          {selectedExperienceCaseStudies.map((study, index) => {
            const relatedLink = engagementLinks[study.organization];
            return (
              <RevealOnScroll key={study.organization} delayMs={index * 60}>
                <article className="rounded-2xl border border-white/8 bg-[#0f1c30]/80 p-8 shadow-xl shadow-black/20">
                  <div className="mb-5 h-px w-12 bg-gradient-to-r from-amber-500 to-amber-500/0" />
                  <p className="text-xs font-semibold tracking-[0.2em] text-amber-400/90 uppercase">
                    {study.organization}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">{study.title}</h2>
                  <p className="mt-4 text-base leading-relaxed text-slate-300">
                    {study.impactStatement}
                  </p>

                  <div className="mt-8 grid gap-8 lg:grid-cols-2">
                    <div className="space-y-6">
                      <div>
                        <p className="text-xs font-medium tracking-wider text-amber-400/90 uppercase">
                          Challenge
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-slate-400">
                          {study.businessChallenge}
                        </p>
                      </div>
                      <CaseStudyBlock
                        label="Strategic Approach"
                        items={study.strategicApproach}
                      />
                    </div>
                    <div className="space-y-6">
                      <CaseStudyBlock
                        label="Leadership Responsibilities"
                        items={study.leadershipResponsibilities}
                      />
                      <CaseStudyBlock
                        label="Business Outcomes"
                        items={study.businessOutcomes}
                      />
                      <CaseStudyBlock
                        label="Key Lessons"
                        items={study.lessonsLearned}
                      />
                    </div>
                  </div>

                  {relatedLink && (
                    <p className="mt-8 text-sm text-slate-500">
                      Related advisory:{" "}
                      <Link
                        href={relatedLink.path}
                        className="text-amber-200/90 hover:text-amber-200 transition-colors"
                      >
                        {relatedLink.label}
                      </Link>
                    </p>
                  )}
                </article>
              </RevealOnScroll>
            );
          })}

          <InsightAuthorityCard />
          <InsightRecommendedServices />

          <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-[#0f1c30]/80 to-[#0a1424] px-8 py-10 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Discuss your organization&apos;s priorities
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Whether you need product leadership, AI strategy, or transformation advisory,
              engagements are designed to produce clarity and actionable direction.
            </p>
            <Link
              href={DISCOVERY_INTAKE_PATH}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-amber-500 px-10 py-3.5 text-sm font-semibold text-[#060d18] shadow-lg shadow-amber-500/20 hover:bg-amber-400 transition-colors"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </PageShell>
  );
}
