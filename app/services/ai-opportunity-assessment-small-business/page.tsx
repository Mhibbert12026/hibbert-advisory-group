import { ServicePage } from "@/app/components/service-page";
import { aiOpportunityAssessmentSmallBusiness } from "@/lib/service-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: aiOpportunityAssessmentSmallBusiness.metaTitle,
  description: aiOpportunityAssessmentSmallBusiness.metaDescription,
  path: aiOpportunityAssessmentSmallBusiness.path,
});

export default function AiOpportunityAssessmentSmallBusinessPage() {
  return <ServicePage content={aiOpportunityAssessmentSmallBusiness} />;
}
