export const PROJECT_TYPES = [
  { value: "ai-strategy-implementation", label: "AI Strategy & Implementation" },
  { value: "product-strategy", label: "Product Strategy" },
  { value: "digital-transformation", label: "Digital Transformation" },
  { value: "website-development", label: "Website Development" },
  { value: "brand-strategy", label: "Brand Strategy" },
  { value: "fractional-leadership", label: "Fractional Product Leadership" },
  { value: "revenue-growth", label: "Revenue Growth Diagnostic" },
  { value: "not-sure", label: "Not sure yet — help me prioritize" },
] as const;

export const BUDGET_RANGES = [
  { value: "under-10k", label: "Under $10,000" },
  { value: "10k-25k", label: "$10,000 – $25,000" },
  { value: "25k-50k", label: "$25,000 – $50,000" },
  { value: "50k-100k", label: "$50,000 – $100,000" },
  { value: "100k-plus", label: "$100,000+" },
  { value: "not-sure", label: "Not sure yet" },
] as const;

export const TIMELINE_OPTIONS = [
  { value: "asap", label: "As soon as possible" },
  { value: "1-3-months", label: "1–3 months" },
  { value: "3-6-months", label: "3–6 months" },
  { value: "6-plus-months", label: "6+ months" },
  { value: "exploring", label: "Exploring options" },
] as const;

export type ProjectDiscoveryPayload = {
  projectType: string;
  company: string;
  budgetRange: string;
  timeline: string;
  goals: string;
  challenges: string;
};

export type ProjectDiscoverySubmission = ProjectDiscoveryPayload & {
  recommendedServices: string[];
  summaryText: string;
};

const PROJECT_TYPE_SERVICE_MAP: Record<string, string> = {
  "ai-strategy-implementation": "AI Strategy & Implementation",
  "product-strategy": "Product Strategy",
  "digital-transformation": "Digital Transformation",
  "website-development": "Website Development",
  "brand-strategy": "Brand Strategy",
  "fractional-leadership": "Fractional Product Leadership",
  "revenue-growth": "Revenue Growth Diagnostic",
};

const KEYWORD_SERVICE_RULES: readonly { pattern: RegExp; service: string }[] = [
  { pattern: /\b(website|web\s*site|web\s*development|landing\s*page)\b/i, service: "Website Development" },
  { pattern: /\b(brand(?:ing)?|visual\s*identity|positioning)\b/i, service: "Brand Strategy" },
  {
    pattern: /\b(ai|artificial\s*intelligence|machine\s*learning|generative\s*ai|automation|llm)\b/i,
    service: "AI Strategy & Implementation",
  },
  { pattern: /\b(product\s*strategy|roadmap|platform|mvp|saas)\b/i, service: "Product Strategy" },
  {
    pattern: /\b(digital\s*transformation|modernization|operations|workflow)\b/i,
    service: "Digital Transformation",
  },
  {
    pattern: /\b(fractional|product\s*leadership|cpo|head\s*of\s*product)\b/i,
    service: "Fractional Product Leadership",
  },
  {
    pattern: /\b(revenue|growth|monetization|conversion|go-to-market|gtm)\b/i,
    service: "Revenue Growth Diagnostic",
  },
];

function uniqueServices(services: string[]) {
  return [...new Set(services.filter(Boolean))];
}

export function buildProjectSummary(services: readonly string[]) {
  if (services.length === 0) {
    return "You appear to be seeking strategic advisory support.";
  }

  if (services.length === 1) {
    return `You appear to be seeking ${services[0]} support.`;
  }

  const last = services[services.length - 1];
  const rest = services.slice(0, -1);
  return `You appear to be seeking ${rest.join(", ")} and ${last} support.`;
}

export function recommendServices(payload: ProjectDiscoveryPayload) {
  const services: string[] = [];
  const combinedText = `${payload.goals} ${payload.challenges}`;

  const primary = PROJECT_TYPE_SERVICE_MAP[payload.projectType];
  if (primary) {
    services.push(primary);
  }

  for (const rule of KEYWORD_SERVICE_RULES) {
    if (rule.pattern.test(combinedText)) {
      services.push(rule.service);
    }
  }

  const recommendedServices = uniqueServices(services).slice(0, 4);

  if (recommendedServices.length === 0) {
    recommendedServices.push("Product Strategy", "AI Strategy & Implementation");
  }

  return {
    recommendedServices,
    summaryText: buildProjectSummary(recommendedServices),
  };
}

export function getProjectTypeLabel(value: string) {
  return PROJECT_TYPES.find((item) => item.value === value)?.label ?? value;
}

export function getBudgetRangeLabel(value: string) {
  return BUDGET_RANGES.find((item) => item.value === value)?.label ?? value;
}

export function getTimelineLabel(value: string) {
  return TIMELINE_OPTIONS.find((item) => item.value === value)?.label ?? value;
}
