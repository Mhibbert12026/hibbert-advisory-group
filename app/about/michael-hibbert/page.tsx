import Link from "next/link";
import { ConsultationCTA } from "@/app/components/consultation-cta";
import { EnterpriseExperienceShowcase } from "@/app/components/enterprise-experience-showcase";
import { JsonLd } from "@/app/components/json-ld";
import { PageShell } from "@/app/components/page-shell";
import { SelectedExperienceCaseStudies } from "@/app/components/selected-experience-case-studies";
import { DISCOVERY_INTAKE_PATH, absoluteUrl } from "@/lib/site-config";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Michael Hibbert",
  description:
    "Executive profile of Michael Hibbert: product leadership, AI strategy, digital transformation, and advisory experience across media, technology, and growth-stage organizations.",
  path: "/about/michael-hibbert",
});

const timeline = [
  {
    period: "Media & Publishing Leadership",
    role: "Product strategy and mobile portfolio growth",
    detail:
      "Led product initiatives supporting audience engagement, mobile portfolio expansion, and analytics-driven optimization for large-scale publishing organizations including The New York Times.",
  },
  {
    period: "Streaming & Entertainment",
    role: "Platform and product leadership",
    detail:
      "Supported product and platform initiatives across streaming, content delivery, and digital audience experiences for organizations including Paramount Global and related media ecosystems.",
  },
  {
    period: "Radio & Digital Transformation",
    role: "Transformation and platform programs",
    detail:
      "Contributed to CBS Radio transformation programs and digital platform initiatives connecting product strategy with operational execution and audience growth.",
  },
  {
    period: "SaaS, AI & Advisory",
    role: "Founder & Principal Advisor",
    detail:
      "Through Hibbert Advisory Group, advises founders and leadership teams on product strategy, AI adoption, revenue growth, and fractional product leadership.",
  },
] as const;

const careerHighlights = [
  "15+ years leading product strategy, digital transformation, and growth initiatives",
  "Experience across media, technology, SaaS, healthcare, nonprofit, and startup environments",
  "Product portfolio expansion from single applications to multi-product ecosystems",
  "AI-enabled product strategy, workflow automation, and analytics-driven optimization",
  "Executive advisory for founders, CEOs, and leadership teams",
] as const;

const expertiseAreas = [
  "AI Strategy & Opportunity Assessment",
  "Product Leadership & Roadmapping",
  "Digital Transformation Advisory",
  "Audience Engagement & Platform Strategy",
  "Revenue Growth & Monetization",
  "Executive Stakeholder Alignment",
] as const;

const achievements = [
  "Supported audience engagement growth initiatives across major media and platform organizations",
  "Led product strategy supporting mobile portfolio expansion and customer experience improvement",
  "Advised leadership teams on AI adoption, prioritization, and executive-ready roadmaps",
  "Partnered with organizations navigating growth-stage scaling and operational complexity",
] as const;

export default function AboutMichaelHibbertPage() {
  const pageUrl = absoluteUrl("/about/michael-hibbert");

  return (
    <PageShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Michael Hibbert",
          jobTitle: "Founder & Principal Advisor",
          worksFor: {
            "@type": "Organization",
            name: "Hibbert Advisory Group",
            url: absoluteUrl("/"),
          },
          url: pageUrl,
          description:
            "Product strategist and executive advisor specializing in AI strategy, product leadership, and digital transformation.",
          knowsAbout: expertiseAreas,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "About Michael Hibbert", item: pageUrl },
          ],
        }}
      />

      <section className="relative overflow-hidden border-b border-white/5 px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <li>
                <Link href="/" className="hover:text-amber-200/90 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-slate-300">About Michael Hibbert</li>
            </ol>
          </nav>
          <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
            Executive Profile
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Michael Hibbert
          </h1>
          <p className="mt-4 text-xl font-medium text-amber-200/90">
            Founder & Principal Advisor, Hibbert Advisory Group
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            Product leader and executive advisor with 15+ years of experience guiding
            organizations through product strategy, digital transformation, audience growth,
            and AI-enabled product development across media, technology, and growth-stage
            businesses.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-16">
          <div>
            <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
              Background
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
              Product Leadership Background
            </h2>
            <p className="mt-4 max-w-3xl text-slate-400 leading-relaxed">
              Michael has led and advised on product initiatives spanning mobile applications,
              streaming platforms, audience engagement systems, SaaS products, and AI-enabled
              capabilities. His work connects executive priorities to product direction,
              operational execution, and measurable business outcomes.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
              Experience
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
              Professional Timeline
            </h2>
            <ol className="mt-8 space-y-6">
              {timeline.map((item) => (
                <li
                  key={item.period}
                  className="rounded-2xl border border-white/8 bg-[#0f1c30]/80 p-6 shadow-xl shadow-black/20"
                >
                  <p className="text-xs font-medium tracking-wider text-amber-400/90 uppercase">
                    {item.period}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{item.role}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.detail}</p>
                </li>
              ))}
            </ol>
          </div>

          <SelectedExperienceCaseStudies />

          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Career Highlights</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {careerHighlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-4 text-sm text-slate-300"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Leadership Approach</h2>
            <p className="mt-4 max-w-3xl text-slate-400 leading-relaxed">
              Michael partners with leadership teams to create clarity, align stakeholders, and
              translate strategy into roadmaps teams can execute. His advisory philosophy emphasizes
              evidence-based decisions, executive-ready communication, and outcomes tied to revenue,
              efficiency, and customer impact—not technology for its own sake.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Areas of Expertise</h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {expertiseAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-white/10 bg-[#0f1c30]/80 px-4 py-2 text-sm text-slate-300"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Professional Achievements
            </h2>
            <ul className="mt-6 space-y-3">
              {achievements.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-400">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-400" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-amber-500/25 bg-gradient-to-br from-[#152a45]/80 via-[#0f1c30]/80 to-[#0a1424] px-8 py-10">
            <h2 className="text-xl font-semibold text-white sm:text-2xl">
              Strategic Advisory Expertise
            </h2>
            <p className="mt-4 max-w-3xl text-slate-300 leading-relaxed">
              Michael advises founders and executive teams through diagnostics, AI strategy,
              fractional product leadership, and digital transformation engagements designed to
              improve decision quality, execution speed, and measurable business performance.
            </p>
            <Link
              href={DISCOVERY_INTAKE_PATH}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-3.5 text-sm font-semibold text-[#060d18] hover:bg-amber-400 transition-colors"
            >
              Schedule an Advisory Discussion
            </Link>
          </div>

          <div>
            <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
              Advisory services
            </p>
            <ul className="mt-4 flex flex-wrap gap-3">
              <li>
                <Link href="/services/ai-opportunity-assessment" className="text-sm text-slate-400 hover:text-amber-200/90">
                  AI Opportunity Assessment
                </Link>
              </li>
              <li>
                <Link href="/services/ai-strategy-roadmap" className="text-sm text-slate-400 hover:text-amber-200/90">
                  AI Strategy & Roadmap
                </Link>
              </li>
              <li>
                <Link href="/services/fractional-product-leadership" className="text-sm text-slate-400 hover:text-amber-200/90">
                  Fractional Product Leadership
                </Link>
              </li>
              <li>
                <Link href="/services/digital-transformation" className="text-sm text-slate-400 hover:text-amber-200/90">
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-sm text-slate-400 hover:text-amber-200/90">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <EnterpriseExperienceShowcase />

      <ConsultationCTA />
    </PageShell>
  );
}
