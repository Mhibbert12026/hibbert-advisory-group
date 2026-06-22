"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { CalendlyLink } from "@/app/components/calendly-link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";

const FOUNDER_IMAGE = "/michael-hibbert-headshot.png";

const PORTRAIT_Z = 28;

const GHOST_LAYERS = [
  { id: "echo-3", offsetX: -52, opacity: 0.1, blur: 12, duration: 24, delay: 0, parallax: 1.35 },
  { id: "echo-2", offsetX: -34, opacity: 0.2, blur: 7, duration: 22, delay: 0.6, parallax: 1.05 },
  { id: "echo-1", offsetX: -14, opacity: 0.3, blur: 3, duration: 20, delay: 1.2, parallax: 0.75 },
] as const;

const SPRING = { stiffness: 90, damping: 48, mass: 0.45 };

const BG_TYPO_OPACITY = 0.24;
const BG_TYPO_ACCENT_OPACITY = 0.31;

const HERO_WORDS = [
  {
    label: "PRODUCT",
    className: "left-[5%] top-[4%] sm:left-[6%] sm:top-[5%]",
    size: "text-[clamp(2.16rem,7.56vw,6.84rem)]",
    accent: false,
  },
  {
    label: "AI",
    className: "left-[5%] top-[17%] sm:left-[6%] sm:top-[18%]",
    size: "text-[clamp(2.88rem,12.96vw,10.08rem)]",
    accent: true,
  },
] as const;

type Metric = {
  value: string;
  label: string;
};

type PremiumHeroSectionProps = {
  discoveryPath: string;
  servicesPath?: string;
  metrics: readonly Metric[];
};

function usePortraitParallax(enabled: boolean) {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const springX = useSpring(pointerX, SPRING);
  const springY = useSpring(pointerY, SPRING);

  const portraitX = useTransform(springX, (v) => v * 5);
  const portraitY = useTransform(springY, (v) => v * 3.5);

  const onMouseMove = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (!enabled) return;
      const rect = event.currentTarget.getBoundingClientRect();
      pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
      pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
    },
    [enabled, pointerX, pointerY],
  );

  const onMouseLeave = useCallback(() => {
    pointerX.set(0);
    pointerY.set(0);
  }, [pointerX, pointerY]);

  return { springX, springY, portraitX, portraitY, onMouseMove, onMouseLeave };
}

function HeroWord({
  label,
  className,
  size,
  accent = false,
  index,
  reducedMotion,
}: (typeof HERO_WORDS)[number] & { index: number; reducedMotion: boolean }) {
  return (
    <motion.span
      aria-hidden
      className={`pointer-events-none absolute select-none font-[family-name:var(--font-syne)] font-extrabold leading-[0.92] tracking-[-0.04em] ${size} ${className}`}
      style={{ zIndex: accent ? 12 : 10 }}
      initial={reducedMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: accent ? BG_TYPO_ACCENT_OPACITY : BG_TYPO_OPACITY, y: 0 }}
      transition={{
        duration: 0.9,
        delay: 0.08 + index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {accent ? (
        <span className="relative inline-block">
          <motion.span
            aria-hidden
            className="pointer-events-none absolute -inset-[20%] rounded-full bg-amber-400/8 blur-2xl"
            animate={
              reducedMotion ? undefined : { opacity: [0.2, 0.35, 0.2] }
            }
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            className="relative bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(105deg, rgba(251,191,36,0.55) 0%, rgba(254,243,199,0.75) 42%, rgba(245,158,11,0.6) 58%, rgba(251,191,36,0.55) 100%)",
              backgroundSize: "220% 100%",
              filter: "drop-shadow(0 0 12px rgba(251,191,36,0.15))",
            }}
            animate={
              reducedMotion
                ? undefined
                : { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }
            }
            transition={{ duration: 9, repeat: Infinity, ease: "linear", delay: 2 }}
          >
            {label}
          </motion.span>
        </span>
      ) : (
        <span className="text-white/70">{label}</span>
      )}
    </motion.span>
  );
}

