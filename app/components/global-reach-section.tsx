import Link from "next/link";
import { RevealOnScroll } from "@/app/components/reveal-on-scroll";

const highlights = [
  { title: "Executive AI Advisory", path: "/global-ai-advisory" },
  { title: "Product Leadership", path: "/international-product-strategy" },
  { title: "Digital Transformation", path: "/global-digital-transformation" },
  { title: "Global Consulting Engagements", path: "/global-capabilities" },
  { title: "Remote Delivery Models", path: "/global-capabilities" },
] as const;

export function GlobalReachSection() {
  return (
    <section
      id="global"
      className="border-t border-white/5 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
              Global Reach. Practical Results.
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Advisory for organizations worldwide
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-400">
              Hibbert Advisory Group supports organizations across North America,
              Europe, APAC, and international markets through AI strategy, product
              leadership, digital transformation, and business advisory services.
            </p>
          </div>
        </RevealOnScroll>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <li key={item.title}>
              <RevealOnScroll delayMs={index * 60}>
                <Link
                  href={item.path}
                  className="group block rounded-xl border border-white/8 bg-[#0f1c30]/80 px-5 py-5 transition-colors hover:border-amber-500/25"
                >
                  <h3 className="text-base font-semibold text-white group-hover:text-amber-200/90 transition-colors">
                    {item.title}
                  </h3>
                </Link>
              </RevealOnScroll>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/global-capabilities"
            className="rounded-full border border-amber-500/40 bg-amber-500/10 px-6 py-2.5 text-sm font-semibold text-amber-200 hover:bg-amber-500/20 transition-colors"
          >
            Explore Global Capabilities
          </Link>
          <Link
            href="/ai-for-growing-businesses-worldwide"
            className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-2.5 text-sm text-slate-300 hover:border-amber-500/30 hover:text-amber-200/90 transition-colors"
          >
            AI for Growing Businesses Worldwide
          </Link>
        </div>
      </div>
    </section>
  );
}
