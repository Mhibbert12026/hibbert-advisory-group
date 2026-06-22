import { PageShell } from "@/app/components/page-shell";
import { EnterpriseExperienceShowcase } from "@/app/components/enterprise-experience-showcase";
import { ExecutiveCaseStudiesSection } from "@/app/components/executive-case-studies-section";
import { HomeAboutSection } from "@/app/components/home-about-section";
import { HomeEngagementCta } from "@/app/components/home-engagement-cta";
import { HomeIdealClientsSection } from "@/app/components/home-ideal-clients-section";
import { HomeIndustriesSection } from "@/app/components/home-industries-section";
import { HomeServicesSection } from "@/app/components/home-services-section";
import { HowIHelpSection } from "@/app/components/how-i-help-section";
import { JsonLd } from "@/app/components/json-ld";
import { LatestInsightsSection } from "@/app/components/latest-insights-section";
import { PremiumHeroSection } from "@/app/components/premium-hero-section";
import { ResearchFrameworksSection } from "@/app/components/research-frameworks-section";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl, DISCOVERY_INTAKE_PATH } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Product, Growth & AI Strategy",
  description:
    "Executive advisory for product-led growth, revenue diagnostics, AI opportunity assessment, and fractional product leadership.",
  path: "/",
});

const heroMetrics = [
  { value: "1.42M+", label: "Monthly Users Supported" },
  { value: "99", label: "Countries Launched" },
  { value: "60%", label: "Partner Adoption" },
  { value: "$10M+", label: "Programs & Budget Leadership" },
] as const;

export default function Home() {
  return (
    <PageShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Hibbert Advisory Group",
          url: absoluteUrl("/"),
          description:
            "Executive advisory for AI strategy, product leadership, digital transformation, and growth.",
          founder: {
            "@type": "Person",
            name: "Michael Hibbert",
            url: absoluteUrl("/about/michael-hibbert"),
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Hibbert Advisory Group",
          url: absoluteUrl("/"),
        }}
      />

      <PremiumHeroSection
        discoveryPath={DISCOVERY_INTAKE_PATH}
        metrics={heroMetrics}
      />
      <HowIHelpSection discoveryPath={DISCOVERY_INTAKE_PATH} />
      <HomeServicesSection />
      <HomeIdealClientsSection />
      <HomeIndustriesSection />
      <ExecutiveCaseStudiesSection />
      <EnterpriseExperienceShowcase />
      <HomeAboutSection />
      <LatestInsightsSection />
      <ResearchFrameworksSection />
      <HomeEngagementCta discoveryPath={DISCOVERY_INTAKE_PATH} />
    </PageShell>
  );
}
