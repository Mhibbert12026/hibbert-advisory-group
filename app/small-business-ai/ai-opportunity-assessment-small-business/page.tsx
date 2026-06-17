import { SeoLandingPage } from "@/app/components/seo-landing-page";
import { assessmentGuideContent } from "@/lib/small-business-ai-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: assessmentGuideContent.metaTitle,
  description: assessmentGuideContent.metaDescription,
  path: assessmentGuideContent.path,
});

export default function AssessmentGuidePage() {
  return <SeoLandingPage content={assessmentGuideContent} />;
}
