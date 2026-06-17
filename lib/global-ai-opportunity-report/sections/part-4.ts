import type { ReportSection } from "../types";

export const section10ExecutiveActionPlan: ReportSection = {
  id: "executive-action-plan",
  number: 10,
  title: "Executive Action Plan",
  subtitle: "Immediate actions, strategic priorities, and investment considerations",
  blocks: [
    {
      type: "figure",
      figure: {
        imageKey: "aiLeadershipGap",
        pullQuote:
          "The greatest competitive advantage comes from leadership, not tools.",
      },
    },
    {
      type: "prose",
      paragraphs: [
        "This section translates report findings into actionable guidance for executive teams. The recommendations below are designed for implementation within the current quarter—not deferred to the next planning cycle.",
      ],
    },
    {
      type: "heading",
      text: "Immediate Actions (Next 30 Days)",
      level: 3,
    },
    {
      type: "numbered",
      items: [
        "Commission a Hibbert AI Readiness Framework assessment with cross-functional input from leadership, IT, data, HR, and business unit owners",
        "Convene a half-day executive working session to review readiness results and select 3–5 priority AI use cases",
        "Assign named executive sponsors with explicit accountability for each priority use case",
        "Establish baseline metrics for selected workflows before any technology deployment",
        "Draft a lightweight AI governance charter defining decision rights, risk tiers, and approval workflows",
        "Communicate AI strategy direction to the organization with clarity on priorities, not possibilities",
      ],
    },
    {
      type: "heading",
      text: "Strategic Priorities (90–180 Days)",
      level: 3,
    },
    {
      type: "bullets",
      items: [
        "Deploy pilots for top 3 use cases with production integration paths defined upfront",
        "Invest in data readiness for priority use cases—quality, access, and governance—in parallel with capability deployment",
        "Build change management and training programs proportional to deployment scope",
        "Establish quarterly portfolio review with kill criteria for underperforming initiatives",
        "Evaluate build-vs-buy decisions with total cost of ownership analysis, not license cost alone",
        "Begin agentic AI evaluation for internal, low-risk workflows if governance maturity supports it",
      ],
    },
    {
      type: "heading",
      text: "Investment Considerations",
      level: 3,
    },
    {
      type: "prose",
      paragraphs: [
        "AI investment should follow a portfolio model—not a single large bet. Based on organizational size and readiness, the following allocation framework provides guidance for budget planning. Adjust based on readiness scores and industry risk profile.",
      ],
    },
    {
      type: "stats",
      title: "Recommended investment allocation",
      items: [
        { value: "40%", label: "Use case deployment & integration", source: "Capability delivery" },
        { value: "25%", label: "Data readiness & infrastructure", source: "Foundation investment" },
        { value: "20%", label: "Change management & training", source: "Adoption enablement" },
        { value: "10%", label: "Governance & risk management", source: "Compliance & security" },
        { value: "5%", label: "Innovation & emerging capability", source: "Agentic AI, R&D" },
      ],
    },
    {
      type: "figure",
      figure: { imageKey: "aiInvestmentAllocation" },
    },
    {
      type: "heading",
      text: "Leadership Recommendations",
      level: 3,
    },
    {
      type: "two-column",
      left: {
        title: "CEO & Board",
        items: [
          "Set AI as a standing board agenda item with outcome reporting",
          "Hold executive team accountable for portfolio ROI, not pilot count",
          "Approve governance framework before scaling customer-facing AI",
          "Communicate AI strategy externally to investors, customers, and talent markets",
        ],
      },
      right: {
        title: "CIO, CTO & Product Leaders",
        items: [
          "Define integration architecture before vendor selection",
          "Partner with business units on use case design—not IT-led deployment",
          "Invest in observability, security, and audit capability for production AI",
          "Evaluate agentic AI against governance maturity, not hype cycles",
        ],
      },
    },
    {
      type: "callout",
      callout: {
        variant: "executive",
        title: "The decisive quarter",
        body: "Organizations that complete readiness assessment, prioritize use cases, and launch disciplined pilots in the next 90 days will enter 2027 with compounding capability. Organizations that defer action will face higher catch-up costs as competitors operationalize AI across product, operations, and customer experience.",
      },
    },
  ],
};

export const section11AboutAuthor: ReportSection = {
  id: "about-author",
  number: 11,
  title: "About Michael Hibbert",
  subtitle: "Founder, Hibbert Advisory Group",
  blocks: [
    {
      type: "author-profile",
      profile: {
        name: "Michael Hibbert",
        title: "Founder, Hibbert Advisory Group",
        expertise: [
          "AI Strategy",
          "Product Leadership",
          "Digital Transformation",
          "Executive Advisory",
          "Business Transformation",
        ],
        biography:
          "Michael Hibbert is a product, strategy, and transformation leader with experience spanning enterprise software, media, digital platforms, AI-powered products, and organizational transformation initiatives.",
      },
    },
    {
      type: "heading",
      text: "Product Leadership Background",
      level: 3,
    },
    {
      type: "prose",
      paragraphs: [
        "Michael's career spans media, technology, SaaS, healthcare, and professional services—industries where product strategy, audience engagement, and digital transformation intersect. His advisory approach combines executive-level strategic framing with hands-on product leadership experience, enabling recommendations that account for both boardroom priorities and operational reality.",
      ],
    },
    {
      type: "bullets",
      title: "Selected experience",
      items: [
        "The New York Times — Product strategy and mobile portfolio expansion supporting audience engagement growth and analytics-driven optimization across digital products",
        "Paramount Global — Platform and product leadership supporting global OTT streaming initiatives, content delivery, and digital audience experiences",
        "CBS Radio — Digital transformation programs connecting product strategy with operational execution and audience growth across radio and digital platforms",
        "Penton Media — Product and platform initiatives across B2B media and professional services publishing ecosystems",
        "JobFit AI — Founded an AI-powered career intelligence platform applying machine learning to job matching, skills analysis, and career pathway optimization",
      ],
    },
    {
      type: "heading",
      text: "Advisory Focus",
      level: 3,
    },
    {
      type: "bullets",
      items: [
        "AI strategy, opportunity assessment, and executive-ready roadmaps",
        "Fractional product leadership for growth-stage and enterprise organizations",
        "Digital transformation advisory across process, technology, and organizational readiness",
        "Revenue growth diagnostics and product portfolio prioritization",
        "Executive stakeholder alignment and board-level communication on technology strategy",
      ],
    },
    {
      type: "callout",
      callout: {
        variant: "insight",
        title: "Advisory philosophy",
        body: "Effective AI strategy requires product thinking—not just technology procurement. Organizations need clarity on what to build, what to buy, what to defer, and how to measure outcomes. That discipline is the foundation of Hibbert Advisory Group's engagement model.",
      },
    },
  ],
};

