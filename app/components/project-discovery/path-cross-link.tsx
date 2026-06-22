type PathCrossLinkProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export function PathCrossLink({ children, onClick }: PathCrossLinkProps) {
  return (
    <p className="text-center text-sm text-slate-500">
      <button
        type="button"
        onClick={onClick}
        className="text-slate-400 underline decoration-white/10 underline-offset-4 transition-colors hover:text-amber-200/90 hover:decoration-amber-500/30"
      >
        {children}
      </button>
    </p>
  );
}
