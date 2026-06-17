import Link from "next/link";
import { JsonLd } from "@/app/components/json-ld";
import { LeadCaptureCta } from "@/app/components/ai-leadership/lead-capture-cta";
import { PageShell } from "@/app/components/page-shell";
import { RESOURCES, RESOURCES_HUB_PATH } from "@/lib/ai-leadership";
import { absoluteUrl } from "@/lib/site-config";

export function ResourcesHubPage() {
  const pageUrl = absoluteUrl(RESOURCES_HUB_PATH);

  return (
    <PageShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "AI Leadership Resources",
          description:
            "Executive frameworks, checklists, and templates for AI strategy, governance, adoption, and transformation.",
          url: pageUrl,
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
              <li className="text-slate-300">Resources</li>
            </ol>
          </nav>
          <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
            Downloadable Resources
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Executive AI Leadership Resources
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            Frameworks, checklists, and templates leadership teams use to assess
            opportunities, establish governance, and plan AI initiatives. Request
            resources through our consultation intake—we will follow up with
            downloads and scheduling options.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <ul className="grid gap-6 sm:grid-cols-2">
            {RESOURCES.map((resource) => (
              <li key={resource.slug}>
                <Link
                  href={resource.path}
                  className="group block h-full rounded-2xl border border-amber-500/20 bg-amber-500/5 p-7 transition-colors hover:border-amber-500/35"
                >
                  <p className="text-xs font-medium tracking-wider text-amber-400/90 uppercase">
                    {resource.resourceType}
                  </p>
                  <h2 className="mt-3 text-xl font-semibold text-white group-hover:text-amber-200/90 transition-colors">
                    {resource.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {resource.description}
                  </p>
                  <p className="mt-4 text-xs text-slate-500">
                    For: {resource.audience}
                  </p>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-16">
            <LeadCaptureCta
              headline="Request resources and a consultation"
              body="Complete the intake form to receive downloadable resources and discuss how these frameworks apply to your organization's AI priorities."
              primaryLabel="Request Resources & Consultation"
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
