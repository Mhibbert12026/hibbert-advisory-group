"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  LEADERSHIP_CHALLENGES,
  WHAT_WE_SOLVE_META,
  type LeadershipChallenge,
} from "@/lib/what-we-solve";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: EASE_OUT },
  }),
};

function ChallengeCard({
  challenge,
  index,
  reducedMotion,
}: {
  challenge: LeadershipChallenge;
  index: number;
  reducedMotion: boolean;
}) {
  const { challengeLines, outcome } = challenge;

  return (
    <motion.article
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br from-[#132238]/75 via-[#0f1c30]/90 to-[#0a1424] p-7 shadow-lg shadow-black/20 transition-colors duration-300 hover:border-amber-500/25 sm:p-8"
      initial={reducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={0.06 + index * 0.07}
      variants={reveal}
      whileHover={
        reducedMotion
          ? undefined
          : { y: -2, transition: { duration: 0.28, ease: "easeOut" } }
      }
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />

      <div className="flex flex-1 flex-col">
        <h3 className="text-lg font-semibold leading-snug tracking-tight text-white sm:text-xl">
          {challengeLines.map((line, lineIndex) => (
            <span key={line}>
              {lineIndex > 0 ? <br /> : null}
              {line}
            </span>
          ))}
        </h3>

        <div className="mt-6 border-t border-white/8 pt-6">
          <p className="text-[10px] font-semibold tracking-[0.14em] text-amber-400/80 uppercase">
            Outcome
          </p>
          <p className="mt-2.5 text-sm leading-relaxed text-slate-300 sm:text-[15px] sm:leading-relaxed">
            {challenge.outcome}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

type WhatWeSolveSectionProps = {
  discoveryPath: string;
};

export function WhatWeSolveSection({ discoveryPath }: WhatWeSolveSectionProps) {
  const reducedMotion = useReducedMotion();
  const { eyebrow, title, subheadline, ctaLabel } = WHAT_WE_SOLVE_META;

  return (
    <section
      id="what-we-solve"
      aria-labelledby="what-we-solve-heading"
      className="relative overflow-hidden border-t border-white/5 bg-[#060d18] px-6 py-20 lg:px-8 lg:py-24"
    >
      <div
        className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-[#1e3a5f]/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-amber-600/5 blur-3xl"
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
            id="what-we-solve-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg sm:leading-relaxed">
            {subheadline}
          </p>
        </motion.header>

        <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {LEADERSHIP_CHALLENGES.map((item, index) => (
            <li key={item.id}>
              <ChallengeCard
                challenge={item}
                index={index}
                reducedMotion={!!reducedMotion}
              />
            </li>
          ))}
        </ul>

        <motion.div
          className="mt-14 flex justify-center"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: EASE_OUT }}
        >
          <Link
            href={discoveryPath}
            className="inline-flex items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10 px-8 py-3.5 text-sm font-semibold text-amber-100 transition-all duration-300 hover:border-amber-500/50 hover:bg-amber-500/15 hover:text-amber-50 hover:shadow-[0_8px_28px_-10px_rgba(245,158,11,0.35)]"
          >
            {ctaLabel}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
