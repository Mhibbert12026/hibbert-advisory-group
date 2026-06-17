import type { LeadershipAuthor } from "./types";

export const MICHAEL_HIBBERT: LeadershipAuthor = {
  slug: "michael-hibbert",
  name: "Michael Hibbert",
  title: "Founder & Principal Advisor, Hibbert Advisory Group",
  bio: "Michael Hibbert is a product leader and executive advisor with 15+ years of experience guiding organizations through AI strategy, product leadership, digital transformation, and growth initiatives across media, technology, SaaS, and professional services.",
  credentials: [
    "15+ years of product strategy and executive advisory experience",
    "Led mobile portfolio expansion at The New York Times",
    "Supported global OTT streaming initiatives across Paramount Global",
    "Founded JobFit AI, an AI-powered career intelligence platform",
    "Advises CEOs, founders, and leadership teams on AI adoption and product strategy",
  ],
  path: "/ai-leadership/authors/michael-hibbert",
};

export const ALL_AUTHORS = [MICHAEL_HIBBERT] as const;

export function getAuthor(slug: string): LeadershipAuthor | undefined {
  return ALL_AUTHORS.find((a) => a.slug === slug);
}
