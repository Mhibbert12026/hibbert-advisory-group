import Link from "next/link";
import { RevealOnScroll } from "@/app/components/reveal-on-scroll";

export function GrowingBusinessesAiSection() {
  return (
    <section className="border-t border-white/5 bg-[#0a1424] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-[#132238] via-[#0f1c30] to-[#0a1424] px-8 py-12 shadow-xl shadow-black/25 sm:px-12 sm:py-14">
            <div
              className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-amber-600/10 blur-3xl"
              aria-hidden
            />
            <div className="relative max-w-3xl">
              <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
                AI for Growing Businesses
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Practical AI guidance for owners and professional practices
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
                Whether you operate a professional services firm, advisory practice,
                healthcare organization, nonprofit, agency, or growing company, AI presents
                significant opportunities to improve efficiency, increase revenue, and enhance
                customer experiences.
              </p>
              <Link
                href="/small-business-ai"
                className="mt-8 inline-flex items-center justify-center rounded-full border border-amber-500/40 bg-amber-500/10 px-8 py-3 text-sm font-semibold text-amber-200 hover:bg-amber-500/20 transition-colors"
              >
                Explore Small Business AI Resources
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
