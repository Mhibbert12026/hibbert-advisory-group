import Link from "next/link";
import { ConsultationCTA } from "@/app/components/consultation-cta";
import { JsonLd } from "@/app/components/json-ld";
import { PageShell } from "@/app/components/page-shell";
import { RelatedAdvisoryLinks } from "@/app/components/related-advisory-links";
import { tenWaysContent } from "@/lib/small-business-ai-content";
import { DISCOVERY_INTAKE_PATH, absoluteUrl } from "@/lib/site-config";

export function TenWaysAiPage() {
  const pageUrl = absoluteUrl(tenWaysContent.path);

  return (
    <PageShell>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: tenWaysContent.metaTitle,
            description: tenWaysContent.metaDescription,
            url: pageUrl,
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
              {
                "@type": "ListItem",
                position: 2,
                name: "Small Business AI",
                item: absoluteUrl("/small-business-ai"),
              },
              {
                "@type": "ListItem",
                position: 3,
                name: tenWaysContent.heroTitle,
                item: pageUrl,
              },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: tenWaysContent.faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
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
                <Link
                  href="/small-business-ai"
                  className="hover:text-amber-200/90 transition-colors"
                >
                  Small Business AI
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-slate-300">{tenWaysContent.heroTitle}</li>
            </ol>
          </nav>
          <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
            Practical Guide
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {tenWaysContent.heroTitle}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            {tenWaysContent.heroSubtitle}
          </p>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl space-y-4">
            {tenWaysContent.introduction.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="text-base leading-relaxed text-slate-300">
                {paragraph}
              </p>
            ))}
          </div>

          <ol className="mt-14 space-y-8">
            {tenWaysContent.items.map((item, index) => (
              <li
                key={item.title}
                className="rounded-2xl border border-white/8 bg-[#0f1c30]/80 p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-light text-amber-500/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                    <div className="mt-6 grid gap-6 sm:grid-cols-3">
                      <div>
                        <p className="text-xs font-medium tracking-wider text-amber-400/90 uppercase">
                          Problem
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-slate-400">
                          {item.problem}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-medium tracking-wider text-amber-400/90 uppercase">
                          Solution
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-slate-400">
                          {item.solution}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-medium tracking-wider text-amber-400/90 uppercase">
                          Business Benefit
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-slate-300">
                          {item.benefit}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <section className="border-t border-white/10 pt-12 mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <dl className="mt-8 space-y-4">
              {tenWaysContent.faq.map((item) => (
                <div
                  key={item.question}
                  className="rounded-xl border border-white/8 bg-[#0f1c30]/60 px-6 py-5"
                >
                  <dt className="text-base font-semibold text-white">{item.question}</dt>
                  <dd className="mt-3 text-sm leading-relaxed text-slate-400">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </section>

          <RelatedAdvisoryLinks
            intro="Identify which applications fit your business with an AI Opportunity Assessment—prioritized recommendations before tool investment."
            links={tenWaysContent.relatedServices}
          />

          <div className="mt-12 text-center">
            <Link
              href="/services/ai-opportunity-assessment-small-business"
              className="inline-flex items-center justify-center rounded-full bg-amber-500 px-10 py-3.5 text-sm font-semibold text-[#060d18] hover:bg-amber-400 transition-colors"
            >
              Request an AI Opportunity Assessment
            </Link>
            <p className="mt-4">
              <Link
                href={DISCOVERY_INTAKE_PATH}
                className="text-sm text-amber-200/80 hover:text-amber-200 transition-colors"
              >
                Or schedule a consultation →
              </Link>
            </p>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </PageShell>
  );
}
