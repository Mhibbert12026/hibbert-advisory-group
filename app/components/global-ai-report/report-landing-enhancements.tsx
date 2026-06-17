import Link from "next/link";
import { ReportFigure } from "@/app/components/global-ai-report/report-figure";
import {
  REPORT_CITATION,
  REPORT_EXECUTIVE_SUMMARY,
  REPORT_KEY_FINDINGS,
  REPORT_RELATED_RESEARCH,
  REPORT_VISUAL_KEYS,
} from "@/lib/global-ai-opportunity-report/landing-enhancements";
import { REPORT_READ_PATH } from "@/lib/global-ai-opportunity-report/meta";
import { REPORT_META } from "@/lib/global-ai-opportunity-report/meta";
import { RevealOnScroll } from "@/app/components/reveal-on-scroll";
import { DISCOVERY_INTAKE_PATH } from "@/lib/site-config";

export function ReportLandingEnhancements() {
  return (
    <>
      <section className="border-b border-white/5 px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                {REPORT_EXECUTIVE_SUMMARY.title}
              </h2>
              {REPORT_EXECUTIVE_SUMMARY.paragraphs.map((p) => (
                <p key={p.slice(0, 48)} className="mt-5 text-base leading-relaxed text-slate-400">
                  {p}
                </p>
              ))}
              <ul className="mt-8 space-y-3">
                {REPORT_EXECUTIVE_SUMMARY.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <RevealOnScroll delayMs={80}>
              <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-[#0f1c30]/80 to-[#0a1424] p-8">
                <h3 className="text-lg font-semibold text-white">Download PDF</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  Request the full {REPORT_META.pageCount}-page executive report through our
                  consultation intake. We will follow up with the PDF download and scheduling
                  options for a strategic discussion.
                </p>
                <Link
                  href={DISCOVERY_INTAKE_PATH}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-amber-500 px-8 py-3.5 text-sm font-semibold text-[#060d18] hover:bg-amber-400 transition-colors"
                >
                  Download PDF — Request Report
                </Link>
                <Link
                  href={REPORT_READ_PATH}
                  className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-amber-500/40 bg-amber-500/10 px-8 py-3 text-sm font-semibold text-amber-200 hover:bg-amber-500/20 transition-colors"
                >
                  Read Online
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Key findings</h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {REPORT_KEY_FINDINGS.map((finding, index) => (
              <li key={finding.title}>
                <RevealOnScroll delayMs={index * 50}>
                  <article className="h-full rounded-2xl border border-white/8 bg-[#0f1c30]/60 p-6">
                    <div className="mb-4 h-px w-10 bg-gradient-to-r from-amber-500 to-transparent" />
                    <h3 className="text-base font-semibold text-white">{finding.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {finding.description}
                    </p>
                  </article>
                </RevealOnScroll>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-white/5 px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Report visuals</h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-400">
            Executive infographics and frameworks from the Global AI Opportunity Report 2026.
          </p>
          <div className="mt-10 grid gap-10">
            {REPORT_VISUAL_KEYS.map((key) => (
              <ReportFigure key={key} figure={{ imageKey: key }} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Related research</h2>
            <ul className="mt-8 space-y-4">
              {REPORT_RELATED_RESEARCH.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="group block rounded-xl border border-white/8 bg-[#0f1c30]/60 p-5 transition-colors hover:border-amber-500/25"
                  >
                    <span className="text-[10px] font-semibold tracking-[0.12em] text-amber-400/80 uppercase">
                      {item.type}
                    </span>
                    <p className="mt-2 font-medium text-white group-hover:text-amber-200/90 transition-colors">
                      {item.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Citation</h2>
            <div className="mt-8 rounded-2xl border border-white/8 bg-[#0f1c30]/60 p-6">
              <p className="text-sm leading-relaxed text-slate-300">{REPORT_CITATION.recommended}</p>
              <dl className="mt-6 space-y-3 text-sm">
                <div>
                  <dt className="text-slate-500">Author</dt>
                  <dd className="text-slate-300">{REPORT_CITATION.author}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Published</dt>
                  <dd className="text-slate-300">{REPORT_CITATION.publishDate}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">URL</dt>
                  <dd>
                    <a
                      href={REPORT_CITATION.url}
                      className="text-amber-200/80 hover:text-amber-200 break-all"
                    >
                      {REPORT_CITATION.url}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
