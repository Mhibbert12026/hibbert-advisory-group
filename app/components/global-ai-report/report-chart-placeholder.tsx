import type { ReportChart } from "@/lib/global-ai-opportunity-report";

const chartIcons: Record<ReportChart["chartType"], string> = {
  bar: "▮▮▮▮▮",
  line: "╱╲╱╲",
  donut: "◯",
  matrix: "⊞",
  heatmap: "▦",
};

export function ReportChartPlaceholder({ chart }: { chart: ReportChart }) {
  return (
    <figure className="my-10 overflow-hidden rounded-2xl border border-white/10 bg-[#0a1424]">
      <div className="border-b border-white/8 bg-[#0f1c30]/60 px-6 py-4">
        <figcaption className="text-sm font-semibold text-white">
          {chart.title}
        </figcaption>
        <p className="mt-1 text-xs text-slate-500">{chart.description}</p>
      </div>
      <div className="flex min-h-[220px] flex-col items-center justify-center px-6 py-12">
        <div
          className="flex h-24 w-full max-w-md items-end justify-center gap-2 opacity-40"
          aria-hidden
        >
          {chart.chartType === "bar" &&
            [65, 45, 80, 55, 70, 40].map((h, i) => (
              <div
                key={i}
                className="w-8 rounded-t bg-gradient-to-t from-amber-600/60 to-amber-400/40"
                style={{ height: `${h}%` }}
              />
            ))}
          {chart.chartType === "line" && (
            <svg viewBox="0 0 200 80" className="h-full w-full max-w-sm text-amber-400/50">
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                points="0,60 40,45 80,55 120,25 160,35 200,15"
              />
            </svg>
          )}
          {chart.chartType === "donut" && (
            <div className="relative h-28 w-28 rounded-full border-[12px] border-amber-500/30 border-t-amber-400/70" />
          )}
          {(chart.chartType === "matrix" || chart.chartType === "heatmap") && (
            <div className="grid grid-cols-4 gap-1.5">
              {Array.from({ length: 16 }).map((_, i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded bg-amber-500/20"
                  style={{ opacity: 0.3 + (i % 4) * 0.15 }}
                />
              ))}
            </div>
          )}
        </div>
        <p className="mt-6 text-center text-xs tracking-widest text-amber-400/40 uppercase">
          {chart.chartType} chart · {chartIcons[chart.chartType]}
        </p>
        {chart.dataHint && (
          <p className="mt-4 max-w-lg text-center text-xs leading-relaxed text-slate-600">
            Data: {chart.dataHint}
          </p>
        )}
      </div>
      <div className="border-t border-white/5 px-6 py-2 text-center text-[10px] tracking-wider text-slate-600 uppercase">
        Chart placeholder — replace with designed graphic for PDF export
      </div>
    </figure>
  );
}
