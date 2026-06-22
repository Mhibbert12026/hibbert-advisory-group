import Image from "next/image";
import Link from "next/link";
import { RevealOnScroll } from "@/app/components/reveal-on-scroll";
import {
  ENTERPRISE_EXPERIENCE_CARDS,
  ENTERPRISE_EXPERIENCE_CTA,
  ENTERPRISE_EXPERIENCE_META,
  ENTERPRISE_IMPACT_METRICS,
  type EnterpriseExperienceCard,
} from "@/lib/enterprise-experience-showcase";
import { DISCOVERY_INTAKE_PATH } from "@/lib/site-config";

function ExperienceCard({ card }: { card: EnterpriseExperienceCard }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br from-[#132238]/90 via-[#0f1c30]/95 to-[#0a1424] p-7 shadow-xl shadow-black/25 transition-all duration-500 hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/5 sm:p-8">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />
      <div
        className={`mb-5 inline-flex max-w-full items-center transition-opacity duration-500 group-hover:opacity-100 ${
          card.logo.containerClassName ?? ""
        }`}
      >
        <Image
          src={card.logo.src}
          alt={card.logo.alt}
          width={card.logo.width}
          height={card.logo.height}
          className={`w-auto max-w-[160px] object-contain object-left ${card.logo.imageClassName ?? "h-10"}`}
        />
      </div>
      <div className="mb-5 h-px w-12 bg-gradient-to-r from-amber-500 to-amber-500/0 transition-all duration-500 group-hover:w-20" aria-hidden />
      <p className="text-xs font-semibold tracking-[0.18em] text-amber-400/90 uppercase">
        {card.organization}
      </p>
      <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight text-white transition-colors duration-300 group-hover:text-amber-100/95">
        {card.headline}
      </h3>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">{card.description}</p>
      <div className="mt-6 border-t border-white/8 pt-5">
        <p className="text-[10px] font-semibold tracking-[0.14em] text-slate-500 uppercase">
          Focus Areas
        </p>
        <ul className="mt-3 flex flex-wrap gap-2" aria-label={`Focus areas for ${card.organization}`}>
          {card.focusAreas.map((area) => (
            <li
              key={area}
              className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-slate-300 transition-colors duration-300 group-hover:border-amber-500/20 group-hover:text-slate-200"
            >
              {area}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function EnterpriseExperienceShowcase() {
  const sectionId = "enterprise-experience";

  return (
    <section
      id={sectionId}
      aria-labelledby={`${sectionId}-heading`}
      className="relative overflow-hidden border-t border-white/5 bg-[#060d18] px-6 py-24 lg:px-8 lg:py-28"
    >
      <div
        className="pointer-events-none absolute -right-32 top-0 h-[28rem] w-[28rem] rounded-full bg-amber-600/6 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-blue-950/20 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <RevealOnScroll>
          <header className="max-w-3xl">
            <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
              Executive Proof & Authority
            </p>
            <h2
              id={`${sectionId}-heading`}
              className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
            >
              {ENTERPRISE_EXPERIENCE_META.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              {ENTERPRISE_EXPERIENCE_META.subtitle}
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-500">
              {ENTERPRISE_EXPERIENCE_META.introduction}
            </p>
          </header>
        </RevealOnScroll>

        <ul className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {ENTERPRISE_EXPERIENCE_CARDS.map((card, index) => (
            <li key={card.id}>
              <RevealOnScroll delayMs={index * 60}>
                <ExperienceCard card={card} />
              </RevealOnScroll>
            </li>
          ))}
        </ul>

        <RevealOnScroll delayMs={100}>
          <div
            className="mt-20 overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-[#152a45]/70 via-[#0f1c30]/90 to-[#0a1424] shadow-2xl shadow-black/30"
            aria-labelledby={`${sectionId}-metrics-heading`}
          >
            <div className="border-b border-white/8 px-8 py-6 sm:px-10">
              <h3
                id={`${sectionId}-metrics-heading`}
                className="text-lg font-semibold text-white sm:text-xl"
              >
                Impact at a glance
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-px bg-white/5 sm:grid-cols-3 lg:grid-cols-6">
              {ENTERPRISE_IMPACT_METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className={`flex flex-col items-center justify-center bg-[#0a1424]/80 px-4 py-8 text-center transition-colors hover:bg-[#0f1c30]/80 ${
                    metric.featured ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  {metric.value ? (
                    <p className="bg-gradient-to-b from-amber-200 to-amber-500/80 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl">
                      {metric.value}
                    </p>
                  ) : (
                    <div className="mb-2 h-1 w-8 rounded-full bg-amber-500/60" aria-hidden />
                  )}
                  <p
                    className={`mt-2 leading-snug text-slate-400 ${
                      metric.featured ? "text-sm font-medium text-slate-300" : "text-xs"
                    }`}
                  >
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delayMs={140}>
          <div className="mt-16 rounded-2xl border border-amber-500/25 bg-gradient-to-br from-amber-500/10 via-[#0f1c30]/80 to-[#0a1424] px-8 py-12 text-center shadow-xl shadow-black/20 sm:px-12">
            <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {ENTERPRISE_EXPERIENCE_CTA.headline}
            </h3>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
              {ENTERPRISE_EXPERIENCE_CTA.description}
            </p>
            <Link
              href={DISCOVERY_INTAKE_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-amber-500 px-10 py-3.5 text-sm font-semibold text-[#060d18] shadow-lg shadow-amber-500/20 transition-all hover:bg-amber-400 hover:shadow-amber-500/30"
            >
              {ENTERPRISE_EXPERIENCE_CTA.buttonLabel}
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
