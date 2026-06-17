import type { SeoLandingPageContent, SeoRelatedLink, SitemapRoute } from "./seo-landing-types";
import { pickRelatedServices } from "./internal-links";

export const SMALL_BUSINESS_HUB_PATH = "/small-business-ai";

export type TenWaysItem = {
  title: string;
  problem: string;
  solution: string;
  benefit: string;
};

export type HubResourceLink = {
  path: string;
  title: string;
  description: string;
};

const hubRelatedLinks = pickRelatedServices([
  "/services/ai-opportunity-assessment-small-business",
  "/services/ai-opportunity-assessment",
  "/small-business-ai",
  "/strategy-to-execution",
  "/about/michael-hibbert",
]);

const professionRelated = pickRelatedServices([
  "/services/ai-opportunity-assessment-small-business",
  "/small-business-ai/ai-opportunity-assessment-small-business",
  "/small-business-ai/10-ways-small-businesses-can-use-ai",
  "/services/ai-strategy-roadmap",
  "/strategy-to-execution",
]);

export const hubMeta = {
  metaTitle: "AI for Small Business | Practical Strategies for Growing Companies",
  metaDescription:
    "Practical AI guidance for business owners, founders, and professional services firms. Identify opportunities for revenue growth, time savings, and operational efficiency.",
  heroTitle: "AI for Small Business",
  headline: "Practical AI Strategies for Growing Businesses",
  subheadline:
    "Most business owners know AI matters. Few know where to start. Hibbert Advisory Group helps organizations identify practical AI opportunities that create measurable business value.",
};

export const hubBenefits = [
  {
    title: "Revenue growth",
    description:
      "Identify AI applications that support lead qualification, proposal speed, customer retention, and revenue expansion—not just cost cutting.",
  },
  {
    title: "Time savings",
    description:
      "Automate repetitive administrative, reporting, and communication tasks so owners and teams focus on high-value client and growth work.",
  },
  {
    title: "Operational efficiency",
    description:
      "Streamline scheduling, intake, follow-up, and internal workflows that consume hours each week without requiring enterprise-scale investment.",
  },
  {
    title: "Customer acquisition",
    description:
      "Improve marketing consistency, lead response speed, and outreach quality to win more business without proportionally increasing headcount.",
  },
  {
    title: "Customer retention",
    description:
      "Strengthen follow-up, engagement, and service responsiveness—the factors that keep clients loyal in competitive professional services markets.",
  },
  {
    title: "Business scalability",
    description:
      "Build systems that support growth without linear increases in administrative burden, allowing firms to serve more clients with the same team.",
  },
] as const;

export const hubMisconceptions = [
  {
    title: "AI requires a large technology budget",
    description:
      "Many high-value applications use affordable tools applied to specific workflows—customer follow-up, scheduling, proposal drafts—not enterprise platform replacements.",
  },
  {
    title: "You need a technical team to benefit",
    description:
      "Practical AI adoption starts with workflow clarity and business priorities. Advisory engagements identify what to implement and in what order—without requiring in-house engineering.",
  },
  {
    title: "AI is only for tech companies",
    description:
      "Professional services firms, advisors, agencies, and growing businesses often see faster ROI from administrative and client-facing automation than technology companies.",
  },
  {
    title: "You must adopt AI everywhere at once",
    description:
      "The highest-ROI approach is one or two focused initiatives with clear metrics—not organization-wide transformation programs sized for Fortune 500 companies.",
  },
] as const;

export const hubWhereToStart = [
  "Document where your team spends the most repetitive time each week—email, scheduling, reporting, research, follow-up.",
  "Identify workflows with clear inputs and outputs that do not require complex judgment on every step.",
  "Prioritize opportunities by time saved, revenue impact, and ease of implementation—not by what competitors announce.",
  "Start with an AI Opportunity Assessment to produce a prioritized plan before committing to tools or vendors.",
  "Measure results after 30–60 days and expand only what demonstrates measurable value.",
] as const;

export const hubRoiOpportunities = [
  {
    title: "Administrative automation",
    description:
      "Scheduling, intake forms, data entry, and internal reporting—often recover 5–15 hours per week for owners and office staff.",
  },
  {
    title: "Client communication",
    description:
      "Faster response times, meeting preparation, and follow-up sequences that improve retention without hiring additional support staff.",
  },
  {
    title: "Sales and marketing support",
    description:
      "Lead qualification, proposal drafts, content planning, and competitive research that accelerate revenue activities.",
  },
  {
    title: "Knowledge management",
    description:
      "Instant access to firm policies, past proposals, and client history—reducing time spent searching and recreating work.",
  },
] as const;

