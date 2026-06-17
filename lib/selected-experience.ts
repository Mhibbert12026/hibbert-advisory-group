export type EngagementCard = {
  organization: string;
  title: string;
  impactStatement: string;
  contributions: readonly string[];
};

export type EngagementCaseStudy = EngagementCard & {
  businessChallenge: string;
  leadershipResponsibilities: readonly string[];
  strategicApproach: readonly string[];
  businessOutcomes: readonly string[];
  lessonsLearned: readonly string[];
};

const newYorkTimes: EngagementCaseStudy = {
  organization: "New York Times",
  title: "Mobile Product Expansion",
  impactStatement:
    "Expanded the New York Times mobile portfolio from a single application to four distinct mobile experiences supporting audience growth, engagement, and digital subscription initiatives.",
  contributions: [
    "Mobile product strategy",
    "Cross-functional leadership",
    "User experience optimization",
    "Product roadmap development",
  ],
  businessChallenge:
    "The organization needed to extend mobile reach beyond a single flagship application to support audience growth, subscription performance, and differentiated reader experiences across mobile contexts.",
  leadershipResponsibilities: [
    "Directed mobile product strategy across multiple application initiatives",
    "Aligned editorial, technology, and growth stakeholders on portfolio priorities",
    "Governed roadmap tradeoffs between engagement, retention, and delivery capacity",
    "Established product operating rhythms for cross-functional execution",
  ],
  strategicApproach: [
    "Assessed audience needs, usage patterns, and subscription drivers across mobile surfaces",
    "Defined portfolio architecture for distinct mobile experiences with shared platform foundations",
    "Prioritized initiatives based on engagement impact, technical feasibility, and business value",
    "Implemented phased roadmap delivery with measurable milestones for leadership review",
  ],
  businessOutcomes: [
    "Expanded mobile portfolio from one application to four customer-facing experiences",
    "Strengthened mobile engagement and subscription support across the portfolio",
    "Improved cross-functional clarity on mobile priorities and investment sequencing",
    "Established a scalable product framework for ongoing mobile innovation",
  ],
  lessonsLearned: [
    "Portfolio expansion succeeds when each product has a distinct value proposition tied to measurable audience outcomes",
    "Executive alignment on sequencing is as critical as feature definition in large media organizations",
    "Shared platform standards accelerate delivery without constraining differentiated experiences",
  ],
};

const paramountGlobal: EngagementCaseStudy = {
  organization: "Paramount Global",
  title: "Global Streaming & OTT Transformation",
  impactStatement:
    "Helped launch and scale streaming experiences across multiple Paramount brands, contributing to global OTT initiatives supporting millions of viewers.",
  contributions: [
    "OTT product strategy",
    "Streaming platform launches",
    "Stakeholder alignment",
    "International product delivery",
  ],
  businessChallenge:
    "Paramount needed to accelerate streaming product delivery across multiple brands while aligning global stakeholders on platform strategy, launch priorities, and international rollout requirements.",
  leadershipResponsibilities: [
    "Led OTT product strategy across brand and platform initiatives",
    "Coordinated executive stakeholders across product, technology, and content organizations",
    "Directed launch planning for streaming experiences at scale",
    "Supported international product delivery and prioritization decisions",
  ],
  strategicApproach: [
    "Mapped brand-specific streaming requirements against shared platform capabilities",
    "Established launch frameworks balancing speed, quality, and audience experience standards",
    "Prioritized initiatives using viewer impact, technical readiness, and market timing",
    "Built executive reporting structures for launch readiness and post-launch optimization",
  ],
  businessOutcomes: [
    "Contributed to launch and scale of streaming experiences across Paramount brands",
    "Supported global OTT initiatives reaching millions of viewers",
    "Improved stakeholder alignment on platform investments and launch sequencing",
    "Strengthened product delivery discipline across international initiatives",
  ],
  lessonsLearned: [
    "Multi-brand streaming strategies require explicit platform principles and brand-specific execution paths",
    "Launch success depends on executive clarity across content, technology, and growth priorities",
    "International rollout benefits from early alignment on localization, compliance, and technical constraints",
  ],
};

