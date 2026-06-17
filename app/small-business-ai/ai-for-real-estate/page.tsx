import { SeoLandingPage } from "@/app/components/seo-landing-page";
import { realEstateContent } from "@/lib/small-business-ai-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: realEstateContent.metaTitle,
  description: realEstateContent.metaDescription,
  path: realEstateContent.path,
});

export default function Page() {
  return <SeoLandingPage content={realEstateContent} />;
}
