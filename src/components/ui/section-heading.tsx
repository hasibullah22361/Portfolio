type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="section-title mt-3 text-2xl font-bold sm:text-3xl lg:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300 font-normal">{description}</p> : null}
    </div>
  );
}