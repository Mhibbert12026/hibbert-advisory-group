import type { ReportSection } from "../types";

export const section07GlobalPerspectives: ReportSection = {
  id: "global-perspectives",
  number: 7,
  title: "Global Perspectives",
  subtitle: "Regional adoption patterns, opportunities, and challenges",
  blocks: [
    {
      type: "prose",
      paragraphs: [
        "AI adoption is a global phenomenon, but regional dynamics differ materially based on regulatory environment, infrastructure maturity, talent availability, and economic priorities. Leadership teams operating across borders—or evaluating international expansion—must calibrate AI strategy to regional context rather than applying a single global playbook.",
      ],
    },
    {
      type: "figure",
      figure: { imageKey: "aiOpportunityGlobal" },
    },
    {
      type: "region",
      data: {
        region: "North America",
        adoptionPatterns: [
          "Highest enterprise AI investment globally, led by technology, financial services, and healthcare",
          "Aggressive venture funding for AI-native startups creating competitive pressure on incumbents",
          "Strong cloud infrastructure enabling rapid deployment and scaling",
          "Board-level AI accountability increasingly standard in public companies",
        ],
        opportunities: [
          "Product-led AI differentiation in competitive SaaS and consumer markets",
          "Operational efficiency gains in high-labor-cost service industries",
          "AI-enabled healthcare and financial services innovation with large addressable markets",
          "Talent concentration enabling sophisticated AI team building",
        ],
        challenges: [
          "Regulatory uncertainty at federal and state levels creating compliance complexity",
          "Talent competition and compensation inflation for AI specialists",
          "Risk of over-investment in experimentation without outcome discipline",
          "Geopolitical considerations affecting semiconductor and cloud supply chains",
        ],
      },
    },
    {
      type: "region",
      data: {
        region: "United Kingdom",
        adoptionPatterns: [
          "Strong financial services and professional services AI adoption",
          "Pro-innovation regulatory posture with AI Safety Institute leadership",
          "Government digital strategy emphasizing public sector AI efficiency",
          "Growing AI startup ecosystem centered in London and Cambridge",
        ],
        opportunities: [
          "Regulatory technology and compliance automation for global financial markets",
          "AI-enhanced professional services exportable to Commonwealth and European markets",
          "Public-private partnerships for healthcare and education AI pilots",
          "Brexit-driven need for operational efficiency through automation",
        ],
        challenges: [
          "Post-Brexit talent mobility constraints affecting specialist recruitment",
          "Smaller domestic market requiring international go-to-market for AI products",
          "GDPR and UK data protection requirements constraining training data strategies",
          "Economic headwinds limiting enterprise transformation budgets",
        ],
      },
    },
    {
      type: "region",
      data: {
        region: "Europe",
        adoptionPatterns: [
          "EU AI Act driving governance-first adoption patterns across member states",
          "Manufacturing and industrial AI leadership in Germany, Netherlands, and Nordics",
          "Variable adoption speed between Northern and Southern European markets",
          "Strong privacy culture shaping data strategy and model development approaches",
        ],
        opportunities: [
          "Industrial AI and smart manufacturing for export-oriented economies",
          "Regulatory compliance solutions as competitive advantage in governed markets",
          "Cross-border data governance frameworks enabling trusted AI deployment",
          "Green AI applications supporting sustainability and energy transition goals",
        ],
        challenges: [
          "EU AI Act compliance costs disproportionately affecting mid-market organizations",
          "Fragmented national regulations beyond EU framework creating complexity",
          "Slower venture funding cycles compared to North America and Asia",
          "Language and cultural localization requirements for pan-European AI products",
        ],
      },
    },
    {
      type: "region",
      data: {
        region: "LATAM",
        adoptionPatterns: [
          "Rapid mobile-first digital adoption creating AI opportunity in customer experience",
          "Fintech and digital banking leading enterprise AI investment",
          "Growing technology hubs in Brazil, Mexico, Colombia, and Argentina",
          "Public sector digitization initiatives accelerating in select markets",
        ],
        opportunities: [
          "Financial inclusion and credit scoring with alternative data sources",
          "Agricultural optimization and supply chain efficiency for export economies",
          "Customer service automation serving large Spanish and Portuguese-speaking markets",
          "Nearshore technology services augmented by AI productivity tools",
        ],
        challenges: [
          "Infrastructure variability affecting cloud and connectivity reliability",
          "Currency volatility and economic instability impacting long-term AI investment",
          "Talent retention as skilled workers migrate to North American and European markets",
          "Regulatory frameworks for AI still developing across jurisdictions",
        ],
      },
    },
    {
      type: "region",
      data: {
        region: "Middle East",
        adoptionPatterns: [
          "National AI strategies driving sovereign investment in UAE, Saudi Arabia, and Qatar",
          "Smart city and government digitization programs as primary adoption vectors",
          "Financial services and energy sector leading private enterprise adoption",
          "Significant infrastructure investment attracting global AI vendors and talent",
        ],
        opportunities: [
          "Government and smart city AI at unprecedented scale and investment levels",
          "Energy sector optimization and sustainability applications",
          "Tourism, hospitality, and real estate experience enhancement",
          "Regional hub positioning for AI services across MENA markets",
        ],
        challenges: [
          "Dependence on imported technology and talent requiring localization investment",
          "Cultural and language requirements for Arabic-language AI capabilities",
          "Concentration of investment in government-led programs vs. private enterprise breadth",
          "Geopolitical complexity affecting international partnership strategies",
        ],
      },
    },
    {
      type: "region",
      data: {
        region: "Africa",
        adoptionPatterns: [
          "Mobile money and fintech AI adoption leapfrogging legacy infrastructure",
          "Agricultural technology and health tech AI addressing development priorities",
          "Growing tech ecosystems in Nigeria, Kenya, South Africa, Egypt, and Rwanda",
          "International development funding supporting AI for social impact initiatives",
        ],
        opportunities: [
          "Financial services innovation through mobile-first AI applications",
          "Agricultural yield optimization and climate resilience through predictive analytics",
          "Healthcare access expansion through telemedicine and diagnostic support",
          "Young demographic dividend enabling rapid digital and AI skill development",
        ],
        challenges: [
          "Infrastructure gaps in power, connectivity, and cloud access limiting scale",
          "Brain drain of technical talent to higher-compensation global markets",
          "Data scarcity and quality limitations for domain-specific model development",
          "Funding gaps for enterprise AI beyond fintech and development-funded initiatives",
        ],
      },
    },
    {
      type: "region",
      data: {
        region: "Asia-Pacific",
        adoptionPatterns: [
          "Highest manufacturing AI deployment globally, led by China, Japan, South Korea, and Taiwan",
          "Rapid consumer AI adoption in India and Southeast Asia mobile markets",
          "Government AI investment at scale in China, Singapore, Australia, and Japan",
          "Australia and Singapore as regional governance and innovation hubs",
        ],
        opportunities: [
          "Manufacturing and supply chain AI at global scale",
          "Consumer AI products serving world's largest mobile user populations",
          "Smart city and infrastructure AI in rapidly urbanizing markets",
          "Cross-border e-commerce and logistics optimization",
        ],
        challenges: [
          "Geopolitical technology decoupling affecting vendor and supply chain strategies",
          "Variable regulatory approaches across APAC jurisdictions",
          "Intense price competition compressing AI product margins",
          "Cultural and linguistic diversity requiring significant localization investment",
        ],
      },
    },
    {
      type: "callout",
      callout: {
        variant: "insight",
        title: "Global strategy implication",
        body: "Organizations operating internationally should define a core AI capability stack globally while allowing regional adaptation in governance, data residency, language, and go-to-market. One-size-fits-all AI strategy fails across regulatory and market boundaries.",
      },
    },
  ],
};

