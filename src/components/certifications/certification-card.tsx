import type { Certification } from '@/types/certification';
import { ExternalLink, FileText, Award, Calendar, BadgeCheck, Briefcase, Star } from 'lucide-react';
import Image from 'next/image';

type CertificationCardProps = {
  certification: Certification;
};

export function CertificationCard({ certification }: CertificationCardProps) {
  const isPdf = certification.certificateUrl?.toLowerCase().endsWith('.pdf') ?? false;

  return (
    <article className="glass-card-interactive group flex flex-col justify-between overflow-hidden rounded-3xl p-6">
      <div>
        {/* Thumbnail Preview Area */}
        {certification.image ? (
          <div className="relative mb-5 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-950">
            {isPdf ? (
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-4 text-center">
                <FileText className="h-10 w-10 text-cyan-400 opacity-90 transition group-hover:scale-110" />
                <span className="text-xs font-semibold text-slate-300">PDF Document</span>
                <span className="truncate text-[10px] text-slate-400 max-w-[90%] font-mono">
                  {certification.title}
                </span>
              </div>
            ) : (
              <Image
                src={certification.image}
                alt={certification.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            )}
          </div>
        ) : null}

        {/* Title + Provider */}
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 shrink-0 text-cyan-400" />
              <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">{certification.title}</h3>
            </div>
            <p className="mt-1 text-sm text-slate-300 font-medium">{certification.provider}</p>
          </div>
          {certification.workMode ? (
            <span className="flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-950/80 px-3 py-1 text-xs uppercase tracking-wider text-slate-300">
              <Briefcase className="h-3 w-3 text-cyan-400" />
              {certification.workMode}
            </span>
          ) : null}
        </div>

        {/* Duration */}
        {certification.duration ? (
          <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-400 font-medium">
            <Calendar className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
            <span>{certification.duration}</span>
          </div>
        ) : null}

        {/* Credential type */}
        {certification.credential ? (
          <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-400 font-medium">
            <BadgeCheck className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
            <span>{certification.credential}</span>
          </div>
        ) : null}

        {/* Description */}
        {certification.description ? (
          <p className="mt-3 text-sm leading-relaxed text-slate-300">{certification.description}</p>
        ) : null}

        {/* Skills */}
        {certification.skills && certification.skills.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {certification.skills.map((skill) => (
              <li
                key={`${certification.title}-${skill}`}
                className="rounded-full border border-slate-800/90 bg-slate-950/80 px-2.5 py-0.5 text-xs text-slate-300 font-medium"
              >
                {skill}
              </li>
            ))}
          </ul>
        ) : null}

        {/* Achievement */}
        {certification.achievement ? (
          <div className="mt-4 flex gap-2 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-3.5 shadow-[0_0_12px_rgba(6,182,212,0.1)]">
            <Star className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
            <p className="text-xs leading-relaxed text-cyan-200 font-medium">{certification.achievement}</p>
          </div>
        ) : null}
      </div>

      {/* View Certificate Button */}
      {certification.certificateUrl ? (
        <div className="mt-5 border-t border-slate-800/80 pt-4">
          <a
            href={certification.certificateUrl}
            target="_blank"
            rel="noreferrer"
            className="portfolio-btn portfolio-btn-secondary gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider"
          >
            {isPdf ? 'View PDF Certificate' : 'View Certificate'}
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      ) : null}
    </article>
  );
}

