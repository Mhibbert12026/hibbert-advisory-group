import Link from "next/link";
import { ConsultationCTA } from "@/app/components/consultation-cta";
import { JsonLd } from "@/app/components/json-ld";
import { PageShell } from "@/app/components/page-shell";
import { RevealOnScroll } from "@/app/components/reveal-on-scroll";
import {
  FUTURE_REPORTS_META,
  FUTURE_REPORTS_PATH,
  PLANNED_REPORTS,
} from "@/lib/research/future-reports-content";
import { RESEARCH_HUB_PATH } from "@/lib/research";
import { buildResearchPublicationSchema } from "@/lib/research/schema";
import { DISCOVERY_INTAKE_PATH } from "@/lib/site-config";

export function FutureReportsPage() {
  return (
    <PageShell>
      <JsonLd
        data={buildResearchPublicationSchema({
          title: FUTURE_REPORTS_META.title,
          description: FUTURE_REPORTS_META.metaDescription,
          path: FUTURE_REPORTS_PATH,
          imagePath: FUTURE_REPORTS_META.ogImagePath,
          type: "CollectionPage",
        })}
      />

      <section className="border-b border-white/5 px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
            <Link href="/" className="hover:text-amber-200/90">Home</Link>
            <span className="mx-2">/</span>
            <Link href={RESEARCH_HUB_PATH} className="hover:text-amber-200/90">Research</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-300">{FUTURE_REPORTS_META.title}</span>
          </nav>
          <p className="text-xs font-semibold tracking-[0.2em] text-amber-400/90 uppercase">
            Research Collection · Coming Soon
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Upcoming Research
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            {FUTURE_REPORTS_META.metaDescription}
          </p>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold text-white">Planned reports</h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {PLANNED_REPORTS.map((report, index) => (
              <li key={report.slug}>
                <RevealOnScroll delayMs={index * 60}>
                  <article className="flex h-full flex-col rounded-2xl border border-white/8 bg-[#0f1c30]/60 p-7">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] text-slate-400">
                        {report.category}
                      </span>
                      <span className="rounded-full border border-amber-500/25 bg-amber-500/10 px-2.5 py-0.5 text-[10px] font-medium text-amber-300/90">
                        {report.status}
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-white">{report.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                      {report.description}
                    </p>
                    <p className="mt-6 border-t border-white/8 pt-5 text-xs text-slate-500">
                      Expected publication: <span className="text-slate-400">{report.expectedPublication}</span>
                    </p>
                  </article>
                </RevealOnScroll>
              </li>
            ))}
          </ul>

          <div className="mt-16 rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-[#0f1c30]/80 to-[#0a1424] px-8 py-10 text-center">
            <h2 className="text-2xl font-semibold text-white">Stay informed on new research</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Request a consultation to receive early access to upcoming reports and executive briefings.
            </p>
            <Link
              href={DISCOVERY_INTAKE_PATH}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-amber-500 px-10 py-3.5 text-sm font-semibold text-[#060d18] hover:bg-amber-400 transition-colors"
            >
              Request Research Access
            </Link>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </PageShell>
  );
}
