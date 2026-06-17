import Link from "next/link";
import { RevealOnScroll } from "@/app/components/reveal-on-scroll";

const industries = [
  {
    title: "Financial Services",
    description:
      "AI advisory for risk management, compliance, lending, wealth management, and operational efficiency across financial institutions.",
    path: "/industries/financial-services-ai-consulting",
  },
  {
    title: "SaaS",
    description:
      "Product strategy and AI consulting for SaaS companies—feature development, retention, support automation, and product-led growth.",
    path: "/industries/saas-ai-consulting",
  },
  {
    title: "Healthcare",
    description:
      "Governance-aware AI advisory for operational efficiency, patient engagement, administrative automation, and clinical workflow support.",
    path: "/industries/healthcare-ai-consulting",
  },
  {
    title: "Nonprofits",
    description:
      "Practical AI adoption for fundraising, donor engagement, grant management, and operational efficiency in mission-driven organizations.",
    path: "/industries/nonprofit-ai-consulting",
  },
  {
    title: "Professional Services",
    description:
      "AI advisory for consultants, advisors, agencies, and service firms—productivity, proposals, client engagement, and knowledge management.",
    path: "/industries/professional-services-ai",
  },
  {
    title: "Manufacturing",
    description:
      "Process optimization, predictive maintenance, supply chain intelligence, and operational visibility for manufacturers.",
    path: "/industries/manufacturing-ai",
  },
  {
    title: "Education",
    description:
      "Student engagement, administrative efficiency, knowledge management, and reporting automation for education organizations.",
    path: "/industries/education-ai",
  },
] as const;

export function IndustriesWeSupport() {
  return (
    <section
      id="industries"
      className="border-t border-white/5 bg-[#0a1424] px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
              Industries We Support
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Sector-specific executive advisory
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-400">
              Advisory engagements tailored to the operational, regulatory, and competitive
              realities of your industry—not generic technology consulting.
            </p>
          </div>
        </RevealOnScroll>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <li key={industry.path}>
              <RevealOnScroll delayMs={index * 70}>
                <Link
                  href={industry.path}
                  className="group block h-full rounded-2xl border border-white/8 bg-[#0f1c30]/80 p-7 shadow-xl shadow-black/20 transition-all duration-300 hover:border-amber-500/25"
                >
                  <div className="mb-5 h-px w-12 bg-gradient-to-r from-amber-500 to-amber-500/0 transition-all duration-300 group-hover:w-16" />
                  <h3 className="text-xl font-semibold text-white group-hover:text-amber-200/90 transition-colors">
                    {industry.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {industry.description}
                  </p>
                  <span className="mt-5 inline-block text-sm font-medium text-amber-200/80 group-hover:text-amber-200 transition-colors">
                    Explore advisory →
                  </span>
                </Link>
              </RevealOnScroll>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
