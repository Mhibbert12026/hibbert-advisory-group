export type HomepageService = {
  id: string;
  title: string;
  startingPrice: string;
  tagline: string;
  description: string;
  outcomesLabel: string;
  outcomes: readonly string[];
  detailPath: string;
  mostComprehensive?: boolean;
  valueStatement?: string;
  bestFor?: readonly string[];
};

export const HOMEPAGE_SERVICES: readonly HomepageService[] = [
  {
    id: "diagnostic",
    title: "Product Growth & Revenue Diagnostic",
    startingPrice: "Starting at $3,500",
    tagline: "Clarity on what drives growth and what constrains it",
    description:
      "A structured review of product, funnel, pricing, and go-to-market performance. We identify revenue constraints, prioritization gaps, and near-term opportunities supported by evidence.",
    outcomesLabel: "Deliverables",
    outcomes: [
      "Revenue & conversion bottleneck analysis",
      "Product friction assessment",
      "Monetization opportunity review",
      "Prioritized 90-day growth roadmap",
      "Executive findings presentation",
    ],
    bestFor: [
      "Revenue growth challenges",
      "Product-market fit refinement",
      "Go-to-market optimization",
    ],
    detailPath: "/services/digital-transformation",
  },
  {
    id: "ai-assessment",
    title: "AI Opportunity Assessment",
    startingPrice: "Starting at $3,500",
    tagline: "Focused assessment of applied AI opportunities",
    description:
      "Identify where AI can reduce cost, improve efficiency, and strengthen execution across the business.",
    valueStatement:
      "Most leadership teams recognize AI matters. The challenge is prioritization. We identify use cases with clear business value and a practical path to adoption.",
    outcomesLabel: "Deliverables",
    outcomes: [
      "AI opportunity assessment",
      "Workflow automation review",
      "Tooling and vendor recommendations",
      "Risk and governance considerations",
      "Executive findings presentation",
      "90-day implementation roadmap",
    ],
    detailPath: "/services/ai-opportunity-assessment",
  },
  {
    id: "fractional",
    title: "Fractional Product & Strategy Leadership",
    startingPrice: "Engagements begin at $8,000/month",
    mostComprehensive: true,
    tagline:
      "Executive-level product, growth, and operational leadership without the cost of a full-time executive hire.",
    description:
      "Ongoing partnership with your executive team on product direction, roadmap governance, cross-functional alignment, and board-level narrative, calibrated to your stage and resourcing.",
    outcomesLabel: "Deliverables",
    outcomes: [
      "Product strategy & roadmap governance",
      "Executive stakeholder alignment",
      "Product operating model optimization",
      "Leadership coaching for product teams",
      "Board & investor narrative support",
      "Monthly strategic advisory sessions",
    ],
    bestFor: ["Executive teams", "Scaling organizations", "Founder support"],
    detailPath: "/services/fractional-product-leadership",
  },
] as const;

export const HOMEPAGE_SERVICE_LINKS = [
  { path: "/services/ai-opportunity-assessment", label: "AI Opportunity Assessment" },
  { path: "/services/ai-strategy-roadmap", label: "AI Strategy & Roadmap" },
  { path: "/services/fractional-product-leadership", label: "Fractional Product Leadership" },
  { path: "/services/digital-transformation", label: "Digital Transformation" },
] as const;

export const HOMEPAGE_ENGAGEMENT_TIMELINES = [
  { service: "Product Growth & Revenue Diagnostic", duration: "2–3 Weeks" },
  { service: "AI Opportunity Assessment", duration: "2–4 Weeks" },
  { service: "Fractional Product & Strategy Leadership", duration: "Monthly Engagement" },
] as const;
