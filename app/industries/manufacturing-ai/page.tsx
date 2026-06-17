import { SeoLandingPage } from "@/app/components/seo-landing-page";
import { manufacturingAi } from "@/lib/industry-pages-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: manufacturingAi.metaTitle,
  description: manufacturingAi.metaDescription,
  path: manufacturingAi.path,
});

export default function ManufacturingAiPage() {
  return <SeoLandingPage content={manufacturingAi} />;
}
