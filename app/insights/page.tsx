import { InsightsHubPage } from "@/app/components/insights/insights-hub-page";
import { INSIGHTS_HUB_META, INSIGHTS_HUB_PATH } from "@/lib/insights";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: INSIGHTS_HUB_META.metaTitle,
  description: INSIGHTS_HUB_META.metaDescription,
  path: INSIGHTS_HUB_PATH,
  ogImagePath: INSIGHTS_HUB_META.ogImagePath,
});

export default function InsightsPage() {
  return <InsightsHubPage />;
}
