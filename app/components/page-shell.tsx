import Image from "next/image";
import Link from "next/link";
import { CalendlyLink } from "@/app/components/calendly-link";
import { SiteHeader } from "@/app/components/site-header";
import {
  CONTACT_EMAIL,
  DISCOVERY_INTAKE_PATH,
  LINKEDIN_PROFILE_URL,
} from "@/lib/site-config";

export function GridTexture() {
  return (
    <div
      className="pointer-events-none fixed inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
      aria-hidden
    />
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer relative z-10 border-t border-white/5 px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/hibbert-logo.png"
                alt="Hibbert Advisory Group"
                width={180}
                height={54}
                className="h-auto w-[160px]"
              />
            </Link>
            <p className="mt-4 text-sm text-slate-400">
              Product Strategy • Revenue Growth • AI Transformation
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-3 inline-block text-sm text-slate-400 transition-colors hover:text-amber-200/90"
            >
              {CONTACT_EMAIL}
            </a>
            <a
              href={LINKEDIN_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-sm text-slate-400 transition-colors hover:text-amber-200/90"
            >
              LinkedIn
            </a>
          </div>
          <div>
            <p className="text-xs font-medium tracking-wider text-slate-500 uppercase">Services</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/services/ai-opportunity-assessment" className="text-slate-400 hover:text-amber-200/90">
                  AI Opportunity Assessment
                </Link>
              </li>
              <li>
                <Link href="/services/ai-strategy-roadmap" className="text-slate-400 hover:text-amber-200/90">
                  AI Strategy & Roadmap
                </Link>
              </li>
              <li>
                <Link href="/services/fractional-product-leadership" className="text-slate-400 hover:text-amber-200/90">
                  Fractional Product Leadership
                </Link>
              </li>
              <li>
                <Link href="/services/digital-transformation" className="text-slate-400 hover:text-amber-200/90">
                  Digital Transformation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium tracking-wider text-slate-500 uppercase">Company</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/#outcomes" className="text-slate-400 hover:text-amber-200/90">
                  Experience & Outcomes
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-slate-400 hover:text-amber-200/90">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-slate-400 hover:text-amber-200/90">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/about/michael-hibbert" className="text-slate-400 hover:text-amber-200/90">
                  About Michael Hibbert
                </Link>
              </li>
              <li>
                <Link href={DISCOVERY_INTAKE_PATH} className="text-slate-400 hover:text-amber-200/90">
                  Start Discovery Intake
                </Link>
              </li>
              <li>
                <CalendlyLink className="text-slate-400 hover:text-amber-200/90">
                  Schedule Discovery Call
                </CalendlyLink>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium tracking-wider text-slate-500 uppercase">Legal</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-amber-200/90">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-slate-400 hover:text-amber-200/90">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-slate-500">
          © 2026 Hibbert Advisory Group
        </p>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#060d18] text-slate-200 font-sans">
      <GridTexture />
      <SiteHeader />
      <main className="relative z-10">{children}</main>
      <SiteFooter />
    </div>
  );
}
