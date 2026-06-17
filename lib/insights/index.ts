import { ARTICLE_META, ARTICLE_PATH } from "./ai-differentiator-content";
import { REPORT_BASE_PATH, REPORT_META, REPORT_READ_PATH } from "../global-ai-opportunity-report";
import { REPORT_IMAGES } from "../global-ai-opportunity-report/images";
import {
  AI_LEADERSHIP_GAP_META,
  AI_LEADERSHIP_GAP_PATH,
} from "../research/ai-leadership-gap-content";
import { INSIGHT_IMAGES } from "./ai-differentiator-images";

export const INSIGHTS_HUB_PATH = "/insights";

export const INSIGHTS_HUB_META = {
  title: "Insights",
  headline: "Insights, Research & Perspectives",
  subheadline:
    "Thought leadership, research, frameworks, and strategic perspectives on AI, product leadership, business transformation, and organizational growth.",
  metaTitle: "Insights, Research & Perspectives | Hibbert Advisory Group",
  metaDescription:
    "Executive thought leadership, research reports, frameworks, and strategic perspectives on AI strategy, product leadership, digital transformation, and organizational growth.",
  ogImagePath: INSIGHT_IMAGES.hero.src,
} as const;

export const INSIGHT_CATEGORIES = [
  {
    id: "ai-strategy",
    label: "AI Strategy",
    description:
      "Investment prioritization, opportunity assessment, governance, and enterprise AI direction.",
  },
  {
    id: "product-leadership",
    label: "Product Leadership",
    description:
      "Product strategy, roadmaps, platform development, and customer-centered innovation in the AI era.",
  },
  {
    id: "digital-transformation",
    label: "Digital Transformation",
    description:
      "Implementation discipline, change leadership, and moving from strategy to measurable outcomes.",
  },
  {
    id: "research-reports",
    label: "Research Reports",
    description:
      "In-depth executive research, proprietary frameworks, and data-driven strategic assessments.",
  },
  {
    id: "small-business-ai",
    label: "Small Business AI",
    description:
      "Practical AI guidance for founders, owners, and professional services firms seeking measurable results.",
  },
  {
    id: "global-ai",
    label: "Global AI",
    description:
      "Worldwide AI strategy, cross-border transformation, and international product and platform advisory.",
  },
  {
    id: "industry-insights",
    label: "Industry Insights",
    description:
      "Sector-specific AI opportunity analysis across financial services, healthcare, SaaS, and more.",
  },
] as const;

export type InsightCategoryId = (typeof INSIGHT_CATEGORIES)[number]["id"];

export type InsightContentType =
  | "executive-perspective"
  | "research-report"
  | "analysis"
  | "case-study"
  | "framework"
  | "industry-brief";

export type InsightItem = {
  slug: string;
  title: string;
  excerpt: string;
  path: string;
  categoryId: InsightCategoryId;
  contentType: InsightContentType;
  contentTypeLabel: string;
  readTimeMinutes: number;
  publishDate: string;
  featured: boolean;
  imagePath?: string;
  imageAlt?: string;
  relatedServicePath: string;
  relatedServiceLabel: string;
};

