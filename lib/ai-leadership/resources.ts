import type { LeadershipResource } from "./types";

const BASE = "/ai-leadership/resources";

export const RESOURCES: readonly LeadershipResource[] = [
  {
    slug: "ai-opportunity-assessment-checklist",
    title: "AI Opportunity Assessment Checklist",
    metaDescription:
      "Executive checklist for evaluating AI opportunities across business functions—workflow analysis, readiness criteria, and prioritization framework.",
    description:
      "A structured checklist leadership teams use to evaluate AI opportunities before committing budget. Covers workflow identification, readiness assessment, impact scoring, and governance considerations.",
    resourceType: "checklist",
    audience: "CEOs, COOs, and leadership teams evaluating AI adoption",
    highlights: [
      "Workflow identification framework",
      "Readiness assessment criteria",
      "Impact vs complexity scoring guide",
      "Governance checkpoint questions",
      "90-day action planning prompts",
    ],
    path: `${BASE}/ai-opportunity-assessment-checklist`,
  },
  {
    slug: "executive-ai-readiness-framework",
    title: "Executive AI Readiness Framework",
    metaDescription:
      "Framework for assessing organizational AI readiness across data, systems, skills, governance, and executive alignment.",
    description:
      "An executive framework for evaluating whether your organization is prepared to execute AI initiatives—not just approve them. Assesses five readiness dimensions with scoring guidance.",
    resourceType: "framework",
    audience: "Executive teams and board members evaluating AI investment readiness",
    highlights: [
      "Five-dimension readiness assessment",
      "Data and systems evaluation criteria",
      "Skills and change capacity analysis",
      "Governance maturity indicators",
      "Executive alignment checklist",
    ],
    path: `${BASE}/executive-ai-readiness-framework`,
  },
  {
    slug: "ai-governance-planning-template",
    title: "AI Governance Planning Template",
    metaDescription:
      "Template for establishing AI governance: decision rights, risk frameworks, compliance checkpoints, and accountability structures.",
    description:
      "A planning template for leadership teams establishing AI governance without creating innovation bottlenecks. Defines decision rights, risk categories, and escalation protocols.",
    resourceType: "template",
    audience: "CIOs, CROs, legal, compliance, and executive leadership teams",
    highlights: [
      "Decision rights matrix",
      "Risk category definitions",
      "Compliance checkpoint framework",
      "Vendor evaluation criteria",
      "Escalation and review protocols",
    ],
    path: `${BASE}/ai-governance-planning-template`,
  },
  {
    slug: "90-day-ai-roadmap-template",
    title: "90-Day AI Roadmap Template",
    metaDescription:
      "Executive template for sequencing AI initiatives over 90 days with owners, milestones, success metrics, and dependency tracking.",
    description:
      "A practical roadmap template for leadership teams moving from AI assessment to execution. Sequences initiatives with clear owners, milestones, and success metrics.",
    resourceType: "template",
    audience: "Leadership teams with validated AI priorities ready for execution",
    highlights: [
      "Initiative sequencing worksheet",
      "Owner and dependency tracking",
      "Milestone and review cadence",
      "Success metric definitions",
      "Investment phasing guide",
    ],
    path: `${BASE}/90-day-ai-roadmap-template`,
  },
  {
    slug: "ai-investment-prioritization-matrix",
    title: "AI Investment Prioritization Matrix",
    metaDescription:
      "Matrix framework for scoring AI initiatives by business impact, implementation complexity, readiness, and strategic alignment.",
    description:
      "A prioritization matrix executives use to score and sequence AI initiatives. Prevents portfolio sprawl by forcing explicit tradeoffs based on impact, complexity, and readiness.",
    resourceType: "framework",
    audience: "Executive teams managing AI initiative portfolios",
    highlights: [
      "Impact scoring criteria",
      "Complexity and readiness dimensions",
      "Strategic alignment weighting",
      "Portfolio visualization guide",
      "Sequencing recommendations",
    ],
    path: `${BASE}/ai-investment-prioritization-matrix`,
  },
] as const;

export const RESOURCES_HUB_PATH = BASE;

export function getResource(slug: string): LeadershipResource | undefined {
  return RESOURCES.find((r) => r.slug === slug);
}
