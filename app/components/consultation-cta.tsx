import Link from "next/link";
import { CalendlyLink } from "@/app/components/calendly-link";
import { DISCOVERY_INTAKE_PATH } from "@/lib/site-config";

export function ConsultationCTA() {
  return (
    <section className="border-t border-white/5 px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-amber-500/25 bg-gradient-to-br from-[#152a45] via-[#0f1c30] to-[#0a1424] px-8 py-14 text-center shadow-2xl shadow-black/30 sm:px-12 sm:py-16">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.14),transparent_55%)]"
            aria-hidden
          />
          <div className="relative">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Ready to Explore What&apos;s Possible?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Let&apos;s discuss how AI, product strategy, and digital transformation
              can create measurable value for your organization.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={DISCOVERY_INTAKE_PATH}
                className="inline-flex items-center justify-center rounded-full bg-amber-500 px-10 py-3.5 text-sm font-semibold text-[#060d18] shadow-lg shadow-amber-500/20 transition-colors hover:bg-amber-400"
              >
                Start Discovery Intake
              </Link>
              <CalendlyLink className="inline-flex items-center justify-center rounded-full border border-amber-500/35 bg-amber-500/10 px-10 py-3.5 text-sm font-semibold text-amber-200 transition-colors hover:border-amber-500/50 hover:bg-amber-500/15">
                Schedule Discovery Call
              </CalendlyLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
