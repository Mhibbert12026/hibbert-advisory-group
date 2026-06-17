import { SeoLandingPage } from "@/app/components/seo-landing-page";
import { professionalServicesAi } from "@/lib/industry-pages-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: professionalServicesAi.metaTitle,
  description: professionalServicesAi.metaDescription,
  path: professionalServicesAi.path,
});

export default function ProfessionalServicesAiPage() {
  return <SeoLandingPage content={professionalServicesAi} />;
}
