import {
  getBudgetRangeLabel,
  getProjectTypeLabel,
  getTimelineLabel,
  type ProjectDiscoverySubmission,
} from "@/lib/project-discovery";

export function ProjectSummaryCard({ submission }: { submission: ProjectDiscoverySubmission }) {
  return (
    <div className="rounded-2xl border border-amber-500/25 bg-gradient-to-br from-[#152a45]/70 via-[#0f1c30]/85 to-[#0a1424] p-6 sm:p-8">
      <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
        Project Summary
      </p>
      <p className="mt-4 text-lg font-semibold leading-relaxed text-white sm:text-xl">
        {submission.summaryText}
      </p>
      <dl className="mt-6 grid gap-4 border-t border-white/8 pt-6 sm:grid-cols-2">
        <div>
          <dt className="text-[11px] font-semibold tracking-[0.14em] text-slate-500 uppercase">
            Company
          </dt>
          <dd className="mt-1 text-sm text-slate-300">{submission.company}</dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold tracking-[0.14em] text-slate-500 uppercase">
            Project Type
          </dt>
          <dd className="mt-1 text-sm text-slate-300">
            {getProjectTypeLabel(submission.projectType)}
          </dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold tracking-[0.14em] text-slate-500 uppercase">
            Budget Range
          </dt>
          <dd className="mt-1 text-sm text-slate-300">
            {getBudgetRangeLabel(submission.budgetRange)}
          </dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold tracking-[0.14em] text-slate-500 uppercase">
            Timeline
          </dt>
          <dd className="mt-1 text-sm text-slate-300">
            {getTimelineLabel(submission.timeline)}
          </dd>
        </div>
      </dl>
      <div className="mt-6 border-t border-white/8 pt-6">
        <p className="text-[11px] font-semibold tracking-[0.14em] text-slate-500 uppercase">
          Recommended Focus
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {submission.recommendedServices.map((service) => (
            <li
              key={service}
              className="rounded-full border border-amber-500/25 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-200/90"
            >
              {service}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
