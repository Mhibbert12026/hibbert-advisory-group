import { REPORT_BASE_PATH, REPORT_META, REPORT_READ_PATH } from "../global-ai-opportunity-report";
import { REPORT_IMAGES } from "../global-ai-opportunity-report/images";
import {
  AI_READINESS_FRAMEWORK_META,
  AI_READINESS_FRAMEWORK_PATH,
} from "./ai-readiness-framework-content";
import {
  AI_LEADERSHIP_GAP_META,
  AI_LEADERSHIP_GAP_PATH,
} from "./ai-leadership-gap-content";
import { FUTURE_REPORTS_PATH } from "./future-reports-content";

export const RESEARCH_HUB_PATH = "/research";

export const RESEARCH_HUB_META = {
  pageTitle: "Research & Frameworks",
  headline: "Research-Driven Perspectives for Modern Organizations",
  subheadline:
    "Explore proprietary frameworks, executive research, and practical guidance developed to help organizations create measurable business value.",
  subtitle:
    "Original research, executive reports, strategic frameworks, and practical guidance helping organizations navigate AI, product leadership, and digital transformation.",
  metaTitle: "Research & Frameworks | Hibbert Advisory Group",
  metaDescription:
    "Original research, executive reports, strategic frameworks, and practical guidance on AI strategy, product leadership, and digital transformation from Hibbert Advisory Group.",
  ogImagePath: REPORT_IMAGES.cover.src,
} as const;

export const RESEARCH_CATEGORIES = [
  { id: "executive-research", label: "Executive Research" },
  { id: "strategic-frameworks", label: "Strategic Frameworks" },
  { id: "ai-strategy", label: "AI Strategy" },
  { id: "product-leadership", label: "Product Leadership" },
  { id: "digital-transformation", label: "Digital Transformation" },
  { id: "industry-research", label: "Industry Research" },
  { id: "global-research", label: "Global Research" },
  { id: "future-reports", label: "Future Reports" },
] as const;

export type ResearchCategoryId = (typeof RESEARCH_CATEGORIES)[number]["id"];

export type ResearchStatus = "featured" | "framework" | "featured-perspective" | "coming-soon" | "published";

export type ResearchItem = {
  slug: string;
  title: string;
  description: string;
  path: string;
  typeLabel: string;
  status: ResearchStatus;
  statusLabel: string;
  categoryId: ResearchCategoryId;
  readTimeMinutes?: number;
  publishDate?: string;
  imagePath?: string;
  imageAlt?: string;
  featured: boolean;
};

