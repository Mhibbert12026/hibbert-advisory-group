import Link from "next/link";
import { ConsultationCTA } from "@/app/components/consultation-cta";
import { JsonLd } from "@/app/components/json-ld";
import { PageShell } from "@/app/components/page-shell";
import type { ServicePageContent } from "@/lib/service-content";
import { DISCOVERY_INTAKE_PATH, absoluteUrl } from "@/lib/site-config";

function Breadcrumbs({
  serviceTitle,
  servicePath,
}: {
  serviceTitle: string;
  servicePath: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
        <li>
          <Link href="/" className="hover:text-amber-200/90 transition-colors">
            Home
          </Link>
        </li>
        <li aria-hidden>/</li>
        <li>
          <Link href="/#services" className="hover:text-amber-200/90 transition-colors">
            Services
          </Link>
        </li>
        <li aria-hidden>/</li>
        <li className="text-slate-300">{serviceTitle}</li>
      </ol>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: absoluteUrl("/"),
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: absoluteUrl("/#services"),
            },
            {
              "@type": "ListItem",
              position: 3,
              name: serviceTitle,
              item: absoluteUrl(servicePath),
            },
          ],
        }}
      />
    </nav>
  );
}

function AudienceSection({
  title,
  intro,
  items,
}: {
  title: string;
  intro: string;
  items: readonly string[];
}) {
  return (
    <section className="border-t border-white/10 pt-12">
      <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
        Audience
      </p>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      <p className="mt-4 max-w-3xl text-slate-400 leading-relaxed">{intro}</p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 rounded-xl border border-white/8 bg-[#0f1c30]/80 px-5 py-4 text-sm text-slate-300"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

function EngagementDetails({
  duration,
  format,
  investment,
}: {
  duration: string;
  format: string;
  investment: string;
}) {
  return (
    <section className="mt-12 rounded-2xl border border-white/8 bg-[#0f1c30]/80 p-8">
      <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
        Engagement Details
      </p>
      <dl className="mt-6 grid gap-6 sm:grid-cols-3">
        <div>
          <dt className="text-xs font-medium tracking-wider text-slate-500 uppercase">
            Typical Duration
          </dt>
          <dd className="mt-2 text-sm leading-relaxed text-slate-300">{duration}</dd>
        </div>
        <div>
          <dt className="text-xs font-medium tracking-wider text-slate-500 uppercase">
            Format
          </dt>
          <dd className="mt-2 text-sm leading-relaxed text-slate-300">{format}</dd>
        </div>
        <div>
          <dt className="text-xs font-medium tracking-wider text-slate-500 uppercase">
            Investment
          </dt>
          <dd className="mt-2 text-sm leading-relaxed text-slate-300">{investment}</dd>
        </div>
      </dl>
    </section>
  );
}

function ExpertiseSection({
  title,
  intro,
  credentials,
}: {
  title: string;
  intro: string;
  credentials: readonly string[];
}) {
  return (
    <section className="border-t border-white/10 pt-12">
      <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
        Trust & expertise
      </p>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      <p className="mt-4 max-w-3xl text-slate-400 leading-relaxed">{intro}</p>
      <ul className="mt-8 space-y-3">
        {credentials.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-slate-500">
        <Link
          href="/about/michael-hibbert"
          className="text-amber-200/90 hover:text-amber-200 transition-colors"
        >
          View full executive profile →
        </Link>
      </p>
    </section>
  );
}

function ContentSection({
  eyebrow,
  title,
  intro,
  items,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  items: readonly string[];
}) {
  return (
    <section className="border-t border-white/10 pt-12">
      <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      {intro && <p className="mt-4 max-w-3xl text-slate-400 leading-relaxed">{intro}</p>}
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 rounded-xl border border-white/8 bg-[#0f1c30]/80 px-5 py-4 text-sm text-slate-300"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ServicePage({ content }: { content: ServicePageContent }) {
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
            "@type": "ProfessionalService",
            name: content.heroTitle,
            description: content.metaDescription,
            url: pageUrl,
            provider: {
              "@type": "Organization",
              name: "Hibbert Advisory Group",
              url: absoluteUrl("/"),
            },
            employee: {
              "@type": "Person",
              name: "Michael Hibbert",
              jobTitle: "Founder & Principal Advisor",
              url: absoluteUrl("/about/michael-hibbert"),
            },
            areaServed: "United States",
            serviceType: content.heroTitle,
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: content.faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          },
        ]}
      />

      <section className="relative overflow-hidden border-b border-white/5 px-6 py-20 lg:px-8 lg:py-28">
        <div
          className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full bg-[#1e3a5f]/40 blur-3xl"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs serviceTitle={content.heroTitle} servicePath={content.path} />
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
          <div className="max-w-3xl rounded-2xl border border-amber-500/20 bg-amber-500/5 px-8 py-8">
            <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
              Engagement Overview
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-300">{content.overview}</p>
          </div>

          <EngagementDetails
            duration={content.engagementDetails.duration}
            format={content.engagementDetails.format}
            investment={content.engagementDetails.investment}
          />

          <AudienceSection
            title={content.whoItsFor.title}
            intro={content.whoItsFor.intro}
            items={content.whoItsFor.items}
          />

          {content.sections.map((section) => (
            <ContentSection
              key={section.id}
              eyebrow={section.eyebrow}
              title={section.title}
              intro={section.intro}
              items={section.items}
            />
          ))}

          <section className="border-t border-white/10 pt-12">
            <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
              Business impact
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Measurable Outcomes & ROI Examples
            </h2>
            <ul className="mt-8 grid gap-6 lg:grid-cols-3">
              {content.roiExamples.map((example) => (
                <li
                  key={example.title}
                  className="rounded-2xl border border-white/8 bg-[#0f1c30]/80 p-6 shadow-xl shadow-black/20"
                >
                  <div className="mb-4 h-px w-10 bg-gradient-to-r from-amber-500 to-amber-500/0" />
                  <h3 className="text-lg font-semibold text-white">{example.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {example.description}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <ExpertiseSection
            title={content.expertise.title}
            intro={content.expertise.intro}
            credentials={content.expertise.credentials}
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
                  <dd className="mt-3 text-sm leading-relaxed text-slate-400">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="border-t border-white/10 pt-12">
            <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
              Related advisory
            </p>
            <h2 className="mt-4 text-xl font-semibold text-white">Explore related services</h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {content.relatedPaths.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 hover:border-amber-500/30 hover:text-amber-200/90 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/about/michael-hibbert"
                  className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 hover:border-amber-500/30 hover:text-amber-200/90 transition-colors"
                >
                  About Michael Hibbert
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </section>

      <ConsultationCTA />
    </PageShell>
  );
}
