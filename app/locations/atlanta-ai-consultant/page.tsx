import { SeoLandingPage } from "@/app/components/seo-landing-page";
import { atlantaAiConsultant } from "@/lib/location-pages-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: atlantaAiConsultant.metaTitle,
  description: atlantaAiConsultant.metaDescription,
  path: atlantaAiConsultant.path,
});

export default function AtlantaAiConsultantPage() {
  return <SeoLandingPage content={atlantaAiConsultant} />;
}
