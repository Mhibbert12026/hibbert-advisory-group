import { SeoLandingPage } from "@/app/components/seo-landing-page";
import { insuranceAgenciesContent } from "@/lib/small-business-ai-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: insuranceAgenciesContent.metaTitle,
  description: insuranceAgenciesContent.metaDescription,
  path: insuranceAgenciesContent.path,
});

export default function Page() {
  return <SeoLandingPage content={insuranceAgenciesContent} />;
}
