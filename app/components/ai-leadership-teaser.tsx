import Link from "next/link";
import { RevealOnScroll } from "@/app/components/reveal-on-scroll";
import { PILLARS } from "@/lib/ai-leadership";

export function AiLeadershipTeaser() {
  return (
    <section className="border-t border-white/5 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-[#132238] via-[#0f1c30] to-[#0a1424] px-8 py-12 shadow-xl shadow-black/25 sm:px-12 sm:py-14">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-amber-600/10 blur-3xl"
              aria-hidden
            />
            <div className="relative">
              <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
                AI Leadership Center
              </p>
              <h2 className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Executive guidance for AI strategy, governance, and transformation
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-400 sm:text-lg">
                Five leadership pillars, 25 in-depth articles, and downloadable
                frameworks for CEOs and leadership teams navigating AI with
                discipline and measurable outcomes.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {PILLARS.slice(0, 3).map((pillar) => (
                  <span
                    key={pillar.slug}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-400"
                  >
                    {pillar.title}
                  </span>
                ))}
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-500">
                  +2 more pillars
                </span>
              </div>
              <Link
                href="/ai-leadership"
                className="mt-8 inline-flex items-center justify-center rounded-full border border-amber-500/40 bg-amber-500/10 px-8 py-3 text-sm font-semibold text-amber-200 hover:bg-amber-500/20 transition-colors"
              >
                Explore the AI Leadership Center
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
