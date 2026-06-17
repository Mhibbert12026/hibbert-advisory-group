import { INSIGHTS_HUB_META, INSIGHTS_HUB_PATH, INSIGHT_ITEMS } from "./index";
import { absoluteUrl } from "../site-config";

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hibbert Advisory Group",
    url: absoluteUrl("/"),
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/hibbert-logo.png"),
    },
    description:
      "Executive advisory for AI strategy, product leadership, digital transformation, and growth.",
    sameAs: [absoluteUrl("/insights"), absoluteUrl("/ai-leadership")],
  };
}

export function buildInsightsHubBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      {
        "@type": "ListItem",
        position: 2,
        name: "Insights",
        item: absoluteUrl(INSIGHTS_HUB_PATH),
      },
    ],
  };
}

export function buildInsightsHubSchema() {
  const pageUrl = absoluteUrl(INSIGHTS_HUB_PATH);

  return [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: INSIGHTS_HUB_META.headline,
      description: INSIGHTS_HUB_META.metaDescription,
      url: pageUrl,
      isPartOf: {
        "@type": "WebSite",
        name: "Hibbert Advisory Group",
        url: absoluteUrl("/"),
      },
      publisher: {
        "@type": "Organization",
        name: "Hibbert Advisory Group",
        url: absoluteUrl("/"),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Hibbert Advisory Group Insights",
      itemListElement: INSIGHT_ITEMS.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.title,
        url: absoluteUrl(item.path),
      })),
    },
    buildOrganizationSchema(),
    buildInsightsHubBreadcrumbSchema(),
  ];
}

type ArticleSchemaInput = {
  title: string;
  description: string;
  path: string;
  imagePath: string;
  publishDate: string;
  category: string;
  authorName: string;
  authorTitle: string;
  authorPath: string;
};

export function buildInsightArticleSchema({
  title,
  description,
  path,
  imagePath,
  publishDate,
  category,
  authorName,
  authorTitle,
  authorPath,
}: ArticleSchemaInput) {
  const pageUrl = absoluteUrl(path);
  const image = absoluteUrl(imagePath);

  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description,
      url: pageUrl,
      image,
      datePublished: publishDate,
      articleSection: category,
      author: {
        "@type": "Person",
        name: authorName,
        jobTitle: authorTitle,
        url: absoluteUrl(authorPath),
      },
      publisher: {
        "@type": "Organization",
        name: "Hibbert Advisory Group",
        url: absoluteUrl("/"),
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/hibbert-logo.png"),
        },
      },
      isPartOf: {
        "@type": "CollectionPage",
        name: INSIGHTS_HUB_META.headline,
        url: absoluteUrl(INSIGHTS_HUB_PATH),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Insight",
      name: title,
      description,
      url: pageUrl,
      author: {
        "@type": "Person",
        name: authorName,
      },
    },
    buildOrganizationSchema(),
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        {
          "@type": "ListItem",
          position: 2,
          name: "Insights",
          item: absoluteUrl(INSIGHTS_HUB_PATH),
        },
        { "@type": "ListItem", position: 3, name: title, item: pageUrl },
      ],
    },
  ];
}
