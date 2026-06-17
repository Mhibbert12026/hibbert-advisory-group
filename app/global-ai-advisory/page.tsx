import { SeoLandingPage } from "@/app/components/seo-landing-page";
import { globalAiAdvisory } from "@/lib/global-advisory-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: globalAiAdvisory.metaTitle,
  description: globalAiAdvisory.metaDescription,
  path: globalAiAdvisory.path,
});

export default function GlobalAiAdvisoryPage() {
  return <SeoLandingPage content={globalAiAdvisory} />;
}
