import { INSIGHT_CATEGORIES } from "@/lib/insights";

export function InsightCategoryNav() {
  return (
    <nav
      aria-label="Insight categories"
      className="sticky top-0 z-20 -mx-6 border-b border-white/8 bg-[#060d18]/95 px-6 backdrop-blur-md lg:-mx-8 lg:px-8"
    >
      <ul className="mx-auto flex max-w-6xl gap-2 overflow-x-auto py-4 scrollbar-none">
        {INSIGHT_CATEGORIES.map((category) => (
          <li key={category.id} className="shrink-0">
            <a
              href={`#${category.id}`}
              className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-400 transition-colors hover:border-amber-500/30 hover:bg-amber-500/10 hover:text-amber-200"
            >
              {category.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