export const hubResources: readonly HubResourceLink[] = [
  {
    path: "/small-business-ai/10-ways-small-businesses-can-use-ai",
    title: "10 Ways Small Businesses Can Use AI Today",
    description:
      "Practical applications across customer service, scheduling, lead qualification, marketing, and workflow automation.",
  },
  {
    path: "/small-business-ai/ai-opportunity-assessment-small-business",
    title: "AI Opportunity Assessment for Small Business",
    description:
      "What the assessment includes, potential outcomes, and how growing businesses get started.",
  },
  {
    path: "/small-business-ai/ai-for-financial-advisors",
    title: "AI for Financial Advisors",
    description:
      "Client communication, meeting preparation, research, and CRM automation for advisory practices.",
  },
  {
    path: "/small-business-ai/ai-for-consultants",
    title: "AI for Consultants",
    description:
      "Proposal creation, client reporting, research, and workflow automation for consulting firms.",
  },
  {
    path: "/small-business-ai/ai-for-coaches",
    title: "AI for Coaches",
    description:
      "Client engagement, content creation, scheduling, and follow-up for coaching practices.",
  },
  {
    path: "/small-business-ai/ai-for-real-estate",
    title: "AI for Real Estate",
    description:
      "Lead nurturing, property marketing, client communication, and administrative automation.",
  },
  {
    path: "/small-business-ai/ai-for-law-firms",
    title: "AI for Law Firms",
    description:
      "Research support, document preparation, client intake, and knowledge management.",
  },
  {
    path: "/small-business-ai/ai-for-insurance-agencies",
    title: "AI for Insurance Agencies",
    description:
      "Lead management, customer support, policy communications, and reporting automation.",
  },
];