export const section12AboutHag: ReportSection = {
  id: "about-hibbert-advisory",
  number: 12,
  title: "About Hibbert Advisory Group",
  subtitle: "Executive advisory for AI strategy, product leadership, and digital transformation",
  blocks: [
    {
      type: "prose",
      paragraphs: [
        "Hibbert Advisory Group is an executive advisory practice serving CEOs, founders, and leadership teams worldwide. The firm specializes in helping organizations identify AI opportunities, define product strategy, navigate digital transformation, and execute initiatives through a combination of strategic leadership and trusted delivery partnerships.",
      ],
    },
    {
      type: "heading",
      text: "Core Capabilities",
      level: 3,
    },
    {
      type: "bullets",
      title: "AI Strategy",
      items: [
        "AI opportunity assessment and prioritization across business functions",
        "Executive-ready roadmaps with governance, adoption, and investment frameworks",
        "Build-vs-buy analysis and vendor evaluation support",
        "Board and investor communication on AI strategy and portfolio outcomes",
      ],
    },
    {
      type: "bullets",
      title: "Product Leadership",
      items: [
        "Fractional Chief Product Officer engagements for growth-stage and enterprise organizations",
        "Product roadmap governance and cross-functional alignment",
        "AI product strategy and feature prioritization for SaaS and digital platforms",
        "Portfolio management across multi-product ecosystems",
      ],
    },
    {
      type: "bullets",
      title: "Digital Transformation",
      items: [
        "Business modernization planning across process, technology, and organizational readiness",
        "Workflow analysis and automation opportunity identification",
        "Change management strategy and executive stakeholder alignment",
        "Strategy-to-execution delivery through trusted specialist network",
      ],
    },
    {
      type: "bullets",
      title: "Executive Advisory",
      items: [
        "CEO and founder advisory on growth strategy, product direction, and technology investment",
        "Board preparation and executive communication support",
        "Revenue diagnostics and operational efficiency assessment",
        "International advisory across North America, Europe, Middle East, and Asia-Pacific",
      ],
    },
    {
      type: "bullets",
      title: "AI Opportunity Assessments",
      items: [
        "Fixed-scope assessments identifying high-value AI opportunities with prioritized roadmaps",
        "Hibbert AI Readiness Framework evaluation with dimension scoring and gap remediation",
        "Industry-specific opportunity analysis for financial services, healthcare, SaaS, and professional services",
        "Small business and growing organization assessments with practical 90-day action plans",
      ],
    },
    {
      type: "stats",
      items: [
        { value: "15+", label: "Years of product & advisory experience" },
        { value: "Global", label: "Remote-first executive engagements" },
        { value: "9", label: "Industries supported" },
        { value: "7", label: "Regional markets served" },
      ],
    },
    {
      type: "prose",
      paragraphs: [
        "Hibbert Advisory Group operates as a strategic advisory practice—not a large agency. Engagements are led personally by Michael Hibbert, supported by a curated network of specialists who execute under executive direction when strategy requires implementation support.",
      ],
    },
  ],
};

export const sectionCta: ReportSection = {
  id: "call-to-action",
  number: 13,
  title: "Ready to Identify Your AI Opportunities?",
  subtitle: "Request a consultation",
  blocks: [
    {
      type: "prose",
      paragraphs: [
        "The frameworks, industry analysis, and roadmaps in this report are designed to accelerate your organization's AI strategy—not replace the judgment and context that only your leadership team possesses.",
        "Request a consultation to discuss how these insights apply to your organization's priorities, readiness, and competitive landscape. Hibbert Advisory Group provides AI opportunity assessments, executive advisory, and strategy-to-execution support for leadership teams worldwide.",
      ],
    },
    {
      type: "callout",
      callout: {
        variant: "executive",
        title: "Request a Consultation",
        body: "Discover how AI can create measurable value for your organization. Complete the consultation intake to schedule a strategic discussion and receive personalized guidance on your AI priorities.",
      },
    },
    {
      type: "bullets",
      title: "What to expect",
      items: [
        "Confidential discussion of your organization's AI priorities and challenges",
        "Application of the Hibbert AI Readiness Framework to your context",
        "Identification of high-value opportunity areas based on your industry and objectives",
        "Clear next steps—whether through advisory engagement, assessment, or self-directed execution",
      ],
    },
  ],
};
