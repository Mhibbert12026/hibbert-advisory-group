import Link from "next/link";
import { ResearchCard } from "@/app/components/research/research-card";
import { RevealOnScroll } from "@/app/components/reveal-on-scroll";
import { getHomepageResearch, RESEARCH_HUB_PATH } from "@/lib/research";

export function ResearchFrameworksSection() {
  const items = getHomepageResearch();

  return (
    <section className="border-t border-white/5 bg-[#0a1424] px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
              Hibbert Research
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Research & Frameworks
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
              Original research, proprietary frameworks, and executive reports—developed to help
              leadership teams navigate AI, product strategy, and transformation with discipline.
            </p>
          </div>
        </RevealOnScroll>

        <ul className="mt-12 grid gap-8 lg:grid-cols-3">
          {items.map((item, index) => (
            <li key={item.slug}>
              <RevealOnScroll delayMs={index * 80}>
                <ResearchCard item={item} />
              </RevealOnScroll>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <Link
            href={RESEARCH_HUB_PATH}
            className="inline-flex items-center justify-center rounded-full border border-amber-500/40 bg-amber-500/10 px-10 py-3.5 text-sm font-semibold text-amber-200 hover:bg-amber-500/20 transition-colors"
          >
            Explore Research
          </Link>
        </div>
      </div>
    </section>
  );
}
