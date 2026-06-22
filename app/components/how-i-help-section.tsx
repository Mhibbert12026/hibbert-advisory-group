"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { CalendlyLink } from "@/app/components/calendly-link";
import { LEADERSHIP_CHALLENGES } from "@/lib/what-we-solve";
import { ENGAGEMENT_MODELS, HOW_WE_WORK_META } from "@/lib/how-we-work-together";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const SECTION = {
  eyebrow: "How I Help",
  title: "Challenges We Solve — And How We Engage",
  subheadline:
    "Organizations engage Hibbert Advisory Group when they need clarity, alignment, and execution. Flexible models move teams from uncertainty to measurable outcomes.",
} as const;

type HowIHelpSectionProps = {
  discoveryPath: string;
};

export function HowIHelpSection({ discoveryPath }: HowIHelpSectionProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="how-i-help"
      aria-labelledby="how-i-help-heading"
      className="relative overflow-hidden border-t border-white/5 bg-[#0a1424] px-6 py-14 lg:px-8 lg:py-16"
    >
      <div
        className="pointer-events-none absolute -right-32 top-0 h-72 w-72 rounded-full bg-amber-600/5 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.header
          className="max-w-3xl"
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
            {SECTION.eyebrow}
          </p>
          <h2
            id="how-i-help-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            {SECTION.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            {SECTION.subheadline}
          </p>
        </motion.header>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Challenges — left, wider */}
          <div className="lg:col-span-7">
            <p className="mb-5 text-[11px] font-semibold tracking-[0.16em] text-slate-500 uppercase">
              The Challenges Leaders Bring
            </p>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {LEADERSHIP_CHALLENGES.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: EASE_OUT }}
                >
                  <article className="group h-full rounded-xl border border-white/8 bg-[#0f1c30]/50 p-5 transition-colors duration-300 hover:border-amber-500/22">
                    <h3 className="text-[15px] font-semibold leading-snug text-white">
                      {item.challengeLines.map((line, i) => (
                        <span key={line}>
                          {i > 0 ? <br /> : null}
                          {line}
                        </span>
                      ))}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-slate-400">
                      <span className="font-medium text-amber-400/80">Outcome: </span>
                      {item.outcome}
                    </p>
                  </article>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Engagement models — right column */}
          <div className="lg:col-span-5">
            <p className="mb-5 text-[11px] font-semibold tracking-[0.16em] text-slate-500 uppercase">
              {HOW_WE_WORK_META.eyebrow}
            </p>
            <ul className="flex flex-col gap-4">
              {ENGAGEMENT_MODELS.map((model, index) => (
                <motion.li
                  key={model.id}
                  initial={reducedMotion ? false : { opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.07, ease: EASE_OUT }}
                >
                  <article className="rounded-xl border border-white/8 bg-gradient-to-br from-[#132238]/60 to-[#0a1424] p-5 transition-colors duration-300 hover:border-amber-500/22">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-semibold text-white">{model.title}</h3>
                      {model.duration ? (
                        <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] font-medium text-slate-400 uppercase">
                          {model.duration}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {model.description}
                    </p>
                  </article>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <motion.div
          className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-amber-500/15 bg-gradient-to-r from-amber-500/[0.06] to-transparent px-6 py-6 sm:flex-row sm:items-center sm:px-8"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE_OUT }}
        >
          <div>
            <p className="text-lg font-semibold text-white">{HOW_WE_WORK_META.ctaHeadline}</p>
            <p className="mt-1 max-w-xl text-sm text-slate-400">{HOW_WE_WORK_META.ctaCopy}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={discoveryPath}
              className="inline-flex rounded-full bg-amber-500 px-6 py-2.5 text-sm font-semibold text-[#060d18] transition-colors hover:bg-amber-400"
            >
              {HOW_WE_WORK_META.primaryCta}
            </Link>
            <CalendlyLink
              className="inline-flex rounded-full border border-white/12 px-6 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-amber-500/30 hover:text-white"
            >
              {HOW_WE_WORK_META.secondaryCta}
            </CalendlyLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
