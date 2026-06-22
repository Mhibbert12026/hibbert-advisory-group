"use client";

type SchedulingChoiceProps = {
  onChooseScheduleNow: () => void;
  onChooseDiscovery: () => void;
};

export function SchedulingChoice({
  onChooseScheduleNow,
  onChooseDiscovery,
}: SchedulingChoiceProps) {
  return (
    <div className="space-y-8">
      <div className="text-center sm:text-left">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          How Would You Like to Get Started?
        </h2>
        <p className="mt-3 text-base leading-relaxed text-slate-400">
          Choose the path that best fits your needs.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <article className="flex h-full flex-col rounded-2xl border border-white/8 bg-[#0f1c30]/50 p-6 shadow-xl shadow-black/20 transition-colors hover:border-amber-500/22 sm:p-8">
          <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
            Option 1
          </p>
          <h3 className="mt-3 text-xl font-semibold text-white">Schedule an Advisory Call</h3>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">
            Already know what you need? Let&apos;s discuss your goals, challenges, and opportunities
            in a focused advisory conversation.
          </p>
          <button
            type="button"
            onClick={onChooseScheduleNow}
            className="mt-8 inline-flex w-fit rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold text-[#060d18] transition-colors hover:bg-amber-400"
          >
            Schedule Advisory Call
          </button>
        </article>

        <article className="flex h-full flex-col rounded-2xl border border-amber-500/25 bg-gradient-to-br from-[#152a45]/50 via-[#0f1c30]/80 to-[#0a1424] p-6 shadow-xl shadow-black/20 transition-colors hover:border-amber-500/35 sm:p-8">
          <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
            Option 2
          </p>
          <h3 className="mt-3 text-xl font-semibold text-white">Project Discovery</h3>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">
            Tell us about your goals, challenges, and project requirements before scheduling.
          </p>
          <button
            type="button"
            onClick={onChooseDiscovery}
            className="mt-8 inline-flex w-fit rounded-full border border-amber-500/35 bg-amber-500/10 px-8 py-3 text-sm font-semibold text-amber-200 transition-colors hover:border-amber-500/50 hover:bg-amber-500/15"
          >
            Start Discovery
          </button>
        </article>
      </div>
    </div>
  );
}
