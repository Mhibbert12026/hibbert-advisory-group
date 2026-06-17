import { REPORT_IMAGES } from "../global-ai-opportunity-report/images";

export const AI_READINESS_FRAMEWORK_PATH = "/research/ai-readiness-framework";

export const AI_READINESS_FRAMEWORK_META = {
  title: "Hibbert AI Readiness Framework",
  metaTitle: "Hibbert AI Readiness Framework | Hibbert Advisory Group Research",
  metaDescription:
    "Proprietary methodology for assessing organizational AI readiness across leadership, technology, data, workforce, and process dimensions—with scoring guidance and recommended actions.",
  publishDate: "2026-05-29",
  readTimeMinutes: 18,
  ogImagePath: REPORT_IMAGES.aiReadinessFramework.src,
} as const;

export const FRAMEWORK_OVERVIEW = {
  headline: "Assess whether your organization can execute—not merely purchase AI capability",
  paragraphs: [
    "Before expanding AI investment, leadership teams must understand whether their organization can execute. The Hibbert AI Readiness Framework assesses five dimensions that consistently differentiate organizations achieving enterprise impact from those stuck in perpetual pilot mode.",
    "Each dimension is scored on a 1–5 scale. Composite scores guide investment sequencing, governance design, and roadmap prioritization.",
  ],
};

export const SCORING_DIMENSIONS = [
  {
    id: "leadership",
    title: "Leadership Readiness",
    description:
      "Executive alignment, sponsorship, decision rights, and strategic clarity on AI priorities tied to corporate objectives.",
    criteria: [
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
    id: "technology",
    title: "Technology Readiness",
    description:
      "Infrastructure, integration architecture, security posture, and ability to deploy AI within existing technology ecosystems.",
    criteria: [
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
    id: "data",
    title: "Data Readiness",
    description:
      "Data quality, accessibility, governance, and the ability to feed reliable inputs to AI systems at scale.",
    criteria: [
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
    id: "workforce",
    title: "Workforce Readiness",
    description:
      "Skills, change capacity, role clarity, and organizational willingness to adopt AI-augmented workflows.",
    criteria: [
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
    id: "process",
    title: "Process Readiness",
    description:
      "Workflow documentation, ownership accountability, and process maturity sufficient for AI integration and measurement.",
    criteria: [
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
] as const;

export const SCORING_METHODOLOGY = [
  "Score each dimension 1–5 using the criteria and score guides. Conduct assessments through structured interviews with executive sponsors, IT leadership, data owners, and business unit leaders.",
  "Calculate the composite score as the unweighted average of five dimensions. Organizations scoring below 2.5 should focus on foundational readiness before scaling investment.",
  "Scores of 2.5–3.5 indicate readiness for targeted pilots with explicit gap remediation. Scores above 3.5 support scaled deployment with governance appropriate to risk profile.",
  "Identify the lowest-scoring dimension as the primary constraint. Data readiness and leadership alignment are the most common bottlenecks—technology is rarely the sole constraint.",
  "Reassess quarterly. Readiness is dynamic; investments in one dimension often unlock progress in others.",
];

export const RECOMMENDED_ACTIONS = [
  "Conduct the readiness assessment before the next budget cycle",
  "Present composite scores and dimension gaps to leadership with explicit remediation investments",
  "Assign executive sponsors accountable for closing the lowest-scoring dimension",
  "Sequence AI pilots only after addressing dimensions scoring below 3 in priority use case areas",
  "Commission an AI Opportunity Assessment to translate readiness gaps into a prioritized roadmap",
];

export const AI_READINESS_SITEMAP_ROUTE = {
  path: AI_READINESS_FRAMEWORK_PATH,
  changeFrequency: "monthly" as const,
  priority: 0.88,
} as const;
