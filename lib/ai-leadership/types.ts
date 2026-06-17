export type LeadershipAuthor = {
  slug: string;
  name: string;
  title: string;
  bio: string;
  credentials: readonly string[];
  path: string;
};

export type ArticleSection = {
  heading: string;
  paragraphs: readonly string[];
};

export type LeadershipArticle = {
  slug: string;
  pillarSlug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  authorSlug: string;
  publishedAt: string;
  readTimeMinutes: number;
  introduction: string;
  sections: readonly ArticleSection[];
  keyTakeaways: readonly string[];
  relatedServicePaths?: readonly string[];
};

export type LeadershipPillar = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  introduction: readonly string[];
  topics: readonly string[];
  path: string;
};

export type LeadershipResource = {
  slug: string;
  title: string;
  metaDescription: string;
  description: string;
  resourceType: "checklist" | "framework" | "template" | "guide";
  audience: string;
  highlights: readonly string[];
  path: string;
};

export type SitemapEntry = {
  path: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
};
