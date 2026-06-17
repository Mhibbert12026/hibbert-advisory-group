import { InsightArticlePage } from "@/app/components/insights/insight-article-page";
import { ARTICLE_META, ARTICLE_PATH } from "@/lib/insights/ai-differentiator-content";
import { createArticleMetadata } from "@/lib/seo";

export const metadata = createArticleMetadata({
  title: ARTICLE_META.metaTitle,
  description: ARTICLE_META.metaDescription,
  path: ARTICLE_PATH,
  ogImagePath: ARTICLE_META.ogImagePath,
  publishedTime: ARTICLE_META.publishDate,
  authorName: ARTICLE_META.author.name,
  section: ARTICLE_META.category,
});

export default function AiDifferentiatorInsightPage() {
  return <InsightArticlePage />;
}
