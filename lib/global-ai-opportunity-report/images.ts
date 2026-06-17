export const REPORT_IMAGE_BASE = "/reports/global-ai-opportunity-report-2026";

export const REPORT_OG_IMAGE_PATH = `${REPORT_IMAGE_BASE}/og-social.png`;

export type ReportImageKey =
  | "cover"
  | "adoptionVsValueGap"
  | "aiReadinessFramework"
  | "businessOutcomesFramework"
  | "industryAiMaturity"
  | "aiOpportunityGlobal"
  | "whyAiInitiativesFail"
  | "aiInvestmentAllocation"
  | "businessValueOfAi"
  | "aiLeadershipGap"
  | "buildingAiReadyFuture";

export type ReportImageMeta = {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
  maxWidth?: number;
  variant: "hero" | "full" | "contained" | "featured";
};

export const REPORT_IMAGES: Record<ReportImageKey, ReportImageMeta> = {
  cover: {
    src: `${REPORT_IMAGE_BASE}/cover.png`,
    alt: "Cover of The Global AI Opportunity Report 2026 by Michael Hibbert, Hibbert Advisory Group — executive research on global AI strategy and business value",
    width: 1024,
    height: 682,
    variant: "hero",
  },
  adoptionVsValueGap: {
    src: `${REPORT_IMAGE_BASE}/adoption-vs-value-gap.png`,
    alt: "Infographic comparing high AI adoption rates with low realized business value — adoption does not equal value",
    caption:
      "Many organizations have adopted AI tools. Far fewer have translated adoption into measurable business outcomes.",
    width: 1024,
    height: 682,
    variant: "full",
  },
  aiReadinessFramework: {
    src: `${REPORT_IMAGE_BASE}/ai-readiness-framework.png`,
    alt: "Hibbert AI Readiness Framework diagram showing five dimensions — leadership, data, technology, process, and workforce readiness — surrounding a central AI readiness score",
    caption:
      "The Hibbert Advisory AI Readiness Framework evaluates organizational readiness across leadership, technology, workforce, process, and data dimensions.",
    width: 1024,
    height: 682,
    maxWidth: 1000,
    variant: "contained",
  },
  businessOutcomesFramework: {
    src: `${REPORT_IMAGE_BASE}/business-outcomes-framework.png`,
    alt: "Framework diagram showing six areas where AI creates business value — revenue growth, operational efficiency, customer experience, employee productivity, knowledge management, and decision support",
    caption:
      "The most valuable AI initiatives occur where strategy, leadership, execution, and technology intersect.",
    width: 1024,
    height: 682,
    variant: "full",
  },
  industryAiMaturity: {
    src: `${REPORT_IMAGE_BASE}/industry-ai-maturity.png`,
    alt: "Bar chart of AI maturity by industry — financial services and SaaS lead, healthcare and manufacturing moderate, education and nonprofits emerging",
    caption: "AI adoption and organizational maturity vary significantly across industries.",
    width: 1024,
    height: 682,
    variant: "full",
  },
  aiOpportunityGlobal: {
    src: `${REPORT_IMAGE_BASE}/ai-opportunity-global.png`,
    alt: "World map infographic showing AI opportunity and investment momentum across North America, Europe, LATAM, Middle East, Africa, and Asia-Pacific",
    caption:
      "AI investment, innovation, and transformation opportunities are expanding across every major region.",
    width: 1024,
    height: 682,
    variant: "full",
  },
  whyAiInitiativesFail: {
    src: `${REPORT_IMAGE_BASE}/why-ai-initiatives-fail.png`,
    alt: "Infographic identifying six root causes of AI initiative failure — no strategy, poor change management, lack of executive sponsorship, technology-first thinking, weak governance, and unrealistic expectations",
    caption:
      "Most AI failures are not technology failures. They are failures of strategy, governance, leadership, and execution.",
    width: 1024,
    height: 682,
    variant: "full",
  },
  aiInvestmentAllocation: {
    src: `${REPORT_IMAGE_BASE}/ai-investment-allocation.png`,
    alt: "Donut chart of AI investment allocation across strategy, technology, data, workforce enablement, change management, and governance",
    caption:
      "Successful organizations balance investment across strategy, technology, workforce enablement, governance, data, and change management.",
    width: 1024,
    height: 682,
    variant: "full",
  },
  businessValueOfAi: {
    src: `${REPORT_IMAGE_BASE}/business-value-of-ai.png`,
    alt: "Infographic on the business value of AI — revenue growth, operational efficiency, customer experience, employee productivity, better decisions, and risk reduction with impact metrics",
    caption:
      "AI creates measurable value through revenue growth, efficiency, customer experience, productivity, decision quality, and risk reduction.",
    width: 1024,
    height: 682,
    variant: "full",
  },
  aiLeadershipGap: {
    src: `${REPORT_IMAGE_BASE}/ai-leadership-gap.png`,
    alt: "AI Leadership Gap pyramid showing leadership, strategy, governance, and product thinking above tools, models, and automation at the base",
    caption:
      "Organizations often focus on tools and models while overlooking leadership, governance, strategy, and product thinking—the real drivers of transformation.",
    width: 1024,
    height: 682,
    variant: "featured",
  },
  buildingAiReadyFuture: {
    src: `${REPORT_IMAGE_BASE}/building-ai-ready-future.png`,
    alt: "Five-step AI adoption roadmap — assess, strategize, build, deploy, and scale — guided by responsible AI principles",
    caption:
      "Organizations should approach AI adoption as a strategic journey rather than a technology deployment.",
    width: 1024,
    height: 682,
    variant: "full",
  },
};

export const AUTHOR_HEADSHOT = {
  src: "/michael-hibbert-headshot.png",
  alt: "Michael Hibbert, Founder of Hibbert Advisory Group — product leadership, AI strategy, and digital transformation advisor",
  width: 1254,
  height: 1254,
} as const;
