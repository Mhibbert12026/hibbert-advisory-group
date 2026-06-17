import { SeoLandingPage } from "@/app/components/seo-landing-page";
import { healthcareAiConsulting } from "@/lib/industry-pages-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: healthcareAiConsulting.metaTitle,
  description: healthcareAiConsulting.metaDescription,
  path: healthcareAiConsulting.path,
});

export default function HealthcareAiConsultingPage() {
  return <SeoLandingPage content={healthcareAiConsulting} />;
}
