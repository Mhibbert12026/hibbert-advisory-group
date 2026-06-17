import Link from "next/link";

const internalLinkGroups = [
  {
    title: "Research",
    links: [
      { path: "/research", label: "Research & Frameworks" },
      { path: "/research/ai-readiness-framework", label: "AI Readiness Framework" },
      { path: "/research/ai-leadership-gap", label: "The AI Leadership Gap" },
      { path: "/research/future-reports", label: "Future Reports" },
    ],
  },
  {
    title: "Insights",
    links: [
      { path: "/insights", label: "Insights Hub" },
      {
        path: "/insights/ai-is-not-the-differentiator-experience-is",
        label: "AI Is Not the Differentiator. Experience Is.",
      },
      { path: "/insights/recent-engagements-impact", label: "Recent Engagements & Impact" },
    ],
  },
  {
    title: "Research",
    links: [
      { path: "/reports/global-ai-opportunity-report-2026", label: "Global AI Opportunity Report 2026" },
      { path: "/ai-leadership", label: "AI Leadership Center" },
      { path: "/ai-leadership/resources", label: "Executive Resources" },
    ],
  },
  {
    title: "Services",
    links: [
      { path: "/services/ai-opportunity-assessment", label: "AI Opportunity Assessment" },
      { path: "/services/ai-strategy-roadmap", label: "AI Strategy & Roadmap" },
      { path: "/services/fractional-product-leadership", label: "Fractional Product Leadership" },
      { path: "/services/digital-transformation", label: "Digital Transformation Advisory" },
    ],
  },
  {
    title: "Industries",
    links: [
      { path: "/industries/financial-services-ai-consulting", label: "Financial Services" },
      { path: "/industries/healthcare-ai-consulting", label: "Healthcare" },
      { path: "/industries/saas-ai-consulting", label: "SaaS & Technology" },
      { path: "/industries/professional-services-ai", label: "Professional Services" },
    ],
  },
] as const;

export function InsightInternalLinks() {
  return (
    <section className="border-t border-white/10 pt-16" aria-labelledby="explore-heading">
      <h2 id="explore-heading" className="text-2xl font-semibold text-white sm:text-3xl">
        Explore the platform
      </h2>
      <p className="mt-3 max-w-2xl text-sm text-slate-400">
        Connect insights to research, advisory services, and industry-specific guidance.
      </p>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {internalLinkGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-xs font-semibold tracking-[0.15em] text-amber-400/80 uppercase">
              {group.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {group.links.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-slate-400 hover:text-amber-200/90 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
