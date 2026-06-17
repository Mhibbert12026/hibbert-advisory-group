import Link from "next/link";
import { JsonLd } from "@/app/components/json-ld";
import { ResourceLeadCapture } from "@/app/components/ai-leadership/lead-capture-cta";
import { PageShell } from "@/app/components/page-shell";
import type { LeadershipResource } from "@/lib/ai-leadership";
import { absoluteUrl } from "@/lib/site-config";

export function ResourceDetailPage({ resource }: { resource: LeadershipResource }) {
  const pageUrl = absoluteUrl(resource.path);

  return (
    <PageShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "DigitalDocument",
          name: resource.title,
          description: resource.metaDescription,
          url: pageUrl,
          audience: {
            "@type": "Audience",
            audienceType: resource.audience,
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
            {
              "@type": "ListItem",
              position: 3,
              name: "Resources",
              item: absoluteUrl("/ai-leadership/resources"),
            },
            { "@type": "ListItem", position: 4, name: resource.title, item: pageUrl },
          ],
        }}
      />

      <section className="px-6 py-16 lg:px-8 lg:py-20">
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
              <li aria-hidden>/</li>
              <li>
                <Link
                  href="/ai-leadership/resources"
                  className="hover:text-amber-200/90 transition-colors"
                >
                  Resources
                </Link>
              </li>
            </ol>
          </nav>

          <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
            {resource.resourceType}
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {resource.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            {resource.description}
          </p>
          <p className="mt-4 text-sm text-slate-500">For: {resource.audience}</p>

          <div className="mt-10 rounded-xl border border-white/8 bg-[#0f1c30]/80 p-6">
            <h2 className="text-lg font-semibold text-white">What&apos;s included</h2>
            <ul className="mt-4 space-y-2">
              {resource.highlights.map((item) => (
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

          <div className="mt-12">
            <ResourceLeadCapture resourceTitle={resource.title} />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
