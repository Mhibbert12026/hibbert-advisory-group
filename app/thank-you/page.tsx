import Link from "next/link";
import { CalendlyLink } from "@/app/components/calendly-link";
import { PageShell } from "@/app/components/page-shell";
import { createPageMetadata } from "@/lib/seo";
import { LINKEDIN_PROFILE_URL } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Thank You",
  description:
    "Your discovery intake has been received. Hibbert Advisory Group will review your submission and follow up regarding next steps.",
  path: "/thank-you",
});

export default function ThankYouPage() {
  return (
    <PageShell>
      <section className="relative flex min-h-[70vh] items-center px-6 py-20 lg:px-8 lg:py-28">
        <div
          className="pointer-events-none absolute top-1/4 right-0 h-96 w-96 rounded-full bg-[#1e3a5f]/30 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-1/4 left-0 h-72 w-72 rounded-full bg-amber-600/10 blur-3xl"
          aria-hidden
        />

        <div className="mx-auto w-full max-w-2xl">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#152a45] via-[#0f1c30] to-[#0a1424] px-8 py-14 text-center shadow-2xl shadow-black/30 sm:px-12 sm:py-16">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.1),transparent_55%)]"
              aria-hidden
            />

            <div className="relative">
              <div className="mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10">
                <span className="h-2 w-2 rounded-full bg-amber-400" aria-hidden />
              </div>

              <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
                Hibbert Advisory Group
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Thank You
              </h1>
              <p className="mt-4 text-lg font-medium text-slate-200 sm:text-xl">
                Your submission has been received.
              </p>

              <div className="mx-auto mt-8 max-w-lg space-y-4 text-left text-base leading-relaxed text-slate-400 sm:text-center">
                <p>
                  We will review your responses and follow up within one business day.
                </p>
                <p>
                  If there is a strong fit, we&apos;ll invite you to schedule a discovery
                  conversation.
                </p>
              </div>

              <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
                <CalendlyLink className="inline-flex w-full items-center justify-center rounded-full bg-amber-500 px-10 py-3.5 text-sm font-semibold text-[#060d18] shadow-lg shadow-amber-500/20 transition-colors hover:bg-amber-400 sm:w-auto sm:min-w-[200px]">
                  Schedule Discovery Call
                </CalendlyLink>
                <Link
                  href="/"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/15 px-10 py-3.5 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/5 sm:w-auto sm:min-w-[180px]"
                >
                  Return Home
                </Link>
                <a
                  href={LINKEDIN_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/15 px-10 py-3.5 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/5 sm:w-auto sm:min-w-[180px]"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
