import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You",
  description:
    "Your discovery intake has been received. Hibbert Advisory Group will review your submission and follow up regarding next steps.",
};

// Replace with your final LinkedIn profile URL before launch.
const LINKEDIN_PROFILE_URL = "https://www.linkedin.com/in/placeholder";

export default function ThankYouPage() {
  return (
    <div className="flex min-h-full flex-col bg-[#060d18] text-slate-200 font-sans">
      {/* Subtle grid texture */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden
      />

      <header className="relative z-10 border-b border-white/5 bg-[#060d18]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="group flex flex-col">
            <span className="text-sm font-semibold tracking-[0.2em] text-amber-400/90 uppercase">
              Hibbert Advisory Group
            </span>
            <span className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
              Product Strategy • Revenue Growth • AI Transformation
            </span>
          </Link>
        </div>
      </header>

      <main className="relative z-10 flex flex-1 items-center px-6 py-20 lg:px-8 lg:py-28">
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
                <span
                  className="h-2 w-2 rounded-full bg-amber-400"
                  aria-hidden
                />
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
                  Our team will review your responses and follow up within 1
                  business day.
                </p>
                <p>
                  If there is a strong fit, we&apos;ll invite you to schedule a
                  Discovery Call.
                </p>
              </div>

              <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/"
                  className="inline-flex w-full items-center justify-center rounded-full bg-amber-500 px-10 py-3.5 text-sm font-semibold text-[#060d18] shadow-lg shadow-amber-500/20 hover:bg-amber-400 transition-colors sm:w-auto sm:min-w-[180px]"
                >
                  Return Home
                </Link>
                <a
                  href={LINKEDIN_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/15 px-10 py-3.5 text-sm font-medium text-white hover:border-white/30 hover:bg-white/5 transition-colors sm:w-auto sm:min-w-[180px]"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="relative z-10 border-t border-white/5 px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold tracking-[0.15em] text-amber-400/90 uppercase">
            Hibbert Advisory Group
          </p>
          <p className="mt-3 text-sm text-slate-400">
            Product Strategy • Revenue Growth • AI Transformation
          </p>
          <p className="mt-6 text-xs text-slate-500">
            © 2026 Hibbert Advisory Group
          </p>
        </div>
      </footer>
    </div>
  );
}

