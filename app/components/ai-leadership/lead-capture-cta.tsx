import Link from "next/link";
import { DISCOVERY_INTAKE_PATH } from "@/lib/site-config";

export function LeadCaptureCta({
  headline = "Ready to discuss your organization's AI priorities?",
  body = "Schedule a consultation to explore how advisory engagements can accelerate your AI strategy, governance, and execution.",
  primaryLabel = "Request a Consultation",
  secondaryLabel = "Download Resources",
  secondaryHref = "/ai-leadership/resources",
}: {
  headline?: string;
  body?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-[#0f1c30]/80 to-[#0a1424] px-8 py-10 text-center">
      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {headline}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-slate-400">{body}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href={DISCOVERY_INTAKE_PATH}
          className="inline-flex items-center justify-center rounded-full bg-amber-500 px-10 py-3.5 text-sm font-semibold text-[#060d18] shadow-lg shadow-amber-500/20 hover:bg-amber-400 transition-colors"
        >
          {primaryLabel}
        </Link>
        {secondaryHref && (
          <Link
            href={secondaryHref}
            className="inline-flex items-center justify-center rounded-full border border-amber-500/40 bg-amber-500/10 px-8 py-3.5 text-sm font-semibold text-amber-200 hover:bg-amber-500/20 transition-colors"
          >
            {secondaryLabel}
          </Link>
        )}
      </div>
    </div>
  );
}

export function ResourceLeadCapture({
  resourceTitle,
}: {
  resourceTitle: string;
}) {
  return (
    <LeadCaptureCta
      headline={`Request: ${resourceTitle}`}
      body="Complete the consultation intake to receive this resource and discuss how it applies to your organization's AI priorities. Our team will follow up with the download and scheduling options."
      primaryLabel="Request Resource & Consultation"
      secondaryLabel="Explore All Resources"
      secondaryHref="/ai-leadership/resources"
    />
  );
}
