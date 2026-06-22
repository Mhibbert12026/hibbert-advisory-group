"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { PathCrossLink } from "@/app/components/project-discovery/path-cross-link";
import { ProjectSummaryCard } from "@/app/components/project-discovery/project-summary-card";
import { SchedulingConfirmation } from "@/app/components/project-discovery/scheduling-confirmation";
import { SchedulingSection } from "@/app/components/project-discovery/scheduling-section";
import {
  BUDGET_RANGES,
  PROJECT_TYPES,
  TIMELINE_OPTIONS,
  recommendServices,
  type ProjectDiscoveryPayload,
  type ProjectDiscoverySubmission,
} from "@/lib/project-discovery";
import { DISCOVERY_INTAKE_PATH } from "@/lib/site-config";

type FlowStep = "discovery" | "scheduling" | "confirmation";

const STEP_LABELS = [
  "Project Discovery",
  "Service Recommendation",
  "Schedule Call",
  "Confirmation",
] as const;

const fieldClassName =
  "w-full rounded-xl border border-white/10 bg-[#0a1424] px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 transition-colors focus:border-amber-500/40 focus:outline-none";

const labelClassName = "mb-2 block text-sm font-medium text-slate-300";

type ProjectDiscoveryFlowProps = {
  onSwitchToScheduleNow?: () => void;
};

export function ProjectDiscoveryFlow({ onSwitchToScheduleNow }: ProjectDiscoveryFlowProps) {
  const [step, setStep] = useState<FlowStep>("discovery");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submission, setSubmission] = useState<ProjectDiscoverySubmission | null>(null);
  const [form, setForm] = useState<ProjectDiscoveryPayload>({
    projectType: "",
    company: "",
    budgetRange: "",
    timeline: "",
    goals: "",
    challenges: "",
  });

  const activeStepIndex =
    step === "discovery" ? 0 : step === "scheduling" ? 2 : 3;

  const updateField = (field: keyof ProjectDiscoveryPayload, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setError(null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const localRecommendation = recommendServices(form);

    try {
      const response = await fetch("/api/project-discovery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as {
        error?: string;
        recommendedServices?: string[];
        summaryText?: string;
        recommendation?: {
          recommendedServices: string[];
          summaryText: string;
        };
      };

      if (!response.ok) {
        if (data.recommendation) {
          setSubmission({
            ...form,
            recommendedServices: data.recommendation.recommendedServices,
            summaryText: data.recommendation.summaryText,
          });
          setStep("scheduling");
          return;
        }

        throw new Error(data.error ?? "Unable to submit project discovery.");
      }

      setSubmission({
        ...form,
        recommendedServices: data.recommendedServices ?? localRecommendation.recommendedServices,
        summaryText: data.summaryText ?? localRecommendation.summaryText,
      });
      setStep("scheduling");
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Unable to submit project discovery.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleScheduled = useCallback(() => {
    setStep("confirmation");
  }, []);

  return (
    <div className="space-y-10">
      {onSwitchToScheduleNow ? (
        <PathCrossLink onClick={onSwitchToScheduleNow}>
          Prefer to speak with an advisor now? Click here.
        </PathCrossLink>
      ) : null}

      <ol className="grid gap-3 sm:grid-cols-4" aria-label="Scheduling progress">
        {STEP_LABELS.map((label, index) => {
          const isComplete = index < activeStepIndex;
          const isActive = index === activeStepIndex;

          return (
            <li
              key={label}
              className={`rounded-xl border px-4 py-3 text-center text-xs font-medium tracking-wide uppercase ${
                isActive
                  ? "border-amber-500/35 bg-amber-500/10 text-amber-200"
                  : isComplete
                    ? "border-white/10 bg-white/[0.03] text-slate-300"
                    : "border-white/8 bg-[#0a1424]/40 text-slate-500"
              }`}
            >
              <span className="block text-[10px] text-slate-500">Step {index + 1}</span>
              <span className="mt-1 block normal-case tracking-normal text-[13px]">
                {label}
              </span>
            </li>
          );
        })}
      </ol>

      {step === "discovery" ? (
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-[#0f1c30]/50 p-6 shadow-2xl shadow-black/30 sm:p-8"
        >
          <div className="grid gap-6">
            <div>
              <label htmlFor="projectType" className={labelClassName}>
                Project Type
              </label>
              <select
                id="projectType"
                required
                value={form.projectType}
                onChange={(event) => updateField("projectType", event.target.value)}
                className={fieldClassName}
              >
                <option value="" disabled>
                  Select a project type
                </option>
                {PROJECT_TYPES.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="company" className={labelClassName}>
                Company
              </label>
              <input
                id="company"
                type="text"
                required
                value={form.company}
                onChange={(event) => updateField("company", event.target.value)}
                className={fieldClassName}
                placeholder="Your organization"
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="budgetRange" className={labelClassName}>
                  Budget Range
                </label>
                <select
                  id="budgetRange"
                  required
                  value={form.budgetRange}
                  onChange={(event) => updateField("budgetRange", event.target.value)}
                  className={fieldClassName}
                >
                  <option value="" disabled>
                    Select a budget range
                  </option>
                  {BUDGET_RANGES.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="timeline" className={labelClassName}>
                  Timeline
                </label>
                <select
                  id="timeline"
                  required
                  value={form.timeline}
                  onChange={(event) => updateField("timeline", event.target.value)}
                  className={fieldClassName}
                >
                  <option value="" disabled>
                    Select a timeline
                  </option>
                  {TIMELINE_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="goals" className={labelClassName}>
                Goals
              </label>
              <textarea
                id="goals"
                required
                rows={4}
                value={form.goals}
                onChange={(event) => updateField("goals", event.target.value)}
                className={`${fieldClassName} resize-y`}
                placeholder="What outcomes are you trying to achieve?"
              />
            </div>

            <div>
              <label htmlFor="challenges" className={labelClassName}>
                Challenges
              </label>
              <textarea
                id="challenges"
                required
                rows={4}
                value={form.challenges}
                onChange={(event) => updateField("challenges", event.target.value)}
                className={`${fieldClassName} resize-y`}
                placeholder="What is making progress difficult today?"
              />
            </div>
          </div>

          {error ? (
            <p className="mt-6 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {error}
            </p>
          ) : null}

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold text-[#060d18] transition-colors hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Preparing your summary..." : "Continue to Scheduling"}
            </button>
            <Link
              href={DISCOVERY_INTAKE_PATH}
              className="text-sm text-slate-400 transition-colors hover:text-amber-200/90"
            >
              Prefer the full intake form instead?
            </Link>
          </div>

          {onSwitchToScheduleNow ? (
            <div className="mt-6">
              <PathCrossLink onClick={onSwitchToScheduleNow}>
                Prefer to speak with an advisor now? Click here.
              </PathCrossLink>
            </div>
          ) : null}
        </form>
      ) : null}

      {step === "scheduling" && submission ? (
        <div className="space-y-6">
          <ProjectSummaryCard submission={submission} />
          {onSwitchToScheduleNow ? (
            <PathCrossLink onClick={onSwitchToScheduleNow}>
              Prefer to speak with an advisor now? Click here.
            </PathCrossLink>
          ) : null}
          <SchedulingSection
            onScheduled={handleScheduled}
            eyebrow="Final Step"
            description="Based on your responses, choose a time that works best for your schedule. You will receive a confirmation email immediately after booking."
          />
        </div>
      ) : null}

      {step === "confirmation" ? (
        <SchedulingConfirmation description="Your discovery call is confirmed. We'll review your project details before the conversation and come prepared with relevant recommendations." />
      ) : null}
    </div>
  );
}
