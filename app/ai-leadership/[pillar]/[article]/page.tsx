import { notFound } from "next/navigation";
import { ArticlePage } from "@/app/components/ai-leadership/article-page";
import { ARTICLES, getArticle } from "@/lib/ai-leadership";
import { createPageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ pillar: string; article: string }>;
};

export function generateStaticParams() {
  return ARTICLES.map((article) => ({
    pillar: article.pillarSlug,
    article: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { pillar, article: articleSlug } = await params;
  const article = getArticle(pillar, articleSlug);
  if (!article) return {};

  return createPageMetadata({
    title: article.metaTitle,
    description: article.metaDescription,
    path: `/ai-leadership/${pillar}/${articleSlug}`,
  });
}

export default async function ArticleRoutePage({ params }: PageProps) {
  const { pillar, article: articleSlug } = await params;
  const article = getArticle(pillar, articleSlug);
  if (!article) notFound();

  return <ArticlePage article={article} />;
}
