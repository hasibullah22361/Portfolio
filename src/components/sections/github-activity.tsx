import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Surface } from '@/components/ui/surface';
import { SectionHeading } from '@/components/ui/section-heading';
import { GithubIcon } from '@/components/ui/github-icon';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';

/**
 * Static contribution grid visualization.
 * This is a visual representation pattern — not live GitHub API data.
 * It conveys coding activity aesthetics without fabricating real commit counts.
 */
const WEEKS = 26;
const DAYS = 7;

// Deterministic "contribution" pattern for visual purposes
function getIntensity(week: number, day: number): number {
  const seed = (week * 7 + day * 13 + week * day) % 17;
  if (seed < 4) return 0;
  if (seed < 9) return 1;
  if (seed < 13) return 2;
  if (seed < 15) return 3;
  return 4;
}

const intensityClasses = [
  'bg-slate-800/60 dark:bg-slate-800/60',
  'bg-emerald-900/60',
  'bg-emerald-700/70',
  'bg-emerald-500/80',
  'bg-emerald-400',
];

const lightIntensityStyles = [
  { background: 'rgba(226,232,240,0.8)' },
  { background: 'rgba(167,243,208,0.6)' },
  { background: 'rgba(52,211,153,0.7)' },
  { background: 'rgba(16,185,129,0.85)' },
  { background: 'rgba(5,150,105,1)' },
];

export function GitHubActivitySection() {
  const featuredRepos = projects.filter((p) => p.githubUrl);

  return (
    <section aria-labelledby="github-activity-heading">
      <Surface>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <SectionHeading
            eyebrow="GitHub"
            title="GitHub Activity"
            description="Open-source projects and coding activity on GitHub."
          />
          <Link
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-btn portfolio-btn-secondary gap-2 rounded-full px-5 py-2.5 text-sm font-semibold shrink-0 self-start hover:text-cyan-400"
          >
            <GithubIcon className="h-4 w-4" />
            View GitHub Profile
            <ExternalLink className="h-3.5 w-3.5 opacity-60" />
          </Link>
        </div>

        {/* Contribution grid */}
        <div className="mt-6">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em]" style={{ color: 'var(--muted-text-color)' }}>
            Contribution Activity Visualization
          </p>
          <div
            className="overflow-x-auto pb-2"
            aria-label="Contribution activity visualization — decorative pattern, not live data"
            role="img"
          >
            <div className="flex gap-1" style={{ minWidth: `${WEEKS * 14}px` }}>
              {Array.from({ length: WEEKS }, (_, week) => (
                <div key={week} className="flex flex-col gap-1">
                  {Array.from({ length: DAYS }, (_, day) => {
                    const intensity = getIntensity(week, day);
                    return (
                      <div
                        key={day}
                        className={`h-3 w-3 rounded-sm ${intensityClasses[intensity]}`}
                        style={lightIntensityStyles[intensity]}
                        aria-hidden="true"
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
          <p className="mt-2 text-xs italic" style={{ color: 'var(--muted-text-color)' }}>
            Visual pattern only — not live GitHub data. Visit the GitHub profile for actual contribution history.
          </p>
        </div>

        {/* Featured repos */}
        {featuredRepos.length > 0 && (
          <div className="mt-8">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--muted-text-color)' }}>
              Featured Repositories
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featuredRepos.map((project) => (
                <a
                  key={project.id}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card-interactive group rounded-2xl p-4 flex flex-col gap-3"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <GithubIcon className="h-4 w-4 shrink-0 text-cyan-400" />
                      <span className="text-sm font-bold truncate group-hover:text-cyan-400 transition-colors" style={{ color: 'var(--heading-color)' }}>
                        {project.title}
                      </span>
                    </div>
                    <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--muted-text-color)' }} />
                  </div>
                  <p className="text-xs leading-relaxed line-clamp-2" style={{ color: 'var(--body-text-color)' }}>
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full px-2.5 py-0.5 text-xs font-medium"
                        style={{ background: 'var(--surface-bg)', border: '1px solid var(--surface-border)', color: 'var(--body-text-color)' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </Surface>
    </section>
  );
}
