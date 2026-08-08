type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="section-title mt-3 text-2xl font-semibold sm:text-3xl">{title}</h2>
      {description ? <p className="mt-3 text-sm leading-7 text-slate-400">{description}</p> : null}
    </div>
  );
}