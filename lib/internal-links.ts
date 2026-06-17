import type { SeoRelatedLink } from "./seo-landing-types";

export const CORE_SERVICE_LINKS: readonly SeoRelatedLink[] = [
  {
    path: "/ai-leadership",
    label: "AI Leadership Center",
    description:
      "Executive resources on AI strategy, governance, adoption, product leadership, and transformation—with articles and downloadable frameworks.",
  },
  {
    path: "/research",
    label: "Research & Frameworks",
    description:
      "Original research, executive reports, proprietary frameworks, and strategic guidance from Hibbert Advisory Group.",
  },
  {
    path: "/reports/global-ai-opportunity-report-2026",
    label: "Global AI Opportunity Report 2026",
    description:
      "Executive research on AI adoption, readiness frameworks, industry analysis, and transformation roadmaps for leadership teams.",
  },
  {
    path: "/insights",
    label: "Insights Hub",
    description:
      "Executive thought leadership, research reports, frameworks, and strategic perspectives on AI, transformation, and growth.",
  },
  {
    path: "/insights/ai-is-not-the-differentiator-experience-is",
    label: "AI Is Not the Differentiator. Experience Is.",
    description:
      "Flagship executive insight on why product leadership, transformation experience, and execution—not AI access alone—create competitive advantage.",
  },
  {
    path: "/global-ai-advisory",
    label: "Global AI Strategy Advisory",
    description:
      "Worldwide AI strategy, governance, adoption roadmaps, and executive advisory for organizations navigating AI with confidence.",
  },
  {
    path: "/global-digital-transformation",
    label: "Global Digital Transformation",
    description:
      "International digital transformation advisory for business modernization, operational change, and technology strategy.",
  },
  {
    path: "/international-product-strategy",
    label: "International Product Strategy",
    description:
      "Global product leadership, portfolio management, SaaS growth, and digital platform strategy consulting.",
  },
  {
    path: "/global-capabilities",
    label: "Global Capabilities",
    description:
      "Advisory across North America, Europe, Middle East, and Asia-Pacific through remote-first executive engagement.",
  },
  {
    path: "/small-business-ai",
    label: "AI for Small Business",
    description:
      "Practical AI resources for business owners, founders, and professional services firms seeking measurable efficiency and revenue outcomes.",
  },
  {
    path: "/services/ai-opportunity-assessment-small-business",
    label: "AI Assessment for Growing Businesses",
    description:
      "Fixed-scope assessment identifying practical AI opportunities with a prioritized 90-day roadmap for small businesses and professional practices.",
  },
  {
    path: "/services/ai-opportunity-assessment",
    label: "AI Opportunity Assessment",
    description:
      "Identify and prioritize high-value AI initiatives with executive-ready recommendations and a practical roadmap.",
  },
  {
    path: "/services/ai-strategy-roadmap",
    label: "AI Strategy & Roadmap",
    description:
      "Develop governance, adoption strategy, and implementation roadmaps leadership teams can fund and measure.",
  },
  {
    path: "/services/fractional-product-leadership",
    label: "Fractional Product Leadership",
    description:
      "Executive product direction, roadmap governance, and cross-functional alignment without a full-time hire.",
  },
  {
    path: "/services/digital-transformation",
    label: "Digital Transformation Advisory",
    description:
      "Modernization planning across process, technology, and organizational readiness with measurable outcomes.",
  },
  {
    path: "/strategy-to-execution",
    label: "Strategy to Execution",
    description:
      "Move from advisory to implementation through trusted specialists under executive direction.",
  },
  {
    path: "/about/michael-hibbert",
    label: "About Michael Hibbert",
    description:
      "Executive profile, professional background, and advisory experience across media, technology, and growth-stage organizations.",
  },
  {
    path: "/insights/recent-engagements-impact",
    label: "Recent Engagements & Impact",
    description:
      "Representative case studies illustrating product leadership, transformation, and AI-enabled initiatives.",
  },
] as const;

export function pickRelatedServices(paths: readonly string[]): SeoRelatedLink[] {
  return CORE_SERVICE_LINKS.filter((link) => paths.includes(link.path));
}
