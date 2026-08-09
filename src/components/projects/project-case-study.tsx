import Image from 'next/image';
import { ExternalLink, ChevronRight } from 'lucide-react';
import type { Project } from '@/types/project';
import { Surface } from '@/components/ui/surface';
import { SectionHeading } from '@/components/ui/section-heading';
import { GithubIcon } from '@/components/ui/github-icon';

type ProjectCaseStudyProps = {
  project: Project;
};

/** Architecture Pipeline — visual left-to-right flow of system components */
function ArchitecturePipeline({ steps }: { steps: string[] }) {
  return (
    <div
      className="mt-4 flex flex-wrap items-center gap-2"
      role="list"
      aria-label="System architecture pipeline"
    >
      {steps.map((step, index) => (
        <div key={step} className="flex items-center gap-2" role="listitem">
          <div className="flex flex-col items-center gap-1.5">
            <div
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-bold"
              style={{
                background: 'rgba(6,182,212,0.1)',
                borderColor: 'rgba(6,182,212,0.35)',
                color: 'var(--heading-color)',
              }}
              aria-hidden="true"
            >
              {index + 1}
            </div>
            <span
              className="max-w-[100px] text-center text-[11px] font-medium leading-tight"
              style={{ color: 'var(--body-text-color)' }}
            >
              {step}
            </span>
          </div>
          {index < steps.length - 1 && (
            <ChevronRight
              className="mb-6 h-4 w-4 shrink-0 text-cyan-400/50"
              aria-hidden="true"
            />
          )}
        </div>
      ))}
    </div>
  );
}

/** Technology badge with consistent theming */
function TechBadge({ name }: { name: string }) {
  return (
    <span
      className="inline-flex items-center rounded-full border px-3.5 py-1.5 text-sm font-medium"
      style={{
        borderColor: 'rgba(6,182,212,0.25)',
        background: 'rgba(6,182,212,0.06)',
        color: 'var(--body-text-color)',
      }}
    >
      {name}
    </span>
  );
}

/** Generic list item */
function ListItem({ text }: { text: string }) {
  return (
    <li
      className="rounded-2xl border p-4 text-sm leading-relaxed"
      style={{
        borderColor: 'var(--surface-border)',
        background: 'var(--body-bg)',
        color: 'var(--body-text-color)',
      }}
    >
      {text}
    </li>
  );
}

