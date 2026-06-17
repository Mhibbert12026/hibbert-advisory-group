import { SeoLandingPage } from "@/app/components/seo-landing-page";
import { atlantaProductStrategyConsultant } from "@/lib/location-pages-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: atlantaProductStrategyConsultant.metaTitle,
  description: atlantaProductStrategyConsultant.metaDescription,
  path: atlantaProductStrategyConsultant.path,
});

export default function AtlantaProductStrategyConsultantPage() {
  return <SeoLandingPage content={atlantaProductStrategyConsultant} />;
}
