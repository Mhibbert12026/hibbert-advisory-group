import Link from "next/link";
import { JsonLd } from "@/app/components/json-ld";
import { InsightArticleHero } from "@/app/components/insights/insight-article-hero";
import { InsightAuthorSection } from "@/app/components/insights/insight-author-section";
import { InsightCallout } from "@/app/components/insights/insight-callout";
import { InsightCredentialsBar } from "@/app/components/insights/insight-credentials-bar";
import { InsightExecutiveSummary } from "@/app/components/insights/insight-executive-summary";
import { InsightExperienceSection } from "@/app/components/insights/insight-experience-section";
import { InsightFigure } from "@/app/components/insights/insight-figure";
import { InsightPullQuote } from "@/app/components/insights/insight-pull-quote";
import { InsightReadingProgress } from "@/app/components/insights/insight-reading-progress";
import { InsightRecommendedServices } from "@/app/components/insights/insight-recommended-services";
import {
  InsightShareMobile,
  InsightShareToolbar,
} from "@/app/components/insights/insight-share-toolbar";
import { PageShell } from "@/app/components/page-shell";
import {
  ARTICLE_META,
  ARTICLE_PATH,
  ARTICLE_SECTIONS,
  CREDENTIALS,
} from "@/lib/insights/ai-differentiator-content";
import { buildInsightArticleSchema } from "@/lib/insights/schema";
import { selectedExperienceCaseStudies } from "@/lib/selected-experience";
import { DISCOVERY_INTAKE_PATH, absoluteUrl } from "@/lib/site-config";

export function InsightArticlePage() {
  const pageUrl = absoluteUrl(ARTICLE_PATH);

  return (
    <PageShell>
      <InsightReadingProgress />

      <JsonLd
        data={buildInsightArticleSchema({
          title: ARTICLE_META.title,
          description: ARTICLE_META.metaDescription,
          path: ARTICLE_PATH,
          imagePath: ARTICLE_META.ogImagePath,
          publishDate: ARTICLE_META.publishDate,
          category: ARTICLE_META.category,
          authorName: ARTICLE_META.author.name,
          authorTitle: ARTICLE_META.author.title,
          authorPath: ARTICLE_META.author.path,
        })}
      />

      <InsightArticleHero />
      <InsightCredentialsBar items={CREDENTIALS} />

      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 xl:grid-cols-[1fr_64px]">
          <article className="min-w-0">
            <div className="mx-auto max-w-3xl">
              <InsightExecutiveSummary />

              <div className="mt-16 space-y-12">
                {ARTICLE_SECTIONS.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-28">
                    {section.divider && (
                      <div
                        className="mb-12 h-px w-full bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"
                        aria-hidden
                      />
                    )}
                    {section.heading && (
                      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                        {section.heading}
                      </h2>
                    )}
                    <div className={section.heading ? "mt-6 space-y-5" : "space-y-5"}>
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph.slice(0, 48)}
                          className={`text-lg leading-[1.85] text-slate-300 ${
                            paragraph.startsWith('"') ? "pl-4 border-l-2 border-amber-500/40 italic text-slate-200" : ""
                          } ${
                            paragraph === "AI is not the differentiator anymore." ||
                            paragraph.startsWith("Access to AI") ||
                            paragraph.startsWith("Understanding AI") ||
                            paragraph.startsWith("Applying AI") ||
                            paragraph.startsWith("Creating business value")
                              ? "font-medium text-white"
                              : ""
                          }`}
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    {section.bullets && (
                      <ul className="mt-6 space-y-2.5">
                        {section.bullets.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-lg text-slate-300"
                          >
                            <span
                              className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400"
                              aria-hidden
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.imageKey && (
                      <div className="mt-10 -mx-4 sm:mx-0">
                        <InsightFigure imageKey={section.imageKey} variant="featured" />
                      </div>
                    )}
                    {section.callout && (
                      <InsightCallout callout={section.callout} />
                    )}
                    {section.pullQuote && (
                      <InsightPullQuote quote={section.pullQuote} />
                    )}
                  </section>
                ))}
              </div>

              <InsightShareMobile title={ARTICLE_META.title} url={pageUrl} />
            </div>

            <div className="mx-auto mt-20 max-w-6xl">
              <InsightExperienceSection studies={selectedExperienceCaseStudies} />
              <InsightAuthorSection />
              <InsightRecommendedServices />

              <section className="mt-16 border-t border-white/10 pt-16">
                <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-[#0f1c30]/80 to-[#0a1424] px-8 py-12 text-center">
                  <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                    Ready to Identify Where AI Can Create Value in Your Organization?
                  </h2>
                  <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
                    Whether you are exploring AI opportunities, digital transformation
                    initiatives, product innovation, or operational efficiency
                    improvements, Hibbert Advisory Group can help you identify practical
                    paths forward.
                  </p>
                  <Link
                    href={DISCOVERY_INTAKE_PATH}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center justify-center rounded-full bg-amber-500 px-10 py-3.5 text-sm font-semibold text-[#060d18] shadow-lg shadow-amber-500/20 hover:bg-amber-400 transition-colors"
                  >
                    Request a Consultation
                  </Link>
                </div>
              </section>
            </div>
          </article>

          <InsightShareToolbar title={ARTICLE_META.title} url={pageUrl} />
        </div>
      </div>
    </PageShell>
  );
}
