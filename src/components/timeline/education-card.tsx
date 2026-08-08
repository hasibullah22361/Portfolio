import Link from 'next/link';
import type { Education } from '@/types/education';

type EducationCardProps = {
  education: Education;
};

export function EducationCard({ education }: EducationCardProps) {
  const dateLabel =
    education.startDate === 'Planned' && education.endDate === 'Planned'
      ? 'Planned'
      : education.startDate === 'Not provided' && education.endDate === 'Not provided'
        ? 'Dates not provided'
        : `${education.startDate}${education.endDate ? ` - ${education.endDate}` : ''}`;

  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-[0_24px_80px_-24px_rgba(15,23,42,0.9)]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            {education.status}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">{education.degree}</h3>
          <p className="mt-1 text-sm text-slate-400">
            {education.institution}
            {education.field ? ` • ${education.field}` : ''}
          </p>
        </div>

        <div className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs uppercase tracking-[0.22em] text-slate-400">
          {dateLabel}
        </div>
      </div>

      {education.description ? <p className="mt-5 text-sm leading-7 text-slate-300">{education.description}</p> : null}

      {education.coursework && education.coursework.length > 0 ? (
        <div className="mt-5">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-400">
            Relevant coursework
          </p>
          <ul className="mt-3 space-y-3">
            {education.coursework.map((courseworkItem) => (
              <li
                key={courseworkItem}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-300"
              >
                {courseworkItem}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {education.achievements && education.achievements.length > 0 ? (
        <div className="mt-5">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-400">
            Achievements
          </p>
          <ul className="mt-3 space-y-3">
            {education.achievements.map((achievement) => (
              <li
                key={achievement}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-300"
              >
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {education.thesis ? (
        <div className="mt-5">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-400">Thesis</p>
          <p className="mt-3 text-sm leading-7 text-slate-300">{education.thesis}</p>
        </div>
      ) : null}

      {education.institutionUrl ? (
        <div className="mt-5">
          <Link
            href={education.institutionUrl}
            target="_blank"
            rel="noreferrer"
            className="portfolio-btn portfolio-btn-secondary gap-1.5 rounded-full px-4 py-1.5 text-xs"
          >
            Visit institution
          </Link>
        </div>
      ) : null}
    </article>
  );
}
