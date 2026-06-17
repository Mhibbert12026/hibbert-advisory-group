import { SeoLandingPage } from "@/app/components/seo-landing-page";
import { nonprofitAiConsulting } from "@/lib/industry-pages-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: nonprofitAiConsulting.metaTitle,
  description: nonprofitAiConsulting.metaDescription,
  path: nonprofitAiConsulting.path,
});

export default function NonprofitAiConsultingPage() {
  return <SeoLandingPage content={nonprofitAiConsulting} />;
}
