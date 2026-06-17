import Link from "next/link";
import { RevealOnScroll } from "@/app/components/reveal-on-scroll";

const reasons = [
  {
    title: "Product leadership experience",
    description:
      "15+ years directing product strategy across mobile portfolios, streaming platforms, B2B products, and AI-enabled SaaS—from concept through global launch.",
  },
  {
    title: "Global platform launches",
    description:
      "Direct experience supporting OTT streaming initiatives, international product rollout, and multi-brand platform delivery reaching millions of users worldwide.",
  },
  {
    title: "AI strategy expertise",
    description:
      "Executive advisory on AI opportunity assessment, adoption roadmaps, governance, and AI-enabled product strategy—vendor-neutral and outcome-focused.",
  },
  {
    title: "Digital transformation experience",
    description:
      "Led and advised on transformation programs spanning operations, technology modernization, and organizational change across media and enterprise environments.",
  },
  {
    title: "Enterprise and growth-stage expertise",
    description:
      "Advisory calibrated to organizational stage—from growing businesses and professional practices to enterprise leadership teams and board-level audiences.",
  },
  {
    title: "Business-first approach to technology",
    description:
      "Every recommendation connects to measurable outcomes—revenue, efficiency, customer experience, and competitive position—not technology for its own sake.",
  },
] as const;

export function WhyChooseSection() {
  return (
    <section className="border-t border-white/5 bg-[#0a1424] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
              Trust & authority
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Why Organizations Choose Hibbert Advisory Group
            </h2>
          </div>
        </RevealOnScroll>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, index) => (
            <li key={item.title}>
              <RevealOnScroll delayMs={index * 60}>
                <article className="h-full rounded-2xl border border-white/8 bg-[#0f1c30]/80 p-6">
                  <div className="mb-4 h-px w-10 bg-gradient-to-r from-amber-500 to-amber-500/0" />
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </article>
              </RevealOnScroll>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm text-slate-500">
          <Link
            href="/insights/recent-engagements-impact"
            className="text-amber-200/90 hover:text-amber-200 transition-colors"
          >
            View recent engagements & impact →
          </Link>
          {" · "}
          <Link
            href="/about/michael-hibbert"
            className="text-amber-200/90 hover:text-amber-200 transition-colors"
          >
            About Michael Hibbert →
          </Link>
        </p>
      </div>
    </section>
  );
}
