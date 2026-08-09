import Link from 'next/link';
import { Briefcase, Calendar, Building2, CheckCircle2 } from 'lucide-react';
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
    <article className="glass-card rounded-3xl p-6 sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.15)]">
            <Briefcase className="h-3.5 w-3.5 text-cyan-400" />
            {experience.current ? 'Current Role' : 'Experience'}
          </span>
          <h3 className="mt-3 text-2xl font-bold text-white">{experience.role}</h3>
          <p className="mt-1 text-sm font-medium text-slate-400 flex items-center gap-2">
            <Building2 className="h-4 w-4 text-cyan-400" />
            {experience.company} {experience.location ? `• ${experience.location}` : ''}
          </p>
        </div>

        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-950/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-300 backdrop-blur-md shadow-sm">
          <Calendar className="h-3.5 w-3.5 text-cyan-400" />
          {dateLabel}
        </div>
      </div>

      <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-300">{experience.description}</p>

      {experience.responsibilities && experience.responsibilities.length > 0 ? (
        <div className="mt-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            Key Responsibilities
          </p>
          <ul className="mt-3 space-y-2.5">
            {experience.responsibilities.map((responsibility) => (
              <li
                key={responsibility}
                className="flex items-start gap-3 rounded-2xl border border-slate-800/80 bg-slate-950/50 p-3.5 text-sm text-slate-300"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-400 mt-0.5" />
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {experience.technologies && experience.technologies.length > 0 ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {experience.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-slate-800/90 bg-slate-950/80 px-3 py-1 text-xs text-slate-300 font-medium"
            >
              {technology}
            </span>
          ))}
        </div>
      ) : null}

      {experience.achievements && experience.achievements.length > 0 ? (
        <div className="mt-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            Key Achievements
          </p>
          <ul className="mt-3 space-y-2.5">
            {experience.achievements.map((achievement) => (
              <li
                key={achievement}
                className="flex items-start gap-3 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-3.5 text-sm text-slate-200"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-400 mt-0.5" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {experience.companyUrl ? (
        <div className="mt-6">
          <Link
            href={experience.companyUrl}
            target="_blank"
            rel="noreferrer"
            className="portfolio-btn portfolio-btn-secondary gap-1.5 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider"
          >
            Visit company
          </Link>
        </div>
      ) : null}
    </article>
  );
}

