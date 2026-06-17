import type { ReportSection } from "../types";

export const section04BusinessValue: ReportSection = {
  id: "business-value",
  number: 4,
  title: "Where AI Creates Business Value",
  subtitle: "Six categories of measurable impact",
  blocks: [
    {
      type: "prose",
      paragraphs: [
        "AI value creation is not uniform. Leadership teams that achieve disproportionate returns concentrate investment in workflows where friction is high, data is available, outcomes are measurable, and business owners accept accountability for results. This section examines six value categories with use cases, expected benefits, and the mistakes that most frequently undermine ROI.",
      ],
    },
    {
      type: "figure",
      figure: { imageKey: "businessOutcomesFramework" },
    },
    {
      type: "value-category",
      data: {
        category: "Revenue Growth",
        useCases: [
          "Lead scoring and sales prioritization based on propensity models",
          "Personalized product recommendations and dynamic pricing optimization",
          "AI-assisted proposal generation and RFP response acceleration",
          "Churn prediction with targeted retention interventions",
          "Market intelligence synthesis for new product and market entry decisions",
        ],
        expectedBenefits: [
          "10–25% improvement in conversion rates on targeted segments",
          "15–30% reduction in sales cycle length for complex B2B transactions",
          "5–15% increase in customer lifetime value through personalization",
          "Faster time-to-market for revenue initiatives supported by market intelligence",
        ],
        commonMistakes: [
          "Deploying personalization without clean customer data or consent frameworks",
          "Optimizing for activity metrics (calls, emails) rather than revenue outcomes",
          "Treating AI-generated proposals as final without human quality review",
          "Failing to integrate AI insights into CRM and sales workflow tools",
        ],
      },
    },
    {
      type: "value-category",
      data: {
        category: "Operational Efficiency",
        useCases: [
          "Document processing and intelligent data extraction from unstructured sources",
          "Supply chain demand forecasting and inventory optimization",
          "Automated compliance monitoring and exception flagging",
          "IT operations anomaly detection and incident response acceleration",
          "Procurement spend analysis and vendor contract optimization",
        ],
        expectedBenefits: [
          "30–60% reduction in manual processing time for document-heavy workflows",
          "10–20% inventory carrying cost reduction through improved forecasting",
          "40–70% faster exception identification in compliance and audit workflows",
          "Measurable reduction in operational error rates and rework",
        ],
        commonMistakes: [
          "Automating broken processes without redesign—amplifying inefficiency at speed",
          "Ignoring exception handling design; automation fails on edge cases",
          "Underestimating integration cost with legacy systems of record",
          "Measuring automation volume instead of cost, quality, or cycle time outcomes",
        ],
      },
    },
    {
      type: "value-category",
      data: {
        category: "Customer Experience",
        useCases: [
          "Intelligent customer service routing and agent augmentation",
          "Conversational interfaces for self-service account management",
          "Sentiment analysis and proactive outreach for at-risk accounts",
          "Multilingual support and accessibility enhancement",
          "Real-time product guidance and onboarding assistance",
        ],
        expectedBenefits: [
          "20–40% reduction in average handle time with maintained satisfaction scores",
          "15–25% improvement in first-contact resolution rates",
          "Expanded service coverage without proportional headcount increase",
          "Higher NPS and retention through proactive experience intervention",
        ],
        commonMistakes: [
          "Deploying chatbots without escalation paths to human agents",
          "Optimizing for deflection rather than resolution and satisfaction",
          "Insufficient training data from actual customer interactions",
          "Neglecting brand voice and trust in automated communications",
        ],
      },
    },
    {
      type: "value-category",
      data: {
        category: "Employee Productivity",
        useCases: [
          "Meeting summarization, action item extraction, and follow-up automation",
          "Code generation and developer productivity augmentation",
          "Research synthesis and competitive intelligence for strategy teams",
          "HR policy and benefits inquiry automation for employees",
          "Content drafting and review acceleration for marketing and communications",
        ],
        expectedBenefits: [
          "20–35% time savings on knowledge work tasks in targeted roles",
          "Faster onboarding through AI-assisted training and documentation access",
          "Reduced context-switching through intelligent information retrieval",
          "Higher output quality through AI-assisted review and consistency checking",
        ],
        commonMistakes: [
          "Rolling out tools without role-specific training and use case guidance",
          "Failing to address intellectual property and confidentiality policies",
          "Measuring tool adoption instead of time saved or output quality",
          "Creating shadow AI usage by not providing approved enterprise tools",
        ],
      },
    },
    {
      type: "value-category",
      data: {
        category: "Knowledge Management",
        useCases: [
          "Enterprise search across documents, wikis, and institutional knowledge",
          "Expertise location and internal talent matching",
          "Automated knowledge base maintenance and content gap identification",
          "Post-project capture and lessons-learned synthesis",
          "Regulatory and policy change impact analysis across document corpora",
        ],
        expectedBenefits: [
          "50–70% reduction in time to find critical institutional knowledge",
          "Improved decision quality through access to relevant historical context",
          "Reduced duplication of work and redundant research across teams",
          "Faster new employee ramp through accessible organizational knowledge",
        ],
        commonMistakes: [
          "Indexing documents without quality curation—garbage in, garbage out",
          "Ignoring access controls and permission-aware retrieval",
          "Treating knowledge management as a one-time project rather than ongoing discipline",
          "Failing to incentivize knowledge contribution from subject matter experts",
        ],
      },
    },
    {
      type: "value-category",
      data: {
        category: "Decision Support",
        useCases: [
          "Executive dashboard synthesis with narrative insight generation",
          "Scenario modeling and sensitivity analysis for strategic planning",
          "Risk assessment aggregation across operational and financial signals",
          "Portfolio prioritization with multi-criteria decision frameworks",
          "Real-time competitive and market signal monitoring with alert thresholds",
        ],
        expectedBenefits: [
          "Faster executive decision cycles with higher information confidence",
          "Improved capital allocation through data-driven prioritization",
          "Earlier risk identification with reduced surprise exposure",
          "More consistent decision quality across leadership team members",
        ],
        commonMistakes: [
          "Presenting AI-generated analysis without source transparency",
          "Over-relying on models for decisions requiring judgment and accountability",
          "Insufficient data freshness and quality validation for time-sensitive decisions",
          "Treating decision support as replacement for executive accountability",
        ],
      },
    },
    {
      type: "figure",
      figure: { imageKey: "businessValueOfAi" },
    },
  ],
};

