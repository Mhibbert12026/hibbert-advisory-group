import Link from "next/link";

type SchedulingConfirmationProps = {
  description?: string;
};

const DEFAULT_DESCRIPTION =
  "Your advisory call is confirmed. We look forward to the conversation and will come prepared to discuss your priorities.";

export function SchedulingConfirmation({
  description = DEFAULT_DESCRIPTION,
}: SchedulingConfirmationProps) {
  return (
    <div className="rounded-2xl border border-amber-500/25 bg-gradient-to-br from-[#152a45]/70 via-[#0f1c30]/85 to-[#0a1424] px-8 py-12 text-center shadow-2xl shadow-black/30 sm:px-12">
      <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
        Confirmation
      </p>
      <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
        You&apos;re scheduled
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
        {description}
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold text-[#060d18] transition-colors hover:bg-amber-400"
        >
          Return Home
        </Link>
        <Link
          href="/insights"
          className="inline-flex rounded-full border border-white/12 px-8 py-3 text-sm font-medium text-slate-300 transition-colors hover:border-amber-500/30 hover:text-white"
        >
          Explore Insights
        </Link>
      </div>
    </div>
  );
}
