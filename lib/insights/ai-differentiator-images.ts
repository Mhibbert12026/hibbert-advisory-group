export const INSIGHT_IMAGES = {
  hero: {
    src: "/insights/ai-is-not-the-differentiator-experience-is/hero.png",
    alt: "AI Is Not the Differentiator Anymore. Experience Is. — executive perspective on product strategy, transformation, execution, and AI from Hibbert Advisory Group",
    width: 1024,
    height: 576,
    caption:
      "Organizations need leaders who understand product strategy, transformation, execution, and AI—not just AI itself.",
  },
  aiToolsVsTransformation: {
    src: "/insights/ai-is-not-the-differentiator-experience-is/ai-tools-vs-transformation.png",
    alt: "Comparison of AI tools alone versus business transformation — anyone can generate content, few can drive transformation",
    width: 1024,
    height: 576,
    caption:
      "Technology is accessible. Transformation is earned through product leadership, strategy, operations, and execution.",
  },
  experienceValueFramework: {
    src: "/insights/ai-is-not-the-differentiator-experience-is/experience-value-framework.png",
    alt: "Where experience creates value — the Hibbert Advisory Group framework connecting product leadership, business strategy, operational transformation, AI implementation, executive communication, and platform development to business outcomes",
    width: 1024,
    height: 682,
    caption:
      "The most valuable AI initiatives occur where strategy, leadership, execution, and technology intersect.",
  },
} as const;

export type InsightImageKey = keyof typeof INSIGHT_IMAGES;
