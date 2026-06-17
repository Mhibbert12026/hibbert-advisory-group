import Link from "next/link";
import { JsonLd } from "@/app/components/json-ld";
import { ReportBlockRenderer } from "@/app/components/global-ai-report/report-block-renderer";
import { ReportCoverHero } from "@/app/components/global-ai-report/report-cover-hero";
import { PageShell } from "@/app/components/page-shell";
import {
  REPORT_BASE_PATH,
  REPORT_META,
  REPORT_OG_IMAGE_PATH,
  REPORT_READ_PATH,
  REPORT_SECTIONS,
} from "@/lib/global-ai-opportunity-report";
import type { ReportBlock } from "@/lib/global-ai-opportunity-report";
import { DISCOVERY_INTAKE_PATH, absoluteUrl } from "@/lib/site-config";

function isFullWidthBlock(block: ReportBlock) {
  return block.type === "figure" || block.type === "author-profile";
}

export function ReportReaderPage() {
  const pageUrl = absoluteUrl(REPORT_READ_PATH);
  const ogImage = absoluteUrl(REPORT_OG_IMAGE_PATH);

  return (
    <PageShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: REPORT_META.title,
          description: REPORT_META.metaDescription,
          url: pageUrl,
          image: ogImage,
          datePublished: REPORT_META.publishDate,
          author: {
            "@type": "Person",
            name: REPORT_META.author.name,
            url: absoluteUrl(REPORT_META.author.path),
          },
          publisher: {
            "@type": "Organization",
            name: "Hibbert Advisory Group",
            url: absoluteUrl("/"),
            logo: {
              "@type": "ImageObject",
              url: absoluteUrl("/hibbert-logo.png"),
            },
          },
        }}
      />

      <div className="report-toolbar border-b border-white/5 bg-[#0a1424] px-6 py-4 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <Link
            href={REPORT_BASE_PATH}
            className="text-sm text-slate-500 hover:text-amber-200/90 transition-colors"
          >
            ← Back to report overview
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-600">
              {REPORT_META.pageCount} pages · {REPORT_META.readTimeMinutes} min read
            </span>
            <Link
              href={DISCOVERY_INTAKE_PATH}
              className="rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold text-amber-200 hover:bg-amber-500/20 transition-colors"
            >
              Download PDF
            </Link>
          </div>
        </div>
      </div>

      <ReportCoverHero priority />

      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-16">
        <header className="mx-auto max-w-3xl border-b border-white/10 pb-12 text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-amber-400/80 uppercase">
            Hibbert Advisory Group · Executive Research
          </p>
          <h1 className="mx-auto mt-6 max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {REPORT_META.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            {REPORT_META.edition}
          </p>
          <p className="mt-6 text-sm text-amber-200/80">
            {REPORT_META.author.name} · {REPORT_META.author.title}
          </p>
          <p className="mt-2 text-xs text-slate-600">
            Published{" "}
            {new Date(REPORT_META.publishDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </header>

        <nav
          className="sticky top-0 z-20 -mx-6 my-10 border-y border-white/8 bg-[#060d18]/95 px-6 py-4 backdrop-blur-md lg:-mx-8 lg:px-8"
          aria-label="Table of contents"
        >
          <ol className="flex gap-4 overflow-x-auto pb-1 text-xs whitespace-nowrap">
            {REPORT_SECTIONS.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-slate-500 hover:text-amber-200/90 transition-colors"
                >
                  {section.number}. {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {REPORT_SECTIONS.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="report-section scroll-mt-28 border-b border-white/5 py-16 last:border-0"
          >
            <div className="mx-auto max-w-3xl">
              <p className="text-xs font-mono text-amber-400/50">
                Section {String(section.number).padStart(2, "0")}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                {section.title}
              </h2>
              {section.subtitle && (
                <p className="mt-3 text-lg text-slate-500">{section.subtitle}</p>
              )}
            </div>

            <div className="mt-8">
              {section.blocks.map((block, i) =>
                isFullWidthBlock(block) ? (
                  <div
                    key={`${section.id}-${i}`}
                    className="report-breakout mx-auto w-full max-w-6xl px-0"
                  >
                    <ReportBlockRenderer block={block} />
                  </div>
                ) : (
                  <div key={`${section.id}-${i}`} className="mx-auto max-w-3xl">
                    <ReportBlockRenderer block={block} />
                  </div>
                )
              )}
            </div>

            {section.id === "call-to-action" && (
              <div className="mx-auto mt-10 max-w-3xl text-center">
                <Link
                  href={DISCOVERY_INTAKE_PATH}
                  className="inline-flex items-center justify-center rounded-full bg-amber-500 px-10 py-3.5 text-sm font-semibold text-[#060d18] shadow-lg shadow-amber-500/20 hover:bg-amber-400 transition-colors"
                >
                  Request a Consultation
                </Link>
              </div>
            )}
          </section>
        ))}
      </div>
    </PageShell>
  );
}
