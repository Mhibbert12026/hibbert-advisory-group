import Link from "next/link";
import { RevealOnScroll } from "@/app/components/reveal-on-scroll";
import type { EngagementCaseStudy } from "@/lib/selected-experience";

function ExperienceCard({ study }: { study: EngagementCaseStudy }) {
  return (
    <article className="h-full rounded-2xl border border-white/8 bg-[#0f1c30]/80 p-7 transition-colors hover:border-amber-500/20">
      <p className="text-xs font-semibold tracking-[0.2em] text-amber-400/90 uppercase">
        {study.organization}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-white">{study.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">
        {study.impactStatement}
      </p>
      <dl className="mt-6 space-y-4 text-sm">
        <div>
          <dt className="text-[10px] font-medium tracking-wider text-slate-500 uppercase">
            Challenge
          </dt>
          <dd className="mt-1 text-slate-400">{study.businessChallenge}</dd>
        </div>
        <div>
          <dt className="text-[10px] font-medium tracking-wider text-slate-500 uppercase">
            Strategic approach
          </dt>
          <dd className="mt-1 text-slate-400">{study.strategicApproach[0]}</dd>
        </div>
        <div>
          <dt className="text-[10px] font-medium tracking-wider text-slate-500 uppercase">
            Leadership role
          </dt>
          <dd className="mt-1 text-slate-400">{study.leadershipResponsibilities[0]}</dd>
        </div>
        <div>
          <dt className="text-[10px] font-medium tracking-wider text-slate-500 uppercase">
            Business outcomes
          </dt>
          <dd className="mt-1 text-slate-400">{study.businessOutcomes[0]}</dd>
        </div>
        <div>
          <dt className="text-[10px] font-medium tracking-wider text-amber-400/70 uppercase">
            Lessons learned
          </dt>
          <dd className="mt-1 text-slate-300 italic">{study.lessonsLearned[0]}</dd>
        </div>
      </dl>
    </article>
  );
}

export function InsightExperienceSection({
  studies,
}: {
  studies: readonly EngagementCaseStudy[];
}) {
  return (
    <section className="border-t border-white/10 py-16" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="text-2xl font-semibold text-white sm:text-3xl">
        Selected Experience
      </h2>
      <p className="mt-4 max-w-3xl text-slate-400 leading-relaxed">
        Representative engagements illustrating how product leadership, transformation,
        and AI-enabled initiatives translate into measurable business outcomes.
      </p>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {studies.map((study, index) => (
          <RevealOnScroll key={study.organization} delayMs={index * 60}>
            <ExperienceCard study={study} />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
