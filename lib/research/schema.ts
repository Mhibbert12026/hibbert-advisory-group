import { absoluteUrl } from "../site-config";
import { RESEARCH_HUB_META, RESEARCH_HUB_PATH, RESEARCH_ITEMS } from "./index";

export function buildResearchOrganizationSchema() {
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
      "Executive advisory and original research on AI strategy, product leadership, and digital transformation.",
  };
}

export function buildResearchHubSchema() {
  const pageUrl = absoluteUrl(RESEARCH_HUB_PATH);

  return [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: RESEARCH_HUB_META.pageTitle,
      description: RESEARCH_HUB_META.metaDescription,
      url: pageUrl,
      publisher: {
        "@type": "Organization",
        name: "Hibbert Advisory Group",
        url: absoluteUrl("/"),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ResearchProject",
      name: RESEARCH_HUB_META.pageTitle,
      description: RESEARCH_HUB_META.subtitle,
      url: pageUrl,
      provider: {
        "@type": "Organization",
        name: "Hibbert Advisory Group",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Hibbert Advisory Group Research Library",
      itemListElement: RESEARCH_ITEMS.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.title,
        url: absoluteUrl(item.path),
      })),
    },
    buildResearchOrganizationSchema(),
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Research", item: pageUrl },
      ],
    },
  ];
}

type ResearchPublicationSchemaInput = {
  title: string;
  description: string;
  path: string;
  imagePath?: string;
  publishDate?: string;
  authorName?: string;
  type?: "Report" | "Article" | "CreativeWork" | "CollectionPage";
};

export function buildResearchPublicationSchema({
  title,
  description,
  path,
  imagePath,
  publishDate,
  authorName = "Michael Hibbert",
  type = "Article",
}: ResearchPublicationSchemaInput) {
  const pageUrl = absoluteUrl(path);

  return [
    {
      "@context": "https://schema.org",
      "@type": type,
      name: title,
      headline: title,
      description,
      url: pageUrl,
      ...(imagePath && { image: absoluteUrl(imagePath) }),
      ...(publishDate && { datePublished: publishDate }),
      author: {
        "@type": "Person",
        name: authorName,
        url: absoluteUrl("/about/michael-hibbert"),
      },
      publisher: {
        "@type": "Organization",
        name: "Hibbert Advisory Group",
        url: absoluteUrl("/"),
      },
      isPartOf: {
        "@type": "CollectionPage",
        name: RESEARCH_HUB_META.pageTitle,
        url: absoluteUrl(RESEARCH_HUB_PATH),
      },
    },
    buildResearchOrganizationSchema(),
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        {
          "@type": "ListItem",
          position: 2,
          name: "Research",
          item: absoluteUrl(RESEARCH_HUB_PATH),
        },
        { "@type": "ListItem", position: 3, name: title, item: pageUrl },
      ],
    },
  ];
}
