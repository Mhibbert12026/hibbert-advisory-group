import Link from "next/link";
import { RevealOnScroll } from "@/app/components/reveal-on-scroll";

export function StrategyExecutionTeaser() {
  return (
    <section className="border-t border-white/5 bg-[#0a1424] px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-[#132238] via-[#0f1c30] to-[#0a1424] px-8 py-12 shadow-xl shadow-black/25 sm:px-12 sm:py-14">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-amber-600/10 blur-3xl"
              aria-hidden
            />
            <div className="relative max-w-3xl">
              <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
                Strategy + Execution
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Not every initiative stops at strategy.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
                Through a trusted network of specialists, Hibbert Advisory Group
                can support organizations with AI solutions, software development,
                product execution, mobile applications, and digital transformation
                initiatives.
              </p>
              <Link
                href="/strategy-to-execution"
                className="mt-8 inline-flex items-center justify-center rounded-full border border-amber-500/40 bg-amber-500/10 px-8 py-3 text-sm font-semibold text-amber-200 hover:bg-amber-500/20 transition-colors"
              >
                Explore Delivery Capabilities
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
