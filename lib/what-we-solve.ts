export type LeadershipChallenge = {
  id: string;
  challengeLines: readonly string[];
  outcome: string;
};

export const LEADERSHIP_CHALLENGES: readonly LeadershipChallenge[] = [
  {
    id: "ai-start",
    challengeLines: ["We know AI matters.", "We don't know where to start."],
    outcome:
      "Identify high-value AI opportunities, prioritize initiatives, and create an implementation roadmap.",
  },
  {
    id: "product-results",
    challengeLines: ["Product investments aren't generating expected results."],
    outcome:
      "Align product strategy, customer needs, and business objectives around measurable outcomes.",
  },
  {
    id: "adoption",
    challengeLines: ["Adoption is lower than expected."],
    outcome:
      "Improve stakeholder alignment, adoption planning, and organizational buy-in.",
  },
  {
    id: "product-leadership",
    challengeLines: ["We need executive-level product leadership."],
    outcome:
      "Fractional product leadership, roadmap guidance, and strategic decision support.",
  },
  {
    id: "gtm",
    challengeLines: ["We need a go-to-market strategy."],
    outcome:
      "Define positioning, launch planning, commercialization strategy, and growth frameworks.",
  },
  {
    id: "transformation",
    challengeLines: ["We are navigating organizational transformation."],
    outcome:
      "Create clarity, accountability, and execution plans that support transformation initiatives.",
  },
] as const;

export const WHAT_WE_SOLVE_META = {
  eyebrow: "What We Solve",
  title: "The Challenges Leaders Bring Me",
  subheadline:
    "Organizations typically engage Hibbert Advisory Group when they need clarity, alignment, and execution around product, AI, growth, and transformation initiatives.",
  ctaLabel: "Let's discuss your challenge.",
} as const;
