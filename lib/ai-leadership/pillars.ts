import type { LeadershipPillar } from "./types";

const BASE = "/ai-leadership";

export const AI_LEADERSHIP_HUB_PATH = BASE;

export const PILLARS: readonly LeadershipPillar[] = [
  {
    slug: "ai-strategy",
    title: "AI Strategy for Executives",
    metaTitle: "AI Strategy for Executives | AI Leadership Center",
    metaDescription:
      "Executive guidance on AI strategy development, investment prioritization, business cases, and alignment with corporate objectives.",
    headline: "AI Strategy for Executives",
    subheadline:
      "How leadership teams define AI direction, prioritize investment, and connect strategy to measurable business outcomes.",
    introduction: [
      "AI strategy is not a technology plan—it is a business plan for how applied intelligence improves revenue, efficiency, decision quality, and competitive position. Executives who treat AI as a standalone IT initiative frequently fund disconnected pilots that fail to compound into enterprise capability.",
      "This pillar addresses the decisions CEOs, boards, and leadership teams face when defining AI direction: where to invest, what to defer, how to evaluate opportunities, and how to align AI initiatives with corporate strategy.",
    ],
    topics: [
      "Investment prioritization",
      "Business case development",
      "Opportunity assessment",
      "Build vs buy decisions",
      "Corporate strategy alignment",
    ],
    path: `${BASE}/ai-strategy`,
  },
  {
    slug: "ai-governance",
    title: "AI Governance & Risk Leadership",
    metaTitle: "AI Governance & Risk Leadership | AI Leadership Center",
    metaDescription:
      "Executive guidance on AI governance, board oversight, compliance, vendor risk, and responsible AI adoption for business leaders.",
    headline: "AI Governance & Risk Leadership",
    subheadline:
      "How organizations establish governance that enables innovation while managing risk, compliance, and accountability.",
    introduction: [
      "Governance is the difference between AI programs that scale with confidence and experiments that create regulatory, reputational, and operational exposure. Leadership teams need frameworks that enable speed—not bureaucratic processes that stall adoption.",
      "This pillar covers board-level oversight, compliance considerations, vendor evaluation, data handling standards, and responsible AI principles designed for business decision-makers.",
    ],
    topics: [
      "Governance frameworks",
      "Board oversight",
      "Data privacy & compliance",
      "Vendor risk management",
      "Responsible AI principles",
    ],
    path: `${BASE}/ai-governance`,
  },
  {
    slug: "ai-adoption",
    title: "AI Adoption & Organizational Change",
    metaTitle: "AI Adoption & Organizational Change | AI Leadership Center",
    metaDescription:
      "Leadership guidance on AI adoption, change management, employee enablement, resistance, and measuring adoption success.",
    headline: "AI Adoption & Organizational Change",
    subheadline:
      "How leaders drive adoption, build organizational readiness, and sustain momentum beyond initial pilots.",
    introduction: [
      "Technology adoption fails when leadership underestimates change management. AI initiatives require explicit attention to workforce readiness, training, communication, and the cultural shifts that accompany new workflows.",
      "This pillar addresses how executives lead adoption—overcoming resistance, building literacy, enabling teams, and measuring success beyond pilot activity metrics.",
    ],
    topics: [
      "Change leadership",
      "Workforce readiness",
      "Training & enablement",
      "Adoption measurement",
      "Organizational literacy",
    ],
    path: `${BASE}/ai-adoption`,
  },
  {
    slug: "ai-product-leadership",
    title: "AI Product & Innovation Leadership",
    metaTitle: "AI Product & Innovation Leadership | AI Leadership Center",
    metaDescription:
      "Executive product leadership for AI-enabled platforms: roadmaps, metrics, competitive positioning, and scaling from prototype to production.",
    headline: "AI Product & Innovation Leadership",
    subheadline:
      "How product leaders integrate AI into roadmaps, define success metrics, and deliver capabilities customers adopt and pay for.",
    introduction: [
      "AI product leadership requires distinguishing between capabilities that differentiate and features that consume engineering capacity without moving business metrics. Product executives must govern AI investment with the same discipline applied to core platform priorities.",
      "This pillar covers roadmap integration, product metrics, competitive positioning, and the path from prototype to production for AI-enabled products.",
    ],
    topics: [
      "AI product roadmaps",
      "Product metrics",
      "Competitive positioning",
      "Prototype to production",
      "Platform strategy",
    ],
    path: `${BASE}/ai-product-leadership`,
  },
  {
    slug: "ai-transformation",
    title: "AI Transformation & Execution",
    metaTitle: "AI Transformation & Execution | AI Leadership Center",
    metaDescription:
      "Executive guidance on moving from AI strategy to implementation: sequencing, delivery partnerships, fractional leadership, and sustained program momentum.",
    headline: "AI Transformation & Execution",
    subheadline:
      "How leadership teams translate AI strategy into execution—with sequencing discipline, delivery accountability, and sustained momentum.",
    introduction: [
      "Strategy without execution produces slide decks—not business outcomes. AI transformation requires explicit sequencing, delivery governance, and leadership accountability that persists beyond initial launch enthusiasm.",
      "This pillar addresses how executives move from planning to implementation—partnering with technology teams, engaging advisory support, and sustaining program momentum across quarters.",
    ],
    topics: [
      "Strategy to execution",
      "Initiative sequencing",
      "Delivery partnerships",
      "Fractional leadership",
      "Program sustainability",
    ],
    path: `${BASE}/ai-transformation`,
  },
] as const;

export function getPillar(slug: string): LeadershipPillar | undefined {
  return PILLARS.find((p) => p.slug === slug);
}
