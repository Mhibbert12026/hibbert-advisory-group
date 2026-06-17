import { RevealOnScroll } from "@/app/components/reveal-on-scroll";
import { selectedExperienceCaseStudies } from "@/lib/selected-experience";

function CaseStudyBlock({
  label,
  items,
}: {
  label: string;
  items: readonly string[];
}) {
  return (
    <div>
      <p className="text-xs font-medium tracking-wider text-amber-400/90 uppercase">
        {label}
      </p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-slate-400">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-400" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SelectedExperienceCaseStudies() {
  return (
    <div>
      <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
        Track record
      </p>
      <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
        Selected Experience
      </h2>
      <p className="mt-4 max-w-3xl text-slate-400 leading-relaxed">
        Representative engagements illustrating how product leadership, transformation
        programs, and AI-enabled initiatives translate into measurable business outcomes.
      </p>

      <div className="mt-10 space-y-10">
        {selectedExperienceCaseStudies.map((study, index) => (
          <RevealOnScroll key={study.organization} delayMs={index * 60}>
            <article className="rounded-2xl border border-white/8 bg-[#0f1c30]/80 p-8 shadow-xl shadow-black/20">
              <div className="mb-5 h-px w-12 bg-gradient-to-r from-amber-500 to-amber-500/0" />
              <p className="text-xs font-semibold tracking-[0.2em] text-amber-400/90 uppercase">
                {study.organization}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white">{study.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                {study.impactStatement}
              </p>

              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-medium tracking-wider text-amber-400/90 uppercase">
                      Business Challenge
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {study.businessChallenge}
                    </p>
                  </div>
                  <CaseStudyBlock
                    label="Leadership Responsibilities"
                    items={study.leadershipResponsibilities}
                  />
                  <CaseStudyBlock
                    label="Strategic Approach"
                    items={study.strategicApproach}
                  />
                </div>
                <div className="space-y-6">
                  <CaseStudyBlock
                    label="Business Outcomes"
                    items={study.businessOutcomes}
                  />
                  <CaseStudyBlock
                    label="Lessons Learned"
                    items={study.lessonsLearned}
                  />
                </div>
              </div>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