export const tenWaysContent = {
  path: "/small-business-ai/10-ways-small-businesses-can-use-ai",
  metaTitle: "10 Ways Small Businesses Can Use AI Today",
  metaDescription:
    "Practical AI applications for small businesses: customer service, scheduling, lead qualification, proposals, marketing, recruiting, and workflow automation with clear business benefits.",
  heroTitle: "10 Ways Small Businesses Can Use AI Today",
  heroSubtitle:
    "Practical applications business owners can evaluate today—focused on problems solved, implementation approach, and measurable business benefits.",
  introduction: [
    "Small businesses do not need complex technology programs to benefit from AI. The highest-value applications target specific workflows where time is lost, leads are missed, or clients wait too long for responses.",
    "Each application below follows the same framework: identify the business problem, apply AI to a defined workflow, and measure the benefit in time saved, revenue gained, or client experience improved.",
    "Before investing in tools, business owners benefit from prioritizing which applications fit their operations—a focused assessment prevents spending on capabilities that never get adopted.",
  ],
  items: [
    {
      title: "Customer service automation",
      problem:
        "Owners and small teams cannot respond to every inquiry immediately. Delayed responses lose leads and frustrate existing clients.",
      solution:
        "Automated first-response systems handle common questions, route urgent requests, and provide after-hours coverage—escalating to staff when judgment is required.",
      benefit:
        "Faster response times, fewer missed inquiries, and more time for staff to handle complex client needs.",
    },
    {
      title: "Appointment scheduling",
      problem:
        "Back-and-forth emails and phone tag to book meetings consume hours each week for owners, advisors, and service professionals.",
      solution:
        "Intelligent scheduling tools integrate with calendars, send reminders, and handle rescheduling—reducing manual coordination.",
      benefit:
        "Recovered administrative time, fewer no-shows, and a more professional client experience from first contact.",
    },
    {
      title: "Lead qualification",
      problem:
        "Not every inquiry is a qualified prospect, but owners spend time on calls and emails with leads that will never convert.",
      solution:
        "Structured intake and qualification workflows score leads based on fit, urgency, and budget—prioritizing follow-up on the best opportunities.",
      benefit:
        "Higher conversion rates, less time on unqualified prospects, and clearer pipeline visibility for growth planning.",
    },
    {
      title: "Proposal generation",
      problem:
        "Custom proposals take hours to draft, delaying response time and limiting how many opportunities the business can pursue.",
      solution:
        "AI-assisted proposal tools use firm templates, past work, and client context to produce strong first drafts for owner review and customization.",
      benefit:
        "Faster proposal turnaround, more proposals sent per month, and improved win rates from timely follow-through.",
    },
    {
      title: "Marketing content",
      problem:
        "Consistent marketing requires content owners do not have time to create—blogs, newsletters, and client updates fall behind.",
      solution:
        "Content planning and drafting tools produce outlines and drafts aligned to your expertise—edited and approved by you before publishing.",
      benefit:
        "Steadier marketing presence, improved visibility, and client trust from regular valuable communication.",
    },
    {
      title: "Social media planning",
      problem:
        "Social media is important for visibility but inconsistent posting produces little return for the time invested.",
      solution:
        "Planning tools generate content calendars, post drafts, and repurposing suggestions from existing content—maintaining your voice with less daily effort.",
      benefit:
        "Consistent online presence, stronger brand visibility, and reduced daily social media burden on owners.",
    },
    {
      title: "Knowledge management",
      problem:
        "Critical information lives in email, documents, and individual memory—staff recreate work and clients wait while answers are hunted down.",
      solution:
        "Searchable knowledge systems organize policies, procedures, past proposals, and FAQs so teams find answers in seconds.",
      benefit:
        "Faster internal decisions, consistent client answers, and reduced dependency on any single employee's memory.",
    },
    {
      title: "Recruiting support",
      problem:
        "Hiring requires screening resumes, drafting job posts, and scheduling interviews—pulling owners away from revenue-generating work.",
      solution:
        "Recruiting tools assist with job descriptions, resume screening against defined criteria, and interview scheduling coordination.",
      benefit:
        "Shorter hiring cycles, better candidate filtering, and less owner time spent on administrative hiring tasks.",
    },
    {
      title: "Workflow automation",
      problem:
        "Repetitive multi-step processes—client onboarding, invoice follow-up, report compilation—consume hours that should go to growth.",
      solution:
        "Automation connects the tools you already use to move data, send notifications, and trigger next steps without manual handoffs.",
      benefit:
        "Fewer errors, faster process completion, and capacity to serve more clients without adding administrative staff.",
    },
    {
      title: "Competitive research",
      problem:
        "Owners need market and competitor awareness but lack time for systematic research before strategic decisions.",
      solution:
        "Research assistants summarize competitor positioning, industry trends, and market changes—producing briefings for owner review.",
      benefit:
        "Better-informed pricing, positioning, and service decisions without dedicating full days to manual research.",
    },
  ] satisfies readonly TenWaysItem[],
  faq: [
    {
      question: "Which AI application should a small business start with?",
      answer:
        "Start with the workflow consuming the most repetitive time—often scheduling, client follow-up, or proposal drafting. An AI Opportunity Assessment helps prioritize based on your specific operations.",
    },
    {
      question: "How much does it cost to implement AI in a small business?",
      answer:
        "Many applications use affordable monthly tools applied to specific workflows. Advisory assessment begins at $3,500 and identifies priorities before tool investment—preventing spend on unused capabilities.",
    },
    {
      question: "Do I need technical staff to use AI in my business?",
      answer:
        "No. Practical AI adoption focuses on workflow clarity and tool selection. Advisory engagements define what to implement and how—without requiring in-house engineering.",
    },
    {
      question: "How quickly can a small business see results?",
      answer:
        "Focused workflow applications often show measurable time savings within 30–60 days when adoption is disciplined and success metrics are defined upfront.",
    },
  ],
  relatedServices: professionRelated,
};

