import { SeoLandingPage } from "@/app/components/seo-landing-page";
import { lawFirmsContent } from "@/lib/small-business-ai-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: lawFirmsContent.metaTitle,
  description: lawFirmsContent.metaDescription,
  path: lawFirmsContent.path,
});

export default function Page() {
  return <SeoLandingPage content={lawFirmsContent} />;
}
