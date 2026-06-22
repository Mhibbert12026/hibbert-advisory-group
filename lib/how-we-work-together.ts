export type EngagementModel = {
  id: string;
  title: string;
  duration?: string;
  description: string;
};

export const ENGAGEMENT_MODELS: readonly EngagementModel[] = [
  {
    id: "ai-assessment",
    title: "AI Opportunity Assessment",
    duration: "2–4 Weeks",
    description:
      "Structured executive assessment focused on identifying high-value AI opportunities and creating an actionable roadmap.",
  },
  {
    id: "product-strategy",
    title: "Product Strategy Advisory",
    description:
      "Strategic guidance for roadmap development, prioritization, growth opportunities, and stakeholder alignment.",
  },
  {
    id: "fractional-leadership",
    title: "Fractional Product & AI Leadership",
    description:
      "Ongoing executive-level support for organizations needing product, AI, and transformation leadership.",
  },
  {
    id: "transformation-partnership",
    title: "Transformation Partnership",
    description:
      "Multi-month advisory engagement focused on organizational transformation, adoption, and execution.",
  },
] as const;

export const HOW_WE_WORK_META = {
  eyebrow: "Engagement Models",
  title: "How We Work Together",
  subheadline:
    "Flexible engagement options designed to help organizations move from uncertainty to measurable outcomes.",
  ctaHeadline: "Let's Explore What's Possible",
  ctaCopy:
    "Whether you're evaluating AI initiatives, scaling products, or navigating transformation, let's identify where meaningful impact can be created.",
  primaryCta: "Start Discovery Intake",
  secondaryCta: "Schedule Discovery Call",
} as const;
