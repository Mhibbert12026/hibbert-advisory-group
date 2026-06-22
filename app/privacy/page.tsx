import { PageShell } from "@/app/components/page-shell";
import { createPageMetadata } from "@/lib/seo";
import { CONTACT_EMAIL } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for Hibbert Advisory Group describing how discovery intake and contact information is collected and used.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <PageShell>
      <section className="border-b border-white/5 px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
            Legal
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-slate-500">Last updated: June 2026</p>
        </div>
      </section>

      <section className="px-6 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-3xl space-y-8 text-sm leading-relaxed text-slate-400 sm:text-base">
          <div>
            <h2 className="text-lg font-semibold text-white">Overview</h2>
            <p className="mt-3">
              Hibbert Advisory Group (&quot;we,&quot; &quot;us&quot;) respects your privacy. This
              policy explains how information is collected when you visit our website, complete a
              discovery intake form, or contact us by email.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Information we collect</h2>
            <p className="mt-3">
              When you submit a discovery intake form, we receive the information you choose to
              provide—such as your name, email address, organization, role, and business priorities.
              We may also collect standard technical data through our hosting and analytics providers,
              including IP address, browser type, and pages visited.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">How we use information</h2>
            <p className="mt-3">We use submitted information to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Review your inquiry and prepare for advisory conversations</li>
              <li>Respond to requests and schedule follow-up discussions</li>
              <li>Improve our services and website experience</li>
              <li>Maintain records related to prospective and client engagements</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Third-party services</h2>
            <p className="mt-3">
              Our discovery intake form is hosted by Tally, a third-party form provider. Information
              submitted through that form is processed according to Tally&apos;s privacy practices in
              addition to this policy. Our website is hosted on modern cloud infrastructure that may
              process technical log data necessary to operate the site securely.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Data retention</h2>
            <p className="mt-3">
              We retain inquiry and intake information for as long as needed to evaluate engagement
              fit, respond to your request, and maintain appropriate business records.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Your choices</h2>
            <p className="mt-3">
              You may request access to, correction of, or deletion of personal information you have
              submitted by contacting us at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-amber-200/90 hover:text-amber-200 transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Contact</h2>
            <p className="mt-3">
              Questions about this policy may be directed to{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-amber-200/90 hover:text-amber-200 transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
