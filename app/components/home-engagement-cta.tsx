import Link from "next/link";
import { CalendlyLink } from "@/app/components/calendly-link";
import { CONTACT_EMAIL } from "@/lib/site-config";

type HomeEngagementCtaProps = {
  discoveryPath: string;
};

export function HomeEngagementCta({ discoveryPath }: HomeEngagementCtaProps) {
  return (
    <section
      id="contact"
      className="relative border-t border-white/5 bg-[#060d18] px-6 py-14 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-[#152a45]/70 via-[#0f1c30]/85 to-[#0a1424] px-8 py-12 text-center sm:px-12 sm:py-14">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.1),transparent_55%)]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-2xl">
            <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
              Engage
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Let&apos;s Identify Where Impact Is Possible
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              Start with a Discovery Intake so we can understand your goals, challenges, and
              priorities before recommending the right engagement model.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={discoveryPath}
                className="inline-flex rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold text-[#060d18] shadow-md shadow-amber-500/15 transition-all hover:bg-amber-400 hover:shadow-[0_10px_28px_-8px_rgba(245,158,11,0.4)]"
              >
                Start Discovery Intake
              </Link>
              <CalendlyLink className="inline-flex rounded-full border border-amber-500/35 bg-amber-500/10 px-8 py-3 text-sm font-semibold text-amber-200 transition-colors hover:border-amber-500/50 hover:bg-amber-500/15">
                Schedule Discovery Call
              </CalendlyLink>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex rounded-full border border-white/12 px-8 py-3 text-sm font-medium text-slate-300 transition-colors hover:border-amber-500/30 hover:text-white"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
