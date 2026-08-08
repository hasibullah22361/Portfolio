import type { ResearchInterest } from '@/types/research';

type ResearchInterestCardProps = {
  interest: ResearchInterest;
};

export function ResearchInterestCard({ interest }: ResearchInterestCardProps) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-white">{interest.name}</h3>
        {interest.featured ? (
          <span className="rounded-full border border-blue-500/40 bg-blue-500/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-blue-200">
            Featured
          </span>
        ) : null}
      </div>
      {interest.description ? <p className="mt-3 text-sm leading-7 text-slate-400">{interest.description}</p> : null}
    </article>
  );
}
