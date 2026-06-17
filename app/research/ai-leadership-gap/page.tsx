import { AiLeadershipGapPage } from "@/app/components/research/ai-leadership-gap-page";
import {
  AI_LEADERSHIP_GAP_META,
  AI_LEADERSHIP_GAP_PATH,
} from "@/lib/research/ai-leadership-gap-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: AI_LEADERSHIP_GAP_META.metaTitle,
  description: AI_LEADERSHIP_GAP_META.metaDescription,
  path: AI_LEADERSHIP_GAP_PATH,
  ogImagePath: AI_LEADERSHIP_GAP_META.ogImagePath,
});

export default function AiLeadershipGapRoute() {
  return <AiLeadershipGapPage />;
}