function EmptyMessage({ label }: { label: string }) {
  return (
    <p className="mt-3 text-sm leading-7" style={{ color: 'var(--muted-text-color)' }}>
      {label} are not yet available for this project.
    </p>
  );
}

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const coverImage = project.images?.[0];

  return (
    <div className="space-y-8">
      {/* ── Hero header ── */}
      <Surface>
        <div className="space-y-4">
          <p
            className="text-xs font-bold uppercase tracking-[0.3em]"
            style={{ color: 'var(--accent-color, #06b6d4)' }}
          >
            Case Study
          </p>
          <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl" style={{ color: 'var(--heading-color)' }}>
            {project.title}
          </h1>
          <p className="max-w-3xl text-base leading-7" style={{ color: 'var(--body-text-color)' }}>
            {project.shortDescription}
          </p>

          {/* Quick info badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            <span
              className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em]"
              style={{ borderColor: 'rgba(6,182,212,0.3)', background: 'rgba(6,182,212,0.08)', color: '#06b6d4' }}
            >
              {project.category}
            </span>
            <span
              className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] ${
                project.status === 'Completed'
                  ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                  : 'border-amber-500/30 bg-amber-500/10 text-amber-400'
              }`}
            >
              {project.status}
            </span>
            {project.date && (
              <span
                className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em]"
                style={{ borderColor: 'var(--surface-border)', background: 'var(--surface-bg)', color: 'var(--body-text-color)' }}
              >
                {project.date}
              </span>
            )}
          </div>
        </div>
      </Surface>

      {/* ── Cover image ── */}
      {coverImage && (
        <Surface className="overflow-hidden p-0">
          <div className="relative aspect-[16/9]">
            <Image
              src={coverImage.src}
              alt={coverImage.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
          </div>
        </Surface>
      )}

      {/* ── Overview ── */}
      <Surface className="portfolio-surface-soft">
        <SectionHeading eyebrow="Overview" title="What this project does" />
        <p className="mt-3 text-sm leading-7" style={{ color: 'var(--body-text-color)' }}>
          {project.description ?? project.shortDescription}
        </p>
      </Surface>

      {/* ── Problem / Solution ── */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Surface className="portfolio-surface-soft">
          <SectionHeading eyebrow="Problem" title="The challenge" />
          <p className="mt-3 text-sm leading-7" style={{ color: 'var(--body-text-color)' }}>
            {project.problem ?? 'Problem details are not yet available.'}
          </p>
        </Surface>

        <Surface className="portfolio-surface-soft">
          <SectionHeading eyebrow="Solution" title="How it was approached" />
          <p className="mt-3 text-sm leading-7" style={{ color: 'var(--body-text-color)' }}>
            {project.solution ?? 'Solution details are not yet available.'}
          </p>
        </Surface>
      </div>

      {/* ── Architecture ── */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Surface className="portfolio-surface-soft">
          <SectionHeading eyebrow="Architecture" title="System architecture" />
          {project.architecture && project.architecture.length > 0 ? (
            <>
              <ArchitecturePipeline steps={project.architecture} />
              <p className="sr-only">
                System architecture pipeline: {project.architecture.join(' → ')}
              </p>
            </>
          ) : (
            <EmptyMessage label="Architecture details" />
          )}
        </Surface>

        <Surface className="portfolio-surface-soft">
          <SectionHeading eyebrow="Technologies" title="Tools and stack" />
          {project.technologies.length > 0 ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <TechBadge key={tech} name={tech} />
              ))}
            </div>
          ) : (
            <EmptyMessage label="Technology details" />
          )}
        </Surface>
      </div>

      {/* ── Key Features ── */}
      <Surface className="portfolio-surface-soft">
        <SectionHeading eyebrow="Features" title="Key capabilities" />
        {project.features.length > 0 ? (
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature) => (
              <ListItem key={feature} text={feature} />
            ))}
          </ul>
        ) : (
          <EmptyMessage label="Feature details" />
        )}
      </Surface>

      {/* ── Development process ── */}
      {project.developmentProcess && project.developmentProcess.length > 0 && (
        <Surface className="portfolio-surface-soft">
          <SectionHeading eyebrow="Development Process" title="How the project was built" />
          <ol className="mt-4 space-y-3">
            {project.developmentProcess.map((step, index) => (
              <li
                key={step}
                className="flex gap-3 rounded-2xl border p-4 text-sm"
                style={{
                  borderColor: 'var(--surface-border)',
                  background: 'var(--body-bg)',
                  color: 'var(--body-text-color)',
                }}
              >
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-bold"
                  style={{
                    borderColor: 'rgba(6,182,212,0.3)',
                    background: 'rgba(6,182,212,0.08)',
                    color: '#06b6d4',
                  }}
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </Surface>
      )}

      {/* ── Challenges / Results ── */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Surface className="portfolio-surface-soft">
          <SectionHeading eyebrow="Challenges" title="Development challenges" />
          {project.challenges && project.challenges.length > 0 ? (
            <ul className="mt-4 space-y-3">
              {project.challenges.map((c) => <ListItem key={c} text={c} />)}
            </ul>
          ) : (
            <EmptyMessage label="Challenge details" />
          )}
        </Surface>

        <Surface className="portfolio-surface-soft">
          <SectionHeading eyebrow="Results" title="Outcome" />
          {project.results && project.results.length > 0 ? (
            <ul className="mt-4 space-y-3">
              {project.results.map((r) => <ListItem key={r} text={r} />)}
            </ul>
          ) : (
            <EmptyMessage label="Result details" />
          )}
        </Surface>
      </div>

      {/* ── Screenshots ── */}
      {project.images && project.images.length > 0 && (
        <Surface className="portfolio-surface-soft">
          <SectionHeading eyebrow="Screenshots" title="Visual reference" />
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {project.images.map((image) => (
              <div
                key={image.src}
                className="overflow-hidden rounded-2xl border"
                style={{ borderColor: 'var(--surface-border)' }}
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <p
                  className="border-t px-4 py-3 text-xs uppercase tracking-[0.2em]"
                  style={{ borderColor: 'var(--surface-border)', color: 'var(--muted-text-color)' }}
                >
                  {image.alt}
                </p>
              </div>
            ))}
          </div>
        </Surface>
      )}

      {/* ── Future Improvements / Links ── */}
      <div className="grid gap-6 lg:grid-cols-2">
        {project.futureImprovements && project.futureImprovements.length > 0 && (
          <Surface className="portfolio-surface-soft">
            <SectionHeading eyebrow="Future Improvements" title="What comes next" />
            <ul className="mt-4 space-y-3">
              {project.futureImprovements.map((item) => <ListItem key={item} text={item} />)}
            </ul>
          </Surface>
        )}

        <Surface className="portfolio-surface-soft">
          <SectionHeading eyebrow="Links" title="Project references" />
          <div className="mt-4 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-btn portfolio-btn-cyan gap-2 rounded-full px-4 py-2 text-sm font-semibold"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-btn portfolio-btn-secondary gap-2 rounded-full px-4 py-2 text-sm font-semibold hover:text-cyan-400"
              >
                <GithubIcon className="h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
            )}
            {!project.githubUrl && !project.liveUrl && (
              <p className="text-sm" style={{ color: 'var(--muted-text-color)' }}>
                No public links are available for this project yet.
              </p>
            )}
          </div>
        </Surface>
      </div>
    </div>
  );
}