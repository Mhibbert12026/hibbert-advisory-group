import Link from "next/link";
import { InsightCard } from "@/app/components/insights/insight-card";
import { RevealOnScroll } from "@/app/components/reveal-on-scroll";
import type { InsightItem } from "@/lib/insights";

export function InsightFeaturedGrid({ items }: { items: readonly InsightItem[] }) {
  const [lead, ...rest] = items;

  if (!lead) return null;

  return (
    <div className="grid gap-8 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <RevealOnScroll>
          <InsightCard item={lead} variant="featured" />
        </RevealOnScroll>
      </div>
      <div className="grid gap-8 lg:col-span-5">
        {rest.map((item, index) => (
          <RevealOnScroll key={item.slug} delayMs={index * 80}>
            <InsightCard item={item} variant="editorial" />
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