export const section08WhyInitiativesFail: ReportSection = {
  id: "why-initiatives-fail",
  number: 8,
  title: "Why AI Initiatives Fail",
  subtitle: "Structural causes and executive countermeasures",
  blocks: [
    {
      type: "prose",
      paragraphs: [
        "AI initiative failure is rarely a technology failure. It is a strategy, governance, and execution failure that technology investment cannot compensate for. Understanding why initiatives fail is as important as understanding where opportunity exists—particularly for leadership teams allocating capital in the next budget cycle.",
      ],
    },
    {
      type: "stats",
      title: "Initiative outcome distribution",
      items: [
        { value: "47%", label: "stall after pilot phase", source: "[Research placeholder]" },
        { value: "31%", label: "fail to meet stated ROI targets", source: "[Research placeholder]" },
        { value: "18%", label: "achieve scaled enterprise impact", source: "[Research placeholder]" },
        { value: "4%", label: "exceed initial business case projections", source: "[Research placeholder]" },
      ],
    },
    {
      type: "heading",
      text: "No Strategy",
      level: 3,
    },
    {
      type: "prose",
      paragraphs: [
        "Organizations without a prioritized AI strategy fund disconnected experiments across business units. Each initiative optimizes for local visibility rather than enterprise impact. Resources fragment, data remains siloed, and lessons learned fail to transfer across teams.",
        "Countermeasure: Define 3–5 enterprise AI priorities linked to corporate objectives. Require business cases for all funded initiatives. Establish a portfolio review cadence with kill criteria for underperforming pilots.",
      ],
    },
    {
      type: "heading",
      text: "Poor Change Management",
      level: 3,
    },
    {
      type: "prose",
      paragraphs: [
        "Technology deployment without workflow redesign, training, and incentive alignment produces tools that employees avoid or work around. Shadow AI usage proliferates when approved tools fail to meet user needs.",
        "Countermeasure: Invest 30–40% of initiative budget in change management, training, and process redesign. Assign business unit change champions. Measure adoption and outcome metrics jointly—not technology metrics alone.",
      ],
    },
    {
      type: "heading",
      text: "Lack of Executive Sponsorship",
      level: 3,
    },
    {
      type: "prose",
      paragraphs: [
        "AI initiatives without sustained executive sponsorship lose priority during budget pressure, organizational restructuring, or leadership transitions. IT-led programs without business ownership consistently stall at pilot stage.",
        "Countermeasure: Assign a named executive sponsor with authority over cross-functional resources. Include AI initiative outcomes in sponsor performance objectives. Require quarterly executive review with board visibility for enterprise programs.",
      ],
    },
    {
      type: "heading",
      text: "Technology-First Thinking",
      level: 3,
    },
    {
      type: "prose",
      paragraphs: [
        "Procuring AI platforms before defining use cases, success metrics, and integration requirements produces expensive shelfware. Vendor demos create illusion of capability without addressing data, process, and ownership prerequisites.",
        "Countermeasure: Start with workflow analysis and business case development. Evaluate technology against defined requirements. Run proof-of-concept on highest-priority use case before enterprise licensing commitments.",
      ],
    },
    {
      type: "heading",
      text: "Unrealistic Expectations",
      level: 3,
    },
    {
      type: "prose",
      paragraphs: [
        "Overpromised ROI timelines, underestimated integration costs, and inflated capability claims from vendors and internal champions create credibility damage when results underdeliver. Boards that expect immediate transformation withdraw support after initial disappointment.",
        "Countermeasure: Set 90-day and 180-day milestone expectations with conservative ROI assumptions. Communicate progress transparently—including setbacks. Treat AI as a capability-building journey with compounding returns, not a one-time technology purchase.",
      ],
    },
    {
      type: "figure",
      figure: { imageKey: "whyAiInitiativesFail" },
    },
    {
      type: "callout",
      callout: {
        variant: "warning",
        title: "Pattern recognition",
        body: "Failed initiatives share a common profile: technology investment without business ownership, measurement without baselines, and deployment without governance. Successful initiatives invert each element—business-owned, baseline-measured, and governance-enabled.",
      },
    },
  ],
};

