export type ServiceSection = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  items: readonly string[];
};

export type ServiceRoiExample = {
  title: string;
  description: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceAudience = {
  title: string;
  intro: string;
  items: readonly string[];
};

export type ServiceExpertise = {
  title: string;
  intro: string;
  credentials: readonly string[];
};

export type ServiceEngagementDetails = {
  duration: string;
  format: string;
  investment: string;
};

export type ServicePageContent = {
  path: string;
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  overview: string;
  whoItsFor: ServiceAudience;
  engagementDetails: ServiceEngagementDetails;
  sections: readonly ServiceSection[];
  roiExamples: readonly ServiceRoiExample[];
  expertise: ServiceExpertise;
  faq: readonly ServiceFaq[];
  relatedPaths: readonly { path: string; label: string }[];
};

export const aiOpportunityAssessment: ServicePageContent = {
  path: "/services/ai-opportunity-assessment",
  metaTitle: "AI Opportunity Assessment for Executives & Leadership Teams",
  metaDescription:
    "Executive AI opportunity assessment to identify high-value use cases, evaluate organizational readiness, and prioritize initiatives with a practical 90-day roadmap. Vendor-neutral advisory.",
  heroEyebrow: "Fixed-Scope Executive Advisory",
  heroTitle: "AI Opportunity Assessment",
  heroSubtitle:
    "A structured executive assessment that helps leadership teams identify where applied AI—including generative AI, workflow automation, and analytics—creates measurable business value across operations, product, and growth.",
  overview:
    "Most organizations face the same challenge: AI investment is accelerating, but prioritization remains unclear. This AI opportunity assessment evaluates workflows, data readiness, governance constraints, and business priorities to surface initiatives with defensible ROI, practical adoption paths, and executive-ready recommendations your board and leadership team can act on.",
  whoItsFor: {
    title: "Who This Assessment Is For",
    intro:
      "Designed for leadership teams that need an independent, business-first view of AI before committing budget, vendors, or internal build efforts.",
    items: [
      "CEOs and founders evaluating AI adoption without a clear business case",
      "CFOs and COOs seeking ROI justification before platform or tooling investments",
      "CPOs and product leaders prioritizing AI-enabled product capabilities",
      "CTOs assessing build-versus-buy decisions and integration complexity",
      "Board members requesting an objective view of AI readiness and risk",
      "Organizations with disconnected AI pilots that have not scaled or demonstrated value",
    ],
  },
  engagementDetails: {
    duration: "Typically 2–4 weeks depending on organizational scope and stakeholder availability",
    format: "Stakeholder interviews, workflow review, executive synthesis session, and written deliverables",
    investment: "Fixed-scope engagements starting at $3,500",
  },
  sections: [
    {
      id: "challenges",
      eyebrow: "Business context",
      title: "Business Challenges an AI Assessment Addresses",
      intro:
        "Leadership teams engage this assessment when AI pressure is high but clarity on where to invest is low.",
      items: [
        "Executive pressure to adopt AI without a prioritized business case or ROI framework",
        "Fragmented pilots across departments that fail to scale or demonstrate measurable impact",
        "Uncertainty about where generative AI, automation, and analytics fit within product and operations",
        "Limited internal capacity to evaluate tools, vendors, models, and implementation risk",
        "Difficulty aligning product, technology, and operations stakeholders on governance and investment",
        "Concern about data privacy, compliance, and responsible AI adoption without slowing progress",
      ],
    },
    {
      id: "methodology",
      eyebrow: "Approach",
      title: "AI Readiness & Opportunity Assessment Methodology",
      intro:
        "A disciplined, vendor-neutral review designed for executive decision-making—not technical experimentation.",
      items: [
        "Stakeholder interviews across product, operations, technology, finance, and leadership",
        "Workflow and process analysis to identify high-friction, high-volume, and high-cost activities",
        "Data, systems, and integration review to assess feasibility and implementation requirements",
        "Use case evaluation across generative AI, agentic workflows, automation, and analytics",
        "Opportunity scoring based on business value, complexity, time to impact, and organizational readiness",
        "Executive synthesis session to align leadership on priorities, sequencing, and next steps",
      ],
    },
    {
      id: "deliverables",
      eyebrow: "Outputs",
      title: "AI Assessment Deliverables",
      items: [
        "Prioritized AI opportunity map across core business functions and product surfaces",
        "Workflow automation and operational efficiency opportunity review",
        "Generative AI and knowledge system use case evaluation where data supports adoption",
        "Vendor-neutral tooling and platform evaluation framework",
        "Risk, governance, data privacy, and responsible AI adoption considerations",
        "90-day implementation roadmap with sequenced initiatives and success metrics",
        "Executive findings presentation suitable for leadership and board audiences",
      ],
    },
    {
      id: "outcomes",
      eyebrow: "Results",
      title: "Expected Business Outcomes",
      items: [
        "Clear prioritization of AI initiatives tied to revenue, efficiency, and decision-quality metrics",
        "Reduced spend on low-value pilots, redundant tooling, and misaligned vendor commitments",
        "Improved executive confidence in what to fund now versus what requires capability building first",
        "Alignment across product, operations, and technology on a practical path forward",
        "Foundation for AI strategy development, governance planning, and execution support",
      ],
    },
  ],
  roiExamples: [
    {
      title: "Operational efficiency gains",
      description:
        "Identifying automation opportunities in reporting, customer support, and internal knowledge workflows can reduce manual effort, shorten decision cycles, and free capacity for higher-value work.",
    },
    {
      title: "Product and revenue impact",
      description:
        "Recommendation engines, personalization, and AI-assisted analytics can strengthen engagement, conversion, and retention when tied to defined product metrics and customer outcomes.",
    },
    {
      title: "Executive decision clarity",
      description:
        "Leadership teams gain a defensible, evidence-based view of where AI creates value now—versus where data maturity, governance, or integration work must come first.",
    },
  ],
  expertise: {
    title: "Advisor Experience & Credentials",
    intro:
      "This assessment is led by Michael Hibbert, Founder & Principal Advisor at Hibbert Advisory Group, drawing on 15+ years of product leadership and executive advisory across media, technology, and growth-stage organizations.",
    credentials: [
      "Led product strategy supporting mobile portfolio expansion at The New York Times",
      "Supported streaming and OTT product initiatives across Paramount Global brands",
      "Advised leadership teams on AI product strategy, workflow automation, and SaaS platform development",
      "Experience spanning media, technology, healthcare, nonprofit, and growth-stage businesses",
      "Vendor-neutral advisory focused on business outcomes—not platform sales or implementation markup",
    ],
  },
  faq: [
    {
      question: "What is an AI opportunity assessment?",
      answer:
        "An AI opportunity assessment is a structured executive engagement that evaluates where applied AI—including generative AI, automation, and analytics—can create measurable business value. It produces prioritized recommendations, readiness insights, and a practical implementation roadmap rather than open-ended experimentation.",
    },
    {
      question: "Who is this engagement best suited for?",
      answer:
        "Leadership teams evaluating AI adoption, prioritizing investments, or seeking an independent view before committing to tools, vendors, or internal build efforts. It is particularly valuable when multiple stakeholders have different assumptions about AI readiness and ROI.",
    },
    {
      question: "How long does the AI opportunity assessment take?",
      answer:
        "Most assessments are completed in two to four weeks depending on organizational complexity, stakeholder availability, and the breadth of functions reviewed.",
    },
    {
      question: "What deliverables are included?",
      answer:
        "Deliverables typically include a prioritized opportunity map, workflow and automation review, vendor-neutral evaluation framework, governance considerations, a 90-day roadmap, and an executive findings presentation for leadership or board review.",
    },
    {
      question: "How do you evaluate AI readiness?",
      answer:
        "Readiness is assessed across data quality and access, systems integration, workflow maturity, team capability, governance constraints, and executive alignment. Opportunities are scored against these factors so recommendations reflect what the organization can execute—not just what is technically possible.",
    },
    {
      question: "What is the difference between an AI assessment and AI strategy consulting?",
      answer:
        "An assessment identifies and prioritizes opportunities with a near-term roadmap. AI strategy and roadmap development goes deeper into governance, adoption planning, investment phasing, and multi-quarter execution design. Many clients begin with an assessment and continue into strategy once priorities are validated.",
    },
    {
      question: "Do you implement the recommendations?",
      answer:
        "This is an advisory engagement focused on assessment and prioritization. Implementation support, roadmap development, fractional product leadership, and delivery through trusted specialists are available as separate engagements.",
    },
    {
      question: "What makes this different from a vendor-led AI assessment?",
      answer:
        "The engagement is vendor-neutral and outcome-oriented. Recommendations are based on business value, organizational readiness, and executive priorities—not a specific platform, model provider, or product sale.",
    },
  ],
  relatedPaths: [
    { path: "/services/ai-opportunity-assessment-small-business", label: "AI Assessment for Growing Businesses" },
    { path: "/services/ai-strategy-roadmap", label: "AI Strategy & Roadmap" },
    { path: "/services/digital-transformation", label: "Digital Transformation" },
    { path: "/services/fractional-product-leadership", label: "Fractional Product Leadership" },
  ],
};

export const aiStrategyRoadmap: ServicePageContent = {
  path: "/services/ai-strategy-roadmap",
  metaTitle: "AI Strategy & Roadmap Development for Organizations",
  metaDescription:
    "AI strategy consulting and roadmap development for leadership teams. Executive workshops, initiative prioritization, governance planning, and adoption strategy with measurable outcomes.",
  heroEyebrow: "Strategic AI Advisory",
  heroTitle: "AI Strategy & Roadmap Development",
  heroSubtitle:
    "Move from AI interest to disciplined execution with an enterprise AI strategy, governance framework, and implementation roadmap your leadership team can fund, govern, and measure.",
  overview:
    "Identifying AI opportunities is only the first step. Organizations need an AI strategy that connects business priorities to adoption plans, governance, investment phasing, and measurable outcomes. This engagement translates insight into an executive-ready roadmap spanning product, operations, and technology—with clear sequencing for generative AI, automation, and analytics initiatives.",
  whoItsFor: {
    title: "Who This Engagement Serves",
    intro:
      "For leadership teams that have validated AI interest and need a structured plan to move from prioritization to execution.",
    items: [
      "Organizations completing an AI opportunity assessment and ready for roadmap development",
      "Executive teams facing board or investor questions about AI investment and governance",
      "Product and technology leaders needing alignment on initiative sequencing and dependencies",
      "Companies scaling from pilots to portfolio-level AI product and operations strategy",
      "Leadership teams navigating responsible AI adoption, compliance, and vendor selection",
      "Growth-stage and enterprise organizations building sustained AI capability—not one-off experiments",
    ],
  },
  engagementDetails: {
    duration: "Typically 3–6 weeks depending on scope, stakeholder alignment needs, and roadmap horizon",
    format: "Executive workshops, cross-functional working sessions, and roadmap documentation with leadership review",
    investment: "Fixed-scope engagements starting at $3,500; expanded scope scoped separately",
  },
  sections: [
    {
      id: "workshops",
      eyebrow: "Engagement model",
      title: "Executive AI Strategy Workshops",
      items: [
        "Leadership alignment sessions on AI priorities, investment criteria, and success metrics",
        "Cross-functional working sessions with product, operations, technology, and finance stakeholders",
        "Scenario planning for adoption sequencing, resource allocation, and capability building",
        "Executive narrative development for board, investor, and leadership audiences",
      ],
    },
    {
      id: "prioritization",
      eyebrow: "Focus",
      title: "AI Initiative Prioritization & Business Cases",
      items: [
        "Business case development for high-value AI initiatives across product and operations",
        "Impact-versus-complexity scoring with readiness and dependency analysis",
        "Sequencing recommendations based on data maturity, integration requirements, and team capacity",
        "Clear distinction between near-term wins, platform investments, and long-term capability building",
      ],
    },
    {
      id: "governance",
      eyebrow: "Risk & control",
      title: "AI Governance & Risk Planning",
      items: [
        "Decision rights and accountability across product, technology, and business teams",
        "Data privacy, security, compliance, and responsible AI considerations for applied use cases",
        "Vendor, model provider, and build-versus-buy evaluation guidance",
        "Measurement frameworks for adoption, model performance, and business impact reporting",
      ],
    },
    {
      id: "adoption",
      eyebrow: "Execution",
      title: "AI Adoption & Change Strategy",
      items: [
        "Change management planning for teams adopting AI-enabled workflows and tools",
        "Training and enablement recommendations for leadership, operators, and product teams",
        "Pilot design with defined success metrics, scale criteria, and rollback considerations",
        "Operating model recommendations for sustained AI product development and governance",
      ],
    },
    {
      id: "roadmap",
      eyebrow: "Deliverable",
      title: "AI Implementation Roadmap Deliverables",
      intro:
        "Roadmaps are tailored to organizational stage and ambition, but typically include:",
      items: [
        "Quarterly initiative priorities with owners, dependencies, and investment phasing",
        "Product, operations, and technology workstreams aligned to revenue and efficiency outcomes",
        "Generative AI, automation, and analytics initiatives sequenced by readiness and risk",
        "Executive milestones for funding decisions, progress reporting, and portfolio review",
        "KPI framework linking AI initiatives to measurable business and operational results",
      ],
    },
  ],
  roiExamples: [
    {
      title: "Faster time to aligned investment",
      description:
        "Leadership teams reduce months of internal debate by establishing a shared prioritization framework, governance model, and sequenced roadmap tied to business outcomes.",
    },
    {
      title: "Reduced implementation risk",
      description:
        "Governance and adoption planning integrated into the roadmap helps teams avoid costly missteps in vendor selection, data handling, and premature scaling of unproven pilots.",
    },
    {
      title: "Sustained execution momentum",
      description:
        "Clear operating rhythms, success metrics, and executive milestones keep AI initiatives accountable beyond initial launch—supporting continuous improvement and portfolio management.",
    },
  ],
  expertise: {
    title: "Advisor Experience & Credentials",
    intro:
      "AI strategy engagements are led by Michael Hibbert, combining executive product leadership experience with hands-on advisory across AI-enabled product development and digital transformation.",
    credentials: [
      "15+ years leading product strategy, platform growth, and digital transformation initiatives",
      "Experience supporting AI product strategy, workflow automation, and analytics-driven optimization",
      "Background across media, streaming, SaaS, and growth-stage technology organizations",
      "Advisory work spanning opportunity assessment through roadmap development and fractional leadership",
      "Executive communication experience with founders, C-suite leaders, and board-level audiences",
    ],
  },
  faq: [
    {
      question: "What is AI strategy and roadmap development?",
      answer:
        "It is an executive advisory engagement that translates AI opportunities into a prioritized, governable implementation plan. The roadmap connects business priorities to adoption sequencing, investment phasing, governance, and measurable outcomes across product and operations.",
    },
    {
      question: "Can this follow an AI Opportunity Assessment?",
      answer:
        "Yes. Many clients begin with an assessment to validate opportunities and continue into roadmap development once priorities and leadership alignment are established.",
    },
    {
      question: "How long does AI strategy development take?",
      answer:
        "Most engagements run three to six weeks depending on organizational complexity, the number of stakeholders involved, and the planning horizon required for the roadmap.",
    },
    {
      question: "What is included in AI strategy consulting?",
      answer:
        "Typical scope includes executive workshops, initiative prioritization, governance planning, adoption strategy, and a documented implementation roadmap with milestones, owners, and success metrics.",
    },
    {
      question: "How do you prioritize AI initiatives?",
      answer:
        "Initiatives are evaluated on business impact, implementation complexity, organizational readiness, data requirements, and dependency risk. The goal is a sequenced portfolio—not a flat list of ideas—that leadership can fund with confidence.",
    },
    {
      question: "Does this include AI implementation?",
      answer:
        "The engagement focuses on strategy, prioritization, and roadmap design. Fractional product leadership, transformation advisory, and delivery through trusted specialists can support execution as follow-on engagements.",
    },
    {
      question: "How do you handle AI governance and risk?",
      answer:
        "Governance planning is integrated into the roadmap so adoption decisions account for data privacy, compliance, vendor risk, model reliability, and organizational readiness—not just technical feasibility.",
    },
    {
      question: "What industries do you support?",
      answer:
        "Experience spans media and publishing, streaming and entertainment, technology, SaaS, healthcare, nonprofit, and growth-stage organizations navigating product-led and operational transformation.",
    },
  ],
  relatedPaths: [
    { path: "/services/ai-opportunity-assessment", label: "AI Opportunity Assessment" },
    { path: "/services/fractional-product-leadership", label: "Fractional Product Leadership" },
    { path: "/services/digital-transformation", label: "Digital Transformation" },
  ],
};

export const fractionalProductLeadership: ServicePageContent = {
  path: "/services/fractional-product-leadership",
  metaTitle: "Fractional Product Leadership & VP Product Advisory",
  metaDescription:
    "Fractional VP Product and CPO-level advisory for SaaS and growth-stage organizations. Roadmap governance, executive alignment, team coaching, and AI product strategy.",
  heroEyebrow: "Executive Product Leadership",
  heroTitle: "Fractional Product Leadership",
  heroSubtitle:
    "Senior fractional product leadership for organizations that need VP-level product direction—roadmap governance, stakeholder alignment, and measurable outcomes—without the timing and cost of a full-time executive hire.",
  overview:
    "Michael Hibbert serves as a Fractional VP Product, Product Director, or Strategic Product Advisor—partnering with founders and leadership teams on product vision, roadmap prioritization, cross-functional execution, and AI-enabled product strategy. Engagements are designed to bring executive product discipline to organizations navigating growth, platform complexity, or strategic repositioning.",
  whoItsFor: {
    title: "Who Benefits from Fractional Product Leadership",
    intro:
      "For organizations that need experienced product leadership now—not after a six-month executive search.",
    items: [
      "Founders and CEOs at growth-stage companies without a senior product executive",
      "SaaS businesses scaling product teams and needing roadmap governance",
      "Companies launching AI-enabled product capabilities requiring executive direction",
      "Organizations between full-time product leaders needing continuity and strategic oversight",
      "Leadership teams preparing for fundraising, board review, or market expansion",
      "Digital platform companies aligning product, engineering, and go-to-market execution",
    ],
  },
  engagementDetails: {
    duration: "Ongoing monthly engagements calibrated to organizational stage and priorities",
    format: "Strategic advisory sessions, leadership alignment, roadmap governance, and team coaching",
    investment: "Engagements begin at $8,000/month",
  },
  sections: [
    {
      id: "vision",
      eyebrow: "Direction",
      title: "Product Vision & Strategic Direction",
      items: [
        "Clarify product direction aligned to business strategy, market position, and revenue goals",
        "Define customer and business outcomes that guide prioritization and investment decisions",
        "Translate executive goals into product narratives stakeholders and investors can support",
        "Establish decision frameworks for roadmap tradeoffs, platform bets, and resource allocation",
      ],
    },
    {
      id: "roadmap",
      eyebrow: "Planning",
      title: "Product Roadmap Development & Governance",
      items: [
        "Prioritized roadmaps tied to revenue, adoption, retention, and operational efficiency goals",
        "Cross-functional planning across product, engineering, design, and go-to-market teams",
        "Quarterly planning rhythms with executive-ready reporting and accountability structures",
        "Alignment between near-term delivery commitments and longer-term platform strategy",
      ],
    },
    {
      id: "coaching",
      eyebrow: "Capability",
      title: "Product Team Coaching & Development",
      items: [
        "Coaching for product managers, leads, and cross-functional partners on discovery and delivery",
        "Improved product discovery, prioritization frameworks, and stakeholder communication practices",
        "Support for building product operating practices as teams scale beyond early-stage dynamics",
        "Mentorship on executive communication, outcome accountability, and evidence-based decision-making",
      ],
    },
    {
      id: "alignment",
      eyebrow: "Leadership",
      title: "Executive & Stakeholder Alignment",
      items: [
        "Stakeholder alignment across founders, executives, and functional leaders on product priorities",
        "Board and investor narrative support for product strategy, growth metrics, and AI initiatives",
        "Resolution of prioritization conflicts with evidence-based recommendations and clear tradeoffs",
        "Executive session facilitation for strategic product decisions and portfolio reviews",
      ],
    },
    {
      id: "operations",
      eyebrow: "Execution",
      title: "Product Operations & Delivery Discipline",
      items: [
        "Product operating model design for growth-stage and enterprise product organizations",
        "Metrics frameworks for product performance, funnel health, delivery velocity, and quality",
        "Process improvements that reduce friction between strategy, discovery, and engineering execution",
        "Vendor and platform decisions aligned to product goals, technical constraints, and business outcomes",
      ],
    },
    {
      id: "ai-product",
      eyebrow: "AI strategy",
      title: "AI Product Strategy & Roadmap Integration",
      items: [
        "Identification of AI-enabled product capabilities with defensible business value",
        "Roadmap integration for recommendation systems, analytics, copilots, and workflow automation",
        "Executive guidance on build-versus-buy, model selection, and adoption sequencing",
        "Product narrative development for AI initiatives with measurable customer and revenue outcomes",
      ],
    },
  ],
  roiExamples: [
    {
      title: "Accelerated product decision-making",
      description:
        "Leadership teams gain senior product judgment on prioritization, platform investments, and go-to-market alignment—reducing cycles lost to unclear ownership or conflicting stakeholder views.",
    },
    {
      title: "Improved roadmap accountability",
      description:
        "Structured roadmap governance connects delivery to business metrics, giving executives visibility into progress, tradeoffs, and resource allocation across product initiatives.",
    },
    {
      title: "Stronger team capability",
      description:
        "Product team coaching builds sustainable discovery, prioritization, and communication practices—so product discipline continues beyond the engagement.",
    },
  ],
  expertise: {
    title: "Advisor Experience & Credentials",
    intro:
      "Fractional engagements are led by Michael Hibbert, with executive product leadership experience across publishing, streaming, radio, B2B media, and AI-enabled SaaS platforms.",
    credentials: [
      "Expanded mobile product portfolio strategy at The New York Times across multiple applications",
      "Supported streaming and OTT product initiatives across Paramount Global brands",
      "Led digital transformation and operational programs at CBS Radio",
      "Developed B2B platform and API-driven products at Penton Media",
      "Founded and launched JobFit AI, an AI-powered career intelligence platform",
      "15+ years advising founders and leadership teams on product strategy and growth",
    ],
  },
  faq: [
    {
      question: "What is fractional product leadership?",
      answer:
        "Fractional product leadership provides senior product executive capability—typically at VP or Director level—on a part-time or ongoing advisory basis. It includes strategic direction, roadmap governance, stakeholder alignment, and team coaching without requiring a full-time hire.",
    },
    {
      question: "What does fractional product leadership include?",
      answer:
        "Scope typically includes product vision and strategy, roadmap prioritization, executive alignment, team coaching, product operations design, and AI product strategy integration. Engagements are calibrated to organizational stage and leadership needs.",
    },
    {
      question: "Is this a replacement for a full-time VP Product?",
      answer:
        "Fractional leadership provides senior product direction, executive alignment, and strategic oversight. It is designed to complement existing teams and scale with organizational needs—often serving as a bridge during growth or executive transitions.",
    },
    {
      question: "When should a company hire a fractional product leader?",
      answer:
        "Organizations typically engage fractional leadership when they need executive product judgment immediately, are scaling beyond founder-led product decisions, are launching complex platform or AI initiatives, or are between full-time product executives.",
    },
    {
      question: "How does fractional product leadership work with engineering?",
      answer:
        "The role partners with engineering leadership on roadmap feasibility, technical tradeoffs, and delivery accountability—without replacing engineering management. The focus is alignment between business priorities, product direction, and execution capacity.",
    },
    {
      question: "Can you support AI product initiatives?",
      answer:
        "Yes. AI product strategy is integrated into fractional leadership engagements, including opportunity prioritization, roadmap planning, build-versus-buy guidance, and executive communication for AI-enabled capabilities.",
    },
    {
      question: "Can fractional leaders support board and investor presentations?",
      answer:
        "Yes. Engagements often include narrative development and strategic framing for board reviews, investor updates, and executive planning sessions tied to product and growth metrics.",
    },
    {
      question: "Who is the ideal client?",
      answer:
        "Founders, CEOs, and leadership teams at growth-stage companies, SaaS businesses, and digital platform organizations that need experienced product leadership with measurable business accountability.",
    },
  ],
  relatedPaths: [
    { path: "/services/ai-strategy-roadmap", label: "AI Strategy & Roadmap" },
    { path: "/services/ai-opportunity-assessment", label: "AI Opportunity Assessment" },
    { path: "/about/michael-hibbert", label: "About Michael Hibbert" },
  ],
};

export const digitalTransformation: ServicePageContent = {
  path: "/services/digital-transformation",
  metaTitle: "Digital Transformation Advisory for Leadership Teams",
  metaDescription:
    "Digital transformation consulting for business modernization, workflow optimization, technology assessment, and organizational readiness. Executive advisory focused on measurable outcomes.",
  heroEyebrow: "Transformation Advisory",
  heroTitle: "Digital Transformation Advisory",
  heroSubtitle:
    "Executive advisory for organizations modernizing operations, product capabilities, and technology foundations—connecting transformation strategy to practical execution and measurable business results.",
  overview:
    "Digital transformation fails when strategy, operations, and technology move independently. This advisory engagement helps leadership teams assess readiness, prioritize modernization initiatives, and build practical plans that improve efficiency, customer experience, and competitive position—integrating workflow automation, platform modernization, and AI-enabled capabilities where they support measurable outcomes.",
  whoItsFor: {
    title: "Who This Advisory Serves",
    intro:
      "For leadership teams navigating modernization across product, operations, and technology—not generic transformation programs.",
    items: [
      "CEOs and COOs leading operational modernization and efficiency initiatives",
      "CPOs and CTOs aligning product and technology roadmaps during platform transitions",
      "Organizations with legacy workflows limiting speed, visibility, or customer experience",
      "Leadership teams evaluating automation, AI, and systems investments for transformation ROI",
      "Growth-stage companies outgrowing early-stage tools, processes, and operating models",
      "Media, technology, and platform organizations modernizing delivery and audience engagement",
    ],
  },
  engagementDetails: {
    duration: "Typically 3–8 weeks for assessment and planning; ongoing advisory available",
    format: "Leadership interviews, process and systems review, prioritization workshops, and transformation roadmap",
    investment: "Scoped based on organizational complexity; discovery begins with a consultation",
  },
  sections: [
    {
      id: "process",
      eyebrow: "Operations",
      title: "Business Process Optimization & Workflow Analysis",
      intro:
        "Transformation begins with understanding where friction costs time, quality, and revenue.",
      items: [
        "Identification of workflow bottlenecks across product, operations, finance, and customer-facing teams",
        "Recommendations to reduce friction in planning, delivery, reporting, and decision cycles",
        "Cross-functional process design aligned to revenue, efficiency, and customer experience outcomes",
        "Operational metrics to track improvement, execution quality, and transformation progress",
      ],
    },
    {
      id: "technology",
      eyebrow: "Systems",
      title: "Technology Assessment & Modernization Planning",
      items: [
        "Evaluation of platforms, tools, architecture constraints, and technical debt affecting execution",
        "Vendor and build-versus-buy guidance for modernization and platform investments",
        "Integration considerations across product, data, CRM, and operations systems",
        "Technology decisions framed by business value, risk, and organizational change capacity",
      ],
    },
    {
      id: "readiness",
      eyebrow: "Organization",
      title: "Organizational Readiness & Change Capacity",
      items: [
        "Assessment of team structure, skills, leadership alignment, and change capacity",
        "Identification of capability gaps affecting transformation execution and adoption",
        "Operating model recommendations as initiatives scale beyond pilot stage",
        "Stakeholder mapping for cross-functional initiatives requiring sustained executive sponsorship",
      ],
    },
    {
      id: "workflow",
      eyebrow: "Modernization",
      title: "Digital Workflow & Platform Modernization",
      items: [
        "Redesign of repetitive workflows affecting speed, accuracy, and customer experience",
        "Digital product and platform improvements tied to engagement, retention, and revenue goals",
        "Data, reporting, and executive dashboard enhancements for leadership visibility",
        "Practical modernization paths balancing business impact with implementation risk and cost",
      ],
    },
    {
      id: "automation",
      eyebrow: "Efficiency",
      title: "Automation & AI-Enabled Transformation Opportunities",
      items: [
        "Targeted automation across operations, support, finance, and internal knowledge workflows",
        "AI-enabled efficiency opportunities where data maturity and process discipline support adoption",
        "Prioritization based on time savings, error reduction, scalability, and customer impact",
        "Sequencing recommendations for pilots, validation criteria, and broader organizational rollout",
      ],
    },
    {
      id: "change",
      eyebrow: "Adoption",
      title: "Change Management & Transformation Adoption",
      items: [
        "Stakeholder communication plans for transformation initiatives across business units",
        "Adoption strategies for new tools, processes, and product capabilities",
        "Executive reporting rhythms to maintain momentum, accountability, and course correction",
        "Support for aligning teams around measurable transformation outcomes—not activity metrics",
      ],
    },
  ],
  roiExamples: [
    {
      title: "Operational efficiency and cost reduction",
      description:
        "Workflow modernization and targeted automation can reduce manual effort, shorten cycle times, and improve resource allocation across product and operations teams.",
    },
    {
      title: "Improved customer and product outcomes",
      description:
        "Platform and process improvements tied to customer experience metrics support retention, conversion, and service quality—not just internal efficiency.",
    },
    {
      title: "Executive visibility and decision speed",
      description:
        "Data, reporting, and dashboard enhancements give leadership teams clearer visibility into performance, enabling faster prioritization and investment decisions.",
    },
  ],
  expertise: {
    title: "Advisor Experience & Credentials",
    intro:
      "Digital transformation advisory is led by Michael Hibbert, with direct experience leading and advising on transformation programs across media, broadcasting, B2B platforms, and technology organizations.",
    credentials: [
      "Led digital transformation and operational programs at CBS Radio",
      "Supported platform and streaming initiatives across Paramount Global",
      "Directed product portfolio expansion and mobile modernization at The New York Times",
      "Developed B2B digital products and API ecosystems at Penton Media",
      "Advises growth-stage and enterprise leadership teams on modernization sequencing and execution",
      "Integrates AI and automation planning into transformation roadmaps where business value is clear",
    ],
  },
  faq: [
    {
      question: "What is digital transformation advisory?",
      answer:
        "Digital transformation advisory helps leadership teams assess readiness, prioritize modernization initiatives, and build practical execution plans across process, technology, and organizational change—focused on measurable business outcomes rather than technology adoption for its own sake.",
    },
    {
      question: "How is this different from systems implementation?",
      answer:
        "This is strategic advisory focused on assessment, prioritization, and execution planning. Hibbert Advisory Group is not a development agency. Delivery support is available through trusted specialists under executive direction when implementation is required.",
    },
    {
      question: "How long does digital transformation planning take?",
      answer:
        "Assessment and planning engagements typically run three to eight weeks depending on organizational scope. Ongoing advisory is available for leadership teams managing multi-quarter transformation programs.",
    },
    {
      question: "Can this include AI and automation planning?",
      answer:
        "Yes. Automation and applied AI opportunities are evaluated as part of modernization and operational improvement when data maturity, governance, and process discipline support measurable business outcomes.",
    },
    {
      question: "How do you measure digital transformation success?",
      answer:
        "Success metrics are defined upfront based on business priorities—operational efficiency, revenue impact, customer experience, decision speed, or cost reduction. The advisory engagement establishes KPIs and reporting rhythms so progress is measurable, not anecdotal.",
    },
    {
      question: "What types of organizations benefit most?",
      answer:
        "Growth-stage companies, digital platforms, media and technology organizations, and leadership teams navigating product, operations, and technology change where legacy processes or systems limit execution.",
    },
    {
      question: "Do you support technology delivery and implementation?",
      answer:
        "Strategy and execution planning are core to the advisory engagement. When implementation is needed, Hibbert Advisory Group coordinates trusted development and technology specialists—maintaining executive oversight without operating as a large agency.",
    },
    {
      question: "How do engagements typically begin?",
      answer:
        "Most begin with a discovery conversation and structured intake, followed by a scoped assessment or advisory engagement aligned to leadership priorities and organizational readiness.",
    },
  ],
  relatedPaths: [
    { path: "/services/ai-opportunity-assessment", label: "AI Opportunity Assessment" },
    { path: "/services/ai-strategy-roadmap", label: "AI Strategy & Roadmap" },
    { path: "/strategy-to-execution", label: "Strategy to Execution" },
  ],
};

export const aiOpportunityAssessmentSmallBusiness: ServicePageContent = {
  path: "/services/ai-opportunity-assessment-small-business",
  metaTitle: "AI Opportunity Assessment for Growing Businesses",
  metaDescription:
    "Practical AI opportunity assessment for small businesses and professional services firms. Workflow review, prioritized recommendations, and a 90-day roadmap for measurable business value.",
  heroEyebrow: "Fixed-Scope Advisory",
  heroTitle: "AI Opportunity Assessment for Growing Businesses",
  heroSubtitle:
    "A practical consulting engagement that helps business owners and professional practices identify where AI creates measurable value—in time saved, revenue gained, and client experience improved.",
  overview:
    "Growing businesses do not need enterprise AI programs. They need clarity: which workflows to improve first, what tools fit their operations, and how to measure results. This assessment reviews your business, identifies practical AI opportunities, and delivers a prioritized 90-day roadmap you can act on—without technical jargon or vendor sales pressure.",
  whoItsFor: {
    title: "Who This Engagement Is For",
    intro:
      "Designed for business owners and operators who need practical direction—not a technology project.",
    items: [
      "Small business owners evaluating AI for the first time",
      "Professional services firms—advisors, consultants, coaches, agencies, law firms",
      "Growing companies with 5–50 employees seeking efficiency without large IT budgets",
      "Founders who have tried AI tools but lack a prioritized implementation plan",
      "Nonprofits and mission-driven organizations seeking operational improvement",
      "Agencies and practices preparing technology investment decisions",
    ],
  },
  engagementDetails: {
    duration: "Typically 2–3 weeks depending on business complexity and owner availability",
    format: "Business interview, workflow review, opportunity analysis, and findings presentation",
    investment: "Fixed-scope engagements starting at $3,500",
  },
  sections: [
    {
      id: "reviewed",
      eyebrow: "Scope",
      title: "What Is Reviewed",
      items: [
        "Business model, growth priorities, and team structure",
        "Client intake, communication, and follow-up workflows",
        "Scheduling, proposals, marketing, and sales support activities",
        "Administrative, reporting, and internal operations",
        "Existing tools, data quality, and integration considerations",
        "Time allocation—where owners and staff lose hours to repetitive work",
      ],
    },
    {
      id: "delivered",
      eyebrow: "Deliverables",
      title: "What Is Delivered",
      items: [
        "Prioritized AI opportunity map across your core workflows",
        "Workflow analysis summary with time and revenue impact estimates",
        "Prioritization matrix scoring opportunities by impact and ease of implementation",
        "90-day implementation roadmap with sequenced next steps",
        "Tool category recommendations—vendor-neutral, sized to your budget",
        "Executive findings review session with Q&A",
      ],
    },
    {
      id: "recommendations",
      eyebrow: "Examples",
      title: "Sample Recommendations",
      intro:
        "Recommendations are tailored to each business. Representative examples include:",
      items: [
        "Automate appointment scheduling and client reminders—recover 5+ hours per week",
        "Implement lead qualification workflow—improve conversion on inbound inquiries",
        "Deploy proposal drafting assistance—reduce turnaround from days to hours",
        "Organize firm knowledge base—eliminate time searching for past work and policies",
        "Automate client follow-up sequences—strengthen retention without manual outreach",
        "Streamline monthly reporting compilation—reduce administrative burden at month-end",
      ],
    },
    {
      id: "outcomes",
      eyebrow: "Results",
      title: "Expected Outcomes",
      items: [
        "Clear priorities for AI investment—fund what matters first, defer what does not",
        "Reduced risk of spending on tools that never get adopted",
        "Measurable success metrics defined before implementation begins",
        "Owner confidence in what to implement internally versus where to seek help",
        "Foundation for ongoing advisory or Strategy to Execution support if needed",
      ],
    },
  ],
  roiExamples: [
    {
      title: "Time recovered for revenue work",
      description:
        "Owners and principals often recover 5–15 hours per week by automating scheduling, follow-up, and administrative workflows—time redirected to clients and business development.",
    },
    {
      title: "Revenue from faster response",
      description:
        "Lead qualification and instant response workflows improve conversion on inbound inquiries—particularly valuable for competitive professional services markets.",
    },
    {
      title: "Capacity without new hires",
      description:
        "Workflow automation allows growing practices to serve more clients with the same team—improving scalability without proportional administrative hiring.",
    },
  ],
  expertise: {
    title: "Advisor Experience",
    intro:
      "Assessments are led by Michael Hibbert, Founder & Principal Advisor at Hibbert Advisory Group—with experience advising growing businesses, professional practices, and organizations from startup stage through enterprise scale.",
    credentials: [
      "15+ years of product leadership and executive advisory experience",
      "Founded and launched JobFit AI, an AI-powered career intelligence platform",
      "Advisory work spanning professional services, SaaS, healthcare, nonprofit, and media",
      "Vendor-neutral recommendations focused on business outcomes—not platform sales",
      "Practical approach designed for business owners without technical backgrounds",
    ],
  },
  faq: [
    {
      question: "What is an AI opportunity assessment for small business?",
      answer:
        "It is a fixed-scope advisory engagement that reviews your business workflows, identifies practical AI applications, prioritizes opportunities by business impact, and delivers a 90-day implementation roadmap—designed for owners, not technical teams.",
    },
    {
      question: "How is this different from the enterprise AI assessment?",
      answer:
        "Both use the same disciplined methodology. The growing business assessment is scoped and priced for smaller organizations—focused on practical workflow applications rather than enterprise governance and portfolio programs.",
    },
    {
      question: "Do I need technical knowledge to participate?",
      answer:
        "No. You describe how your business works. Advisory work translates that into prioritized opportunities and practical recommendations in plain business language.",
    },
    {
      question: "What does the assessment cost?",
      answer:
        "Fixed-scope engagements start at $3,500. Final scope is confirmed during discovery based on business size and workflow breadth.",
    },
    {
      question: "How long does it take?",
      answer:
        "Most assessments complete in two to three weeks depending on owner availability and business complexity.",
    },
    {
      question: "Will you implement the recommendations?",
      answer:
        "The assessment focuses on identification and prioritization. Implementation support is available through Strategy to Execution engagements with trusted specialists when technical help is needed.",
    },
    {
      question: "Can you help my specific industry?",
      answer:
        "Yes. Industry guides are available for financial advisors, consultants, coaches, real estate, law firms, and insurance agencies. The assessment is customized to your specific workflows regardless of industry.",
    },
    {
      question: "What if I have already tried AI tools?",
      answer:
        "The assessment evaluates what is working, what should expand, and what should be retired—producing a coherent plan rather than accumulating disconnected tools.",
    },
  ],
  relatedPaths: [
    { path: "/small-business-ai", label: "Small Business AI Resources" },
    { path: "/small-business-ai/10-ways-small-businesses-can-use-ai", label: "10 Ways to Use AI" },
    { path: "/services/ai-opportunity-assessment", label: "Enterprise AI Assessment" },
    { path: "/strategy-to-execution", label: "Strategy to Execution" },
  ],
};

export const ALL_SERVICE_PAGES = [
  aiOpportunityAssessment,
  aiStrategyRoadmap,
  fractionalProductLeadership,
  digitalTransformation,
  aiOpportunityAssessmentSmallBusiness,
] as const;
