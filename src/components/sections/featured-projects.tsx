'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, ArrowRight, Star, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GithubIcon } from '@/components/ui/github-icon';
import { projects } from '@/data/projects';
import type { Project } from '@/types/project';

const categoryColors: Record<string, { badge: string; glow: string; border: string; gradient: string }> = {
  'AI':             { badge: 'bg-violet-500/15 text-violet-400 border-violet-500/30', glow: 'group-hover:shadow-[0_0_50px_rgba(139,92,246,0.15)]', border: 'border-violet-500/20', gradient: 'from-violet-500/10 via-transparent to-transparent' },
  'Computer Vision':{ badge: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',     glow: 'group-hover:shadow-[0_0_50px_rgba(6,182,212,0.15)]',    border: 'border-cyan-500/20',   gradient: 'from-cyan-500/10 via-transparent to-transparent' },
  'Data Science':   { badge: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30', glow: 'group-hover:shadow-[0_0_50px_rgba(16,185,129,0.15)]', border: 'border-emerald-500/20', gradient: 'from-emerald-500/10 via-transparent to-transparent' },
  'Mobile':         { badge: 'bg-orange-500/15 text-orange-400 border-orange-500/30', glow: 'group-hover:shadow-[0_0_50px_rgba(249,115,22,0.15)]',  border: 'border-orange-500/20', gradient: 'from-orange-500/10 via-transparent to-transparent' },
  'Web':            { badge: 'bg-blue-500/15 text-blue-400 border-blue-500/30',      glow: 'group-hover:shadow-[0_0_50px_rgba(59,130,246,0.15)]',  border: 'border-blue-500/20',   gradient: 'from-blue-500/10 via-transparent to-transparent' },
};

const defaultColor = { badge: 'bg-slate-500/15 text-slate-400 border-slate-500/30', glow: '', border: 'border-slate-700/30', gradient: 'from-slate-500/10 via-transparent to-transparent' };

function FeaturedProjectCard({ project, index }: { project: Project; index: number }) {
  const coverImage = project.images?.[0];
  const colors = categoryColors[project.category] ?? defaultColor;
  const isFirst = index === 0;

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-3xl border transition-all duration-500 ${colors.glow} ${colors.border}`}
      style={{ background: 'var(--surface-bg)' }}
    >
      {/* Gradient accent top bar */}
      <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${colors.gradient}`} aria-hidden="true" />

      {/* Cover image */}
      {coverImage ? (
        <div className={`relative shrink-0 overflow-hidden ${isFirst ? 'aspect-[16/8]' : 'aspect-[16/9]'}`}>
          <Image
            src={coverImage.src}
            alt={coverImage.alt}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
            priority={isFirst}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* Badges over image */}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] backdrop-blur-md ${colors.badge}`}>
              <Star className="h-3 w-3 fill-current" aria-hidden="true" />
              Featured
            </span>
            <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] backdrop-blur-md ${colors.badge}`}>
              {project.category}
            </span>
          </div>
        </div>
      ) : (
        <div className="flex aspect-[16/9] shrink-0 items-center justify-center rounded-t-3xl bg-gradient-to-br from-slate-900 to-slate-950">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">No preview</span>
        </div>
      )}

      {/* Content */}
      <div className="flex flex-1 flex-col gap-5 p-6 sm:p-8">
        {/* Title */}
        <div>
          <h3
            className="text-xl font-extrabold leading-tight transition-colors duration-300 group-hover:text-cyan-400 sm:text-2xl"
            style={{ color: 'var(--heading-color)' }}
          >
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--body-text-color)' }}>
            {project.shortDescription}
          </p>
        </div>

        {/* Problem / Solution */}
        {(project.problem || project.solution) && (
          <div className="grid gap-4 sm:grid-cols-2">
            {project.problem && (
              <div className="rounded-2xl p-4" style={{ border: '1px solid var(--surface-border)', background: 'var(--body-bg)' }}>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: 'var(--muted-text-color)' }}>
                  Problem
                </p>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--body-text-color)' }}>
                  {project.problem}
                </p>
              </div>
            )}
            {project.solution && (
              <div className="rounded-2xl p-4" style={{ border: '1px solid var(--surface-border)', background: 'var(--body-bg)' }}>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: 'var(--muted-text-color)' }}>
                  Solution
                </p>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--body-text-color)' }}>
                  {project.solution}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Key features */}
        {project.features && project.features.length > 0 && (
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: 'var(--muted-text-color)' }}>
              Key Features
            </p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {project.features.slice(0, 6).map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-xs" style={{ color: 'var(--body-text-color)' }}>
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-400" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border px-3 py-1 text-xs font-medium"
              style={{
                borderColor: 'var(--surface-border)',
                background: 'var(--body-bg)',
                color: 'var(--body-text-color)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div
          className="mt-auto flex flex-wrap items-center gap-3 border-t pt-5"
          style={{ borderColor: 'var(--surface-border)' }}
        >
          {/* View Case Study — primary action */}
          <Link
            href={`/projects/${project.slug}`}
            className="portfolio-btn portfolio-btn-primary inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider"
          >
            <span>View Case Study</span>
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-btn portfolio-btn-cyan inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold uppercase tracking-wider"
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              Live Demo
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-btn portfolio-btn-secondary inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold uppercase tracking-wider hover:text-cyan-400"
            >
              <GithubIcon className="h-3.5 w-3.5" aria-hidden="true" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function FeaturedProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section className="space-y-6" aria-label="Featured projects">
      {/* Large first featured project */}
      {featuredProjects.length > 0 && (
        <FeaturedProjectCard project={featuredProjects[0]} index={0} />
      )}

      {/* Remaining featured projects in 2-col grid */}
      {featuredProjects.length > 1 && (
        <div className="grid gap-6 lg:grid-cols-2">
          {featuredProjects.slice(1).map((project, i) => (
            <FeaturedProjectCard key={project.id} project={project} index={i + 1} />
          ))}
        </div>
      )}

      <div className="flex justify-center pt-2">
        <Button href="/projects" variant="secondary">
          View all projects
        </Button>
      </div>
    </section>
  );
}
