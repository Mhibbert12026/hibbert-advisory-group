"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CalendlyLink } from "@/app/components/calendly-link";
import { PRIMARY_NAV_LINKS } from "@/lib/navigation";
import { DISCOVERY_INTAKE_PATH } from "@/lib/site-config";

const navLinkClassName =
  "whitespace-nowrap text-sm text-slate-400 transition-colors hover:text-white";

const ctaBaseClassName =
  "inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="site-header relative z-50 border-b border-white/5 bg-[#060d18]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-4 sm:px-6 lg:gap-4 lg:px-8 lg:py-5">
        <Link
          href="/"
          className="block shrink-0"
          onClick={() => setMobileOpen(false)}
        >
          <Image
            src="/hibbert-logo.png"
            alt="Hibbert Advisory Group"
            width={270}
            height={81}
            className="h-auto w-[150px] sm:w-[180px] lg:w-[200px] xl:w-[240px] 2xl:w-[270px]"
            priority
          />
        </Link>

        <nav
          className="hidden min-w-0 flex-1 flex-nowrap items-center justify-center gap-4 lg:flex xl:gap-5"
          aria-label="Primary"
        >
          {PRIMARY_NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={navLinkClassName}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 lg:ml-0 lg:gap-3">
          <CalendlyLink
            className={`${ctaBaseClassName} hidden border border-white/12 px-3 py-2 text-slate-200 hover:border-amber-500/30 hover:text-white lg:inline-flex xl:px-4`}
          >
            Schedule Call
          </CalendlyLink>
          <Link
            href={DISCOVERY_INTAKE_PATH}
            className={`${ctaBaseClassName} hidden border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-amber-200 hover:bg-amber-500/20 sm:inline-flex lg:px-4 xl:px-5`}
          >
            <span className="lg:hidden">Start Discovery Intake</span>
            <span className="hidden lg:inline">Start Discovery</span>
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:border-amber-500/30 hover:text-white lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div
          id="mobile-nav"
          className="border-t border-white/8 bg-[#060d18]/95 backdrop-blur-md lg:hidden"
        >
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-5" aria-label="Mobile">
            {PRIMARY_NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-white/5 py-3.5 text-sm text-slate-300 transition-colors hover:text-amber-200"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={DISCOVERY_INTAKE_PATH}
              className="mt-5 inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-[#060d18] transition-colors hover:bg-amber-400"
              onClick={() => setMobileOpen(false)}
            >
              Start Discovery Intake
            </Link>
            <CalendlyLink
              className="mt-3 inline-flex items-center justify-center rounded-full border border-amber-500/35 bg-amber-500/10 px-6 py-3 text-sm font-semibold text-amber-200 transition-colors hover:border-amber-500/50"
              onClick={() => setMobileOpen(false)}
            >
              Schedule Discovery Call
            </CalendlyLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
