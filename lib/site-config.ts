import { AI_LEADERSHIP_SITEMAP_ROUTES } from "./ai-leadership";
import { REPORT_SITEMAP_ROUTES } from "./global-ai-opportunity-report";
import { INDUSTRY_ROUTES } from "./industry-pages-content";
import { GLOBAL_SITEMAP_ROUTES } from "./global-advisory-content";
import { LOCATION_ROUTES } from "./location-pages-content";
import { SMALL_BUSINESS_SITEMAP_ROUTES } from "./small-business-ai-content";

export const SITE_URL = "https://hibbertadvisorygroup.com";

export const DISCOVERY_INTAKE_PATH = "/intake";

export const CONTACT_EMAIL = "mike@hibbertadvisorygroup.com";

export const SERVICE_ROUTES = [
  {
    path: "/services/ai-opportunity-assessment",
    label: "AI Opportunity Assessment",
    changeFrequency: "monthly" as const,
    priority: 0.9,
  },
  {
    path: "/services/ai-opportunity-assessment-small-business",
    label: "AI Assessment for Growing Businesses",
    changeFrequency: "monthly" as const,
    priority: 0.9,
  },
  {
    path: "/services/ai-strategy-roadmap",
    label: "AI Strategy & Roadmap",
    changeFrequency: "monthly" as const,
    priority: 0.9,
  },
  {
    path: "/services/fractional-product-leadership",
    label: "Fractional Product Leadership",
    changeFrequency: "monthly" as const,
    priority: 0.9,
  },
  {
    path: "/services/digital-transformation",
    label: "Digital Transformation Advisory",
    changeFrequency: "monthly" as const,
    priority: 0.9,
  },
] as const;

export const INSIGHTS_ROUTES = [
  {
    path: "/insights/recent-engagements-impact",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
] as const;

export const STATIC_ROUTES = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/about/michael-hibbert", changeFrequency: "monthly" as const, priority: 0.85 },
  { path: "/strategy-to-execution", changeFrequency: "monthly" as const, priority: 0.85 },
  ...INSIGHTS_ROUTES,
  { path: DISCOVERY_INTAKE_PATH, changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/thank-you", changeFrequency: "yearly" as const, priority: 0.3 },
] as const;

export const ALL_SITEMAP_ROUTES = [
  ...STATIC_ROUTES,
  ...SERVICE_ROUTES,
  ...INDUSTRY_ROUTES,
  ...LOCATION_ROUTES,
  ...SMALL_BUSINESS_SITEMAP_ROUTES,
  ...GLOBAL_SITEMAP_ROUTES,
  ...AI_LEADERSHIP_SITEMAP_ROUTES,
  ...REPORT_SITEMAP_ROUTES,
];

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path}`;
}
