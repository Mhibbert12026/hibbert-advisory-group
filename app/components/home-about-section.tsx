import Image from "next/image";
import Link from "next/link";
import { LINKEDIN_PROFILE_URL } from "@/lib/site-config";

const representativeOrganizations = [
  "The New York Times",
  "Amazon",
  "Roku",
  "Peloton",
  "Paramount",
  "WarnerMedia",
  "ViacomCBS",
  "Stadium",
  "MLT",
] as const;

export function HomeAboutSection() {
  return (
    <section
      id="about"
      className="relative border-t border-white/5 bg-[#0a1424] px-6 py-14 lg:px-8 lg:py-16"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div className="relative mx-auto w-full max-w-[300px] lg:mx-0">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-amber-500/30 shadow-2xl shadow-black/40">
            <Image
              src="/michael-hibbert-headshot.png"
              alt="Michael Hibbert, Founder and Principal Advisor"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 70vw, 300px"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
            About
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Michael Hibbert
          </h2>
          <p className="mt-2 text-lg font-medium text-amber-200/90">
            Founder & Principal Advisor
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400">
            15+ years leading product strategy, digital transformation, audience growth, and AI
            initiatives across media, technology, nonprofit, and startup organizations.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              href="/about/michael-hibbert"
              className="inline-flex text-sm font-semibold text-amber-200/90 hover:text-amber-200 transition-colors"
            >
              View executive profile →
            </Link>
            <a
              href={LINKEDIN_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-sm text-slate-400 transition-colors hover:text-amber-200/90"
            >
              Connect on LinkedIn →
            </a>
          </div>

          <div className="mt-8">
            <p className="text-[11px] font-semibold tracking-[0.14em] text-slate-500 uppercase">
              Representative Organizations
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {representativeOrganizations.map((org) => (
                <li
                  key={org}
                  className="rounded-full border border-white/10 bg-[#0f1c30]/80 px-3.5 py-1.5 text-xs font-medium text-slate-300"
                >
                  {org}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
