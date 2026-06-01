import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hibbert Advisory Group | Product, Growth & AI Strategy",
  description:
    "Executive advisory for product-led growth, revenue diagnostics, AI opportunity assessment, and fractional product leadership.",
};

// Discovery intake page for all primary CTA buttons ("Start Discovery Intake").
const DISCOVERY_INTAKE_PATH = "/intake";

const aboutImpactSnapshot = [
  "15+ Years Digital Product Leadership",
  "Product, Operations & Growth Strategy",
  "Startup to Enterprise Experience",
  "AI Transformation & Platform Strategy",
] as const;

const selectedExperienceBrands = [
  "PARAMOUNT / VIACOM",
  "CBS INTERACTIVE",
  "MCCANN HEALTH",
  "RIPROAD",
  "PENTON MEDIA",
  "NBA ECOSYSTEM",
] as const;

const selectedExperienceCapabilities = [
  "Media & Entertainment",
  "Healthcare & Life Sciences",
  "Product Strategy",
  "Growth & Revenue Optimization",
  "AI Transformation",
] as const;

const representativeExperience = [
  {
    title: "Sports & Media Platforms",
    description:
      "Experience supporting sports, media, OTT, and audience engagement platforms, including work across digital content ecosystems and large-scale consumer experiences.",
  },
  {
    title: "Healthcare & Medical Technology",
    description:
      "Product strategy and platform initiatives supporting healthcare organizations, medical protocol solutions, pharmaceutical communications, and regulated environments.",
  },
  {
    title: "AI Product Strategy",
    description:
      "AI product planning, computer vision initiatives, analytics workflows, recommendation systems, and content discovery experiences designed to improve engagement and decision-making.",
  },
  {
    title: "Workflow Automation",
    description:
      "Identification of repetitive workflows, operational bottlenecks, tooling opportunities, and practical automation paths.",
  },
  {
    title: "SaaS & Startup Growth",
    description:
      "Support for founders and teams building, positioning, improving, and scaling digital products and platform-based businesses.",
  },
  {
    title: "Nonprofit & Mission-Driven Transformation",
    description:
      "Product, operations, and strategy support for organizations focused on access, opportunity, and measurable social impact.",
  },
] as const;

const careerSnapshotHighlights = [
  "15+ Years Product & Strategy Leadership",
  "Healthcare, Media, Sports, SaaS & Nonprofit Experience",
  "AI Product Strategy & Workflow Automation",
  "Startup Through Enterprise Scale Experience",
  "Product, Growth & Operational Excellence",
] as const;

const careerHighlights = [
  "Product leadership across media, healthcare, SaaS, and nonprofit sectors",
  "Experience supporting organizations from startup through enterprise scale",
  "Cross-functional leadership across product, operations, and growth initiatives",
  "Deep expertise in product strategy, revenue growth, and AI adoption",
] as const;

const engagementModelItems = [
  "Executive-ready recommendations",
  "Practical implementation guidance",
  "Fractional leadership when ongoing support is needed",
] as const;

const howWeWorkSteps = [
  {
    title: "Discovery",
    description:
      "Understand objectives, constraints, stakeholders, and opportunities.",
  },
  {
    title: "Assessment",
    description:
      "Identify growth, operational, product, workflow automation, and AI implementation opportunities.",
  },
  {
    title: "Roadmap",
    description:
      "Deliver prioritized recommendations and implementation guidance designed to create measurable business outcomes.",
  },
] as const;

const expertiseAreas = [
  "AI Implementation Strategy",
  "AI Product Strategy",
  "Workflow Automation",
  "AI Tooling Recommendations",
  "Computer Vision Use Cases",
  "Analytics Workflows",
  "Recommendation & Personalization Systems",
  "Recommendation Logic",
  "Operational Cost Reduction",
  "Digital Product & Platform Development",
  "Product Strategy",
  "Revenue Growth",
  "Operational Excellence",
] as const;