export const section09TransformationRoadmap: ReportSection = {
  id: "transformation-roadmap",
  number: 9,
  title: "The AI Transformation Roadmap",
  subtitle: "30-day, 90-day, 180-day, and 12-month execution plans",
  blocks: [
    {
      type: "prose",
      paragraphs: [
        "Transformation roadmaps convert strategic intent into sequenced action. The following framework provides horizon-based plans calibrated to organizations at different readiness levels. Adjust pacing based on Hibbert AI Readiness Framework scores—organizations below 2.5 composite should extend foundational phases before scaling.",
      ],
    },
    {
      type: "roadmap",
      phases: [
        {
          horizon: "30-Day Plan",
          title: "Assess and Prioritize",
          objectives: [
            "Complete Hibbert AI Readiness Framework assessment across five dimensions",
            "Identify 10–15 candidate workflows for AI application through cross-functional workshops",
            "Select 3–5 priority use cases based on impact, feasibility, and strategic alignment",
            "Assign executive sponsors and business owners for each priority use case",
          ],
          deliverables: [
            "Readiness assessment report with dimension scores and gap analysis",
            "Prioritized use case portfolio with business case summaries",
            "Executive sponsor assignments and governance structure definition",
            "90-day plan with milestones, budget estimates, and success metrics",
          ],
          successMetrics: [
            "Readiness assessment completed with leadership team review",
            "Priority use cases approved by executive committee",
            "Baseline metrics established for selected workflows",
            "Governance charter drafted and sponsor accountability confirmed",
          ],
        },
        {
          horizon: "90-Day Plan",
          title: "Pilot and Prove",
          objectives: [
            "Deploy controlled pilots for top 3 priority use cases",
            "Establish data pipelines and integration architecture for pilot workflows",
            "Implement lightweight governance with risk tiering and approval workflows",
            "Train pilot user groups and establish feedback collection mechanisms",
          ],
          deliverables: [
            "Production or near-production pilots for 3 priority use cases",
            "Pilot outcome reports with measured results against baselines",
            "Integration architecture documentation and security validation",
            "Governance framework operational with defined escalation paths",
          ],
          successMetrics: [
            "At least 2 of 3 pilots demonstrate measurable improvement over baseline",
            "User adoption exceeds 70% in pilot groups within 60 days of deployment",
            "No unresolved high-severity security or compliance issues",
            "180-day scaling plan approved based on pilot evidence",
          ],
        },
        {
          horizon: "180-Day Plan",
          title: "Scale and Integrate",
          objectives: [
            "Scale successful pilots to additional business units or geographies",
            "Integrate AI capabilities into core systems of record and workflow tools",
            "Expand governance framework for production-scale risk management",
            "Launch workforce enablement program for scaled user populations",
          ],
          deliverables: [
            "Scaled deployment across 2+ business units for proven use cases",
            "Production integration with CRM, ERP, or domain-specific platforms",
            "Updated governance framework with production audit and monitoring capability",
            "Training program deployed with completion tracking and support resources",
          ],
          successMetrics: [
            "Scaled use cases deliver consistent ROI across deployment units",
            "Integration reduces manual handoffs by measurable percentage",
            "Governance audit completed with no critical findings",
            "Workforce enablement completion rate exceeds 80% in target populations",
          ],
        },
        {
          horizon: "12-Month Plan",
          title: "Optimize and Compound",
          objectives: [
            "Establish AI as sustained enterprise capability with portfolio governance",
            "Expand use case portfolio based on proven patterns and emerging opportunities",
            "Evaluate agentic AI opportunities against governance maturity",
            "Build internal AI operations capability or establish strategic vendor partnerships",
          ],
          deliverables: [
            "Enterprise AI portfolio with quarterly review and investment rebalancing",
            "5+ production AI capabilities delivering measured business outcomes",
            "Agentic AI evaluation report with adoption recommendations",
            "AI operations team or partnership model with defined accountability",
          ],
          successMetrics: [
            "Enterprise AI portfolio delivers aggregate ROI exceeding business case projections",
            "Board or executive committee receives quarterly AI outcome reporting",
            "Readiness scores improve by minimum 0.5 points on lowest dimension",
            "Competitive differentiation attributable to AI capability documented",
          ],
        },
      ],
    },
    {
      type: "figure",
      figure: { imageKey: "buildingAiReadyFuture" },
    },
    {
      type: "callout",
      callout: {
        variant: "recommendation",
        title: "Roadmap discipline",
        body: "Do not advance to the next horizon without meeting success metrics from the current phase. Organizations that skip assessment and pilot discipline consistently fail at scale—the most expensive failure mode.",
      },
    },
  ],
};
