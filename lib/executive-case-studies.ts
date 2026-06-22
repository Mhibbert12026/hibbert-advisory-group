export const EXPERIENCE_PAGE_PATH = "/experience";

export const FEATURED_CASE_STUDY_IDS = ["nyt", "paramount", "mlt"] as const;

export type ExecutiveCaseStudy = {
  id: string;
  organization: string;
  sector: string;
  headline: string;
  outcomes: readonly string[];
};

export const EXECUTIVE_CASE_STUDIES: readonly ExecutiveCaseStudy[] = [
  {
    id: "nyt",
    organization: "The New York Times",
    sector: "Global Media",
    headline: "Audience growth and subscription performance at scale",
    outcomes: [
      "Supported 1.42M+ monthly users",
      "Increased engagement by 40%",
      "Increased subscription conversion by 27%",
      "Reduced churn by 15%",
    ],
  },
  {
    id: "paramount",
    organization: "Paramount",
    sector: "Media & Entertainment",
    headline: "International digital launch and mobile excellence",
    outcomes: [
      "Launched digital experiences across 99 countries",
      "Achieved 46% peak adoption",
      "Increased mobile audience growth across multiple experiences",
      "Digital Day Award-winning mobile experience",
    ],
  },
  {
    id: "mlt",
    organization: "Management Leadership for Tomorrow",
    sector: "Nonprofit",
    headline: "Product repositioning and partner adoption",
    outcomes: [
      "Repositioned and launched new product offerings",
      "Achieved 60% adoption across partner portfolio",
      "Developed employer and leadership engagement strategies",
    ],
  },
  {
    id: "paribus",
    organization: "Paribus Labs",
    sector: "Sports & AI",
    headline: "AI platform commercialization and league expansion",
    outcomes: [
      "Developed commercialization strategy for AI-powered sports platforms",
      "Drove 30%+ adoption across European leagues",
      "Built go-to-market and licensing strategies",
    ],
  },
  {
    id: "jobfit",
    organization: "JobFit",
    sector: "AI Platform",
    headline: "End-to-end AI product launch",
    outcomes: [
      "Conceived, designed, and launched AI-powered career intelligence platform",
      "Built resume intelligence, matching, portfolio, and advisory capabilities",
      "Led product strategy, UX, development, and go-to-market execution",
    ],
  },
] as const;

export function getFeaturedCaseStudies() {
  return EXECUTIVE_CASE_STUDIES.filter((study) =>
    (FEATURED_CASE_STUDY_IDS as readonly string[]).includes(study.id),
  );
}

export const EXECUTIVE_CASE_STUDIES_META = {
  eyebrow: "Outcomes",
  title: "Proven Outcomes at Scale",
  subheader:
    "Measurable business impact across global media, SaaS, nonprofit, sports, and emerging AI organizations.",
  viewAllLabel: "View All Experience",
} as const;

export const EXPERIENCE_PAGE_META = {
  title: "Experience & Case Studies",
  description:
    "Executive advisory outcomes across media, nonprofit, sports, and AI platforms — product strategy, transformation, and growth at scale.",
  headline: "Experience at Scale",
  subheader:
    "Representative engagements demonstrating product leadership, AI strategy, and transformation outcomes.",
} as const;
