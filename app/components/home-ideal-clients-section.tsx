import Link from "next/link";
import { IDEAL_CLIENTS } from "@/lib/homepage-conversion";

export function HomeIdealClientsSection() {
  return (
    <section
      id="clients"
      aria-labelledby="ideal-clients-heading"
      className="border-t border-white/5 bg-[#060d18] px-6 py-14 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <header className="max-w-2xl">
          <p className="text-sm font-medium tracking-[0.15em] text-amber-400/90 uppercase">
            Who We Serve
          </p>
          <h2
            id="ideal-clients-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Ideal Clients
          </h2>
          <p className="mt-4 leading-relaxed text-slate-400">
            Built for organizations that need senior-level product, growth, and AI strategy
            without adding unnecessary complexity.
          </p>
        </header>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {IDEAL_CLIENTS.map((client) => (
            <li
              key={client}
              className="rounded-xl border border-white/8 bg-[#0f1c30]/60 px-6 py-5 text-sm font-medium text-slate-200"
            >
              {client}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
