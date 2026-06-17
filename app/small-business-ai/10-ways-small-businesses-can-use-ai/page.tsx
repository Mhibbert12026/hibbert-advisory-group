import { TenWaysAiPage } from "@/app/components/ten-ways-ai-page";
import { tenWaysContent } from "@/lib/small-business-ai-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: tenWaysContent.metaTitle,
  description: tenWaysContent.metaDescription,
  path: tenWaysContent.path,
});

export default function TenWaysPage() {
  return <TenWaysAiPage />;
}
