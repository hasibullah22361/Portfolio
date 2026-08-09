import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, ArrowRight } from 'lucide-react';
import type { Project } from '@/types/project';
import { cn } from '@/lib/cn';
import { GithubIcon } from '@/components/ui/github-icon';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const coverImage = project.images?.[0];

  return (
    <article className="glass-card-interactive group flex h-full flex-col overflow-hidden rounded-3xl p-0">
      {coverImage ? (
        <div className="relative aspect-[16/10] shrink-0 overflow-hidden">
          <Image
            src={coverImage.src}
            alt={coverImage.alt}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        </div>
      ) : (
        <div className="flex aspect-[16/10] shrink-0 items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">No preview</span>
        </div>
      )}

      <div className="flex flex-1 flex-col justify-between space-y-4 p-6">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em]">
            <span
              className="rounded-full border px-3 py-1 backdrop-blur-md"
              style={{
                borderColor: 'var(--surface-border)',
                background: 'var(--surface-bg)',
                color: 'var(--body-text-color)',
              }}
            >
              {project.category}
            </span>
            <span
              className={cn(
                'rounded-full border px-3 py-1 backdrop-blur-md',
                project.status === 'Completed'
                  ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.15)]'
                  : 'border-amber-500/40 bg-amber-500/10 text-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.15)]',
              )}
            >
              {project.status}
            </span>
            {project.featured ? (
              <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                Featured
              </span>
            ) : null}
          </div>

          <div>
            <h3
              className="text-xl font-bold transition-colors group-hover:text-cyan-400"
              style={{ color: 'var(--heading-color)' }}
            >
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--body-text-color)' }}>
              {project.shortDescription}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((technology) => (
              <span
                key={technology}
                className="rounded-full border px-3 py-1 text-xs font-medium"
                style={{
                  borderColor: 'var(--surface-border)',
                  background: 'var(--body-bg)',
                  color: 'var(--body-text-color)',
                }}
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div
          className="mt-auto flex flex-wrap items-center justify-between gap-2.5 border-t pt-4"
          style={{ borderColor: 'var(--surface-border)' }}
        >
          <Link
            href={`/projects/${project.slug}`}
            className="portfolio-btn portfolio-btn-secondary gap-1.5 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider"
          >
            <span>Case Study</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-btn portfolio-btn-cyan gap-1.5 rounded-full px-3.5 py-2 text-xs font-semibold uppercase tracking-wider"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span>Live Demo</span>
              </a>
            ) : null}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-btn portfolio-btn-secondary gap-1.5 rounded-full px-3.5 py-2 text-xs font-semibold uppercase tracking-wider"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                <span>GitHub</span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}