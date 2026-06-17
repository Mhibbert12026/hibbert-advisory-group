import { SeoLandingPage } from "@/app/components/seo-landing-page";
import { globalCapabilities } from "@/lib/global-advisory-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: globalCapabilities.metaTitle,
  description: globalCapabilities.metaDescription,
  path: globalCapabilities.path,
});

export default function GlobalCapabilitiesPage() {
  return <SeoLandingPage content={globalCapabilities} />;
}
