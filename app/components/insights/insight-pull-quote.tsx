export function InsightPullQuote({ quote }: { quote: string }) {
  return (
    <figure className="my-12 border-y border-amber-500/20 py-10">
      <blockquote>
        <p className="text-center text-xl font-medium leading-relaxed text-amber-100/90 sm:text-2xl sm:leading-relaxed">
          &ldquo;{quote}&rdquo;
        </p>
      </blockquote>
    </figure>
  );
}
