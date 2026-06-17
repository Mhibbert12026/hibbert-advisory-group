import { SeoLandingPage } from "@/app/components/seo-landing-page";
import { atlantaDigitalTransformationConsultant } from "@/lib/location-pages-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: atlantaDigitalTransformationConsultant.metaTitle,
  description: atlantaDigitalTransformationConsultant.metaDescription,
  path: atlantaDigitalTransformationConsultant.path,
});

export default function AtlantaDigitalTransformationConsultantPage() {
  return <SeoLandingPage content={atlantaDigitalTransformationConsultant} />;
}
