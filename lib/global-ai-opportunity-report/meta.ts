export const REPORT_SLUG = "global-ai-opportunity-report-2026";

export const REPORT_BASE_PATH = `/reports/${REPORT_SLUG}`;

export const REPORT_READ_PATH = `${REPORT_BASE_PATH}/read`;

export const REPORT_META = {
  title: "The Global AI Opportunity Report 2026",
  shortTitle: "Global AI Opportunity Report 2026",
  edition: "2026 Edition",
  publishDate: "2026-05-29",
  pageCount: "48",
  readTimeMinutes: 55,
  author: {
    name: "Michael Hibbert",
    title: "Founder, Hibbert Advisory Group",
    path: "/about/michael-hibbert",
  },
  metaTitle:
    "The Global AI Opportunity Report 2026 | Hibbert Advisory Group",
  metaDescription:
    "Executive report on global AI opportunity: adoption trends, readiness frameworks, industry analysis, agentic AI implications, and a practical transformation roadmap for CEOs and leadership teams.",
  audience: [
    "CEOs",
    "Founders",
    "Product Leaders",
    "CIOs",
    "CTOs",
    "Business Owners",
    "Executives",
    "Investors",
  ],
  highlights: [
    "Proprietary Hibbert AI Readiness Framework with scoring methodology",
    "Industry analysis across nine sectors with strategic recommendations",
    "Global perspectives across seven regions",
    "30-day through 12-month AI transformation roadmaps",
    "Executive action plan with investment and leadership priorities",
  ],
  downloadFileName: "Hibbert-Global-AI-Opportunity-Report-2026.pdf",
  ogImagePath: "/reports/global-ai-opportunity-report-2026/og-social.png",
} as const;

export const REPORT_SITEMAP_ROUTES = [
  {
    path: REPORT_BASE_PATH,
    changeFrequency: "monthly" as const,
    priority: 0.92,
  },
  {
    path: REPORT_READ_PATH,
    changeFrequency: "monthly" as const,
    priority: 0.88,
  },
] as const;
