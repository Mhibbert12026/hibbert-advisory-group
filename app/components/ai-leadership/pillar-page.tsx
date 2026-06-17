import Link from "next/link";
import { JsonLd } from "@/app/components/json-ld";
import { LeadCaptureCta } from "@/app/components/ai-leadership/lead-capture-cta";
import { PageShell } from "@/app/components/page-shell";
import { RevealOnScroll } from "@/app/components/reveal-on-scroll";
import {
  getArticlePath,
  getArticlesByPillar,
  type LeadershipPillar,
} from "@/lib/ai-leadership";
import { absoluteUrl } from "@/lib/site-config";

export function PillarPage({ pillar }: { pillar: LeadershipPillar }) {
  const articles = getArticlesByPillar(pillar.slug);
  const pageUrl = absoluteUrl(pillar.path);

  return (
    <PageShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: pillar.title,
          description: pillar.metaDescription,
          url: pageUrl,
          isPartOf: {
            "@type": "WebSite",
            name: "Hibbert Advisory Group AI Leadership Center",
            url: absoluteUrl("/ai-leadership"),
          },
        }}
      />
      <JsonLd
        data={{
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
            { "@type": "ListItem", position: 3, name: pillar.title, item: pageUrl },
          ],
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
              <li className="text-slate-300">{pillar.title}</li>
            </ol>
          </nav>
          <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
            Pillar
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {pillar.headline}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            {pillar.subheadline}
          </p>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl space-y-4">
            {pillar.introduction.map((p) => (
              <p key={p.slice(0, 48)} className="text-base leading-relaxed text-slate-300">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {pillar.topics.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-400"
              >
                {topic}
              </span>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-white">Articles in this pillar</h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2">
              {articles.map((item, index) => (
                <li key={item.slug}>
                  <RevealOnScroll delayMs={index * 50}>
                    <Link
                      href={getArticlePath(item)}
                      className="group block h-full rounded-2xl border border-white/8 bg-[#0f1c30]/80 p-6 transition-colors hover:border-amber-500/25"
                    >
                      <h3 className="text-lg font-semibold text-white group-hover:text-amber-200/90 transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-400 line-clamp-3">
                        {item.excerpt}
                      </p>
                      <span className="mt-4 inline-block text-xs text-slate-500">
                        {item.readTimeMinutes} min read
                      </span>
                    </Link>
                  </RevealOnScroll>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16">
            <LeadCaptureCta />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
