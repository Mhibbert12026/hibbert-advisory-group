import Image from "next/image";
import Link from "next/link";
import { DISCOVERY_INTAKE_PATH } from "@/lib/site-config";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/about/michael-hibbert", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;

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

export function SiteHeader() {
  return (
    <header className="relative z-10 border-b border-white/5 bg-[#060d18]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
        <Link href="/" className="block shrink-0">
          <Image
            src="/hibbert-logo.png"
            alt="Hibbert Advisory Group"
            width={270}
            height={81}
            className="h-auto w-[210px] sm:w-[270px]"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href={DISCOVERY_INTAKE_PATH}
          className="hidden rounded-full border border-amber-500/40 bg-amber-500/10 px-5 py-2 text-sm font-medium text-amber-200 hover:bg-amber-500/20 transition-colors sm:inline-flex"
        >
          Schedule a Consultation
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/5 px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-sm font-semibold tracking-[0.15em] text-amber-400/90 uppercase">
              Hibbert Advisory Group
            </p>
            <p className="mt-3 text-sm text-slate-400">
              Product Strategy • Revenue Growth • AI Transformation
            </p>
          </div>
          <div>
            <p className="text-xs font-medium tracking-wider text-slate-500 uppercase">
              Services
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/services/ai-opportunity-assessment" className="text-slate-400 hover:text-amber-200/90">
                  AI Opportunity Assessment
                </Link>
              </li>
              <li>
                <Link href="/services/ai-opportunity-assessment-small-business" className="text-slate-400 hover:text-amber-200/90">
                  AI Assessment for Growing Businesses
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
            <p className="text-xs font-medium tracking-wider text-slate-500 uppercase">
              Company
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/small-business-ai" className="text-slate-400 hover:text-amber-200/90">
                  AI for Small Business
                </Link>
              </li>
              <li>
                <Link href="/about/michael-hibbert" className="text-slate-400 hover:text-amber-200/90">
                  About Michael Hibbert
                </Link>
              </li>
              <li>
                <Link href="/intake" className="text-slate-400 hover:text-amber-200/90">
                  Schedule a Consultation
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
