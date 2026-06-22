import Link from "next/link";
import { ALL_INDUSTRY_PAGES } from "@/lib/industry-pages-content";

export function HomeIndustriesSection() {
  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="border-t border-white/5 bg-[#0a1424] px-6 py-14 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <header className="max-w-2xl">
          <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
            Industries
          </p>
          <h2
            id="industries-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Sector expertise
          </h2>
          <p className="mt-4 leading-relaxed text-slate-400">
            Executive advisory tailored to the operational, regulatory, and strategic realities of
            your industry.
          </p>
        </header>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ALL_INDUSTRY_PAGES.map((industry) => (
            <li key={industry.path}>
              <Link
                href={industry.path}
                className="group flex h-full flex-col rounded-xl border border-white/8 bg-[#0f1c30]/70 px-6 py-5 transition-colors hover:border-amber-500/25"
              >
                <p className="text-xs font-medium tracking-[0.14em] text-amber-400/85 uppercase">
                  {industry.heroEyebrow}
                </p>
                <p className="mt-2 text-sm font-medium leading-snug text-slate-200 transition-colors group-hover:text-white">
                  {industry.heroTitle}
                </p>
                <span className="mt-4 text-xs font-semibold text-amber-200/80 transition-colors group-hover:text-amber-200">
                  Learn more →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
