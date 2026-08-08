import type { Certification } from '@/types/certification';
import { ExternalLink, FileText, Award, Calendar, BadgeCheck, Briefcase, Star } from 'lucide-react';
import Image from 'next/image';

type CertificationCardProps = {
  certification: Certification;
};

export function CertificationCard({ certification }: CertificationCardProps) {
  const isPdf = certification.certificateUrl?.toLowerCase().endsWith('.pdf') ?? false;

  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition hover:border-slate-700 hover:bg-slate-900/90">
      <div>
        {/* Thumbnail Preview Area */}
        {certification.image ? (
          <div className="relative mb-4 aspect-[16/9] w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
            {isPdf ? (
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-4 text-center">
                <FileText className="h-10 w-10 text-cyan-400 opacity-90 transition group-hover:scale-110" />
                <span className="text-xs font-semibold text-slate-300">PDF Document</span>
                <span className="truncate text-[10px] text-slate-500 max-w-[90%]">
                  {certification.title}
                </span>
              </div>
            ) : (
              <Image
                src={certification.image}
                alt={certification.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
            )}
          </div>
        ) : null}

        {/* Title + Provider */}
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 shrink-0 text-cyan-400" />
              <h3 className="text-base font-semibold text-white">{certification.title}</h3>
            </div>
            <p className="mt-1 text-sm text-slate-300">{certification.provider}</p>
          </div>
          {certification.workMode ? (
            <span className="flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-950/70 px-3 py-1 text-xs uppercase tracking-[0.15em] text-slate-300">
              <Briefcase className="h-3 w-3 text-cyan-400" />
              {certification.workMode}
            </span>
          ) : null}
        </div>

        {/* Duration */}
        {certification.duration ? (
          <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-400">
            <Calendar className="h-3.5 w-3.5 text-cyan-400/70 shrink-0" />
            <span>{certification.duration}</span>
          </div>
        ) : null}

        {/* Credential type */}
        {certification.credential ? (
          <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
            <BadgeCheck className="h-3.5 w-3.5 text-cyan-400/70 shrink-0" />
            <span>{certification.credential}</span>
          </div>
        ) : null}

        {/* Description */}
        {certification.description ? (
          <p className="mt-3 text-sm leading-6 text-slate-400">{certification.description}</p>
        ) : null}

        {/* Skills */}
        {certification.skills && certification.skills.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {certification.skills.map((skill) => (
              <li
                key={`${certification.title}-${skill}`}
                className="rounded-full border border-slate-700/80 bg-slate-950/70 px-2.5 py-0.5 text-xs text-slate-300"
              >
                {skill}
              </li>
            ))}
          </ul>
        ) : null}

        {/* Achievement */}
        {certification.achievement ? (
          <div className="mt-4 flex gap-2 rounded-xl border border-cyan-900/40 bg-cyan-950/20 p-3">
            <Star className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-400" />
            <p className="text-xs leading-5 text-cyan-200">{certification.achievement}</p>
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
            className="portfolio-btn portfolio-btn-secondary gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium"
          >
            {isPdf ? 'View PDF Certificate' : 'View Certificate'}
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      ) : null}
    </article>
  );
}
