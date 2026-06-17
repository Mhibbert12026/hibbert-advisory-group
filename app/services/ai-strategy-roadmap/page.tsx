import { ServicePage } from "@/app/components/service-page";
import { aiStrategyRoadmap } from "@/lib/service-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: aiStrategyRoadmap.metaTitle,
  description: aiStrategyRoadmap.metaDescription,
  path: aiStrategyRoadmap.path,
});

export default function AiStrategyRoadmapPage() {
  return <ServicePage content={aiStrategyRoadmap} />;
}
