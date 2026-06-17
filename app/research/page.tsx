import { ResearchHubPage } from "@/app/components/research/research-hub-page";
import { RESEARCH_HUB_META, RESEARCH_HUB_PATH } from "@/lib/research";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: RESEARCH_HUB_META.metaTitle,
  description: RESEARCH_HUB_META.metaDescription,
  path: RESEARCH_HUB_PATH,
  ogImagePath: RESEARCH_HUB_META.ogImagePath,
});

export default function ResearchPage() {
  return <ResearchHubPage />;
}
