import Link from "next/link";
import { RevealOnScroll } from "@/app/components/reveal-on-scroll";
import { recentEngagementCards } from "@/lib/selected-experience";
import { DISCOVERY_INTAKE_PATH } from "@/lib/site-config";

export function RecentEngagementsSection() {
  return (
    <section
      id="recent-engagements"
      className="relative overflow-hidden border-t border-white/5 bg-[#0a1424] px-6 py-24 lg:px-8"
    >
      <div
        className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-amber-600/8 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl">
        <RevealOnScroll>
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
              Recent Engagements & Impact
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Real Experience. Measurable Impact.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-400">
              Supporting organizations through AI strategy, product innovation,
              digital transformation, and growth initiatives.{" "}
              <Link
                href="/insights/recent-engagements-impact"
                className="text-amber-200/90 hover:text-amber-200 transition-colors"
              >
                View full case studies →
              </Link>
            </p>
          </div>
        </RevealOnScroll>

        <ol className="relative mt-16 space-y-8 before:absolute before:bottom-4 before:left-[19px] before:top-4 before:hidden before:w-px before:bg-gradient-to-b before:from-amber-500/40 before:via-amber-500/15 before:to-transparent lg:before:block">
          {recentEngagementCards.map((engagement, index) => (
            <li key={engagement.organization}>
              <RevealOnScroll delayMs={index * 80}>
                <article className="group relative rounded-2xl border border-white/8 bg-[#0f1c30]/80 p-8 shadow-xl shadow-black/20 transition-all duration-300 hover:border-amber-500/25 hover:shadow-2xl hover:shadow-black/30 lg:pl-16">
                  <div className="absolute left-6 top-10 hidden h-3 w-3 rounded-full border-2 border-amber-400 bg-[#0a1424] lg:block" />
                  <div className="mb-5 h-px w-12 bg-gradient-to-r from-amber-500 to-amber-500/0 transition-all duration-300 group-hover:w-16" />
                  <p className="text-xs font-semibold tracking-[0.2em] text-amber-400/90 uppercase">
                    {engagement.organization}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
                    {engagement.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-slate-300">
                    {engagement.impactStatement}
                  </p>
                  <div className="mt-6">
                    <p className="text-xs font-medium tracking-wider text-slate-500 uppercase">
                      Key Contributions
                    </p>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {engagement.contributions.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-slate-400"
                        >
                          <span
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-400"
                            aria-hidden
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </RevealOnScroll>
            </li>
          ))}
        </ol>

        <RevealOnScroll delayMs={120}>
          <div className="mt-16 rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-[#0f1c30]/80 to-[#0a1424] px-8 py-10 text-center">
            <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Ready to discuss your organization&apos;s next initiative?
            </h3>
            <Link
              href={DISCOVERY_INTAKE_PATH}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-amber-500 px-10 py-3.5 text-sm font-semibold text-[#060d18] shadow-lg shadow-amber-500/20 hover:bg-amber-400 transition-colors"
            >
              Request a Consultation
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
