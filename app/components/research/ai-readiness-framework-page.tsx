import Image from "next/image";
import Link from "next/link";
import { ConsultationCTA } from "@/app/components/consultation-cta";
import { JsonLd } from "@/app/components/json-ld";
import { PageShell } from "@/app/components/page-shell";
import { RevealOnScroll } from "@/app/components/reveal-on-scroll";
import {
  AI_READINESS_FRAMEWORK_META,
  AI_READINESS_FRAMEWORK_PATH,
  FRAMEWORK_OVERVIEW,
  RECOMMENDED_ACTIONS,
  SCORING_DIMENSIONS,
  SCORING_METHODOLOGY,
} from "@/lib/research/ai-readiness-framework-content";
import { REPORT_IMAGES } from "@/lib/global-ai-opportunity-report/images";
import { RESEARCH_HUB_PATH } from "@/lib/research";
import { buildResearchPublicationSchema } from "@/lib/research/schema";
import { DISCOVERY_INTAKE_PATH } from "@/lib/site-config";

export function AiReadinessFrameworkPage() {
  return (
    <PageShell>
      <JsonLd
        data={buildResearchPublicationSchema({
          title: AI_READINESS_FRAMEWORK_META.title,
          description: AI_READINESS_FRAMEWORK_META.metaDescription,
          path: AI_READINESS_FRAMEWORK_PATH,
          imagePath: AI_READINESS_FRAMEWORK_META.ogImagePath,
          publishDate: AI_READINESS_FRAMEWORK_META.publishDate,
          type: "CreativeWork",
        })}
      />

      <section className="border-b border-white/5 px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
            <Link href="/" className="hover:text-amber-200/90">Home</Link>
            <span className="mx-2">/</span>
            <Link href={RESEARCH_HUB_PATH} className="hover:text-amber-200/90">Research</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-300">{AI_READINESS_FRAMEWORK_META.title}</span>
          </nav>
          <p className="text-xs font-semibold tracking-[0.2em] text-amber-400/90 uppercase">
            Strategic Framework
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {AI_READINESS_FRAMEWORK_META.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            {AI_READINESS_FRAMEWORK_META.metaDescription}
          </p>
        </div>
      </section>

      <section className="border-b border-white/5 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold text-white">Overview</h2>
          <p className="mt-4 text-lg font-medium text-slate-200">{FRAMEWORK_OVERVIEW.headline}</p>
          {FRAMEWORK_OVERVIEW.paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className="mt-4 text-base leading-relaxed text-slate-400">{p}</p>
          ))}
        </div>
      </section>

      <section className="border-b border-white/5 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold text-white">Framework visualization</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#0a1424]">
            <Image
              src={REPORT_IMAGES.aiReadinessFramework.src}
              alt={REPORT_IMAGES.aiReadinessFramework.alt}
              width={1024}
              height={682}
              className="h-auto w-full"
              priority
            />
          </div>
          {REPORT_IMAGES.aiReadinessFramework.caption && (
            <p className="mt-4 border-l-2 border-amber-500/30 pl-4 text-sm text-slate-500">
              {REPORT_IMAGES.aiReadinessFramework.caption}
            </p>
          )}
        </div>
      </section>

      <section className="border-b border-white/5 px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold text-white">Scoring dimensions</h2>
          <div className="mt-12 space-y-16">
            {SCORING_DIMENSIONS.map((dimension, index) => (
              <RevealOnScroll key={dimension.id} delayMs={index * 40}>
                <article id={dimension.id} className="scroll-mt-28">
                  <h3 className="text-xl font-semibold text-white sm:text-2xl">{dimension.title}</h3>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-400">
                    {dimension.description}
                  </p>
                  <div className="mt-8 grid gap-8 lg:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold tracking-wider text-amber-400/80 uppercase">
                        Assessment criteria
                      </p>
                      <ul className="mt-4 space-y-2">
                        {dimension.criteria.map((c) => (
                          <li key={c} className="flex items-start gap-2 text-sm text-slate-400">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" aria-hidden />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-wider text-amber-400/80 uppercase">
                        Score guide
                      </p>
                      <ul className="mt-4 space-y-3">
                        {dimension.scoreGuide.map((guide) => (
                          <li
                            key={guide.range}
                            className="rounded-xl border border-white/8 bg-[#0f1c30]/60 p-4"
                          >
                            <span className="font-mono text-sm font-semibold text-amber-200">
                              {guide.range}
                            </span>
                            <p className="mt-2 text-sm text-slate-400">{guide.meaning}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold text-white">Scoring methodology</h2>
          <ol className="mt-8 space-y-4">
            {SCORING_METHODOLOGY.map((step, i) => (
              <li key={step.slice(0, 40)} className="flex gap-4 text-base leading-relaxed text-slate-400">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10 text-sm font-semibold text-amber-200">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-white/5 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold text-white">Recommended actions</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {RECOMMENDED_ACTIONS.map((action) => (
              <li
                key={action}
                className="rounded-xl border border-white/8 bg-[#0f1c30]/60 p-5 text-sm leading-relaxed text-slate-300"
              >
                {action}
              </li>
            ))}
          </ul>
          <div className="mt-12 rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-[#0f1c30]/80 to-[#0a1424] px-8 py-10 text-center">
            <h3 className="text-xl font-semibold text-white sm:text-2xl">
              Apply the framework to your organization
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Request a consultation to conduct a Hibbert AI Readiness assessment and translate
              findings into a prioritized implementation roadmap.
            </p>
            <Link
              href={DISCOVERY_INTAKE_PATH}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-amber-500 px-10 py-3.5 text-sm font-semibold text-[#060d18] hover:bg-amber-400 transition-colors"
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
