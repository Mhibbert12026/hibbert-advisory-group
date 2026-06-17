import { SeoLandingPage } from "@/app/components/seo-landing-page";
import { financialServicesAiConsulting } from "@/lib/industry-pages-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: financialServicesAiConsulting.metaTitle,
  description: financialServicesAiConsulting.metaDescription,
  path: financialServicesAiConsulting.path,
});

export default function FinancialServicesAiConsultingPage() {
  return <SeoLandingPage content={financialServicesAiConsulting} />;
}
