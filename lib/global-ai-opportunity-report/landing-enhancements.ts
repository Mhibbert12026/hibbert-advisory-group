import { REPORT_META } from "./meta";

export const REPORT_EXECUTIVE_SUMMARY = {
  title: "Executive Summary",
  paragraphs: [
    "Artificial intelligence has moved from experimental curiosity to board-level mandate. In 2026, the question facing CEOs, founders, and executive teams is no longer whether to invest in AI—it is where to invest, how fast to move, and how to convert capability into measurable business outcomes.",
    "This report synthesizes adoption patterns, executive sentiment, industry dynamics, and transformation roadmaps observed across engagements with leadership teams in North America, Europe, the Middle East, and Asia-Pacific.",
  ],
  highlights: [
    "78% of enterprises have active AI initiatives; only 29% report measurable enterprise-wide impact",
    "AI is a business capability—not a technology initiative—that reshapes revenue, service, and capital allocation",
    "Five structural causes trap most organizations in the pilot plateau",
    "Six value categories define where AI creates durable competitive advantage",
    "The Hibbert AI Readiness Framework provides a scoring methodology across five dimensions",
  ],
} as const;

export const REPORT_KEY_FINDINGS = [
  {
    title: "The adoption–impact gap is widening",
    description:
      "Organizations are adopting AI faster than they are creating measurable enterprise value. The gap reflects readiness, prioritization, and execution discipline—not model capability.",
  },
  {
    title: "Leadership determines outcomes",
    description:
      "Organizations with executive sponsorship, governance, and product thinking outperform those investing primarily in tools and platforms.",
  },
  {
    title: "Readiness precedes scale",
    description:
      "Composite readiness scores below 2.5 indicate foundational gaps that will stall scaled deployment regardless of technology investment.",
  },
  {
    title: "Industry context matters",
    description:
      "AI opportunity, risk profile, and governance requirements vary significantly across nine sectors analyzed in this report.",
  },
  {
    title: "Roadmaps must be sequenced",
    description:
      "30-day, 90-day, 180-day, and 12-month transformation horizons provide actionable sequencing calibrated to organizational readiness.",
  },
  {
    title: "Agentic AI requires governance maturity",
    description:
      "Autonomous workflow applications demand higher governance thresholds than assistive AI—organizations should evaluate readiness before adoption.",
  },
] as const;

export const REPORT_CITATION = {
  recommended: `Hibbert Advisory Group. (${new Date(REPORT_META.publishDate).getFullYear()}). ${REPORT_META.title}. Hibbert Advisory Group Research.`,
  url: "https://hibbertadvisorygroup.com/reports/global-ai-opportunity-report-2026",
  author: REPORT_META.author.name,
  publishDate: REPORT_META.publishDate,
} as const;

export const REPORT_RELATED_RESEARCH = [
  {
    title: "Hibbert AI Readiness Framework",
    path: "/research/ai-readiness-framework",
    type: "Strategic Framework",
  },
  {
    title: "The AI Leadership Gap",
    path: "/research/ai-leadership-gap",
    type: "Executive Perspective",
  },
  {
    title: "Why AI Initiatives Fail",
    path: "/reports/global-ai-opportunity-report-2026/read#why-initiatives-fail",
    type: "Executive Analysis",
  },
  {
    title: "AI Is Not the Differentiator. Experience Is.",
    path: "/insights/ai-is-not-the-differentiator-experience-is",
    type: "Executive Perspective",
  },
] as const;

export const REPORT_VISUAL_KEYS = [
  "cover",
  "adoptionVsValueGap",
  "aiReadinessFramework",
  "businessOutcomesFramework",
  "industryAiMaturity",
  "aiOpportunityGlobal",
  "whyAiInitiativesFail",
  "aiLeadershipGap",
  "buildingAiReadyFuture",
] as const;
