import { NextResponse } from "next/server";
import {
  BUDGET_RANGES,
  PROJECT_TYPES,
  TIMELINE_OPTIONS,
  recommendServices,
  type ProjectDiscoveryPayload,
} from "@/lib/project-discovery";
import { getSupabaseAdmin, isSupabaseConfigured } from "@/lib/supabase/admin";

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function validatePayload(body: unknown): ProjectDiscoveryPayload | null {
  if (!body || typeof body !== "object") return null;

  const record = body as Record<string, unknown>;
  const projectType = record.projectType;
  const company = record.company;
  const budgetRange = record.budgetRange;
  const timeline = record.timeline;
  const goals = record.goals;
  const challenges = record.challenges;

  if (!isNonEmptyString(projectType) || !isNonEmptyString(company)) return null;
  if (!isNonEmptyString(budgetRange) || !isNonEmptyString(timeline)) return null;
  if (!isNonEmptyString(goals) || !isNonEmptyString(challenges)) return null;

  const validProjectType = PROJECT_TYPES.some((item) => item.value === projectType);
  const validBudget = BUDGET_RANGES.some((item) => item.value === budgetRange);
  const validTimeline = TIMELINE_OPTIONS.some((item) => item.value === timeline);

  if (!validProjectType || !validBudget || !validTimeline) return null;

  return {
    projectType: projectType.trim(),
    company: company.trim(),
    budgetRange: budgetRange.trim(),
    timeline: timeline.trim(),
    goals: goals.trim(),
    challenges: challenges.trim(),
  };
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const payload = validatePayload(body);
  if (!payload) {
    return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
  }

  const recommendation = recommendServices(payload);

  if (!isSupabaseConfigured()) {
    return NextResponse.json(
      {
        error: "Project discovery storage is not configured yet.",
        recommendation,
      },
      { status: 503 },
    );
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json(
      { error: "Unable to connect to project discovery storage." },
      { status: 503 },
    );
  }

  const { data, error } = await supabase
    .from("project_discovery_submissions")
    .insert({
      project_type: payload.projectType,
      company: payload.company,
      budget_range: payload.budgetRange,
      timeline: payload.timeline,
      goals: payload.goals,
      challenges: payload.challenges,
      recommended_services: recommendation.recommendedServices,
      summary_text: recommendation.summaryText,
    })
    .select("id")
    .single();

  if (error) {
    console.error("project_discovery_submissions insert failed:", error.message);
    return NextResponse.json(
      { error: "Unable to save your project discovery responses." },
      { status: 500 },
    );
  }

  return NextResponse.json({
    id: data.id,
    ...recommendation,
  });
}