const cbsRadio: EngagementCaseStudy = {
  organization: "CBS Radio",
  title: "Digital Transformation & Revenue Operations",
  impactStatement:
    "Led strategic initiatives supporting digital transformation efforts, operational efficiency improvements, and large-scale budget management.",
  contributions: [
    "Operational leadership",
    "Budget management",
    "Process improvement",
    "Technology modernization",
  ],
  businessChallenge:
    "The organization faced pressure to modernize operations, improve efficiency, and align technology investments with revenue performance across a complex broadcast and digital portfolio.",
  leadershipResponsibilities: [
    "Led transformation initiatives connecting product, operations, and technology priorities",
    "Managed large-scale budget planning and investment tradeoffs",
    "Directed process improvement programs across operational teams",
    "Aligned leadership on modernization sequencing and accountability",
  ],
  strategicApproach: [
    "Assessed operational workflows, technology constraints, and revenue dependencies",
    "Prioritized modernization initiatives based on efficiency impact and implementation risk",
    "Established governance for budget allocation and transformation milestones",
    "Implemented measurement frameworks for operational and financial performance",
  ],
  businessOutcomes: [
    "Advanced digital transformation initiatives with clearer executive ownership",
    "Improved operational efficiency through targeted process and technology improvements",
    "Strengthened budget discipline and investment prioritization at leadership level",
    "Built organizational readiness for sustained modernization efforts",
  ],
  lessonsLearned: [
    "Transformation programs require visible executive sponsorship and operational accountability",
    "Budget governance and process improvement must be integrated—not treated as separate initiatives",
    "Technology modernization delivers value when tied to measurable operational outcomes",
  ],
};

const pentonMedia: EngagementCaseStudy = {
  organization: "Penton Media",
  title: "B2B Product Innovation",
  impactStatement:
    "Led development of digital aviation industry products and API-driven solutions that generated measurable business value and new revenue opportunities.",
  contributions: [
    "Product strategy",
    "API ecosystem development",
    "B2B platform growth",
    "Revenue-focused execution",
  ],
  businessChallenge:
    "Penton needed to evolve legacy publishing models into digital products and API-driven platforms that could generate new revenue in specialized B2B markets.",
  leadershipResponsibilities: [
    "Directed product strategy for aviation industry digital solutions",
    "Led API ecosystem development and partner integration planning",
    "Aligned product, technology, and commercial teams on revenue objectives",
    "Governed roadmap decisions based on customer value and monetization potential",
  ],
  strategicApproach: [
    "Identified high-value customer workflows suitable for digital product and API extension",
    "Designed platform architecture supporting scalable B2B integrations",
    "Prioritized features based on revenue potential, customer adoption, and delivery complexity",
    "Established go-to-market alignment between product capabilities and commercial strategy",
  ],
  businessOutcomes: [
    "Delivered digital aviation products with measurable business value",
    "Created API-driven solutions supporting new revenue opportunities",
    "Strengthened B2B platform growth through focused product and commercial alignment",
    "Improved product execution discipline in specialized industry markets",
  ],
  lessonsLearned: [
    "B2B platform growth requires deep industry workflow understanding—not generic product patterns",
    "API ecosystems create durable value when designed around customer integration needs",
    "Revenue-focused product leadership depends on tight alignment with commercial stakeholders",
  ],
};

const jobfitAi: EngagementCaseStudy = {
  organization: "JobFit AI",
  title: "AI-Powered Career Intelligence Platform",
  impactStatement:
    "Designed and launched an AI-driven career intelligence platform leveraging generative AI, automation, skills analysis, and executive career development workflows.",
  contributions: [
    "AI product strategy",
    "Generative AI implementation",
    "SaaS platform development",
    "User experience design",
  ],
  businessChallenge:
    "The organization sought to build a differentiated career intelligence platform that applied generative AI and skills analysis to executive career development in a credible, outcomes-oriented product experience.",
  leadershipResponsibilities: [
    "Defined AI product strategy and platform vision",
    "Directed generative AI implementation within product workflows",
    "Led SaaS platform development from concept through launch",
    "Governed user experience design for trust, clarity, and professional audiences",
  ],
  strategicApproach: [
    "Identified high-value user workflows for AI-assisted career intelligence and skills analysis",
    "Designed product architecture balancing AI capability, data quality, and user trust",
    "Prioritized launch scope based on differentiation, feasibility, and user outcomes",
    "Established measurement frameworks for engagement, retention, and product value",
  ],
  businessOutcomes: [
    "Launched an AI-driven career intelligence platform with generative AI capabilities",
    "Delivered automation and skills analysis workflows supporting executive career development",
    "Built SaaS product foundations for ongoing feature expansion",
    "Created a credible product experience for professional and leadership audiences",
  ],
  lessonsLearned: [
    "AI product credibility depends on workflow design and outcome clarity—not model novelty alone",
    "Generative AI implementations require explicit guardrails, user trust, and measurable value",
    "SaaS platforms in professional markets succeed when product strategy aligns with user decision-making needs",
  ],
};

export const selectedExperienceCaseStudies: readonly EngagementCaseStudy[] = [
  newYorkTimes,
  paramountGlobal,
  cbsRadio,
  pentonMedia,
  jobfitAi,
] as const;

export const recentEngagementCards: readonly EngagementCard[] =
  selectedExperienceCaseStudies;
