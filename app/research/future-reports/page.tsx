import { FutureReportsPage } from "@/app/components/research/future-reports-page";
import { FUTURE_REPORTS_META, FUTURE_REPORTS_PATH } from "@/lib/research/future-reports-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: FUTURE_REPORTS_META.metaTitle,
  description: FUTURE_REPORTS_META.metaDescription,
  path: FUTURE_REPORTS_PATH,
  ogImagePath: FUTURE_REPORTS_META.ogImagePath,
});

export default function FutureReportsRoute() {
  return <FutureReportsPage />;
}