export const RESEARCH_ITEMS: readonly ResearchItem[] = [
  {
    slug: "global-ai-opportunity-report-2026",
    title: REPORT_META.shortTitle,
    description:
      "A comprehensive analysis of how organizations can turn AI into measurable business value.",
    path: REPORT_BASE_PATH,
    typeLabel: "Executive Research Report",
    status: "featured",
    statusLabel: "Featured",
    categoryId: "executive-research",
    readTimeMinutes: REPORT_META.readTimeMinutes,
    publishDate: REPORT_META.publishDate,
    imagePath: REPORT_IMAGES.cover.src,
    imageAlt: REPORT_IMAGES.cover.alt,
    featured: true,
  },
  {
    slug: "ai-readiness-framework",
    title: AI_READINESS_FRAMEWORK_META.title,
    description:
      "A proprietary methodology for assessing organizational readiness across leadership, technology, workforce, process, and data dimensions.",
    path: AI_READINESS_FRAMEWORK_PATH,
    typeLabel: "Strategic Framework",
    status: "framework",
    statusLabel: "Framework",
    categoryId: "strategic-frameworks",
    readTimeMinutes: AI_READINESS_FRAMEWORK_META.readTimeMinutes,
    publishDate: AI_READINESS_FRAMEWORK_META.publishDate,
    imagePath: REPORT_IMAGES.aiReadinessFramework.src,
    imageAlt: REPORT_IMAGES.aiReadinessFramework.alt,
    featured: true,
  },
  {
    slug: "ai-leadership-gap",
    title: AI_LEADERSHIP_GAP_META.title,
    description:
      "Why organizations focusing solely on AI tools often fail to create transformational outcomes.",
    path: AI_LEADERSHIP_GAP_PATH,
    typeLabel: "Executive Perspective",
    status: "featured-perspective",
    statusLabel: "Featured Perspective",
    categoryId: "ai-strategy",
    readTimeMinutes: AI_LEADERSHIP_GAP_META.readTimeMinutes,
    publishDate: AI_LEADERSHIP_GAP_META.publishDate,
    imagePath: REPORT_IMAGES.aiLeadershipGap.src,
    imageAlt: REPORT_IMAGES.aiLeadershipGap.alt,
    featured: true,
  },
  {
    slug: "future-reports",
    title: "Future Annual Reports",
    description:
      "A growing library of annual reports, industry outlooks, AI adoption studies, and executive research.",
    path: FUTURE_REPORTS_PATH,
    typeLabel: "Research Collection",
    status: "coming-soon",
    statusLabel: "Coming Soon",
    categoryId: "future-reports",
    featured: true,
  },
  {
    slug: "why-ai-initiatives-fail",
    title: "Why AI Initiatives Fail",
    description:
      "Structural causes of stalled pilots and executive countermeasures for enterprise AI impact.",
    path: `${REPORT_READ_PATH}#why-initiatives-fail`,
    typeLabel: "Executive Analysis",
    status: "published",
    statusLabel: "Published",
    categoryId: "digital-transformation",
    readTimeMinutes: 12,
    publishDate: REPORT_META.publishDate,
    imagePath: REPORT_IMAGES.whyAiInitiativesFail.src,
    imageAlt: REPORT_IMAGES.whyAiInitiativesFail.alt,
    featured: false,
  },
  {
    slug: "business-outcomes-framework",
    title: "Business Outcomes Framework",
    description:
      "Where strategy, leadership, execution, and technology intersect to create measurable AI value.",
    path: `${REPORT_READ_PATH}#business-value`,
    typeLabel: "Strategic Framework",
    status: "published",
    statusLabel: "Published",
    categoryId: "strategic-frameworks",
    readTimeMinutes: 10,
    publishDate: REPORT_META.publishDate,
    imagePath: REPORT_IMAGES.businessOutcomesFramework.src,
    imageAlt: REPORT_IMAGES.businessOutcomesFramework.alt,
    featured: false,
  },
  {
    slug: "industry-ai-maturity",
    title: "Industry AI Maturity Analysis",
    description:
      "Sector-specific AI maturity assessment and strategic recommendations across nine industries.",
    path: `${REPORT_READ_PATH}#industry-analysis`,
    typeLabel: "Industry Research",
    status: "published",
    statusLabel: "Published",
    categoryId: "industry-research",
    readTimeMinutes: 15,
    publishDate: REPORT_META.publishDate,
    imagePath: REPORT_IMAGES.industryAiMaturity.src,
    imageAlt: REPORT_IMAGES.industryAiMaturity.alt,
    featured: false,
  },
  {
    slug: "global-ai-perspectives",
    title: "Global AI Perspectives",
    description:
      "Regional adoption patterns, regulatory considerations, and strategic implications across seven global markets.",
    path: `${REPORT_READ_PATH}#global-perspectives`,
    typeLabel: "Global Research",
    status: "published",
    statusLabel: "Published",
    categoryId: "global-research",
    readTimeMinutes: 14,
    publishDate: REPORT_META.publishDate,
    imagePath: REPORT_IMAGES.aiOpportunityGlobal.src,
    imageAlt: REPORT_IMAGES.aiOpportunityGlobal.alt,
    featured: false,
  },
] as const;

export const FEATURED_RESEARCH_SLUGS = [
  "global-ai-opportunity-report-2026",
  "ai-readiness-framework",
  "ai-leadership-gap",
  "future-reports",
] as const;

export const HOMEPAGE_RESEARCH_SLUGS = [
  "global-ai-opportunity-report-2026",
  "ai-readiness-framework",
  "ai-leadership-gap",
] as const;

export const RESEARCH_HUB_SITEMAP_ROUTE = {
  path: RESEARCH_HUB_PATH,
  changeFrequency: "weekly" as const,
  priority: 0.92,
} as const;

export function getResearchBySlug(slug: string) {
  return RESEARCH_ITEMS.find((item) => item.slug === slug);
}

export function getFeaturedResearch() {
  return FEATURED_RESEARCH_SLUGS.map((slug) => getResearchBySlug(slug)).filter(
    (item): item is ResearchItem => item !== undefined,
  );
}

export function getHomepageResearch() {
  return HOMEPAGE_RESEARCH_SLUGS.map((slug) => getResearchBySlug(slug)).filter(
    (item): item is ResearchItem => item !== undefined,
  );
}

export function getResearchByCategory(categoryId: ResearchCategoryId) {
  return RESEARCH_ITEMS.filter((item) => item.categoryId === categoryId);
}

export function getCategoryLabel(categoryId: ResearchCategoryId) {
  return RESEARCH_CATEGORIES.find((c) => c.id === categoryId)?.label ?? categoryId;
}

export function formatResearchDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