const digitalProductExpertise = {
  title: "Digital Product & Platform Development",
  description:
    "Support organizations in planning, launching, and scaling web, mobile, SaaS, and platform-based products.",
  positioning:
    "Strategic product and platform advisory—guiding discovery, roadmaps, vendor decisions, and launch planning. We do not operate as a development agency.",
  capabilities: [
    "Product Discovery",
    "MVP Strategy",
    "Web Application Planning",
    "Mobile Application Planning",
    "Platform Roadmapping",
    "Technical Vendor Evaluation",
    "AI Product Integration",
    "Product Launch Support",
  ],
} as const;

const services = [
  {
    id: "diagnostic",
    title: "Product Growth & Revenue Diagnostic",
    startingPrice: "Starting at $3,500",
    tagline: "Clarity on what drives growth—and what holds it back",
    description:
      "A structured assessment of your product, funnel, pricing, and go-to-market motion. We surface revenue leaks, prioritization gaps, and quick wins backed by data—not guesswork.",
    outcomesLabel: "Deliverables",
    outcomes: [
      "Revenue & conversion bottleneck analysis",
      "Product friction assessment",
      "Monetization opportunity review",
      "Prioritized 90-day growth roadmap",
      "Executive findings presentation",
    ],
    bestFor: [
      "Revenue growth challenges",
      "Product-market fit refinement",
      "Go-to-market optimization",
    ],
  },
  {
    id: "ai-assessment",
    title: "AI Opportunity Diagnostic",
    startingPrice: "Starting at $3,500",
    tagline: "Practical AI—not hype",
    description:
      "Identify practical opportunities to reduce costs, improve efficiency, and accelerate execution through AI.",
    valueStatement:
      "Most organizations know AI is important. Few know where to start. We identify practical, high-impact opportunities that create measurable business value.",
    outcomesLabel: "Deliverables",
    outcomes: [
      "AI opportunity assessment",
      "Workflow automation review",
      "Tooling and vendor recommendations",
      "Risk and governance considerations",
      "Executive findings presentation",
      "90-day implementation roadmap",
    ],
  },
  {
    id: "fractional",
    title: "Fractional Product & Strategy Leadership",
    startingPrice: "Engagements begin at $8,000/month",
    mostComprehensive: true,
    tagline:
      "Executive-level product, growth, and operational leadership without the cost of a full-time executive hire.",
    description:
      "Embedded partnership with your executive team: product vision, roadmap governance, cross-functional alignment, and board-ready narrative—on a schedule that fits your stage.",
    outcomesLabel: "Deliverables",
    outcomes: [
      "Product strategy & roadmap governance",
      "Executive stakeholder alignment",
      "Product operating model optimization",
      "Leadership coaching for product teams",
      "Board & investor narrative support",
      "Monthly strategic advisory sessions",
    ],
    bestFor: [
      "Executive teams",
      "Scaling organizations",
      "Founder support",
    ],
  },
] as const;

const aiImplementationAreas = [
  "Workflow Automation",
  "Internal Knowledge Management",
  "Customer Support Optimization",
  "Analytics & Reporting Acceleration",
  "Computer Vision Applications",
  "Content Discovery & Recommendation Systems",
  "Sales & Marketing Operations",
  "Product Experience Enhancements",
] as const;

const engagementTimelines = [
  {
    service: "Product Growth & Revenue Diagnostic",
    duration: "2–3 Weeks",
  },
  {
    service: "AI Opportunity Diagnostic",
    duration: "2–4 Weeks",
  },
  {
    service: "Fractional Product & Strategy Leadership",
    duration: "Monthly Engagement",
  },
] as const;

const whatHappensNextSteps = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "A focused conversation to understand goals, challenges, and priorities.",
  },
  {
    step: "02",
    title: "Assessment & Findings",
    description:
      "A structured review resulting in executive-ready recommendations.",
  },
  {
    step: "03",
    title: "Strategic Roadmap",
    description:
      "A practical action plan designed to create measurable business outcomes.",
  },
] as const;

