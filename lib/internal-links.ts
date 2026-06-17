import type { SeoRelatedLink } from "./seo-landing-types";

export const CORE_SERVICE_LINKS: readonly SeoRelatedLink[] = [
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
