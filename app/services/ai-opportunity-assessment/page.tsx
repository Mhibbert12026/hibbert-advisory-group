import { ServicePage } from "@/app/components/service-page";
import { aiOpportunityAssessment } from "@/lib/service-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: aiOpportunityAssessment.metaTitle,
  description: aiOpportunityAssessment.metaDescription,
  path: aiOpportunityAssessment.path,
});

export default function AiOpportunityAssessmentPage() {
  return <ServicePage content={aiOpportunityAssessment} />;
}
