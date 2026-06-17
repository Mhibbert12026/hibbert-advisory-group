import { ReportLandingPage } from "@/app/components/global-ai-report/report-landing-page";
import { REPORT_BASE_PATH, REPORT_META } from "@/lib/global-ai-opportunity-report";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: REPORT_META.metaTitle,
  description: REPORT_META.metaDescription,
  path: REPORT_BASE_PATH,
  ogImagePath: REPORT_META.ogImagePath,
});

export default function GlobalAiOpportunityReportPage() {
  return <ReportLandingPage />;
}
