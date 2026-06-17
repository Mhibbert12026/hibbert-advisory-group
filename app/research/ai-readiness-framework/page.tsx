import { AiReadinessFrameworkPage } from "@/app/components/research/ai-readiness-framework-page";
import {
  AI_READINESS_FRAMEWORK_META,
  AI_READINESS_FRAMEWORK_PATH,
} from "@/lib/research/ai-readiness-framework-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: AI_READINESS_FRAMEWORK_META.metaTitle,
  description: AI_READINESS_FRAMEWORK_META.metaDescription,
  path: AI_READINESS_FRAMEWORK_PATH,
  ogImagePath: AI_READINESS_FRAMEWORK_META.ogImagePath,
});

export default function AiReadinessFrameworkRoute() {
  return <AiReadinessFrameworkPage />;
}
