import type { InsightCallout } from "@/lib/insights/ai-differentiator-content";

export function InsightCallout({ callout }: { callout: InsightCallout }) {
  const isExecutive = callout.variant === "executive";

  return (
    <aside
      className={`my-10 rounded-xl border px-6 py-5 ${
        isExecutive
          ? "border-amber-500/25 bg-amber-500/8"
          : "border-sky-500/20 bg-sky-500/5"
      }`}
    >
      <p className="text-[10px] font-semibold tracking-[0.2em] text-slate-500 uppercase">
        {isExecutive ? "Executive Note" : "Insight"}
      </p>
      <h3 className="mt-2 text-base font-semibold text-white">{callout.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">{callout.body}</p>
    </aside>
  );
}
