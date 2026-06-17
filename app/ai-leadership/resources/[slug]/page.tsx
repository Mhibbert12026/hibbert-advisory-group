import { notFound } from "next/navigation";
import { ResourceDetailPage } from "@/app/components/ai-leadership/resource-detail-page";
import { RESOURCES, getResource } from "@/lib/ai-leadership";
import { createPageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return RESOURCES.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) return {};

  return createPageMetadata({
    title: `${resource.title} | AI Leadership Center`,
    description: resource.metaDescription,
    path: resource.path,
  });
}

export default async function ResourceRoutePage({ params }: PageProps) {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) notFound();

  return <ResourceDetailPage resource={resource} />;
}
