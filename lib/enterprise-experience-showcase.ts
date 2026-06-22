export type EnterpriseExperienceLogo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  containerClassName?: string;
  imageClassName?: string;
};

export type EnterpriseExperienceCard = {
  id: string;
  organization: string;
  headline: string;
  description: string;
  focusAreas: readonly string[];
  logo: EnterpriseExperienceLogo;
};

export const ENTERPRISE_EXPERIENCE_META = {
  title: "Enterprise Experience & Business Impact",
  subtitle:
    "Helping organizations launch products, scale platforms, modernize operations, and turn emerging technologies into measurable business outcomes.",
  introduction:
    "Over 15 years of experience leading product strategy, digital transformation, platform launches, operational modernization, and AI-driven innovation across media, technology, SaaS, and consulting organizations.",
} as const;

export const ENTERPRISE_EXPERIENCE_CARDS: readonly EnterpriseExperienceCard[] = [
  {
    id: "nyt",
    organization: "New York Times",
    headline: "Expanded Mobile Product Portfolio",
    description:
      "Helped expand the New York Times mobile portfolio from a single application to multiple applications supporting audience growth, engagement, and product innovation.",
    focusAreas: [
      "Product Strategy",
      "Mobile Products",
      "User Experience",
      "Portfolio Growth",
    ],
    logo: {
      src: "/enterprise-logos/new-york-times.jpg",
      alt: "The New York Times",
      width: 1320,
      height: 1056,
      containerClassName: "rounded-xl border border-white/10 bg-white px-3 py-2",
      imageClassName: "h-8",
    },
  },
  {
    id: "paramount",
    organization: "Paramount",
    headline: "OTT & Streaming Platform Initiatives",
    description:
      "Supported large-scale streaming and digital platform initiatives helping deliver premium content experiences across global audiences.",
    focusAreas: [
      "OTT Platforms",
      "Digital Products",
      "Customer Experience",
      "Platform Delivery",
    ],
    logo: {
      src: "/enterprise-logos/paramount.png",
      alt: "Paramount",
      width: 271,
      height: 186,
      imageClassName: "h-9 brightness-110",
    },
  },
  {
    id: "cbs-radio",
    organization: "CBS Radio",
    headline: "Digital Transformation & Product Innovation",
    description:
      "Led product and operational initiatives supporting digital modernization and business transformation efforts.",
    focusAreas: [
      "Digital Strategy",
      "Product Delivery",
      "Operations",
      "Change Management",
    ],
    logo: {
      src: "/enterprise-logos/cbs-radio.png",
      alt: "CBS Radio",
      width: 1700,
      height: 1700,
      imageClassName: "h-10",
    },
  },
  {
    id: "penton",
    organization: "Penton Media",
    headline: "Product Growth & Operational Excellence",
    description:
      "Supported digital product innovation and operational improvements across media and information businesses.",
    focusAreas: [
      "Product Management",
      "Process Optimization",
      "Operational Excellence",
      "Growth Strategy",
    ],
    logo: {
      src: "/enterprise-logos/penton-media.png",
      alt: "Penton Media",
      width: 195,
      height: 195,
      containerClassName: "rounded-xl border border-white/10 bg-white px-2.5 py-2",
      imageClassName: "h-8",
    },
  },
  {
    id: "jobfit-ai",
    organization: "JobFit AI",
    headline: "Built & Launched AI Career Intelligence Platform",
    description:
      "Created and launched an AI-powered SaaS platform helping professionals identify opportunities, analyze skills, optimize resumes, and accelerate career growth.",
    focusAreas: [
      "AI Products",
      "SaaS",
      "Platform Development",
      "Generative AI",
    ],
    logo: {
      src: "/enterprise-logos/jobfit-ai.png",
      alt: "JobFit AI",
      width: 1672,
      height: 941,
      containerClassName: "rounded-xl border border-white/10 bg-white px-3 py-2",
      imageClassName: "h-8",
    },
  },
  {
    id: "hag",
    organization: "Hibbert Advisory Group",
    headline: "AI, Product & Transformation Advisory",
    description:
      "Helping organizations identify, prioritize, and execute AI, product, and digital transformation initiatives that drive measurable business value.",
    focusAreas: [
      "AI Strategy",
      "Fractional Product Leadership",
      "Digital Transformation",
      "Executive Advisory",
    ],
    logo: {
      src: "/hibbert-logo.png",
      alt: "Hibbert Advisory Group",
      width: 1536,
      height: 1024,
      imageClassName: "h-9",
    },
  },
] as const;

export const ENTERPRISE_IMPACT_METRICS = [
  { value: "15+", label: "Years Experience", featured: true },
  { value: null, label: "Enterprise Product Leadership", featured: false },
  { value: null, label: "AI Strategy & Transformation", featured: false },
  { value: null, label: "Platform Development", featured: false },
  { value: null, label: "Operational Excellence", featured: false },
  { value: null, label: "Executive Advisory", featured: false },
] as const;

export const ENTERPRISE_EXPERIENCE_CTA = {
  headline: "Ready to Accelerate Your Next Initiative?",
  description:
    "Whether you're exploring AI opportunities, scaling a product organization, modernizing operations, or launching a new platform, Hibbert Advisory Group can help.",
  buttonLabel: "Request a Consultation",
} as const;
