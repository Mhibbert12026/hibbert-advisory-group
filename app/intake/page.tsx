import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Discovery Intake",
  description:
    "Complete the Hibbert Advisory Group discovery intake to share your goals, challenges, and priorities.",
};

const TALLY_INTAKE_FORM_URL = "https://tally.so/r/LZkXrG";

export default function IntakePage() {
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
          <Link href="/" className="block shrink-0">
            <Image
              src="/hibbert-logo.png"
              alt="Hibbert Advisory Group"
              width={270}
              height={81}
              className="h-auto w-[210px] sm:w-[270px]"
              priority
            />
          </Link>
        </div>
      </header>

      <main className="relative z-10 flex-1 px-6 py-12 lg:px-8 lg:py-16">
        <div
          className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-[#1e3a5f]/25 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-amber-600/10 blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto w-full max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-amber-200/90"
          >
            <span aria-hidden>←</span>
            Return to homepage
          </Link>

          <div className="mt-8 text-center">
            <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
              Hibbert Advisory Group
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Discovery Intake
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
              Complete this brief intake so we can better understand your goals,
              challenges, and priorities before scheduling a conversation.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#0f1c30]/50 shadow-2xl shadow-black/30">
            <iframe
              src={TALLY_INTAKE_FORM_URL}
              title="Hibbert Advisory Group Discovery Intake"
              className="w-full min-h-[1200px] border-0 bg-transparent"
              loading="lazy"
            />
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
