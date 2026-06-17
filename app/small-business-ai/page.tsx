import { SmallBusinessAiHub } from "@/app/components/small-business-ai-hub";
import { hubMeta, SMALL_BUSINESS_HUB_PATH } from "@/lib/small-business-ai-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: hubMeta.metaTitle,
  description: hubMeta.metaDescription,
  path: SMALL_BUSINESS_HUB_PATH,
});

export default function SmallBusinessAiPage() {
  return <SmallBusinessAiHub />;
}
