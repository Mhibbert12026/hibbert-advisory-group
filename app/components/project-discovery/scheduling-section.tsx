import { EmbeddedCalendly } from "@/app/components/project-discovery/embedded-calendly";
import { SCHEDULING_TRUST_ITEMS } from "@/lib/schedule-journey";

type SchedulingSectionProps = {
  onScheduled: () => void;
  eyebrow?: string;
  title?: string;
  description?: string;
};

const DEFAULT_EYEBROW = "Schedule";
const DEFAULT_TITLE = "Select Your Preferred Time";
const DEFAULT_DESCRIPTION =
  "Choose a time that works best for your schedule. You will receive a confirmation email immediately after booking.";

export function SchedulingSection({
  onScheduled,
  eyebrow = DEFAULT_EYEBROW,
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
}: SchedulingSectionProps) {
  return (
    <section aria-labelledby="scheduling-heading">
      <article className="relative overflow-hidden rounded-2xl border border-amber-500/22 bg-gradient-to-br from-[#132238]/95 via-[#0f1c30]/98 to-[#0a1424] shadow-2xl shadow-black/35 ring-1 ring-amber-500/10">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/45 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-20 top-0 h-40 w-40 rounded-full bg-amber-600/8 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-16 bottom-0 h-32 w-32 rounded-full bg-blue-950/20 blur-3xl"
          aria-hidden
        />

        <div className="relative px-5 py-6 sm:px-7 sm:py-7">
          <header className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.15em] text-amber-400/90 uppercase">
              {eyebrow}
            </p>
            <h2
              id="scheduling-heading"
              className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl"
            >
              {title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
          </header>

          <ul
            className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4"
            aria-label="Session details"
          >
            {SCHEDULING_TRUST_ITEMS.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 rounded-lg border border-white/8 bg-[#0a1424]/60 px-3 py-2.5 text-xs text-slate-300 sm:text-[13px]"
              >
                <span
                  className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-amber-500/15 text-[10px] font-bold text-amber-300"
                  aria-hidden
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-5 overflow-hidden rounded-xl border border-white/8 bg-[#0a1424]/90 shadow-inner shadow-black/20">
            <EmbeddedCalendly onScheduled={onScheduled} />
          </div>
        </div>
      </article>
    </section>
  );
}
