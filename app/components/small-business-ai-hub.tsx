import Link from "next/link";
import { ConsultationCTA } from "@/app/components/consultation-cta";
import { JsonLd } from "@/app/components/json-ld";
import { PageShell } from "@/app/components/page-shell";
import { RelatedAdvisoryLinks } from "@/app/components/related-advisory-links";
import { RevealOnScroll } from "@/app/components/reveal-on-scroll";
import {
  hubBenefits,
  hubMeta,
  hubMisconceptions,
  hubResources,
  hubRoiOpportunities,
  hubWhereToStart,
  hubRelatedLinks,
  SMALL_BUSINESS_HUB_PATH,
} from "@/lib/small-business-ai-content";
import { DISCOVERY_INTAKE_PATH, absoluteUrl } from "@/lib/site-config";

export function SmallBusinessAiHub() {
  const pageUrl = absoluteUrl(SMALL_BUSINESS_HUB_PATH);

  return (
    <PageShell>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: hubMeta.metaTitle,
            description: hubMeta.metaDescription,
            url: pageUrl,
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
              { "@type": "ListItem", position: 2, name: "AI for Small Business", item: pageUrl },
            ],
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
              <li className="text-slate-300">{hubMeta.heroTitle}</li>
            </ol>
          </nav>
          <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
            Resource Center
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {hubMeta.headline}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            {hubMeta.subheadline}
          </p>
          <Link
            href="/services/ai-opportunity-assessment-small-business"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-3.5 text-sm font-semibold text-[#060d18] hover:bg-amber-400 transition-colors"
          >
            Request an AI Opportunity Assessment
          </Link>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <RevealOnScroll>
            <div className="max-w-3xl">
              <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
                Business value
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Benefits of AI for Small Business
              </h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                Practical AI adoption focuses on measurable outcomes that matter to
                owners—not technology for its own sake.
              </p>
            </div>
          </RevealOnScroll>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hubBenefits.map((item, index) => (
              <RevealOnScroll key={item.title} delayMs={index * 60}>
                <li className="rounded-2xl border border-white/8 bg-[#0f1c30]/80 p-6">
                  <div className="mb-4 h-px w-10 bg-gradient-to-r from-amber-500 to-amber-500/0" />
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </li>
              </RevealOnScroll>
            ))}
          </ul>

          <section className="border-t border-white/10 pt-12 mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Common Misconceptions
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {hubMisconceptions.map((item) => (
                <li
                  key={item.title}
                  className="rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-5"
                >
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className="border-t border-white/10 pt-12 mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Where Businesses Should Start
            </h2>
            <ol className="mt-8 space-y-4">
              {hubWhereToStart.map((step, index) => (
                <li
                  key={step}
                  className="flex items-start gap-4 rounded-xl border border-white/8 bg-[#0f1c30]/80 px-5 py-4"
                >
                  <span className="text-lg font-light text-amber-500/60">{index + 1}</span>
                  <p className="text-sm leading-relaxed text-slate-300">{step}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="border-t border-white/10 pt-12 mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Typical ROI Opportunities
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {hubRoiOpportunities.map((item) => (
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
          </section>

          <section className="border-t border-white/10 pt-12 mt-12">
            <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
              Resources
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Small Business AI Guides
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {hubResources.map((resource) => (
                <li key={resource.path}>
                  <Link
                    href={resource.path}
                    className="group block h-full rounded-xl border border-white/8 bg-[#0f1c30]/80 p-5 transition-colors hover:border-amber-500/25"
                  >
                    <h3 className="text-base font-semibold text-white group-hover:text-amber-200/90 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {resource.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <RelatedAdvisoryLinks
            intro="Growing businesses typically begin with an AI Opportunity Assessment to identify priorities, then explore industry-specific guides and professional service applications relevant to their practice."
            links={hubRelatedLinks}
          />

          <div className="mt-12 rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-[#0f1c30]/80 to-[#0a1424] px-8 py-10 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Ready to identify your AI opportunities?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Request an AI Opportunity Assessment and receive a prioritized plan
              focused on measurable business value.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/services/ai-opportunity-assessment-small-business"
                className="inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-3.5 text-sm font-semibold text-[#060d18] hover:bg-amber-400 transition-colors"
              >
                Request an Assessment
              </Link>
              <Link
                href={DISCOVERY_INTAKE_PATH}
                className="inline-flex items-center justify-center rounded-full border border-amber-500/40 bg-amber-500/10 px-8 py-3.5 text-sm font-semibold text-amber-200 hover:bg-amber-500/20 transition-colors"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </PageShell>
  );
}
