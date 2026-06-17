import { notFound } from "next/navigation";
import { AuthorPage } from "@/app/components/ai-leadership/author-page";
import { ALL_AUTHORS, getAuthor } from "@/lib/ai-leadership";
import { createPageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return ALL_AUTHORS.map((author) => ({ slug: author.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) return {};

  return createPageMetadata({
    title: `${author.name} | AI Leadership Center`,
    description: author.bio,
    path: author.path,
  });
}

export default async function AuthorRoutePage({ params }: PageProps) {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) notFound();

  return <AuthorPage author={author} />;
}
