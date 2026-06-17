import { ARTICLES, getArticlePath } from "./articles";
import { PILLARS, AI_LEADERSHIP_HUB_PATH } from "./pillars";
import { RESOURCES, RESOURCES_HUB_PATH } from "./resources";
import { ALL_AUTHORS } from "./authors";
import type { SitemapEntry } from "./types";

export * from "./types";
export * from "./authors";
export * from "./pillars";
export * from "./articles";
export * from "./resources";

export const AI_LEADERSHIP_META = {
  metaTitle: "AI Leadership Center | Hibbert Advisory Group",
  metaDescription:
    "Executive AI leadership resources: strategy, governance, adoption, product innovation, and transformation guidance for leadership teams worldwide.",
  headline: "AI Leadership Center",
  subheadline:
    "Executive guidance for leaders navigating AI strategy, governance, adoption, product innovation, and transformation—with practical frameworks and actionable insight.",
};

export const AI_LEADERSHIP_SITEMAP_ROUTES: readonly SitemapEntry[] = [
  { path: AI_LEADERSHIP_HUB_PATH, changeFrequency: "weekly", priority: 0.9 },
  { path: RESOURCES_HUB_PATH, changeFrequency: "monthly", priority: 0.85 },
  ...PILLARS.map((p) => ({
    path: p.path,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  })),
  ...ARTICLES.map((a) => ({
    path: getArticlePath(a),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  })),
  ...RESOURCES.map((r) => ({
    path: r.path,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  })),
  ...ALL_AUTHORS.map((a) => ({
    path: a.path,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  })),
];
