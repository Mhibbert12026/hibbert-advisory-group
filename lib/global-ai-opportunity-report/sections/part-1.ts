import type { ReportSection } from "../types";

export const section01ExecutiveSummary: ReportSection = {
  id: "executive-summary",
  number: 1,
  title: "Executive Summary",
  subtitle: "Strategic priorities for leadership teams in 2026",
  blocks: [
    {
      type: "prose",
      paragraphs: [
        "Artificial intelligence has moved from experimental curiosity to board-level mandate. In 2026, the question facing CEOs, founders, and executive teams is no longer whether to invest in AI—it is where to invest, how fast to move, and how to convert capability into measurable business outcomes.",
        "This report synthesizes adoption patterns, executive sentiment, industry dynamics, and transformation roadmaps observed across engagements with leadership teams in North America, Europe, the Middle East, and Asia-Pacific. It is written for decision-makers who require strategic clarity—not technical documentation.",
      ],
    },
    {
      type: "stats",
      title: "Executive snapshot",
      items: [
        { value: "78%", label: "of enterprises have active AI initiatives", source: "[Industry benchmark placeholder]" },
        { value: "29%", label: "report measurable enterprise-wide impact", source: "[Industry benchmark placeholder]" },
        { value: "3.2×", label: "productivity gains in targeted workflows", source: "[Workflow study placeholder]" },
        { value: "$4.4T", label: "estimated annual economic potential", source: "[Economic analysis placeholder]" },
      ],
    },
    {
      type: "heading",
      text: "Why AI Matters Now",
      level: 3,
    },
    {
      type: "prose",
      paragraphs: [
        "Three forces have converged to make 2026 a decisive year for AI strategy. First, model capability has reached a threshold where applied intelligence reliably improves knowledge work, customer interaction, and operational decision-making—not merely in controlled pilots, but in production environments.",
        "Second, competitive pressure has intensified. Organizations that delay disciplined adoption risk ceding margin, speed, and customer experience to competitors who operationalize AI across product, operations, and go-to-market functions.",
        "Third, the cost of experimentation has fallen while the cost of inaction has risen. Leadership teams can now deploy targeted AI capabilities with defined ROI horizons—provided they have clarity on prioritization, governance, and execution discipline.",
      ],
    },
    {
      type: "callout",
      callout: {
        variant: "executive",
        title: "Executive insight",
        body: "AI is not a technology initiative. It is a business capability that reshapes how organizations create revenue, deliver service, allocate capital, and compete. Leaders who frame AI as an IT project consistently underinvest in change management, data readiness, and product integration—the factors that determine whether initiatives compound or stall.",
      },
    },
    {
      type: "heading",
      text: "Why Organizations Are Struggling",
      level: 3,
    },
    {
      type: "prose",
      paragraphs: [
        "Despite widespread investment, most organizations remain in what we characterize as the 'pilot plateau'—a state where experiments proliferate but enterprise impact remains limited. Our analysis identifies five structural causes:",
      ],
    },
    {
      type: "numbered",
      items: [
        "Absence of a prioritized AI strategy tied to corporate objectives and capital allocation",
        "Technology-first deployment without workflow redesign or ownership accountability",
        "Data fragmentation that prevents reliable model performance at scale",
        "Insufficient executive sponsorship beyond initial approval",
        "Change management treated as an afterthought rather than a core investment",
      ],
    },
    {
      type: "chart",
      chart: {
        title: "The AI Impact Gap",
        description: "Share of organizations at each maturity stage—from experimentation to enterprise impact.",
        chartType: "bar",
        dataHint: "Experimentation 42% | Pilot 31% | Scaled deployment 19% | Enterprise impact 8%",
      },
    },
    {
      type: "heading",
      text: "Where Value Is Being Created",
      level: 3,
    },
    {
      type: "prose",
      paragraphs: [
        "Value creation in 2026 concentrates in six categories: revenue growth, operational efficiency, customer experience, employee productivity, knowledge management, and decision support. Organizations capturing disproportionate returns share three characteristics—they target high-friction workflows, measure outcomes rigorously, and integrate AI into existing product and process architecture rather than treating it as a standalone layer.",
        "Industry leaders are not deploying AI everywhere. They are deploying it where marginal returns are highest: sales enablement, customer service augmentation, financial analysis, supply chain optimization, product personalization, and internal knowledge retrieval.",
      ],
    },
    {
      type: "stats",
      title: "Value creation by category",
      items: [
        { value: "34%", label: "Operational efficiency gains", source: "[Survey placeholder]" },
        { value: "28%", label: "Customer experience improvement", source: "[Survey placeholder]" },
        { value: "22%", label: "Revenue growth acceleration", source: "[Survey placeholder]" },
        { value: "16%", label: "Decision support & knowledge", source: "[Survey placeholder]" },
      ],
    },
    {
      type: "heading",
      text: "Key Recommendations",
      level: 3,
    },
    {
      type: "bullets",
      title: "For the CEO and board",
      items: [
        "Establish AI as a strategic capability with board-level accountability—not a delegated IT experiment",
        "Require business-case discipline for every funded initiative, with defined success metrics at 90 and 180 days",
        "Invest in data readiness and governance in parallel with capability deployment",
        "Align incentive structures so business unit leaders own AI outcomes, not just IT delivery",
      ],
    },
    {
      type: "bullets",
      title: "For the leadership team",
      items: [
        "Complete a structured readiness assessment before expanding pilot scope",
        "Prioritize 3–5 high-impact workflows for the next 90 days rather than broad experimentation",
        "Build cross-functional governance that enables speed without creating compliance risk",
        "Plan for workforce transition—augmentation, reskilling, and role redesign—not replacement narratives",
      ],
    },
    {
      type: "callout",
      callout: {
        variant: "recommendation",
        title: "Strategic recommendation",
        body: "Organizations that achieve enterprise AI impact in 2026 will treat the next 90 days as a prioritization sprint—not a technology procurement cycle. Assess readiness, select high-value workflows, assign executive sponsors, and measure outcomes with the same rigor applied to revenue and cost initiatives.",
      },
    },
  ],
};