export const INSIGHT_ITEMS: readonly InsightItem[] = [
  {
    slug: "global-ai-opportunity-report-2026",
    title: REPORT_META.shortTitle,
    excerpt:
      "Executive research on global AI adoption, readiness frameworks, industry analysis, and transformation roadmaps for leadership teams.",
    path: REPORT_BASE_PATH,
    categoryId: "research-reports",
    contentType: "research-report",
    contentTypeLabel: "Executive Report",
    readTimeMinutes: REPORT_META.readTimeMinutes,
    publishDate: REPORT_META.publishDate,
    featured: true,
    imagePath: REPORT_IMAGES.cover.src,
    imageAlt: REPORT_IMAGES.cover.alt,
    relatedServicePath: "/services/ai-opportunity-assessment",
    relatedServiceLabel: "AI Opportunity Assessment",
  },
  {
    slug: "ai-is-not-the-differentiator-experience-is",
    title: ARTICLE_META.title,
    excerpt: ARTICLE_META.subtitle,
    path: ARTICLE_PATH,
    categoryId: "ai-strategy",
    contentType: "executive-perspective",
    contentTypeLabel: "Executive Perspective",
    readTimeMinutes: ARTICLE_META.readTimeMinutes,
    publishDate: ARTICLE_META.publishDate,
    featured: true,
    imagePath: INSIGHT_IMAGES.hero.src,
    imageAlt: INSIGHT_IMAGES.hero.alt,
    relatedServicePath: "/services/ai-strategy-roadmap",
    relatedServiceLabel: "AI Strategy & Roadmap",
  },
  {
    slug: "the-ai-leadership-gap",
    title: AI_LEADERSHIP_GAP_META.title,
    excerpt: AI_LEADERSHIP_GAP_META.metaDescription,
    path: AI_LEADERSHIP_GAP_PATH,
    categoryId: "research-reports",
    contentType: "framework",
    contentTypeLabel: "Executive Framework",
    readTimeMinutes: AI_LEADERSHIP_GAP_META.readTimeMinutes,
    publishDate: AI_LEADERSHIP_GAP_META.publishDate,
    featured: true,
    imagePath: REPORT_IMAGES.aiLeadershipGap.src,
    imageAlt: REPORT_IMAGES.aiLeadershipGap.alt,
    relatedServicePath: "/services/fractional-product-leadership",
    relatedServiceLabel: "Fractional Product Leadership",
  },
  {
    slug: "why-ai-initiatives-fail",
    title: "Why AI Initiatives Fail",
    excerpt:
      "Structural causes of stalled pilots and failed ROI—and the executive countermeasures that separate experimentation from enterprise impact.",
    path: `${REPORT_READ_PATH}#why-initiatives-fail`,
    categoryId: "digital-transformation",
    contentType: "analysis",
    contentTypeLabel: "Executive Analysis",
    readTimeMinutes: 12,
    publishDate: REPORT_META.publishDate,
    featured: true,
    imagePath: REPORT_IMAGES.whyAiInitiativesFail.src,
    imageAlt: REPORT_IMAGES.whyAiInitiativesFail.alt,
    relatedServicePath: "/services/digital-transformation",
    relatedServiceLabel: "Digital Transformation Advisory",
  },
  {
    slug: "prioritizing-ai-investments",
    title: "Prioritizing AI Investments",
    excerpt:
      "A disciplined framework for evaluating AI opportunities by business impact, feasibility, and organizational readiness.",
    path: "/ai-leadership/ai-strategy/prioritizing-ai-investments",
    categoryId: "ai-strategy",
    contentType: "framework",
    contentTypeLabel: "Strategic Framework",
    readTimeMinutes: 9,
    publishDate: "2025-09-14",
    featured: false,
    relatedServicePath: "/services/ai-opportunity-assessment",
    relatedServiceLabel: "AI Opportunity Assessment",
  },
  {
    slug: "building-ai-business-case",
    title: "Building the AI Business Case",
    excerpt:
      "How executives construct investment cases that connect AI initiatives to P&L outcomes, risk posture, and portfolio governance.",
    path: "/ai-leadership/ai-strategy/building-ai-business-case",
    categoryId: "ai-strategy",
    contentType: "analysis",
    contentTypeLabel: "Strategic Analysis",
    readTimeMinutes: 8,
    publishDate: "2025-10-22",
    featured: false,
    relatedServicePath: "/services/ai-strategy-roadmap",
    relatedServiceLabel: "AI Strategy & Roadmap",
  },
  {
    slug: "integrating-ai-into-product-roadmaps",
    title: "Integrating AI into Product Roadmaps",
    excerpt:
      "How product leaders embed AI capabilities into roadmaps with measurable customer outcomes and disciplined sequencing.",
    path: "/ai-leadership/ai-product-leadership/integrating-ai-into-product-roadmaps",
    categoryId: "product-leadership",
    contentType: "analysis",
    contentTypeLabel: "Product Leadership",
    readTimeMinutes: 8,
    publishDate: "2025-10-08",
    featured: false,
    relatedServicePath: "/services/fractional-product-leadership",
    relatedServiceLabel: "Fractional Product Leadership",
  },
  {
    slug: "recent-engagements-impact",
    title: "Recent Engagements & Impact",
    excerpt:
      "Representative executive engagements across media, streaming, B2B platforms, and AI-enabled SaaS—illustrating product leadership and transformation outcomes.",
    path: "/insights/recent-engagements-impact",
    categoryId: "product-leadership",
    contentType: "case-study",
    contentTypeLabel: "Case Studies",
    readTimeMinutes: 6,
    publishDate: "2026-03-15",
    featured: false,
    relatedServicePath: "/services/fractional-product-leadership",
    relatedServiceLabel: "Fractional Product Leadership",
  },
  {
    slug: "moving-from-ai-strategy-to-implementation",
    title: "Moving from AI Strategy to Implementation",
    excerpt:
      "How leadership teams translate strategy documents into implementation programs with accountability, sequencing, and delivery governance.",
    path: "/ai-leadership/ai-transformation/moving-from-ai-strategy-to-implementation",
    categoryId: "digital-transformation",
    contentType: "analysis",
    contentTypeLabel: "Transformation",
    readTimeMinutes: 7,
    publishDate: "2025-11-19",
    featured: false,
    relatedServicePath: "/services/digital-transformation",
    relatedServiceLabel: "Digital Transformation Advisory",
  },
  {
    slug: "10-ways-small-businesses-can-use-ai",
    title: "10 Ways Small Businesses Can Use AI",
    excerpt:
      "Practical AI applications for growing businesses—from client communication and operations to marketing, sales, and decision support.",
    path: "/small-business-ai/10-ways-small-businesses-can-use-ai",
    categoryId: "small-business-ai",
    contentType: "framework",
    contentTypeLabel: "Practical Guide",
    readTimeMinutes: 10,
    publishDate: "2025-08-12",
    featured: false,
    relatedServicePath: "/services/ai-opportunity-assessment-small-business",
    relatedServiceLabel: "AI Assessment for Growing Businesses",
  },
  {
    slug: "small-business-ai-hub",
    title: "AI for Small Business",
    excerpt:
      "Resources, guides, and advisory pathways for business owners exploring practical AI adoption with measurable efficiency and revenue outcomes.",
    path: "/small-business-ai",
    categoryId: "small-business-ai",
    contentType: "framework",
    contentTypeLabel: "Resource Hub",
    readTimeMinutes: 5,
    publishDate: "2025-07-20",
    featured: false,
    relatedServicePath: "/services/ai-opportunity-assessment-small-business",
    relatedServiceLabel: "AI Assessment for Growing Businesses",
  },
  {
    slug: "global-ai-advisory",
    title: "Global AI Strategy & Transformation Advisory",
    excerpt:
      "Worldwide AI strategy, governance, adoption roadmaps, and executive advisory for organizations navigating AI with confidence.",
    path: "/global-ai-advisory",
    categoryId: "global-ai",
    contentType: "analysis",
    contentTypeLabel: "Global Advisory",
    readTimeMinutes: 8,
    publishDate: "2026-02-10",
    featured: false,
    relatedServicePath: "/services/ai-strategy-roadmap",
    relatedServiceLabel: "AI Strategy & Roadmap",
  },
  {
    slug: "ai-for-growing-businesses-worldwide",
    title: "AI for Growing Businesses Worldwide",
    excerpt:
      "International AI advisory for growth-stage organizations seeking practical adoption paths without enterprise-scale overhead.",
    path: "/ai-for-growing-businesses-worldwide",
    categoryId: "global-ai",
    contentType: "analysis",
    contentTypeLabel: "Global Advisory",
    readTimeMinutes: 7,
    publishDate: "2026-01-18",
    featured: false,
    relatedServicePath: "/global-capabilities",
    relatedServiceLabel: "Global Capabilities",
  },
  {
    slug: "financial-services-ai",
    title: "AI Consulting for Financial Services",
    excerpt:
      "Sector guidance on AI opportunity assessment, compliance-aware adoption, and workflow automation for financial institutions.",
    path: "/industries/financial-services-ai-consulting",
    categoryId: "industry-insights",
    contentType: "industry-brief",
    contentTypeLabel: "Industry Insight",
    readTimeMinutes: 6,
    publishDate: "2025-12-05",
    featured: false,
    relatedServicePath: "/services/ai-opportunity-assessment",
    relatedServiceLabel: "AI Opportunity Assessment",
  },
  {
    slug: "healthcare-ai-consulting",
    title: "AI Consulting for Healthcare",
    excerpt:
      "Strategic perspectives on clinical workflow automation, operational efficiency, and responsible AI adoption in healthcare organizations.",
    path: "/industries/healthcare-ai-consulting",
    categoryId: "industry-insights",
    contentType: "industry-brief",
    contentTypeLabel: "Industry Insight",
    readTimeMinutes: 6,
    publishDate: "2025-11-28",
    featured: false,
    relatedServicePath: "/services/digital-transformation",
    relatedServiceLabel: "Digital Transformation Advisory",
  },
  {
    slug: "saas-ai-consulting",
    title: "AI Consulting for SaaS Companies",
    excerpt:
      "Product-led AI integration, platform strategy, and growth-oriented adoption for SaaS and technology companies.",
    path: "/industries/saas-ai-consulting",
    categoryId: "industry-insights",
    contentType: "industry-brief",
    contentTypeLabel: "Industry Insight",
    readTimeMinutes: 6,
    publishDate: "2025-11-14",
    featured: false,
    relatedServicePath: "/services/fractional-product-leadership",
    relatedServiceLabel: "Fractional Product Leadership",
  },
] as const;

