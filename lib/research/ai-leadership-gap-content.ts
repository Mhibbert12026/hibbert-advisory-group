import { REPORT_IMAGES } from "../global-ai-opportunity-report/images";

export const AI_LEADERSHIP_GAP_PATH = "/research/ai-leadership-gap";

export const AI_LEADERSHIP_GAP_META = {
  title: "The AI Leadership Gap",
  metaTitle: "The AI Leadership Gap | Hibbert Advisory Group Research",
  metaDescription:
    "Why organizations focusing solely on AI tools often fail to create transformational outcomes—and how leadership, strategy, governance, and product thinking close the gap.",
  publishDate: "2026-05-29",
  readTimeMinutes: 14,
  ogImagePath: REPORT_IMAGES.aiLeadershipGap.src,
} as const;

export const EXECUTIVE_SUMMARY =
  "The greatest competitive advantage in AI does not come from tools—it comes from leadership. Organizations that invest in models, platforms, and automation without executive alignment, governance discipline, and product thinking consistently stall in pilot mode.";

export const LEADERSHIP_GAP_SECTIONS = [
  {
    id: "leadership-problem",
    title: "The Leadership Problem",
    paragraphs: [
      "Most organizations approach AI as a technology procurement exercise. Leadership teams approve budgets for platforms, hire prompt engineers, and launch pilots—without establishing the strategic clarity, decision rights, or change capacity required for enterprise impact.",
      "The result is a widening gap between AI adoption and AI value. Tools proliferate. Transformation does not.",
    ],
  },
  {
    id: "tools-focus",
    title: "Why Most Organizations Focus on Tools",
    paragraphs: [
      "Tools are visible, purchasable, and demonstrable in executive meetings. Leadership teams can point to ChatGPT licenses, automation platforms, and model deployments as evidence of progress.",
      "But tools alone do not redesign workflows, align stakeholders, or create accountability for outcomes. They amplify existing organizational capability—good or bad—without resolving structural constraints.",
      "Organizations that lead with tools often discover that integration complexity, data quality gaps, and change resistance consume the anticipated ROI before initiatives reach production scale.",
    ],
  },
  {
    id: "role-of-strategy",
    title: "The Role of Strategy",
    paragraphs: [
      "Effective AI strategy begins with business priorities—not technology demonstrations. Leadership teams must define where applied intelligence improves revenue, efficiency, decision quality, or customer experience within workflows the organization already operates at scale.",
      "Strategy connects AI investment to capital allocation, portfolio governance, and measurable outcome frameworks. Without it, every initiative competes for attention without a coherent enterprise narrative.",
      "The organizations creating durable value treat AI as a business capability embedded in product, operations, and go-to-market functions—not as a standalone innovation program.",
    ],
  },
  {
    id: "governance-change",
    title: "Governance & Change Management",
    paragraphs: [
      "Governance defines decision rights, risk tiers, data handling standards, and approval workflows before deployment—not after incidents occur. Organizations without governance frameworks experience fragmented pilots, inconsistent quality, and regulatory exposure.",
      "Change management is equally critical. Workforce readiness, role redesign, and executive communication determine whether AI capabilities are adopted or resisted. Technology teams cannot drive organizational change alone.",
      "Leadership must sponsor change with the same discipline applied to financial or operational transformation programs.",
    ],
  },
  {
    id: "pyramid-framework",
    title: "The Leadership Pyramid Framework",
    paragraphs: [
      "The Hibbert AI Leadership Gap model positions leadership, strategy, governance, and product thinking at the apex—above tools, models, and automation at the base.",
      "Organizations investing heavily at the base without building the apex consistently fail to achieve transformational outcomes. Those that invest in leadership capability first deploy tools with purpose, measurement, and organizational alignment.",
    ],
    pullQuote: "The greatest competitive advantage comes from leadership, not tools.",
  },
  {
    id: "recommendations",
    title: "Key Recommendations",
    bullets: [
      "Define 3–5 enterprise AI priorities linked to corporate objectives before expanding tool investment",
      "Assign named executive sponsors with authority over cross-functional resources and outcome accountability",
      "Establish AI governance with decision rights, risk tiers, and approval workflows integrated into strategy",
      "Assess readiness across leadership, data, technology, workforce, and process before scaling pilots",
      "Invest in change management proportional to deployment scope—not as an afterthought",
      "Evaluate advisors on business outcomes capability, not AI tool familiarity alone",
    ],
  },
] as const;

export const AI_LEADERSHIP_GAP_SITEMAP_ROUTE = {
  path: AI_LEADERSHIP_GAP_PATH,
  changeFrequency: "monthly" as const,
  priority: 0.88,
} as const;