export const section02CurrentState: ReportSection = {
  id: "current-state",
  number: 2,
  title: "The Current State of AI",
  subtitle: "Adoption trends, executive sentiment, and emerging opportunities",
  blocks: [
    {
      type: "prose",
      paragraphs: [
        "The global AI landscape in 2026 reflects a market in transition—from capability demonstration to operational integration. Understanding where the market stands is essential for calibrating investment pace, risk tolerance, and competitive positioning.",
      ],
    },
    {
      type: "figure",
      figure: { imageKey: "adoptionVsValueGap" },
    },
    {
      type: "heading",
      text: "AI Adoption Trends",
      level: 3,
    },
    {
      type: "prose",
      paragraphs: [
        "Enterprise adoption has accelerated across every major sector, but maturity varies significantly. Large enterprises lead in governance infrastructure and vendor relationships. Mid-market organizations move faster on targeted workflow automation but lack enterprise data architecture. Growth-stage companies integrate AI into product experiences most aggressively, often outpacing their operational readiness.",
        "Generative AI adoption outpaced predictive AI in 2024–2025, but 2026 marks a rebalancing. Leadership teams are recognizing that durable value requires combining generative capabilities with structured data, workflow integration, and domain-specific models—not generic chat interfaces deployed without process redesign.",
      ],
    },
    {
      type: "chart",
      chart: {
        title: "Global AI Adoption by Organization Size",
        description: "Percentage of organizations with production AI deployments, segmented by revenue band.",
        chartType: "bar",
        dataHint: "Enterprise $1B+ 67% | Mid-market $50M–$1B 48% | Growth <$50M 39%",
      },
    },
    {
      type: "stats",
      items: [
        { value: "91%", label: "of Fortune 500 have AI initiatives", source: "[Placeholder]" },
        { value: "56%", label: "increased AI budgets YoY", source: "[Placeholder]" },
        { value: "2.1×", label: "avg. pilot-to-production cycle reduction", source: "[Placeholder]" },
      ],
    },
    {
      type: "heading",
      text: "Executive Sentiment",
      level: 3,
    },
    {
      type: "prose",
      paragraphs: [
        "Executive sentiment in 2026 is characterized by optimism tempered by accountability pressure. Boards and investors increasingly ask not whether organizations are using AI, but what measurable outcomes AI initiatives have produced. This shift from novelty to accountability is reshaping how leadership teams fund, govern, and report on AI programs.",
        "CIOs and CTOs report growing demand for integration with existing systems of record. Product leaders seek AI capabilities that enhance—not replace—core product value propositions. CEOs want clarity on competitive differentiation, not feature parity.",
      ],
    },
    {
      type: "callout",
      callout: {
        variant: "insight",
        title: "Sentiment shift",
        body: "The executive conversation has moved from 'What can AI do?' to 'What should we do first, and how do we know it worked?' This shift favors organizations with disciplined prioritization frameworks over those with the broadest experimentation portfolios.",
      },
    },
    {
      type: "heading",
      text: "Common Misconceptions",
      level: 3,
    },
    {
      type: "two-column",
      left: {
        title: "Misconceptions that stall progress",
        items: [
          "AI will automatically reduce headcount across functions",
          "A single vendor platform solves enterprise AI strategy",
          "Pilots prove value without production integration",
          "More data always produces better outcomes",
          "Governance and speed are inherently opposed",
        ],
      },
      right: {
        title: "Executive realities",
        items: [
          "AI augments roles; workforce redesign requires intentional planning",
          "Strategy, data, and workflow integration determine outcomes",
          "Production deployment exposes data, process, and ownership gaps",
          "Data quality and access matter more than data volume",
          "Lightweight governance accelerates responsible deployment",
        ],
      },
    },
    {
      type: "heading",
      text: "Emerging Opportunities",
      level: 3,
    },
    {
      type: "prose",
      paragraphs: [
        "Three opportunity categories define the 2026 landscape. Workflow intelligence—embedding AI into high-volume operational processes with measurable time and cost reduction. Product intelligence—using AI to improve personalization, recommendation, and user experience in digital products. Decision intelligence—augmenting executive and managerial decision-making with synthesized analysis, scenario modeling, and real-time insight.",
        "Agentic AI represents an emerging fourth category: autonomous task execution across multi-step workflows. While adoption remains early, leadership teams should evaluate agentic capabilities against governance maturity and risk tolerance—covered in Section 6.",
      ],
    },
    {
      type: "chart",
      chart: {
        title: "Emerging Opportunity Heat Map",
        description: "Impact potential vs. implementation complexity for major AI opportunity categories.",
        chartType: "matrix",
        dataHint: "Workflow intelligence: High impact / Medium complexity | Product intelligence: High / High | Decision intelligence: Medium / Medium | Agentic AI: Very high / High",
      },
    },
  ],
};