export const FEATURED_CONTENT_SLUGS = [
  "global-ai-opportunity-report-2026",
  "ai-is-not-the-differentiator-experience-is",
  "the-ai-leadership-gap",
  "why-ai-initiatives-fail",
] as const;

export const HOMEPAGE_INSIGHT_SLUGS = [
  "global-ai-opportunity-report-2026",
  "ai-is-not-the-differentiator-experience-is",
  "why-ai-initiatives-fail",
] as const;

export const INSIGHTS_HUB_SITEMAP_ROUTE = {
  path: INSIGHTS_HUB_PATH,
  changeFrequency: "weekly" as const,
  priority: 0.9,
} as const;

export function getInsightBySlug(slug: string) {
  return INSIGHT_ITEMS.find((item) => item.slug === slug);
}

export function getFeaturedContent() {
  return FEATURED_CONTENT_SLUGS.map((slug) => getInsightBySlug(slug)).filter(
    (item): item is InsightItem => item !== undefined,
  );
}

export function getHomepageInsights() {
  return HOMEPAGE_INSIGHT_SLUGS.map((slug) => getInsightBySlug(slug)).filter(
    (item): item is InsightItem => item !== undefined,
  );
}

export function getCategoryLabel(categoryId: InsightCategoryId) {
  return INSIGHT_CATEGORIES.find((category) => category.id === categoryId)?.label ?? categoryId;
}

export function getInsightsByCategory(categoryId: InsightCategoryId) {
  return INSIGHT_ITEMS.filter((item) => item.categoryId === categoryId);
}

export function getLatestInsights(limit = 9) {
  return [...INSIGHT_ITEMS]
    .sort((a, b) => b.publishDate.localeCompare(a.publishDate))
    .slice(0, limit);
}

export function formatInsightDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatReadTime(minutes: number) {
  return `${minutes} min read`;
}

/** @deprecated Use getFeaturedContent() */
export const FEATURED_INSIGHTS = getFeaturedContent();
