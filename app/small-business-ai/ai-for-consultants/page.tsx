import { SeoLandingPage } from "@/app/components/seo-landing-page";
import { consultantsContent } from "@/lib/small-business-ai-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: consultantsContent.metaTitle,
  description: consultantsContent.metaDescription,
  path: consultantsContent.path,
});

export default function Page() {
  return <SeoLandingPage content={consultantsContent} />;
}