export const section03ReadinessFramework: ReportSection = {
  id: "readiness-framework",
  number: 3,
  title: "The AI Readiness Framework",
  subtitle: "A proprietary Hibbert Advisory Group assessment methodology",
  blocks: [
    {
      type: "prose",
      paragraphs: [
        "Before expanding AI investment, leadership teams must understand whether their organization can execute—not merely whether they can purchase capability. The Hibbert AI Readiness Framework assesses five dimensions that consistently differentiate organizations achieving enterprise impact from those stuck in perpetual pilot mode.",
        "Each dimension is scored on a 1–5 scale. Composite scores guide investment sequencing, governance design, and roadmap prioritization.",
      ],
    },
    {
      type: "chart",
      chart: {
        title: "Hibbert AI Readiness Framework",
        description: "Five interconnected dimensions that determine AI execution capacity.",
        chartType: "donut",
        dataHint: "Leadership | Technology | Data | Workforce | Process",
      },
    },
    {
      type: "readiness-framework",
      dimensions: [
        {
          name: "Leadership Readiness",
          description:
            "Executive alignment, sponsorship, decision rights, and strategic clarity on AI priorities tied to corporate objectives.",
          assessmentCriteria: [
            "CEO and board articulate AI's role in corporate strategy",
            "Clear executive sponsor with authority over cross-functional resources",
            "Defined decision rights for AI investment, risk acceptance, and deployment",
            "AI priorities explicitly linked to revenue, cost, or competitive objectives",
            "Regular executive review cadence with outcome accountability",
          ],
          scoreGuide: [
            { range: "1–2", meaning: "No executive sponsor; AI treated as IT initiative; no strategic linkage" },
            { range: "3", meaning: "Sponsor identified; strategy emerging; limited cross-functional alignment" },
            { range: "4–5", meaning: "Board-level visibility; clear priorities; accountable sponsorship with measured outcomes" },
          ],
        },
        {
          name: "Technology Readiness",
          description:
            "Infrastructure, integration architecture, security posture, and ability to deploy AI within existing technology ecosystems.",
          assessmentCriteria: [
            "Cloud or hybrid infrastructure supports scalable AI workloads",
            "API and integration architecture enables AI embedding in core systems",
            "Security and access controls appropriate for AI data flows",
            "Vendor and build-vs-buy strategy defined with evaluation criteria",
            "MLOps or equivalent production deployment capability exists or is planned",
          ],
          scoreGuide: [
            { range: "1–2", meaning: "Legacy constraints block deployment; no integration strategy; security gaps" },
            { range: "3", meaning: "Partial infrastructure; pilots possible; production path unclear" },
            { range: "4–5", meaning: "Production-ready architecture; integration patterns established; security validated" },
          ],
        },
        {
          name: "Data Readiness",
          description:
            "Data quality, accessibility, governance, and the ability to feed reliable inputs to AI systems at scale.",
          assessmentCriteria: [
            "Critical data sources identified and accessible for AI use cases",
            "Data quality standards defined and monitored for priority datasets",
            "Data governance policies address privacy, consent, and retention",
            "Master data and entity resolution support cross-system analysis",
            "Data lineage and audit capability for regulated or high-risk use cases",
          ],
          scoreGuide: [
            { range: "1–2", meaning: "Data siloed; quality unknown; governance absent" },
            { range: "3", meaning: "Key datasets identified; quality variable; governance emerging" },
            { range: "4–5", meaning: "Curated datasets; quality monitored; governance operational" },
          ],
        },
        {
          name: "Workforce Readiness",
          description:
            "Skills, change capacity, role clarity, and organizational willingness to adopt AI-augmented workflows.",
          assessmentCriteria: [
            "Workforce understands AI's role in their function—not as threat, but as capability",
            "Training and enablement programs exist for priority user groups",
            "Role definitions account for AI-augmented workflows",
            "Change champions identified in business units, not only IT",
            "HR and leadership aligned on workforce transition planning",
          ],
          scoreGuide: [
            { range: "1–2", meaning: "Resistance or confusion; no training; roles unchanged" },
            { range: "3", meaning: "Awareness building; pilot users trained; transition planning started" },
            { range: "4–5", meaning: "Broad enablement; roles redesigned; adoption measured and supported" },
          ],
        },
        {
          name: "Process Readiness",
          description:
            "Workflow documentation, ownership accountability, and process maturity sufficient for AI integration and measurement.",
          assessmentCriteria: [
            "Priority workflows documented with clear ownership and metrics",
            "Process bottlenecks identified where AI can reduce friction or improve quality",
            "Baseline performance metrics established before AI deployment",
            "Feedback loops exist to refine AI outputs based on business outcomes",
            "Process redesign authority rests with business owners, not only technology teams",
          ],
          scoreGuide: [
            { range: "1–2", meaning: "Undocumented workflows; no baselines; IT-led without business ownership" },
            { range: "3", meaning: "Key workflows identified; partial documentation; emerging ownership" },
            { range: "4–5", meaning: "Documented, owned, measured workflows ready for AI integration" },
          ],
        },
      ],
      methodology: [
        "Score each dimension 1–5 using the criteria and score guides above. Conduct assessments through structured interviews with executive sponsors, IT leadership, data owners, and business unit leaders.",
        "Calculate the composite score as the unweighted average of five dimensions. Organizations scoring below 2.5 should focus on foundational readiness before scaling investment. Scores of 2.5–3.5 indicate readiness for targeted pilots with explicit gap remediation. Scores above 3.5 support scaled deployment with governance appropriate to risk profile.",
        "Identify the lowest-scoring dimension as the primary constraint. Historical analysis shows data readiness and leadership alignment are the most common bottlenecks—but technology is rarely the sole constraint.",
        "Reassess quarterly. Readiness is dynamic; investments in one dimension (e.g., data governance) often unlock progress in others (e.g., process measurement).",
        "Use readiness scores to sequence the transformation roadmap in Section 9. Do not advance to 180-day scaled deployment without addressing dimensions scoring below 3 in priority use case areas.",
      ],
    },
    {
      type: "figure",
      figure: { imageKey: "aiReadinessFramework" },
    },
    {
      type: "callout",
      callout: {
        variant: "recommendation",
        title: "Framework application",
        body: "Conduct the readiness assessment before the next budget cycle. Present composite scores and dimension gaps to the leadership team with explicit remediation investments—not as a diagnostic exercise, but as a prerequisite for capital allocation decisions.",
      },
    },
    {
      type: "stats",
      title: "Readiness benchmark distribution",
      items: [
        { value: "23%", label: "score below 2.5 (foundational)", source: "[Assessment data placeholder]" },
        { value: "51%", label: "score 2.5–3.5 (pilot-ready)", source: "[Assessment data placeholder]" },
        { value: "26%", label: "score above 3.5 (scale-ready)", source: "[Assessment data placeholder]" },
      ],
    },
  ],
};
