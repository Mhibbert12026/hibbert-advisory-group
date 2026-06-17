import type { ReportStat } from "@/lib/global-ai-opportunity-report";

export function ReportStatGrid({
  title,
  items,
}: {
  title?: string;
  items: readonly ReportStat[];
}) {
  return (
    <div className="my-10">
      {title && (
        <p className="mb-4 text-xs font-medium tracking-[0.15em] text-amber-400/80 uppercase">
          {title}
        </p>
      )}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-amber-500/15 bg-gradient-to-br from-amber-500/8 to-transparent p-5"
          >
            <p className="text-3xl font-semibold tracking-tight text-amber-200">
              {stat.value}
            </p>
            <p className="mt-2 text-sm leading-snug text-slate-300">{stat.label}</p>
            {stat.source && (
              <p className="mt-2 text-[10px] text-slate-600">{stat.source}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
