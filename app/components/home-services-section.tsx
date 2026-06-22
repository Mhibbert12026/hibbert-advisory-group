import Link from "next/link";
import { WHAT_HAPPENS_NEXT_STEPS } from "@/lib/homepage-conversion";
import {
  HOMEPAGE_ENGAGEMENT_TIMELINES,
  HOMEPAGE_SERVICE_LINKS,
  HOMEPAGE_SERVICES,
  type HomepageService,
} from "@/lib/homepage-services";

function ServicePricingCard({ service }: { service: HomepageService }) {
  const isFlagship = service.mostComprehensive === true;

  return (
    <article
      id={service.id}
      className={
        isFlagship
          ? "group relative flex min-h-[520px] flex-col overflow-hidden rounded-2xl border border-amber-500/50 bg-gradient-to-b from-[#132238] to-[#0f1c30] p-8 py-10 shadow-2xl shadow-black/30 ring-1 ring-amber-500/20 transition-colors hover:border-amber-500/60 lg:min-h-[560px] lg:-translate-y-1 lg:shadow-[0_12px_48px_-16px_rgba(0,0,0,0.5),0_0_48px_-12px_rgba(245,158,11,0.18)]"
          : "group flex min-h-[520px] flex-col rounded-2xl border border-white/8 bg-[#0f1c30] p-8 shadow-xl shadow-black/20 transition-colors hover:border-amber-500/25 lg:min-h-[560px]"
      }
    >
      {isFlagship ? (
        <>
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(245,158,11,0.12),transparent_55%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-b from-amber-500/15 via-transparent to-transparent opacity-70 blur-md"
            aria-hidden
          />
        </>
      ) : null}

      <div className="relative flex flex-1 flex-col">
        <div
          className={`h-px bg-gradient-to-r from-amber-500 to-amber-500/0 ${isFlagship ? "mb-7 w-16" : "mb-6 w-12"}`}
          aria-hidden
        />

        {isFlagship ? (
          <span className="mb-3 inline-flex w-fit items-center rounded-full border border-amber-500/40 bg-amber-500/15 px-3 py-1 text-xs font-semibold tracking-wide text-amber-200 uppercase">
            Most Comprehensive
          </span>
        ) : null}

        <h3 className="text-xl font-semibold text-white">{service.title}</h3>
        <p className="mt-4 inline-block w-fit rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-sm font-semibold tracking-wide text-amber-200">
          {service.startingPrice}
        </p>
        <p className="mt-3 text-sm font-medium text-amber-200/80">{service.tagline}</p>
        <p className="mt-4 text-sm leading-relaxed text-slate-400">{service.description}</p>

        {service.valueStatement ? (
          <p className="mt-4 border-l-2 border-amber-500/30 pl-4 text-sm leading-relaxed text-slate-300">
            {service.valueStatement}
          </p>
        ) : null}

        {service.bestFor ? (
          <div className="mt-5 rounded-lg border border-white/8 bg-white/[0.03] px-4 py-4">
            <p className="text-xs font-medium tracking-wider text-amber-400/90 uppercase">
              Best For
            </p>
            <ul className="mt-3 space-y-2">
              {service.bestFor.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-500"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mt-6 flex-1 border-t border-white/5 pt-6">
          <p className="mb-3 text-xs font-medium tracking-wider text-slate-500 uppercase">
            {service.outcomesLabel}
          </p>
          <ul className="space-y-2">
            {service.outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-2 text-sm text-slate-300">
                <span
                  className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-400"
                  aria-hidden
                />
                {outcome}
              </li>
            ))}
          </ul>
        </div>

        <Link
          href={service.detailPath}
          className="mt-6 inline-flex text-sm font-semibold text-amber-200/90 transition-colors hover:text-amber-200"
        >
          Learn more →
        </Link>
      </div>
    </article>
  );
}

export function HomeServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="home-services-heading"
      className="border-t border-white/5 bg-[#060d18] px-6 py-14 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <header className="max-w-2xl">
          <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
            Services
          </p>
          <h2
            id="home-services-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Advisory for leadership teams
          </h2>
          <p className="mt-4 leading-relaxed text-slate-400">
            Three defined engagements, each intended to produce clarity, a prioritized plan, and
            leadership support your team can implement.
          </p>
        </header>

        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:items-stretch">
          {HOMEPAGE_SERVICES.map((service) => (
            <ServicePricingCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {HOMEPAGE_SERVICE_LINKS.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 transition-colors hover:border-amber-500/30 hover:text-amber-200/90"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mt-14 border-t border-white/10 pt-12">
          <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
            Typical Engagement Timelines
          </h3>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {HOMEPAGE_ENGAGEMENT_TIMELINES.map((item) => (
              <li
                key={item.service}
                className="rounded-xl border border-white/8 bg-[#0f1c30]/80 px-5 py-5"
              >
                <p className="text-sm font-medium leading-snug text-slate-200">{item.service}</p>
                <p className="mt-2 text-sm font-semibold text-amber-200/90">{item.duration}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 border-t border-white/10 pt-12">
          <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
            What Happens Next
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            A defined path from initial conversation to actionable strategy for leadership teams
            that need progress without unnecessary overhead.
          </p>
          <ol className="mt-10 grid gap-6 lg:grid-cols-3">
            {WHAT_HAPPENS_NEXT_STEPS.map((item, index) => (
              <li
                key={item.step}
                className="relative rounded-2xl border border-white/8 bg-[#0f1c30]/80 p-6"
              >
                {index < WHAT_HAPPENS_NEXT_STEPS.length - 1 ? (
                  <span
                    className="pointer-events-none absolute top-1/2 -right-3 z-10 hidden h-px w-6 bg-amber-500/30 lg:block"
                    aria-hidden
                  />
                ) : null}
                <span className="text-3xl font-light text-amber-500/40">{item.step}</span>
                <h4 className="mt-4 text-lg font-semibold text-white">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
