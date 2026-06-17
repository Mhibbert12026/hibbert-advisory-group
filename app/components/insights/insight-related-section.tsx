import Link from "next/link";

export function InsightRelatedSection({
  items,
}: {
  items: readonly {
    title: string;
    description: string;
    path: string;
    available: boolean;
  }[];
}) {
  return (
    <section className="border-t border-white/10 py-16" aria-labelledby="related-heading">
      <h2 id="related-heading" className="text-2xl font-semibold text-white sm:text-3xl">
        Related Insights
      </h2>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.title}>
            {item.available ? (
              <Link
                href={item.path}
                className="group block h-full rounded-xl border border-white/8 bg-[#0f1c30]/60 p-5 transition-colors hover:border-amber-500/25"
              >
                <h3 className="text-base font-semibold text-white group-hover:text-amber-200/90 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400 line-clamp-2">{item.description}</p>
                <span className="mt-4 inline-block text-xs font-medium text-amber-200/70">
                  Read more →
                </span>
              </Link>
            ) : (
              <div className="h-full rounded-xl border border-white/5 bg-[#0a1424]/60 p-5 opacity-60">
                <h3 className="text-base font-semibold text-slate-400">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{item.description}</p>
                <span className="mt-4 inline-block text-xs text-slate-600">Coming soon</span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
