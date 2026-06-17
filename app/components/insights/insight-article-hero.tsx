import Image from "next/image";
import Link from "next/link";
import { ARTICLE_META } from "@/lib/insights/ai-differentiator-content";
import { INSIGHT_IMAGES } from "@/lib/insights/ai-differentiator-images";
import { INSIGHTS_HUB_PATH } from "@/lib/insights";

export function InsightArticleHero() {
  const { author, category, publishDate, readTimeMinutes, title, subtitle } = ARTICLE_META;
  const hero = INSIGHT_IMAGES.hero;

  return (
    <header className="border-b border-white/10 bg-[#0a1424]">
      <div className="relative w-full overflow-hidden bg-[#060d18]">
        <Image
          src={hero.src}
          alt={hero.alt}
          width={hero.width}
          height={hero.height}
          priority
          className="h-auto w-full"
          sizes="100vw"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a1424] via-transparent to-transparent"
          aria-hidden
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
        <h1 className="sr-only">{title}</h1>
        <p className="sr-only">{subtitle}</p>

        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <li>
              <Link href="/" className="hover:text-amber-200/90 transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link
                href={INSIGHTS_HUB_PATH}
                className="hover:text-amber-200/90 transition-colors"
              >
                Insights
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-slate-400">{category}</li>
          </ol>
        </nav>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6">
          <Link href={author.path} className="group flex items-center gap-3">
            <div>
              <p className="text-sm font-medium text-white group-hover:text-amber-200/90 transition-colors">
                {author.name}
              </p>
              <p className="text-xs text-slate-500">{author.title}</p>
            </div>
          </Link>
          <span className="hidden h-8 w-px bg-white/10 sm:block" aria-hidden />
          <time dateTime={publishDate} className="text-xs text-slate-500">
            {new Date(publishDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span className="text-xs text-slate-500">{readTimeMinutes} min read</span>
          <span className="text-xs font-semibold tracking-[0.15em] text-amber-400/90 uppercase">
            Executive Insight
          </span>
        </div>
      </div>
    </header>
  );
}
