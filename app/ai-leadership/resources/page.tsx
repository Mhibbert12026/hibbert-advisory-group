import { ResourcesHubPage } from "@/app/components/ai-leadership/resources-hub-page";
import { RESOURCES_HUB_PATH } from "@/lib/ai-leadership";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "AI Leadership Resources | Hibbert Advisory Group",
  description:
    "Executive frameworks, checklists, and templates for AI strategy, governance, adoption, and transformation leadership teams.",
  path: RESOURCES_HUB_PATH,
});

export default function ResourcesRoutePage() {
  return <ResourcesHubPage />;
}
