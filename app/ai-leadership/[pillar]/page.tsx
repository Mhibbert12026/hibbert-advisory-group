import { notFound } from "next/navigation";
import { PillarPage } from "@/app/components/ai-leadership/pillar-page";
import { PILLARS, getPillar } from "@/lib/ai-leadership";
import { createPageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ pillar: string }>;
};

export function generateStaticParams() {
  return PILLARS.map((pillar) => ({ pillar: pillar.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { pillar: pillarSlug } = await params;
  const pillar = getPillar(pillarSlug);
  if (!pillar) return {};

  return createPageMetadata({
    title: pillar.metaTitle,
    description: pillar.metaDescription,
    path: pillar.path,
  });
}

export default async function PillarRoutePage({ params }: PageProps) {
  const { pillar: pillarSlug } = await params;
  const pillar = getPillar(pillarSlug);
  if (!pillar) notFound();

  return <PillarPage pillar={pillar} />;
}
