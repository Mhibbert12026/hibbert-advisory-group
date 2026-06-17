export const ARTICLE_PATH = "/insights/ai-is-not-the-differentiator-experience-is";

import type { InsightImageKey } from "@/lib/insights/ai-differentiator-images";

export const ARTICLE_META = {
  title: "AI Is Not the Differentiator Anymore. Experience Is.",
  subtitle:
    "Why organizations need leaders who understand product strategy, transformation, execution, and AI—not just AI itself.",
  category: "AI Strategy",
  publishDate: "2026-06-17",
  readTimeMinutes: 8,
  metaTitle:
    "AI Is Not the Differentiator Anymore. Experience Is. | Hibbert Advisory Group",
  metaDescription:
    "Executive perspective on why AI access alone no longer creates competitive advantage—and why product leadership, transformation experience, and execution discipline determine where AI creates measurable value.",
  ogImagePath: "/insights/ai-is-not-the-differentiator-experience-is/hero.png",
  author: {
    name: "Michael Hibbert",
    title: "Founder, Hibbert Advisory Group",
    path: "/about/michael-hibbert",
    expertise: [
      "AI Strategy",
      "Product Leadership",
      "Digital Transformation",
      "Executive Advisory",
      "Product Innovation",
    ],
    biography:
      "Michael Hibbert is a product, strategy, and transformation leader with experience spanning enterprise software, media, digital platforms, AI-powered products, and organizational transformation initiatives.",
  },
} as const;

export const EXECUTIVE_SUMMARY =
  "Organizations do not struggle because they lack access to AI tools. They struggle because they lack clarity around where AI fits within their business.";

export const CREDENTIALS = [
  { label: "15+ Years Product Leadership", icon: "leadership" as const },
  { label: "Global Platform Experience", icon: "global" as const },
  { label: "AI & Digital Transformation", icon: "ai" as const },
  { label: "Enterprise & Growth Companies", icon: "enterprise" as const },
  { label: "Strategic Advisory", icon: "advisory" as const },
] as const;

export type InsightCallout = {
  title: string;
  body: string;
  variant?: "insight" | "executive";
};

export type InsightSection = {
  id: string;
  heading?: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
  imageKey?: InsightImageKey;
  callout?: InsightCallout;
  pullQuote?: string;
  divider?: boolean;
};

