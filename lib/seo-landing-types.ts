export type SeoFaq = {
  question: string;
  answer: string;
};

export type SeoContentItem = {
  title: string;
  description: string;
};

export type SeoContentSection = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
  items?: readonly SeoContentItem[];
  bulletItems?: readonly string[];
};

export type SeoEngagementScenario = {
  title: string;
  description: string;
};

export type SeoRelatedLink = {
  path: string;
  label: string;
  description: string;
};

export type SeoLandingPageContent = {
  path: string;
  metaTitle: string;
  metaDescription: string;
  breadcrumbParent: string;
  breadcrumbParentPath: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  introduction: readonly string[];
  sections: readonly SeoContentSection[];
  engagementScenarios?: readonly SeoEngagementScenario[];
  advisoryContext: string;
  relatedServices: readonly SeoRelatedLink[];
  faq: readonly SeoFaq[];
};

export type SitemapRoute = {
  path: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
};
