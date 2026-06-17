import { SeoLandingPage } from "@/app/components/seo-landing-page";
import { internationalProductStrategy } from "@/lib/global-advisory-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: internationalProductStrategy.metaTitle,
  description: internationalProductStrategy.metaDescription,
  path: internationalProductStrategy.path,
});

export default function InternationalProductStrategyPage() {
  return <SeoLandingPage content={internationalProductStrategy} />;
}
