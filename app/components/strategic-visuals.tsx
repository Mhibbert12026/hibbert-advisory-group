type VisualProps = {
  className?: string;
};

export function HeroStrategicVisual({ className = "" }: VisualProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f1c30]/80 p-5 shadow-2xl shadow-black/40 backdrop-blur-sm ${className}`}
      aria-hidden
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-amber-500/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-[#1e3a5f]/60 blur-2xl" />

      <div className="relative space-y-4">
        <div className="flex items-center justify-between border-b border-white/8 pb-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-amber-400 hag-animate-pulse-glow" />
            <span className="text-[10px] font-medium tracking-[0.2em] text-slate-400 uppercase">
              Strategy Dashboard
            </span>
          </div>
          <span className="rounded border border-amber-500/25 bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium text-amber-200">
            Live
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Growth", value: "30%+" },
            { label: "Adoption", value: "26%" },
            { label: "ROI", value: "4.2x" },
          ].map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-lg border border-white/8 bg-white/[0.03] px-2 py-2"
            >
              <p className="text-[9px] text-slate-500 uppercase">{kpi.label}</p>
              <p className="text-sm font-semibold text-amber-300">{kpi.value}</p>
            </div>
          ))}
        </div>

        <svg viewBox="0 0 320 120" className="h-auto w-full" fill="none">
          <defs>
            <linearGradient id="heroLine" x1="0" y1="0" x2="320" y2="0">
              <stop stopColor="#f59e0b" stopOpacity="0.2" />
              <stop offset="1" stopColor="#f59e0b" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="120">
              <stop stopColor="#f59e0b" stopOpacity="0.18" />
              <stop offset="1" stopColor="#f59e0b" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[20, 40, 60, 80, 100].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="320"
              y2={y}
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
            />
          ))}
          <path
            d="M0 95 L40 82 L80 70 L120 58 L160 48 L200 38 L240 32 L280 24 L320 18 L320 120 L0 120 Z"
            fill="url(#heroArea)"
          />
          <path
            d="M0 95 L40 82 L80 70 L120 58 L160 48 L200 38 L240 32 L280 24 L320 18"
            stroke="url(#heroLine)"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="hag-animate-line-draw"
          />
          {[
            [40, 82],
            [120, 58],
            [200, 38],
            [280, 24],
          ].map(([cx, cy], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r="4"
              fill="#0f1c30"
              stroke="#f59e0b"
              strokeWidth="2"
            />
          ))}
        </svg>

        <div className="grid grid-cols-2 gap-3">
          <svg viewBox="0 0 140 80" className="h-auto w-full rounded-lg border border-white/8 bg-white/[0.02] p-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <rect
                key={i}
                x={12 + i * 24}
                y={60 - (i + 1) * 8}
                width="14"
                height={(i + 1) * 8}
                rx="2"
                fill={i === 4 ? "#f59e0b" : "rgba(245,158,11,0.35)"}
              />
            ))}
          </svg>
          <svg viewBox="0 0 140 80" className="h-auto w-full rounded-lg border border-white/8 bg-white/[0.02] p-2">
            <circle cx="70" cy="40" r="28" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
            <circle
              cx="70"
              cy="40"
              r="28"
              stroke="#f59e0b"
              strokeWidth="8"
              strokeDasharray="110 66"
              strokeLinecap="round"
              transform="rotate(-90 70 40)"
            />
            <text x="70" y="44" textAnchor="middle" fill="#fcd34d" fontSize="11" fontWeight="600">
              AI
            </text>
          </svg>
        </div>

        <svg viewBox="0 0 320 60" className="h-auto w-full">
          {[
            [40, 30],
            [100, 20],
            [160, 35],
            [220, 15],
            [280, 28],
          ].map(([x, y], i, arr) =>
            i < arr.length - 1 ? (
              <line
                key={i}
                x1={x}
                y1={y}
                x2={arr[i + 1][0]}
                y2={arr[i + 1][1]}
                stroke="rgba(245,158,11,0.35)"
                strokeWidth="1.5"
              />
            ) : null
          )}
          {[
            [40, 30],
            [100, 20],
            [160, 35],
            [220, 15],
            [280, 28],
          ].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="8" fill="#0f1c30" stroke="#f59e0b" strokeWidth="1.5" />
              <circle cx={x} cy={y} r="3" fill="#f59e0b" />
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export const trustedExperienceOrganizations = [
  "New York Times",
  "Amazon",
  "Roku",
  "Peloton",
  "WarnerMedia",
  "ViacomCBS",
  "MLT",
] as const;

export function TrustedExperienceSection() {
  return (
    <section className="border-t border-white/5 bg-[#0a1424]/80 px-6 py-14 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="shrink-0 text-sm font-semibold tracking-[0.2em] text-amber-400/90 uppercase">
            Trusted Experience
          </h2>
          <ul className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7 lg:gap-4">
            {trustedExperienceOrganizations.map((org) => (
              <li
                key={org}
                className="group flex min-h-[56px] items-center justify-center rounded-lg border border-white/8 bg-white/[0.03] px-3 py-3 text-center shadow-sm shadow-black/10 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/30 hover:bg-white/[0.06]"
              >
                <span className="text-[11px] font-semibold leading-tight tracking-wide text-slate-400 transition-colors duration-300 group-hover:text-slate-200 sm:text-xs">
                  {org}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function KpiLiveIndicator() {
  return (
    <span className="mb-3 inline-flex items-center gap-2">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-60 hag-animate-pulse-glow" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
      </span>
      <span className="text-[10px] font-medium tracking-[0.15em] text-amber-400/80 uppercase">
        Verified
      </span>
    </span>
  );
}

type SignatureMetricProps = {
  value: string;
  label: string;
  index: number;
  featured?: boolean;
};

export function SignatureMetricCard({
  value,
  label,
  index,
  featured = false,
}: SignatureMetricProps) {
  return (
    <li
      className={`group relative overflow-hidden rounded-2xl border p-8 shadow-xl backdrop-blur-sm transition-all duration-300 ${
        featured
          ? "border-amber-500/35 bg-gradient-to-br from-amber-500/12 via-white/[0.04] to-transparent shadow-amber-500/5 hag-kpi-shimmer hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10"
          : "border-amber-500/20 bg-white/[0.04] shadow-black/20 hover:border-amber-500/40 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-black/30"
      }`}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/[0.06] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />
      <div className="relative">
        <KpiLiveIndicator />
        <OutcomeMetricVisual index={index} large />
        <p
          className={`font-semibold tracking-tight text-amber-300 ${
            featured ? "text-5xl sm:text-6xl" : "text-4xl sm:text-5xl lg:text-6xl"
          }`}
        >
          {value}
        </p>
        <p className="mt-4 text-sm font-medium leading-snug text-white sm:text-base">
          {label}
        </p>
      </div>
    </li>
  );
}

export function HeroKpiStrip({
  metrics,
}: {
  metrics: readonly { value: string; label: string }[];
}) {
  return (
    <dl className="mt-16 grid gap-4 border-t border-white/10 pt-12 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((item) => (
        <div
          key={item.label}
          className="group rounded-xl border border-amber-500/20 bg-white/[0.03] px-5 py-5 transition-all duration-300 hover:border-amber-500/35 hover:bg-white/[0.05]"
        >
          <dd className="text-2xl font-semibold tracking-tight text-amber-300 sm:text-3xl">
            {item.value}
          </dd>
          <dt className="mt-2 text-xs font-medium tracking-wider text-slate-400 uppercase">
            {item.label}
          </dt>
        </div>
      ))}
    </dl>
  );
}

const metricVisuals = [
  // Years experience timeline
  <svg key="experience" viewBox="0 0 120 40" className="h-10 w-full opacity-80" fill="none">
    <line x1="8" y1="28" x2="112" y2="28" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
    {[8, 36, 64, 92, 112].map((x, i) => (
      <g key={i}>
        <circle
          cx={x}
          cy="28"
          r={i === 4 ? 5 : 4}
          fill={i === 4 ? "#f59e0b" : "#0f1c30"}
          stroke="#f59e0b"
          strokeWidth="1.5"
        />
        {i < 4 && (
          <line
            x1={x}
            y1="28"
            x2={[36, 64, 92, 112][i]}
            y2="28"
            stroke="rgba(245,158,11,0.4)"
            strokeWidth="2"
          />
        )}
      </g>
    ))}
  </svg>,
  // Engagement growth line
  <svg key="engagement" viewBox="0 0 120 40" className="h-10 w-full opacity-80" fill="none">
    <path
      d="M4 32 L24 28 L44 22 L64 16 L84 12 L104 6"
      stroke="#f59e0b"
      strokeWidth="2"
      strokeLinecap="round"
      className="hag-animate-line-draw"
    />
    <path
      d="M4 32 L24 28 L44 22 L64 16 L84 12 L104 6 L104 38 L4 38 Z"
      fill="url(#metricEngagement)"
    />
    <defs>
      <linearGradient id="metricEngagement" x1="0" y1="0" x2="0" y2="40">
        <stop stopColor="#f59e0b" stopOpacity="0.2" />
        <stop offset="1" stopColor="#f59e0b" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>,
  // Adoption bars
  <svg key="adoption" viewBox="0 0 120 40" className="h-10 w-full opacity-80" fill="none">
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <rect
        key={i}
        x={8 + i * 18}
        y={36 - (10 + i * 4)}
        width="10"
        height={10 + i * 4}
        rx="2"
        fill={i >= 4 ? "#f59e0b" : "rgba(245,158,11,0.35)"}
        className="hag-animate-bar-rise"
        style={{ animationDelay: `${i * 0.1}s` }}
      />
    ))}
  </svg>,
  // Portfolio budget gauge
  <svg key="portfolio" viewBox="0 0 120 40" className="h-10 w-full opacity-80" fill="none">
    <path d="M10 32 H110" stroke="rgba(255,255,255,0.1)" strokeWidth="4" strokeLinecap="round" />
    <path d="M10 32 H92" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
    <circle cx="92" cy="32" r="5" fill="#f59e0b" />
    <text x="10" y="14" fill="#94a3b8" fontSize="9" fontWeight="500">
      $10M+
    </text>
  </svg>,
] as const;

export function OutcomeMetricVisual({
  index,
  large = false,
}: {
  index: number;
  large?: boolean;
}) {
  return (
    <div
      className={`mb-4 rounded-lg border border-white/6 bg-white/[0.02] px-3 py-2 ${
        large ? "py-3" : ""
      }`}
    >
      {metricVisuals[index] ?? metricVisuals[0]}
    </div>
  );
}

const engagementBannerThemes = [
  {
    label: "Analytics",
    kpi: "30%+",
  },
  {
    label: "Adoption",
    kpi: "26%",
  },
  {
    label: "Strategy",
    kpi: "AI",
  },
] as const;

function EngagementBannerSvg({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg viewBox="0 0 360 120" className="h-full w-full" fill="none" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="bannerNyt" x1="0" y1="0" x2="360" y2="120">
            <stop stopColor="#0f1c30" />
            <stop offset="1" stopColor="#132238" />
          </linearGradient>
        </defs>
        <rect width="360" height="120" fill="url(#bannerNyt)" />
        {[0, 1, 2, 3, 4].map((i) => (
          <line key={i} x1="0" y1={24 + i * 20} x2="360" y2={24 + i * 20} stroke="rgba(255,255,255,0.04)" />
        ))}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <rect
            key={i}
            x={20 + i * 38}
            y={88 - (12 + (i % 5) * 8)}
            width="22"
            height={12 + (i % 5) * 8}
            rx="3"
            fill={i >= 6 ? "#f59e0b" : "rgba(245,158,11,0.28)"}
            className="hag-animate-bar-rise"
            style={{ animationDelay: `${i * 0.08}s` }}
          />
        ))}
        <path
          d="M20 36 Q100 16 180 30 T340 18"
          stroke="#f59e0b"
          strokeWidth="2"
          strokeOpacity="0.7"
          className="hag-animate-line-draw"
        />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg viewBox="0 0 360 120" className="h-full w-full" fill="none" preserveAspectRatio="xMidYMid slice">
        <rect width="360" height="120" fill="#0a1424" />
        <circle cx="90" cy="60" r="36" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
        <circle
          cx="90"
          cy="60"
          r="36"
          stroke="#f59e0b"
          strokeWidth="8"
          strokeDasharray="150 76"
          transform="rotate(-90 90 60)"
        />
        <text x="90" y="66" textAnchor="middle" fill="#fcd34d" fontSize="16" fontWeight="700">
          26%
        </text>
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={i}
            x={170 + i * 42}
            y={40 + i * 8}
            width="30"
            height="10"
            rx="2"
            fill="rgba(245,158,11,0.22)"
            className="hag-animate-bar-rise"
            style={{ animationDelay: `${i * 0.12}s` }}
          />
        ))}
        <rect x="170" y="82" width="138" height="10" rx="2" fill="#f59e0b" fillOpacity="0.55" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 360 120" className="h-full w-full" fill="none" preserveAspectRatio="xMidYMid slice">
      <rect width="360" height="120" fill="#0f1c30" />
      <g className="hag-animate-spin-slow" style={{ transformOrigin: "180px 60px" }}>
        <circle cx="180" cy="60" r="44" stroke="rgba(245,158,11,0.12)" strokeWidth="1" strokeDasharray="4 6" />
      </g>
      {[
        [80, 60],
        [180, 30],
        [180, 90],
        [280, 60],
      ].map(([x, y], i, arr) =>
        arr.slice(i + 1).map(([x2, y2], j) => (
          <line
            key={`${i}-${j}`}
            x1={x}
            y1={y}
            x2={x2}
            y2={y2}
            stroke="rgba(245,158,11,0.35)"
            strokeWidth="1.5"
          />
        ))
      )}
      {[
        [80, 60],
        [180, 30],
        [180, 90],
        [280, 60],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="8" fill="#0f1c30" stroke="#f59e0b" strokeWidth="2" />
      ))}
      <circle cx="180" cy="60" r="14" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" strokeWidth="2" />
      <path
        d="M40 95 Q120 70 180 78 T320 88"
        stroke="#f59e0b"
        strokeWidth="1.5"
        strokeOpacity="0.45"
        strokeDasharray="5 5"
      />
    </svg>
  );
}

export function EngagementCardBanner({ index }: { index: number }) {
  const theme = engagementBannerThemes[index] ?? engagementBannerThemes[0];

  return (
    <div className="relative -mx-8 -mt-8 mb-6 h-32 overflow-hidden border-b border-amber-500/20 sm:h-36">
      <EngagementBannerSvg index={index} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1c30] via-transparent to-transparent" />
      <div className="absolute left-4 top-4 flex items-center gap-2 rounded-md border border-white/10 bg-[#060d18]/70 px-2.5 py-1 backdrop-blur-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-400 hag-animate-pulse-glow" />
        <span className="text-[10px] font-medium tracking-wider text-slate-300 uppercase">
          {theme.label}
        </span>
      </div>
      <div className="absolute bottom-3 right-4 rounded-lg border border-amber-500/30 bg-amber-500/15 px-3 py-1 text-sm font-bold text-amber-200">
        {theme.kpi}
      </div>
    </div>
  );
}

const processVisuals = [
  // Discovery
  <svg key="discovery" viewBox="0 0 48 48" className="h-12 w-12" fill="none">
    <circle cx="22" cy="22" r="12" stroke="rgba(245,158,11,0.35)" strokeWidth="2" />
    <path d="M30 30 L38 38" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="18" cy="20" r="2" fill="#f59e0b" />
    <circle cx="26" cy="18" r="2" fill="rgba(245,158,11,0.5)" />
    <circle cx="22" cy="26" r="2" fill="rgba(245,158,11,0.5)" />
  </svg>,
  // Diagnosis
  <svg key="diagnosis" viewBox="0 0 48 48" className="h-12 w-12" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="4" stroke="rgba(245,158,11,0.35)" strokeWidth="2" />
    <path d="M10 32 L18 24 L26 28 L34 16" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
    <circle cx="34" cy="16" r="2.5" fill="#f59e0b" />
  </svg>,
  // Roadmap
  <svg key="roadmap" viewBox="0 0 48 48" className="h-12 w-12" fill="none">
    <path d="M8 36 H40" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="36" r="4" fill="#0f1c30" stroke="#f59e0b" strokeWidth="2" />
    <circle cx="24" cy="36" r="4" fill="#0f1c30" stroke="#f59e0b" strokeWidth="2" />
    <circle cx="36" cy="36" r="4" fill="#f59e0b" />
    <path d="M12 36 V20 M24 36 V14 M36 36 V22" stroke="rgba(245,158,11,0.45)" strokeWidth="2" />
  </svg>,
  // Partnership
  <svg key="partnership" viewBox="0 0 48 48" className="h-12 w-12" fill="none">
    <circle cx="16" cy="24" r="8" stroke="#f59e0b" strokeWidth="2" />
    <circle cx="32" cy="24" r="8" stroke="rgba(245,158,11,0.45)" strokeWidth="2" />
    <path d="M24 24 H24" stroke="#f59e0b" strokeWidth="2" />
    <path
      d="M8 34 Q16 28 24 30 Q32 28 40 34"
      stroke="rgba(245,158,11,0.35)"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>,
] as const;

export function ProcessStepVisual({ index }: { index: number }) {
  return (
    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/5">
      {processVisuals[index] ?? processVisuals[0]}
    </div>
  );
}

export function ProcessSectionVisual({ className = "" }: VisualProps) {
  return (
    <div
      className={`pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 opacity-40 xl:block ${className}`}
      aria-hidden
    >
      <svg viewBox="0 0 280 280" width="280" height="280" fill="none">
        <circle cx="140" cy="140" r="120" stroke="rgba(245,158,11,0.08)" strokeWidth="1" />
        <circle cx="140" cy="140" r="80" stroke="rgba(245,158,11,0.12)" strokeWidth="1" />
        <circle cx="140" cy="140" r="40" stroke="rgba(245,158,11,0.18)" strokeWidth="1" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const x = 140 + Math.cos(rad) * 100;
          const y = 140 + Math.sin(rad) * 100;
          return (
            <line
              key={deg}
              x1="140"
              y1="140"
              x2={x}
              y2={y}
              stroke="rgba(245,158,11,0.15)"
              strokeWidth="1"
            />
          );
        })}
        <g className="hag-animate-spin-slow" style={{ transformOrigin: "140px 140px" }}>
          <path
            d="M40 200 Q140 80 240 120"
            stroke="#f59e0b"
            strokeWidth="2"
            strokeOpacity="0.35"
            strokeDasharray="6 6"
          />
        </g>
      </svg>
    </div>
  );
}

export function OutcomesSectionAccent({ className = "" }: VisualProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <svg
        className="absolute -right-16 top-8 h-48 w-48 opacity-20"
        viewBox="0 0 200 200"
        fill="none"
      >
        <rect x="20" y="20" width="160" height="160" rx="12" stroke="rgba(245,158,11,0.3)" />
        {[0, 1, 2, 3].map((i) => (
          <line
            key={i}
            x1="20"
            y1={60 + i * 30}
            x2="180"
            y2={60 + i * 30}
            stroke="rgba(255,255,255,0.06)"
          />
        ))}
        <path
          d="M30 140 L70 100 L110 115 L170 50"
          stroke="#f59e0b"
          strokeWidth="2"
          strokeOpacity="0.5"
        />
      </svg>
    </div>
  );
}
