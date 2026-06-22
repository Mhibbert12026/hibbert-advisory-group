"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ProjectDiscoveryFlow } from "@/app/components/project-discovery/project-discovery-flow";
import { ScheduleNowFlow } from "@/app/components/project-discovery/schedule-now-flow";
import { SchedulingChoice } from "@/app/components/project-discovery/scheduling-choice";
import {
  schedulingPathFromQuery,
  schedulingQueryFromPath,
  type SchedulingPath,
} from "@/lib/schedule-journey";
import { SCHEDULE_DISCOVERY_PATH } from "@/lib/site-config";

const PATH_HEADINGS: Record<SchedulingPath, { eyebrow: string; title: string; description: string }> =
  {
    choice: {
      eyebrow: "Get Started",
      title: "Schedule or Discover",
      description:
        "Choose the path that fits your needs — book immediately or start with guided project discovery.",
    },
    "schedule-now": {
      eyebrow: "Advisory Call",
      title: "Schedule an Advisory Call",
      description:
        "Let's discuss your goals, challenges, and opportunities to determine the best path forward.",
    },
    discovery: {
      eyebrow: "Project Discovery",
      title: "Project Discovery",
      description:
        "Tell us about your initiative first. We will recommend the right advisory focus, then guide you into scheduling.",
    },
  };

export function SchedulingJourney() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [path, setPath] = useState<SchedulingPath>("choice");

  useEffect(() => {
    setPath(schedulingPathFromQuery(searchParams.get("path")));
  }, [searchParams]);

  const navigateTo = useCallback(
    (nextPath: SchedulingPath) => {
      setPath(nextPath);
      const query = schedulingQueryFromPath(nextPath);
      router.replace(query ? `${SCHEDULE_DISCOVERY_PATH}?path=${query}` : SCHEDULE_DISCOVERY_PATH, {
        scroll: false,
      });
    },
    [router],
  );

  const heading = PATH_HEADINGS[path];

  return (
    <>
      <div className="text-center sm:text-left">
        <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
          {heading.eyebrow}
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {heading.title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:mx-0 sm:text-lg">
          {heading.description}
        </p>
      </div>

      <div className="mt-10">
        {path === "choice" ? (
          <SchedulingChoice
            onChooseScheduleNow={() => navigateTo("schedule-now")}
            onChooseDiscovery={() => navigateTo("discovery")}
          />
        ) : null}

        {path === "schedule-now" ? (
          <ScheduleNowFlow onSwitchToDiscovery={() => navigateTo("discovery")} />
        ) : null}

        {path === "discovery" ? (
          <ProjectDiscoveryFlow onSwitchToScheduleNow={() => navigateTo("schedule-now")} />
        ) : null}
      </div>
    </>
  );
}