export const assessmentGuideContent: SeoLandingPageContent = {
  path: "/small-business-ai/ai-opportunity-assessment-small-business",
  metaTitle: "AI Opportunity Assessment for Small Business | Hibbert Advisory Group",
  metaDescription:
    "AI opportunity assessment for small businesses and growing firms. Business review, workflow analysis, prioritization, and implementation roadmap for measurable ROI.",
  breadcrumbParent: "Small Business AI",
  breadcrumbParentPath: SMALL_BUSINESS_HUB_PATH,
  heroEyebrow: "Getting Started",
  heroTitle: "AI Opportunity Assessment for Small Business",
  heroSubtitle:
    "A practical assessment that helps business owners identify where AI creates measurable value—before investing in tools, platforms, or vendors.",
  introduction: [
    "Most growing businesses know AI could help. The challenge is knowing where to start, what to prioritize, and how to avoid spending on tools that never get adopted.",
    "The AI Opportunity Assessment is a fixed-scope advisory engagement designed for business owners, founders, and professional services leaders who need clarity—not a technology project.",
    "You receive a prioritized view of opportunities, a practical implementation sequence, and executive-ready recommendations your team can act on within 90 days.",
  ],
  sections: [
    {
      id: "includes",
      eyebrow: "Scope",
      title: "What the Assessment Includes",
      paragraphs: [
        "The assessment is structured for business decision-makers. It focuses on workflows, time allocation, revenue activities, and client experience—not technical architecture.",
      ],
      items: [
        {
          title: "Business review",
          description:
            "Discussion of business model, growth priorities, team structure, and where owners and staff spend the most time on repetitive work.",
        },
        {
          title: "Workflow review",
          description:
            "Analysis of client intake, communication, scheduling, proposals, marketing, reporting, and internal operations to identify automation and efficiency opportunities.",
        },
        {
          title: "AI opportunity identification",
          description:
            "Mapping of practical applications across customer service, sales support, marketing, administration, and knowledge management—matched to your operations.",
        },
        {
          title: "Prioritization matrix",
          description:
            "Opportunities scored by business impact, implementation ease, time to value, and cost—so you fund what matters first.",
        },
        {
          title: "Implementation roadmap",
          description:
            "A 90-day sequenced plan with recommended next steps, tool categories, success metrics, and optional execution support through trusted specialists.",
        },
      ],
    },
    {
      id: "outcomes",
      eyebrow: "Results",
      title: "Potential Business Outcomes",
      paragraphs: [
        "Outcomes depend on which workflows are prioritized, but growing businesses consistently see value across four categories.",
      ],
      items: [
        {
          title: "Cost reduction",
          description:
            "Reduced administrative hours, fewer manual errors, and less need for incremental support staff as client volume grows.",
        },
        {
          title: "Revenue growth",
          description:
            "Faster lead response, more proposals sent, improved follow-up, and better client retention contributing to top-line growth.",
        },
        {
          title: "Productivity gains",
          description:
            "Owners and teams recover hours each week for client work, business development, and strategic priorities.",
        },
        {
          title: "Improved customer experience",
          description:
            "Faster responses, consistent communication, and more professional touchpoints from first inquiry through ongoing service.",
        },
      ],
    },
    {
      id: "who",
      eyebrow: "Audience",
      title: "Who This Assessment Is For",
      paragraphs: [
        "The assessment is designed for organizations that need practical direction—not enterprise transformation programs.",
      ],
      bulletItems: [
        "Business owners evaluating AI for the first time",
        "Professional services firms—advisors, consultants, coaches, agencies",
        "Growing companies with 5–50 employees seeking efficiency without large IT investment",
        "Founders who have tried AI tools but lack a prioritized plan",
        "Leadership teams preparing budget decisions for technology investment",
      ],
    },
  ],
  advisoryContext:
    "Ready to identify your highest-value AI opportunities? Request the formal advisory engagement—AI Opportunity Assessment for Growing Businesses—with defined deliverables and a prioritized 90-day roadmap.",
  relatedServices: pickRelatedServices([
    "/services/ai-opportunity-assessment-small-business",
    "/services/ai-opportunity-assessment",
    "/small-business-ai/10-ways-small-businesses-can-use-ai",
    "/strategy-to-execution",
    "/about/michael-hibbert",
  ]),
  faq: [
    {
      question: "How long does the small business AI assessment take?",
      answer:
        "Most assessments complete in two to three weeks depending on business complexity and owner availability for interviews.",
    },
    {
      question: "What does the assessment cost?",
      answer:
        "Fixed-scope engagements start at $3,500. Scope is confirmed during discovery based on business size and workflow breadth.",
    },
    {
      question: "Do I need technical knowledge to participate?",
      answer:
        "No. The assessment is designed for business owners and operators. You describe how your business works; advisory work translates that into prioritized AI opportunities.",
    },
    {
      question: "What deliverables do I receive?",
      answer:
        "You receive a prioritized opportunity map, workflow analysis summary, prioritization matrix, 90-day implementation roadmap, and an executive findings review session.",
    },
    {
      question: "Will you implement the recommendations?",
      answer:
        "The assessment focuses on identification and prioritization. Implementation support is available through Strategy to Execution engagements with trusted specialists when needed.",
    },
  ],
};

