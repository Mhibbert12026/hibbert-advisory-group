export type ReportStat = {
  value: string;
  label: string;
  source?: string;
};

export type ReportChart = {
  title: string;
  description: string;
  chartType: "bar" | "line" | "donut" | "matrix" | "heatmap";
  dataHint?: string;
};

export type ReportCallout = {
  variant: "insight" | "warning" | "recommendation" | "executive";
  title: string;
  body: string;
};

export type ValueCategoryBlock = {
  category: string;
  useCases: readonly string[];
  expectedBenefits: readonly string[];
  commonMistakes: readonly string[];
};

export type IndustryBlock = {
  industry: string;
  challenges: readonly string[];
  opportunities: readonly string[];
  useCases: readonly string[];
  recommendations: readonly string[];
};

export type RegionBlock = {
  region: string;
  adoptionPatterns: readonly string[];
  opportunities: readonly string[];
  challenges: readonly string[];
};

export type RoadmapPhase = {
  horizon: string;
  title: string;
  objectives: readonly string[];
  deliverables: readonly string[];
  successMetrics: readonly string[];
};

export type ReadinessDimension = {
  name: string;
  description: string;
  assessmentCriteria: readonly string[];
  scoreGuide: readonly { range: string; meaning: string }[];
};

import type { ReportImageKey } from "./images";

export type ReportFigureBlock = {
  imageKey: ReportImageKey;
  caption?: string;
  alt?: string;
  maxWidth?: number;
  variant?: "hero" | "full" | "contained" | "featured";
  pullQuote?: string;
};

export type AuthorProfileBlock = {
  name: string;
  title: string;
  expertise: readonly string[];
  biography: string;
};

export type ReportBlock =
  | { type: "prose"; paragraphs: readonly string[] }
  | { type: "heading"; text: string; level: 2 | 3 | 4 }
  | { type: "bullets"; title?: string; items: readonly string[] }
  | { type: "numbered"; title?: string; items: readonly string[] }
  | { type: "stats"; title?: string; items: readonly ReportStat[] }
  | { type: "chart"; chart: ReportChart }
  | { type: "callout"; callout: ReportCallout }
  | { type: "value-category"; data: ValueCategoryBlock }
  | { type: "industry"; data: IndustryBlock }
  | { type: "region"; data: RegionBlock }
  | { type: "roadmap"; phases: readonly RoadmapPhase[] }
  | { type: "readiness-framework"; dimensions: readonly ReadinessDimension[]; methodology: readonly string[] }
  | { type: "two-column"; left: { title: string; items: readonly string[] }; right: { title: string; items: readonly string[] } }
  | { type: "figure"; figure: ReportFigureBlock }
  | { type: "author-profile"; profile: AuthorProfileBlock };

export type ReportSection = {
  id: string;
  number: number;
  title: string;
  subtitle?: string;
  blocks: readonly ReportBlock[];
};
