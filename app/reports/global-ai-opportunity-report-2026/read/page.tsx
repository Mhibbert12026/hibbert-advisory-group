import { ReportReaderPage } from "@/app/components/global-ai-report/report-reader-page";
import { REPORT_META, REPORT_READ_PATH } from "@/lib/global-ai-opportunity-report";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: `Read: ${REPORT_META.title}`,
  description: REPORT_META.metaDescription,
  path: REPORT_READ_PATH,
  ogImagePath: REPORT_META.ogImagePath,
});

export default function GlobalAiOpportunityReportReadPage() {
  return <ReportReaderPage />;
}
