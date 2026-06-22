"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ENGAGEMENT_MODELS,
  HOW_WE_WORK_META,
  type EngagementModel,
} from "@/lib/how-we-work-together";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: EASE_OUT },
  }),
};

function EngagementCard({
  model,
  index,
  reducedMotion,
}: {
  model: EngagementModel;
  index: number;
  reducedMotion: boolean;
}) {
  return (
    <motion.article
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br from-[#132238]/70 via-[#0f1c30]/88 to-[#0a1424] p-7 shadow-lg shadow-black/20 transition-all duration-300 hover:border-amber-500/28 hover:shadow-[0_12px_40px_-16px_rgba(245,158,11,0.15)] sm:p-8"
      initial={reducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={0.06 + index * 0.08}
      variants={reveal}
      whileHover={
        reducedMotion
          ? undefined
          : { y: -2, transition: { duration: 0.28, ease: "easeOut" } }
      }
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/45 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />

      <div className="mb-5 flex flex-wrap items-center gap-3">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-amber-500/25 bg-amber-500/10 text-xs font-bold text-amber-300">
          {String(index + 1).padStart(2, "0")}
        </span>
        {model.duration ? (
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium tracking-[0.08em] text-slate-300 uppercase">
            {model.duration}
          </span>
        ) : null}
      </div>

      <h3 className="text-xl font-semibold tracking-tight text-white sm:text-[1.35rem]">
        {model.title}
      </h3>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400 sm:text-[15px] sm:leading-relaxed">
        {model.description}
      </p>
    </motion.article>
  );
}

type HowWeWorkTogetherSectionProps = {
  discoveryPath: string;
};

export function HowWeWorkTogetherSection({
  discoveryPath,
}: HowWeWorkTogetherSectionProps) {
  const reducedMotion = useReducedMotion();
  const {
    eyebrow,
    title,
    subheadline,
    ctaHeadline,
    ctaCopy,
    primaryCta,
    secondaryCta,
  } = HOW_WE_WORK_META;

  return (
    <section
      id="how-we-work"
      aria-labelledby="how-we-work-heading"
      className="relative overflow-hidden border-t border-white/5 bg-[#0a1424] px-6 py-20 lg:px-8 lg:py-24"
    >
      <div
        className="pointer-events-none absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-amber-600/6 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.header
          className="max-w-3xl"
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, ease: EASE_OUT }}
        >
          <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
            {eyebrow}
          </p>
          <h2
            id="how-we-work-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg sm:leading-relaxed">
            {subheadline}
          </p>
        </motion.header>

        <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {ENGAGEMENT_MODELS.map((model, index) => (
            <li key={model.id}>
              <EngagementCard
                model={model}
                index={index}
                reducedMotion={!!reducedMotion}
              />
            </li>
          ))}
        </ul>

        <motion.div
          className="relative mt-16 overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-[#152a45]/60 via-[#0f1c30]/80 to-[#0a1424] px-8 py-12 text-center sm:px-12 sm:py-14"
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, delay: 0.1, ease: EASE_OUT }}
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.08)_0%,transparent_65%)]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-2xl">
            <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {ctaHeadline}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
              {ctaCopy}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={discoveryPath}
                className="inline-flex items-center justify-center rounded-full bg-amber-500 px-7 py-3 text-sm font-semibold text-[#060d18] shadow-md shadow-amber-500/15 transition-all duration-300 hover:bg-amber-400 hover:shadow-[0_10px_28px_-8px_rgba(245,158,11,0.45)]"
              >
                {primaryCta}
              </Link>
              <Link
                href={discoveryPath}
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.03] px-7 py-3 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-amber-500/35 hover:bg-white/[0.06] hover:text-white"
              >
                {secondaryCta}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