export const ARTICLE_SECTIONS: readonly InsightSection[] = [
  {
    id: "opening",
    paragraphs: [
      "Over the last two years, I've watched thousands of professionals reposition themselves as AI consultants, AI strategists, prompt engineers, AI transformation experts, and fractional AI advisors.",
      "I understand why.",
      "Artificial Intelligence has fundamentally changed how organizations think about productivity, growth, customer engagement, product development, and operational efficiency. Every executive team is discussing it. Every board is evaluating it. Every business owner is wondering whether they are falling behind.",
      "But there is a reality that many organizations are beginning to discover:",
      "AI is not the differentiator anymore.",
      "Access to AI is.",
      "Understanding AI is.",
      "Applying AI is.",
      "Creating business value with AI is.",
      "Those are very different things.",
    ],
    imageKey: "aiToolsVsTransformation",
  },
  {
    id: "value-of-experience",
    paragraphs: [
      "Today, anyone can ask ChatGPT to create a website, generate a business plan, write an article, produce marketing content, build SEO pages, or even develop software. The barriers to creating content and launching services have been dramatically reduced.",
      "What has not changed is the value of experience.",
    ],
  },
  {
    id: "where-organizations-struggle",
    paragraphs: [
      "Organizations do not struggle because they lack access to AI tools.",
      "They struggle because they lack clarity around where AI fits within their business.",
      "They struggle because they don't know which opportunities matter.",
      "They struggle because they don't know how to prioritize investments.",
      "They struggle because they don't know how to lead change.",
      "And they struggle because technology initiatives often fail long before the technology itself becomes the problem.",
      "That is where experience matters.",
    ],
  },
  {
    id: "leaders-who-understand",
    paragraphs: [
      "The organizations creating the most value from AI are not necessarily the organizations with the most advanced technology.",
      "They are the organizations with leaders who understand strategy, execution, operations, products, customers, and organizational change.",
      "AI is simply one component of a much larger equation.",
    ],
  },
  {
    id: "career-perspective",
    paragraphs: [
      "Throughout my career, I have had the opportunity to work across product leadership, digital transformation, operational strategy, mobile platforms, enterprise software, streaming media, and emerging technologies.",
      "I've participated in initiatives involving organizations such as The New York Times, Paramount Global, CBS Radio, Penton Media, and numerous technology and transformation engagements.",
      "Those experiences taught me something that remains true regardless of the technology trend of the moment:",
    ],
  },
  {
    id: "what-creates-value",
    paragraphs: [
      "Technology rarely creates value on its own.",
      "People create value.",
      "Processes create value.",
      "Execution creates value.",
      "Leadership creates value.",
      "Technology simply amplifies those things.",
    ],
    divider: true,
  },
  {
    id: "evaluating-advisors",
    paragraphs: [
      "This is why I believe organizations should be cautious when evaluating AI advisors, consultants, and transformation partners.",
      "The question should not be:",
      "\"How much AI experience do they have?\"",
      "The question should be:",
      "\"Can they help us identify meaningful business opportunities, prioritize investments, execute effectively, manage organizational change, and deliver measurable outcomes?\"",
      "Because AI implementation is not simply a technology exercise.",
      "It is a business exercise.",
      "It requires understanding:",
    ],
    bullets: [
      "Product strategy",
      "Customer behavior",
      "Operational workflows",
      "Organizational design",
      "Executive communication",
      "Change management",
      "Business economics",
      "Technology implementation",
    ],
    imageKey: "experienceValueFramework",
  },
  {
    id: "practitioner-gap",
    paragraphs: [
      "Very few professionals have spent years operating across all of those disciplines.",
      "Many can explain AI.",
      "Far fewer can connect AI to business outcomes.",
      "Far fewer can lead organizations through transformation.",
      "And even fewer have built products, launched platforms, managed budgets, aligned stakeholders, and executed large-scale initiatives while navigating uncertainty.",
    ],
    divider: true,
  },
  {
    id: "conclusion",
    paragraphs: [
      "The future belongs to organizations that can successfully combine technology, strategy, and execution.",
      "Not technology alone.",
      "Artificial Intelligence will continue to evolve.",
      "Models will improve.",
      "Tools will change.",
      "Platforms will emerge and disappear.",
      "What will remain valuable is the ability to identify opportunities, make sound decisions, align teams, execute effectively, and create measurable business outcomes.",
      "That is why I do not view AI as a standalone discipline.",
      "I view it as part of a broader responsibility: helping organizations identify, prioritize, and execute initiatives that drive growth, efficiency, innovation, and competitive advantage.",
      "The most successful organizations will not be the ones that adopt the most AI.",
      "They will be the ones that apply it with purpose.",
      "And purpose always begins with leadership, strategy, and execution.",
    ],
  },
];

export const RELATED_INSIGHTS = [
  {
    title: "The Global AI Opportunity Report 2026",
    description:
      "Executive research on adoption trends, readiness frameworks, industry analysis, and transformation roadmaps.",
    path: "/reports/global-ai-opportunity-report-2026",
    available: true,
  },
  {
    title: "AI Strategy for Executives",
    description:
      "Pillar guidance on investment prioritization, business cases, and corporate alignment.",
    path: "/ai-leadership/ai-strategy",
    available: true,
  },
  {
    title: "Why AI Initiatives Fail",
    description:
      "Root causes of stalled pilots and how leadership teams avoid the impact gap.",
    path: "/ai-leadership/ai-transformation/moving-from-ai-strategy-to-implementation",
    available: true,
  },
  {
    title: "Executive AI Readiness Framework",
    description:
      "Assess organizational readiness across leadership, data, technology, workforce, and process.",
    path: "/ai-leadership/resources/executive-ai-readiness-framework",
    available: true,
  },
  {
    title: "Product Leadership in the AI Era",
    description:
      "How product leaders integrate AI into roadmaps with measurable customer outcomes.",
    path: "/ai-leadership/ai-product-leadership/integrating-ai-into-product-roadmaps",
    available: true,
  },
] as const;

export const INSIGHT_SITEMAP_ROUTE = {
  path: ARTICLE_PATH,
  changeFrequency: "monthly" as const,
  priority: 0.9,
} as const;
