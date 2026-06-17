import { REPORT_META } from "./meta";

export const LANDING_COPY = {
  eyebrow: "Executive Research · 2026 Edition",
  headline: REPORT_META.title,
  subheadline:
    "A strategic assessment of where AI creates measurable business value—and how leadership teams can move from experimentation to enterprise impact.",
  authorLine: `By ${REPORT_META.author.name}, ${REPORT_META.author.title}`,
  primaryCta: "Request the Full Report",
  secondaryCta: "Read Online",
  trustLine:
    "Trusted by executives evaluating AI strategy, product innovation, and digital transformation across North America, Europe, the Middle East, and Asia-Pacific.",
  insideReport: {
    title: "Inside the report",
    items: [
      "Executive summary with strategic recommendations for 2026",
      "Current state of AI adoption and executive sentiment",
      "Hibbert AI Readiness Framework with scoring methodology",
      "Six value categories with use cases, benefits, and common mistakes",
      "Industry analysis across nine sectors",
      "Agentic AI: implications, risks, and adoption considerations",
      "Global perspectives across seven regions",
      "Why AI initiatives fail—and how to avoid it",
      "30-day, 90-day, 180-day, and 12-month transformation roadmaps",
      "Executive action plan with investment priorities",
    ],
  },
  audience: {
    title: "Designed for leadership teams",
    description:
      "Written for CEOs, founders, product leaders, CIOs, CTOs, business owners, executives, and investors who need clarity—not hype—on where AI creates competitive advantage.",
  },
  downloadNote:
    "Request the report through our consultation intake. We will follow up with the PDF download and scheduling options for a strategic discussion.",
} as const;

export const SOCIAL_COPY = {
  linkedin: [
    {
      type: "announcement",
      text: `The Global AI Opportunity Report 2026 is now available.

Most organizations are experimenting with AI. Few are capturing durable value.

This executive report covers:
→ Where AI creates revenue, efficiency, and competitive advantage
→ The Hibbert AI Readiness Framework
→ Industry analysis across 9 sectors
→ Global adoption patterns across 7 regions
→ 30/90/180-day and 12-month transformation roadmaps

By Michael Hibbert, Founder, Hibbert Advisory Group.

Request your copy: hibbertadvisorygroup.com/reports/global-ai-opportunity-report-2026

#AIStrategy #ExecutiveLeadership #DigitalTransformation`,
    },
    {
      type: "insight",
      text: `72% of executives say AI is a strategic priority. Less than 30% report measurable enterprise impact.

The gap isn't technology—it's readiness, prioritization, and execution discipline.

Our 2026 Global AI Opportunity Report breaks down where value is being created and how leadership teams can close the impact gap.

Download: hibbertadvisorygroup.com/reports/global-ai-opportunity-report-2026`,
    },
    {
      type: "framework",
      text: `Before investing in AI, assess five readiness dimensions:

1. Leadership alignment
2. Technology foundation
3. Data quality & access
4. Workforce capability
5. Process maturity

The Hibbert AI Readiness Framework—with scoring methodology—is included in our Global AI Opportunity Report 2026.

Request the report → hibbertadvisorygroup.com/reports/global-ai-opportunity-report-2026`,
    },
  ],
  twitter: [
    "The Global AI Opportunity Report 2026 is live. Where AI creates value, why initiatives fail, and roadmaps that work. By @MichaelHibbert → hibbertadvisorygroup.com/reports/global-ai-opportunity-report-2026",
    "72% of execs prioritize AI. <30% see enterprise impact. Our 2026 report closes the gap with frameworks, industry analysis & roadmaps → hibbertadvisorygroup.com/reports/global-ai-opportunity-report-2026",
    "Agentic AI changes the operating model—not just the tool stack. Implications for leaders in our Global AI Opportunity Report 2026 → hibbertadvisorygroup.com/reports/global-ai-opportunity-report-2026",
  ],
  email: {
    subject: "Your copy: The Global AI Opportunity Report 2026",
    preview:
      "Executive insights on AI strategy, readiness, and where measurable value is being created.",
    bodyIntro: `Thank you for requesting The Global AI Opportunity Report 2026.

This executive research is designed to help leadership teams evaluate AI opportunity with the same rigor applied to capital allocation, product investment, and digital transformation.

Inside you'll find adoption trends, the Hibbert AI Readiness Framework, industry and regional analysis, agentic AI implications, and practical transformation roadmaps.`,
    bodyCta: "Schedule a consultation to discuss how these frameworks apply to your organization.",
  },
} as const;
