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
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 shadow-[0_24px_80px_-24px_rgba(15,23,42,0.9)] transition-all duration-200 hover:-translate-y-1 hover:border-slate-700">
      {coverImage ? (
        <div className="relative aspect-[16/10] shrink-0">
          <Image src={coverImage.src} alt={coverImage.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
      ) : (
        <div className="flex aspect-[16/10] shrink-0 items-center justify-center bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.2),transparent_35%),linear-gradient(180deg,rgba(15,23,42,1),rgba(2,6,23,1))]">
          <span className="text-sm uppercase tracking-[0.3em] text-slate-500">No preview</span>
        </div>
      )}

      <div className="flex flex-1 flex-col justify-between space-y-4 p-6">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.24em] text-slate-500">
            <span className="rounded-full border border-slate-700 px-2.5 py-1 text-slate-300">{project.category}</span>
            <span className={cn('rounded-full border px-2.5 py-1', project.status === 'Completed' ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200' : 'border-amber-500/40 bg-amber-500/10 text-amber-200')}>
              {project.status}
            </span>
            {project.featured ? <span className="rounded-full border border-blue-500/40 bg-blue-500/10 px-2.5 py-1 text-blue-200">Featured</span> : null}
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-400">{project.shortDescription}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((technology) => (
              <span key={technology} className="rounded-full border border-slate-700 bg-slate-950/70 px-2.5 py-1 text-xs text-slate-300">
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-2.5 border-t border-slate-800/80 pt-4">
          <Link href={`/projects/${project.slug}`} className="portfolio-btn portfolio-btn-secondary gap-1.5 rounded-full px-3.5 py-2 text-xs font-medium">
            <span>View case study</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-btn portfolio-btn-cyan gap-1.5 rounded-full px-3.5 py-2 text-xs font-medium"
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
                className="portfolio-btn portfolio-btn-secondary gap-1.5 rounded-full px-3.5 py-2 text-xs font-medium"
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