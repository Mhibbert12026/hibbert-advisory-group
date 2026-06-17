import Link from "next/link";
import { INSIGHT_RECOMMENDED_SERVICES } from "@/lib/insights/recommended-services";

export function InsightRecommendedServices() {
  return (
    <section className="border-t border-white/10 pt-16" aria-labelledby="recommended-services-heading">
      <h2
        id="recommended-services-heading"
        className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
      >
        Recommended Services
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">
        Move from insight to action. Hibbert Advisory Group helps leadership teams
        translate strategic questions into prioritized initiatives with measurable outcomes.
      </p>
      <ul className="mt-10 grid gap-5 sm:grid-cols-2">
        {INSIGHT_RECOMMENDED_SERVICES.map((service) => (
          <li key={service.path}>
            <Link
              href={service.path}
              className="group block h-full rounded-2xl border border-white/8 bg-[#0f1c30]/50 p-6 transition-colors hover:border-amber-500/25"
            >
              <h3 className="text-base font-semibold text-white group-hover:text-amber-200/90 transition-colors">
                {service.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {service.description}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-amber-200/70">
                Learn more →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
