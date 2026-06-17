import Link from "next/link";
import { RevealOnScroll } from "@/app/components/reveal-on-scroll";

const locations = [
  {
    title: "AI Consultant Atlanta",
    description:
      "Executive AI advisory for adoption strategy, workflow automation, opportunity assessment, and business transformation.",
    path: "/locations/atlanta-ai-consultant",
  },
  {
    title: "Product Strategy Consultant Atlanta",
    description:
      "Product roadmaps, fractional product leadership, market validation, and product operations for Atlanta organizations.",
    path: "/locations/atlanta-product-strategy-consultant",
  },
  {
    title: "Digital Transformation Consultant Atlanta",
    description:
      "Process modernization, technology assessment, change management, and operational transformation advisory.",
    path: "/locations/atlanta-digital-transformation-consultant",
  },
] as const;

export function RegionalExpertise() {
  return (
    <section
      id="locations"
      className="border-t border-white/5 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
              Regional Expertise
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Atlanta-based advisory, national reach
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-400">
              Hibbert Advisory Group is based in the Atlanta metro, serving organizations
              across the Southeast and nationally with executive advisory on AI, product
              strategy, and digital transformation.
            </p>
          </div>
        </RevealOnScroll>

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {locations.map((location, index) => (
            <li key={location.path}>
              <RevealOnScroll delayMs={index * 70}>
                <Link
                  href={location.path}
                  className="group block h-full rounded-2xl border border-white/8 bg-[#0f1c30]/80 p-7 shadow-xl shadow-black/20 transition-all duration-300 hover:border-amber-500/25"
                >
                  <div className="mb-5 h-px w-12 bg-gradient-to-r from-amber-500 to-amber-500/0 transition-all duration-300 group-hover:w-16" />
                  <h3 className="text-lg font-semibold text-white group-hover:text-amber-200/90 transition-colors">
                    {location.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {location.description}
                  </p>
                  <span className="mt-5 inline-block text-sm font-medium text-amber-200/80 group-hover:text-amber-200 transition-colors">
                    Learn more →
                  </span>
                </Link>
              </RevealOnScroll>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
