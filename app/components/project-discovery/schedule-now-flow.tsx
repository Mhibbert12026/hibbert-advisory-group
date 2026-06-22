"use client";

import { useCallback, useState } from "react";
import { PathCrossLink } from "@/app/components/project-discovery/path-cross-link";
import { SchedulingConfirmation } from "@/app/components/project-discovery/scheduling-confirmation";
import { SchedulingSection } from "@/app/components/project-discovery/scheduling-section";
import {
  ADVISORY_CALL_BEST_FOR,
  ADVISORY_CALL_DETAILS,
  SCHEDULING_EXPERTISE_AREAS,
  WHAT_TO_EXPECT,
} from "@/lib/schedule-journey";

type ScheduleNowFlowProps = {
  onSwitchToDiscovery: () => void;
};

export function ScheduleNowFlow({ onSwitchToDiscovery }: ScheduleNowFlowProps) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleScheduled = useCallback(() => {
    setIsConfirmed(true);
  }, []);

  if (isConfirmed) {
    return <SchedulingConfirmation />;
  }

  return (
    <div className="space-y-6">
      <PathCrossLink onClick={onSwitchToDiscovery}>
        Want a more tailored recommendation? Start Project Discovery.
      </PathCrossLink>

      <div className="rounded-2xl border border-white/10 bg-[#0f1c30]/50 p-6 shadow-2xl shadow-black/30 sm:p-7">
        <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
          What to Expect
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
          Advisory Call Overview
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-white/8 bg-[#0a1424]/60 px-5 py-4">
            <p className="text-[11px] font-semibold tracking-[0.14em] text-slate-500 uppercase">
              Session Duration
            </p>
            <p className="mt-2 text-sm font-medium text-slate-200">
              {ADVISORY_CALL_DETAILS.duration}
            </p>
            <p className="mt-1 text-xs text-slate-500">{ADVISORY_CALL_DETAILS.format}</p>
          </div>
          <div className="rounded-xl border border-white/8 bg-[#0a1424]/60 px-5 py-4">
            <p className="text-[11px] font-semibold tracking-[0.14em] text-slate-500 uppercase">
              Best For
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{ADVISORY_CALL_BEST_FOR}</p>
          </div>
        </div>
        <ul className="mt-6 space-y-3">
          {WHAT_TO_EXPECT.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-400" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-white/10 bg-[#0f1c30]/50 p-6 shadow-2xl shadow-black/30 sm:p-7">
        <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
          Areas of Expertise
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {SCHEDULING_EXPERTISE_AREAS.map((area) => (
            <li
              key={area}
              className="rounded-full border border-white/10 bg-[#0a1424]/70 px-3.5 py-1.5 text-xs font-medium text-slate-300"
            >
              {area}
            </li>
          ))}
        </ul>
      </div>

      <SchedulingSection
        onScheduled={handleScheduled}
        title="Choose a time for your advisory call"
        description="Select a time that works best for your schedule. We will use this conversation to understand your objectives, discuss opportunities, and identify potential next steps."
      />

      <PathCrossLink onClick={onSwitchToDiscovery}>
        Want a more tailored recommendation? Start Project Discovery.
      </PathCrossLink>
    </div>
  );
}
