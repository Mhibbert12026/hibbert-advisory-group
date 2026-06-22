export type SchedulingPath = "choice" | "schedule-now" | "discovery";

export const SCHEDULING_PATH_QUERY = {
  schedule: "schedule",
  discovery: "discovery",
} as const;

export function schedulingPathFromQuery(
  value: string | null | undefined,
): SchedulingPath {
  if (value === SCHEDULING_PATH_QUERY.schedule) return "schedule-now";
  if (value === SCHEDULING_PATH_QUERY.discovery) return "discovery";
  return "choice";
}

export function schedulingQueryFromPath(path: SchedulingPath) {
  if (path === "schedule-now") return SCHEDULING_PATH_QUERY.schedule;
  if (path === "discovery") return SCHEDULING_PATH_QUERY.discovery;
  return null;
}

export const ADVISORY_CALL_DETAILS = {
  duration: "30-minute Advisory Conversation",
  format: "Virtual session",
} as const;

export const ADVISORY_CALL_BEST_FOR =
  "Leaders, founders, executives, and organizations seeking guidance on growth, product strategy, AI initiatives, digital transformation, operational improvement, or new project opportunities.";

export const WHAT_TO_EXPECT = [
  "Focused discussion around your goals and priorities",
  "Practical recommendations based on your current situation",
  "Exploration of potential engagement models and next steps",
  "Honest assessment of fit and opportunities",
  "No obligation and no high-pressure sales process",
] as const;

export const SCHEDULING_TRUST_ITEMS = [
  "30-minute advisory session",
  "No obligation",
  "Confidential discussion",
  "Actionable next steps",
] as const;

export const SCHEDULING_EXPERTISE_AREAS = [
  "Website Development",
  "Mobile App Development",
  "AI Development",
  "Product Strategy",
  "Brand Identity",
  "Business Consulting",
  "Nonprofit Advisory",
  "Fractional Leadership",
] as const;
