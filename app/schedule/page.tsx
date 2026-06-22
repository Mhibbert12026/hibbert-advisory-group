import Link from "next/link";
import { Suspense } from "react";
import { PageShell } from "@/app/components/page-shell";
import { SchedulingJourney } from "@/app/components/project-discovery/scheduling-journey";
import { createPageMetadata } from "@/lib/seo";
import { SCHEDULE_DISCOVERY_PATH } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Schedule a Discovery Call",
  description:
    "Schedule an advisory call immediately or start with guided project discovery before booking time with Hibbert Advisory Group.",
  path: SCHEDULE_DISCOVERY_PATH,
});

export default function SchedulePage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden border-b border-white/5 px-6 py-14 lg:px-8 lg:py-16">
        <div
          className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-[#1e3a5f]/25 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-amber-600/10 blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-amber-200/90"
          >
            <span aria-hidden>←</span>
            Return to homepage
          </Link>

          <Suspense
            fallback={
              <div className="mt-10 rounded-2xl border border-white/10 bg-[#0f1c30]/50 p-8 text-sm text-slate-400">
                Loading scheduling options...
              </div>
            }
          >
            <div className="mt-8">
              <SchedulingJourney />
            </div>
          </Suspense>
        </div>
      </section>
    </PageShell>
  );
}