export const section05IndustryAnalysis: ReportSection = {
  id: "industry-analysis",
  number: 5,
  title: "Industry Analysis",
  subtitle: "Sector-specific challenges, opportunities, and strategic recommendations",
  blocks: [
    {
      type: "prose",
      paragraphs: [
        "AI opportunity varies significantly by industry due to regulatory environment, data maturity, customer expectations, and competitive dynamics. This section provides sector-specific analysis across nine industries, with use cases and recommendations calibrated to each industry's constraints and advantages.",
      ],
    },
    {
      type: "figure",
      figure: { imageKey: "industryAiMaturity" },
    },
    {
      type: "industry",
      data: {
        industry: "Financial Services",
        challenges: [
          "Regulatory scrutiny on model explainability, bias, and consumer protection",
          "Legacy core systems limiting real-time data integration",
          "Heightened cybersecurity and fraud risk from AI-enabled attacks",
          "Customer trust sensitivity around automated financial decisions",
        ],
        opportunities: [
          "Fraud detection and anti-money laundering with improved precision",
          "Personalized wealth and banking advice at scale",
          "Automated regulatory reporting and compliance monitoring",
          "Credit risk modeling with alternative data sources",
        ],
        useCases: [
          "Real-time transaction fraud scoring with reduced false positives",
          "AI-assisted financial advisor research and portfolio analysis",
          "KYC/AML document processing and entity resolution",
          "Customer service augmentation for complex account inquiries",
        ],
        recommendations: [
          "Establish model risk management framework before scaling AI in customer-facing decisions",
          "Prioritize fraud and compliance use cases with clear ROI and regulatory precedent",
          "Invest in explainability and audit trails for all high-stakes automated decisions",
          "Partner with regulators proactively rather than deploying first and seeking forgiveness",
        ],
      },
    },
    {
      type: "industry",
      data: {
        industry: "Healthcare",
        challenges: [
          "HIPAA and patient privacy requirements constraining data use",
          "Clinical liability and physician adoption resistance",
          "Fragmented EHR data and interoperability limitations",
          "Reimbursement models not always aligned with AI-enabled efficiency",
        ],
        opportunities: [
          "Clinical documentation and administrative burden reduction",
          "Diagnostic support and imaging analysis augmentation",
          "Population health management and care coordination optimization",
          "Patient engagement and adherence improvement through personalized outreach",
        ],
        useCases: [
          "Ambient clinical documentation with physician review workflows",
          "Prior authorization automation and claims processing acceleration",
          "Patient scheduling optimization and no-show prediction",
          "Clinical trial patient matching and protocol adherence monitoring",
        ],
        recommendations: [
          "Design all clinical AI with physician-in-the-loop accountability",
          "Start with administrative workflows before clinical decision support",
          "Validate data governance and de-identification before cross-system analytics",
          "Measure outcomes in clinical quality and staff satisfaction, not only cost",
        ],
      },
    },
    {
      type: "industry",
      data: {
        industry: "SaaS",
        challenges: [
          "Rapid commoditization of AI features across competitive landscape",
          "Customer expectations for AI capabilities without proportional pricing tolerance",
          "Technical debt from fast AI feature deployment without architecture discipline",
          "Data privacy commitments constraining model training approaches",
        ],
        opportunities: [
          "AI-native product differentiation and intelligent automation within platform",
          "Churn prediction and expansion revenue optimization",
          "Developer productivity and faster feature delivery cycles",
          "Customer success augmentation and proactive health scoring",
        ],
        useCases: [
          "In-product AI assistants tailored to domain workflows",
          "Usage analytics-driven feature prioritization and personalization",
          "Automated onboarding and in-app guidance based on user behavior",
          "Support ticket classification and resolution recommendation",
        ],
        recommendations: [
          "Define AI product strategy as core differentiation—not feature checklist",
          "Build data moats through proprietary usage and outcome data",
          "Price AI capabilities based on value delivered, not cost to serve",
          "Invest in AI infrastructure that supports rapid iteration without technical debt accumulation",
        ],
      },
    },
    {
      type: "industry",
      data: {
        industry: "Manufacturing",
        challenges: [
          "OT/IT convergence complexity and cybersecurity exposure",
          "Workforce skills gap for AI-augmented operations roles",
          "Capital-intensive deployment cycles for physical process integration",
          "Variable data quality from sensors and legacy equipment",
        ],
        opportunities: [
          "Predictive maintenance reducing unplanned downtime",
          "Quality inspection automation with computer vision",
          "Supply chain and demand planning optimization",
          "Energy consumption optimization across production facilities",
        ],
        useCases: [
          "Equipment failure prediction with maintenance scheduling optimization",
          "Visual defect detection on production lines",
          "Production scheduling optimization based on demand and capacity signals",
          "Safety monitoring and incident prediction in high-risk environments",
        ],
        recommendations: [
          "Pilot on single production lines before enterprise rollout",
          "Integrate AI with existing MES and ERP systems rather than standalone deployments",
          "Invest in workforce training for AI-augmented operations roles",
          "Measure ROI in downtime reduction, yield improvement, and safety outcomes",
        ],
      },
    },
    {
      type: "industry",
      data: {
        industry: "Professional Services",
        challenges: [
          "Billable hour model tension with efficiency gains from AI",
          "Client confidentiality and professional liability considerations",
          "Knowledge trapped in individual practitioners rather than institutional systems",
          "Variable AI maturity across practice areas and seniority levels",
        ],
        opportunities: [
          "Research and analysis acceleration for client deliverables",
          "Proposal and engagement scoping efficiency",
          "Knowledge capture and reuse across engagements",
          "Client insight generation from aggregated engagement data",
        ],
        useCases: [
          "Contract review and due diligence document analysis",
          "Research synthesis for strategy and advisory deliverables",
          "Automated first-draft generation with professional review workflows",
          "Engagement profitability analysis and resource optimization",
        ],
        recommendations: [
          "Reframe AI as capacity expansion enabling higher-value advisory work",
          "Establish clear client communication on AI use in deliverables",
          "Build institutional knowledge systems that capture expertise from senior practitioners",
          "Adjust compensation and utilization models to reward outcomes, not only hours",
        ],
      },
    },
    {
      type: "industry",
      data: {
        industry: "Education",
        challenges: [
          "Academic integrity concerns with generative AI tools",
          "Equity gaps in access to AI-enabled learning resources",
          "Faculty adoption resistance and curriculum redesign requirements",
          "Budget constraints limiting enterprise AI infrastructure investment",
        ],
        opportunities: [
          "Personalized learning paths and adaptive assessment",
          "Administrative efficiency in enrollment, scheduling, and student services",
          "Early intervention for at-risk students through predictive analytics",
          "Faculty augmentation for content development and grading support",
        ],
        useCases: [
          "Intelligent tutoring systems with human educator oversight",
          "Automated essay feedback with plagiarism and integrity checking",
          "Student services chatbots with escalation to counselors",
          "Enrollment forecasting and resource allocation optimization",
        ],
        recommendations: [
          "Develop institutional AI policies balancing innovation with academic integrity",
          "Invest in faculty development and curriculum integration, not only student tools",
          "Prioritize administrative efficiency gains to fund instructional AI investments",
          "Measure outcomes in learning efficacy and student success, not only cost reduction",
        ],
      },
    },
    {
      type: "industry",
      data: {
        industry: "Nonprofits",
        challenges: [
          "Limited technology budgets and competing mission priorities",
          "Donor sensitivity to overhead and technology spending",
          "Volunteer and staff technical capacity constraints",
          "Data fragmentation across programs and fundraising systems",
        ],
        opportunities: [
          "Donor segmentation and personalized engagement at scale",
          "Grant research and proposal development acceleration",
          "Program impact measurement and reporting automation",
          "Volunteer matching and coordination optimization",
        ],
        useCases: [
          "Donor propensity modeling and stewardship prioritization",
          "Automated impact report generation from program data",
          "Grant opportunity identification and application drafting support",
          "Beneficiary intake and case management workflow automation",
        ],
        recommendations: [
          "Start with fundraising and reporting efficiency—direct revenue and compliance impact",
          "Leverage pro bono and discounted AI tools designed for nonprofit sectors",
          "Measure mission impact alongside operational efficiency",
          "Build data discipline incrementally; do not wait for perfect infrastructure",
        ],
      },
    },
    {
      type: "industry",
      data: {
        industry: "Media & Entertainment",
        challenges: [
          "Content rights and intellectual property complexity for AI training",
          "Audience fragmentation and attention competition",
          "Revenue model pressure from AI-generated content proliferation",
          "Creative community concerns about AI displacement and attribution",
        ],
        opportunities: [
          "Content personalization and audience engagement optimization",
          "Production workflow efficiency in editing, localization, and metadata",
          "Audience analytics and content performance prediction",
          "Advertising targeting and yield optimization",
        ],
        useCases: [
          "Recommendation engines driving engagement and subscription retention",
          "Automated content tagging, transcription, and localization",
          "Audience segmentation for targeted content and advertising",
          "Script and content development assistance with creative oversight",
        ],
        recommendations: [
          "Invest in proprietary audience and engagement data as competitive moat",
          "Establish clear IP and attribution policies for AI-assisted content creation",
          "Balance automation efficiency with creative quality and brand differentiation",
          "Explore AI as audience experience enhancer, not only cost reduction tool",
        ],
      },
    },
  ],
};

