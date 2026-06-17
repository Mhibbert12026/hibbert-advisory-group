import Link from "next/link";
import {
  getArticlePath,
  getRelatedArticles,
  type LeadershipArticle,
  type LeadershipPillar,
} from "@/lib/ai-leadership";
import { getPillar } from "@/lib/ai-leadership/pillars";

export function RelatedContent({
  article,
  pillars,
}: {
  article?: LeadershipArticle;
  pillars?: readonly LeadershipPillar[];
}) {
  const relatedArticles = article ? getRelatedArticles(article, 4) : [];

  return (
    <section className="border-t border-white/10 pt-12">
      <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
        Continue reading
      </p>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white">
        Related Content
      </h2>

      {relatedArticles.length > 0 && (
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {relatedArticles.map((item) => {
            const pillar = getPillar(item.pillarSlug);
            return (
              <li key={item.slug}>
                <Link
                  href={getArticlePath(item)}
                  className="group block h-full rounded-xl border border-white/8 bg-[#0f1c30]/80 p-5 transition-colors hover:border-amber-500/25"
                >
                  {pillar && (
                    <p className="text-xs font-medium tracking-wider text-amber-400/80 uppercase">
                      {pillar.title}
                    </p>
                  )}
                  <h3 className="mt-2 text-base font-semibold text-white group-hover:text-amber-200/90 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400 line-clamp-2">
                    {item.excerpt}
                  </p>
                  <span className="mt-3 inline-block text-xs text-slate-500">
                    {item.readTimeMinutes} min read
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}

      {pillars && pillars.length > 0 && (
        <ul className="mt-8 flex flex-wrap gap-3">
          {pillars.map((pillar) => (
            <li key={pillar.slug}>
              <Link
                href={pillar.path}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 hover:border-amber-500/30 hover:text-amber-200/90 transition-colors"
              >
                {pillar.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
