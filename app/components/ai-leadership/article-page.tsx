import Link from "next/link";
import { JsonLd } from "@/app/components/json-ld";
import { LeadCaptureCta } from "@/app/components/ai-leadership/lead-capture-cta";
import { RelatedContent } from "@/app/components/ai-leadership/related-content";
import { PageShell } from "@/app/components/page-shell";
import {
  getArticlePath,
  getAuthor,
  type LeadershipArticle,
} from "@/lib/ai-leadership";
import { getPillar } from "@/lib/ai-leadership/pillars";
import { absoluteUrl } from "@/lib/site-config";

export function ArticlePage({ article }: { article: LeadershipArticle }) {
  const pillar = getPillar(article.pillarSlug);
  const author = getAuthor(article.authorSlug);
  const path = getArticlePath(article);
  const pageUrl = absoluteUrl(path);

  return (
    <PageShell>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.metaDescription,
            url: pageUrl,
            datePublished: article.publishedAt,
            author: author
              ? {
                  "@type": "Person",
                  name: author.name,
                  url: absoluteUrl(author.path),
                }
              : undefined,
            publisher: {
              "@type": "Organization",
              name: "Hibbert Advisory Group",
              url: absoluteUrl("/"),
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
              {
                "@type": "ListItem",
                position: 2,
                name: "AI Leadership Center",
                item: absoluteUrl("/ai-leadership"),
              },
              ...(pillar
                ? [
                    {
                      "@type": "ListItem",
                      position: 3,
                      name: pillar.title,
                      item: absoluteUrl(pillar.path),
                    },
                  ]
                : []),
              {
                "@type": "ListItem",
                position: pillar ? 4 : 3,
                name: article.title,
                item: pageUrl,
              },
            ],
          },
        ]}
      />

      <article className="px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <li>
                <Link href="/" className="hover:text-amber-200/90 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link
                  href="/ai-leadership"
                  className="hover:text-amber-200/90 transition-colors"
                >
                  AI Leadership Center
                </Link>
              </li>
              {pillar && (
                <>
                  <li aria-hidden>/</li>
                  <li>
                    <Link
                      href={pillar.path}
                      className="hover:text-amber-200/90 transition-colors"
                    >
                      {pillar.title}
                    </Link>
                  </li>
                </>
              )}
            </ol>
          </nav>

          {pillar && (
            <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
              {pillar.title}
            </p>
          )}
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {article.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500">
            {author && (
              <Link
                href={author.path}
                className="text-amber-200/80 hover:text-amber-200 transition-colors"
              >
                {author.name}
              </Link>
            )}
            <span>{article.readTimeMinutes} min read</span>
            <time dateTime={article.publishedAt}>
              {new Date(article.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>

          <p className="mt-8 text-lg leading-relaxed text-slate-300">
            {article.introduction}
          </p>

          {article.sections.map((section) => (
            <section key={section.heading} className="mt-10">
              <h2 className="text-xl font-semibold text-white">{section.heading}</h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="text-base leading-relaxed text-slate-400">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}

          <div className="mt-12 rounded-xl border border-amber-500/20 bg-amber-500/5 p-6">
            <h2 className="text-lg font-semibold text-white">Key Takeaways</h2>
            <ul className="mt-4 space-y-2">
              {article.keyTakeaways.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-slate-300"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {article.relatedServicePaths && article.relatedServicePaths.length > 0 && (
            <div className="mt-10">
              <p className="text-sm font-medium tracking-wider text-slate-500 uppercase">
                Related advisory
              </p>
              <ul className="mt-3 flex flex-wrap gap-3">
                {article.relatedServicePaths.map((servicePath) => (
                  <li key={servicePath}>
                    <Link
                      href={servicePath}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 hover:border-amber-500/30 hover:text-amber-200/90 transition-colors"
                    >
                      {servicePath.split("/").pop()?.replace(/-/g, " ")}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <RelatedContent article={article} />
          <div className="mt-12">
            <LeadCaptureCta />
          </div>
        </div>
      </article>
    </PageShell>
  );
}
