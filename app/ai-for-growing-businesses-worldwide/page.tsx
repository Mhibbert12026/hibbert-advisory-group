import { SeoLandingPage } from "@/app/components/seo-landing-page";
import { aiGrowingBusinessesWorldwide } from "@/lib/global-advisory-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: aiGrowingBusinessesWorldwide.metaTitle,
  description: aiGrowingBusinessesWorldwide.metaDescription,
  path: aiGrowingBusinessesWorldwide.path,
});

export default function AiForGrowingBusinessesWorldwidePage() {
  return <SeoLandingPage content={aiGrowingBusinessesWorldwide} />;
}
