import type { ReportBlock } from "@/lib/global-ai-opportunity-report";
import { ReportAuthorProfile } from "./report-author-profile";
import { ReportCalloutBox } from "./report-callout";
import { ReportChartPlaceholder } from "./report-chart-placeholder";
import { ReportFigure } from "./report-figure";
import { ReportStatGrid } from "./report-stat-grid";

export function ReportBlockRenderer({ block }: { block: ReportBlock }) {
  switch (block.type) {
    case "prose":
      return (
        <div className="my-6 space-y-4">
          {block.paragraphs.map((p) => (
            <p key={p.slice(0, 48)} className="text-base leading-[1.8] text-slate-300">
              {p}
            </p>
          ))}
        </div>
      );

    case "heading": {
      const Tag = block.level === 2 ? "h2" : block.level === 3 ? "h3" : "h4";
      const sizes =
        block.level === 2
          ? "mt-12 mb-4 text-2xl font-semibold text-white"
          : block.level === 3
            ? "mt-10 mb-3 text-xl font-semibold text-white"
            : "mt-8 mb-2 text-lg font-semibold text-white";
      return <Tag className={sizes}>{block.text}</Tag>;
    }

    case "bullets":
      return (
        <div className="my-6">
          {block.title && (
            <p className="mb-3 text-sm font-medium text-slate-400">{block.title}</p>
          )}
          <ul className="space-y-2.5">
            {block.items.map((item) => (
              <li
                key={item.slice(0, 40)}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-300"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      );

    case "numbered":
      return (
        <div className="my-6">
          {block.title && (
            <p className="mb-3 text-sm font-medium text-slate-400">{block.title}</p>
          )}
          <ol className="space-y-3">
            {block.items.map((item, i) => (
              <li
                key={item.slice(0, 40)}
                className="flex items-start gap-3 text-sm leading-relaxed text-slate-300"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10 text-xs font-semibold text-amber-200">
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      );

    case "stats":
      return <ReportStatGrid title={block.title} items={block.items} />;

    case "chart":
      return <ReportChartPlaceholder chart={block.chart} />;

    case "callout":
      return <ReportCalloutBox callout={block.callout} />;

    case "two-column":
      return (
        <div className="my-8 grid gap-6 sm:grid-cols-2">
          {[block.left, block.right].map((col) => (
            <div
              key={col.title}
              className="rounded-xl border border-white/8 bg-[#0f1c30]/60 p-5"
            >
              <h4 className="text-sm font-semibold text-white">{col.title}</h4>
              <ul className="mt-4 space-y-2">
                {col.items.map((item) => (
                  <li
                    key={item.slice(0, 40)}
                    className="flex items-start gap-2 text-sm text-slate-400"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );

    case "value-category":
      return (
        <article className="my-10 rounded-2xl border border-white/10 bg-[#0f1c30]/50 p-7">
          <h3 className="text-xl font-semibold text-amber-200">{block.data.category}</h3>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <div>
              <p className="text-xs font-medium tracking-wider text-slate-500 uppercase">
                Use cases
              </p>
              <ul className="mt-3 space-y-2">
                {block.data.useCases.map((item) => (
                  <li key={item.slice(0, 40)} className="text-sm text-slate-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium tracking-wider text-slate-500 uppercase">
                Expected benefits
              </p>
              <ul className="mt-3 space-y-2">
                {block.data.expectedBenefits.map((item) => (
                  <li key={item.slice(0, 40)} className="text-sm text-slate-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium tracking-wider text-red-400/70 uppercase">
                Common mistakes
              </p>
              <ul className="mt-3 space-y-2">
                {block.data.commonMistakes.map((item) => (
                  <li key={item.slice(0, 40)} className="text-sm text-slate-400">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      );

    case "industry":
      return (
        <article className="my-10 break-inside-avoid rounded-2xl border border-white/10 p-7">
          <h3 className="text-xl font-semibold text-white">{block.data.industry}</h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {(
              [
                ["Challenges", block.data.challenges],
                ["Opportunities", block.data.opportunities],
                ["AI use cases", block.data.useCases],
                ["Recommendations", block.data.recommendations],
              ] as const
            ).map(([label, items]) => (
              <div key={label}>
                <p className="text-xs font-medium tracking-wider text-amber-400/70 uppercase">
                  {label}
                </p>
                <ul className="mt-2 space-y-1.5">
                  {items.map((item) => (
                    <li key={item.slice(0, 40)} className="text-sm text-slate-400">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>
      );

    case "region":
      return (
        <article className="my-8 rounded-xl border border-white/8 bg-[#0f1c30]/40 p-6">
          <h3 className="text-lg font-semibold text-white">{block.data.region}</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {(
              [
                ["Adoption patterns", block.data.adoptionPatterns],
                ["Opportunities", block.data.opportunities],
                ["Challenges", block.data.challenges],
              ] as const
            ).map(([label, items]) => (
              <div key={label}>
                <p className="text-[10px] font-medium tracking-wider text-slate-500 uppercase">
                  {label}
                </p>
                <ul className="mt-2 space-y-1">
                  {items.map((item) => (
                    <li key={item.slice(0, 40)} className="text-xs leading-relaxed text-slate-400">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>
      );

    case "roadmap":
      return (
        <div className="my-10 space-y-6">
          {block.phases.map((phase) => (
            <article
              key={phase.horizon}
              className="rounded-2xl border border-amber-500/15 bg-gradient-to-r from-amber-500/5 to-transparent p-6"
            >
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-200">
                  {phase.horizon}
                </span>
                <h3 className="text-lg font-semibold text-white">{phase.title}</h3>
              </div>
              <div className="mt-5 grid gap-5 lg:grid-cols-3">
                {(
                  [
                    ["Objectives", phase.objectives],
                    ["Deliverables", phase.deliverables],
                    ["Success metrics", phase.successMetrics],
                  ] as const
                ).map(([label, items]) => (
                  <div key={label}>
                    <p className="text-[10px] font-medium tracking-wider text-slate-500 uppercase">
                      {label}
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {items.map((item) => (
                        <li key={item.slice(0, 40)} className="text-sm text-slate-400">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      );

    case "readiness-framework":
      return (
        <div className="my-10 space-y-8">
          {block.dimensions.map((dim) => (
            <article
              key={dim.name}
              className="rounded-2xl border border-white/10 p-6"
            >
              <h3 className="text-lg font-semibold text-amber-200">{dim.name}</h3>
              <p className="mt-2 text-sm text-slate-400">{dim.description}</p>
              <div className="mt-5 grid gap-5 lg:grid-cols-2">
                <div>
                  <p className="text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Assessment criteria
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {dim.assessmentCriteria.map((item) => (
                      <li key={item.slice(0, 40)} className="text-sm text-slate-300">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Scoring guide
                  </p>
                  <ul className="mt-2 space-y-2">
                    {dim.scoreGuide.map((guide) => (
                      <li key={guide.range} className="text-sm">
                        <span className="font-semibold text-amber-200/80">
                          {guide.range}:
                        </span>{" "}
                        <span className="text-slate-400">{guide.meaning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
          <div className="rounded-xl border border-white/8 bg-[#0f1c30]/60 p-6">
            <p className="text-xs font-medium tracking-wider text-slate-500 uppercase">
              Scoring methodology
            </p>
            <ol className="mt-4 space-y-3">
              {block.methodology.map((step, i) => (
                <li key={step.slice(0, 40)} className="flex gap-3 text-sm text-slate-300">
                  <span className="font-semibold text-amber-200/70">{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      );

    case "figure":
      return <ReportFigure figure={block.figure} />;

    case "author-profile":
      return <ReportAuthorProfile profile={block.profile} />;

    default:
      return null;
  }
}