function professionPage(
  path: string,
  metaTitle: string,
  metaDescription: string,
  heroTitle: string,
  heroSubtitle: string,
  introduction: readonly string[],
  topics: readonly { title: string; description: string }[],
  scenarios: readonly { title: string; description: string }[],
  faq: readonly { question: string; answer: string }[]
): SeoLandingPageContent {
  return {
    path,
    metaTitle,
    metaDescription,
    breadcrumbParent: "Small Business AI",
    breadcrumbParentPath: SMALL_BUSINESS_HUB_PATH,
    heroEyebrow: "Industry Guide",
    heroTitle,
    heroSubtitle,
    introduction,
    sections: [
      {
        id: "applications",
        eyebrow: "Applications",
        title: `Practical AI Applications for ${heroTitle.replace("AI for ", "")}`,
        paragraphs: [
          "The applications below focus on workflows where growing practices lose the most time—without requiring enterprise technology investment or technical staff.",
          "Each opportunity should be evaluated against your client volume, team size, and growth priorities. An assessment helps determine which applications deliver the fastest measurable return for your practice.",
        ],
        items: topics,
      },
      {
        id: "getting-started",
        eyebrow: "Getting started",
        title: "Where to Begin",
        paragraphs: [
          "Start with the workflow your team complains about most—usually scheduling, follow-up, proposal preparation, or research. Measure time spent before and after implementation.",
          "Avoid adopting multiple tools simultaneously. One well-implemented workflow improvement builds confidence and produces data for the next priority.",
          "Professional practices benefit from advisory review before vendor commitments—ensuring tools integrate with existing CRM, document, and communication systems.",
        ],
      },
    ],
    engagementScenarios: scenarios,
    advisoryContext:
      "Professional practices typically begin with an AI Opportunity Assessment to identify priorities, then implement through focused workflow improvements or Strategy to Execution support when technical help is needed.",
    relatedServices: professionRelated,
    faq,
  };
}

export const financialAdvisorsContent = professionPage(
  "/small-business-ai/ai-for-financial-advisors",
  "AI for Financial Advisors | Practical Applications",
  "AI applications for financial advisors: client communication, meeting preparation, content generation, research assistance, and CRM automation for growing advisory practices.",
  "AI for Financial Advisors",
  "Practical AI applications that help financial advisors save time, strengthen client relationships, and grow their practice—without replacing the judgment clients pay for.",
  [
    "Financial advisors build their practice on trust, personal relationships, and sound judgment. AI does not replace that—it removes the administrative burden that limits how many clients you can serve well.",
    "The highest-value applications for advisory practices focus on meeting preparation, client communication consistency, research efficiency, and CRM follow-through—workflows where hours disappear without directly serving clients.",
    "Advisors who adopt AI thoughtfully often serve more clients with the same team, respond faster to prospects, and maintain more consistent touchpoints—the factors that drive retention and referrals.",
  ],
  [
    { title: "Client communication", description: "Automated touchpoint sequences, personalized update drafts, and timely follow-up that keep clients engaged between reviews—edited and approved by you." },
    { title: "Meeting preparation", description: "Briefings that summarize client history, portfolio context, and discussion topics before every meeting—reducing prep time from hours to minutes." },
    { title: "Content generation", description: "Market commentary, newsletter drafts, and educational content aligned to your voice—maintaining consistent client communication without daily writing burden." },
    { title: "Research assistance", description: "Summarized market updates, product comparisons, and planning considerations—giving you faster access to information for client discussions." },
    { title: "CRM automation", description: "Lead follow-up, task reminders, and client milestone tracking integrated with your CRM—ensuring no prospect or client falls through the cracks." },
  ],
  [
    { title: "Solo advisor practice expansion", description: "A solo advisor used meeting preparation and CRM automation to add fifteen clients without hiring support staff—recovering ten hours per week for client-facing work." },
    { title: "Multi-advisor firm consistency", description: "A growing RIA implemented client communication templates and research briefings—improving touchpoint consistency and reducing preparation time across the team." },
  ],
  [
    { question: "Is AI appropriate for financial advisory client relationships?", answer: "Yes, when applied to administrative and preparation workflows—not investment decisions. You maintain judgment and approval; AI handles drafts, summaries, and scheduling." },
    { question: "How do advisors maintain compliance with AI tools?", answer: "Advisory engagements include evaluation of data handling, record-keeping, and compliance considerations appropriate to your regulatory environment before tool recommendations." },
    { question: "What should financial advisors automate first?", answer: "Meeting preparation and CRM follow-up typically deliver the fastest time savings with lowest implementation risk for advisory practices." },
  ]
);

