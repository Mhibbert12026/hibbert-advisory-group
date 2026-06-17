import Image from "next/image";
import Link from "next/link";
import { ConsultationCTA } from "@/app/components/consultation-cta";
import { JsonLd } from "@/app/components/json-ld";
import { PageShell } from "@/app/components/page-shell";
import { RevealOnScroll } from "@/app/components/reveal-on-scroll";
import {
  AI_LEADERSHIP_GAP_META,
  AI_LEADERSHIP_GAP_PATH,
  EXECUTIVE_SUMMARY,
  LEADERSHIP_GAP_SECTIONS,
} from "@/lib/research/ai-leadership-gap-content";
import { REPORT_IMAGES } from "@/lib/global-ai-opportunity-report/images";
import { RESEARCH_HUB_PATH } from "@/lib/research";
import { buildResearchPublicationSchema } from "@/lib/research/schema";
import { DISCOVERY_INTAKE_PATH } from "@/lib/site-config";

export function AiLeadershipGapPage() {
  return (
    <PageShell>
      <JsonLd
        data={buildResearchPublicationSchema({
          title: AI_LEADERSHIP_GAP_META.title,
          description: AI_LEADERSHIP_GAP_META.metaDescription,
          path: AI_LEADERSHIP_GAP_PATH,
          imagePath: AI_LEADERSHIP_GAP_META.ogImagePath,
          publishDate: AI_LEADERSHIP_GAP_META.publishDate,
        })}
      />

      <section className="border-b border-white/5 px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
            <Link href="/" className="hover:text-amber-200/90">Home</Link>
            <span className="mx-2">/</span>
            <Link href={RESEARCH_HUB_PATH} className="hover:text-amber-200/90">Research</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-300">{AI_LEADERSHIP_GAP_META.title}</span>
          </nav>
          <p className="text-xs font-semibold tracking-[0.2em] text-amber-400/90 uppercase">
            Featured Perspective
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {AI_LEADERSHIP_GAP_META.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            {AI_LEADERSHIP_GAP_META.metaDescription}
          </p>
        </div>
      </section>

      <section className="border-b border-white/5 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-white">Executive summary</h2>
          <p className="mt-6 text-lg leading-[1.85] font-medium text-slate-200">{EXECUTIVE_SUMMARY}</p>
        </div>
      </section>

      <section className="border-b border-white/5 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a1424]">
            <Image
              src={REPORT_IMAGES.aiLeadershipGap.src}
              alt={REPORT_IMAGES.aiLeadershipGap.alt}
              width={1024}
              height={682}
              className="h-auto w-full"
              priority
            />
          </div>
          {REPORT_IMAGES.aiLeadershipGap.caption && (
            <p className="mt-4 border-l-2 border-amber-500/30 pl-4 text-sm text-slate-500">
              {REPORT_IMAGES.aiLeadershipGap.caption}
            </p>
          )}
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl space-y-16">
          {LEADERSHIP_GAP_SECTIONS.map((section, index) => (
            <RevealOnScroll key={section.id} delayMs={index * 50}>
              <article id={section.id} className="scroll-mt-28">
                <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
                {"paragraphs" in section && (
                  <div className="mt-6 space-y-5">
                    {section.paragraphs.map((p) => (
                      <p key={p.slice(0, 48)} className="text-lg leading-[1.85] text-slate-300">{p}</p>
                    ))}
                  </div>
                )}
                {"pullQuote" in section && section.pullQuote && (
                  <blockquote className="my-10 border-y border-amber-500/20 py-8 text-center">
                    <p className="text-xl font-medium italic text-amber-200/90 sm:text-2xl">
                      &ldquo;{section.pullQuote}&rdquo;
                    </p>
                  </blockquote>
                )}
                {"bullets" in section && section.bullets && (
                  <ul className="mt-6 space-y-3">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-lg text-slate-300">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="border-t border-white/5 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-[#0f1c30]/80 to-[#0a1424] px-8 py-10 text-center">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Close the leadership gap in your organization
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Hibbert Advisory Group helps leadership teams build the strategic clarity, governance,
              and execution discipline required for AI initiatives to create measurable value.
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
