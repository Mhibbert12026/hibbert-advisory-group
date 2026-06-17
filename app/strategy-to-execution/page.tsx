import Link from "next/link";
import { JsonLd } from "@/app/components/json-ld";
import { PageShell } from "@/app/components/page-shell";
import { RevealOnScroll } from "@/app/components/reveal-on-scroll";
import {
  buildCapabilities,
  engagementSteps,
  recentCapabilities,
  whyChooseItems,
} from "@/lib/strategy-to-execution-content";
import { DISCOVERY_INTAKE_PATH, absoluteUrl } from "@/lib/site-config";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title:
    "AI Strategy, Product Development & Technology Delivery | Hibbert Advisory Group",
  description:
    "Hibbert Advisory Group helps organizations move from strategy to execution through executive leadership and a trusted network of technology specialists across AI, product development, and digital transformation.",
  path: "/strategy-to-execution",
});

export default function StrategyToExecutionPage() {
  const pageUrl = absoluteUrl("/strategy-to-execution");

  return (
    <PageShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "From Strategy to Execution",
          description:
            "Strategic advisory and delivery support for AI solutions, product development, and digital transformation initiatives.",
          url: pageUrl,
          isPartOf: {
            "@type": "WebSite",
            name: "Hibbert Advisory Group",
            url: absoluteUrl("/"),
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
            {
              "@type": "ListItem",
              position: 2,
              name: "From Strategy to Execution",
              item: pageUrl,
            },
          ],
        }}
      />

      <section className="relative overflow-hidden border-b border-white/5 px-6 py-20 lg:px-8 lg:py-28">
        <div
          className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-amber-600/8 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <li>
                <Link href="/" className="hover:text-amber-200/90 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-slate-300">From Strategy to Execution</li>
            </ol>
          </nav>
          <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
            From Strategy to Execution
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            From Vision to Reality
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            Strategy is only valuable when it creates results. Hibbert Advisory
            Group helps organizations identify opportunities, define solutions,
            and execute initiatives through a combination of strategic leadership
            and trusted delivery partners.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <RevealOnScroll>
            <div className="max-w-3xl">
              <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
                Capabilities
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                What We Help Build
              </h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                Advisory-led initiatives supported by specialists across product,
                engineering, and emerging technology disciplines.
              </p>
            </div>
          </RevealOnScroll>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {buildCapabilities.map((capability, index) => (
              <RevealOnScroll key={capability.title} delayMs={index * 60}>
                <article className="group h-full rounded-2xl border border-white/8 bg-[#0f1c30]/80 p-7 shadow-xl shadow-black/20 transition-all duration-300 hover:border-amber-500/25">
                  <div className="mb-5 h-px w-12 bg-gradient-to-r from-amber-500 to-amber-500/0 transition-all duration-300 group-hover:w-16" />
                  <h3 className="text-lg font-semibold text-white">
                    {capability.title}
                  </h3>
                  <ul className="mt-5 space-y-2.5">
                    {capability.items.map((item) => (
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
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-[#0a1424] px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <RevealOnScroll>
            <div className="max-w-3xl">
              <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
                Engagement Model
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                How We Engage
              </h2>
            </div>
          </RevealOnScroll>

          <ol className="mt-14 grid gap-6 lg:grid-cols-5">
            {engagementSteps.map((step, index) => (
              <RevealOnScroll key={step.title} delayMs={index * 70}>
                <li className="relative h-full rounded-2xl border border-white/8 bg-[#0f1c30]/80 p-6">
                  {index < engagementSteps.length - 1 && (
                    <span
                      className="pointer-events-none absolute top-1/2 -right-3 z-10 hidden h-px w-6 bg-amber-500/30 lg:block"
                      aria-hidden
                    />
                  )}
                  <span className="text-2xl font-light text-amber-500/50">
                    {step.step}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {step.description}
                  </p>
                </li>
              </RevealOnScroll>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <RevealOnScroll>
            <div className="max-w-3xl">
              <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
                Advisory Advantage
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Why Organizations Choose Hibbert Advisory Group
              </h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                A strategic advisory practice—not a large agency—supported by a
                curated network of specialists who execute under executive
                direction.
              </p>
            </div>
          </RevealOnScroll>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseItems.map((item, index) => (
              <RevealOnScroll key={item} delayMs={index * 50}>
                <li className="flex items-start gap-3 rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-4 text-sm text-slate-300">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400"
                    aria-hidden
                  />
                  {item}
                </li>
              </RevealOnScroll>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-white/5 bg-[#0a1424] px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <RevealOnScroll>
            <div className="max-w-3xl">
              <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
                Track Record
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Recent Capabilities
              </h2>
            </div>
          </RevealOnScroll>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {recentCapabilities.map((item, index) => (
              <RevealOnScroll key={item} delayMs={index * 50}>
                <li className="rounded-xl border border-white/8 bg-[#0f1c30]/80 px-5 py-4 text-sm text-slate-300">
                  {item}
                </li>
              </RevealOnScroll>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-white/5 px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <RevealOnScroll>
            <div className="relative overflow-hidden rounded-3xl border border-amber-500/25 bg-gradient-to-br from-[#152a45] via-[#0f1c30] to-[#0a1424] px-8 py-14 text-center shadow-2xl shadow-black/30 sm:px-12 sm:py-16">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.14),transparent_55%)]"
                aria-hidden
              />
              <div className="relative">
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Need More Than Advice?
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                  Whether you need strategy, execution, or both, Hibbert Advisory
                  Group can help move your initiative forward.
                </p>
                <Link
                  href={DISCOVERY_INTAKE_PATH}
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-amber-500 px-10 py-3.5 text-sm font-semibold text-[#060d18] shadow-lg shadow-amber-500/20 hover:bg-amber-400 transition-colors"
                >
                  Request a Consultation
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </PageShell>
  );
}
