import { SeoLandingPage } from "@/app/components/seo-landing-page";
import { globalDigitalTransformation } from "@/lib/global-advisory-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: globalDigitalTransformation.metaTitle,
  description: globalDigitalTransformation.metaDescription,
  path: globalDigitalTransformation.path,
});

export default function GlobalDigitalTransformationPage() {
  return <SeoLandingPage content={globalDigitalTransformation} />;
}
