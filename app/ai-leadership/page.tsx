import { AiLeadershipHub } from "@/app/components/ai-leadership/hub-page";
import { AI_LEADERSHIP_META } from "@/lib/ai-leadership";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: AI_LEADERSHIP_META.metaTitle,
  description: AI_LEADERSHIP_META.metaDescription,
  path: "/ai-leadership",
});

export default function AiLeadershipPage() {
  return <AiLeadershipHub />;
}
