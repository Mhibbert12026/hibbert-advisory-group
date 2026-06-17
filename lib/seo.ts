import type { Metadata } from "next";
import { absoluteUrl } from "./site-config";

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  ogImagePath?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  ogImagePath = "/hibbert-logo.png",
}: PageSeoInput): Metadata {
  const canonical = absoluteUrl(path);
  const ogImage = absoluteUrl(ogImagePath);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      siteName: "Hibbert Advisory Group",
      images: [
        {
          url: ogImage,
          alt: "Hibbert Advisory Group",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
