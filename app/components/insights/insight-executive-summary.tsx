import { EXECUTIVE_SUMMARY } from "@/lib/insights/ai-differentiator-content";

export function InsightExecutiveSummary() {
  return (
    <aside
      className="relative overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-br from-[#152a45] via-[#0f1c30] to-[#0a1424] px-8 py-10 shadow-xl shadow-black/20"
      aria-label="Executive summary"
    >
      <div
        className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-amber-500/10 blur-3xl"
        aria-hidden
      />
      <p className="text-xs font-semibold tracking-[0.25em] text-amber-400/90 uppercase">
        Executive Summary
      </p>
      <blockquote className="mt-5">
        <p className="text-xl font-medium leading-relaxed text-white sm:text-2xl sm:leading-relaxed">
          &ldquo;{EXECUTIVE_SUMMARY}&rdquo;
        </p>
      </blockquote>
    </aside>
  );
}