export const consultantsContent = professionPage(
  "/small-business-ai/ai-for-consultants",
  "AI for Consultants | Practical Business Applications",
  "AI for consulting firms: proposal creation, client reporting, research, competitive analysis, and workflow automation to win more business and deliver faster.",
  "AI for Consultants",
  "Practical AI for consultants who want to win more engagements, deliver faster, and spend less time on proposals, research, and reporting.",
  [
    "Consultants sell expertise and judgment—but too much time goes to proposals, research, reporting, and administrative follow-up instead of billable client work.",
    "AI applications for consulting firms focus on the workflows that limit growth: slow proposal turnaround, inconsistent research depth, and reporting that consumes days at month-end.",
    "Firms that implement thoughtfully often increase proposal volume, improve win rates, and recover billable hours—without hiring additional analysts for every new engagement.",
  ],
  [
    { title: "Proposal creation", description: "First drafts from firm templates, past proposals, and engagement context—producing strong starting points for principal review and customization." },
    { title: "Client reporting", description: "Automated data compilation, chart generation, and narrative drafts for recurring client reports—reducing delivery time while maintaining quality standards." },
    { title: "Research", description: "Industry summaries, competitor profiles, and market landscape briefings—accelerating the research phase of new engagements." },
    { title: "Competitive analysis", description: "Structured competitor comparisons and positioning analysis—supporting strategy recommendations with faster evidence gathering." },
    { title: "Workflow automation", description: "Engagement onboarding, time tracking reminders, invoice follow-up, and project status updates—reducing operational friction across the firm." },
  ],
  [
    { title: "Boutique strategy firm proposal acceleration", description: "A five-person consultancy reduced proposal turnaround from five days to two—enabling the partners to pursue three additional opportunities per quarter." },
    { title: "Operations consulting reporting efficiency", description: "A consulting firm automated monthly client reporting compilation—recovering forty analyst hours per month for billable project work." },
  ],
  [
    { question: "Will AI-generated proposals win engagements?", answer: "AI produces strong first drafts from your firm's expertise and templates. Principals customize and approve every proposal—maintaining the quality clients expect." },
    { question: "How do consultants protect client confidentiality with AI?", answer: "Advisory review evaluates data handling, tool policies, and workflow design to protect client information before implementation recommendations." },
    { question: "What is the highest-ROI application for consulting firms?", answer: "Proposal creation and research support typically deliver the fastest revenue impact by increasing pursuit capacity and win velocity." },
  ]
);

export const coachesContent = professionPage(
  "/small-business-ai/ai-for-coaches",
  "AI for Coaches | Practical Practice Growth Tools",
  "AI for coaches: client engagement, content creation, scheduling, follow-up automation, and knowledge management for growing coaching practices.",
  "AI for Coaches",
  "Practical AI for coaches who want to engage more clients, create consistent content, and reduce administrative time—without losing the personal connection clients value.",
  [
    "Coaching practices grow through visibility, consistency, and client results—but owners spend enormous time on content, scheduling, follow-up, and session preparation instead of coaching.",
    "AI helps coaches maintain consistent client touchpoints, produce regular content, and manage scheduling—freeing capacity to take on more clients or deepen existing relationships.",
    "The best applications preserve your voice and judgment while removing repetitive work that does not require your direct expertise.",
  ],
  [
    { title: "Client engagement", description: "Between-session prompts, progress check-ins, and resource recommendations—maintaining momentum without manual messaging for every client." },
    { title: "Content creation", description: "Blog posts, newsletter drafts, social content, and program materials aligned to your methodology—edited and published in your voice." },
    { title: "Scheduling", description: "Automated booking, reminders, rescheduling, and session preparation—eliminating email coordination for every appointment." },
    { title: "Follow-up automation", description: "Post-session summaries, action item tracking, and accountability reminders—strengthening client outcomes between sessions." },
    { title: "Knowledge management", description: "Organized frameworks, exercises, and session materials searchable by topic—reducing time recreating resources for each client." },
  ],
  [
    { title: "Executive coach practice scaling", description: "An executive coach used scheduling automation and content drafting to add eight clients while publishing weekly content—without hiring an assistant." },
    { title: "Group coaching program efficiency", description: "A coach automated between-session follow-up for a group program—improving participant completion rates while reducing manual communication time." },
  ],
  [
    { question: "Does AI make coaching feel impersonal?", answer: "No—when applied to administrative and content workflows. Session delivery and client relationships remain entirely yours; AI handles scheduling, drafts, and reminders." },
    { question: "What should coaches automate first?", answer: "Scheduling and follow-up automation typically deliver immediate time savings and improved client experience with minimal implementation complexity." },
    { question: "Can AI help coaches create course content?", answer: "Yes. AI assists with outlines, drafts, and exercise design based on your methodology—you review, refine, and approve all materials." },
  ]
);