function GhostLayer({
  layer,
  reducedMotion,
  springX,
  springY,
}: {
  layer: (typeof GHOST_LAYERS)[number];
  reducedMotion: boolean;
  springX: MotionValue<number>;
  springY: MotionValue<number>;
}) {
  const layerParallaxX = useTransform(springX, (v) => v * 7 * layer.parallax);
  const layerParallaxY = useTransform(springY, (v) => v * 5 * layer.parallax);

  return (
    <motion.div
      className="absolute inset-0"
      style={{ x: layerParallaxX, y: layerParallaxY }}
    >
      <motion.div
        className="absolute inset-0 overflow-hidden rounded-[1.5rem]"
        style={{
          filter: `blur(${layer.blur}px)`,
          opacity: layer.opacity,
        }}
        animate={
          reducedMotion
            ? { x: layer.offsetX }
            : {
                x: [
                  layer.offsetX,
                  layer.offsetX - 10,
                  layer.offsetX - 4,
                  layer.offsetX,
                ],
              }
        }
        transition={{
          duration: layer.duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: layer.delay + 2,
        }}
      >
        <Image
          src={FOUNDER_IMAGE}
          alt=""
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 30vw, 360px"
        />
      </motion.div>
    </motion.div>
  );
}

function FounderGhostStack({
  reducedMotion,
  springX,
  springY,
  portraitX,
  portraitY,
}: {
  reducedMotion: boolean;
  springX: MotionValue<number>;
  springY: MotionValue<number>;
  portraitX: MotionValue<number>;
  portraitY: MotionValue<number>;
}) {
  return (
    <div
      className="pointer-events-none absolute right-[-14%] top-[42%] z-[22] h-[min(52vh,480px)] w-[min(34vw,320px)] -translate-y-1/2 sm:right-[-10%] sm:h-[min(58vh,540px)] sm:w-[min(30vw,340px)] lg:right-[-4%] lg:top-[44%] lg:h-[min(62vh,580px)] lg:w-[min(26vw,360px)] xl:right-0"
      aria-hidden
    >
      {/* Ambient lighting — gold + navy */}
      <motion.div
        className="absolute inset-[-22%] rounded-[2.5rem] bg-[radial-gradient(ellipse_at_55%_45%,rgba(245,158,11,0.11)_0%,transparent_58%)] blur-3xl"
        animate={reducedMotion ? undefined : { opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute inset-[-20%] rounded-[2.5rem] bg-[radial-gradient(ellipse_at_40%_60%,rgba(30,58,95,0.14)_0%,transparent_62%)] blur-3xl"
        animate={reducedMotion ? undefined : { opacity: [0.3, 0.48, 0.3] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
      />

      {GHOST_LAYERS.map((layer) => (
        <GhostLayer
          key={layer.id}
          layer={layer}
          reducedMotion={reducedMotion}
          springX={springX}
          springY={springY}
        />
      ))}

      <motion.div
        className="absolute inset-0 overflow-hidden rounded-[1.5rem] border border-amber-500/15 shadow-[0_20px_60px_-18px_rgba(0,0,0,0.8),0_0_40px_-14px_rgba(245,158,11,0.12)]"
        style={{ zIndex: PORTRAIT_Z, x: portraitX, y: portraitY }}
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative h-full w-full">
          <Image
            src={FOUNDER_IMAGE}
            alt="Michael Hibbert, Founder and Principal Advisor"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 30vw, 360px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060d18]/35 via-transparent to-transparent" />
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#060d18]/30 to-transparent" />
        </div>
      </motion.div>
    </div>
  );
}

function HeroKpiStrip({
  metrics,
  reducedMotion,
}: {
  metrics: readonly Metric[];
  reducedMotion: boolean;
}) {
  return (
    <ul className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5 lg:grid-cols-4">
      {metrics.map((metric, index) => (
        <motion.li
          key={metric.label}
          className="group relative overflow-hidden rounded-lg border border-white/8 bg-[#0f1c30]/60 px-4 py-4 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/35 hover:bg-[#0f1c30]/85 hover:shadow-[0_8px_32px_-12px_rgba(245,158,11,0.22)]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 + index * 0.06 }}
          whileHover={
            reducedMotion
              ? undefined
              : { y: -3, transition: { duration: 0.28, ease: "easeOut" } }
          }
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden
          >
            <div className="absolute -inset-px rounded-lg bg-gradient-to-br from-amber-500/14 via-amber-500/4 to-transparent" />
            <div className="absolute inset-0 shadow-[inset_0_0_28px_-6px_rgba(245,158,11,0.28)]" />
          </div>
          <p className="relative text-[clamp(1.375rem,2.4vw,1.875rem)] font-bold leading-none tracking-tight text-white">
            {metric.value}
          </p>
          <p className="relative mt-2.5 text-[10px] font-medium leading-snug tracking-[0.08em] text-slate-400 uppercase sm:text-[11px]">
            {metric.label}
          </p>
        </motion.li>
      ))}
    </ul>
  );
}

function ExecutiveCredibilityBar() {
  return (
    <div className="mt-8 flex items-start gap-3.5 rounded-xl border border-amber-500/15 bg-gradient-to-r from-amber-500/[0.07] via-[#0f1c30]/50 to-[#0f1c30]/30 px-4 py-4 sm:mt-9 sm:gap-4 sm:px-5 sm:py-5">
      <div className="mt-0.5 flex shrink-0 flex-col items-center gap-1" aria-hidden>
        <span className="h-8 w-px bg-gradient-to-b from-amber-400/80 via-amber-500/50 to-transparent" />
        <span className="h-1.5 w-1.5 rounded-full bg-amber-400/90 shadow-[0_0_10px_rgba(251,191,36,0.45)]" />
      </div>
      <p className="text-sm font-medium leading-relaxed text-slate-200 sm:text-[15px] sm:leading-relaxed">
        Supporting{" "}
        <span className="font-semibold text-amber-200/95">1.42M+ users</span> across{" "}
        <span className="font-semibold text-amber-200/95">99 countries</span> through
        product, growth, and AI transformation leadership.
      </p>
    </div>
  );
}

function CredibilityRibbon() {
  return (
    <div className="mt-8 border-y border-white/6 py-4 sm:mt-9 sm:py-5">
      <p className="text-[11px] font-medium tracking-[0.14em] text-slate-500 uppercase">
        Trusted Across
      </p>
      <p className="mt-1.5 text-sm font-medium leading-relaxed text-slate-300">
        Global Media, SaaS, Nonprofit, Sports, and AI Organizations
      </p>
    </div>
  );
}

export function PremiumHeroSection({
  discoveryPath,
  servicesPath = "#services",
  metrics,
}: PremiumHeroSectionProps) {
  const reducedMotion = useReducedMotion();
  const [parallaxEnabled, setParallaxEnabled] = useState(false);

  useEffect(() => {
    setParallaxEnabled(
      !reducedMotion && window.matchMedia("(pointer: fine)").matches,
    );
  }, [reducedMotion]);

  const { springX, springY, portraitX, portraitY, onMouseMove, onMouseLeave } =
    usePortraitParallax(parallaxEnabled);

  return (
    <section
      className="relative min-h-[calc(100dvh-5rem)] overflow-hidden px-6 pt-10 pb-16 lg:px-8 lg:pt-12 lg:pb-20"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="pointer-events-none absolute inset-0 bg-[#060d18]" aria-hidden />

      <motion.div
        className="pointer-events-none absolute -left-32 top-[-10%] h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,rgba(30,58,95,0.35)_0%,transparent_70%)] blur-3xl"
        aria-hidden
        animate={reducedMotion ? undefined : { opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-[1180px]">
        <div className="relative min-h-[min(70vh,720px)]">
          {HERO_WORDS.map((word, index) => (
            <HeroWord
              key={word.label}
              {...word}
              index={index}
              reducedMotion={!!reducedMotion}
            />
          ))}

          <FounderGhostStack
            reducedMotion={!!reducedMotion}
            springX={springX}
            springY={springY}
            portraitX={portraitX}
            portraitY={portraitY}
          />

          {/* Value proposition — primary communication layer */}
          <motion.div
            className="relative z-[50] flex min-h-[min(70vh,720px)] flex-col justify-end pb-4 sm:max-w-[650px] lg:max-w-[710px] lg:justify-center lg:pb-2 lg:pt-[18rem] [&_h1]:relative [&_h1]:z-[1]"
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-5 text-[11px] font-medium tracking-[0.18em] text-amber-400/80 uppercase">
              Executive Advisory
            </p>

            <h1 className="text-[clamp(1.65rem,4.2vw,2.75rem)] font-semibold leading-[1.28] tracking-tight text-white">
              <span className="block">Product Leadership.</span>
              <span className="block text-amber-200/95">AI Strategy.</span>
              <span className="block">Business Transformation.</span>
            </h1>

            <p className="mt-6 max-w-[620px] text-[15px] leading-[1.7] text-slate-400 sm:mt-7 sm:text-base sm:leading-[1.75]">
              Helping founders, executives, and organizations identify, prioritize,
              and implement AI initiatives that drive measurable business outcomes.
            </p>

            <CredibilityRibbon />

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-9">
              <motion.div
                whileHover={
                  reducedMotion
                    ? undefined
                    : { y: -2, transition: { duration: 0.25, ease: "easeOut" } }
                }
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={discoveryPath}
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-amber-500 px-7 py-3 text-sm font-semibold text-[#060d18] shadow-md shadow-amber-500/15 transition-all duration-300 ease-out hover:bg-amber-400 hover:shadow-[0_10px_28px_-8px_rgba(245,158,11,0.45)]"
                >
                  <span className="relative z-10 transition-transform duration-300 group-hover:translate-y-[-0.5px]">
                    Start Discovery Intake
                  </span>
                  <span
                    className="absolute inset-0 translate-y-full bg-amber-300/35 transition-transform duration-300 ease-out group-hover:translate-y-0"
                    aria-hidden
                  />
                </Link>
              </motion.div>

              <motion.div
                whileHover={
                  reducedMotion
                    ? undefined
                    : { y: -2, transition: { duration: 0.25, ease: "easeOut" } }
                }
                whileTap={{ scale: 0.98 }}
              >
                <CalendlyLink className="inline-flex items-center justify-center rounded-full border border-amber-500/35 bg-amber-500/10 px-7 py-3 text-sm font-semibold text-amber-200 shadow-sm shadow-black/10 transition-all duration-300 ease-out hover:border-amber-500/50 hover:bg-amber-500/15 hover:text-amber-100 hover:shadow-[0_8px_24px_-10px_rgba(0,0,0,0.5)]">
                  Schedule Discovery Call
                </CalendlyLink>
              </motion.div>

              <motion.div
                whileHover={
                  reducedMotion
                    ? undefined
                    : { y: -2, transition: { duration: 0.25, ease: "easeOut" } }
                }
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={servicesPath}
                  className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.03] px-7 py-3 text-sm font-medium text-slate-200 shadow-sm shadow-black/10 transition-all duration-300 ease-out hover:border-amber-500/35 hover:bg-white/[0.06] hover:text-white hover:shadow-[0_8px_24px_-10px_rgba(0,0,0,0.5)]"
                >
                  View Advisory Services
                </Link>
              </motion.div>
            </div>

            <HeroKpiStrip metrics={metrics} reducedMotion={!!reducedMotion} />

            <ExecutiveCredibilityBar />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
