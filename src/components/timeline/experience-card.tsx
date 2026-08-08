import Link from 'next/link';
import type { Experience } from '@/types/experience';

type ExperienceCardProps = {
  experience: Experience;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const dateLabel =
    experience.startDate === 'Not provided' && experience.endDate === 'Not provided'
      ? 'Dates not provided'
      : `${experience.startDate}${experience.endDate ? ` – ${experience.endDate}` : ''}`;

  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-[0_24px_80px_-24px_rgba(15,23,42,0.9)]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            {experience.current ? 'Current' : 'Past'} experience
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">{experience.role}</h3>
          <p className="mt-1 text-sm text-slate-400">
            {experience.company} {experience.location ? `• ${experience.location}` : ''}
          </p>
        </div>

        <div className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs uppercase tracking-[0.22em] text-slate-400">
          {dateLabel}
        </div>
      </div>

      <p className="mt-5 text-sm leading-7 text-slate-300">{experience.description}</p>

      {experience.responsibilities && experience.responsibilities.length > 0 ? (
        <div className="mt-5">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-400">
            Responsibilities
          </p>
          <ul className="mt-3 space-y-3">
            {experience.responsibilities.map((responsibility) => (
              <li
                key={responsibility}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-300"
              >
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {experience.technologies && experience.technologies.length > 0 ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {experience.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs text-slate-300"
            >
              {technology}
            </span>
          ))}
        </div>
      ) : null}

      {experience.achievements && experience.achievements.length > 0 ? (
        <div className="mt-5">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-400">
            Achievements
          </p>
          <ul className="mt-3 space-y-3">
            {experience.achievements.map((achievement) => (
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

      {experience.companyUrl ? (
        <div className="mt-5">
          <Link
            href={experience.companyUrl}
            target="_blank"
            rel="noreferrer"
            className="portfolio-btn portfolio-btn-secondary gap-1.5 rounded-full px-4 py-1.5 text-xs"
          >
            Visit company
          </Link>
        </div>
      ) : null}
    </article>
  );
}