export const realEstateContent = professionPage(
  "/small-business-ai/ai-for-real-estate",
  "AI for Real Estate | Practical Agent & Broker Tools",
  "AI for real estate professionals: lead nurturing, property marketing, client communication, market research, and administrative automation.",
  "AI for Real Estate",
  "Practical AI for agents and brokers who want to nurture more leads, market properties faster, and reduce administrative time.",
  [
    "Real estate professionals compete on responsiveness, market knowledge, and client relationships—but hours disappear into lead follow-up, listing marketing, and transaction coordination.",
    "AI applications help agents respond faster to inquiries, produce stronger listing materials, and maintain consistent nurture sequences—without hiring a full marketing team.",
    "The agents gaining the most advantage use AI for speed and consistency while keeping personal judgment on pricing, negotiation, and client counsel.",
  ],
  [
    { title: "Lead nurturing", description: "Automated follow-up sequences, market update messages, and re-engagement campaigns for past prospects—keeping your pipeline active without manual outreach." },
    { title: "Property marketing", description: "Listing descriptions, social posts, email campaigns, and open house promotions—produced faster and customized per property." },
    { title: "Customer communication", description: "Transaction updates, milestone reminders, and FAQ responses—keeping buyers and sellers informed throughout the process." },
    { title: "Market research", description: "Neighborhood summaries, comparable analysis briefings, and pricing context—accelerating CMA preparation and client consultations." },
    { title: "Administrative automation", description: "Document collection, appointment scheduling, and transaction checklist tracking—reducing coordination time on every deal." },
  ],
  [
    { title: "Independent agent lead response", description: "An independent agent implemented instant lead response and nurture sequences—converting twenty percent more online inquiries by responding within minutes instead of hours." },
    { title: "Team listing marketing efficiency", description: "A small team used AI-assisted listing marketing to publish properties within twenty-four hours of listing agreement—improving seller satisfaction and days-on-market performance." },
  ],
  [
    { question: "Will AI listing descriptions hurt my brand?", answer: "AI produces strong first drafts you customize with property specifics and local knowledge. You approve every listing before publication." },
    { question: "What is the best first AI tool for real estate agents?", answer: "Lead response and nurture automation typically deliver the fastest revenue impact by converting more inquiries into appointments." },
    { question: "Can small teams benefit without enterprise tools?", answer: "Yes. Practical applications use affordable tools integrated with your CRM and marketing platforms—sized for individual agents and small teams." },
  ]
);

export const lawFirmsContent = professionPage(
  "/small-business-ai/ai-for-law-firms",
  "AI for Law Firms | Practical Efficiency Applications",
  "AI for law firms and legal practices: research support, document preparation, client intake, knowledge management, and workflow automation.",
  "AI for Law Firms",
  "Practical AI for law firms and solo practitioners who want to reduce administrative burden, accelerate document work, and improve client intake—while maintaining professional standards.",
  [
    "Legal practices bill for expertise and advocacy, but partners and associates spend significant time on research, document preparation, intake, and internal knowledge retrieval.",
    "AI applications for law firms focus on workflows with clear structure—intake forms, document drafts, research summaries, and knowledge search—where time savings translate directly to capacity for billable work.",
    "Firms adopting thoughtfully improve client response time and matter throughput without proportionally increasing support staff—particularly valuable for growing practices and solo practitioners.",
  ],
  [
    { title: "Research support", description: "Summarized case references, statute overviews, and issue briefings—accelerating initial research phases for attorney review and analysis." },
    { title: "Document preparation", description: "First drafts of routine documents, correspondence, and form-based filings—reducing preparation time while requiring attorney review and approval." },
    { title: "Client intake", description: "Automated intake forms, conflict checks, and initial information gathering—speeding engagement start without sacrificing thoroughness." },
    { title: "Knowledge management", description: "Searchable firm precedents, templates, and matter history—reducing time recreating work and improving consistency across matters." },
    { title: "Workflow automation", description: "Deadline tracking, client update sequences, billing reminders, and matter milestone notifications—reducing missed deadlines and administrative overhead." },
  ],
  [
    { title: "Solo practitioner capacity expansion", description: "A solo practitioner used intake automation and document drafting to handle thirty percent more matters—without hiring a paralegal." },
    { title: "Boutique firm knowledge access", description: "A five-attorney firm implemented searchable precedent libraries—reducing document preparation time and improving consistency across similar matters." },
  ],
  [
    { question: "Is AI document drafting appropriate for legal work?", answer: "AI produces first drafts for attorney review—not final work product. Attorneys maintain responsibility for accuracy, strategy, and client counsel on every matter." },
    { question: "How do law firms address confidentiality with AI?", answer: "Advisory review evaluates tool data policies, client confidentiality requirements, and workflow design before recommending any implementation." },
    { question: "What should small law firms prioritize first?", answer: "Client intake automation and knowledge management typically deliver immediate capacity gains with manageable implementation complexity." },
  ]
);

