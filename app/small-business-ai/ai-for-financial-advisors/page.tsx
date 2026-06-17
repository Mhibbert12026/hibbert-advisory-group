import { SeoLandingPage } from "@/app/components/seo-landing-page";
import { financialAdvisorsContent } from "@/lib/small-business-ai-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: financialAdvisorsContent.metaTitle,
  description: financialAdvisorsContent.metaDescription,
  path: financialAdvisorsContent.path,
});

export default function Page() {
  return <SeoLandingPage content={financialAdvisorsContent} />;
}
