import Link from "next/link";
import { JsonLd } from "@/app/components/json-ld";
import { LeadCaptureCta } from "@/app/components/ai-leadership/lead-capture-cta";
import { PageShell } from "@/app/components/page-shell";
import {
  ARTICLES,
  getArticlePath,
  getPillar,
  type LeadershipAuthor,
} from "@/lib/ai-leadership";
import { absoluteUrl } from "@/lib/site-config";

export function AuthorPage({ author }: { author: LeadershipAuthor }) {
  const articles = ARTICLES.filter((a) => a.authorSlug === author.slug);
  const pageUrl = absoluteUrl(author.path);

  return (
    <PageShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          name: author.name,
          description: author.bio,
          url: pageUrl,
          mainEntity: {
            "@type": "Person",
            name: author.name,
            jobTitle: author.title,
            description: author.bio,
            url: pageUrl,
          },
        }}
      />

      <section className="border-b border-white/5 px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
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
              <li aria-hidden>/</li>
              <li className="text-slate-300">{author.name}</li>
            </ol>
          </nav>
          <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
            Author
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {author.name}
          </h1>
          <p className="mt-3 text-lg text-amber-200/80">{author.title}</p>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            {author.bio}
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {author.credentials.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 rounded-xl border border-white/8 bg-[#0f1c30]/80 px-4 py-3 text-sm text-slate-300"
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
      </section>

      <section className="px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold text-white">
            Articles by {author.name}
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => {
              const pillar = getPillar(article.pillarSlug);
              return (
                <li key={article.slug}>
                  <Link
                    href={getArticlePath(article)}
                    className="group block h-full rounded-xl border border-white/8 bg-[#0f1c30]/80 p-5 transition-colors hover:border-amber-500/25"
                  >
                    {pillar && (
                      <p className="text-xs font-medium tracking-wider text-amber-400/80 uppercase">
                        {pillar.title}
                      </p>
                    )}
                    <h3 className="mt-2 text-base font-semibold text-white group-hover:text-amber-200/90 transition-colors">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-400 line-clamp-2">
                      {article.excerpt}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-16">
            <LeadCaptureCta />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
