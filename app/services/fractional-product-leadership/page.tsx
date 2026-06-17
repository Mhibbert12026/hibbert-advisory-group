import { ServicePage } from "@/app/components/service-page";
import { fractionalProductLeadership } from "@/lib/service-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: fractionalProductLeadership.metaTitle,
  description: fractionalProductLeadership.metaDescription,
  path: fractionalProductLeadership.path,
});

export default function FractionalProductLeadershipPage() {
  return <ServicePage content={fractionalProductLeadership} />;
}