export const section06AgenticAI: ReportSection = {
  id: "agentic-ai",
  number: 6,
  title: "The Rise of Agentic AI",
  subtitle: "Business implications, risks, and adoption considerations",
  blocks: [
    {
      type: "prose",
      paragraphs: [
        "Agentic AI represents a meaningful shift in how organizations deploy artificial intelligence—from tools that respond to prompts to systems that execute multi-step tasks autonomously across workflows, applications, and decision points. For executive teams, agentic AI is not a future consideration; it is an emerging capability that will reshape operating models within the next 12–24 months.",
      ],
    },
    {
      type: "heading",
      text: "What Agentic AI Is",
      level: 3,
    },
    {
      type: "prose",
      paragraphs: [
        "Agentic AI refers to AI systems capable of planning, executing, and iterating on multi-step tasks with limited human intervention. Unlike single-turn generative tools, agents can access tools, query databases, invoke APIs, coordinate with other agents, and pursue objectives defined by business rules and guardrails.",
        "Examples include autonomous research agents that synthesize market intelligence, customer service agents that resolve issues end-to-end across systems, and operational agents that monitor exceptions and initiate remediation workflows.",
      ],
    },
    {
      type: "heading",
      text: "Business Implications",
      level: 3,
    },
    {
      type: "bullets",
      items: [
        "Operating model shift from human-initiated tasks to human-supervised autonomous workflows",
        "Compression of process cycle times in research, analysis, customer service, and IT operations",
        "New organizational roles: agent designers, workflow orchestrators, and AI operations managers",
        "Competitive advantage for organizations that integrate agents into core products and operations early",
        "Pressure on vendors to provide agent-ready platforms with enterprise security and audit capability",
      ],
    },
    {
      type: "chart",
      chart: {
        title: "Agentic AI Adoption Curve",
        description: "Projected enterprise adoption timeline for agentic AI capabilities.",
        chartType: "line",
        dataHint: "2024: Early adopters 5% | 2025: 15% | 2026: 32% | 2027: 55% | 2028: 72%",
      },
    },
    {
      type: "heading",
      text: "Risks",
      level: 3,
    },
    {
      type: "two-column",
      left: {
        title: "Primary risk categories",
        items: [
          "Autonomous actions without adequate human oversight or approval gates",
          "Data exposure through agents with overly broad system access",
          "Error propagation across multi-step workflows at machine speed",
          "Accountability gaps when autonomous decisions affect customers or compliance",
          "Vendor lock-in to proprietary agent platforms without portability",
        ],
      },
      right: {
        title: "Mitigation approaches",
        items: [
          "Define approval thresholds and human-in-the-loop requirements by risk tier",
          "Implement least-privilege access and activity logging for all agents",
          "Design circuit breakers and escalation paths for anomalous agent behavior",
          "Establish clear ownership for agent outcomes within business units",
          "Evaluate open standards and multi-vendor architectures before commitment",
        ],
      },
    },
    {
      type: "heading",
      text: "Opportunities",
      level: 3,
    },
    {
      type: "prose",
      paragraphs: [
        "Organizations with mature data infrastructure, documented workflows, and established governance are best positioned to capture agentic AI value. Priority opportunities include internal operations automation (IT, HR, finance), customer-facing service resolution, research and analysis workflows, and product experiences that offer autonomous task completion as a differentiated capability.",
      ],
    },
    {
      type: "heading",
      text: "Adoption Considerations",
      level: 3,
    },
    {
      type: "numbered",
      items: [
        "Assess governance maturity using the Hibbert AI Readiness Framework before deploying autonomous agents",
        "Start with internal, low-risk workflows before customer-facing or regulated processes",
        "Define success metrics and failure modes before deployment—not after incidents",
        "Invest in observability: logging, tracing, and audit trails for all agent actions",
        "Build organizational capability to design, test, and maintain agents as production systems",
      ],
    },
    {
      type: "callout",
      callout: {
        variant: "warning",
        title: "Executive caution",
        body: "Agentic AI amplifies both capability and risk. Organizations that deploy agents without governance infrastructure will experience faster failures at larger scale than traditional AI pilots. Readiness precedes adoption.",
      },
    },
  ],
};