const idealClients = [
  "Growth-stage startups",
  "SaaS companies",
  "Media & digital platforms",
  "Nonprofits",
  "Community-focused organizations",
  "Founder-led businesses",
] as const;

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Stakeholder interviews, data review, and alignment on goals, constraints, and success metrics.",
  },
  {
    step: "02",
    title: "Diagnosis",
    description:
      "Structured analysis across product, growth, revenue, and technology—with findings grounded in evidence.",
  },
  {
    step: "03",
    title: "Roadmap",
    description:
      "Prioritized initiatives, owners, timelines, and measurable outcomes your team can execute immediately.",
  },
  {
    step: "04",
    title: "Partnership",
    description:
      "Optional ongoing advisory to accelerate execution, coach leaders, and adapt as the market shifts.",
  },
] as const;

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#clients", label: "Experience" },
  { href: "#expertise", label: "Expertise" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
] as const;

export default function Home() {
  return (
    <div className="bg-[#060d18] text-slate-200 font-sans">
      {/* Subtle grid texture */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden
      />

      <header className="relative z-10 border-b border-white/5 bg-[#060d18]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="block shrink-0">
            <Image
              src="/hibbert-logo.png"
              alt="Hibbert Advisory Group"
              width={270}
              height={81}
              className="h-auto w-[210px] sm:w-[270px]"
              priority
            />
          </Link>
          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Link
            href={DISCOVERY_INTAKE_PATH}
            className="hidden rounded-full border border-amber-500/40 bg-amber-500/10 px-5 py-2 text-sm font-medium text-amber-200 hover:bg-amber-500/20 transition-colors sm:inline-flex"
          >
            Start Discovery Intake
          </Link>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero */}
        <section className="relative overflow-hidden px-6 pt-20 pb-24 lg:px-8 lg:pt-28 lg:pb-32">
          <div
            className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-[#1e3a5f]/40 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-amber-600/10 blur-3xl"
            aria-hidden
          />

          <div className="mx-auto max-w-6xl">
            <p className="mb-6 max-w-3xl rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-relaxed text-slate-300">
              <span className="mr-2 inline-block h-1.5 w-1.5 translate-y-[-1px] rounded-full bg-amber-400 align-middle" />
              Helping organizations unlock growth, improve execution, and navigate
              AI-enabled transformation.
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Product Strategy, Revenue Growth &{" "}
              <span className="text-amber-300">AI Transformation</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400">
              Hibbert Advisory Group partners with founders and leadership teams
              to diagnose revenue performance, evaluate AI opportunities, and
              provide fractional product strategy—so you move faster with
              confidence.
            </p>
            <p className="mt-6 max-w-2xl border-l-2 border-amber-500/40 pl-5 text-base leading-relaxed text-slate-300">
              Led by Michael Hibbert, a product strategist, operator, and advisor
              with experience spanning technology, media, startups, nonprofits, and
              digital platform businesses.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href={DISCOVERY_INTAKE_PATH}
                className="inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-3.5 text-sm font-semibold text-[#060d18] hover:bg-amber-400 transition-colors"
              >
                Start Discovery Intake
              </Link>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-3.5 text-sm font-medium text-white hover:border-white/30 hover:bg-white/5 transition-colors"
              >
                Explore services
              </a>
            </div>
            <dl className="mt-16 grid gap-8 border-t border-white/10 pt-12 sm:grid-cols-3">
              {[
                { label: "Focus", value: "B2B & growth-stage" },
                { label: "Engagements", value: "Diagnostic to fractional" },
                { label: "Approach", value: "Evidence-led, executive-ready" },
              ].map((item) => (
                <div key={item.label}>
                  <dt className="text-xs font-medium tracking-wider text-slate-500 uppercase">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-base font-medium text-white">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Selected Experience */}
        <section
          id="experience"
          className="border-t border-white/5 bg-[#0a1424] px-6 py-16 lg:px-8 lg:py-20"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-sm font-semibold tracking-[0.2em] text-amber-400/90 uppercase">
              Selected Experience
            </h2>

            <ul className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {selectedExperienceBrands.map((brand) => (
                <li
                  key={brand}
                  className="rounded-lg border border-white/10 bg-[#0f1c30]/90 px-4 py-2.5 text-xs font-medium tracking-wide text-slate-200 sm:text-sm"
                >
                  {brand}
                </li>
              ))}
            </ul>

            <ul className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
              {selectedExperienceCapabilities.map((capability) => (
                <li
                  key={capability}
                  className="rounded-full border border-white/8 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-slate-400"
                >
                  {capability}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Representative Experience */}
        <section className="border-t border-white/5 px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
                Track record
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Representative Experience
              </h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                Experience spanning media, healthcare, sports, nonprofits, SaaS,
                AI-enabled products, and digital platform businesses—from startup
                environments through enterprise-scale organizations.
              </p>
            </div>

            <ul className="mt-12 grid gap-6 sm:grid-cols-2">
              {representativeExperience.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-white/8 bg-[#0f1c30]/80 p-6 shadow-xl shadow-black/20"
                >
                  <div className="mb-4 h-px w-10 bg-gradient-to-r from-amber-500 to-amber-500/0" />
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Executive Leadership Experience */}
        <section className="border-t border-white/5 bg-[#0a1424] px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
                Background
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Executive Leadership Experience
              </h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                A blend of product leadership, operational execution, and strategic
                advisory experience spanning startups, enterprise organizations,
                media, healthcare, nonprofits, and emerging technologies.
              </p>
            </div>

            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {careerSnapshotHighlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-5 text-sm font-medium leading-snug text-slate-200"
                >
                  <div className="mb-3 h-px w-8 bg-gradient-to-r from-amber-500 to-amber-500/0" />
                  {highlight}
                </li>
              ))}
            </ul>

            <p className="mx-auto mt-10 max-w-3xl rounded-lg border border-amber-500/25 bg-amber-500/5 px-6 py-4 text-center text-sm leading-relaxed text-slate-300">
              Advisory experience across regulated industries, digital platforms,
              emerging technologies, and growth-stage organizations.
            </p>
          </div>
        </section>

        {/* Engagement Model */}
        <section className="border-t border-white/5 px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-sm font-semibold tracking-[0.2em] text-amber-400/90 uppercase">
              Engagement Model
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">
              Advisory engagements are designed for organizations that need
              strategic clarity, executive-level product leadership, operational
              optimization, or AI transformation guidance without adding
              full-time overhead.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {engagementModelItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-white/8 bg-[#0f1c30]/80 px-5 py-4 text-sm text-slate-300"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          className="border-t border-white/5 px-6 py-24 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
                Services
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Advisory built for decisive leadership
              </h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                Three focused offerings—each designed to deliver clarity, a
                prioritized plan, and leadership support your team can act on
                immediately.
              </p>
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:items-stretch">
              {services.map((service) => {
                const isFlagship =
                  "mostComprehensive" in service && service.mostComprehensive;

                return (
                <article
                  key={service.id}
                  id={service.id}
                  className={
                    isFlagship
                      ? "group relative flex min-h-[520px] flex-col overflow-hidden rounded-2xl border border-amber-500/50 bg-gradient-to-b from-[#132238] to-[#0f1c30] p-8 py-10 shadow-2xl shadow-black/30 ring-1 ring-amber-500/20 transition-colors hover:border-amber-500/60 lg:min-h-[560px] lg:-translate-y-1 lg:shadow-[0_12px_48px_-16px_rgba(0,0,0,0.5),0_0_48px_-12px_rgba(245,158,11,0.18)]"
                      : "group flex flex-col rounded-2xl border border-white/8 bg-[#0f1c30] p-8 shadow-xl shadow-black/20 transition-colors hover:border-amber-500/25"
                  }
                >
                  {isFlagship && (
                    <>
                      <div
                        className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(245,158,11,0.12),transparent_55%)]"
                        aria-hidden
                      />
                      <div
                        className="pointer-events-none absolute -inset-px rounded-2xl opacity-70 blur-md bg-gradient-to-b from-amber-500/15 via-transparent to-transparent"
                        aria-hidden
                      />
                    </>
                  )}
                  <div className="relative flex flex-1 flex-col">
                  <div className={`h-px bg-gradient-to-r from-amber-500 to-amber-500/0 ${isFlagship ? "mb-7 w-16" : "mb-6 w-12"}`} />
                  {"mostComprehensive" in service && service.mostComprehensive && (
                    <span className="mb-3 inline-flex w-fit items-center rounded-full border border-amber-500/40 bg-amber-500/15 px-3 py-1 text-xs font-semibold tracking-wide text-amber-200 uppercase">
                      Most Comprehensive
                    </span>
                  )}
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-4 inline-block rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-sm font-semibold tracking-wide text-amber-200">
                    {service.startingPrice}
                  </p>
                  <p className="mt-3 text-sm font-medium text-amber-200/80">
                    {service.tagline}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-400">
                    {service.description}
                  </p>
                  {"valueStatement" in service && service.valueStatement && (
                    <p className="mt-4 border-l-2 border-amber-500/30 pl-4 text-sm leading-relaxed text-slate-300">
                      {service.valueStatement}
                    </p>
                  )}
                  {"bestFor" in service && service.bestFor && (
                    <div className="mt-5 rounded-lg border border-white/8 bg-white/[0.03] px-4 py-4">
                      <p className="text-xs font-medium tracking-wider text-amber-400/90 uppercase">
                        Best For
                      </p>
                      <ul className="mt-3 space-y-2">
                        {service.bestFor.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-slate-400"
                          >
                            <span
                              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-500"
                              aria-hidden
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="mt-6 flex-1 border-t border-white/5 pt-6">
                    {"outcomesLabel" in service && service.outcomesLabel && (
                      <p className="mb-3 text-xs font-medium tracking-wider text-slate-500 uppercase">
                        {service.outcomesLabel}
                      </p>
                    )}
                    <ul className="space-y-2">
                    {service.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="flex items-start gap-2 text-sm text-slate-300"
                      >
                        <span
                          className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-400"
                          aria-hidden
                        />
                        {outcome}
                      </li>
                    ))}
                    </ul>
                  </div>
                  </div>
                </article>
                );
              })}
            </div>

            <div className="mt-16 border-t border-white/10 pt-12">
              <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                Typical Engagement Timelines
              </h3>
              <ul className="mt-8 grid gap-4 sm:grid-cols-3">
                {engagementTimelines.map((item) => (
                  <li
                    key={item.service}
                    className="rounded-xl border border-white/8 bg-[#0f1c30]/80 px-5 py-5"
                  >
                    <p className="text-sm font-medium leading-snug text-slate-200">
                      {item.service}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-amber-200/90">
                      {item.duration}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-16 border-t border-white/10 pt-12">
              <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                What Happens Next
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
                A clear path from first conversation to actionable strategy—built
                for executive teams who need momentum without unnecessary complexity.
              </p>
              <ol className="mt-10 grid gap-6 lg:grid-cols-3">
                {whatHappensNextSteps.map((item, index) => (
                  <li
                    key={item.step}
                    className="relative rounded-2xl border border-white/8 bg-[#0f1c30]/80 p-6"
                  >
                    {index < whatHappensNextSteps.length - 1 && (
                      <span
                        className="pointer-events-none absolute top-1/2 -right-3 z-10 hidden h-px w-6 bg-amber-500/30 lg:block"
                        aria-hidden
                      />
                    )}
                    <span className="text-3xl font-light text-amber-500/40">
                      {item.step}
                    </span>
                    <h4 className="mt-4 text-lg font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* AI Implementation Areas */}
        <section className="border-t border-white/5 bg-[#0a1424] px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
              AI Implementation Areas
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {aiImplementationAreas.map((area) => (
                <li
                  key={area}
                  className="flex items-start gap-2.5 rounded-xl border border-white/8 bg-[#0f1c30]/80 px-4 py-3.5 text-sm text-slate-300"
                >
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-400"
                    aria-hidden
                  />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Ideal Clients */}
        <section
          id="clients"
          className="border-t border-white/5 px-6 py-24 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
                Who we serve
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Ideal Clients
              </h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                Built for organizations that need senior-level product, growth,
                and AI strategy without adding unnecessary complexity.
              </p>
            </div>

            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {idealClients.map((client) => (
                <li
                  key={client}
                  className="rounded-xl border border-white/8 bg-[#0f1c30]/60 px-6 py-5 text-sm font-medium text-slate-200"
                >
                  {client}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Areas of Expertise */}
        <section
          id="expertise"
          className="border-t border-white/5 bg-[#0a1424] px-6 py-24 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
                Trust & expertise
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Areas of Expertise
              </h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                Deep experience across industries and business models—bringing
                pattern recognition and practical judgment to every engagement,
                including strategic guidance for digital product and platform
                development.
              </p>
            </div>

            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {expertiseAreas.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-3 rounded-xl border border-white/8 bg-[#0f1c30]/60 px-5 py-4 text-sm font-medium text-slate-200"
                >
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-amber-500/20 bg-amber-500/10"
                    aria-hidden
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  </span>
                  {area}
                </li>
              ))}
            </ul>

            <article
              id="platform-development"
              className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0f1c30] to-[#0a1424] shadow-xl shadow-black/20"
            >
              <div className="grid gap-0 lg:grid-cols-2">
                <div className="border-b border-white/8 p-8 lg:border-b-0 lg:border-r lg:p-10">
                  <p className="text-xs font-medium tracking-[0.15em] text-amber-400/90 uppercase">
                    Expertise category
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                    {digitalProductExpertise.title}
                  </h3>
                  <p className="mt-5 leading-relaxed text-slate-300">
                    {digitalProductExpertise.description}
                  </p>
                  <p className="mt-5 border-l-2 border-amber-500/35 pl-4 text-sm leading-relaxed text-slate-400">
                    {digitalProductExpertise.positioning}
                  </p>
                </div>
                <div className="p-8 lg:p-10">
                  <p className="text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Capabilities
                  </p>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {digitalProductExpertise.capabilities.map((capability) => (
                      <li
                        key={capability}
                        className="flex items-start gap-2.5 text-sm text-slate-300"
                      >
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-400"
                          aria-hidden
                        />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* About Michael Hibbert */}
        <section
          id="about"
          className="border-t border-white/5 px-6 py-24 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
              {/* Headshot */}
              <div className="relative mx-auto w-full max-w-[340px] lg:mx-0">
                <div className="group relative aspect-[4/5] w-full max-w-[340px] overflow-hidden rounded-xl border border-amber-500/35 bg-[#0a1424] shadow-2xl shadow-black/40 transition-all duration-300 hover:border-amber-500/55 hover:shadow-[0_12px_48px_-16px_rgba(0,0,0,0.5),0_0_32px_-8px_rgba(245,158,11,0.12)]">
                  <Image
                    src="/michael-hibbert-headshot.png"
                    alt="Michael Hibbert, Founder and Principal Advisor at Hibbert Advisory Group"
                    width={340}
                    height={425}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 85vw, 340px"
                  />
                </div>
                <div
                  className="absolute -bottom-4 -right-4 hidden h-24 w-24 rounded-xl border border-amber-500/25 bg-amber-500/5 lg:block"
                  aria-hidden
                />
                <div
                  className="absolute -top-3 -left-3 hidden h-16 w-16 rounded-xl border border-white/5 bg-[#0f1c30]/80 lg:block"
                  aria-hidden
                />
              </div>

              {/* Executive profile */}
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Helping Organizations Navigate Growth, Product Strategy, and AI
                  Transformation
                </h2>
                <p className="mt-4 text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
                  About Michael Hibbert
                </p>
                <p className="mt-3 text-lg font-medium text-slate-200">
                  Founder & Principal Advisor, Hibbert Advisory Group
                </p>
                <p className="mt-2 text-sm text-amber-200/70">
                  Product Strategy · Operations · Growth · AI Transformation
                </p>

                <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-400">
                  <p>
                    Michael Hibbert partners with founders and leadership teams
                    who need sharper product direction, stronger growth, and clearer
                    execution—helping organizations prioritize what matters, align
                    stakeholders, and deliver measurable business outcomes.
                  </p>
                  <p>
                    His experience spans media, healthcare, sports, OTT, startups,
                    SaaS, and nonprofits. Through Hibbert Advisory Group, he engages
                    with clients through diagnostics, executive strategy, and
                    fractional product leadership.
                  </p>
                </div>

                <div className="mt-10 border-t border-white/10 pt-8">
                  <p className="text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Career Highlights
                  </p>
                  <ul className="mt-4 space-y-3">
                    {careerHighlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2.5 text-sm text-slate-300"
                      >
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-400"
                          aria-hidden
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 border-t border-white/10 pt-8">
                  <p className="text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Impact Snapshot
                  </p>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {aboutImpactSnapshot.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-amber-500/20 bg-amber-500/5 px-4 py-3 text-sm font-medium leading-snug text-slate-200"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-2xl border border-amber-500/20 bg-gradient-to-br from-[#152a45]/80 via-[#0f1c30]/80 to-[#0a1424] px-8 py-10 text-center sm:px-10">
              <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                Ready to explore growth opportunities?
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-300">
                Start with a short intake so we can understand your goals,
                challenges, and priorities.
              </p>
              <Link
                href={DISCOVERY_INTAKE_PATH}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-amber-500 px-10 py-3.5 text-sm font-semibold text-[#060d18] shadow-lg shadow-amber-500/20 hover:bg-amber-400 transition-colors"
              >
                Start Discovery Intake
              </Link>
            </div>
          </div>
        </section>

        {/* Process */}
        <section
          id="process"
          className="border-t border-white/5 bg-[#0a1424] px-6 py-24 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
                Process
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                A disciplined path from insight to execution
              </h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                Every engagement follows a transparent framework—so stakeholders
                know what to expect and when decisions get made.
              </p>
            </div>

            <ol className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((item, index) => (
                <li
                  key={item.step}
                  className="relative rounded-2xl border border-white/8 bg-[#0f1c30]/80 p-6"
                >
                  {index < processSteps.length - 1 && (
                    <span
                      className="pointer-events-none absolute top-1/2 -right-3 hidden h-px w-6 bg-amber-500/30 lg:block"
                      aria-hidden
                    />
                  )}
                  <span className="text-3xl font-light text-amber-500/40">
                    {item.step}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* How We Work */}
        <section className="border-t border-white/5 px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
                Approach
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                How We Work
              </h2>
            </div>

            <ul className="mt-12 grid gap-6 lg:grid-cols-3">
              {howWeWorkSteps.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-white/8 bg-[#0f1c30]/80 p-6 shadow-xl shadow-black/20"
                >
                  <div className="mb-4 h-px w-10 bg-gradient-to-r from-amber-500 to-amber-500/0" />
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      {/* Premium CTA — directly above footer */}
      <section
        id="contact"
        className="relative z-10 border-t border-white/5 px-6 py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl border border-amber-500/25 bg-gradient-to-br from-[#152a45] via-[#0f1c30] to-[#0a1424] px-8 py-16 text-center shadow-2xl shadow-black/30 sm:px-12 sm:py-20">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.14),transparent_55%)]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl"
              aria-hidden
            />
            <div className="relative">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
                Let&apos;s Identify Your Biggest Growth Opportunity
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Start with a short Discovery Intake so we can understand your goals,
                challenges, and priorities before recommending the right next step.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-5">
                <Link
                  href={DISCOVERY_INTAKE_PATH}
                  className="inline-flex w-full max-w-md items-center justify-center rounded-full bg-amber-500 px-12 py-4 text-base font-semibold text-[#060d18] shadow-lg shadow-amber-500/25 ring-2 ring-amber-400/30 hover:bg-amber-400 hover:shadow-amber-500/35 transition-all sm:w-auto"
                >
                  Start Discovery Intake
                </Link>
                <a
                  href="mailto:michaeldhibbert@gmail.com"
                  className="text-sm text-slate-400 hover:text-amber-200/90 transition-colors"
                >
                  michaeldhibbert@gmail.com
                </a>
              </div>
              <p className="mt-8 text-xs text-slate-500">
                Most engagements begin with a Discovery Intake and introductory
                conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/5 px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold tracking-[0.15em] text-amber-400/90 uppercase">
            Hibbert Advisory Group
          </p>
          <p className="mt-3 text-sm text-slate-400">
            Product Strategy • Revenue Growth • AI Transformation
          </p>
          <p className="mt-6 text-xs text-slate-500">
            © 2026 Hibbert Advisory Group
          </p>
        </div>
      </footer>
    </div>
  );
}
