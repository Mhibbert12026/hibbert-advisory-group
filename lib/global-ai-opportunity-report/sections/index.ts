import { section01ExecutiveSummary, section02CurrentState, section03ReadinessFramework } from "./part-1";
import { section04BusinessValue, section05IndustryAnalysis, section06AgenticAI } from "./part-2";
import { section07GlobalPerspectives, section08WhyInitiativesFail, section09TransformationRoadmap } from "./part-3";
import {
  section10ExecutiveActionPlan,
  section11AboutAuthor,
  section12AboutHag,
  sectionCta,
} from "./part-4";
import type { ReportSection } from "../types";

export const REPORT_SECTIONS: readonly ReportSection[] = [
  section01ExecutiveSummary,
  section02CurrentState,
  section03ReadinessFramework,
  section04BusinessValue,
  section05IndustryAnalysis,
  section06AgenticAI,
  section07GlobalPerspectives,
  section08WhyInitiativesFail,
  section09TransformationRoadmap,
  section10ExecutiveActionPlan,
  section11AboutAuthor,
  section12AboutHag,
  sectionCta,
];

export function getReportSection(id: string): ReportSection | undefined {
  return REPORT_SECTIONS.find((s) => s.id === id);
}
