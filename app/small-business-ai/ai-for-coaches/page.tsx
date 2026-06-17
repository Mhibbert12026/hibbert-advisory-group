import { SeoLandingPage } from "@/app/components/seo-landing-page";
import { coachesContent } from "@/lib/small-business-ai-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: coachesContent.metaTitle,
  description: coachesContent.metaDescription,
  path: coachesContent.path,
});

export default function Page() {
  return <SeoLandingPage content={coachesContent} />;
}