export const insuranceAgenciesContent = professionPage(
  "/small-business-ai/ai-for-insurance-agencies",
  "AI for Insurance Agencies | Practical Agency Tools",
  "AI for insurance agencies: lead management, customer support, policy communications, reporting automation, and administrative efficiency.",
  "AI for Insurance Agencies",
  "Practical AI for insurance agencies that want to manage more leads, serve clients faster, and reduce administrative burden on producers and support staff.",
  [
    "Insurance agencies grow through producer productivity, client retention, and responsive service—but teams spend hours on lead follow-up, policy communications, certificate requests, and reporting.",
    "AI applications help agencies respond to leads faster, automate routine client communications, and streamline reporting—improving both producer capacity and client satisfaction.",
    "Agencies that implement focused workflow improvements often serve more accounts per producer and reduce support staff burden without sacrificing the personal service clients expect.",
  ],
  [
    { title: "Lead management", description: "Instant lead response, qualification workflows, and nurture sequences—ensuring prospects receive timely follow-up before choosing a competitor." },
    { title: "Customer support", description: "FAQ handling, certificate request routing, and policy question triage—resolving routine requests without producer involvement." },
    { title: "Policy communications", description: "Renewal reminders, coverage update notifications, and endorsement confirmations—maintaining consistent client communication automatically." },
    { title: "Reporting automation", description: "Commission reports, production summaries, and carrier submission compilation—reducing month-end administrative burden on agency staff." },
    { title: "Administrative efficiency", description: "Data entry reduction, appointment scheduling, and document collection workflows—freeing producers for sales and relationship activities." },
  ],
  [
    { title: "Independent agency lead conversion", description: "An independent agency implemented instant lead response and qualification—improving quote-to-bind conversion by eighteen percent in the first quarter." },
    { title: "Multi-producer agency support efficiency", description: "A growing agency automated certificate processing and renewal communications—reducing support staff hours by twenty-five percent while improving client response times." },
  ],
  [
    { question: "Will AI replace insurance producers?", answer: "No. AI handles routine communication and administrative workflows. Producers maintain relationships, coverage advice, and sales—the activities clients value." },
    { question: "What is the fastest ROI for insurance agencies?", answer: "Lead response automation and routine client communication typically deliver measurable results within the first renewal cycle." },
    { question: "Can agencies integrate AI with existing AMS systems?", answer: "Advisory review evaluates integration with your agency management system before recommending tools—ensuring workflows connect rather than creating duplicate data entry." },
  ]
);

export const ALL_SMALL_BUSINESS_PAGES: readonly SeoLandingPageContent[] = [
  assessmentGuideContent,
  financialAdvisorsContent,
  consultantsContent,
  coachesContent,
  realEstateContent,
  lawFirmsContent,
  insuranceAgenciesContent,
];

export const SMALL_BUSINESS_SITEMAP_ROUTES: readonly SitemapRoute[] = [
  { path: SMALL_BUSINESS_HUB_PATH, changeFrequency: "monthly", priority: 0.85 },
  { path: tenWaysContent.path, changeFrequency: "monthly", priority: 0.8 },
  { path: assessmentGuideContent.path, changeFrequency: "monthly", priority: 0.8 },
  { path: financialAdvisorsContent.path, changeFrequency: "monthly", priority: 0.75 },
  { path: consultantsContent.path, changeFrequency: "monthly", priority: 0.75 },
  { path: coachesContent.path, changeFrequency: "monthly", priority: 0.75 },
  { path: realEstateContent.path, changeFrequency: "monthly", priority: 0.75 },
  { path: lawFirmsContent.path, changeFrequency: "monthly", priority: 0.75 },
  { path: insuranceAgenciesContent.path, changeFrequency: "monthly", priority: 0.75 },
];

export { hubRelatedLinks };
