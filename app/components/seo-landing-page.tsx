import Link from "next/link";
import { ConsultationCTA } from "@/app/components/consultation-cta";
import { JsonLd } from "@/app/components/json-ld";
import { PageShell } from "@/app/components/page-shell";
import { RelatedAdvisoryLinks } from "@/app/components/related-advisory-links";
import type { SeoLandingPageContent } from "@/lib/seo-landing-types";
import { DISCOVERY_INTAKE_PATH, absoluteUrl } from "@/lib/site-config";

function ContentSection({
  eyebrow,
  title,
  paragraphs,
  items,
  bulletItems,
}: {
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
  items?: readonly { title: string; description: string }[];
  bulletItems?: readonly string[];
}) {
  return (
    <section className="border-t border-white/10 pt-12">
      <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      <div className="mt-6 max-w-3xl space-y-4">
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)} className="text-base leading-relaxed text-slate-400">
            {paragraph}
          </p>
        ))}
      </div>
      {items && items.length > 0 && (
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <li
              key={item.title}
              className="rounded-xl border border-white/8 bg-[#0f1c30]/80 px-5 py-5"
            >
              <h3 className="text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      )}
      {bulletItems && bulletItems.length > 0 && (
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {bulletItems.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-white/8 bg-[#0f1c30]/80 px-5 py-4 text-sm text-slate-300"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export function SeoLandingPage({ content }: { content: SeoLandingPageContent }) {
  const pageUrl = absoluteUrl(content.path);

  return (
    <PageShell>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: content.metaTitle,
            description: content.metaDescription,
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
                name: content.breadcrumbParent,
                item: absoluteUrl(content.breadcrumbParentPath),
              },
              {
                "@type": "ListItem",
                position: 3,
                name: content.heroTitle,
                item: pageUrl,
              },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: content.faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          },
        ]}
      />

      <section className="relative overflow-hidden border-b border-white/5 px-6 py-20 lg:px-8 lg:py-28">
        <div
          className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-amber-600/8 blur-3xl"
          aria-hidden
        />
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
                  href={content.breadcrumbParentPath}
                  className="hover:text-amber-200/90 transition-colors"
                >
                  {content.breadcrumbParent}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-slate-300">{content.heroTitle}</li>
            </ol>
          </nav>
          <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
            {content.heroEyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {content.heroTitle}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            {content.heroSubtitle}
          </p>
          <Link
            href={DISCOVERY_INTAKE_PATH}
            className="mt-10 inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-3.5 text-sm font-semibold text-[#060d18] hover:bg-amber-400 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl space-y-4">
            {content.introduction.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="text-base leading-relaxed text-slate-300"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {content.sections.map((section) => (
            <ContentSection
              key={section.id}
              eyebrow={section.eyebrow}
              title={section.title}
              paragraphs={section.paragraphs}
              items={section.items}
              bulletItems={section.bulletItems}
            />
          ))}

          {content.engagementScenarios && content.engagementScenarios.length > 0 && (
            <section className="border-t border-white/10 pt-12">
              <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
                Engagement examples
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Example Engagement Scenarios
              </h2>
              <ul className="mt-8 space-y-6">
                {content.engagementScenarios.map((scenario) => (
                  <li
                    key={scenario.title}
                    className="rounded-2xl border border-white/8 bg-[#0f1c30]/80 p-6"
                  >
                    <h3 className="text-lg font-semibold text-white">{scenario.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {scenario.description}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <RelatedAdvisoryLinks
            intro={content.advisoryContext}
            links={content.relatedServices}
          />

          <section className="border-t border-white/10 pt-12">
            <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
              FAQ
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <dl className="mt-8 space-y-4">
              {content.faq.map((item) => (
                <div
                  key={item.question}
                  className="rounded-xl border border-white/8 bg-[#0f1c30]/60 px-6 py-5"
                >
                  <dt className="text-base font-semibold text-white">{item.question}</dt>
                  <dd className="mt-3 text-sm leading-relaxed text-slate-400">
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </section>

      <ConsultationCTA />
    </PageShell>
  );
}
