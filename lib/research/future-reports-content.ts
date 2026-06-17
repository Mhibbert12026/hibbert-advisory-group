export const FUTURE_REPORTS_PATH = "/research/future-reports";

export const FUTURE_REPORTS_META = {
  title: "Future Reports",
  metaTitle: "Future Research & Reports | Hibbert Advisory Group",
  metaDescription:
    "Upcoming executive research from Hibbert Advisory Group—annual reports, AI adoption benchmarks, industry outlooks, and strategic frameworks in development.",
  ogImagePath: "/reports/global-ai-opportunity-report-2026/cover.png",
} as const;

export const PLANNED_REPORTS = [
  {
    slug: "global-ai-opportunity-report-2027",
    title: "Global AI Opportunity Report 2027",
    status: "In Development",
    expectedPublication: "Q1 2027",
    description:
      "Annual executive assessment of global AI adoption trends, readiness benchmarks, industry maturity, and transformation roadmaps for leadership teams.",
    category: "Executive Research",
  },
  {
    slug: "ai-adoption-benchmark-report",
    title: "AI Adoption Benchmark Report",
    status: "Planned",
    expectedPublication: "Q2 2027",
    description:
      "Comparative analysis of AI adoption patterns, pilot-to-production conversion rates, and ROI realization across industries and organization sizes.",
    category: "Industry Research",
  },
  {
    slug: "product-leadership-ai-era",
    title: "Product Leadership in the AI Era",
    status: "Planned",
    expectedPublication: "Q3 2027",
    description:
      "Research on how product leaders integrate AI into roadmaps, measure customer outcomes, and balance innovation with governance and execution discipline.",
    category: "Product Leadership",
  },
  {
    slug: "global-digital-transformation-outlook",
    title: "Global Digital Transformation Outlook",
    status: "Planned",
    expectedPublication: "Q4 2027",
    description:
      "Executive outlook on digital transformation priorities, modernization investments, and organizational change across global markets.",
    category: "Digital Transformation",
  },
  {
    slug: "small-business-ai-adoption",
    title: "Small Business AI Adoption Report",
    status: "Planned",
    expectedPublication: "Q1 2028",
    description:
      "Practical research on AI adoption patterns, barriers, and measurable outcomes for growing businesses and professional services firms.",
    category: "Small Business AI",
  },
  {
    slug: "industry-ai-maturity-report",
    title: "Industry AI Maturity Report",
    status: "Planned",
    expectedPublication: "Q2 2028",
    description:
      "Sector-by-sector analysis of AI maturity, investment allocation, governance practices, and competitive differentiation across nine industries.",
    category: "Industry Research",
  },
] as const;

export const FUTURE_REPORTS_SITEMAP_ROUTE = {
  path: FUTURE_REPORTS_PATH,
  changeFrequency: "monthly" as const,
  priority: 0.75,
} as const;
