"use client";

import { useState } from "react";
import Link from "next/link";
import { JsonLd } from "@/app/components/json-ld";
import { ReportCoverCard, ReportCoverHero } from "@/app/components/global-ai-report/report-cover-hero";
import { PageShell } from "@/app/components/page-shell";
import { RevealOnScroll } from "@/app/components/reveal-on-scroll";
import {
  LANDING_COPY,
  REPORT_BASE_PATH,
  REPORT_META,
  REPORT_OG_IMAGE_PATH,
  REPORT_READ_PATH,
  REPORT_SECTIONS,
  SOCIAL_COPY,
} from "@/lib/global-ai-opportunity-report";
import { DISCOVERY_INTAKE_PATH, absoluteUrl } from "@/lib/site-config";

export function ReportLandingPage() {
  const [showSocial, setShowSocial] = useState(false);
  const pageUrl = absoluteUrl(REPORT_BASE_PATH);
  const ogImage = absoluteUrl(REPORT_OG_IMAGE_PATH);

  return (
    <PageShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Report",
          name: REPORT_META.title,
          description: REPORT_META.metaDescription,
          url: pageUrl,
          image: ogImage,
          author: {
            "@type": "Person",
            name: REPORT_META.author.name,
            jobTitle: REPORT_META.author.title,
          },
          publisher: {
            "@type": "Organization",
            name: "Hibbert Advisory Group",
            url: absoluteUrl("/"),
          },
          datePublished: REPORT_META.publishDate,
        }}
      />

      <section className="relative">
        <ReportCoverHero priority />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full bg-gradient-to-t from-[#060d18] via-[#060d18]/90 to-transparent px-6 pb-12 pt-32 lg:px-8 lg:pb-16">
            <div className="mx-auto max-w-6xl">
              <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
                {LANDING_COPY.eyebrow}
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {LANDING_COPY.headline}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
                {LANDING_COPY.subheadline}
              </p>
              <p className="mt-4 text-sm text-amber-200/80">{LANDING_COPY.authorLine}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={DISCOVERY_INTAKE_PATH}
                  className="inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-3.5 text-sm font-semibold text-[#060d18] shadow-lg shadow-amber-500/20 hover:bg-amber-400 transition-colors"
                >
                  {LANDING_COPY.primaryCta}
                </Link>
                <Link
                  href={REPORT_READ_PATH}
                  className="inline-flex items-center justify-center rounded-full border border-amber-500/40 bg-amber-500/10 px-8 py-3.5 text-sm font-semibold text-amber-200 hover:bg-amber-500/20 transition-colors"
                >
                  {LANDING_COPY.secondaryCta}
                </Link>
              </div>
              <p className="mt-6 max-w-2xl text-xs text-slate-500">
                {LANDING_COPY.downloadNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                {LANDING_COPY.insideReport.title}
              </h2>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {LANDING_COPY.insideReport.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 rounded-xl border border-white/8 bg-[#0f1c30]/60 px-4 py-3 text-sm text-slate-300"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center gap-6 rounded-2xl border border-white/8 bg-[#0f1c30]/60 p-8">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-semibold text-amber-200">
                    {REPORT_META.pageCount}
                  </p>
                  <p className="mt-1 text-[10px] text-slate-500 uppercase">Pages</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-amber-200">12</p>
                  <p className="mt-1 text-[10px] text-slate-500 uppercase">Sections</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-amber-200">11</p>
                  <p className="mt-1 text-[10px] text-slate-500 uppercase">Visuals</p>
                </div>
              </div>
              <ReportCoverCard className="hidden sm:block" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <RevealOnScroll>
              <h2 className="text-xl font-semibold text-white">
                {LANDING_COPY.audience.title}
              </h2>
              <p className="mt-4 text-slate-400">{LANDING_COPY.audience.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {REPORT_META.audience.map((role) => (
                  <span
                    key={role}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-400"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </RevealOnScroll>

            <RevealOnScroll delayMs={80}>
              <h2 className="text-xl font-semibold text-white">Table of contents</h2>
              <ol className="mt-4 space-y-2">
                {REPORT_SECTIONS.filter((s) => s.id !== "call-to-action").map((section) => (
                  <li key={section.id}>
                    <Link
                      href={`${REPORT_READ_PATH}#${section.id}`}
                      className="flex items-baseline gap-3 text-sm text-slate-400 hover:text-amber-200/90 transition-colors"
                    >
                      <span className="font-mono text-xs text-amber-400/60">
                        {String(section.number).padStart(2, "0")}
                      </span>
                      {section.title}
                    </Link>
                  </li>
                ))}
              </ol>
            </RevealOnScroll>
          </div>

          <RevealOnScroll>
            <div className="mt-16 rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-[#0f1c30]/80 to-[#0a1424] px-8 py-10 text-center">
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                Ready to Identify Your AI Opportunities?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                Request a consultation and discover how AI can create measurable value
                for your organization.
              </p>
              <Link
                href={DISCOVERY_INTAKE_PATH}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-amber-500 px-10 py-3.5 text-sm font-semibold text-[#060d18] shadow-lg shadow-amber-500/20 hover:bg-amber-400 transition-colors"
              >
                Request a Consultation
              </Link>
            </div>
          </RevealOnScroll>

          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setShowSocial(!showSocial)}
              className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
            >
              {showSocial ? "Hide" : "Show"} social promotion copy
            </button>
            {showSocial && (
              <div className="mt-6 space-y-6 text-left">
                {SOCIAL_COPY.linkedin.map((post) => (
                  <pre
                    key={post.type}
                    className="overflow-x-auto rounded-xl border border-white/8 bg-[#0a1424] p-4 text-xs leading-relaxed text-slate-400 whitespace-pre-wrap"
                  >
                    {post.text}
                  </pre>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
