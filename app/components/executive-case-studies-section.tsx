"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  EXECUTIVE_CASE_STUDIES_META,
  EXPERIENCE_PAGE_PATH,
  getFeaturedCaseStudies,
  type ExecutiveCaseStudy,
} from "@/lib/executive-case-studies";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

function CaseStudyCard({
  study,
  featured = false,
  index,
  reducedMotion,
}: {
  study: ExecutiveCaseStudy;
  featured?: boolean;
  index: number;
  reducedMotion: boolean;
}) {
  const leadOutcome = study.outcomes[0];
  const supportingOutcomes = study.outcomes.slice(1, featured ? 3 : 2);

  return (
    <motion.article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br from-[#132238]/80 via-[#0f1c30]/90 to-[#0a1424] shadow-xl shadow-black/20 transition-all duration-300 hover:border-amber-500/28 ${
        featured ? "p-8 sm:p-10 lg:p-12" : "p-6 sm:p-7"
      }`}
      initial={reducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: EASE_OUT }}
      whileHover={
        reducedMotion ? undefined : { y: -2, transition: { duration: 0.25 } }
      }
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/45 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
        aria-hidden
      />
      <p className="text-[11px] font-semibold tracking-[0.16em] text-amber-400/85 uppercase">
        {study.sector}
      </p>
      <h3
        className={`mt-2 font-semibold tracking-tight text-white ${
          featured ? "text-2xl sm:text-3xl" : "text-xl"
        }`}
      >
        {study.organization}
      </h3>
      <p className={`mt-2 text-slate-400 ${featured ? "text-base" : "text-sm"}`}>
        {study.headline}
      </p>
      <div className="mt-5 border-t border-white/8 pt-5">
        <p className="text-[10px] font-semibold tracking-[0.14em] text-slate-500 uppercase">
          Key Outcome
        </p>
        <p
          className={`mt-2 font-semibold text-amber-200/95 ${
            featured ? "text-lg" : "text-base"
          }`}
        >
          {leadOutcome}
        </p>
      </div>
      {supportingOutcomes.length > 0 && (
        <ul className="mt-4 flex flex-col gap-2">
          {supportingOutcomes.map((outcome) => (
            <li
              key={outcome}
              className="flex items-start gap-2 text-sm leading-relaxed text-slate-300"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-500/70" aria-hidden />
              {outcome}
            </li>
          ))}
        </ul>
      )}
    </motion.article>
  );
}

export function ExecutiveCaseStudiesSection() {
  const reducedMotion = useReducedMotion();
  const featured = getFeaturedCaseStudies();
  const [leadStudy, ...supportingStudies] = featured;
  const { eyebrow, title, subheader, viewAllLabel } = EXECUTIVE_CASE_STUDIES_META;

  if (!leadStudy) return null;

  return (
    <section
      id="outcomes"
      aria-labelledby="case-studies-heading"
      className="relative overflow-hidden border-t border-white/5 bg-[#060d18] px-6 py-14 lg:px-8 lg:py-16"
    >
      <div className="relative mx-auto max-w-6xl">
        <motion.header
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
              {eyebrow}
            </p>
            <h2
              id="case-studies-heading"
              className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-400">{subheader}</p>
          </div>
          <Link
            href={EXPERIENCE_PAGE_PATH}
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-amber-200/90 transition-colors hover:text-amber-100"
          >
            {viewAllLabel}
            <span aria-hidden>→</span>
          </Link>
        </motion.header>

        <div className="mt-10 grid gap-5 lg:grid-cols-2 lg:gap-6">
          <div className="lg:row-span-2">
            <CaseStudyCard
              study={leadStudy}
              featured
              index={0}
              reducedMotion={!!reducedMotion}
            />
          </div>
          {supportingStudies.map((study, index) => (
            <CaseStudyCard
              key={study.id}
              study={study}
              index={index + 1}
              reducedMotion={!!reducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
