"use client";

import { useCallback, useState } from "react";

export function InsightShareToolbar({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);

  const shareLinkedIn = useCallback(() => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }, [url]);

  const shareX = useCallback(() => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }, [title, url]);

  const copyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  }, [url]);

  return (
    <aside
      className="hidden xl:block"
      aria-label="Share article"
    >
      <div className="sticky top-28 space-y-3">
        <p className="text-[10px] font-semibold tracking-[0.2em] text-slate-500 uppercase">
          Share
        </p>
        <button
          type="button"
          onClick={shareLinkedIn}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#0f1c30]/80 text-slate-400 transition-all hover:border-amber-500/30 hover:text-amber-200"
          aria-label="Share on LinkedIn"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </button>
        <button
          type="button"
          onClick={shareX}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#0f1c30]/80 text-slate-400 transition-all hover:border-amber-500/30 hover:text-amber-200"
          aria-label="Share on X"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </button>
        <button
          type="button"
          onClick={copyLink}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#0f1c30]/80 text-slate-400 transition-all hover:border-amber-500/30 hover:text-amber-200"
          aria-label={copied ? "Link copied" : "Copy link"}
        >
          {copied ? (
            <svg className="h-4 w-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>
      </div>
    </aside>
  );
}

export function InsightShareMobile({ title, url }: { title: string; url: string }) {
  return (
    <div className="mt-8 flex gap-3 xl:hidden" aria-label="Share article">
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-white/10 px-4 py-2 text-xs text-slate-400 hover:border-amber-500/30 hover:text-amber-200 transition-colors"
      >
        LinkedIn
      </a>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-white/10 px-4 py-2 text-xs text-slate-400 hover:border-amber-500/30 hover:text-amber-200 transition-colors"
      >
        Share
      </a>
    </div>
  );
}
