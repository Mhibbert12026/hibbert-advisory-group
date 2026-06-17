import type { ReportCallout } from "@/lib/global-ai-opportunity-report";

const styles: Record<ReportCallout["variant"], string> = {
  insight: "border-sky-500/25 bg-sky-500/5",
  warning: "border-red-500/25 bg-red-500/5",
  recommendation: "border-emerald-500/25 bg-emerald-500/5",
  executive: "border-amber-500/30 bg-amber-500/8",
};

const labels: Record<ReportCallout["variant"], string> = {
  insight: "Insight",
  warning: "Caution",
  recommendation: "Recommendation",
  executive: "Executive Note",
};

export function ReportCalloutBox({ callout }: { callout: ReportCallout }) {
  return (
    <aside
      className={`my-8 rounded-xl border px-6 py-5 ${styles[callout.variant]}`}
    >
      <p className="text-[10px] font-semibold tracking-[0.2em] text-slate-500 uppercase">
        {labels[callout.variant]}
      </p>
      <h4 className="mt-2 text-base font-semibold text-white">{callout.title}</h4>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">{callout.body}</p>
    </aside>
  );
}
