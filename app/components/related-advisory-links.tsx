import Link from "next/link";
import type { SeoRelatedLink } from "@/lib/seo-landing-types";

export function RelatedAdvisoryLinks({
  intro,
  links,
}: {
  intro: string;
  links: readonly SeoRelatedLink[];
}) {
  return (
    <section className="border-t border-white/10 pt-12">
      <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
        Advisory services
      </p>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        Relevant Advisory Engagements
      </h2>
      <p className="mt-4 max-w-3xl text-slate-400 leading-relaxed">{intro}</p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              href={link.path}
              className="group block h-full rounded-xl border border-white/8 bg-[#0f1c30]/80 p-5 transition-colors hover:border-amber-500/25"
            >
              <h3 className="text-base font-semibold text-white group-hover:text-amber-200/90 transition-colors">
                {link.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {link.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
