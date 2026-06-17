import { SeoLandingPage } from "@/app/components/seo-landing-page";
import { educationAi } from "@/lib/industry-pages-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: educationAi.metaTitle,
  description: educationAi.metaDescription,
  path: educationAi.path,
});

export default function EducationAiPage() {
  return <SeoLandingPage content={educationAi} />;
}
