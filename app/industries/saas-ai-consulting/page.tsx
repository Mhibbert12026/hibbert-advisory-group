import { SeoLandingPage } from "@/app/components/seo-landing-page";
import { saasAiConsulting } from "@/lib/industry-pages-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: saasAiConsulting.metaTitle,
  description: saasAiConsulting.metaDescription,
  path: saasAiConsulting.path,
});

export default function SaasAiConsultingPage() {
  return <SeoLandingPage content={saasAiConsulting} />;
}
