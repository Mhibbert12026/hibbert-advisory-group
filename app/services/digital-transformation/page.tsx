import { ServicePage } from "@/app/components/service-page";
import { digitalTransformation } from "@/lib/service-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: digitalTransformation.metaTitle,
  description: digitalTransformation.metaDescription,
  path: digitalTransformation.path,
});

export default function DigitalTransformationPage() {
  return <ServicePage content={digitalTransformation} />;
}
